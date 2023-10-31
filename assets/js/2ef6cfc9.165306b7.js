"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3795],{3905:(e,n,i)=>{i.d(n,{Zo:()=>d,kt:()=>p});var t=i(67294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=t.createContext({}),o=function(e){var n=t.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},d=function(e){var n=o(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=o(i),b=r,p=c["".concat(u,".").concat(b)]||c[b]||m[b]||a;return i?t.createElement(p,s(s({ref:n},d),{},{components:i})):t.createElement(p,s({ref:n},d))}));function p(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=b;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<a;o++)s[o]=i[o];return t.createElement.apply(null,s)}return t.createElement.apply(null,i)}b.displayName="MDXCreateElement"},82508:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=i(87462),r=(i(67294),i(3905));const a={},s="NumberBins",l={unversionedId:"charts/data-bins/number-bins/index",id:"charts/data-bins/number-bins/index",title:"NumberBins",description:"<OriginalSource",source:"@site/docs/charts/data-bins/number-bins/index.mdx",sourceDirName:"charts/data-bins/number-bins",slug:"/charts/data-bins/number-bins/",permalink:"/swift-tutorials-cn/docs/charts/data-bins/number-bins/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/data-bins/number-bins/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AnnotationPosition",permalink:"/swift-tutorials-cn/docs/charts/annotations/annotation-position/"},next:{title:"DateBins",permalink:"/swift-tutorials-cn/docs/charts/data-bins/date-bins/"}},u={},o=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(data:desiredCount:minimumStride:)",id:"initdatadesiredcountminimumstride",level:3},{value:"init(data:desiredCount:minimumStride:)",id:"initdatadesiredcountminimumstride-1",level:3},{value:"init(range:count:)",id:"initrangecount",level:3},{value:"init(range:count:)",id:"initrangecount-1",level:3},{value:"init(range:desiredCount:minimumStride:)",id:"initrangedesiredcountminimumstride",level:3},{value:"init(range:desiredCount:minimumStride:)",id:"initrangedesiredcountminimumstride-1",level:3},{value:"init(size:range:)",id:"initsizerange",level:3},{value:"init(size:range:)",id:"initsizerange-1",level:3},{value:"init(thresholds:)",id:"initthresholds",level:3},{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"thresholds",id:"thresholds",level:3},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},c=d("ToBePolishedAfterTranslation"),m=d("OriginalSource"),b={toc:o},p="wrapper";function g(e){let{components:n,...i}=e;return(0,r.kt)(p,(0,t.Z)({},b,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"numberbins"},"NumberBins"),(0,r.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,r.kt)(m,{title:"NumberBins",url:"https://developer.apple.com/documentation/charts/numberbins",summary:"\u6839\u636e\u6570\u5b57\u7ed8\u5236\u6570\u636e\u7684\u56fe\u8868\u7684 bin \u7684\u96c6\u5408",mdxType:"OriginalSource"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct NumberBins<Value> where Value : Comparable, Value : Numeric {\n    // ...\n}\n")),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,r.kt)("h3",{id:"initdatadesiredcountminimumstride"},"init(data:desiredCount:minimumStride:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u6839\u636e\u6570\u636e\u786e\u5b9a bin\n//\n// - data: \u7ed9\u5b9a\u7684\u6570\u636e\u503c\n// - desiredCount: \u7ed9\u5b9a\u6570\u636e\u6240\u9700\u7684 bin \u6570\u91cf\u3002\u5982\u679c nil \uff0c\u5219\u4f7f\u7528 Scott\u2019s normal reference rule\n//                 \u81ea\u52a8\u4ece\u6570\u636e\u63a8\u65ad bin \u6570\u91cf\uff0c\u4e0a\u9650\u4e3a 200\u3002\n// - minimumStride: \u5141\u8bb8\u7684\u6700\u5c0f bin \u5927\u5c0f\n// - Returns: \u63a8\u65ad\u7684 bins\npublic init(data: [Value],\n            desiredCount: Int? = nil,\n            minimumStride: Value = 0) where Value : BinaryFloatingPoint\n")),(0,r.kt)("h3",{id:"initdatadesiredcountminimumstride-1"},"init(data:desiredCount:minimumStride:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u6839\u636e\u6570\u636e\u786e\u5b9a bin\n//\n// - data: \u7ed9\u5b9a\u7684\u6570\u636e\u503c\n// - desiredCount: \u7ed9\u5b9a\u6570\u636e\u6240\u9700\u7684 bin \u6570\u91cf\u3002\u5982\u679c nil \uff0c\u5219\u4f7f\u7528 Scott\u2019s normal reference rule\n//                 \u81ea\u52a8\u4ece\u6570\u636e\u63a8\u65ad bin \u6570\u91cf\uff0c\u4e0a\u9650\u4e3a 200\u3002\n// - minimumStride: \u5141\u8bb8\u7684\u6700\u5c0f bin \u5927\u5c0f\n// - Returns: \u63a8\u65ad\u7684 bins\npublic init(data: [Value],\n            desiredCount: Int? = nil,\n            minimumStride: Value = 0) where Value : BinaryInteger\n")),(0,r.kt)("h3",{id:"initrangecount"},"init(range:count:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e3a\u8303\u56f4\u521b\u5efa\u7ed9\u5b9a\u6570\u91cf\u7684 bin\n// \u671f\u671b\u8303\u56f4\u957f\u5ea6\u662f count \u7684\u500d\u6570\u4ee5\u5141\u8bb8\u7edf\u4e00\u7684\u6574\u6570 bin\n//\n// - range: bin \u7684\u8303\u56f4\n//          \u7b2c\u4e00\u4e2a bin \u4ece\u8303\u56f4\u7684\u4e0b\u9650\u5f00\u59cb\uff0c\u6700\u540e\u4e00\u4e2a bin \u5728\u8303\u56f4\u7684\u4e0a\u9650\u7ed3\u675f\n// - count: bin \u7684\u786e\u5207\u6570\u91cf\npublic init(range: ClosedRange<Value>, count: Int) where Value : BinaryInteger\n")),(0,r.kt)("h3",{id:"initrangecount-1"},"init(range:count:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e3a\u8303\u56f4\u521b\u5efa\u7ed9\u5b9a\u6570\u91cf\u7684 bin\n// \u671f\u671b\u8303\u56f4\u957f\u5ea6\u662f count \u7684\u500d\u6570\u4ee5\u5141\u8bb8\u7edf\u4e00\u7684\u6574\u6570 bin\n//\n// - range: bin \u7684\u8303\u56f4\n//          \u7b2c\u4e00\u4e2a bin \u4ece\u8303\u56f4\u7684\u4e0b\u9650\u5f00\u59cb\uff0c\u6700\u540e\u4e00\u4e2a bin \u5728\u8303\u56f4\u7684\u4e0a\u9650\u7ed3\u675f\n// - count: bin \u7684\u786e\u5207\u6570\u91cf\npublic init(range: ClosedRange<Value>, count: Int) where Value : BinaryFloatingPoint\n")),(0,r.kt)("h3",{id:"initrangedesiredcountminimumstride"},"init(range:desiredCount:minimumStride:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u4ece\u4e00\u7cfb\u5217\u6570\u636e\u4e2d\u786e\u5b9a bin\n//\n// - range: bins \u5e94\u8986\u76d6\u7684\u8303\u56f4\n// - desiredCount: \u7ed9\u5b9a\u6570\u636e\u6240\u9700\u7684 bin \u6570\u91cf\u3002\u5982\u679c nil \uff0c\u5219\u4ece\u6570\u636e\u4e2d\u81ea\u52a8\u63a8\u65ad\u51fa\u6570\u5b57\n// - minimumStride: \u5141\u8bb8\u7684\u6700\u5c0f bin \u5927\u5c0f\n// - Returns: \u63a8\u65ad\u7684 bins\npublic init(range: ClosedRange<Value>,\n            desiredCount: Int = 10,\n            minimumStride: Value = 0) where Value : BinaryFloatingPoint\n")),(0,r.kt)("h3",{id:"initrangedesiredcountminimumstride-1"},"init(range:desiredCount:minimumStride:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u4ece\u4e00\u7cfb\u5217\u6570\u636e\u4e2d\u786e\u5b9a bin\n//\n// - range: bins \u5e94\u8986\u76d6\u7684\u8303\u56f4\n// - desiredCount: \u7ed9\u5b9a\u6570\u636e\u6240\u9700\u7684 bin \u6570\u91cf\u3002\u5982\u679c nil \uff0c\u5219\u4ece\u6570\u636e\u4e2d\u81ea\u52a8\u63a8\u65ad\u51fa\u6570\u5b57\n// - minimumStride: \u5141\u8bb8\u7684\u6700\u5c0f bin \u5927\u5c0f\n// - Returns: \u63a8\u65ad\u7684 bins\npublic init(range: ClosedRange<Value>,\n            desiredCount: Int = 10,\n            minimumStride: Value = 0) where Value : BinaryInteger\n")),(0,r.kt)("h3",{id:"initsizerange"},"init(size:range:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u8986\u76d6\u7ed9\u5b9a\u8303\u56f4\u7684\u7edf\u4e00 bins\n//\n// - size: bins \u7684\u5927\u5c0f\n// - range: bins \u6db5\u76d6\u7684\u6570\u636e\u8303\u56f4\n// - Returns: bins\npublic init(size: Value, range: ClosedRange<Value>) where Value : BinaryFloatingPoint\n")),(0,r.kt)("h3",{id:"initsizerange-1"},"init(size:range:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u8986\u76d6\u7ed9\u5b9a\u8303\u56f4\u7684\u7edf\u4e00 bins\n//\n// - size: bins \u7684\u5927\u5c0f\n// - range: bins \u6db5\u76d6\u7684\u6570\u636e\u8303\u56f4\n// - Returns: bins\npublic init(size: Value, range: ClosedRange<Value>) where Value : BinaryInteger\n")),(0,r.kt)("h3",{id:"initthresholds"},"init(thresholds:)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u7684 N thresholds \u521b\u5efa N-1 \u4e2a bins\n//\n// - thresholds: bins \u5468\u56f4\u7684\u9608\u503c\n// - Returns: bins\npublic init(thresholds: [Value])\n")),(0,r.kt)("h2",{id:"\u5b9e\u4f8b\u5c5e\u6027"},"\u5b9e\u4f8b\u5c5e\u6027"),(0,r.kt)("h3",{id:"thresholds"},"thresholds"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u627e\u5230 bin \u9608\u503c\n//\n// - Returns: \u56f4\u7ed5 bins \u7684 bin \u9608\u503c\npublic var thresholds: [Value] { get }\n")),(0,r.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8fd4\u56de\u7ed9\u5b9a\u503c\u7684 bin \u7d22\u5f15\n// - value: \u8981\u83b7\u53d6\u7d22\u5f15\u7684\u6570\u503c\n// - Returns: bin \u7d22\u5f15\npublic func index(for value: Value) -> Int\n")))}g.isMDXComponent=!0}}]);