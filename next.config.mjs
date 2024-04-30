/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api-ninjas.com"],
  },
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
