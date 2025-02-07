import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "j0xsqvodkhq8q3ie.public.blob.vercel-storage.com",
            }
        ]
    },
};

export default nextConfig;
