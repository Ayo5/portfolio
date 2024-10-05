import Image from 'next/image';
import {JavaIcon} from "@/app/_components/icons/JavaIcon";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText }) => {
    return (
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-white/10 hover:shadow-xl transition-shadow duration-300">
            <JavaIcon size={100}/>

            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Portfolio
        </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #WebDev
        </span>
            </div>
        </div>
    );
};

export default Card;
