"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="AxisContent",s={unversionedId:"charts/axes/axis-content/index",id:"charts/axes/axis-content/index",title:"AxisContent",description:"<OriginalSource",source:"@site/docs/charts/axes/axis-content/index.mdx",sourceDirName:"charts/axes/axis-content",slug:"/charts/axes/axis-content/",permalink:"/swift-tutorials-cn/docs/charts/axes/axis-content/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/axes/axis-content/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"\u81ea\u5b9a\u4e49 Swift \u56fe\u8868\u4e2d\u7684\u8f74",permalink:"/swift-tutorials-cn/docs/charts/axes/customizing-axes-in-swift-charts/"},next:{title:"AxisMarks",permalink:"/swift-tutorials-cn/docs/charts/axes/axis-marks/"}},c={},l=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"compositingLayer()",id:"compositinglayer",level:3},{value:"compositingLayer(style:)",id:"compositinglayerstyle",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=p("ToBePolishedAfterTranslation"),d=p("OriginalSource"),m={toc:l},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"axiscontent"},"AxisContent"),(0,o.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,o.kt)(d,{title:"AxisContent",url:"https://developer.apple.com/documentation/charts/axiscontent",summary:"\u8868\u793a\u7528\u4e8e\u6784\u5efa\u56fe\u8868\u8f74\u7684\u5143\u7d20\u7684\u7c7b\u578b",mdxType:"OriginalSource"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic protocol AxisContent {\n    // ...\n}\n")),(0,o.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,o.kt)("h3",{id:"compositinglayer"},"compositingLayer()"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e3a\u56fe\u8868\u5185\u5bb9\u521b\u5efa\u5408\u6210\u5c42\npublic func compositingLayer() -> some AxisContent\n")),(0,o.kt)("h3",{id:"compositinglayerstyle"},"compositingLayer(style:)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e3a\u56fe\u8868\u5185\u5bb9\u521b\u5efa\u5408\u6210\u56fe\u5c42\uff0c\u5e76\u5c06\u89c6\u56fe\u4fee\u6539\u5668\u5e94\u7528\u5230\u5408\u6210\u56fe\u5c42\n//\n// - style: \u5c06\u89c6\u56fe\u4fee\u9970\u5668\u5e94\u7528\u4e8e\u5408\u6210\u5c42\u7684\u95ed\u5305\npublic func compositingLayer<V>(@ViewBuilder style: (PlaceholderContentView<Self>) -> V)\n        -> some AxisContent where V : View\n")))}y.isMDXComponent=!0}}]);