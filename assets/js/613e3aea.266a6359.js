"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[279],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(a),s=l,g=c["".concat(o,".").concat(s)]||c[s]||d[s]||r;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8411:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={},i="\u7f16\u8bd1\u5668\u548c\u9884\u5904\u7406\u5668",p={unversionedId:"metal-shading-language-specification/compiler-and-preprocessor/index",id:"metal-shading-language-specification/compiler-and-preprocessor/index",title:"\u7f16\u8bd1\u5668\u548c\u9884\u5904\u7406\u5668",description:"\u4f60\u53ef\u4ee5\u5728\u7ebf\u4f7f\u7528 Metal \u7f16\u8bd1\u5668\uff08\u4f7f\u7528\u9002\u5f53\u7684 API \u6765\u7f16\u8bd1 Metal \u6e90\u4ee3\u7801\uff09\u6216\u79bb\u7ebf\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9002\u5f53\u7684 Metal API \u52a0\u8f7d\u79bb\u7ebf\u7f16\u8bd1\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684 Metal \u6e90\u3002",source:"@site/docs/metal-shading-language-specification/compiler-and-preprocessor/index.mdx",sourceDirName:"metal-shading-language-specification/compiler-and-preprocessor",slug:"/metal-shading-language-specification/compiler-and-preprocessor/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/compiler-and-preprocessor/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/compiler-and-preprocessor/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"Metal \u548c C++14",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/metal-and-cpp14/"},next:{title:"Metal \u5750\u6807\u7cfb",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/metal-coordinate-systems/"}},o={},u=[{value:"\u9884\u5904\u7406\u5668\u7f16\u8bd1\u5668\u9009\u9879",id:"\u9884\u5904\u7406\u5668\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u9884\u5904\u7406\u5668\u5b9a\u4e49",id:"\u9884\u5904\u7406\u5668\u5b9a\u4e49",level:2},{value:"\u6570\u5b66\u5185\u5728\u51fd\u6570\u7f16\u8bd1\u5668\u9009\u9879",id:"\u6570\u5b66\u5185\u5728\u51fd\u6570\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u4e0d\u53d8\u6027\u7f16\u8bd1\u5668\u9009\u9879",id:"\u4e0d\u53d8\u6027\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u4f18\u5316\u7f16\u8bd1\u5668\u9009\u9879",id:"\u4f18\u5316\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u6700\u5927\u603b\u7ebf\u7a0b\u7ec4\u5927\u5c0f\u9009\u9879",id:"\u6700\u5927\u603b\u7ebf\u7a0b\u7ec4\u5927\u5c0f\u9009\u9879",level:2},{value:"\u7eb9\u7406\u5199\u5165\u820d\u5165\u6a21\u5f0f",id:"\u7eb9\u7406\u5199\u5165\u820d\u5165\u6a21\u5f0f",level:2},{value:"\u542f\u7528\u6a21\u5757\u7684\u7f16\u8bd1\u5668\u9009\u9879",id:"\u542f\u7528\u6a21\u5757\u7684\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u63a7\u5236\u8bed\u8a00\u7248\u672c\u7684\u7f16\u8bd1\u5668\u9009\u9879",id:"\u63a7\u5236\u8bed\u8a00\u7248\u672c\u7684\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u8bf7\u6c42\u6216\u6291\u5236\u8b66\u544a\u7684\u7f16\u8bd1\u5668\u9009\u9879",id:"\u8bf7\u6c42\u6216\u6291\u5236\u8b66\u544a\u7684\u7f16\u8bd1\u5668\u9009\u9879",level:2},{value:"\u76ee\u6807\u6761\u4ef6",id:"\u76ee\u6807\u6761\u4ef6",level:2},{value:"\u52a8\u6001\u5e93\u94fe\u63a5\u5668\u9009\u9879",id:"\u52a8\u6001\u5e93\u94fe\u63a5\u5668\u9009\u9879",level:2},{value:"\u7f16\u8bd1\u4e3a GPU \u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u9009\u9879",id:"\u7f16\u8bd1\u4e3a-gpu-\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u9009\u9879",level:2},{value:"\u751f\u6210 Metal \u5e93\u7b26\u53f7\u6587\u4ef6\u7684\u9009\u9879",id:"\u751f\u6210-metal-\u5e93\u7b26\u53f7\u6587\u4ef6\u7684\u9009\u9879",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},c=m("ToBePolishedAfterTranslation"),d=m("OriginalPDF"),s=m("TableWrapper"),g={toc:u},k="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f16\u8bd1\u5668\u548c\u9884\u5904\u7406\u5668"},"\u7f16\u8bd1\u5668\u548c\u9884\u5904\u7406\u5668"),(0,l.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,l.kt)(d,{title:"1.5 Compiler and Preprocessor",mdxType:"OriginalPDF"}),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u7ebf\u4f7f\u7528 Metal \u7f16\u8bd1\u5668\uff08\u4f7f\u7528\u9002\u5f53\u7684 API \u6765\u7f16\u8bd1 Metal \u6e90\u4ee3\u7801\uff09\u6216\u79bb\u7ebf\u4f7f\u7528\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9002\u5f53\u7684 Metal API \u52a0\u8f7d\u79bb\u7ebf\u7f16\u8bd1\u4e3a\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684 Metal \u6e90\u3002"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd Metal \u7f16\u8bd1\u5668\u652f\u6301\u7684\u7f16\u8bd1\u5668\u9009\u9879\uff0c\u5e76\u5c06\u5b83\u4eec\u5206\u7c7b\u4e3a\u9884\u5904\u7406\u5668\u9009\u9879\u3001\u6570\u5b66\u5185\u5728\u51fd\u6570\u9009\u9879\u3001\u63a7\u5236\u4f18\u5316\u7684\u9009\u9879\u3001\u6742\u9879\u7f16\u8bd1\u9009\u9879\u548c\u94fe\u63a5\u3002"),(0,l.kt)("h2",{id:"\u9884\u5904\u7406\u5668\u7f16\u8bd1\u5668\u9009\u9879"},"\u9884\u5904\u7406\u5668\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u9009\u9879\u63a7\u5236\u5b9e\u9645\u7f16\u8bd1\u4e4b\u524d\u5728\u6bcf\u4e2a\u7a0b\u5e8f\u6e90\u4e0a\u8fd0\u884c\u7684 Metal \u9884\u5904\u7406\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-D name\n# \u5c06 name \u9884\u5b9a\u4e49\u4e3a\u5b8f\uff0c\u5b9a\u4e49\u4e3a 1\n\n-D name=definition\n# \u5b9a\u4e49\u7684\u5185\u5bb9\u88ab\u6807\u8bb0\u548c\u5904\u7406\uff0c\u5c31\u50cf\u5b83\u4eec\u51fa\u73b0\u5728 #define \u6307\u4ee4\u4e2d\u4e00\u6837\u3002\n# \u6b64\u9009\u9879\u5141\u8bb8\u4f60\u7f16\u8bd1 Metal \u4ee3\u7801\u4ee5\u542f\u7528\u6216\u7981\u7528\u529f\u80fd\u3002\n# \u4f60\u53ef\u4ee5\u591a\u6b21\u4f7f\u7528\u6b64\u9009\u9879\uff0c\u9884\u5904\u7406\u5668\u5c06\u6309\u7167\u5b9a\u4e49\u51fa\u73b0\u7684\u987a\u5e8f\u5904\u7406\u5b83\u4eec\u3002\n\n-I dir\n# \u5c06\u76ee\u5f55 dir \u6dfb\u52a0\u5230\u5934\u6587\u4ef6\u76ee\u5f55\u7684\u641c\u7d22\u8def\u5f84\u4e2d\u3002\u8be5\u9009\u9879\u4ec5\u9002\u7528\u4e8e\u79bb\u7ebf\u7f16\u8bd1\u5668\u3002\n")),(0,l.kt)("h2",{id:"\u9884\u5904\u7406\u5668\u5b9a\u4e49"},"\u9884\u5904\u7406\u5668\u5b9a\u4e49"),(0,l.kt)("p",null,"Metal \u7f16\u8bd1\u5668\u9ed8\u8ba4\u8bbe\u7f6e\u4e86\u8bb8\u591a\u9884\u5904\u7406\u5668\u5b9a\u4e49\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"__METAL_VERSION__ // Set to the Metal language revision\n__METAL_MACOS__   // Set if compiled with the macOS Metal language\n__METAL_IOS__     // Set if compiled with the iOS Metal language\n__METAL__         // Set if compiled with the unified Metal language\n                  // Set with -std=metal3.0 or above.\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b9a\u4e49\u6709\u6761\u4ef6\u5730\u5e94\u7528\u4ec5\u5728\u66f4\u9ad8\u7248\u672c\u7684\u8bed\u8a00\u7248\u672c\u4e2d\u53ef\u7528\u7684\u7740\u8272\u8bed\u8a00\u529f\u80fd\uff08\u8bf7\u53c2\u9605\u63a7\u5236\u8bed\u8a00\u7248\u672c\u7684\u7f16\u8bd1\u5668\u9009\u9879\uff09\u3002"),(0,l.kt)("p",null,"\u7248\u672c\u53f7\u4e3a MajorMinorPatch\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e Metal 1.2\uff0c\u8865\u4e01 0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"__METAL_VERSION__")," \u4e3a 120\uff1b\u5bf9\u4e8e Metal 2.1\uff0c\u8865\u4e01 1\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"__METAL_VERSION__")," \u662f 211\u3002"),(0,l.kt)("p",null,"\u8981\u6709\u6761\u4ef6\u5730\u5305\u542b\u4f7f\u7528 Metal 2 \u4e2d\u5f15\u5165\u7684\u529f\u80fd\u7684\u4ee3\u7801\uff0c\u4f60\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u9884\u5904\u7406\u5668\u5b9a\u4e49\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#if __METAL_VERSION__ >= 200\n// Code that requires features introduced in Metal 2.\n#endif\n")),(0,l.kt)("h2",{id:"\u6570\u5b66\u5185\u5728\u51fd\u6570\u7f16\u8bd1\u5668\u9009\u9879"},"\u6570\u5b66\u5185\u5728\u51fd\u6570\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u9009\u9879\u63a7\u5236\u7f16\u8bd1\u5668\u6709\u5173\u6d6e\u70b9\u8fd0\u7b97\u7684\u884c\u4e3a\uff0c\u5728\u901f\u5ea6\u548c\u6b63\u786e\u6027\u4e4b\u95f4\u8fdb\u884c\u6743\u8861\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"-ffast-math (default)\n-fno-fast-math\n")),(0,l.kt)("p",null,"\u6709\u5173\u6570\u5b66\u51fd\u6570\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 6.5 \u8282\u3002\u6709\u5173\u666e\u901a\u548c\u5feb\u901f\u6570\u5b66\u51fd\u6570\u7684\u76f8\u5bf9\u8bef\u5dee\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 7.4 \u8282\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u9009\u9879\u542f\u7528\uff08\u9ed8\u8ba4\uff09\u6216\u7981\u7528\u53ef\u80fd\u8fdd\u53cd IEEE 754 \u6807\u51c6\u7684\u6d6e\u70b9\u7b97\u672f\u4f18\u5316\u3002\u5b83\u4eec\u8fd8\u542f\u7528\u6216\u7981\u7528\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6807\u91cf\u548c\u5411\u91cf\u7c7b\u578b\u7684\u6570\u5b66\u51fd\u6570\u7684\u9ad8\u7cbe\u5ea6\u53d8\u4f53\u3002"),(0,l.kt)("p",null,"\u6d6e\u70b9\u8fd0\u7b97\u7684\u5feb\u901f\u6570\u5b66\u4f18\u5316\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u65e0 NaN\uff1a\u5141\u8bb8\u4f18\u5316\u5047\u8bbe\u53c2\u6570\u548c\u7ed3\u679c\u4e0d\u662f NaN\uff08"\u4e0d\u662f\u6570\u5b57"\uff09\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u65e0 INF\uff1a\u5141\u8bb8\u4f18\u5316\u5047\u8bbe\u53c2\u6570\u548c\u7ed3\u679c\u4e0d\u662f\u6b63\u65e0\u7a77\u5927\u6216\u8d1f\u65e0\u7a77\u5927\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u7b26\u53f7\u96f6\uff1a\u5141\u8bb8\u4f18\u5316\u5c06\u96f6\u53c2\u6570\u6216\u7ed3\u679c\u7684\u7b26\u53f7\u89c6\u4e3a\u65e0\u5173\u7d27\u8981\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u5012\u6570\uff1a\u5141\u8bb8\u4f18\u5316\u4f7f\u7528\u53c2\u6570\u7684\u5012\u6570\u800c\u4e0d\u662f\u6267\u884c\u9664\u6cd5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u91cd\u65b0\u5173\u8054\uff1a\u5141\u8bb8\u4ee3\u6570\u7b49\u6548\u8f6c\u6362\uff0c\u4f8b\u5982\u91cd\u65b0\u5173\u8054\u53ef\u80fd\u4f1a\u663e\u7740\u6539\u53d8\u6d6e\u70b9\u7ed3\u679c\u7684\u6d6e\u70b9\u8fd0\u7b97\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u5408\u7ea6\uff1a\u5141\u8bb8\u8de8\u8bed\u53e5\u8fdb\u884c\u6d6e\u70b9\u6536\u7f29\u3002\u4f8b\u5982\uff0c\u5141\u8bb8\u5c06\u4e00\u4e2a\u4e58\u6570\u548c\u4e00\u4e2a\u9644\u52a0\u503c\u878d\u5408\u6210\u4e00\u4e2a\u878d\u5408\u4e58\u52a0\u3002")),(0,l.kt)("p",null,"\u5728\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u5feb\u901f\u6570\u5b66\u65f6\uff0c\u91cd\u8981\u7684\u662f\u8981\u4e86\u89e3\u7f16\u8bd1\u5668\u53ef\u4ee5\u5047\u8bbe\u67d0\u4e9b\u5c5e\u6027\u5e76\u76f8\u5e94\u5730\u8fdb\u884c\u4f18\u5316\u3002\u4f8b\u5982\uff0c\u4f7f\u7528\u5feb\u901f\u6570\u5b66\u65ad\u8a00\u7740\u8272\u5668\u6c38\u8fdc\u4e0d\u4f1a\u751f\u6210 Inf \u6216 NaN\u3002\u5982\u679c\u7a0b\u5e8f\u6709\u8868\u8fbe\u5f0f X/Y\uff0c\u7f16\u8bd1\u5668\u53ef\u4ee5\u5047\u8bbe Y \u6c38\u8fdc\u4e0d\u4e3a\u96f6\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6b63/\u8d1f\u65e0\u9650\u6216 NaN\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e X \u7684\u503c\u3002\u5982\u679c Y \u53ef\u4ee5\u4e3a\u96f6\uff0c\u5219\u5f00\u53d1\u4eba\u5458\u5c06\u5f97\u5230\u4e00\u4e2a\u672a\u5b9a\u4e49\u7684\u503c\u5982\u679c\u7528\u5feb\u901f\u6570\u5b66\u7f16\u8bd1\u7a0b\u5e8f\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7f16\u8bd1\u5668\u5141\u8bb8\u6d6e\u70b9\u6536\u7f29\u3002\u4f8b\u5982\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"a * b + c")," \u53ef\u4ee5\u8f6c\u6362\u4e3a\u5355\u4e2a\u878d\u5408\u4e58\u52a0\u3002\u5982\u679c\u5176\u5b83\u8868\u8fbe\u5f0f\u6ca1\u6709\u6536\u7f29\uff0c\u8fd9\u4e9b\u6536\u7f29\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8ba1\u7b97\u5dee\u5f02\u3002\u8981\u7981\u6b62\u7f16\u8bd1\u5668\u6536\u7f29\uff0c\u8bf7\u4f20\u9012\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"-ffp-contract=off\n")),(0,l.kt)("p",null,"\u7f16\u8bd1\u5668\u8fd8\u652f\u6301\u4f7f\u7528\u7a0b\u5e8f\u6765\u7981\u7528\u6536\u7f29\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"#pragma STDC FP_CONTRACT OFF\n")),(0,l.kt)("h2",{id:"\u4e0d\u53d8\u6027\u7f16\u8bd1\u5668\u9009\u9879"},"\u4e0d\u53d8\u6027\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u652f\u6301 iOS 14 \u6216 macOS 11 \u7684 SDK \u8fdb\u884c\u6784\u5efa\uff0c\u5219\u9700\u8981\u4f20\u9012\u4ee5\u4e0b\u9009\u9879\u4ee5\u652f\u6301\u9876\u70b9\u4e0d\u53d8\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"-fpreserve-invariance\n")),(0,l.kt)("p",null,"\u5728\u9876\u70b9\u7740\u8272\u5668\u4e2d\u4fdd\u7559\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"[[invariant]]")," \u6807\u8bb0\u7684\u8ba1\u7b97\u7684\u4e0d\u53d8\u6027\u3002\u5982\u679c\u672a\u8bbe\u7f6e\uff0c\u5219\u5ffd\u7565 ",(0,l.kt)("inlineCode",{parentName:"p"},"[[invariant]]")),(0,l.kt)("p",null,"\u5728 Metal \u7684\u65e9\u671f\u7248\u672c\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"[[invariant]]")," \u662f\u4e00\u79cd\u5c3d\u529b\u800c\u4e3a\u7684\u5206\u6790\uff0c\u7528\u4e8e\u6807\u8bb0\u54ea\u4e9b\u64cd\u4f5c\u9700\u8981\u4fdd\u6301\u4e0d\u53d8\uff0c\u5e76\u4e14\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u4f1a\u5931\u8d25\u3002\u8fd9\u88ab\u4fdd\u5b88\u7684\u4e0d\u53d8\u6a21\u578b\u6240\u53d6\u4ee3\uff0c\u5176\u4e2d\u7f16\u8bd1\u5668\u6807\u8bb0\u4e0d\u8fdb\u5165\u4e0d\u53d8\u8ba1\u7b97\u7684\u64cd\u4f5c\u3002\u8fd9\u5c06\u4fdd\u8bc1\u4efb\u4f55\u4e0d\u53d8\u7684\u8ba1\u7b97\u4fdd\u6301\u4e0d\u53d8\u3002\u6b64\u9009\u9879\u53ef\u80fd\u4f1a\u964d\u4f4e\u6027\u80fd\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u4f1a\u963b\u6b62\u67d0\u4e9b\u4f18\u5316\u4ee5\u4fdd\u6301\u4e0d\u53d8\u6027\u3002"),(0,l.kt)("h2",{id:"\u4f18\u5316\u7f16\u8bd1\u5668\u9009\u9879"},"\u4f18\u5316\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u9009\u9879\u63a7\u5236\u7f16\u8bd1\u5668\u7684\u4f18\u5316\u7ea7\u522b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-O2\n# Optimize for performance (default).\n\n-Os\n# Like -O2 with extra optimizations to reduce code size.\n")),(0,l.kt)("h2",{id:"\u6700\u5927\u603b\u7ebf\u7a0b\u7ec4\u5927\u5c0f\u9009\u9879"},"\u6700\u5927\u603b\u7ebf\u7a0b\u7ec4\u5927\u5c0f\u9009\u9879"),(0,l.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 3 \u8d77\u3002"),(0,l.kt)("p",null,"\u6b64\u9009\u9879\u6307\u5b9a\u7ffb\u8bd1\u5355\u5143\u4e2d\u6bcf\u4e2a\u51fd\u6570\u7684\u7ebf\u7a0b\u7ec4\u4e2d\u7684\u7ebf\u7a0b\u6570\uff08\u503c\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"-fmax-total-threads-per-threadgroup=<value>\n")),(0,l.kt)("p",null,"\u7b2c 5.1.3 \u8282\u3001\u7b2c 5.1.7 \u8282\u548c\u7b2c 5.1.8 \u8282\u4e2d\u63cf\u8ff0\u7684\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"[[max_total_threads_per_threadgroup]]")," \u51fd\u6570\u5c5e\u6027\u4f18\u5148\u4e8e\u7f16\u8bd1\u9009\u9879\u3002"),(0,l.kt)("p",null,"\u6b64\u9009\u9879\u5bf9\u4e8e\u8bbe\u7f6e\u9009\u9879\u4ee5\u4f7f\u4e3a\u52a8\u6001\u5e93\u7f16\u8bd1\u7684\u51fd\u6570\u4e0e PSO \u517c\u5bb9\u975e\u5e38\u6709\u7528\u3002"),(0,l.kt)("h2",{id:"\u7eb9\u7406\u5199\u5165\u820d\u5165\u6a21\u5f0f"},"\u7eb9\u7406\u5199\u5165\u820d\u5165\u6a21\u5f0f"),(0,l.kt)("p",null,"\u901a\u8fc7\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"-ftexture-write-rounding-mode")," \u7f16\u8bd1\u5668\u6807\u5fd7\u8bbe\u7f6e\u4e3a\u8868 1.1 \u4e2d\u7684\u9009\u9879\u4e4b\u4e00\uff0c\u914d\u7f6e\u7eb9\u7406\u5199\u5165\u6d6e\u70b9\u50cf\u7d20\u7c7b\u578b\u7684\u820d\u5165\u6a21\u5f0f\u3002"),(0,l.kt)(s,{num:"1.1",title:"\u820d\u5165\u6a21\u5f0f",mdxType:"TableWrapper"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Rounding mode"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description1"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"native (default)"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u5199\u5165\u4f7f\u7528\u786c\u4ef6\u7684\u672c\u673a\u820d\u5165\u7b56\u7565\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"rte",(0,l.kt)("br",null),(0,l.kt)("br",null),"All OS: Since",(0,l.kt)("br",null),"Metal 2.3."),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u5076\u6570\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"rtz",(0,l.kt)("br",null),(0,l.kt)("br",null),"All OS: Since",(0,l.kt)("br",null),"Metal 2.3."),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7eb9\u7406\u671d\u96f6\u65b9\u5411\u56db\u820d\u4e94\u5165\u5199\u5165\u3002"))))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"-ftexture-write-rounding-mode")," \u6807\u5fd7\u53ef\u7528\u4e8e\u4ee5\u4e0b SDK\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"macOS 11 \u6216\u66f4\u9ad8\u7248\u672c"),(0,l.kt)("li",{parentName:"ul"},"iOS 14 \u6216\u66f4\u9ad8\u7248\u672c")),(0,l.kt)("p",null,"\u6709\u5173\u54ea\u4e9b GPU \u7cfb\u5217\u652f\u6301\u672c\u673a\u4ee5\u5916\u7684\u820d\u5165\u6a21\u5f0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Metal \u529f\u80fd\u96c6\u8868\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u6a21\u5757\u7684\u7f16\u8bd1\u5668\u9009\u9879"},"\u542f\u7528\u6a21\u5757\u7684\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u7f16\u8bd1\u5668\u652f\u6301\u591a\u4e2a\u9009\u9879\u6765\u63a7\u5236\u6a21\u5757\u7684\u4f7f\u7528\u3002\u8fd9\u4e9b\u9009\u9879\u4ec5\u9002\u7528\u4e8e\u79bb\u7ebf\u7f16\u8bd1\u5668\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-fmodules\n# \u542f\u7528\u6a21\u5757\u529f\u80fd\u3002\n\n-fimplicit-module-maps\n# \u542f\u7528\u5bf9\u540d\u4e3a module.modulemap \u6216\u7c7b\u4f3c\u540d\u79f0\u7684\u6a21\u5757\u6620\u5c04\u6587\u4ef6\u7684\u9690\u5f0f\u641c\u7d22\u3002\n# \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c-fmodules \u542f\u7528\u6b64\u9009\u9879\u3002\n#\uff08\u7f16\u8bd1\u5668\u9009\u9879 - fno-implicit-module-maps \u7981\u7528\u6b64\u9009\u9879\u3002\uff09\n\n-fno-implicit-module-maps\n# \u7981\u7528\u5bf9\u540d\u4e3a module.modulemap \u7684\u6a21\u5757\u6620\u5c04\u6587\u4ef6\u7684\u9690\u5f0f\u641c\u7d22\u3002\n# \u4ec5\u5f53\u4f7f\u7528 -fmodule-map-file \u663e\u5f0f\u6307\u5b9a\u6216\u7531\u53e6\u4e00\u4e2a\u6a21\u5757\u6620\u5c04\u6587\u4ef6\u4f20\u9012\u4f7f\u7528\u65f6\uff0c\u624d\u4f1a\u52a0\u8f7d\u6a21\u5757\u6620\u5c04\u6587\u4ef6\u3002\n\n-fmodules-cache-path=<directory>\n# \u6307\u5b9a\u6a21\u5757\u7f13\u5b58\u7684\u8def\u5f84\u3002\u5982\u679c\u672a\u63d0\u4f9b\uff0c\u7f16\u8bd1\u5668\u5c06\u9009\u62e9\u9002\u5408\u7cfb\u7edf\u7684\u9ed8\u8ba4\u503c\u3002\n\n-fmodule-map-file=<file>\n# \u5982\u679c\u52a0\u8f7d\u4e86\u6307\u5b9a\u6a21\u5757\u6620\u5c04\u6587\u4ef6\u7684\u76ee\u5f55\u6216\u5176\u5b50\u76ee\u5f55\u4e4b\u4e00\u7684\u5934\u6587\u4ef6\uff0c\u5219\u52a0\u8f7d\u6307\u5b9a\u7684\u6a21\u5757\u6620\u5c04\u6587\u4ef6\u3002\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u652f\u6301 iOS 16 \u6216 macOS 13 \u7684 SDK \u8fdb\u884c\u6784\u5efa\uff0c-fmodules \u5177\u6709\u4ee5\u4e0b\u9644\u52a0\u9009\u9879\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-fmodules=[mode]\n# \u652f\u6301\u7684\u6a21\u5f0f\u503c\u4e3a\uff1a\n# - stdlib\uff1a\u542f\u7528\u6a21\u5757\u529f\u80fd\uff0c\u4f46\u5c06\u6a21\u5757\u6620\u5c04\u7684\u641c\u7d22\u9650\u5236\u4e3a Metal \u6807\u51c6\u5e93\u3002\n#           \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f7f\u7528\u652f\u6301 iOS 16 \u6216 macOS 13 \u7684 SDK \u542f\u7528\u3002\n# - all\uff1a\u542f\u7528\u6a21\u5757\u529f\u80fd\uff08\u76f8\u5f53\u4e8e-fmodules\uff09\u3002\n# - none\uff1a\u7981\u7528\u6a21\u5757\u529f\u80fd\u3002\n")),(0,l.kt)("h2",{id:"\u63a7\u5236\u8bed\u8a00\u7248\u672c\u7684\u7f16\u8bd1\u5668\u9009\u9879"},"\u63a7\u5236\u8bed\u8a00\u7248\u672c\u7684\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u9009\u9879\u63a7\u5236\u7f16\u8bd1\u5668\u63a5\u53d7\u7684\u7edf\u4e00\u56fe\u5f62\u548c\u8ba1\u7b97\u8bed\u8a00\u7684\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-std=\n")),(0,l.kt)("p",null,"\u786e\u5b9a\u8981\u4f7f\u7528\u7684\u8bed\u8a00\u7248\u672c\u3002\u5fc5\u987b\u63d0\u4f9b\u6b64\u9009\u9879\u7684\u503c\uff0c\u8be5\u503c\u5fc5\u987b\u662f\u4ee5\u4e0b\u4e4b\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal1.0"),": Support the unified graphics and computing language revision 1.0 programs for iOS 8. [","[deprecated and will be removed in future OS]","]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal1.1"),": Support the unified graphics and computing language revision 1.1 programs for iOS 9."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal1.2"),": Support the unified graphics and computing language revision 1.2 programs for iOS 10."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal2.0"),": Support the unified graphics and computing language revision 2.0 programs for iOS 11."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal2.1"),": Support the unified graphics and computing language revision 2.1 programs for iOS 12."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal2.2"),": Support the unified graphics and computing language revision 2.2 programs for iOS 13."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal2.3"),": Support the unified graphics and computing language revision 2.3 programs for iOS 14."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ios-metal2.4"),": Support the unified graphics and computing language revision 2.4 programs for iOS 15."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal1,1")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"osx-metal1.1"),": Support the unified graphics and computing language revision 1.1 programs for macOS 10.11."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal1.2")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"osx-metal1.2"),": Support the unified graphics and computing language revision 1.2 programs for macOS 10.12."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal2.0")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"osx-metal2.0"),": Support the unified graphics and computing language revision 2.0 programs for macOS 10.13."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal2.1"),": Support the unified graphics and computing language revision 2.1 programs for macOS 10.14."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal2.2"),": Support the unified graphics and computing language revision 2.2 programs for macOS 10.15."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal2.3"),": Support the unified graphics and computing language revision 2.3 programs for macOS 11.0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"macos-metal2.4"),": Support the unified graphics and computing language revision 2.4 programs for macOS 12.0.")),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cmacos-","*"," \u5728 macOS10.13 SDK \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u53ef\u7528\u3002"),(0,l.kt)("p",null,"\u4ece macOS13.0\u3001iOS 16 \u548c tvOS 16 \u5f00\u59cb\uff0cMetal \u5df2\u7ecf\u5728\u5e73\u53f0\u4e4b\u95f4\u7edf\u4e00\u4e86\u7740\u8272\u8bed\u8a00\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Metal 3.0\uff1a\u652f\u6301 macOS 13 .0\u3001iOS 16 \u548c tvOS 16 \u7684\u7edf\u4e00\u56fe\u5f62\u548c\u8ba1\u7b97\u8bed\u8a00\u4fee\u8ba2\u7248 3.0 \u7a0b\u5e8f\u3002"),(0,l.kt)("li",{parentName:"ul"},"Metal 3.1\uff1a\u652f\u6301 macOS 14 .0 \u7684\u7edf\u4e00\u56fe\u5f62\u548c\u8ba1\u7b97\u8bed\u8a00\u4fee\u8ba2\u7248 3.1 \u7a0b\u5e8f\u3001iOS 17 \u548c tvOS 17\u3002")),(0,l.kt)("h2",{id:"\u8bf7\u6c42\u6216\u6291\u5236\u8b66\u544a\u7684\u7f16\u8bd1\u5668\u9009\u9879"},"\u8bf7\u6c42\u6216\u6291\u5236\u8b66\u544a\u7684\u7f16\u8bd1\u5668\u9009\u9879"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-Werror\n# \u5c06\u6240\u6709\u8b66\u544a\u53d8\u6210\u9519\u8bef\u3002\n\n-w\n# \u7981\u6b62\u6240\u6709\u8b66\u544a\u6d88\u606f\u3002\n")),(0,l.kt)("h2",{id:"\u76ee\u6807\u6761\u4ef6"},"\u76ee\u6807\u6761\u4ef6"),(0,l.kt)("p",null,"Metal \u5b9a\u4e49\u4e86\u51e0\u4e2a\u5b8f\uff0c\u53ef\u7528\u4e8e\u786e\u5b9a\u7740\u8272\u5668\u8fd0\u884c\u7684\u5e73\u53f0\u3002\u4ee5\u4e0b\u5b8f\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"<TargetConditionals.h>")," \u4e2d\u5b9a\u4e49\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_MAC \uff1a\u751f\u6210\u7684\u4ee3\u7801\u5c06\u5728 Mac OS X \u53d8\u4f53\u4e0b\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_OSX \uff1a\u751f\u6210\u7684\u4ee3\u7801\u5c06\u5728 OS X \u8bbe\u5907\u4e0b\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_IPHONE \uff1a\u4e3a\u56fa\u4ef6\u3001\u8bbe\u5907\u6216\u6a21\u62df\u5668\u751f\u6210\u7684\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_IOS \uff1a\u751f\u6210\u7684\u4ee3\u7801\u5c06\u5728 iOS \u4e0b\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_TV \uff1a\u751f\u6210\u7684\u4ee3\u7801\u5c06\u5728 Apple TV \u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_MACCATALYST \uff1a\u751f\u6210\u7684\u4ee3\u7801\u5c06\u5728 MacOS \u4e0b\u8fd0\u884c"),(0,l.kt)("li",{parentName:"ul"},"TARGET_OS_SIMULATOR \uff1a\u751f\u6210\u7684\u4ee3\u7801\u5c06\u5728\u6a21\u62df\u5668\u4e0b\u8fd0\u884c")),(0,l.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6b64\u5934\u6587\u4ef6\u4e0d\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"<metal_stdlib>")," \u7684\u4e00\u90e8\u5206\u3002"),(0,l.kt)("h2",{id:"\u52a8\u6001\u5e93\u94fe\u63a5\u5668\u9009\u9879"},"\u52a8\u6001\u5e93\u94fe\u63a5\u5668\u9009\u9879"),(0,l.kt)("p",null,"Metal \u7f16\u8bd1\u5668\u9a71\u52a8\u7a0b\u5e8f\u53ef\u4ee5\u5c06\u9009\u9879\u4f20\u9012\u7ed9\u94fe\u63a5\u5668\u3002\u4ee5\u4e0b\u662f\u5176\u4e2d\u4e00\u4e9b\u9009\u9879\u7684\u7b80\u8981\u8bf4\u660e\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Metal \u94fe\u63a5\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-dynamiclib\n# \u6307\u5b9a\u8f93\u51fa\u662f\u52a8\u6001\u5e93\u3002\n\n-install_name\n# \u4e0e -dynamiclib \u4e00\u8d77\u4f7f\u7528\u6765\u6307\u5b9a\u52a0\u8f7d\u7a0b\u5e8f\u671f\u671b\u5b89\u88c5\u548c\u627e\u5230\u52a8\u6001\u5e93\u7684\u4f4d\u7f6e\u3002\n# \u4e0e @executable_path \u548c @loader_path \u4e00\u8d77\u4f7f\u7528\u3002\n")),(0,l.kt)("h2",{id:"\u7f16\u8bd1\u4e3a-gpu-\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u9009\u9879"},"\u7f16\u8bd1\u4e3a GPU \u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u9009\u9879"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u652f\u6301 iOS 16 \u6216 macOS 13 \u7684 SDK \u8fdb\u884c\u6784\u5efa\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u7f16\u8bd1\u4e3a GPU \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-arch [architecture]\n# \u6307\u5b9a\u8981\u6784\u5efa\u7684\u67b6\u6784\u3002\n\n-gpu-family [gpu family name]\n# \u6307\u5b9a\u4e0e\u8981\u6784\u5efa\u7684 MTLGPUFamily \u5173\u8054\u7684\u4f53\u7cfb\u7ed3\u6784\u3002\n# \u8bf7\u53c2\u9605 Metal API \u4e2d\u7684 MTLGPUFamily \u4ee5\u83b7\u53d6\u53ef\u7528\u7cfb\u5217\u7684\u5217\u8868\u3002\n\n-N [descriptor.mtlp-json]\n# \u4ee5 Metal \u811a\u672c\u683c\u5f0f\u6307\u5b9a\u7ba1\u9053\u63cf\u8ff0\u7b26\u3002\u63cf\u8ff0\u7b26\u6587\u4ef6\u5fc5\u987b\u4ee5 .mtlp-json \u7ed3\u5c3e\u3002\n")),(0,l.kt)("h2",{id:"\u751f\u6210-metal-\u5e93\u7b26\u53f7\u6587\u4ef6\u7684\u9009\u9879"},"\u751f\u6210 Metal \u5e93\u7b26\u53f7\u6587\u4ef6\u7684\u9009\u9879"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u652f\u6301 iOS 15 \u6216 macOS 12 \u7684 SDK \u8fdb\u884c\u6784\u5efa\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\u6765\u751f\u6210 Metal \u5e93\u7b26\u53f7\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"-frecord-sources\n# \u4f7f\u7f16\u8bd1\u5668\u80fd\u591f\u5c06\u6e90\u4fe1\u606f\u5b58\u50a8\u5230 AIR \u6216 Metal \u5e93\u6587\u4ef6 (.metallib) \u4e2d\u3002\n\n-frecord-sources=flat\n# \u5982\u679c\u751f\u6210 AIR \u6587\u4ef6\uff0c\u5219\u542f\u7528\u7f16\u8bd1\u5668\u5b58\u50a8\u6e90\u4fe1\u606f\u3002\n# \u5982\u679c\u751f\u6210 Metal \u5e93\u6587\u4ef6\uff0c\u5219\u542f\u7528\u7f16\u8bd1\u5668\u5c06\u6e90\u4fe1\u606f\u5b58\u50a8\u5728\u7b26\u53f7\u4f34\u968f\u6587\u4ef6 (.metallibsym) \u4e2d\u3002\n")),(0,l.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 developer.apple.com \u4e0a\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Generating and Loading a Metal Symbol File"),"\u3002"))}f.isMDXComponent=!0}}]);