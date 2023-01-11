import { useEffect } from 'react';
import { AppProps } from 'next/app'
import '../styles/index.css'
import 'zenn-content-css';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements"); // 数式をブラウザでレンダリングできるようにします
  }, []);
  return <Component {...pageProps} />
}
