---
＃id: doc-markdown
title: 04-rust資料型態原始型別_數字篇
description: 資料型態原始型別_數字篇
keywords:
  - rust
last_update:
  date: 3/28/2024
  author: ttom
---
幾乎每款程式語言都有設計不同的資料型別，像是數字、字串、布林值之類的。Rust 自然也不例外，我們來看看在 Rust 裡的原始型別（Primitives）資料型態的「數字」。

數字
---
在 Rust ：

```rust
let age = 20;

```
### 整數

整數，也就是不帶小數點的數字，根據不同的需求在 Rust 有 8 bit、16 bit、32 bit、64 bit 以及 128 bit 等不同的型別，8 bit 表示「我給你 8 個格子給你放東西，裡面可以放 0 或 1」，16 bit 就是 16 格，以此類推。如果我這樣宣告：

```rust
let age: i8 = 20;

```

這裡的 `i8` 表示宣告了一個 8 bit 的整數，但是 `i8` 的這 8 個格子，並不是全部都給你放 0 跟 1，它的第 1 個格子是給你放正負號，所以事實上只剩 7 個格子可以存放值，所以 `i8` 型別的最小值就是負 2 的 7 次方，也就是 -128，而最大值是 2 的 7 次方 - 1， 也就是 127。咦？為什麼正數要減 1，但負的不用？因為還要把卡在中間的 0 也算進來。

同理，`i32` 的最大值是 2 的 31 次方 - 1 也就是 2,147,483,647，最小值是 -2 的 31 次方，也就是 -2,147,483,648。

跟 `i` 系列有點像的還有 `u` 系列，例如：

```rust
let money: u32 = 28825252;

```

這個 `u` 是 `unsigned` 的意思，也就是給你的格子全部都可以拿來放值，第 1 格不用拿來放正負號，也就是說所有的值都會是正數。因此，`u32` 的最小值就是 0，最大值就是 2 的 32 次方 - 1，也就是 4,294,967,295。

### 如果超過範圍怎麼辦？

以 `u8` 來說，我故意放一個明顯超過這個範圍的數值：

```rust
fn main() {
    let age: u8 = 1000;
    println!("{}", age);
}

```

只要一執行就會發現 Rust 的編譯器比你更早發現這個問題，而且告訴你原因：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error: literal out of range for `u8`
 --> src/main.rs:2:19
  |
2 |     let age: u8 = 1000;
  |                   ^^^^
  |
  = note: the literal `1000` does not fit into the type `u8` whose range is `0..=255`
  = note: `#[deny(overflowing_literals)]` on by default

```

它告訴你 `type u8 whose range is 0..=255` 就是原因。Rust 這個程式語言的特別之一，就是它的錯誤訊息夠明顯。

如果我調皮一點，故意在邊界值再加一點點，像這樣：

```rust
fn main() {
    let age: u8 = 255;
    let new_age: u8 = age + 1;

    println!("{}", age);
    println!("{}", new_age);
}

```

各位在開車或騎車的時候，有沒有遇過車子的哩程表跑到 99999 公里之後再繼續跑會變多少公里？是會 + 1 變 100000 還是全部歸零成 00000？這在電腦科學領域有個專有名詞叫做「整數溢出（Integer Overflow）」，不同的程式語言在處理 overflow 的做法也不太一樣，有些會像哩程表一樣重頭再算過，有些則是會直接出錯。

Rust 在開發模式遇到這問題的時候會給個 Panic：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 0.10s
     Running `target/debug/hello-rust`
thread 'main' panicked at 'attempt to add with overflow', src/main.rs:3:23
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

```

Panic 在後面的章節還有更多的介紹，簡單的說，就是出錯並且中止程式。不過如果在 release 模式的話不會 Panic，而是給你「繞一圈」的答案：

```shell
$ cargo run --release
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
    Finished release [optimized] target(s) in 0.09s
     Running `target/release/hello-rust`
255
0

```

如果是 `u8` 型別，255 + 1 會變成 0， `i8` 型別的話 127 + 1 會變成 -128。以結果來說，程式執行不會出錯，但我想算出來的答案不會是你想要的。

