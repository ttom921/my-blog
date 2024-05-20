"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4336],{3457:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=r(4848),t=r(8453);const l={"\uff03id":"doc-markdown",title:"26-rust_\u9589\u5305_Closure",description:"_\u9589\u5305_Closure",keywords:["rust"],last_update:{date:"5/16/2024",author:"ttom"}},c=void 0,o={id:"\u5b78\u7fd2/rust/rustbasic/rust_\u9589\u5305_Closure",title:"26-rust_\u9589\u5305_Closure",description:"_\u9589\u5305_Closure",source:"@site/docs/\u5b78\u7fd2/rust/rustbasic/26-rust_\u9589\u5305_Closure.md",sourceDirName:"\u5b78\u7fd2/rust/rustbasic",slug:"/\u5b78\u7fd2/rust/rustbasic/rust_\u9589\u5305_Closure",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u9589\u5305_Closure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{"\uff03id":"doc-markdown",title:"26-rust_\u9589\u5305_Closure",description:"_\u9589\u5305_Closure",keywords:["rust"],last_update:{date:"5/16/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"25-rust_\u628a\u6771\u897f\u5370\u51fa\u4f86",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u628a\u6771\u897f\u5370\u51fa\u4f86"},next:{title:"27-rust_\u628a\u51fd\u6578\u4e1f\u4f86\u4e1f\u53bb\u7684\u9ad8\u968e\u51fd\u6578",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u628a\u51fd\u6578\u4e1f\u4f86\u4e1f\u53bb\u7684\u9ad8\u968e\u51fd\u6578"}},i={},d=[{value:"\u6355\u7372\u9644\u8fd1 Scope \u7684\u503c",id:"\u6355\u7372\u9644\u8fd1-scope-\u7684\u503c",level:2}];function a(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6211\u76f8\u4fe1\u300c\u9589\u5305\uff08Closure\uff09\u300d\u9019\u500b\u540d\u8a5e\u5c0d\u5beb JavaScript \u7684\u958b\u767c\u8005\u4f86\u8aaa\u4e0d\u964c\u751f\uff0c\u4e5f\u5f88\u5e38\u5728\u9762\u8a66\u984c\u88e1\u9762\u88ab\u62ff\u51fa\u4f86\u554f\u3002Closure \u5176\u5be6\u4e5f\u662f\u51fd\u6578\uff0c\u6bd4\u8f03\u7279\u5225\u7684\u662f\u5b83\u53ef\u4ee5\u6355\u6349\u5728\u5b83\u57f7\u884c\u7684 Scope \u88e1\u7684\u503c\u3002\u5728 Rust \u88e1 Closure \u7684\u5b9a\u7fa9\u4e5f\u6709\u9ede\u50cf\uff0c\u4f46\u4e5f\u6709\u5b83\u4e0d\u592a\u4e00\u6a23\u7684\u5730\u65b9\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 Rust \u88e1\u8981\u5b9a\u7fa9\u4e00\u500b\u51fd\u6578\uff0c\u5927\u90e8\u4efd\u6642\u5019\u6211\u5011\u6703\u7528 ",(0,s.jsx)(n.code,{children:"fn"})," \u95dc\u9375\u5b57\u4e26\u4e14\u7d66\u5b83\u4e00\u500b\u540d\u5b57\uff0c\u50cf\u662f\u9019\u6a23\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn say_something(message: &str) {\r\n    println!("{}", message);\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u7a2e\u5b9a\u7fa9\u51fd\u6578... \u55ef\uff0c\u5176\u5be6\u4e0d\u80fd\u8aaa\u662f\u5b9a\u7fa9\u51fd\u6578\uff0c\u6bd4\u8f03\u50cf\u662f\u5b9a\u7fa9\u4e00\u500b\u8b8a\u6578\u6307\u5411\uff08\u6216\u7d81\u5b9a\uff09\u5230\u67d0\u500b\u51fd\u6578\uff0c\u5728 JavaScript \u6709\u5169\u7a2e\u5beb\u6cd5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const saySomething1 = function (message) { console.log(message) };\r\nconst saySomething2 = (message) => console.log(message);\r\n\r\nsaySomething1("Hello");\r\nsaySomething2("World");\r\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728 JavaScript \u88e1\uff0c\u4e0d\u7ba1\u662f\u7528\u4e00\u822c\u7684\u51fd\u6578\u6216\u662f\u4f7f\u7528\u7bad\u982d\u51fd\u6578\uff08Arrow Function\uff09\u90fd\u53ef\u4ee5\u505a\u51fa\u9019\u500b\u6548\u679c\uff0c\u800c\u4e14\u901a\u5e38\u5728\u505a\u9019\u4ef6\u4e8b\u7684\u6642\u5019\uff0c\u56e0\u70ba\u5b83\u672c\u8eab\u5c31\u6709\u7d81\u5b9a\u4e00\u500b\u8b8a\u6578\u6216\u5e38\u6578\u540d\u5b57\u4e86\uff0c\u6240\u4ee5\u901a\u5e38\u90fd\u4e0d\u6703\u7d66\u9019\u500b\u51fd\u6578\u4e00\u500b\u540d\u5b57\uff0c\u6240\u4ee5\u5f8c\u9762\u90a3\u500b\u51fd\u6578\u53c8\u88ab\u7a31\u70ba\u300c\u533f\u540d\u51fd\u6578\uff08Anonymous Function\uff09\u300d\u3002\u8981\u80fd\u505a\u5230\u9019\u4ef6\u4e8b\uff0c\u8868\u793a\u51fd\u6578\u5728 JavaScript \u88e1\u662f\u4e00\u500b\u503c\uff08\u6216\u4e00\u7a2e\u7269\u4ef6\uff09\uff0c\u6240\u4ee5\u624d\u80fd\u505a\u5230\u628a\u8b8a\u6578\u6216\u51fd\u6578\u6307\u5b9a\u5230\u9019\u500b\u503c\u6216\u7269\u4ef6\u8eab\u4e0a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Rust \u51fd\u6578\u4e5f\u540c\u6a23\u662f\u4e00\u7b49\u516c\u6c11\uff08First-class citizen\uff09\uff0c\u6240\u4ee5\u4e5f\u80fd\u505a\u5230\u985e\u4f3c\u7684\u4e8b\uff0c\u5beb\u6cd5\u6709\u4e00\u9ede\u50cf\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let say_hello = || println!("Hello Rust");\r\nsay_hello();\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u7b49\u865f\u53f3\u624b\u908a\u7684\u5c31\u662f\u533f\u540d\u51fd\u6578\uff0c\u5728 Rust \u88e1\u7a31\u4e4b\u300c\u9589\u5305\uff08Closure\uff09\u300d\uff0c\u90a3\u500b\u770b\u8d77\u4f86\u50cf\u662f\u7d55\u5c0d\u503c\u7684 ",(0,s.jsx)(n.code,{children:"||"})," \u5beb\u6cd5\uff0c\u662f\u6307\u8981\u5e36\u9032\u53bb\u9019\u500b\u51fd\u6578\u7684\u53c3\u6578\uff0c\u4ee5\u4e0a\u4f8b\u4f86\u8aaa\uff0c\u56e0\u70ba\u6c92\u6709\u8981\u7d66\u5b83\u4efb\u4f55\u53c3\u6578\uff0c\u6240\u4ee5\u5c31 ",(0,s.jsx)(n.code,{children:"||"})," \u5c31\u884c\u4e86\u3002\u5982\u679c\u8981\u7d66\u5b83\u53c3\u6578\u7684\u8a71\uff0c\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let add_numbers = |x, y| x + y;\r\nprintln!("\u8a08\u7b97\u7d50\u679c: {}", add_numbers(1, 2));\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u770b\u60f3\u8981\u5e36\u5e7e\u500b\u53c3\u6578\uff0c\u5c31\u5728 ",(0,s.jsx)(n.code,{children:"||"})," \u88e1\u9762\u653e\u5e7e\u500b\u3002\u51fd\u6578\u672c\u9ad4\u4e0d\u5beb ",(0,s.jsx)(n.code,{children:"return"})," \u800c\u662f\u653e\u4e00\u500b Expression \u5c31\u884c\u4e86\uff0c\u5b83\u81ea\u52d5\u5c31\u6703\u662f\u9019\u500b Closure \u7684\u56de\u50b3\u503c\u3002\u5982\u679c\u7a0b\u5f0f\u78bc\u6bd4\u8f03\u8907\u96dc\u4e00\u9ede\uff0c\u8981\u5beb\u6210\u591a\u884c\u7684\u8a71\u53ef\u4ee5\u4f7f\u7528\u5927\u62ec\u865f\u5305\u8d77\u4f86\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let add_numbers = |x, y| {\r\n    println!("Hello Rust!");\r\n    println!("Hello Again!");\r\n    // \u5176\u5b83\u5be6\u4f5c\u7a0b\u5f0f\u78bc\r\n    x + y\r\n};\r\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5f8c\u7d66\u4e00\u500b Expression \u5c31\u884c\u4e86\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u770b\u5230\u9019\u88e1\u5927\u5bb6\u6709\u6c92\u6709\u611f\u89ba\u5230\u4e00\u80a1\u7570\u5e38\u7684\u8f15\u9b06\u611f\uff1f\u4e4b\u524d\u7528 ",(0,s.jsx)(n.code,{children:"fn"})," \u95dc\u9375\u5b57\u5728\u5b9a\u7fa9\u51fd\u6578\u7684\u6642\u5019\uff0c\u50b3\u5165\u53c3\u6578\u7684\u578b\u5225\u5f97\u8981\u6bcf\u500b\u90fd\u5beb\u6e05\u695a\u8b1b\u660e\u767d\uff0c\u4f46\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u88e1\uff0c\u5b83\u537b\u53ef\u4ee5\u4e0d\u7528\u5beb\u3002\u5176\u5be6\u4f60\u8981\u5beb\u4e5f\u884c\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let add_numbers = |x: i32, y: i32| x + y;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u5c31\u7b97\u4e0d\u5beb Rust \u4e5f\u80fd\u81ea\u52d5\u5e6b\u4f60\u63a8\u5c0e\u51fa\u578b\u5225\u51fa\u4f86\u3002\u54a6\uff1f\u6703\u81ea\u52d5\u63a8\u5c0e\u53c3\u6578\u578b\u5225\u7684\u8a71\uff0c\u662f\u4e0d\u662f\u6709\u9ede\u6cdb\u578b\u7684\u5473\u9053\u4e86\uff1f\u4e26\u6c92\u6709\uff0c\u7576\u8a66\u8457\u50b3\u5165\u4e0d\u540c\u578b\u5225\u7684\u6642\u5019\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let add_numbers = |x, y| x + y;\r\nprintln!("\u8a08\u7b97\u7d50\u679c: {}", add_numbers(1, 2));\r\nprintln!("\u8a08\u7b97\u7d50\u679c: {}", add_numbers(0.1, 0.2));\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u958b\u59cb\u5148\u50b3\u6574\u6578\u7d66\u5b83\uff0cRust \u6703\u63a8\u5c0e\u51fa ",(0,s.jsx)(n.code,{children:"x"})," \u8ddf ",(0,s.jsx)(n.code,{children:"y"})," \u90fd\u662f\u9810\u8a2d ",(0,s.jsx)(n.code,{children:"i32"}),"\uff0c\u4f46\u63a5\u8457\u6545\u610f\u50b3\u6d6e\u9ede\u6578\u7d66\u5b83\u7684\u6642\u5019\u5c31\u6703\u51fa\u932f\u4e86\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:'error[E0308]: arguments to this function are incorrect\r\n4 |     println!("\u8a08\u7b97\u7d50\u679c: {}", add_numbers(0.1, 0.2));\r\n  |                              ^^^^^^^^^^^ ---  --- expected integer, found floating-point number\r\n  |                                          |\r\n  |                                          expected integer, found floating-point number\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Rust \u4e26\u6c92\u6709\u652f\u63f4 Closure \u7684\u6cdb\u578b\uff0c\u9700\u8981\u6cdb\u578b\u7684\u8a71\u53ef\u4ee5\u7528 ",(0,s.jsx)(n.code,{children:"fn"})," \u4f86\u5beb\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u662f\u8aaa\uff0c\u5728 Rust \u7684\u533f\u540d\u51fd\u6578\u9019\u6a23\u5c31\u53eb Closure \u55ce\uff1f\u9019\u597d\u50cf\u8ddf\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u88e1\u7684 Closure \u4e0d\u592a\u4e00\u6a23\uff0c\u5225\u4eba\u5bb6\u7684\u597d\u50cf\u6703\u628a\u9644\u8fd1\u7684\u8b8a\u6578\u6216\u503c\u7d66\u7d81\u67b6\u9032\u53bb\u51fd\u6578\u88e1..."}),"\n",(0,s.jsx)(n.h2,{id:"\u6355\u7372\u9644\u8fd1-scope-\u7684\u503c",children:"\u6355\u7372\u9644\u8fd1 Scope \u7684\u503c"}),"\n",(0,s.jsx)(n.p,{children:"Rust \u7684 Closure \u7684\u78ba\u662f\u53ef\u4ee5\u628a\u5468\u570d\u7684\u8b8a\u6578\u7d66\u7d81\u9032\u53bb\u7684\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let n = 100;\r\nlet add_one = || n + 1;\r\n\r\nprintln!("\u7d50\u679c : {}", add_one());  // \u5370\u51fa 101\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"add_one"})," \u5f8c\u9762\u7684 Closure \u88e1\u672c\u8eab\u4e26\u6c92\u6709\u5b9a\u7fa9\u8b8a\u6578 ",(0,s.jsx)(n.code,{children:"n"}),"\uff0c\u4f46\u5b83\u9084\u662f\u53ef\u4ee5\u5370\u51fa 101\u3002\u4f60\u53ef\u80fd\u89ba\u5f97\u9019\u6c92\u4ec0\u9ebc\uff0c\u4f46\u4e00\u822c\u7684\u51fd\u6578\u662f\u505a\u4e0d\u5230\u7684\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let n = 100;\r\n\r\nfn add_one() {\r\n    return n + 1;\r\n}\r\n\r\nprintln!("\u7d50\u679c : {}", add_one());\r\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u6703\u5f97\u5230\u7684\u932f\u8aa4\u8a0a\u606f\u662f\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"error[E0434]: can't capture dynamic environment in a fn item\r\n13 |         return n + 1;\r\n   |                ^\r\n   |\r\n   = help: use the `|| { ... }` closure form instead\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u9ede\u8a2d\u8a08\u8ddf JavaScript \u4e0d\u540c\uff0cJavaScript \u6703\u76f4\u63a5\u5f80\u5916\u9762\u53d6\u5f97\u5916\u9762\u7684\u8b8a\u6578 ",(0,s.jsx)(n.code,{children:"n"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f46 Closure \u80fd\u505a\u7684\u4e8b\u4e0d\u53ea\u9019\u6a23\uff0cClosure \u5728 Rust \u662f\u4e00\u7b49\u516c\u6c11\uff0c\u5b83\u53ef\u4ee5\u88ab\u7576\u53c3\u6578\u50b3\u9032\u53e6\u4e00\u500b\u51fd\u6578\u88e1\uff0c\u4e5f\u53ef\u4ee5\u88ab\u7576\u505a\u56de\u50b3\u503c\u56de\u50b3\u56de\u4f86\uff0c\u6211\u5011\u4e0b\u500b\u7ae0\u7bc0\u518d\u4f86\u770b\u770b\u5728 Rust \u600e\u9ebc\u505a\u5230\u9019\u4ef6\u4e8b :)"})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var s=r(6540);const t={},l=s.createContext(t);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);