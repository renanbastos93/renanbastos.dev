import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  // `next dev` blocks its own scripts for hosts other than localhost, which leaves the page without JS.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*", "*.local"],

  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  // URLs from the previous Hugo site
  async redirects() {
    const toSection = (sources: string[], section: string) =>
      sources.map((source) => ({ source, destination: `/#${section}`, permanent: true }));
    return [
      ...toSection(["/about", "/about-us"], "about"),
      ...toSection(["/contact"], "contact"),
      ...toSection(["/posts", "/blog", "/articles", "/showcase", "/docs", "/index.xml"], "writing"),
      ...toSection(["/tags/:path*", "/categories/:path*"], "writing"),
    ];
  },
};

export default nextConfig;
