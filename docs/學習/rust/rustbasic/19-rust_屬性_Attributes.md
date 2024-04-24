---
＃id: doc-markdown
title: 19-rust_屬性_Attributes
description: _屬性_Attributes
keywords:
  - rust
last_update:
  date: 4/24/2024
  author: ttom
---
不知道各位在看一些 Rust 的原始碼，或是網路上別人寫的範例的時候，是否常看到一些語法，它們看起來好像不太像 Rust 的程式碼，倒是有點像註解，例如：

```rust
#[allow(dead_code)]

```

這樣的寫法在 Rust 裡稱之「屬性（Attributes）」，它可以用來提供額外的訊息或指導 Rust 編譯器的一些行為。舉例來說，假設我有一個 Struct 像這樣：

```rust
struct Cat {
    name: String,
    age: u8,
}

```

如果我想用 `println!()` 把它印出來：

```rust
let kitty = Cat { name: String::from("Kitty"), age: 18 };
println!("{:?}", kitty);

```

Rust 的編譯器會跟你說沒辦法這樣印：

```rust
$  cargo run
error[E0277]: `Cat` doesn't implement `Debug`
11 |     println!("{:?}", kitty);
   |                      ^^^^^ `Cat` cannot be formatted using `{:?}`
   |
   = help: the trait `Debug` is not implemented for `Cat`
   = note: add `#[derive(Debug)]` to `Cat` or manually `impl Debug for Cat`
   = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider annotating `Cat` with `#[derive(Debug)]`

```

為什麼不行？因為在 `println!()` 巨集裡如果放的是 `{:?}` 的話，意思是會用 debug 模式來印東西。根據 Rust 編譯器給你的提示之一，說 `Cat` 這個 Struct 並沒有 `Debug` 的特徵。雖然提示有提到可以自己手動實作 `Debug` 特徵，但還好 Rust 有先幫我們寫好不少的 Trait，其中一個就是 `Debug`，我們就直接把它拿來用，像這樣：

```rust
#[derive(Debug)]
struct Cat {
    name: String,
    age: u8,
}

```

`derive` 中文可翻譯成「衍生」或「派生」，這句上面那個看起來有點像註解的寫法，以結果來說，有點像是幫原本的 Struct 加上了 `Debug` 特徵，又因為 `Debug` 特徵是 Rust 原本就幫我們寫好的，所以就不用特別自己再寫一次了。

可以印出來了，但程式碼執行之後發現 Rust 編譯器又跟我們抱怨了一下：

```rust
$ cargo run
warning: fields `name` and `age` are never read
2 | struct Cat {
  |        --- fields in this struct
3 |     name: String,
  |     ^^^^
4 |     age: u8,
  |     ^^^
  |
  = note: `Cat` has a derived impl for the trait `Debug`, but this is intentionally ignored during dead code analysis
  = note: `#[warn(dead_code)]` on by default

```

不是錯誤，只有警告提醒而已，就是跟你說 `name` 跟 `age` 這兩個欄位你都沒用到，這個我們之前也看過，對 Rust 來說算是一個 `dead_code`，如果你知道這些欄位晚些會用到，同樣可以加上屬性告訴它「我可以允許 `dead_code`」：

```rust
#[derive(Debug)]
#[allow(dead_code)]
struct Cat {
    name: String,
    age: u8,
}

```

你本人都說允許了，Rust 編譯器它就會店店不講話了。

還有像是 `#[test]` 以及 `#[cfg(test)]` 我們在後面介紹測試的章節會再次看到它們。更多的屬性可參閱 [Rust 官方手冊](https://doc.rust-lang.org/reference/attributes.html)說明。

在 Rust 中，屬性一開始看的時候，會以為是註解，但其實它是可以用於來提供額外的訊息或指導 Rust 編譯器的行為，像是自動生成程式碼或是暫時抑制警告訊息等功能。屬性是一種用於提供額外信息和指導編譯器、工具或宏的標記或註解。它們以 `#[...]` 的形式出現在代碼中，通常位於變數、函數、結構、枚舉、模組等聲明的前面。屬性可以影響程式碼的行為、代碼生成、警告抑制等。

除了內建的屬性之外，如果想要自己寫自己專屬的屬性也沒問題，但會用到巨集（Macro）的寫法，這待後續介紹完巨集之後我們再來看看怎麼寫。
