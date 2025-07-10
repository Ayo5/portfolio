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
        <div className="max-w-md rounded-3xl border border-border bg-card text-card-foreground overflow-hidden dark:hover:shadow-white/20 shadow-md hover:shadow-lg  transition-shadow duration-300">
            <Image
                className="w-full h-auto"
                src={imageUrl}
                alt={altText}
                width={300}
                height={400}
                objectFit="cover"
                quality={100}
            />
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
