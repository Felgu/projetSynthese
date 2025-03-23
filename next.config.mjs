/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mode strict pour le rendu de React
  swcMinify: true, // Active la minification de code avec SWC
  images: {
    domains: ['exemple.com', 'autre-site.com'],
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
};

export default nextConfig;
