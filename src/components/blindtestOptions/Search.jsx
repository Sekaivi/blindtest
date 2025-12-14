"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Search({type}) {
    const [query, setQuery] = useState("");
    const [limit, setLimit] = useState(10)
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
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({link: query}),
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
        <form onSubmit={handleSubmit}
              className="flex flex-col items-start space-y-4">
            <div className="flex flex-col gap-2 w-full">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                       placeholder="Rechercher"
                       className="bg-(--white) text-(--black) rounded px-4 py-2 placeholder-(--gray) border border-(--gray) focus:border-(--accent) outline-none"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
            <label className="text-(--text)">Nombre de musique chargées</label>
                <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)}
                       placeholder="Nombre de musiques"
                       className="bg-(--white) text-(--black) rounded px-4 py-2 placeholder-(--gray) border border-(--gray) focus:border-(--accent) outline-none"/>
            </div>
            <button type="submit"
                    className="cursor-pointer text-nowrap self-center text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) border border-(--accent) hover:border-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none w-fit">
                Créer mon blindtest
            </button>
        </form>
    );
}