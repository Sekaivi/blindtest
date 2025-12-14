"use client";
import React, { useState } from 'react';
import { useAuth } from '@/stores/authContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const { user } = useAuth();

    const navItems = [
        { label: "Accueil", href: "/" },
        { label: "Jouer", href: "/jeu" },
        !user ? { label: "Login", href: "/login" } : { label: "Profil", href: "/profil" }
    ];

    return (
        <div className={"w-full px-4"}>
            <footer className="self-center flex flex-col flex-wrap sm:justify-start sm:flex-nowrap my-4 mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-8
    bg-(--middleground) pb-2 pt-4 rounded-lg border border-(--foreground) shadow space-y-8">
                {/* ---LOGO--- */}
                <div className="self-center">
                    <Link href={"/"} className="flex items-center self-center space-x-4 md:space-x-6 mb-4 focus:opacity-70 outline-none">
                        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-(--accent) uppercase font-bold">Blindtest</h3>
                        <Image src="/logo_v2.svg" alt="Logo" width={75} height={75} className="w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"></Image>
                        <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-(--accent) uppercase font-bold">Maker</h3>
                    </Link>
                </div>
                <nav className="w-full mx-auto grid grid-cols-3">
                    {/* ---JEU--- */}
                    <div className="flex flex-col text-(--text) text-center">
                        <h4 className="text-xl font-bold">Jeu</h4>
                        <Link href={"/jeu/vs"} className="focus:text-(--accent-lighter) hover:text-(--accent) transition-all duration-300 outline-none">Mode VS</Link>
                        <Link href={"/jeu"} className="focus:text-(--accent-lighter) hover:text-(--accent) transition-all duration-300 outline-none">Blindtest de la semaine</Link>
                        <Link href={"/jeu/playlist"} className="focus:text-(--accent-lighter) hover:text-(--accent) transition-all duration-300 outline-none">Playlist</Link>
                        <Link href={"/jeu/genre"} className="focus:text-(--accent-lighter) hover:text-(--accent) transition-all duration-300 outline-none">Genre</Link>
                        <Link href={"/jeu/search"} className="focus:text-(--accent-lighter) hover:text-(--accent) transition-all duration-300 outline-none">Mot-clé</Link>
                    </div>
                    {/* ---JEU--- */}
                    <div className="flex flex-col text-(--text) text-center">
                        <h4 className="text-xl font-bold">Profil</h4>
                        {!user ? <Link href={"login"}>Connexion</Link> : <Link href={"profil"}>Mon profil</Link>}
                        <Link href={""}>Supprimer mon compte</Link>
                    </div>
                    <div className="flex flex-col text-(--text) text-center">
                        <h4 className="text-xl font-bold">Confidentialité</h4>
                        <Link href={""}>Mentions légales</Link>
                    </div>
                </nav>
                <div className='text-xs'>
                    <p className="text-(--gray) text-center mb-2">
                        Ce site utilise l'<Link href={"https://developers.deezer.com/api"} className="underline">API
                            Deezer</Link> pour la gestion des chansons et la génération des blindtest.<br />
                        Blindtest Maker est un projet étudiant a but non-lucratif et peut donc rencontrer des soucis
                        techniques.<br />
                        De plus, il n'est en aucun cas associé - ni à associer - à Deezer.
                    </p>
                    <p className="text-(--gray) text-center text-sm">
                        Copyright © {new Date().getFullYear()} Blindtest Maker. Tous droits réservés.
                    </p>
                </div>
            </footer>
        </div>
    );
}
