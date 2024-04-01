---
＃id: doc-markdown
title: 06-rust資料型態原始型別_陣列_元組篇
description: 資料型態原始型別_陣列_元組篇
keywords:
  - rust
last_update:
  date: 4/01/2024
  author: ttom
---
前面介紹了有純量型（Scalar）的資料型別，這邊來看看複合型（Compound）的資料型別。複合型主要有陣列（array）跟元組（tuple）這兩種。

陣列（Array）
------
### 只能放同樣性質的東西

在 JavaScript、Python 或 Ruby 裡的陣列，你想放什麼就放什麼，而且可以數字、字串混著放。但在 Rust 裡的陣列只能規定放相同型別的東西：

```rust
fn main() {
    let list: [u8; 3] = [1, 2, 3];

    println!("{:?}", list);
}

```

這裡我宣告了一個名為 `list` 的陣列，其中 `[u8; 3]` 的就是表示這個陣列有 3 個格子，然後格子裡面都是 `u8` 型別的資料。`u8` 在前面有介紹過，所以如果放的值超過 `u8` 的上限的話會出問題。因為有規定這些格子都只能放 `u8`，所以如果這樣寫：

```rust
let list: [u8; 3] = ['a', 2, 3];

```

一執行 Rust 編譯器馬上就會跟你抱怨型別不對（mismatched types），而且無法執行：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0308]: mismatched types
 --> src/main.rs:2:26
  |
2 |     let list: [u8; 3] = ['a', 2, 3];
  |                          ^^^ expected `u8`, found `char`
  |
help: if you meant to write a byte literal, prefix with `b`
  |
2 |     let list: [u8; 3] = [b'a', 2, 3];
  |                          ~~~~

```

如果覺得寫 `[u8; 3]` 太麻煩，也可以讓 Rust 編譯器幫你猜：

```rust
let list = [1, 2, 3];

```

這樣就會幫你宣告一個 `[i32; 3]` 的陣列。

### 格子數量是固定的，而且要放好放滿！

Rust 的陣列宣告好之後，大小就是固定的，不能改，所以在 Rust 裡面你不能對陣列進行新增或刪除的行為，改倒是可以改，但需要加上 `mut` 的宣告：

```rust
fn main() {
    let mut list = [1450, 9527, 5566];
    list[2] = 500;

    println!("{:?}", list);
}

```

`mut` 我們會在之後跟大家說明。

就是因為陣列宣告好之後不能動態的加入元素，所以一開始就要把值放好放滿，如果多放或少放都會出錯：

```rust
fn main() {
    let list: [i32; 3] = [9527, 5566];  // 故意少放一個
    println!("{:?}", list);
}

```

馬上就會抱怨給你看：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0308]: mismatched types
 --> src/main.rs:2:26
  |
2 |     let list: [i32; 3] = [9527, 5566];
  |               --------   ^^^^^^^^^^^^ expected an array with a fixed size of 3 elements, found one with 2 elements
  |               |     |
  |               |     help: consider specifying the actual array length: `2`
  |               expected due to this

```

### 放同樣的型別有什麼好處？
速度，速度，速度

### 陣列操作

跟其它程式語言的陣列操作差不多，直接透過索引值就能取用內容：

```rust
fn main() {
    let list = [1450, 9527, 5566];
    println!("{}", list.len()); // 印出 3
    println!("{}", list[1]);    // 印出 9527
}

```
如果在 Rust 裡這樣做，就會給你一個超過邊界的 Panic：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error: this operation will panic at runtime
 --> src/main.rs:4:20
  |
4 |     println!("{}", list[100]);
  |                    ^^^^^^^^^ index out of bounds: the length is 3 but the index is 100

```

如果想要印出陣列裡的每個值，以往大概會用 `for` 迴圈搭配索引值的寫法一個一個印出來，在 Rust 的 `for` 迴圈寫起來比較像是迭代器（Iterator），寫起來像是這樣：

```rust
fn main() {
    let list = [1450, 9527, 5566];

    for item in list.iter() {
        println!("{}", item);
    }
}

