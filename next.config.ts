// import type { NextConfig } from 'next'

// const nextConfig: NextConfig = {
//   /* config options here */
// }

// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['tailwindcss'], // Добавьте эту строку
  },
}

module.exports = nextConfig
