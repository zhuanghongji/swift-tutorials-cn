"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8929],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),k=i,f=p["".concat(o,".").concat(k)]||p[k]||d[k]||a;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:i,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},s="AxisTick",c={unversionedId:"swift-charts/axis-marks/axis-tick/index",id:"swift-charts/axis-marks/axis-tick/index",title:"AxisTick",description:"<OriginalSource",source:"@site/docs/swift-charts/axis-marks/axis-tick/index.mdx",sourceDirName:"swift-charts/axis-marks/axis-tick",slug:"/swift-charts/axis-marks/axis-tick/",permalink:"/swift-tutorials-cn/docs/swift-charts/axis-marks/axis-tick/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-charts/axis-marks/axis-tick/index.mdx",tags:[],version:"current",lastUpdatedAt:1695274250,formattedLastUpdatedAt:"2023\u5e749\u670821\u65e5",frontMatter:{},sidebar:"swiftchartsSidebar",previous:{title:"AxisMark",permalink:"/swift-tutorials-cn/docs/swift-charts/axis-marks/axis-mark/"},next:{title:"AxisGridLine",permalink:"/swift-tutorials-cn/docs/swift-charts/axis-marks/axis-grid-line/"}},o={},l=[{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2},{value:"Length",id:"length",level:3},{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:3},{value:"init(centered:length:stroke:)",id:"initcenteredlengthstroke",level:3},{value:"init(centered:length:stroke:)",id:"initcenteredlengthstroke-1",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},p=u("ToBePolishedAfterTranslation"),d=u("OriginalSource"),k={toc:l},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"axistick"},"AxisTick"),(0,i.kt)(p,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(d,{title:"AxisTick",url:"https://developer.apple.com/documentation/charts/axistick",summary:"\u56fe\u8868\u5728\u8f74\u4e0a\u7ed8\u5236\u7684\u6807\u8bb0\uff0c\u7528\u4e8e\u6307\u793a\u6cbf\u8be5\u8f74\u7684\u53c2\u8003\u70b9",mdxType:"OriginalSource"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct AxisTick : AxisMark {\n      // ...\n}\n")),(0,i.kt)("h2",{id:"\u7ed3\u6784\u4f53"},"\u7ed3\u6784\u4f53"),(0,i.kt)("h3",{id:"length"},"Length"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u63cf\u8ff0\u523b\u5ea6\u7684\u957f\u5ea6\npublic struct Length : CustomStringConvertible {\n\n    // \u81ea\u52a8\u786e\u5b9a\u523b\u5ea6\u957f\u5ea6\n    public static var automatic: AxisTick.Length { get }\n\n    // \u63cf\u8ff0\u5ef6\u4f38\u81f3\u5176\u5173\u8054\u6807\u7b7e\u7684\u523b\u5ea6\n    public static var label: AxisTick.Length { get }\n\n    // \u63cf\u8ff0\u5ef6\u4f38\u5230\u8f74\u4e0a\u6700\u957f\u6807\u7b7e\u7684\u523b\u5ea6\n    public static var longestLabel: AxisTick.Length { get }\n\n    // \u63cf\u8ff0\u4e00\u4e2a\u5ef6\u4f38\u5230\u5176\u5173\u8054\u6807\u7b7e\u7684\u523b\u5ea6\uff0c\u5177\u6709\u7ed9\u5b9a\u7684\u9644\u52a0\u957f\u5ea6\n    //\n    // - extendPastBy: \u6dfb\u52a0\u5230\u5173\u8054\u6807\u7b7e\u540e\u9762\u7684\u9644\u52a0\u957f\u5ea6\n    public static func label(extendPastBy: CGFloat = 0) -> AxisTick.Length\n\n    // \u63cf\u8ff0\u5ef6\u4f38\u5230\u8f74\u4e0a\u6700\u957f\u6807\u7b7e\u7684\u523b\u5ea6\uff0c\u5177\u6709\u7ed9\u5b9a\u7684\u9644\u52a0\u957f\u5ea6\n    //\n    // - extendPastBy: \u6dfb\u52a0\u5230\u5173\u8054\u6807\u7b7e\u540e\u9762\u7684\u9644\u52a0\u957f\u5ea6\n    public static func longestLabel(extendPastBy: CGFloat = 0) -> AxisTick.Length\n}\n")),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,i.kt)("h3",{id:"initcenteredlengthstroke"},"init(centered:length:stroke:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u523b\u5ea6\n//\n// - centered: \u662f\u5426\u4f7f\u7f51\u683c\u7ebf\u5728\u4e24\u4e2a\u8f74\u503c\u4e4b\u95f4\u5c45\u4e2d\n// - length: \u523b\u5ea6\u7ebf\u7684\u957f\u5ea6\n// - stroke: \u7b14\u753b\u7684\u98ce\u683c\npublic init(centered: Bool? = nil, length: CGFloat, stroke: StrokeStyle? = nil)\n")),(0,i.kt)("h3",{id:"initcenteredlengthstroke-1"},"init(centered:length:stroke:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u523b\u5ea6\n//\n// - centered: \u662f\u5426\u4f7f\u7f51\u683c\u7ebf\u5728\u4e24\u4e2a\u8f74\u503c\u4e4b\u95f4\u5c45\u4e2d\n// - length: \u523b\u5ea6\u7ebf\u7684\u957f\u5ea6\n// - stroke: \u7b14\u753b\u7684\u98ce\u683c\npublic init(centered: Bool? = nil, length: AxisTick.Length = .automatic, stroke: StrokeStyle? = nil)\n")))}m.isMDXComponent=!0}}]);