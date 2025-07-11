import ProjectPage from "@/app/_components/ProjectPage";
import Link from "next/link";
import React from "react";

const PokeDexPage: React.FC = () => {
  return (
    <ProjectPage
      title="Pokédex"
      presentation={
        <>
          Le Pokédex est un projet réalisé dans le cadre de mon BUT Informatique. Il s’agit d’une application web développée avec Python et Flask,
          qui interagit avec l’API publique PokeAPI pour présenter des informations détaillées sur les Pokémon. Ce projet m’a permis de consolider
          mes compétences en développement web backend ainsi que dans l’intégration d’API tierces.
        </>
      }
      imageSrc="/projet/pokedex.jpg"
      imageAlt="Capture de la page d'accueil du Pokédex"
      imageCaption="Interface utilisateur du Pokédex montrant la liste des Pokémon"
      objectifs={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Développer une application web complète avec Flask</li>
          <li>Intégrer l’API PokeAPI pour exploiter des données tierces</li>
          <li>Créer une interface intuitive et responsive</li>
          <li>Implémenter la recherche, le filtrage et la navigation dans les données</li>
          <li>Renforcer mes compétences en Python et développement web</li>
        </ul>
      }
      technologies={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium text-gray-900 dark:text-white">Backend :</span> Python, Flask</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Frontend :</span> HTML, CSS, JavaScript</li>
          <li><span className="font-medium text-gray-900 dark:text-white">API :</span> PokeAPI</li>
        </ul>
      }
      fonctionnalites={
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Affichage de la liste complète des Pokémon avec pagination</li>
            <li>Recherche par nom ou identifiant</li>
            <li>Filtrage par type, génération ou caractéristiques</li>
            <li>Page détaillée pour chaque Pokémon (statistiques, types, évolutions, attaques)</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Visualisation des évolutions et des attaques</li>
            <li>Interface responsive pour tout type d’écran</li>
            <li>Mise en cache des données pour optimiser les performances</li>
          </ul>
        </>
      }
      architecture={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            L’architecture MVC est adaptée à Flask :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium text-gray-900 dark:text-white">Modèle :</span> Appels à l’API PokeAPI et traitement des données</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Contrôleur :</span> Routes Flask pour la gestion des requêtes</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Vue :</span> Templates HTML et CSS pour l’affichage</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Helpers :</span> Fonctions utilitaires pour le traitement local des données</li>
          </ul>
        </>
      }
      defis={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le principal défi était d’exploiter efficacement une API externe tout en garantissant une navigation fluide
            malgré la volumétrie importante des données (plus de 800 Pokémon). J’ai aussi mis en place un système de cache
            pour améliorer les temps de réponse et limiter le nombre de requêtes vers l’API.
          </p>
        </>
      }
      perspectives={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            À l’avenir, ce projet pourrait intégrer un système de comptes utilisateurs pour sauvegarder des favoris,
            un comparateur de Pokémon ou encore des fonctionnalités sociales (commentaires, partages). Une migration
            vers un framework JS moderne comme React améliorerait aussi l’interactivité.
          </p>
        </>
      }
      liens={
        <>
          <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
            <li>
              <Link href="https://github.com/Ayo5/Pokedex-Flask" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                Code source GitHub
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default PokeDexPage;
