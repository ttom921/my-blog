"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[4967],{1956:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var s=r(4848),d=r(8453);const o={"\uff03id":"doc-markdown",title:"rust\u7684actix\u4e4bweb",description:"\u5b78\u7fd2\u6709\u95dcrust\u5728web\u7684\u61c9\u7528 problem",keywords:["rust","actix"],last_update:{date:"3/22/2024",author:"ttom"}},t="\u524d\u8a00",i={id:"\u5b78\u7fd2/rust/rust\u7684actix\u4e4bweb",title:"rust\u7684actix\u4e4bweb",description:"\u5b78\u7fd2\u6709\u95dcrust\u5728web\u7684\u61c9\u7528 problem",source:"@site/docs/\u5b78\u7fd2/rust/rust\u7684actix\u4e4bweb.md",sourceDirName:"\u5b78\u7fd2/rust",slug:"/\u5b78\u7fd2/rust/rust\u7684actix\u4e4bweb",permalink:"/my-blog/docs/\u5b78\u7fd2/rust/rust\u7684actix\u4e4bweb",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{"\uff03id":"doc-markdown",title:"rust\u7684actix\u4e4bweb",description:"\u5b78\u7fd2\u6709\u95dcrust\u5728web\u7684\u61c9\u7528 problem",keywords:["rust","actix"],last_update:{date:"3/22/2024",author:"ttom"}},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/my-blog/docs/tutorial-extras/translate-your-site"}},c={},l=[{value:"\u5efa\u7acb\u65b0\u5c08\u6848",id:"\u5efa\u7acb\u65b0\u5c08\u6848",level:2},{value:"\u5efa\u7acb\u7b2c\u4e00\u652f",id:"\u5efa\u7acb\u7b2c\u4e00\u652f",level:2},{value:"1. \u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab",id:"1-\u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab",level:3},{value:"2. \u5b9a\u7fa9\u56de\u61c9\u7d50\u69cb",id:"2-\u5b9a\u7fa9\u56de\u61c9\u7d50\u69cb",level:3},{value:"3. \u5b9a\u7fa9\u5065\u5eb7\u6aa2\u67e5\u8def\u7531",id:"3-\u5b9a\u7fa9\u5065\u5eb7\u6aa2\u67e5\u8def\u7531",level:3},{value:"4. \u5b9a\u7fa9\u672a\u627e\u5230\u7684\u8def\u7531",id:"4-\u5b9a\u7fa9\u672a\u627e\u5230\u7684\u8def\u7531",level:3},{value:"5. \u4e3b\u51fd\u5f0f",id:"5-\u4e3b\u51fd\u5f0f",level:3},{value:"\u6a21\u7d44\u5316\u958b\u767c",id:"\u6a21\u7d44\u5316\u958b\u767c",level:2},{value:"\u958b\u59cb Todo List \u7684 API Endpoint",id:"\u958b\u59cb-todo-list-\u7684-api-endpoint",level:2},{value:"A. \u5efa\u7acb Todo \u7684\u8cc7\u6599 Model",id:"a-\u5efa\u7acb-todo-\u7684\u8cc7\u6599-model",level:3},{value:"B. \u5b9a\u7fa9\u4e00\u500b\u5167\u5b58\u8cc7\u6599\u5eab\u4f86\u5b58\u5132 Todo \u7269\u4ef6",id:"b-\u5b9a\u7fa9\u4e00\u500b\u5167\u5b58\u8cc7\u6599\u5eab\u4f86\u5b58\u5132-todo-\u7269\u4ef6",level:3},{value:"1. \u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab",id:"1-\u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab-1",level:4},{value:"2. \u5b9a\u7fa9\u8cc7\u6599\u5eab\u7d50\u69cb",id:"2-\u5b9a\u7fa9\u8cc7\u6599\u5eab\u7d50\u69cb",level:4},{value:"3. \u70ba\u8cc7\u6599\u5eab\u7d50\u69cb\u5be6\u73fe\u529f\u80fd",id:"3-\u70ba\u8cc7\u6599\u5eab\u7d50\u69cb\u5be6\u73fe\u529f\u80fd",level:4},{value:"4. \u5728 <code>src/repository/mod.rs</code> \u4e2d\u7684\u6a21\u7d44\u8072\u660e",id:"4-\u5728-srcrepositorymodrs-\u4e2d\u7684\u6a21\u7d44\u8072\u660e",level:4},{value:"C. \u5b9a\u7fa9\u8207 Todo \u76f8\u95dc\u7684 API \u7aef\u9ede",id:"c-\u5b9a\u7fa9\u8207-todo-\u76f8\u95dc\u7684-api-\u7aef\u9ede",level:3},{value:"1. \u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab",id:"1-\u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab-2",level:4},{value:"2. \u5b9a\u7fa9 API Endpoint",id:"2-\u5b9a\u7fa9-api-endpoint",level:4},{value:"3. \u914d\u7f6e API",id:"3-\u914d\u7f6e-api",level:4},{value:"4. \u5728 <code>src/api/mod.rs</code> \u4e2d\u7684\u6a21\u7d44\u8072\u660e",id:"4-\u5728-srcapimodrs-\u4e2d\u7684\u6a21\u7d44\u8072\u660e",level:4},{value:"GET /todos",id:"get-todos",level:2},{value:"GET /todos/{id}",id:"get-todosid",level:2},{value:"PUT /todos/{id}",id:"put-todosid",level:2},{value:"DELETE /todos/{id}",id:"delete-todosid",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u524d\u8a00",children:"\u524d\u8a00"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7576\u4eca\u7684\u7db2\u8def\u958b\u767c\u4e2d\uff0cREST API \u5df2\u6210\u70ba\u8a31\u591a\u61c9\u7528\u7a0b\u5f0f\u548c\u7cfb\u7d71\u4e4b\u9593\u4ea4\u4e92\u7684\u4e3b\u8981\u65b9\u5f0f\u3002Actix Web\uff0c\u4f5c\u70ba\u4e00\u500b\u9ad8\u6548\u80fd\u7684 Rust \u7db2\u9801\u6846\u67b6\uff0c\u63d0\u4f9b\u4e86\u5efa\u7acb\u9019\u4e9b API \u7684\u5f37\u5927\u5de5\u5177\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u672c\u6587\u7ae0\u5c07\u6703\u5e36\u4f60\u8d70\u904e\u4f7f\u7528 Actix Web \u5efa\u7acb REST API \u7684\u6574\u500b\u904e\u7a0b\uff0c\u5f9e\u5c08\u6848\u7684\u521d\u59cb\u5316\u5230\u5be6\u4f5c Todo List \u7684 CRUD API\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u5efa\u7acb\u65b0\u5c08\u6848",children:"\u5efa\u7acb\u65b0\u5c08\u6848"}),"\n",(0,s.jsx)(n.p,{children:"\u958b\u59cb\u65b0\u589e\u4e00\u500b\u5c08\u6848\u5427\uff01\u5c08\u6848\u540d\u7a31\u9019\u88e1\u5c31\u7528 actix_todo\uff0c\u5728\u7d42\u7aef\u6a5f\u57f7\u884c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo new actix_todo\r\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5efa\u7acb\u5b8c\u5c08\u6848\u5f8c\uff0c\u63a5\u4e0b\u4f86\u9019\u500b\u5c08\u6848\u9084\u9700\u8981\u5b89\u88dd\u4ee5\u4e0b\u5e7e\u500b\u5957\u4ef6\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://crates.io/crates/actix-web",children:"actix-web"}),": Actix Web \u662f\u4e00\u500b\u9ad8\u6548\u80fd\u3001\u975e\u5e38\u9748\u6d3b\u7684 Rust \u7db2\u9801\u6846\u67b6\u3002\u53ef\u4ee5\u5efa\u7acb\u7db2\u9801\u4f3a\u670d\u5668\u3001\u5ba2\u6236\u7aef\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://crates.io/crates/serde",children:"serde"}),": Serde \u662f\u4e00\u500b Rust \u7684\u5e8f\u5217\u5316\u6846\u67b6\uff0c\u5141\u8a31\u5c07\u8907\u96dc\u7684\u6578\u64da\u7d50\u69cb\u8f49\u63db\u6210\u70ba\u50cf\u662f JSON \u9019\u6a23\u7684\u7c21\u55ae\u683c\u5f0f\uff0c\u4e26\u4e14\u9084\u80fd\u5f9e\u9019\u4e9b\u683c\u5f0f\u4e2d\u53cd\u5e8f\u5217\u5316\u56de Rust \u7684\u6578\u64da\u7d50\u69cb\u3002\u5728\u8a31\u591a REST API \u7684\u5be6\u4f5c\u4e2d\uff0cSerde \u662f\u4e0d\u53ef\u6216\u7f3a\u7684\u5de5\u5177\uff0c\u56e0\u70ba\u5b83\u4f7f\u5f97\u6578\u64da\u7684\u4ea4\u63db\u8b8a\u5f97\u975e\u5e38\u7c21\u55ae\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://crates.io/crates/chrono",children:"chrono"}),": Chrono \u662f\u4e00\u500b\u8655\u7406\u65e5\u671f\u548c\u6642\u9593\u7684 Rust \u51fd\u5f0f\u5eab\u3002\u5b83\u63d0\u4f9b\u4e86\u65e5\u671f\u3001\u6642\u9593\u3001\u65e5\u671f\u6642\u9593\u3001\u6642\u5340\u7b49\u529f\u80fd\uff0c\u975e\u5e38\u9069\u5408\u5728\u9700\u8981\u6642\u9593\u6233\u8a18\u6216\u65e5\u671f\u64cd\u4f5c\u7684\u60c5\u5883\u4e2d\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://crates.io/crates/uuid",children:"uuid"}),": UUID \u51fd\u5f0f\u5eab\u5141\u8a31\u751f\u6210\u548c\u89e3\u6790\u552f\u4e00\u7684\u901a\u7528\u8b58\u5225\u78bc (UUID)\u3002\u5728\u8a31\u591a\u7cfb\u7d71\u4e2d\uff0cUUIDs \u5e38\u88ab\u7528\u4f5c\u552f\u4e00\u8b58\u5225\u8cc7\u6e90\u6216\u7269\u4ef6\uff0c\u7279\u5225\u662f\u7576\u50b3\u7d71\u7684\u81ea\u52d5\u905e\u589e ID \u4e0d\u9069\u7528\u6216\u4e0d\u5920\u5b89\u5168\u6642\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88dd\u65b9\u5f0f\u53ea\u8981\u5728\u7d42\u7aef\u6a5f\u5206\u5225\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo add actix-web\r\ncargo add serde --features derive\r\ncargo add chrono --features serde\r\ncargo add uuid --features v4\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u5efa\u7acb\u7b2c\u4e00\u652f",children:"\u5efa\u7acb\u7b2c\u4e00\u652f"}),"\n",(0,s.jsx)(n.h3,{id:"1-\u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab",children:"1. \u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use actix_web::{get, web, App, HttpResponse, HttpServer, Responder, Result};\r\nuse serde::{Serialize};\r\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b2c\u4e00\u6b65\u8981\u5148\u5f15\u5165 Actix Web \u6846\u67b6\u4e2d\u6240\u9700\u7684\u5404\u7a2e\u5143\u4ef6\uff0c\u4ee5\u53ca Serde \u7684\u5e8f\u5217\u5316\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"2-\u5b9a\u7fa9\u56de\u61c9\u7d50\u69cb",children:"2. \u5b9a\u7fa9\u56de\u61c9\u7d50\u69cb"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[derive(Serialize)]\r\npub struct Response {\r\n    pub message: String,\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u88e1\u6211\u5011\u5b9a\u7fa9\u4e86\u4e00\u500b\u540d\u70ba ",(0,s.jsx)(n.code,{children:"Response"})," \u7684\u7d50\u69cb\uff0c\u5b83\u5305\u542b\u4e00\u500b\u516c\u958b\u7684 ",(0,s.jsx)(n.code,{children:"message"}),"\uff0c\u578b\u5225\u70ba String\u3002",(0,s.jsx)(n.code,{children:"#[derive(Serialize)]"})," \u662f\u4e00\u500b\u6a19\u8a18\uff0c\u5b83\u8b93 ",(0,s.jsx)(n.code,{children:"Response"})," \u7d50\u69cb\u53ef\u4ee5\u88ab\u81ea\u52d5\u5e8f\u5217\u5316\u70ba JSON \u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"3-\u5b9a\u7fa9\u5065\u5eb7\u6aa2\u67e5\u8def\u7531",children:"3. \u5b9a\u7fa9\u5065\u5eb7\u6aa2\u67e5\u8def\u7531"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[get("/health")]\r\nasync fn healthcheck() -> impl Responder {\r\n    let response = Response {\r\n        message: "Everything is working fine".to_string(),\r\n    };\r\n    HttpResponse::Ok().json(response)\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u6bb5\u7a0b\u5f0f\u78bc\u5b9a\u7fa9\u4e86\u4e00\u500b\u975e\u540c\u6b65\u7684 ",(0,s.jsx)(n.code,{children:"healthcheck"})," \u51fd\u5f0f\uff0c\u9019\u500b\u51fd\u5f0f\u6703\u56de\u61c9\u4e00\u500b\u8868\u793a API \u904b\u4f5c\u6b63\u5e38\u7684\u8a0a\u606f\u3002",(0,s.jsx)(n.code,{children:'#[get("/health")]'})," \u662f\u4e00\u500b\u8def\u7531\u6a19\u8a18\uff0c\u7576\u4f7f\u7528\u8005\u8a2a\u554f ",(0,s.jsx)(n.code,{children:"/health"})," \u8def\u5f91\u6642\uff0c\u9019\u500b\u51fd\u5f0f\u6703\u88ab\u547c\u53eb\u3002\u51fd\u5f0f\u4e2d\uff0c\u6211\u5011\u5efa\u7acb\u4e86\u4e00\u500b ",(0,s.jsx)(n.code,{children:"Response"})," \u7269\u4ef6\u4e26\u8fd4\u56de\u4e86\u4e00\u500b HTTP 200 OK \u7684\u56de\u61c9\uff0c\u5305\u542b\u8a72\u8a0a\u606f\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"4-\u5b9a\u7fa9\u672a\u627e\u5230\u7684\u8def\u7531",children:"4. \u5b9a\u7fa9\u672a\u627e\u5230\u7684\u8def\u7531"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'async fn not_found() -> Result<HttpResponse> {\r\n    let response = Response {\r\n        message: "Resource not found".to_string(),\r\n    };\r\n    Ok(HttpResponse::NotFound().json(response))\r\n}\r\n\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7576\u5176\u4ed6\u8def\u7531\u4e0d\u7b26\u5408\u7684\u6642\u5019\uff0c\u9019\u500b\u51fd\u5f0f\u5c07\u88ab\u547c\u53eb\u3002\u5b83\u56de\u61c9\u4e00\u500b HTTP 404 Not Found \u7684\u56de\u61c9\uff0c\u5305\u542b\u4e00\u500b\u8868\u793a\u8cc7\u6e90\u672a\u627e\u5230\u7684\u8a0a\u606f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"5-\u4e3b\u51fd\u5f0f",children:"5. \u4e3b\u51fd\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[actix_web::main]\r\nasync fn main() -> std::io::Result<()> {\r\n    HttpServer::new(|| App::new().service(healthcheck).default_service(web::route().to(not_found)))\r\n        .bind(("127.0.0.1", 8080))?\r\n        .run()\r\n        .await\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u5f8c\u5728\u6574\u500b\u7a0b\u5f0f\u7684\u5165\u53e3\u9ede - main\u3002",(0,s.jsx)(n.code,{children:"#[actix_web::main]"})," \u662f\u4e00\u500b\u7279\u6b8a\u7684\u6a19\u8a18\uff0c\u4f7f\u5f97\u975e\u540c\u6b65\u51fd\u5f0f\u53ef\u4ee5\u4f5c\u70ba\u4e3b\u51fd\u5f0f\u4f7f\u7528\u3002\u5728 ",(0,s.jsx)(n.code,{children:"main"})," \u4e2d\uff0c\u6211\u5011\u5efa\u7acb\u4e86\u4e00\u500b HTTP \u4f3a\u670d\u5668\uff0c\u6307\u5b9a\u4e86 ",(0,s.jsx)(n.code,{children:"/health"})," \u8def\u7531\u5230 ",(0,s.jsx)(n.code,{children:"healthcheck()"}),"\uff0c\u4e26\u8a2d\u5b9a\u4e86\u9810\u8a2d\u8def\u7531\u5230 ",(0,s.jsx)(n.code,{children:"not_found()"}),"\u3002\r\n\u6700\u5f8c\uff0c\u4f3a\u670d\u5668\u88ab\u7d81\u5b9a\u5230\u672c\u5730\u7684 ",(0,s.jsx)(n.code,{children:"127.0.0.1"}),"\uff0c\u7aef\u53e3 8080\uff0c\u4e26\u555f\u52d5\u5b83\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u7d42\u7aef\u6a5f\u57f7\u884c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo run\n"})}),"\n",(0,s.jsx)("img",{src:"https://ttom921.github.io/my-blog/assets/images/actix_web_2024-03-22_11-19-25-790e5b435863c062ca02a5a761593ad0.png"}),"\n",(0,s.jsx)(n.h2,{id:"\u6a21\u7d44\u5316\u958b\u767c",children:"\u6a21\u7d44\u5316\u958b\u767c"}),"\n",(0,s.jsx)(n.p,{children:"\u96a8\u8457\u6211\u5011\u9032\u4e00\u6b65\u6df1\u5165 Actix Web \u548c Rust\uff0c\u6211\u5011\u5c07\u6703\u9047\u5230\u8d8a\u4f86\u8d8a\u591a\u7684\u7a0b\u5f0f\u78bc\u3002\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u7c21\u55ae\u5730\u5c07\u6240\u6709\u529f\u80fd\u548c\u7d50\u69cb\u90fd\u653e\u5728\u4e00\u500b\u6a94\u6848\u4e2d\u53ef\u80fd\u6703\u8b93\u4e8b\u60c5\u8b8a\u5f97\u6df7\u4e82\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Rust \u4e2d\uff0c\u6a21\u7d44\u7cfb\u7d71\u5141\u8a31\u6211\u5011\u5c07\u4ee3\u78bc\u5206\u5272\u6210\u5c0f\u7684\u3001\u53ef\u7ba1\u7406\u7684\u55ae\u4f4d\uff0c\u6bcf\u500b\u55ae\u4f4d\u90fd\u5177\u6709\u660e\u78ba\u7684\u8077\u8cac\u3002\u9019\u4e0d\u50c5\u4f7f\u6211\u5011\u7684\u61c9\u7528\u7a0b\u5f0f\u7d50\u69cb\u66f4\u52a0\u6e05\u6670\uff0c\u9084\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u91cd\u8907\u4f7f\u7528\u548c\u6e2c\u8a66\u7279\u5b9a\u7684\u529f\u80fd\u6a21\u7d44\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u63a5\u4e0b\u4f86\u7684\u90e8\u5206\uff0c\u6211\u5011\u6703\u793a\u7bc4\u5982\u4f55\u4f7f\u7528 Rust \u7684\u6a21\u7d44\u7cfb\u7d71\u4f86\u7d44\u7e54 Actix Web \u5c08\u6848\uff0c\u4e26\u4e14\u6703\u7e7c\u7e8c\u65b0\u589e\u5176\u4ed6 API\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u958b\u59cb\u6a21\u7d44\u5316\u958b\u767c\u4e4b\u524d\uff0c\u6211\u5011\u8981\u5148\u65b0\u589e\u5e7e\u500b\u8cc7\u6599\u593e\u8ddf\u6a94\u6848\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-awk",children:"mkdir src/api src/models src/repository\r\ntouch src/api/mod.rs src/models/mod.rs src/repository/mod.rs\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"main.rs"})," \u5f15\u5165 mod:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use actix_web::{get, web, App, HttpResponse, HttpServer, Responder, Result};\r\nuse serde::Serialize;\r\n\r\nmod api;\r\nmod models;\r\nmod repository;\r\n\r\n#[derive(Serialize)]\r\npub struct Response {\r\n    pub message: String,\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u958b\u59cb-todo-list-\u7684-api-endpoint",children:"\u958b\u59cb Todo List \u7684 API Endpoint"}),"\n",(0,s.jsx)(n.h3,{id:"a-\u5efa\u7acb-todo-\u7684\u8cc7\u6599-model",children:"A. \u5efa\u7acb Todo \u7684\u8cc7\u6599 Model"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u5011\u5728 ",(0,s.jsx)(n.code,{children:"src/models"})," \u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500b\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"todo.rs"}),"\uff0c\u8981\u5efa\u7acb Todo \u7684\u8cc7\u6599 Model\uff0c\u4ee3\u8868\u4e00\u500b\u5f85\u8fa6\u4e8b\u9805\u3002\u6703\u7528\u5230 ",(0,s.jsx)(n.code,{children:"chrono"})," \u548c ",(0,s.jsx)(n.code,{children:"serde"}),"\uff0c\u5206\u5225\u8655\u7406\u6642\u9593\u9084\u6709 JSON \u683c\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"// src/models/todo.rs\r\nuse chrono::prelude::{DateTime, Utc};\r\nuse serde::{Deserialize, Serialize};\r\n\r\n#[derive(Serialize, Deserialize, Debug, Clone)]\r\npub struct Todo {\r\n    pub id: Option<String>,\r\n    pub title: String,\r\n    pub description: Option<String>,\r\n    pub created_at: Option<DateTime<Utc>>,\r\n    pub updated_at: Option<DateTime<Utc>>,\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u8457\u5728 ",(0,s.jsx)(n.code,{children:"src/models/mod.rs"})," \u505a\u4e00\u500b\u6a21\u7d44\u8072\u660e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub mod todo;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"b-\u5b9a\u7fa9\u4e00\u500b\u5167\u5b58\u8cc7\u6599\u5eab\u4f86\u5b58\u5132-todo-\u7269\u4ef6",children:"B. \u5b9a\u7fa9\u4e00\u500b\u5167\u5b58\u8cc7\u6599\u5eab\u4f86\u5b58\u5132 Todo \u7269\u4ef6"}),"\n",(0,s.jsx)(n.p,{children:"\u7531\u65bc\u672c\u6587\u7ae0\u7684\u7bc4\u4f8b\u6c92\u6709\u4f7f\u7528\u50cf\u662f PostgreSQL \u4e4b\u985e\u7684\u8cc7\u6599\u5eab\u4f86\u505a\u5b58\u53d6\uff0c\u6bd4\u8f03\u8457\u91cd\u5728 REST API \u7684\u793a\u7bc4\uff0c\u6240\u4ee5\u6211\u5011\u6703\u81ea\u5df1\u5b9a\u7fa9\u4e00\u500b\u7c21\u55ae\u7684\u5167\u5b58\u8cc7\u6599\u5eab\u4f86\u793a\u7bc4\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"src/repository"})," \u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500b\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"database.rs"})]}),"\n",(0,s.jsx)(n.h4,{id:"1-\u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab-1",children:"1. \u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use std::fmt::Error;\r\nuse chrono::prelude::*;\r\nuse std::sync::{Arc, Mutex};\r\nuse crate::models::todo::Todo;\r\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u9019\u4e9b use \u8072\u660e\u5f15\u5165\u4e86\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u932f\u8aa4\u683c\u5f0f\u5316\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u65e5\u671f\u548c\u6642\u9593\u76f8\u95dc\u7684\u529f\u80fd\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Arc \u548c Mutex\uff0c\u9019\u662f Rust \u4e2d\u7684\u540c\u6b65\u539f\u8a9e\uff0c\u7528\u65bc\u591a\u7dda\u7a0b\u5171\u4eab\u548c\u4fee\u6539\u8cc7\u6599\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5f9e models \u6a21\u7d44\u5f15\u5165\u7684 Todo \u7d50\u69cb\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-\u5b9a\u7fa9\u8cc7\u6599\u5eab\u7d50\u69cb",children:"2. \u5b9a\u7fa9\u8cc7\u6599\u5eab\u7d50\u69cb"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct Database {\r\n    pub todos: Arc<Mutex<Vec<Todo>>>,\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Database"})," \u7d50\u69cb\u5177\u6709\u4e00\u500b\u516c\u958b\u7684\u5b57\u6bb5 ",(0,s.jsx)(n.code,{children:"todos"}),"\uff0c\u5b83\u662f\u4e00\u500b\u53d7 ",(0,s.jsx)(n.code,{children:"Mutex"})," \u4fdd\u8b77\u7684 ",(0,s.jsx)(n.code,{children:"Todo"})," \u7269\u4ef6\u7684\u5411\u91cf\uff0c\u9019\u8868\u793a\u53ef\u4ee5\u5728\u591a\u7dda\u7a0b\u74b0\u5883\u4e2d\u5b89\u5168\u5730\u4fee\u6539\u5b83\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"3-\u70ba\u8cc7\u6599\u5eab\u7d50\u69cb\u5be6\u73fe\u529f\u80fd",children:"3. \u70ba\u8cc7\u6599\u5eab\u7d50\u69cb\u5be6\u73fe\u529f\u80fd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Database {\r\n    pub fn new() -> Self {\r\n        let todos = Arc::new(Mutex::new(vec![]));\r\n        Database { todos }\r\n    }\r\n\r\n    pub fn create_todo(&self, todo: Todo) -> Result<Todo, Error> {\r\n        let mut todos = self.todos.lock().unwrap();\r\n        let id = uuid::Uuid::new_v4().to_string();\r\n        let created_at = Utc::now();\r\n        let updated_at = Utc::now();\r\n        let todo = Todo {\r\n            id: Some(id),\r\n            created_at: Some(created_at),\r\n            updated_at: Some(updated_at),\r\n            ..todo\r\n        };\r\n        todos.push(todo.clone());\r\n        Ok(todo)\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u500b ",(0,s.jsx)(n.code,{children:"impl"})," \u5340\u584a\u70ba ",(0,s.jsx)(n.code,{children:"Database"})," \u7d50\u69cb\u589e\u52a0\u4e86\u529f\u80fd\u548c\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"new"})," \u65b9\u6cd5\u5275\u5efa\u4e00\u500b\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"Database"})," \u5be6\u4f8b\uff0c\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"todos"})," \u662f\u4e00\u500b\u7a7a\u5411\u91cf\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"create_todo"})," \u65b9\u6cd5\u5c07\u4e00\u500b\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"Todo"})," \u7269\u4ef6\u52a0\u5165\u5230 ",(0,s.jsx)(n.code,{children:"todos"})," \u5411\u91cf\u4e2d\u3002\u8a72\u65b9\u6cd5\u751f\u6210\u4e00\u500b\u65b0\u7684 UUID \u4f5c\u70ba ID\uff0c\u8a2d\u7f6e\u7576\u524d\u7684 UTC \u65e5\u671f\u548c\u6642\u9593\u4f5c\u70ba\u65b0\u589e\u548c\u66f4\u65b0\u6642\u9593\uff0c\u7136\u5f8c\u5c07 ",(0,s.jsx)(n.code,{children:"Todo"})," \u7269\u4ef6\u52a0\u5165\u5230\u5411\u91cf\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"4-\u5728-srcrepositorymodrs-\u4e2d\u7684\u6a21\u7d44\u8072\u660e",children:["4. \u5728 ",(0,s.jsx)(n.code,{children:"src/repository/mod.rs"})," \u4e2d\u7684\u6a21\u7d44\u8072\u660e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub mod database;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"c-\u5b9a\u7fa9\u8207-todo-\u76f8\u95dc\u7684-api-\u7aef\u9ede",children:"C. \u5b9a\u7fa9\u8207 Todo \u76f8\u95dc\u7684 API \u7aef\u9ede"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"src/api"})," \u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500b\u65b0\u7684 ",(0,s.jsx)(n.code,{children:"api.rs"})]}),"\n",(0,s.jsx)(n.h4,{id:"1-\u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab-2",children:"1. \u5f15\u5165\u6240\u9700\u7684\u6a21\u7d44\u548c\u51fd\u5f0f\u5eab"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use actix_web::web;\r\nuse actix_web::{web::{Data, Json}, post, HttpResponse};\r\nuse crate::{models::todo::Todo, repository::database::Database};\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u4e9b ",(0,s.jsx)(n.code,{children:"use"})," \u4e3b\u8981\u5f15\u5165\u4e86\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Actix Web \u7684\u6838\u5fc3\u7d44\u4ef6\uff0c\u7528\u65bc\u5efa\u7acb Web \u61c9\u7528\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u7528\u65bc\u8cc7\u6599\u63d0\u53d6\u548c\u53cd\u5e8f\u5217\u5316 JSON \u6578\u64da\u7684\u529f\u80fd\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u5f9e\u5c08\u6848\u4e2d\u5f15\u5165\u7684 ",(0,s.jsx)(n.code,{children:"Todo"})," \u7d50\u69cb\u548c ",(0,s.jsx)(n.code,{children:"Database"})," \u6a21\u7d44\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"2-\u5b9a\u7fa9-api-endpoint",children:"2. \u5b9a\u7fa9 API Endpoint"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[post("/todos")]\r\npub async fn create_todo(db: Data<Database>, new_todo: Json<Todo>) -> HttpResponse {\r\n    let todo = db.create_todo(new_todo.into_inner());\r\n    match todo {\r\n        Ok(todo) => HttpResponse::Ok().json(todo),\r\n        Err(err) => HttpResponse::InternalServerError().body(err.to_string()),\r\n    }\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u662f\u4e00\u500b\u7570\u6b65\u7684\u51fd\u5f0f\uff0c\u7528\u65bc\u65b0\u589e\u4e00\u500b\u65b0\u7684\u5f85\u8fa6\u4e8b\u9805\u3002\u5b83\u671f\u671b\u5f9e HTTP POST \u8acb\u6c42\u7684\u6b63\u6587\u4e2d\u63a5\u6536\u4e00\u500b JSON \u683c\u5f0f\u7684 ",(0,s.jsx)(n.code,{children:"Todo"})," \u7269\u4ef6\u3002\u4e3b\u8981\u63a5\u53d7\u5169\u500b\u53c3\u6578\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Database \u7684\u53c3\u8003\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u5ba2\u6236\u7aef\u63d0\u4f9b\u7684\u65b0\u7684 Todo \u7269\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6703\u5efa\u7acb\u65b0\u7684\u5f85\u8fa6\u4e8b\u9805\u4e26\u8fd4\u56de\u9069\u7576\u7684 HTTP \u97ff\u61c9\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"3-\u914d\u7f6e-api",children:"3. \u914d\u7f6e API"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'pub fn config(cfg: &mut web::ServiceConfig) {\r\n    cfg.service(\r\n        web::scope("/api")\r\n            .service(create_todo)\r\n    );\r\n}\r\n\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u500b ",(0,s.jsx)(n.code,{children:"config()"})," \u63a5\u53d7\u4e00\u500b ",(0,s.jsx)(n.code,{children:"ServiceConfig"})," \u7684\u53c3\u8003\uff0c\u4e26\u5c07 API Endpoint \u52a0\u5165\u5b83\u3002\u5728\u6b64\u4f8b\u4e2d\uff0c\u5b83\u5c07 ",(0,s.jsx)(n.code,{children:"create_todo()"})," \u8a2d\u7f6e\u70ba\u5728 ",(0,s.jsx)(n.code,{children:"/api/todos"})," \u8def\u5f91\u4e0a\u97ff\u61c9\u3002"]}),"\n",(0,s.jsxs)(n.h4,{id:"4-\u5728-srcapimodrs-\u4e2d\u7684\u6a21\u7d44\u8072\u660e",children:["4. \u5728 ",(0,s.jsx)(n.code,{children:"src/api/mod.rs"})," \u4e2d\u7684\u6a21\u7d44\u8072\u660e"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub mod api;\r\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u9019\u884c\u7a0b\u5f0f\u78bc\u5c07 ",(0,s.jsx)(n.code,{children:"src/api/api.rs"})," \u6587\u4ef6\u4f5c\u70ba\u4e00\u500b\u516c\u958b\u7684\u5b50\u6a21\u7d44 api \u5f15\u5165\u5230 ",(0,s.jsx)(n.code,{children:"src/api"})," \u6a21\u7d44\u4e2d\u3002\u9019\u6a23\uff0c\u5176\u4ed6 Rust \u4ee3\u78bc\u53ef\u4ee5\u8a2a\u554f\u548c\u4f7f\u7528\u5728 api \u5b50\u6a21\u7d44\u4e2d\u5b9a\u7fa9\u7684\u6240\u6709\u516c\u958b\u529f\u80fd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6700\u5f8c\u5247\u662f\u5728 ",(0,s.jsx)(n.code,{children:"main.rs"})," \uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[actix_web::main]\r\nasync fn main() -> std::io::Result<()> {\r\n    let todo_db = repository::database::Database::new();\r\n    let app_data = web::Data::new(todo_db);\r\n\r\n    HttpServer::new(move ||\r\n        App::new()\r\n            .app_data(app_data.clone())\r\n            .configure(api::api::config)\r\n            .service(healthcheck)\r\n            .default_service(web::route().to(not_found))\r\n            .wrap(actix_web::middleware::Logger::default())\r\n    )\r\n        .bind(("127.0.0.1", 8080))?\r\n        .run()\r\n        .await\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u5f8c\u57f7\u884c ",(0,s.jsx)(n.code,{children:"cargo run"}),"\uff0c\u5c31\u53ef\u4ee5\u9032\u884c\u6e2c\u8a66\u4e86\u3002"]}),"\n",(0,s.jsx)("img",{src:"https://ttom921.github.io/my-blog/assets/images/actix_web_2024-03-22_14-05-49-da5124c1bcd499e835df7ebea6ee9350.png"}),"\n",(0,s.jsx)(n.p,{children:"\u7e7c\u7e8c\u65b0\u589e\u5176\u4ed6\u7684 Endpoint\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"get-todos",children:"GET /todos"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"src/api/api.rs"})," \u65b0\u589e\u51fd\u5f0f\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use actix_web::{web::{\r\n    Data,\r\n    Json,\r\n}, post, get, HttpResponse};\r\n\r\n// \u7701\u7565\r\n\r\n#[get("/todos")]\r\npub async fn get_todos(db: web::Data<Database>) -> HttpResponse {\r\n    let todos = db.get_todos();\r\n    HttpResponse::Ok().json(todos)\r\n}\r\n\r\npub fn config(cfg: &mut web::ServiceConfig) {\r\n    cfg.service(\r\n        web::scope("/api")\r\n            .service(create_todo)\r\n            .service(get_todos)\r\n    );\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u5f8c\u8981\u5be6\u73fe ",(0,s.jsx)(n.code,{children:"get_todos"}),"\uff0c\u5728 ",(0,s.jsx)(n.code,{children:"src/repository/database.rs"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Database {\r\n    // \u7701\u7565\r\n\r\n    pub fn get_todos(&self) -> Vec<Todo> {\r\n        let todos = self.todos.lock().unwrap();\r\n        todos.clone()\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"get-todosid",children:"GET /todos/{id}"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e5f\u662f\u5148\u5728 ",(0,s.jsx)(n.code,{children:"src/api/api.rs"})," \u65b0\u589e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[get("/todos/{id}")]\r\npub async fn get_todo_by_id(db: web::Data<Database>, id: web::Path<String>) -> HttpResponse {\r\n    let todo = db.get_todo_by_id(&id);\r\n    match todo {\r\n        Some(todo) => HttpResponse::Ok().json(todo),\r\n        None => HttpResponse::NotFound().body("Todo not found"),\r\n    }\r\n}\r\n\r\npub fn config(cfg: &mut web::ServiceConfig) {\r\n    cfg.service(\r\n        web::scope("/api")\r\n            .service(create_todo)\r\n            .service(get_todos)\r\n            .service(get_todo_by_id)\r\n    );\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u5f8c\u5728 ",(0,s.jsx)(n.code,{children:"src/repositorydatabase.rs"})," \u5be6\u73fe ",(0,s.jsx)(n.code,{children:"get_todo_by_id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Database {\r\n    // \u7701\u7565\r\n\r\n    pub fn get_todo_by_id(&self, id: &str) -> Option<Todo> {\r\n        let todos = self.todos.lock().unwrap();\r\n        todos\r\n            .iter()\r\n            .find(|todo| todo.id == Some(id.to_string()))\r\n            .cloned()\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"put-todosid",children:"PUT /todos/{id}"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"src/api/api.rs"})," \u65b0\u589e\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use actix_web::{\r\n    get, post, put,\r\n    web::{Data, Json},\r\n    HttpResponse,\r\n};\r\n\r\n// \u7701\u7565\r\n\r\n#[put("/todos/{id}")]\r\npub async fn update_todo_by_id(\r\n    db: web::Data<Database>,\r\n    id: web::Path<String>,\r\n    updated_todo: web::Json<Todo>,\r\n) -> HttpResponse {\r\n    let todo = db.update_todo_by_id(&id, updated_todo.into_inner());\r\n    match todo {\r\n        Some(todo) => HttpResponse::Ok().json(todo),\r\n        None => HttpResponse::NotFound().body("Todo not found"),\r\n    }\r\n}\r\n\r\npub fn config(cfg: &mut web::ServiceConfig) {\r\n    cfg.service(\r\n        web::scope("/api")\r\n            .service(create_todo)\r\n            .service(get_todos)\r\n            .service(get_todo_by_id)\r\n            .service(update_todo_by_id),\r\n    );\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"src/repository/database.rs"})," \u5be6\u73fe ",(0,s.jsx)(n.code,{children:"update_todo_by_id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Database {\r\n    // \u7701\u7565\r\n\r\n    pub fn update_todo_by_id(&self, id: &str, todo: Todo) -> Option<Todo> {\r\n        let mut todos = self.todos.lock().unwrap();\r\n        let updated_at = Utc::now();\r\n        let todo = Todo {\r\n            id: Some(id.to_string()),\r\n            updated_at: Some(updated_at),\r\n            ..todo\r\n        };\r\n        let index = todos\r\n            .iter()\r\n            .position(|todo| todo.id == Some(id.to_string()))?;\r\n        todos[index] = todo.clone();\r\n        Some(todo)\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"delete-todosid",children:"DELETE /todos/{id}"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'use actix_web::{\r\n    delete, get, post, put,\r\n    web::{Data, Json},\r\n    HttpResponse,\r\n};\r\n\r\n// \u7701\u7565\r\n\r\n#[delete("/todos/{id}")]\r\npub async fn delete_todo_by_id(db: web::Data<Database>, id: web::Path<String>) -> HttpResponse {\r\n    let todo = db.delete_todo_by_id(&id);\r\n    match todo {\r\n        Some(todo) => HttpResponse::Ok().json(todo),\r\n        None => HttpResponse::NotFound().body("Todo not found"),\r\n    }\r\n}\r\n\r\npub fn config(cfg: &mut web::ServiceConfig) {\r\n    cfg.service(\r\n        web::scope("/api")\r\n            .service(create_todo)\r\n            .service(get_todos)\r\n            .service(get_todo_by_id)\r\n            .service(update_todo_by_id)\r\n            .service(delete_todo_by_id),\r\n    );\r\n}\r\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 ",(0,s.jsx)(n.code,{children:"src/repository/database.rs"})," \u5be6\u73fe ",(0,s.jsx)(n.code,{children:"delete_todo_by_id"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl Database {\r\n    // \u7701\u7565\r\n\r\n    pub fn delete_todo_by_id(&self, id: &str) -> Option<Todo> {\r\n        let mut todos = self.todos.lock().unwrap();\r\n        let index = todos\r\n            .iter()\r\n            .position(|todo| todo.id == Some(id.to_string()))?;\r\n        Some(todos.remove(index))\r\n    }\r\n}\r\n\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u9019\u7bc7\u6587\u7ae0\u4e2d\uff0c\u6211\u5011\u793a\u7bc4\u4e86\u5982\u4f55\u4f7f\u7528 Actix Web \u5efa\u7acb REST API \u3002Actix Web \u4e0d\u50c5\u70ba Rust \u958b\u767c\u8005\u63d0\u4f9b\u4e86\u5f37\u5927\u7684\u5de5\u5177\uff0c\u9084\u78ba\u4fdd\u4e86\u6211\u5011\u7684 API \u5177\u6709\u5353\u8d8a\u7684\u6027\u80fd\u548c\u9748\u6d3b\u6027\u3002\u96a8\u8457 Rust \u5728\u7db2\u9801\u958b\u767c\u9818\u57df\u7684\u9010\u6b65\u5d1b\u8d77\uff0c\u76f8\u4fe1 Actix Web \u6703\u6210\u70ba\u66f4\u591a\u958b\u767c\u8005\u7684\u9996\u9078\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(6540);const d={},o=s.createContext(d);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);