---
＃id: doc-markdown
title: 21-rust_模組_Module
description: _模組_Module
keywords:
  - rust
last_update:
  date: 5/07/2024
  author: ttom
---
現代比較成熟的程式語言，當專案規模大到一定程度之後，通常就會有模組化的需求，可能是分開寫在不同的檔案裡，或是直接獨立變成一個套件。模組化的目的可以讓程式碼更有組織，也更容易重複使用及維護，當然，這種模組化的設計 Rust 也一定有。

模組
--

在 Rust 可以使用 `mod` 關鍵字來建立模組，寫起來大概會像這樣：

```rust
mod greeting {
    fn hi() {
        println!("Hi, Rust");
    }

    fn hey() {
        println!("Hey Rust");
    }
}

```

在 `mod` 裡面就可以放你想放的函數。如果要呼叫包在模組裡的函數，要連名帶姓的一起用，像這樣：

```rust
greeting::hi();

```

但執行了就會出現錯誤訊息：

```typescript
$ cargo run
error[E0603]: function `hi` is private
2 |     greeting::hi()
  |               ^^ private function
```

Rust 編譯器提醒你這是一個私有（Private）函數，這是因為如果沒特別修飾的話，`mod` 裡的函數預設就是私有的，私有函數只能在模組裡被呼叫，不能直接這樣取用，這種封裝的概念在大部份支援物件導向的程式語言也都有類似的設計。你可以加上個 `pub` 跟 Rust 說這是一個公開（Public）的函數：

```rust
mod greeting {
    pub fn hi() {
        println!("Hi, Rust");
    }

    fn hey() {
        println!("Hey Rust");
    }
}

```

這樣就可以了。

### 大腸包小腸之模組裡的模組

`mod` 裡除了可以放函數，還可以再繼續包其它的模組：

```rust
mod greeting {
    mod a {
        mod b {
            pub fn hi() {
                println!("Hi, Rust");
            }
        }
    }
}

```

這個例子是有點誇張了，但這樣一層一層往裡面包是沒問題的。要呼叫 `hi()` 函數，同樣也是要連名帶姓的呼叫：

```rust
greeting::a::b::hi()

```

但執行之後就又會出錯了...

```cpp
$ cargo run
error[E0603]: module `a` is private
2 |     greeting::a::b::hi()
  |               ^     -- function `hi` is not publicly re-exported
  |               |
  |               private module
```

Rust 再次跳出來跟你說這是私有的，但仔細看，並不是函數是私有的，而是模組是私有的。同樣要讓它變成公開的，也是加上個 `pub` 就行了：

```rust
mod greeting {
    pub mod a {
        pub mod b {
            pub fn hi() {
                println!("Hi, Rust");
            }
        }
    }
}
```
這樣就可以了。但覺得每次都得連名帶姓的呼叫有點囉嗦，可以適時的使用 `use` 關鍵字來簡化：

```rust
use greeting::a::b::hi;

fn main() {
    hi();
}

```

如果函數是在同一個模組裡，想要一次 `use` 多個的話，也可以這樣寫：

```rust
use greeting::a::b::{hey, hi};

fn main() {
    hi();
    hey();
}
```

### 不同的模組

如果在模組裡的函數想要呼叫其它模組裡的函數的話，像這樣：

```rust
mod greeting {
    pub fn hi() {
        // 想要在這裡呼叫 loudly 函數
    }
}

mod say_something {
    pub fn loudly(message: &str) {
        println!("{}!!!", message.to_uppercase());
    }
}

```

因為 `loudly()` 是在別人家，所以得從自己的模組先走出去，再走進 `say_something` 模組裡。這裡可以使用 `super` 關鍵字往上層走：

```rust
mod greeting {
    pub fn hi() {
        super::say_something::loudly("rust");
    }
}

```

這樣就可以呼叫到了。除了 `super` 之外，以上面的範例來說，還可以用另一種寫法：

```rust
mod greeting {
    pub fn hi() {
        crate::say_something::loudly("rust");
    }
}

```

雖然用 `super` 跟 `crate` 執行剛好在這邊都不會出錯，但它們兩個的意義不太一樣：

-   `super` 是指目前這個模組的上一層。
-   `crate` 指的是當前專案的的最上層模組。

