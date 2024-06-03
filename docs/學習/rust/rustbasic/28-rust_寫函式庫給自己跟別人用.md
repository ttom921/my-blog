---
＃id: doc-markdown
title: 28-rust_寫函式庫給自己跟別人用
description: _寫函式庫給自己跟別人用
keywords:
  - rust
last_update:
  date: 6/03/2024
  author: ttom
---


一般我們在新增一個 Rust 專案的時候，就是直接 `cargo new` 下去，然後就會生成 `Cargo.toml` 跟 `src/main.rs`，最後寫一寫就 `cargo run` 或 `cargo build` 就能產出可以執行的檔案。不過在建立專案的時候如果多給一個 `--lib` 的話，會建立一個函式庫專案：

```go
$ cargo new calculator --lib
Created library `calculator` package
```

所謂的函式庫專案，就是到時候它可以被其它的 Rust 專案使用。講的好像很厲害，但你只要打開專案就會發現根本沒有多神奇，就是把原本的 `src/main.rs` 換成 `src/lib.rs` 罷了。

在 Rust 裡，`main.rs` 主要是用來編譯、建立執行檔，裡面會需要有一個 `main()` 函數，這是整個程式的進入點；而 `lib.rs` 則是可以重複被使用的程式碼，可以被其它 Rust 程式引入使用，它不需要什麼特別的進入點，就只要放你想寫的模組、Struct 或是函數等內容。函式庫型的專案因為不會編譯成可執行檔，只能被當做第三方的套件引入、使用，所以當你試著執行它的時候：

```go
$ cargo run
error: a bin target must be available for `cargo run`

```

Rust 會告訴你沒辦法執行。

在比較早期的 Rust 版本，如果想要建立一個可產生執行檔的專案，需要主動加上 `--bin` 參數，在較新的版本中 `--bin` 已經是預設值，所以如果要建立函式庫專案需要主動加上 `--lib` 參數。

接著我們就試著動手來做個函式庫吧 :)

建立函式庫
-----

打開剛剛建立好的專案，裡面的 `src/lib.rs` 應該有一些測試用的測試，可以先不理它或是把它們先刪除。這回還是拿自己本業的 BMI 計算機，不過既然是要寫函式庫給別人用，測試就特別重要了。我先在專案裡開一個 `tests/bmi_test.rs` 檔案，並先把 test case 寫好：

```rust
extern crate calculator;

#[test]
fn bmi_test() {
    let result = calculator::bmi(180, 65);
    assert_eq!(result, Ok(20.1))
}

#[test]
fn bmi_test_invalid() {
    let result = calculator::bmi(0, 65);
    assert!(result.is_err());
}
```

如果你沒有養小精靈的話，因為實作程式都還沒寫，所以執行測試之後一定是會出錯的。所以接著把實作補上，我直接寫在 `src/lib.rs` 裡：

```rust
pub fn bmi<T, U>(height: T, weight: U) -> Result<f64, String>
where
    T: Into<f64>,
    U: Into<f64>,
{
    let h = height.into();
    let w = weight.into();

    if h <= 0.0 || w <= 0.0 {
        return Err("輸入值有誤".to_string());
    }

    let bmi = w / (h / 100.0 * h / 100.0);
    Ok((bmi * 10.0).round() / 10.0)
}

```

實作程式碼應該沒有什麼新東西。函式庫做好之後，通常是會上傳一份到 crates.io 網站跟大家分享、共用。上傳到 crates.io 需要先申請一個網站上的帳號，只要你這個套件的名稱沒有跟別人的重複，照著官網的說明做應該就能把你的專案推一份上去。

不過如果你還沒打算上傳到 crates.io 的話，可以先在自己本機試玩看看。我們先開一個新的專案：

```rust
$ cargo new hello-bmi
Created binary (application) `hello-bmi` package

```

因為要做一個可執行的檔案，所以這回我們就不加 `--lib` 參數。接著打開 `Cargo.toml`，在 `[dependencies]` 段落底下加上套件的名稱以及它的路徑：

```toml
[dependencies]
calculator = { path = "../calculator" }

```

後面那個套件的路徑就請依各位的實際情況進行修改。如果你覺得上傳到 crates.io 太正式，但又想跟朋友分享的話，你也可以上傳到自己的 GitHub 上，然後把 `path` 改成 `git`，再把路徑指向你的 GitHub Repo：

```toml
[dependencies]
# 可以是本機
# calculator = {path = "../calculator"}
# 可以是github
# calculator = { git = "https://github.com/kaochenlong/bmi-calculator-lib.git", branch = "main" }

# 可以改名
bmi_calc = {path = "../calculator", package = "calculator"}

```

調整 `branch` 可以用來測試在其它分支的效果，但如果是預設的分支的話，`branch` 可以省略不用特別寫。因為這個專案我已公開上傳到 GitHub 上，所以各位應該如果照著做的話，也可以從我的 Repo 取得寫好的內容。

接著編輯 `src/main.rs` 檔案：

```rust
fn main() {
    let result = calculator::bmi(170, 65);

    match result {
        Ok(bmi) => {
            println!("BMI: {}", bmi);
        },
        Err(message) => {
            println!("{message}")
        }
    }
}

```

因為回傳值是個 `Result`，所以這裡我用 `match` 來處理它，執行 `cargo run` 應該就能看到結果了：

```makefile
$ cargo run
BMI: 22.5

```

打完收工！

是說，如果有個套件名稱你不喜歡或是覺得可讀性不太好，你沒辦法幫它改名字，但可以在引入使用的時候幫它改一下：

```toml
[dependencies]
bmi_calc = { path = "/tmp/calculator", package = "calculator" }

```

原本套件名稱是 `calculator`，如果需要的話可以給它個別名叫做 `bmi_calc`，這樣在 `main.rs` 裡的程式碼也要稍微調整一下：

```rust
let result = bmi_calc::bmi(170, 65);

```

這樣就行了 :)

