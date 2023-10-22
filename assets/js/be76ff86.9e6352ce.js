"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={},o="MarkDimension",l={unversionedId:"charts/mark-configuration/mark-dimension/index",id:"charts/mark-configuration/mark-dimension/index",title:"MarkDimension",description:"<OriginalSource",source:"@site/docs/charts/mark-configuration/mark-dimension/index.mdx",sourceDirName:"charts/mark-configuration/mark-dimension",slug:"/charts/mark-configuration/mark-dimension/",permalink:"/swift-tutorials-cn/docs/charts/mark-configuration/mark-dimension/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/mark-configuration/mark-dimension/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"MarkStackingMethod",permalink:"/swift-tutorials-cn/docs/charts/mark-configuration/mark-stacking-method/"},next:{title:"InterpolationMethod",permalink:"/swift-tutorials-cn/docs/charts/mark-configuration/interpolation-method/"}},c={},s=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(floatLiteral:)",id:"initfloatliteral",level:3},{value:"init(integerLiteral:)",id:"initintegerliteral",level:3},{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"automatic",id:"automatic",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"fixed(_:)",id:"fixed_",level:3},{value:"inset(_:)",id:"inset_",level:3},{value:"ratio(_:)",id:"ratio_",level:3}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},m=u("ToBePolishedAfterTranslation"),p=u("OriginalSource"),d={toc:s},f="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markdimension"},"MarkDimension"),(0,i.kt)(m,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(p,{title:"MarkDimension",url:"https://developer.apple.com/documentation/charts/markdimension",summary:"\u8868\u793a\u6807\u8bb0\u5bbd\u5ea6\u6216\u9ad8\u5ea6\u7684\u5355\u72ec\u5c3a\u5bf8",mdxType:"OriginalSource"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\n@frozen public struct MarkDimension : ExpressibleByFloatLiteral, ExpressibleByIntegerLiteral {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,i.kt)("h3",{id:"initfloatliteral"},"init(floatLiteral:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4ece\u6d6e\u70b9\u503c\u521b\u5efa\u6052\u5b9a\u7684\u5bbd\u5ea6\u6216\u9ad8\u5ea6\n//\n// - value: \u5bbd\u5ea6\u6216\u9ad8\u5ea6\n@inlinable public init(floatLiteral value: Double)\n")),(0,i.kt)("h3",{id:"initintegerliteral"},"init(integerLiteral:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4ece\u6574\u6570\u521b\u5efa\u6052\u5b9a\u7684\u5bbd\u5ea6\u6216\u9ad8\u5ea6\n//\n// - value: \u5bbd\u5ea6\u6216\u9ad8\u5ea6\n@inlinable public init(integerLiteral value: Int)\n")),(0,i.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,i.kt)("h3",{id:"automatic"},"automatic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u81ea\u52a8\u786e\u5b9a\u5176\u503c\u7684\u7ef4\u5ea6\n@inlinable public static var automatic: MarkDimension { get }\n")),(0,i.kt)("h2",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"fixed_"},"fixed(","_",":)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6052\u5b9a\u7684\u7ef4\u5ea6\n///\n// - value: \u56fa\u5b9a\u7684\u5bbd\u5ea6\u6216\u9ad8\u5ea6\n@inlinable public static func fixed(_ value: CGFloat) -> MarkDimension\n")),(0,i.kt)("h3",{id:"inset_"},"inset(","_",":)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5c3a\u5bf8\u662f\u6b65\u957f\u51cf\u53bb\u6bcf\u4fa7\u6307\u5b9a\u7684\u63d2\u5165\u503c\n//\n// - value: \u5c4f\u5e55\u5750\u6807\u4e2d\u7ed9\u5b9a\u7684\u63d2\u5165\u503c\n@inlinable public static func inset(_ value: CGFloat) -> MarkDimension\n")),(0,i.kt)("h3",{id:"ratio_"},"ratio(","_",":)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u6307\u5b9a\u6bd4\u7387\u4e0e\u7f29\u653e\u6b65\u957f\u6210\u6bd4\u4f8b\u7684\u5c3a\u5bf8\n//\n// - value: \u7ed9\u5b9a\u7684\u6bd4\u7387\uff0c\u4ece 0 \u5230 1\n@inlinable public static func ratio(_ value: CGFloat) -> MarkDimension\n")))}k.isMDXComponent=!0}}]);