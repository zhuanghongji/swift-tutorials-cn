"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3674],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,y=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return a?r.createElement(y,o(o({ref:t},p),{},{components:a})):r.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13681:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="ScaleType",c={unversionedId:"charts/scales/scale-type/index",id:"charts/scales/scale-type/index",title:"ScaleType",description:"<OriginalSource",source:"@site/docs/charts/scales/scale-type/index.mdx",sourceDirName:"charts/scales/scale-type",slug:"/charts/scales/scale-type/",permalink:"/swift-tutorials-cn/docs/charts/scales/scale-type/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/scales/scale-type/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AutomaticScaleDomain",permalink:"/swift-tutorials-cn/docs/charts/scales/automatic-scale-domain/"},next:{title:"\u81ea\u5b9a\u4e49 Swift \u56fe\u8868\u4e2d\u7684\u8f74",permalink:"/swift-tutorials-cn/docs/charts/axes/customizing-axes-in-swift-charts/"}},i={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"category",id:"category",level:3},{value:"date",id:"date",level:3},{value:"linear",id:"linear",level:3},{value:"log",id:"log",level:3},{value:"squareRoot",id:"squareroot",level:3},{value:"symmetricLog",id:"symmetriclog",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"power(exponent:)",id:"powerexponent",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=p("ToBePolishedAfterTranslation"),d=p("OriginalSource"),m={toc:s},y="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(y,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"scaletype"},"ScaleType"),(0,n.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(d,{title:"ScaleType",url:"https://developer.apple.com/documentation/charts/scaletype",summary:"\u7f29\u653e\u7ed8\u56fe\u57df\u6216\u8303\u56f4\u7684\u65b9\u6cd5",mdxType:"OriginalSource"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct ScaleType {\n    // ...\n}\n")),(0,n.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"\u5c06\u8be5\u7c7b\u578b\u4e0e ",(0,n.kt)("inlineCode",{parentName:"p"},".chartXScale")," \u89c6\u56fe\u4fee\u9970\u5668\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"type:")," \u53c2\u6570\u7ed3\u5408\u4f7f\u7528\u4ee5\u81ea\u5b9a\u4e49\u6bd4\u4f8b\u7c7b\u578b\u3002"),(0,n.kt)("h2",{id:"\u7c7b\u578b\u5c5e\u6027"},"\u7c7b\u578b\u5c5e\u6027"),(0,n.kt)("h3",{id:"category"},"category"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4ee5\u79bb\u6563\u57df\u503c\u4f5c\u4e3a\u8f93\u5165\u7684\u91cf\u8868\npublic static var category: ScaleType { get }\n")),(0,n.kt)("h3",{id:"date"},"date"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u65e5\u671f\u523b\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u65f6\u95f4\u6233\u7684\u51fd\u6570\n// \u4f7f\u7528 y = a * x.timeIntervalSinceReferenceDate + b\npublic static var date: ScaleType { get }\n")),(0,n.kt)("h3",{id:"linear"},"linear"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6570\u5b57\u523b\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u7ebf\u6027\u51fd\u6570\n// \u4f7f\u7528 y = a * x + b\npublic static var linear: ScaleType { get }\n")),(0,n.kt)("h3",{id:"log"},"log"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6570\u5b57\u523b\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u5bf9\u6570\u51fd\u6570\n// \u4f7f\u7528 y = a * log(x) + b\npublic static var log: ScaleType { get }\n")),(0,n.kt)("h3",{id:"squareroot"},"squareRoot"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6570\u5b57\u5c3a\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u5e73\u65b9\u6839\u51fd\u6570\n// \u4f7f\u7528 y = a * sqrt(x) + b \u3002\u8fd9\u76f8\u5f53\u4e8e\u6307\u6570\u4e3a 0.5 \u7684\u5e42\u6807\u5ea6\npublic static var squareRoot: ScaleType { get }\n")),(0,n.kt)("h3",{id:"symmetriclog"},"symmetricLog"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6570\u5b57\u5c3a\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u5bf9\u79f0\u5bf9\u6570\u51fd\u6570\n// \u4f7f\u7528 y = a * sign(x) * log(1 + |x * slopeAtZero|) + b\n// \u5e38\u91cf slopeAtZero \u9ed8\u8ba4\u4e3a 1\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 symmetricLog(slopeAtZero:) \u914d\u7f6e\u5b83\npublic static var symmetricLog: ScaleType { get }\n")),(0,n.kt)("h2",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,n.kt)("h3",{id:"powerexponent"},"power(exponent:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6570\u5b57\u5c3a\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u5e42\u51fd\u6570\n// \u4f7f\u7528 y = a * pow(x, exponent) + b\n//\n/// - exponent: \u5e42\u51fd\u6570\u7684\u6307\u6570\npublic static func power(exponent: Double) -> ScaleType\n")),(0,n.kt)("p",null,"symmetricLog(slopeAtZero:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u4e2a\u6570\u5b57\u5c3a\u5ea6\uff0c\u5176\u4e2d\u6bcf\u4e2a\u8303\u56f4\u503c y \u90fd\u53ef\u4ee5\u8868\u793a\u4e3a\u57df\u503c x \u7684\u5bf9\u79f0\u5bf9\u6570\u51fd\u6570\n// \u4f7f\u7528 y = a * sign(x) * log(1 + |x * slopeAtZero|) + b\n//\n// - slopeAtZero: \u5c06\u5bf9\u79f0\u5bf9\u6570\u51fd\u6570\u7684\u659c\u7387\u63a7\u5236\u4e3a\u96f6\u7684\u6b63\u5e38\u6570\npublic static func symmetricLog(slopeAtZero: Double) -> ScaleType\n")))}g.isMDXComponent=!0}}]);