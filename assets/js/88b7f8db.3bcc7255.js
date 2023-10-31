"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||a;return n?r.createElement(m,o(o({ref:t},f),{},{components:n})):r.createElement(m,o({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="\u4e3a HTTP \u76f4\u64ad\u5199\u5165\u7247\u6bb5 MPEG-4 \u6587\u4ef6",l={unversionedId:"av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming/index",id:"av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming/index",title:"\u4e3a HTTP \u76f4\u64ad\u5199\u5165\u7247\u6bb5 MPEG-4 \u6587\u4ef6",description:"<OriginalSource",source:"@site/docs/av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming/index.mdx",sourceDirName:"av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming",slug:"/av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming/",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/av-foundation/esseentials/writing-fragmented-mpeg-4-files-for-http-live-streaming/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"avfoundationSidebar",previous:{title:"\u4ece\u89c6\u9891\u8d44\u6e90\u521b\u5efa\u56fe\u50cf",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/creating-images-from-a-video-asset/"},next:{title:"\u4f7f\u7528\u89c6\u9891\u989c\u8272\u4fe1\u606f\u6807\u8bb0\u5a92\u4f53",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/tagging-media-with-video-color-information/"}},s={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u914d\u7f6e\u793a\u4f8b\u4ee3\u7801\u9879\u76ee",id:"\u914d\u7f6e\u793a\u4f8b\u4ee3\u7801\u9879\u76ee",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=f("ToBePolishedAfterTranslation"),d=f("OriginalSource"),u={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e3a-http-\u76f4\u64ad\u5199\u5165\u7247\u6bb5-mpeg-4-\u6587\u4ef6"},"\u4e3a HTTP \u76f4\u64ad\u5199\u5165\u7247\u6bb5 MPEG-4 \u6587\u4ef6"),(0,i.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(d,{title:"Writing Fragmented MPEG-4 Files for HTTP Live Streaming",url:"https://developer.apple.com/documentation/avfoundation/media_reading_and_writing/writing_fragmented_mpeg-4_files_for_http_live_streaming",summary:"\u901a\u8fc7\u5c06\u7535\u5f71\u6587\u4ef6\u8f6c\u6362\u4e3a\u4e00\u7cfb\u5217\u5206\u6bb5\u7684 MPEG-4 \u6587\u4ef6\u6765\u521b\u5efa HTTP \u5b9e\u65f6\u6d41\u5f0f\u4f20\u8f93\u6f14\u793a",mdxType:"OriginalSource"}),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u8be5\u793a\u4f8b\u4ee3\u7801\u9879\u76ee\u4e0e WWDC20 \u4f1a\u8bae 10011 \u76f8\u5173\uff1a\u4f7f\u7528 AVAssetWriter \u521b\u4f5c\u7247\u6bb5 MPEG-4\u3002")),(0,i.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b\u4ee3\u7801\u9879\u76ee"},"\u914d\u7f6e\u793a\u4f8b\u4ee3\u7801\u9879\u76ee"),(0,i.kt)("p",null,"\u5728 Xcode \u4e2d\u8fd0\u884c\u793a\u4f8b\u4ee3\u7801\u9879\u76ee\u4e4b\u524d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u540d\u4e3a fmp4Writer \u7684\u5171\u4eab\u65b9\u6848\u3002"),(0,i.kt)("li",{parentName:"ul"},'\u6253\u5f00"\u8fd0\u884c"\u64cd\u4f5c\u3002'),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"<\u78c1\u76d8\u4e0a\u7535\u5f71\u6587\u4ef6\u7684\u8def\u5f84>")," \u53c2\u6570\u66ff\u6362\u4e3a\u672c\u5730\u786c\u76d8\u9a71\u52a8\u5668\u4e0a\u7535\u5f71\u6587\u4ef6\u7684\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"<\u8f93\u51fa\u76ee\u5f55\u7684\u8def\u5f84>")," \u53c2\u6570\u66ff\u6362\u4e3a\u6240\u9700\u7684\u8f93\u51fa\u76ee\u5f55\uff1b\u4f8b\u5982 ~/Desktop/fmp4writer/ \u3002")))}g.isMDXComponent=!0}}]);