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
        <div  className="bg-white flex items-center justify-center p-5 mr-10 ml-10 rounded-xl">
            <div>
                <h1 className="font-bold text-xl text-center m-5" >Se connecter</h1>
                <form onSubmit={handleSubmit}>
                    <div className="bg-gray-200 p-2 rounded-sm m-2" >
                        <input
                            type="mail"
                            value={mail}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-sm m-2">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            required
                        />
                    </div >
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <button className="border-1 rounded-sm m-2 p-2 hover:bg-gray-200 hover:border-gray-200" type="submit">Se connecter</button>
                        <a className="border-1 rounded-sm m-2 p-2.5 hover:bg-gray-200 hover:border-gray-200" href="login/register">Créer un compte</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
