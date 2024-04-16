---
＃id: doc-markdown
title: 14-rust_特徵_Trait
description: _特徵_Trait
keywords:
  - rust
last_update:
  date: 4/16/2024
  author: ttom
---

介紹的主題是「特徵（Trait）」，Trait 在 Rust 裡很常出現，如果能夠理解 Trait 的用途跟語法，應該就更能看懂其它人寫的程式碼或甚至是 Rust 本身的原始碼。

物件導向（Object-Oriented）
---------------------

假設我寫了一個 `Cat` 類別跟一個 `Dog` 類別，不同的類別通常會有各自的行為，但如果它們有共同的行為的話，在物件導向的世界觀裡，我們通常會另外開一個 `Animal` 類別，把共同的行為寫在裡面，再讓 `Cat` 與 `Dog` 類別去繼承它。

Rust 裡並沒有類別的設計，比較接近的大概就是我們在前面章節曾經介紹過的 Struct，搭配 `impl` 幫 Struct 加一些功能，用起來就會有點像其它程式語言裡面的 `class` 了。

物件導向裡的繼承雖然用起來很方便，但也有它的問題在，例如類別 `Bird` 它有飛行功能，如果我想要 `Cat` 也會飛的話，簡單的做法就是只要讓 `Cat` 去去繼承 `Bird` 類別就好了。但是，只是為了要會飛就得去當 `Bird` 的後代嗎？為了解決這種繼承的問題，有些程式語言有模組（Module）或介面（Interface）的設計，例如我們可以把飛行的功能寫在飛行模組裡面，`Cat` 只要把這個飛行模組掛在身上它就能飛了，而且它還是可以當它的 `Cat`，變成一隻飛天貓。如果 `Dog` 或 `Fish` 也想要會飛，就自己拿去掛，大家都能開心的做自己，不需要當 `Bird` 的後代。

在 Rust 沒有介面的設計，但它的 Trait 的設計有點接近這個概念。

什麼是 Trait？
----------

我們可以在 Rust 裡定義一些行為，然後將這些行為套用到不同的類別上。如果各位曾經寫過其它支援物件導向設計的程式語言，你可以將 Trait 想像成一種介面（interface）或是抽象類別（abstract class）的概念。

定義 Trait
--------

在 Rust 裡可以透過 `trait` 關鍵字來定義 Trait：

```rust
trait Flyable {
    fn fly(&self);
}

```

Trait 的命名慣例沒硬性規定，但看到現在你應該多少認識 Rust 編譯器的個性了，Rust 又會再次「鼓勵」你要用大寫的駝峰式命名法。

在 Trait 裡面只要寫函數簽名就好，不一定要把實際的功能寫出來，如果函數有回傳值的話，也要明確的把回傳值的型態寫清楚。在上面的範例中的 `fly(&self)` ，不知道大家記不記得在 Struct 章節介紹過的內容，有加 `&self` 表示這個會是實體方法，執行的時候就會像 `kitty.fly()` 這樣，如果沒有加的話會是類別方法（但 Rust 沒有類別），用起來就會像是 `Cat::fly()`。

定義好 Trait 之後，接著來看看怎麼把它用在 Struct 上。

實作 Trait
--------

假設我有一個 Struct 像這樣：

```rust
struct Cat {
    name: String,
    age: u8
}

```

在前面的 Struct 章節曾介紹過 `impl` 關鍵字可以幫 Struct 加一些方法，如果要把 Trait 用在 Struct 上也是一樣的做法，只是寫法稍微再加一些料：

```rust
impl Flyable for Cat {
    // 實作內容在這裡
}

```

多加一個 `for` 關鍵字表示要幫 `Cat` 結構實作 `Flyable` 的特徵。裡面的實作內容就要照當時定義 Trait 的時候函數簽名乖乖的寫，如果像上面這樣沒寫或是函數簽名對不起來，Rust 編譯器都會給你錯誤訊息：

```shell
$ cargo run
error[E0046]: not all trait items implemented, missing: `fly`
2  |     fn fly(&self);
   |     -------------- `fly` from trait
...
10 | impl Flyable for Cat {
   | ^^^^^^^^^^^^^^^^^^^^ missing `fly` in implementation

```

完整寫完大概會像這樣：

```rust
impl Flyable for Cat {
    fn fly(&self) {
        println!("嘿，我是 {}，你看我會飛，你不會！", self.name);
    }
}

```

透過 `self` 可以取得 Struct 欄位的值，用起來就會像這樣：

```rust
let kitty = Cat { name: String::from("Kitty"), age: 18 };
kitty.fly()  // 印出 嘿，我是 Kitty，你看我會飛，你不會！
```

### 你不屬於這裡

是說，如果在 `impl` 的過程中偷渡了不屬於 `Flyable` 這個特徵應該有的方法呢？像這樣：

```rust
impl Flyable for Cat {
    fn hey(&self) {
        println!("How you doing")
    }
}

```

你覺得以 Rust 這麼龜毛的個性怎麼會讓你過，直接就把編譯過程擋下來了：

```shell
$ cargo run
error[E0407]: method `hello` is not a member of trait `Flyable`
19 | /     fn hello(&self) {
20 | |         println!()
21 | |     }
   | |_____^ not a member of trait `Flyable`

```

Rust 編譯器直白的跟你說「你不屬於這裡」。

Trait 的預設實作
-----------

其它 Struct 如果看了覺得會飛很羨慕，只要可以自己去實作 `Flyable` 特徵就行了。如果 `Dog` 跟 `Fish` 結構也都想要可以飛，的確是可以實作 `Flyable` 特徵沒錯，但如果大家實作結果都一樣，這樣感覺會有點重複？

