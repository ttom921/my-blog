---
＃id: doc-markdown
title: 10-rust_所有權_Ownership
description: 所有權_Ownership
keywords:
  - rust
last_update:
  date: 4/09/2024
  author: ttom
---

在使用 C 語言撰寫程式的時候，記憶體管理是一件很重要但也有點麻煩的事。需要資源的時候，你可能得呼叫 malloc 函數跟系統要一塊記憶體來用，用完的話要呼叫 free 函數把記憶體放掉。手動管理記憶體的方式如果寫不好可能會造成一些麻煩：

- 沒有把用完的記憶體還回去，程式執行久了可能會把記憶體吃光光，這就是所謂的 Memory Leak。
- 要放掉記憶體的時候是跟系統說「這塊記憶體我不用了，還你！」，然後其它程式就可以使用這塊空間。但如果不小心重複釋放，這種 Double Free 的操作可能會去放掉其它正在使用這塊記憶體的物件，又或是直接讓程式當掉。
- 放掉記憶體但又去取用它，可能會造成系統錯誤，或是因為放掉的記憶體空間已經被其它程式給拿去放別的值，雖然也許還是能拿到資料，但拿到的卻不是你想像的結果。

手動管理記憶體有些麻煩而且容易出錯，所以有些程式語言有提供相對比較「自動」的方式來管理記憶體，例如像 Java 的 GC（Garbage Collection）會負責識別、回收不再使用的物件，確保記憶體可以有效被利用。不過 GC 也有它的問題，比較明顯的問題就是當在發動 GC 的時候，系統會有明顯的卡頓感，對某些即時通訊服務或是線上遊戲，這種時不時來一下的 lag 說不定就害你被其它玩家 KO 了。



