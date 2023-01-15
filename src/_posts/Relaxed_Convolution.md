---
title: 'Relaxed Convolution(Online FFT)によるexp/inv/log/sqrt/pow 【備忘録】'
excerpt: 'aa'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2023-01-04'
author: hotman78
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---
# 初めに
この記事ではあくまでも時間計算量のオーダーのみを考慮しているため、定数倍についての保証はありません。

# relaxed convolutionとは
$\mathcal{O}(N\log ^2 N)$ で多項式の積を計算するオンラインアルゴリズムです。Online FFTと呼ばれる事もありますが、Relaxed Convolutionの方が使われていそうだったのでこちらで統一します。
このアルゴリズムを使うことで形式的べき級数の $\exp$ / $\mathrm{inv}$ / $\log$ 等も出来ます。

## relaxed convolution のやり方
Kiriさんのわかりやすい解説があったのでここでは割愛させて下さい
https://qiita.com/Kiri8128/items/1738d5403764a0e26b4c

https://www.sciencedirect.com/science/article/pii/S0747717102905626

# 積分のやり方
$\int f dx$ の $N$ 項目は、 $f$ の $N-1$ 項目に $N$ をかけた物なので、一つ前の項を保存しておけば出来ます。

# exp(f) のやり方
$$
\begin{align}
g=\exp(f)
\end{align}
$$
とおくと、

$$
\begin{align}
gf'&=f'\exp(f)\\
\int gf' dx &=\exp(f)\\
&=g
\end{align}
$$

より、$g$ の $N-1$ 項目までと、$f'$ の $N-1$ 項目までをrelaxed convolutionにて掛け合わせる事で出来ます。

verify : https://judge.yosupo.jp/submission/119568

# relaxed convolution を高々定数項だけずらす拡張
$f$ の $N-t$ 項目まで、 $g$ の $N-t$ 項目までをかけ合わせたものの $N$ 項目までを手に入れることが出来ます。
$f=f_0+f_1x^t$ ($\mathrm{deg}(f_0) \lt t$)、 $g=g_0+g_1x^t$ ($\mathrm{deg}(g_0) \lt t$) とおくと、

$$
\begin{align}
fg=f_0g_0+(f_1g_0+f_0g_1)x^t+f_1g_1x^{2t}
\end{align}
$$

$f_0$ と $g_0$ に関しては高々定数項しかないため前半3項は愚直に計算しても計算量はボトルネックとなり得ません。
また、$N \geq t$ の場合、 $f$ の $N-t$ 項目は $f_1$ の $N-2t$ 項目であることから、$f_1$ と $g_1$ をrelaxed convolutionで掛け合わせる事で $f_1g_1$ の $N-2t$ 項目まで手に入り、
これにより $fg$ の $N$ 項目までを手に入れる事が出来ました。
これは Kiriさんのブログの図の左上の$1 \times 1$のマスを増やしたと考えると直感的に理解出来るかと思います。
また、fとgの項数が高々定数個ずれる場合、小さい方に合わせてあげれば良いです。

# inv のやり方
$g=1/f$ とおくと、 $fg-1=0$ であることから、

$$
\begin{align}
[x^N] fg = [x^N] (f \bmod x^{N-1}) \times (g \mod x^{N-1}) + ([x^N]f \times [x^N]g + [x^N]f  \times x^0)g
\end{align}
$$

を前章の拡張を用いて計算する事で$g$の$N$項目を求める事が出来ます。

verify : [https://judge.yosupo.jp/submission/119569$

# log のやり方
$g=\log f$ とおくと、 $g=\int \frac{f'}{f} dx$ であることから前章までの内容を用いて計算することが出来ます。
(23/01/08/9:53 追記) $h=\frac{f}{g}$ とおくと $gh=f$ となり、これはinvとほぼ同様に処理出来るので一回のrelaxed convolutionで行う事も出来ます。

verify : https://judge.yosupo.jp/submission/119575

# sqrt のやり方
$f$ の初項を非零に限定すると、 $g=\sqrt f$ とおくと、 $g^2=f$ であることから inv の章と同様に一つだけ項数をずらすことで出来ます。
初項が零の時はそもそも  $N$ 項目までの情報から $2N$ 項目までに非零が存在するかを知り得ないので定義から難しそうです。
(そもそも形式的冪級数のsqrtは定数項1を前提とするのが一般的という話もあります)

verify : TODO
 
# pow のやり方
$f^M=\exp (M\log (f))$ を使えば出来ます。
例の如く $\log$ の適用条件等に注意する必要があります。

verify : TODO

# その他
分割統治法を用いたアルゴリズムとの併用など様々なアルゴリズムが考えられそうです。