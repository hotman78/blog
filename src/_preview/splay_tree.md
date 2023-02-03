---
title: "splay tree"
excerpt: "高度典型の応用問題"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2023-02-01"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
status: preview
---

# 問題概要

命令列が与えられるのでその命令に沿ってロボットを動かした際に $(0,0)$ から $(X,Y)$ に移動できるような障害物の置き方を構築
但し、命令は 障害物が行き先にない時 $X \pm= 1$ または $Y += 1$ というもの

# 解法

前提として $(X,Y)$ にたどり着けるなら $(X-1,Y)$ 、 $(X,Y-1)$ にはたどり着ける。
また、 $T$ 回命令を実行した後、
$(X,Y)$ にいる時、
