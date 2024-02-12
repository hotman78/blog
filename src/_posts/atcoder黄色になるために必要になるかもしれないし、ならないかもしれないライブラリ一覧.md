---
title: "atcoder黄色になるために必要になるかもしれないし、ならないかもしれないライブラリ一覧"
excerpt: "必要ではないがち"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-07-10"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

# util

modint:
二項係数系もつけておくと便利

ツェラーの公式:
どちらかと言うと codeforces で使える
年月日を入力にとって曜日を出力する

fastIO:
どちらかと言うと codeforces で使える
入出力が本質な問題が時々ある

iterator:
あんまり使わない
自作イテレーターのテンプレート

timer:
実行時間を図る
ラムダ式で関数を渡す形にすると便利

# 平衡二分木

とりあえず、AVL 木で set 型、map 型、配列型を持っておけば OK
永続遅延平衡二分木とか言うヤバが atcoder に出たことがあるので、持っておいたほうがいい(本当？)(僕は持ってないです)

# セグメント木

双対/遅延/通常を動的/通常の２つで持っておくといいかも
2D セグ木も yukicoder ではよく見る

# union-find

UF:これはみんな持ってそう

マージテク UF:データを乗せてくっつける(実装省略に使える)

重み付き UF:atcoder で出たこともあったはず

online/offline dynamic connectivity:
...よければ

# 形式的べき級数

https://judge.yosupo.jp/ を埋めれるようなやつ一つ持っておけば OK
atcoder では mod を取らないやつがよく聞かれるので mod 2^64-2^32+1 もあるといいかも(僕は持ってない)

# データ構造

binary trie:
xor 系は atcoder で頻出！！(binary trie は作っておけば役に立つかもくらい...)

bit vector:
WM 用

cartesian tree:
もしかしたらなにかに使うかも...

累積和:
ライブラリ化したけどフルスクラッチの方が慣れると書きやすい

disjoint sparse table:
冪等性が要らない状態で静的に<O(NlogN),O(1)>の区間クエリ

32 分木 trie:
高速な set の実装に使える(new をメモリプールで高速しないと速くならない？)
https://topcoder-g-hatena-ne-jp.jag-icpc.org/spaghetti_source/20121216/1355652855.html
https://qiita.com/tubo28/items/f058582e457f6870a800

kdtree:
要らなそう

leftist_heap:
永続化してからが本番
永続マージ可能なデータ構造はとても使える

Li_Chao_tree:
convex hull trick するやつ
自分のは double で死ぬ

RMQ:
黄色になってから作った
$\lt O(N),O(1)\gt$ の RMQ

skew_heap:
手軽なマージ可能ヒープ、非想定が殴れるかも

sparse_table:
実装も軽いし、disjoint sparse table より定数倍が軽いかも知れない(冪等性が必要)

SWAG:
少し前に流行ったやつ
尺取法と相性がいい

wavelet_matrix:
何でも出来るけど自分は範囲内で k 番目に大きい値を取るやつしか作ってない
必要になったら追加する予定

永続配列:
カラフルツリーなど atcoder にも殴れる問題がある印象

永続 leftest heap:
永続マージ可能ヒープ、強すぎる

永続セグメント木:
意外と使い所が無い

永続 union find:
atcoder で出がち(並列二分探索を想定解に出来るため)

永続 queue:
永続配列使った $\mathcal{O}(logN)$ 実装しか持ってないけどこれで十分？

永続 stack:
永続配列使った $\mathcal{O}(logN)$ 実装しか持ってないけどこれで十分？
簡単に作れるとの情報をもらったので、作ります

# グラフアルゴリズム

ダイクストラ:
pbds 使用前提で $\mathcal{O}(E+V\log V)$に高速化出来るやつは持ってて損は無いかも
Travel by Car で after contest の TLE を防ぐことが出来た例あり

重心分解:
この前記事を書いた
https://qiita.com/hotman78/items/6d54c2713bc151a0a1ce

支配木:
趣味

最大独立集合:
atcoder で類題が出ても問題はなさそう(ほんと？)

euler tour tree:
動的木の一種

HL 分解:
atcoder でも使用しやすいかも

LCA:
これは作っておいたほうがいい

link cut tree:
殴れるかも知れない

最大流:
普通に atcoder にでる(と思う)

最小費用流:
普通に atcoder にでる
コストスケーリングも持ってる(どや)

全方位木 DP:
ABC 勝ちたいなら持っておくべきなきがする

強連結成分分解:
これも持っておいたほうが良さそう

top tree:
作れないので要らない事にしておく

二辺連結成分分解:
あって損はしない

2-sat:
atcoder で普通に出ると思う(よく知らず)

# 数学アルゴリズム

二分探索:
親の顔より見た
評価関数をラムダ式で渡す
double もあるといい

カーマイケル数:
素数 mod とは限らない(本当？)

二項係数:
modint に合わせて

ガーナーのアルゴリズム:
特に使う機会はないかも(NTT くらい？)

素数判定:
ミラーラビンの $\mathcal{O}(\log N)$ を持っておくと便利

素因数分解:
ロー法+ミラーラビンで $\mathcal{O}(N^{\frac{1}{4}})$ を持っておくと殴れがち

ラグランジュ補間:
0~N-1 項渡すと k 項目が帰ってくる感じ

離散対数:
持ってて損はない

sum*of_floor_linear:
$\sum*{i=0}^{n-1} \lbrack\frac{a \times i +b}{c}\rbrack$ の計算
sum_of_floor_linear を解くのに使える

tetration:
a^a^a^a^a^a...の計算
tetration を解くのに使える

totient_sum:
https://yukicoder.me/wiki/sum_totient
atcoder 以外ではわりかし活躍しそう

離散平方:
持ってません(は？)

# 行列

行列式:
行列木定理とか atcoder で出たら(出るの？)
疎行列は色々な高速化がある

行列累乗:
ABC で出たことがあるので持っとくべき

対角化:
持っておくべきだけど毎回フルスクラッチ
noshi 基底が便利(集合を xor して特定の値を作ったり、最大値を作ったり)

# 文字列アルゴリズム

AhoCorasick:
複数文字列検索のお供、オートマトン上を DP する応用は自分には難しいかも

manacher:
あんまり理解してないけど回文といえばこれと eertree

Z アルゴリズム:
はい

動的 Z アルゴリズム:
これは流行る(_´ω ｀_)

rolling hash:
昔過ぎて設計思想がむちゃくちゃなので、フルスクラッチすることが多い

subseqence:
部分列をオートマトン化して保持するやつ(俗に言う部分列 DP が出来る)

suffix array:
使ったことなし

suffix automaton:
いずれは使いこなしたい

trie:
atcoder にあってびっくり

# DP

monotone_minima
簡単だけど強力

オフラインオンライン変換
簡単だけど強力
$\mathrm{dp}\lbrack j \rbrack = \min(\mathrm{dp}\lbrack i\rbrack +f(i,j))$を $\mathcal{O}(N\log N)$とか$\mathcal{O}(N(\log N)^2)$ で解く事ができる
