export const runtime = "nodejs";

import { NextResponse } from "next/server";
import api from "@/app/api/api"; // ton axios

// Mélange Fisher–Yates
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Filtrage min/max et dédoublonnage
function filterAndClean(tracks, minRank, maxRank) {
    const seen = new Set();
    const result = [];
    for (const t of tracks) {
        if (
            t?.id &&
            !seen.has(t.id) &&
            Number(t.rank) >= minRank &&
            Number(t.rank) <= maxRank
        ) {
            seen.add(t.id);
            result.push(t);
        }
    }
    return result;
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const mode = searchParams.get("mode") ?? "search"; // search | genre | playlist
    const query = searchParams.get("q") ?? ""; // mot-clé pour search ou playlist
    const genreIdsParam = searchParams.get("q"); // ex: "129,152"
    // Genres -> 0: All, 132: Pop, 116: Rap/Hip Hop, 152: Rock, 165: R&B, 85: Alternative, 106: Electro, 466: Folk,
    // 144: Reggae, 129: Jazz, 84: Country, 52: French Chanson, 98: Classical, 173: Film/Games, 464: Metal,
    // 169: Soul & Funk, 2: African Music, 12: Arabic Music, 16: Asian Music, 153: Blues, 75: Brazilian Music,
    // 81: Indian Music, 95: Kids, 197: Latin Music
    const minRank = Number(searchParams.get("minRank") ?? 0);
    const maxRank = Number(searchParams.get("maxRank") ?? 1000000);
    const limit = Number(searchParams.get("limit") ?? 10);
    const artistsLimit = Number(searchParams.get("artistsLimit") ?? 200);
    const tracksPerArtist = Number(searchParams.get("tracksPerArtist") ?? 40);

    try {
        let tracks = [];

        if (mode === "search") {
            // recherche par mot-clé
            const res = await api.get("/search", { params: { q: query, limit: 50 } });
            tracks = res.data?.data ?? [];
        }

        else if (mode === "genre") {
            if (!genreIdsParam) {
                return NextResponse.json(
                    { error: "Paramètre 'q' requis pour le mode genre" },
                    { status: 400 }
                );
            }

            const q = genreIdsParam.split(",").map((id) => id.trim());

            for (const genreId of q) {
                // récupérer les artistes du genre
                const artistsRes = await api.get(`/genre/${genreId}/artists`, {
                    params: { limit: artistsLimit },
                });

                for (const artist of artistsRes.data.data) {
                    const topRes = await api.get(`/artist/${artist.id}/top`, {
                        params: { limit: tracksPerArtist },
                    });
                    tracks.push(...(topRes.data.data ?? []));
                }
            }
        }

        else if (mode === "playlist") {
            const playlistId = searchParams.get("q"); // si on donne un id direct
            let playlist = null;

            if (!playlistId) {
                return NextResponse.json(
                    { error: `Playlist '${playlistId || query}' introuvable` },
                    { status: 404 }
                );
            } else {
                const plRes = await api.get(`/playlist/${playlistId}`);
                playlist = plRes.data;
            }

            // récupérer les tracks
            const tracksRes = await api.get(`/playlist/${playlist.id}`, {
                params: { limit: 100 },
            });
            tracks = tracksRes.data?.tracks?.data ?? [];
        }

        // pipeline commun
        let finalTracks = filterAndClean(tracks, minRank, maxRank);
        finalTracks = shuffle(finalTracks);

        return NextResponse.json(finalTracks.slice(0, limit));
    } catch (error) {
        console.error("Erreur API Deezer:", error?.response?.data ?? error?.message);
        return NextResponse.json({ error: "Erreur côté serveur" }, { status: 500 });
    }
}
