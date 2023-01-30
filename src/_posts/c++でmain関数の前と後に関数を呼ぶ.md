---
title: "【gcc拡張】c++でmain関数の前と後に関数を呼ぶ"
excerpt: "昔考えたやつをブログ化"
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-06-30"
author: hotman78
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

gcc 拡張により
関数の前に `__attribute__((constructor))` を付けると最初に
関数の前に `__attribute__((destructor))` を付けると最後に呼ばれます

```cpp
__attribute__((constructor))
void constructor() {
    cin.tie(0);
    ios::sync_with_stdio(false);
    cout<<fixed<<setprecision(15);
}
```

とかしておくと便利です clang では使えなかった気がします(調べてないです)
