/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '10.10.70.68', 'localhost'

  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