```

透過 `for...in` 的寫法可以把陣列裡的元素一個一個拿出來。其中因為 `list` 本身是陣列，所以需要再透過 `.iter()` 方法把它轉成 Iterator，才能透過 `for ... in` 處理。

另外，Rust 也有跟別人借來了「解構（destructuring）」的寫法，像這樣：

```rust
let list = [1450, 9527, 5566];
let [_, b, c] = list;

```

這樣就可以直接把變數 `b` 跟 `c` 的值設定成 `9527` 跟 `5566`，前面那個 `_` 表示「不重要、不在乎」的意思。

### 陣列感覺很不實用？

在一般開發者的觀念中，陣列就是宣告要來放東西的，放同樣型別這件事可能還可以理解，但元素的個數不能調整就會讓人覺得那我要這陣列幹嘛？

事實上還是可以的，只是那個東西不叫陣列，在 Rust 裡這樣的東西叫做「向量（Vector）」，它用起來跟各位平常在用的陣列比較接近


元組（Tuple）
---------

Tuple 是一種資料結構，在 Rust 裡可以透過小括號來定義：

```rust
let point: (i32, i32, i32) = (100, 200, 300);

```

跟陣列不同，Tuple 裡的元素不一定需要相同型別：

```rust
let answer: (char, bool) = ('🐈', false);

```

同樣，如果不想寫型別宣告，也是能交給 Rust 編譯器猜：

```rust
let pet = ('🐈', false);

```

### 操作

陣列可以透過索引值存取元素的值，在 Tuple 也是差不多，只是寫起來會有點不太一樣，是透過小數點的方式：

```rust
fn main() {
    let pet = ('🐈', false, 18);
    println!("{} {} {}", pet.0, pet.1, pet.2)
}

```

Tuple 透過看起來像索引值的「欄位（field）」來存取資料，我知道它寫起來有點怪。跟陣列一樣，如果超過應該有的範例，例如 `pet.5` ，Rust 就會說沒有這個欄位：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0609]: no field `5` on type `(char, bool, {integer})`
 --> src/main.rs:3:30
  |
3 |     println!("{} {} {}", pet.5, pet.1, pet.2)

```

另外，類似陣列的解構，Tuple 也行：

```rust
let point = (100, 200, 300);
let (x, y, z) = point;

```

Tuple 的元素數量沒有規定要幾個，要 1 個、5 個、10 個或 100 個都可以，只是通常不會用到那麼大一包，比較常在函數的回傳值上看到它。

不過有個比較特別的情況，就是空的 Tuple，它有個特別的名字叫「單元（Unit）」。

### 單元（Unit）

單元不就是一個空的 Tuple，這有什麼好特別拿出來講的，甚至還特別給它一個名字？而且，Tuple 跟陣列一樣，宣告了元素個數之後就不能改變，所以要這空的 Tuple 到底能幹嘛？

我們到現在都還沒開始寫到函數，目前都只有在進入點的 `main` 函數裡練拳腳而已。通常函數都有回傳值，Rust 需要知道所有的變數、函數的型態，所以如果函數沒有回傳值也要明確的講沒有回傳值，有些程式語言會使用 `void` 的表示法，表示這個函數沒有回傳值的意思。

照 Rust 的設計，進入點的這個 `main` 函數照理來說是沒有也不應該有回傳值的，在 Rust 裡面要用來表示沒有回傳值的寫法，就是回傳一個 Unit：

```rust
fn main() -> () {
    println!("Hello Rust")
}

```

但這邊可以省略 Unit 不寫就只是 Rust 給的一個糖衣而已。也就是說，如果某個函數說「我的回傳值是一個 Unit」，就是表示「這個函數是沒有回傳值」的。

