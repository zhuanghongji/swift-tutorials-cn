"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[46],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,g=u["".concat(c,".").concat(d)]||u[d]||f[d]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="\u672c\u89c4\u8303\u7684\u7ec4\u7ec7",l={unversionedId:"metal-shading-language-specification/organization-of-this-specification/index",id:"metal-shading-language-specification/organization-of-this-specification/index",title:"\u672c\u89c4\u8303\u7684\u7ec4\u7ec7",description:"\u672c\u6587\u6863\u5206\u4e3a\u4ee5\u4e0b\u7ae0\u8282\uff1a",source:"@site/docs/metal-shading-language-specification/organization-of-this-specification/index.mdx",sourceDirName:"metal-shading-language-specification/organization-of-this-specification",slug:"/metal-shading-language-specification/organization-of-this-specification/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/organization-of-this-specification/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/organization-of-this-specification/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u672c\u6587\u6863\u7684\u76ee\u7684",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/purpose-of-this-document/"},next:{title:"\u53c2\u8003\u6587\u732e",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/references/"}},c={},s=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=p("ToBePolishedAfterTranslation"),f=p("OriginalPDF"),d={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u672c\u89c4\u8303\u7684\u7ec4\u7ec7"},"\u672c\u89c4\u8303\u7684\u7ec4\u7ec7"),(0,i.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(f,{title:"1.2 Organization of This Specification",mdxType:"OriginalPDF"}),(0,i.kt)("p",null,"\u672c\u6587\u6863\u5206\u4e3a\u4ee5\u4e0b\u7ae0\u8282\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'\u672c\u7ae0 "\u7b80\u4ecb" \u662f\u5bf9\u672c\u6587\u6863\u7684\u4ecb\u7ecd\uff0c\u6db5\u76d6 Metal \u548c C++14 \u4e4b\u95f4\u7684\u5f02\u540c\u3002\u5b83\u8fd8\u8be6\u7ec6\u4ecb\u7ecd\u4e86 Metal \u7f16\u8bd1\u5668\u7684\u9009\u9879\uff0c\u5305\u62ec\u9884\u5904\u7406\u5668\u6307\u4ee4\u3001\u6570\u5b66\u5185\u5728\u51fd\u6570\u9009\u9879\u4ee5\u53ca\u63a7\u5236\u4f18\u5316\u9009\u9879\u3002'),(0,i.kt)("li",{parentName:"ul"},'"\u6570\u636e\u7c7b\u578b" \u5217\u51fa\u4e86 Metal \u6570\u636e\u7c7b\u578b\uff0c\u5305\u62ec\u8868\u793a\u5411\u91cf\u3001\u77e9\u9635\u3001\u7f13\u51b2\u533a\u3001\u7eb9\u7406\u548c\u91c7\u6837\u5668\u7684\u7c7b\u578b\u3002\u5b83\u8fd8\u8ba8\u8bba\u4e86\u7c7b\u578b\u5bf9\u9f50\u548c\u7c7b\u578b\u8f6c\u6362\u3002'),(0,i.kt)("li",{parentName:"ul"},'"\u64cd\u4f5c\u5458" \u5217\u51fa\u4e86 Metal \u64cd\u4f5c\u5458\u3002'),(0,i.kt)("li",{parentName:"ul"},'"\u5730\u5740\u7a7a\u95f4" \u63cf\u8ff0\u4e86\u7528\u4e8e\u5206\u914d\u5177\u6709\u8bbf\u95ee\u9650\u5236\u7684\u5185\u5b58\u5bf9\u8c61\u7684\u4e0d\u76f8\u4ea4\u5730\u5740\u7a7a\u95f4\u3002'),(0,i.kt)("li",{parentName:"ul"},'"\u51fd\u6570\u548c\u53d8\u91cf\u58f0\u660e" \u8be6\u7ec6\u4ecb\u7ecd\u4e86\u5982\u4f55\u58f0\u660e\u51fd\u6570\u548c\u53d8\u91cf\uff0c\u4ee5\u53ca\u6307\u5b9a\u9650\u5236\u7684\u53ef\u9009\u5c5e\u6027\u3002'),(0,i.kt)("li",{parentName:"ul"},'"Metal \u6807\u51c6\u5e93" \u5b9a\u4e49\u4e86\u5185\u7f6e Metal \u51fd\u6570\u7684\u96c6\u5408\u3002'),(0,i.kt)("li",{parentName:"ul"},'"\u6570\u503c\u5408\u89c4\u6027" \u63cf\u8ff0\u4e86\u8868\u793a\u6d6e\u70b9\u6570\u7684\u8981\u6c42\uff0c\u5305\u62ec\u6570\u5b66\u8fd0\u7b97\u7684\u51c6\u786e\u6027\u3002')),(0,i.kt)("p",null,"\u9664\u975e\u53e6\u6709\u8bf4\u660e\uff0c\u81ea Metal 1 \u8d77\uff0ciOS \u548c macOS \u652f\u6301\u672c\u6587\u6863\u4e2d\u63cf\u8ff0\u7684\u529f\u80fd\uff08\u51fd\u6570\u3001\u679a\u4e3e\u3001\u7c7b\u578b\u3001\u5c5e\u6027\u6216\u8fd0\u7b97\u7b26\uff09\u3002"),(0,i.kt)("p",null,'\u5728\u672c\u6587\u6863\u7684\u5176\u4f59\u90e8\u5206\u4e2d\uff0c\u7f29\u5199 X.Y \u4ee3\u8868 "Metal \u7248\u672c X.Y"\u3002\u4f8b\u5982\uff0c2.1 \u8868\u793a Metal 2.1\u3002\u8bf7\u6ce8\u610f\uff0c\u867d\u7136 MSL \u7740\u8272\u8bed\u8a00\u652f\u6301\u67d0\u9879\u529f\u80fd\uff0c\u4f46\u5e76\u975e\u6240\u6709 GPU \u90fd\u652f\u6301\u8be5\u529f\u80fd\u3002\u8bf7\u53c2\u9605 ',(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/"},"developer.apple.com")," \u4e0a\u7684 Metal \u529f\u80fd\u96c6\u8868\u3002"))}m.isMDXComponent=!0}}]);