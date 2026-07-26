/** @type {import('next').NextConfig} */
const ISR_CACHE_SIZE_BYTES = 50 * 1024 * 1024

const getMediaRemotePatterns = () => {
  const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL

  if (!mediaUrl) {
    return []
  }

  const url = new URL(mediaUrl)

  return [
    {
      protocol: url.protocol.slice(0, -1),
      hostname: url.hostname,
      port: url.port,
      pathname: `${url.pathname.replace(/\\/$/, '')}/**`,
    },
  ]
}

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  cacheMaxMemorySize: ISR_CACHE_SIZE_BYTES,
  pageExtensions: ['route.ts', 'route.tsx'],
  images: {
    remotePatterns: getMediaRemotePatterns(),
  },
}

module.exports = nextConfig
