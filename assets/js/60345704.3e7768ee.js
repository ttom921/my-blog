"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4256],{9469:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var l=r(4848),s=r(8453);const t={"\uff03id":"doc-markdown",title:"14-rust_\u7279\u5fb5_Trait",description:"_\u7279\u5fb5_Trait",keywords:["rust"],last_update:{date:"4/16/2024",author:"ttom"}},i=void 0,c={id:"\u5b78\u7fd2/rust/rustbasic/rust_\u7279\u5fb5_Trait",title:"14-rust_\u7279\u5fb5_Trait",description:"_\u7279\u5fb5_Trait",source:"@site/docs/\u5b78\u7fd2/rust/rustbasic/14-rust_\u7279\u5fb5_Trait.md",sourceDirName:"\u5b78\u7fd2/rust/rustbasic",slug:"/\u5b78\u7fd2/rust/rustbasic/rust_\u7279\u5fb5_Trait",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u7279\u5fb5_Trait",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{"\uff03id":"doc-markdown",title:"14-rust_\u7279\u5fb5_Trait",description:"_\u7279\u5fb5_Trait",keywords:["rust"],last_update:{date:"4/16/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"12-rust_\u751f\u547d\u9031\u671f_Lifetime",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u751f\u547d\u9031\u671f_Lifetime"},next:{title:"rust\u7279\u5225\u8a9e\u6cd5",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rust\u7279\u5225\u8a9e\u6cd5"}},d={},a=[{value:"\u7269\u4ef6\u5c0e\u5411\uff08Object-Oriented\uff09",id:"\u7269\u4ef6\u5c0e\u5411object-oriented",level:2},{value:"\u4ec0\u9ebc\u662f Trait\uff1f",id:"\u4ec0\u9ebc\u662f-trait",level:2},{value:"\u5b9a\u7fa9 Trait",id:"\u5b9a\u7fa9-trait",level:2},{value:"\u5be6\u4f5c Trait",id:"\u5be6\u4f5c-trait",level:2},{value:"\u4f60\u4e0d\u5c6c\u65bc\u9019\u88e1",id:"\u4f60\u4e0d\u5c6c\u65bc\u9019\u88e1",level:3},{value:"Trait \u7684\u9810\u8a2d\u5be6\u4f5c",id:"trait-\u7684\u9810\u8a2d\u5be6\u4f5c",level:2},{value:"\u9810\u8a2d\u5be6\u4f5c\u88e1\u7684 <code>self</code>",id:"\u9810\u8a2d\u5be6\u4f5c\u88e1\u7684-self",level:3},{value:"\u4f60\u6703\u98db\uff0c\u6211\u6703\u98db\uff0c\u5927\u5bb6\u90fd\u662f\u5c0f\u98db\u4fe0\uff01",id:"\u4f60\u6703\u98db\u6211\u6703\u98db\u5927\u5bb6\u90fd\u662f\u5c0f\u98db\u4fe0",level:2},{value:"\u540c\u6642\u5be6\u4f5c\u591a\u500b\u7279\u5fb5",id:"\u540c\u6642\u5be6\u4f5c\u591a\u500b\u7279\u5fb5",level:3}];function o(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u4ecb\u7d39\u7684\u4e3b\u984c\u662f\u300c\u7279\u5fb5\uff08Trait\uff09\u300d\uff0cTrait \u5728 Rust \u88e1\u5f88\u5e38\u51fa\u73fe\uff0c\u5982\u679c\u80fd\u5920\u7406\u89e3 Trait \u7684\u7528\u9014\u8ddf\u8a9e\u6cd5\uff0c\u61c9\u8a72\u5c31\u66f4\u80fd\u770b\u61c2\u5176\u5b83\u4eba\u5beb\u7684\u7a0b\u5f0f\u78bc\u6216\u751a\u81f3\u662f Rust \u672c\u8eab\u7684\u539f\u59cb\u78bc\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u7269\u4ef6\u5c0e\u5411object-oriented",children:"\u7269\u4ef6\u5c0e\u5411\uff08Object-Oriented\uff09"}),"\n",(0,l.jsxs)(n.p,{children:["\u5047\u8a2d\u6211\u5beb\u4e86\u4e00\u500b ",(0,l.jsx)(n.code,{children:"Cat"})," \u985e\u5225\u8ddf\u4e00\u500b ",(0,l.jsx)(n.code,{children:"Dog"})," \u985e\u5225\uff0c\u4e0d\u540c\u7684\u985e\u5225\u901a\u5e38\u6703\u6709\u5404\u81ea\u7684\u884c\u70ba\uff0c\u4f46\u5982\u679c\u5b83\u5011\u6709\u5171\u540c\u7684\u884c\u70ba\u7684\u8a71\uff0c\u5728\u7269\u4ef6\u5c0e\u5411\u7684\u4e16\u754c\u89c0\u88e1\uff0c\u6211\u5011\u901a\u5e38\u6703\u53e6\u5916\u958b\u4e00\u500b ",(0,l.jsx)(n.code,{children:"Animal"})," \u985e\u5225\uff0c\u628a\u5171\u540c\u7684\u884c\u70ba\u5beb\u5728\u88e1\u9762\uff0c\u518d\u8b93 ",(0,l.jsx)(n.code,{children:"Cat"})," \u8207 ",(0,l.jsx)(n.code,{children:"Dog"})," \u985e\u5225\u53bb\u7e7c\u627f\u5b83\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["Rust \u88e1\u4e26\u6c92\u6709\u985e\u5225\u7684\u8a2d\u8a08\uff0c\u6bd4\u8f03\u63a5\u8fd1\u7684\u5927\u6982\u5c31\u662f\u6211\u5011\u5728\u524d\u9762\u7ae0\u7bc0\u66fe\u7d93\u4ecb\u7d39\u904e\u7684 Struct\uff0c\u642d\u914d ",(0,l.jsx)(n.code,{children:"impl"})," \u5e6b Struct \u52a0\u4e00\u4e9b\u529f\u80fd\uff0c\u7528\u8d77\u4f86\u5c31\u6703\u6709\u9ede\u50cf\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u88e1\u9762\u7684 ",(0,l.jsx)(n.code,{children:"class"})," \u4e86\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7269\u4ef6\u5c0e\u5411\u88e1\u7684\u7e7c\u627f\u96d6\u7136\u7528\u8d77\u4f86\u5f88\u65b9\u4fbf\uff0c\u4f46\u4e5f\u6709\u5b83\u7684\u554f\u984c\u5728\uff0c\u4f8b\u5982\u985e\u5225 ",(0,l.jsx)(n.code,{children:"Bird"})," \u5b83\u6709\u98db\u884c\u529f\u80fd\uff0c\u5982\u679c\u6211\u60f3\u8981 ",(0,l.jsx)(n.code,{children:"Cat"})," \u4e5f\u6703\u98db\u7684\u8a71\uff0c\u7c21\u55ae\u7684\u505a\u6cd5\u5c31\u662f\u53ea\u8981\u8b93 ",(0,l.jsx)(n.code,{children:"Cat"})," \u53bb\u53bb\u7e7c\u627f ",(0,l.jsx)(n.code,{children:"Bird"})," \u985e\u5225\u5c31\u597d\u4e86\u3002\u4f46\u662f\uff0c\u53ea\u662f\u70ba\u4e86\u8981\u6703\u98db\u5c31\u5f97\u53bb\u7576 ",(0,l.jsx)(n.code,{children:"Bird"})," \u7684\u5f8c\u4ee3\u55ce\uff1f\u70ba\u4e86\u89e3\u6c7a\u9019\u7a2e\u7e7c\u627f\u7684\u554f\u984c\uff0c\u6709\u4e9b\u7a0b\u5f0f\u8a9e\u8a00\u6709\u6a21\u7d44\uff08Module\uff09\u6216\u4ecb\u9762\uff08Interface\uff09\u7684\u8a2d\u8a08\uff0c\u4f8b\u5982\u6211\u5011\u53ef\u4ee5\u628a\u98db\u884c\u7684\u529f\u80fd\u5beb\u5728\u98db\u884c\u6a21\u7d44\u88e1\u9762\uff0c",(0,l.jsx)(n.code,{children:"Cat"})," \u53ea\u8981\u628a\u9019\u500b\u98db\u884c\u6a21\u7d44\u639b\u5728\u8eab\u4e0a\u5b83\u5c31\u80fd\u98db\u4e86\uff0c\u800c\u4e14\u5b83\u9084\u662f\u53ef\u4ee5\u7576\u5b83\u7684 ",(0,l.jsx)(n.code,{children:"Cat"}),"\uff0c\u8b8a\u6210\u4e00\u96bb\u98db\u5929\u8c93\u3002\u5982\u679c ",(0,l.jsx)(n.code,{children:"Dog"})," \u6216 ",(0,l.jsx)(n.code,{children:"Fish"})," \u4e5f\u60f3\u8981\u6703\u98db\uff0c\u5c31\u81ea\u5df1\u62ff\u53bb\u639b\uff0c\u5927\u5bb6\u90fd\u80fd\u958b\u5fc3\u7684\u505a\u81ea\u5df1\uff0c\u4e0d\u9700\u8981\u7576 ",(0,l.jsx)(n.code,{children:"Bird"})," \u7684\u5f8c\u4ee3\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5728 Rust \u6c92\u6709\u4ecb\u9762\u7684\u8a2d\u8a08\uff0c\u4f46\u5b83\u7684 Trait \u7684\u8a2d\u8a08\u6709\u9ede\u63a5\u8fd1\u9019\u500b\u6982\u5ff5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4ec0\u9ebc\u662f-trait",children:"\u4ec0\u9ebc\u662f Trait\uff1f"}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u5011\u53ef\u4ee5\u5728 Rust \u88e1\u5b9a\u7fa9\u4e00\u4e9b\u884c\u70ba\uff0c\u7136\u5f8c\u5c07\u9019\u4e9b\u884c\u70ba\u5957\u7528\u5230\u4e0d\u540c\u7684\u985e\u5225\u4e0a\u3002\u5982\u679c\u5404\u4f4d\u66fe\u7d93\u5beb\u904e\u5176\u5b83\u652f\u63f4\u7269\u4ef6\u5c0e\u5411\u8a2d\u8a08\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u4f60\u53ef\u4ee5\u5c07 Trait \u60f3\u50cf\u6210\u4e00\u7a2e\u4ecb\u9762\uff08interface\uff09\u6216\u662f\u62bd\u8c61\u985e\u5225\uff08abstract class\uff09\u7684\u6982\u5ff5\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5b9a\u7fa9-trait",children:"\u5b9a\u7fa9 Trait"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Rust \u88e1\u53ef\u4ee5\u900f\u904e ",(0,l.jsx)(n.code,{children:"trait"})," \u95dc\u9375\u5b57\u4f86\u5b9a\u7fa9 Trait\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"trait Flyable {\r\n    fn fly(&self);\r\n}\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"Trait \u7684\u547d\u540d\u6163\u4f8b\u6c92\u786c\u6027\u898f\u5b9a\uff0c\u4f46\u770b\u5230\u73fe\u5728\u4f60\u61c9\u8a72\u591a\u5c11\u8a8d\u8b58 Rust \u7de8\u8b6f\u5668\u7684\u500b\u6027\u4e86\uff0cRust \u53c8\u6703\u518d\u6b21\u300c\u9f13\u52f5\u300d\u4f60\u8981\u7528\u5927\u5beb\u7684\u99dd\u5cf0\u5f0f\u547d\u540d\u6cd5\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u5728 Trait \u88e1\u9762\u53ea\u8981\u5beb\u51fd\u6578\u7c3d\u540d\u5c31\u597d\uff0c\u4e0d\u4e00\u5b9a\u8981\u628a\u5be6\u969b\u7684\u529f\u80fd\u5beb\u51fa\u4f86\uff0c\u5982\u679c\u51fd\u6578\u6709\u56de\u50b3\u503c\u7684\u8a71\uff0c\u4e5f\u8981\u660e\u78ba\u7684\u628a\u56de\u50b3\u503c\u7684\u578b\u614b\u5beb\u6e05\u695a\u3002\u5728\u4e0a\u9762\u7684\u7bc4\u4f8b\u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"fly(&self)"})," \uff0c\u4e0d\u77e5\u9053\u5927\u5bb6\u8a18\u4e0d\u8a18\u5f97\u5728 Struct \u7ae0\u7bc0\u4ecb\u7d39\u904e\u7684\u5167\u5bb9\uff0c\u6709\u52a0 ",(0,l.jsx)(n.code,{children:"&self"})," \u8868\u793a\u9019\u500b\u6703\u662f\u5be6\u9ad4\u65b9\u6cd5\uff0c\u57f7\u884c\u7684\u6642\u5019\u5c31\u6703\u50cf ",(0,l.jsx)(n.code,{children:"kitty.fly()"})," \u9019\u6a23\uff0c\u5982\u679c\u6c92\u6709\u52a0\u7684\u8a71\u6703\u662f\u985e\u5225\u65b9\u6cd5\uff08\u4f46 Rust \u6c92\u6709\u985e\u5225\uff09\uff0c\u7528\u8d77\u4f86\u5c31\u6703\u50cf\u662f ",(0,l.jsx)(n.code,{children:"Cat::fly()"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5b9a\u7fa9\u597d Trait \u4e4b\u5f8c\uff0c\u63a5\u8457\u4f86\u770b\u770b\u600e\u9ebc\u628a\u5b83\u7528\u5728 Struct \u4e0a\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u5be6\u4f5c-trait",children:"\u5be6\u4f5c Trait"}),"\n",(0,l.jsx)(n.p,{children:"\u5047\u8a2d\u6211\u6709\u4e00\u500b Struct \u50cf\u9019\u6a23\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"struct Cat {\r\n    name: String,\r\n    age: u8\r\n}\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u524d\u9762\u7684 Struct \u7ae0\u7bc0\u66fe\u4ecb\u7d39\u904e ",(0,l.jsx)(n.code,{children:"impl"})," \u95dc\u9375\u5b57\u53ef\u4ee5\u5e6b Struct \u52a0\u4e00\u4e9b\u65b9\u6cd5\uff0c\u5982\u679c\u8981\u628a Trait \u7528\u5728 Struct \u4e0a\u4e5f\u662f\u4e00\u6a23\u7684\u505a\u6cd5\uff0c\u53ea\u662f\u5beb\u6cd5\u7a0d\u5fae\u518d\u52a0\u4e00\u4e9b\u6599\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"impl Flyable for Cat {\r\n    // \u5be6\u4f5c\u5167\u5bb9\u5728\u9019\u88e1\r\n}\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u591a\u52a0\u4e00\u500b ",(0,l.jsx)(n.code,{children:"for"})," \u95dc\u9375\u5b57\u8868\u793a\u8981\u5e6b ",(0,l.jsx)(n.code,{children:"Cat"})," \u7d50\u69cb\u5be6\u4f5c ",(0,l.jsx)(n.code,{children:"Flyable"})," \u7684\u7279\u5fb5\u3002\u88e1\u9762\u7684\u5be6\u4f5c\u5167\u5bb9\u5c31\u8981\u7167\u7576\u6642\u5b9a\u7fa9 Trait \u7684\u6642\u5019\u51fd\u6578\u7c3d\u540d\u4e56\u4e56\u7684\u5beb\uff0c\u5982\u679c\u50cf\u4e0a\u9762\u9019\u6a23\u6c92\u5beb\u6216\u662f\u51fd\u6578\u7c3d\u540d\u5c0d\u4e0d\u8d77\u4f86\uff0cRust \u7de8\u8b6f\u5668\u90fd\u6703\u7d66\u4f60\u932f\u8aa4\u8a0a\u606f\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0046]: not all trait items implemented, missing: `fly`\r\n2  |     fn fly(&self);\r\n   |     -------------- `fly` from trait\r\n...\r\n10 | impl Flyable for Cat {\r\n   | ^^^^^^^^^^^^^^^^^^^^ missing `fly` in implementation\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5b8c\u6574\u5beb\u5b8c\u5927\u6982\u6703\u50cf\u9019\u6a23\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'impl Flyable for Cat {\r\n    fn fly(&self) {\r\n        println!("\u563f\uff0c\u6211\u662f {}\uff0c\u4f60\u770b\u6211\u6703\u98db\uff0c\u4f60\u4e0d\u6703\uff01", self.name);\r\n    }\r\n}\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u900f\u904e ",(0,l.jsx)(n.code,{children:"self"})," \u53ef\u4ee5\u53d6\u5f97 Struct \u6b04\u4f4d\u7684\u503c\uff0c\u7528\u8d77\u4f86\u5c31\u6703\u50cf\u9019\u6a23\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'let kitty = Cat { name: String::from("Kitty"), age: 18 };\r\nkitty.fly()  // \u5370\u51fa \u563f\uff0c\u6211\u662f Kitty\uff0c\u4f60\u770b\u6211\u6703\u98db\uff0c\u4f60\u4e0d\u6703\uff01\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u4f60\u4e0d\u5c6c\u65bc\u9019\u88e1",children:"\u4f60\u4e0d\u5c6c\u65bc\u9019\u88e1"}),"\n",(0,l.jsxs)(n.p,{children:["\u662f\u8aaa\uff0c\u5982\u679c\u5728 ",(0,l.jsx)(n.code,{children:"impl"})," \u7684\u904e\u7a0b\u4e2d\u5077\u6e21\u4e86\u4e0d\u5c6c\u65bc ",(0,l.jsx)(n.code,{children:"Flyable"})," \u9019\u500b\u7279\u5fb5\u61c9\u8a72\u6709\u7684\u65b9\u6cd5\u5462\uff1f\u50cf\u9019\u6a23\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'impl Flyable for Cat {\r\n    fn hey(&self) {\r\n        println!("How you doing")\r\n    }\r\n}\r\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4f60\u89ba\u5f97\u4ee5 Rust \u9019\u9ebc\u9f9c\u6bdb\u7684\u500b\u6027\u600e\u9ebc\u6703\u8b93\u4f60\u904e\uff0c\u76f4\u63a5\u5c31\u628a\u7de8\u8b6f\u904e\u7a0b\u64cb\u4e0b\u4f86\u4e86\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0407]: method `hello` is not a member of trait `Flyable`\r\n19 | /     fn hello(&self) {\r\n20 | |         println!()\r\n21 | |     }\r\n   | |_____^ not a member of trait `Flyable`\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"Rust \u7de8\u8b6f\u5668\u76f4\u767d\u7684\u8ddf\u4f60\u8aaa\u300c\u4f60\u4e0d\u5c6c\u65bc\u9019\u88e1\u300d\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"trait-\u7684\u9810\u8a2d\u5be6\u4f5c",children:"Trait \u7684\u9810\u8a2d\u5be6\u4f5c"}),"\n",(0,l.jsxs)(n.p,{children:["\u5176\u5b83 Struct \u5982\u679c\u770b\u4e86\u89ba\u5f97\u6703\u98db\u5f88\u7fa8\u6155\uff0c\u53ea\u8981\u53ef\u4ee5\u81ea\u5df1\u53bb\u5be6\u4f5c ",(0,l.jsx)(n.code,{children:"Flyable"})," \u7279\u5fb5\u5c31\u884c\u4e86\u3002\u5982\u679c ",(0,l.jsx)(n.code,{children:"Dog"})," \u8ddf ",(0,l.jsx)(n.code,{children:"Fish"})," \u7d50\u69cb\u4e5f\u90fd\u60f3\u8981\u53ef\u4ee5\u98db\uff0c\u7684\u78ba\u662f\u53ef\u4ee5\u5be6\u4f5c ",(0,l.jsx)(n.code,{children:"Flyable"})," \u7279\u5fb5\u6c92\u932f\uff0c\u4f46\u5982\u679c\u5927\u5bb6\u5be6\u4f5c\u7d50\u679c\u90fd\u4e00\u6a23\uff0c\u9019\u6a23\u611f\u89ba\u6703\u6709\u9ede\u91cd\u8907\uff1f"]}),"\n",(0,l.jsx)(n.p,{children:"Trait \u7684\u8a2d\u8a08\u76ee\u7684\u5c31\u662f\u5e0c\u671b\u5927\u5bb6\u53ef\u4ee5\u81ea\u5df1\u5be6\u4f5c\u81ea\u5df1\u7684\u7279\u5fb5\uff0c\u4f46\u5982\u679c\u7279\u5fb5\u90fd\u4e00\u6a23\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 Trait \u88e1\u5c31\u628a\u5be6\u4f5c\u529f\u80fd\u5beb\u4e0a\u53bb\uff0c\u5c31\u50cf\u9019\u6a23\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'trait Flyable {\r\n    fn fly(&self) {\r\n        println!("\u98db\u5440~\u98db\u5440~\u5c0f\u98db\u4fe0\uff01");\r\n    }\r\n}\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["Trait \u53ef\u4ee5\u76f4\u63a5\u628a\u5be6\u4f5c\u5beb\u5728\u88e1\u9762\uff0c\u9019\u9ede\u8ddf\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u7684\u4ecb\u9762\uff08Interface\uff09\u4e0d\u592a\u4e00\u6a23\u3002\u6709\u4e86\u9810\u8a2d\u5be6\u4f5c\uff0c\u5728 ",(0,l.jsx)(n.code,{children:"impl"})," \u7684\u6642\u5019\u5c31\u4e0d\u7528\u7279\u5225\u518d\u5beb\u4e86\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"impl Flyable for Dog {}\r\nimpl Flyable for Cat {}\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u7136\u5f8c\u5927\u5bb6\u5c31\u90fd\u53ef\u4ee5\u98db\u4e86\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'let kitty = Cat { name: String::from("Kitty"), age: 18 };\r\nlet lucky = Dog { name: String::from("Lucky") };\r\nkitty.fly();  \r\nlucky.fly();\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5982\u679c ",(0,l.jsx)(n.code,{children:"Cat"})," \u7d50\u69cb\u4e0d\u60f3\u8ddf\u5927\u5bb6\u4e00\u6a23\u5403\u5927\u934b\u98ef\uff0c\u4e5f\u5728\u81ea\u5df1\u7684 ",(0,l.jsx)(n.code,{children:"impl"})," \u5be6\u505a ",(0,l.jsx)(n.code,{children:"fly()"})," \u65b9\u6cd5\u4e5f\u6c92\u554f\u984c\u3002"]}),"\n",(0,l.jsxs)(n.h3,{id:"\u9810\u8a2d\u5be6\u4f5c\u88e1\u7684-self",children:["\u9810\u8a2d\u5be6\u4f5c\u88e1\u7684 ",(0,l.jsx)(n.code,{children:"self"})]}),"\n",(0,l.jsxs)(n.p,{children:["\u96d6\u7136 Trait \u88e1\u53ef\u4ee5\u76f4\u63a5\u628a\u5be6\u4f5c\u5beb\u4e0a\u53bb\uff0c\u4f46\u5982\u679c\u5728\u9810\u8a2d\u5be6\u4f5c\u88e1\u9762\u60f3\u8981\u900f\u904e ",(0,l.jsx)(n.code,{children:"self"})," \u53d6\u5f97 Struct \u7684\u6b04\u4f4d\u7684\u8a71\uff0c\u50cf\u9019\u6a23\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'trait Greeting {\r\n    fn say_hello(&self) {\r\n        println!("\u4f60\u597d\uff0c\u6211\u662f {}", self.name);\r\n    }\r\n}\r\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u57f7\u884c\u5c31\u6703\u767c\u73fe\u9019\u6a23\u7de8\u8b6f\u4e0d\u6703\u6210\u529f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0609]: no field `name` on type `&Self`\r\n1 | trait Greeting {\r\n  | -------------- type parameter 'Self' declared here\r\n2 |     fn say_hello(&self) {\r\n3 |         println!(\"\u4f60\u597d\uff0c\u6211\u662f {}\", self.name);\r\n  |                                        ^^^^\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u5982\u679c\u662f\u81ea\u5df1\u5728 ",(0,l.jsx)(n.code,{children:"impl"})," \u88e1\u5be6\u4f5c\u6c92\u554f\u984c\uff0c\u4f46\u5728\u9810\u8a2d\u5be6\u4f5c\u88e1\u5c31\u6703\u51fa\u932f\uff0c\u6703\u767c\u751f\u9019\u500b\u932f\u8aa4\u662f\u56e0\u70ba\u5728\u9810\u8a2d\u5be6\u4f5c\u88e1\u7684 ",(0,l.jsx)(n.code,{children:"self"})," \u6307\u7684\u4e26\u4e0d\u662f Struct \u672c\u8eab\uff0c\u6240\u4ee5\u81ea\u7136\u4e0d\u6703\u6709 ",(0,l.jsx)(n.code,{children:".name"})," \u6b04\u4f4d\u3002\u6709\u500b\u6bd4\u8f03\u7c21\u55ae\u7684\u89e3\u6cd5\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'trait Greeting {\r\n    fn say_hello(&self) {\r\n        println!("\u4f60\u597d\uff0c\u6211\u662f {}", self.name());\r\n    }\r\n\r\n    fn name(&self) -> &str;\r\n}\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u88e1\u653e\u4e86\u4e00\u500b ",(0,l.jsx)(n.code,{children:"name"})," \u65b9\u6cd5\u4f46\u4e0d\u5be6\u4f5c\uff0c\u7559\u5230 ",(0,l.jsx)(n.code,{children:"impl"})," \u88e1\u518d\u5be6\u4f5c\uff0c\u7136\u5f8c\u5728 ",(0,l.jsx)(n.code,{children:"say_hello()"})," \u547c\u53eb\u9019\u500b\u65b9\u6cd5\uff0c\u56e0\u70ba ",(0,l.jsx)(n.code,{children:"name"})," \u662f\u5728\u5404\u81ea\u7684 ",(0,l.jsx)(n.code,{children:"impl"})," \u88e1\u88ab\u5be6\u4f5c\u7684\uff0c\u6240\u4ee5\u5b83\u5c31\u80fd\u900f\u904e ",(0,l.jsx)(n.code,{children:"self"})," \u53d6\u5f97\u8a72\u7d50\u69cb\u7684 ",(0,l.jsx)(n.code,{children:".name"})," \u6b04\u4f4d\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"impl Greeting for Cat {\r\n    fn name(&self) -> &str {\r\n        self.name.as_str()\r\n    }\r\n}\r\n\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u9019\u6a23\u5c31\u6c92\u554f\u984c\u4e86\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"\u4f60\u6703\u98db\u6211\u6703\u98db\u5927\u5bb6\u90fd\u662f\u5c0f\u98db\u4fe0",children:"\u4f60\u6703\u98db\uff0c\u6211\u6703\u98db\uff0c\u5927\u5bb6\u90fd\u662f\u5c0f\u98db\u4fe0\uff01"}),"\n",(0,l.jsx)(n.p,{children:"Trait \u4e0d\u662f\u53ea\u6709\u5b9a\u7fa9\u65b9\u6cd5\u9019\u6a23\uff0c\u5b83\u9084\u53ef\u4ee5\u505a\u5230\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u88e1\u9762\u300c\u591a\u578b\uff08Polymorphism\uff09\u300d\u7684\u6548\u679c\u3002\u4f8b\u5982\u6211\u5beb\u4e86\u4e00\u500b\u9ad8\u7a7a\u5f48\u8df3\u7684\u65b9\u6cd5\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"fn bungee(someone) {\r\n    someone.fly();\r\n}\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u53ea\u662f\u6211\u9019\u500b\u9ad8\u7a7a\u5f48\u8df3\u6bd4\u8f03\u523a\u6fc0\u4e00\u9ede\uff0c\u662f\u6c92\u6709\u7e69\u5b50\u7684\u90a3\u7a2e\uff0c\u6240\u4ee5\u50b3\u9032\u4f86\u7684\u50a2\u4f19\u6700\u597d\u4f60\u81ea\u5df1\u6703\u98db\uff0c\u4e0d\u7136...\u3002\u4f46\u8981\u600e\u9ebc\u78ba\u4fdd\u50b3\u9032\u4f86\u7684\u53c3\u6578\u4e00\u5b9a\u6709\u5be6\u4f5c ",(0,l.jsx)(n.code,{children:"fly()"})," \u65b9\u6cd5\uff1f\u53ef\u4ee5\u9019\u6a23\u5beb\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:"fn bungee(someone: &dyn Flyable) {\r\n    someone.fly();\r\n}\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u500b ",(0,l.jsx)(n.code,{children:"&dyn"})," \u95dc\u9375\u5b57\u662f\u300c\u52d5\u614b\u5206\u767c\uff08Dynamic Dispatch\uff09\u300d\u7684\u610f\u601d\uff0c\u7d30\u7bc0\u8acb\u8b93\u6211\u7559\u5230\u5f8c\u9762\u7684\u6cdb\u578b\u7ae0\u7bc0\u518d\u4e00\u4f75\u8a73\u8ff0\u3002\u4e5f\u5c31\u662f\u8aaa\u50b3\u9032\u4f86\u7684\u4e0d\u7ba1\u662f\u963f\u8c93\u963f\u72d7\uff0c\u4efb\u4f55\u4eba\u53ea\u8981\u6709\u4e09\u767e\u842c\u7f8e\u91d1\u90fd\u53ef\u4ee5\u53c3\u52a0\u6148\u5584\u64b2\u514b\u738b\u5927\u8cfd...\u4e0d\u662f\uff0c\u662f\u53ea\u8981\u4f60\u6709 ",(0,l.jsx)(n.code,{children:"Flyable"})," \u7684\u7279\u5fb5\u5c31\u53ef\u4ee5\u73a9\u9019\u500b\u904a\u6232\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'let kitty = Cat { name: String::from("Kitty"), age: 18 };\r\nlet nancy = Cat { name: String::from("Nancy"), age: 12 };\r\n\r\nbungee(&kitty);  // \u5370\u51fa \u98db\u5440~\u98db\u5440~\u5c0f\u98db\u4fe0\uff01\r\nbungee(&nancy);  // \u5370\u51fa \u98db\u5440~\u98db\u5440~\u5c0f\u98db\u4fe0\uff01\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u56e0\u70ba ",(0,l.jsx)(n.code,{children:"Cat"})," \u6709\u5be6\u4f5c ",(0,l.jsx)(n.code,{children:"Flyable"})," \u7279\u5fb5\uff0c\u6240\u4ee5\u6c92\u554f\u984c\uff0c\u5047\u8a2d\u5982\u679c\u4f86\u500b\u6c92\u5be6\u4f5c\u7279\u5fb5\u7684 ",(0,l.jsx)(n.code,{children:"Dog"})," \u7684\u8a71\u5462\uff1a"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'let lucky = Dog { name: String::from("Lucky") };  // \u6c92\u6709\u5be6\u4f5c Flyable\r\nbungee(&lucky);\r\n\n'})}),"\n",(0,l.jsx)(n.p,{children:"Rust \u7684\u7de8\u8b6f\u5668\u6015\u51fa\u4e8b\uff0c\u6240\u4ee5\u5728\u7de8\u8b6f\u968e\u6bb5\u5c31\u628a\u5b83\u64cb\u4e0b\u4f86\u4e86\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0277]: the trait bound `Dog: Flyable` is not satisfied\r\n35 |     bungee(&lucky);\r\n   |            ^^^^^^ the trait `Flyable` is not implemented for `Dog`\r\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u932f\u8aa4\u8a0a\u606f\u6eff\u660e\u986f\u7684\uff0c\u5c31\u662f ",(0,l.jsx)(n.code,{children:"Dog"})," \u6c92\u6709\u5be6\u4f5c ",(0,l.jsx)(n.code,{children:"Flyable"})," \u7279\u5fb5\uff0c\u4e0d\u8b93\u4f60\u73a9\u9ad8\u7a7a\u5f48\u8df3\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"\u540c\u6642\u5be6\u4f5c\u591a\u500b\u7279\u5fb5",children:"\u540c\u6642\u5be6\u4f5c\u591a\u500b\u7279\u5fb5"}),"\n",(0,l.jsx)(n.p,{children:"\u6709\u4e9b\u7a0b\u5f0f\u8a9e\u8a00\u6703\u4f7f\u7528\u591a\u91cd\u7e7c\u627f\u4f86\u5be6\u73fe\u591a\u578b\uff0c\u7136\u800c\u591a\u91cd\u7e7c\u627f\u53ef\u80fd\u5c0e\u81f4\u300c\u83f1\u5f62\u7e7c\u627f\u300d\u554f\u984c\uff0c\u56e0\u6b64\u901a\u5e38\u6703\u6539\u7528\u5be6\u4f5c\u591a\u500b\u4ecb\u9762\u6216\u5f15\u5165\u591a\u500b\u6a21\u7d44\u7684\u65b9\u5f0f\u4f86\u5be6\u73fe\u591a\u578b\u7684\u6548\u679c\u3002Rust \u7684 Trait \u4e5f\u6709\u9019\u500b\u529f\u80fd\uff0cRust \u4e26\u6c92\u6709\u9650\u5b9a\u4e00\u500b Struct \u53ea\u80fd\u5be6\u4f5c\u4e00\u500b\u7279\u5fb5\uff0c\u4f60\u60f3\u8981\u5be6\u4f5c\u5e7e\u500b\u5c31\u5e7e\u500b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-rust",children:'impl Flyable for Cat {}\r\nimpl Greeting for Cat {}\r\nimpl Animal for Cat{\r\n    fn sleep(&self) {\r\n        println!("Zzzzzz");\r\n    }\r\n}\r\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u9019\u6a23 ",(0,l.jsx)(n.code,{children:"Cat"})," \u7d50\u69cb\u5c31\u540c\u6642\u64c1\u6709 ",(0,l.jsx)(n.code,{children:"Flyable"}),"\u3001",(0,l.jsx)(n.code,{children:"Greeting"})," \u4ee5\u53ca ",(0,l.jsx)(n.code,{children:"Animal"})," \u7b49\u7279\u5fb5\uff0c\u4f46\u5b83\u672c\u8eab\u9084\u662f ",(0,l.jsx)(n.code,{children:"Cat"}),"\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"Rust \u88e1 Trait \u7684\u6982\u5ff5\u67d0\u4e9b\u7a0b\u5f0f\u8a9e\u88e1\u7684\u300c\u4ecb\u9762\u300d\u6709\u9ede\u50cf\u4f46\u7528\u8d77\u4f86\u53c8\u6bd4\u4ecb\u9762\u591a\u4e86\u4e00\u4e9b\u5f48\u6027\uff0c\u6240\u4ee5\u5927\u5bb6\u77e5\u9053\u4ec0\u9ebc\u662f\u4ecb\u9762\uff0c\u53ef\u4ee5\u5148\u7528\u770b\u5f85\u4ecb\u9762\u7684\u89d2\u5ea6\u4f86\u770b\u5f85 Trait\uff0c\u4ee5\u524d\u5b78\u904e\u7684\u90a3\u53e5\uff1a"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"program to interfaces, not implementations"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u9019\u500b\u6982\u5ff5\u540c\u6a23\u53ef\u4ee5\u7528\u5728 Trait \u8eab\u4e0a\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var l=r(6540);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);