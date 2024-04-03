---
＃id: doc-markdown
title: 08-rust_函數
description: 函數
keywords:
  - rust
last_update:
  date: 4/03/2024
  author: ttom
---

一個很簡單的問題：

> 什麼是函數（function）？

大家在國中還是高中上數學課的時候有沒有看過這種東西：

> f(x) = 3x + 2

當時老師會說這個叫做「一元一次方程式」，那個 `x` 就是「代數」，如果代 2 進去會得到 8，帶 3 進去會得到 11，如果再代一次 2，還是會得到 8。事實上這就是函數，前面那個 `f` 就是函數 function 的意思，只是大家可能一時沒意識到罷了（還是不願想起來？）

所以如果要我給「函數」一個定義，我會說：

> 函數是「**輸入值**」與「**輸出值**」之間的對應關係

而函數的名稱就是這個對應關係的名字。

把這些名詞換成程式語言的話，輸入值就是「參數（parameter）」，而輸出值就是「回傳值（return value）」。一個好的函數，理想狀況是可以做到這個函數的輸出值只跟它的輸入值有關。只要是固定的輸入值，不管執行幾次，它的答案不會飄，就是固定的輸出值，不會因為其它像是亂數或環境變數之類的「副作用（Side Effect）」而造成輸出值不同。通常我們也會稱這樣的函數叫「純函數（Pure Function）」。


**給函數一個好的名字很重要**，一個好的名字最好做到一眼就看出來它想要做什麼事，之所以會撰寫函數，是因為我們可以透過函數把原本比較繁瑣的流程抽象出來，我們的腦細胞就可以把重點放在怎麼使用這個函數，而不需要關注函數本身實作的細節。不過，命名是電腦科學界的兩大難題之一，但有好的名字是很難的，光是命名就能寫一整本書了。

> ‟ There are only two hard things in Computer Science: cache invalidation and naming things. ”  
> \-\- Phil Karlton

想要再深入了解這方面的主題，可用關鍵字「函數式程式設計（Functional Programming）」再找其它資料研究。

在 Rust 裡定義函數是使用關鍵字 `fn`，後面接著函數的名稱：

```rust
fn say_hello() {
    println!("Hello, Rust!");
}

```

函數名稱的命名建議跟變數一樣也是蛇式命名法。

### 參數與回傳值

函數可以不帶任何參數，也可以帶很多個參數，就看實際需要而決定。如果要帶參數的話，需要明確的指定代入的參數是什麼型態：

```rust
fn main() {
    print_number(5566);
}

fn print_number(n: i32) {
    println!("{}", n);
}

```

若帶入的資料的型別跟期望的不符，Rust 就會給你一個錯誤訊息。除了參數之外，函數的回傳值也要標註型別：

```rust
fn add(a: i32, b: i32) -> i32 {
    return a + b;
}

```

如果該函數沒有要回傳任何東西可以不用特別標記型別，或是也可寫成 `-> ()`，這個是在上個章節介紹到的那個沒有任何元素的 Tuple，又稱 Unit。

雖然 Rust 不支援直接一次回傳多個值，不過你可以使用 Tuple 來做到這件事，要注意的是，在函數的回傳值也需要根據實際會回傳的資料型別做標記：

```rust
fn get_data() -> (char, i32, bool) {
    return ('a', 30, true);
}

```

特別提一下在 Rust 裡的 `main` 函數，它是一個特別的設計。`main` 函數是整個程式的進入點，這個函數不收任何參數也沒有回傳值。

### 函數簽名（function signature）

在程式語言裡，函數簽名指的是是函數的宣告或定義，它包括了函數的名稱、參數的列表、型別，以及函數的回傳值及型別，透過函數簽名的描述可以更清楚的知道每個函數的使用方式，例如引數（Argument）應該要給幾個、分別是什麼型別？執行完的回傳值又是什麼。

### 要不要寫分號？

在撰寫 Rust 程式的時候你可能會注意到，每行程式碼的結尾都要有分號，但好像有時候不寫又會出錯？所以，到底是該不該寫？在討論要不要寫分號之前，我們得先來認識兩個專有名詞，一個叫「Expression（表達式）」，另一個叫「Statement（陳述句）」。

#### Expression vs Statement

我們一般人類用的語言，不管是英文、日文還是中文都差不多，都有很多的詞組或片語（Phrase），而一個完整的句子是由這些片語組合而成。舉例來說，「我喜歡吃火鍋」這句話其中的「喜歡」、「吃」跟「火鍋」雖然你都知道這些代表什麼意思，但都不能算是一個完整的句子，只能算是單字片語（Phrase）。如果對比到電腦程式語言來說，這些單字片語就是「表達式（Expression）」。雖然有些單字片語本身就能夠表達意思，但通常要把整個句字從頭到尾講完，才算的上是個完整句子；以電腦程式語言來說，完整的一句話就是「陳述句（Statement）」。

如果這樣還是有些抽象，來些例子吧：

```javascript
18
age
age > 18

```

