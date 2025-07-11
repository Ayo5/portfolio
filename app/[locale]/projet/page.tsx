import Card from "@/app/_components/Card";
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import { useTranslations } from "next-intl";

const Projet = () => {
  const t = useTranslations("projects");

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Je veux une alternance bordeeeeelll */}
      <Header />
      <NavBar />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 place-items-center animate-slide-up-fade animation-delay-100 p-6">
        <Card
          title={t("huawei.title")}
          description={t("huawei.description")}
          imageUrl="/projet/huawei.png"
          altText={t("huawei.altText")}
          href="./projet/ray_tracer"
          tag="Python"
        />
        <Card
          title={t("rayTracer.title")}
          description={t("rayTracer.description")}
          imageUrl="/projet/Sphere.PNG"
          altText={t("rayTracer.altText")}
          href="./projet/ray_tracer"
          tag="Java"
        />
        <Card
          title={t("pokeDex.title")}
          description={t("pokeDex.description")}
          imageUrl="/projet/pokedex.jpg"
          altText={t("pokeDex.altText")}
          href="./projet/pok_dex"
          tag="Python-Flask"
        />
        <Card
          title={t("apiBoardGame.title")}
          description={t("apiBoardGame.description")}
          imageUrl="/projet/site_api_board_game.png"
          altText={t("apiBoardGame.altText")}
          href="./projet/api_board_game"
          tag="PHP"
        />
        <Card
          title={t("marathonWeb.title")}
          description={t("marathonWeb.description")}
          imageUrl="/projet/ScreenMarathonWeb.png"
          altText={t("marathonWeb.altText")}
          href="./projet/marathon_web"
          tag="Laravel"
        />
      </div>
    </div>
  );
};

export default Projet;