/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // ✅ Enable Server Actions
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  optimizeFonts: false,
};

module.exports = nextConfig;
