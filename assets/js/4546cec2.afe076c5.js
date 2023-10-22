"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(r),g=n,m=s["".concat(l,".").concat(g)]||s[g]||c[g]||o;return r?a.createElement(m,p(p({ref:t},d),{},{components:r})):a.createElement(m,p({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:n,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},35479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={},p="\u7ebf\u7a0b\u7ec4\u5730\u5740\u7a7a\u95f4",i={unversionedId:"metal-shading-language-specification/threadgroup-address-space/index",id:"metal-shading-language-specification/threadgroup-address-space/index",title:"\u7ebf\u7a0b\u7ec4\u5730\u5740\u7a7a\u95f4",description:"GPU \u8ba1\u7b97\u5355\u5143\u53ef\u4ee5\u5728 threadgroup \u4e2d\u540c\u65f6\u6267\u884c\u591a\u4e2a\u7ebf\u7a0b\uff0c\u5e76\u4e14 GPU \u53ef\u4ee5\u4e3a\u5176\u6bcf\u4e2a\u8ba1\u7b97\u5355\u5143\u6267\u884c\u5355\u72ec\u7684\u7ebf\u7a0b\u7ec4\u3002",source:"@site/docs/metal-shading-language-specification/threadgroup-address-space/index.mdx",sourceDirName:"metal-shading-language-specification/threadgroup-address-space",slug:"/metal-shading-language-specification/threadgroup-address-space/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/threadgroup-address-space/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/threadgroup-address-space/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u7ebf\u7a0b\u5730\u5740\u7a7a\u95f4",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/thread-address-space/"},next:{title:"threadgroup_imageblock \u5730\u5740\u7a7a\u95f4",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/threadgroup-imageblock-address-space/"}},l={},u=[{value:"SIMD-group \u548c Quad-group",id:"simd-group-\u548c-quad-group",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=d("ToBePolishedAfterTranslation"),c=d("OriginalPDF"),g={toc:u},m="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u7ebf\u7a0b\u7ec4\u5730\u5740\u7a7a\u95f4"},"\u7ebf\u7a0b\u7ec4\u5730\u5740\u7a7a\u95f4"),(0,n.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(c,{title:"4.4 threadgroup Address Space",mdxType:"OriginalPDF"}),(0,n.kt)("p",null,"GPU \u8ba1\u7b97\u5355\u5143\u53ef\u4ee5\u5728 ",(0,n.kt)("em",{parentName:"p"},"threadgroup")," \u4e2d\u540c\u65f6\u6267\u884c\u591a\u4e2a\u7ebf\u7a0b\uff0c\u5e76\u4e14 GPU \u53ef\u4ee5\u4e3a\u5176\u6bcf\u4e2a\u8ba1\u7b97\u5355\u5143\u6267\u884c\u5355\u72ec\u7684\u7ebf\u7a0b\u7ec4\u3002"),(0,n.kt)("p",null,"\u7ebf\u7a0b\u7ec4\u4e2d\u7684\u7ebf\u7a0b\u53ef\u4ee5\u901a\u8fc7\u5171\u4eab ",(0,n.kt)("inlineCode",{parentName:"p"},"threadgroup")," \u5185\u5b58\u4e2d\u7684\u6570\u636e\u6765\u534f\u540c\u5de5\u4f5c\uff0c\u8fd9\u5728\u5927\u591a\u6570\u8bbe\u5907\u4e0a\u6bd4\u5171\u4eab ",(0,n.kt)("inlineCode",{parentName:"p"},"device")," \u5185\u5b58\u4e2d\u7684\u6570\u636e\u66f4\u5feb\u3002\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"threadgroup")," \u5730\u5740\u7a7a\u95f4\u53ef\u4ee5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u5185\u6838\u3001\u7f51\u683c\u6216\u5bf9\u8c61\u51fd\u6570\u4e2d\u5206\u914d\u7ebf\u7a0b\u7ec4\u53d8\u91cf\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e00\u4e2a\u5185\u6838\u3001\u7247\u6bb5\u6216\u5bf9\u8c61\u51fd\u6570\u53c2\u6570\uff0c\u5b83\u662f\u6307\u5411\u7ebf\u7a0b\u7ec4\u5730\u5740\u7684\u6307\u9488\u3002")),(0,n.kt)("p",null,'\u8bf7\u53c2\u9605 "Metal Feature Set Tables"\uff0c\u4e86\u89e3\u54ea\u4e9b GPU \u652f\u6301\u7247\u6bb5\u7740\u8272\u5668\u7684\u7ebf\u7a0b\u7ec4\u7a7a\u95f4\u53c2\u6570\u3002'),(0,n.kt)("p",null,"\u5185\u6838\u3001\u7f51\u683c\u6216\u5bf9\u8c61\u51fd\u6570\u4e2d\u7684\u7ebf\u7a0b\u7ec4\u53d8\u91cf\u4ec5\u5728\u6267\u884c\u5185\u6838\u7684\u7ebf\u7a0b\u7ec4\u7684\u751f\u547d\u5468\u671f\u5185\u5b58\u5728\u3002\u4e2d\u95f4\u6e32\u67d3\u5185\u6838\u51fd\u6570\u4e2d\u7684\u7ebf\u7a0b\u7ec4\u53d8\u91cf\u5728\u56fe\u5757\u4e0a\u7684\u4e2d\u95f4\u6e32\u67d3\u548c\u7247\u6bb5\u5185\u6838\u51fd\u6570\u4e2d\u662f\u6301\u4e45\u7684\u3002"),(0,n.kt)("p",null,"\u8be5\u793a\u4f8b\u5185\u6838\u6f14\u793a\u4e86\u5982\u4f55\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"threadgroup")," \u5730\u5740\u7a7a\u95f4\u4e2d\u58f0\u660e\u53d8\u91cf\u548c\u53c2\u6570\u3002\uff08\u4e0b\u9762\u4ee3\u7801\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"[[threadgroup]]")," \u5c5e\u6027\u5728\u7b2c 5.2.1 \u8282\u4e2d\u8fdb\u884c\u4e86\u89e3\u91ca\u3002\uff09"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"kernel void\nmy_kernel(threadgroup float *sharedParameter [[threadgroup(0)]], ...)\n{\n    // Allocate a float in the threadgroup address space.\n    threadgroup float sharedFloat;\n\n    // Allocate an array of 10 floats in the threadgroup address space.\n    threadgroup float sharedFloatArray[10];\n    // ...\n}\n")),(0,n.kt)("p",null,"\u6709\u5173 ",(0,n.kt)("inlineCode",{parentName:"p"},"[[threadgroup(0)]]")," \u5c5e\u6027\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u7b2c 5.2.1 \u8282\u3002"),(0,n.kt)("h2",{id:"simd-group-\u548c-quad-group"},"SIMD-group \u548c Quad-group"),(0,n.kt)("p",null,"macOS\uff1a\u81ea Metal 2 \u8d77\u652f\u6301 SIMD-group\u3002\u81ea Metal 2.1 \u8d77\u652f\u6301 Quad-group\u3002"),(0,n.kt)("p",null,"iOS\uff1a\u81ea Metal 2.2 \u8d77\u652f\u6301\u4e00\u4e9b SIMD-group \u51fd\u6570\u3002\u4ece Metal 2 \u5f00\u59cb\u5c31\u652f\u6301 Quad-group\u3002"),(0,n.kt)("p",null,"\u5728\u7ebf\u7a0b\u7ec4\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5c06\u7ebf\u7a0b\u5212\u5206\u4e3a ",(0,n.kt)("em",{parentName:"p"},"SIMD-groups")," \uff0c\u5b83\u4eec\u662f\u5e76\u53d1\u6267\u884c\u7684\u7ebf\u7a0b\u7684\u96c6\u5408\u3002\u5230 SIMD-group \u7684\u6620\u5c04\u5728\u5185\u6838\u6267\u884c\u671f\u95f4\u3001\u5177\u6709\u76f8\u540c\u542f\u52a8\u53c2\u6570\u7684\u7ed9\u5b9a\u5185\u6838\u7684\u5206\u6d3e\u4ee5\u53ca\u5206\u6d3e\u5185\u4ece\u4e00\u4e2a\u7ebf\u7a0b\u7ec4\u5230\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u7ec4\uff08\u4e0d\u5305\u62ec\u5b58\u5728\u4e0d\u4e00\u81f4\u7ebf\u7a0b\u7ec4\u5927\u5c0f\u7684\u540e\u6cbf\u7ebf\u7a0b\u7ec4\uff09\u4e2d\u4fdd\u6301\u4e0d\u53d8\uff09\u3002\u6b64\u5916\uff0c\u7ebf\u7a0b\u7ec4\u5185\u7684\u6240\u6709 SIMD-group \u90fd\u9700\u8981\u5177\u6709\u76f8\u540c\u7684\u5927\u5c0f\uff0c\u9664\u4e86\u5177\u6709\u6700\u5927\u7d22\u5f15\u7684 SIMD-group \u4e4b\u5916\uff0c\u5982\u679c\u7ebf\u7a0b\u7ec4\u7684\u5927\u5c0f\u4e0d\u80fd\u88ab SIMD \u7684\u5927\u5c0f\u6574\u9664\uff0c\u5219\u7d22\u5f15\u53ef\u80fd\u66f4\u5c0f\u3002\u7ec4\u3002"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"quad-group")," \u662f\u7ebf\u7a0b\u6267\u884c\u5bbd\u5ea6\u4e3a 4 \u7684 SIMD-group \u3002"),(0,n.kt)("p",null,"\u6709\u5173 SIMD-group \u548c quad-group \u7684\u6838\u51fd\u6570\u5c5e\u6027\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 5.2.3.6 \u8282\u3002\u6709\u5173\u7ebf\u7a0b\u548c\u7ebf\u7a0b\u540c\u6b65\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 6.9 \u8282\u53ca\u5176\u5c0f\u8282\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6709\u5173\u7ebf\u7a0b\u540c\u6b65\u529f\u80fd\uff08\u5305\u62ec SIMD-group \u5c4f\u969c\uff09\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 6.9.1 \u8282\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u5173 SIMD-group \u51fd\u6570\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 6.9.2 \u8282\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6709\u5173 Quad-group \u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 6.9.3 \u8282\u3002")))}f.isMDXComponent=!0}}]);