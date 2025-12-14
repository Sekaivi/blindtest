import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function POST(req) {
    try {
        const db = await open({
            filename: "./test.sqlite",
            driver: sqlite3.Database
        });

        const { user_id, points } = await req.json();

        if (!user_id || points === undefined) {
            return Response.json({ error: "Missing parameters" }, { status: 400 });
        }

        // Vérifier si un score existe déjà pour cet utilisateur
        const existing = await db.get(
            "SELECT score_user FROM score WHERE user_id = ?",
            [user_id]
        );

        let newScore;

        if (existing) {
            // Cumuler
            newScore = existing.score_user + points;

            await db.run(
                "UPDATE score SET score_user = ? WHERE user_id = ?",
                [newScore, user_id]
            );
        } else {
            // Créer la ligne
            newScore = points;

            await db.run(
                "INSERT INTO score (user_id, score_user) VALUES (?, ?)",
                [user_id, newScore]
            );
        }

        return Response.json({ success: true, newScore });

    } catch (err) {
        console.error(err);
        return Response.json({ error: "Database error" }, { status: 500 });
    }
}
