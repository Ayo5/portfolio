import {Section} from "./Section";

export const Header = () => {
    return (
        <header className="sticky top-0">
            <Section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url('path_to_image')` }}>
                <h1 className="text-6xl font-bold text-center text-white">Abdelkader Daï</h1>
            </Section>
        </header>
    );

}