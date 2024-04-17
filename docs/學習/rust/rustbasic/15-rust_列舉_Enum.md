---
＃id: doc-markdown
title: 15-rust_列舉_Enum
description: _列舉_Enum
keywords:
  - rust
last_update:
  date: 4/17/2024
  author: ttom
---

「列舉（Enum）」並不是什麼很新或很特別的設計，在其它程式語言也常見，列舉是用來表示某種特定類型的值集合，通常會要把同樣類型的東西放在一起（例如顏色 `Color`），並且給它個名字（`Red`、`Green` 或 `Blue`）。在程式碼裡使用 Enum 的時候比較不會因為不小心打錯字而造成錯誤，同時程式碼的可讀性也會比較好。

但 Rust 的 Enum 功能除了把項目列出來之外，還有一些其它程式語言的 Enum 所沒有的。

建立列舉
----

在 Rust 可以使用小寫的 `enum` 關鍵字建立列舉：

```rust
enum CatBreed {
    Persian,           // 波斯貓
    AmericanShorthair, // 美國短毛貓
    Mix,               // 米克斯
}
```

在列舉裡面的東西沒有限定數量，在 Enum 裡那些看起來像屬性或欄位的東西叫做「變體（Variants）」。不管是 Enum 本身的或是變體的命名慣例，Rust 都是建議你使用駝峰式命名法。這裡我建立了個名為 `CatBreed` 的 Enum，裡面有波斯貓、美國短毛貓以及混種的米克斯。

如果要使用定義好的 Enum，需連名帶姓一起用：

```rust
let breed = CatBreed::Persian;

```

中間是 2 個冒號 `::`。以往使用 `let breed = "persian"` 這樣的字串寫法一不小心寫錯可能不容易發現，但用 Enum 的好處就是只要打錯一點點，馬上就會被挑出來。

通常有 Enum 之後，在其它程式語言通常就會用它再搭配 `if..else` 或 `switch` 根據不同的變體而有不同的流程。不過在 Rust 並沒有 `switch` 的寫法，倒是有 `match` 可以用，它寫起來跟 `switch` 有點像，但有我個人很喜歡的「模式匹配（Pattern Matching）」功能：

```rust
let breed = CatBreed::Persian;

match breed {
    CatBreed::Persian => {
        println!("我是波斯貓");
    }

    CatBreed::AmericanShorthair => {
        println!("我是美國短毛貓");
    }

    CatBreed::Mix => {
        println!("我是米克斯");
    }
}

```

使用 `match` 的時候，如果分支（Branch）有大括號包起來的話，每個分支之間可以不需要加逗號，如果分支的內容比較簡單可以一行就寫完，也可以把大括號拿掉，改寫成這樣：

```rust
match breed {
    CatBreed::Persian => println!("我是波斯貓"),
    CatBreed::AmericanShorthair => println!("我是美國短毛貓"),
    CatBreed::Mix => println!("我是米克斯"),
}

```

這種寫法的話每個分支之間就得用逗號分開了。因為範例都比較簡單，以下我會用比較簡捷的寫法。

關於 `match`，第一個我覺得好用的點，就是不用寫 `break`，我真的很常忘記在 `switch` 的時候忘了加上 `break`。如果光就只有這樣的話，它就跟其它程式語言的 `switch` 就沒太大的差別了。

當 `match` 跟 Enum 搭在一起用的時候，Rust 編譯器會檢查是否所有的可能性都考慮到了，就以這點來說很 Rust。假設我故意漏一個沒寫，像這樣：

```rust
match breed {
    CatBreed::AmericanShorthair => println!("我是美國短毛貓"),
    CatBreed::Persian => println!("我是波斯貓")
}

```

編譯過程就會發生錯誤：

```shell
$ cargo run
error[E0004]: non-exhaustive patterns: `CatBreed::Mix` not covered
10 |     match breed {
   |           ^^^^^ pattern `CatBreed::Mix` not covered

```

