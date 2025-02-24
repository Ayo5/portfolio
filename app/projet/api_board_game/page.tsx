import React from 'react';
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from 'next/image';
import Link from 'next/link';

const ApiBoardGamePage: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <NavBar />

            <main className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">API Board Game</h1>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Présentation du projet</h2>
                    <p className="text-white mb-4">
                        Il s&apos;agit d&apos;un projet développé dans le cadre de mon BUT Informatique.
                        API Board Game est un site web qui utilise une API définie par notre équipe
                        qui permet de gérer la base de données des jeux de plateau à travers les méthodes CRUD
                        (Create, Read, Update, Delete). Ce projet nous a permis de comprendre les principes
                        fondamentaux de la conception d&apos;API REST et de la gestion de bases de données.
                    </p>

                    <div className="flex justify-center my-6">
                        <div className="relative w-full max-w-2xl h-64 md:h-96">
                            <Image
                                src="/site_api_board_game.png"
                                alt="Capture de la page d'accueil du site API Board Game"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="text-center italic text-sm text-white mb-6">
                        Interface utilisateur du site API Board Game
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 border-2 border-white/10 rounded-3xl">
                        <h2 className="text-2xl font-semibold mb-4">Objectifs du projet</h2>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Concevoir et développer une API REST fonctionnelle</li>
                            <li>Créer une interface utilisateur intuitive pour interagir avec l&apos;API</li>
                            <li>Implémenter les opérations CRUD pour la gestion des jeux de plateau</li>
                            <li>Mettre en place une documentation claire pour l&apos;utilisation de l&apos;API</li>
                            <li>Assurer la sécurité des données et la fiabilité du système</li>
                        </ul>
                    </div>

                    <div className="p-6 border-2 border-white/10 rounded-3xl">
                        <h2 className="text-2xl font-semibold mb-4">Technologies utilisées</h2>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li><span className="font-medium">Backend :</span> PHP</li>
                            <li><span className="font-medium">Frontend :</span> HTML, CSS, JavaScript</li>
                            <li><span className="font-medium">Base de données :</span> MySQL</li>
                            <li><span className="font-medium">Outils :</span> Postman (tests API)</li>
                            <li><span className="font-medium">Méthodologie :</span> Conception RESTful</li>
                        </ul>
                    </div>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Fonctionnalités implémentées</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Ajout de nouveaux jeux de plateau à la base de données</li>
                            <li>Consultation de la liste complète des jeux disponibles</li>
                            <li>Recherche de jeux par différents critères (nom, catégorie, etc.)</li>
                            <li>Modification des informations sur les jeux existants</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-2 text-white">
                            <li>Suppression des entrées de la base de données</li>
                            <li>Authentification des utilisateurs pour les opérations sensibles</li>
                            <li>Documentation interactive de l&apos;API</li>
                            <li>Interface utilisateur responsive pour tous les appareils</li>
                        </ul>
                    </div>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Architecture du projet</h2>
                    <p className="text-white mb-4">
                        Le projet est structuré selon le modèle MVC (Modèle-Vue-Contrôleur) :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li><span className="font-medium">Modèle :</span> Gestion des accès à la base de données et logique métier</li>
                        <li><span className="font-medium">Vue :</span> Interface utilisateur pour interagir avec l&apos;API</li>
                        <li><span className="font-medium">Contrôleur :</span> Endpoints de l&apos;API qui traitent les requêtes et renvoient les réponses</li>
                        <li><span className="font-medium">Routes :</span> Définition des chemins d&apos;accès à l&apos;API</li>
                    </ul>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Défis techniques relevés</h2>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>Conception d&apos;une structure de base de données optimisée pour les jeux de plateau</li>
                        <li>Implémentation d&apos;un système de sécurité robuste pour l&apos;API</li>
                        <li>Gestion des erreurs et retours adaptés aux standards RESTful</li>
                        <li>Création d&apos;une documentation claire et facile à utiliser</li>
                        <li>Optimisation des performances pour les requêtes complexes</li>
                    </ul>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Perspectives d&apos;amélioration</h2>
                    <ul className="list-disc pl-6 space-y-2 text-white">
                        <li>Ajout de fonctionnalités sociales (avis, notations, commentaires)</li>
                        <li>Extension de l&apos;API pour inclure des règles de jeux et des tutoriels</li>
                        <li>Développement d&apos;une application mobile connectée à l&apos;API</li>
                        <li>Mise en place d&apos;un système de versioning de l&apos;API</li>

                    </ul>
                </div>

                <div className="border-2 border-white/10 rounded-3xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Liens et ressources</h2>
                    <div className="flex flex-col space-y-3">
                        <Link href="https://github.com/Ayo5/SIte_API_Boardgame" className="text-blue-600 hover:underline">
                            Dépôt GitHub
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ApiBoardGamePage;