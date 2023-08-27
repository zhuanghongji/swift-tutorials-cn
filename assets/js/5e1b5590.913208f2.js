"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9292],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54934:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="SIMD \u7ec4\u77e9\u9635\u6570\u636e\u7c7b\u578b",l={unversionedId:"metal-shading-language-specification/simd-group-matrix-data-types/index",id:"metal-shading-language-specification/simd-group-matrix-data-types/index",title:"SIMD \u7ec4\u77e9\u9635\u6570\u636e\u7c7b\u578b",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2. 3 \u8d77\u652f\u6301 SIMD \u7ec4\u77e9\u9635\u7c7b\u578b\u3002",source:"@site/docs/metal-shading-language-specification/simd-group-matrix-data-types/index.mdx",sourceDirName:"metal-shading-language-specification/simd-group-matrix-data-types",slug:"/metal-shading-language-specification/simd-group-matrix-data-types/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/simd-group-matrix-data-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/simd-group-matrix-data-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1693122607,formattedLastUpdatedAt:"2023\u5e748\u670827\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u77e9\u9635\u6570\u636e\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/matrix-data-types/"},next:{title:"\u6570\u636e\u7c7b\u578b\u7684\u5bf9\u9f50",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/alignment-of-data-types/"}},s={},c=[],p=(u="OrigninalPDF",function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)});var u;const d={toc:c},m="wrapper";function f(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simd-\u7ec4\u77e9\u9635\u6570\u636e\u7c7b\u578b"},"SIMD \u7ec4\u77e9\u9635\u6570\u636e\u7c7b\u578b"),(0,a.kt)(p,{title:"2.4 SIMD-group Matrix Data Types",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2. 3 \u8d77\u652f\u6301 SIMD \u7ec4\u77e9\u9635\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"Metal \u652f\u6301 \u4e2d\u5b9a\u4e49\u7684\u77e9\u9635\u7c7b\u578b simdgroup_matrix\u3002SIMD \u7ec4\u77e9\u9635\u4e0a\u7684\u64cd\u4f5c\u7531 SIMD \u7ec4\u4e2d\u7684\u7ebf\u7a0b\u534f\u4f5c\u6267\u884c\u3002\u56e0\u6b64\uff0c\u6240\u6709\u64cd\u4f5c\u5fc5\u987b\u4ec5\u5728 SIMD \u7ec4\u5185\u7684\u7edf\u4e00\u63a7\u5236\u6d41\u4e0b\u6267\u884c\uff0c\u5426\u5219\u884c\u4e3a\u662f\u672a\u5b9a\u4e49\u7684\u3002"),(0,a.kt)("p",null,"Metal \u652f\u6301\u4ee5\u4e0b SIMD \u7ec4\u77e9\u9635\u7c7b\u578b\u540d\u79f0\uff0c\u5176\u4e2d T \u4e3a half\u3001bfloat\uff08\u81ea Metal 3.1 \u8d77\uff09\u6216 float\uff0c\u5e76\u4e14 Cols \u548c Rows \u4e3a 8 \uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"simdgroup_half8x8 - simdgroup_bfloat8x8\uff08\u81ea Metal 3 .1 \u8d77\u652f\u6301\uff09 - simdgroup_float8x8")),(0,a.kt)("p",null,"\u77e9\u9635\u5143\u7d20\u5230 SIMD \u7ec4\u4e2d\u7ebf\u7a0b\u7684\u6620\u5c04\u672a\u6307\u5b9a\u3002\u6709\u5173 SIMD \u7ec4\u77e9\u9635\u652f\u6301\u54ea\u4e9b\u51fd\u6570\u7684\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u7b2c 6.7 \u8282"))}f.isMDXComponent=!0}}]);