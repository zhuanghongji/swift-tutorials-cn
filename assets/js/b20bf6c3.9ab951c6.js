"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},f=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),s=m(n),c=l,u=s["".concat(p,".").concat(c)]||s[c]||d[c]||i;return n?a.createElement(u,r(r({ref:t},f),{},{components:n})):a.createElement(u,r({ref:t},f))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(87462),l=(n(67294),n(3905));const i={},r="\u77e9\u9635\u6570\u636e\u7c7b\u578b",o={unversionedId:"metal-shading-language-specification/matrix-data-types/index",id:"metal-shading-language-specification/matrix-data-types/index",title:"\u77e9\u9635\u6570\u636e\u7c7b\u578b",description:"Metal \u652f\u6301\u7cfb\u7edf\u6570\u5b66\u5e93\u5b9e\u73b0\u7684\u77e9\u9635\u6570\u636e\u7c7b\u578b\u7684\u5b50\u96c6\u3002",source:"@site/docs/metal-shading-language-specification/matrix-data-types/index.mdx",sourceDirName:"metal-shading-language-specification/matrix-data-types",slug:"/metal-shading-language-specification/matrix-data-types/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/matrix-data-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/matrix-data-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u5411\u91cf\u6570\u636e\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/vector-data-types/"},next:{title:"SIMD \u7ec4\u77e9\u9635\u6570\u636e\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/simd-group-matrix-data-types/"}},p={},m=[{value:"\u8bbf\u95ee\u77e9\u9635\u7ec4\u4ef6",id:"\u8bbf\u95ee\u77e9\u9635\u7ec4\u4ef6",level:2},{value:"\u77e9\u9635\u6784\u9020\u51fd\u6570",id:"\u77e9\u9635\u6784\u9020\u51fd\u6570",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},s=f("ToBePolishedAfterTranslation"),d=f("OriginalPDF"),c=f("TableView"),u={toc:m},k="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u77e9\u9635\u6570\u636e\u7c7b\u578b"},"\u77e9\u9635\u6570\u636e\u7c7b\u578b"),(0,l.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,l.kt)(d,{title:"2.3 Matrix Data Types",mdxType:"OriginalPDF"}),(0,l.kt)("p",null,"Metal \u652f\u6301\u7cfb\u7edf\u6570\u5b66\u5e93\u5b9e\u73b0\u7684\u77e9\u9635\u6570\u636e\u7c7b\u578b\u7684\u5b50\u96c6\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u77e9\u9635\u7c7b\u578b\u540d\u79f0\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"halfnxm")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"floatnxm"))),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u662f\u5217\u6570\u548c\u884c\u6570\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u5fc5\u987b\u4e3a 2\u30013 \u6216 4\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"floatnxm")," \u7c7b\u578b\u7684\u77e9\u9635\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"floatm")," \u5411\u91cf\u7ec4\u6210\u3002\u7c7b\u4f3c\u5730\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"halfnxm")," \u7c7b\u578b\u7684\u77e9\u9635\u7531 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"halfm")," \u5411\u91cf\u7ec4\u6210\u3002"),(0,l.kt)("p",null,"Metal \u8fd8\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"matrix<T,c, r>")," \u77e9\u9635\uff0c\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u662f\u6709\u6548\u7684\u6d6e\u70b9\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"c")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"3")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),"\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"r")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"3")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),"\u3002"),(0,l.kt)("p",null,"\u8868 2.5 \u5217\u51fa\u4e86\u77e9\u9635\u6570\u636e\u7c7b\u578b\u7684\u5927\u5c0f\u548c\u5bf9\u9f50\u65b9\u5f0f\u3002"),(0,l.kt)(c,{num:"2.5",title:"Size and alignment of matrix data types ",headers:["Type","Size (in bytes)","Alignment (in bytes)"],datasList:[["half2x2","8","4"],["half2x3","16","8"],["half2x4","16","8"],["half3x2","12","4"],["half3x3","24","8"],["half3x4","24","8"],["half4x2","16","4"],["half4x3","32","8"],["half4x4","32","8"],["float2x2","16","8"],["float2x3","32","16"],["float2x4","32","16"],["float3x2","24","8"],["float3x3","48","16"],["float3x4","48","16"],["float4x2","32","8"],["float4x3","64","16"],["float4x4","64","16"]],mdxType:"TableView"}),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u77e9\u9635\u7ec4\u4ef6"},"\u8bbf\u95ee\u77e9\u9635\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6570\u7ec4\u4e0b\u6807\u8bed\u6cd5\u6765\u8bbf\u95ee\u77e9\u9635\u7684\u7ec4\u6210\u90e8\u5206\u3002\u5bf9\u77e9\u9635\u5e94\u7528\u5355\u4e2a\u4e0b\u6807\u4f1a\u5c06\u77e9\u9635\u89c6\u4e3a\u5217\u5411\u91cf\u6570\u7ec4\u3002\u4e24\u4e2a\u4e0b\u6807\u9009\u62e9\u4e00\u5217\uff0c\u7136\u540e\u9009\u62e9\u4e00\u884c\u3002\u6700\u4e0a\u9762\u7684\u5217\u662f\u7b2c 0 \u5217\u3002\u7136\u540e\uff0c\u7b2c\u4e8c\u4e2a\u4e0b\u6807\u5bf9\u7ed3\u679c\u5411\u91cf\u8fdb\u884c\u8fd0\u7b97\uff0c\u5982\u4e4b\u524d\u4e3a\u5411\u91cf\u6240\u5b9a\u4e49\u7684\u90a3\u6837\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"float4x4 m;\n\n// This sets the 2nd column to all 2.0.\nm[1] = float4(2.0f);\n\n// This sets the 1st element of the 1st column to 1.0.\nm[0][0] = 1.0f;\n// This sets the 4th element of the 3rd column to 3.0.\nm[2][3] = 3.0f;\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"floatnxm")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"halfnxm")," \u77e9\u9635\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"floatm")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"halfm")," \u6761\u76ee\u7684\u6570\u7ec4\u6765\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u975e\u5e38\u91cf\u8868\u8fbe\u5f0f\u8bbf\u95ee\u77e9\u9635\u8fb9\u754c\u4e4b\u5916\u7684\u7ec4\u4ef6\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002\u4f7f\u7528\u5e38\u91cf\u8868\u8fbe\u5f0f\u8bbf\u95ee\u77e9\u9635\u8fb9\u754c\u4e4b\u5916\u7684\u77e9\u9635\u5206\u91cf\u4f1a\u751f\u6210\u7f16\u8bd1\u65f6\u9519\u8bef\u3002"),(0,l.kt)("h2",{id:"\u77e9\u9635\u6784\u9020\u51fd\u6570"},"\u77e9\u9635\u6784\u9020\u51fd\u6570"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u6784\u9020\u51fd\u6570\u4ece\u4e00\u7ec4\u6807\u91cf\u3001\u5411\u91cf\u6216\u77e9\u9635\u521b\u5efa\u77e9\u9635\u3002\u53c2\u6570\u7b7e\u540d\u51b3\u5b9a\u5982\u4f55\u6784\u9020\u548c\u521d\u59cb\u5316\u77e9\u9635\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4ec5\u4f7f\u7528\u5355\u4e2a\u6807\u91cf\u53c2\u6570\u521d\u59cb\u5316\u77e9\u9635\uff0c\u5219\u7ed3\u679c\u662f\u4e00\u4e2a\u5305\u542b\u77e9\u9635\u5bf9\u89d2\u7ebf\u6240\u6709\u5206\u91cf\u7684\u6807\u91cf\u7684\u77e9\u9635\uff0c\u5176\u4f59\u5206\u91cf\u521d\u59cb\u5316\u4e3a 0.0\u3002\u4f8b\u5982\uff0c\u8c03\u7528\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"float4x4(fval);\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"fval")," \u662f\u6807\u91cf\u6d6e\u70b9\u503c\uff0c\u4f7f\u7528\u4ee5\u4e0b\u521d\u59cb\u5185\u5bb9\u6784\u9020\u4e00\u4e2a\u77e9\u9635\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"fval 0.0  0.0  0.0\n0.0  fval 0.0  0.0\n0.0  0.0  fval 0.0\n0.0  0.0  0.0  fval\n")),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4ece\u5177\u6709\u76f8\u540c\u884c\u6570\u548c\u5217\u6570\u7684\u53e6\u4e00\u4e2a\u77e9\u9635\u6784\u9020\u4e00\u4e2a\u77e9\u9635\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"float3x4(float3x4);\nfloat3x4(half3x4);\n")),(0,l.kt)("p",null,"\u77e9\u9635\u7ec4\u4ef6\u6309\u5217\u4f18\u5148\u987a\u5e8f\u6784\u5efa\u548c\u4f7f\u7528\u3002\u77e9\u9635\u6784\u9020\u51fd\u6570\u5fc5\u987b\u5728\u5176\u53c2\u6570\u4e2d\u6307\u5b9a\u8db3\u591f\u7684\u503c\u6765\u521d\u59cb\u5316\u6784\u9020\u7684\u77e9\u9635\u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e2a\u7ec4\u4ef6\u3002\u63d0\u4f9b\u8d85\u8fc7\u5fc5\u8981\u7684\u53c2\u6570\u4f1a\u5bfc\u81f4\u9519\u8bef\u3002\u77e9\u9635\u6784\u9020\u51fd\u6570\u521d\u59cb\u5316\u4e0d\u8db3\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u65f6\u9519\u8bef\u3002"),(0,l.kt)("p",null,"\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u5217\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u884c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u77e9\u9635\u4e5f\u53ef\u4ee5\u7531\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u4e2a\u5206\u91cf\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u5411\u91cf\u6784\u9020\u3002\u4ee5\u4e0b\u793a\u4f8b\u662f\u5408\u6cd5\u7684\u6784\u9020\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"float2x2(float2, float2);\nfloat3x3(float3, float3, float3);\nfloat3x2(float2, float2, float2);\n")),(0,l.kt)("p",null,"\u4ece Metal 2 \u5f00\u59cb\uff0c\u5177\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," \u5217\u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u884c\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u77e9\u9635\uff0c\u4e5f\u53ef\u4ee5\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," ","*"," ",(0,l.kt)("inlineCode",{parentName:"p"},"m")," \u6807\u91cf\u6784\u9020\u3002\u4ee5\u4e0b\u793a\u4f8b\u662f\u5408\u6cd5\u7684\u6784\u9020\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"float2x2(float, float, float, float);\nfloat3x2(float, float, float, float, float, float);\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u4e0d")," \u652f\u6301\u7684\u77e9\u9635\u6784\u9020\u51fd\u6570\u7684\u793a\u4f8b\u3002\u77e9\u9635\u4e0d\u80fd\u7531\u5411\u91cf\u548c\u6807\u91cf\u7684\u7ec4\u5408\u6784\u9020\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"// Not supported.\nfloat2x3(float2 a, float b, float2 c, float d);\n")))}g.isMDXComponent=!0}}]);