---
＃id: doc-markdown
title: 05-rust資料型態原始型別_字元_布林值篇
description: 資料型態原始型別_字元_布林值篇
keywords:
  - rust
last_update:
  date: 3/29/2024
  author: ttom
---
在 Rust 裡的原始型別（Primitives）是指一些最基本的資料型別，這些型別在 Rust 中是直接內建支援，不需要另外引入其它模組或標準函式庫。

原始型別分兩大類，有純量型（Scalar）以及複合型（Compound）。純量型除了在上個章節介紹到的整數跟浮點數之外，還有字元（char）以及布林值（bool）這兩種；而複合型則有陣列（array）跟元組（tuple）。

字元
--

先請看一段程式碼：

```rust
fn main() {
    let message = 'world';
    println!("hello {}", message);
}

```
還沒跟大家解釋，在 `println!` 裡的寫法，是指要把 `message` 變數代入到 `"{}"` 裡然後印出來的意思，這種「字串安插（String Interpolation）」的做法在其它的程式語言都有類似的概念。

好，大家看看上面這段程式碼應該沒什麼懸念，應該就是要印出 `hello world` 字樣出來。不過一執行就會發現，竟然連這麼簡單的程式碼都會出錯：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error: character literal may only contain one codepoint
 --> src/main.rs:2:19
  |
2 |     let message = 'world';
  |                   ^^^^^^^
  |
help: if you meant to write a `str` literal, use double quotes
  |
2 |     let message = "world";
  |                   ~~~~~~~

error: could not compile `hello-rust` (bin "hello-rust") due to previous error

```

蛤？這不是字串嗎？這還真的不是字串。不知道大家有沒注意到我刻意用「單引號」而不是用「雙引號」，因為在 Rust 裡的字串（String）需要使用雙引號包起來，如果是單引號的則是「字元（char）」。在 JavaScript 裡的字串並沒有分單雙引號，效果都一樣，但在 Rust 並單雙引號是不同的型態。

根據上面這段 Rust 所抱怨的訊息，意思是單引號包起來的 character 應該只能一個字元，如果是要字串的話要使用雙引號。

在 Rust 要宣告一個字元型別可以這樣寫：

```rust
fn main() {
    let cc: char = 'a';
    let huh = '蛤';
    let cat = '🐈';

    println!("{} says {}", cat, huh);
}

```

你可以明確的講清楚它就是一個 `char` 型別，或是讓 Rust 的編譯器幫你猜也行。跟整數、浮點數的概念一樣，`char` 型別 4 個位元組（bytes），它可以用來放任何的 Unicode，也就是除了一般的英文數字外，要放中文日文甚至是 Emijo 也行。

> 1 個位元組（bytes）= 8 個位元（bit），所以 char 的 4 bytes 實際上的大小是 32 bit。

大家可以試著執行上面這段程式碼看看，不會出錯，但 Rust 還是會抱怨一下：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
warning: unused variable: `cc`
 --> src/main.rs:2:9
  |
2 |     let cc: char = 'a';
  |         ^^ help: if this is intentional, prefix it with an underscore: `_cc`
  |
  = note: `#[warn(unused_variables)]` on by default

warning: `hello-rust` (bin "hello-rust") generated 1 warning (run `cargo fix --bin "hello-rust"` to apply 1 suggestion)
    Finished dev [unoptimized + debuginfo] target(s) in 0.08s
     Running `target/debug/hello-rust`
🐈 says 蛤

```

最後的確是印出了 `🐈 says 蛤` 沒錯，但中間有一大串的警告（Warning）。別擔心，警告不是錯誤，所以程式還是可以執行。這裡的抱怨大概是「你要了一個 `cc` 變數，但結果也沒用到」。這滿好的，原本變數宣告了就是要用不是嗎？如果在 JavaScript 你可能得透過外部的 Linter 才能幫你挑出這問題，但這個功能直接內建在 Rust 的編譯器裡。

假設你真的有個變數宣告了但還沒要用，根據上面的提示，你可以在變名數稱前面加個 `_`，變成 `_cc` 就可以了。但你更應該想的是，如果沒用到的話，現在真的需要宣告它嗎？

布林值
---

布林值就更單純了，就只有真的（true）跟假的（false）兩種值，非黑即白，沒有那種「在有跟沒有之間」的模糊地帶。寫起來跟其它程式語言沒太大差別：

```rust
let happy: bool = true;
let is_adult = false;

```
同樣可以直白的把型別 `bool` 寫出來，或是給 Rust 編譯器自己猜也行。

提到布林值，就一定要介紹一下 `if ... else...`。在 Rust 裡寫 `if ... else ...` 也差不多：

```rust
fn main() {
    let cats: u8 = 100;

    if cats > 1 {
        println!("好多貓");
    } else {
        println!("一隻貓");
    }
}

