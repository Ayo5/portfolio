import ProjectPage from "@/app/_components/ProjectPage";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const RayTracerPage: React.FC = () => {
  const t = useTranslations("projects.rayTracer");

  return (
    <ProjectPage
      title={t("title")}
      presentation={
        <>
          {t("presentation")}
        </>
      }
      imageSrc="/projet/Sphere.PNG"
      imageAlt={t("imageAlt")}
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
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.language")}</span> Java</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.ide")}</span> IntelliJ IDEA</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.libraries")}</span> {t("tech.fromScratch")}</li>
          <li><span className="font-medium text-gray-900 dark:text-white">{t("tech.mathMethods")}</span> {t("tech.mathDetails")}</li>
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
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.ray.title")}</span> {t("architecture.ray.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.scene.title")}</span> {t("architecture.scene.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.camera.title")}</span> {t("architecture.camera.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.materials.title")}</span> {t("architecture.materials.description")}</li>
            <li><span className="font-medium text-gray-900 dark:text-white">{t("architecture.renderer.title")}</span> {t("architecture.renderer.description")}</li>
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
              <Link href="https://github.com/Ayo5/RayTracerFromScratch" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                {t("links.github")}
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default RayTracerPage;