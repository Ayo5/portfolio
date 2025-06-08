import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MarathonWebPage: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <NavBar />

      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold text-center mb-8'>Marathon Web</h1>

        <div className='border-2 border-white/10 rounded-3xl p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Présentation du projet
          </h2>
          <p className='text-white mb-4'>
            Marathon Web est un projet développé dans le cadre d&apos;un défi de
            programmation de 24 heures. Il s&apos;agit d&apos;une plateforme qui
            permet la lecture d&apos;histoires interactives dont vous êtes le
            héros. Ce projet nous a mis au défi de concevoir et développer un
            site fonctionnel en un temps limité, tout en mettant l&apos;accent
            sur l&apos;expérience utilisateur et l&apos;interactivité.
          </p>

          <div className='flex justify-center my-6'>
            <div className='relative w-full max-w-2xl h-64 md:h-96'>
              <Image
                src='/ScreenMarathonWeb.png'
                alt="Capture de la page d'accueil du Marathon Web"
                layout='fill'
                objectFit='contain'
                className='rounded-lg shadow-sm'
              />
            </div>
          </div>

          <div className='text-center italic text-sm text-white mb-6'>
            Interface utilisateur du site Marathon Web
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div className='p-6 border-2 border-white/10 rounded-3xl'>
            <h2 className='text-2xl font-semibold mb-4'>Objectifs du projet</h2>
            <ul className='list-disc pl-6 space-y-2 text-white'>
              <li>Développer un site web fonctionnel en seulement 24 heures</li>
              <li>
                Créer une plateforme interactive pour la lecture
                d&apos;histoires
              </li>
              <li>
                Implémenter un système de choix qui influence le déroulement des
                histoires
              </li>
              <li>Assurer une expérience utilisateur fluide et intuitive</li>
              <li>Mettre en place un design responsive et attrayant</li>
            </ul>
          </div>

          <div className='p-6 border-2 border-white/10 rounded-3xl'>
            <h2 className='text-2xl font-semibold mb-4'>
              Technologies utilisées
            </h2>
            <ul className='list-disc pl-6 space-y-2 text-white'>
              <li>
                <span className='font-medium'>Framework :</span> Laravel
              </li>
              <li>
                <span className='font-medium'>Frontend :</span> HTML, CSS,
                JavaScript, Blade
              </li>
              <li>
                <span className='font-medium'>Base de données :</span> MySQL
              </li>
              <li>
                <span className='font-medium'>Outils :</span> Git, Composer
              </li>
              <li>
                <span className='font-medium'>Méthodologie :</span>{" "}
                Développement rapide d&apos;applications
              </li>
            </ul>
          </div>
        </div>

        <div className='border-2 border-white/10 rounded-3xl p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Fonctionnalités implémentées
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ul className='list-disc pl-6 space-y-2 text-white'>
              <li>
                Système d&apos;histoires interactives avec des choix multiples
              </li>
              <li>
                Navigation intuitive entre les différentes parties de
                l&apos;histoire
              </li>
              <li>Système de sauvegarde de progression</li>
              <li>Création de compte utilisateur personnalisé</li>
            </ul>
            <ul className='list-disc pl-6 space-y-2 text-white'>
              <li>Interface adaptée à la lecture prolongée</li>
              <li>Système de catégorisation des histoires</li>
              <li>Mécanisme de suivi des choix effectués</li>
              <li>Design responsive pour tous les appareils</li>
            </ul>
          </div>
        </div>

        <div className='border-2 border-white/10 rounded-3xl p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Architecture du projet
          </h2>
          <p className='text-white mb-4'>
            Le projet est structuré selon l&apos;architecture MVC proposée par
            Laravel :
          </p>
          <ul className='list-disc pl-6 space-y-2 text-white'>
            <li>
              <span className='font-medium'>Modèle :</span> Gestion des données
              des histoires, des utilisateurs et de leurs progressions
            </li>
            <li>
              <span className='font-medium'>Vue :</span> Templates Blade pour
              l&apos;affichage des histoires et des interfaces
            </li>
            <li>
              <span className='font-medium'>Contrôleur :</span> Logique de
              gestion des choix et de la progression dans les histoires
            </li>
            <li>
              <span className='font-medium'>Routes :</span> Configuration du
              routage pour la navigation dans les histoires
            </li>
          </ul>
        </div>

        <div className='border-2 border-white/10 rounded-3xl p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Défis techniques relevés
          </h2>
          <ul className='list-disc pl-6 space-y-2 text-white'>
            <li>Développement sous forte contrainte temporelle (24 heures)</li>
            <li>
              Conception d&apos;une structure de données adaptée aux histoires
              interactives
            </li>
            <li>
              Mise en place d&apos;un système efficace de suivi des choix et des
              branches narratives
            </li>
            <li>
              Création d&apos;une interface utilisateur intuitive malgré le
              temps limité
            </li>
            <li>
              Optimisation des performances pour une expérience de lecture
              fluide
            </li>
          </ul>
        </div>

        <div className='border-2 border-white/10 rounded-3xl p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>
            Perspectives d&apos;amélioration
          </h2>
          <ul className='list-disc pl-6 space-y-2 text-white'>
            <li>
              Ajout d&apos;un éditeur d&apos;histoires pour permettre aux
              utilisateurs de créer leurs propres aventures
            </li>
            <li>
              Implémentation d&apos;effets visuels et sonores pour enrichir
              l&apos;expérience narrative
            </li>
            <li>
              Intégration d&apos;un système de recommandation basé sur les
              préférences des utilisateurs
            </li>
            <li>
              Développement d&apos;une application mobile pour la lecture hors
              ligne
            </li>
            <li>
              Ajout de fonctionnalités sociales (partage d&apos;histoires,
              commentaires, notations)
            </li>
          </ul>
        </div>

        <div className='border-2 border-white/10 rounded-3xl p-6 mb-8'>
          <h2 className='text-2xl font-semibold mb-4'>Liens et ressources</h2>
          <div className='flex flex-col space-y-3'>
            <Link
              href='https://github.com/Ayo5/Marathon_du_web'
              target='_blank'
              className='text-blue-600 hover:underline'
            >
              Dépôt GitHub
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarathonWebPage;