Rust 編譯器明白的告訴你 `CatBreed::Mix` 這個沒有寫到。其它程式語言的 Enum 可能根本不在意這種事，沒寫到就沒寫到，在 JavaScript 說不定就給你個 `undefined` 就算了，但 Rust 編譯器就是這麼龜毛，可以的話就盡量在編譯階段就知道所有的可能性，要講清楚說明白，不要有任何不確定性。

但如果變體有 10 個、20 個怎麼辦？難道要每個都寫嗎？`match` 有提供一種「剩下的我都包了」的寫法：

```rust
match breed {
    CatBreed::Mix => println!("我是米克斯"),
    _ => println!("我是品種貓")
}

```

使用 `_` 可以用來代表所有其它的可能性，有點像預設值的概念，所以上面這段範例就能解釋為「如果不是米克斯，其它的都是品種貓」。不過因為 `match` 在比對的時候會由上而下依序比對，使用 `_` 的時候要注意順序問題，像是這樣反過來這樣寫的話：

```rust
match breed {
    _ => println!("我是品種貓"),
    CatBreed::Mix => println!("我是米克斯")
}

```

因為在上面的 `_` 就會把所有的可能性都吃掉了，後續的 `CatBreed::Mix` 就根本沒有機會被觸法，所以不管是什麼品種，一律都只會印出「我是品種貓」字樣。這樣寫編譯的時候不會出錯，因為不知道你是故意的還是不小心的，但 Rust 還是會貼心的提醒你一下：

```shell
$ cargo run
warning: unreachable pattern
11 |         _ => {
   |         - matches any value
...
15 |         CatBreed::Mix => {
   |         ^^^^^^^^^^^^^ unreachable pattern

```

最遙遠的距離不是生與死，而是你就在我面前，我卻我永遠走到不你身邊的 `unreachable pattern`。

如果各位有一邊開著電腦一邊跟著敲打程式碼一邊執行的話，應該會發現剛剛執行的時候 Rust 編譯器會一直丟訊息提醒你一些事：

```shell
$ cargo run
warning: variants `Persian` and `AmericanShorthair` are never constructed
1 | enum CatBreed {
  |      -------- variants in this enum
2 |     Persian,           // 波斯貓
  |     ^^^^^^^
3 |     AmericanShorthair, // 美國短毛貓
  |     ^^^^^^^^^^^^^^^^^

```

意思就是這裡的 `Persian` 跟 `AmericanShorthair` 這兩種變體在程式碼裡面根本沒出現。為什麼沒出現？是不是一開始想比較多，多加了一些上去，還是後來需求變更導致某些變體不再使用但卻沒刪掉（或不敢刪）？其實這在 Struct 也有一樣的情況，Rust 編譯器在做正確的事，但如果你覺得 Rust 編譯器管的有點多，同樣可以在 Enum 前面加上 `#[allow(dead_code)]` 的屬性設定，暫時關閉檢查：

```rust
#[allow(dead_code)]
enum CatBreed {
    Persian,           // 波斯貓
    AmericanShorthair, // 美國短毛貓
    Mix,               // 米克斯
}
```

變體還能帶參數！
--------

其它程式語言的 Enum 大概就真的只有「列舉」字面上的意思，把所有的變體一字排開列出來而已，但 Rust 的 Enum 還有一些特別的設計，其中之一就是它的變體還能帶參數：

```rust
enum CatBreed {
    Persian,              // 波斯貓
    AmericanShorthair,    // 美國短毛貓
    Mix(String, u8),      // 米克斯
}

```

如果變體有參數的話，在使用的時候也要帶給它：

```rust
let kitty = CatBreed::Mix(String::from("Kitty"), 8);
let nancy = CatBreed::Persian;
```

然後你也可以把它傳給其它函數，整個程式碼看起來會變這樣：

