"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>s});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=c(n),v=i,s=u["".concat(m,".").concat(v)]||u[v]||h[v]||l;return n?a.createElement(s,r(r({ref:t},g),{},{components:n})):a.createElement(s,r({ref:t},g))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=v;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},35121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const l={},r="ChartScrollTargetBehavior",o={unversionedId:"charts/protocols/chart-scroll-target-behavior/index",id:"charts/protocols/chart-scroll-target-behavior/index",title:"ChartScrollTargetBehavior",description:"<OriginalSource",source:"@site/docs/charts/protocols/chart-scroll-target-behavior/index.mdx",sourceDirName:"charts/protocols/chart-scroll-target-behavior",slug:"/charts/protocols/chart-scroll-target-behavior/",permalink:"/swift-tutorials-cn/docs/charts/protocols/chart-scroll-target-behavior/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/protocols/chart-scroll-target-behavior/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"ChartProxy",permalink:"/swift-tutorials-cn/docs/charts/chart-management/chart-proxy/"},next:{title:"PrimitivePlottableProtocol",permalink:"/swift-tutorials-cn/docs/charts/protocols/primitive-plottable-protocol/"}},m={},c=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"updateTarget(_:context:)",id:"updatetarget_context",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"valueAligned(matching:majorAlignment:limitBehavior:)",id:"valuealignedmatchingmajoralignmentlimitbehavior",level:3},{value:"valueAligned(unit:majorAlignment:limitBehavior:)",id:"valuealignedunitmajoralignmentlimitbehavior",level:3},{value:"valueAligned(xMatching:yMatching:xMajorAlignment:yMajorAlignment:limitBehavior:)",id:"valuealignedxmatchingymatchingxmajoralignmentymajoralignmentlimitbehavior",level:3},{value:"valueAligned(xMatching:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)",id:"valuealignedxmatchingyunitxmajoralignmentymajoralignmentlimitbehavior",level:3},{value:"valueAligned(xUnit:yMatching:xMajorAlignment:yMajorAlignment:limitBehavior:)",id:"valuealignedxunitymatchingxmajoralignmentymajoralignmentlimitbehavior",level:3},{value:"valueAligned(xUnit:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)",id:"valuealignedxunityunitxmajoralignmentymajoralignmentlimitbehavior",level:3}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},u=g("ToBePolishedAfterTranslation"),h=g("OriginalSource"),v={toc:c},s="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(s,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chartscrolltargetbehavior"},"ChartScrollTargetBehavior"),(0,i.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(h,{title:"ChartScrollTargetBehavior",url:"https://developer.apple.com/documentation/charts/chartscrolltargetbehavior",summary:"\u914d\u7f6e\u56fe\u8868\u6eda\u52a8\u884c\u4e3a\u7684\u7c7b\u578b",mdxType:"OriginalSource"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *)\npublic protocol ChartScrollTargetBehavior : ScrollTargetBehavior {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"updatetarget_context"},"updateTarget(","_",":context:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u66f4\u65b0\u53ef\u6eda\u52a8\u89c6\u56fe\u5e94\u6eda\u52a8\u5230\u7684\u5efa\u8bae\u76ee\u6807\npublic func updateTarget(_ target: inout ScrollTarget, context: ScrollTargetBehaviorContext)\n")),(0,i.kt)("p",null,"\u7cfb\u7edf\u4e3b\u8981\u5728\u4e24\u79cd\u60c5\u51b5\u4e0b\u8c03\u7528\u8be5\u65b9\u6cd5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u6eda\u52a8\u624b\u52bf\u7ed3\u675f\u65f6\uff0c\u5b83\u4f1a\u4f7f\u7528\u5176\u51cf\u901f\u7387\u8ba1\u7b97\u81ea\u7136\u6eda\u52a8\u5230\u7684\u4f4d\u7f6e\u3002\u7cfb\u7edf\u63d0\u4f9b\u8be5\u8ba1\u7b97\u503c\u4f5c\u4e3a\u8be5\u65b9\u6cd5\u7684\u76ee\u6807\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5f53\u53ef\u6eda\u52a8\u89c6\u56fe\u7684\u5927\u5c0f\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5b83\u4f1a\u6839\u636e\u65b0\u7684\u5927\u5c0f\u8ba1\u7b97\u5e94\u6eda\u52a8\u5230\u7684\u4f4d\u7f6e\uff0c\u5e76\u63d0\u4f9b\u6b64\u8ba1\u7b97\u503c\u4f5c\u4e3a\u8be5\u65b9\u6cd5\u7684\u76ee\u6807\u3002")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5b9e\u73b0\u8be5\u65b9\u6cd5\u6765\u8986\u76d6\u8ba1\u7b97\u7684\u76ee\u6807\uff0c\u8fd9\u5c06\u4f7f\u53ef\u6eda\u52a8\u89c6\u56fe\u6eda\u52a8\u5230\u4e0e\u5176\u5b83\u60c5\u51b5\u4e0d\u540c\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u7c7b\u578b\u65b9\u6cd5"},"\u7c7b\u578b\u65b9\u6cd5"),(0,i.kt)("h3",{id:"valuealignedmatchingmajoralignmentlimitbehavior"},"valueAligned(matching:majorAlignment:limitBehavior:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\uff0c\u8be5\u884c\u4e3a\u4e0e\u6cbf\u53ef\u6eda\u52a8\u8f74\u4ee5\u89c4\u5219\u95f4\u9694\u95f4\u9694\u7684\u503c\u5bf9\u9f50\n//\n// - components: \u7528\u6237\u5b8c\u6210\u6eda\u52a8\u540e\u5bf9\u9f50\u65f6\u8981\u641c\u7d22\u7684\u7ec4\u4ef6\n// - majorAlignment: \u4e0e\u4e3b\u8981\u4ef7\u503c\u89c2\u4fdd\u6301\u4e00\u81f4\u7684\u884c\u4e3a\u3002\u5f53\u7528\u6237\u5728\u56fe\u8868\u4e0a\u6ed1\u52a8\u65f6\uff0c\n//                   \u56fe\u8868\u5c06\u6839\u636e\u6ed1\u52a8\u65b9\u5411\u6355\u6349\u5230\u4e0b\u4e00\u4e2a\u6216\u4e0a\u4e00\u4e2a\u4e3b\u8981\u5355\u4f4d\u3002\u542f\u7528\u540e\uff0c\u9ed8\u8ba4\u4e3b\u8981\u5355\u4f4d\u662f\u9875\u3002\n// - limitBehavior: \u6eda\u52a8\u9650\u5236\u884c\u4e3a\npublic static func valueAligned(matching components: DateComponents,\n                                majorAlignment: MajorValueAlignment<Date>? = nil,\n                                limitBehavior: ValueAlignedLimitBehavior = .automatic\n) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior\n")),(0,i.kt)("h3",{id:"valuealignedunitmajoralignmentlimitbehavior"},"valueAligned(unit:majorAlignment:limitBehavior:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\uff0c\u8be5\u884c\u4e3a\u4e0e\u6cbf\u53ef\u6eda\u52a8\u8f74\u4ee5\u89c4\u5219\u95f4\u9694\u95f4\u9694\u7684\u503c\u5bf9\u9f50\n//\n// - unit: \u5bf9\u9f50\u5355\u5143\u3002\u5f53\u7528\u6237\u5b8c\u6210\u6eda\u52a8\u624b\u52bf\u65f6\uff0c\u56fe\u8868\u5c06\u5bf9\u9f50\u5230\u7ed9\u5b9a\u5355\u4f4d\u6216\u57df\u7684\u672b\u5c3e\u3002\n// - majorAlignment: \u4e0e\u4e3b\u8981\u4ef7\u503c\u89c2\u4fdd\u6301\u4e00\u81f4\u7684\u884c\u4e3a\u3002\u5f53\u7528\u6237\u5728\u56fe\u8868\u4e0a\u6ed1\u52a8\u65f6\uff0c\n//                   \u56fe\u8868\u5c06\u6839\u636e\u6ed1\u52a8\u65b9\u5411\u6355\u6349\u5230\u4e0b\u4e00\u4e2a\u6216\u4e0a\u4e00\u4e2a\u4e3b\u8981\u5355\u4f4d\u3002\u542f\u7528\u540e\uff0c\u9ed8\u8ba4\u4e3b\u8981\u5355\u4f4d\u662f\u9875\u3002\n// - limitBehavior: \u6eda\u52a8\u9650\u5236\u884c\u4e3a\npublic static func valueAligned<P>(unit: P,\n                                   majorAlignment: MajorValueAlignment<P>? = nil,\n                                   limitBehavior: ValueAlignedLimitBehavior = .automatic\n) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior,\n                                                 P : Plottable,\n                                                 P : Numeric\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u8be5\u65b9\u6cd5\u521b\u5efa\u4e0e\u6240\u9700\u5355\u4f4d\u5bf9\u9f50\u7684\u6eda\u52a8\u884c\u4e3a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'Chart(data) {\n    BarMark(\n        x: .value("x", $0.x),\n        y: .value("y", $0.y)\n    )\n}\n.chartScrollableAxes(.horizontal)\n.chartScrollTargetBehavior(.valueAligned(unit: 10))\n')),(0,i.kt)("p",null,"\u503c\u5bf9\u9f50\u884c\u4e3a\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4e0e\u6ed1\u52a8\u65f6\u7684\u4e3b\u8981\u5355\u4f4d\u5bf9\u9f50\u3002\u542f\u7528\u540e\uff0c\u9ed8\u8ba4\u4e3b\u8981\u5355\u4f4d\u662f\u9875\u9762\uff0c\u6ed1\u52a8\u884c\u4e3a\u7c7b\u4f3c\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},".paged")," \u884c\u4e3a\u3002"),(0,i.kt)("h3",{id:"valuealignedxmatchingymatchingxmajoralignmentymajoralignmentlimitbehavior"},"valueAligned(xMatching:yMatching:xMajorAlignment:yMajorAlignment:limitBehavior:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\uff0c\u8be5\u884c\u4e3a\u4e0e\u6cbf\u53ef\u6eda\u52a8\u8f74\u4ee5\u89c4\u5219\u95f4\u9694\u95f4\u9694\u7684\u503c\u5bf9\u9f50\n//\n// - xComponents: x \u8f74\u7684\u5bf9\u9f50\u7ec4\u4ef6\n// - yComponents: y \u8f74\u7684\u5bf9\u9f50\u5206\u91cf\n// - xMajorAlignment: \u6cbf x \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - yMajorAlignment: \u6cbf y \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - limitBehavior: \u6eda\u52a8\u9650\u5236\u884c\u4e3a\npublic static func valueAligned(xMatching xComponents: DateComponents,\n                                yMatching yComponents: DateComponents,\n                                xMajorAlignment: MajorValueAlignment<Date>? = nil,\n                                yMajorAlignment: MajorValueAlignment<Date>? = nil,\n                                limitBehavior: ValueAlignedLimitBehavior = .automatic\n) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior\n")),(0,i.kt)("h3",{id:"valuealignedxmatchingyunitxmajoralignmentymajoralignmentlimitbehavior"},"valueAligned(xMatching:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\uff0c\u8be5\u884c\u4e3a\u4e0e\u6cbf\u53ef\u6eda\u52a8\u8f74\u4ee5\u89c4\u5219\u95f4\u9694\u95f4\u9694\u7684\u503c\u5bf9\u9f50\n//\n// - xComponents: x \u8f74\u7684\u5bf9\u9f50\u7ec4\u4ef6\n// - yUnit: y \u8f74\u7684\u5bf9\u9f50\u5355\u4f4d\n// - xMajorAlignment: \u6cbf x \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - yMajorAlignment: \u6cbf y \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - limitBehavior: \u6eda\u52a8\u9650\u5236\u884c\u4e3a\npublic static func valueAligned<Y>(xMatching xComponents: DateComponents,\n                                   yUnit: Y,\n                                   xMajorAlignment: MajorValueAlignment<Date>? = nil,\n                                   yMajorAlignment: MajorValueAlignment<Y>? = nil,\n                                   limitBehavior: ValueAlignedLimitBehavior = .automatic\n) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior,\n                                                 Y : Plottable,\n                                                 Y : Numeric\n")),(0,i.kt)("h3",{id:"valuealignedxunitymatchingxmajoralignmentymajoralignmentlimitbehavior"},"valueAligned(xUnit:yMatching:xMajorAlignment:yMajorAlignment:limitBehavior:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\uff0c\u8be5\u884c\u4e3a\u4e0e\u6cbf\u53ef\u6eda\u52a8\u8f74\u4ee5\u89c4\u5219\u95f4\u9694\u95f4\u9694\u7684\u503c\u5bf9\u9f50\n//\n// - xUnit: x \u8f74\u7684\u5bf9\u9f50\u5355\u4f4d\n// - yComponents: y \u8f74\u7684\u5bf9\u9f50\u5206\u91cf\n// - xMajorAlignment: \u6cbf x \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - yMajorAlignment: \u6cbf y \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - limitBehavior: \u6eda\u52a8\u9650\u5236\u884c\u4e3a\npublic static func valueAligned<X>(xUnit: X,\n                                   yMatching yComponents: DateComponents,\n                                   xMajorAlignment: MajorValueAlignment<X>? = nil,\n                                   yMajorAlignment: MajorValueAlignment<Date>? = nil,\n                                   limitBehavior: ValueAlignedLimitBehavior = .automatic\n) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior,\n                                                 X : Plottable,\n                                                 X : Numeric\n")),(0,i.kt)("h3",{id:"valuealignedxunityunitxmajoralignmentymajoralignmentlimitbehavior"},"valueAligned(xUnit:yUnit:xMajorAlignment:yMajorAlignment:limitBehavior:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u6eda\u52a8\u76ee\u6807\u884c\u4e3a\uff0c\u8be5\u884c\u4e3a\u4e0e\u6cbf\u53ef\u6eda\u52a8\u8f74\u4ee5\u89c4\u5219\u95f4\u9694\u95f4\u9694\u7684\u503c\u5bf9\u9f50\n//\n// - xUnit: x \u8f74\u7684\u5bf9\u9f50\u5355\u4f4d\n// - yUnit: y \u8f74\u7684\u5bf9\u9f50\u5355\u4f4d\n// - xMajorAlignment: \u6cbf x \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - yMajorAlignment: \u6cbf y \u8f74\u5bf9\u9f50\u4e3b\u8981\u503c\u7684\u884c\u4e3a\n// - limitBehavior: \u6eda\u52a8\u9650\u5236\u884c\u4e3a\npublic static func valueAligned<X, Y>(xUnit: X,\n                                      yUnit: Y,\n                                      xMajorAlignment: MajorValueAlignment<X>? = nil,\n                                      yMajorAlignment: MajorValueAlignment<Y>? = nil,\n                                      limitBehavior: ValueAlignedLimitBehavior = .automatic\n) -> ValueAlignedChartScrollTargetBehavior where Self == ValueAlignedChartScrollTargetBehavior,\n                                                 X : Plottable,\n                                                 X : Numeric,\n                                                 Y : Plottable,\n                                                 Y : Numeric\n")))}p.isMDXComponent=!0}}]);