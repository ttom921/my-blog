"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[2116],{5472:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>c,toc:()=>u});var s=r(4848),i=r(8453);const t={"\uff03id":"doc-markdown",title:"21-rust_\u6a21\u7d44_Module",description:"_\u6a21\u7d44_Module",keywords:["rust"],last_update:{date:"5/07/2024",author:"ttom"}},d=void 0,c={id:"\u5b78\u7fd2/rust/rustbasic/rust_\u6a21\u7d44_Module",title:"21-rust_\u6a21\u7d44_Module",description:"_\u6a21\u7d44_Module",source:"@site/docs/\u5b78\u7fd2/rust/rustbasic/21-rust_\u6a21\u7d44_Module.md",sourceDirName:"\u5b78\u7fd2/rust/rustbasic",slug:"/\u5b78\u7fd2/rust/rustbasic/rust_\u6a21\u7d44_Module",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u6a21\u7d44_Module",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{"\uff03id":"doc-markdown",title:"21-rust_\u6a21\u7d44_Module",description:"_\u6a21\u7d44_Module",keywords:["rust"],last_update:{date:"5/07/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"20-rust_\u6e2c\u8a66_Test",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u6e2c\u8a66_Test"},next:{title:"22-rust_\u5957\u4ef6\uff3fCrate",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u5957\u4ef6\uff3fCrate"}},l={},u=[{value:"\u6a21\u7d44",id:"\u6a21\u7d44",level:2},{value:"\u5927\u8178\u5305\u5c0f\u8178\u4e4b\u6a21\u7d44\u88e1\u7684\u6a21\u7d44",id:"\u5927\u8178\u5305\u5c0f\u8178\u4e4b\u6a21\u7d44\u88e1\u7684\u6a21\u7d44",level:3},{value:"\u4e0d\u540c\u7684\u6a21\u7d44",id:"\u4e0d\u540c\u7684\u6a21\u7d44",level:3}];function o(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u73fe\u4ee3\u6bd4\u8f03\u6210\u719f\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u7576\u5c08\u6848\u898f\u6a21\u5927\u5230\u4e00\u5b9a\u7a0b\u5ea6\u4e4b\u5f8c\uff0c\u901a\u5e38\u5c31\u6703\u6709\u6a21\u7d44\u5316\u7684\u9700\u6c42\uff0c\u53ef\u80fd\u662f\u5206\u958b\u5beb\u5728\u4e0d\u540c\u7684\u6a94\u6848\u88e1\uff0c\u6216\u662f\u76f4\u63a5\u7368\u7acb\u8b8a\u6210\u4e00\u500b\u5957\u4ef6\u3002\u6a21\u7d44\u5316\u7684\u76ee\u7684\u53ef\u4ee5\u8b93\u7a0b\u5f0f\u78bc\u66f4\u6709\u7d44\u7e54\uff0c\u4e5f\u66f4\u5bb9\u6613\u91cd\u8907\u4f7f\u7528\u53ca\u7dad\u8b77\uff0c\u7576\u7136\uff0c\u9019\u7a2e\u6a21\u7d44\u5316\u7684\u8a2d\u8a08 Rust \u4e5f\u4e00\u5b9a\u6709\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6a21\u7d44",children:"\u6a21\u7d44"}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 Rust \u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"mod"})," \u95dc\u9375\u5b57\u4f86\u5efa\u7acb\u6a21\u7d44\uff0c\u5beb\u8d77\u4f86\u5927\u6982\u6703\u50cf\u9019\u6a23\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    fn hi() {\r\n        println!("Hi, Rust");\r\n    }\r\n\r\n    fn hey() {\r\n        println!("Hey Rust");\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728 ",(0,s.jsx)(e.code,{children:"mod"})," \u88e1\u9762\u5c31\u53ef\u4ee5\u653e\u4f60\u60f3\u653e\u7684\u51fd\u6578\u3002\u5982\u679c\u8981\u547c\u53eb\u5305\u5728\u6a21\u7d44\u88e1\u7684\u51fd\u6578\uff0c\u8981\u9023\u540d\u5e36\u59d3\u7684\u4e00\u8d77\u7528\uff0c\u50cf\u9019\u6a23\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"greeting::hi();\r\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u57f7\u884c\u4e86\u5c31\u6703\u51fa\u73fe\u932f\u8aa4\u8a0a\u606f\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"$ cargo run\r\nerror[E0603]: function `hi` is private\r\n2 |     greeting::hi()\r\n  |               ^^ private function\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u7de8\u8b6f\u5668\u63d0\u9192\u4f60\u9019\u662f\u4e00\u500b\u79c1\u6709\uff08Private\uff09\u51fd\u6578\uff0c\u9019\u662f\u56e0\u70ba\u5982\u679c\u6c92\u7279\u5225\u4fee\u98fe\u7684\u8a71\uff0c",(0,s.jsx)(e.code,{children:"mod"})," \u88e1\u7684\u51fd\u6578\u9810\u8a2d\u5c31\u662f\u79c1\u6709\u7684\uff0c\u79c1\u6709\u51fd\u6578\u53ea\u80fd\u5728\u6a21\u7d44\u88e1\u88ab\u547c\u53eb\uff0c\u4e0d\u80fd\u76f4\u63a5\u9019\u6a23\u53d6\u7528\uff0c\u9019\u7a2e\u5c01\u88dd\u7684\u6982\u5ff5\u5728\u5927\u90e8\u4efd\u652f\u63f4\u7269\u4ef6\u5c0e\u5411\u7684\u7a0b\u5f0f\u8a9e\u8a00\u4e5f\u90fd\u6709\u985e\u4f3c\u7684\u8a2d\u8a08\u3002\u4f60\u53ef\u4ee5\u52a0\u4e0a\u500b ",(0,s.jsx)(e.code,{children:"pub"})," \u8ddf Rust \u8aaa\u9019\u662f\u4e00\u500b\u516c\u958b\uff08Public\uff09\u7684\u51fd\u6578\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    pub fn hi() {\r\n        println!("Hi, Rust");\r\n    }\r\n\r\n    fn hey() {\r\n        println!("Hey Rust");\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u6a23\u5c31\u53ef\u4ee5\u4e86\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5927\u8178\u5305\u5c0f\u8178\u4e4b\u6a21\u7d44\u88e1\u7684\u6a21\u7d44",children:"\u5927\u8178\u5305\u5c0f\u8178\u4e4b\u6a21\u7d44\u88e1\u7684\u6a21\u7d44"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"mod"})," \u88e1\u9664\u4e86\u53ef\u4ee5\u653e\u51fd\u6578\uff0c\u9084\u53ef\u4ee5\u518d\u7e7c\u7e8c\u5305\u5176\u5b83\u7684\u6a21\u7d44\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    mod a {\r\n        mod b {\r\n            pub fn hi() {\r\n                println!("Hi, Rust");\r\n            }\r\n        }\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u500b\u4f8b\u5b50\u662f\u6709\u9ede\u8a87\u5f35\u4e86\uff0c\u4f46\u9019\u6a23\u4e00\u5c64\u4e00\u5c64\u5f80\u88e1\u9762\u5305\u662f\u6c92\u554f\u984c\u7684\u3002\u8981\u547c\u53eb ",(0,s.jsx)(e.code,{children:"hi()"})," \u51fd\u6578\uff0c\u540c\u6a23\u4e5f\u662f\u8981\u9023\u540d\u5e36\u59d3\u7684\u547c\u53eb\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"greeting::a::b::hi()\r\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f46\u57f7\u884c\u4e4b\u5f8c\u5c31\u53c8\u6703\u51fa\u932f\u4e86..."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-cpp",children:"$ cargo run\r\nerror[E0603]: module `a` is private\r\n2 |     greeting::a::b::hi()\r\n  |               ^     -- function `hi` is not publicly re-exported\r\n  |               |\r\n  |               private module\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u518d\u6b21\u8df3\u51fa\u4f86\u8ddf\u4f60\u8aaa\u9019\u662f\u79c1\u6709\u7684\uff0c\u4f46\u4ed4\u7d30\u770b\uff0c\u4e26\u4e0d\u662f\u51fd\u6578\u662f\u79c1\u6709\u7684\uff0c\u800c\u662f\u6a21\u7d44\u662f\u79c1\u6709\u7684\u3002\u540c\u6a23\u8981\u8b93\u5b83\u8b8a\u6210\u516c\u958b\u7684\uff0c\u4e5f\u662f\u52a0\u4e0a\u500b ",(0,s.jsx)(e.code,{children:"pub"})," \u5c31\u884c\u4e86\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    pub mod a {\r\n        pub mod b {\r\n            pub fn hi() {\r\n                println!("Hi, Rust");\r\n            }\r\n        }\r\n    }\r\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u6a23\u5c31\u53ef\u4ee5\u4e86\u3002\u4f46\u89ba\u5f97\u6bcf\u6b21\u90fd\u5f97\u9023\u540d\u5e36\u59d3\u7684\u547c\u53eb\u6709\u9ede\u56c9\u55e6\uff0c\u53ef\u4ee5\u9069\u6642\u7684\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"use"})," \u95dc\u9375\u5b57\u4f86\u7c21\u5316\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use greeting::a::b::hi;\r\n\r\nfn main() {\r\n    hi();\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u51fd\u6578\u662f\u5728\u540c\u4e00\u500b\u6a21\u7d44\u88e1\uff0c\u60f3\u8981\u4e00\u6b21 ",(0,s.jsx)(e.code,{children:"use"})," \u591a\u500b\u7684\u8a71\uff0c\u4e5f\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use greeting::a::b::{hey, hi};\r\n\r\nfn main() {\r\n    hi();\r\n    hey();\r\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4e0d\u540c\u7684\u6a21\u7d44",children:"\u4e0d\u540c\u7684\u6a21\u7d44"}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679c\u5728\u6a21\u7d44\u88e1\u7684\u51fd\u6578\u60f3\u8981\u547c\u53eb\u5176\u5b83\u6a21\u7d44\u88e1\u7684\u51fd\u6578\u7684\u8a71\uff0c\u50cf\u9019\u6a23\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    pub fn hi() {\r\n        // \u60f3\u8981\u5728\u9019\u88e1\u547c\u53eb loudly \u51fd\u6578\r\n    }\r\n}\r\n\r\nmod say_something {\r\n    pub fn loudly(message: &str) {\r\n        println!("{}!!!", message.to_uppercase());\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u56e0\u70ba ",(0,s.jsx)(e.code,{children:"loudly()"})," \u662f\u5728\u5225\u4eba\u5bb6\uff0c\u6240\u4ee5\u5f97\u5f9e\u81ea\u5df1\u7684\u6a21\u7d44\u5148\u8d70\u51fa\u53bb\uff0c\u518d\u8d70\u9032 ",(0,s.jsx)(e.code,{children:"say_something"})," \u6a21\u7d44\u88e1\u3002\u9019\u88e1\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"super"})," \u95dc\u9375\u5b57\u5f80\u4e0a\u5c64\u8d70\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    pub fn hi() {\r\n        super::say_something::loudly("rust");\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u6a23\u5c31\u53ef\u4ee5\u547c\u53eb\u5230\u4e86\u3002\u9664\u4e86 ",(0,s.jsx)(e.code,{children:"super"})," \u4e4b\u5916\uff0c\u4ee5\u4e0a\u9762\u7684\u7bc4\u4f8b\u4f86\u8aaa\uff0c\u9084\u53ef\u4ee5\u7528\u53e6\u4e00\u7a2e\u5beb\u6cd5\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'mod greeting {\r\n    pub fn hi() {\r\n        crate::say_something::loudly("rust");\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u96d6\u7136\u7528 ",(0,s.jsx)(e.code,{children:"super"})," \u8ddf ",(0,s.jsx)(e.code,{children:"crate"})," \u57f7\u884c\u525b\u597d\u5728\u9019\u908a\u90fd\u4e0d\u6703\u51fa\u932f\uff0c\u4f46\u5b83\u5011\u5169\u500b\u7684\u610f\u7fa9\u4e0d\u592a\u4e00\u6a23\uff1a"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"super"})," \u662f\u6307\u76ee\u524d\u9019\u500b\u6a21\u7d44\u7684\u4e0a\u4e00\u5c64\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"crate"})," \u6307\u7684\u662f\u7576\u524d\u5c08\u6848\u7684\u7684\u6700\u4e0a\u5c64\u6a21\u7d44\u3002"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>c});var s=r(6540);const i={},t=s.createContext(i);function d(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);