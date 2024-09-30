import {Section} from "@/app/_components/Section";
import {Button} from "@/components/ui/button";

export const HostPage = () => {
    return (
        <Section className="flex flex-col items-center justify-center h-screen bg-cover bg-center">
            {/* Buttons above the title */}
            <div className="mb-0.5 space-x-1">
                <Button className="p-2 font-sans text-gray-400">Projet</Button>
                <Button className="p-2 font-sans text-gray-400">À propos</Button>
            </div>

            {/* Title */}
            <h1 className="text-6xl font-bold text-center text-white">
                Abdelkader Daï
            </h1>

            {/* Text below the title */}
            <p className="mt-2 text-lg text-center text-gray-300">
                Développeur passionné et créatif
            </p>
        </Section>
    );
};
