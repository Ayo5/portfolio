"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

type Language = {
    code: string;
    name: string;
    flag: string;
};

const languages: Language[] = [
    {
        code: "fr",
        name: "Français",
        flag: "🇫🇷",
    },
    {
        code: "en",
        name: "English",
        flag: "🇺🇸",
    },
];

export function LanguageSelector() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const [currentLanguage, setCurrentLanguage] = useState<Language>(
        languages.find((lang) => lang.code === locale) || languages[0]
    );

    useEffect(() => {
        const currentLang = languages.find((lang) => lang.code === locale);
        if (currentLang) {
            setCurrentLanguage(currentLang);
        }
    }, [locale]);

    const handleLanguageChange = (language: Language) => {
        setCurrentLanguage(language);
        router.push(pathname, { locale: language.code });
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Globe className="h-7 w-7 mr-auto text-gray-500 hover:text-white transition duration-300" />
                    <span className="text-2xl mt-1">{currentLanguage.flag}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className=" gap-2 cursor-pointer text-gray-500 hover:text-white transition duration-300"
                    >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}