```

首先，在 Rust 的 `if ... else ...` 判斷是不需要加小括號的，如果加上小括號雖然不會出錯，但 Rust 反而會抱怨一下：
```shell
cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
warning: unnecessary parentheses around `if` condition
 --> src/main.rs:4:8
  |
4 |     if (cats > 1) {
  |        ^        ^
  |
  = note: `#[warn(unused_parens)]` on by default
help: remove these parentheses
  |
4 -     if (cats > 1) {
4 +     if cats > 1 {

```

Rust 直接不客氣的給了你一句「多餘（unnecessary parentheses）」

另外，放在判斷句裡面的內容一定只能是布林值。你也許在 JavaScript 寫過這樣的程式碼：

```javascript
let hasCat = 0

if (hasCat) {
  console.log('有貓');
} else {
  console.log('沒有貓');
}

```

雖然 `hasCat` 是數字 0，但在做判斷的時候會自動幫你轉換成布林型態，結果 0 就會變成 `false` 所以會印出「沒有貓」，這種強迫轉型（Type Coercion）雖然有時候很方便，但也容易造成誤判，只要是空字串、`null` 或是 `undefined` 之類的 Falsy Value 都會被判定成 `false`，但空陣列卻會被定成 `true`。

這個行為在 Rust 就不會發生，把一樣的程式碼移到 Rust 裡看看：

```rust
fn main() {
    let has_cat = 0;

    if has_cat {
        println!("有貓")
    } else {
        println!("沒有貓")
    }
}

```

執行之後就會得到這個結果：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0308]: mismatched types
 --> src/main.rs:4:8
  |
4 |     if has_cat {
  |        ^^^^^^^ expected `bool`, found integer

```

這可就不是警告了，是直接出錯（Error），Rust 不會（其實也不應該）在這種地方幫你做自動型別轉換。這點我覺得滿好的。關於更多流程控制的內容在後續的章節還會再詳述。

\[番外篇\] 變數命名慣例
--------------

雖然這跟型別比較沒直接關連，但剛好也可以在這邊跟大家聊聊，業界常見的命名慣例有：

-   駝峰式（CamelCase）：例如 `HasCat` 或是 `myStudentScore`，透過大小寫做出區隔，樣子就來駱駝背上的駝峰一樣。
-   蛇式（snake_case）：例如 `has_cat` 或是 `my_student_score`，中間用底線分開，上上下下的就像蛇一樣。
-   烤肉串式（kebab-case）：例如 `has-cat` 或是 `my-student-score`，中間用 `-` 分開，樣子就像用竹籤把烤肉串起來一樣，但並不是所有程式語言都能用 `-` 當做變數名稱的一部份。

通常不同的程式語言會有不同的偏好，像 Python、Ruby 偏好蛇式，JavaScript 偏好駝峰式，但這些都不是強制規定，所以就算你想在 JavaScript 裡用蛇式也沒人管你，反正只要你開心或是團隊統一風格就好。

但在 Rust 裡管的有點多，你可以試著這樣寫看看：

```rust
let hasCat = true;
const age: u8 = 20;

```

執行 `cargo check` 或 `cargo run` 之後，編譯器就會出來碎唸了：

```shell
$ cargo check
warning: variable `hasCat` should have a snake case name
 --> src/main.rs:2:9
  |
2 |     let hasCat = true;
  |         ^^^^^^ help: convert the identifier to snake case: `has_cat`
  |
  = note: `#[warn(non_snake_case)]` on by default

warning: constant `age` should have an upper case name
 --> src/main.rs:3:11
  |
3 |     const age: u8 = 20;
  |           ^^^ help: convert the identifier to upper case: `AGE`
  |
  = note: `#[warn(non_upper_case_globals)]` on by default

```

它跟你抱怨說 `let` 宣告的變數要用蛇式，然後 `const` 宣告的常數應該要全大寫。

雖然 Rust 管的其實有點多，但我覺得這挺好的，特別是如果各位看過在同一個檔案裡有多種混搭風格就會知道我在講什麼了。有些時候人治行不通，就交給法治來處理吧 :)

也許以往大家在寫程式的時候沒想這麼多細節：

-   數字就數字，幹嘛還要選擇適當的位元數...
-   宣告了沒用到的變數也會被唸 orz
-   在 `if ... else ...` 裡的判斷只能放布林值，Rust 不會自動幫做這種型別轉換
-   甚至連命名規範也在 Rust 的守備範圍裡

雖然一開始會有些不習慣，但我認為在撰寫程式的時候多想想這些細節，對開發者的自我修養是很有幫助的。




