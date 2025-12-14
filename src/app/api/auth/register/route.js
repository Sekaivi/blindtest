// src/app/api/auth/register/route.js
import { openDb } from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const body = await req.json();
        console.log('Register body:', body);

        const { name, mail, password } = body;

        if (!name || !mail || !password) {
            return new Response(
                JSON.stringify({ error: 'Le nom, l\'email et le mot de passe sont requis.' }),
                { status: 400 }
            );
        }

        const db = await openDb();

        await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        mail TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `);
        const existingUser = await db.get('SELECT * FROM users WHERE mail = ?', mail);
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: 'Cet email est déjà utilisé.' }),
                { status: 400 }
            );
        }
        const plainPassword = password;

        const result = await db.run(
            'INSERT INTO users (name, mail, password) VALUES (?, ?, ?)',
            [name, mail, plainPassword]
        );

        return new Response(
            JSON.stringify({ message: 'Utilisateur créé avec succès.', userId: result.lastID }),
            { status: 201 }
        );

    } catch (err) {
        console.error('Register error:', err);
        return new Response(
            JSON.stringify({ error: 'Erreur interne du serveur.' }),
            { status: 500 }
        );
    }
}


