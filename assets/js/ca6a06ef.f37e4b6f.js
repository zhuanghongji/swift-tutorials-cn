"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8830],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o="MajorValueAlignment",i={unversionedId:"charts/structures/major-value-alignment/index",id:"charts/structures/major-value-alignment/index",title:"MajorValueAlignment",description:"<OriginalSource",source:"@site/docs/charts/structures/major-value-alignment/index.mdx",sourceDirName:"charts/structures/major-value-alignment",slug:"/charts/structures/major-value-alignment/",permalink:"/swift-tutorials-cn/docs/charts/structures/major-value-alignment/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/structures/major-value-alignment/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"ChartScrollTargetBehaviorContext",permalink:"/swift-tutorials-cn/docs/charts/structures/chart-scroll-target-behavior-context/"},next:{title:"SectorMark",permalink:"/swift-tutorials-cn/docs/charts/structures/sector-mark/"}},c={},u=[{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"page",id:"page",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"matching(_:)",id:"matching_",level:3},{value:"unit(_:)",id:"unit_",level:3}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=s("ToBePolishedAfterTranslation"),m=s("OriginalSource"),d={toc:u},g="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"majorvaluealignment"},"MajorValueAlignment"),(0,a.kt)(p,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(m,{title:"MajorValueAlignment",url:"https://developer.apple.com/documentation/charts/majorvaluealignment",summary:"\u5b9a\u4e49 valigned \u5bf9\u9f50\u56fe\u8868\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\u5982\u4f55\u4e0e\u6ed1\u52a8\u65f6\u7684\u4e3b\u8981\u503c\u5bf9\u9f50\u7684\u7c7b\u578b",mdxType:"OriginalSource"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *)\npublic struct MajorValueAlignment<Value> where Value : Plottable {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,a.kt)("h3",{id:"page"},"page"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u5c06\u4e3b\u8981\u5bf9\u9f50\u5355\u4f4d\u8bbe\u7f6e\u4e3a\u76f8\u5f53\u4e8e\u9875\u9762\u7684\u53ef\u89c1\u57df\u7684\u5927\u5c0f\npublic static var page: MajorValueAlignment<Value> { get }\n")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,a.kt)("h3",{id:"matching_"},"matching(","_",":)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e0e\u65e5\u5386\u7ec4\u4ef6\u5bf9\u9f50\n//\n// - components: \u5bf9\u9f50\u7ec4\u4ef6\npublic static func matching(_ components: DateComponents) -> MajorValueAlignment<Value> where Value == Date\n")),(0,a.kt)("h3",{id:"unit_"},"unit(","_",":)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e0e\u5355\u4f4d\u5bf9\u9f50\n//\n// - unit: \u5bf9\u9f50\u5355\u5143\npublic static func unit(_ unit: Value) -> MajorValueAlignment<Value> where Value : Numeric\n")))}f.isMDXComponent=!0}}]);