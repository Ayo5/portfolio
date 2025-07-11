import ProjectPage from "@/app/_components/ProjectPage";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ApiBoardGamePage: React.FC = () => {
  const t = useTranslations("projects.apiBoardGame");

  return (
    <ProjectPage
      title={t("title")}
      presentation={
        <>
          {t("presentation")}
        </>
      }
      imageSrc="/projet/site_api_board_game.png"
      imageAlt={t("imageAlt")}
      imageCaption={t("imageCaption")}
      objectifs={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>{t("objectif.0")}</li>
          <li>{t("objectif.1")}</li>
          <li>{t("objectif.2")}</li>
          <li>{t("objectif.3")}</li>
          <li>{t("objectif.4")}</li>
        </ul>
      }
      technologies={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.backend")}</span> PHP</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.frontend")}</span> HTML, CSS, JavaScript</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.database")}</span> MySQL</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.tools")}</span> Postman (tests API)</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.methodology")}</span> {t("tech.restful")}</li>
        </ul>
      }
      fonctionnalites={
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t("features.0")}</li>
            <li>{t("features.1")}</li>
            <li>{t("features.2")}</li>
            <li>{t("features.3")}</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t("features.4")}</li>
            <li>{t("features.5")}</li>
            <li>{t("features.6")}</li>
            <li>{t("features.7")}</li>
          </ul>
        </>
      }
      architecture={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {t("architecture.description")}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.model.title")}</span> {t("architecture.model.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.view.title")}</span> {t("architecture.view.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.controller.title")}</span> {t("architecture.controller.description")}</li>
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
        <>
          <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
            <li>
              <Link href="https://github.com/Ayo5/SIte_API_Boardgame" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                {t("links.github")}
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default ApiBoardGamePage;