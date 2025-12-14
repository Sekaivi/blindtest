'use client';
import { useAuth } from '../../stores/authContext';
import Link from 'next/link';

export default function ProfilePage() {
    const { user, logout } = useAuth(); // Récupère l'utilisateur connecté depuis le store

    if (!user) {
        return (
            <div className="bg-white p-5 mr-10 ml-10 rounded-xl text-center">
                <h1 className="font-bold text-xl m-5">Vous n'êtes pas connecté 😢</h1>
                <Link href="/login" className="border-1 rounded-sm m-2 p-2 hover:bg-gray-200 hover:border-gray-200">
                    Se connecter
                </Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl px-4">
            <div className="flex flex-col bg-[var(--middleground)] px-8 py-8 rounded-lg border border-[var(--foreground)] shadow-md items-center">

                <h1 className="text-3xl font-bold mb-4 text-(--text)">Profil Utilisateur</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-lg">

                    <div className="flex justify-center md:justify-end items-start pt-4">
                        <div className="w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-full border-4 border-[var(--accent)] shadow-lg">
                            <img
                                className="w-full h-full object-cover"
                                src="https://api.dicebear.com/9.x/thumbs/svg?seed=Jocelyn"
                                alt="Image de profil"
                            />
                        </div>
                    </div>

                    {/* Colonne des Détails (texte à gauche dans la colonne) */}
                    <div className="text-left text-[var(--text)] space-y-4">

                        <div>
                            <h2 className="font-bold text-lg mb-1 mt-0">Nom: </h2>
                            <p className="p-1 bg-[var(--foreground)] rounded px-2">
                                {user.name}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-bold text-lg mb-1 mt-0">Email: </h2>
                            <p className="p-1 bg-[var(--foreground)] rounded px-2">
                                {user.mail}
                            </p>
                        </div>

                        <div>
                            <h2 className="font-bold text-lg mb-1 mt-0">Meilleur score:</h2>
                            <p className="p-1 bg-[var(--foreground)] rounded px-2">
                                {user.score || 0}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bouton de Déconnexion */}
                <div className="mt-8 pt-4 border-t border-[var(--foreground)] w-full max-w-lg flex justify-center">
                    <button
                        onClick={logout}
                        // Reprise du style du bouton de connexion (accentué)
                        className="cursor-pointer text-white shadow bg-[var(--accent)] duration-200 hover:bg-[var(--accent-lighter)] font-bold uppercase rounded px-4 py-2 active:shadow-none w-fit"
                        type="button" // Changé à 'button' car non dans un form de soumission
                    >
                        Se déconnecter
                    </button>
                </div>
            </div>
        </div>
    );
}
