---
title: "overleaf(texのwebアプリ)で簡単にatcoder風作問"
excerpt: "こういうのが作れます"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-07-06"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

こういうのが作れます

<figure class="figure-image figure-image-fotolife" title="例">[f:id:hotmanww:20200706205135p:plain]<figcaption>例</figcaption></figure>

<span style="font-size: 200%">手順</span>
https://doratex.hatenablog.jp/entry/20180503/1525338512
これに従って overleaf を日本語対応させます
後は下記のテンプレートに書き足すだけ！！
改行は\\\\でやると見やすい気がします！

```tex
\documentclass[dvipdfmx,autodetect-engine]{jsarticle}
\usepackage[noto-otc]{pxchfon}

\begin{document}

\huge{Xor Sum っぽいやつ}\\
\hrulefill\\
\normalsize
実行時間制限: 2 sec / メモリ制限: 1024 MB /\\\\
\huge{問題文}\\\\
\large
ここに問題文を書く\\
\huge{制約}\\
\large
ここに制約を書く\\
\end{document}
```
