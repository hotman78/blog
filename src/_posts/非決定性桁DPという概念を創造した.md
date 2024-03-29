---
title: 【競プロ】非決定性桁DPという概念を創造した
excerpt: "最初に競技プログラミングにおいて有用なフック長の公式について説明し、次にそれの一般化と既存の問題の新しい解き方の提案をします"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2021-12-21"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
tags: 競技プログラミング オートマトン
---

# 経緯

[竹 DP](https://opt-cp.com/abc050d/) と俗に言われる桁 DP の実装テクを知り、桁 DP との解ける問題集合の差異があるのではないかと考えていた所、桁 DP が想定解でないものも後に述べる非決定性桁 DP を使用する事で解けることに気がついたので記事にしました。
桁 DP の軽い解説も書きますが、解説用の記事ではないのでご承知おきください。
わからない事や指摘などは[twitter(@hotmanww)](https://twitter.com/hotmanww) または Qiita の編集リクエストに送ってください。

# 桁 DP とは

競プロテクニックです。ググると無限に解説記事が出てくると思います。
かっこいい感じに言うと。

- [DFA(決定性有限オートマトン)](https://ja.wikipedia.org/wiki/%E6%B1%BA%E5%AE%9A%E6%80%A7%E6%9C%89%E9%99%90%E3%82%AA%E3%83%BC%E3%83%88%E3%83%9E%E3%83%88%E3%83%B3) が受容する文字列の数はノード数を $N$ として、$\mathcal{O}(N)$ で求められる事 (正確には非輪状)
- $N$ 以下の正整数を受容する ノード数 $\mathcal{O}(\log (N))$ の DFA が存在すること
  を用いた数え上げのテクニックです。

# 競技プログラミングにおける DFA

DFA はノードと受け取る文字が同じであるならば遷移先が一意に定まる物です。
競技プログラミングでは

- $N$ 以下の正整数を受容する DFA (桁 DP:ノード数 $\mathcal{O}(\log N)$)
- 文字列 $S$ の連続部分列全体を受容する DFA (suffix automaton:ノード数 $\mathcal{O}(|S|)$)
- 文字列 $S$ の連続とは限らない部分列を受容する DFA (部分列 DP:ノード数 $\mathcal{O}(|S|)$)
- 文字列 $S$ を連続とは限らない部分列として含む文字列全体を受容する DFA (名前募集中: ノード数 $\mathcal{O}(|S|)$)
- 文字列 $S$ を連続部分列として含む文字列全体を受容する DFA (KMP 法+$\alpha$/Aho–Corasick algorithm: ノード数 $\mathcal{O}(|S|)$)

あたりが有名です。

- $N$ 文字以下の文字列を受容する DFA (ノード数: $\mathcal{O}(N)$)
- $D$ の倍数を受容する DFA (ノード数: $\mathcal{O}(D)$ )
- 1 が連続しない 01 文字列の DFA (ノード数: $\mathcal{O}(1)$)

等の基本的な物も DFA として覚えておくと(オートマトンの直積を考えることで)考察の助けになるかもしれません。

# DFA の苦手なこと

DFA は遷移先が一つなので、「一つの文字列に対して複数の操作が考えられて、そのどれかが受容されるものを数え上げる」といった物を考えるのは難しいです。
そこで [NFA(非決定性有限オートマトン)](https://ja.wikipedia.org/wiki/%E9%9D%9E%E6%B1%BA%E5%AE%9A%E6%80%A7%E6%9C%89%E9%99%90%E3%82%AA%E3%83%BC%E3%83%88%E3%83%9E%E3%83%88%E3%83%B3)というものを考えます。
具体的には「ノードと受け取る文字が同じであっても遷移先が一つには限らず、適切に遷移先を選べば受容されるノードに到達するならばその文字列は受容されると考える」というものです。
勘がいい人なら気がつくと思いますが、到達しうるノードの集合を管理する DP(bit DP) を考える事で、ノード数 $N$ の NFA は、ノード数 $\mathcal{O}(2^N)$ の DFA に置き換える事ができます。([関連記事(knshnb さんの blog)](https://blog.knshnb.com/posts/aoj2587/))

# 非決定性桁 DP

よって $N$ 以下の正整数に対する非決定的な DP が $\mathcal{O}(N)$ で出来ました...では殆ど嬉しくないですよね。
実は桁 DP の様なものは NFA で考えてもノード数のオーダーが変わらず $\mathcal{O}(\log N)$ のままです(桁数を定数と考えるならば)。

これは、桁 DP において、 1 回遷移後のノードと 2 回遷移後のノードが同時に到達しうる事はありえないので、同じ桁のノードは定数個しかないことから、NFA においても同じ桁のノードは定数個しか無いことから言えます。

これによって、単純な DFA では受容されるかどうかがわからないものに対しても桁 DP を考えることが出来るようになりました。

# これによって解ける問題(ネタバレ注意)

https://kmyk.github.io/cp-unspoiler/?q=aHR0cHM6Ly9hdGNvZGVyLmpwL2NvbnRlc3RzL2FnYzAxNS90YXNrcy9hZ2MwMTVfZA%3D%3D

(cp-unspoiler は[kimiyuki](https://kmyk.github.io/blog/) さんによって作成されたネタバレを防ぎつつ問題のリンクを貼るためのサイトです)

想定解は桁 DP ではないです

<details><summary>ヒント</summary>
$N$ 以下の正整数の集合に対する NFA と考えられるので、集合の集合を管理する DFA に帰着されます。
</details>

[解答例](https://atcoder.jp/contests/agc015/submissions/28049610)

探せば他にもあるような気もするので、知ってる方などいれば [twitter(@hotmanww)](https://twitter.com/hotmanww) まで連絡ください。

# 追記

noshi91 さんに桁 DP の有名題を非決定性桁 DP で解いて頂いたやつです
とても機械的に解けるようになっていて分かりやすいので是非参考にしてみて下さい！！
<details><summary>twitter リンク(Atcoder の問題へのリンクあり)</summary>
https://twitter.com/noshi91/status/1473633490617126919
</details>
