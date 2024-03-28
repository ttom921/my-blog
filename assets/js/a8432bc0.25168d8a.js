"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[8902],{940:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=s(4848),t=s(8453);const i={title:"FlexBox\u76f8\u95dc",authors:"ttom",tags:["FlexBox"]},r=void 0,c={permalink:"/my-blog/blog/\u8a18\u9304/frontend/flexbox",source:"@site/blog/\u8a18\u9304/frontend/flexbox.md",title:"FlexBox\u76f8\u95dc",description:"\u4f86\u8a18\u9304\u4e00\u4e9b\u6709\u95dcFlexBox\u7684note",date:"2024-03-28T03:48:56.000Z",formattedDate:"2024\u5e743\u670828\u65e5",tags:[{label:"FlexBox",permalink:"/my-blog/blog/tags/flex-box"}],readingTime:5.795,hasTruncateMarker:!0,authors:[{name:"tom tang",title:"Soft Engineer",url:"https://github.com/ttom921",imageURL:"https://github.com/ttom921.png",key:"ttom"}],frontMatter:{title:"FlexBox\u76f8\u95dc",authors:"ttom",tags:["FlexBox"]},unlisted:!1,nextItem:{title:"ubuntu\u7684vpn\u9023\u7dda",permalink:"/my-blog/blog/\u8a18\u9304/ubuntu/ubuntuvpn"}},o={authorsImageUrls:[void 0]},d=[{value:"flexbox\u7684\u5c6c\u6027",id:"flexbox\u7684\u5c6c\u6027",level:2},{value:"\u5728\u4ea4\u53c9\u8ef8\u4e0a\u5206\u914d\u591a\u9918\u7a7a\u9593\uff1a<code>align-content</code>",id:"\u5728\u4ea4\u53c9\u8ef8\u4e0a\u5206\u914d\u591a\u9918\u7a7a\u9593align-content",level:3},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",level:6}];function x(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u4f86\u8a18\u9304\u4e00\u4e9b\u6709\u95dcFlexBox\u7684note"}),"\n",(0,l.jsx)(n.h2,{id:"flexbox\u7684\u5c6c\u6027",children:"flexbox\u7684\u5c6c\u6027"}),"\n",(0,l.jsx)(n.p,{children:"\u9996\u5148\u4f86\u770b\u770bContainer\u3001Items\u5404\u81ea\u6709\u54ea\u4e9b\u5c6c\u6027\uff1a"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"Container\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Display:\r\n\u9996\u5148\u5148\u5ba3\u544a\u70ba",(0,l.jsx)(n.code,{children:"flex"}),"\u5b83\u624d\u80fd\u4f7f\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"display:flex;\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Flex-direction:"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"flex-direction: row; /*\u9810\u8a2d\uff0c\u4e3b\u8ef8\u7531\u5de6\u81f3\u53f3*/\r\nflex-direction: row-reverse; /*\u4e3b\u8ef8\u7531\u53f3\u81f3\u5de6*/\r\nflex-direction: column; /*\u4e3b\u8ef8\u7531\u4e0a\u81f3\u4e0b*/\r\nflex-direction: column-reverse; /*\u4e3b\u8ef8\u7531\u4e0b\u81f3\u4e0a*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Flex-wrap"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"flex-wrap: nowrap; /*\u9810\u8a2d\uff0c\u55ae\u884c\u6392\u5217\uff0c\u4e0d\u5305\u8d77\u4f86*/\r\nflex-wrap: wrap; /*\u5305\u597d\u5305\u6eff*/\r\nflex-wrap: wrap-reverse; /*\u5305\u597d\u5305\u6eff\u5916\u9084\u8981\u4f86\u500b\u53cd\u8f49*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Flex-flow:\r\n\u90a3\u9ebc\u9019\u500b\u5c6c\u6027\u53c8\u662f\u5e79\u561b\u7684\u5462\uff1f\uff1f\u5176\u5be6\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u7528\u61c2\u5b83\uff0c\u5b83\u5c31\u662f",(0,l.jsx)(n.code,{children:"Flex-direction"}),"\u3001",(0,l.jsx)(n.code,{children:"Flex-wrap"}),"\u7684\u300c\u7d44\u5408\u6280\u300d\uff0c\u5982\u6b64\u4e00\u4f86\u5c31\u53ef\u4ee5\u5171\u540c\u5b9a\u7fa9\u4e3b\u526f\u8ef8\u7684\u6392\u5217\u65b9\u5f0f\u4e86\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"flex-flow: {flex-direction} {flex-wrap}; /*\u5927\u62ec\u865f\u88e1\u9762\u653e\u7684\u5c31\u662f\u5b83\u5011\u5404\u81ea\u7684\u5c6c\u6027*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Justify-content:\u5b9a\u7fa9\u4e86\u300c\u4e3b\u8ef8\u300d\u7684\u300c\u5c0d\u9f4a\u65b9\u5f0f\u300d\uff0c\u6709\u4ee5\u4e0b5\u7a2e\u65b9\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"justify-content: flex-start; /*\u9810\u8a2d\uff0c\u9760\u982d\u5c0d\u9f4a*/\r\njustify-content: flex-end; /*\u9760\u5c3e\u5c0d\u9f4a*/\r\njustify-content: center; /*\u7f6e\u4e2d\u5c0d\u9f4a*/\r\njustify-content: space-between; /*\u7f6e\u4e2d\u5c0d\u9f4a\uff0c\u982d\u5c3e\u7684items\u8cbc\u9f4aContainer\uff0citems\u4e4b\u9593\u6709\u56fa\u5b9a\u8ddd\u96e2*/\r\njustify-content: space-around; /*\u7f6e\u4e2d\u5c0d\u9f4a\uff0c\u982d\u5c3e\u7684items\u6c92\u6709\u8cbc\u9f4aContainer\uff0citems\u4e4b\u9593\u3001\u982d\u5c3eitems\u8ddfContainer\u4e4b\u9593\u7686\u6709\u56fa\u5b9a\u8ddd\u96e2*/\r\njustify-content: space-evenly; /*\u7f6e\u4e2d\u5c0d\u9f4a\uff0c\u982d\u5c3e\u7684items\u6c92\u6709\u8cbc\u9f4aContainer\uff0citems\u4e4b\u9593\u3001\u982d\u5c3eitems\u8ddfContainer\u4e4b\u9593\u8ddd\u96e2\u76f8\u540c*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Align-items:\u5b9a\u7fa9\u4e86\u300c\u526f\u8ef8\u300d\u7684\u300c\u5c0d\u5176\u65b9\u5f0f\u300d\uff0c\u6709\u4ee5\u4e0b5\u7a2e\u65b9\u5f0f\uff1a"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"align-items: flex-start; /*\u9810\u8a2d\uff0c\u9760\u982d\u5c0d\u9f4a*/\r\nalign-items: flex-end; /*\u9760\u5c3e\u5c0d\u9f4a*/\r\nalign-items: center; /*\u7f6e\u4e2d\u5c0d\u9f4a*/\r\nalign-items: baseline; /*\u6309\u7167\u6587\u672c\u57fa\u7dda\u5c0d\u9f4a*/\r\nalign-items: stretch; /*items\u5ef6\u5c55\u81f3Container\u7684\u982d\u5c3e*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Align-content:\u9019\u500b\u5c6c\u6027\u662f",(0,l.jsx)(n.code,{children:"Align-items"}),"\u7684\u9032\u968e\u7248\uff0c\u800c\u4e14\u5b83\u8ddf",(0,l.jsx)(n.code,{children:"Justify-content"}),"\u9577\u5f97\u6709\u516b\u6210\u50cf\uff0c\u6240\u4ee5\u4ed6\u5011\u80fd\u63a7\u5236\u7684\u6771\u897f\u4e5f\u662f\u4e00\u6a23\u5dee\u4e0d\u591a\uff5e\u9019\u88e1\u518d\u518d\u63d0\u9192\u4e00\u6b21\uff1a",(0,l.jsx)(n.code,{children:"Justify-content"}),"\u63a7\u5236\u4e3b\u8ef8\uff1b",(0,l.jsx)(n.code,{children:"Align-content"}),"\u63a7\u5236\u526f\u8ef8\u5594\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"align-content: flex-start; /*\u9760\u982d\u5c0d\u9f4a*/\r\nalign-content: flex-end; /*\u9760\u5c3e\u5c0d\u9f4a*/\r\nalign-content: center; /*\u7f6e\u4e2d\u5c0d\u9f4a*/\r\nalign-content: space-between; /*\u7f6e\u4e2d\u5c0d\u9f4a\uff0c\u982d\u5c3e\u7684items\u8cbc\u9f4aContainer\uff0citems\u4e4b\u9593\u6709\u56fa\u5b9a\u8ddd\u96e2*/\r\nalign-content: space-around; /*\u7f6e\u4e2d\u5c0d\u9f4a\uff0c\u982d\u5c3e\u7684items\u6c92\u6709\u8cbc\u9f4aContainer\uff0citems\u4e4b\u9593\u3001\u982d\u5c3eitems\u8ddfContainer\u4e4b\u9593\u7686\u6709\u56fa\u5b9a\u8ddd\u96e2*/\r\nalign-content: stretch; /*\u9810\u8a2d items\u5ef6\u5c55\u81f3Container\u7684\u982d\u5c3e*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["Items\uff1a\r\nItems\u4e5f\u662f\u6709\u5f88\u591a\u6771\u897f\u53ef\u4ee5\u63a7\u5236\u7684\uff0c\u5b83\u80fd\u505a\u5230\u7684\u4e8b\u60c5\u4e3b\u8981\u662fitems\u8ddfitems\u4e4b\u9593\u7684\u95dc\u4fc2\uff0c\u50cf\u662f\u8ab0\u5728\u524d\u8ab0\u5728\u5f8c\u7684",(0,l.jsx)(n.code,{children:"order"}),"\uff0c\u53c8\u6216\u662f\u8ab0\u4f4d\u7f6e\u53ef\u4ee5\u6bd4\u8f03\u5927\u8ab0\u4f4d\u7f6e\u53ef\u4ee5\u6bd4\u8f03\u5c0f\u7684",(0,l.jsx)(n.code,{children:"Flex-grow"}),"\u8ddf",(0,l.jsx)(n.code,{children:"Flex-shrink"}),"\u7b49\u7b49\u3002\u6709\u4e9b\u5c6c\u6027\u751a\u81f3\u80fd\u8986\u84cb\u6389Container\u7684\u5c6c\u6027\u5462"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Order:\u5c6c\u6027\u53ef\u4ee5\u63a7\u5236\u8ab0\u5728\u524d\u8ab0\u5728\u5f8c\uff0c\u5373\u4f7f\u5728HTML\u4e0a\u7684\u7269\u4ef6\u662f\u5728\u6700\u5f8c\u4e00\u500b\uff0c\u53ea\u8981\u4e0b\u9054\u9019\u500b\u6307\u4ee4\u5c31\u53ef\u4ee5\u8f15\u8f15\u9b06\u9b06\u8981\u5b83\u5728\u54ea\u5b83\u5c31\u5728\u54ea\u56c9\u3002",(0,l.jsx)(n.strong,{children:"order\u9810\u8a2d\u70ba\u96f6\uff0c\u82e5\u8981\u6392\u57280\u524d\u9762\u7684\u8a71\u4e5f\u53ef\u4ee5\u8ca0\u503c\u5594"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"order: integer; /*\u9810\u8a2d\u70ba0\uff0cinteger\u7684\u5730\u65b9\u662f\u7d66\u6574\u6578*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Flex-basis:\u5b83\u6c7a\u5b9a\u4e86\u4e3b\u8ef8\u4e0aitems\u7684\u9810\u8a2d\u9577\u5ea6\u3002\u4ee5",(0,l.jsx)(n.code,{children:"row"}),"\u7576\u4e3b\u8ef8\u4f86\u8aaa\u5b83\u63a7\u5236items\u7684\u300c\u5bec\u5ea6\u300d\uff1b\u4ee5",(0,l.jsx)(n.code,{children:"column"}),"\u7576\u4e3b\u8ef8\u4f86\u8aaa\u5b83\u63a7\u5236items\u7684\u300c\u9ad8\u5ea6\u300d"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"flex-basis: auto; /*\u9810\u8a2d\u70baauto\uff0c\u53ef\u4ee5\u7d66\u9577\u5ea6\u5404\u7a2e\u55ae\u4f4d*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Flex-grow:\u9019\u500b\u5c6c\u6027\u8ddf\u7b49\u4e00\u4e0b\u8b1b\u7684\u5c6c\u6027\u662f\u76f8\u95dc\u7684\uff0c\u53ef\u4ee5\u5c07\u4ed6\u5011\u8996\u70ba\u5144\u5f1f\u3002",(0,l.jsx)(n.code,{children:"Flex-grow"}),"\u5c6c\u6027\u6c7a\u5b9aitems\u5982\u4f55\u5206\u914d\u5269\u9918\u7a7a\u9593\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-csss",children:"flex-grow: 0;/*\u9810\u8a2d\u70ba0*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Flex-shrink:\u525b\u525b\u7684",(0,l.jsx)(n.code,{children:"Flex-grow"}),"\u662f\u8655\u7406\u7576Container\u6709\u5269\u9918\u7a7a\u9593\u6642\uff0c\u5c07items\u300c\u4f38\u5c55\u300d\u4f86\u7b26\u5408Container\u7684\u9577\u5ea6\uff1b\u73fe\u5728",(0,l.jsx)(n.code,{children:"Flex-shrink"}),"\u5247\u662f\u8655\u7406\u7576Container\u4e0d\u5920items\u585e\u6642\uff0c\u5c07items\u300c\u7e2e\u5c0f\u300d\u4f86\u7b26\u5408Container\u7684\u9577\u5ea6\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-caa",children:"flex-shrink: 0;/*\u9810\u8a2d\u70ba0*/\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Align-self:\u9019\u500b\u5c6c\u6027\u53ef\u4ee5\u8abf\u6574\u300c\u526f\u8ef8\u300d\u7684\u5c0d\u9f4a\u5c6c\u6027\uff0c\u518d\u91cd\u7533\u4e00\u6b21\uff0c\u662f\u300c\u526f\u8ef8\u300d\u5594\u4e0d\u662f\u4e3b\u8ef8\u3002\u5b83\u8207",(0,l.jsx)(n.code,{children:"Align-items"}),"\u3001",(0,l.jsx)(n.code,{children:"Align-content"}),"\u4e00\u6a23\u53ef\u4ee5\u63a7\u5236\u526f\u8ef8\u7684\u6392\u5217\u65b9\u5f0f\uff0c\u5b83\u537b\u80fd\u66f4\u9032\u4e00\u6b65\u500b\u5225\u8abf\u6574\u55ae\u4e00item\u7684\u6392\u5217\u65b9\u5f0f\uff0c\u4ee5\u4e0b\u662f\u5b83\u7684\u8a9e\u6cd5\uff1a"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-css",children:"align-self: auto; /*\u9810\u8a2d\uff0c\u8207Container\u7684align-items\u4e00\u6a23*/\r\nalign-self: flex-start; /*\u9810\u8a2d\uff0c\u9760\u982d\u5c0d\u9f4a*/\r\nalign-self: flex-end; /*\u9760\u5c3e\u5c0d\u9f4a*/\r\nalign-self: center; /*\u7f6e\u4e2d\u5c0d\u9f4a*/\r\nalign-self: baseline; /*\u6309\u7167\u6587\u672c\u57fa\u7dda\u5c0d\u9f4a*/\r\nalign-self: stretch; /*items\u5ef6\u5c55\u81f3Container\u7684\u982d\u5c3e*/\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsxs)(n.strong,{children:["\u7279\u5225\u6ce8\u610f\uff01",(0,l.jsx)(n.code,{children:"Align-self"}),"\u7d66\u5b9a\u7684\u503c\u662f\u6703\u58d3\u904e",(0,l.jsx)(n.code,{children:"Align-items"}),"\u3001",(0,l.jsx)(n.code,{children:"Align-content"}),"\u7684\u5594"]})}),"\n",(0,l.jsxs)(n.h3,{id:"\u5728\u4ea4\u53c9\u8ef8\u4e0a\u5206\u914d\u591a\u9918\u7a7a\u9593align-content",children:["\u5728\u4ea4\u53c9\u8ef8\u4e0a\u5206\u914d\u591a\u9918\u7a7a\u9593\uff1a",(0,l.jsx)(n.code,{children:"align-content"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"align-content"})," \u7528\u4f86\u5b9a\u7fa9\u5982\u4f55\u5206\u914d\u4ea4\u53c9\u8ef8\u4e0a\u591a\u884c\u4e4b\u9593\u7684\u591a\u9918\u7a7a\u9593\uff0c\u4e5f\u5c31\u662f\u8aaa align-content \u53ea\u5728 flex \u5b50\u5143\u7d20\u7684\u6392\u5217\u5728 flex \u5bb9\u5668\u4e2d\u300c\u4e0d\u53ea\u4e00\u884c\u7684\u6642\u5019\u300d\u6709\u4f5c\u7528\uff0c\u5982\u679c\u6211\u5011\u7684\u5b50\u5143\u7d20\u90fd\u5728\u540c\u4e00\u884c\u4e0a\uff0c\u7576\u7136\u5c31\u6c92\u6709\u600e\u9ebc\u5206\u914d\u300c\u591a\u884c\u4e4b\u9593\u7684\u5269\u9918\u7a7a\u9593\u300d\u7684\u554f\u984c\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"align-content: stretch"})," align-content \u7684\u9810\u8a2d\u503c\u662f stretch\uff0c\u4e5f\u5c31\u662f\u6bcf\u884c\u81ea\u52d5\u5728\u4ea4\u53c9\u8ef8\u4e0a\u5ef6\u5c55\u4e26\u586b\u6eff\u5bb9\u5668\uff1a"]}),"\n",(0,l.jsx)(n.h6,{id:"\u53c3\u8003\u8cc7\u6599",children:"\u53c3\u8003\u8cc7\u6599"}),"\n",(0,l.jsxs)(n.p,{children:["\u6559\u5b78FLEXBOX\r\n",(0,l.jsx)(n.a,{href:"https://jameshsu0407.github.io/blog/20200925_flexbox/",children:"https://jameshsu0407.github.io/blog/20200925_flexbox/"})]}),"\n",(0,l.jsxs)(n.p,{children:["CSS Flex & Grid \u6392\u7248\u8a73\u89e3\uff08\u4e0a\uff09\uff1aWhat the Flex?\r\n",(0,l.jsx)(n.a,{href:"https://nicolakacha.coderbridge.io/2020/09/20/css-flex-grid-1/",children:"https://nicolakacha.coderbridge.io/2020/09/20/css-flex-grid-1/"})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var l=s(6540);const t={},i=l.createContext(t);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);