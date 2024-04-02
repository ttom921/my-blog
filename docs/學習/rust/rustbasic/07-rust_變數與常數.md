---
＃id: doc-markdown
title: 07-rust_變數與常數
description: 變數與常數
keywords:
  - rust
last_update:
  date: 4/02/2024
  author: ttom
---
如同其它程式語言的設計，Rust 也有變數跟常數的設計，不過 Rust 的變數有一些比較特別的地方，這也是 Rust 會被說比較「安全」的原因。

在 Rust 可以使用 `let` 關鍵字定義變數：

```rust
let age: u8 = 20;

```

Rust 的編譯器還滿聰明的，大部份時候都會猜對，只是偶爾會猜的寬鬆一點，例如沒指定型別的整數變數會是 `i32`，而沒指定型別的浮點數會是 `f64`。

你也可以先宣告變數但不給值，之後再給也行：

```rust
let age;
age = 20;

println!("{}", age);  // 印出 20

```
Rust 的編譯器需要知道每個變數的型別，所以要不你在撰寫的時候就講明白，或是讓 Rust 幫你猜。別擔心，

不過如果沒給它值，是不能直接拿來用的：

```rust
let age: u8;    // 沒給值
println!("{}", age);  

```

這執行下去就會出錯了：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0381]: used binding `age` isn't initialized
 --> src/main.rs:3:20
  |
2 |     let age: u8;
  |         --- binding declared here but left uninitialized
3 |     println!("{}", age);
  |                    ^^^ `age` used here but it isn't initialized

```

### 變數不能變？

在大部份的程式語言，變數就是可以「變」才叫變數，但在 Rust 的設計裡，`let` 宣告的變數是不能改的：

```rust
fn main() {
    let age = 20;
    println!("{}", age);

    age = 18;    // 要把它改成 18
    println!("{}", age);
}

```

Rust 就會給你這個錯誤訊息：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0384]: cannot assign twice to immutable variable `age`
 --> src/main.rs:5:5
  |
2 |     let age = 20;
  |         ---
  |         |
  |         first assignment to `age`
  |         help: consider making this binding mutable: `mut age`
...
5 |     age = 18;
  |     ^^^^^^^^ cannot assign twice to immutable variable

```

Rust 宣告的變數預設是不可變動（immutable），所以在給定值之後不能修改。如果要讓它可被修改，需要在宣告的時候多加一個形容詞 `mut` ，跟 Rust 說這是可以修改的：

```rust
fn main() {
    let mut age = 20;    // 加上了 mut 修飾
    println!("{}", age);

    age = 18;
    println!("{}", age);
}

```

這樣用起來就跟其它程式語言的變數差不多像了。

不要為了怕麻煩或貪圖一時便利，有 `mut` 可以用就每個都 `mut` 下去，這樣就辜負了 Rust 給你 `mut` 的原意了，這樣一來天生再安全的程式語言也會被你寫的很不安全。如果你宣告變數的時候真的這樣做：

```rust
fn main() {
    let mut age = 20;     // 宣告了 mut 但後面沒有真的改
    println!("{}", age);
}

```

說要 `mut` 但後來沒有真的更改的話，程式執行是不會錯啦，但 Rust 編譯器就又會出來抱怨了：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
warning: variable does not need to be mutable
 --> src/main.rs:2:9
  |
2 |     let mut age = 20;
  |         ----^^^
  |         |
  |         help: remove this `mut`

```

你想的到偷吃步 Rust 編譯器也想的到，所以 Rust 請你把這個 `mut` 拿掉。

### 作用域（Scope）

scope 是指變數在程式碼中可見的範圍，這個在其它程式語言裡也都有相同的概念，以底下這個例子來說：

```rust
fn main() {
    let a = 10;

    if true {
        println!("{}", a);  // 這個 block 裡面沒有變數 a，所以找到外面的 a
    }

    println!("{}", a);
}

```

在 `if` 區塊裡試著想要印出變數 `a`，但在這個區塊裡並沒有這個變數，Rust 會試著找外面一層，然後就會找到 `10`；相對的，如果該區塊裡面有該變數的存在：

```rust
fn main() {
    let a = 10;

    if true {
        let a = 20;
        println!("{}", a);  // 在 block 裡有變數 a，所以印出 20
    }

    println!("{}", a);  // 不會受 if 裡的宣告所影響
}

```

就會取用該區塊裡的變數，而且不會影響到外層的同名變數。Rust 的變數在離開 block 之後就無法再使用，所以如果這樣寫：

```rust
fn main() {
    if true {
        let a = 20;
    }

    println!("{}", a);
}

```

會得到這個結果：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0425]: cannot find value `a` in this scope
 --> src/main.rs:6:20
  |
6 |     println!("{}", a);
  |                    ^
  |
help: the binding `a` is available in a different scope in the same function
 --> src/main.rs:3:13
  |
3 |         let a = 20;

```

仔細看就會發現除了上半段的錯誤訊息外，下半段的訊息看起來有猜到你想要做的事，Rust 的編譯器是真的滿厲害的。
預設不能修改的 `let` 變數好像跟常數一樣，那麼還需要常數嗎？

常數（Constant）
------------

在 Rust 宣告常數是使用 `const` 關鍵字，不過跟 `let` 宣告變數不同的是，常數沒有 `mut` 的設計，也就是說，常數一開始就一定要給定值，而且 Rust 還會要求你把型別講清楚：

```rust
fn main() {
    const a = 10;
}

```
Rust 不會幫常數推斷型別，所以你得明明白白的講清楚，不然 Rust 會給你以下的錯誤訊息：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error: missing type for `const` item
 --> src/main.rs:2:12
  |
2 |     const a = 10;
  |            ^ help: provide a type for the constant: `: i32`

```
Rust 的編譯器對常數的命名方式也會管，例如宣告一個常數 `my_age` ：

```rust
fn main() {
    const my_age: u8 = 10;
    println!("{}", my_age);
}

```

程式還是可以執行，但 Rust 會給你警告訊息：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
warning: constant `my_age` should have an upper case name
 --> src/main.rs:2:11
  |
2 |     const my_age: u8 = 10;
  |           ^^^^^^ help: convert the identifier to upper case: `MY_AGE`

```

Rust 希望你在命名常數的時候使用**全大寫英文**，必要的時候用底線 `_` 分隔。

簡單的列舉幾點常數跟變數的差別：

-   常數是固定的值，一開始需要指定型別並且給定一個值；變數可以不用明確的指定型別或給定值。
-   變數的值可以在需要的時候修改，但常數的值給定之後就不能修改。
-   常數的名稱通常使用全大寫字母和底線 `_` 來命名，但變數則建議使用蛇式命名法（snake_case）。