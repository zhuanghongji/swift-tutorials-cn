"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[2458],{56904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(85893),a=n(11151);const o={},s="\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",c={id:"metal-shading-language-specification/implicit-type-conversions/index",title:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",description:"\u652f\u6301\u6807\u91cf\u5185\u7f6e\u7c7b\u578b\uff08void \u9664\u5916\uff09\u4e4b\u95f4\u7684\u9690\u5f0f\u8f6c\u6362\u3002\u5b8c\u6210\u9690\u5f0f\u8f6c\u6362\u540e\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u662f\u91cd\u65b0\u89e3\u91ca\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u800c\u662f\u5c06\u8be5\u503c\u8f6c\u6362\u4e3a\u65b0\u7c7b\u578b\u4e2d\u7684\u7b49\u6548\u503c\u3002\u4f8b\u5982\uff0c\u6574\u6570\u503c 5 \u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c 5.0\u3002Bfloat \u662f\u4e00\u79cd\u6269\u5c55\u6d6e\u70b9\u7c7b\u578b\uff0c\u4ec5\u5141\u8bb8\u9690\u5f0f\u8f6c\u6362\u4e3a\u66f4\u9ad8\u6d6e\u70b9\u7b49\u7ea7\u7684\u7c7b\u578b\u3002\u867d\u7136 bfloat \u53ef\u4ee5\u9690\u5f0f\u8f6c\u6362\u4e3a float\uff0c\u4f46\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a half\uff0c\u5e76\u4e14 float \u548c half \u90fd\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a bfloat\u3002",source:"@site/docs/metal-shading-language-specification/implicit-type-conversions/index.mdx",sourceDirName:"metal-shading-language-specification/implicit-type-conversions",slug:"/metal-shading-language-specification/implicit-type-conversions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/implicit-type-conversions/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/implicit-type-conversions/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/type-conversions-and-re-interpreting-data/"},next:{title:"\u6807\u91cf\u548c\u5411\u91cf\u8fd0\u7b97\u7b26",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/scalar-and-vector-operators/"}},r={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components},{OriginalPDF:n,ToBePolishedAfterTranslation:o}=t;return n||f("OriginalPDF",!0),o||f("ToBePolishedAfterTranslation",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",children:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,i.jsx)(o,{}),"\n",(0,i.jsx)(n,{title:"2.21 Implicit Type Conversions"}),"\n",(0,i.jsxs)(t.p,{children:["\u652f\u6301\u6807\u91cf\u5185\u7f6e\u7c7b\u578b\uff08void \u9664\u5916\uff09\u4e4b\u95f4\u7684\u9690\u5f0f\u8f6c\u6362\u3002\u5b8c\u6210\u9690\u5f0f\u8f6c\u6362\u540e\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u662f\u91cd\u65b0\u89e3\u91ca\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u800c\u662f\u5c06\u8be5\u503c\u8f6c\u6362\u4e3a\u65b0\u7c7b\u578b\u4e2d\u7684\u7b49\u6548\u503c\u3002\u4f8b\u5982\uff0c\u6574\u6570\u503c ",(0,i.jsx)(t.code,{children:"5"})," \u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c ",(0,i.jsx)(t.code,{children:"5.0"}),"\u3002Bfloat \u662f\u4e00\u79cd\u6269\u5c55\u6d6e\u70b9\u7c7b\u578b\uff0c\u4ec5\u5141\u8bb8\u9690\u5f0f\u8f6c\u6362\u4e3a\u66f4\u9ad8\u6d6e\u70b9\u7b49\u7ea7\u7684\u7c7b\u578b\u3002\u867d\u7136 bfloat \u53ef\u4ee5\u9690\u5f0f\u8f6c\u6362\u4e3a float\uff0c\u4f46\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a half\uff0c\u5e76\u4e14 float \u548c half \u90fd\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a bfloat\u3002"]}),"\n",(0,i.jsx)(t.p,{children:"\u6240\u6709\u5411\u91cf\u7c7b\u578b\u90fd\u88ab\u8ba4\u4e3a\u5177\u6709\u6bd4\u6807\u91cf\u7c7b\u578b\u66f4\u9ad8\u7684\u8f6c\u6362\u7b49\u7ea7\u3002\u4e0d\u5141\u8bb8\u4ece\u5411\u91cf\u7c7b\u578b\u5230\u53e6\u4e00\u4e2a\u5411\u91cf\u6216\u6807\u91cf\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u5c1d\u8bd5\u4ece 4 \u5206\u91cf\u6574\u6570\u5411\u91cf\u8f6c\u6362\u4e3a 4 \u5206\u91cf\u6d6e\u70b9\u5411\u91cf\u5931\u8d25\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"int4 i;\nfloat4 f = i; // compile error.\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u652f\u6301\u4ece\u6807\u91cf\u5230\u5411\u91cf\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\u3002\u6807\u91cf\u503c\u5728\u5411\u91cf\u7684\u6bcf\u4e2a\u5143\u7d20\u4e2d\u590d\u5236\u3002\u6807\u91cf\u8fd8\u53ef\u4ee5\u7ecf\u8fc7\u901a\u5e38\u7684\u7b97\u672f\u8f6c\u6362\u4e3a\u5411\u91cf\u4f7f\u7528\u7684\u5143\u7d20\u7c7b\u578b\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"float4 f = 2.0f; // f = (2.0f, 2.0f, 2.0f, 2.0f)\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u4e0d\u652f\u6301\u4ece\u6807\u91cf\u5230\u77e9\u9635\u7c7b\u578b\u548c\u5411\u91cf\u5230\u77e9\u9635\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002\u4e0d\u5141\u8bb8\u4ece\u77e9\u9635\u7c7b\u578b\u5230\u53e6\u4e00\u4e2a\u77e9\u9635\u3001\u5411\u91cf\u6216\u6807\u91cf\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002"}),"\n",(0,i.jsx)(t.p,{children:"\u6307\u9488\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\u9075\u5faa C++14 \u89c4\u8303\u4e2d\u63cf\u8ff0\u7684\u89c4\u5219\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function f(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var i=n(67294);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);