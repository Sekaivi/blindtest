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
        <div className="bg-white p-5 pb-15 rounded-xl">
            <div className="bg-white flex items-center justify-center p-5 mr-10 ml-10 rounded-xl">
                <h1 className="font-bold text-xl m-5">Profil</h1>
            </div>
            <div className="grid grid-cols-2 gap-4" >
                <div className="flex justify-end mr-10 mb-10 items-center">
                    <div className="w-50 h-50 overflow-hidden rounded-full ">
                        <img
                            className="w-full h-full object-cover"
                            src="https://i.pinimg.com/736x/54/b9/4c/54b94c4ca5d5676ba8facaa27a4a4910.jpg"
                            alt="Image ronde"
                        />
                    </div>
                </div>
                <div className="text-left">
                    <h2 className="font-bold mb-3 mt-3">Nom: </h2>
                    <p>
                        {user.name}
                    </p>
                    <h2 className="font-bold mb-3 mt-3">Email: </h2>
                    <p>
                        {user.mail}
                    </p>
                    <h2 className="font-bold mb-3 mt-3">Meilleur score:</h2>
                    <p className="mb-10">
                        425
                        {user.score}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button
                    onClick={logout}
                    className="border-1 rounded-sm m-2 p-2 hover:bg-gray-200 hover:border-gray-200"
                >
                    Se déconnecter
                </button>
            </div>
        </div>
    );
}
