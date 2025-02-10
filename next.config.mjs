/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },

  webpack: (config, { isServer }) => {
    // Disable caching
    config.cache = false;
    return config;
  },
};

export default nextConfig;
