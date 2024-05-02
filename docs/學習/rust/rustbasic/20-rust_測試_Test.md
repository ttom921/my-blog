---
＃id: doc-markdown
title: 20-rust_測試_Test
description: _測試_Test
keywords:
  - rust
last_update:
  date: 5/02/2024
  author: ttom
---
不管在哪個程式語言，雖然有些人可能不會或不習慣寫測試，但就算不寫也都知道測試都是很重要的部分，撰寫測試有助於確保程式碼代碼的正確性。前面我們也見識過 Rust 編譯器本身的龜毛，可以在編譯階段就盡量抓出可能的問題，如果能再加上測試應該可以再減低程式發生錯誤的機率。

即使不使用外部套件，Rust 本身也有支援測試的寫法，就是我們在上個章節介紹到的「屬性（Attributes）」。測試本身不算難寫，但對沒常寫測試的人來說比較難的是不知道從哪裡下手或是該怎麼測試。我就先用個簡單的 BMI 計算機來試一下手感。

為求簡單展示，我就先把測試寫在 `main.rs` 裡：

```rust
#[cfg(test)]
mod bmi {
    // 內容還沒寫
}

fn main() {}
```

這裡的 `#[cfg(test)]` 是我們在上個章節介紹到的屬性。雖然我這個是直接測試寫在 `main.rs` 裡，但 `#[cfg(test)]` 這個屬性會告訴 Rust 編譯器以下這段程式碼塊只有在執行測試時才會被編譯進去。

接著那個 `mod` 的寫法我們應該在下個章節就會介紹到，它是模組的意思，至於這模組要叫什麼名字並沒有強制規定，因為我想要寫一個 BMI 的計算機，我這裡就先給它一個 `bmi`。接著執行 `cargo test` 指令，就可以開始跑測試了：

```bash
$ cargo test
    Finished test [unoptimized + debuginfo] target(s) in 0.08s
     Running unittests src/main.rs (target/debug/deps/hello_rust-39c79d4f99e78c83)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

因為我們什麼都還沒寫，所以結果就是 0 個測試。

補上測試
----

先來寫個練手的測試：

```rust
#[cfg(test)]
mod bmi {
    #[test]
    fn dummy() {
        let result = 1 + 2;
        assert_eq!(result, 3);
    }
}

```

我先放一個看起來很呆的測試，就只是展示 1 + 2 等於 3，這應該沒什麼問題，中間那個 `#[test]` 標記是告訴 Rust 編譯器這是一個測試的函數，它要在 `cargo test` 跑測試的時候被呼叫，執行之後的結果變成：

```bash
$ cargo test
    Finished test [unoptimized + debuginfo] target(s) in 0.11s
     Running unittests src/main.rs (target/debug/deps/hello_rust-39c79d4f99e78c83)

running 1 test
test bmi::dummy ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

從底下的統計就看的出來跑了幾個測試，幾個成功，幾個失敗。你可以試著把 `#[test]` 拿掉看看，這個測試就不會在 `cargo test` 的時候被執行了。

是時候把該寫的測試補上去了：

```rust
#[test]
fn test_calc() {
    let result = bmi_calc(180, 65);
    assert_eq!(result, 20.1);
}

```

因為 `bmi_calc()` 還沒寫，這時候執行測試一定會壞：

```javascript
$ cargo test
error[E0425]: cannot find function `bmi_calc` in this scope
11 |         let result = bmi_calc(180, 65);
   |                      ^^^^^^^^ not found in this scope

```

Rust 編譯器說找不到 `bmi_calc()`，廢話，我們就還沒寫，如果執行沒有出錯，不是你有養幫你寫 code 的小精靈，就是你還沒睡醒。既然還沒寫，那我們現在就把它寫完吧：

```rust
#[cfg(test)]
mod bmi {
    use crate::bmi_calc;

    #[test]
    fn dummy() {
        let result = 1 + 2;
        assert_eq!(result, 3);
    }

    #[test]
    fn test_calc() {
        let result = bmi_calc(180, 65);
        assert_eq!(result, 20.1);
    }
}

fn bmi_calc<T, U>(height: T, weight: U) -> f64
where
    T: Into<f64>,
    U: Into<f64>,
{
    let h = height.into() / 100.0;
    let bmi = weight.into() / (h * h);

    (bmi * 10.0).round() / 10.0
}

fn main() {}

```

這裡的 `use crate::bmi_calc;` 是表示要使用 `crate` 模組裡的 `bmi_calc` 函數，我們會在下個章節來介紹 Rust 的模組功能。

而 `bmi_calc()` 的實作就應該沒什麼驚喜了，就是用我們前面學到的泛型，讓它的參數可以傳整數也可以傳浮點數 :)
