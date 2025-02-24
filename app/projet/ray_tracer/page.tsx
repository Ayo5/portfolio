import React from 'react';
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from 'next/image';
import Link from 'next/link';

const RayTracerPage: React.FC = () => {
    return (
        <div className="min-h-screen ">
            <Header />
            <NavBar />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Ray Tracer</h1>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Présentation du projet</h2>
                    <p className="text-white mb-4">
                        Il s&apos;agit d&apos;un projet de groupe réalisé dans le cadre de mon BUT Informatique en 2ème année.
                        Le Ray Tracer est une application développée en Java qui simule le comportement de la lumière sur différents objets 3D.
                        Ce projet implémente les principes fondamentaux de l&apos;infographie pour créer des rendus réalistes en calculant
                        la trajectoire des rayons lumineux dans une scène virtuelle.
                    </p>

                    <div className="flex justify-center my-6">
                        <div className="relative w-full max-w-2xl h-64 md:h-96">
                            <Image
                                src="/Sphere.PNG"
                                alt="Rendu d'une sphère réfléchissante avec illumination globale"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="text-center italic text-sm text-white mb-6">
                        Rendu d&apos;une sphère réfléchissante avec illumination globale
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 border-2 border-white/10 rounded-3xl">
                        <h2 className="text-2xl font-semibold mb-4">Objectifs du projet</h2>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Implémenter un moteur de rendu 3D basé sur la technique du ray tracing</li>
                            <li>Simuler les interactions physiques de la lumière avec différentes surfaces</li>
                            <li>Générer des images photoréalistes avec gestion des ombres, réflexions et réfractions</li>
                        </ul>
                    </div>

                    <div className= "p-6 border-2 border-white/10 rounded-3xl">
                        <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li><span className="font-medium">Langage :</span> Java</li>
                            <li><span className="font-medium">Environnement de développement :</span>IntelliJ IDEA</li>
                            <li><span className="font-medium">Bibliothèques :</span> Java (From Scratch)</li>
                            <li><span className="font-medium">Méthodes mathématiques :</span> Algèbre linéaire, calcul vectoriel, algorithmes d&apos;intersection</li>
                        </ul>
                    </div>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Liens et ressources</h2>
                    <div className="flex flex-col space-y-3">
                        <Link href="https://github.com/Ayo5/RayTracerFromScratch" target="_blank" className="text-blue-600 hover:underline">
                            Dépôt GitHub
                        </Link>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default RayTracerPage;