Trait 的設計目的就是希望大家可以自己實作自己的特徵，但如果特徵都一樣，也可以直接在 Trait 裡就把實作功能寫上去，就像這樣：

```rust
trait Flyable {
    fn fly(&self) {
        println!("飛呀~飛呀~小飛俠！");
    }
}

```

Trait 可以直接把實作寫在裡面，這點跟其它程式語言的介面（Interface）不太一樣。有了預設實作，在 `impl` 的時候就不用特別再寫了：

```rust
impl Flyable for Dog {}
impl Flyable for Cat {}

```

然後大家就都可以飛了：

```rust
let kitty = Cat { name: String::from("Kitty"), age: 18 };
let lucky = Dog { name: String::from("Lucky") };
kitty.fly();  
lucky.fly();

```

如果 `Cat` 結構不想跟大家一樣吃大鍋飯，也在自己的 `impl` 實做 `fly()` 方法也沒問題。

### 預設實作裡的 `self`

雖然 Trait 裡可以直接把實作寫上去，但如果在預設實作裡面想要透過 `self` 取得 Struct 的欄位的話，像這樣：

```rust
trait Greeting {
    fn say_hello(&self) {
        println!("你好，我是 {}", self.name);
    }
}

```

執行就會發現這樣編譯不會成功：

```shell
$ cargo run
error[E0609]: no field `name` on type `&Self`
1 | trait Greeting {
  | -------------- type parameter 'Self' declared here
2 |     fn say_hello(&self) {
3 |         println!("你好，我是 {}", self.name);
  |                                        ^^^^

```

這如果是自己在 `impl` 裡實作沒問題，但在預設實作裡就會出錯，會發生這個錯誤是因為在預設實作裡的 `self` 指的並不是 Struct 本身，所以自然不會有 `.name` 欄位。有個比較簡單的解法：

```rust
trait Greeting {
    fn say_hello(&self) {
        println!("你好，我是 {}", self.name());
    }

    fn name(&self) -> &str;
}

```

這裡放了一個 `name` 方法但不實作，留到 `impl` 裡再實作，然後在 `say_hello()` 呼叫這個方法，因為 `name` 是在各自的 `impl` 裡被實作的，所以它就能透過 `self` 取得該結構的 `.name` 欄位：

```rust
impl Greeting for Cat {
    fn name(&self) -> &str {
        self.name.as_str()
    }
}

```

這樣就沒問題了。

你會飛，我會飛，大家都是小飛俠！
----------------

Trait 不是只有定義方法這樣，它還可以做到其它程式語言裡面「多型（Polymorphism）」的效果。例如我寫了一個高空彈跳的方法：

```rust
fn bungee(someone) {
    someone.fly();
}

```

只是我這個高空彈跳比較刺激一點，是沒有繩子的那種，所以傳進來的傢伙最好你自己會飛，不然...。但要怎麼確保傳進來的參數一定有實作 `fly()` 方法？可以這樣寫：

```rust
fn bungee(someone: &dyn Flyable) {
    someone.fly();
}

```

這個 `&dyn` 關鍵字是「動態分發（Dynamic Dispatch）」的意思，細節請讓我留到後面的泛型章節再一併詳述。也就是說傳進來的不管是阿貓阿狗，任何人只要有三百萬美金都可以參加慈善撲克王大賽...不是，是只要你有 `Flyable` 的特徵就可以玩這個遊戲：

```rust
let kitty = Cat { name: String::from("Kitty"), age: 18 };
let nancy = Cat { name: String::from("Nancy"), age: 12 };

bungee(&kitty);  // 印出 飛呀~飛呀~小飛俠！
bungee(&nancy);  // 印出 飛呀~飛呀~小飛俠！

```

因為 `Cat` 有實作 `Flyable` 特徵，所以沒問題，假設如果來個沒實作特徵的 `Dog` 的話呢：

```rust
let lucky = Dog { name: String::from("Lucky") };  // 沒有實作 Flyable
bungee(&lucky);

```

Rust 的編譯器怕出事，所以在編譯階段就把它擋下來了：

```shell
$ cargo run
error[E0277]: the trait bound `Dog: Flyable` is not satisfied
35 |     bungee(&lucky);
   |            ^^^^^^ the trait `Flyable` is not implemented for `Dog`

```

錯誤訊息滿明顯的，就是 `Dog` 沒有實作 `Flyable` 特徵，不讓你玩高空彈跳。

### 同時實作多個特徵

有些程式語言會使用多重繼承來實現多型，然而多重繼承可能導致「菱形繼承」問題，因此通常會改用實作多個介面或引入多個模組的方式來實現多型的效果。Rust 的 Trait 也有這個功能，Rust 並沒有限定一個 Struct 只能實作一個特徵，你想要實作幾個就幾個：

```rust
impl Flyable for Cat {}
impl Greeting for Cat {}
impl Animal for Cat{
    fn sleep(&self) {
        println!("Zzzzzz");
    }
}

```

這樣 `Cat` 結構就同時擁有 `Flyable`、`Greeting` 以及 `Animal` 等特徵，但它本身還是 `Cat`。

Rust 裡 Trait 的概念某些程式語裡的「介面」有點像但用起來又比介面多了一些彈性，所以大家知道什麼是介面，可以先用看待介面的角度來看待 Trait，以前學過的那句：

> program to interfaces, not implementations

這個概念同樣可以用在 Trait 身上。
