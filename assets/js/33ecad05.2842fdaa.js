"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4471],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98705:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="AnyChartContent",c={unversionedId:"swift-charts/structures/any-chart-content/index",id:"swift-charts/structures/any-chart-content/index",title:"AnyChartContent",description:"<OriginalSource",source:"@site/docs/swift-charts/structures/any-chart-content/index.mdx",sourceDirName:"swift-charts/structures/any-chart-content",slug:"/swift-charts/structures/any-chart-content/",permalink:"/swift-tutorials-cn/docs/swift-charts/structures/any-chart-content/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-charts/structures/any-chart-content/index.mdx",tags:[],version:"current",lastUpdatedAt:1695274250,formattedLastUpdatedAt:"2023\u5e749\u670821\u65e5",frontMatter:{},sidebar:"swiftchartsSidebar",previous:{title:"AnnotationOverflowResolution",permalink:"/swift-tutorials-cn/docs/swift-charts/structures/annotation-overflow-resolution/"},next:{title:"AxisMarkPosition",permalink:"/swift-tutorials-cn/docs/swift-charts/structures/axis-mark-position/"}},s={},l=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(_:)",id:"init_",level:3},{value:"init(erasing:)",id:"initerasing",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},p=u("ToBePolishedAfterTranslation"),f=u("OriginalSource"),d={toc:l},m="wrapper";function y(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"anychartcontent"},"AnyChartContent"),(0,a.kt)(p,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(f,{title:"AnyChartContent",url:"https://developer.apple.com/documentation/charts/anychartcontent",summary:"\u7c7b\u578b\u64e6\u9664\u7684\u56fe\u8868\u5185\u5bb9",mdxType:"OriginalSource"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\n@frozen public struct AnyChartContent {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,a.kt)("h3",{id:"init_"},"init(","_",":)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@inlinable public init(_ content: ChartContent)\n")),(0,a.kt)("h3",{id:"initerasing"},"init(erasing:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@inlinable public init(erasing content: some ChartContent)\n")))}y.isMDXComponent=!0}}]);