// app/projects/poke-dex/page.tsx
import ProjectPage from "@/app/_components/ProjectPage";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const PokeDexPage: React.FC = () => {
  const t = useTranslations("projects.pokeDex");

  return (
    <ProjectPage
      title={t("title")}
      presentation={
        <>
          {t("presentation")}
        </>
      }
      imageSrc="/projet/pokedex.jpg"
      imageAlt="Capture de la page PokeDex"
      imageCaption={t("imageCaption")}
      objectifs={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>{t("objectif.0")}</li>
          <li>{t("objectif.1")}</li>
          <li>{t("objectif.2")}</li>
        </ul>
      }
      technologies={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium text-gray-900 dark:text-white">Langage :</span> Python</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Framework :</span> Flask</li>
          <li><span className="font-medium text-gray-900 dark:text-white">API :</span> PokéAPI</li>
        </ul>
      }
      fonctionnalites={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>{t("features.0")}</li>
          <li>{t("features.1")}</li>
          <li>{t("features.2")}</li>
          <li>{t("features.3")}</li>
        </ul>
      }
      architecture={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t("architecture.description")}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.api.title")}:</span> {t("architecture.api.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.routes.title")}:</span> {t("architecture.routes.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.templates.title")}:</span> {t("architecture.templates.description")}</li>
          </ul>
        </>
      }
      defis={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t("challenges")}
          </p>
        </>
      }
      perspectives={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t("future")}
          </p>
        </>
      }
      liens={
        <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
          <li>
            <Link href="https://github.com/Ayo5/PokeDex" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
              {t("links.github")}
            </Link>
          </li>
        </ul>
      }
    />
  );
};

export default PokeDexPage;
