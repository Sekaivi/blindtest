'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../stores/authContext';
import Link from "next/link"; // AuthProvider React

export default function RegisterPage() {
    const router = useRouter();
    const auth = useAuth();
    const [name, setName] = useState('');
    const [mail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        const success = await auth.register({ name, mail, password });
        if (success) {
            // Login automatique pour remplir auth.user
            await auth.login(mail, password);
            router.push('/');
        } else {
            setError(auth.error || 'Erreur lors de la création du compte');
        }
    };

    return (
        <div className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-4">
            <div className="flex flex-col bg-(--middleground) px-8 py-8 rounded-lg border border-(--foreground) shadow-md items-center">
                <h1 className="text-3xl font-bold mb-4 text-(--text)">Créer un compte</h1>
                <form onSubmit={handleSubmit} className="flex flex-col flex-wrap space-y-4  w-md">
                    <input
                        className="bg-white p-2 rounded border border-(--foreground) focus:border-(--accent) outline-none"
                        type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Pseudo" required/>
                    <input
                        className="bg-white p-2 rounded border border-(--foreground) focus:border-(--accent) outline-none"
                        type="email" value={mail} onChange={e => setEmail(e.target.value)} placeholder="Email"
                        required/>
                    <input
                        className="bg-white p-2 rounded border border-(--foreground) focus:border-(--accent) outline-none"
                        type="password" value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="Mot de passe" required/>
                    <input
                        className="bg-white p-2 rounded border border-(--foreground) focus:border-(--accent) outline-none"
                        type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                        placeholder="Confirmer le mot de passe" required/>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    <div
                        className="flex flex-col gap-2 md:justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
                        <button
                            className="cursor-pointer text-(--white) shadow bg-(--accent) duration-200 hover:bg-(--accent-lighter) font-bold uppercase rounded px-4 py-2 active:shadow-none w-fit"
                            type="submit">
                            S'inscrire
                        </button>

                        <p className='text-(--white)'>Ou bien <Link className="cursor-pointer text-(--white) underline duration-200 hover:text-(--accent-lighter)"
                            href="/login">Se connecter</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}
