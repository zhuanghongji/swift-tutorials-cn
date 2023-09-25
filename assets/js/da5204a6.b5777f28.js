"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return r?a.createElement(m,s(s({ref:t},u),{},{components:r})):a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={},s="BasicChartSymbolShape",i={unversionedId:"charts/structures/basic-chart-symbol-shape/index",id:"charts/structures/basic-chart-symbol-shape/index",title:"BasicChartSymbolShape",description:"<OriginalSource",source:"@site/docs/charts/structures/basic-chart-symbol-shape/index.mdx",sourceDirName:"charts/structures/basic-chart-symbol-shape",slug:"/charts/structures/basic-chart-symbol-shape/",permalink:"/swift-tutorials-cn/docs/charts/structures/basic-chart-symbol-shape/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/structures/basic-chart-symbol-shape/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AxisValueLabelOrientation",permalink:"/swift-tutorials-cn/docs/charts/structures/axis-value-label-orientation/"},next:{title:"ChartScrollTargetBehaviorContext",permalink:"/swift-tutorials-cn/docs/charts/structures/chart-scroll-target-behavior-context/"}},c={},l=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"strokeBorder(lineWidth:)",id:"strokeborderlinewidth",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=u("ToBePolishedAfterTranslation"),h=u("OriginalSource"),d={toc:l},m="wrapper";function b(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"basicchartsymbolshape"},"BasicChartSymbolShape"),(0,n.kt)(p,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(h,{title:"BasicChartSymbolShape",url:"https://developer.apple.com/documentation/charts/basicchartsymbolshape",summary:"\u57fa\u672c\u56fe\u8868\u7b26\u53f7\u5f62\u72b6",mdxType:"OriginalSource"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct BasicChartSymbolShape : ChartSymbolShape {\n    // ...\n}\n")),(0,n.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,n.kt)("h3",{id:"strokeborderlinewidth"},"strokeBorder(lineWidth:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u901a\u8fc7\u5bf9\u57fa\u672c\u7b26\u53f7\u5f62\u72b6\u8fdb\u884c\u5185\u90e8\u63cf\u8fb9\u6765\u521b\u5efa\u63cf\u8fb9\u7b26\u53f7\u5f62\u72b6\n//\n// - lineWidth: \u63cf\u8fb9\u7ebf\u5bbd\u5ea6\n// - Returns: \u63cf\u753b self \u5f62\u72b6\u7684\u7b26\u53f7\u5f62\u72b6\npublic func strokeBorder(lineWidth: CGFloat = 1) -> some ChartSymbolShape\n")))}b.isMDXComponent=!0}}]);