import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "workik-widget-assets.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
