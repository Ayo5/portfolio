import React from 'react';
import {Header} from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from 'next/image'; // Importation du composant Image de Next.js

const About = () => {
    return (
        <div>
            {/* Affichage du Header */}
            <Header />
            <NavBar />

            {/* Affichage de l'image */}
            <div className="flex justify-center my-20">
                <Image
                    src="/moi_en_espagne.jpg"
                    alt="Moi en conférence"
                    width={300}
                    height={500}
                    className="rounded-3xl rotate-90"
                />
            </div>

            {/* Contenu textuel avec animation */}
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4 animate-slide-up-fade">
                    À propos de moi
                </h2>

                <p className="text-lg text-white animate-slide-up-fade animation-delay-200">
                    Je suis un développeur junior passionné par la création de solutions innovantes et
                    l'amélioration de l'expérience utilisateur. Mon expertise inclut des technologies modernes
                    et un engagement envers le développement durable.
                </p>

                <p className="mt-4 text-lg text-white animate-slide-up-fade animation-delay-400">
                    J'aime apprendre de nouvelles technologies et collaborer avec d'autres pour créer
                    des projets significatifs.
                </p>
            </div>
        </div>
    );
};

export default About;
