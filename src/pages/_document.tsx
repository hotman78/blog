import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>
      </Head>
      <body className="bg-accent-2 dark:bg-dark-accent-2 text-dark-accent-2 dark:text-accent-2">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
