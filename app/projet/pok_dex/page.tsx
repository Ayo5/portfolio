import React from 'react';
import { Header } from "@/app/_components/Header";
import NavBar from "@/app/_components/NavBar";
import { Section } from "@/app/_components/Section";

const ExamplePage = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Section className="text-center">
                <h1 className="text-3xl font-bold mb-4">Example Page</h1>
                <p className="mb-4">This is an example page to demonstrate the structure of a Next.js page.</p>
                <a href="/" className="text-blue-500">Go back to home</a>
            </Section>
        </div>
    );
};

export default ExamplePage;