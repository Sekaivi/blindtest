'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../stores/authContext'; // AuthProvider React

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
            router.push('/login');
        } else {
            setError(auth.error || 'Erreur lors de la création du compte');
        }
    };

    return (
        <div className="bg-white flex items-center justify-center p-5 mr-10 ml-10 rounded-xl">
            <div>
                <h1 className="font-bold text-xl text-center m-5" >Créer un compte</h1>
                <form onSubmit={handleSubmit}>
                    <div className="bg-gray-200 p-2 rounded-sm m-2">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nom" required />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-sm m-2">
                        <input type="email" value={mail} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
                    </div>
                    <div className="bg-gray-200 p-2 rounded-sm m-2">
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" required />
                    </div>
                        <div className="bg-gray-200 p-2 rounded-sm m-2">
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirmer le mot de passe" required />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="flex justify-center">
                        <button className="border-1 rounded-sm m-2 p-2 hover:bg-gray-200 hover:border-gray-200" type="submit">S'inscrire</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
