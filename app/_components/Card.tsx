"use client";
import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    altText: string;
    href: string;
    tag: string;
}

const Card: React.FC<CardProps> = ({
    title,
    description,
    imageUrl,
    altText,
    href,
    tag,
}) => {
    return (
        <div className="max-w-md rounded-3xl border border-border bg-card text-card-foreground overflow-hidden dark:hover:shadow-white/20 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    className="object-cover"
                    src={imageUrl}
                    alt={altText}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={100}
                    onError={(e) => {
                        console.log("Image failed to load:", e, imageUrl);
                    }}
                />
            </div>
            <div className="px-6 py-4">
                <a href={href} rel="noopener noreferrer">
                    <h2 className="font-bold text-xl mb-2 hover:underline">{title}</h2>
                </a>
                <p className="text-base">{description}</p>
            </div>
            <div className="px-6 pt-2 pb-4">
                <span className="inline-block bg-muted text-muted-foreground rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                    {tag}
                </span>
            </div>
        </div>
    );
};

export default Card;