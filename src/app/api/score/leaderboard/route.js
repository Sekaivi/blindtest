import {NextResponse} from "next/server";
import sqlite3 from "sqlite3";
import {open} from "sqlite";

async function openDB() {
    return open({
        filename: "test.sqlite", // ton fichier SQLite
        driver: sqlite3.Database,
    });
}

export async function GET() {
    try {
        const db = await openDB();
        console.log("DB ouverte avec succès");

        const leaderboard = await db.all(`
            SELECT u.id AS user_id, u.name, IFNULL(s.score_user, 0) AS score_user
            FROM users u
                     LEFT JOIN score s ON u.id = s.user_id
            ORDER BY score_user DESC
            LIMIT 5
        `);

        console.log("Leaderboard raw:", leaderboard);

        return NextResponse.json({leaderboard});
    } catch (err) {
        console.error("Erreur leaderboard API:", err);
        return NextResponse.json({error: "Server error"}, {status: 500});
    }
}