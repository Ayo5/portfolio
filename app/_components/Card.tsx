import Image from 'next/image';


interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    href: string;
    tag : string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText, href , tag }) => {
    return (
        <div className="max-w-md rounded-3xl border-2 border-white/10 overflow-hidden shadow-md hover:shadow-white/20 transition-shadow duration-300 ">
            <Image
                className="w-auto h-auto"
                src={imageUrl}
                alt={altText}
                width={300}
                height={400}
                objectFit="cover"
                quality={100} // Amélioration de la qualité de l'image
            />
            <div className="px-6 py-4">
                <a href={href}  rel="noopener noreferrer"> {/* Lien appliqué uniquement au titre */}
                    <h2 className="font-bold text-xl mb-2 hover:underline">{title}</h2>
                </a>
                <p className="text-white text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-white/50 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
                    {tag}
                </span>
            </div>
        </div>
    );
};

export default Card;
