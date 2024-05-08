---
＃id: doc-markdown
title: 22-rust_套件＿Crate
description: _套件＿Crate
keywords:
  - rust
last_update:
  date: 5/08/2024
  author: ttom
---
在之前學到了可以用 `mod` 來建立模組，但檔案都還是寫在同一個檔案裡，這個章節我們可以試著把它拆開放到不同的檔案裡。

不過在 Rust 裡跟「模組」有點像的名詞有 Module、Crate 以及 Package，感覺好像都是在講模組之類的東西，但這幾個名詞有一些些不同...

名詞定義
----

### Package

在 Rust 裡的 Package 通常會是一個獨立的專案，當你執行 `cargo new` 指令的時候：

```go
$ cargo new hey-rust
Created binary (application) `hey-rust` package

```

你會看到這裡建立了一個叫做 `hey-rust` 的「package」。除此之外，如果你打開 `Cargo.toml` 檔案的話也會看到 package 字樣：

```toml
[package]
name = "hey-rust"
version = "0.1.0"
edition = "2021"

[dependencies]

```

跟其它程式語言相比，Rust 的 Package 比較接近其它程式語言的「專案」，而不是套件。

### Crate

如果拿 Crate 這個字去查字典：

> crate /kreɪt/
> 
> a large wooden container for transporting goods

大概就是有時候我們會在菜市場或卡車上一箱一箱那樣的東西，但我不確定 Crate 中文該怎麼翻譯比較好，翻成套件或模組都不太對，這裡就讓我繼續用 Crate 就好。

跟 Package 比起來，Rust 裡的 Crate 比較接近其它程式語言的套件 Package。你可以把 Crate 看成是一個套件，在一個 Rust 的專案裡如果要安裝一個 Crate 的話，以前得自己到 [https://crates.io/](https://crates.io/) 網站搜尋名稱及版本號，然後貼到 `Cargo.toml` 的 `[dependencies]` 段落裡再執行 `cargo run` 指令就會自動去下載套件並進行編譯、執行。在現行的 Rust 版本已經不用這麼辛苦了，只要一個指令：

```csharp
$ cargo add rand

```

就能把自動下載 `rand` 這個用來產生亂數的 Crate，而且還是最新版本：

```toml
[dependencies]
rand = "0.8.5"
```

所以以組成來說，一個 Package 裡可以有好幾個 Crate，數量不限，但至少要有一個。

另外，在一個全新的 Rust 專案裡，在 `Cargo.toml` 裡面還沒有安裝任何 Crate，最一開始的時候只有一個 `src/main.rs` 檔案，這個 `main.rs` 是個特別的檔案，當 Rust 執行編譯的時候，這個 `main.rs` 檔案的內容會被編譯成這個跟這個 Package 同名（以上面的例子來說說是 `hey-rust`）的執行檔，所以就算任何 Crate 都沒裝，它本身也是一個 Crate。

那在上個章節介紹用 `mod` 定義的模組呢？它比 Crate 更小一點了，每一個 Crate 裡面可以有很多個模組。

把模組分散到不同的檔案裡
------------

在之前將所有的 `mod` 都是放在同一個檔案裡，但想也知道隨著專案越來越大，總不能把雞蛋都放同一個籃子裡，不只不容易維護，而且還容易在多人一起開發的時候容易發生版本衝突。

我們來試著把前篇文章裡的範例拆成不同的檔案試試看：

```rust
pub fn loudly(message: &str) {
    println!("{}!!!", message.to_uppercase());
}

```

我把這個檔案放在 `src/say_something.rs` 裡，接著回到 `src/main.rs` 裡，如果想要從 `main.rs` 呼叫寫在 `say_something.rs` 裡的 `loudly()` 函數，可以這樣寫：

```rust
mod say_something;

fn main() {
    say_something::loudly("hello rust");
}

```

在 Rust 裡試著使用 `mod` 關鍵字要來宣告一個模組的時候，這會試著請編譯器試著找看看有沒有對應的檔案或模組，例如：

1.  使用 `mod say_something;` 這樣寫的時候，編譯器會試著找 `say_something.rs` 或是 `say_something/mod.rs` 檔案。
2.  如果找到了 `say_something.rs` 檔案，編譯器會把裡面的程式碼當做 `say_something` 模組並引入到目前的檔案裡。
3.  同樣的，如果找到了 `say_something/mod.rs` 文件，編譯器也會把裡面的程式碼當做 `say_something` 模組引入當前這個檔案裡。

這麼一來，雖然 `loudly()` 函數是在別的檔案，但透過第一行的 `mod say_something;` 的寫法也可以跨檔案執行了。
