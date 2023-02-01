const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
const withMDX = require("@next/mdx")();
const withPlugins = require("next-compose-plugins");
/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withBundleAnalyzer, withMDX], {
  // @next/mdx option
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true
});
