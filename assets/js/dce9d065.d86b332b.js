"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3517],{7668:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=i(85893),r=i(11151);const o={},a="\u7edf\u4e00\u7c7b\u578b",l={id:"metal-shading-language-specification/uniform-type/index",title:"\u7edf\u4e00\u7c7b\u578b",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2 \u8d77\u652f\u6301\u7edf\u4e00\u7c7b\u578b\u3002",source:"@site/docs/metal-shading-language-specification/uniform-type/index.mdx",sourceDirName:"metal-shading-language-specification/uniform-type",slug:"/metal-shading-language-specification/uniform-type/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/uniform-type/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/uniform-type/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u53c2\u6570\u7f13\u51b2\u533a",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/argument-buffers/"},next:{title:"\u53ef\u89c1\u51fd\u6570\u8868",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/visible-function-table/"}},s={},c=[{value:"\u7edf\u4e00\u7c7b\u578b\u7684\u9700\u8981",id:"\u7edf\u4e00\u7c7b\u578b\u7684\u9700\u8981",level:2},{value:"Uniform \u7c7b\u578b\u7684\u884c\u4e3a",id:"uniform-\u7c7b\u578b\u7684\u884c\u4e3a",level:2},{value:"\u7edf\u4e00\u63a7\u5236\u6d41\u7a0b",id:"\u7edf\u4e00\u63a7\u5236\u6d41\u7a0b",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components},{OriginalPDF:i,ToBePolishedAfterTranslation:o}=e;return i||p("OriginalPDF",!0),o||p("ToBePolishedAfterTranslation",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u7edf\u4e00\u7c7b\u578b",children:"\u7edf\u4e00\u7c7b\u578b"}),"\n",(0,t.jsx)(o,{}),"\n",(0,t.jsx)(i,{title:"2.14 Uniform Type"}),"\n",(0,t.jsx)(e.p,{children:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2 \u8d77\u652f\u6301\u7edf\u4e00\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u7edf\u4e00\u7c7b\u578b\u7684\u9700\u8981",children:"\u7edf\u4e00\u7c7b\u578b\u7684\u9700\u8981"}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u4e0b\u9762\u7684\u51fd\u6570\u793a\u4f8b\u4e2d\uff0c\u53d8\u91cf ",(0,t.jsx)(e.code,{children:"i"})," \u7528\u4e8e\u7d22\u5f15 ",(0,t.jsx)(e.code,{children:"texInput"})," \u7ed9\u51fa\u7684\u7eb9\u7406\u6570\u7ec4\u3002\u53d8\u91cf ",(0,t.jsx)(e.code,{children:"i"})," \u662f\u975e\u5747\u5300\u7684\uff1b\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e\u6267\u884c\u7ed8\u56fe\u6216\u8c03\u5ea6\u8c03\u7528\u7684\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u7684\u7ebf\u7a0b\uff0c\u5b83\u53ef\u4ee5\u5177\u6709\u4e0d\u540c\u7684\u503c\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\u3002\u56e0\u6b64\uff0c\u7eb9\u7406\u91c7\u6837\u786c\u4ef6\u5fc5\u987b\u5904\u7406\u6837\u672c\u8bf7\u6c42\uff0c\u8be5\u8bf7\u6c42\u53ef\u4ee5\u4e3a\u6267\u884c\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u7684\u7ebf\u7a0b\u5f15\u7528\u4e0d\u540c\u7684\u7eb9\u7406\u4ee5\u8fdb\u884c\u7ed8\u5236\u6216\u5206\u6d3e\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"kernel void\nmy_kernel(array<texture2d<float>, 10> texInput,\n          array<texture2d<float>, 10> texOutput,\n          sampler s,\n          ...,\n          uint2 gid [[thread_position_in_grid]])\n{\n    int i = ...;\n    float4 color = texInput[i].sample(s, float2(gid));\n    ...;\n    texOutput[i].write(color, float2(gid));\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u53d8\u91cf ",(0,t.jsx)(e.code,{children:"i"})," \u5bf9\u4e8e\u6267\u884c\u7ed8\u5236\u6216\u5206\u6d3e\u8c03\u7528\u7684\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u7684\u6240\u6709\u7ebf\u7a0b\u5177\u6709\u76f8\u540c\u7684\u503c\uff08\u7edf\u4e00\uff09\uff0c\u5e76\u4e14\u5982\u679c\u8be5\u4fe1\u606f\u88ab\u4f20\u9001\u5230\u786c\u4ef6\uff0c\u5219\u7eb9\u7406\u91c7\u6837\u786c\u4ef6\u53ef\u4ee5\u5e94\u7528\u9002\u5f53\u7684\u4f18\u5316\u3002\u53ef\u4ee5\u4e3a\u7eb9\u7406\u5199\u5165\u63d0\u51fa\u7c7b\u4f3c\u7684\u8bba\u70b9\uff0c\u5176\u4e2d\u5728\u8fd0\u884c\u65f6\u8ba1\u7b97\u7684\u53d8\u91cf\u7528\u4f5c\u7eb9\u7406\u6570\u7ec4\u7684\u7d22\u5f15\u6216\u4e00\u4e2a\u6216\u591a\u4e2a\u7f13\u51b2\u533a\u7684\u7d22\u5f15\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e3a\u4e86\u8868\u660e\u8be5\u53d8\u91cf\u5bf9\u4e8e\u6267\u884c\u7ed8\u5236\u6216\u8c03\u5ea6\u8c03\u7528\u7684\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u7684\u6240\u6709\u7ebf\u7a0b\u6765\u8bf4\u662f\u7edf\u4e00\u7684\uff0cMSL \u6dfb\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a uniform \u7684\u65b0\u6a21\u677f\u7c7b\uff08\u5728\u5934\u6587\u4ef6 ",(0,t.jsx)(e.code,{children:"metal_uniform"})," \u4e2d\u53ef\u7528\uff09\uff0c\u53ef\u7528\u4e8e\u5728\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u5185\u58f0\u660e\u53d8\u91cf\u3002\u8be5\u6a21\u677f\u7c7b\u53ea\u80fd\u7528\u7b97\u672f\u7c7b\u578b\uff08\u4f8b\u5982\u5e03\u5c14\u578b\u3001\u6574\u6570\u548c\u6d6e\u70b9\u578b\uff09\u548c\u5411\u91cf\u7c7b\u578b\u6765\u5b9e\u4f8b\u5316\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u4e0b\u9762\u7684\u4ee3\u7801\u662f\u4e0a\u4e00\u4e2a\u793a\u4f8b\u7684\u4fee\u6539\u7248\u672c\uff0c\u5176\u4e2d\u53d8\u91cf ",(0,t.jsx)(e.code,{children:"i"})," \u88ab\u58f0\u660e\u4e3a ",(0,t.jsx)(e.code,{children:"uniform"})," \u7c7b\u578b\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"kernel void\nmy_kernel(array<texture2d<float>, 10> texInput,\n          array<texture2d<float>, 10> texOutput,\n          sampler s,\n          ...,\n          uint2 gid [[thread_position_in_grid]])\n{\n    uniform<int> i = ...;\n    float4 color = texInput[i].sample(s, float2(gid));\n    ...;\n    texOutput[i].write(color, float2(gid));\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"uniform-\u7c7b\u578b\u7684\u884c\u4e3a",children:"Uniform \u7c7b\u578b\u7684\u884c\u4e3a"}),"\n",(0,t.jsxs)(e.p,{children:["\u5982\u679c\u53d8\u91cf\u662f ",(0,t.jsx)(e.code,{children:"uniform"})," \u7c7b\u578b\uff0c\u5e76\u4e14\u8be5\u53d8\u91cf\u5bf9\u4e8e\u6267\u884c\u5185\u6838\u6216\u56fe\u5f62\u51fd\u6570\u7684\u6240\u6709\u7ebf\u7a0b\u4e0d\u5177\u6709\u76f8\u540c\u7684\u503c\uff0c\u5219\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u7edf\u4e00\u53d8\u91cf\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\u4e3a\u975e\u7edf\u4e00\u7c7b\u578b\u3002\u5c06\u4f7f\u7528\u7edf\u4e00\u53d8\u91cf\u8ba1\u7b97\u7684\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u5206\u914d\u7ed9\u7edf\u4e00\u53d8\u91cf\u662f\u5408\u6cd5\u7684\uff0c\u4f46\u5c06\u975e\u7edf\u4e00\u53d8\u91cf\u5206\u914d\u7ed9\u7edf\u4e00\u53d8\u91cf\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u65f6\u9519\u8bef\u3002\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u4e58\u6cd5\u5c06\u5747\u5300\u53d8\u91cf x \u5408\u6cd5\u5730\u8f6c\u6362\u4e3a\u975e\u5747\u5300\u4e58\u79ef z\u3002\u4f46\u662f\uff0c\u5c06\u975e\u5747\u5300\u53d8\u91cf z \u5206\u914d\u7ed9\u5747\u5300\u53d8\u91cf b \u4f1a\u5bfc\u81f4\u7f16\u8bd1\u65f6\u9519\u8bef\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"uniform<int> x = ...;\nint y = ...;\nint z = x * y;          // x is converted to a non-uniform for a\nmultiply\nuniform<int> b = z;     // illegal; compile-time error\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u58f0\u660e\u7edf\u4e00\u5143\u7d20\u6570\u7ec4\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"uniform<float> bar[10];   // elements stored in bar array are uniform\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u7edf\u4e00\u7c7b\u578b\u5bf9\u4e8e\u51fd\u6570\u7684\u53c2\u6570\u548c\u8fd4\u56de\u7c7b\u578b\u90fd\u662f\u5408\u6cd5\u7684\u3002\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"uniform<int> foo(...);        // foo returns a uniform integer value\nint bar(uniform<int> a, ...);\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u58f0\u660e\u6307\u5411\u7edf\u4e00\u7c7b\u578b\u7684\u6307\u9488\u662f\u5408\u6cd5\u7684\uff0c\u4f46\u58f0\u660e\u7edf\u4e00\u6307\u9488\u662f\u4e0d\u5408\u6cd5\u7684\u3002\u4f8b\u5982\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"device uniform<int> *ptr;   // values pointed to by ptr are uniform\nuniform<device int *> ptr;  // illegal; compile-time error\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5c06\u5747\u5300\u53d8\u91cf\u4e0e\u975e\u5747\u5300\u53d8\u91cf\u76f8\u7ed3\u5408\u7684\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u662f\u975e\u5747\u5300\u7684\u3002\u5982\u679c\u5c06\u975e\u5747\u5300\u7ed3\u679c\u5206\u914d\u7ed9\u5747\u5300\u53d8\u91cf\uff08\u5982\u4e0b\u4f8b\u6240\u793a\uff09\uff0c\u5219\u884c\u4e3a\u672a\u5b9a\u4e49\u3002\uff08\u524d\u7aef\u53ef\u80fd\u4f1a\u751f\u6210\u7f16\u8bd1\u65f6\u9519\u8bef\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u4e00\u5b9a\u4f1a\u53d1\u751f\u3002\uff09"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"uniform<int> i = ...;\nint j = ...;\nif (i < j) {  // non-uniform result for expression (i < j)\n    ...\n    i++;      // compile-time error, undefined behavior\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u7c7b\u4f3c\u7684\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-cpp",children:"bool p = ... // non-uniform condition.\nuniform<int> a = ..., b = ...;\nuniform<int> c = p ? a : b; // compile-time error, undefined\nbehavior\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u7edf\u4e00\u63a7\u5236\u6d41\u7a0b",children:"\u7edf\u4e00\u63a7\u5236\u6d41\u7a0b"}),"\n",(0,t.jsx)(e.p,{children:"\u5f53\u63a7\u5236\u6d41\u6761\u4ef6\u6d4b\u8bd5\u57fa\u4e8e\u7edf\u4e00\u6570\u91cf\u65f6\uff0c\u6240\u6709\u7a0b\u5e8f\u5b9e\u4f8b\u5728\u51fd\u6570\u4e2d\u7684\u6761\u4ef6\u6d4b\u8bd5\u4e2d\u90fd\u9075\u5faa\u76f8\u540c\u7684\u8def\u5f84\u3002\u57fa\u4e8e\u5747\u5300\u91cf\u7684\u63a7\u5236\u6d41\u4ee3\u7801\u5e94\u8be5\u6bd4\u57fa\u4e8e\u975e\u5747\u5300\u91cf\u7684\u63a7\u5236\u6d41\u4ee3\u7801\u66f4\u6709\u6548\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}function p(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,i)=>{i.d(e,{Z:()=>l,a:()=>a});var t=i(67294);const r={},o=t.createContext(r);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);