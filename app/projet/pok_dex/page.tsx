import React from 'react';
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from 'next/image';
import Link from 'next/link';

const PokeDexPage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <NavBar />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">Pok-dex</h1>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Présentation du projet</h2>
                    <p className="text-white mb-4">
                        Il s&apos;agit d&apos;un projet développé dans le cadre de mon BUT Informatique.
                        Le Pok-dex est un site web créé avec Python-Flask qui utilise l&apos;API PokeAPI
                        pour afficher des informations détaillées sur les différents Pokémon. Ce projet
                        m&apos;a permis d&apos;explorer l&apos;intégration d&apos;API externes et
                        le développement web avec Flask.
                    </p>

                    <div className="flex justify-center my-6">
                        <div className="relative w-full max-w-2xl h-64 md:h-96">
                            <Image
                                src="./pokedex.jpg"
                                alt="Capture de la page d'accueil du Pokedex"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="text-center italic text-sm text-white mb-6">
                        Interface utilisateur du Pok-dex montrant la liste des Pokémon
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 border-2 border-white/10 rounded-3xl">
                        <h2 className="text-2xl font-semibold mb-4">Objectifs du projet</h2>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Développer une application web complète avec Flask</li>
                            <li>Intégrer l&apos;API PokeAPI pour récupérer les données Pokémon</li>
                            <li>Créer une interface utilisateur intuitive et responsive</li>
                            <li>Implémenter des fonctionnalités de recherche et de filtrage</li>
                            <li>Améliorer mes compétences en Python et en développement web</li>
                        </ul>
                    </div>

                    <div className="p-6 border-2 border-white/10 rounded-3xl">
                        <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li><span className="font-medium">Backend :</span> Python, Flask</li>
                            <li><span className="font-medium">Frontend :</span> HTML, CSS, JavaScript</li>
                            <li><span className="font-medium">API :</span> PokeAPI</li>
                        </ul>
                    </div>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Fonctionnalités implémentées</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Affichage de la liste complète des Pokémon avec pagination</li>
                            <li>Recherche de Pokémon par nom ou numéro</li>
                            <li>Filtrage par type, génération ou autre caractéristique</li>
                            <li>Page détaillée pour chaque Pokémon avec statistiques</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Visualisation des évolutions de chaque Pokémon</li>
                            <li>Affichage des attaques et capacités</li>
                            <li>Interface responsive adaptée à tous types d&apos;écrans</li>
                            <li>Mise en cache des données pour optimiser les performances</li>
                        </ul>
                    </div>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Architecture du projet</h2>
                    <p className="text-white mb-4">
                        Le projet est structuré selon une architecture MVC (Modèle-Vue-Contrôleur) adaptée à Flask :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li><span className="font-medium">Modèle :</span> Services d&apos;accès à l&apos;API et traitement des données</li>
                        <li><span className="font-medium">Contrôleur :</span> Routes Flask gérant les requêtes et préparant les données</li>
                        <li><span className="font-medium">Static :</span> Fichiers CSS, JavaScript et images</li>
                        <li><span className="font-medium">Helpers :</span> Fonctions utilitaires pour le traitement des données</li>
                    </ul>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Défis techniques relevés</h2>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>Gestion efficace des requêtes API pour éviter le rate limiting</li>
                        <li>Mise en place d&apos;un système de cache pour améliorer les performances</li>
                        <li>Développement d&apos;une interface intuitive pour naviguer parmi plus de 800 Pokémon</li>
                        <li>Création d&apos;une architecture évolutive et maintenable</li>
                        <li>Optimisation des temps de chargement pour une expérience utilisateur fluide</li>
                    </ul>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Perspectives d&apos;amélioration</h2>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>Ajout d&apos;un système de compte utilisateur pour sauvegarder des favoris</li>
                        <li>Création d&apos;un comparateur de Pokémon et de leurs statistiques</li>
                        <li>Développement de fonctionnalités sociales (équipes partagées, commentaires)</li>
                        <li>Implémentation d&apos;un mode hors ligne avec stockage local</li>
                        <li>Développement d&apos;une Progressive Web App (PWA)</li>
                    </ul>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Liens et ressources</h2>
                    <div className="flex flex-col space-y-3">
                        <Link href="https://github.com/Ayo5/Pok-dex" target="_blank"  className="text-blue-600 hover:underline">
                            Dépôt GitHub
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PokeDexPage;