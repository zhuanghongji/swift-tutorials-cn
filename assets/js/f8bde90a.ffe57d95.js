"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[6007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},67859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o="PositionScaleRange",l={unversionedId:"charts/scales/position-scale-range/index",id:"charts/scales/position-scale-range/index",title:"PositionScaleRange",description:"<OriginalSource",source:"@site/docs/charts/scales/position-scale-range/index.mdx",sourceDirName:"charts/scales/position-scale-range",slug:"/charts/scales/position-scale-range/",permalink:"/swift-tutorials-cn/docs/charts/scales/position-scale-range/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/scales/position-scale-range/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"ScaleRange",permalink:"/swift-tutorials-cn/docs/charts/scales/scale-range/"},next:{title:"PlotDimensionScaleRange",permalink:"/swift-tutorials-cn/docs/charts/scales/plot-dimension-scale-range/"}},s={},c=[{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"plotDimension",id:"plotdimension",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"plotDimension(padding:)",id:"plotdimensionpadding",level:3},{value:"plotDimension(startPadding:endPadding:)",id:"plotdimensionstartpaddingendpadding",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("ToBePolishedAfterTranslation"),u=p("OriginalSource"),g={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"positionscalerange"},"PositionScaleRange"),(0,r.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,r.kt)(u,{title:"PositionScaleRange",url:"https://developer.apple.com/documentation/charts/positionscalerange",summary:"\u914d\u7f6e x \u8f74\u548c y \u8f74\u503c\u7684\u7c7b\u578b",mdxType:"OriginalSource"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic protocol PositionScaleRange : ScaleRange where Self.VisualValue == CGFloat {\n    // ...\n}\n")),(0,r.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,r.kt)("h3",{id:"plotdimension"},"plotDimension"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u586b\u5145\u7ed8\u56fe\u533a\u57df\u7684\u6bd4\u4f8b\u8303\u56f4\npublic static var plotDimension: PlotDimensionScaleRange { get }\n")),(0,r.kt)("h2",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,r.kt)("h3",{id:"plotdimensionpadding"},"plotDimension(padding:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5728\u5f00\u59cb\u548c\u7ed3\u675f\u65f6\u4f7f\u7528\u7ed9\u5b9a\u586b\u5145\u503c\u586b\u5145\u7ed8\u56fe\u533a\u57df\u7684\u6bd4\u4f8b\u8303\u56f4\n//\n// - padding: \u5c4f\u5e55\u5750\u6807\u4e2d\u7684\u5f00\u59cb\u548c\u7ed3\u675f\u586b\u5145\u503c\npublic static func plotDimension(padding: CGFloat) -> PlotDimensionScaleRange\n")),(0,r.kt)("h3",{id:"plotdimensionstartpaddingendpadding"},"plotDimension(startPadding:endPadding:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5206\u522b\u5728\u5f00\u59cb\u548c\u7ed3\u675f\u5904\u4f7f\u7528\u7ed9\u5b9a\u586b\u5145\u503c\u586b\u5145\u7ed8\u56fe\u533a\u57df\u7684\u6bd4\u4f8b\u8303\u56f4\n//\n// - startPadding: \u5c4f\u5e55\u5750\u6807\u4e2d\u7684\u8d77\u59cb\u586b\u5145\u503c\n// - endPadding: \u5c4f\u5e55\u5750\u6807\u4e2d\u7684\u7ed3\u675f\u586b\u5145\u503c\npublic static func plotDimension(startPadding: CGFloat = 0, endPadding: CGFloat = 0) -> PlotDimensionScaleRange\n")))}f.isMDXComponent=!0}}]);