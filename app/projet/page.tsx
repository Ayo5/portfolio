import React from 'react';
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Card from "@/app/_components/Card";

const Projet = () => {
    return (
        <div>
            {/* Affichage du Header */}
            <Header />
            <NavBar/>
            <div className="ml-12 md-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 animate-slide-up-fade animation-delay-100">
            <Card
                title="Ray Tracer"
                description="Une application en Java uniquement qui permet de simuler le comportement de la lumière sur un objet"
                imageUrl="/Sphere.PNG"
                altText="Capture d'écran du résultat"
                href="https://github.com/Ayo5/RayTracerFromScratch"
            />
            <Card
                title="Projet 1"
                description="Une application web de gestion de tâches."
                imageUrl="/Sphere.PNG"
                altText="Capture d'écran du projet 1"
                href="https://github.com/Ayo5/RayTracerFromScratch"
            />
            <Card
                title="Projet 1"
                description="Une application web de gestion de tâches."
                imageUrl="/Sphere.PNG"
                altText="Capture d'écran du projet 1"
                href="https://github.com/Ayo5/RayTracerFromScratch"
            />
            <Card
                title="Projet 1"
                description="Une application web de gestion de tâches."
                imageUrl="/Sphere.PNG"
                altText="Capture d'écran du projet 1"
                href="https://github.com/Ayo5/RayTracerFromScratch"
            />
            </div>

        </div>
    );
};

export default Projet;
