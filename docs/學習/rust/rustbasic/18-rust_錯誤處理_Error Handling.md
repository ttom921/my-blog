---
＃id: doc-markdown
title: 18-rust_錯誤處理_Error Handling
description: 錯誤處理_Error Handling
keywords:
  - rust
last_update:
  date: 4/23/2024
  author: ttom
---
程式會出錯是很正常的一件事，程式出錯不一定就是 Bug，而只是沒有考慮到某些可能會發生的情況，例如你寫了一個可以計算 BMI（Body Mass Index，身體質量指數）的計算程式，BMI 的計算公式是體重（公斤）除以身高（公尺）平方：

> BMI = weight(kg) / height2(m)

當你以為人類都是良善的，結果有使用者給你輸入體重 `'a'` 字元；當你試著檢查輸入值是不是確定都是數字，結果使用者給你輸入負的體重，或是身高輸入 0 結果造成除以零的錯誤。

我相信人類都是良善的，但就是有人比較調皮，會想試試看輸入不一樣的值會發生什麼事（例如我就會這樣做），所以身為程式開發人員，就得去多考慮可能發生的狀況，正所謂想當好人，就要比壞人更壞。

扯遠了，大部份的程式語言都有錯誤處理的手法，例如 JavaScript 可以藉由 `try...catch...` 語法捕捉程式裡拋出來的錯誤，Python 是 `try...except...`，而 Ruby 則是 `begin...rescue...`。不過在 Rust 並沒有類似 `try...catch...` 的機制，但可以利用我們在前面「Option 不只是個選項」章節裡曾介紹過 `Result` 搭配 `match` 關鍵字處理 `Err(E)` 變體，就能做到類似的錯誤處理。以上面提到的 BMI 計算函數為例：

```rust
fn bmi_calculator<T, U>(height: T, weight: U) -> Result<f64, String>
where
    T: Into<f64>,
    U: Into<f64>,
{
    let w = weight.into();
    let h = height.into() / 100.0;

    if w <= 0.0 || h <= 0.0 {
        return Err("輸入數值有誤".to_string());
    }

    Ok(w / (h * h))
}
```

為了讓整數或浮點數都能帶進去當參數，這裡借用了我們在前面章節學過的泛型寫法，但又不希望使用者填寫數字以外的值，這裡加上了 `Into` 特徵來做型別轉換。接著使用 `match` 做個流程判斷：

```rust
match bmi_calculator(170, 70.5) {
    Ok(result) => println!("{:.2}", result),  // 印出 24.39
    Err(reason) => println!("{}", reason),
}

```

這樣應該就差不多了。除了使用 `Result` 之外，這個章節主要是要介紹另一種：`Panic`，就是聽起來很恐慌的恐慌！

Panic
-----

在 Rust 裡有個 `panic!` 巨集可以製造恐慌，製造恐慌聽起來感覺很可怕，但其實就是把程式給停下來，並可以順便給一段訊息：

```rust
fn main() {
    panic!("😱😱😱😱😱😱😱");
}

```

你在任何地方都能直接呼叫 `panic!()`，當 Rust 看到 `panic!()` 的時候就會把這個程式停下來，結束程式：

```javascript
$ cargo run
thread 'main' panicked at '😱😱😱😱😱😱😱', src/main.rs:2:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

從 Rust 編譯器給的訊息可以看的出來恐慌是在哪個檔案的哪一行造成的。剛剛這個範例只有一行太簡單，我故意來弄的複雜一點：

fn main() {
    hello();
}

fn hello() {
    world();
}

fn world() {
    hey();
}

fn hey() {
    panic!("😱😱😱😱😱😱😱");  // 在這裡引爆
}
執行之後會得到的結果是：

$ cargo run                 
thread 'main' panicked at '😱😱😱😱😱😱😱', src/main.rs:14:5
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
Rust 告訴你 Panic 是在第 14 行發生的，看原始碼看一下子就能看出第 14 行是 hey() 函數，但光這樣的訊息不足以看出是誰呼叫這個函數造成恐慌的。我知道在上面的範例其實還是有點簡單，一眼就能抓出兇手是誰，但如果在比較複雜的系統想要揪出犯人是誰的話，backtrace 就很重要了。

如果想要看更詳細的 backtrace，如同 Rust 編譯器給的提示，可以在執行的時候加個環境變數 RUST_BACKTRACE=1：

$ RUST_BACKTRACE=1 cargo run 
thread 'main' panicked at '😱😱😱😱😱😱😱', src/main.rs:14:5
stack backtrace:
   0: rust_begin_unwind
             at /rustc/5680fa18feaa87f3ff04063800aec256c3d4b4be/library/std/src/panicking.rs:593:5
   1: core::panicking::panic_fmt
             at /rustc/5680fa18feaa87f3ff04063800aec256c3d4b4be/library/core/src/panicking.rs:67:14
   2: hello_rust::hey
             at ./src/main.rs:14:5
   3: hello_rust::world
             at ./src/main.rs:10:5
   4: hello_rust::hello
             at ./src/main.rs:6:5
   5: hello_rust::main
             at ./src/main.rs:2:5
   6: core::ops::function::FnOnce::call_once
             at /rustc/5680fa18feaa87f3ff04063800aec256c3d4b4be/library/core/src/ops/function.rs:250:5
note: Some details are omitted, run with `RUST_BACKTRACE=full` for a verbose backtrace.
就能看的出來它不只是在 hey() 函數裡發生 Panic，還能看的出來它前一手是 world()，再前一手是 hello()，一直追到起點 main() 函數。

### 該用 Panic 還是用 Result？

`Result` 跟 Panic 比較大的差異，就是 `Result` 可以用 `match` 處理 `Err(E)` 變體的流程，但 Panic 只要一發生，就沒有挽回的機會，不像 JavaScript 還有 `try...catch...` 可以把拋出來的錯誤接回來，`panic!()` 一發生程式就直接停掉。所以 Panic 通常會用在沒救了（或不想救了）的地方。

想想看，假設在你的應用程式裡有需要連線遠端資料庫，如果因為網路斷線或是其它因素連不上資料庫的時候，你打算怎麼處理？是給使用者一個提醒說現在無法連線請稍候再試，還是直接讓應用程式關掉？

這並沒有絕對的答案，你覺得該放棄治療就放棄。Panic`跟`Result` 並不是二選一，可以混著用，我借一下在前面章節講到領錢失敗的範例：

```rust
match withdraw(1200) {
    Ok(amount) => println!("提領金額 {} 元", amount),
    Err(message) => println!("提領失敗：{}", message)
}

```

藉由 `Result` 的 `Err(E)` 變體，我們可以處理錯誤的流程，但要怎麼處理你可以決定，你可以只是像上面這樣在螢幕上印出提領失敗的提醒訊息，或是你要狠一點餘額不足就直接整台提款機爆炸：

```rust
match withdraw(1200) {
    Ok(amount) => println!("提領金額 {} 元", amount),
    Err(_) => panic!("💣💥")
}

```

如果所謂的「失敗」或「錯誤」是可以預期而且有挽回餘地的，通常使用 `Result` 會比直接呼叫 `panic!` 來的好一些 :)

