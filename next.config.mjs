/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Mode strict pour le rendu de React
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
