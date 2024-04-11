---
＃id: doc-markdown
title: 12-rust_結構_Struct
description: _結構_Struct
keywords:
  - rust
last_update:
  date: 4/11/2024
  author: ttom
---

除了先前介紹過的 Array、Tuple 以及 Vector 之外，在 Rust 裡還有個很常用的資料結構叫做「結構（Struct）」

建立 Struct
---------

在 Rust 裡可以使用 `struct` 關鍵字來定義一個 Sturct：

```rust
struct Cat {
    name: String,
    age: u8,
    is_sleeping: bool,
}
```

Struct 需要給它一個名字，例如 `Cat`，裡面通常會放一些看起來像屬性的欄位（fields）以及這個欄位的型態。在宣告 Struct 的時候雖然沒有硬性規定要用什麼樣的命名慣例，但如果像這樣寫：

```rust
struct dog {
    NAME: String,
    Age: u8,
}

```

雖然程式不會出錯，但會跳一些警告訊息，Rust 的編譯器會「鼓勵」你應該用駝峰式命名 Struct，而裡面的欄位則是使用蛇式命名。

使用 Struct
---------

定義好 Sturct 之後，就可以透過這個 Struct 來建立東西：

```rust
let kitty = Cat {
    name: String::from("Kitty"),
    age: 12,
    is_sleeping: true,
};
```

看到這裡會不會覺得 Struct 看起來有點像 JavaScript 或其它物件導向程式語言裡的類別（Class）？講到 JavaScript 我就想到在 ES6 之後物件的寫法，如果跟 value 的變數名稱跟物件裡的 key 的名字是一樣的，可以簡化成只要寫一個就好：

```javascript
const name = "Kitty"
const age = 12
const isSleeping = true

const kitty = {
  name, 
  age, 
  isSleeping
}

```

比較晚出生的程式語言就是有這種好處，Rust 也借了這個簡寫的設計來用：

```rust
let name = String::from("Kitty");
let age = 12;
let is_sleeping = true;

let kitty = Cat {
    name,
    age,
    is_sleeping
};
```

不過 Rust 就比 JavaScript 嚴謹多了，例如在建立實體的時候如果給的資料型別不對，想都不用想就知道 Rust 一定會用錯誤訊息提醒你，甚至少給了欄位的時候：

```rust
let kitty = Cat {
    name: String::from("Kitty"),
    age: 12
};

```

這裡漏給了 `is_sleeping`，Rust 不會讓這段程式碼通過編譯：

```shell
$ cargo run
error[E0063]: missing field `is_sleeping` in initializer of `Cat`
   |
23 |     let kitty = Cat {
   |                 ^^^ missing `is_sleeping`

```

Rust 編譯器會很直白的提醒你有缺東西，我很喜歡 Rust 這種有話就直說的設計。

接下來你就可以像在 JavaScript 裡操作物件一樣的手法來使用它了：

```rust
println!("{}", kitty.name);
println!("{}", kitty.age);
println!("{}", kitty.is_sleeping);

```

透過 `.` 就可以取用設定的值了，而且你只能透過這個方式取得，不像 JavaScript 還可以用 `kitty["age"]` 這種方式取值。

But...又是這個 But，在上面的例子裡的 `Cat` Struct 定義了 3 個欄位，但實際在用的時候根本沒用到 `.is_sleeping`，執行的時候程式不會錯，但 Rust 編譯器也會再出來給你一點建議：

```shell
$ cargo run
warning: field `is_sleeping` is never read
  |
1 | struct Cat {
  |        --- field in this struct
...
4 |     is_sleeping: bool,
  |     ^^^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

```

看到這個警告，你的第一個想法也許是「Rust 你也管太寬了吧」，但你有沒想過什麼情況下欄位定義了卻沒用到？通常是一開始在設計的時候想的比較遠，想要先把欄位開一開，或是本來有在用的欄位後來因為需求變更而不再使用卻也沒有（也不敢）刪掉，不管是哪個情況都表示這個欄位的確是多餘、不需要了。

針對這點 Rust 會好意提醒你，但如果你覺得它有點煩，或是你也不確定這個欄位之後還要不要用，可以加上 `#[allow(dead_code)]` 的寫法，告訴 Rust 說這裡雖然有目前用不到的欄位，你先不要管我：

```rust
#[allow(dead_code)]
struct Cat {
    name: String,
    age: u8,
    is_sleeping: bool,
}

```

我個人是不建議啦，但這樣就可以暫時把這個警告關掉。

