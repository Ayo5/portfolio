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
            <Card
                title="Projet 1"
                description="Une application web de gestion de tâches."
                imageUrl="/images/project1.png"
                altText="Capture d'écran du projet 1"
            />

        </div>
    );
};

export default Projet;
