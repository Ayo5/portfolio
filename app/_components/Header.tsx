import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { LanguageSelector } from "./LanguageSelector";

export const Header = async () => {

  return (
    <header className='sticky top-0 z-20'>
      {/* Container for buttons aligned at the top-left */}
      <div className='absolute top-0 right-0 m-4 flex space-x-4'>
        <LanguageSelector />
        <Button className='p-2 text-gray-500 hover:text-white transition duration-300'>
          <GitHubIcon />
        </Button>
        <Button className='p-2 text-gray-500 hover:text-white transition duration-300'>
          <LinkedInIcon />
        </Button>
        <Button className='p-2 text-gray-500 hover:text-white transition duration-300'>
          <DownloadIcon />
        </Button>

      </div>
    </header>
  );
};
