import {useEffect, useState} from "react";

export default function GetTracks(
    mode = "genre",
    q = "0",
    limit = 25,
    minRank = 0,
    maxRank = 1000000
) {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!mode) return;

        const controller = new AbortController();
        const timeoutId = setTimeout(() => {
            controller.abort();
            setError(new Error("La recherche a dépassé 20 secondes et a été annulée."));
            setLoading(false);
        }, 20000); // 20 secondes

        setLoading(true);
        setError(null);

        fetch(
            `/api/tracks?mode=${mode}&q=${encodeURIComponent(q)}&limit=${limit}&minRank=${minRank}&maxRank=${maxRank}`,
            {signal: controller.signal}
        )
            .then((res) => {
                if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (!Array.isArray(data)) throw new Error("Réponse inattendue du serveur");
                setTracks(data);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("Erreur fetch:", err);
                    setError(err);
                }
            })
            .finally(() => {
                clearTimeout(timeoutId);
                setLoading(false);
            });

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, [mode, q, limit, minRank, maxRank]);

    return {tracks, loading, error};
}