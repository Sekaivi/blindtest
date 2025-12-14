// src/app/api/auth/login/route.js
import { openDb } from '../../../lib/db';

export async function POST(req) {
    try {
        const body = await req.json();
        const { mail, password } = body;

        if (!mail || !password) {
            return new Response(
                JSON.stringify({ error: 'Email et mot de passe requis.' }),
                { status: 400 }
            );
        }

        const db = await openDb();
        const user = await db.get('SELECT * FROM users WHERE mail = ?', mail);

        if (!user) {
            return new Response(
                JSON.stringify({ error: 'Utilisateur introuvable.' }),
                { status: 404 }
            );
        }

        if (user.password !== password) {
            return new Response(
                JSON.stringify({ error: 'Mot de passe incorrect.' }),
                { status: 401 }
            );
        }

        return new Response(
            JSON.stringify({ message: 'Connexion réussie', user }),
            { status: 200 }
        );

    } catch (err) {
        console.error('Login error:', err);
        return new Response(
            JSON.stringify({ error: 'Erreur interne du serveur.' }),
            { status: 500 }
        );
    }
}
