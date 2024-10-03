import React from 'react';
import {Header} from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";

const About = () => {
    return (
        <div>
            {/* Affichage du Header */}
            <Header/>
            <NavBar/>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>

                <p className="text-lg text-white">
                    Je suis un développeur junior passionné par la création de solutions innovantes et
                    l'amélioration de l'expérience utilisateur. Mon expertise inclut des technologies modernes
                    et un engagement envers le développement durable.
                </p>
                <p className="mt-4 text-lg text-white">
                    J'aime apprendre de nouvelles technologies et collaborer avec d'autres pour créer
                    des projets significatifs.
                </p>
            </div>
        </div>
    );
};

export default About;
