/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["imgix.cosmicjs.com", "res.cloudinary.com"], // Add your Cosmic CDN domain
  },
};

module.exports = nextConfig;
