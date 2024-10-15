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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mb-6 place-items-center animate-slide-up-fade animation-delay-100">
                <Card
                    title="Ray Tracer"
                    description="Une application en Java qui permet de simuler le comportement de la lumière sur un objet"
                    imageUrl="./Sphere.PNG"
                    altText="Capture d'écran du résultat"
                    href="https://github.com/Ayo5/RayTracerFromScratch"
                    tag="Java"
                />
                <Card
                    title="Pok-dex"
                    description="Un site web en Python-Flask qui utilise une API Pokémon pour afficher les différents pokémon"
                    imageUrl="/pokedex.jpg"
                    altText="Capture de la page d'accueil"
                    href="https://github.com/Ayo5/Pok-dex"
                    tag="Python-Flask"
                />
                <Card
                    title="API Board Game"
                    description="Un site qui utilise une API défini par nous même qui permet de gerer la base de données des jeu plateau (méthode CRUD)"
                    imageUrl="/site_api_board_game.png"
                    altText="Capture de la page d'accueil"
                    href="https://github.com/Ayo5/Pok-dex"
                    tag="PHP"
                />
                <Card
                    title="Marathon Web"
                    description="Un site un pres fonctionnel créer en 24h qui permet la lecture d'histoire dont vous êtes le héro"
                    imageUrl="/ScreenMarathonWeb.png"
                    altText="Capture de la page d'accueil"
                    href="https://github.com/Ayo5/Marathon_du_web"
                    tag="Laravel"
                />
            </div>
        </div>
    );
};

export default Projet;
