"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4719],{27251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(85893),a=t(11151);const s={},o="\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e",r={id:"metal-shading-language-specification/type-conversions-and-re-interpreting-data/index",title:"\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e",description:"static_cast \u8fd0\u7b97\u7b26\u4f7f\u7528\u9ed8\u8ba4\u7684\u4e0d\u9971\u548c\u820d\u5165\u6a21\u5f0f\u5c06\u6807\u91cf\u6216\u5411\u91cf\u7c7b\u578b\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u6807\u91cf\u6216\u5411\u91cf\u7c7b\u578b\uff08\u8f6c\u6362\u4e3a\u6d6e\u70b9\u65f6\uff0c\u820d\u5165\u4e3a\u5076\u6570\uff1b\u8f6c\u6362\u4e3a\u6574\u6570\u65f6\uff0c\u820d\u5165\u4e3a\u96f6\uff09\u3002\u5982\u679c\u6e90\u7c7b\u578b\u662f\u6807\u91cf\u6216\u5411\u91cf\u5e03\u5c14\u503c\uff0c\u5219\u503c false \u5c06\u8f6c\u6362\u4e3a zero\uff0c\u503c true \u5c06\u8f6c\u6362\u4e3a one\u3002",source:"@site/docs/metal-shading-language-specification/type-conversions-and-re-interpreting-data/index.mdx",sourceDirName:"metal-shading-language-specification/type-conversions-and-re-interpreting-data",slug:"/metal-shading-language-specification/type-conversions-and-re-interpreting-data/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/type-conversions-and-re-interpreting-data/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/type-conversions-and-re-interpreting-data/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/mesh-shader-types/"},next:{title:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/implicit-type-conversions/"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components},{OriginalPDF:t,ToBePolishedAfterTranslation:s}=n;return t||f("OriginalPDF",!0),s||f("ToBePolishedAfterTranslation",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e",children:"\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e"}),"\n",(0,i.jsx)(s,{}),"\n",(0,i.jsx)(t,{title:"2.20 Type Conversions and Re-interpreting Data"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"static_cast"})," \u8fd0\u7b97\u7b26\u4f7f\u7528\u9ed8\u8ba4\u7684\u4e0d\u9971\u548c\u820d\u5165\u6a21\u5f0f\u5c06\u6807\u91cf\u6216\u5411\u91cf\u7c7b\u578b\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u6807\u91cf\u6216\u5411\u91cf\u7c7b\u578b\uff08\u8f6c\u6362\u4e3a\u6d6e\u70b9\u65f6\uff0c\u820d\u5165\u4e3a\u5076\u6570\uff1b\u8f6c\u6362\u4e3a\u6574\u6570\u65f6\uff0c\u820d\u5165\u4e3a\u96f6\uff09\u3002\u5982\u679c\u6e90\u7c7b\u578b\u662f\u6807\u91cf\u6216\u5411\u91cf\u5e03\u5c14\u503c\uff0c\u5219\u503c ",(0,i.jsx)(n.code,{children:"false"})," \u5c06\u8f6c\u6362\u4e3a ",(0,i.jsx)(n.code,{children:"zero"}),"\uff0c\u503c ",(0,i.jsx)(n.code,{children:"true"})," \u5c06\u8f6c\u6362\u4e3a ",(0,i.jsx)(n.code,{children:"one"}),"\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["Metal \u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,i.jsx)(n.code,{children:"as_type<type-id>"})," \u8fd0\u7b97\u7b26\uff0c\u4ee5\u5141\u8bb8\u4efb\u4f55\u6807\u91cf\u6216\u5411\u91cf\u6570\u636e\u7c7b\u578b\uff08\u4e0d\u662f\u6307\u9488\uff09\u88ab\u91cd\u65b0\u89e3\u91ca\u4e3a\u76f8\u540c\u5927\u5c0f\u7684\u53e6\u4e00\u79cd\u6807\u91cf\u6216\u5411\u91cf\u6570\u636e\u7c7b\u578b\u3002\u64cd\u4f5c\u6570\u4e2d\u7684\u4f4d\u4e0d\u52a0\u4fee\u6539\u76f4\u63a5\u8fd4\u56de\u4e3a\u65b0\u7c7b\u578b\u3002\u4e0d\u6267\u884c\u51fd\u6570\u53c2\u6570\u7684\u901a\u5e38\u7c7b\u578b\u63d0\u5347\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"as_type<float>(0x3f800000)"})," \u8fd4\u56de ",(0,i.jsx)(n.code,{children:"1.0f"}),"\uff0c\u5982\u679c\u5c06\u5176\u89c6\u4e3a IEEE-754 \u5355\u7cbe\u5ea6\u503c\uff0c\u5219\u8be5\u503c\u662f\u4f4d\u6a21\u5f0f ",(0,i.jsx)(n.code,{children:"0x3f800000"})," \u7684\u503c\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"as_type<type-id>"})," \u8fd0\u7b97\u7b26\u5c06\u6570\u636e\u91cd\u65b0\u89e3\u91ca\u4e3a\u5177\u6709\u4e0d\u540c\u5b57\u8282\u6570\u7684\u7c7b\u578b\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5408\u6cd5\u548c\u975e\u6cd5\u7c7b\u578b\u8f6c\u6362\u7684\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"float f = 1.0f;\n// Legal. Contains: 0x3f800000\nuint u = as_type<uint>(f);\n\n// Legal. Contains:\n// (int4)(0x3f800000, 0x40000000, 0x40400000, 0x40800000)\nfloat4 f = float4(1.0f, 2.0f, 3.0f, 4.0f);\nint4 i = as_type<int4>(f);\n\nint i;\n// Legal.\n\nshort2 j = as_type<short2>(i);\n\nhalf4 f;\n// Error. Result and operand have different sizes\nfloat4 g = as_type<float4>(f);\n\nfloat4 f;\n// Legal. g.xyz has same values as f.xyz.\nfloat3 g = as_type<float3>(f);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);