"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search({ type }) {
    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(25)
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        try {
            let searchQuery;

            // If user pasted a Deezer link:
            if (query.includes("deezer.com")) {
                const res = await fetch("/api/resolve", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ link: query }),
                });

                const data = await res.json();
                if (data.error) throw new Error(data.error);
                searchQuery = data.id;
            } else {
                searchQuery = query;
            }
            router.push(`/jeu/${type}/${encodeURIComponent(searchQuery)}?limit=${limit}`);
        } catch (err) {
            console.error("Erreur pendant la recherche :", err);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex items-end">
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher" className="border p-2 rounded-l" />
            <div className="flex flex-col gap-2">
                <label>Nombre de musique chargées</label>
                <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)}
                    placeholder="Limite" className="border p-2 rounded-l" />
            </div>
            <button type="submit" className="bg-white text-black px-4 py-2 rounded-r">
                Créer mon blindtest :D
            </button>
        </form>
    );
}