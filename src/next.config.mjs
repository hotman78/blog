import withBundleAnalyzer from "@next/bundle-analyzer";
import rehypeKatex from "rehype-katex"; // Render math with KaTeX.
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import remarkMath from "remark-math"; // Support math like `$so$`.
import withPlugins from "next-compose-plugins";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // @next/bundle-analyzer option
  enabled: process.env.ANALYZE === "true",
  // @next/mdx option
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [[rehypeKatex, { throwOnError: true, strict: true }]]
  }
});

export default withPlugins([withBundleAnalyzer, withMDX], nextConfig);

/**
 * @type {import('next').NextConfig}
 */
