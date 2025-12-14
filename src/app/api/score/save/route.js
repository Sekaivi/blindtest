import { NextResponse } from "next/server";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// ouvre la base SQLite
async function openDB() {
    return open({
        filename: "test.sqlite", // ton fichier SQLite
        driver: sqlite3.Database,
    });
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { user_id, score_user } = body;

        if (!user_id || typeof score_user !== "number") {
            return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
        }

        const db = await openDB();

        // récupère le score existant
        const existing = await db.get("SELECT score_user FROM score WHERE user_id = ?", user_id);

        if (existing) {
            // score cumulatif
            await db.run(
                "UPDATE score SET score_user = ? WHERE user_id = ?",
                existing.score_user + score_user,
                user_id
            );
        } else {
            await db.run(
                "INSERT INTO score (user_id, score_user) VALUES (?, ?)",
                user_id,
                score_user
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
