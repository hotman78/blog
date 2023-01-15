---
title: 'rustでN次元配列を楽に作るマクロ'
excerpt: 'C++よりは元々作りやすい感じがありますが、それでも有ると便利だと思います'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2022-09-24'
author: hotman78
ogImage:
  url: '/assets/blog/preview/cover.jpg'
---

```rust
macro_rules! make_vec{
    ( $val:expr , $head:expr)=>{
        vec![$val;$head]
    };
    ( $val:expr , $head:expr , $($tail:expr),+ )=>{
        vec![make_vec!($val,$($tail),+);$head]
    };
}
```

で作れます

```rust
let mut dp=make_vec!(0,h,w);
```
のように使います
C++よりは元々作りやすい感じがありますが、それでも有ると便利だと思います
