---
＃id: doc-markdown
title: 03-rust管理專案
description: rust管理專案
keywords:
  - rust
last_update:
  date: 3/27/2024
  author: ttom
---
以 Hello World 等級的複雜度來說，單一個 `.rs` 檔案就能搞定。不過我相信大家學 Rust 不會只想學到 Hello World 等級而已，專案越做越複雜，也許就得開始拆分模組，或是使用外部的套件，這就不是單一個 `.rs` 檔案就能搞定的。

建立專案（純手工版）
------
在 Rust 要建立一個所謂的「專案」也不複雜，最陽春的專案其實只要一個 `.toml` 設定檔就行了。`TOML` 是 Tom's Obvious, Minimal Language（湯姆的淺顯的、極簡的語言）幾個字的縮寫，其中 Tom 就是這個設定檔格式的作者。TOML 的格式寫起來會分段落，並且使用 Key = Value 的方式來撰寫。

接下來請你同樣在一個你找的到的地方，建立一個名為 `Cargo.toml` 的檔案，檔案內容如下：

```toml
[package]
name = "hello_rust"
version = "0.0.1"

```

這個檔名規定要叫做 `Cargo`，Cargo 這個字是輪船、飛機等大型交通工具裝載的貨物的意思，也就是我們常看到的那些貨櫃，這個名字滿貼切的。這樣就是最最最陽春的 Rust 專案，在 `[package]` 段落裡，`name` 指的是這個專案的名稱，而`version` 就是這個專案的版本，這兩個欄位是一定要填寫的。

接著可以執行這個指令：

```bash
$ cargo run

```

這時候你應該會看到以下的錯誤訊息：

```bash
error: failed to parse manifest at `/tmp/hello-rust/Cargo.toml`

Caused by:
  no targets specified in the manifest
  either src/lib.rs, src/main.rs, a [lib] section, or [[bin]] section must be present

```

不用怕，這段錯誤訊息其實是跟你抱怨說它少了一些檔案，不知道怎麼進行下一步，因為它預期在 `src` 目錄裡應該要有一個 `lib.rs` 或 `main.rs` 檔案，但我們現在並沒有這個檔案。既然沒有，那我們就做給它，我就手工建立一個 `src` 目錄，並且在裡面建立一個名為 `main.rs` 的檔案，檔案內容如下：

```rust
fn main() {
    println!("Hello Rust from Cargo!")
}

```

這時整個目錄的結構長這樣：
```bash
D:.
│  Cargo.toml 
├─src
│      main.rs
```

如果你的 VSCode 有安裝 `rust-analyzer` 擴充套件的話，你可能會發現它自動幫你產生一些檔案跟目錄，但先不用管它。我們再執行一次剛才失敗的指令：

```shell
$ cargo run
   Compiling hello_rust v0.0.1 (/private/tmp/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 0.07s
     Running `target/debug/hello_rust`
Hello Rust from Cargo!

```

最後一行就成功印出 `Hello Rust form Cargo!` 字樣了。再仔細觀察上面的訊息，會發現在過程中會幫你把編譯的檔案放在 `target/debug/` 目錄裡，並幫你生成一個 `hello_rust` 的執行檔。

這個 `cargo run` 指令的功用，就是會幫你進行編譯並且直接執行編譯好的執行檔。如果只是想單純編譯的話，可以只用 `cargo build` 指令就好。

同時你可能有注意到上面的訊息裡有個 `unoptimized` 的字樣，表示這個指令並不會進行最佳化編譯。如果想要有最佳化效果，不管是 `cargo run` 或 `cargo build` 都可以，只要在後面加上 `--release` 參數就行了：

```shell
$ cargo build --release
   Compiling hello_rust v0.0.1 (/private/tmp/hello-rust)
    Finished release [optimized] target(s) in 0.10s
              
$ cargo run --release
    Finished release [optimized] target(s) in 0.00s
     Running `target/release/hello_rust`
Hello Rust from Cargo!

```

它編譯出來的產物會放在 `target/release` 目錄裡。

在專案開發的過程中我們可能常常會不斷重複進行修改原始碼 \+ 編譯的動作，預設的編譯參數雖然不是最佳化（unoptimized），但編譯的速度比較快，等到要正式發佈的時候再加上 `--release` 參數即可。

透過 `cargo run` 或 `cargo build` 建立出來的產出物會放在 `target` 目錄裡，如果不想要了，直接用開檔案總管把整個 `target` 目錄丟掉就行了，或想敲指令耍一下帥：

```ruby
$ cargo clean

```

就會把 `target` 目錄刪掉了。

建立專案（自動版）
---------

前面這個手動編寫 `Cargo.toml` 檔案，還要自己建立 `src` 目錄跟 `main.rs` 檔案，雖然也不麻煩，但只要一個 `cargo` 指令就可以直幫我們產生上面的內容：

