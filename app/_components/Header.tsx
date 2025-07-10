import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { LanguageSelector } from "./LanguageSelector";
import ThemeToggle from "./ThemeToggle";

export const Header = async () => {
  return (
    <header className="top-0 z-20">
      <div className="absolute top-0 right-0 m-4 flex space-x-4">
        <Button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition duration-300">
          <GitHubIcon />
        </Button>
        <Button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition duration-300">
          <LinkedInIcon />
        </Button>
        <Button className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition duration-300">
          <DownloadIcon />
        </Button>
        <ThemeToggle />
        <LanguageSelector />
      </div>
    </header>
  );
};