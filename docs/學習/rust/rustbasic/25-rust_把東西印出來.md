---
＃id: doc-markdown
title: 25-rust_把東西印出來
description: _把東西印出來
keywords:
  - rust
last_update:
  date: 5/15/2024
  author: ttom
---

在 Rust 要把東西印出來應該是簡單到不行，我們在前面的文章就練習過用 `println!()` 印出 `Hello Rust` 字樣：

```rust
println!("Hello Rust");
```


這一點都不難，但在接下來的章節應該有陸續看到裡面放的東西變的不太一樣了，例如：

```rust
println!("{}", "Hello Rust");
println!("{:?}", "Hello Rust");
```

這好像也沒什麼了不起，其它程式語言也有類似的寫法，例如 JavaScript 是使用 `${}` 而 Ruby 是用 `#{}` 這樣的寫法，所以大概也可以猜到 Rust 的 `println!()` 裡的 `{}` 寫法就是可以用後面的值替換掉，但是，那個 `{:?}` 是什麼？另外，有些程式語言還會需要用 `%s` 或 `%d` 之類的寫法分別用來替換字串及數字，但 Rust 好像就只要用 `{}` 不用管型態就可以一路印到底...

然後遇到要印出來的型態是 Struct 或是比較複雜的型態的時候：

```rust
let kitty = Cat { name: String::from("Kitty") };
println!("{}", kitty);  // 沒辦法印！

```

會發現這樣印不出來：

```rust
error[E0277]: `Cat` doesn't implement `std::fmt::Display`
7 |     println!("{}", kitty);
  |                    ^^^^^ `Cat` cannot be formatted with the default formatter
```

這到底是怎麼回事？原來是如果要用 `println!("{}")` 印出來的話，需要掛上 `std::fmt::Display` 特徵。翻了一下 Rust 的原始碼，`Display` 這個 trait 有個要實作的方法 `fmt`，它的函數簽名如下：

```rust
pub trait Display {
    fn fmt(&self, f: &mut Formatter<'_>) -> Result;
}

```

根據原始碼說明自帶的範例，我幫原本的 `Cat` 加上了 `Display` 特徵：

```rust
struct Cat {
    name: String
}

use std::fmt::{Display, Formatter, Result};

impl Display for Cat {
    fn fmt(&self, f: &mut Formatter) -> Result {
        write!(f, "貓兒: {}", self.name)
    }
}

```

這樣就可以順利印東西出來了。

但為什麼整數、浮點數之類的比較簡單的型態不需要特別加上 `Display` 特徵就能被印出來？因為在 Rust 裡的整數、浮點數、布林值、字元、字串、字串切片都有內建 `Display` 了，所以不用特別幫它實作。

那麼 `{:?}` 呢？它跟 `{}` 的用途稍有不同，`{}` 主要是用來把值「顯示」在畫面上，而 `{:?}` 通常用來 debug，例如把整顆 Struct 印出來看看裡面長什麼樣子，所以使用 `{:?}` 的話，它需要有 `std::fmt::Debug` 特徵，大部份內建的資料型態都有支援 `Debug` 特徵：

```rust
println!("{:?}", 1);
println!("{:?}", false);
println!("{:?}", [1, 2, 3]);
println!("{:?}", vec![1, 2, 3]);
```

這些都能順利把值印出來。但 Struct 並沒有，所以如果要用 `{:?}` 把它印出來的話，同樣也是要幫它實作 `Debug` 特徵才行，根據原始碼說明，同樣也是要實作 `fmt()` 方法：

```rust
use std::fmt::{Formatter, Result, Debug};

impl Debug for Cat {
    fn fmt(&self, f: &mut Formatter) -> Result {
        write!(f, "貓兒: {}", self.name)
    }
}

```

這樣 `println!("{:?}", kitty);` 就會印出東西來了。

好啦，現在已經知道只要有 `Debug` 這個 Trait 就可以丟到 `{:?}` 裡被印出來，但是工程師在開發的過程中還蠻常需要把一些資料或結構印出來看看情況，如果每個 Struct 都得自己實作一次也太辛苦了。Rust 有先幫我們寫了一個 `Debug` 的巨集，需要的時候透過 `#[derive]` 屬性把它掛上去即可：

```rust
#[derive(Debug)]
struct Cat {
    name: String
}

```

輕鬆搞定！

你也許會好奇，如果這樣的話，`Display` 也有內建的巨集可以用嗎？根據原始碼裡寫的：

> `Display` is similar to `Debug`, but `Display` is for user-facing output, and so cannot be derived.

答案是沒有，也就是說這是使用者（也就是你）得自己想辦法啦。

格式化
---

除了把東西印出來，應該也很常有需要把某個資料格式化成字串，這時候可以使用 `format!()` 巨集：

```rust
let message = format!("你好，我是 {}", "Hello Kitty");
println!("{}", message);

```

跟 `println!()` 一樣，如果遇到沒辦法直接顯示或 debug 的值，就需要幫它加上 `Display` 或 `Debug` 特徵實作：

```rust
struct Cat {
    name: String
}

use std::fmt::{Formatter, Result, Display};

impl Display for Cat {
    fn fmt(&self, f: &mut Formatter) -> Result {
        write!(f, "{}", self.name.to_uppercase())
    }
}

```

這樣就行了。如果實作 `Display` 特徵的話，不只 `println!()` 跟 `format!()`，連 `.to_string()` 等方法也跟著受益：

```rust
let kitty = Cat { name: String::from("kitty") };
println!("{}", kitty.to_string());  // 印出 KITTY

```


