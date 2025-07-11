import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Remplacez 'nom-de-votre-repo' par le nom réel de votre repository
  // Commentez ces lignes si votre repo s'appelle username.github.io
  // basePath: process.env.NODE_ENV === 'production' ? '/nom-de-votre-repo' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/nom-de-votre-repo/' : '',
  // Configuration pour éviter les problèmes avec les routes dynamiques
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');
export default withNextIntl(nextConfig);