如果想要修改欄位的值的話，就像 JavaScript 一樣透過 `.` 配合欄位名稱來改就行了：

```rust
kitty.age = 20;

```

執行之後就會看到錯誤訊息：

```rust
$ cargo run
error[E0594]: cannot assign to `kitty.age`, as `kitty` is not declared as mutable
   |
29 |     kitty.age = 20;
   |     ^^^^^^^^^^^^^^ cannot assign

```

沒錯，`let` 宣告出來的變數預設是不能修改的（immutable），但我想你學到這裡大概也知道該怎麼做了，就只要加個 `mut` 給它就能搞定了：

```rust
let mut kitty = Cat {
    name,
    age,
    is_sleeping
};
```

定義方法
----

在 Struct 裡除了可以定義欄位外，也能定義方法。JavaScript 或其它程式語言如果要幫類別定義方法，通常都是寫在類別裡面，但在 Rust 則是另外透過 `impl` 關鍵字寫在別的地方，`impl` 是 implementation 的縮寫：

```rust
struct Cat {
    name: String,
    age: u8,
    is_sleeping: bool,
}

impl Cat {
    fn greeting(&self) {
        println!("Hello, my name is {}", self.name);
    }
}
```
其中在 `greeting` 方法裡的 `&self` 是個固定的寫法，你不能把它換成別的參數名稱（換掉的話會是別的意思）。`&self` 是指對自己這個實體的引用，所以在函數裡面的 `self.name` 指的就是自己這個物件身上的 `name` 欄位。有了 `impl` 的加持，所有透過 `Cat` 所產生出來的實體都會有這個方法可以用：

```rust
kitty.greeting() // 印出 Hello, my name is Kitty
```
雖然在 `impl` 裡的 `greeting()` 的函數簽名看起來是 1 個參數，但實際上在使用它的時候不需要代任何引數給它，它自己就會把自己帶進 `&self` 裡。

因為 `&` 引用預設是 immutable 的，所以在這裡不能透過 `self` 修改欄位的值。如果想要可修改，就是使用 `&mut` 方式來參照：

```rust
impl Cat {
    fn greeting(&self) {
        println!("Hello, my name is {}", self.name);
    }

    fn set_age(&mut self, age: u8) {
        self.age = age;
    }
}
```

也就是說，如果像是這樣的實體方法的話，第一個參數就是自己本身，剩下的參數才是執行的時候帶進去的。這個 `&self` 的設計跟程式語言 Python 的 `self` 設計有點像。

那麼如果沒有給任何參數呢？像這樣：

```rust
impl Cat {
    fn run() {
        println!("Go Go Power Rangers");
    }
}

```

這樣寫的話，這個方法就不是綁在實體上，而是綁在 Struct，所以就必須透過這個 Struct 來呼叫了：

```rust
Cat::run()  // 印出 Go Go Power Rangers

```

同樣的，如果想要讓它可以帶參數：

```rust
impl Cat {
    fn count(list: &[u8]) -> u8 {
        list.iter().sum()
    }
}

```

這樣在呼叫函數的時候就能帶參數進去了：

```rust
let resul = Cat::count(&[10, 20, 30]);
println!("{}", resul);  // 印出 60

```

也就是說，如果想要寫出類似實體方法的話，第一個參數就固定是 `&self` 或 `&mut self`；如果想要寫出類似類別方法，第一個參數就不要放 `&self`。

看到這裡，大概知道 Struct 是怎麼回事之後，再看看下面這行：

```rust
String::from("Hello Kitty");

```

這不就是我們前面用來建立字串的方法嗎？是的，但你現在看著它，能不能猜的出來它的原始碼是怎麼實作的？如果去翻原始碼就會發現：

```rust
// 檔案 string.rs
pub struct String {
    vec: Vec<u8>,
}

```

`pub` 是指公開的存取權限，這個我們在後續章節還會再詳細介紹，但你看看 String 不就是一個 Struct 嗎？再順著原始碼往下看，就能看到這段：

```rust
impl String {
  // ... 略 ...
  impl From<&str> for String {
      /// Converts a `&str` into a [`String`].
      ///
      /// The result is allocated on the heap.
      #[inline]
      fn from(s: &str) -> String {
          s.to_owned()
      }
  }
}

```

這個 `impl .. for` 的寫法我們目前還沒介紹到，但大概能猜到就是幫 `String` 這個 Struct 實作了一個 `from()` 函數，並且帶入一個 `&str` 字串切片。

有沒有發現我們正在一步一步的把拼圖拼出來，越到後面應該就越能看到完全的樣子了。
