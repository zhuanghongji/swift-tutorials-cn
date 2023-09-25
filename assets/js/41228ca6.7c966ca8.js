"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),o=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(a.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(n),p=i,m=c["".concat(a,".").concat(p)]||c[p]||g[p]||s;return n?r.createElement(m,A(A({ref:t},u),{},{components:n})):r.createElement(m,A({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,A=new Array(s);A[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[c]="string"==typeof e?e:i,A[1]=l;for(var o=2;o<s;o++)A[o]=n[o];return r.createElement.apply(null,A)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},36609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>A,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=n(87462),i=(n(67294),n(3905));const s={},A="\u4e0b\u6807",l={unversionedId:"swift/guide/subscripts/index",id:"swift/guide/subscripts/index",title:"\u4e0b\u6807",description:"<OriginalSource",source:"@site/docs/swift/guide/subscripts/index.mdx",sourceDirName:"swift/guide/subscripts",slug:"/swift/guide/subscripts/",permalink:"/swift-tutorials-cn/docs/swift/guide/subscripts/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/subscripts/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u65b9\u6cd5",permalink:"/swift-tutorials-cn/docs/swift/guide/methods/"},next:{title:"\u7ee7\u627f",permalink:"/swift-tutorials-cn/docs/swift/guide/inheritance/"}},a={},o=[{value:"\u4e0b\u6807\u8bed\u6cd5",id:"\u4e0b\u6807\u8bed\u6cd5",level:2},{value:"\u4e0b\u6807\u7528\u6cd5",id:"\u4e0b\u6807\u7528\u6cd5",level:2},{value:"\u4e0b\u6807\u9009\u9879",id:"\u4e0b\u6807\u9009\u9879",level:2},{value:"\u7c7b\u578b\u4e0b\u6807",id:"\u7c7b\u578b\u4e0b\u6807",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=u("ToBePolishedAfterTranslation"),g=u("OriginalSource"),p={toc:o},m="wrapper";function f(e){let{components:t,...s}=e;return(0,i.kt)(m,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e0b\u6807"},"\u4e0b\u6807"),(0,i.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(g,{title:"Subscripts",url:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/subscripts",summary:"\u8bbf\u95ee\u96c6\u5408\u7684\u5143\u7d20",mdxType:"OriginalSource"}),(0,i.kt)("p",null,"\u7c7b\u3001\u7ed3\u6784\u548c\u679a\u4e3e\u53ef\u4ee5\u5b9a\u4e49\u4e0b\u6807\uff0c\u8fd9\u662f\u8bbf\u95ee\u96c6\u5408\u3001\u5217\u8868\u6216\u5e8f\u5217\u7684\u6210\u5458\u5143\u7d20\u7684\u5feb\u6377\u65b9\u5f0f\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u6807\u6309\u7d22\u5f15\u8bbe\u7f6e\u548c\u68c0\u7d22\u503c\uff0c\u800c\u65e0\u9700\u5355\u72ec\u7684\u8bbe\u7f6e\u548c\u68c0\u7d22\u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u4f60\u8bbf\u95ee Array \u5b9e\u4f8b\u4e2d\u7684\u5143\u7d20\u4f5c\u4e3a\u548c\u5b9e\u4f8b\u4e2d\u7684\u5143\u7d20\u4f5c\u4e3a\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"someArray[index]DictionarysomeDictionary[key]")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e3a\u5355\u4e2a\u7c7b\u578b\u5b9a\u4e49\u591a\u4e2a\u4e0b\u6807\uff0c\u5e76\u6839\u636e\u4f60\u4f20\u9012\u7ed9\u4e0b\u6807\u7684\u7d22\u5f15\u503c\u7684\u7c7b\u578b\u9009\u62e9\u8981\u4f7f\u7528\u7684\u9002\u5f53\u4e0b\u6807\u91cd\u8f7d\u3002\u4e0b\u6807\u4e0d\u9650\u4e8e\u5355\u4e2a\u7ef4\u5ea6\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u5177\u6709\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u7684\u4e0b\u6807\u4ee5\u6ee1\u8db3\u81ea\u5b9a\u4e49\u7c7b\u578b\u7684\u9700\u8981\u3002"),(0,i.kt)("h2",{id:"\u4e0b\u6807\u8bed\u6cd5"},"\u4e0b\u6807\u8bed\u6cd5"),(0,i.kt)("p",null,"\u4e0b\u6807\u4f7f\u4f60\u80fd\u591f\u901a\u8fc7\u5728\u5b9e\u4f8b\u540d\u79f0\u540e\u65b9\u62ec\u53f7\u4e2d\u5199\u5165\u4e00\u4e2a\u6216\u591a\u4e2a\u503c\u6765\u67e5\u8be2\u7c7b\u578b\u7684\u5b9e\u4f8b\u3002\u5b83\u4eec\u7684\u8bed\u6cd5\u7c7b\u4f3c\u4e8e\u5b9e\u4f8b\u65b9\u6cd5\u8bed\u6cd5\u548c\u8ba1\u7b97\u5c5e\u6027\u8bed\u6cd5\u3002\u4f60\u4f7f\u7528\u5173\u952e\u5b57\u7f16\u5199\u4e0b\u6807\u5b9a\u4e49 subscript\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u6216\u591a\u4e2a\u8f93\u5165\u53c2\u6570\u548c\u8fd4\u56de\u7c7b\u578b\uff0c\u5176\u65b9\u5f0f\u4e0e\u5b9e\u4f8b\u65b9\u6cd5\u76f8\u540c\u3002\u4e0e\u5b9e\u4f8b\u65b9\u6cd5\u4e0d\u540c\uff0c\u4e0b\u6807\u53ef\u4ee5\u662f\u53ef\u8bfb\u5199\u7684\u6216\u53ea\u8bfb\u7684\u3002\u6b64\u884c\u4e3a\u7531 getter \u548c setter \u4ee5\u4e0e\u8ba1\u7b97\u5c5e\u6027\u76f8\u540c\u7684\u65b9\u5f0f\u4f20\u8fbe\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"subscript(index: Int) -> Int {\n    get {\n        // Return an appropriate subscript value here.\n    }\n    set(newValue) {\n        // Perform a suitable setting action here.\n    }\n}\n")),(0,i.kt)("p",null,"\u7684\u7c7b\u578b\u4e0e\u4e0b\u6807\u7684\u8fd4\u56de\u503c\u76f8\u540c\u3002\u4e0e\u8ba1\u7b97\u5c5e\u6027\u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4e0d\u6307\u5b9a\u8bbe\u7f6e\u5668\u7684\u53c2\u6570\u3002\u5982\u679c\u4f60\u81ea\u5df1\u4e0d\u63d0\u4f9b\u4e00\u4e2a\u540d\u4e3a\u7684\u9ed8\u8ba4\u53c2\u6570\uff0c\u5219\u4f1a\u5c06\u5176\u63d0\u4f9b\u7ed9\u4f60\u7684\u8bbe\u7f6e\u5668\u3002newValue(newValue)newValue"),(0,i.kt)("p",null,"get \u4e0e\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027\u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5220\u9664\u5173\u952e\u5b57\u53ca\u5176\u5927\u62ec\u53f7\u6765\u7b80\u5316\u53ea\u8bfb\u4e0b\u6807\u7684\u58f0\u660e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"subscript(index: Int) -> Int {\n    // Return an appropriate subscript value here.\n}\n")),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u53ea\u8bfb\u4e0b\u6807\u5b9e\u73b0\u7684\u793a\u4f8b\uff0c\u5b83\u5b9a\u4e49\u4e86\u4e00\u4e2a\u7ed3\u6784\u6765\u8868\u793a\u4e00\u4e2a n \u6b21\u6574\u6570\u8868\uff1aTimesTable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct TimesTable {\n    let multiplier: Int\n    subscript(index: Int) -> Int {\n        return multiplier * index\n    }\n}\nlet threeTimesTable = TimesTable(multiplier: 3)\nprint("six times three is \\(threeTimesTable[6])")\n// Prints "six times three is 18"\n')),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u521b\u5efa\u4e86\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u6765\u8868\u793a\u4e09\u500d\u8868\u3002\u8fd9\u662f\u901a\u8fc7\u5c06\u503c\u4f20\u9012\u7ed9\u7ed3\u6784\u4f5c\u4e3a\u5b9e\u4f8b\u53c2\u6570\u4f7f\u7528\u7684\u503c\u6765\u6307\u793a\u7684\u3002TimesTable3initializermultiplier"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u5176\u4e0b\u6807\u6765\u67e5\u8be2\u8be5\u5b9e\u4f8b\uff0c\u5982\u5bf9 \u7684\u8c03\u7528\u6240\u793a\u3002\u8fd9\u5c06\u8bf7\u6c42\u4e09\u6b21\u8868\u4e2d\u7684\u7b2c\u516d\u4e2a\u6761\u76ee\uff0c\u8be5\u6761\u76ee\u8fd4\u56de\u503c\u6216 times \u3002threeTimesTablethreeTimesTable","[6]","1836"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"n \u6b21\u8868\u57fa\u4e8e\u56fa\u5b9a\u7684\u6570\u5b66\u89c4\u5219\u3002\u8bbe\u7f6e\u4e3a\u65b0\u503c\u4e0d\u5408\u9002\uff0c\u56e0\u6b64\u5c06\u5176\u4e0b\u6807\u5b9a\u4e49\u4e3a\u53ea\u8bfb\u4e0b\u6807\u3002threeTimesTable","[someIndex]","TimesTable")),(0,i.kt)("h2",{id:"\u4e0b\u6807\u7528\u6cd5"},"\u4e0b\u6807\u7528\u6cd5"),(0,i.kt)("p",null,"\u201c\u4e0b\u6807\u201d\u7684\u786e\u5207\u542b\u4e49\u53d6\u51b3\u4e8e\u4f7f\u7528\u5b83\u7684\u4e0a\u4e0b\u6587\u3002\u4e0b\u6807\u901a\u5e38\u7528\u4f5c\u8bbf\u95ee\u96c6\u5408\u3001\u5217\u8868\u6216\u5e8f\u5217\u4e2d\u7684\u6210\u5458\u5143\u7d20\u7684\u5feb\u6377\u65b9\u5f0f\u3002\u4f60\u53ef\u4ee5\u81ea\u7531\u5730\u4ee5\u6700\u9002\u5408\u4f60\u7684\u7279\u5b9a\u7c7b\u6216\u7ed3\u6784\u7684\u529f\u80fd\u7684\u65b9\u5f0f\u5b9e\u73b0\u4e0b\u6807\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0cSwift \u7684 Dictionary \u7c7b\u578b\u5b9e\u73b0\u4e86\u4e00\u4e2a\u4e0b\u6807\u6765\u8bbe\u7f6e\u548c\u68c0\u7d22\u5b9e\u4f8b\u4e2d\u5b58\u50a8\u7684\u503c Dictionary\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u4e0b\u6807\u62ec\u53f7\u5185\u63d0\u4f9b\u5b57\u5178\u952e\u7c7b\u578b\u7684\u952e\uff0c\u5e76\u5c06\u5b57\u5178\u503c\u7c7b\u578b\u7684\u503c\u5206\u914d\u7ed9\u4e0b\u6807\u6765\u8bbe\u7f6e\u5b57\u5178\u4e2d\u7684\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'var numberOfLegs = ["spider": 8, "ant": 6, "cat": 4]\nnumberOfLegs["bird"] = 2\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a call \u7684\u53d8\u91cf\uff0c\u5e76\u4f7f\u7528\u5305\u542b\u4e09\u4e2a\u952e\u503c\u5bf9\u7684\u5b57\u5178\u6587\u5b57\u5bf9\u5176\u8fdb\u884c\u4e86\u521d\u59cb\u5316\u3002\u5b57\u5178\u7684\u7c7b\u578b\u88ab\u63a8\u65ad\u4e3a. \u521b\u5efa\u5b57\u5178\u540e\uff0c\u672c\u793a\u4f8b\u4f7f\u7528\u4e0b\u6807\u8d4b\u503c\u5411\u5b57\u5178\u6dfb\u52a0\u4e00\u4e2a\u952e\u548c\u4e00\u4e2a\u503c\u3002numberOfLegsnumberOfLegs","[String: Int]",'String"bird"Int2'),(0,i.kt)("p",null,"\u6709\u5173 Dictionary \u4e0b\u6807\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8bbf\u95ee\u548c\u4fee\u6539\u5b57\u5178\u3002"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Swift \u7684 Dictionary \u7c7b\u578b\u5c06\u5176\u952e\u503c\u4e0b\u6807\u5b9e\u73b0\u4e3a\u63a5\u53d7\u5e76\u8fd4\u56de\u53ef\u9009\u7c7b\u578b\u7684\u4e0b\u6807\u3002\u5bf9\u4e8e\u4e0a\u9762\u7684\u5b57\u5178\uff0c\u952e\u503c\u4e0b\u6807\u63a5\u53d7\u5e76\u8fd4\u56de\u4e00\u4e2a\u7c7b\u578b\u7684\u503c\uff0c\u6216\u201c\u53ef\u9009 int\u201d\u3002\u8be5\u7c7b\u578b\u4f7f\u7528\u53ef\u9009\u7684\u4e0b\u6807\u7c7b\u578b\u6765\u6a21\u62df\u5e76\u975e\u6bcf\u4e2a\u952e\u90fd\u6709\u503c\u7684\u4e8b\u5b9e\uff0c\u5e76\u63d0\u4f9b\u4e00\u79cd\u901a\u8fc7\u4e3a\u952e\u5206\u914d\u503c\u6765\u5220\u9664\u952e\u503c\u7684\u65b9\u6cd5\u3002numberOfLegsInt?Dictionarynil")),(0,i.kt)("h2",{id:"\u4e0b\u6807\u9009\u9879"},"\u4e0b\u6807\u9009\u9879"),(0,i.kt)("p",null,"\u4e0b\u6807\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u7684\u8f93\u5165\u53c2\u6570\uff0c\u8fd9\u4e9b\u8f93\u5165\u53c2\u6570\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\u3002\u4e0b\u6807\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u4e0e\u51fd\u6570\u4e00\u6837\uff0c\u4e0b\u6807\u53ef\u4ee5\u91c7\u7528\u4e0d\u540c\u6570\u91cf\u7684\u53c2\u6570\u5e76\u4e3a\u5176\u53c2\u6570\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\u5982 Variadic Parameters \u548c Default Parameter Values \u4e2d\u6240\u8ff0\u3002\u4f46\u662f\uff0c\u4e0e\u51fd\u6570\u4e0d\u540c\uff0c\u4e0b\u6807\u4e0d\u80fd\u4f7f\u7528\u8f93\u5165\u8f93\u51fa\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u7c7b\u6216\u7ed3\u6784\u53ef\u4ee5\u6839\u636e\u9700\u8981\u63d0\u4f9b\u5c3d\u53ef\u80fd\u591a\u7684\u4e0b\u6807\u5b9e\u73b0\uff0c\u5c06\u6839\u636e\u4f7f\u7528\u4e0b\u6807\u65f6\u4e0b\u6807\u62ec\u53f7\u5185\u5305\u542b\u7684\u503c\u6216\u503c\u7684\u7c7b\u578b\u63a8\u65ad\u8981\u4f7f\u7528\u7684\u9002\u5f53\u4e0b\u6807\u3002\u8fd9\u79cd\u591a\u4e0b\u6807\u7684\u5b9a\u4e49\u79f0\u4e3a\u4e0b\u6807\u91cd\u8f7d\u3002"),(0,i.kt)("p",null,"\u867d\u7136\u4e0b\u6807\u91c7\u7528\u5355\u4e2a\u53c2\u6570\u662f\u6700\u5e38\u89c1\u7684\uff0c\u4f46\u5982\u679c\u9002\u5408\u4f60\u7684\u7c7b\u578b\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5177\u6709\u591a\u4e2a\u53c2\u6570\u7684\u4e0b\u6807\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a Matrix \u7ed3\u6784\uff0c\u5b83\u8868\u793a\u503c\u7684\u4e8c\u7ef4\u77e9\u9635 Double\u3002\u8be5 Matrix \u7ed3\u6784\u7684\u4e0b\u6807\u91c7\u7528\u4e24\u4e2a\u6574\u6570\u53c2\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'struct Matrix {\n    let rows: Int, columns: Int\n    var grid: [Double]\n    init(rows: Int, columns: Int) {\n        self.rows = rows\n        self.columns = columns\n        grid = Array(repeating: 0.0, count: rows * columns)\n    }\n    func indexIsValid(row: Int, column: Int) -> Bool {\n        return row >= 0 && row < rows && column >= 0 && column < columns\n    }\n    subscript(row: Int, column: Int) -> Double {\n        get {\n            assert(indexIsValid(row: row, column: column), "Index out of range")\n            return grid[(row * columns) + column]\n        }\n        set {\n            assert(indexIsValid(row: row, column: column), "Index out of range")\n            grid[(row * columns) + column] = newValue\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Matrix \u63d0\u4f9b\u4e00\u4e2a\u521d\u59cb\u5316\u5668\uff0c\u5b83\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff0c\u79f0\u4e3a rows \u548c columns\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u8db3\u591f\u5927\u7684\u6570\u7ec4\u6765\u5b58\u50a8 rows ","*"," columnstype \u7684\u503c Double\u3002\u77e9\u9635\u4e2d\u7684\u6bcf\u4e2a\u4f4d\u7f6e\u90fd\u88ab\u8d4b\u4e88\u521d\u59cb\u503c\u3002\u4e3a\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u6570\u7ec4\u7684\u5927\u5c0f\u548c\u521d\u59cb\u5355\u5143\u683c\u503c\u88ab\u4f20\u9012\u7ed9\u6570\u7ec4\u521d\u59cb\u5316\u5668\uff0c\u8be5\u521d\u59cb\u5316\u5668\u521b\u5efa\u5e76\u521d\u59cb\u5316\u4e00\u4e2a\u6b63\u786e\u5927\u5c0f\u7684\u65b0\u6570\u7ec4\u3002\u6b64\u521d\u59cb\u5316\u5668\u5728\u521b\u5efa\u5177\u6709\u9ed8\u8ba4\u503c\u7684\u6570\u7ec4\u4e2d\u6709\u66f4\u8be6\u7ec6\u7684\u63cf\u8ff0\u30020.00.0"),(0,i.kt)("p",null,"Matrix \u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u9002\u5f53\u7684\u884c\u6570\u548c\u5217\u6570\u4f20\u9012\u7ed9\u5176\u521d\u59cb\u5316\u5668\u6765\u6784\u9020\u4e00\u4e2a\u65b0\u5b9e\u4f8b\uff1a"),(0,i.kt)("p",null,"var matrix = Matrix(rows: 2, columns: 2)\n\u4e0a\u9762\u7684\u793a\u4f8b\u521b\u5efa\u4e86\u4e00\u4e2a Matrix \u5305\u542b\u4e24\u884c\u548c\u4e24\u5217\u7684\u65b0\u5b9e\u4f8b\u3002grid \u8fd9\u4e2a\u5b9e\u4f8b\u7684\u6570\u7ec4\u5b9e\u9645\u4e0a Matrix \u662f\u77e9\u9635\u7684\u6241\u5e73\u5316\u7248\u672c\uff0c\u4ece\u5de6\u4e0a\u5230\u53f3\u4e0b\u8bfb\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(33842).Z,width:"792",height:"582"})),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5c06\u884c\u503c\u548c\u5217\u503c\u4f20\u9012\u5230\u4e0b\u6807\u4e2d\u6765\u8bbe\u7f6e\u77e9\u9635\u4e2d\u7684\u503c\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"matrix[0, 1] = 1.5\nmatrix[1, 0] = 3.2\n")),(0,i.kt)("p",null,"\u8fd9\u4e24\u4e2a\u8bed\u53e5\u8c03\u7528\u4e0b\u6807\u7684\u8bbe\u7f6e\u5668\u5728\u77e9\u9635\u7684\u53f3\u4e0a\u89d2\u4f4d\u7f6e\uff08\u5176\u4e2d is \u548c is \uff09\u548c\u5de6\u4e0b\u89d2\u4f4d\u7f6e\uff08\u5176\u4e2d is \u548c is \uff09\u8bbe\u7f6e\u4e00\u4e2a\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"1.5row0column13.2row1column0")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5748).Z,width:"374",height:"252"})),(0,i.kt)("p",null,"\u4e0b Matrix \u6807\u7684 getter \u548c setter \u90fd\u5305\u542b\u4e00\u4e2a\u65ad\u8a00\u6765\u68c0\u67e5\u4e0b\u6807 row \u548c column \u503c\u662f\u5426\u6709\u6548\u3002\u4e3a\u4e86\u534f\u52a9\u8fd9\u4e9b\u65ad\u8a00\uff0cMatrix \u5305\u62ec\u4e00\u4e2a\u540d\u4e3a \u7684\u4fbf\u6377\u65b9\u6cd5\uff0c\u5b83\u68c0\u67e5\u8bf7\u6c42\u7684\u548c\u662f\u5426\u5728\u77e9\u9635\u7684\u8fb9\u754c\u5185\uff1aindexIsValid(row:column:)rowcolumn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"func indexIsValid(row: Int, column: Int) -> Bool {\n    return row >= 0 && row < rows && column >= 0 && column < columns\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u5c1d\u8bd5\u8bbf\u95ee\u77e9\u9635\u8fb9\u754c\u4e4b\u5916\u7684\u4e0b\u6807\uff0c\u5219\u4f1a\u89e6\u53d1\u65ad\u8a00\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"let someValue = matrix[2, 2]\n// This triggers an assert, because [2, 2] is outside of the matrix bounds.\n")),(0,i.kt)("h2",{id:"\u7c7b\u578b\u4e0b\u6807"},"\u7c7b\u578b\u4e0b\u6807"),(0,i.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0c\u5b9e\u4f8b\u4e0b\u6807\u662f\u4f60\u5728\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\u7684\u4e0b\u6807\u3002\u4f60\u8fd8\u53ef\u4ee5\u5b9a\u4e49\u5728\u7c7b\u578b\u672c\u8eab\u4e0a\u8c03\u7528\u7684\u4e0b\u6807\u3002\u8fd9\u79cd\u4e0b\u6807\u79f0\u4e3a\u7c7b\u578b\u4e0b\u6807\u3002static \u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5173\u952e\u5b57\u4e4b\u524d\u5199\u5173\u952e\u5b57\u6765\u6307\u793a\u7c7b\u578b\u4e0b\u6807 subscript\u3002\u7c7b\u53ef\u4ee5\u6539\u7528 class \u5173\u952e\u5b57\uff0c\u4ee5\u5141\u8bb8\u5b50\u7c7b\u8986\u76d6\u8d85\u7c7b\u5bf9\u8be5\u4e0b\u6807\u7684\u5b9e\u73b0\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u663e\u793a\u4e86\u5982\u4f55\u5b9a\u4e49\u548c\u8c03\u7528\u7c7b\u578b\u4e0b\u6807\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"enum Planet: Int {\n    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune\n    static subscript(n: Int) -> Planet {\n        return Planet(rawValue: n)!\n    }\n}\nlet mars = Planet[4]\nprint(mars)\n")))}f.isMDXComponent=!0},33842:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/subscript-matrix-01-f013a2eab651c65d7ced01793f642630.png"},5748:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);