import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import { useTranslations } from "next-intl";
import Image from "next/image";

const About = () => {
  const t = useTranslations("about");

  return (
    <div className="bg-background text-foreground">
      <Header />
      <NavBar />

      <h4 className="text-2xl font-bold ml-32 animate-slide-up-fade animation-delay-200 text-muted-foreground">
        {t("title")}
      </h4>

      <div className="flex justify-center my-20">
        <div className="relative h-[500px] w-[300px]">
          <Image
            src="/about/moi_en_espagne.jpg"
            alt={t("images.spain.alt")}
            fill
            className="rounded-3xl animate-slide-up-fade object-cover"
            priority
          />
        </div>
      </div>

      <div className="text-center">
        <p className="text-justify mx-20 text-base animate-slide-up-fade animation-delay-200">
          {t("introduction.paragraph1")}
        </p>

        <p className="text-justify mt-4 mx-20 text-base animate-slide-up-fade animation-delay-400">
          {t("introduction.paragraph2")}
        </p>
      </div>

      <div className="flex justify-center my-20">
        <Image
          src="/about/moi_en_conference.jpg"
          alt={t("images.conference.alt")}
          width={500}
          height={300}
          className="rounded-3xl animate-slide-up-fade animation-delay-600"
        />
      </div>

      <div className="text-center">
        <p className="text-justify mx-20 text-base animate-slide-up-fade animation-delay-800">
          {t("sport.paragraph1")}
        </p>

        <p className="text-justify mt-4 mx-20 text-base animate-slide-up-fade animation-delay-1000">
          {t("sport.paragraph2")}
        </p>
      </div>

      <div className="flex justify-center my-20">
        <Image
          src="/about/moi_en_festival.PNG"
          alt={t("images.festival.alt")}
          width={300}
          height={500}
          className="rounded-3xl animate-slide-up-fade"
        />
      </div>

      <div className="text-center">
        <p className="text-justify mx-20 text-base animate-slide-up-fade animation-delay-200">
          {t("music.paragraph1")}
        </p>

        <p className="text-justify mt-4 mx-20 text-base animate-slide-up-fade animation-delay-400">
          {t("music.paragraph2")}
        </p>
      </div>
    </div>
  );
};

export default About;