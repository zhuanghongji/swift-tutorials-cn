"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3267],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>v});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},k=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),k=a,v=c["".concat(l,".").concat(k)]||c[k]||m[k]||r;return n?i.createElement(v,s(s({ref:e},u),{},{components:n})):i.createElement(v,s({ref:e},u))}));function v(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,s=new Array(r);s[0]=k;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[c]="string"==typeof t?t:a,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},19543:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={},s="AxisMarks",o={unversionedId:"charts/axes/axis-marks/index",id:"charts/axes/axis-marks/index",title:"AxisMarks",description:"<OriginalSource",source:"@site/docs/charts/axes/axis-marks/index.mdx",sourceDirName:"charts/axes/axis-marks",slug:"/charts/axes/axis-marks/",permalink:"/swift-tutorials-cn/docs/charts/axes/axis-marks/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/axes/axis-marks/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AxisContent",permalink:"/swift-tutorials-cn/docs/charts/axes/axis-content/"},next:{title:"AnyAxisContent",permalink:"/swift-tutorials-cn/docs/charts/axes/any-axis-content/"}},l={},p=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"init(format:preset:position:values:stroke:)",id:"initformatpresetpositionvaluesstroke",level:3},{value:"init(format:preset:position:values:stroke:)",id:"initformatpresetpositionvaluesstroke-1",level:3},{value:"init(preset:position:values:content:)",id:"initpresetpositionvaluescontent",level:3},{value:"init(preset:position:values:content:)",id:"initpresetpositionvaluescontent-1",level:3},{value:"init(preset:position:values:content:)",id:"initpresetpositionvaluescontent-2",level:3},{value:"init(preset:position:values:content:)",id:"initpresetpositionvaluescontent-3",level:3},{value:"init(preset:position:values:stroke:)",id:"initpresetpositionvaluesstroke",level:3},{value:"init(preset:position:values:stroke:)",id:"initpresetpositionvaluesstroke-1",level:3}],u=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)},c=u("ToBePolishedAfterTranslation"),m=u("OriginalSource"),k={toc:p},v="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(v,(0,i.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"axismarks"},"AxisMarks"),(0,a.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(m,{title:"AxisMarks",url:"https://developer.apple.com/documentation/charts/axismarks",summary:"\u56fe\u8868\u7ed8\u5236\u7684\u4e00\u7ec4\u89c6\u89c9\u6807\u8bb0\uff0c\u7528\u4e8e\u6307\u793a\u56fe\u8868\u8f74\u7684\u7ec4\u6210",mdxType:"OriginalSource"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct AxisMarks<Content> : AxisContent where Content : AxisMark {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u5668"},"\u521d\u59cb\u5316\u5668"),(0,a.kt)("h3",{id:"initformatpresetpositionvaluesstroke"},"init(format:preset:position:values:stroke:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\u3002\u9ed8\u8ba4\u5185\u5bb9\u5c06\u7528\u4e8e\u8f74\u6807\u8bb0\n//\n// - format: \u7528\u4e8e\u6807\u7b7e\u7684\u683c\u5f0f\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - stroke: \u7528\u4e8e\u7f51\u683c\u7ebf\u548c\u523b\u5ea6\u7ebf\u7684\u7b14\u753b\npublic init<Format>(format: Format,\n                    preset: AxisMarkPreset = .automatic,\n                    position: AxisMarkPosition = .automatic,\n                    values: AxisMarkValues = .automatic,\n                    stroke: StrokeStyle? = nil\n) where Content == Never,\n        Format : FormatStyle,\n        Format.FormatInput : Plottable,\n        Format.FormatOutput == String\n")),(0,a.kt)("h3",{id:"initformatpresetpositionvaluesstroke-1"},"init(format:preset:position:values:stroke:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\u3002\u9ed8\u8ba4\u5185\u5bb9\u5c06\u7528\u4e8e\u8f74\u6807\u8bb0\n//\n// - format: \u7528\u4e8e\u6807\u7b7e\u7684\u683c\u5f0f\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - stroke: \u7528\u4e8e\u7f51\u683c\u7ebf\u548c\u523b\u5ea6\u7ebf\u7684\u7b14\u753b\npublic init<Value, Format>(format: Format,\n                           preset: AxisMarkPreset = .automatic,\n                           position: AxisMarkPosition = .automatic,\n                           values: [Value], stroke: StrokeStyle? = nil\n) where Content == Never,\n        Value : Plottable,\n        Value == Format.FormatInput,\n        Format : FormatStyle,\n        Format.FormatOutput == String\n")),(0,a.kt)("h3",{id:"initpresetpositionvaluescontent"},"init(preset:position:values:content:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\n//\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - content: \u4e00\u4e2a\u7ed3\u679c\u751f\u6210\u5668\uff0c\u8fd4\u56de\u7ed9\u5b9a\u8f74\u503c\u7684\u8f74\u6807\u8bb0\u7684\u5185\u5bb9\npublic init<Value>(preset: AxisMarkPreset = .automatic,\n                   position: AxisMarkPosition = .automatic,\n                   values: [Value],\n                   @AxisMarkBuilder content: @escaping (AxisValue) -> Content\n) where Value : Plottable\n")),(0,a.kt)("h3",{id:"initpresetpositionvaluescontent-1"},"init(preset:position:values:content:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\n//\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - content: \u8fd4\u56de\u8f74\u6807\u8bb0\u5185\u5bb9\u7684\u7ed3\u679c\u751f\u6210\u5668\npublic init<Value>(preset: AxisMarkPreset = .automatic,\n                   position: AxisMarkPosition = .automatic,\n                   values: [Value],\n                   @AxisMarkBuilder content: @escaping () -> Content\n) where Value : Plottable\n")),(0,a.kt)("h3",{id:"initpresetpositionvaluescontent-2"},"init(preset:position:values:content:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\n//\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - content: \u8fd4\u56de\u8f74\u6807\u8bb0\u5185\u5bb9\u7684\u7ed3\u679c\u751f\u6210\u5668\npublic init(preset: AxisMarkPreset = .automatic,\n            position: AxisMarkPosition = .automatic,\n            values: AxisMarkValues = .automatic,\n            @AxisMarkBuilder content: @escaping () -> Content\n)\n")),(0,a.kt)("h3",{id:"initpresetpositionvaluescontent-3"},"init(preset:position:values:content:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\n//\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - content: \u4e00\u4e2a\u7ed3\u679c\u751f\u6210\u5668\uff0c\u8fd4\u56de\u7ed9\u5b9a\u8f74\u503c\u7684\u8f74\u6807\u8bb0\u7684\u5185\u5bb9\npublic init(preset: AxisMarkPreset = .automatic,\n            position: AxisMarkPosition = .automatic,\n            values: AxisMarkValues = .automatic,\n            @AxisMarkBuilder content: @escaping (AxisValue) -> Content\n)\n")),(0,a.kt)("h3",{id:"initpresetpositionvaluesstroke"},"init(preset:position:values:stroke:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\u3002\u9ed8\u8ba4\u5185\u5bb9\u5c06\u7528\u4e8e\u8f74\u6807\u8bb0\n//\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - stroke: \u7528\u4e8e\u7f51\u683c\u7ebf\u548c\u523b\u5ea6\u7ebf\u7684\u7b14\u753b\npublic init(preset: AxisMarkPreset = .automatic,\n            position: AxisMarkPosition = .automatic,\n            values: AxisMarkValues = .automatic,\n            stroke: StrokeStyle? = nil\n) where Content == Never\n")),(0,a.kt)("h3",{id:"initpresetpositionvaluesstroke-1"},"init(preset:position:values:stroke:)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u6807\u8bb0\uff0c\u5c06\u8986\u76d6\u9ed8\u8ba4\u6807\u8bb0\u3002\u9ed8\u8ba4\u5185\u5bb9\u5c06\u7528\u4e8e\u8f74\u6807\u8bb0\n//\n// - preset: \u8f74\u6807\u8bb0\u7684\u9884\u8bbe\n// - position: \u8f74\u6807\u8bb0\u7684\u4f4d\u7f6e\n// - values: \u8f74\u6807\u8bb0\u7684\u503c\n// - stroke: \u7528\u4e8e\u7f51\u683c\u7ebf\u548c\u523b\u5ea6\u7ebf\u7684\u7b14\u753b\npublic init<Value>(preset: AxisMarkPreset = .automatic,\n                   position: AxisMarkPosition = .automatic,\n                   values: [Value],\n                   stroke: StrokeStyle? = nil\n) where Content == Never, Value : Plottable\n")))}d.isMDXComponent=!0}}]);