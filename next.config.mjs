/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    '10.10.80.49', 'localhost'

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
