/** @type {import('next').NextConfig} */
const ISR_CACHE_SIZE_BYTES = 50 * 1024 * 1024

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  cacheMaxMemorySize: ISR_CACHE_SIZE_BYTES,
  pageExtensions: ['route.ts', 'route.tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
      },
    ],
  },
}

module.exports = nextConfig
