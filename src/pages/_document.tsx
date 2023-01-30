import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
      </Head>
      <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>
      <body className="bg-accent-2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
