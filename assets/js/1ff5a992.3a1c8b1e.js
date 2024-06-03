"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2698],{5961:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var s=r(4848),t=r(8453);const l={"\uff03id":"doc-markdown",title:"07-rust_\u8b8a\u6578\u8207\u5e38\u6578",description:"\u8b8a\u6578\u8207\u5e38\u6578",keywords:["rust"],last_update:{date:"4/02/2024",author:"ttom"}},i=void 0,a={id:"\u5b78\u7fd2/rust/rustbasic/rust_\u8b8a\u6578\u8207\u5e38\u6578",title:"07-rust_\u8b8a\u6578\u8207\u5e38\u6578",description:"\u8b8a\u6578\u8207\u5e38\u6578",source:"@site/docs/\u5b78\u7fd2/rust/rustbasic/07-rust_\u8b8a\u6578\u8207\u5e38\u6578.md",sourceDirName:"\u5b78\u7fd2/rust/rustbasic",slug:"/\u5b78\u7fd2/rust/rustbasic/rust_\u8b8a\u6578\u8207\u5e38\u6578",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u8b8a\u6578\u8207\u5e38\u6578",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{"\uff03id":"doc-markdown",title:"07-rust_\u8b8a\u6578\u8207\u5e38\u6578",description:"\u8b8a\u6578\u8207\u5e38\u6578",keywords:["rust"],last_update:{date:"4/02/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"06-rust\u8cc7\u6599\u578b\u614b\u539f\u59cb\u578b\u5225_\u9663\u5217_\u5143\u7d44\u7bc7",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust\u8cc7\u6599\u578b\u614b\u539f\u59cb\u578b\u5225_\u9663\u5217_\u5143\u7d44"},next:{title:"08-rust_\u51fd\u6578",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u51fd\u6578"}},c={},d=[{value:"\u8b8a\u6578\u4e0d\u80fd\u8b8a\uff1f",id:"\u8b8a\u6578\u4e0d\u80fd\u8b8a",level:3},{value:"\u4f5c\u7528\u57df\uff08Scope\uff09",id:"\u4f5c\u7528\u57dfscope",level:3},{value:"\u5e38\u6578\uff08Constant\uff09",id:"\u5e38\u6578constant",level:2}];function o(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u5982\u540c\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u7684\u8a2d\u8a08\uff0cRust \u4e5f\u6709\u8b8a\u6578\u8ddf\u5e38\u6578\u7684\u8a2d\u8a08\uff0c\u4e0d\u904e Rust \u7684\u8b8a\u6578\u6709\u4e00\u4e9b\u6bd4\u8f03\u7279\u5225\u7684\u5730\u65b9\uff0c\u9019\u4e5f\u662f Rust \u6703\u88ab\u8aaa\u6bd4\u8f03\u300c\u5b89\u5168\u300d\u7684\u539f\u56e0\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Rust \u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"let"})," \u95dc\u9375\u5b57\u5b9a\u7fa9\u8b8a\u6578\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let age: u8 = 20;\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u7684\u7de8\u8b6f\u5668\u9084\u6eff\u8070\u660e\u7684\uff0c\u5927\u90e8\u4efd\u6642\u5019\u90fd\u6703\u731c\u5c0d\uff0c\u53ea\u662f\u5076\u723e\u6703\u731c\u7684\u5bec\u9b06\u4e00\u9ede\uff0c\u4f8b\u5982\u6c92\u6307\u5b9a\u578b\u5225\u7684\u6574\u6578\u8b8a\u6578\u6703\u662f ",(0,s.jsx)(e.code,{children:"i32"}),"\uff0c\u800c\u6c92\u6307\u5b9a\u578b\u5225\u7684\u6d6e\u9ede\u6578\u6703\u662f ",(0,s.jsx)(e.code,{children:"f64"}),"\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5148\u5ba3\u544a\u8b8a\u6578\u4f46\u4e0d\u7d66\u503c\uff0c\u4e4b\u5f8c\u518d\u7d66\u4e5f\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let age;\r\nage = 20;\r\n\r\nprintln!("{}", age);  // \u5370\u51fa 20\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"Rust \u7684\u7de8\u8b6f\u5668\u9700\u8981\u77e5\u9053\u6bcf\u500b\u8b8a\u6578\u7684\u578b\u5225\uff0c\u6240\u4ee5\u8981\u4e0d\u4f60\u5728\u64b0\u5beb\u7684\u6642\u5019\u5c31\u8b1b\u660e\u767d\uff0c\u6216\u662f\u8b93 Rust \u5e6b\u4f60\u731c\u3002\u5225\u64d4\u5fc3\uff0c"}),"\n",(0,s.jsx)(e.p,{children:"\u4e0d\u904e\u5982\u679c\u6c92\u7d66\u5b83\u503c\uff0c\u662f\u4e0d\u80fd\u76f4\u63a5\u62ff\u4f86\u7528\u7684\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'let age: u8;    // \u6c92\u7d66\u503c\r\nprintln!("{}", age);  \r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u57f7\u884c\u4e0b\u53bb\u5c31\u6703\u51fa\u932f\u4e86\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)\r\nerror[E0381]: used binding `age` isn't initialized\r\n --\x3e src/main.rs:3:20\r\n  |\r\n2 |     let age: u8;\r\n  |         --- binding declared here but left uninitialized\r\n3 |     println!(\"{}\", age);\r\n  |                    ^^^ `age` used here but it isn't initialized\r\n\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u8b8a\u6578\u4e0d\u80fd\u8b8a",children:"\u8b8a\u6578\u4e0d\u80fd\u8b8a\uff1f"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u5927\u90e8\u4efd\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u8b8a\u6578\u5c31\u662f\u53ef\u4ee5\u300c\u8b8a\u300d\u624d\u53eb\u8b8a\u6578\uff0c\u4f46\u5728 Rust \u7684\u8a2d\u8a08\u88e1\uff0c",(0,s.jsx)(e.code,{children:"let"})," \u5ba3\u544a\u7684\u8b8a\u6578\u662f\u4e0d\u80fd\u6539\u7684\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let age = 20;\r\n    println!("{}", age);\r\n\r\n    age = 18;    // \u8981\u628a\u5b83\u6539\u6210 18\r\n    println!("{}", age);\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"Rust \u5c31\u6703\u7d66\u4f60\u9019\u500b\u932f\u8aa4\u8a0a\u606f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)\r\nerror[E0384]: cannot assign twice to immutable variable `age`\r\n --\x3e src/main.rs:5:5\r\n  |\r\n2 |     let age = 20;\r\n  |         ---\r\n  |         |\r\n  |         first assignment to `age`\r\n  |         help: consider making this binding mutable: `mut age`\r\n...\r\n5 |     age = 18;\r\n  |     ^^^^^^^^ cannot assign twice to immutable variable\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u5ba3\u544a\u7684\u8b8a\u6578\u9810\u8a2d\u662f\u4e0d\u53ef\u8b8a\u52d5\uff08immutable\uff09\uff0c\u6240\u4ee5\u5728\u7d66\u5b9a\u503c\u4e4b\u5f8c\u4e0d\u80fd\u4fee\u6539\u3002\u5982\u679c\u8981\u8b93\u5b83\u53ef\u88ab\u4fee\u6539\uff0c\u9700\u8981\u5728\u5ba3\u544a\u7684\u6642\u5019\u591a\u52a0\u4e00\u500b\u5f62\u5bb9\u8a5e ",(0,s.jsx)(e.code,{children:"mut"})," \uff0c\u8ddf Rust \u8aaa\u9019\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let mut age = 20;    // \u52a0\u4e0a\u4e86 mut \u4fee\u98fe\r\n    println!("{}", age);\r\n\r\n    age = 18;\r\n    println!("{}", age);\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u6a23\u7528\u8d77\u4f86\u5c31\u8ddf\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u7684\u8b8a\u6578\u5dee\u4e0d\u591a\u50cf\u4e86\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0d\u8981\u70ba\u4e86\u6015\u9ebb\u7169\u6216\u8caa\u5716\u4e00\u6642\u4fbf\u5229\uff0c\u6709 ",(0,s.jsx)(e.code,{children:"mut"})," \u53ef\u4ee5\u7528\u5c31\u6bcf\u500b\u90fd ",(0,s.jsx)(e.code,{children:"mut"})," \u4e0b\u53bb\uff0c\u9019\u6a23\u5c31\u8f9c\u8ca0\u4e86 Rust \u7d66\u4f60 ",(0,s.jsx)(e.code,{children:"mut"})," \u7684\u539f\u610f\u4e86\uff0c\u9019\u6a23\u4e00\u4f86\u5929\u751f\u518d\u5b89\u5168\u7684\u7a0b\u5f0f\u8a9e\u8a00\u4e5f\u6703\u88ab\u4f60\u5beb\u7684\u5f88\u4e0d\u5b89\u5168\u3002\u5982\u679c\u4f60\u5ba3\u544a\u8b8a\u6578\u7684\u6642\u5019\u771f\u7684\u9019\u6a23\u505a\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let mut age = 20;     // \u5ba3\u544a\u4e86 mut \u4f46\u5f8c\u9762\u6c92\u6709\u771f\u7684\u6539\r\n    println!("{}", age);\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u8aaa\u8981 ",(0,s.jsx)(e.code,{children:"mut"})," \u4f46\u5f8c\u4f86\u6c92\u6709\u771f\u7684\u66f4\u6539\u7684\u8a71\uff0c\u7a0b\u5f0f\u57f7\u884c\u662f\u4e0d\u6703\u932f\u5566\uff0c\u4f46 Rust \u7de8\u8b6f\u5668\u5c31\u53c8\u6703\u51fa\u4f86\u62b1\u6028\u4e86\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)\r\nwarning: variable does not need to be mutable\r\n --\x3e src/main.rs:2:9\r\n  |\r\n2 |     let mut age = 20;\r\n  |         ----^^^\r\n  |         |\r\n  |         help: remove this `mut`\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u4f60\u60f3\u7684\u5230\u5077\u5403\u6b65 Rust \u7de8\u8b6f\u5668\u4e5f\u60f3\u7684\u5230\uff0c\u6240\u4ee5 Rust \u8acb\u4f60\u628a\u9019\u500b ",(0,s.jsx)(e.code,{children:"mut"})," \u62ff\u6389\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u4f5c\u7528\u57dfscope",children:"\u4f5c\u7528\u57df\uff08Scope\uff09"}),"\n",(0,s.jsx)(e.p,{children:"scope \u662f\u6307\u8b8a\u6578\u5728\u7a0b\u5f0f\u78bc\u4e2d\u53ef\u898b\u7684\u7bc4\u570d\uff0c\u9019\u500b\u5728\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u88e1\u4e5f\u90fd\u6709\u76f8\u540c\u7684\u6982\u5ff5\uff0c\u4ee5\u5e95\u4e0b\u9019\u500b\u4f8b\u5b50\u4f86\u8aaa\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let a = 10;\r\n\r\n    if true {\r\n        println!("{}", a);  // \u9019\u500b block \u88e1\u9762\u6c92\u6709\u8b8a\u6578 a\uff0c\u6240\u4ee5\u627e\u5230\u5916\u9762\u7684 a\r\n    }\r\n\r\n    println!("{}", a);\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 ",(0,s.jsx)(e.code,{children:"if"})," \u5340\u584a\u88e1\u8a66\u8457\u60f3\u8981\u5370\u51fa\u8b8a\u6578 ",(0,s.jsx)(e.code,{children:"a"}),"\uff0c\u4f46\u5728\u9019\u500b\u5340\u584a\u88e1\u4e26\u6c92\u6709\u9019\u500b\u8b8a\u6578\uff0cRust \u6703\u8a66\u8457\u627e\u5916\u9762\u4e00\u5c64\uff0c\u7136\u5f8c\u5c31\u6703\u627e\u5230 ",(0,s.jsx)(e.code,{children:"10"}),"\uff1b\u76f8\u5c0d\u7684\uff0c\u5982\u679c\u8a72\u5340\u584a\u88e1\u9762\u6709\u8a72\u8b8a\u6578\u7684\u5b58\u5728\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let a = 10;\r\n\r\n    if true {\r\n        let a = 20;\r\n        println!("{}", a);  // \u5728 block \u88e1\u6709\u8b8a\u6578 a\uff0c\u6240\u4ee5\u5370\u51fa 20\r\n    }\r\n\r\n    println!("{}", a);  // \u4e0d\u6703\u53d7 if \u88e1\u7684\u5ba3\u544a\u6240\u5f71\u97ff\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5c31\u6703\u53d6\u7528\u8a72\u5340\u584a\u88e1\u7684\u8b8a\u6578\uff0c\u800c\u4e14\u4e0d\u6703\u5f71\u97ff\u5230\u5916\u5c64\u7684\u540c\u540d\u8b8a\u6578\u3002Rust \u7684\u8b8a\u6578\u5728\u96e2\u958b block \u4e4b\u5f8c\u5c31\u7121\u6cd5\u518d\u4f7f\u7528\uff0c\u6240\u4ee5\u5982\u679c\u9019\u6a23\u5beb\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    if true {\r\n        let a = 20;\r\n    }\r\n\r\n    println!("{}", a);\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6703\u5f97\u5230\u9019\u500b\u7d50\u679c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'$ cargo run\r\n   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)\r\nerror[E0425]: cannot find value `a` in this scope\r\n --\x3e src/main.rs:6:20\r\n  |\r\n6 |     println!("{}", a);\r\n  |                    ^\r\n  |\r\nhelp: the binding `a` is available in a different scope in the same function\r\n --\x3e src/main.rs:3:13\r\n  |\r\n3 |         let a = 20;\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4ed4\u7d30\u770b\u5c31\u6703\u767c\u73fe\u9664\u4e86\u4e0a\u534a\u6bb5\u7684\u932f\u8aa4\u8a0a\u606f\u5916\uff0c\u4e0b\u534a\u6bb5\u7684\u8a0a\u606f\u770b\u8d77\u4f86\u6709\u731c\u5230\u4f60\u60f3\u8981\u505a\u7684\u4e8b\uff0cRust \u7684\u7de8\u8b6f\u5668\u662f\u771f\u7684\u6eff\u53b2\u5bb3\u7684\u3002\r\n\u9810\u8a2d\u4e0d\u80fd\u4fee\u6539\u7684 ",(0,s.jsx)(e.code,{children:"let"})," \u8b8a\u6578\u597d\u50cf\u8ddf\u5e38\u6578\u4e00\u6a23\uff0c\u90a3\u9ebc\u9084\u9700\u8981\u5e38\u6578\u55ce\uff1f"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5e38\u6578constant",children:"\u5e38\u6578\uff08Constant\uff09"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Rust \u5ba3\u544a\u5e38\u6578\u662f\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"const"})," \u95dc\u9375\u5b57\uff0c\u4e0d\u904e\u8ddf ",(0,s.jsx)(e.code,{children:"let"})," \u5ba3\u544a\u8b8a\u6578\u4e0d\u540c\u7684\u662f\uff0c\u5e38\u6578\u6c92\u6709 ",(0,s.jsx)(e.code,{children:"mut"})," \u7684\u8a2d\u8a08\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0c\u5e38\u6578\u4e00\u958b\u59cb\u5c31\u4e00\u5b9a\u8981\u7d66\u5b9a\u503c\uff0c\u800c\u4e14 Rust \u9084\u6703\u8981\u6c42\u4f60\u628a\u578b\u5225\u8b1b\u6e05\u695a\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"fn main() {\r\n    const a = 10;\r\n}\r\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"Rust \u4e0d\u6703\u5e6b\u5e38\u6578\u63a8\u65b7\u578b\u5225\uff0c\u6240\u4ee5\u4f60\u5f97\u660e\u660e\u767d\u767d\u7684\u8b1b\u6e05\u695a\uff0c\u4e0d\u7136 Rust \u6703\u7d66\u4f60\u4ee5\u4e0b\u7684\u932f\u8aa4\u8a0a\u606f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)\r\nerror: missing type for `const` item\r\n --\x3e src/main.rs:2:12\r\n  |\r\n2 |     const a = 10;\r\n  |            ^ help: provide a type for the constant: `: i32`\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u7684\u7de8\u8b6f\u5668\u5c0d\u5e38\u6578\u7684\u547d\u540d\u65b9\u5f0f\u4e5f\u6703\u7ba1\uff0c\u4f8b\u5982\u5ba3\u544a\u4e00\u500b\u5e38\u6578 ",(0,s.jsx)(e.code,{children:"my_age"})," \uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    const my_age: u8 = 10;\r\n    println!("{}", my_age);\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7a0b\u5f0f\u9084\u662f\u53ef\u4ee5\u57f7\u884c\uff0c\u4f46 Rust \u6703\u7d66\u4f60\u8b66\u544a\u8a0a\u606f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling hello-rust v0.1.0 (/private/tmp/hello-rust)\r\nwarning: constant `my_age` should have an upper case name\r\n --\x3e src/main.rs:2:11\r\n  |\r\n2 |     const my_age: u8 = 10;\r\n  |           ^^^^^^ help: convert the identifier to upper case: `MY_AGE`\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u5e0c\u671b\u4f60\u5728\u547d\u540d\u5e38\u6578\u7684\u6642\u5019\u4f7f\u7528",(0,s.jsx)(e.strong,{children:"\u5168\u5927\u5beb\u82f1\u6587"}),"\uff0c\u5fc5\u8981\u7684\u6642\u5019\u7528\u5e95\u7dda ",(0,s.jsx)(e.code,{children:"_"})," \u5206\u9694\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u7c21\u55ae\u7684\u5217\u8209\u5e7e\u9ede\u5e38\u6578\u8ddf\u8b8a\u6578\u7684\u5dee\u5225\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5e38\u6578\u662f\u56fa\u5b9a\u7684\u503c\uff0c\u4e00\u958b\u59cb\u9700\u8981\u6307\u5b9a\u578b\u5225\u4e26\u4e14\u7d66\u5b9a\u4e00\u500b\u503c\uff1b\u8b8a\u6578\u53ef\u4ee5\u4e0d\u7528\u660e\u78ba\u7684\u6307\u5b9a\u578b\u5225\u6216\u7d66\u5b9a\u503c\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8b8a\u6578\u7684\u503c\u53ef\u4ee5\u5728\u9700\u8981\u7684\u6642\u5019\u4fee\u6539\uff0c\u4f46\u5e38\u6578\u7684\u503c\u7d66\u5b9a\u4e4b\u5f8c\u5c31\u4e0d\u80fd\u4fee\u6539\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["\u5e38\u6578\u7684\u540d\u7a31\u901a\u5e38\u4f7f\u7528\u5168\u5927\u5beb\u5b57\u6bcd\u548c\u5e95\u7dda ",(0,s.jsx)(e.code,{children:"_"})," \u4f86\u547d\u540d\uff0c\u4f46\u8b8a\u6578\u5247\u5efa\u8b70\u4f7f\u7528\u86c7\u5f0f\u547d\u540d\u6cd5\uff08snake_case\uff09\u3002"]}),"\n"]})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>a});var s=r(6540);const t={},l=s.createContext(t);function i(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);