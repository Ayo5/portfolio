import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import "./globals.css";


export const metadata: Metadata = {
  title: "Abdelkader Ayoub Daï | Portfolio",
  description: "Portfolio d'Abdelkader Ayoub Daï réalisé grâce à Next.js",
};

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const isValidLocale = ["fr", "en"].includes(locale);
  if (!isValidLocale) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
    console.error("Error loading messages:", error);
  }

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
