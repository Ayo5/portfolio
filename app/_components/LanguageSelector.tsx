"use client";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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
    const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("userLanguage");
        if (savedLanguage) {
            const language = languages.find((lang) => lang.code === savedLanguage);
            if (language) {
                setCurrentLanguage(language);
            }
        }
    }, []);

    const handleLanguageChange = (language: Language) => {
        setCurrentLanguage(language);
        localStorage.setItem("userLanguage", language.code);
        document.cookie = `userLanguage=${language.code}; path=/; max-age=${60 * 60 * 24 * 365}`;

        const segments = pathname.split('/');
        if (segments[1] === 'fr' || segments[1] === 'en') {
            segments[1] = language.code;
            router.push(segments.join('/'));
        } else {
            router.push(`/${language.code}${pathname}`);
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 p-2">
                    <Globe className="h-6 w-6 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition duration-300" />
                    <span className="text-xl">{currentLanguage.flag}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {languages.map((language) => (
                    <DropdownMenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition duration-300 min-w-[100px]"
                    >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}