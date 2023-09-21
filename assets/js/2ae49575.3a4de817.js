"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={},o="PositionScaleRange",s={unversionedId:"swift-charts/scales/position-scale-range/index",id:"swift-charts/scales/position-scale-range/index",title:"PositionScaleRange",description:"<OriginalSource",source:"@site/docs/swift-charts/scales/position-scale-range/index.mdx",sourceDirName:"swift-charts/scales/position-scale-range",slug:"/swift-charts/scales/position-scale-range/",permalink:"/swift-tutorials-cn/docs/swift-charts/scales/position-scale-range/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-charts/scales/position-scale-range/index.mdx",tags:[],version:"current",lastUpdatedAt:1695274250,formattedLastUpdatedAt:"2023\u5e749\u670821\u65e5",frontMatter:{},sidebar:"swiftchartsSidebar",previous:{title:"ScaleRange",permalink:"/swift-tutorials-cn/docs/swift-charts/scales/scale-range/"},next:{title:"PlotDimensionScaleRange",permalink:"/swift-tutorials-cn/docs/swift-charts/scales/plot-dimension-scale-range/"}},l={},c=[{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"plotDimension",id:"plotdimension",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"plotDimension(padding:)",id:"plotdimensionpadding",level:3},{value:"plotDimension(startPadding:endPadding:)",id:"plotdimensionstartpaddingendpadding",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=p("ToBePolishedAfterTranslation"),u=p("OriginalSource"),g={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"positionscalerange"},"PositionScaleRange"),(0,i.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(u,{title:"PositionScaleRange",url:"https://developer.apple.com/documentation/charts/positionscalerange",summary:"\u914d\u7f6e x \u8f74\u548c y \u8f74\u503c\u7684\u7c7b\u578b",mdxType:"OriginalSource"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic protocol PositionScaleRange : ScaleRange where Self.VisualValue == CGFloat {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,i.kt)("h3",{id:"plotdimension"},"plotDimension"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u586b\u5145\u7ed8\u56fe\u533a\u57df\u7684\u6bd4\u4f8b\u8303\u56f4\npublic static var plotDimension: PlotDimensionScaleRange { get }\n")),(0,i.kt)("h2",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"plotdimensionpadding"},"plotDimension(padding:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5728\u5f00\u59cb\u548c\u7ed3\u675f\u65f6\u4f7f\u7528\u7ed9\u5b9a\u586b\u5145\u503c\u586b\u5145\u7ed8\u56fe\u533a\u57df\u7684\u6bd4\u4f8b\u8303\u56f4\n//\n// - padding: \u5c4f\u5e55\u5750\u6807\u4e2d\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u586b\u5145\u503c\npublic static func plotDimension(padding: CGFloat) -> PlotDimensionScaleRange\n")),(0,i.kt)("h3",{id:"plotdimensionstartpaddingendpadding"},"plotDimension(startPadding:endPadding:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5206\u522b\u5728\u5f00\u59cb\u548c\u7ed3\u675f\u5904\u4f7f\u7528\u7ed9\u5b9a\u586b\u5145\u503c\u586b\u5145\u7ed8\u56fe\u533a\u57df\u7684\u6bd4\u4f8b\u8303\u56f4\n//\n// - startPadding: \u5c4f\u5e55\u5750\u6807\u4e2d\u7684\u8d77\u59cb\u586b\u5145\u503c\n// - endPadding: \u5c4f\u5e55\u5750\u6807\u4e2d\u7684\u7ed3\u675f\u586b\u5145\u503c\npublic static func plotDimension(startPadding: CGFloat = 0, endPadding: CGFloat = 0) -> PlotDimensionScaleRange\n")))}f.isMDXComponent=!0}}]);