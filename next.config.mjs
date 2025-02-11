/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },

  webpack: (config) => {
    config.cache = {
      type: "memory", // Use memory instead of filesystem
    };
    return config;
  },
};

export default nextConfig;
