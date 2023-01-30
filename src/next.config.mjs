import bundle_analyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundle_analyzer({
  enabled: process.env.ANALYZE === "true"
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withBundleAnalyzer({});

export default nextConfig;
