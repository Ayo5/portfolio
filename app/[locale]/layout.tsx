import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "Abdelkader Ayoub Daï | Développeur Apprenti",
  description: "Portfolio d'Abdelkader Ayoub Daï réalisé grâce à Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr"
            className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground`}>
      <body>{children}</body>
      </html>
  );
}
