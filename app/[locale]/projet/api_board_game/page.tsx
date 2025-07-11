import ProjectPage from "@/app/_components/ProjectPage";
import Link from "next/link";
import React from "react";

const ApiBoardGamePage: React.FC = () => {
  return (
    <ProjectPage
      title="API Board Game"
      presentation={
        <>
          Il s&apos;agit d&apos;un projet développé dans le cadre de mon BUT
          Informatique. API Board Game est un site web qui utilise une API
          définie par notre équipe qui permet de gérer la base de données des
          jeux de plateau à travers les méthodes CRUD (Create, Read, Update,
          Delete). Ce projet nous a permis de comprendre les principes
          fondamentaux de la conception d&apos;API REST et de la gestion de
          bases de données.
        </>
      }
      imageSrc="/projet/site_api_board_game.png"
      imageAlt="Capture de la page d'accueil du site API Board Game"
      imageCaption="Interface utilisateur du site API Board Game"
      objectifs={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Concevoir et développer une API REST fonctionnelle</li>
          <li>Créer une interface utilisateur intuitive pour interagir avec l&apos;API</li>
          <li>Implémenter les opérations CRUD pour la gestion des jeux de plateau</li>
          <li>Mettre en place une documentation claire pour l&apos;utilisation de l&apos;API</li>
          <li>Assurer la sécurité des données et la fiabilité du système</li>
        </ul>
      }
      technologies={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium text-gray-900 dark:text-white">Backend :</span> PHP</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Frontend :</span> HTML, CSS, JavaScript</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Base de données :</span> MySQL</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Outils :</span> Postman (tests API)</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Méthodologie :</span> Conception RESTful</li>
        </ul>
      }
      fonctionnalites={
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Ajout de nouveaux jeux de plateau à la base de données</li>
            <li>Consultation de la liste complète des jeux disponibles</li>
            <li>Recherche de jeux par différents critères (nom, catégorie, etc.)</li>
            <li>Modification des informations sur les jeux existants</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Suppression des entrées de la base de données</li>
            <li>Authentification des utilisateurs pour les opérations sensibles</li>
            <li>Documentation interactive de l&apos;API</li>
            <li>Interface utilisateur responsive pour tous les appareils</li>
          </ul>
        </>
      }
      architecture={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le projet est structuré selon le modèle MVC (Modèle-Vue-Contrôleur) :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium text-gray-900 dark:text-white">Modèle :</span> Gestion des accès à la base de données et logique métier</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Vue :</span> Interface utilisateur pour interagir avec l&apos;API</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Contrôleur :</span> Gestion des requêtes HTTP et communication entre modèle et vue</li>
          </ul>
        </>
      }
      defis={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Un des principaux défis était d&apos;implémenter une API sécurisée tout en assurant une bonne expérience utilisateur. La gestion des erreurs et la validation des données ont également demandé une attention particulière.
          </p>
        </>
      }
      perspectives={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Pour aller plus loin, on pourrait ajouter une authentification avancée, une interface plus riche avec React, et une gestion des parties en ligne entre utilisateurs.
          </p>
        </>
      }
      liens={
        <>
          <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
            <li>
              <Link href="https://github.com/Ayo5/SIte_API_Boardgame" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                Code source GitHub
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default ApiBoardGamePage;