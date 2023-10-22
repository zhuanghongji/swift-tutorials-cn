"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},v=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),v=r,f=c["".concat(u,".").concat(v)]||c[v]||d[v]||a;return n?o.createElement(f,i(i({ref:t},s),{},{components:n})):o.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=v;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}v.displayName="MDXCreateElement"},61100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},i="\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u9891\u989c\u8272",l={unversionedId:"av-foundation/esseentials/evaluating-an-app-s-video-color/index",id:"av-foundation/esseentials/evaluating-an-app-s-video-color/index",title:"\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u9891\u989c\u8272",description:"<OriginalSource",source:"@site/docs/av-foundation/esseentials/evaluating-an-app-s-video-color/index.mdx",sourceDirName:"av-foundation/esseentials/evaluating-an-app-s-video-color",slug:"/av-foundation/esseentials/evaluating-an-app-s-video-color/",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/evaluating-an-app-s-video-color/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/av-foundation/esseentials/evaluating-an-app-s-video-color/index.mdx",tags:[],version:"current",lastUpdatedAt:1697986154,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"avfoundationSidebar",previous:{title:"\u4f7f\u7528\u89c6\u9891\u989c\u8272\u4fe1\u606f\u6807\u8bb0\u5a92\u4f53",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/tagging-media-with-video-color-information/"},next:{title:"\u6807\u9898\u521b\u4f5c",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/caption-authoring/"}},u={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7ba1\u7406\u8272\u5f69\u518d\u73b0",id:"\u7ba1\u7406\u8272\u5f69\u518d\u73b0",level:2},{value:"\u4f7f\u7528\u6d4b\u8bd5\u6a21\u5f0f\u6587\u4ef6\u8bc4\u4f30\u89c6\u9891",id:"\u4f7f\u7528\u6d4b\u8bd5\u6a21\u5f0f\u6587\u4ef6\u8bc4\u4f30\u89c6\u9891",level:2},{value:"\u4f7f\u7528\u77e2\u91cf\u793a\u6ce2\u5668\u6216\u6ce2\u5f62\u5206\u6790\u4eea\u8bc4\u4f30\u89c6\u9891",id:"\u4f7f\u7528\u77e2\u91cf\u793a\u6ce2\u5668\u6216\u6ce2\u5f62\u5206\u6790\u4eea\u8bc4\u4f30\u89c6\u9891",level:2},{value:"\u4f7f\u7528\u5149\u8c31\u8f90\u5c04\u8ba1\u6216\u8272\u5ea6\u8ba1\u8bc4\u4f30\u89c6\u9891",id:"\u4f7f\u7528\u5149\u8c31\u8f90\u5c04\u8ba1\u6216\u8272\u5ea6\u8ba1\u8bc4\u4f30\u89c6\u9891",level:2},{value:"\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u89c6\u9891\u7684\u8272\u5f69\u5e94\u7528\u51c6\u786e",id:"\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u89c6\u9891\u7684\u8272\u5f69\u5e94\u7528\u51c6\u786e",level:2}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},c=s("ToBePolishedAfterTranslation"),d=s("OriginalSource"),v={toc:p},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u9891\u989c\u8272"},"\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u9891\u989c\u8272"),(0,r.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,r.kt)(d,{title:"Evaluating an App\u2019s Video Color",url:"https://developer.apple.com/documentation/avfoundation/media_reading_and_writing/evaluating_an_app_s_video_color",summary:"\u4f7f\u7528\u6d4b\u8bd5\u56fe\u6848\u3001\u89c6\u9891\u6d4b\u8bd5\u8bbe\u5907\u548c\u5149\u6d4b\u91cf\u4eea\u5668\u68c0\u67e5\u5e94\u7528\u4e2d\u89c6\u9891\u7684\u8272\u5f69\u518d\u73b0",mdxType:"OriginalSource"}),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"AVFoundation \u5728\u64ad\u653e\u8fc7\u7a0b\u4e2d\u81ea\u52a8\u5bf9\u89c6\u9891\u5e94\u7528\u8272\u5f69\u7ba1\u7406\u3002 ColorSync \u521b\u5efa\u989c\u8272\u8f6c\u6362\uff0c\u63d0\u4f9b\u89c6\u9891\u7684\u989c\u8272\u7a7a\u95f4\uff08\u7531\u5a92\u4f53\u4e2d\u7684\u989c\u8272\u6807\u7b7e\u6307\u5b9a\uff09\u4e0e\u663e\u793a\u5668\u7684\u7279\u5b9a\u8272\u5ea6\u548c\u4f3d\u9a6c\u7279\u6027\u4e4b\u95f4\u7684\u989c\u8272\u5339\u914d\u3002"),(0,r.kt)("p",null,"ColorSync \u4f7f\u7528\u663e\u793a\u5668\u7684 ICC \u914d\u7f6e\u6587\u4ef6\u6765\u83b7\u53d6\u5176\u8272\u5ea6\u548c\u4f3d\u9a6c\u7279\u6027\u3002\u7136\u540e\uff0c\u5b83\u4f7f\u7528\u611f\u77e5\u6e32\u67d3\u610f\u56fe\u6765\u6267\u884c\u989c\u8272\u5339\u914d\uff0c\u4ee5\u7f29\u653e\u89c6\u9891\u989c\u8272\uff0c\u4f7f\u5b83\u4eec\u9002\u5408\u663e\u793a\u5668\u6307\u5b9a\u7684\u76ee\u6807\u8272\u57df\u3002 AVFoundation \u5728\u89c6\u9891\u64ad\u653e\u8fc7\u7a0b\u4e2d\u5c06\u8fd9\u79cd\u989c\u8272\u53d8\u6362\u5b9e\u65f6\u5e94\u7528\u4e8e\u6bcf\u5e27\u7684\u6bcf\u4e2a\u50cf\u7d20\uff0c\u786e\u4fdd\u539f\u59cb\u89c6\u9891\u7684\u989c\u8272\u4fdd\u771f\u5ea6\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u89c2\u4f17\u901a\u5e38\u5728\u5149\u7ebf\u660f\u6697\u7684\u89c2\u770b\u73af\u5883\uff08\u4f8b\u5982\u5ba2\u5385\uff09\u4e2d\u89c2\u770b\u57fa\u4e8e\u5e7f\u64ad\u6807\u51c6\u7684\u89c6\u9891\u3002\u64ad\u653e\u671f\u95f4\u5e94\u7528\u7684\u8272\u5f69\u7ba1\u7406\u4f1a\u964d\u4f4e\u5bf9\u6bd4\u5ea6\uff0c\u4ee5\u4fbf\u5728\u8f83\u660e\u4eae\u7684\u89c2\u770b\u6761\u4ef6\u4e0b\u89c2\u770b\u89c6\u9891\u65f6\u4fdd\u6301\u6b63\u786e\u7684\u8272\u8c03\u3002")),(0,r.kt)("h2",{id:"\u7ba1\u7406\u8272\u5f69\u518d\u73b0"},"\u7ba1\u7406\u8272\u5f69\u518d\u73b0"),(0,r.kt)("p",null,"\u5728\u64ad\u653e\u8fc7\u7a0b\u4e2d\uff0c\u8272\u5f69\u7ba1\u7406\u8fc7\u7a0b\u4f1a\u66f4\u6539\u89c6\u9891\u6587\u4ef6\u4e2d\u7f16\u7801\u7684\u50cf\u7d20\u503c\uff0c\u4f7f\u5b83\u4eec\u5728\u663e\u793a\u5668\u4e0a\u770b\u8d77\u6765\u4e0e\u539f\u59cb\u56fe\u50cf\u4e00\u6837\u3002\u7531\u4e8e\u8fd9\u79cd\u989c\u8272\u7ba1\u7406\uff0c\u6570\u5b57\u8272\u5ea6\u8ba1\u5e94\u7528\u7a0b\u5e8f\u62a5\u544a\u663e\u793a\u7f13\u51b2\u533a\u4e2d\u7684\u503c\u4e0e\u89c6\u9891\u6587\u4ef6\u4e2d\u7f16\u7801\u7684\u5b9e\u9645\u50cf\u7d20\u4e0d\u540c\u3002\u6b64\u5916\uff0c\u5982\u679c\u663e\u793a\u914d\u7f6e\u6587\u4ef6\u4e0d\u540c\uff0c\u6570\u5b57\u8272\u5ea6\u8ba1\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u62a5\u544a\u770b\u4f3c\u76f8\u540c\u7684\u663e\u793a\u5668\u4e4b\u95f4\u4e0d\u76f8\u7b49\u7684\u50cf\u7d20\u503c\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u591a\u79cd\u6280\u672f\u6765\u9a8c\u8bc1\u7cfb\u7edf\u662f\u5426\u6b63\u786e\u7ba1\u7406\u89c6\u9891\u4e2d\u7684\u989c\u8272\uff1a"),(0,r.kt)("p",null,"\u4f7f\u7528\u6d4b\u8bd5\u56fe\u6848\u6587\u4ef6\u6765\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u6216\u5de5\u4f5c\u6d41\u7a0b\u7684\u989c\u8272\u7279\u5f81\u3002"),(0,r.kt)("p",null,"\u5c06\u6d4b\u8bd5\u6a21\u5f0f\u6587\u4ef6\u8f93\u51fa\u5230\u77e2\u91cf\u793a\u6ce2\u5668\u6216\u6ce2\u5f62\u5206\u6790\u4eea\u4ee5\u67e5\u770b\u89c6\u9891\u4fe1\u53f7\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u6d4b\u8bd5\u56fe\u6848\u6587\u4ef6\u548c\u5206\u5149\u8f90\u5c04\u5ea6\u8ba1\u6216\u8272\u5ea6\u8ba1\u6765\u6d4b\u91cf\u5c4f\u5e55\u524d (FoS) \u4eae\u5ea6\u3002"),(0,r.kt)("p",null,"\u5728\u64ad\u653e\u8fc7\u7a0b\u4e2d\u5bf9\u89c6\u9891\u8fdb\u884c\u9002\u5f53\u7684\u8272\u5f69\u7ba1\u7406\u9700\u8981\u6807\u8bb0\u4f60\u7684\u5185\u5bb9\u3001\u4f7f\u7528\u63d0\u4f9b\u89c6\u9891\u9690\u5f0f\u8272\u5f69\u7ba1\u7406\u7684\u6846\u67b6\u5e76\u8bc4\u4f30\u4f60\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u989c\u8272\u6807\u7b7e\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u4f7f\u7528\u89c6\u9891\u989c\u8272\u4fe1\u606f\u6807\u8bb0\u5a92\u4f53\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u6d4b\u8bd5\u6a21\u5f0f\u6587\u4ef6\u8bc4\u4f30\u89c6\u9891"},"\u4f7f\u7528\u6d4b\u8bd5\u6a21\u5f0f\u6587\u4ef6\u8bc4\u4f30\u89c6\u9891"),(0,r.kt)("p",null,"\u4f7f\u7528\u6d4b\u8bd5\u56fe\u6848\u6587\u4ef6\u6765\u8bc4\u4f30\u57fa\u4e8e AVFoundation \u7684\u5e94\u7528\u7a0b\u5e8f\u6216\u5de5\u4f5c\u6d41\u7a0b\u7684\u989c\u8272\u7279\u5f81\u3002\u8fd9\u4e9b\u6587\u4ef6\u5728 Apple \u8bbe\u5907\u548c\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u663e\u793a\u65f6\u4f1a\u4ea7\u751f\u9884\u671f\u7ed3\u679c\u3002\u5728 QuickTime Player \u5e94\u7528\u7a0b\u5e8f\u4e2d\u6216\u4f7f\u7528\u6b63\u786e\u652f\u6301 QuickTime \u6587\u4ef6\u683c\u5f0f\u89c4\u8303\u7684\u5176\u5b83\u5e94\u7528\u7a0b\u5e8f\u6216\u5de5\u4f5c\u6d41\u7a0b\u6253\u5f00\u8fd9\u4e9b\u6587\u4ef6\u3002\u4f7f\u7528\u6570\u5b57\u8272\u5ea6\u8ba1\u5e94\u7528\u7a0b\u5e8f\u8bfb\u53d6\u663e\u793a\u7f13\u51b2\u533a\u50cf\u7d20\u503c\u3002\u8bf7\u53c2\u9605\u4f7f\u7528 QuickTime \u6d4b\u8bd5\u6a21\u5f0f\u6587\u4ef6\u8bc4\u4f30\u89c6\u9891\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u77e2\u91cf\u793a\u6ce2\u5668\u6216\u6ce2\u5f62\u5206\u6790\u4eea\u8bc4\u4f30\u89c6\u9891"},"\u4f7f\u7528\u77e2\u91cf\u793a\u6ce2\u5668\u6216\u6ce2\u5f62\u5206\u6790\u4eea\u8bc4\u4f30\u89c6\u9891"),(0,r.kt)("p",null,"\u5c06\u6d4b\u8bd5\u6a21\u5f0f\u8f93\u51fa\u5230\u77e2\u91cf\u793a\u6ce2\u5668\u6216\u6ce2\u5f62\u5206\u6790\u4eea\u4ee5\u5206\u6790\u89c6\u9891\u4fe1\u53f7\u3002\u5728\u77e2\u91cf\u793a\u6ce2\u5668\u4e0a\u67e5\u770b\u6d4b\u8bd5\u56fe\u6848\u5e76\u9a8c\u8bc1\u6b63\u786e\u7684\u8272\u5f69\u7a7a\u95f4\u8f6c\u6362\u77e9\u9635\u3002\u5728\u6ce2\u5f62\u76d1\u89c6\u5668\u4e0a\u9a8c\u8bc1\u4f3d\u739b\u3001\u91cf\u5316\u8bef\u5dee\u4ee5\u53ca\u8303\u56f4\u6269\u5c55\u548c\u538b\u7f29\u3002\u8bf7\u53c2\u9605\u4f7f\u7528\u89c6\u9891\u6d4b\u8bd5\u8bbe\u5907\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u9891\u989c\u8272\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5149\u8c31\u8f90\u5c04\u8ba1\u6216\u8272\u5ea6\u8ba1\u8bc4\u4f30\u89c6\u9891"},"\u4f7f\u7528\u5149\u8c31\u8f90\u5c04\u8ba1\u6216\u8272\u5ea6\u8ba1\u8bc4\u4f30\u89c6\u9891"),(0,r.kt)("p",null,"\u5c06\u6d4b\u8bd5\u56fe\u6848\u6587\u4ef6\u8f93\u51fa\u5230\u5149\u8c31\u8f90\u5c04\u8ba1\u6216\u8272\u5ea6\u8ba1\u4ee5\u6d4b\u91cf\u5c4f\u5e55\u524d (FoS) \u4eae\u5ea6\u3002\u6d4b\u91cf\u7ed3\u679c\u5e76\u5c06\u5176\u4e0e\u9884\u671f FoS \u503c\u8fdb\u884c\u6bd4\u8f83\u3002\u8bf7\u53c2\u9605\u4f7f\u7528\u5149\u6d4b\u91cf\u4eea\u5668\u8bc4\u4f30\u5e94\u7528\u7a0b\u5e8f\u7684\u89c6\u9891\u989c\u8272\u3002"),(0,r.kt)("h2",{id:"\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u89c6\u9891\u7684\u8272\u5f69\u5e94\u7528\u51c6\u786e"},"\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u89c6\u9891\u7684\u8272\u5f69\u5e94\u7528\u51c6\u786e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u5728\u64ad\u653e\u8fc7\u7a0b\u4e2d\u5bf9\u89c6\u9891\u5e94\u7528\u9002\u5f53\u7684\u8272\u5f69\u7ba1\u7406\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u4e0e ColorSync \u96c6\u6210\u7684\u9ad8\u7ea7\u6846\u67b6\uff08\u4f8b\u5982 AVFoundation\uff09\u8fdb\u884c\u9690\u5f0f\u8272\u5f69\u7ba1\u7406\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u989c\u8272\u4fe1\u606f\u6807\u8bb0\u6240\u6709\u89c6\u9891\u5185\u5bb9\uff0c\u4ee5\u907f\u514d\u4e0d\u540c\u8bbe\u5907\u4e4b\u95f4\u989c\u8272\u4e0d\u4e00\u81f4\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u7cfb\u7edf\u5c06\u672a\u6807\u8bb0\u7684\u5a92\u4f53\u89c6\u4e3a\u4f5c\u8005\u5728 SD \u8272\u5f69\u7a7a\u95f4\u4e2d\u521b\u5efa\u7684\u5a92\u4f53\u3002\u8bf7\u53c2\u9605\u4f7f\u7528\u89c6\u9891\u989c\u8272\u4fe1\u606f\u6807\u8bb0\u5a92\u4f53\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6b64\u5904\u63cf\u8ff0\u7684\u6280\u672f\u8bc4\u4f30\u6240\u6709\u7ed3\u679c\u3002")))}m.isMDXComponent=!0}}]);