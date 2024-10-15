import {Button} from "@/components/ui/button";
import {GitHubIcon} from "@/app/_components/icons/GitHubIcon";
import {LinkedInIcon} from "@/app/_components/icons/LinkedInIcon";
import {DownloadIcon} from "@/app/_components/icons/DownloadIcon";

export const Header = () => {

    return (
        <header className="sticky top-0 z-20">
            {/* Container for buttons aligned at the top-left */}
            <div className="absolute top-0 right-0 m-4 flex space-x-4">
                <Button className="p-2 text-gray-500 hover:text-white transition duration-300">
                    <GitHubIcon />
                </Button>
                <Button className="p-2 text-gray-500 hover:text-white transition duration-300">
                    <LinkedInIcon />
                </Button>
                <Button className="p-2 text-gray-500 hover:text-white transition duration-300">
                    <DownloadIcon />
                </Button>
            </div>
        </header>
    );
}
