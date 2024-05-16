---
＃id: doc-markdown
title: 26-rust_閉包_Closure
description: _閉包_Closure
keywords:
  - rust
last_update:
  date: 5/16/2024
  author: ttom
---

我相信「閉包（Closure）」這個名詞對寫 JavaScript 的開發者來說不陌生，也很常在面試題裡面被拿出來問。Closure 其實也是函數，比較特別的是它可以捕捉在它執行的 Scope 裡的值。在 Rust 裡 Closure 的定義也有點像，但也有它不太一樣的地方。

在 Rust 裡要定義一個函數，大部份時候我們會用 `fn` 關鍵字並且給它一個名字，像是這樣：

```rust
fn say_something(message: &str) {
    println!("{}", message);
}
```

另外一種定義函數... 嗯，其實不能說是定義函數，比較像是定義一個變數指向（或綁定）到某個函數，在 JavaScript 有兩種寫法：

```javascript
const saySomething1 = function (message) { console.log(message) };
const saySomething2 = (message) => console.log(message);

saySomething1("Hello");
saySomething2("World");

```

在 JavaScript 裡，不管是用一般的函數或是使用箭頭函數（Arrow Function）都可以做出這個效果，而且通常在做這件事的時候，因為它本身就有綁定一個變數或常數名字了，所以通常都不會給這個函數一個名字，所以後面那個函數又被稱為「匿名函數（Anonymous Function）」。要能做到這件事，表示函數在 JavaScript 裡是一個值（或一種物件），所以才能做到把變數或函數指定到這個值或物件身上。

在 Rust 函數也同樣是一等公民（First-class citizen），所以也能做到類似的事，寫法有一點像：

```rust
let say_hello = || println!("Hello Rust");
say_hello();

```

在等號右手邊的就是匿名函數，在 Rust 裡稱之「閉包（Closure）」，那個看起來像是絕對值的 `||` 寫法，是指要帶進去這個函數的參數，以上例來說，因為沒有要給它任何參數，所以就 `||` 就行了。如果要給它參數的話，可以這樣寫：

```rust
let add_numbers = |x, y| x + y;
println!("計算結果: {}", add_numbers(1, 2));
```

看想要帶幾個參數，就在 `||` 裡面放幾個。函數本體不寫 `return` 而是放一個 Expression 就行了，它自動就會是這個 Closure 的回傳值。如果程式碼比較複雜一點，要寫成多行的話可以使用大括號包起來：

```rust
let add_numbers = |x, y| {
    println!("Hello Rust!");
    println!("Hello Again!");
    // 其它實作程式碼
    x + y
};

```

最後給一個 Expression 就行了。

看到這裡大家有沒有感覺到一股異常的輕鬆感？之前用 `fn` 關鍵字在定義函數的時候，傳入參數的型別得要每個都寫清楚講明白，但在上面的例子裡，它卻可以不用寫。其實你要寫也行：

```rust
let add_numbers = |x: i32, y: i32| x + y;
```

但就算不寫 Rust 也能自動幫你推導出型別出來。咦？會自動推導參數型別的話，是不是有點泛型的味道了？並沒有，當試著傳入不同型別的時候：

```rust
let add_numbers = |x, y| x + y;
println!("計算結果: {}", add_numbers(1, 2));
println!("計算結果: {}", add_numbers(0.1, 0.2));

```

一開始先傳整數給它，Rust 會推導出 `x` 跟 `y` 都是預設 `i32`，但接著故意傳浮點數給它的時候就會出錯了：

```php
error[E0308]: arguments to this function are incorrect
4 |     println!("計算結果: {}", add_numbers(0.1, 0.2));
  |                              ^^^^^^^^^^^ ---  --- expected integer, found floating-point number
  |                                          |
  |                                          expected integer, found floating-point number

```

Rust 並沒有支援 Closure 的泛型，需要泛型的話可以用 `fn` 來寫。

是說，在 Rust 的匿名函數這樣就叫 Closure 嗎？這好像跟其它程式語言裡的 Closure 不太一樣，別人家的好像會把附近的變數或值給綁架進去函數裡...

捕獲附近 Scope 的值
-------------

Rust 的 Closure 的確是可以把周圍的變數給綁進去的：

```rust
let n = 100;
let add_one = || n + 1;

println!("結果 : {}", add_one());  // 印出 101
```

在 `add_one` 後面的 Closure 裡本身並沒有定義變數 `n`，但它還是可以印出 101。你可能覺得這沒什麼，但一般的函數是做不到的：

```rust
let n = 100;

fn add_one() {
    return n + 1;
}

println!("結果 : {}", add_one());

```

會得到的錯誤訊息是：

```rust
error[E0434]: can't capture dynamic environment in a fn item
13 |         return n + 1;
   |                ^
   |
   = help: use the `|| { ... }` closure form instead

```

這點設計跟 JavaScript 不同，JavaScript 會直接往外面取得外面的變數 `n`。

但 Closure 能做的事不只這樣，Closure 在 Rust 是一等公民，它可以被當參數傳進另一個函數裡，也可以被當做回傳值回傳回來，我們下個章節再來看看在 Rust 怎麼做到這件事 :)