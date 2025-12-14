'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/stores/authContext';
import BlindtestLoader from "@/components/Loading";
import Link from "next/link";

export default function Leaderboard() {
    const { user } = useAuth(); // utilisateur connecté
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            try {
                const res = await fetch('/api/score/leaderboard');
                const data = await res.json();
                if (res.ok) {
                    // Tri par score décroissant
                    const sorted = data.leaderboard.sort((a, b) => b.score_user - a.score_user);
                    setScores(sorted);
                } else {
                    console.error('Erreur API leaderboard:', data.error);
                }
            } catch (err) {
                console.error('Erreur réseau leaderboard:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchScores();
    }, []);

    if (loading) return <BlindtestLoader message={"Chargement du leaderboard"} />;
    if (scores.length === 0) return <BlindtestLoader message={"Aucun score enregistré pour l'instant"} />;

    // Classement de l'utilisateur connecté
    const userRank = user
        ? scores.findIndex((s) => s.user_id === user.id)
        : -1;

    return (
        <section className="flex flex-col mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-8 py-4 bg-[var(--middleground)] rounded-lg border border-[var(--foreground)] shadow-md">

            {/* --- Classement global --- */}
            <div>
                <h2 className="text-3xl font-bold mb-4 text-[var(--text)]">Leaderboard</h2>
                <table className="w-full border-spacing-0 border-separate bg-(--background) border border-(--foreground) rounded-lg shadow">
                    <thead className="text-[var(--text)] text-left">
                    <tr>
                        <th className="px-8 py-2 w-[10%]">Rang</th>
                        <th className="border-x border-(--foreground) px-8 py-2 w-[60%]">Pseudo</th>
                        <th className="px-8 py-2 w-[30%]">Score</th>
                    </tr>
                    </thead>
                    <tbody className="text-[var(--text)] text-left">
                    {scores.map((player, index) => (
                        <tr key={player.user_id}>
                            <td className="border-t border-[var(--foreground)] px-8 py-2">{index + 1}</td>
                            <td className="border-x border-t border-[var(--foreground)] px-8 py-2">{player.name}</td>
                            <td className="border-t border-[var(--foreground)] px-8 py-2">
                                {player.score_user} {player.delta ? <span className="text-[var(--accent)]">(+{player.delta})</span> : null}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* --- Classement de l’utilisateur connecté --- */}
            {user && userRank >= 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-2 text-(--text)">Votre classement</h3>
                    <table className="w-full border-spacing-0 border-separate mt-2 bg-(--background) border border-(--foreground) rounded-lg shadow">
                        <tbody className="text-(--text) text-left">
                        <tr>
                            <td className="px-8 py-2 w-[10%]">{userRank + 1}</td>
                            <td className="border-x border-(--foreground) px-8 py-2 w-[60%]">{scores[userRank].name}</td>
                            <td className="px-8 py-2 w-[30%]">{scores[userRank].score_user}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* --- Si pas connecté --- */}
            {!user && (
                <div
                    className="flex flex-row items-center justify-between px-8 bg-[var(--background)] py-4 mt-4 rounded-lg border border-[var(--foreground)] shadow">
                <p className="text-[var(--text)]">Connectez-vous pour commencer à accumuler des points.</p>
                    <Link href={"/login"} className="cursor-pointer text-[var(--white)] shadow bg-[var(--accent)] duration-200 hover:bg-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-none">
                        Se connecter
                    </Link>
                </div>
            )}
        </section>
    );
}
