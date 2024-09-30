import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/app/_components/icons/GitHubIcon";
import { LinkedInIcon } from "@/app/_components/icons/LinkedInIcon";
import { DownloadIcon } from "@/app/_components/icons/DownloadIcon";

export const Header = () => {

    return (
        <header className="sticky top-0">
            {/* Container for buttons aligned at the top-left */}
            <div className="absolute top-0 left-0 m-4 flex space-x-4">
                <Button className="p-2">
                    <GitHubIcon size={24}/>
                </Button>
                <Button className="p-2">
                    <LinkedInIcon size={24}/>
                </Button>
                <Button className="p-2">
                    <DownloadIcon size={24}/>
                </Button>
            </div>


        </header>
    );
}
