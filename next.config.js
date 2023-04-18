/** @type {import('next').NextConfig} */
// reactStrictMode: true -> 렌더링 두번
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
