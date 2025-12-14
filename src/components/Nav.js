"use client";
import React, { useState } from 'react';
import { useAuth } from '@/stores/authContext';
import Link from 'next/link';
import Image from 'next/image';

export default function TailwindNavbarWithData() {
    const { user } = useAuth(); // utilisateur connecté
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // 💡 Votre liste de navigation (inclut maintenant le champ 'submenu')
    const navItems = [
        { label: "Accueil", href: "/" },
        { label: "Jouer", href: "/jeu" },
        !user ? { label: "Login", href: "/login" } : { label: user.name + " (Profile)", href: "/profil" }
    ];

    return (
        <div className="px-4">
            <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap my-4 mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg px-8
    bg-(--middleground) py-4 rounded-lg border border-(--foreground) shadow">
                <nav className="max-w-[85rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center justify-between">
                        <Link
                            className="flex-none text-xl font-semibold text-(--text) focus:outline-none focus:opacity-80"
                            href="/"
                            aria-label="Brand"
                        >
                            <Image
                                src="/logo_v2.svg" // Path from public folder
                                alt="Logo"
                                height={50}
                                width={50}
                            />
                        </Link>

                        {/* Bouton de bascule mobile */}
                        <div className="sm:hidden">
                            <button
                                type="button"
                                className="relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                                aria-expanded={isMenuOpen}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle navigation"
                            >
                                {/* Icône Hamburger (si fermé) */}
                                {!isMenuOpen ? (
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <line x1="3" x2="21" y1="6" y2="6" />
                                        <line x1="3" x2="21" y1="12" y2="12" />
                                        <line x1="3" x2="21" y1="18" y2="18" />
                                    </svg>
                                ) : (
                                    /* Icône Croix (si ouvert) */
                                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path d="M18 6 6 18" />
                                        <path d="m6 6 12 12" />
                                    </svg>
                                )}
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>

                    {/* Menu de navigation principal */}
                    <div
                        className={`overflow-hidden transition-all duration-800 ease basis-full grow sm:block ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} sm:max-h-full sm:h-auto `}
                    >
                        <div
                            className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">

                            {/* 💡 ITERATION SUR LA LISTE NAVITEMS */}
                            {navItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.submenu ? (
                                        <DropdownMenu item={item} />
                                    ) : (
                                        <Link
                                            className="transition-all duration-300 text-(--text) hover:text-(--accent) focus:text-(--accent-lighter) focus:outline-none"
                                            href={item.href}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
