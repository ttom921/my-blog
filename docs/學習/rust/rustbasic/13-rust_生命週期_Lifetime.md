---
＃id: doc-markdown
title: 12-rust_生命週期_Lifetime
description: _生命週期_Lifetime
keywords:
  - rust
last_update:
  date: 15/11/2024
  author: ttom
---
在前面的「所有權（Ownership）」章節曾經介紹 Rust 是如何透過所有權的轉讓與出借，來決定是否要釋放不再使用的記憶體空間，但其實在介紹所有權的時候，我們有省略了一些東西。

Rust 有「借（Borrow）」的設計，不需要複製整份資料，只要用 & 做個參照或切片，就能透過參照直接取用原本的資料。但是想像一下，如果我做了一個 Slice 指向某個 Vector，萬一那個 Vector 因為某些因素被放掉了，那麼這個 Slice 會參照到什麼東西？原本指向的記憶體位置讓出來之後假設運氣好沒有被其它資料佔用的話，也許有機會拿回來，但萬一被其它資料佔用了呢？Rust 編譯器為了確保程式可以正確執行，所以不會允許這種懸空參照（dangling reference）可能造成的不確定性，在編譯階段就會直接被擋下來。

所以如果要正常運作的話，被指到的 Vector 就不能比參照它的 Slice 還早消失對吧。Rust 的編譯器有一個 Borrow Checker（以下簡稱 BC）的設計，它會檢查參照的生命週期，如果 Rust 編譯器發現參照的資料的生命週期比較短，也就是會比較早消失，編譯就不會通過。雖然 BC 的檢查可能會有點囉嗦甚至難理解，但它可以避免常見的像是「使用後釋放（use-after-free）」或「雙重釋放（double-free）」的記憶體問題，也是它被說是比較「安全」的原因。


我們先來看一段程式碼：

```rust
fn print_age() {
    let age = 12;
  
    let my_age = &age;

    println!("{}", my_age);  // 印出 12
  
}
```
這裡我故意把程式碼寫的開一點，因為待會要畫個圖會看起來比較清楚一些。上面這段程式碼應該很簡單，最後結果就是印出 12。這裡需要特別注意的是 `&age` 的寫法，在 Rust 並不是只有陣列、字串之類的資料結構才能借，即使是 primitive 的整數型別也可以借。其中 `age` 跟 `my_age` 這兩個變數，都會在 `print_age()` 函數執行結束之後就會放掉他們所佔用的資源。

所謂的「生命週期」就是指從什麼開始出生到什麼時候結束，假設我們現在以 BC 的角度來看待這段程式碼，在 BC 眼裡看來變數 `age` 的生命週期就是從第 2 行的 `let` 開始到整個函數結束為止，這裡我用 `'age` 標記它，而 `my_age` 也一樣，它的生命週期就是從 `let my_age` 那行開始，這裡我用 `'my_age` 標記它：

```rust
fn print_age() {
    let age = 12;            //-----------------+- 'age
                             //                 |
    let my_age = &age;       //-----+- 'my_age  |
                             //     |           |
    println!("{}", my_age);  //     |           |
                             //-----+           |
}                            //-----------------+

```

`my_age` 的生命週期比較短，因為它在 `println!()` 之後就沒用到了，Rust 會在這裡就把它 drop 掉；而 `age` 變數的生命週期稍微長一點，但也活不過這個函數。就是因為 `age` 的生命週期比較長，所以當 `my_age` 想要去借的時候，BC 會先檢查這樣會不會發生提早消失的情況，如果不會發生，Rust 的編譯器就不會抱怨了。

我們再來看另外的例子：

```rust
fn print_age() {
    let my_age;

    {
        let age = 12;
        my_age = &age;
    }

    println!("{}", my_age);

}
```

在 Rust 裡這樣突然加上大括號是 ok 的，不會造成語法錯誤。其實在 JavaScript 這樣寫也不會出錯，只是會這樣寫的人可能比較少。不管在 JavaScript 或 Rust 都一樣，透過 `{ }` 這樣的大括號的寫法會做出一個的 Scope 出來，在這個 Scope 裡的東西宣告的變數在這個 Block 結束之後就會消失（但在 JavaScript 裡的 `var` 不是這麼一回事）。不同的是，在 Rust 裡還有參照這回事，所以故事就會不太一樣了。我用一樣的手法把生命週期標記出來：

```rust
fn print_age() {
    let my_age;              //---------------+-- 'my_age 
                             //               |
    {                        //               |
        let age = 12;        //------+ 'age   |
        my_age = &age;       //      |        |
    }                        //------+        |
                             //               |
    println!("{}", my_age);  //               |
}                            //---------------+

```

在這裡 `my_age` 想要去參照 `age`，但 BC 發現 `age` 的生命週期在大括號結束之後就跟著結束了，Rust 不允許這種白髮人送黑髮人的事情發生，所以在編譯階段就會直接被擋下來。

有趣的是，如果執行這段程式碼，Rust 編譯器給你的錯誤訊息是這樣：

