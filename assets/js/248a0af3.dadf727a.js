"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[2458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",l={unversionedId:"metal-shading-language-specification/implicit-type-conversions/index",id:"metal-shading-language-specification/implicit-type-conversions/index",title:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362",description:"\u652f\u6301\u6807\u91cf\u5185\u7f6e\u7c7b\u578b\uff08void \u9664\u5916\uff09\u4e4b\u95f4\u7684\u9690\u5f0f\u8f6c\u6362\u3002\u5b8c\u6210\u9690\u5f0f\u8f6c\u6362\u540e\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u662f\u91cd\u65b0\u89e3\u91ca\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u800c\u662f\u5c06\u8be5\u503c\u8f6c\u6362\u4e3a\u65b0\u7c7b\u578b\u4e2d\u7684\u7b49\u6548\u503c\u3002\u4f8b\u5982\uff0c\u6574\u6570\u503c 5 \u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c 5.0\u3002Bfloat \u662f\u4e00\u79cd\u6269\u5c55\u6d6e\u70b9\u7c7b\u578b\uff0c\u4ec5\u5141\u8bb8\u9690\u5f0f\u8f6c\u6362\u4e3a\u66f4\u9ad8\u6d6e\u70b9\u7b49\u7ea7\u7684\u7c7b\u578b\u3002\u867d\u7136 bfloat \u53ef\u4ee5\u9690\u5f0f\u8f6c\u6362\u4e3a float\uff0c\u4f46\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a half\uff0c\u5e76\u4e14 float \u548c half \u90fd\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a bfloat\u3002",source:"@site/docs/metal-shading-language-specification/implicit-type-conversions/index.mdx",sourceDirName:"metal-shading-language-specification/implicit-type-conversions",slug:"/metal-shading-language-specification/implicit-type-conversions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/implicit-type-conversions/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/implicit-type-conversions/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/type-conversions-and-re-interpreting-data/"},next:{title:"\u6807\u91cf\u548c\u5411\u91cf\u8fd0\u7b97\u7b26",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/scalar-and-vector-operators/"}},c={},s=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},f=p("ToBePolishedAfterTranslation"),u=p("OriginalPDF"),d={toc:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362"},"\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362"),(0,a.kt)(f,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(u,{title:"2.21 Implicit Type Conversions",mdxType:"OriginalPDF"}),(0,a.kt)("p",null,"\u652f\u6301\u6807\u91cf\u5185\u7f6e\u7c7b\u578b\uff08void \u9664\u5916\uff09\u4e4b\u95f4\u7684\u9690\u5f0f\u8f6c\u6362\u3002\u5b8c\u6210\u9690\u5f0f\u8f6c\u6362\u540e\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u662f\u91cd\u65b0\u89e3\u91ca\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u800c\u662f\u5c06\u8be5\u503c\u8f6c\u6362\u4e3a\u65b0\u7c7b\u578b\u4e2d\u7684\u7b49\u6548\u503c\u3002\u4f8b\u5982\uff0c\u6574\u6570\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," \u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"5.0"),"\u3002Bfloat \u662f\u4e00\u79cd\u6269\u5c55\u6d6e\u70b9\u7c7b\u578b\uff0c\u4ec5\u5141\u8bb8\u9690\u5f0f\u8f6c\u6362\u4e3a\u66f4\u9ad8\u6d6e\u70b9\u7b49\u7ea7\u7684\u7c7b\u578b\u3002\u867d\u7136 bfloat \u53ef\u4ee5\u9690\u5f0f\u8f6c\u6362\u4e3a float\uff0c\u4f46\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a half\uff0c\u5e76\u4e14 float \u548c half \u90fd\u4e0d\u80fd\u9690\u5f0f\u8f6c\u6362\u4e3a bfloat\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u5411\u91cf\u7c7b\u578b\u90fd\u88ab\u8ba4\u4e3a\u5177\u6709\u6bd4\u6807\u91cf\u7c7b\u578b\u66f4\u9ad8\u7684\u8f6c\u6362\u7b49\u7ea7\u3002\u4e0d\u5141\u8bb8\u4ece\u5411\u91cf\u7c7b\u578b\u5230\u53e6\u4e00\u4e2a\u5411\u91cf\u6216\u6807\u91cf\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u5c1d\u8bd5\u4ece 4 \u5206\u91cf\u6574\u6570\u5411\u91cf\u8f6c\u6362\u4e3a 4 \u5206\u91cf\u6d6e\u70b9\u5411\u91cf\u5931\u8d25\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int4 i;\nfloat4 f = i; // compile error.\n")),(0,a.kt)("p",null,"\u652f\u6301\u4ece\u6807\u91cf\u5230\u5411\u91cf\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\u3002\u6807\u91cf\u503c\u5728\u5411\u91cf\u7684\u6bcf\u4e2a\u5143\u7d20\u4e2d\u590d\u5236\u3002\u6807\u91cf\u8fd8\u53ef\u4ee5\u7ecf\u8fc7\u901a\u5e38\u7684\u7b97\u672f\u8f6c\u6362\u4e3a\u5411\u91cf\u4f7f\u7528\u7684\u5143\u7d20\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"float4 f = 2.0f; // f = (2.0f, 2.0f, 2.0f, 2.0f)\n")),(0,a.kt)("p",null,"\u4e0d\u652f\u6301\u4ece\u6807\u91cf\u5230\u77e9\u9635\u7c7b\u578b\u548c\u5411\u91cf\u5230\u77e9\u9635\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002\u4e0d\u5141\u8bb8\u4ece\u77e9\u9635\u7c7b\u578b\u5230\u53e6\u4e00\u4e2a\u77e9\u9635\u3001\u5411\u91cf\u6216\u6807\u91cf\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\uff0c\u5e76\u4e14\u4f1a\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u6307\u9488\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\u9075\u5faa C++14 \u89c4\u8303\u4e2d\u63cf\u8ff0\u7684\u89c4\u5219\u3002"))}g.isMDXComponent=!0}}]);