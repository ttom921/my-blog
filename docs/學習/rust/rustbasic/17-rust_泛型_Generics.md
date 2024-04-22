---
＃id: doc-markdown
title: 17-rust_泛型_Generics
description: _泛型_Generics
keywords:
  - rust
last_update:
  date: 4/22/2024
  author: ttom
---

假設我定義了一個長方型的 Struct：

```rust
struct Rectangle {
    width: u32,
    height: u32,
}

```

裡面有 `width` 跟 `height` 這兩個欄位，都是 `u32` 型別。Rust 對型別的要求是很嚴格的，說好的 `u32` 就是只能放整數，給它小數的話馬上 Rust 編譯器就會跳出來抱怨了。

```rust
let rect_a = Rectangle{ width: 100, height: 50 };      // 沒問題
let rect_b = Rectangle{ width: 38.5, height: 19.5 };   // 不行！
```
假設我希望這個 `Rectangle` 的欄位也可以使用小數的話，你可能想說可以改成寫成這樣：

```rust
struct RectangleU32 {
    width: u32,
    height: u32,
}

struct RectangleF32 {
    width: f32,
    height: f32,
}

```

這樣就沒問題了：

```rust
let rect_a = RectangleI32{ width: 100, height: 50 };
let rect_b = RectangleF32{ width: 38.5, height: 19.5 };
```

但如果這樣寫，後續如果想要寫一個可以計算面積的函數，這兩個不同的 Struct 要怎麼傳進去當參數？難道也要寫兩份？

不同的程式語言在面臨這樣的情境，都有類似的設計，有些程式語言稱之「模板（Template）」，有些則稱之「泛型（Generics）」，就字面上的解釋來說泛型並不是特定指某一種型別，而是用來「代表」某個型別。如果還是覺得有點抽象，我們來看看程式碼：

```rust
struct Rectangle<T> {
    width: T,
    height: T,
}
```
首先，在 Struct 名字的最後面的 `<T>` 就是 Rust 裡泛型的標記寫法，表示在這個 Struct 裡會有一種 `T` 型別。

蛤？什麼是 `T` 型別？這你不用管，反正它就是一種型別，或說它就是個佔位置的 placeholder 也行，它可以是整數、浮點數、布林值或其它型別都可以，沒有限定。以上面的範例來說，唯一確定的就是 `width` 跟 `height` 這兩個欄位是「相同的 `T` 型別」。正是因為它可以廣「泛」的代表某種「型」別，才稱之「泛型」。

如果你喜歡的話，你可以把這個 `T` 換成任意的大寫開頭的字，像這樣：

```rust
struct Rectangle<RRRRRR> {
    width: RRRRRR,
    height: RRRRRR,
}

```

Rust 編譯器不會抱怨，但通常會看到大家使用 `T` 是因為它比較短而且可以用來代表「型別（Type）」，甚至在其它有支援泛型的程式語言也都會用 `T`。把原本固定寫死的型別抽換成 `T` 型別之後，使用起來就更有彈性了：

```rust
let rect_a = Rectangle{ width: 100, height: 50 };
let rect_b = Rectangle{ width: 38.5, height: 19.5 };
```

現在 `Rectangle` 的欄位可以用整數，也可以用小數了。這樣的泛型寫法可以讓原本 Struct 更有彈性了，不需要一樣的東西寫很多次。

有趣的是，雖然這裡並沒有指定特定型別，但當 Rust 在編譯過程中發現你要 `u32` 型別，那它就在背後幫你做一個 `u32` 的 Struct 出來，你帶 `f32` 給它，它就幫你做一個欄位是 `f32` 的 Struct 給你，這個行為有個專有名詞叫「單型化 (Monomorphization)」：

```rust
struct Rectangle_i32 {
    width: i32,
    height: i32,
}

struct Rectangle_f32 {
    width: f32,
    height: f32,
}

```

實際產生的名字應該更複雜，但這些都是在編譯時期 Rust 編譯器幫你做掉的，所以雖然在編譯的階段會多花一點點的時間，但執行的時候不會有額外的成本，效能不會因為這樣而有所折扣，也就是 Rust 官方手冊裡所提到「零成本抽象（Zero-Cost Abstractions）」的概念，你不用手動寫出這些資料結構的實際型別。


### 多個不同型別

