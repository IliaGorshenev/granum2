/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static exports
  output: 'standalone',
  // Configure image domains if you're using next/image
  images: {
    domains: ['storage.yandexcloud.net', 'granum-stone.s3.regru.cloud'],
  },
  // Ensure ISR works properly
  experimental: {
    // This helps with ISR in some deployment environments
    isrMemoryCacheSize: 50,
  },
}

module.exports = nextConfig
