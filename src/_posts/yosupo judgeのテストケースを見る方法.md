---
title: "yosupo judgeのテストケースを見る方法"
excerpt: "C++よりは元々作りやすい感じがありますが、それでも有ると便利だと思います"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-06-18"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

# 追記

テストケースを見れるサイトを公開しました
https://hotman78.github.io/library-checker-testcases/

# 方法

- コマンドプロンプトを開きます

- git を入れます(手順は各自調べてください)

-cd コマンドで適当なディレクトリに移動して下の 2 つのコマンドを打ちます

> ||
> sudo git clone https://github.com/yosupo06/library-checker-problems.git
> cd library-checker-problems
> ||<

-テストケース生成

```sh
./generate.py -p (問題のファイル名)
```

とします
例えば union-find なら

```sh
./generate.py -p unionfind
```

とします

./問題種類/問題名/in に入力
./問題種類/問題名/out に出力
ができてます！
