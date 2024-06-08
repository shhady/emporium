/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**', // Allow all paths
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**', // Allow only paths starting with /images/
      },
    ],
  },
};

export default nextConfig;