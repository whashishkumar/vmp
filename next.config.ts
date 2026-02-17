import type { NextConfig } from "next";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

if (!baseUrl) {
  throw new Error("NEXT_PUBLIC_BASE_URL is not defined");
}

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/images/**',
        // search omitted - allows query strings like ?v=2 for cache busting
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'vmpvet.com',
        pathname: "/**",
      },
    ],
    
  },

};

export default nextConfig;
