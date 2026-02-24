/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        hostname: 'pub-7050e11adbf34059b8b42ee8ede79026.r2.dev',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
    disableOptimizedLoading: false,
  },
}

module.exports = nextConfig