承上，如果 `width` 跟 `height` 這兩個欄位我想要給它們不同的型別呢？沒問題，你可以這樣寫：

```rust
struct Rectangle<T, U> {
    width: T,
    height: U,
}

```

那個 `U` 就是表示另一種型別。同樣的，你想用什麼名字都行，不過慣例上會使用 `U`，因為它正好是英文字母 `T` 的下一個字，如果還有更多型別參數，可以繼續往下使用 `V`、`W` 之類的字母。（就跟為什麼迴圈裡常會用 `i` 變數，然後迴圈裡的迴圈會用 `j` 變數一樣的道理）


泛型不是只能用在 Struct 上，Enum 跟 Trait 也都能用。現在各位再回想之前提到的 `Option` 跟 `Result`：

```rust
pub enum Option<T> {
    None,
    Some(T),
}

pub enum Result<T, E> {
    Ok(T),
    Err(E),
}

```

它們本身也是用了泛型的寫法，另外我們在介紹生命週期的時候也出現過 `boss_cat<'a>` 這樣的寫法，其中的 `<>` 也是泛型。現在是不是比較能看的懂了呢？

### 參數也能泛型

不只如此，泛型還能用在函數上。我從前面的章節借個範例來用：

```rust
fn add_number(a: i32, b: i32) -> i32 {
    a + b
}

```

因為這裡的 `i32` 都一樣，如果改用泛型的寫法可以變成這樣：

```rust
fn add_number<T>(a: T, b: T) -> T {
    a + b
}

```

這麼一來這個 `add_number()` 函數可以處理整數也能處理浮點數，好像不錯。但編譯的時候會出現錯誤訊息：

```r
$ cargo run          
error[E0369]: cannot add `T` to `T`
23 |     a + b
   |     - ^ - T
   |     |
   |     T
```

Rust 告訴我們它沒辦法把 `T` 跟 `T` 加在一起。咦？我本來以為 Rust 編譯器這麼聰明，應該能夠猜的出來 `T` 是什麼型別，看來我們得跟它講的更清楚一點。但其實再仔細想想也合理，想想看，因為這個 `T` 可以是任意型別，如果我寫成 `add_number(true, false)` 硬是給它 2 個 `bool` 型別的值給它，你是要它們兩個怎麼相加？

所以我們要告訴 Rust，這個 `T` 型別不能是隨便阿貓阿狗型別都可以，得給它一些「限制（Constraints）」，在 Rust 裡我們可以給這個 `T` 型別某些特徵（Trait）。以上面的這個加法的範例來說，在 Rust 的標準函式庫裡有一個 `Add` 特徵可以借來用：

```rust
fn add_number<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {
    a + b
}
```

知道這個語法寫起來有點複雜了，`std::ops::Add` 是指在 `std` 模組裡的 `ops` 模組裡有個 `Add` 特徵，把它掛在 `T` 後面表示這個 `T` 型別現在就有 `Add` 的特徵了，而且 Rust 內建就已經幫 `Add` 特徵實作了可以相加的功能。

如果覺得 `std::ops::Add` 寫起來有點囉嗦，可透過 `use` 關鍵字稍微來簡化它：

```rust
use std::ops::Add;

fn add_number<T: Add<Output = T>>(a: T, b: T) -> T {
    a + b
}
```
讓我們來追一點點 Rust 的原始碼，驗證一下我們剛剛介紹的這段內容。追進原始碼就會發現，`Add` 就真的只是一個 Trait：

```rust
pub trait Add<Rhs = Self> {
    type Output;
    fn add(self, rhs: Rhs) -> Self::Output;
}

```

裡面需要實作 `add` 這個方法，這裡也可以看到這個 Trait 本身也有用到泛型，剛剛寫到的 `Output` 也可以在這裡看到它。再往下看一點會看到 Rust 幫我們寫好的巨集（Macro）：

```rust
macro_rules! add_impl {
    ($($t:ty)*) => ($(
        impl Add for $t {
            type Output = $t;
            fn add(self, other: $t) -> $t { self + other }
        }

        forward_ref_binop! { impl Add, add for $t, $t }
    )*)
}

add_impl! { usize u8 u16 u32 u64 u128 isize i8 i16 i32 i64 i128 f32 f64 }
```
這裡不需要每個語法都看懂，但大概能猜的出來 `add_impl!` 這個巨集會幫所有的整數型別以及浮點數型別都實作 `Add` 這個特徵所需的功能。另外，從原始碼應該也看的出來在這個 `add()` 方法的參數是 `self` 並不是 `&self` 參照，所以執行了加法之後就會轉移所有權。

