---
title: 【競技プログラミング】難問も解ける！Young tableaux及びSkew tableauxのフック長の公式と数え上げ問題への適用
excerpt: '最初に競技プログラミングにおいて有用なフック長の公式について説明し、次にそれの一般化と既存の問題の新しい解き方の提案をします'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2021-01-23'
author: hotman78
ogImage:
  url: '/assets/blog/preview/cover.jpg'
tags: 競技プログラミング 数学
---
# 追記
この記事の内容に厳密性を付加した神記事が出てました！
[【月刊組合せ論 Natori】EDPC-T Permutation を深掘り【2022 年 9 月号】](https://hackmd.io/@koboshi/B1mU5by25)

# 目的
最初に競技プログラミングにおいて有用なフック長の公式について説明し、次にそれの一般化と既存の問題の新しい解き方の提案をします
記事中に[Permutation (EDPC-T)](https://atcoder.jp/contests/dp/tasks/dp_t)及び[Ball Eat Chameleons(AGC 021 E)](https://atcoder.jp/contests/agc021/tasks/agc021_e)のネタバレを含みます
公式の証明はしません(難しいので)
質問や訂正等あればコメントか[twitter](https://twitter.com/hotmanww)までよろしくお願います

# ヤング盤(Young tableaux)のフック長の公式
一般にフック長の公式といえばこれで、競技プログラミングの世界でも高度典型として親しまれています

![図1 ヤング図形とヤング盤](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/4aae9d95-3298-d53b-b087-35e95ebfe21d.png)
(図1 ヤング図形とヤング盤)

**ヤング図形**は上図の様な正方形の集まりで、中に数を書き込む事が出来ます
また、下に行く程横に積まれるマスの数が少なくなります
ヤング図形にあるマスに書かれている数がそれより左上に書かれている数より大きくなるように数を書き込んだ物を**ヤング盤**と言います
**標準盤**は**ヤング盤**であって、、書かれている数は $1$ から マスの数までの順列になっているものです

ここで、ヤング図形に対して考えられる標準盤を数え上げる公式が**フック長の公式**です
**フック長**とは各マスについて、自分を含め右か下にあるマスの数です。(右下にあるマスは考えない事に注意してください)
マスの数の階乗から各マスのフック長を割った物が実はその答えになります
![図2 各マスのフック長](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/57b2f135-87d2-78f8-a4aa-41ce908b8852.png)
(図2 各マスのフック長)

# カタラン数
"()" , "(())" , "()()"の様に括弧の対応がきちんと取れている様な、'('と')'からなる文字列を**括弧列**といいます
ただし、")(" , "(()" の様に括弧の対応が取れてない物は括弧列とは呼びません

ここで長さ $2N$ の括弧列とは次のような文字列であることが分かります

- '('と')'はそれぞれ $N$ 個ずつある
- $K(1\leq K \leq N)$ 個目の'('は $K$ 個目の')'より左にある

よって、長さ $2N$ の括弧列の種類数は以下の様なヤング図形の標準盤の数と一致します
これを**カタラン数**といいます
![図3 標準盤の数がカタラン数に対応するヤング図形](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/27478c87-7273-af7e-87f0-70d747623839.png)
(図3 標準盤の数がカタラン数に対応するヤング図形)

## Skew tableauxのフック長の公式
これだけでもかなり色々な事が出来そうですが、フック長の公式は更に一般化出来ます
![図4 Skew tableaux](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/1eb33836-bea4-e171-1625-a69394a5e942.png)
(図4 Skew tableaux)

**Skew tableaux**は上図の様にヤング図形から小さいヤング図形を取り除いた様な形をしています
複雑ですが、これについても標準盤の様な物の数を数える事が出来ます
![図5 操作](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/ddcd7902-0af2-ae54-3f25-4928c6cd4a8d.png)
(図5 操作)

まず、元のSkew tableauxから**再帰的に"」"字型の部分を"「"字型に変える事で出来上がる全ての図形**に対して(元のヤング図形における)フック長の逆数の積を求め、足し合わせます
ただし重複する図形は一回のみ計算します
これとマスの数の階乗の積がSkew tableauxの標準盤の様な物の数になります
頑張って計算すると図4の標準盤の様な物の数は $344=8!(\frac{1}{1^3*2^2*3*4^2}+\frac{1}{1^2*2^2*3*4^2*5}+\frac{1}{1^3*2*3*4^2*6}+\frac{1}{1^2*2*3*4^2*5*6}+\frac{1}{1^2*2*3*4*5*6*7})$ 個となります(手計算混じりなので間違ってるかも...)
![図6 再帰的操作後の図形と各マスのフック長](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/ac4100ae-a2f4-b96c-7979-6085dee5fe42.png)
(図6 再帰的操作後の図形と各マスのフック長)

一般的な場合においてこの公式の愚直な実装には指数時間かかってしまいますが、特定の状況下ではこれを高速化出来ます

# permutation(EDPC - T)
[Permutation (EDPC-T)](https://atcoder.jp/contests/dp/tasks/dp_t)を解くことを考えます
これがSkew tableauxの標準盤の様な物の数え上げに適応出来るのは定義より明らかですが、そのままやると計算量が爆発してしまいます
![図7 <<<><>><<>に対応するSkew tableaux](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/51855300-5c29-ae48-2007-ba01acc14d9f.png)
(図7 <<<><>><<>に対応するSkew tableaux)

ここでよく観察すると再帰的に操作した後の図形は、左上を削る前のヤング図形に置いて、左下から右上に右または上に進むことでたどり着く経路に相当することが分かります。
よって原始的なDPによって答えを求める事が出来ます

![図8 削る前のヤング図形](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/68551/c1c303e6-3d02-d4f6-fb0d-1884d41ee610.png)
(図8 削る前のヤング図形)

# カタランの台形(Catalan's trapezoids) 

- n個の'('とk個の')'で文字列を作る
- 但し、途中で')'の数が'('の数よりm個以上多くなる事を許さない

この条件を満たす文字列の数f(n,k,m)はSkew tableauxの標準盤の様な物の数え上げに帰着出来ますが、高さが2であることを利用してシンプルに二項係数の差として表す事が出来ます
これを**カタランの台形(Catalan's trapezoids)**と言います(参考:[Catalan's triangle(wikipedia)](https://en.wikipedia.org/wiki/Catalan%27s_triangle))

練習問題:[Ball Eat Chameleons(AGC 021 E)](https://atcoder.jp/contests/agc021/tasks/agc021_e)

# 最後に
かなり濃密な記事になったと自負していますがいかがでしたか？
LGTMなどをしてもらえると励みになります