```rust
#[allow(dead_code)]
enum CatBreed {
    Persian,             // 波斯貓
    AmericanShorthair,   // 美國短毛貓
    Mix(String, u8),     // 米克斯
}

fn main() {
    let kitty = CatBreed::Mix(String::from("Kitty"), 8);
    let nancy = CatBreed::Persian;

    greeting(&kitty);
    greeting(&nancy);
}

fn greeting(cat: &CatBreed) {
    match cat {
        CatBreed::Mix(name, age) => println!("我是米克斯，我叫 {}，我今年 {} 歲", name, age),
        _ => println!("我是品種貓")
    }
}

```

上面這個 `greeting(cat: &CatBreed)` 意思是帶進來的這個 `cat` 是一種 `CatBreed` （的參照），這 Enum 用起來的手感好像跟一般的型別或 Struct 有點像...


還沒完，Enum 裡的變體可以帶 Struct 進去，甚至連變體本身也可以是一個 Struct：

```rust
struct Skill {
    action: String
}

enum CatBreed {
    Persian,             // 波斯貓
    AmericanShorthair,   // 美國短毛貓
    Mix(String, u8),     // 米克斯
    Other(Skill),        // 其它
    Alien{power: u32}    // 外星貓
}

```

實際用起來大概會變這樣：

```rust
fn main() {
    let goku_cat = CatBreed::Other(Skill{action: "龜派氣功".to_string()});
    let frieza_cat = CatBreed::Alien { power: 530000 }; // 戰鬥力 53 萬

    greeting(&goku_cat);
    greeting(&frieza_cat);
}

fn greeting(cat: &CatBreed) {
    match cat {
        CatBreed::Mix(name, age) => println!("我是米克斯，我叫 {}，我今年 {} 歲", name, age),
        CatBreed::Other(skill) => println!("使出絕招{}！", skill.action),
        CatBreed::Alien { power } => println!("我的戰鬥力是 {}", power),
        _ => println!("我是品種貓")
    }
}
```

看到這裡，有用過其它程式語言的 Enum 的人，應該很明顯感受到差異了。但，怎麼好像有點像在用 Struct 的即視感？不急，你再接著往下看：

```rust
impl CatBreed {
    fn go(&self) {
        println!("Go!");
    }
}

```

咦？`impl` 也能幫 Enum 加功能？是的，如果你喜歡，連 Trait 也能加在 Enum 上。這樣，到底 Enum 跟 Struct 有什麼差別？什麼時候該選用哪一種？

Enum vs Struct
--------------

Rust 中的 Enum 和 Struct 確實有些相似之處，但它們也有一些不一樣的地方，使用情境也不太一樣：

### 相同

-   都可以用來產生實體或傳進函數裡。
-   都可以用 `impl` 幫自己增加功能，Trait 也都能用。
-   都可以配合 `match` 一起使用。

### 不同：

-   Enum 可以有很多的變體（Variant），每個變體都還能另外接不同型態的參數；Struct 的可以有很多欄位（Field），不過就沒辦法像變體這麼多變化了。
-   雖然 Enum 跟 Struct 都可以跟 `match` 搭配著使用，但 Enum 的話會檢查是不是每個變體的情況都有考慮到了，Sturct 就沒這設計。
-   Enum 裡面可以包 Struct，但 Struct 裡面不能包 Enum。

### 使用時機

如果是要用來表示有限的狀態，例如像是用來表示最新款 iPhone 手機的顏色、訂單是否已結帳、已出貨、已到貨等不同狀態，或是需要對這些可能性進行模式匹配（Pattern Matching），然後依不同情況執行不同的程式碼。如果是這種情況可考慮使用 Enum，其它則可考慮使用 Struct。

Enum 跟 Struct 在 Rust 裡都是重要而且常用的資料型態，通常會根據實際情況而且選用合適的種類，我知道這句話聽起來跟在非洲每 60 秒就有一分鐘過去一樣的沒幫助，但在現在我相信講了也沒辦法想像是到底什麼情境適合哪一種，這就待後半段實作的時候遇到實際的狀況再來解釋會更有感覺。



