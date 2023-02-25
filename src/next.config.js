// const remarkGfm = require("remark-gfm");

const withBundleAnalyzer = import("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkGfm],
//     rehypePlugins: [],
//     // `MDXProvider`を使う場合はコメントを外すこと
//     // providerImportSource: "@mdx-js/react",
//   },
// });
const withPlugins = import("next-compose-plugins");
/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withBundleAnalyzer], {
  // // @next/mdx option
  // pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // reactStrictMode: true
});
