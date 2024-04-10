"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5378],{4699:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var s=n(4848),c=n(8453);const o={"\uff03id":"doc-markdown",title:"10-rust_\u6240\u6709\u6b0a_Ownership",description:"\u6240\u6709\u6b0a_Ownership",keywords:["rust"],last_update:{date:"4/09/2024",author:"ttom"}},l=void 0,t={id:"\u5b78\u7fd2/rust/rustbasic/rust_\u6240\u6709\u6b0a_Ownership",title:"10-rust_\u6240\u6709\u6b0a_Ownership",description:"\u6240\u6709\u6b0a_Ownership",source:"@site/docs/\u5b78\u7fd2/rust/rustbasic/10-rust_\u6240\u6709\u6b0a_Ownership.md",sourceDirName:"\u5b78\u7fd2/rust/rustbasic",slug:"/\u5b78\u7fd2/rust/rustbasic/rust_\u6240\u6709\u6b0a_Ownership",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u6240\u6709\u6b0a_Ownership",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{"\uff03id":"doc-markdown",title:"10-rust_\u6240\u6709\u6b0a_Ownership",description:"\u6240\u6709\u6b0a_Ownership",keywords:["rust"],last_update:{date:"4/09/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"09-rust_Stack\u8207Heap",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_Stack\u8207Heap"},next:{title:"11-rust_\u5207\u7247_Slice",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust_\u5207\u7247_Slice"}},i={},d=[{value:"\u6240\u6709\u6b0a\uff08Ownership\uff09",id:"\u6240\u6709\u6b0aownership",level:2},{value:"\u60f3\u8981\u55ce\uff1f\u6211\u4e0d\u8cb7\u7d66\u4f60\uff0c\u4f46\u6211\u501f\u7d66\u4f60",id:"\u60f3\u8981\u55ce\u6211\u4e0d\u8cb7\u7d66\u4f60\u4f46\u6211\u501f\u7d66\u4f60",level:3},{value:"\u501f\u4f86\u7684\u66f8\u80fd\u4e0d\u80fd\u5728\u4e0a\u9762\u5283\u7dda\uff1f",id:"\u501f\u4f86\u7684\u66f8\u80fd\u4e0d\u80fd\u5728\u4e0a\u9762\u5283\u7dda",level:3},{value:"\u4e00\u6b21\u53ef\u4ee5\u501f\u7d66\u591a\u5c11\u4eba\uff1f",id:"\u4e00\u6b21\u53ef\u4ee5\u501f\u7d66\u591a\u5c11\u4eba",level:3}];function a(r){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u5728\u4f7f\u7528 C \u8a9e\u8a00\u64b0\u5beb\u7a0b\u5f0f\u7684\u6642\u5019\uff0c\u8a18\u61b6\u9ad4\u7ba1\u7406\u662f\u4e00\u4ef6\u5f88\u91cd\u8981\u4f46\u4e5f\u6709\u9ede\u9ebb\u7169\u7684\u4e8b\u3002\u9700\u8981\u8cc7\u6e90\u7684\u6642\u5019\uff0c\u4f60\u53ef\u80fd\u5f97\u547c\u53eb malloc \u51fd\u6578\u8ddf\u7cfb\u7d71\u8981\u4e00\u584a\u8a18\u61b6\u9ad4\u4f86\u7528\uff0c\u7528\u5b8c\u7684\u8a71\u8981\u547c\u53eb free \u51fd\u6578\u628a\u8a18\u61b6\u9ad4\u653e\u6389\u3002\u624b\u52d5\u7ba1\u7406\u8a18\u61b6\u9ad4\u7684\u65b9\u5f0f\u5982\u679c\u5beb\u4e0d\u597d\u53ef\u80fd\u6703\u9020\u6210\u4e00\u4e9b\u9ebb\u7169\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u6c92\u6709\u628a\u7528\u5b8c\u7684\u8a18\u61b6\u9ad4\u9084\u56de\u53bb\uff0c\u7a0b\u5f0f\u57f7\u884c\u4e45\u4e86\u53ef\u80fd\u6703\u628a\u8a18\u61b6\u9ad4\u5403\u5149\u5149\uff0c\u9019\u5c31\u662f\u6240\u8b02\u7684 Memory Leak\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u8981\u653e\u6389\u8a18\u61b6\u9ad4\u7684\u6642\u5019\u662f\u8ddf\u7cfb\u7d71\u8aaa\u300c\u9019\u584a\u8a18\u61b6\u9ad4\u6211\u4e0d\u7528\u4e86\uff0c\u9084\u4f60\uff01\u300d\uff0c\u7136\u5f8c\u5176\u5b83\u7a0b\u5f0f\u5c31\u53ef\u4ee5\u4f7f\u7528\u9019\u584a\u7a7a\u9593\u3002\u4f46\u5982\u679c\u4e0d\u5c0f\u5fc3\u91cd\u8907\u91cb\u653e\uff0c\u9019\u7a2e Double Free \u7684\u64cd\u4f5c\u53ef\u80fd\u6703\u53bb\u653e\u6389\u5176\u5b83\u6b63\u5728\u4f7f\u7528\u9019\u584a\u8a18\u61b6\u9ad4\u7684\u7269\u4ef6\uff0c\u53c8\u6216\u662f\u76f4\u63a5\u8b93\u7a0b\u5f0f\u7576\u6389\u3002"}),"\n",(0,s.jsx)(e.li,{children:"\u653e\u6389\u8a18\u61b6\u9ad4\u4f46\u53c8\u53bb\u53d6\u7528\u5b83\uff0c\u53ef\u80fd\u6703\u9020\u6210\u7cfb\u7d71\u932f\u8aa4\uff0c\u6216\u662f\u56e0\u70ba\u653e\u6389\u7684\u8a18\u61b6\u9ad4\u7a7a\u9593\u5df2\u7d93\u88ab\u5176\u5b83\u7a0b\u5f0f\u7d66\u62ff\u53bb\u653e\u5225\u7684\u503c\uff0c\u96d6\u7136\u4e5f\u8a31\u9084\u662f\u80fd\u62ff\u5230\u8cc7\u6599\uff0c\u4f46\u62ff\u5230\u7684\u537b\u4e0d\u662f\u4f60\u60f3\u50cf\u7684\u7d50\u679c\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u624b\u52d5\u7ba1\u7406\u8a18\u61b6\u9ad4\u6709\u4e9b\u9ebb\u7169\u800c\u4e14\u5bb9\u6613\u51fa\u932f\uff0c\u6240\u4ee5\u6709\u4e9b\u7a0b\u5f0f\u8a9e\u8a00\u6709\u63d0\u4f9b\u76f8\u5c0d\u6bd4\u8f03\u300c\u81ea\u52d5\u300d\u7684\u65b9\u5f0f\u4f86\u7ba1\u7406\u8a18\u61b6\u9ad4\uff0c\u4f8b\u5982\u50cf Java \u7684 GC\uff08Garbage Collection\uff09\u6703\u8ca0\u8cac\u8b58\u5225\u3001\u56de\u6536\u4e0d\u518d\u4f7f\u7528\u7684\u7269\u4ef6\uff0c\u78ba\u4fdd\u8a18\u61b6\u9ad4\u53ef\u4ee5\u6709\u6548\u88ab\u5229\u7528\u3002\u4e0d\u904e GC \u4e5f\u6709\u5b83\u7684\u554f\u984c\uff0c\u6bd4\u8f03\u660e\u986f\u7684\u554f\u984c\u5c31\u662f\u7576\u5728\u767c\u52d5 GC \u7684\u6642\u5019\uff0c\u7cfb\u7d71\u6703\u6709\u660e\u986f\u7684\u5361\u9813\u611f\uff0c\u5c0d\u67d0\u4e9b\u5373\u6642\u901a\u8a0a\u670d\u52d9\u6216\u662f\u7dda\u4e0a\u904a\u6232\uff0c\u9019\u7a2e\u6642\u4e0d\u6642\u4f86\u4e00\u4e0b\u7684 lag \u8aaa\u4e0d\u5b9a\u5c31\u5bb3\u4f60\u88ab\u5176\u5b83\u73a9\u5bb6 KO \u4e86\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u56e0\u70ba\u7cfb\u7d71\u7684\u8cc7\u6e90\u90fd\u662f\u6709\u9650\u7684\uff0c\u6240\u4ee5\uff0c\u9069\u7576\u7684\u8ddf\u7cfb\u7d71\u7d22\u53d6\u8cc7\u6e90\u3001\u91cb\u653e\u8cc7\u6e90\u5c31\u662f\u4e00\u9580\u5b78\u554f\u4e86\u3002\u6839\u64da\u5fae\u8edf\u5728\u67d0\u6b21\u7684",(0,s.jsx)(e.a,{href:"https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/#google_vignette",children:"\u8cc7\u5b89\u7814\u8a0e\u6703"}),"\u4e0a\u7684\u767c\u8868\uff0c\u8a31\u591a\u61c9\u7528\u7a0b\u5f0f\u7684\u554f\u984c\uff0c\u5927\u6982\u6709\u4e03\u6210\u5de6\u53f3\u90fd\u8ddf\u8a18\u61b6\u9ad4\u7684\u7ba1\u7406\u6709\u95dc\uff0c\u6240\u4ee5\u5982\u679c\u80fd\u641e\u5b9a\u8a18\u61b6\u9ad4\u5b89\u5168\u6027\uff08Memory Safety\uff09\uff0c\u7b49\u65bc\u5c31\u80fd\u8b93\u61c9\u7528\u7a0b\u5f0f\u7684\u54c1\u8cea\u66f4\u597d\u4e86\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5728 Rust \u6c92\u6709 Garbage Collector \u7684\u8a2d\u8a08\uff0c\u90a3\u9ebc\u5728 Rust \u600e\u9ebc\u505a\u8a18\u61b6\u9ad4\u7ba1\u7406\uff1f\u6211\u5011\u4f86\u770b\u4e00\u6bb5\u8a08\u7b97\u5f97\u5206\u7684\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"fn calc_score() -> i32 {\r\n    let scores = vec![1450, 9527, 5566]; \r\n    let mut total = 0;\r\n\r\n    for score in scores.iter() {\r\n        total += score;\r\n    }\r\n\r\n    return total;\r\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5927\u6982\u5c31\u662f\u8dd1\u500b ",(0,s.jsx)(e.code,{children:"for"})," \u8ff4\u5708\u505a\u500b\u7c21\u55ae\u7684\u8a08\u7b97\u3002\u5404\u4f4d\u53ef\u80fd\u89ba\u5f97\u5beb\u8d77\u4f86\u5f88\u8f15\u9b06\uff0c\u4e0d\u7528\u53bb\u8981\u8a18\u61b6\u9ad4\u4e5f\u4e0d\u7528\u653e\u6389\u8a18\u61b6\u9ad4\uff0c\u4f46\u4e8b\u5be6\u4e0a\u5728\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"vec!"})," \u5de8\u96c6\u5efa\u7acb Vector \u7684\u6642\u5019\u5c31\u662f\u53bb\u8981\u8a18\u61b6\u9ad4\u4e86\uff0c\u53ea\u662f\u4f60\u4e0d\u7528\u81ea\u5df1\u5beb\u800c\u5df2\u3002\u540c\u6a23\u7684\uff0c\u7576 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\u5373\u5c07\u7d50\u675f\u4e26\u4e14\u96e2\u958b\u9019\u500b Scope \u4e4b\u524d\uff0cRust \u4e5f\u6703\u5e6b\u4f60\u505a\u91cb\u653e\u6389\u9019\u500b Vector \u6240\u4f54\u7528\u7684\u8a18\u61b6\u9ad4\uff0c\u6240\u4ee5\u4f60\u4e5f\u4e0d\u7528\u81ea\u5df1\u505a\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u770b\u9019\u6bb5\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let scores = get_scores();\r\n    println!("{:?}", scores);\r\n}\r\n\r\nfn get_scores() -> Vec<i32> {\r\n    let scores = vec![1450, 9527, 5566];\r\n    return scores;  // \u81ea\u52d5\u91cb\u653e\u4f54\u7528\u7684\u8a18\u61b6\u9ad4\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u6bb5\u7bc4\u4f8b\u6c92\u4ec0\u9ebc\u908f\u8f2f\uff0c",(0,s.jsx)(e.code,{children:"get_scores()"})," \u5c31\u53ea\u662f\u56de\u50b3\u4e00\u500b Vector \u800c\u5df2\u3002But...\uff0c\u5c31\u662f\u9019\u500b But\uff0c\u525b\u525b\u4e0d\u662f\u624d\u5b78\u5230 Rust \u6703\u5728\u96e2\u958b\u51fd\u6578 Scope \u7684\u6642\u5019\u81ea\u52d5\u5e6b\u4f60\u653e\u6389\u8a18\u61b6\u9ad4\u55ce\uff1f\u9019\u6a23\u4e00\u4f86\u8b8a\u6578 ",(0,s.jsx)(e.code,{children:"scores"})," \u62ff\u5230\u7684 Vector \u662f\u4ec0\u9ebc\uff1f\u5b83\u5982\u679c\u88ab\u6a19\u8a18\u6210\u5df2\u91cb\u653e\uff0c\u90a3\u9ebc\u5f85\u6703\u9019\u500b Vector \u539f\u672c\u4f54\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u6703\u4e0d\u6703\u88ab\u5176\u5b83\u8cc7\u6599\u7d66\u62ff\u53bb\u7528\uff1f"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u6709\u6b0aownership",children:"\u6240\u6709\u6b0a\uff08Ownership\uff09"}),"\n",(0,s.jsx)(e.p,{children:"\u4e8b\u5be6\u4e0a Rust \u4e26\u4e0d\u662f\u90a3\u9ebc\u55ae\u7d14\u7684\u81ea\u52d5\u91cb\u653e\u8a18\u61b6\u9ad4\u3002Rust \u8a2d\u8a08\u4e86\u300c\u6240\u6709\u6b0a\u300d\u7684\u6982\u5ff5\u3002\u518d\u770b\u770b\u525b\u624d\u90a3\u6bb5\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let scores = get_scores();\r\n    println!("{:?}", scores);\r\n}\r\n\r\nfn get_scores() -> Vec<i32> {\r\n    let scores = vec![1450, 9527, 5566];  // \u8a2d\u5b9a\u6240\u6709\u6b0a\r\n    return scores;\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u7576\u6211\u5011\u5728 ",(0,s.jsx)(e.code,{children:"get_scores()"})," \u51fd\u6578\u88e1\u8981\u4e86\u4e00\u584a\u8a18\u61b6\u9ad4\u4f4d\u7f6e\u4f86\u653e\u525b\u525b\u5efa\u7acb\u4e86\u7684 Vector\uff0cRust \u6703\u628a\u9019\u500b ",(0,s.jsx)(e.code,{children:"scores"})," \u8b8a\u6578\u7684\u6240\u6709\u6b0a\u8a2d\u5b9a\u5728\u9019\u500b Scope \u88e1\u3002\u7576\u5728 ",(0,s.jsx)(e.code,{children:"main"})," \u51fd\u6578\u88e1\u547c\u53eb ",(0,s.jsx)(e.code,{children:"get_scores()"})," \u7684\u6642\u5019\uff0c",(0,s.jsx)(e.code,{children:"scores"})," \u8b8a\u6578\u7684\u6240\u6709\u6b0a\u5c31\u6703\u8f49\u79fb\u5230 ",(0,s.jsx)(e.code,{children:"main"})," \u7684 Scope \u88e1\uff0c\u9019\u500b\u884c\u70ba\u53eb\u505a\u300c\u79fb\u52d5\uff08Move\uff09\u300d\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u539f\u672c ",(0,s.jsx)(e.code,{children:"get_scores()"})," \u51fd\u6578\u8981\u7d50\u675f\u7684\u6642\u5019\u61c9\u8a72\u8981\u81ea\u52d5\u653e\u6389\u4f54\u7528\u7684\u8a18\u61b6\u9ad4\uff0c\u4f46\u7576 Rust \u767c\u73fe ",(0,s.jsx)(e.code,{children:"scores"})," \u8b8a\u6578\u7684\u6240\u6709\u6b0a\u8f49\u79fb\u7d66\u5225\u4eba\u4e86\uff0c\u5c31\u5148\u4e0d\u6703\u53bb\u91cb\u653e\u8a18\u61b6\u9ad4\u4e86\u3002\u65e2\u7136 ",(0,s.jsx)(e.code,{children:"scores"})," \u7684\u6240\u6709\u6b0a\u79fb\u5230\u4e86 ",(0,s.jsx)(e.code,{children:"main()"}),"\uff0c\u90a3\u5c31\u8868\u793a ",(0,s.jsx)(e.code,{children:"scores"})," \u73fe\u5728\u662f ",(0,s.jsx)(e.code,{children:"main()"})," \u7684\u8cac\u4efb\uff0c\u5728 ",(0,s.jsx)(e.code,{children:"main()"})," \u51fd\u6578\u57f7\u884c\u7d50\u675f\u7684\u6642\u5019\u5c31\u6703\u88ab\u81ea\u52d5\u91cb\u653e\u6389\u4e86\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u63a5\u8457\u6211\u5011\u8b93\u7a0b\u5f0f\u78bc\u518d\u8907\u96dc\u4e00\u9ede\u9ede\uff0c\u9019\u56de\u628a\u8a08\u7b97\u7e3d\u5206\u7684\u51fd\u6578 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u4e5f\u52a0\u9032\u4f86\u4e86\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let scores = get_scores();\r\n    let total_score = calc_score(scores);\r\n\r\n    println!("{:?}", total_score);\r\n}\r\n\r\nfn get_scores() -> Vec<i32> {\r\n    let scores = vec![1450, 9527, 5566];\r\n    return scores;\r\n}\r\n\r\nfn calc_score(scores: Vec<i32>) -> i32 {\r\n    let mut total = 0;\r\n\r\n    for score in scores.iter() {\r\n        total += score;\r\n    }\r\n\r\n    return total;\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u628a\u4e0a\u9762\u7684\u7bc4\u4f8b\u7c21\u5316\u4e00\u9ede\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let total_score = calc_score(scores);\r\n\r\n// ... \u7565 ...\r\n\r\nfn calc_score(scores: Vec<i32>) -> i32 { ... }\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u88e1\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7576\u547c\u53eb ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\u4e26\u4e14\u628a ",(0,s.jsx)(e.code,{children:"scores"})," \u9019\u500b Vector \u50b3\u9032\u53bb\u7684\u6642\u5019\uff0c\u4e5f\u6703\u767c\u751f\u6240\u6709\u6b0a\u8f49\u79fb\uff0c\u4e5f\u5c31\u662f\u8aaa\u9019\u6642\u5019\u9019\u500b Vector \u7684\u6240\u6709\u6b0a Move \u5230\u4e86 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\u88e1\u4e86\u3002\u5230\u76ee\u524d\u770b\u8d77\u4f86\u6c92\u4ec0\u9ebc\u554f\u984c\uff0c\u57f7\u884c\u4e4b\u5f8c\u6c92\u6709\u767c\u751f\u932f\u8aa4\uff0cGood\uff01"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4f46\u63a5\u8457\u5982\u679c\u6211\u60f3\u8a66\u8457\u5370\u51fa ",(0,s.jsx)(e.code,{children:"scores"})," \u8b8a\u6578\u7684\u8a71\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let scores = get_scores();\r\n    let total_score = calc_score(scores);\r\n\r\n    println!("{:?}", total_score);\r\n    println!("{:?}", scores);  // \u5370\u51fa scores\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u6642\u5019\u5c31\u6703\u51fa\u932f\u4e86\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'$ cargo run\r\nerror[E0382]: borrow of moved value: `scores`\r\n  --\x3e src/main.rs:7:22\r\n   |\r\n3  |     let scores = get_scores();\r\n   |         ------ move occurs because `scores` has type `Vec<i32>`, which does not implement the `Copy` trait\r\n4  |     let total_score = calc_score(scores);\r\n   |                                  ------ value moved here\r\n...\r\n7  |     println!("{:?}", scores);\r\n   |                      ^^^^^^ value borrowed here after move\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u9019\u7a2e\u932f\u8aa4\u8a0a\u606f\u6211\u731c\u4f60\u5728\u5176\u5b83\u7a0b\u5f0f\u8a9e\u8a00\u61c9\u8a72\u6c92\u770b\u904e\uff0c\u4f46\u9019\u6642\u5019\u6211\u60f3\u4f60\u61c9\u8a72\u7a0d\u5fae\u6bd4\u8f03\u770b\u7684\u61c2\u932f\u8aa4\u8a0a\u606f\u60f3\u8981\u8868\u9054\u7684\u5167\u5bb9\u4e86\uff0c\u4e0d\u904e\u53ef\u80fd\u9084\u662f\u4e0d\u77e5\u9053\u70ba\u4ec0\u9ebc\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u539f\u56e0\u662f\u56e0\u70ba\u7576\u6211\u5011\u628a ",(0,s.jsx)(e.code,{children:"scores"})," \u9019\u500b Vector \u50b3\u9032 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\u88e1\u7684\u6642\u5019\uff0c\u6240\u6709\u6b0a\u8f49\u79fb\u7d66\u5b83\u4e86\uff0c\u56e0\u70ba\u7576 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u5728\u57f7\u884c\u7d50\u675f\u7684\u6642\u5019\u96d6\u7136\u628a\u8a08\u7b97\u7684\u7e3d\u5206\u50b3\u56de\u4f86\uff0c\u4f46\u4e5f\u9806\u624b\u628a\u90a3\u500b Vector \u7d66\u653e\u6389\u4e86\u3002\u6240\u4ee5\u5f8c\u7e8c\u60f3\u8981\u5370\u51fa ",(0,s.jsx)(e.code,{children:"scores"})," \u7684\u6642\u5019\u5c31\u6703\u51fa\u73fe\u932f\u8aa4\u8a0a\u606f\uff0c\u56e0\u70ba\u5b83\u5df2\u7d93\u501f\u7d66\u5225\u4eba\uff08Borrowed\uff09\uff0c\u800c\u4e14\u5c0d\u65b9\u6c92\u6709\u628a\u6240\u6709\u6b0a\u9084\u56de\u4f86\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u7576\u7136\u4f60\u4e5f\u53ef\u4ee5\u5728 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\u88e1\u4e00\u4f75\u628a\u7e3d\u5206\u8ddf\u50b3\u9032\u53bb\u7684 Vector \u900f\u904e Tuple \u6216\u5176\u5b83\u8cc7\u6599\u7d50\u69cb\u4e00\u4f75\u6253\u5305\u50b3\u56de\u4f86\uff0c\u4f46\u6bcf\u6b21\u90fd\u8981\u9019\u6a23\u5beb\u4e5f\u592a\u9ebb\u7169\u4e86\u3002Rust \u6709\u500b\u53eb\u505a ",(0,s.jsx)(e.code,{children:".clone()"})," \u7684\u51fd\u6578\uff0c\u770b\u540d\u5b57\u5c31\u5927\u6982\u77e5\u9053\u7528\u9014\u4e86\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let total_score = calc_score(scores.clone());\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u6a23\u5beb\u7684\u8a71\uff0c\u4f60\u5c31\u4e0d\u662f\u628a ",(0,s.jsx)(e.code,{children:"scores"})," \u50b3\u7d66 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\uff0c\u800c\u53ea\u662f\u50b3\u7d66\u5b83\u8907\u88fd\u54c1\uff0c\u6240\u4ee5\u6240\u6709\u6b0a\u7684\u8f49\u79fb\u4e5f\u662f\u90a3\u500b\u8907\u88fd\u54c1\u7684\u4e8b\u60c5\uff0c\u539f\u672c\u7684 ",(0,s.jsx)(e.code,{children:"scores"})," \u7684\u6240\u6709\u6b0a\u4e26\u6c92\u6709\u8b8a\u5316\uff0c\u9019\u6a23\u7a0b\u5f0f\u5c31\u4e0d\u6703\u51fa\u932f\u4e86\u3002\u554f\u984c\u662f\u89e3\u6c7a\u4e86\u6c92\u932f\uff0c\u4f46 ",(0,s.jsx)(e.code,{children:".clone()"})," \u4e5f\u4e0d\u662f\u4e0d\u7528\u9322\uff0c\u5149\u60f3\u5c31\u77e5\u9053\u8907\u88fd\u9019\u4ef6\u4e8b\u5c31\u662f\u6703\u6d6a\u8cbb\u984d\u5916\u7684\u8cc7\u6e90\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"Rust \u6709\u63d0\u4f9b\u66f4\u7c21\u55ae\u7684\u6a5f\u5236\u4f86\u89e3\u6c7a\u9019\u500b\u60c5\u6cc1\uff0c\u5c31\u662f\u7528\u300c\u501f\uff08Borrow\uff09\u300d\u7684"}),"\n",(0,s.jsx)(e.h3,{id:"\u60f3\u8981\u55ce\u6211\u4e0d\u8cb7\u7d66\u4f60\u4f46\u6211\u501f\u7d66\u4f60",children:"\u60f3\u8981\u55ce\uff1f\u6211\u4e0d\u8cb7\u7d66\u4f60\uff0c\u4f46\u6211\u501f\u7d66\u4f60"}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u770b\u7a0b\u5f0f\u78bc\u7684\u8b8a\u5316\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let scores = get_scores();\r\n    let total_score = calc_score(&scores); \r\n\r\n    println!("{:?}", total_score);\r\n    println!("{:?}", scores);\r\n}\r\n\r\nfn get_scores() -> Vec<i32> { ... } \r\n\r\nfn calc_score(scores: &Vec<i32>) -> i32 {\r\n    // ... \u4e00\u6a23\u7684\u7a0b\u5f0f\u78bc\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u5be6\u8ddf\u539f\u672c\u7684\u7a0b\u5f0f\u78bc\u5e7e\u4e4e\u4e00\u6a21\u4e00\u6a23\uff0c\u6211\u53ea\u591a\u52a0\u4e86 2 \u500b ",(0,s.jsx)(e.code,{children:"&"})," \u7b26\u865f\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"let total_score = calc_score(&scores);\r\n\r\n// ... \u7565 ...\r\n\r\nfn calc_score(scores: &Vec<i32>) -> i32 { ... }\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"calc_score(&scores)"})," \u7684\u5927\u6982\u610f\u601d\u5c31\u662f\u8ddf ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u8aaa\uff1a\u300c\u563f\uff0c\u6211\u5148\u628a ",(0,s.jsx)(e.code,{children:"scores"})," \u501f\u7d66\u4f60\u7528\uff0c\u4f46\u4f60\u8981\u8a18\u5f97\uff0c\u6211\u4e0d\u662f\u7d66\u4f60\u5594\uff0c\u6211\u662f\u501f\u4f60\uff01\u300d\u3002\u800c ",(0,s.jsx)(e.code,{children:"fn calc_score(scores: &Vec<i32>)"})," \u7684\u610f\u601d\u662f\u6307\u5b83\u8981\u63a5\u7684\u53c3\u6578\u4e0d\u662f\u666e\u901a\u7684 Vector\uff0c\u800c\u662f\u4e00\u500b\u5225\u4eba\u501f\u7d66\u5b83\u7684 Vector\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u56e0\u70ba\u53ea\u662f\u66ab\u6642\u501f\u51fa\u53bb\uff0c\u6240\u4ee5\u6240\u6709\u6b0a\u4e26\u6c92\u6709\u8f49\u79fb\uff0c\u7a0b\u5f0f\u57f7\u884c\u5c31\u4e0d\u6703\u51fa\u932f\u4e86\u3002\u9019\u6982\u5ff5\u6709\u9ede\u50cf\u4f60\u53bb\u5716\u66f8\u9928\u501f\u66f8\uff0c\u9019\u672c\u66f8\u96d6\u7136\u4e0d\u662f\u4f60\u7684\uff0c\u4f46\u4f60\u53ef\u4ee5\u5e36\u56de\u5bb6\u770b\u3002\u7167\u7406\u8aaa\u4f60\u5f9e\u5716\u66f8\u9928\u501f\u56de\u5bb6\u7684\u66f8\u4f60\u61c9\u8a72\u8981\u597d\u597d\u4fdd\u7ba1\u5b83\uff0c\u5728\u95b1\u8b80\u7684\u6642\u5019\u4e5f\u4e0d\u8981\u4e5f\u4e0d\u61c9\u8a72\u5728\u4e0a\u9762\u756b\u7dda\u6216\u4f5c\u7b46\u8a18\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5148\u6487\u958b\u61c9\u4e0d\u61c9\u8a72\u7684\u516c\u5fb7\u5fc3\u554f\u984c\uff0c\u4f60\u53ef\u4e0d\u53ef\u4ee5\u5728\u501f\u4f86\u7684\u66f8\u4e0a\u5283\u7dda\u505a\u7b46\u8a18\uff1f"}),"\n",(0,s.jsx)(e.h3,{id:"\u501f\u4f86\u7684\u66f8\u80fd\u4e0d\u80fd\u5728\u4e0a\u9762\u5283\u7dda",children:"\u501f\u4f86\u7684\u66f8\u80fd\u4e0d\u80fd\u5728\u4e0a\u9762\u5283\u7dda\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u5011\u53ef\u4ee5\u8a66\u8457\u5c0d\u501f\u4f86\u7684\u6771\u897f\u52a0\u9ede\u6599\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"fn main() {\r\n    let mut scores = vec![1450, 9527, 5566];\r\n    let total_score = calc_score(&scores);\r\n}\r\n\r\nfn calc_score(scores: &Vec<i32>) -> i32 {\r\n    scores.push(123);  // \u52a0\u6599\uff01\r\n    let mut total = 0;\r\n\r\n    for score in scores.iter() {\r\n        total += score;\r\n    }\r\n\r\n    return total;\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u9019\u88e1\u6211\u5148\u628a ",(0,s.jsx)(e.code,{children:"scores"})," \u8b8a\u6578\u5ba3\u544a\u6210 ",(0,s.jsx)(e.code,{children:"mut"}),"\uff0c\u8b93\u5b83\u53ef\u4ee5\u88ab\u4fee\u6539\uff0c\u63a5\u8457\u900f\u904e ",(0,s.jsx)(e.code,{children:"&"})," \u501f\u7d66 ",(0,s.jsx)(e.code,{children:"calc_score()"})," \u51fd\u6578\u4e4b\u5f8c\uff0c\u6545\u610f\u5728\u88e1\u9762\u52a0\u4e00\u9ede\u6599\uff0c\u57f7\u884c\u4e4b\u5f8c\u6703\u767c\u751f\u932f\u8a0a\u606f\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0596]: cannot borrow `*scores` as mutable, as it is behind a `&` reference\r\n  --\x3e src/main.rs:16:5\r\n   |\r\n16 |     scores.push(123);\r\n   |     ^^^^^^^^^^^^^^^^ `scores` is a `&` reference, so the data it refers to cannot be borrowed as mutable\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u96d6\u7136 ",(0,s.jsx)(e.code,{children:"scores"})," \u672c\u8eab\u8aaa\u53ef\u4ee5 ",(0,s.jsx)(e.code,{children:"mut"}),"\uff0c\u4f46\u501f\u9032\u4f86\u7684\u6642\u5019\u4e26\u6c92\u6709\u8aaa\u9019\u500b\u53ef\u4ee5\u6539\uff0c\u6240\u4ee5\u9084\u662f\u4e0d\u80fd\u52d5\u5b83\u3002\u5982\u679c\u5e0c\u671b\u501f\u9032\u4f86\u7684\u6771\u897f\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u9700\u8981\u505a\u4ee5\u4e0b\u8abf\u6574\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"fn main() {\r\n    let mut scores = vec![1450, 9527, 5566];\r\n    let total_score = calc_score(&mut scores);\r\n}\r\n\r\nfn calc_score(scores: &mut Vec<i32>) -> i32 {\r\n    scores.push(123);  // \u52a0\u6599\r\n    // ... \u7565 ...\r\n    return total;\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"calc_score(&mut scores)"})," \u5728\u51fa\u501f\u7684\u6642\u5019\u9700\u8981\u660e\u78ba\u7684\u8b1b\u300c\u6211\u9019\u672c\u66f8\u53ef\u4ee5\u501f\u4f60\uff0c\u5982\u679c\u4f60\u8981\u7684\u8a71\u53ef\u4ee5\u5728\u4e0a\u9762\u5283\u7dda\u3001\u505a\u7b46\u8a18\uff0c\u4f46\u9019\u672c\u66f8\u9084\u662f\u6211\u7684\u5594\u300d\uff1b",(0,s.jsx)(e.code,{children:"fn calc_score(scores: &mut Vec<i32>)"})," \u5247\u662f\u660e\u78ba\u7684\u8b1b\u501f\u9032\u4f86\u7684\u9019\u500b Vector \u662f\u53ef\u4ee5\u4fee\u6539\u7684\u3002\u5728 Rust\uff0c\u5f88\u591a\u6771\u897f\u90fd\u5f97\u8b1b\u6e05\u695a\u3001\u8aaa\u660e\u767d\u624d\u884c\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u4e00\u6b21\u53ef\u4ee5\u501f\u7d66\u591a\u5c11\u4eba",children:"\u4e00\u6b21\u53ef\u4ee5\u501f\u7d66\u591a\u5c11\u4eba\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u4f86\u770b\u770b\u9019\u6bb5\u7a0b\u5f0f\u78bc\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let mut book = String::from("\u70ba\u4f60\u81ea\u5df1\u5b78 Rust");\r\n\r\n    let b1 = &book;\r\n    let b2 = &book;\r\n    let b3 = &book;\r\n\r\n    println!("{:?}, {:?}, {:?}", b1, b2, b3);\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u4e0a\u9762\u7684\u7bc4\u4f8b\u4e2d\uff0c\u96d6\u7136\u9019\u672c\u66f8\u6211\u662f\u5ba3\u544a\u6210 ",(0,s.jsx)(e.code,{children:"mut"}),"\uff0c\u4f46\u56e0\u70ba\u6211\u5728\u501f\u51fa\u53bb\u7684\u6642\u5019\u90fd\u53ea\u7528 ",(0,s.jsx)(e.code,{children:"&"})," \u4e5f\u5c31\u662f\u8aaa\u300c\u9019\u500b\u66f8\u6211\u53ef\u4ee5\u501f\u4f60\u5011\u770b\uff0c\u4f46\u4f60\u5011\u4e0d\u80fd\u5728\u4e0a\u9762\u5283\u7dda\uff01\u300d\u3002Rust \u77e5\u9053\u501f\u7d66\u9019\u4e9b\u4eba\u90fd\u4fdd\u8b49\u4e0d\u6703\u4fee\u6539\uff0c\u6240\u4ee5\u60f3\u8981\u501f\u5e7e\u500b\u5c31\u501f\u5e7e\u500b\uff0c\u4e26\u6c92\u6709\u4ec0\u9ebc\u9650\u5236\u3002\u4f46\u5982\u679c\u4f60\u8b93\u5176\u4e2d\u67d0\u500b\u4eba\u8aaa\u300c\u6c92\u95dc\u4fc2\uff0c\u5982\u679c\u662f\u4f60\u7684\u8a71\u53ef\u4ee5\u5594\u300d\uff0c\u50cf\u9019\u6a23\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let mut book = String::from("\u70ba\u4f60\u81ea\u5df1\u5b78 Rust");\r\n\r\n    let b1 = &book;\r\n    let b2 = &mut book;  // \u7528 mut \u7684\u65b9\u5f0f\u51fa\u501f\r\n    let b3 = &book;\r\n\r\n    println!("{:?}, {:?}, {:?}", b1, b2, b3);\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7a0b\u5f0f\u57f7\u884c\u5c31\u6703\u51fa\u932f\u4e86\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0502]: cannot borrow `book` as immutable because it is also borrowed as mutable\r\n --\x3e src/main.rs:7:14\r\n  |\r\n6 |     let b2 = &mut book;\r\n  |              --------- mutable borrow occurs here\r\n7 |     let b3 = &book;\r\n  |              ^^^^^ immutable borrow occurs here\r\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u60f3\u60f3\u770b\uff0c\u96d6\u7136\u4f60\u53ea\u7d66\u4e00\u500b\u4eba\u53ef\u4ee5\u7528 mutable \u7684\u65b9\u5f0f\u51fa\u501f\uff0c\u8ab0\u77e5\u9053\u6703\u4e0d\u6703\u5c0d\u501f\u51fa\u53bb\u7684\u6771\u897f\u505a\u4ec0\u9ebc\u4e8b\uff0c\u9019\u6a23\u5176\u5b83\u4eba\u62ff\u5230\u7684\u66f8\u6703\u8b8a\u6210\u4ec0\u9ebc\u6a23\u5b50\uff1f"}),"\n",(0,s.jsx)(e.p,{children:"\u6216\u662f\u4f60\u60f3\u8aaa\u4e0d\u7ba1\u4e86\uff0c\u4e7e\u8106\u8b93\u4f60\u5011\u6bcf\u500b\u4eba\u90fd\u53ef\u5283\u7dda\u597d\u4e86\uff0c\u9019\u6a23\u7e3d\u884c\u4e86\u5427\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'fn main() {\r\n    let mut book = String::from("\u70ba\u4f60\u81ea\u5df1\u5b78 Rust");\r\n\r\n    let b1 = &mut book;\r\n    let b2 = &mut book;\r\n    let b3 = &mut book;\r\n\r\n    println!("{:?}, {:?}, {:?}", b1, b2, b3);\r\n}\r\n\n'})}),"\n",(0,s.jsx)(e.p,{children:"Rust \u6703\u544a\u8a34\u4f60\u9019\u6a23\u4e5f\u4e0d\u884c\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cargo run\r\nerror[E0499]: cannot borrow `book` as mutable more than once at a time\r\n --\x3e src/main.rs:6:14\r\n  |\r\n5 |     let b1 = &mut book;\r\n  |              --------- first mutable borrow occurs here\r\n6 |     let b2 = &mut book;\r\n  |              ^^^^^^^^^ second mutable borrow occurs here\r\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u7c21\u55ae\u7684\u8aaa\uff0c\u5982\u679c\u662f immutable borrow \u7684\u8a71\uff0c\u60f3\u8981\u540c\u6642\u501f\u7d66\u591a\u5c11\u4eba\u90fd\u7121\u6240\u8b02\uff0c\u4f46\u5982\u679c\u662f mutable borrow \u7684\u8a71\uff0c\u4e00\u6b21\u53ea\u80fd\u501f\u7d66\u4e00\u500b\u4eba\uff0c\u800c\u4e14\u540c\u6642\u4e0d\u80fd\u6709\u5176\u5b83\u4eba\u501f\uff0c\u4e0d\u7ba1\u4ed6\u5011\u6703\u4e0d\u6703\u5728\u66f8\u4e0a\u5283\u7dda\u90fd\u4e00\u6a23\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Rust \u7684\u7de8\u8b6f\u5668\u5f88\u8070\u660e\u4f46\u4e5f\u5f88\u9f9c\u6bdb\uff0c\u96d6\u7136\u56c9\u55e6\uff0c\u4f46\u5b83\u7d66\u51fa\u4f86\u7684\u932f\u8aa4\u8a0a\u606f\u770b\u8d77\u4f86\u662f\u771f\u7684\u633a\u6e05\u695a\u7684\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["Rust \u7684\u300c\u6240\u6709\u6b0a\u300d\u8a2d\u8a08\uff0c\u8b93\u4f60\u4e0d\u7528\u81ea\u5df1\u624b\u52d5\u914d\u7f6e\u3001\u91cb\u653e\u8a18\u61b6\u9ad4\u7684\u540c\u6642\uff0c\u53c8\u53ef\u78ba\u4fdd\u4e0d\u6703\u8aa4\u89f8\u50cf C \u8a9e\u8a00\u7684 ",(0,s.jsx)(e.code,{children:"malloc"})," \u8ddf ",(0,s.jsx)(e.code,{children:"free"})," \u7684\u64cd\u4f5c\u5730\u96f7\uff0c\u6240\u4ee5 Rust \u8aaa\u5b83\u662f\u81ea\u5df1\u500b\u300c",(0,s.jsx)(e.strong,{children:"\u5b89\u5168"}),"\u300d\u7684\u7a0b\u5f0f\u8a9e\u8a00\uff0c\u6307\u7684\u5c31\u662f\u300cMemory Safety\u300d\u7684\u5b89\u5168\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4f46\u8aaa\u5230\u5e95\uff0c\u70ba\u4ec0\u9ebc Rust \u8981\u7ba1\u9019\u9ebc\u591a\uff1f\u539f\u56e0\u5c31\u662f Rust \u7684 Concurrency \u7684\u8a2d\u8a08\u53ef\u4ee5\u540c\u6642\u57f7\u884c\u591a\u500b\u57f7\u884c\u7dd2\uff08Thread\uff09\uff0c\u73fe\u4ee3\u7684\u96fb\u8166\u8a2d\u5099\u57fa\u672c\u4e0a\u90fd\u662f\u591a\u6838\u5fc3\u7684\u8a2d\u8a08\uff0c\u8d8a\u591a\u6838\u5fc3\u7b49\u65bc\u53ef\u4ee5\u540c\u6642\u57f7\u884c\u8d8a\u591a\u7684\u57f7\u884c\u7dd2\uff0c\u6240\u4ee5\u9019\u662f Rust \u6548\u80fd\u53ef\u4ee5\u5f88\u597d\u7684\u539f\u56e0\u4e4b\u4e00\u3002\u5982\u679c\u8cc7\u6599\u501f\u51fa\u53bb\u7684\u6642\u5019\u4e0d\u80fd\u4fdd\u8b49\u4e00\u6b21\u53ea\u6709\u4e00\u500b\uff0c\u9019\u500b Concurrency \u53ef\u80fd\u5c31\u6703\u6709\u72c0\u6cc1\u3002\u56e0\u6b64\uff0c\u5728 Rust \u7684\u5b98\u7db2\u624b\u518a\u4e0a\u9084\u6709\u7279\u5225\u63d0\u5230\u7279\u8272\u4e4b\u4e00\u662f",(0,s.jsx)(e.strong,{children:"\u7121\u61fc\u4e26\u884c\uff08fearless concurrency\uff09"}),"\uff0c\u518d\u56de\u982d\u60f3\u60f3\u4e0a\u9762\u7684\u8a2d\u8a08\uff0c\u96e3\u602a\u4e0d\u6703\u6015\u4e86\u3002"]})]})}function h(r={}){const{wrapper:e}={...(0,c.R)(),...r.components};return e?(0,s.jsx)(e,{...r,children:(0,s.jsx)(a,{...r})}):a(r)}},8453:(r,e,n)=>{n.d(e,{R:()=>l,x:()=>t});var s=n(6540);const c={},o=s.createContext(c);function l(r){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof r?r(e):{...e,...r}}),[e,r])}function t(r){let e;return e=r.disableParentContext?"function"==typeof r.components?r.components(c):r.components||c:l(r.components),s.createElement(o.Provider,{value:e},r.children)}}}]);