```shell
$ cargo run
error[E0597]: `age` does not live long enough
   |
9  |         let age = 12;
   |             --- binding `age` declared here
10 |         my_age = &age;
   |                  ^^^^ borrowed value does not live long enough
11 |     }
   |     - `age` dropped here while still borrowed
12 |
13 |     println!("{}", my_age);
   |                    ------ borrow later used here

```

Rust 說 `does not live long enough`，意思是它活的不夠久，也明確的指出 `age` 在這個 Scope 之後就會被 drop 掉了。那麼要怎麼讓它活久一點？這就是這個章節要介紹的「生命週期（Lifetime）」，簡單的說，就是要讓它活的夠久但又不會活太久。

看到這裡有沒有感覺有在像在看 JavaScript 的 Scope 的概念？我們再來看看如果把東西傳進函數裡的生命週期的變化。

參數與回傳值
------

同樣先上範例程式：

```rust
struct Cat {
    name: String,
    age: u8
}

fn main() {
    let kitty = Cat { name: "Kitty".to_string(), age: 12 };
    let nancy = Cat { name: "Nancy".to_string(), age: 16 };

    let boss = boss_cat(&kitty, &nancy);
    println!("{}", boss.name);
}

fn boss_cat(c1: &Cat, c2: &Cat) -> &Cat {
    if c1.age > c2.age {
        c1
    } else {
        c2
    }
}

```

程式碼本身應該不難理解 `boss_cat` 會接受 2 個 `Cat` 的參照，比較它們的年紀之後，回傳比較老的那隻當老大。如果用其它程式語言的角度來看沒什麼問題，但在 Rust 的 BC 眼裡就不是這樣了，先讓我們執行它看看：

```shell
$ cargo run
error[E0106]: missing lifetime specifier
   |
14 | fn boss_cat(c1: &Cat, c2: &Cat) -> &Cat {
   |                 ----      ----     ^ expected named lifetime parameter
   |
   = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `c1` or `c2`

```

出錯了，編譯失敗！先不管那個 `named lifetime parameter`，我們先看看底下那段 help 的說明：

> this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `c1` or `c2`

因為回傳值是一種參照，但 Rust 猜不出來到底是會回傳哪一個參照。你可能會好奇這會有什麼問題？反正不是 `c1` 就是 `c2` 不是嗎？

Rust 是個相對嚴謹的程式語言，它必須清楚的知道每個變數的生命週期，不能有不確定性，在上面的範例中，`kitty` 跟 `nancy` 的生命週期很明確，但 `boss` 的生命週期就不是了，遇到這種不確定的時候，Rust 的 BC 選擇寧可錯殺一百也不能放過一人，直接就把編譯停掉了。

其實平常沒事可以不用特別標記生命週期（你要寫也行，只是沒必要），但因為這裡的生命週期有些不確定性，所以你就要直白的告訴 BC 這些東西的生命週期會活多久，原本的 `boss_cat()` 函數要改一下它的寫法...

生命週期標記（Lifetime Annotation）
---------------------------

為了告訴 BC 生命週期，我們得在函數跟參數的地方加上一些奇怪的標記，稱之「生命週期標記」：

```rust
fn boss_cat<'a>(c1: &'a Cat, c2: &'a Cat) -> &'a Cat {
    if c1.age > c2.age {
        c1
    } else {
        c2
    }
}

```

這裡有一些需要特別說明的：

1.  `boss_cat<'a>` 後面的 `'a` 就是生命週期標記的寫法，它是使用「一個單引號」後面搭配任何小寫字母（用大寫也行，但 Rust 會建議你不要這樣寫），但如果你想用 `'rust_is_awesome` 來標記也不會有人管你，只是常看到的會用 `'a` 簡單帶過就好。如果在同一個函數裡需要多個標記的話，通常會用 `'b`、`'c` 這樣一個一個接著用。喔，忘了說，雖然標記名稱可以用任何的字母組合，但 `'static` 例外，它是一個特別的生命週期標記，它表示生命週期將持續整個程式，直到程式結束為止。
2.  `boss_cat<'a>` 的 `<>` 是「泛型（Generics）」的寫法，這在後面的章節會再說明。
3.  `c1: &'a Cat` 跟 `c2: &'a Cat` 是標記這兩個的參照的生命週期是一樣的，這裡的 `'a` 不是隨便想怎麼寫就怎麼寫，得在面前的 `<'a>` 裡有大家先講好什麼是 `'a` 才行，不然這裡突然來個 `'b` 會出錯的。
4.  `-> &'a Cat` 就是標記回傳的這個參照的生命週期也一樣是 `'a`。

加上標記之後，回傳的參照不管是 `c1` 還是 `c2` ，Rust 的 BC 都能確保它的生命週期跟傳進去的參照是一樣的，只要有明確的生命週期，編譯的時候就會放行了。


### 什麼時候不用標記？

你可能會發現為什麼前面幾章的範例程式碼不用這麼麻煩？其實 Rust 的 BC 如果猜的出明確的生命週期，就算沒特別標記也沒問題，生命週期標記只需要在 BC 看不懂的時候才需要手動補給它。但哪些時候要寫，又哪些時候不用寫？

