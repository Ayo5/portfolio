import {Section} from "@/app/_components/Section";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export const HostPage = () => {
    return (
        <Section className="flex flex-col items-center justify-center h-screen bg-cover bg-center">
            {/* Buttons above the title */}
            <div className="mb-5 space-x-1">
                <Link href="/projet">
                    <Button className="p-2 font-sans text-gray-400">projet</Button>
                </Link>
                <Link href="/about">
                    <Button className="p-2 font-sans text-gray-400">à propos</Button>
                </Link>
            </div>

            {/* Title */}
            <h1 className="text-6xl font-bold text-center text-white">
                Abdelkader Daï
            </h1>

            {/* Text below the title */}
            <p className="mt-5 text-lg text-center text-gray-300">
                Développeur passionné et créatif
            </p>
        </Section>
    );
};
