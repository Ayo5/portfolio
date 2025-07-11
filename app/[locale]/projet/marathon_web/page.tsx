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
      imageCaption={t("imageCaption")}
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
            <li>{t("features.0")}</li>
            <li>{t("features.1")}</li>
            <li>{t("features.2")}</li>
            <li>{t("features.3")}</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>{t("features.4")}</li>
            <li>{t("features.5")}</li>
            <li>{t("features.6")}</li>
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
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.routes.title")}</span> {t("architecture.routes.description")}</li>
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
              <Link href="https://github.com/Ayo5/Marathon_du_web" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                {t("links.github")}
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default MarathonWebPage;
