import bundle_analyzer from "@next/bundle-analyzer";
const withBundleAnalyzer = bundle_analyzer({
  enabled: process.env.ANALYZE === "true"
});
module.exports = withBundleAnalyzer({});
