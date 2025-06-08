// Importation pour les composants nécessaires
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {/* Affichage du Header */}
      <Header />
      <NavBar />

      <h4 className='text-2xl text-opacity-70 font-bold ml-32 animate-slide-up-fade animation-delay-200'>
        À propos de moi
      </h4>

      {/* Affichage des images */}
      <div className='flex justify-center my-20'>
        <div className='relative h-[500px] w-[300px]'>
          <Image
            src='/moi_en_espagne.jpg' // Notez le '/' au début du chemin
            alt='Moi durant mon voyage en Espagne plus précisement à Pineda-de-Mar'
            fill
            className='rounded-3xl animate-slide-up-fade object-cover'
            priority
          />
        </div>
      </div>

      {/* Contenu textuel avec animation */}
      <div className='text-center'>
        <p className='text-justify ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-200'>
          Je suis un développeur junior passionné par la création de solutions
          innovantes et l&apos;amélioration de l&apos;expérience utilisateur.
          Mais au-delà du développement, je suis aussi passionné par par les
          voyages, le sport et la musique
        </p>

        <p className='text-justify mt-4 ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-400'>
          Voyager est bien plus qu&apos;un simple loisir pour moi : c&apos;est
          une véritable source d&apos;inspiration et d&apos;épanouissement.
          Chaque destination que je découvre m&apos;offre une occasion unique de
          m&apos;enrichir personnellement. J&apos;aime explorer de nouvelles
          cultures, goûter à des spécialités locales et rencontrer des personnes
          aux parcours variés. Ces expériences me permettent d&apos;élargir mon
          regard sur le monde et d&apos;apporter une ouverture d&apos;esprit
          dans tous les aspects de ma vie, y compris dans mon travail.
        </p>
      </div>

      <div className='flex justify-center my-20'>
        <Image
          src='/moi_en_conference.jpg'
          alt='Moi durant mon voyage en Espagne plus précisement à Pineda-de-Mar'
          width={500}
          height={300}
          className='rounded-3xl animate-slide-up-fade animation-delay-600'
        />
      </div>

      <div className='text-center'>
        <p className='text-justify ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-800'>
          Je suis également passionné par le sport. Comme vous pouvez le voir
          ci-dessus, j&apos;ai participé à un séminaire organisé par Orange, axé
          sur le sport.
        </p>

        <p className='text-justify mt-4 ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-1000'>
          Les sports collectifs et de combat sont bien plus qu&apos;une simple
          activité physique pour moi ; ils représentent une véritable passion
          qui façonne ma personnalité et mon approche de la vie. Pratiquer un
          sport collectif, que ce soit le football ou encore le basket-ball,
          m&apos;a appris l&apos;importance de la collaboration, de la
          communication et de l&apos;esprit d&apos;équipe. Chaque match est une
          occasion de travailler ensemble vers un objectif commun, de surmonter
          des défis et de célébrer des victoires, grandes ou petites. Ces
          expériences me rappellent que le succès réside souvent dans la
          synergie entre les membres d&apos;une équipe. D&apos;un autre côté,
          les sports de combat, comme la boxe ou le mma, m&apos;ont enseigné la
          discipline, la résilience et la maîtrise de soi. Chaque entraînement
          est un défi qui pousse mes limites physiques et mentales.
          J&apos;apprécie l&apos;aspect individuel de ces disciplines, où chaque
          progrès est le fruit de mes efforts et de ma détermination.
        </p>
      </div>

      <div className='flex justify-center my-20'>
        <Image
          src='/moi_en_festival.PNG'
          alt='Moi durant mon voyage en Espagne plus précisement à Pineda-de-Mar'
          width={300}
          height={500}
          className='rounded-3xl animate-slide-up-fade'
        />
      </div>

      <div className='text-center'>
        <p className='text-justify ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-200'>
          Je suis également passionné par la musique. Comme vous pouvez le voir
          ci-dessus, voici une photo de mes amis et moi au Paradis Artificiel.
        </p>

        <p className='text-justify mt-4 ml-20 mr-20 text-1xl text-white animate-slide-up-fade animation-delay-400'>
          La musique est une véritable source d&apos;inspiration et
          d&apos;émotion dans ma vie. Elle me transporte et me permet
          d&apos;exprimer mes sentiments de manière unique. J&apos;apprécie
          différents genres, des mélodies apaisantes aux rythmes entraînants,
          chaque morceau a le pouvoir de me raconter une histoire. Que ce soit
          en écoutant mes artistes préférés ou en découvrant de nouveaux
          talents, la musique m&apos;accompagne dans mes moments de détente et
          de réflexion. J&apos;aime également participer à des concerts et des
          festivals, où l&apos;énergie collective crée une expérience
          inoubliable. Pour moi, la musique est bien plus qu&apos;un simple
          divertissement ; c&apos;est un moyen de connexion avec les autres et
          une expression authentique de mon identité.
        </p>
      </div>
    </div>
  );
};

export default About;
