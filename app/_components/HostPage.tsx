import { Section } from "@/app/_components/Section";
import { Button } from "@/components/ui/button";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export const HostPage = async () => {
  const locale = await getLocale();
  const t = await getTranslations("home");

  return (
    <Section className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
      {/* Buttons above the title */}
      <div className="mb-5 space-x-1">
        <Link href={`/${locale}/projet`}>
          <Button className="p-2 font-sans text-muted-foreground hover:text-foreground transition duration-300">
            {t("project")}
          </Button>
        </Link>
        <Link href={`/${locale}/about`}>
          <Button className="p-2 font-sans text-muted-foreground hover:text-foreground transition duration-300">
            {t("about")}
          </Button>
        </Link>
      </div>

      <h1 className="sm:text-xl lg:text-8xl font-bold text-center border-r animate-typing animate-blink-caret text-foreground border-foreground whitespace-nowrap overflow-hidden">
        Abdelkader Daï
      </h1>

      <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-5 text-center text-muted-foreground">
        {t("subtitle")}
      </p>

      <style>{`
        @-webkit-keyframes typing { 
          from { width: 0; } 
        }
        @-webkit-keyframes blink-caret { 
          50% { border-color: transparent; } 
        }

        h1 {
          font: bold 2em monospace;
          width: 14ch;
          white-space: nowrap;
          overflow: hidden;
          -webkit-animation: typing 3s steps(14, end),
                             blink-caret .5s step-end infinite alternate;
        }
      `}</style>
    </Section>
  );
};
