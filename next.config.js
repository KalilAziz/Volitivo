/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["prisma", "@prisma/client"],
  },
  images: {
    domains: ["tailwindui.com", "images.alphacoders.com"],
  },
};

module.exports = nextConfig;
