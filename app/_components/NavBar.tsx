"use client"; // Indique que ce composant est Client-side

import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname(); // Obtenir l'URL actuelle

  const locale = useLocale();
  // Fonction pour vérifier si un lien est actif
  const isActive = (href: string) => pathname === href;

  return (
    <div className='flex justify-center sticky top-0 p-4 shadow-md z-10'>
      <div className='space-x-4'>
        {" "}
        <Link href={`/${locale}`} passHref>
          <Button
            className={`w-12 h-12 p-2 font-sans text-gray-400 rounded-full transition duration-300 ${
              isActive(`/${locale}`) ? "text-white" : "hover:text-white"
            }`}
          >
            home
          </Button>
        </Link>
        {/* Projet Link */}
        <Link href={`/${locale}/projet`} passHref>
          <Button
            className={`w-20 h-12 p-2 font-sans text-gray-400 rounded-full transition duration-300 ${
              isActive(`/${locale}/projet`) ? " text-white" : "hover:text-white"
            }`}
          >
            projet
          </Button>
        </Link>
        {/* About Link */}
        <Link href={`/${locale}/about`} passHref>
          <Button
            className={`w-20 h-12 p-2 font-sans text-gray-400 rounded-full transition duration-300 ${
              isActive(`/${locale}/about`) ? " text-white" : "hover:text-white"
            }`}
          >
            à propos
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
