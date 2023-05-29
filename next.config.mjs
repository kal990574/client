await import("./src/env.mjs");

/** @type {import('next').NextConfig} */
// reactStrictMode: true -> 렌더링 두번
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig;
