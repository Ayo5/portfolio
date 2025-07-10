"use client";

import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("home");
  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex justify-center top-0 p-4  z-10 bg-background text-foreground">
      <div className="space-x-4">
        <Link href={`/${locale}`} passHref>
          <Button
            className={`w-12 h-12 p-2 font-sans rounded-full transition duration-300
              ${isActive(`/${locale}`)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {t("title")}
          </Button>
        </Link>
        <Link href={`/${locale}/projet`} passHref>
          <Button
            className={`w-20 h-12 p-2 font-sans rounded-full transition duration-300
              ${isActive(`/${locale}/projet`)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {t("project")}
          </Button>
        </Link>
        <Link href={`/${locale}/about`} passHref>
          <Button
            className={`w-20 h-12 p-2 font-sans rounded-full transition duration-300
              ${isActive(`/${locale}/about`)
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {t("about")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
