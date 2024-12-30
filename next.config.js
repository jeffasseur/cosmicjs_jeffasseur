/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgix.cosmicjs.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ["imgix.cosmicjs.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
