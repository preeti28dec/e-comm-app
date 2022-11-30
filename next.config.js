/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
// }

// module.exports = nextConfig




module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}