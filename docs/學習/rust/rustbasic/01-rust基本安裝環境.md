---
＃id: doc-markdown
title: 01-rust基本安裝環境
description: 基本安裝環境
keywords:
  - rust
last_update:
  date: 3/25/2024
  author: ttom
---

安裝rustup
-------
不過在這之前，得先把軟體以及開發環境給搞定。Rust 的安裝還算簡單，在 Rust 的官網上可以找到最適合各位的安裝方式跟版本
照著 Rust 的[官網文件](https://www.rust-lang.org/tools/install)進行安裝吧
要如何檢查自己電腦裡是不是已經安裝正確版本的 Rust 呢？以 Mac / Linux 來說是在終端機裡，而 Windows 則是使用命令提示字元或 PowerShell 視窗中輸入以下指令，檢查是不是有安裝最新版本：
```bash
$ rustc --version
rustc 1.76.0 (07dca489a 2024-02-04)
```
>>> 提示：之後的範例程式中如果看到開頭的 $，是表示這是一個終端機指令而不是程式語法，那個 $ 符號請不要跟著輸入，不然會發生錯誤訊息。

在 Windows 上安裝 Rust 本身不難，只要從 Rust 官網下載安裝包一步步照著做就好，但後續要進行編譯的話，需要額外的建置工具，這在[微軟的網站](https://learn.microsoft.com/zh-tw/windows/dev-environment/rust/setup)上也有相關的說明。

如果你像我一樣之前曾經安裝過 Rust，但並不是最新版本，可使用 Rust 內建的工具包 rustup 來昇級 Rust 的版本：
```bash
$ rustup update
```
等它跑完應該就可以有最新版本的可以用了

rustup是rust版本管理器
因為我是使用win10的系統所以透過這個` C:\Users\ttom\.cargo\bin` 目錄查看到安裝的rust工具
```bash
C:\Users\ttom\.cargo\bin
λ ls
cargo.exe*         cargo-fmt.exe*   clippy-driver.exe*  rls.exe*            rustc.exe*    rustfmt.exe*   rust-gdbgui.exe*  rustup.exe*   wasm-pack.exe*
cargo-clippy.exe*  cargo-miri.exe*  evcxr_jupyter.exe*  rust-analyzer.exe*  rustdoc.exe*  rust-gdb.exe*  rust-lldb.exe*    sccache.exe*  wasm-pack.stamp

```
切換rust版本
------
查看目前所以安裝的版本

```bash
C:\Users\ttom\.rustup/toolchains/

beta-x86_64-apple-darwin
stable-x86_64-apple-darwin

```
切換預設版本
------

```bash
rustup default beta-x86_64-apple-darwin

info: using existing install for 'beta-x86_64-apple-darwin'
info: default toolchain set to 'beta-x86_64-apple-darwin'

  beta-x86_64-apple-darwin unchanged - rustc 1.55.0-beta.9 (27e88d367 2021-08-28)

```
針對專案設定版本
------

```bash
rustup override set nightly

info: using existing install for 'beta-x86_64-apple-darwin'
info: override toolchain for '/Users/ken_jan/rust/hello' set to 'beta-x86_64-apple-darwin'

  beta-x86_64-apple-darwin unchanged - rustc 1.55.0-beta.9 (27e88d367 2021-08-28)

```
卸載rust
------
```bash
rustup self uninstall

```
如果你只是想嘗試看看，完成不想安裝，也可以使用瀏覽線上版本

[Rust Playground](https://play.rust-lang.org/)


開發工具
-------
將來會不會有更厲害、更好用的工具我不確定，就以目前的來說，我會使用 Visual Studio Code（以下簡稱 VSCode）再搭配擴充程式 rust-analyzer 來編寫 Rust 程式，手感挺不錯的。

起手式
假設你已經順利安裝好 Rust 跟 VSCode，我們就跟風一下，來寫個 Hello Rust 的程式！

跟 JavaScript 程式的附檔名是 .js、Python 的附檔名是 .py 一樣，Rust 程式的附檔名是 .rs。你可以在你容易找的到的地方（例如桌面）建立一個名為 hello.rs 的檔案，用 VSCode 打開它之後，跟我一樣輸入以下程式碼：

```rust
fn main() {
    print!("Hello Rust!");
}
```
這裡有兩件事要注意一下。

首先，這個檔案要叫什麼名字無所謂，但函數的名稱要叫做 main，它是整個程式的進入點，如果沒有的話待會編譯的過程會出錯。
其次，print! 最後面的那個驚嘆號 ! 不要漏了寫。曾經寫過其它程式語言的話，你大概會猜這個 print! 就像 console.log 一樣是個函數（Function），但其實這東西在 Rust 裡稱之為 Marco（你也可翻譯巨集），它並不是函數。沒關係，細節在後面的章節會再詳述，你現在可暫時把它當函數看待就好。

寫完也確定存檔之後，接著請 Rust 來「編譯（Compile）」這個原始檔：
```rust
$ rustc hello.rs

```

如果程式碼沒有打錯字而且指令也沒下錯的話，你在畫面上不會看到任何訊息，但你應該會發現這時候在同個目錄下會產生一個同名的檔案 hello（如果在 Windows 作業系統則是產出 hello.exe）。這是一個二進位（Binary）檔案，所以你用編輯器大概也打不開它。如果有發生錯誤，你可以觀察看看它給你錯誤訊息，通常可以找到問題在哪裡。

最後，我們來執行這個剛剛透過 rustc 編譯產出的檔案：
```bash
$ ./hello
Hello Rust!
```
前面的 ./ 是指「執行在這個地方的 hello 程式」，然後你應該會在畫面上看到 Hello Rust! 字樣。