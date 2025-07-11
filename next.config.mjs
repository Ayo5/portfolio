import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Configuration pour GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Supprimez basePath et assetPrefix pour éviter les conflits avec GitHub Pages
  // GitHub Pages gère automatiquement le basePath
  
  // Configuration pour éviter les problèmes avec les routes dynamiques
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
export default withNextIntl(nextConfig);