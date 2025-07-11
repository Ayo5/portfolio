import ProjectPage from "@/app/_components/ProjectPage";
import Link from "next/link";
import React from "react";

const RayTracerPage: React.FC = () => {
  return (
    <ProjectPage
      title="Ray Tracer"
      presentation={
        <>
          Il s&apos;agit d&apos;un projet de groupe réalisé dans le cadre de
          mon BUT Informatique en 2ème année. Le Ray Tracer est une
          application développée en Java qui simule le comportement de la
          lumière sur différents objets 3D. Ce projet implémente les principes
          fondamentaux de l&apos;infographie pour créer des rendus réalistes
          en calculant la trajectoire des rayons lumineux dans une scène
          virtuelle.
        </>
      }
      imageSrc="/projet/Sphere.PNG"
      imageAlt="Rendu d'une sphère réfléchissante avec illumination globale"
      imageCaption="Rendu d'une sphère réfléchissante avec illumination globale"
      objectifs={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            Implémenter un moteur de rendu 3D basé sur la technique du ray
            tracing
          </li>
          <li>
            Simuler les interactions physiques de la lumière avec
            différentes surfaces
          </li>
          <li>
            Générer des images photoréalistes avec gestion des ombres,
            réflexions et réfractions
          </li>
          <li>
            Comprendre et appliquer les concepts mathématiques avancés
            en infographie 3D
          </li>
        </ul>
      }
      technologies={
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><span className="font-medium text-gray-900 dark:text-white">Langage :</span> Java</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Environnement de développement :</span> IntelliJ IDEA</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Bibliothèques :</span> Java (From Scratch)</li>
          <li><span className="font-medium text-gray-900 dark:text-white">Méthodes mathématiques :</span> Algèbre linéaire, calcul vectoriel, algorithmes d&apos;intersection</li>
        </ul>
      }
      fonctionnalites={
        <>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Calcul d&apos;intersection entre rayons et objets géométriques</li>
            <li>Simulation de l&apos;éclairage diffus et spéculaire</li>
            <li>Gestion des ombres portées et des occultations</li>
            <li>Implémentation de la réflexion sur surfaces métalliques</li>
          </ul>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Calcul de la réfraction dans les matériaux transparents</li>
            <li>Anti-aliasing pour améliorer la qualité des rendus</li>
            <li>Support de différents types d&apos;objets (sphères, plans, triangles)</li>
            <li>Génération d&apos;images en format standard</li>
          </ul>
        </>
      }
      architecture={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Le projet est structuré autour des composants principaux du ray tracing :
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-medium text-gray-900 dark:text-white">Ray :</span> Classe représentant un rayon lumineux avec origine et direction</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Scene :</span> Conteneur des objets 3D et des sources lumineuses</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Camera :</span> Point de vue et paramètres de rendu</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Materials :</span> Propriétés physiques des surfaces (couleur, réflectivité, transparence)</li>
            <li><span className="font-medium text-gray-900 dark:text-white">Renderer :</span> Moteur de calcul principal gérant le lancer de rayons</li>
          </ul>
        </>
      }
      defis={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Les principaux défis techniques incluaient l&apos;optimisation des calculs d&apos;intersection pour améliorer les performances,
            la gestion précise des équations de la physique de la lumière, et l&apos;implémentation correcte des algorithmes de réflexion et réfraction.
          </p>
        </>
      }
      perspectives={
        <>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Pour améliorer le projet, on pourrait ajouter le support de textures, implémenter des techniques d&apos;optimisation
            comme les structures spatiales (BVH, octrees), et développer une interface graphique pour configurer les scènes interactivement.
          </p>
        </>
      }
      liens={
        <>
          <ul className="list-disc pl-6 space-y-2 text-blue-700 dark:text-blue-400">
            <li>
              <Link href="https://github.com/Ayo5/RayTracerFromScratch" target="_blank" className="underline hover:text-blue-900 dark:hover:text-blue-200">
                Code source GitHub
              </Link>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default RayTracerPage;