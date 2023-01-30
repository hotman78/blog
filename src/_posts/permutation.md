---
title: "【競技プログラミング】1~2K+1の順列2つの和でK+2~3K+2の順列が作れる話"
excerpt: "ICPC海外リージョナルとかyukicoderとかatcoderで見たことある気がする"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2022-09-24"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

ICPC 海外リージョナルとか yukicoder とか atcoder で見たことある気がする(問題は atcoder の Non-triangular Triplets 位しか思い出せない)

```txt
1,2,3,4,5
+
5,3,1,4,2
=
6,5,4,8,7
```

```txt
1,2,3,4,5,6,7
+
7,5,3,1,6,4,2
=
8,7,6,5,4,11,10,9
```

一般化は

```txt
1,2,3,...,2K+1
2K+1,2K-1,2K-3,...,1,2K,2K-2,...,2
```

2 ずつ減らしていくイメージ