```go
$ cargo new hey-rust
Created binary (application) `hey-rust` package

```

這個指令會幫你建立一個 `hey-rust` 目錄，點開看裡面的內容就會發現這跟我們剛剛手工打造的結構是一樣的。仔細觀察會發現還會幫你加一個 `.gitignore`，並且把 `target` 目錄排除在 Git 版控之外。

同樣也是 `cargo` 系列的指令，使用 `cargo init hey-rust` 也會幫你做出跟 `cargo new hey-rust` 一樣的內容，然後如果 `cargo init` 不加參數的話，刪不會幫你建立一個新的目錄，而是在當下目錄幫你建立這些相關的檔案，大家就視實際情況使用。

如果你曾經開發過前端相關的專案，到這裡應該會有點即視感，這波操作就跟 `npm init` 有點像。其實是的，雖然不完全一樣，但你可以把 Rust 裡的 `cargo` 指令當成是 JS 裡的 `npm` 指令看待。

安裝套件
----

如果要使用別人寫好的套件，可以使用 `cargo add` 指令加上套件名稱，就整個會幫你自動安裝到好，例如我們來安裝一個產生亂數的套件 `rand`：

```shell
$ cargo add rand
    Updating crates.io index
      Adding rand v0.8.5 to dependencies.
             Features:
             + alloc
             + getrandom
             ...略...
             - serde1
             - simd_support
             - small_rng
    Updating crates.io index
```

這樣就裝好了。這時你打開 `Cargo.toml` 看一下，會發現在底下的 `[dependencies]` 段落多了一些東西：

```toml
[dependencies]
rand = "0.8.5"
```

問題來了，這個指令怎麼知道它要去哪裡找套件？JavaScript 的 `npm` 有 [https://www.npmjs.com/](https://www.npmjs.com/)，Ruby 的 `gem` 指令有 [https://rubygems.org/](https://rubygems.org/)，而 Rust 的 `cargo` 有 [https://crates.io/](https://crates.io/) 網站：


Crate 英文是裝東西的板條箱（就如它的 Logo），這名字也挺貼切的。

除了 `Cargo.toml` 檔案多了一些檔案，同時目錄下也有一個 `Cargo.lock` 檔案，你可以拿 JavaScript 的 `package.json` 跟 `package.lock` 來類比 `Cargo.toml` 以及 `Cargo.lock`。

其實早期要安裝套件會比較辛苦一點，必須手動在 `Cargo.toml` 檔案裡加上 `rand = "0.8.5"` 的設定，然後再執行 `cargo run` 或 `cargo build` 指令進行編譯，後來 Rust 在 [1.62.0](https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html) 版本開始加入了 `cargo add` 指令，讓安裝的過程順手不少。

參考資料：https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html

### 套件裝到哪裡去了？

如果你是前端工程師，大概知道 `npm install` 指令會把相關的套件裝一份到 `node_modules` 裡，但仔細看剛剛建立的專案，裡面好像沒看到像是安裝好的 `rand` 套件？

不像 npm 的專案是每個專案都裝一套，Rust 的套件會統一安裝在個人使用者的 Home 目錄底下，在 Mac / Linux 作業系統會在 `~/.cargo/`，Windows 作業系統則是安裝在 `C:\Users\你的使用者名稱\.cargo`。

Space vs Tab，你是哪一派？
-------------------

各位寫程式的時候，你是用空白鍵還是 Tab 鍵來進行縮排？如果是空白鍵的話，你是用 2 個空白鍵、4 個空白鍵還是 8 個空白鍵？這一直就是吵不完的話題，每個程式語言的慣例也都不太一樣。

根據 Rust 官方手冊的 [Coding Style](https://doc.rust-lang.org/style-guide/) 建議：

> -   Use **spaces**, not tabs.
> -   Each level of indentation must be **four** spaces

好啦，大家不用吵啦，官方建議用「4 個空白鍵」。然而在 JavaScript 有 `prettier` 套件，Golang 有 `gofmt` 或 `go fmt` 指令，在 Rust 也有 `rustfmt`：

```shell
$ rustfmt src/main.rs
```

這個指令會自動依照 Rust 官方建議的方式幫你調整檔案的縮排（4 個空白鍵）。當然，如果你不認同 Rust 的官方建議風格，你就是覺得 3 個空白鍵比較酷（？），你可以在專案底下放個 `rustfmt.toml` 設定檔，裡面這樣寫：

```toml
tab_spaces = 3
```

這樣以後格式化出來的結果就是用 3 個空白鍵了。更多關於 `rustfmt.toml` 的設定內容可參考[文件](https://rust-lang.github.io/rustfmt/)說明。

參考資料：https://rust-lang.github.io/rustfmt/

如果你是一個 Cargo 專案，也可以直接這樣做：

```shell
$ cargo fmt

```

這也會幫你做類似的事