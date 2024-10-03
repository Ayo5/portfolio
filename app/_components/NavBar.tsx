"use client";  // Indique que ce composant est Client-side

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname(); // Obtenir l'URL actuelle

    // Fonction pour vérifier si un lien est actif
    const isActive = (href: string) => pathname === href;

    return (
        <div className="flex justify-center sticky top-0 p-4 shadow-md z-10">
            <div className="space-x-4"> {/* Espacement entre les boutons */}
                {/* Home Link */}
                <Link href="/" passHref>
                    <Button
                        className={`p-2 font-sans text-gray-400 rounded-full transition duration-300 ${
                            isActive("/") ? "bg-white/30 text-white" : "hover:text-white"
                        }`}
                    >
                        home
                    </Button>
                </Link>

                {/* Projet Link */}
                <Link href="/projet" passHref>
                    <Button
                        className={`p-2 font-sans text-gray-400 rounded-full transition duration-300 ${
                            isActive("/projet") ? "bg-white/30 text-white" : "hover:text-white"
                        }`}
                    >
                        projet
                    </Button>
                </Link>

                {/* About Link */}
                <Link href="/about" passHref>
                    <Button
                        className={`p-2 font-sans text-gray-400 rounded-full transition duration-300 ${
                            isActive("/about") ? "bg-white/30 text-white" : "hover:text-white"
                        }`}
                    >
                        à propos
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
