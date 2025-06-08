import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
