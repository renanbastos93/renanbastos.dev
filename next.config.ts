import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  agentRules: false,
  // `next dev` blocks its own scripts for hosts other than localhost, which leaves the page without JS.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "*.local"],
};

export default nextConfig;
