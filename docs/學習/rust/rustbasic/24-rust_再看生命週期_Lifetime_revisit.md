---
＃id: doc-markdown
title: 24-rust_再看生命週期_Lifetime_revisit
description: _再看生命週期_Lifetime_revisit
keywords:
  - rust
last_update:
  date: 5/14/2024
  author: ttom
---
新手（包括我也是）在學習 Rust 這條路上的兩大魔王：「所有權（Ownership）」以及「生命週期（Lifetime）」，在前面章節我們曾經介紹過了生命週期，但在介紹過了 Struct、Enum、Trait 以及泛型之後，生命週期標記跟這些東西的組合之後又會變的更複雜一些...

跟型別推導一樣，其實 Rust 的編譯器大多數時候是可以可以自己推導生命週期的，所以大部份時候不特別標記也沒什麼問題。之所以需要標記生命週期的原因，就是因為所有權有東西借來借去的關係，為了要讓某些值活的夠久又不要活太久，所以需要手動標記生命週期。相對的，如果不考慮太多所有權的事，就算整個專案裡沒有 `'a` 這樣的生命週期標記也行，就把 Rust 當做一般的程式語言來寫也沒什麼問題。

Rust 的生命週期標記是為了幫助確保程式碼的安全性，所以在撰寫 Rust 程式碼的時候應該還是得把它放心上，謹慎考慮是否需要使用它們，而不是完全忽略。

Struct 裡的生命週期
-------------

再來看看之前介紹過的 Struct：

```rust
struct Cat {
    name: String,
    age: u8,
}

```

要用的時候就這樣用：

```rust
let kitty = Cat { name: String::from("Kitty"), age: 12 };
```

當時用的時候應該都不覺得這有什麼問題，就是那個 `name` 因為是 `String` 型別，所以得用 `String::from()` 或是字串切片的 `.to_string()` 方法轉換一下。跟其它的程式語言比起來就真的有點囉嗦，難道不能直接把 Struct 裡的 `name` 的型別宣告成 `&str` 就好了，像這樣：

```rust
struct Cat {
    name: &str,
    age: u8,
}

```

這樣用起來也簡單得多：

```rust
let kitty = Cat { name: "Kitty", age: 12 };

```

這樣寫的話，Rust 的編譯器會給你錯誤訊息：

```css
error[E0106]: missing lifetime specifier
3 |     name: &str,
  |           ^ expected named lifetime parameter

```

嗯？這裡需要生命週期標記？怎麼回事？其實這個概念跟我們在前面介紹函數裡的參數以及回傳值的生命週期是一樣的概念。想想看，當你想要使用 `Cat` 來產生一個新的實體時候，的確是傳了一個參照（就是那個字串切片）給這個 Struct，而這個 Struct 建立實體就有點像函數的回傳值，這個實體裡面帶有傳進去的那個參照。即使 Struct 裡只有一個參照欄位，為了預防可能的錯誤和安全問題，Rust 的編譯器需要知道這個參照的生命週期。


把原本的 Struct 改成這樣：

```rust
struct Cat<'a> {
    name: &'a str,
    age: u8,
}

```

這樣記標是指要告訴 Rust 編譯器，在 `Cat` 這個 Struct 裡面所引用的 `&str` 字串切片欄位，它得要活的比 Struct 還要久才行的意思，照我們之前學過的生命週期的概念，大概是這個樣子：

```rust
fn main() {
    let cat_name = "Kitty";       //------------+ 'cat_name
                                  //            |
    let kitty = Cat {             //--+ 'kitty  |
        name: cat_name,           //  |         |
        age: 12,                  //  |         |
    };                            //  |         |
                                  //  |         |
    println!("{:?}", kitty);      //  |         |
                                  //--+         |
}                                 //------------+
```

### Impl 的生命週期

之前在 Struct 章節有學過可以使用 `impl` 幫 Struct 實作一些功能，像這樣：

```rust
impl Cat {
    fn say_hello(&self) {
        println!("Hello");
    }
}

```

但如果只寫這樣的話，Rust 編譯器會不給過：

```csharp
$ cargo run
error[E0726]: implicit elided lifetime not allowed here
9 | impl Cat {
  |      ^^^ expected lifetime parameter

```

因為我們現在的 `Cat` 這個 Struct 加上了生命週期的標記 `<'a>`，而生命週期標註也算是 Struct 的一部分，所以 `impl` 的時候也得加：

```rust
impl<'a> Cat<'a> {
    fn say_hello(&self) {
        println!("Hello");
    }
}

```

就算在裡面實作的方法不需要特別的生命週期標記也還是得加，命名不一定要跟 Struct 一樣，你也可以用別的字母。但如果確定整個 `impl` 裡沒特別用到的話，也可以用底線方式標記：

```rust
impl Cat<'_> {
    fn say_hello(&self) {
        println!("Hello");
    }
}
```

### 泛型 \+ 生命週期

是說，大家有發現生命週期的標記方式跟泛型一樣都是使用 `<...>` 的寫法嗎？如果假設某個 Struct 要有生命週期也同時要有泛型，兩個混在一起的話該怎麼寫？

```rust
struct Cat<'a, T> {
    name: &'a str,
    age: T,
}

```

泛型的標記排在生命週期後面，如果順序不對的話 Rust 編譯器會提醒你。這麼一來，`impl` 也得改一下：

```rust
impl<T> Cat<'_, T> {
    fn say_hello(&self) {
        println!("Hello");
    }
}
```

Enum 裡的生命週期
-----------

我們在介紹 Enum 的章節裡曾經提過，Rust 裡的 Enum 用起來跟 Struct 挺像的，除了定義變體（Variant）之外，也可以透過 `impl` 幫它加一些功能。既然 Struct 有生命週期標記，跟它很像的 Enum 也可以有：

```rust
enum CatBreed<'a> {
    Persian,             // 波斯貓
    AmericanShorthair,   // 美國短毛貓
    Mix(&'a str, u8),    // 米克斯
}

```

整個用起來的手感跟 Struct 差不多，當然 `impl` 的寫法也差不多：

```rust
impl CatBreed<'_> {
    fn say_something() {
        println!("Hey!");
    }
}

```