import { Section } from "@/app/_components/Section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HostPage = () => {
    return (
        <Section className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
            {/* Buttons above the title */}
            <div className="mb-5 space-x-1">
                <Link href="/projet">
                    <Button className="p-2 font-sans text-gray-400 hover:text-white transition duration-300">projet</Button>
                </Link>
                <Link href="/about">
                    <Button className="p-2 font-sans text-gray-400 hover:text-white transition duration-300">à propos</Button>
                </Link>
            </div>

            {/* Title with typing animation */}
            <h1 className="text-8xl font-bold text-center text-white border-r-2 border-white whitespace-nowrap overflow-hidden animate-typing animate-blink-caret">
                Abdelkader Daï
            </h1>

            {/* Text below the title */}
            <p className="mt-5 text-lg text-center text-gray-300">
                Développeur junior et créatif
            </p>

            <style>{`
            @-webkit-keyframes typing { 
            from { width: 0; } }
            @-webkit-keyframes blink-caret { 50% { border-color: transparent; } }

            h1 { 
            font: bold 2em monospace;
            border-right: .1em solid black;
            width: calc(0.55em * 14); 
            width: 14ch;
            white-space: nowrap;
            overflow: hidden;
            -webkit-animation: typing 3s steps(14, end),
                       blink-caret .5s step-end infinite alternate;
            }
      `}</style>
        </Section>
    );
};