附帶一提，我們人類比較習慣在千位數的地方加上逗號，能更快識別出這個數字是幾位數，在 Rust 你可以使用 `_` 把數字稍微分開：

```rust
let books: u16 = 1_000_00_0;

```

但其實這個 `_` 並沒有什麼意思，所以像我上面這樣隨便亂加也無所謂。（其實在其它程式語言像是 JavaScript、Python、Ruby 也都可以這樣寫，這不是 Rust 特有的寫法）

除了固定的 8、16、32、64 以及 128 位元外，還有兩個比較特別的 `isize` 跟 `usize`，從字面上大概可以猜的出來 `i` 跟 `u` 的意思，而 `size` 則是會依據作業系統本身的 CPU 架構而有所不同，例如在 32 位元的作業系統，`isize` 就等同於 `i32`，同理，如果是在 64 位元的作業系統，`isize` 就等於 `i64`。

浮點數
---

浮點數其實就是帶有小數點的數字，跟整數一樣，浮點數也有分 bit，但只有 32 bit（`f32`） 跟 64 bit（`f64`），而且第 1 個 bit 都是帶正負號的，不像整數還有 unsigned 的設計。根據 Rust 手冊上寫著，根據 IEEE-754 標準，`f32` 是「單精準度（single-precision）」浮點數，`f64` 則是「雙精準度（double-precision）」浮點數。

型別推斷（Type Inference）
------

不像 JavaScript，Rust 對於型別是很要求的，型別不對就是不給過，所以照理說應該每當在宣告的時候都應該要明確的講明白它的型態。

當在宣告的時候都應該要明確的講明白它的型態。

```rust
fn main() {
    let name: &str = "Hello Kitty";
    let age: u8 = 20;

    println!("hi, my name is {}, and I am {} years old", name, age);
}

```

那個 `&str` 的寫法現在可以暫時先略過它。但 Rust 的編譯器足夠聰明，就算沒有標記型態，它也能根據你給它的值推斷出來應該是哪個型別，所以這樣寫也是可以的：

```rust
fn main() {
    let name = "Hello Kitty";
    let age = 20;

    println!("hi, my name is {}, and I am {} years old", name, age);
}

```
這樣寫起來清爽多了。

```rust
fn main() {
    let mut age = 20;
    age = 3.14;

    println!("{}", age);
}

```

那個 `mut` 同樣可先暫時略過它，在後續的章節有更詳細的介紹，它是表示這個 `age` 變數是可以修改的。然而因為一開始你給 `age` 這個變數一個整數值 `20` ，所以 Rust 就推斷 `age` 應該是個整數，但後來你把它改成浮點數 3.14，這就會造成型別上的錯誤：

```shell
$ cargo run          
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0308]: mismatched types
 --> src/main.rs:3:11
  |
2 |     let mut age = 20;
  |                   -- expected due to this value
3 |     age = 3.14;
  |           ^^^^ expected integer, found floating-point number
```

但是整數有那麼多種，如果只寫 `let age = 18`，它會給哪一種？沒特別講的話，就算你只給它一個小小的數字 `1`，Rust 預設還是會給你 `i32`。如果沒特別標記型別的話，Rust 的確是會看你是整數或浮點數，分別給你 `i32` 以及 `f64`，但並不會自動依據數值的大小自動調整成 `i8` 或 `i64`（誰知道你這數字以後會長多大？）。所以如果這樣寫：

```rust
let age = 100000000000000000000000000;  // 明顯超過 i32 的範圍

```

執行的時候就會出錯了：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error: literal out of range for `i32`
 --> src/main.rs:2:15
  |
2 |     let age = 100000000000000000000000000;  // 明顯超過 i32 的範圍
  |               ^^^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: the literal `100000000000000000000000000` does not fit into the type `i32` whose range is `-2147483648..=2147483647`

```

不得不說，Rust 難寫歸難寫，但它給的錯誤訊息還算挺清楚的。