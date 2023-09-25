"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,v=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(v,l(l({ref:t},s),{},{components:r})):a.createElement(v,l({ref:t},s))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16778:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},l="ValueAlignedLimitBehavior",o={unversionedId:"charts/structures/value-aligned-limit-behavior/index",id:"charts/structures/value-aligned-limit-behavior/index",title:"ValueAlignedLimitBehavior",description:"<OriginalSource",source:"@site/docs/charts/structures/value-aligned-limit-behavior/index.mdx",sourceDirName:"charts/structures/value-aligned-limit-behavior",slug:"/charts/structures/value-aligned-limit-behavior/",permalink:"/swift-tutorials-cn/docs/charts/structures/value-aligned-limit-behavior/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/structures/value-aligned-limit-behavior/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"ValueAlignedChartScrollTargetBehavior",permalink:"/swift-tutorials-cn/docs/charts/structures/value-aligned-chart-scroll-target-behavior/"}},c={},u=[{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"always",id:"always",level:3},{value:"automatic",id:"automatic",level:3},{value:"never",id:"never",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=s("ToBePolishedAfterTranslation"),d=s("OriginalSource"),m={toc:u},v="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(v,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"valuealignedlimitbehavior"},"ValueAlignedLimitBehavior"),(0,n.kt)(p,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(d,{title:"ValueAlignedLimitBehavior",url:"https://developer.apple.com/documentation/charts/valuealignedlimitbehavior",summary:"\u5b9a\u4e49\u4e00\u6b21\u53ef\u4ee5\u6eda\u52a8\u7684\u6807\u8bb0\u6570\u91cf\u7684\u7c7b\u578b",mdxType:"OriginalSource"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *)\npublic struct ValueAlignedLimitBehavior {\n    // ...\n}\n")),(0,n.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,n.kt)("h3",{id:"always"},"always"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u603b\u662f\u9650\u5236\u884c\u4e3a\npublic static var always: ValueAlignedLimitBehavior { get }\n")),(0,n.kt)("p",null,"\u59cb\u7ec8\u9650\u5236\u53ef\u4ee5\u6eda\u52a8\u7684\u6807\u8bb0\u6570\u91cf\u3002"),(0,n.kt)("h3",{id:"automatic"},"automatic"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u9650\u5236\u884c\u4e3a\npublic static var automatic: ValueAlignedLimitBehavior { get }\n")),(0,n.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8be5\u884c\u4e3a\u5c06\u4ec5\u9650\u4e8e\u6cbf\u53ef\u6eda\u52a8\u8f74\u7d27\u51d1\u7684\u6eda\u52a8\u89c6\u56fe\u3002"),(0,n.kt)("h3",{id:"never"},"never"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u6c38\u4e0d\u9650\u5236\u884c\u4e3a\npublic static var never: ValueAlignedLimitBehavior { get }\n")),(0,n.kt)("p",null,"\u5207\u52ff\u9650\u5236\u53ef\u6eda\u52a8\u7684\u6807\u8bb0\u6570\u91cf\u3002"))}f.isMDXComponent=!0}}]);