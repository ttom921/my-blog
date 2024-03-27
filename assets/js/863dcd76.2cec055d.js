"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[434],{8706:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>t});var n=s(4848),c=s(8453);const d={"\uff03id":"doc-markdown",title:"03-rust\u7ba1\u7406\u5c08\u6848",description:"rust\u7ba1\u7406\u5c08\u6848",keywords:["rust"],last_update:{date:"3/27/2024",author:"ttom"}},l=void 0,i={id:"\u5b78\u7fd2/rust/rustbasic/rust\u7ba1\u7406\u5c08\u6848",title:"03-rust\u7ba1\u7406\u5c08\u6848",description:"rust\u7ba1\u7406\u5c08\u6848",source:"@site/docs/\u5b78\u7fd2/rust/rustbasic/03-rust\u7ba1\u7406\u5c08\u6848.md",sourceDirName:"\u5b78\u7fd2/rust/rustbasic",slug:"/\u5b78\u7fd2/rust/rustbasic/rust\u7ba1\u7406\u5c08\u6848",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust\u7ba1\u7406\u5c08\u6848",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{"\uff03id":"doc-markdown",title:"03-rust\u7ba1\u7406\u5c08\u6848",description:"rust\u7ba1\u7406\u5c08\u6848",keywords:["rust"],last_update:{date:"3/27/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"02-rust\u57fa\u672c\u7de8\u8f2f\u8a2d\u5b9a",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rustbasic/rust\u57fa\u672c\u7de8\u8f2f\u8a2d\u5b9a"},next:{title:"rust\u7279\u5225\u8a9e\u6cd5",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rust\u7279\u5225\u8a9e\u6cd5"}},o={},t=[{value:"\u5efa\u7acb\u5c08\u6848\uff08\u7d14\u624b\u5de5\u7248\uff09",id:"\u5efa\u7acb\u5c08\u6848\u7d14\u624b\u5de5\u7248",level:2},{value:"\u5efa\u7acb\u5c08\u6848\uff08\u81ea\u52d5\u7248\uff09",id:"\u5efa\u7acb\u5c08\u6848\u81ea\u52d5\u7248",level:2},{value:"\u5b89\u88dd\u5957\u4ef6",id:"\u5b89\u88dd\u5957\u4ef6",level:2},{value:"\u5957\u4ef6\u88dd\u5230\u54ea\u88e1\u53bb\u4e86\uff1f",id:"\u5957\u4ef6\u88dd\u5230\u54ea\u88e1\u53bb\u4e86",level:3},{value:"Space vs Tab\uff0c\u4f60\u662f\u54ea\u4e00\u6d3e\uff1f",id:"space-vs-tab\u4f60\u662f\u54ea\u4e00\u6d3e",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["\u4ee5 Hello World \u7b49\u7d1a\u7684\u8907\u96dc\u5ea6\u4f86\u8aaa\uff0c\u55ae\u4e00\u500b ",(0,n.jsx)(r.code,{children:".rs"})," \u6a94\u6848\u5c31\u80fd\u641e\u5b9a\u3002\u4e0d\u904e\u6211\u76f8\u4fe1\u5927\u5bb6\u5b78 Rust \u4e0d\u6703\u53ea\u60f3\u5b78\u5230 Hello World \u7b49\u7d1a\u800c\u5df2\uff0c\u5c08\u6848\u8d8a\u505a\u8d8a\u8907\u96dc\uff0c\u4e5f\u8a31\u5c31\u5f97\u958b\u59cb\u62c6\u5206\u6a21\u7d44\uff0c\u6216\u662f\u4f7f\u7528\u5916\u90e8\u7684\u5957\u4ef6\uff0c\u9019\u5c31\u4e0d\u662f\u55ae\u4e00\u500b ",(0,n.jsx)(r.code,{children:".rs"})," \u6a94\u6848\u5c31\u80fd\u641e\u5b9a\u7684\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5efa\u7acb\u5c08\u6848\u7d14\u624b\u5de5\u7248",children:"\u5efa\u7acb\u5c08\u6848\uff08\u7d14\u624b\u5de5\u7248\uff09"}),"\n",(0,n.jsxs)(r.p,{children:["\u5728 Rust \u8981\u5efa\u7acb\u4e00\u500b\u6240\u8b02\u7684\u300c\u5c08\u6848\u300d\u4e5f\u4e0d\u8907\u96dc\uff0c\u6700\u967d\u6625\u7684\u5c08\u6848\u5176\u5be6\u53ea\u8981\u4e00\u500b ",(0,n.jsx)(r.code,{children:".toml"})," \u8a2d\u5b9a\u6a94\u5c31\u884c\u4e86\u3002",(0,n.jsx)(r.code,{children:"TOML"})," \u662f Tom's Obvious, Minimal Language\uff08\u6e6f\u59c6\u7684\u6dfa\u986f\u7684\u3001\u6975\u7c21\u7684\u8a9e\u8a00\uff09\u5e7e\u500b\u5b57\u7684\u7e2e\u5beb\uff0c\u5176\u4e2d Tom \u5c31\u662f\u9019\u500b\u8a2d\u5b9a\u6a94\u683c\u5f0f\u7684\u4f5c\u8005\u3002TOML \u7684\u683c\u5f0f\u5beb\u8d77\u4f86\u6703\u5206\u6bb5\u843d\uff0c\u4e26\u4e14\u4f7f\u7528 Key = Value \u7684\u65b9\u5f0f\u4f86\u64b0\u5beb\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u63a5\u4e0b\u4f86\u8acb\u4f60\u540c\u6a23\u5728\u4e00\u500b\u4f60\u627e\u7684\u5230\u7684\u5730\u65b9\uff0c\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,n.jsx)(r.code,{children:"Cargo.toml"})," \u7684\u6a94\u6848\uff0c\u6a94\u6848\u5167\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-toml",children:'[package]\r\nname = "hello_rust"\r\nversion = "0.0.1"\r\n\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u500b\u6a94\u540d\u898f\u5b9a\u8981\u53eb\u505a ",(0,n.jsx)(r.code,{children:"Cargo"}),"\uff0cCargo \u9019\u500b\u5b57\u662f\u8f2a\u8239\u3001\u98db\u6a5f\u7b49\u5927\u578b\u4ea4\u901a\u5de5\u5177\u88dd\u8f09\u7684\u8ca8\u7269\u7684\u610f\u601d\uff0c\u4e5f\u5c31\u662f\u6211\u5011\u5e38\u770b\u5230\u7684\u90a3\u4e9b\u8ca8\u6ac3\uff0c\u9019\u500b\u540d\u5b57\u6eff\u8cbc\u5207\u7684\u3002\u9019\u6a23\u5c31\u662f\u6700\u6700\u6700\u967d\u6625\u7684 Rust \u5c08\u6848\uff0c\u5728 ",(0,n.jsx)(r.code,{children:"[package]"})," \u6bb5\u843d\u88e1\uff0c",(0,n.jsx)(r.code,{children:"name"})," \u6307\u7684\u662f\u9019\u500b\u5c08\u6848\u7684\u540d\u7a31\uff0c\u800c",(0,n.jsx)(r.code,{children:"version"})," \u5c31\u662f\u9019\u500b\u5c08\u6848\u7684\u7248\u672c\uff0c\u9019\u5169\u500b\u6b04\u4f4d\u662f\u4e00\u5b9a\u8981\u586b\u5beb\u7684\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u63a5\u8457\u53ef\u4ee5\u57f7\u884c\u9019\u500b\u6307\u4ee4\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"$ cargo run\r\n\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u9019\u6642\u5019\u4f60\u61c9\u8a72\u6703\u770b\u5230\u4ee5\u4e0b\u7684\u932f\u8aa4\u8a0a\u606f\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"error: failed to parse manifest at `/tmp/hello-rust/Cargo.toml`\r\n\r\nCaused by:\r\n  no targets specified in the manifest\r\n  either src/lib.rs, src/main.rs, a [lib] section, or [[bin]] section must be present\r\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u4e0d\u7528\u6015\uff0c\u9019\u6bb5\u932f\u8aa4\u8a0a\u606f\u5176\u5be6\u662f\u8ddf\u4f60\u62b1\u6028\u8aaa\u5b83\u5c11\u4e86\u4e00\u4e9b\u6a94\u6848\uff0c\u4e0d\u77e5\u9053\u600e\u9ebc\u9032\u884c\u4e0b\u4e00\u6b65\uff0c\u56e0\u70ba\u5b83\u9810\u671f\u5728 ",(0,n.jsx)(r.code,{children:"src"})," \u76ee\u9304\u88e1\u61c9\u8a72\u8981\u6709\u4e00\u500b ",(0,n.jsx)(r.code,{children:"lib.rs"})," \u6216 ",(0,n.jsx)(r.code,{children:"main.rs"})," \u6a94\u6848\uff0c\u4f46\u6211\u5011\u73fe\u5728\u4e26\u6c92\u6709\u9019\u500b\u6a94\u6848\u3002\u65e2\u7136\u6c92\u6709\uff0c\u90a3\u6211\u5011\u5c31\u505a\u7d66\u5b83\uff0c\u6211\u5c31\u624b\u5de5\u5efa\u7acb\u4e00\u500b ",(0,n.jsx)(r.code,{children:"src"})," \u76ee\u9304\uff0c\u4e26\u4e14\u5728\u88e1\u9762\u5efa\u7acb\u4e00\u500b\u540d\u70ba ",(0,n.jsx)(r.code,{children:"main.rs"})," \u7684\u6a94\u6848\uff0c\u6a94\u6848\u5167\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-rust",children:'fn main() {\r\n    println!("Hello Rust from Cargo!")\r\n}\r\n\n'})}),"\n",(0,n.jsx)(r.p,{children:"\u9019\u6642\u6574\u500b\u76ee\u9304\u7684\u7d50\u69cb\u9577\u9019\u6a23\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"D:.\r\n\u2502  Cargo.toml \r\n\u251c\u2500src\r\n\u2502      main.rs\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u7684 VSCode \u6709\u5b89\u88dd ",(0,n.jsx)(r.code,{children:"rust-analyzer"})," \u64f4\u5145\u5957\u4ef6\u7684\u8a71\uff0c\u4f60\u53ef\u80fd\u6703\u767c\u73fe\u5b83\u81ea\u52d5\u5e6b\u4f60\u7522\u751f\u4e00\u4e9b\u6a94\u6848\u8ddf\u76ee\u9304\uff0c\u4f46\u5148\u4e0d\u7528\u7ba1\u5b83\u3002\u6211\u5011\u518d\u57f7\u884c\u4e00\u6b21\u525b\u624d\u5931\u6557\u7684\u6307\u4ee4\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ cargo run\r\n   Compiling hello_rust v0.0.1 (/private/tmp/hello-rust)\r\n    Finished dev [unoptimized + debuginfo] target(s) in 0.07s\r\n     Running `target/debug/hello_rust`\r\nHello Rust from Cargo!\r\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u6700\u5f8c\u4e00\u884c\u5c31\u6210\u529f\u5370\u51fa ",(0,n.jsx)(r.code,{children:"Hello Rust form Cargo!"})," \u5b57\u6a23\u4e86\u3002\u518d\u4ed4\u7d30\u89c0\u5bdf\u4e0a\u9762\u7684\u8a0a\u606f\uff0c\u6703\u767c\u73fe\u5728\u904e\u7a0b\u4e2d\u6703\u5e6b\u4f60\u628a\u7de8\u8b6f\u7684\u6a94\u6848\u653e\u5728 ",(0,n.jsx)(r.code,{children:"target/debug/"})," \u76ee\u9304\u88e1\uff0c\u4e26\u5e6b\u4f60\u751f\u6210\u4e00\u500b ",(0,n.jsx)(r.code,{children:"hello_rust"})," \u7684\u57f7\u884c\u6a94\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u500b ",(0,n.jsx)(r.code,{children:"cargo run"})," \u6307\u4ee4\u7684\u529f\u7528\uff0c\u5c31\u662f\u6703\u5e6b\u4f60\u9032\u884c\u7de8\u8b6f\u4e26\u4e14\u76f4\u63a5\u57f7\u884c\u7de8\u8b6f\u597d\u7684\u57f7\u884c\u6a94\u3002\u5982\u679c\u53ea\u662f\u60f3\u55ae\u7d14\u7de8\u8b6f\u7684\u8a71\uff0c\u53ef\u4ee5\u53ea\u7528 ",(0,n.jsx)(r.code,{children:"cargo build"})," \u6307\u4ee4\u5c31\u597d\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u540c\u6642\u4f60\u53ef\u80fd\u6709\u6ce8\u610f\u5230\u4e0a\u9762\u7684\u8a0a\u606f\u88e1\u6709\u500b ",(0,n.jsx)(r.code,{children:"unoptimized"})," \u7684\u5b57\u6a23\uff0c\u8868\u793a\u9019\u500b\u6307\u4ee4\u4e26\u4e0d\u6703\u9032\u884c\u6700\u4f73\u5316\u7de8\u8b6f\u3002\u5982\u679c\u60f3\u8981\u6709\u6700\u4f73\u5316\u6548\u679c\uff0c\u4e0d\u7ba1\u662f ",(0,n.jsx)(r.code,{children:"cargo run"})," \u6216 ",(0,n.jsx)(r.code,{children:"cargo build"})," \u90fd\u53ef\u4ee5\uff0c\u53ea\u8981\u5728\u5f8c\u9762\u52a0\u4e0a ",(0,n.jsx)(r.code,{children:"--release"})," \u53c3\u6578\u5c31\u884c\u4e86\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ cargo build --release\r\n   Compiling hello_rust v0.0.1 (/private/tmp/hello-rust)\r\n    Finished release [optimized] target(s) in 0.10s\r\n              \r\n$ cargo run --release\r\n    Finished release [optimized] target(s) in 0.00s\r\n     Running `target/release/hello_rust`\r\nHello Rust from Cargo!\r\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5b83\u7de8\u8b6f\u51fa\u4f86\u7684\u7522\u7269\u6703\u653e\u5728 ",(0,n.jsx)(r.code,{children:"target/release"})," \u76ee\u9304\u88e1\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u5c08\u6848\u958b\u767c\u7684\u904e\u7a0b\u4e2d\u6211\u5011\u53ef\u80fd\u5e38\u5e38\u6703\u4e0d\u65b7\u91cd\u8907\u9032\u884c\u4fee\u6539\u539f\u59cb\u78bc + \u7de8\u8b6f\u7684\u52d5\u4f5c\uff0c\u9810\u8a2d\u7684\u7de8\u8b6f\u53c3\u6578\u96d6\u7136\u4e0d\u662f\u6700\u4f73\u5316\uff08unoptimized\uff09\uff0c\u4f46\u7de8\u8b6f\u7684\u901f\u5ea6\u6bd4\u8f03\u5feb\uff0c\u7b49\u5230\u8981\u6b63\u5f0f\u767c\u4f48\u7684\u6642\u5019\u518d\u52a0\u4e0a ",(0,n.jsx)(r.code,{children:"--release"})," \u53c3\u6578\u5373\u53ef\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u900f\u904e ",(0,n.jsx)(r.code,{children:"cargo run"})," \u6216 ",(0,n.jsx)(r.code,{children:"cargo build"})," \u5efa\u7acb\u51fa\u4f86\u7684\u7522\u51fa\u7269\u6703\u653e\u5728 ",(0,n.jsx)(r.code,{children:"target"})," \u76ee\u9304\u88e1\uff0c\u5982\u679c\u4e0d\u60f3\u8981\u4e86\uff0c\u76f4\u63a5\u7528\u958b\u6a94\u6848\u7e3d\u7ba1\u628a\u6574\u500b ",(0,n.jsx)(r.code,{children:"target"})," \u76ee\u9304\u4e1f\u6389\u5c31\u884c\u4e86\uff0c\u6216\u60f3\u6572\u6307\u4ee4\u800d\u4e00\u4e0b\u5e25\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ruby",children:"$ cargo clean\r\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u5c31\u6703\u628a ",(0,n.jsx)(r.code,{children:"target"})," \u76ee\u9304\u522a\u6389\u4e86\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5efa\u7acb\u5c08\u6848\u81ea\u52d5\u7248",children:"\u5efa\u7acb\u5c08\u6848\uff08\u81ea\u52d5\u7248\uff09"}),"\n",(0,n.jsxs)(r.p,{children:["\u524d\u9762\u9019\u500b\u624b\u52d5\u7de8\u5beb ",(0,n.jsx)(r.code,{children:"Cargo.toml"})," \u6a94\u6848\uff0c\u9084\u8981\u81ea\u5df1\u5efa\u7acb ",(0,n.jsx)(r.code,{children:"src"})," \u76ee\u9304\u8ddf ",(0,n.jsx)(r.code,{children:"main.rs"})," \u6a94\u6848\uff0c\u96d6\u7136\u4e5f\u4e0d\u9ebb\u7169\uff0c\u4f46\u53ea\u8981\u4e00\u500b ",(0,n.jsx)(r.code,{children:"cargo"})," \u6307\u4ee4\u5c31\u53ef\u4ee5\u76f4\u5e6b\u6211\u5011\u7522\u751f\u4e0a\u9762\u7684\u5167\u5bb9\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-go",children:"$ cargo new hey-rust\r\nCreated binary (application) `hey-rust` package\r\n\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u500b\u6307\u4ee4\u6703\u5e6b\u4f60\u5efa\u7acb\u4e00\u500b ",(0,n.jsx)(r.code,{children:"hey-rust"})," \u76ee\u9304\uff0c\u9ede\u958b\u770b\u88e1\u9762\u7684\u5167\u5bb9\u5c31\u6703\u767c\u73fe\u9019\u8ddf\u6211\u5011\u525b\u525b\u624b\u5de5\u6253\u9020\u7684\u7d50\u69cb\u662f\u4e00\u6a23\u7684\u3002\u4ed4\u7d30\u89c0\u5bdf\u6703\u767c\u73fe\u9084\u6703\u5e6b\u4f60\u52a0\u4e00\u500b ",(0,n.jsx)(r.code,{children:".gitignore"}),"\uff0c\u4e26\u4e14\u628a ",(0,n.jsx)(r.code,{children:"target"})," \u76ee\u9304\u6392\u9664\u5728 Git \u7248\u63a7\u4e4b\u5916\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u540c\u6a23\u4e5f\u662f ",(0,n.jsx)(r.code,{children:"cargo"})," \u7cfb\u5217\u7684\u6307\u4ee4\uff0c\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"cargo init hey-rust"})," \u4e5f\u6703\u5e6b\u4f60\u505a\u51fa\u8ddf ",(0,n.jsx)(r.code,{children:"cargo new hey-rust"})," \u4e00\u6a23\u7684\u5167\u5bb9\uff0c\u7136\u5f8c\u5982\u679c ",(0,n.jsx)(r.code,{children:"cargo init"})," \u4e0d\u52a0\u53c3\u6578\u7684\u8a71\uff0c\u522a\u4e0d\u6703\u5e6b\u4f60\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u76ee\u9304\uff0c\u800c\u662f\u5728\u7576\u4e0b\u76ee\u9304\u5e6b\u4f60\u5efa\u7acb\u9019\u4e9b\u76f8\u95dc\u7684\u6a94\u6848\uff0c\u5927\u5bb6\u5c31\u8996\u5be6\u969b\u60c5\u6cc1\u4f7f\u7528\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u66fe\u7d93\u958b\u767c\u904e\u524d\u7aef\u76f8\u95dc\u7684\u5c08\u6848\uff0c\u5230\u9019\u88e1\u61c9\u8a72\u6703\u6709\u9ede\u5373\u8996\u611f\uff0c\u9019\u6ce2\u64cd\u4f5c\u5c31\u8ddf ",(0,n.jsx)(r.code,{children:"npm init"})," \u6709\u9ede\u50cf\u3002\u5176\u5be6\u662f\u7684\uff0c\u96d6\u7136\u4e0d\u5b8c\u5168\u4e00\u6a23\uff0c\u4f46\u4f60\u53ef\u4ee5\u628a Rust \u88e1\u7684 ",(0,n.jsx)(r.code,{children:"cargo"})," \u6307\u4ee4\u7576\u6210\u662f JS \u88e1\u7684 ",(0,n.jsx)(r.code,{children:"npm"})," \u6307\u4ee4\u770b\u5f85\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"\u5b89\u88dd\u5957\u4ef6",children:"\u5b89\u88dd\u5957\u4ef6"}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u8981\u4f7f\u7528\u5225\u4eba\u5beb\u597d\u7684\u5957\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(r.code,{children:"cargo add"})," \u6307\u4ee4\u52a0\u4e0a\u5957\u4ef6\u540d\u7a31\uff0c\u5c31\u6574\u500b\u6703\u5e6b\u4f60\u81ea\u52d5\u5b89\u88dd\u5230\u597d\uff0c\u4f8b\u5982\u6211\u5011\u4f86\u5b89\u88dd\u4e00\u500b\u7522\u751f\u4e82\u6578\u7684\u5957\u4ef6 ",(0,n.jsx)(r.code,{children:"rand"}),"\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ cargo add rand\r\n    Updating crates.io index\r\n      Adding rand v0.8.5 to dependencies.\r\n             Features:\r\n             + alloc\r\n             + getrandom\r\n             ...\u7565...\r\n             - serde1\r\n             - simd_support\r\n             - small_rng\r\n    Updating crates.io index\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u6a23\u5c31\u88dd\u597d\u4e86\u3002\u9019\u6642\u4f60\u6253\u958b ",(0,n.jsx)(r.code,{children:"Cargo.toml"})," \u770b\u4e00\u4e0b\uff0c\u6703\u767c\u73fe\u5728\u5e95\u4e0b\u7684 ",(0,n.jsx)(r.code,{children:"[dependencies]"})," \u6bb5\u843d\u591a\u4e86\u4e00\u4e9b\u6771\u897f\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-toml",children:'[dependencies]\r\nrand = "0.8.5"\n'})}),"\n",(0,n.jsxs)(r.p,{children:["\u554f\u984c\u4f86\u4e86\uff0c\u9019\u500b\u6307\u4ee4\u600e\u9ebc\u77e5\u9053\u5b83\u8981\u53bb\u54ea\u88e1\u627e\u5957\u4ef6\uff1fJavaScript \u7684 ",(0,n.jsx)(r.code,{children:"npm"})," \u6709 ",(0,n.jsx)(r.a,{href:"https://www.npmjs.com/",children:"https://www.npmjs.com/"}),"\uff0cRuby \u7684 ",(0,n.jsx)(r.code,{children:"gem"})," \u6307\u4ee4\u6709 ",(0,n.jsx)(r.a,{href:"https://rubygems.org/",children:"https://rubygems.org/"}),"\uff0c\u800c Rust \u7684 ",(0,n.jsx)(r.code,{children:"cargo"})," \u6709 ",(0,n.jsx)(r.a,{href:"https://crates.io/",children:"https://crates.io/"})," \u7db2\u7ad9\uff1a"]}),"\n",(0,n.jsx)(r.p,{children:"Crate \u82f1\u6587\u662f\u88dd\u6771\u897f\u7684\u677f\u689d\u7bb1\uff08\u5c31\u5982\u5b83\u7684 Logo\uff09\uff0c\u9019\u540d\u5b57\u4e5f\u633a\u8cbc\u5207\u7684\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u9664\u4e86 ",(0,n.jsx)(r.code,{children:"Cargo.toml"})," \u6a94\u6848\u591a\u4e86\u4e00\u4e9b\u6a94\u6848\uff0c\u540c\u6642\u76ee\u9304\u4e0b\u4e5f\u6709\u4e00\u500b ",(0,n.jsx)(r.code,{children:"Cargo.lock"})," \u6a94\u6848\uff0c\u4f60\u53ef\u4ee5\u62ff JavaScript \u7684 ",(0,n.jsx)(r.code,{children:"package.json"})," \u8ddf ",(0,n.jsx)(r.code,{children:"package.lock"})," \u4f86\u985e\u6bd4 ",(0,n.jsx)(r.code,{children:"Cargo.toml"})," \u4ee5\u53ca ",(0,n.jsx)(r.code,{children:"Cargo.lock"}),"\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5176\u5be6\u65e9\u671f\u8981\u5b89\u88dd\u5957\u4ef6\u6703\u6bd4\u8f03\u8f9b\u82e6\u4e00\u9ede\uff0c\u5fc5\u9808\u624b\u52d5\u5728 ",(0,n.jsx)(r.code,{children:"Cargo.toml"})," \u6a94\u6848\u88e1\u52a0\u4e0a ",(0,n.jsx)(r.code,{children:'rand = "0.8.5"'})," \u7684\u8a2d\u5b9a\uff0c\u7136\u5f8c\u518d\u57f7\u884c ",(0,n.jsx)(r.code,{children:"cargo run"})," \u6216 ",(0,n.jsx)(r.code,{children:"cargo build"})," \u6307\u4ee4\u9032\u884c\u7de8\u8b6f\uff0c\u5f8c\u4f86 Rust \u5728 ",(0,n.jsx)(r.a,{href:"https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html",children:"1.62.0"})," \u7248\u672c\u958b\u59cb\u52a0\u5165\u4e86 ",(0,n.jsx)(r.code,{children:"cargo add"})," \u6307\u4ee4\uff0c\u8b93\u5b89\u88dd\u7684\u904e\u7a0b\u9806\u624b\u4e0d\u5c11\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u53c3\u8003\u8cc7\u6599\uff1a",(0,n.jsx)(r.a,{href:"https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html",children:"https://blog.rust-lang.org/2022/06/30/Rust-1.62.0.html"})]}),"\n",(0,n.jsx)(r.h3,{id:"\u5957\u4ef6\u88dd\u5230\u54ea\u88e1\u53bb\u4e86",children:"\u5957\u4ef6\u88dd\u5230\u54ea\u88e1\u53bb\u4e86\uff1f"}),"\n",(0,n.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u662f\u524d\u7aef\u5de5\u7a0b\u5e2b\uff0c\u5927\u6982\u77e5\u9053 ",(0,n.jsx)(r.code,{children:"npm install"})," \u6307\u4ee4\u6703\u628a\u76f8\u95dc\u7684\u5957\u4ef6\u88dd\u4e00\u4efd\u5230 ",(0,n.jsx)(r.code,{children:"node_modules"})," \u88e1\uff0c\u4f46\u4ed4\u7d30\u770b\u525b\u525b\u5efa\u7acb\u7684\u5c08\u6848\uff0c\u88e1\u9762\u597d\u50cf\u6c92\u770b\u5230\u50cf\u662f\u5b89\u88dd\u597d\u7684 ",(0,n.jsx)(r.code,{children:"rand"})," \u5957\u4ef6\uff1f"]}),"\n",(0,n.jsxs)(r.p,{children:["\u4e0d\u50cf npm \u7684\u5c08\u6848\u662f\u6bcf\u500b\u5c08\u6848\u90fd\u88dd\u4e00\u5957\uff0cRust \u7684\u5957\u4ef6\u6703\u7d71\u4e00\u5b89\u88dd\u5728\u500b\u4eba\u4f7f\u7528\u8005\u7684 Home \u76ee\u9304\u5e95\u4e0b\uff0c\u5728 Mac / Linux \u4f5c\u696d\u7cfb\u7d71\u6703\u5728 ",(0,n.jsx)(r.code,{children:"~/.cargo/"}),"\uff0cWindows \u4f5c\u696d\u7cfb\u7d71\u5247\u662f\u5b89\u88dd\u5728 ",(0,n.jsx)(r.code,{children:"C:\\Users\\\u4f60\u7684\u4f7f\u7528\u8005\u540d\u7a31\\.cargo"}),"\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"space-vs-tab\u4f60\u662f\u54ea\u4e00\u6d3e",children:"Space vs Tab\uff0c\u4f60\u662f\u54ea\u4e00\u6d3e\uff1f"}),"\n",(0,n.jsx)(r.p,{children:"\u5404\u4f4d\u5beb\u7a0b\u5f0f\u7684\u6642\u5019\uff0c\u4f60\u662f\u7528\u7a7a\u767d\u9375\u9084\u662f Tab \u9375\u4f86\u9032\u884c\u7e2e\u6392\uff1f\u5982\u679c\u662f\u7a7a\u767d\u9375\u7684\u8a71\uff0c\u4f60\u662f\u7528 2 \u500b\u7a7a\u767d\u9375\u30014 \u500b\u7a7a\u767d\u9375\u9084\u662f 8 \u500b\u7a7a\u767d\u9375\uff1f\u9019\u4e00\u76f4\u5c31\u662f\u5435\u4e0d\u5b8c\u7684\u8a71\u984c\uff0c\u6bcf\u500b\u7a0b\u5f0f\u8a9e\u8a00\u7684\u6163\u4f8b\u4e5f\u90fd\u4e0d\u592a\u4e00\u6a23\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u6839\u64da Rust \u5b98\u65b9\u624b\u518a\u7684 ",(0,n.jsx)(r.a,{href:"https://doc.rust-lang.org/style-guide/",children:"Coding Style"})," \u5efa\u8b70\uff1a"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Use ",(0,n.jsx)(r.strong,{children:"spaces"}),", not tabs."]}),"\n",(0,n.jsxs)(r.li,{children:["Each level of indentation must be ",(0,n.jsx)(r.strong,{children:"four"})," spaces"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["\u597d\u5566\uff0c\u5927\u5bb6\u4e0d\u7528\u5435\u5566\uff0c\u5b98\u65b9\u5efa\u8b70\u7528\u300c4 \u500b\u7a7a\u767d\u9375\u300d\u3002\u7136\u800c\u5728 JavaScript \u6709 ",(0,n.jsx)(r.code,{children:"prettier"})," \u5957\u4ef6\uff0cGolang \u6709 ",(0,n.jsx)(r.code,{children:"gofmt"})," \u6216 ",(0,n.jsx)(r.code,{children:"go fmt"})," \u6307\u4ee4\uff0c\u5728 Rust \u4e5f\u6709 ",(0,n.jsx)(r.code,{children:"rustfmt"}),"\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ rustfmt src/main.rs\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u500b\u6307\u4ee4\u6703\u81ea\u52d5\u4f9d\u7167 Rust \u5b98\u65b9\u5efa\u8b70\u7684\u65b9\u5f0f\u5e6b\u4f60\u8abf\u6574\u6a94\u6848\u7684\u7e2e\u6392\uff084 \u500b\u7a7a\u767d\u9375\uff09\u3002\u7576\u7136\uff0c\u5982\u679c\u4f60\u4e0d\u8a8d\u540c Rust \u7684\u5b98\u65b9\u5efa\u8b70\u98a8\u683c\uff0c\u4f60\u5c31\u662f\u89ba\u5f97 3 \u500b\u7a7a\u767d\u9375\u6bd4\u8f03\u9177\uff08\uff1f\uff09\uff0c\u4f60\u53ef\u4ee5\u5728\u5c08\u6848\u5e95\u4e0b\u653e\u500b ",(0,n.jsx)(r.code,{children:"rustfmt.toml"})," \u8a2d\u5b9a\u6a94\uff0c\u88e1\u9762\u9019\u6a23\u5beb\uff1a"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-toml",children:"tab_spaces = 3\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u9019\u6a23\u4ee5\u5f8c\u683c\u5f0f\u5316\u51fa\u4f86\u7684\u7d50\u679c\u5c31\u662f\u7528 3 \u500b\u7a7a\u767d\u9375\u4e86\u3002\u66f4\u591a\u95dc\u65bc ",(0,n.jsx)(r.code,{children:"rustfmt.toml"})," \u7684\u8a2d\u5b9a\u5167\u5bb9\u53ef\u53c3\u8003",(0,n.jsx)(r.a,{href:"https://rust-lang.github.io/rustfmt/",children:"\u6587\u4ef6"}),"\u8aaa\u660e\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u53c3\u8003\u8cc7\u6599\uff1a",(0,n.jsx)(r.a,{href:"https://rust-lang.github.io/rustfmt/",children:"https://rust-lang.github.io/rustfmt/"})]}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u4f60\u662f\u4e00\u500b Cargo \u5c08\u6848\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u9019\u6a23\u505a\uff1a"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"$ cargo fmt\r\n\n"})}),"\n",(0,n.jsx)(r.p,{children:"\u9019\u4e5f\u6703\u5e6b\u4f60\u505a\u985e\u4f3c\u7684\u4e8b"})]})}function h(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>l,x:()=>i});var n=s(6540);const c={},d=n.createContext(c);function l(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);