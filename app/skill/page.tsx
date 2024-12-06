import React from 'react';
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import SkillCard from "@/app/_components/SkillCard";
import { JavaIcon } from "@/app/_components/icons/JavaIcon";
import { PythonIcon } from "@/app/_components/icons/PythonIcon";
import { PHPIcon } from "@/app/_components/icons/PHPIcon";
import { JavaScriptIcon } from "@/app/_components/icons/JavaScriptIcon";

const SkillPage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <h4 className="text-2xl text-opacity-70 font-bold ml-32 animate-slide-up-fade animation-delay-200">
                Mes compétences
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 gap-1 ml-32 mt-8 mr-32">
                <SkillCard
                    title="Java"
                    SvgIcon={<JavaIcon className="w-12 h-12" />}
                    progress={80}
                />
                <SkillCard
                    title="Python"
                    SvgIcon={<PythonIcon className="w-12 h-12" />}
                    progress={100}
                />
                <SkillCard
                    title="PHP"
                    SvgIcon={<PHPIcon className="w-12 h-12" />}
                    progress={60}
                />
                <SkillCard
                    title="JavaScript"
                    SvgIcon={<JavaScriptIcon className="w-12 h-12" />}
                    progress={70}
                />
                <SkillCard
                    title="Python"
                    SvgIcon={<PythonIcon className="w-12 h-12" />}
                    progress={50}
                />
            </div>
        </div>
    );
};

export default SkillPage;
