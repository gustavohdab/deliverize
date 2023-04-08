/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "teamsoft.com.br",
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
};

module.exports = nextConfig
