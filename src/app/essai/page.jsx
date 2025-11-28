"use client";

import {useEffect, useState} from "react";
import Track from "@/components/Track";
import BlindtestLoader from "@/components/Loading";
import GetTracks from "@/utils/GetTracks";

export default function TestPage() {

    const { tracks, loading, error } = GetTracks("search","Ptite Soeur", 20);

    console.log(tracks);

    return (
        <main className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8">
            <h1 className="text-xl font-bold mb-4">Résultats de la recherche de musiques</h1>
            {loading && (
                <div className="flex flex-col items-center">
                    <BlindtestLoader />
                </div>
            )}

            {error && (
                <p className="text-red-600 font-semibold mt-4">
                    ⚠️ {error.message || "Une erreur est survenue lors de la recherche."}
                </p>
            )}

            {!loading && !error && tracks.length === 0 && (
                <p className="text-gray-500">Aucun morceau trouvé.</p>
            )}

            {!loading && !error && tracks.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                    {tracks.map((t) => (
                        <div key={t.id}>
                            <Track track={t} />
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
};

// return (
//     <main className="p-8">
//         <h1 className="text-xl font-bold mb-4">Résultats de la recherche de musiques</h1>
//         {tracks.length === 0 ? (
//             <p>Chargement...</p>
//         ) : (
//             <ul className="space-y-3">
//                 {tracks.map((t) => (
//                     <li key={t.id} className="p-3 border rounded-md shadow-sm">
//                         <p className="font-semibold">{t.title}</p>
//                         <p className="text-sm text-gray-600">par {t.artist.name}</p>
//                         <p className="text-xs text-gray-400">rank: {t.rank}</p>
//                         <iframe src={t.preview} className="text-xs text-gray-400 w-[100%] h-10"/>
//                     </li>
//                 ))}
//             </ul>
//         )}
//     </main>
// );