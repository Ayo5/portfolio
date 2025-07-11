// app/projects/marathon-web/page.tsx
import ProjectPage from "@/app/_components/ProjectPage";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const MarathonWebPage: React.FC = () => {

  const t = useTranslations("projects.marathonWeb");
  return (
    <ProjectPage
      title={t("title")}
      presentation={
        <>
          {t("presentation")}
        </>
      }
      imageSrc="/projet/ScreenMarathonWeb.png"
      imageAlt="Capture de la page d'accueil du Marathon Web"
      imageCaption="Interface utilisateur du site Marathon Web"
      objectifs={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>{t("objectif.0")}</li>
          <li>{t("objectif.1")}</li>
          <li>{t("objectif.2")}</li>
          <li>{t("objectif.3")}</li>
        </ul>
      }
      technologies={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium text-gray-900 dark:text-white">Framework :</span> Laravel</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Frontend :</span> HTML, CSS, JavaScript, Blade</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Base de données :</span> MySQL</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Outils :</span> Git, Composer</li>
        </ul>
      }
      fonctionnalites={
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Système d’histoires interactives avec embranchements</li>
            <li>Navigation entre les différentes parties d’une histoire</li>
            <li>Suivi des choix et sauvegarde de progression</li>
            <li>Création de compte utilisateur</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Interface de lecture claire et accessible</li>
            <li>Catégorisation des histoires disponibles</li>
            <li>Design responsive pour ordinateurs, tablettes et smartphones</li>
          </ul>
        </>
      }
      architecture={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le projet suit l’architecture MVC proposée par Laravel :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium text-gray-900 dark:text-white">Modèle :</span> Gestion des histoires, utilisateurs, sauvegardes</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Vue :</span> Templates Blade pour l&apos;affichage dynamique</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Contrôleur :</span> Logique de traitement des choix et navigation</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Routes :</span> Navigation dans les différentes parties de l&apos;histoire</li>
          </ul>
        </>
      }
      defis={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le principal défi était de développer un projet complet et cohérent en seulement 24 heures.
            Il a fallu concevoir rapidement une structure de données adaptée aux histoires interactives,
            tout en assurant une expérience utilisateur agréable et un code maintenable.
          </p>
        </>
      }
      perspectives={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le projet pourrait être enrichi par un éditeur d’histoires accessible aux auteurs,
            une notation communautaire, ou encore des fonctionnalités sociales (commentaires, partages).
            Une refonte en SPA avec Vue ou React améliorerait également les performances et l’UX.
          </p>
        </>
      }
      liens={
        <>
          <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
            <li>
              <Link href="https://github.com/Ayo5/MarathonWeb" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                Code source GitHub
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default MarathonWebPage;
