// src/app/api/auth/register/route.js
import { openDb } from '../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        // Lire et parser le corps de la requête
        const body = await req.json();
        console.log('Register body:', body); // Pour debug côté serveur

        const { name, mail, password } = body;

        // Vérification des champs obligatoires
        if (!name || !mail || !password) {
            return new Response(
                JSON.stringify({ error: 'Le nom, l\'email et le mot de passe sont requis.' }),
                { status: 400 }
            );
        }

        // Ouvrir la base SQLite
        const db = await openDb();

        // Créer la table users si elle n'existe pas
        await db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        mail TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      )
    `);

        // Vérifier si l'email est déjà utilisé
        const existingUser = await db.get('SELECT * FROM users WHERE mail = ?', mail);
        if (existingUser) {
            return new Response(
                JSON.stringify({ error: 'Cet email est déjà utilisé.' }),
                { status: 400 }
            );
        }

        // Hasher le mot de passe
        // const hashedPassword = await bcrypt.hash(password, 10);

        // version pas sécurisée:
        const plainPassword = password;

        // Insérer le nouvel utilisateur
        const result = await db.run(
            'INSERT INTO users (name, mail, password) VALUES (?, ?, ?)',
            [name, mail, plainPassword]
        );

        // Répondre avec succès et ID du nouvel utilisateur
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


