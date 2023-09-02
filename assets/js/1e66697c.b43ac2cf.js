"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9397],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,p(p({ref:e},c),{},{components:n})):a.createElement(f,p({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,p=new Array(i);p[0]=m;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[u]="string"==typeof t?t:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54303:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},p="\u6a21\u5f0f",l={unversionedId:"swift/reference/patterns/index",id:"swift/reference/patterns/index",title:"\u6a21\u5f0f",description:"<OriginalLink",source:"@site/docs/swift/reference/patterns/index.mdx",sourceDirName:"swift/reference/patterns",slug:"/swift/reference/patterns/",permalink:"/swift-tutorials-cn/docs/swift/reference/patterns/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/reference/patterns/index.mdx",tags:[],version:"current",lastUpdatedAt:1693648798,formattedLastUpdatedAt:"2023\u5e749\u67082\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u7279\u6027",permalink:"/swift-tutorials-cn/docs/swift/reference/attributes/"},next:{title:"\u6cdb\u578b\u5f62\u53c2\u548c\u5b9e\u53c2",permalink:"/swift-tutorials-cn/docs/swift/reference/generic-parameters-and-arguments/"}},o={},s=[{value:"\u901a\u914d\u7b26\u6a21\u5f0f",id:"\u901a\u914d\u7b26\u6a21\u5f0f",level:2},{value:"\u6807\u8bc6\u7b26\u6a21\u5f0f",id:"\u6807\u8bc6\u7b26\u6a21\u5f0f",level:2},{value:"\u503c\u7ed1\u5b9a\u6a21\u5f0f",id:"\u503c\u7ed1\u5b9a\u6a21\u5f0f",level:2},{value:"\u5143\u7ec4\u6a21\u5f0f",id:"\u5143\u7ec4\u6a21\u5f0f",level:2},{value:"\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f",id:"\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f",level:2},{value:"\u53ef\u9009\u56fe\u6848",id:"\u53ef\u9009\u56fe\u6848",level:2},{value:"\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f",id:"\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f",level:2},{value:"\u8868\u60c5\u6a21\u5f0f",id:"\u8868\u60c5\u6a21\u5f0f",level:2}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)},u=c("DocCaution"),d=c("OriginalLink"),m={toc:s},f="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(f,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6a21\u5f0f"},"\u6a21\u5f0f"),(0,r.kt)(u,{mdxType:"DocCaution"}),(0,r.kt)(d,{title:"\u5339\u914d\u548c\u89e3\u6784\u503c",value:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/patterns",mdxType:"OriginalLink"}),(0,r.kt)("p",null,"\u6a21\u5f0f\u8868\u793a\u5355\u4e2a\u503c\u6216\u590d\u5408\u503c\u7684\u7ed3\u6784\u3002\u4f8b\u5982\uff0c\u5143\u7ec4\u7684\u7ed3\u6784(1, 2)\u662f\u4e24\u4e2a\u5143\u7d20\u7684\u9017\u53f7\u5206\u9694\u5217\u8868\u3002\u56e0\u4e3a\u6a21\u5f0f\u4ee3\u8868\u503c\u7684\u7ed3\u6784\u800c\u4e0d\u662f\u4efb\u4f55\u4e00\u4e2a\u7279\u5b9a\u503c\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u5c06\u5b83\u4eec\u4e0e\u5404\u79cd\u503c\u5339\u914d\u3002\u4f8b\u5982\uff0c\u6a21\u5f0f(x, y)\u5339\u914d\u5143\u7ec4(1, 2)\u548c\u4efb\u4f55\u5176\u5b83\u53cc\u5143\u7d20\u5143\u7ec4\u3002\u9664\u4e86\u5c06\u6a21\u5f0f\u4e0e\u503c\u5339\u914d\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u63d0\u53d6\u90e8\u5206\u6216\u5168\u90e8\u590d\u5408\u503c\u5e76\u5c06\u6bcf\u4e2a\u90e8\u5206\u7ed1\u5b9a\u5230\u5e38\u91cf\u6216\u53d8\u91cf\u540d\u79f0\u3002"),(0,r.kt)("p",null,"\u5728 Swift \u4e2d\uff0c\u6709\u4e24\u79cd\u57fa\u672c\u7684\u6a21\u5f0f\uff1a\u4e00\u79cd\u53ef\u4ee5\u6210\u529f\u5339\u914d\u4efb\u4f55\u7c7b\u578b\u7684\u503c\uff0c\u53e6\u4e00\u79cd\u53ef\u80fd\u5728\u8fd0\u884c\u65f6\u65e0\u6cd5\u5339\u914d\u6307\u5b9a\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u79cd\u6a21\u5f0f\u7528\u4e8e\u89e3\u6784\u7b80\u5355\u53d8\u91cf\u3001\u5e38\u91cf\u548c\u53ef\u9009\u7ed1\u5b9a\u4e2d\u7684\u503c\u3002\u8fd9\u4e9b\u5305\u62ec\u901a\u914d\u7b26\u6a21\u5f0f\u3001\u6807\u8bc6\u7b26\u6a21\u5f0f\u4ee5\u53ca\u5305\u542b\u5b83\u4eec\u7684\u4efb\u4f55\u503c\u7ed1\u5b9a\u6216\u5143\u7ec4\u6a21\u5f0f\u3002\u4f60\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u6a21\u5f0f\u6307\u5b9a\u7c7b\u578b\u6ce8\u91ca\uff0c\u4ee5\u9650\u5236\u5b83\u4eec\u4ec5\u5339\u914d\u7279\u5b9a\u7c7b\u578b\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e8c\u79cd\u6a21\u5f0f\u7528\u4e8e\u5b8c\u6574\u6a21\u5f0f\u5339\u914d\uff0c\u4f60\u5c1d\u8bd5\u5339\u914d\u7684\u503c\u5728\u8fd0\u884c\u65f6\u53ef\u80fd\u4e0d\u5b58\u5728\u3002\u8fd9\u4e9b\u5305\u62ec\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u3001\u53ef\u9009\u6a21\u5f0f\u3001\u8868\u8fbe\u5f0f\u6a21\u5f0f\u548c\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f\u3002\u4f60\u53ef\u4ee5\u5728\u8bed\u53e5\u7684 case \u6807\u7b7e switch\u3001\u8bed\u53e5 catch \u7684\u5b50\u53e5\u6216, , , or -\u8bed\u53e5 do \u7684 case \u6761\u4ef6\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u6a21\u5f0f\u3002ifwhileguardforin"),(0,r.kt)("admonition",{title:"\u6a21\u5f0f\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"pattern \u2192 wildcard-pattern type-annotation?\n\npattern \u2192 identifier-pattern type-annotation?\n\npattern \u2192 value-binding-pattern\n\npattern \u2192 tuple-pattern type-annotation?\n\npattern \u2192 enum-case-pattern\n\npattern \u2192 optional-pattern\n\npattern \u2192 type-casting-pattern\n\npattern \u2192 expression-pattern\n"))),(0,r.kt)("h2",{id:"\u901a\u914d\u7b26\u6a21\u5f0f"},"\u901a\u914d\u7b26\u6a21\u5f0f"),(0,r.kt)("p",null,"\u901a\u914d\u7b26\u6a21\u5f0f\u5339\u914d\u5e76\u5ffd\u7565\u4efb\u4f55\u503c\u5e76\u7531\u4e0b\u5212\u7ebf ( ","_",") \u7ec4\u6210\u3002\u5f53\u4f60\u4e0d\u5173\u5fc3\u8981\u5339\u914d\u7684\u503c\u65f6\uff0c\u8bf7\u4f7f\u7528\u901a\u914d\u7b26\u6a21\u5f0f\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4ee3\u7801\u904d\u5386\u5c01\u95ed\u8303\u56f4 1...3\uff0c\u5728\u5faa\u73af\u7684\u6bcf\u6b21\u8fed\u4ee3\u4e2d\u5ffd\u7565\u8303\u56f4\u7684\u5f53\u524d\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"for _ in 1...3 {\n    // Do something three times.\n}\n")),(0,r.kt)("admonition",{title:"\u901a\u914d\u7b26\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"wildcard-pattern \u2192 _\n"))),(0,r.kt)("h2",{id:"\u6807\u8bc6\u7b26\u6a21\u5f0f"},"\u6807\u8bc6\u7b26\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6807\u8bc6\u7b26\u6a21\u5f0f\u5339\u914d\u4efb\u4f55\u503c\u5e76\u5c06\u5339\u914d\u7684\u503c\u7ed1\u5b9a\u5230\u53d8\u91cf\u6216\u5e38\u91cf\u540d\u79f0\u3002\u4f8b\u5982\uff0c\u5728\u4ee5\u4e0b\u5e38\u91cf\u58f0\u660e\u4e2d\uff0c\u662f\u4e00\u4e2a\u4e0e type \u7684\u503c\u76f8\u5339\u914d\u7684\u6807\u8bc6\u7b26\u6a21\u5f0f\uff1asomeValue42Int"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let someValue = 42\n")),(0,r.kt)("p",null,"\u5f53\u5339\u914d\u6210\u529f\u65f6\uff0c\u8be5\u503c 42 \u88ab\u7ed1\u5b9a\uff08\u5206\u914d\uff09\u5230\u5e38\u91cf name \u3002someValue"),(0,r.kt)("p",null,"\u5f53\u53d8\u91cf\u6216\u5e38\u91cf\u58f0\u660e\u5de6\u4fa7\u7684\u6a21\u5f0f\u662f\u6807\u8bc6\u7b26\u6a21\u5f0f\u65f6\uff0c\u6807\u8bc6\u7b26\u6a21\u5f0f\u9690\u542b\u5730\u662f\u503c\u7ed1\u5b9a\u6a21\u5f0f\u7684\u5b50\u6a21\u5f0f\u3002"),(0,r.kt)("admonition",{title:"\u6807\u8bc6\u7b26\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"identifier-pattern \u2192 identifier\n"))),(0,r.kt)("h2",{id:"\u503c\u7ed1\u5b9a\u6a21\u5f0f"},"\u503c\u7ed1\u5b9a\u6a21\u5f0f"),(0,r.kt)("p",null,"\u503c\u7ed1\u5b9a\u6a21\u5f0f\u5c06\u5339\u914d\u7684\u503c\u7ed1\u5b9a\u5230\u53d8\u91cf\u6216\u5e38\u91cf\u540d\u79f0\u3002\u5c06\u5339\u914d\u503c\u7ed1\u5b9a\u5230\u5e38\u91cf\u540d\u79f0\u7684\u503c\u7ed1\u5b9a\u6a21\u5f0f\u4ee5 let \u5173\u952e\u5b57\u5f00\u5934\uff1b\u7ed1\u5b9a\u5230\u53d8\u91cf\u540d\u79f0\u7684\u90a3\u4e9b\u4ee5 var \u5173\u952e\u5b57\u5f00\u5934\u3002"),(0,r.kt)("p",null,"\u503c\u7ed1\u5b9a\u6a21\u5f0f\u4e2d\u7684\u6807\u8bc6\u7b26\u6a21\u5f0f\u5c06\u65b0\u7684\u547d\u540d\u53d8\u91cf\u6216\u5e38\u91cf\u7ed1\u5b9a\u5230\u5b83\u4eec\u7684\u5339\u914d\u503c\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5206\u89e3\u5143\u7ec4\u7684\u5143\u7d20\u5e76\u5c06\u6bcf\u4e2a\u5143\u7d20\u7684\u503c\u7ed1\u5b9a\u5230\u76f8\u5e94\u7684\u6807\u8bc6\u7b26\u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let point = (3, 2)\nswitch point {\n// Bind x and y to the elements of point.\ncase let (x, y):\n    print("The point is at (\\(x), \\(y)).")\n}\n// Prints "The point is at (3, 2)."\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0clet \u5206\u53d1\u5230\u5143\u7ec4\u6a21\u5f0f\u4e2d\u7684\u6bcf\u4e2a\u6807\u8bc6\u7b26\u6a21\u5f0f(x, y)\u3002\u7531\u4e8e\u6b64\u884c\u4e3a\uff0cswitch \u4e2a\u6848 ",(0,r.kt)("inlineCode",{parentName:"p"},"case let (x, y):")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"case (let x, let y):")," \u5339\u914d\u76f8\u540c\u7684\u503c\u3002"),(0,r.kt)("admonition",{title:"\u503c\u7ed1\u5b9a\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"value-binding-pattern \u2192 var pattern | let pattern")),(0,r.kt)("h2",{id:"\u5143\u7ec4\u6a21\u5f0f"},"\u5143\u7ec4\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5143\u7ec4\u6a21\u5f0f\u662f\u4ee5\u9017\u53f7\u5206\u9694\u7684\u96f6\u4e2a\u6216\u591a\u4e2a\u6a21\u5f0f\u5217\u8868\uff0c\u62ec\u5728\u62ec\u53f7\u4e2d\u3002\u5143\u7ec4\u6a21\u5f0f\u5339\u914d\u76f8\u5e94\u5143\u7ec4\u7c7b\u578b\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u7c7b\u578b\u6ce8\u91ca\u6765\u7ea6\u675f\u5143\u7ec4\u6a21\u5f0f\u4ee5\u5339\u914d\u7279\u5b9a\u79cd\u7c7b\u7684\u5143\u7ec4\u7c7b\u578b\u3002\u4f8b\u5982\uff0c(x, y): (Int, Int)\u5e38\u91cf\u58f0\u660e\u4e2d\u7684\u5143\u7ec4\u6a21\u5f0f let (x, y): (Int, Int) = (1, 2)\u4ec5\u5339\u914d\u4e24\u4e2a\u5143\u7d20\u5747\u4e3a type \u7684\u5143\u7ec4\u7c7b\u578b Int\u3002"),(0,r.kt)("p",null,"\u5f53\u5143\u7ec4\u6a21\u5f0f\u7528\u4f5c for-in \u8bed\u53e5\u6216\u53d8\u91cf\u6216\u5e38\u91cf\u58f0\u660e\u4e2d\u7684\u6a21\u5f0f\u65f6\uff0c\u5b83\u53ea\u80fd\u5305\u542b\u901a\u914d\u7b26\u6a21\u5f0f\u3001\u6807\u8bc6\u7b26\u6a21\u5f0f\u3001\u53ef\u9009\u6a21\u5f0f\u6216\u5305\u542b\u8fd9\u4e9b\u6a21\u5f0f\u7684\u5176\u5b83\u5143\u7ec4\u6a21\u5f0f\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4ee3\u7801\u65e0\u6548\uff0c\u56e0\u4e3a 0 \u5143\u7ec4\u6a21\u5f0f\u4e2d\u7684\u5143\u7d20(x, 0)\u662f\u8868\u8fbe\u5f0f\u6a21\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let points = [(0, 0), (1, 0), (1, 1), (2, 0), (2, 1)]\n// This code isn't valid.\nfor (x, 0) in points {\n    /* ... */\n}\n")),(0,r.kt)("p",null,"\u5305\u542b\u5355\u4e2a\u5143\u7d20\u7684\u5143\u7ec4\u6a21\u5f0f\u5468\u56f4\u7684\u62ec\u53f7\u65e0\u6548\u3002\u8be5\u6a21\u5f0f\u5339\u914d\u8be5\u5355\u4e2a\u5143\u7d20\u7c7b\u578b\u7684\u503c\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u7b49\u6548\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let a = 2        // a: Int = 2\nlet (a) = 2      // a: Int = 2\nlet (a): Int = 2 // a: Int = 2\n")),(0,r.kt)("admonition",{title:"\u5143\u7ec4\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"tuple-pattern \u2192 ( tuple-pattern-element-list? )\n\ntuple-pattern-element-list \u2192 tuple-pattern-element | tuple-pattern-element , tuple-pattern-element-list\n\ntuple-pattern-element \u2192 pattern | identifier : pattern\n"))),(0,r.kt)("h2",{id:"\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f"},"\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f"),(0,r.kt)("p",null,"\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u5339\u914d\u73b0\u6709\u679a\u4e3e\u7c7b\u578b\u7684\u6848\u4f8b\u3002\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u51fa\u73b0\u5728\u8bed\u53e5\u6848\u4f8b\u6807\u7b7e\u548c\u3001\u3001\u548c-\u8bed\u53e5 switch \u7684\u6848\u4f8b\u6761\u4ef6\u4e2d\u3002ifwhileguardforin"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5c1d\u8bd5\u5339\u914d\u7684\u679a\u4e3e\u6848\u4f8b\u6709\u4efb\u4f55\u5173\u8054\u503c\uff0c\u5219\u76f8\u5e94\u7684\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u5fc5\u987b\u6307\u5b9a\u4e00\u4e2a\u5143\u7ec4\u6a21\u5f0f\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5173\u8054\u503c\u90fd\u5305\u542b\u4e00\u4e2a\u5143\u7d20\u3002switch \u6709\u5173\u4f7f\u7528\u8bed\u53e5\u5339\u914d\u5305\u542b\u5173\u8054\u503c\u7684\u679a\u4e3e\u6848\u4f8b\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605\u5173\u8054\u503c\u3002"),(0,r.kt)("p",null,"\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u8fd8\u5339\u914d\u5305\u88c5\u5728\u53ef\u9009\u4e2d\u7684\u8be5\u6848\u4f8b\u7684\u503c\u3002\u8fd9\u79cd\u7b80\u5316\u7684\u8bed\u6cd5\u4f7f\u4f60\u53ef\u4ee5\u7701\u7565\u53ef\u9009\u6a21\u5f0f\u3002\u8bf7\u6ce8\u610f\uff0c\u56e0\u4e3a Optional \u662f\u4f5c\u4e3a\u679a\u4e3e\u5b9e\u73b0\u7684\uff0c.none \u5e76\u4e14.some \u53ef\u4ee5\u51fa\u73b0\u5728\u4e0e\u679a\u4e3e\u7c7b\u578b\u7684\u60c5\u51b5\u76f8\u540c\u7684\u5f00\u5173\u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'enum SomeEnum { case left, right }\nlet x: SomeEnum? = .left\nswitch x {\ncase .left:\n    print("Turn left")\ncase .right:\n    print("Turn right")\ncase nil:\n    print("Keep going straight")\n}\n// Prints "Turn left"\n')),(0,r.kt)("admonition",{title:"\u679a\u4e3e\u683c\u6a21\u5f0f\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"enum-case-pattern \u2192 type-identifier? . enum-case-name tuple-pattern?\n"))),(0,r.kt)("h2",{id:"\u53ef\u9009\u56fe\u6848"},"\u53ef\u9009\u56fe\u6848"),(0,r.kt)("p",null,"\u53ef\u9009\u6a21\u5f0f\u5339\u914d some(Wrapped)\u679a\u4e3e\u6848\u4f8b\u4e2d\u5305\u88c5\u7684\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional<Wrapped>")," \u3002\u53ef\u9009\u6a21\u5f0f\u7531\u7d27\u8ddf\u95ee\u53f7\u7684\u6807\u8bc6\u7b26\u6a21\u5f0f\u7ec4\u6210\uff0c\u5e76\u51fa\u73b0\u5728\u4e0e\u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u76f8\u540c\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u56e0\u4e3a\u53ef\u9009\u6a21\u5f0f\u662f Optional \u679a\u4e3e\u6848\u4f8b\u6a21\u5f0f\u7684\u8bed\u6cd5\u7cd6\uff0c\u6240\u4ee5\u4ee5\u4e0b\u662f\u7b49\u4ef7\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let someOptional: Int? = 42\n// Match using an enumeration case pattern.\nif case .some(let x) = someOptional {\n    print(x)\n}\n\n// Match using an optional pattern.\nif case let x? = someOptional {\n    print(x)\n}\n")),(0,r.kt)("p",null,"for \u53ef\u9009\u6a21\u5f0f\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u4fbf\u7684\u65b9\u6cd5\u6765\u8fed\u4ee3-\u8bed\u53e5\u4e2d\u7684\u53ef\u9009\u503c\u6570\u7ec4 in\uff0c\u4ec5\u5bf9\u975e\u5143\u7d20\u6267\u884c\u5faa\u73af\u4f53 nil\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let arrayOfOptionalInts: [Int?] = [nil, 2, 3, nil, 5]\n// Match only non-nil values.\nfor case let number? in arrayOfOptionalInts {\n    print("Found a \\(number)")\n}\n// Found a 2\n// Found a 3\n// Found a 5\n')),(0,r.kt)("admonition",{title:"\u53ef\u9009\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"optional-pattern \u2192 identifier-pattern ?\n"))),(0,r.kt)("h2",{id:"\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f"},"\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6709\u4e24\u79cd\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f\uff0cispattern \u548c aspattern\u3002\u8be5 is \u6a21\u5f0f\u4ec5\u51fa\u73b0\u5728 switch \u9648\u8ff0\u6848\u4f8b\u6807\u7b7e\u4e2d\u3002\u548c is \u6a21\u5f0f as \u5177\u6709\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"is <#type#>\n<#pattern#> as <#type#>\n")),(0,r.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," \u5728\u8fd0\u884c\u65f6\u7684\u7c7b\u578b\u4e0e\u6a21\u5f0f\u53f3\u4fa7\u6307\u5b9a\u7684\u7c7b\u578b\u76f8\u540c\uff0cis \u6216\u8005\u8be5\u7c7b\u578b\u7684\u5b50\u7c7b\uff0c\u5219\u8be5\u6a21\u5f0f\u5339\u914d\u8be5\u503c\u3002\u8be5 is \u6a21\u5f0f\u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," \u8fd0\u7b97\u7b26\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u6267\u884c\u7c7b\u578b\u8f6c\u6362\u4f46\u4e22\u5f03\u8fd4\u56de\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u503c as \u5728\u8fd0\u884c\u65f6\u7684\u7c7b\u578b\u4e0e\u6a21\u5f0f\u53f3\u4fa7\u6307\u5b9a\u7684\u7c7b\u578b\u76f8\u540c\uff0cas \u6216\u8005\u8be5\u7c7b\u578b\u7684\u5b50\u7c7b\uff0c\u5219\u8be5\u6a21\u5f0f\u5339\u914d\u8be5\u503c\u3002\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219\u5c06\u5339\u914d\u503c\u7684\u7c7b\u578b\u5f3a\u5236\u8f6c\u6362\u4e3a\u6a21\u5f0f\u53f3\u4fa7\u6307\u5b9a\u7684\u6a21\u5f0f as\u3002"),(0,r.kt)("p",null,"switch \u6709\u5173\u4f7f\u7528\u8bed\u53e5\u5c06\u503c is \u4e0e\u6a21\u5f0f\u5339\u914d\u7684\u793a\u4f8b as\uff0c\u8bf7\u53c2\u9605 Any \u548c AnyObject \u7684\u7c7b\u578b\u8f6c\u6362\u3002"),(0,r.kt)("admonition",{title:"\u7c7b\u578b\u8f6c\u6362\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"type-casting-pattern \u2192 is-pattern | as-pattern\n\nis-pattern \u2192 is type\n\nas-pattern \u2192 pattern as type\n"))),(0,r.kt)("h2",{id:"\u8868\u60c5\u6a21\u5f0f"},"\u8868\u60c5\u6a21\u5f0f"),(0,r.kt)("p",null,"\u8868\u8fbe\u5f0f\u6a21\u5f0f\u8868\u793a\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u8868\u8fbe\u5f0f\u6a21\u5f0f\u4ec5\u51fa\u73b0\u5728 switch \u8bed\u53e5\u6848\u4f8b\u6807\u7b7e\u4e2d\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 Swift \u6807\u51c6\u5e93\u8fd0\u7b97\u7b26\u5c06\u8868\u8fbe\u5f0f\u6a21\u5f0f\u8868\u793a\u7684\u8868\u8fbe\u5f0f\u4e0e\u8f93\u5165\u8868\u8fbe\u5f0f\u7684\u503c\u8fdb\u884c\u6bd4\u8f83~=\u3002~=\u5982\u679c\u8fd0\u7b97\u7b26\u8fd4\u56de \uff0c\u5219\u5339\u914d\u6210\u529f true\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c~=\u8fd0\u7b97\u7b26\u4f7f\u7528\u8fd0\u7b97\u7b26\u6bd4\u8f83\u76f8\u540c\u7c7b\u578b\u7684\u4e24\u4e2a\u503c==\u3002\u5b83\u8fd8\u53ef\u4ee5\u901a\u8fc7\u68c0\u67e5\u503c\u662f\u5426\u5305\u542b\u5728\u8be5\u8303\u56f4\u5185\u6765\u5339\u914d\u5177\u6709\u503c\u8303\u56f4\u7684\u503c\uff0c\u5982\u4ee5\u4e0b\u793a\u4f8b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let point = (1, 2)\nswitch point {\ncase (0, 0):\n    print("(0, 0) is at the origin.")\ncase (-2...2, -2...2):\n    print("(\\(point.0), \\(point.1)) is near the origin.")\ndefault:\n    print("The point is at (\\(point.0), \\(point.1)).")\n}\n// Prints "(1, 2) is near the origin."\n')),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u91cd\u8f7d~=\u8fd0\u7b97\u7b26\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u8868\u8fbe\u5f0f\u5339\u914d\u884c\u4e3a\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u91cd\u5199\u4e0a\u9762\u7684\u793a\u4f8b\u4ee5\u5c06 point \u8868\u8fbe\u5f0f\u4e0e\u70b9\u7684\u5b57\u7b26\u4e32\u8868\u793a\u5f62\u5f0f\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'// Overload the ~= operator to match a string with an integer.\nfunc ~= (pattern: String, value: Int) -> Bool {\n    return pattern == "\\(value)"\n}\nswitch point {\ncase ("0", "0"):\n    print("(0, 0) is at the origin.")\ndefault:\n    print("The point is at (\\(point.0), \\(point.1)).")\n}\n// Prints "The point is at (1, 2)."\n')),(0,r.kt)("admonition",{title:"\u8868\u8fbe\u5f0f\u6a21\u5f0f\u7684\u8bed\u6cd5",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"expression-pattern \u2192 expression\n"))))}k.isMDXComponent=!0}}]);