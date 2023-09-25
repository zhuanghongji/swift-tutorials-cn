"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[5900],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=b;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(87462),a=(t(67294),t(3905));const i={},l="DateBins",s={unversionedId:"charts/data-bins/date-bins/index",id:"charts/data-bins/date-bins/index",title:"DateBins",description:"<OriginalSource",source:"@site/docs/charts/data-bins/date-bins/index.mdx",sourceDirName:"charts/data-bins/date-bins",slug:"/charts/data-bins/date-bins/",permalink:"/swift-tutorials-cn/docs/charts/data-bins/date-bins/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/data-bins/date-bins/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"NumberBins",permalink:"/swift-tutorials-cn/docs/charts/data-bins/number-bins/"},next:{title:"ChartPlotContent",permalink:"/swift-tutorials-cn/docs/charts/chart-management/chart-plot-content/"}},o={},d=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(data:desiredCount:<wbr/>calendar:)",id:"initdatadesiredcountcalendar",level:3},{value:"init(range:desiredCount:<wbr/>calendar:)",id:"initrangedesiredcountcalendar",level:3},{value:"init(thresholds:)",id:"initthresholds",level:3},{value:"init(timeInterval:range:)",id:"inittimeintervalrange",level:3},{value:"init(unit:by:range:<wbr/>calendar:)",id:"initunitbyrangecalendar",level:3}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},u=c("ToBePolishedAfterTranslation"),p=c("OriginalSource"),b={toc:d},m="wrapper";function g(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"datebins"},"DateBins"),(0,a.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(p,{title:"DateBins",url:"https://developer.apple.com/documentation/charts/datebins",summary:"\u56fe\u8868\u7684 bin \u96c6\u5408\uff0c\u6839\u636e\u65e5\u671f\u7ed8\u5236\u6570\u636e",mdxType:"OriginalSource"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct DateBins {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,a.kt)("h3",{id:"initdatadesiredcountcalendar"},"init(data:desiredCount:",(0,a.kt)("wbr",null),"calendar:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u6839\u636e\u6570\u636e\u786e\u5b9a bin\n//\n// - data: \u7ed9\u5b9a\u7684\u6570\u636e\u503c\n// - desiredCount: \u7ed9\u5b9a\u6570\u636e\u6240\u9700\u7684 bin \u6570\u91cf\u3002\u5982\u679c nil \uff0c\u5219\u4f7f\u7528 Scott\u2019s normal reference rule\n//                 \u81ea\u52a8\u4ece\u6570\u636e\u63a8\u65ad bin \u6570\u91cf\uff0c\u4e0a\u9650\u4e3a 200\n// - Returns: \u63a8\u65ad\u7684 bins\npublic init(data: [Date],\n            desiredCount: Int? = nil,\n            calendar: Calendar = .autoupdatingCurrent)\n")),(0,a.kt)("h3",{id:"initrangedesiredcountcalendar"},"init(range:desiredCount:",(0,a.kt)("wbr",null),"calendar:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u4ece\u4e00\u7cfb\u5217\u6570\u636e\u4e2d\u786e\u5b9a bins\n//\n// - range: bins \u5e94\u8986\u76d6\u7684\u8303\u56f4\n// - desiredCount: \u7ed9\u5b9a\u6570\u636e\u6240\u9700\u7684 bin \u6570\u91cf\n// - Returns: \u63a8\u65ad\u7684 bins\npublic init(range: ClosedRange<Date>,\n            desiredCount: Int = 10,\n            calendar: Calendar = .autoupdatingCurrent)\n")),(0,a.kt)("h3",{id:"initthresholds"},"init(thresholds:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u7684 N thresholds \u521b\u5efa N-1 \u4e2a bin\n//\n// - thresholds: bins \u5468\u56f4\u7684\u9608\u503c\n// - Returns: bins\npublic init(thresholds: [Date])\n")),(0,a.kt)("h3",{id:"inittimeintervalrange"},"init(timeInterval:range:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u8986\u76d6\u7ed9\u5b9a\u8303\u56f4\u7684\u7edf\u4e00\u5783\u573e\u7bb1\u3002\u7b2c\u4e00\u4e2a bin \u4ece\u8303\u56f4\u7684\u4e0b\u9650\u5f00\u59cb\n//\n// - timeInterval: bins \u7684\u5927\u5c0f\n// - range: bin \u6db5\u76d6\u7684\u6570\u636e\u8303\u56f4\n// - Returns: bins\npublic init(timeInterval: TimeInterval, range: ClosedRange<Date>)\n")),(0,a.kt)("h3",{id:"initunitbyrangecalendar"},"init(unit:by:range:",(0,a.kt)("wbr",null),"calendar:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u8986\u76d6\u7ed9\u5b9a\u8303\u56f4\u7684\u7edf\u4e00 bins\n//\n// - unit: bins \u7684\u5927\u5c0f\n// - stride: \u6bcf\u4e2a bin \u7684\u7ec4\u4ef6\u6570\u91cf\n// - range: bin \u6db5\u76d6\u7684\u6570\u636e\u8303\u56f4\n// - calendar: \u8981\u4f7f\u7528\u7684\u65e5\u5386\n// - Returns: bins\npublic init(unit: Calendar.Component,\n            by stride: Int = 1,\n            range: ClosedRange<Date>,\n            calendar: Calendar = .autoupdatingCurrent)\n")))}g.isMDXComponent=!0}}]);