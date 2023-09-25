"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[5444],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),f=n,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},39645:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l="DefaultSerialModelExecutor",i={unversionedId:"swift-data/classes/default-serial-model-executor/index",id:"swift-data/classes/default-serial-model-executor/index",title:"DefaultSerialModelExecutor",description:"<OriginalSource",source:"@site/docs/swift-data/classes/default-serial-model-executor/index.mdx",sourceDirName:"swift-data/classes/default-serial-model-executor",slug:"/swift-data/classes/default-serial-model-executor/",permalink:"/swift-tutorials-cn/docs/swift-data/classes/default-serial-model-executor/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-data/classes/default-serial-model-executor/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"swiftdataSidebar",previous:{title:"SwiftDataError",permalink:"/swift-tutorials-cn/docs/swift-data/errors/swift-data-error/"},next:{title:"SchemaProperty",permalink:"/swift-tutorials-cn/docs/swift-data/protocols/schema-property/"}},c={},s=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(modelContext:)",id:"initmodelcontext",level:3},{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"modelContext",id:"modelcontext",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("ToBePolishedAfterTranslation"),p=d("OriginalSource"),f={toc:s},m="wrapper";function x(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"defaultserialmodelexecutor"},"DefaultSerialModelExecutor"),(0,n.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(p,{title:"DefaultSerialModelExecutor",url:"https://developer.apple.com/documentation/swiftdata/defaultserialmodelexecutor",summary:"\u4f7f\u7528\u9694\u79bb\u7684\u6a21\u578b\u4e0a\u4e0b\u6587\u5b89\u5168\u5730\u6267\u884c\u5b58\u50a8\u76f8\u5173\u4efb\u52a1\u7684\u5bf9\u8c61",mdxType:"OriginalSource"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"@available(swift 5.9)\n@available(macOS 14, iOS 17, tvOS 17, watchOS 10, *)\npublic class DefaultSerialModelExecutor : @unchecked Sendable, SerialModelExecutor {\n    // ...\n}\n")),(0,n.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,n.kt)("h3",{id:"initmodelcontext"},"init(modelContext:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public init(modelContext: ModelContext)\n")),(0,n.kt)("h2",{id:"\u5b9e\u4f8b\u5c5e\u6027"},"\u5b9e\u4f8b\u5c5e\u6027"),(0,n.kt)("h3",{id:"modelcontext"},"modelContext"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"final public let modelContext: ModelContext\n")))}x.isMDXComponent=!0}}]);