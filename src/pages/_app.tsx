import { useEffect } from "react";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import "../styles/index.css";
import "github-markdown-css/github-markdown.css";
import "katex/dist/katex.min.css";
import "components/markdown-styles.module.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるようにします
    import("preline");
  }, []);
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
