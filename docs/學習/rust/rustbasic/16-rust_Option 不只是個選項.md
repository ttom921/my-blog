---
＃id: doc-markdown
title: 16-rust_Option 不只是個選項
description: _Option 不只是個選項
keywords:
  - rust
last_update:
  date: 4/18/2024
  author: ttom
---

在寫程式的時候，有沒有遇過執行某些函數照理應該要回傳陣列，然後你會在這個陣列上呼叫 `.map` 或 `.forEach` 方法做點事情，但結果你拿到的不是陣列，而是一個 `undefined`，然後程式就出錯了...

我用 JavaScript 舉個例子：

```javascript
function getFriends() {
  // 回傳朋友清單
}

const friends = getFriends()  // 執行之後才發現自己沒朋友
friends.map(() => { ... })    // 出錯

```

遇到這種情況你會怎麼解決？通常是檢查 `friends` 是不是有東西，如果有的話才往下做：

```javascript
if (friends) {
  friends.map(() => { ... })
}

```

或是也可用短一點的 [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 的寫法：

```javascript
friends?.map(() => { ... })

```

這在 JavaScript 應該是很常見的做法，但大家看到現在，有沒有發現 Rust 並沒有 `undefined` 或 `Null` 或 `nil` 的空值的型別？並不是 Rust 不需要空值的設計，而是用了其它的方式來處理、判斷，第一個要介紹的就是 `Option`。

Option
------

`Option` 翻譯成中文是「選項」，它是 Rust 內建的值，但如果大家去翻一下 `Option` 的原始碼，就會發現 `Option` 其實就只是一個我們在上個章節介紹的 Enum 而已（透過 VSCode 可以很容易就翻到 Rust 的原始碼），在這個 Enum 裡有 `None` 跟 `Some` 這兩個變體（Variant），其中 `Some` 這個變體還能帶參數：

```rust
pub enum Option<T> {
    None,
    Some(T),
}

```

上面這個寫法現在看起來應該不陌生了。其中變體 `None` 用來表示值不存在，變體 `Some(T)` 則是表示這個值是存在的，而且這個存在的值型別就是 `T`。那個 `T` 請暫時先忽略它，我們會在介紹「泛型」的時候會再詳述。

所以就 Enum 本身來說，`Option` 並沒什麼特別的。前面提到 Rust 並沒有 `Null` 或 `undefined` 的設計，取而代之的是 `None`，也就是 `Option` 這個 Enum 裡的 `None`。

### 你有朋友嗎？

假設我寫了一個可以回傳朋友名單的 `get_friends()` 函數：

```rust
fn get_friends() {
    // ...
}

```

大家先不管我這朋友的名單怎麼來的，`get_friends()` 這個函數所回傳結果可能是一個 Vector，所以我可以把這個函數的回傳型別設定成 `Vec<u8>`，就算沒有朋友也給我個空的 Vector 就好。但假設因為某些不確定的原因，它回傳的結果連 Vector 都不是的話怎麼辦？如果你知道這個函數有可能回傳空的值，你現在也知道 Rust 編譯器很龜毛，什麼事都要說清楚講明白，那麼你覺得 `get_friends()` 這個函數的回傳值型別該怎麼寫？這時候就可以拿 `Option` 這個 Enum 出來用：

```rust
fn get_friends() -> Option<Vec<u8>> {
    // 可能回傳 Vec<u8>，也可能沒有回傳值
}

```

`Option<Vec<u8>>` 看起來有點複雜，它的意思告訴 Rust 編譯器說這個函數可能會有回傳值，也有可能不會有，但如果有的話，它會是一個 `Vec<u8>` 型別的值。雖然 Rust 不喜歡不確定性，但至少你把這種不確定性直白的跟它說，減少一點它的不安，Rust 的編譯器還是可以接受的。

這樣函數裡面該怎麼寫？我稍微改了一下原本的函數簽名，這樣看起來比較容易說明：

```rust
fn get_friends(has_money: bool) -> Option<Vec<u8>> {
    if !has_money {
        return None;
    }

    let friends: Vec<u8> = vec![1, 2, 3, 4, 5];
    Some(friends)
}

```

我多傳了一個 `has_money` 參數來做判斷，如果沒有錢錢就沒有朋友（好現實），所以就回傳個 `Option` 裡面的 `None` 變體回來，反正如果有錢有朋友的話就會回傳另一個變體 `Some(T)` 回來，並且把朋友名單包在變體裡。

上面這個情境還是比較可以控制的，至少它跟傳入的參數有關，但說不定有更不可控或是跟系統或環境變數設定有關，你不一定能保證最後得到什麼結果。看到這裡你也許會想「如果沒東西，那就回傳一個空陣列就好啦，為什麼還要刻意回傳一個 `None` 回來？」

是的，你的想法是正確的，沒結果的時候回傳空陣列是一種做法，你在 Rust 也可以這樣做沒問題：

```rust
fn get_friends(has_money: bool) -> Vec<u8> {
    if !has_money {
        return vec![];
    }

    let friends: Vec<u8> = vec![1, 2, 3, 4, 5];
    return friends;
}

```

沒錢錢就回傳一個空的 Vector 回來就好，然後在判斷的時候只要判斷 Vector 裡有沒有元素就知道有沒有朋友了：

```rust
let friends = get_friends(false);

if friends.len() == 0 {
    println!("我是邊緣人我驕傲！")
} else {
    println!("我有好多朋友 {:?}", friends)
}
```
一般程式很常看到這樣的寫法。但如果利用回傳 `Option` 型別再搭配在上個章節介紹過的 `match`，可以讓流程變的更清楚一點：

```rust
let friends = get_friends(false);

match friends {
    None => println!("我是邊緣人我驕傲！"),
    Some(list) => println!("我有好多朋友 {:?}", list)
}

```

透過 Pattern Matching，如果比對到 `Some(T)` 變體，剛才回傳的時候包在 `Some(T)` 變體的東西，就可以在現在拿出來用了。

這樣是不是流程看起來更清楚了？這樣的寫法在 Rust 裡還滿見的。

### 打開包裝盒

`Option` 除了搭配 `match` 之外，也能直接拿來用：

```rust
let friends = get_friends(true);
println!("{:?}", friends);

```

直接印的話，你並不會印出真正的朋友名單，而是印出 `Some([1, 2, 3, 4, 5])` 這個變體。你想要的資料被 `Some(T)` 變體包著，如果想要取得這個變體裡的內容的話，可以使用 `.unwrap()` 方法把它「打開」：

```rust
println!("{:?}", friends.unwrap());

```

透過 `.unwrap()` 方法就可以把變體 `Some(T)` 裡的東西拿出來，但萬一你拿到的是 `None` 變體的話，對它做 `.unwrap()` 會得到錯誤訊息，所以要小心使用，確定 `Option` 有值再用它，或是就乾脆用 `match` 就好。

如果大家有興趣想知道 `.unwrap()` 實際上是怎麼運作的，翻一下原始碼就會發現它是這樣定義的：

```rust
pub const fn unwrap(self) -> T {
    match self {
        Some(val) => val,
        None => panic("called `Option::unwrap()` on a `None` value"),
    }
}

```

雖然現在不一定每個語法都看的懂，但應該看的出來 `.unwrap()` 這個方法裡面也是跑了一個 `match`，如果遇到 `None` 的時候就丟一個 Panic 出來。另外，`.unwrap()` 方法帶進去參數並不是參照（有注意到它是 `self` 而不是 `&self` 了嗎？），這代表執行 `.unwrap()` 解開之後如果不是 Panic 爆炸，就是轉移所有權了。

到這裡，大家有沒有開始覺得好像越來越看懂的 Rust 的語法了呢？

### 其它好用的方法

除了丟給 `match` 做比對之外，`Option` 本身還有提供一些比較簡單的方法，例如判斷是 `None` 還是 `Some(T)`：

```rust
println!("{}", friends.is_some());
println!("{}", friends.is_none());

```

這兩個方法都會回傳 `bool` 型別，光看方法的名字就能猜到它想做什麼事。另外，剛才介紹的 `.unwrap()` 方法在遇到 `None` 的時候會出錯，但還有幾個一樣可以解開但比較保險一點的做法：

```rust
println!("{:?}", friends.unwrap_or(vec![]));

```

用 `.unwrap_or()` 方法來解包的時候，如果是 `Some(T)` 就會得到解開的東西，`None` 則是得到後面給的那個預設值。還有個 `.unwrap_or_else()` 跟它有點像，但後面則是帶個函數，讓你可以再做其它的計算。要注意的是不管是 `.unwrap_or()` 還是 `.unwrap_or_else()`，它們的實作都是把 `self` 帶進去的，也就是說不管有沒解開，所有權都會進行移轉。

Result
------

`Option` 可以用來表示某個值是否存在，可根據它是 `Some(T)` 還是 `None` 來決定怎麼處理，不過如果遇到某個函數執行不知道不是會成功或需要明確處理錯誤的情況，`Option` 可能就沒那麼好用，我們來看個例子。


### 你戶頭裡還有錢嗎？

抱歉我都用這些有點銅臭味的例子。假設我要寫一個領錢的函數 `withdraw()`，裡面會帶一個想要領多少錢的參數 `amount`，型別用 `u32` 的上限有到 42 億應該是夠，怕的話可以再開高一點：

```rust
fn withdraw(amount: u32) -> u32 {
    // 判斷帳戶餘額
}

```

這看起來沒問題，但領不領的出來還是得看戶頭裡的餘額夠不夠，領的出來就算了，萬一領不出來你打算怎麼處理？如果有可能會領不出來，你打算怎麼跟 Rust 編譯器交待這個函數的回傳值？剛剛學到的 `Option` 好像也能用在這，但有個更適合這個情境的，就是 `Result`。

`Result` 是另一個跟 `Option` 有點像的東西，如果去翻原始碼就會發現它本身也是個 Enum：

```rust
pub enum Result<T, E> {
    Ok(T),
    Err(E),
}

```

裡面有 `Ok(T)` 跟 `Err(E)` 這兩個變體，從字面上就大概能猜到用途了。不同的是它比 `Option` 多帶了一個型別，`Ok(T)` 變體的參數是 `T`，而 `Err(E)` 則是 `E`，這裡的 `T` 跟 `E` 請暫時不用管它們是什麼型別，先把它們看成不同的型別就好，我們在下個章節「泛型」再來跟大家介紹。

接著我們可把 `Result` 當做回傳型別：

```rust
fn withdraw(amount: u32) -> Result<u32, String> {
    // 判斷帳戶餘額
}
```

也就是跟 Rust 編譯器說「我不知道這個函數會不會成功，但是你放心，它一定會有個結果的」。接著來把裡面的流程補上，只要想要提領的金額超過餘額就回傳 `Err(E)` 變體而且包個字串訊息給它，不然就回傳 `Ok(T)` 變體並把提領的金額包在裡面：

```rust
const BANK_BALANCE: u32 = 1000;

fn withdraw(amount: u32) -> Result<u32, String> {
    if amount > BANK_BALANCE {
       return Err(String::from("餘額不足"));
    }

    Ok(amount)
}

```

接著同樣再搭配 `match`，寫起來會變這樣：

```rust
match withdraw(100) {
    Ok(amount) => println!("提領金額 {} 元", amount),
    Err(message) => println!("提領失敗：{}", message)
}

```

大家看到這裡，不知道有沒有發現 `withdraw()` 這個函數現在只要回報它的提領情況就好，而提領之後成功或失敗的流程則是另外交給 `match` 接手處理，這樣可以讓 `withdraw()` 函數更專心做它該做的事，測試也會好寫很多。

雖然 `Option` 跟 `Result` 這兩種 Enum 有時候可以交替使用，但基本上 `Option` 主要用來表示某個值是否存在，而 `Result` 因為還另外提供一個可以處理失敗或錯誤流程的 `Err(E)` 變體，可以讓我們更明確的回傳失敗的原因。

每種程式語言都有它們的喜好或慣例，拿著其它程式語言的慣例來撰寫 Rust 就像拿著明朝的劍來斬清朝的官，程式會動是會動，但一看就知道你不是在地的外鄉人。適當的使用 `Option` 或 `Result` 之類的 Enum 搭配 `match` 做 Pattern Matching，除了程式流程更清楚、更容易維護之外，也可以讓程式碼風味看起來更 Rusty 一點 :)