回到原本的程式，因為現在我們的 `add_number()` 函數已經加上限制了，所以這樣執行：

```rust
println!("{}", add_number(1, 2));
println!("{}", add_number(3.1, 9.8));

```

就都能正常運作了。如果這時候故意帶個 `bool` 型別給它呢？

```csharp
$ cargo run
error[E0277]: cannot add `bool` to `bool`
   |
7  |     println!("{}", add_number(true, true));
   |                    ^^^^^^^^^^ no implementation for `bool + bool`
```


因為 `bool` 型別並沒有實作 `Add` 特徵（只有數字們有），所以無法通過編譯。我們再試著讓它複雜一點，如果在函數裡不只做加法，還要做減法呢？寫起來可能就會變這樣：

```rust
fn calc<T: std::ops::Add<Output = T> + std::ops::Sub<Output = T>>(a: T, b: T, c: T) -> T {
    a + b - c
}
```

這回總共有 3 個參數，它們都是 `T` 型別，但為了要可以 `+` 也可以 `-`，所以同時需要 `Add` 跟 `Sub` 這兩個特徵。這樣寫起來讓這個 `T` 看起來有夠囉嗦，利用 `use` 關鍵字可以讓整個看起來短一點點：

```rust
use std::ops::{Add, Sub};

fn calc<T: Add<Output = T> + Sub<Output = T>>(a: T, b: T, c: T) -> T {
    a + b - c
}

```

但這個 `calc()` 函數看起來還是太囉嗦了，Rust 有提供另一種寫法，可以使用 `where` 關鍵字，把這些囉嗦的限制移到方法定義的後半段：

```rust
fn calc<T>(a: T, b: T, c: T) -> T
where T: Add<Output = T> + Sub<Output = T>
{
    a + b - c
}

```

以結果來說，雖然需要寫的程式碼並沒有比較少，但至少讓 `calc` 的函數簽名看起來清楚一些。

靜態分發 vs 動態分發
------------

在「特徵（Trait）」章節曾經介紹過「多型」的概念，在 Rust 可以透過 Trait Object 來做到多型的效果，當時的範例程式碼大概是這樣寫的：

```rust
fn bungee(someone: &dyn Flyable) {
    someone.fly();
}
```

我不在乎傳進來的 `someone` 是什麼型別，只要你有實作 `Flyable` 的特徵就好。現在大家看完泛型的介紹，會不會覺得這種 Trait Object 的寫法好像跟泛型有一點點像？另外，前面的 `&dyn` 又是什麼意思？

其實使用泛型也能做到多型的效果，我可以把原本的程式碼用泛型的方式改寫：

```rust
fn bungee<T: Flyable>(someone: &T) {
    someone.fly()
}

```

傳進來的 `someone` 參數雖然可以是任意的 `T` 型別，Rust 也不在乎它是什麼型別，但它必須有 `Flyable` 的特徵，這樣執行才不會出錯。

不管是藉由 Trait Object 或是泛型，都能實現多型的效果。不過 Trait Object 一次只能有一種 Trait，而泛型可以透過加號 `+` 串連多個 Trait，像是前面介紹的 `Add<Output = T> + Sub<Output = T>`。

另外一個比較大的差別，是泛型是使用「靜態分發（Static Dispatch）」的方式來實現多型，而 Trait Object 則是使用「動態分發（Dynamic Dispatch）」，前面看到的 `&dyn` 就是動態的意思。

靜態分發是指在編譯階段就會確定函數呼叫的方式以及參數、回傳值的型別，前面提到 Rust 在處理泛型的時候，會在編譯階段會建立該建立的資料結構，所以實際執行的時候效能不會因此而有折扣。靜態分發的好處是執行時期效率好，但因為 Rust 在編譯過程都幫你生成相對應的資料及函數，缺點就是整體的程式碼會變的比較肥一點（Code Bloat）。

相對的動態分發是在運行時才決定這些事，跟靜態分發相比，動態分發的靈活性較大，也不會像靜態分發這樣產生所有用到的資料，但也因此需要在執行的時候查找及選擇具體實作的方式，靈活的代價就是需要額外付出一些效能。