從最簡單的數字、字串，到四則運算，或是變數本身或函數呼叫，這些都是 Expression，例如上例中數字 `18` 本身、`age` 變數，以及 `age > 18` 的結果，都是一個 Expression，它們最後都會得到一個結果、一個值，也就是得到數字 18 本身、`age` 變數所代表的值，以及 `age > 18` 計算之後的結果。

我們再看看下面這個例子：

```rust
let cats = 5;

if cats > 0 {
    println!("有好多貓 🐈");
}

```

第一行宣告了一個 `cat` 變數並且指定值等於數字 `5`，這是一個 Statement；接著的 `if` 判斷句，也是一個 Statement。

再以人類的語言來比喻，「鮪魚壽司 🍣」就是一個 Expression，它就是代表「鮪魚壽司 🍣」這個東西，但並沒辦法表達你想要說的內容；相對的「我要吃鮪魚壽司 🍣」就是一個 Statement，它可以完整的表示你想表達的意思。

有些時候 Expression 跟 Statement 並沒有那麼明顯的不同，以一個程式新手來說，暫時可以不用太揪結這兩者在定義上有什麼不同，但比較明確的差別，在於 Expression 會有回傳值（Return Value），但 Statement 不會，所以：

```javascript
let a = 1 + 2;

```

因為 `1 + 2` 這個 Expression 的回傳值是 `3`，所以此時變數 `a` 的值就是 `3`。但這整句「使用 `let` 宣告變數」是一個 Statement，這個行為本身是沒有回傳值的。

Expression 跟 Statement 這兩個名詞並不是 Rust 發明的，其實在很多程式語言裡面本來就都有這個概念，只是你可能不知道你寫的就是 Expression 跟 Statement 而已。

回到原本的問題，Rust 需不需要寫分號？如果你不想了解這麼多細節的話，簡單的答案是「要」。雖然在 Rust 的 Expression 可以不加分號，但 Statement 結尾需要加上分號，表示這個句子結束了，否則會影響之後的程式碼的編話。看看這段範例：

```rust
fn main() {
    let age = 20;
    18;
    age > 18;
    println!("{}", age);
}

```

數字 `18` 以及 `age > 18` 這兩行是 Expression 雖然可以不加分號，但不加分號就不會是一個完整的句字（Statement），會導致後續的程式碼編譯錯誤。執行上面這段程式碼不會出錯，但 Rust 編譯器還是很貼心的給了一段警告：

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
warning: unused comparison that must be used
 --> src/main.rs:4:5
  |
4 |     age > 18;
  |     ^^^^^^^^ the comparison produces a value

```

如果程式碼就只有一行，或是剛好是最後一行，不寫分號也可以，Rust 編譯器會知道該結束了，像這樣：

```rust
fn main() {
    println!("有好多貓 🐈")
}

```

在這個情況下，不寫分號也可以。

回傳值
---

不過在 Rust 裡，如果函數的最後一行是一個 Expression，可以適當的省略 `return`，Rust 會自動回傳那個 Expression 的值。例如原本完整的程式碼是這樣寫：

```rust
fn add_extra(a: i32, b: i32) -> i32 {
    let extra = 100;
    return a + b + extra;
}

```

利用 Rust 會回傳最後一個 Expression 的設計，就能簡化成這樣：

```rust
fn add_extra(a: i32, b: i32) -> i32 {
    let extra = 100;
    a + b + extra
}

```

把 `return` 跟分號都拿掉。這時候如果寫上分號反而會出錯。

```shell
$ cargo run
   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)
error[E0308]: mismatched types
 --> src/main.rs:6:33
  |
6 | fn add_extra(a: i32, b: i32) -> i32 {
  |    ---------                    ^^^ expected `i32`, found `()`
  |    |
  |    implicitly returns `()` as its body has no tail or `return` expression
7 |     let extra = 100;
8 |     a + b + extra;
  |                  - help: remove this semicolon to return this value

```

加上了分號，表示這是一個 Statement，它是沒有回傳值的。原本說好要回傳 `i32` 卻沒有回傳值，所以 Rust 就跳出來請你把最尾巴的分號移掉，讓它變成一個 Expression 就行了。

### 條件賦值

先看看以下這段範例：

```rust
let age = 20;
let message;

if age < 8 {
    message = "小朋友";
} else if age >= 8 && age < 18 {
    message = "年輕人";
} else {
    message = "成年人";
}

println!("{}", message);

```

應該不算太難理解，大概就是依據變數 `age` 的值而決定 `message` 的值。在 Rust 同樣可以透過 Expression 來簡化它：

```rust
let age = 20;

let message = if age < 8 {
    "小朋友"
} else if age >= 8 && age < 18 {
    "年輕人"
} else {
    "成年人"
};

println!("{}", message);

```

用這種寫法的話需要要注意兩點：

1.  每個 Expression 結尾不加分號。
2.  在最後 `else` 區塊後面的分號別忘了寫，因為這一整串就是一個 Statement，Statement 是需要分號的。

第 2 點其實還滿容易忘的，但沒關係，漏了寫 Rust 的編譯器會提醒你的。


