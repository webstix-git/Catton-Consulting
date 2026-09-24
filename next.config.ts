import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/catton-consulting-redesign.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/privacy-policy/index.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/ai-policy/index.html",
        destination: "/ai-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
