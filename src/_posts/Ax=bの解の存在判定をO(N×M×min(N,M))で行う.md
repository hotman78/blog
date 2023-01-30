---
title: "Ax=bの解の存在判定をO(N×M×min(N,M))で行う"
excerpt: "拡大係数行列 $(A|b)$ を考える"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-06-20"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

拡大係数行列 $(A|b)$ を考える

この時、$\mathrm{rank}(A)=\mathrm{rank}(A|b)$ の時のみ解が存在する事が知られている。

転置行列についても rank は同じであるため、$\mathcal{O}(N\times M\times \min(N,M))$ で計算が出来る。

$\mathrm{rank}(A^{t})$ から $\mathcal{O}(N^{2})$ で $\mathrm{rank}((A|b)^{t})$ が求められる事から転置行列においては 2 倍の定数倍高速化も可能である。
