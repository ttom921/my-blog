---
＃id: doc-markdown
title: 23-rust_練習_CLI應用程式套件
description: _練習_CLI應用程式套件
keywords:
  - rust
last_update:
  date: 5/13/2024
  author: ttom
---
練了這麼陣子的 Rust，不寫點東西練練手有點說不過去，這個章節我們就用我們前面學過的內容，先從最簡單的 CLI（Command-Line Interface）的程式開始吧。所以寫個 BMI 的計算機。

BMI 計算機
-------

### 需求

-   請使用者依序輸入身高，體重
-   計算完之後在畫面上顯示 BMI 值到小數點以下第 1 位
-   並依衛福部給的 BMI 建議標準，顯示提示訊息：

> BMI 建議標準：
> 
> 1.  小於 18.5 以下：「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！
> 2.  18.5 ~ 24：恭喜！「健康體重」，要繼續保持！
> 3.  24 ~ 27：「體重過重」了，要小心囉，趕快力行「健康體重管理」！
> 4.  大於等於 27：啊～「肥胖」，需要立刻力行「健康體重管理」囉！

### 動手作！

要單獨開一個 `.rs` 檔也是可以，只是用 `cargo` 來建一個專案會更簡單一些，所以起手式就來個：

```go
$ cargo new bmi_calculator
Created binary (application) `bmi_calculator` package
```

一開始我就先不想什麼拆模組之類的事情了，先在 `main.rs` 裡面寫，寫完之後要搬再說。首先，先來個測試，又因為計算的細節在前面章節有實作過，所以我一併也寫完：

```rust
fn main() { }

#[test]
fn test_calc() {
    let result = calculator(180, 65);
    assert_eq!(result, 20.1);
}

fn calculator<T, U>(height: T, weight: U) -> f64
where
    T: Into<f64>,
    U: Into<f64>,
{
    let h = height.into() / 100.0;
    let bmi = weight.into() / (h * h);

    (bmi * 10.0).round() / 10.0
}

```

跑一下測試：

```bash
$ cargo test
running 1 test
test test_calc ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

沒壞，Good。為了簡化 `main.rs`，我先把這個計算功能搬去其它檔案，例如 `bmi.rs`，而測試的部份我就把它放在 `tests/bmi_test.rs` 裡：

```rust
#[path = "../src/bmi.rs"]
mod bmi;

#[cfg(test)]
mod tests {
    use super::bmi::calculator;

    #[test]
    fn test_calculator() {
        let result = calculator(180, 65);
        assert_eq!(result, 20.1);
    }
}

```

再跑一次測試應該是可以正常運作的。接著應該要印出一些提示字元，請使用者輸入身高（單位：公分）以及體重（單位：公斤）之類的字樣。我先把第一個版本的程式碼貼上來，再慢慢來解釋：

```rust
use std::io;
mod bmi;

fn main() {
    println!("請輸入您的身高（單位：公分）：");

    let mut height = "".to_string();
    io::stdin().read_line(&mut height).expect("無法讀取身高");
    let height: f64 = height.trim().parse().expect("無法轉換");

    println!("接著請輸入您的體重（單位：公斤）：");

    let mut weight = "".to_string();
    io::stdin().read_line(&mut weight).expect("無法讀取體重");
    let weight: f64 = weight.trim().parse().expect("無法轉換");

    let bmi = bmi::calculator(height, weight);
    let message = if bmi >= 0.0 && bmi <= 18.5 {
        "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！"
    } else if bmi > 18.5 && bmi <= 24.0 {
        "恭喜！「健康體重」，要繼續保持！"
    } else if bmi > 24.0 && bmi <= 27.0 {
        "「體重過重」了，要小心囉，趕快力行「健康體重管理」！"
    } else if bmi > 27.0 {
        "啊～「肥胖」，需要立刻力行「健康體重管理」囉！"
    } else {
        "無法計算"
    };

    println!("您的 BMI 是 {}，{}", bmi, message);
}

```

這裡應該沒有什麼難的，應該就只有把使用者的輸入值讀進來比較複雜一些。`read_line()` 函數會給它一個 mutable 的參照，然後使用者打的字就會灌到這個變數裡。又，因為 `read_line()` 的回傳值是我們之前也學過的 `Result`，最後面的 `.expect` 就是來處理 `Err(E)` 變體的。

接著，上面大家可能會看到我 `let` 了兩次 `height` 跟 `weight`，雖然這在 JavaScript 會出錯，但這個在 Rust 是沒問題的，這也沒有重複宣告的問題：

```rust
let a = 1;
let a = a + 1;

println!("{}", a);

```

你也許會好奇 Rust 的變數不是說預設 immutable 嗎？怎麼可以 `a = a + 1`！這裡其實我是宣告另一個變數來接 `a + 1` 的值，並不是 `a = a + 1` 喔，少了 `let` 的意思不一樣的。

剩下的沒什麼特別的，就是依照需求判斷 BMI 並印出訊息。不過上面那段跟使者者要資料的動作有點重複，所以我就把它拉出來變成一個函數，最後簡化成這樣：

```rust
use std::io;
mod bmi;

fn main() {
    let height = ask_question("請輸入您的身高（單位：公分）：");
    let weight = ask_question("接著請輸入您的體重（單位：公斤）：");

    let bmi = bmi::calculator(height, weight);
    let message = if bmi >= 0.0 && bmi <= 18.5 {
        "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！"
    } else if bmi > 18.5 && bmi <= 24.0 {
        "恭喜！「健康體重」，要繼續保持！"
    } else if bmi > 24.0 && bmi <= 27.0 {
        "「體重過重」了，要小心囉，趕快力行「健康體重管理」！"
    } else if bmi > 27.0 {
        "啊～「肥胖」，需要立刻力行「健康體重管理」囉！"
    } else {
        "無法計算"
    };

    println!("您的 BMI 是 {}，{}", bmi, message);
}

fn ask_question(question: &str) -> f64 {
    println!("{}", question);

    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("無法讀取輸入");

    input.trim().parse().expect("無法轉換")
}

```

### 安裝在自已電腦裡

好不容易寫好了個程式，我們可以試著用 `cargo` 送的指令，把 build 好的程式直接裝一份在自己的電腦裡：

```swift
$ cargo install --path .
  Installing bmi_calculator v0.1.0 (/private/tmp/bmi_calculator)
    Finished release [optimized] target(s) in 0.00s
   Replacing /Users/kaochenlong/.cargo/bin/bmi_calculator
    Replaced package `bmi_calculator v0.1.0 (/private/tmp/bmi_calculator)` with `bmi_calculator v0.1.0 (/private/tmp/bmi_calculator)` (executable `bmi_calculator`)

```

要注意最後面的 `.` 別漏了，這個小數點指的是「這裡」的意思。

這樣一來，打開終端機，就可以在任何地方執行這個程式了：

```ruby
$ bmi_calculator
請輸入您的身高（單位：公分）：
168
接著請輸入您的體重（單位：公斤）：
75
您的 BMI 是 26.6，「體重過重」了，要小心囉，趕快力行「健康體重管理」！

```

根據我自己的身高體重，結果是「體重過重」，是該動一動了 orz。


