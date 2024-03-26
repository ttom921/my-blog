---
＃id: doc-markdown
title: rust特別語法
description: 有關rust特別語法
keywords:
  - rust
last_update:
  date: 3/26/2024
  author: ttom
---

(函式)?;
-------
有一個常用的取巧手段 — The question mark operator（也就是我一開始看不太懂的 ?）：
```rust
let v = parse_version(&[1, 2, 3, 4])?;
```
可以直接把 Ok 的值取出來，遇到 Err 則是直接往呼叫的外層回傳。另外，如果遇到不預期或不可修正的錯誤，也可以考慮用 `panic!()` macro 處理錯誤。

###### 參考資料
JavaScript 開發者用 napi-rs 初學 Rust
https://chentsulin.medium.com/javascript-%E9%96%8B%E7%99%BC%E8%80%85%E7%94%A8-napi-rs-%E5%88%9D%E5%AD%B8-rust-a6cc2715aa91

