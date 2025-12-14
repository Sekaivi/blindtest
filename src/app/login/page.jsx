'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../stores/authContext'; // Importation du store Pinia
import Link from 'next/link';

export default function LoginPage() {
    const router = useRouter();
    const authStore = useAuth();
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await authStore.login(mail, password);
        if (success) {
            // Redirection après une connexion réussie
            router.push('/jeu/page.js');
        } else {
            setError(authStore.error || 'Erreur de connexion');
        }
    };

    return (
        <div className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-4">
            <div className="flex flex-col bg-(--middleground) px-8 py-8 rounded-lg border border-(--foreground) shadow-md items-center">
                <h1 className="text-3xl font-bold mb-4 text-(--text)">Se connecter</h1>
                <form onSubmit={handleSubmit} className="flex flex-col flex-wrap space-y-4 w-md">
                    <input className="bg-white p-2 rounded border border-(--foreground) focus:border-(--accent) outline-none"
                        type="mail"
                        value={mail}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Adresse email"
                        required
                    />
                    <input className="bg-white p-2 rounded border border-(--foreground) focus:border-(--accent) outline-none"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="flex flex-col gap-2 md:justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
                        <button className="cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none w-fit" type="submit">
                            Se connecter</button>
                        <p className='text-(--white)'>Ou bien <Link className="cursor-pointer text-(--white) underline duration-200 hover:text-(--accent-lighter)"
                            href="/login/register">se créer un compte</Link></p>

                    </div>
                </form>
            </div>
        </div>
    );
}
