"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),f=n,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return a?r.createElement(g,o(o({ref:t},l),{},{components:a})):r.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},14402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={},o="ray_data \u5730\u5740\u7a7a\u95f4",c={unversionedId:"metal-shading-language-specification/ray-data-address-space/index",id:"metal-shading-language-specification/ray-data-address-space/index",title:"ray_data \u5730\u5740\u7a7a\u95f4",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301 ray_data \u5730\u5740\u3002",source:"@site/docs/metal-shading-language-specification/ray-data-address-space/index.mdx",sourceDirName:"metal-shading-language-specification/ray-data-address-space",slug:"/metal-shading-language-specification/ray-data-address-space/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/ray-data-address-space/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/ray-data-address-space/index.mdx",tags:[],version:"current",lastUpdatedAt:1693285264,formattedLastUpdatedAt:"2023\u5e748\u670829\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"threadgroup_imageblock \u5730\u5740\u7a7a\u95f4",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/threadgroup-imageblock-address-space/"},next:{title:"object_data \u5730\u5740\u7a7a\u95f4",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/object-data-address-space/"}},s={},d=[],l=(p="OrigninalPDF",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var p;const u={toc:d},f="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ray_data-\u5730\u5740\u7a7a\u95f4"},"ray_data \u5730\u5740\u7a7a\u95f4"),(0,n.kt)(l,{title:"4.6 ray_data Address Space",mdxType:"OrigninalPDF"}),(0,n.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301 ray_data \u5730\u5740\u3002"),(0,n.kt)("p",null,"ray_data \u5730\u5740\u7a7a\u95f4\u662f\u6307\u5728\u5185\u5b58\u4e2d\u5206\u914d\u7684\u5bf9\u8c61\uff0c\u53ea\u80fd\u5728\u5149\u7ebf\u8ddf\u8e2a\u7684\u4ea4\u96c6\u51fd\u6570\uff08\u8bf7\u53c2\u9605\u7b2c 5.1.6 \u8282\uff09\u4e2d\u8bbf\u95ee\u3002\u4ea4\u96c6\u51fd\u6570\u53ef\u4ee5\u4f7f\u7528 ray_data \u5730\u5740\u7a7a\u95f4\u4e2d\u7684 [","[payload]","] \u5c5e\u6027\uff08\u53c2\u89c1\u8868 5. 10 \uff09\u8bfb\u53d6\u548c\u5199\u5165\u81ea\u5b9a\u4e49\u6709\u6548\u8d1f\u8f7d\u3002\u5f53\u7740\u8272\u5668\u4f7f\u7528\u6709\u6548\u8d1f\u8f7d\u8c03\u7528 intersect()\uff08\u8bf7\u53c2\u9605\u7b2c 6.18.2 \u8282\uff09\u65f6\uff0c"),(0,n.kt)("p",null,"\u7cfb\u7edf\u5c06\u6709\u6548\u8d1f\u8f7d\u590d\u5236\u5230 ray_data \u5730\u5740\u7a7a\u95f4\uff0c\u8c03\u7528\u4ea4\u96c6\u51fd\u6570\uff0c\u5f53\u4ea4\u96c6\u51fd\u6570\u8fd4\u56de\u65f6\uff0c\u5b83\u5c06\u6709\u6548\u8d1f\u8f7d\u590d\u5236\u56de\u6765\u3002"))}g.isMDXComponent=!0}}]);