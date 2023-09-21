"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3206],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={},s="SectorMark",o={unversionedId:"swift-charts/structures/sector-mark/index",id:"swift-charts/structures/sector-mark/index",title:"SectorMark",description:"<OriginalSource",source:"@site/docs/swift-charts/structures/sector-mark/index.mdx",sourceDirName:"swift-charts/structures/sector-mark",slug:"/swift-charts/structures/sector-mark/",permalink:"/swift-tutorials-cn/docs/swift-charts/structures/sector-mark/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-charts/structures/sector-mark/index.mdx",tags:[],version:"current",lastUpdatedAt:1695274250,formattedLastUpdatedAt:"2023\u5e749\u670821\u65e5",frontMatter:{},sidebar:"swiftchartsSidebar",previous:{title:"MajorValueAlignment",permalink:"/swift-tutorials-cn/docs/swift-charts/structures/major-value-alignment/"},next:{title:"ValueAlignedChartScrollTargetBehavior",permalink:"/swift-tutorials-cn/docs/swift-charts/structures/value-aligned-chart-scroll-target-behavior/"}},l={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u997c\u56fe",id:"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u997c\u56fe",level:2},{value:"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u5706\u73af\u56fe\u5e76\u8bbe\u7f6e\u5176\u6837\u5f0f",id:"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u5706\u73af\u56fe\u5e76\u8bbe\u7f6e\u5176\u6837\u5f0f",level:2},{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(angle:innerRadius:outerRadius:angularInset:)",id:"initangleinnerradiusouterradiusangularinset",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("ToBePolishedAfterTranslation"),p=c("OriginalSource"),m={toc:u},f="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sectormark"},"SectorMark"),(0,a.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(p,{title:"SectorMark",url:"https://developer.apple.com/documentation/charts/sectormark",summary:"\u997c\u56fe\u6216\u5706\u73af\u56fe\u7684\u4e00\u4e2a\u90e8\u5206\uff0c\u663e\u793a\u5404\u4e2a\u7c7b\u522b\u5982\u4f55\u6784\u6210\u6709\u610f\u4e49\u7684\u603b\u6570",mdxType:"OriginalSource"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *)\npublic struct SectorMark {\n\n\n}\n")),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u6784\u6210\u603b\u503c\u7684\u6bcf\u4e2a\u7c7b\u522b\u503c\u7684\u76f8\u5bf9\u5927\u5c0f\u88ab\u6620\u5c04\u5230\u6247\u533a\u7684\u89d2\u5ea6\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u786e\u4fdd\u53ef\u89c6\u5316\u6613\u4e8e\u9605\u8bfb\uff0c\u8bf7\u8bbe\u8ba1\u4e0d\u8d85\u8fc7 5-7 \u4e2a\u6247\u533a\u7684\u997c\u56fe\u6216\u5706\u73af\u56fe\u3002\u5982\u6709\u5fc5\u8981\uff0c\u5c06\u6240\u6709\u5269\u4f59\u503c\u6c47\u603b\u5230\u201c\u5176\u4ed6\u201d\u7ec4\u4e2d\uff0c\u6216\u8005\u8003\u8651\u6c34\u5e73\u6761\u5f62\u56fe\uff0c\u5b83\u53ef\u4ee5\u6269\u5c55\u5230\u8bb8\u591a\u6761\u5f62\uff0c\u6613\u4e8e\u7528\u7c7b\u522b\u6807\u8bb0\uff0c\u5e76\u8ba9\u7528\u6237\u66f4\u51c6\u786e\u5730\u6bd4\u8f83\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u786e\u4fdd\u4f60\u7684\u6570\u636e\u4ec5\u5305\u542b\u6b63\u503c\u3002\u6b64\u5916\uff0c\u56fe\u8868\u4e2d\u975e\u5e38\u5c0f\u7684\u6bd4\u4f8b\u53ef\u80fd\u65e0\u6cd5\u8fa8\u522b\uff0c\u7279\u522b\u662f\u5728\u6307\u5b9a\u4e86\u89d2\u5ea6\u63d2\u5165\u7684\u60c5\u51b5\u4e0b\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u997c\u56fe"},"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u997c\u56fe"),(0,a.kt)("p",null,"\u8981\u76f4\u89c2\u5730\u663e\u793a\u503c\u4e0e\u5b83\u4eec\u603b\u5171\u52a0\u8d77\u6765\u7684\u603b\u6570\u7684\u6bd4\u7387\uff0c\u8bf7\u6307\u5b9a\u503c\uff0c\u901a\u5e38\u6309\u9012\u51cf\u7684\u503c\u6392\u5e8f\u3002\u5982\u679c\u9700\u8981\uff0c\u6dfb\u52a0\u201c\u5176\u4ed6\u201d\u7ec4\u4f5c\u4e3a\u6700\u540e\u4e00\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let data = [\n    (name: "Cachapa", sales: 9631),\n    (name: "Cr\xeape", sales: 6959),\n    (name: "Injera", sales: 4891),\n    (name: "Jian Bing", sales: 2506),\n    (name: "American", sales: 1777),\n    (name: "Dosa", sales: 625),\n]\n\n\nvar body: some View {\n    Chart(data, id: \\.name) { name, sales in\n        SectorMark(angle: .value("Value", sales))\n            .foregroundStyle(by: .value("Product category", name))\n    }\n}\n')),(0,a.kt)("h2",{id:"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u5706\u73af\u56fe\u5e76\u8bbe\u7f6e\u5176\u6837\u5f0f"},"\u521b\u5efa\u5e26\u6709\u6247\u5f62\u6807\u8bb0\u7684\u5706\u73af\u56fe\u5e76\u8bbe\u7f6e\u5176\u6837\u5f0f"),(0,a.kt)("p",null,"\u5185\u534a\u5f84\u548c\u5916\u534a\u5f84\u53ef\u6839\u636e\u4f60\u7684\u8bbe\u8ba1\u5b9a\u5236\u3002\u975e\u96f6\u5185\u534a\u5f84\u4f1a\u751f\u6210\u5706\u73af\u56fe\u3002\u5c0f\u89d2\u5ea6\u63d2\u5165\u901a\u8fc7\u589e\u52a0\u6247\u533a\u4e4b\u95f4\u7684\u5bf9\u6bd4\u5ea6\u6765\u5e2e\u52a9\u53ef\u8bbf\u95ee\u6027\u548c\u53ef\u8bfb\u6027\uff0c\u8fd9\u5bf9\u4e8e\u997c\u56fe\u548c\u5706\u73af\u56fe\u975e\u5e38\u6709\u7528\u3002\u5c06\u89d2\u5ea6\u63d2\u5165\u548c\u89d2\u534a\u5f84\u7684\u5927\u5c0f\u9650\u5236\u4e3a\u8f83\u5c0f\u7684\u503c\uff0c\u4ee5\u907f\u514d\u626d\u66f2\u6247\u5f62\u7684\u5f62\u72b6\u548c\u76f8\u5bf9\u5927\u5c0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'var body: some View {\n    Chart(data, id: \\.name) { name, sales in\n        SectorMark(\n            angle: .value("Value", sales),\n            innerRadius: .ratio(0.618),\n            outerRadius: .inset(10),\n            angularInset: 1\n        )\n        .cornerRadius(4)\n        .foregroundStyle(by: .value("Product category", name))\n    }\n}\n')),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,a.kt)("h3",{id:"initangleinnerradiusouterradiusangularinset"},"init(angle:innerRadius:outerRadius:angularInset:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"/// Creates a sector mark, which uses the angular size to represent the proportion of the value to the sum of all values.\n///\n/// Use this initializer to map angular positions to a sector for each data element.\n///\n// -  angle: \u5c06\u6620\u5c04\u5230\u6247\u533a\u89d2\u5ea6\u5927\u5c0f\u7684\u53ef\u7ed8\u56fe\u503c\u3002\n//           \u5b83\u8981\u4e48\u662f\u4e0e\u6574\u5706\u5185\u7684\u89d2\u5ea6\u6210\u6bd4\u4f8b\u7684\u503c\uff0c\u8981\u4e48\u662f\u660e\u786e\u7684\u5f00\u59cb/\u7ed3\u675f\u89d2\u5ea6\u7684\u503c\u8303\u56f4\n// -  innerRadius: \u6247\u533a\u7684\u5185\u534a\u5f84\u3002\u5b83\u8981\u4e48\u662f\u4ee5\u78c5\u4e3a\u5355\u4f4d\u7684\u5927\u5c0f\n//                 \u8981\u4e48\u662f\u76f8\u5bf9\u4e8e\u5916\u534a\u5f84\u7684 .ratio \u6216 .inset\n// -  outerRadius: \u6247\u533a\u7684\u5916\u534a\u5f84\u3002\u5b83\u53ef\u4ee5\u662f\u4ee5\u78c5\u4e3a\u5355\u4f4d\u7684\u5927\u5c0f\n//                 \u4e5f\u53ef\u4ee5\u662f\u76f8\u5bf9\u4e8e\u53ef\u7528\u7ed8\u56fe\u533a\u57df\u7684 .ratio \u6216 .inset\n// -  angularInset: \u6247\u533a\u89d2\u7684\u534a\u5f84\n///\npublic init(angle: PlottableValue<some Plottable>,\n            innerRadius: MarkDimension = .automatic,\n            outerRadius: MarkDimension = .automatic,\n            angularInset: CGFloat? = nil)\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\u5c06\u6bcf\u4e2a\u6570\u636e\u5143\u7d20\u7684\u89d2\u5ea6\u4f4d\u7f6e\u6620\u5c04\u5230\u6247\u533a\u3002"))}g.isMDXComponent=!0}}]);