import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/app/_components/Header";

const Projet = () => {
    return (
        <div>
            {/* Affichage du Header */}
            <Header />

            {/* Section des boutons en haut */}
            <div className="flex justify-center sticky top-0 p-4 shadow-md z-10">
                <div className="space-x-1">
                    <Link href="/">
                        <Button className="p-2 font-sans text-gray-400">Home</Button>
                    </Link>
                    <Link href="/projet">
                        <Button className="p-2 font-sans text-gray-400">Projet</Button>
                    </Link>
                    <Link href="/about">
                        <Button className="p-2 font-sans text-gray-400">À propos</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projet;