因為系統的資源都是有限的，所以，適當的跟系統索取資源、釋放資源就是一門學問了。根據微軟在某次的[資安研討會](https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/#google_vignette)上的發表，許多應用程式的問題，大概有七成左右都跟記憶體的管理有關，所以如果能搞定記憶體安全性（Memory Safety），等於就能讓應用程式的品質更好了。



在 Rust 沒有 Garbage Collector 的設計，那麼在 Rust 怎麼做記憶體管理？我們來看一段計算得分的程式碼：
```rust
fn calc_score() -> i32 {
    let scores = vec![1450, 9527, 5566]; 
    let mut total = 0;

    for score in scores.iter() {
        total += score;
    }

    return total;
}
```
大概就是跑個 `for` 迴圈做個簡單的計算。各位可能覺得寫起來很輕鬆，不用去要記憶體也不用放掉記憶體，但事實上在使用 `vec!` 巨集建立 Vector 的時候就是去要記憶體了，只是你不用自己寫而已。同樣的，當 `calc_score()` 函數即將結束並且離開這個 Scope 之前，Rust 也會幫你做釋放掉這個 Vector 所佔用的記憶體，所以你也不用自己做。


先看這段程式碼：

```rust
fn main() {
    let scores = get_scores();
    println!("{:?}", scores);
}

fn get_scores() -> Vec<i32> {
    let scores = vec![1450, 9527, 5566];
    return scores;  // 自動釋放佔用的記憶體
}

```

這段範例沒什麼邏輯，`get_scores()` 就只是回傳一個 Vector 而已。But...，就是這個 But，剛剛不是才學到 Rust 會在離開函數 Scope 的時候自動幫你放掉記憶體嗎？這樣一來變數 `scores` 拿到的 Vector 是什麼？它如果被標記成已釋放，那麼待會這個 Vector 原本佔記憶體位置會不會被其它資料給拿去用？

所有權（Ownership）
--------------

事實上 Rust 並不是那麼單純的自動釋放記憶體。Rust 設計了「所有權」的概念。再看看剛才那段程式碼：

```rust
fn main() {
    let scores = get_scores();
    println!("{:?}", scores);
}

fn get_scores() -> Vec<i32> {
    let scores = vec![1450, 9527, 5566];  // 設定所有權
    return scores;
}

```

當我們在 `get_scores()` 函數裡要了一塊記憶體位置來放剛剛建立了的 Vector，Rust 會把這個 `scores` 變數的所有權設定在這個 Scope 裡。當在 `main` 函數裡呼叫 `get_scores()` 的時候，`scores` 變數的所有權就會轉移到 `main` 的 Scope 裡，這個行為叫做「移動（Move）」。

原本 `get_scores()` 函數要結束的時候應該要自動放掉佔用的記憶體，但當 Rust 發現 `scores` 變數的所有權轉移給別人了，就先不會去釋放記憶體了。既然 `scores` 的所有權移到了 `main()`，那就表示 `scores` 現在是 `main()` 的責任，在 `main()` 函數執行結束的時候就會被自動釋放掉了。


接著我們讓程式碼再複雜一點點，這回把計算總分的函數 `calc_score()` 也加進來了：

```rust
fn main() {
    let scores = get_scores();
    let total_score = calc_score(scores);

    println!("{:?}", total_score);
}

fn get_scores() -> Vec<i32> {
    let scores = vec![1450, 9527, 5566];
    return scores;
}

fn calc_score(scores: Vec<i32>) -> i32 {
    let mut total = 0;

    for score in scores.iter() {
        total += score;
    }

    return total;
}

```

我把上面的範例簡化一點：

```rust
let total_score = calc_score(scores);

// ... 略 ...

fn calc_score(scores: Vec<i32>) -> i32 { ... }

```

這裡需要注意的是，當呼叫 `calc_score()` 函數並且把 `scores` 這個 Vector 傳進去的時候，也會發生所有權轉移，也就是說這時候這個 Vector 的所有權 Move 到了 `calc_score()` 函數裡了。到目前看起來沒什麼問題，執行之後沒有發生錯誤，Good！

但接著如果我想試著印出 `scores` 變數的話：

```rust
fn main() {
    let scores = get_scores();
    let total_score = calc_score(scores);

    println!("{:?}", total_score);
    println!("{:?}", scores);  // 印出 scores
}

```

這時候就會出錯了：

```shell
$ cargo run
error[E0382]: borrow of moved value: `scores`
  --> src/main.rs:7:22
   |
3  |     let scores = get_scores();
   |         ------ move occurs because `scores` has type `Vec<i32>`, which does not implement the `Copy` trait
4  |     let total_score = calc_score(scores);
   |                                  ------ value moved here
...
7  |     println!("{:?}", scores);
   |                      ^^^^^^ value borrowed here after move

```

這種錯誤訊息我猜你在其它程式語言應該沒看過，但這時候我想你應該稍微比較看的懂錯誤訊息想要表達的內容了，不過可能還是不知道為什麼。

原因是因為當我們把 `scores` 這個 Vector 傳進 `calc_score()` 函數裡的時候，所有權轉移給它了，因為當 `calc_score()` 在執行結束的時候雖然把計算的總分傳回來，但也順手把那個 Vector 給放掉了。所以後續想要印出 `scores` 的時候就會出現錯誤訊息，因為它已經借給別人（Borrowed），而且對方沒有把所有權還回來。

當然你也可以在 `calc_score()` 函數裡一併把總分跟傳進去的 Vector 透過 Tuple 或其它資料結構一併打包傳回來，但每次都要這樣寫也太麻煩了。Rust 有個叫做 `.clone()` 的函數，看名字就大概知道用途了：

```rust
let total_score = calc_score(scores.clone());

```

這樣寫的話，你就不是把 `scores` 傳給 `calc_score()` 函數，而只是傳給它複製品，所以所有權的轉移也是那個複製品的事情，原本的 `scores` 的所有權並沒有變化，這樣程式就不會出錯了。問題是解決了沒錯，但 `.clone()` 也不是不用錢，光想就知道複製這件事就是會浪費額外的資源。

Rust 有提供更簡單的機制來解決這個情況，就是用「借（Borrow）」的

### 想要嗎？我不買給你，但我借給你

先看程式碼的變化：

```rust
fn main() {
    let scores = get_scores();
    let total_score = calc_score(&scores); 

    println!("{:?}", total_score);
    println!("{:?}", scores);
}

fn get_scores() -> Vec<i32> { ... } 

fn calc_score(scores: &Vec<i32>) -> i32 {
    // ... 一樣的程式碼
}

```

其實跟原本的程式碼幾乎一模一樣，我只多加了 2 個 `&` 符號：

```rust
let total_score = calc_score(&scores);

// ... 略 ...

fn calc_score(scores: &Vec<i32>) -> i32 { ... }

```

`calc_score(&scores)` 的大概意思就是跟 `calc_score()` 說：「嘿，我先把 `scores` 借給你用，但你要記得，我不是給你喔，我是借你！」。而 `fn calc_score(scores: &Vec<i32>)` 的意思是指它要接的參數不是普通的 Vector，而是一個別人借給它的 Vector。

因為只是暫時借出去，所以所有權並沒有轉移，程式執行就不會出錯了。這概念有點像你去圖書館借書，這本書雖然不是你的，但你可以帶回家看。照理說你從圖書館借回家的書你應該要好好保管它，在閱讀的時候也不要也不應該在上面畫線或作筆記。

先撇開應不應該的公德心問題，你可不可以在借來的書上劃線做筆記？

### 借來的書能不能在上面劃線？

我們可以試著對借來的東西加點料：

```rust
fn main() {
    let mut scores = vec![1450, 9527, 5566];
    let total_score = calc_score(&scores);
}

fn calc_score(scores: &Vec<i32>) -> i32 {
    scores.push(123);  // 加料！
    let mut total = 0;

    for score in scores.iter() {
        total += score;
    }

    return total;
}

```

這裡我先把 `scores` 變數宣告成 `mut`，讓它可以被修改，接著透過 `&` 借給 `calc_score()` 函數之後，故意在裡面加一點料，執行之後會發生錯訊息：

```shell
$ cargo run
error[E0596]: cannot borrow `*scores` as mutable, as it is behind a `&` reference
  --> src/main.rs:16:5
   |
16 |     scores.push(123);
   |     ^^^^^^^^^^^^^^^^ `scores` is a `&` reference, so the data it refers to cannot be borrowed as mutable

```

雖然 `scores` 本身說可以 `mut`，但借進來的時候並沒有說這個可以改，所以還是不能動它。如果希望借進來的東西是可以修改的，需要做以下調整：

```rust
fn main() {
    let mut scores = vec![1450, 9527, 5566];
    let total_score = calc_score(&mut scores);
}

fn calc_score(scores: &mut Vec<i32>) -> i32 {
    scores.push(123);  // 加料
    // ... 略 ...
    return total;
}

```

`calc_score(&mut scores)` 在出借的時候需要明確的講「我這本書可以借你，如果你要的話可以在上面劃線、做筆記，但這本書還是我的喔」；`fn calc_score(scores: &mut Vec<i32>)` 則是明確的講借進來的這個 Vector 是可以修改的。在 Rust，很多東西都得講清楚、說明白才行。

### 一次可以借給多少人？

來看看這段程式碼：

```rust
fn main() {
    let mut book = String::from("為你自己學 Rust");

    let b1 = &book;
    let b2 = &book;
    let b3 = &book;

    println!("{:?}, {:?}, {:?}", b1, b2, b3);
}

```

在上面的範例中，雖然這本書我是宣告成 `mut`，但因為我在借出去的時候都只用 `&` 也就是說「這個書我可以借你們看，但你們不能在上面劃線！」。Rust 知道借給這些人都保證不會修改，所以想要借幾個就借幾個，並沒有什麼限制。但如果你讓其中某個人說「沒關係，如果是你的話可以喔」，像這樣：

```rust
fn main() {
    let mut book = String::from("為你自己學 Rust");

    let b1 = &book;
    let b2 = &mut book;  // 用 mut 的方式出借
    let b3 = &book;

    println!("{:?}, {:?}, {:?}", b1, b2, b3);
}

```

程式執行就會出錯了：

```shell
$ cargo run
error[E0502]: cannot borrow `book` as immutable because it is also borrowed as mutable
 --> src/main.rs:7:14
  |
6 |     let b2 = &mut book;
  |              --------- mutable borrow occurs here
7 |     let b3 = &book;
  |              ^^^^^ immutable borrow occurs here

```

想想看，雖然你只給一個人可以用 mutable 的方式出借，誰知道會不會對借出去的東西做什麼事，這樣其它人拿到的書會變成什麼樣子？

或是你想說不管了，乾脆讓你們每個人都可劃線好了，這樣總行了吧：

```rust
fn main() {
    let mut book = String::from("為你自己學 Rust");

    let b1 = &mut book;
    let b2 = &mut book;
    let b3 = &mut book;

    println!("{:?}, {:?}, {:?}", b1, b2, b3);
}

```

Rust 會告訴你這樣也不行：

```shell
$ cargo run
error[E0499]: cannot borrow `book` as mutable more than once at a time
 --> src/main.rs:6:14
  |
5 |     let b1 = &mut book;
  |              --------- first mutable borrow occurs here
6 |     let b2 = &mut book;
  |              ^^^^^^^^^ second mutable borrow occurs here

```

簡單的說，如果是 immutable borrow 的話，想要同時借給多少人都無所謂，但如果是 mutable borrow 的話，一次只能借給一個人，而且同時不能有其它人借，不管他們會不會在書上劃線都一樣。

Rust 的編譯器很聰明但也很龜毛，雖然囉嗦，但它給出來的錯誤訊息看起來是真的挺清楚的。

Rust 的「所有權」設計，讓你不用自己手動配置、釋放記憶體的同時，又可確保不會誤觸像 C 語言的 `malloc` 跟 `free` 的操作地雷，所以 Rust 說它是自己個「**安全**」的程式語言，指的就是「Memory Safety」的安全。

但說到底，為什麼 Rust 要管這麼多？原因就是 Rust 的 Concurrency 的設計可以同時執行多個執行緒（Thread），現代的電腦設備基本上都是多核心的設計，越多核心等於可以同時執行越多的執行緒，所以這是 Rust 效能可以很好的原因之一。如果資料借出去的時候不能保證一次只有一個，這個 Concurrency 可能就會有狀況。因此，在 Rust 的官網手冊上還有特別提到特色之一是**無懼並行（fearless concurrency）**，再回頭想想上面的設計，難怪不會怕了。




