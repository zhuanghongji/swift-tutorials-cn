"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="\u6570\u636e\u7c7b\u578b\u7684\u5bf9\u9f50",l={unversionedId:"metal-shading-language-specification/alignment-of-data-types/index",id:"metal-shading-language-specification/alignment-of-data-types/index",title:"\u6570\u636e\u7c7b\u578b\u7684\u5bf9\u9f50",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528 alignas \u5bf9\u9f50\u8bf4\u660e\u7b26\u6765\u6307\u5b9a\u7c7b\u578b\u6216\u5bf9\u8c61\u7684\u5bf9\u9f50\u8981\u6c42\u3002\u4f60\u8fd8\u53ef\u4ee5\u5c06 alignas \u8bf4\u660e\u7b26\u5e94\u7528\u4e8e\u53d8\u91cf\u6216\u7ed3\u6784\u6216\u7c7b\u7684\u6570\u636e\u6210\u5458\u7684\u58f0\u660e\u3002\u4f60\u8fd8\u53ef\u4ee5\u5c06\u5176\u5e94\u7528\u4e8e\u7ed3\u6784\u3001\u7c7b\u6216\u679a\u4e3e\u7c7b\u578b\u7684\u58f0\u660e\u3002",source:"@site/docs/metal-shading-language-specification/alignment-of-data-types/index.mdx",sourceDirName:"metal-shading-language-specification/alignment-of-data-types",slug:"/metal-shading-language-specification/alignment-of-data-types/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/alignment-of-data-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/alignment-of-data-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"SIMD \u7ec4\u77e9\u9635\u6570\u636e\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/simd-group-matrix-data-types/"},next:{title:"\u539f\u5b50\u6570\u636e\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/atomic-data-types/"}},s={},c=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("ToBePolishedAfterTranslation"),u=p("OriginalPDF"),f={toc:c},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b\u7684\u5bf9\u9f50"},"\u6570\u636e\u7c7b\u578b\u7684\u5bf9\u9f50"),(0,r.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,r.kt)(u,{title:"2.5 Alignment of Data Types",mdxType:"OriginalPDF"}),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"alignas")," \u5bf9\u9f50\u8bf4\u660e\u7b26\u6765\u6307\u5b9a\u7c7b\u578b\u6216\u5bf9\u8c61\u7684\u5bf9\u9f50\u8981\u6c42\u3002\u4f60\u8fd8\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"alignas")," \u8bf4\u660e\u7b26\u5e94\u7528\u4e8e\u53d8\u91cf\u6216\u7ed3\u6784\u6216\u7c7b\u7684\u6570\u636e\u6210\u5458\u7684\u58f0\u660e\u3002\u4f60\u8fd8\u53ef\u4ee5\u5c06\u5176\u5e94\u7528\u4e8e\u7ed3\u6784\u3001\u7c7b\u6216\u679a\u4e3e\u7c7b\u578b\u7684\u58f0\u660e\u3002"),(0,r.kt)("p",null,"Metal \u7f16\u8bd1\u5668\u8d1f\u8d23\u6839\u636e\u6570\u636e\u7c7b\u578b\u7684\u8981\u6c42\u5c06\u6570\u636e\u9879\u5bf9\u9f50\u5230\u9002\u5f53\u7684\u5bf9\u9f50\u65b9\u5f0f\u3002\u5bf9\u4e8e\u58f0\u660e\u4e3a\u6570\u636e\u7c7b\u578b\u6307\u9488\u7684\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u7684\u53c2\u6570\uff0cMetal \u7f16\u8bd1\u5668\u5047\u5b9a\u6307\u9488\u5f15\u7528\u7684\u5bf9\u8c61\u59cb\u7ec8\u6839\u636e\u6570\u636e\u7c7b\u578b\u7684\u8981\u6c42\u8fdb\u884c\u9002\u5f53\u5bf9\u9f50\u3002"))}m.isMDXComponent=!0}}]);