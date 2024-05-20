---
＃id: doc-markdown
title: 27-rust_把函數丟來丟去的高階函數
description: _把函數丟來丟去的高階函數
keywords:
  - rust
last_update:
  date: 5/20/2024
  author: ttom
---

高階函數（Higher Order Functions, HOF）其實不是什麼厲害的東西，它只是名字看起來比較厲害而已。所謂的高階函數是指：

1.  可以接收別的函數當做參數。
2.  可以把函數當做回傳值。

這兩個條件只要滿足其中一個，就可稱之高階函數，就這樣而已。其實這東西在 JavaScript 裡很常出現，例如：

```javascript
const list = [1, 2, 3, 4, 5]

list.forEach((i) => {
  console.log(i)
})

```

在 `.forEach()` 這個方法就傳了一個匿名函數給它當參數，所以 `.forEach()` 就是一種高階函數，當然 `.map`、`.filter`、`.addEventListener` 這些都是。

就是因為這些函數可以用別的函數當參數或回傳函數，它就比較「高級」一點點，所以英文才叫「Higher Order」，別被它的名字給嚇到了。然後並不是所有的程式語言都有支援高階函數的設計，要做到這件事，函數必須是一等公民（First-class citizen）物件才行。

Rust 裡的函數是一等公民物件，所以可以把函數當做參數，例如我想要寫一個 `operation()` 的函數，它可以根據傳給它的函數，對另外兩個數字做運算，例如：

```rust
fn operation(n: i32, m: i32, op: ???) -> i32 {
    op(n, m)
}
```

這樣的寫法沒問題，但問題是傳進去的那個 `op` 函數的型別該怎麼寫？先想想看它應該是什麼型別？它應該是一個「可以接受 2 個 `i32` 並回傳 `i32` 的函數」，在 Rust 有個特別的型別...其實不能說是型別，而是一個 Trait，叫做 `Fn`，藉由這個 Trait 就可以幫上面範例的 `op` 標記型別了：

```rust
fn operation<F: Fn(i32, i32) -> i32>(n: i32, m: i32, op: F) -> i32 {
    op(n, m)
}
```

如果覺得有點囉嗦可用前面章節學過的 `where` 關鍵字來改寫：

```rust
fn operation<F>(n: i32, m: i32, op: F) -> i32
where F: Fn(i32, i32) -> i32
{
    op(n, m)
}
```

這樣一來就可以把符合特徵的函數帶進去了：

```rust
    fn add(x: i32, y: i32) -> i32 {
        x + y
    }

    let minus = |a, b| a - b;

    let result1 = operation(10, 20, add);
    let result2 = operation(10, 20, minus);

    println!("{}", result1);   // 印出 30
    println!("{}", result2);   // 印出 -10
```

不管是用 `fn` 定義的函數或是用 Closure 做的匿名函數，只要符合特徵就帶能進去，甚至連名字都不用，直接丟一個 Closure 給它也行：

```rust
let result3 = operation(10, 20, |x, y| x * y);
println!("{}", result3);  // 印出 200
```
