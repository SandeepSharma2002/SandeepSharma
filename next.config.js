/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
      {
        protocol: "https",
        hostname: "nil1729.github.io",
      },
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
      },
    ],
  },
  experimental:{
    serverActions:true
  }
};

module.exports = nextConfig;
