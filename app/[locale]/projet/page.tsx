import Card from "@/app/_components/Card";
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";

const Projet = () => {
  return (
    <div>
      {/* Affichage du Header */}
      <Header />
      <NavBar />
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 place-items-center animate-slide-up-fade animation-delay-100'>
        <Card
          title='Compétion Huawei'
          description='Participation à la compétition Huawei ICT 2023, où nous avons développé un projet de gestion de données en temps réel pour les entreprises.'
          imageUrl='./huawei.png'
          altText='Logo Huawei'
          href='./projet/ray_tracer'
          tag='Python'
        />
        <Card
          title='Ray Tracer'
          description='Une application en Java qui permet de simuler le comportement de la lumière sur un objet'
          imageUrl='./Sphere.PNG'
          altText="Capture d'écran du résultat"
          href='./projet/ray_tracer'
          tag='Java'
        />
        <Card
          title='Pok-dex'
          description='Un site web en Python-Flask qui utilise une API Pokémon pour afficher les différents pokémon'
          imageUrl='./pokedex.jpg'
          altText="Capture de la page d'accueil"
          href='./projet/pok_dex'
          tag='Python-Flask'
        />
        <Card
          title='API Board Game'
          description='Un site qui utilise une API défini par nous même qui permet de gerer la base de données des jeu plateau (méthode CRUD)'
          imageUrl='./site_api_board_game.png'
          altText="Capture de la page d'accueil"
          href='./projet/api_board_game'
          tag='PHP'
        />
        <Card
          title='Marathon Web'
          description="Un site un pres fonctionnel créer en 24h qui permet la lecture d'histoire dont vous êtes le héro"
          imageUrl='./ScreenMarathonWeb.png'
          altText="Capture de la page d'accueil"
          href='./projet/marathon_web'
          tag='Laravel'
        />
      </div>
    </div>
  );
};

export default Projet;
