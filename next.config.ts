import type { NextConfig } from "next";

/**
 * Dev-only: allow phones on LAN to load `/_next/*` when Origin is a private IP.
 * With `next dev --hostname 0.0.0.0`, the server allowlists `0.0.0.0`, not
 * `192.168.x.x` — without this, those requests 403 and React never hydrates
 * (buttons show :active from the browser but no client handlers).
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
 */
const privateLanDevOrigins = [
  "192.168.*.*",
  "10.*.*.*",
  ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.*.*`),
] as const;

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    ...privateLanDevOrigins,
    ...(process.env.NEXT_DEV_EXTRA_ORIGINS?.split(/[\s,]+/).filter(Boolean) ??
      []),
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [{ source: "/products", destination: "/produtos", permanent: false }];
  },
};

export default nextConfig;