#### 1\. 函數裡的參數是 `&` 參照，但回傳值不是參照：

```rust
fn calc_total_age(c1: &Cat, c2: &Cat) -> u8 {
    c1.age + c2.age
}

let total_age = calc_total_age(&kitty, &nancy);
println!("{}", total_age);

```

很明顯它的回傳值跟參照無關，所以變數 `total_age` 的生命週期很確定，這樣可以不寫沒關係，Rust 會幫你腦補，這種型態應該就是我們在前面幾個章節常看到的寫法。但如果你想要寫也行：

```rust
fn calc_total_age<'b>(c1: &'b Cat, c2: &'b Cat) -> u8 {
    c1.age + c2.age
}

```

但我個人認為生命週期標記不只不好寫，而且看起來還滿醜的，能夠不寫就盡量不寫。

#### 2\. 只有其中一個參數是 `&`參照，而且回傳值也是 `& `參照：

```rust
fn set_age(c: &mut Cat, new_age: u8) -> &Cat {
    c.age = new_age;
    c
}

let mut mary = Cat { name: "Mary".to_string(), age: 18 };
let new_mary = set_age(&mut mary, 20);
println!("{}", new_mary.age);  // 印出 20

```

在上面的範例中， `set_age()` 函數裡帶了一個 `&mut` 的參照以及一個 `u8` 整數，然後回傳的型別也剛好是帶進來的那個參數，這麼一來參數跟回傳值的生命週期一定是一樣的，所以就以上面這個例子 `new_mary` 的生命週期也很清楚，不會有不確定性，所以在這種情況下不寫也行。

順便提一下，如果 `&mut` 參照同時又要加標記的話，寫起來會變成這樣：

```rust
fn set_age<'c>(c: &'c mut Cat, new_age: u8) -> &'c Cat {
    // ... 略 ...
}

```

`&'c mut Cat` 先寫標記，接著才是 `mut`。

#### 3\. 只有唯一一個參照參數

像這樣，這個 `print_cat()` 函數只帶一個參照參數：

```rust
fn print_cat(c: &Cat) {
    println!("{}", c.name);
}

```

在只有一個參照參數的情況下，不管 `print_cat()` 的回傳值是參照或是非參照，或甚至沒有回傳值都無所謂，BC 都能看明確的知道生命週期，所以也可以不用特別加上標記。但如果你覺得加上標記比較酷：

```rust
fn print_cat<'awesome>(c: &'awesome Cat) {
    println!("{}", c.name);
}

```

要加上去也是可以的。

### 多個生命週期參數

假如同一個函數的參數有不同的生命週期，自然就不能用一個 `'a` 寫到底，可以在前面的泛型裡先多定義一個 `'b`，然後在後面使用：

```rust
fn boss_cat<'a, 'b>(c1: &'a Cat, c2: &'b Cat) -> &'a Cat {
    if c1.age > c2.age {
        c1
    } else {
        c2
    }
}

```

但這個執行會發生錯誤：

```rust
$ cargo run
error: lifetime may not live long enough
   |
30 | fn boss_cat<'a, 'b>(c1: &'a Cat, c2: &'b Cat) -> &'a Cat {
   |             --  -- lifetime `'b` defined here
   |             |
   |             lifetime `'a` defined here
...
34 |         c2
   |         ^^ function was supposed to return data with lifetime `'a` but it is returning data with lifetime `'b`

```

簡單的說就是 BC 還是不能確定到底回傳回來的生命週期是哪一個，所以這裡可以視情況這樣改寫：

```rust
fn boss_cat<'a, 'b: 'a>(c1: &'a Cat, c2: &'b Cat) -> &'a Cat {
    // ... 略 ...
}

```

這裡的 `'b: 'a` 的意思是 `'a` 的生命週期會大於等於（或包括） `'b` 的生命週期，所以不管是回傳 `'a` 或 `'b` 都不會發生前面提到的白髮人送黑髮人的情況，這樣 Rust 的編譯器就會給過了。只是在這樣寫之前，也許可以先想想，是否真的需要多個不同的標記？還是其實傳進來的參照他們都在同一個 Scope，如果是的話也不需要用多個不同的標記。

生命週期通常是學習 Rust 的新手，包括我自己，生命週期應該是在所有權（Ownership）之後會遇到第二個門檻，這在其它程式語言很少看到這樣的設計，所以過去的程式經驗在這裡可能不太能派上用場。

只要有用到參照或切片，就會需要多想想生命週期的問題（在 Rust 裡參照跟切片用很兇）。一開始應該會很不習慣，不只在語法上跟之前的程式編寫慣例上都是。也是聽過有些人會說如果遇到編譯不過就給它加上 `'a` 可能就會過了，或是乾脆不要傳參照，直接用 `.clone()` 傳個複製品給它，但如果能理解為什麼 Rust 的 BC 會這麼龜毛、了解生命週期的遊戲規則的話，應該就會知道標記什麼該寫、什麼時候不用寫。多了解細節，才能發揮 Rust 這個程式語言真正的威力。
