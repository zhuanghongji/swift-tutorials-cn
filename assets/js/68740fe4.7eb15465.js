"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[2931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=c(r),m=n,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9606:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const a={},i="AUParameterTree",u={unversionedId:"audio-toolbox/audio-units/au-parameter-tree/index",id:"audio-toolbox/audio-units/au-parameter-tree/index",title:"AUParameterTree",description:"<OriginalSource",source:"@site/docs/audio-toolbox/audio-units/au-parameter-tree/index.mdx",sourceDirName:"audio-toolbox/audio-units/au-parameter-tree",slug:"/audio-toolbox/audio-units/au-parameter-tree/",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-parameter-tree/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-parameter-tree/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"audiotoolboxSidebar",previous:{title:"AUParameterNode",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-parameter-node/"}},l={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},s=p("ToBePolishedAfterTranslation"),d=p("OriginalSource"),m={toc:c},f="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"auparametertree"},"AUParameterTree"),(0,n.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(d,{title:"AUParameterTree",url:"https://developer.apple.com/documentation/audiotoolbox/auparametertree",summary:"AUParameterTree \u5bf9\u8c61\u662f\u9876\u7ea7\u7ec4\u8282\u70b9\uff0c\u4ee3\u8868\u97f3\u9891\u5355\u5143\u7684\u6240\u6709\u53c2\u6570\u3002\u97f3\u9891\u5355\u5143\u7684\u53c2\u6570\u88ab\u7ec4\u7ec7\u6210\u5305\u542b\u7ec4\u548c\u53c2\u6570\u7684\u6811\uff08\u7ec4\u53ef\u4ee5\u5d4c\u5957\uff09",mdxType:"OriginalSource"}),(0,n.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"\u53c2\u6570\u6811\u7b26\u5408 KVO \u6807\u51c6\u3002\u97f3\u9891\u5355\u5143\u53ef\u4ee5\u9009\u62e9\u52a8\u6001\u5730\u91cd\u65b0\u6392\u5217\u6811\uff1b\u8fd9\u6837\u505a\u65f6\uff0c\u5b83\u5fc5\u987b\u5728\u97f3\u9891\u5355\u5143\u7684 parameterTree \u5c5e\u6027\u4e0a\u53d1\u51fa KVO \u901a\u77e5\u3002"))}b.isMDXComponent=!0}}]);