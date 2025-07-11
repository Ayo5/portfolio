import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from "next/image";
import React from "react";

interface ProjectPageProps {
    title: string;
    presentation: React.ReactNode;
    imageSrc: string;
    imageAlt: string;
    imageCaption: string;
    objectifs: React.ReactNode;
    technologies: React.ReactNode;
    fonctionnalites: React.ReactNode;
    architecture: React.ReactNode;
    defis?: React.ReactNode;
    perspectives?: React.ReactNode;
    liens?: React.ReactNode;
    containerClassName?: string;
    cardClassName?: string;
    headingClassName?: string;
    textClassName?: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
    title,
    presentation,
    imageSrc,
    imageAlt,
    imageCaption,
    objectifs,
    technologies,
    fonctionnalites,
    architecture,
    defis,
    perspectives,
    liens,
    containerClassName = "container mx-auto px-4 py-8",
    cardClassName = "border-2 border-gray-300 dark:border-gray-600 rounded-3xl p-6 mb-8 dark:bg-white/10 dark:hover:shadow-white/20 shadow-md hover:shadow-lg  transition-shadow duration-300",
    headingClassName = "text-2xl font-semibold mb-4 text-gray-900 dark:text-white",
    textClassName = "mb-4 text-gray-700 dark:text-gray-300",
}) => {
    return (
        <>
            <Header />
            <NavBar />
            <div className="mx-auto max-w-7xl px-4 py-8">
                <main className={containerClassName}>
                    <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                        {title}
                    </h1>

                    <div className={cardClassName}>
                        <h2 className={headingClassName}>Présentation du projet</h2>
                        <div className={textClassName}>{presentation}</div>

                        <div className="flex justify-center my-6">
                            <div className="relative w-full max-w-2xl h-64 md:h-96">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="text-center italic text-sm text-gray-600 dark:text-gray-400 mb-6">
                            {imageCaption}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className={cardClassName}>
                            <h2 className={headingClassName}>Objectifs du projet</h2>
                            <div className={textClassName}>{objectifs}</div>
                        </div>

                        <div className={cardClassName}>
                            <h2 className={headingClassName}>Technologies utilisées</h2>
                            <div className={textClassName}>{technologies}</div>
                        </div>
                    </div>

                    <div className={cardClassName}>
                        <h2 className={headingClassName}>Fonctionnalités implémentées</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fonctionnalites}
                        </div>
                    </div>

                    <div className={cardClassName}>
                        <h2 className={headingClassName}>Architecture du projet</h2>
                        <div className={textClassName}>{architecture}</div>
                    </div>

                    {defis && (
                        <div className={cardClassName}>
                            <h2 className={headingClassName}>Défis techniques relevés</h2>
                            <div className={textClassName}>{defis}</div>
                        </div>
                    )}

                    {perspectives && (
                        <div className={cardClassName}>
                            <h2 className={headingClassName}>Perspectives d&apos;amélioration</h2>
                            <div className={textClassName}>{perspectives}</div>
                        </div>
                    )}

                    {liens && (
                        <div className={cardClassName}>
                            <h2 className={headingClassName}>Liens et ressources</h2>
                            {liens}
                        </div>
                    )}
                </main>
            </div>
        </>
    );
};

export default ProjectPage;