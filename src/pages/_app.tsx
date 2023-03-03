import { useEffect } from "react";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
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
      <DefaultSeo
				defaultTitle="hotman's blog"
				description="hotman のブログです。"
				openGraph={{
					type: "website",
					title: "hotman's blog",
					description: "hotmanのブログです。",
					site_name: "hotman's blog",
					url: "blog.hotman78.com",
					images: [
					 {
					 　url: "https://og-playground.vercel.app/?share=XZJNc4IwEIb_SiZOx4vFVAFrBj3UdqY99FRneuHCR4DYkDAQVGT4791Acawndp83mze7S4sjFTNMsRfzoy8RqnQj2KZtTYxQxniaaYqmT4Q8TGcDPPFYZ3cs5lUhggZoIth5pCZ-5SWLNFcStEiJOpejGgieyg_N8spITGpWjtKhrjRPmp0CKI3_fzkMop-0VLWMd0qoEvRJkiRXV6j64hdG0XJxg77_enEJ6WnX-XJrAq86pjedbXy8cnw8kCNnpxd1BkYQQSsHuVcp4UIAnxBCRjQOD-VBmXLTsakpztPeDKHeDgyLQGcohuLP5cpy1tbCEUvXWsPt9rvl2kPy6NoXH2-9uTk9PHQOLx0i2Na9214VFNkErLaZ0nkgpxUKhUq9ORyGqvGLZ1gVZiEVpi3uW8b0GYaCh21japskZmGdYpoEomIzzHJ14PumML-KPvUZ3GPG-paHLMZUlzXrul8",
					   width: 800,
					   height: 600,
					   alt: 'Og Image Alt',
					   type: 'image/jpeg',
					 },
					],
				}}
				twitter={{
					handle: '@handle',
					site: '@site',
					cardType: "summary_large_image",
				}}
			/>
      <Analytics />
    </>
  );
}
