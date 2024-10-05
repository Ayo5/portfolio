import React from 'react';
import {Header} from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from 'next/image'; // Importation du composant Image de Next.js

const About = () => {
    return (
        <div>
            {/* Affichage du Header */}
            <Header/>
            <NavBar/>

            <h4 className="text-2xl text-opacity-70 font-bold ml-32 animate-slide-up-fade animation-delay-200">
                À propos de moi
            </h4>

            {/* Affichage des images */}
            <div className="flex justify-center my-20">
                <Image
                    src="/moi_en_espagne.jpg"
                    alt="Moi durant mon voyage en Espagne plus précisement à Pineda-de-Mar"
                    width={300}
                    height={500}
                    className="rounded-3xl animate-slide-up-fade"
                />
            </div>


            {/* Contenu textuel avec animation */}
            <div className="text-center">
                <p className="text-justify ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-200">
                    Je suis un développeur junior passionné par la création de solutions innovantes et
                    l'amélioration de l'expérience utilisateur. Mon expertise inclut des technologies modernes
                    et un engagement envers le développement durable.
                </p>

                <p className="text-justify mt-4 ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-400">
                    J'aime beaucoup les voyages, car je trouve que c'est une excellente manière de sortir de ma zone de
                    confort. Voyager me permet de découvrir de nouvelles cultures, traditions et modes de vie, ce qui
                    est essentiel pour élargir mes horizons.
                    Chaque destination a sa propre histoire, et en rencontrant des gens issus de différents milieux,
                    j'ai l'opportunité d'apprendre de nouvelles façons de penser et de vivre.
                    Ces expériences enrichissantes m'ont aidé à déconstruire certains de mes préjugés et à développer
                    une plus grande empathie envers les autres.
                    De plus, les voyages me donnent l'occasion de m'immerger dans des paysages à couper le souffle, que
                    ce soit des plages paradisiaques, des montagnes majestueuses ou des villes animées.
                    Chaque voyage est une aventure unique, remplie de moments mémorables et de leçons précieuses qui me
                    façonnent en tant que personne. En fin de compte, je considère que voyager est une véritable école
                    de vie qui contribue à mon développement personnel.
                </p>
            </div>

            <div className="flex justify-center my-20">
                <Image
                    src="/moi_en_conference.jpg"
                    alt="Moi durant mon voyage en Espagne plus précisement à Pineda-de-Mar"
                    width={500}
                    height={300}
                    className="rounded-3xl animate-slide-up-fade animation-delay-600"
                />
            </div>

            <div className="text-center">
                <p className="text-justify ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-800">
                    Je suis un développeur junior passionné par la création de solutions innovantes et
                    l'amélioration de l'expérience utilisateur. Mon expertise inclut des technologies modernes
                    et un engagement envers le développement durable.
                </p>

                <p className="text-justify mt-4 ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-1000">
                    J'aime beaucoup les voyages, car je trouve que c'est une excellente manière de sortir de ma zone de
                    confort. Voyager me permet de découvrir de nouvelles cultures, traditions et modes de vie, ce qui
                    est essentiel pour élargir mes horizons.
                    Chaque destination a sa propre histoire, et en rencontrant des gens issus de différents milieux,
                    j'ai l'opportunité d'apprendre de nouvelles façons de penser et de vivre.
                    Ces expériences enrichissantes m'ont aidé à déconstruire certains de mes préjugés et à développer
                    une plus grande empathie envers les autres.
                    De plus, les voyages me donnent l'occasion de m'immerger dans des paysages à couper le souffle, que
                    ce soit des plages paradisiaques, des montagnes majestueuses ou des villes animées.
                    Chaque voyage est une aventure unique, remplie de moments mémorables et de leçons précieuses qui me
                    façonnent en tant que personne. En fin de compte, je considère que voyager est une véritable école
                    de vie qui contribue à mon développement personnel.
                </p>
            </div>

            <div className="flex justify-center my-20">
                <Image
                    src="/moi_en_festival.PNG"
                    alt="Moi durant mon voyage en Espagne plus précisement à Pineda-de-Mar"
                    width={300}
                    height={500}
                    className="rounded-3xl animate-slide-up-fade"
                />
            </div>

            <div className="text-center">
                <p className="text-justify ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-200">
                    Je suis un développeur junior passionné par la création de solutions innovantes et
                    l'amélioration de l'expérience utilisateur. Mon expertise inclut des technologies modernes
                    et un engagement envers le développement durable.
                </p>

                <p className="text-justify mt-4 ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-400">
                    J'aime beaucoup les voyages, car je trouve que c'est une excellente manière de sortir de ma zone de
                    confort. Voyager me permet de découvrir de nouvelles cultures, traditions et modes de vie, ce qui
                    est essentiel pour élargir mes horizons.
                    Chaque destination a sa propre histoire, et en rencontrant des gens issus de différents milieux,
                    j'ai l'opportunité d'apprendre de nouvelles façons de penser et de vivre.
                    Ces expériences enrichissantes m'ont aidé à déconstruire certains de mes préjugés et à développer
                    une plus grande empathie envers les autres.
                    De plus, les voyages me donnent l'occasion de m'immerger dans des paysages à couper le souffle, que
                    ce soit des plages paradisiaques, des montagnes majestueuses ou des villes animées.
                    Chaque voyage est une aventure unique, remplie de moments mémorables et de leçons précieuses qui me
                    façonnent en tant que personne. En fin de compte, je considère que voyager est une véritable école
                    de vie qui contribue à mon développement personnel.
                </p>
            </div>
        </div>
    );
};

export default About;
