"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const l={},a="\u7ed3\u6784\u4f53\u548c\u7c7b",o={unversionedId:"swift/guide/structures-and-classes/index",id:"swift/guide/structures-and-classes/index",title:"\u7ed3\u6784\u4f53\u548c\u7c7b",description:"<OriginalSource",source:"@site/docs/swift/guide/structures-and-classes/index.mdx",sourceDirName:"swift/guide/structures-and-classes",slug:"/swift/guide/structures-and-classes/",permalink:"/swift-tutorials-cn/docs/swift/guide/structures-and-classes/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/structures-and-classes/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u679a\u4e3e",permalink:"/swift-tutorials-cn/docs/swift/guide/enumerations/"},next:{title:"\u5c5e\u6027",permalink:"/swift-tutorials-cn/docs/swift/guide/properties/"}},s={},u=[{value:"\u6bd4\u8f83\u7ed3\u6784\u548c\u7c7b",id:"\u6bd4\u8f83\u7ed3\u6784\u548c\u7c7b",level:2},{value:"\u5b9a\u4e49\u8bed\u6cd5",id:"\u5b9a\u4e49\u8bed\u6cd5",level:2},{value:"\u7ed3\u6784\u548c\u7c7b\u5b9e\u4f8b",id:"\u7ed3\u6784\u548c\u7c7b\u5b9e\u4f8b",level:2},{value:"\u8bbf\u95ee\u5c5e\u6027",id:"\u8bbf\u95ee\u5c5e\u6027",level:2},{value:"\u7ed3\u6784\u7c7b\u578b\u7684\u6210\u5458\u521d\u59cb\u5316\u5668",id:"\u7ed3\u6784\u7c7b\u578b\u7684\u6210\u5458\u521d\u59cb\u5316\u5668",level:2},{value:"\u7ed3\u6784\u548c\u679a\u4e3e\u662f\u503c\u7c7b\u578b",id:"\u7ed3\u6784\u548c\u679a\u4e3e\u662f\u503c\u7c7b\u578b",level:2},{value:"\u7c7b\u662f\u5f15\u7528\u7c7b\u578b",id:"\u7c7b\u662f\u5f15\u7528\u7c7b\u578b",level:2},{value:"\u8eab\u4efd\u8fd0\u8425\u5546",id:"\u8eab\u4efd\u8fd0\u8425\u5546",level:2},{value:"\u6307\u9488",id:"\u6307\u9488",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("ToBePolishedAfterTranslation"),c=d("OriginalSource"),m={toc:u},h="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(h,(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7ed3\u6784\u4f53\u548c\u7c7b"},"\u7ed3\u6784\u4f53\u548c\u7c7b"),(0,r.kt)(p,{mdxType:"ToBePolishedAfterTranslation"}),(0,r.kt)(c,{title:"Structures and Classes",url:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures",summary:"\u5bf9\u5c01\u88c5\u6570\u636e\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\u5efa\u6a21",mdxType:"OriginalSource"}),(0,r.kt)("p",null,"\u7ed3\u6784\u548c\u7c7b\u662f\u901a\u7528\u7684\u3001\u7075\u6d3b\u7684\u7ed3\u6784\uff0c\u5b83\u4eec\u6210\u4e3a\u7a0b\u5e8f\u4ee3\u7801\u7684\u6784\u5efa\u5757\u3002\u4f60\u5b9a\u4e49\u5c5e\u6027\u548c\u65b9\u6cd5\u4ee5\u4f7f\u7528\u4e0e\u5b9a\u4e49\u5e38\u91cf\u3001\u53d8\u91cf\u548c\u51fd\u6570\u76f8\u540c\u7684\u8bed\u6cd5\u5411\u4f60\u7684\u7ed3\u6784\u548c\u7c7b\u6dfb\u52a0\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u4e0e\u5176\u5b83\u7f16\u7a0b\u8bed\u8a00\u4e0d\u540c\uff0cSwift \u4e0d\u9700\u8981\u4f60\u4e3a\u81ea\u5b9a\u4e49\u7ed3\u6784\u548c\u7c7b\u521b\u5efa\u5355\u72ec\u7684\u63a5\u53e3\u548c\u5b9e\u73b0\u6587\u4ef6\u3002\u5728 Swift \u4e2d\uff0c\u4f60\u5728\u5355\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u7ed3\u6784\u6216\u7c7b\uff0c\u8be5\u7c7b\u6216\u7ed3\u6784\u7684\u5916\u90e8\u63a5\u53e3\u4f1a\u81ea\u52a8\u63d0\u4f9b\u7ed9\u5176\u5b83\u4ee3\u7801\u4f7f\u7528\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7c7b\u7684\u5b9e\u4f8b\u4f20\u7edf\u4e0a\u79f0\u4e3a\u5bf9\u8c61\u3002\u7136\u800c\uff0cSwift \u7ed3\u6784\u548c\u7c7b\u5728\u529f\u80fd\u4e0a\u6bd4\u5176\u5b83\u8bed\u8a00\u66f4\u63a5\u8fd1\uff0c\u672c\u7ae0\u7684\u5927\u90e8\u5206\u5185\u5bb9\u63cf\u8ff0\u4e86\u9002\u7528\u4e8e\u7c7b\u6216\u7ed3\u6784\u7c7b\u578b\u5b9e\u4f8b\u7684\u529f\u80fd\u3002\u56e0\u6b64\uff0c\u4f7f\u7528\u4e86\u66f4\u901a\u7528\u7684\u672f\u8bed\u5b9e\u4f8b\u3002")),(0,r.kt)("h2",{id:"\u6bd4\u8f83\u7ed3\u6784\u548c\u7c7b"},"\u6bd4\u8f83\u7ed3\u6784\u548c\u7c7b"),(0,r.kt)("p",null,"Swift \u4e2d\u7684\u7ed3\u6784\u548c\u7c7b\u6709\u5f88\u591a\u5171\u540c\u70b9\u3002\u4e24\u8005\u90fd\u53ef\u4ee5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5c5e\u6027\u4ee5\u5b58\u50a8\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u63d0\u4f9b\u529f\u80fd\u7684\u65b9\u6cd5"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e0b\u6807\u4ee5\u4f7f\u7528\u4e0b\u6807\u8bed\u6cd5\u63d0\u4f9b\u5bf9\u5176\u503c\u7684\u8bbf\u95ee"),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u521d\u59cb\u5316\u5668\u4ee5\u8bbe\u7f6e\u5176\u521d\u59cb\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55\u4ee5\u6269\u5c55\u5176\u529f\u80fd\uff0c\u4f7f\u5176\u8d85\u51fa\u9ed8\u8ba4\u5b9e\u73b0"),(0,r.kt)("li",{parentName:"ul"},"\u7b26\u5408\u534f\u8bae\u4ee5\u63d0\u4f9b\u67d0\u79cd\u6807\u51c6\u529f\u80fd")),(0,r.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5c5e\u6027\u3001\u65b9\u6cd5\u3001\u4e0b\u6807\u3001\u521d\u59cb\u5316\u3001\u6269\u5c55\u548c\u534f\u8bae\u3002"),(0,r.kt)("p",null,"\u7c7b\u5177\u6709\u7ed3\u6784\u6240\u6ca1\u6709\u7684\u989d\u5916\u529f\u80fd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u4f7f\u4e00\u4e2a\u7c7b\u80fd\u591f\u7ee7\u627f\u53e6\u4e00\u4e2a\u7c7b\u7684\u7279\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u8f6c\u6362\u4f7f\u4f60\u80fd\u591f\u5728\u8fd0\u884c\u65f6\u68c0\u67e5\u548c\u89e3\u91ca\u7c7b\u5b9e\u4f8b\u7684\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6790\u6784\u5668\u4f7f\u7c7b\u7684\u5b9e\u4f8b\u80fd\u591f\u91ca\u653e\u5b83\u5206\u914d\u7684\u4efb\u4f55\u8d44\u6e90\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f15\u7528\u8ba1\u6570\u5141\u8bb8\u5bf9\u4e00\u4e2a\u7c7b\u5b9e\u4f8b\u8fdb\u884c\u591a\u6b21\u5f15\u7528\u3002")),(0,r.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7ee7\u627f\u3001\u7c7b\u578b\u8f6c\u6362\u3001\u53d6\u6d88\u521d\u59cb\u5316\u548c\u81ea\u52a8\u5f15\u7528\u8ba1\u6570\u3002"),(0,r.kt)("p",null,"\u7c7b\u652f\u6301\u7684\u9644\u52a0\u529f\u80fd\u662f\u4ee5\u589e\u52a0\u590d\u6742\u6027\u4e3a\u4ee3\u4ef7\u7684\u3002\u4f5c\u4e3a\u4e00\u822c\u51c6\u5219\uff0c\u66f4\u559c\u6b22\u7ed3\u6784\uff0c\u56e0\u4e3a\u5b83\u4eec\u66f4\u5bb9\u6613\u63a8\u7406\uff0c\u5e76\u5728\u9002\u5f53\u6216\u5fc5\u8981\u65f6\u4f7f\u7528\u7c7b\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u5b9a\u4e49\u7684\u5927\u591a\u6570\u81ea\u5b9a\u4e49\u7c7b\u578b\u90fd\u662f\u7ed3\u6784\u548c\u679a\u4e3e\u3002\u6709\u5173\u66f4\u8be6\u7ec6\u7684\u6bd4\u8f83\uff0c\u8bf7\u53c2\u9605\u5728\u7ed3\u6784\u548c\u7c7b\u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u7c7b\u548c\u53c2\u4e0e\u8005\u5171\u4eab\u8bb8\u591a\u76f8\u540c\u7684\u7279\u5f81\u548c\u884c\u4e3a\u3002\u6709\u5173\u53c2\u4e0e\u8005\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5e76\u53d1\u6027\u3002")),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u8bed\u6cd5"},"\u5b9a\u4e49\u8bed\u6cd5"),(0,r.kt)("p",null,"\u7ed3\u6784\u548c\u7c7b\u5177\u6709\u76f8\u4f3c\u7684\u5b9a\u4e49\u8bed\u6cd5\u3002\u4f60\u4f7f\u7528\u5173\u952e\u5b57\u5f15\u5165\u7ed3\u6784 struct\uff0c\u4f7f\u7528\u5173\u952e\u5b57\u5f15\u5165\u7c7b class\u3002\u4e24\u8005\u90fd\u5c06\u6574\u4e2a\u5b9a\u4e49\u653e\u5728\u4e00\u5bf9\u5927\u62ec\u53f7\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"struct SomeStructure {\n    // structure definition goes here\n}\nclass SomeClass {\n    // class definition goes here\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6bcf\u5f53\u4f60\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684\u7ed3\u6784\u6216\u7c7b\u65f6\uff0c\u4f60\u5c31\u5b9a\u4e49\u4e86\u4e00\u4e2a\u65b0\u7684 Swift \u7c7b\u578b\u3002\u63d0\u4f9b\u7c7b\u578b\u540d\u79f0\uff08\u4f8b\u5982\u6b64\u5904\u7684\u548c\uff09\u4ee5\u5339\u914d\u6807\u51c6 Swift \u7c7b\u578b\uff08\u4f8b\u5982\u3001\u548c\uff09\u7684\u5927\u5199\u3002\u63d0\u4f9b\u5c5e\u6027\u548c\u65b9\u6cd5\u540d\u79f0\uff08\u4f8b\u5982\u548c\uff09\u4ee5\u5c06\u5b83\u4eec\u4e0e\u7c7b\u578b\u540d\u79f0\u533a\u5206\u5f00\u6765\u3002UpperCamelCaseSomeStructureSomeClassStringIntBoollowerCamelCaseframeRateincrementCount")),(0,r.kt)("p",null,"\u8fd9\u662f\u7ed3\u6784\u5b9a\u4e49\u548c\u7c7b\u5b9a\u4e49\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"struct Resolution {\n    var width = 0\n    var height = 0\n}\nclass VideoMode {\n    var resolution = Resolution()\n    var interlaced = false\n    var frameRate = 0.0\n    var name: String?\n}\n")),(0,r.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u7ed3\u6784 Resolution\uff0c\u7528\u4e8e\u63cf\u8ff0\u57fa\u4e8e\u50cf\u7d20\u7684\u663e\u793a\u5206\u8fa8\u7387\u3002\u6b64\u7ed3\u6784\u6709\u4e24\u4e2a\u5b58\u50a8\u5c5e\u6027\uff0c\u79f0\u4e3a width \u548c height\u3002\u5b58\u50a8\u5c5e\u6027\u662f\u5e38\u91cf\u6216\u53d8\u91cf\uff0c\u5b83\u4eec\u88ab\u6346\u7ed1\u8d77\u6765\u5e76\u5b58\u50a8\u4e3a\u7ed3\u6784\u6216\u7c7b\u7684\u4e00\u90e8\u5206\u3002Int \u8fd9\u4e24\u4e2a\u5c5e\u6027\u901a\u8fc7\u5c06\u5b83\u4eec\u8bbe\u7f6e\u4e3a\u521d\u59cb\u6574\u6570\u503c\u6765\u63a8\u65ad\u4e3a\u7c7b\u578b 0\u3002"),(0,r.kt)("p",null,'\u4e0a\u9762\u7684\u793a\u4f8b\u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u7c7b\uff0c\u7528\u4e8e\u63cf\u8ff0\u89c6\u9891\u663e\u793a\u7684\u7279\u5b9a\u89c6\u9891\u6a21\u5f0f\u3002\u8fd9\u4e2a\u7c7b\u6709\u56db\u4e2a\u53d8\u91cf\u5b58\u50a8\u5c5e\u6027\u3002\u7b2c\u4e00\u4e2a\u662f\u7528\u4e00\u4e2a\u65b0\u7684\u7ed3\u6784\u5b9e\u4f8b\u521d\u59cb\u5316\u7684\uff0c\u5b83\u63a8\u65ad\u51fa\u4e00\u4e2a\u5c5e\u6027\u7c7b\u578b\u3002\u5bf9\u4e8e\u5176\u5b83\u4e09\u4e2a\u5c5e\u6027\uff0c\u65b0\u5b9e\u4f8b\u5c06\u4f7f\u7528\u8bbe\u7f6e\uff08\u610f\u601d\u662f"\u975e\u9694\u884c\u626b\u63cf\u89c6\u9891"\uff09\u3001\u64ad\u653e\u5e27\u901f\u7387\u548c\u53ef\u9009\u503c. \u8be5\u5c5e\u6027\u88ab\u81ea\u52a8\u8d4b\u4e88\u9ed8\u8ba4\u503c\uff0c\u6216"\u65e0\u503c"\uff0c\u56e0\u4e3a\u5b83\u662f\u53ef\u9009\u7c7b\u578b\u3002VideoModeresolutionResolutionResolutionVideoModeinterlacedfalse0.0Stringnamenamenilname'),(0,r.kt)("h2",{id:"\u7ed3\u6784\u548c\u7c7b\u5b9e\u4f8b"},"\u7ed3\u6784\u548c\u7c7b\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u7ed3\u6784 Resolution \u5b9a\u4e49\u548c\u7c7b\u5b9a\u4e49\u53ea\u63cf\u8ff0\u4e86\u4e00\u4e2a\u6216\u5c06\u662f\u4ec0\u4e48\u6837\u5b50\u3002\u5b83\u4eec\u672c\u8eab\u5e76\u6ca1\u6709\u63cf\u8ff0\u7279\u5b9a\u7684\u5206\u8fa8\u7387\u6216\u89c6\u9891\u6a21\u5f0f\u3002\u4e3a\u6b64\uff0c\u4f60\u9700\u8981\u521b\u5efa\u7ed3\u6784\u6216\u7c7b\u7684\u5b9e\u4f8b\u3002VideoModeResolutionVideoMode"),(0,r.kt)("p",null,"\u7ed3\u6784\u548c\u7c7b\u521b\u5efa\u5b9e\u4f8b\u7684\u8bed\u6cd5\u975e\u5e38\u76f8\u4f3c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let someResolution = Resolution()\nlet someVideoMode = VideoMode()\n")),(0,r.kt)("p",null,"\u7ed3\u6784\u548c\u7c7b\u90fd\u5bf9\u65b0\u5b9e\u4f8b\u4f7f\u7528\u521d\u59cb\u5316\u8bed\u6cd5\u3002\u6700\u7b80\u5355\u7684\u521d\u59cb\u5316\u8bed\u6cd5\u5f62\u5f0f\u662f\u4f7f\u7528\u7c7b\u6216\u7ed3\u6784\u7684\u7c7b\u578b\u540d\u79f0\u540e\u8ddf\u7a7a\u62ec\u53f7\uff0c\u4f8b\u5982 Resolution()or \u3002\u8fd9\u5c06\u521b\u5efa\u7c7b\u6216\u7ed3\u6784\u7684\u65b0\u5b9e\u4f8b\uff0c\u5e76\u5c06\u6240\u6709\u5c5e\u6027\u521d\u59cb\u5316\u4e3a\u5176\u9ed8\u8ba4\u503c\u3002\u7c7b\u548c\u7ed3\u6784\u521d\u59cb\u5316\u5728\u521d\u59cb\u5316\u4e2d\u6709\u66f4\u8be6\u7ec6\u7684\u63cf\u8ff0\u3002VideoMode()"),(0,r.kt)("h2",{id:"\u8bbf\u95ee\u5c5e\u6027"},"\u8bbf\u95ee\u5c5e\u6027"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u70b9\u8bed\u6cd5\u8bbf\u95ee\u5b9e\u4f8b\u7684\u5c5e\u6027\u3002\u5728\u70b9\u8bed\u6cd5\u4e2d\uff0c\u5c5e\u6027\u540d\u79f0\u7d27\u8ddf\u5728\u5b9e\u4f8b\u540d\u79f0\u4e4b\u540e\uff0c\u7531\u53e5\u70b9 ( .) \u5206\u9694\uff0c\u6ca1\u6709\u4efb\u4f55\u7a7a\u683c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'print("The width of someResolution is \\(someResolution.width)")\n// Prints "The width of someResolution is 0"\n')),(0,r.kt)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u5f15\u7528 \u7684\u5c5e\u6027\uff0c\u5e76\u8fd4\u56de\u5176\u9ed8\u8ba4\u521d\u59cb\u503c\u3002someResolution.widthwidthsomeResolution0"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u6df1\u5165\u4e86\u89e3\u5b50\u5c5e\u6027\uff0c\u4f8b\u5982 a \u7684\u5c5e\u6027 width \u4e2d\u7684\u5c5e\u6027\uff1aresolutionVideoMode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'print("The width of someVideoMode is \\(someVideoMode.resolution.width)")\n// Prints "The width of someVideoMode is 0"\n')),(0,r.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u70b9\u8bed\u6cd5\u4e3a\u53d8\u91cf\u5c5e\u6027\u5206\u914d\u65b0\u503c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'someVideoMode.resolution.width = 1280\nprint("The width of someVideoMode is now \\(someVideoMode.resolution.width)")\n// Prints "The width of someVideoMode is now 1280"\n')),(0,r.kt)("h2",{id:"\u7ed3\u6784\u7c7b\u578b\u7684\u6210\u5458\u521d\u59cb\u5316\u5668"},"\u7ed3\u6784\u7c7b\u578b\u7684\u6210\u5458\u521d\u59cb\u5316\u5668"),(0,r.kt)("p",null,"\u6240\u6709\u7ed3\u6784\u90fd\u6709\u4e00\u4e2a\u81ea\u52a8\u751f\u6210\u7684\u6210\u5458\u521d\u59cb\u5316\u5668\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u521d\u59cb\u5316\u65b0\u7ed3\u6784\u5b9e\u4f8b\u7684\u6210\u5458\u5c5e\u6027\u3002\u65b0\u5b9e\u4f8b\u5c5e\u6027\u7684\u521d\u59cb\u503c\u53ef\u4ee5\u6309\u540d\u79f0\u4f20\u9012\u7ed9\u6210\u5458\u521d\u59cb\u5316\u5668\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let vga = Resolution(width: 640, height: 480)\n")),(0,r.kt)("p",null,"\u4e0e\u7ed3\u6784\u4e0d\u540c\uff0c\u7c7b\u5b9e\u4f8b\u4e0d\u63a5\u6536\u9ed8\u8ba4\u7684\u6210\u5458\u521d\u59cb\u5316\u5668\u3002\u521d\u59cb\u5316\u5668\u5728\u521d\u59cb\u5316\u4e2d\u6709\u66f4\u8be6\u7ec6\u7684\u63cf\u8ff0\u3002"),(0,r.kt)("h2",{id:"\u7ed3\u6784\u548c\u679a\u4e3e\u662f\u503c\u7c7b\u578b"},"\u7ed3\u6784\u548c\u679a\u4e3e\u662f\u503c\u7c7b\u578b"),(0,r.kt)("p",null,"\u503c\u7c7b\u578b\u662f\u4e00\u79cd\u7c7b\u578b\uff0c\u5f53\u5b83\u88ab\u5206\u914d\u7ed9\u4e00\u4e2a\u53d8\u91cf\u6216\u5e38\u91cf\uff0c\u6216\u8005\u5f53\u5b83\u88ab\u4f20\u9012\u7ed9\u4e00\u4e2a\u51fd\u6570\u65f6\uff0c\u5b83\u7684\u503c\u88ab\u590d\u5236\u3002"),(0,r.kt)("p",null,"\u5728\u524d\u9762\u7684\u7ae0\u8282\u4e2d\uff0c\u4f60\u5b9e\u9645\u4e0a\u5df2\u7ecf\u5e7f\u6cdb\u4f7f\u7528\u4e86\u503c\u7c7b\u578b\u3002\u4e8b\u5b9e\u4e0a\uff0cSwift \u4e2d\u7684\u6240\u6709\u57fa\u672c\u7c7b\u578b\u2014\u2014\u6574\u6570\u3001\u6d6e\u70b9\u6570\u3001\u5e03\u5c14\u503c\u3001\u5b57\u7b26\u4e32\u3001\u6570\u7ec4\u548c\u5b57\u5178\u2014\u2014\u90fd\u662f\u503c\u7c7b\u578b\uff0c\u5e76\u4e14\u5728\u5e55\u540e\u5b9e\u73b0\u4e3a\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u6240\u6709\u7ed3\u6784\u548c\u679a\u4e3e\u5728 Swift \u4e2d\u90fd\u662f\u503c\u7c7b\u578b\u3002\u8fd9\u610f\u5473\u7740\u4f60\u521b\u5efa\u7684\u4efb\u4f55\u7ed3\u6784\u548c\u679a\u4e3e\u5b9e\u4f8b\u2014\u2014\u4ee5\u53ca\u5b83\u4eec\u4f5c\u4e3a\u5c5e\u6027\u5177\u6709\u7684\u4efb\u4f55\u503c\u7c7b\u578b\u2014\u2014\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\u4f20\u9012\u65f6\u603b\u662f\u88ab\u590d\u5236\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6807\u51c6\u5e93\u5b9a\u4e49\u7684\u96c6\u5408\uff08\u5982\u6570\u7ec4\u3001\u5b57\u5178\u548c\u5b57\u7b26\u4e32\uff09\u4f7f\u7528\u4f18\u5316\u6765\u964d\u4f4e\u590d\u5236\u7684\u6027\u80fd\u6210\u672c\u3002\u8fd9\u4e9b\u96c6\u5408\u4e0d\u662f\u7acb\u5373\u5236\u4f5c\u526f\u672c\uff0c\u800c\u662f\u5171\u4eab\u539f\u59cb\u5b9e\u4f8b\u548c\u4efb\u4f55\u526f\u672c\u4e4b\u95f4\u5b58\u50a8\u5143\u7d20\u7684\u5185\u5b58\u3002\u5982\u679c\u96c6\u5408\u7684\u526f\u672c\u4e4b\u4e00\u88ab\u4fee\u6539\uff0c\u5143\u7d20\u5c06\u5728\u4fee\u6539\u4e4b\u524d\u88ab\u590d\u5236\u3002\u4f60\u5728\u4ee3\u7801\u4e2d\u770b\u5230\u7684\u884c\u4e3a\u603b\u662f\u597d\u50cf\u7acb\u5373\u53d1\u751f\u4e86\u590d\u5236\u3002")),(0,r.kt)("p",null,"\u8003\u8651\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5b83\u4f7f\u7528\u4e86 Resolution \u524d\u9762\u4f8b\u5b50\u4e2d\u7684\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let hd = Resolution(width: 1920, height: 1080)\nvar cinema = hd\n")),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u58f0\u660e\u4e00\u4e2a\u5e38\u91cf calledhd \u5e76\u5c06\u5176\u8bbe\u7f6e Resolution \u4e3a\u4f7f\u7528\u5168\u9ad8\u6e05\u89c6\u9891\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff081920 \u50cf\u7d20\u5bbd x 1080 \u50cf\u7d20\u9ad8\uff09\u521d\u59cb\u5316\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u5b83\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf calledcinema \u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a \u7684\u5f53\u524d\u503c hd\u3002\u56e0\u4e3a Resolution \u662f\u4e00\u4e2a\u7ed3\u6784\uff0c\u6240\u4ee5\u521b\u5efa\u4e86\u73b0\u6709\u5b9e\u4f8b\u7684\u526f\u672c cinema\uff0c\u5e76\u5c06\u8fd9\u4e2a\u65b0\u526f\u672c\u5206\u914d\u7ed9\u3002\u5c3d\u7ba1 hd \u548c cinema \u73b0\u5728\u5177\u6709\u76f8\u540c\u7684\u5bbd\u5ea6\u548c\u9ad8\u5ea6\uff0c\u4f46\u5b83\u4eec\u5728\u5e55\u540e\u662f\u4e24\u4e2a\u5b8c\u5168\u4e0d\u540c\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u5c06 width \u7684\u5c5e\u6027 cinema \u4fee\u6539\u4e3a\u7528\u4e8e\u6570\u5b57\u7535\u5f71\u653e\u6620\u7684\u7a0d\u5bbd\u7684 2K \u6807\u51c6\u7684\u5bbd\u5ea6\uff082048 \u50cf\u7d20\u5bbd\u548c 1080 \u50cf\u7d20\u9ad8\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"cinema.width = 2048\n")),(0,r.kt)("p",null,"\u68c0\u67e5\u7684 width \u5c5e\u6027 cinema \u8868\u660e\u5b83\u786e\u5b9e\u5df2\u66f4\u6539\u4e3a 2048\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'print("cinema is now \\(cinema.width) pixels wide")\n// Prints "cinema is now 2048 pixels wide"\n')),(0,r.kt)("p",null,"\u4f46\u662f\uff0cwidth \u539f\u59cb hd \u5b9e\u4f8b\u7684\u5c5e\u6027\u4ecd\u7136\u5177\u6709\u65e7\u503c 1920\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'print("hd is still \\(hd.width) pixels wide")\n// Prints "hd is still 1920 pixels wide"\n')),(0,r.kt)("p",null,"\u5f53 cinema \u88ab\u8d4b\u4e88 \u7684\u5f53\u524d\u503c\u65f6 hd\uff0c\u5b58\u50a8\u5728\u4e2d\u7684\u503c hd \u88ab\u590d\u5236\u5230\u65b0 cinema \u5b9e\u4f8b\u4e2d\u3002\u6700\u7ec8\u7ed3\u679c\u662f\u5305\u542b\u76f8\u540c\u6570\u503c\u7684\u4e24\u4e2a\u5b8c\u5168\u72ec\u7acb\u7684\u5b9e\u4f8b\u3002cinema \u4f46\u662f\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f\u72ec\u7acb\u7684\u5b9e\u4f8b\uff0c\u8bbe\u7f6e\u4e3a\u7684\u5bbd\u5ea6 2048 \u4e0d\u4f1a\u5f71\u54cd\u5b58\u50a8\u5728\u4e2d\u7684\u5bbd\u5ea6 hd\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(71933).Z,width:"1294",height:"460"})),(0,r.kt)("p",null,"\u76f8\u540c\u7684\u884c\u4e3a\u9002\u7528\u4e8e\u679a\u4e3e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'enum CompassPoint {\n    case north, south, east, west\n    mutating func turnNorth() {\n        self = .north\n    }\n}\nvar currentDirection = CompassPoint.west\nlet rememberedDirection = currentDirection\ncurrentDirection.turnNorth()\n\nprint("The current direction is \\(currentDirection)")\nprint("The remembered direction is \\(rememberedDirection)")\n// Prints "The current direction is north"\n// Prints "The remembered direction is west"\n')),(0,r.kt)("p",null,"\u5f53\u88ab\u8d4b\u4e88 \u7684\u503c\u65f6\uff0c\u5b83\u5b9e\u9645\u4e0a\u88ab\u8bbe\u7f6e\u4e3a\u8be5\u503c\u7684\u526f\u672c\u3002\u6b64\u540e\u66f4\u6539 \u7684\u503c\u4e0d\u4f1a\u5f71\u54cd\u5b58\u50a8\u5728 \u4e2d\u7684\u539f\u59cb\u503c\u7684\u526f\u672c\u3002rememberedDirectioncurrentDirectioncurrentDirectionrememberedDirection"),(0,r.kt)("h2",{id:"\u7c7b\u662f\u5f15\u7528\u7c7b\u578b"},"\u7c7b\u662f\u5f15\u7528\u7c7b\u578b"),(0,r.kt)("p",null,"\u4e0e\u503c\u7c7b\u578b\u4e0d\u540c\uff0c\u5f15\u7528\u7c7b\u578b\u5728\u5206\u914d\u7ed9\u53d8\u91cf\u6216\u5e38\u91cf\u6216\u4f20\u9012\u7ed9\u51fd\u6570\u65f6\u4e0d\u4f1a\u88ab\u590d\u5236\u3002\u4f7f\u7528\u5bf9\u76f8\u540c\u73b0\u6709\u5b9e\u4f8b\u7684\u5f15\u7528\u800c\u4e0d\u662f\u526f\u672c\u3002"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u4f7f\u7528\u4e0a\u9762\u5b9a\u4e49\u7684\u7c7b\uff1aVideoMode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let tenEighty = VideoMode()\ntenEighty.resolution = hd\ntenEighty.interlaced = true\ntenEighty.name = "1080i"\ntenEighty.frameRate = 25.0\n')),(0,r.kt)("p",null,'\u8be5\u793a\u4f8b\u58f0\u660e\u4e00\u4e2a\u65b0\u5e38\u91cf called \u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5f15\u7528\u8be5\u7c7b\u7684\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u3002\u89c6\u9891\u6a21\u5f0f\u5206\u914d\u4e86\u4e4b\u524d\u7684\u9ad8\u6e05\u5206\u8fa8\u7387\u526f\u672c\u3002\u5b83\u8bbe\u7f6e\u4e3a\u9694\u884c\u626b\u63cf\uff0c\u540d\u79f0\u8bbe\u7f6e\u4e3a\uff0c\u5e27\u901f\u7387\u8bbe\u7f6e\u4e3a\u6bcf\u79d2\u5e27\u6570\u3002tenEightyVideoMode19201080"1080i"25.0'),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u88ab\u5206\u914d\u7ed9\u4e00\u4e2a\u65b0\u5e38\u91cf\uff0c\u79f0\u4e3a\uff0c\u5e76\u4e14\u5e27\u901f\u7387\u88ab\u4fee\u6539\uff1atenEightyalsoTenEightyalsoTenEighty"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let alsoTenEighty = tenEighty\nalsoTenEighty.frameRate = 30.0\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u7c7b\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u5b9e\u9645\u4e0a\u90fd\u5f15\u7528\u540c\u4e00\u4e2a\u5b9e\u4f8b\u3002\u5b9e\u9645\u4e0a\uff0c\u5b83\u4eec\u53ea\u662f\u540c\u4e00\u4e2a\u5b9e\u4f8b\u7684\u4e24\u4e2a\u4e0d\u540c\u540d\u79f0\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1atenEightyalsoTenEighty VideoMode"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(36905).Z,width:"1474",height:"300"})),(0,r.kt)("p",null,"\u68c0\u67e5\u7684\u5c5e\u6027\u8868\u660e\u5b83\u6b63\u786e\u5730\u62a5\u544a\u4e86\u6765\u81ea\u5e95\u5c42\u5b9e\u4f8b\u7684\u65b0\u5e27\u7387\uff1aframeRatetenEighty30.0VideoMode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'print("The frameRate property of tenEighty is now \\(tenEighty.frameRate)")\n// Prints "The frameRate property of tenEighty is now 30.0"\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u8fd8\u5c55\u793a\u4e86\u5f15\u7528\u7c7b\u578b\u5982\u4f55\u66f4\u96be\u63a8\u7406\u3002\u5982\u679c\u548c\u5728\u4f60\u7684\u7a0b\u5e8f\u4ee3\u7801\u4e2d\u76f8\u8ddd\u751a\u8fdc\uff0c\u53ef\u80fd\u5f88\u96be\u627e\u5230\u89c6\u9891\u6a21\u5f0f\u66f4\u6539\u7684\u6240\u6709\u65b9\u5f0f\u3002\u65e0\u8bba\u4f60\u5728\u54ea\u91cc\u4f7f\u7528\uff0c\u4f60\u8fd8\u5fc5\u987b\u8003\u8651\u4f7f\u7528 \u7684\u4ee3\u7801\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002\u76f8\u6bd4\u4e4b\u4e0b\uff0c\u503c\u7c7b\u578b\u66f4\u5bb9\u6613\u63a8\u7406\uff0c\u56e0\u4e3a\u4e0e\u76f8\u540c\u503c\u4ea4\u4e92\u7684\u6240\u6709\u4ee3\u7801\u5728\u6e90\u6587\u4ef6\u4e2d\u90fd\u9760\u8fd1\u5728\u4e00\u8d77\u3002tenEightyalsoTenEightytenEightyalsoTenEighty"),(0,r.kt)("p",null,'\u8bf7\u6ce8\u610f\uff0c\u548c\u88ab\u58f0\u660e\u4e3a\u5e38\u91cf\uff0c\u800c\u4e0d\u662f\u53d8\u91cf\u3002\u4f46\u662f\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u66f4\u6539\uff0c\u56e0\u4e3a\u548c\u5e38\u91cf\u672c\u8eab\u7684\u503c\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u6539\u53d8\u3002\u5e76\u4e14\u5b83\u4eec\u81ea\u5df1\u4e0d"\u5b58\u50a8"\u5b9e\u4f8b\u2014\u2014\u76f8\u53cd\uff0c\u5b83\u4eec\u90fd\u5728\u5e55\u540e\u5f15\u7528\u5b9e\u4f8b\u3002\u6539\u53d8\u7684\u662f\u5e95\u5c42\u7684\u5c5e\u6027\uff0c\u800c\u4e0d\u662f\u5bf9\u90a3\u4e2a\u7684\u5e38\u91cf\u5f15\u7528\u7684\u503c\u3002tenEightyalsoTenEightytenEighty.frameRatealsoTenEighty.frameRatetenEightyalsoTenEightytenEightyalsoTenEightyVideoModeVideoModeframeRateVideoModeVideoMode'),(0,r.kt)("h2",{id:"\u8eab\u4efd\u8fd0\u8425\u5546"},"\u8eab\u4efd\u8fd0\u8425\u5546"),(0,r.kt)("p",null,"\u56e0\u4e3a\u7c7b\u662f\u5f15\u7528\u7c7b\u578b\uff0c\u6240\u4ee5\u591a\u4e2a\u5e38\u91cf\u548c\u53d8\u91cf\u53ef\u4ee5\u5728\u5e55\u540e\u5f15\u7528\u540c\u4e00\u4e2a\u7c7b\u7684\u5355\u4e2a\u5b9e\u4f8b\u3002\uff08\u5bf9\u4e8e\u7ed3\u6784\u548c\u679a\u4e3e\u5219\u4e0d\u540c\uff0c\u56e0\u4e3a\u5b83\u4eec\u603b\u662f\u5728\u5206\u914d\u7ed9\u5e38\u91cf\u6216\u53d8\u91cf\u6216\u4f20\u9012\u7ed9\u51fd\u6570\u65f6\u88ab\u590d\u5236\u3002\uff09"),(0,r.kt)("p",null,"\u6709\u65f6\uff0c\u627e\u51fa\u4e24\u4e2a\u5e38\u91cf\u6216\u53d8\u91cf\u662f\u5426\u5f15\u7528\u540c\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u5f88\u6709\u7528\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0cSwift \u63d0\u4f9b\u4e86\u4e24\u4e2a\u8eab\u4efd\u8fd0\u7b97\u7b26\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b49\u540c\u4e8e ( ===)"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u7b49\u540c\u4e8e ( !==)")),(0,r.kt)("p",null,"\u4f7f\u7528\u8fd9\u4e9b\u8fd0\u7b97\u7b26\u68c0\u67e5\u4e24\u4e2a\u5e38\u91cf\u6216\u53d8\u91cf\u662f\u5426\u5f15\u7528\u540c\u4e00\u4e2a\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'if tenEighty === alsoTenEighty {\n    print("tenEighty and alsoTenEighty refer to the same VideoMode instance.")\n}\n// Prints "tenEighty and alsoTenEighty refer to the same VideoMode instance."\n')),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u7b49\u540c\u4e8e\uff08\u7531\u4e09\u4e2a\u7b49\u53f7\u8868\u793a\uff0c\u6216\uff09\u4e0e\u7b49\u4e8e\uff08\u7531\u4e24\u4e2a\u7b49\u53f7\u8868\u793a\uff0c\u6216\uff09===\u5e76\u4e0d\u76f8\u540c\u3002\u7b49\u540c\u4e8e\u8868\u793a\u7c7b\u7c7b\u578b\u7684\u4e24\u4e2a\u5e38\u91cf\u6216\u53d8\u91cf\u5f15\u7528\u5b8c\u5168\u76f8\u540c\u7684\u7c7b\u5b9e\u4f8b\u3002\u7b49\u4e8e\u8868\u793a\u4e24\u4e2a\u5b9e\u4f8b\u5728\u503c\u4e0a\u88ab\u8ba4\u4e3a\u76f8\u7b49\u6216\u76f8\u7b49\uff0c\u5bf9\u4e8e equal \u7684\u67d0\u4e9b\u9002\u5f53\u542b\u4e49\uff0c\u7531\u7c7b\u578b\u7684\u8bbe\u8ba1\u8005\u5b9a\u4e49\u3002=="),(0,r.kt)("p",null,"\u5f53\u4f60\u5b9a\u4e49\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u7ed3\u6784\u548c\u7c7b\u65f6\uff0c\u4f60\u6709\u8d23\u4efb\u51b3\u5b9a\u4ec0\u4e48\u662f\u4e24\u4e2a\u5b9e\u4f8b\u76f8\u7b49\u7684\u6761\u4ef6\u3002\u7b49\u4ef7\u8fd0\u7b97\u7b26\u4e2d\u63cf\u8ff0\u4e86\u5b9a\u4e49\u4f60\u81ea\u5df1\u7684==and \u8fd0\u7b97\u7b26\u5b9e\u73b0\u7684\u8fc7\u7a0b\u3002!="),(0,r.kt)("h2",{id:"\u6307\u9488"},"\u6307\u9488"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4f7f\u7528 C\u3001C++ \u6216 Objective-C \u7684\u7ecf\u9a8c\uff0c\u4f60\u53ef\u80fd\u77e5\u9053\u8fd9\u4e9b\u8bed\u8a00\u4f7f\u7528\u6307\u9488\u6765\u5f15\u7528\u5185\u5b58\u4e2d\u7684\u5730\u5740\u3002\u5f15\u7528\u67d0\u4e2a\u5f15\u7528\u7c7b\u578b\u7684\u5b9e\u4f8b\u7684 Swift \u5e38\u91cf\u6216\u53d8\u91cf\u7c7b\u4f3c\u4e8e C \u4e2d\u7684\u6307\u9488\uff0c\u4f46\u4e0d\u662f\u6307\u5411\u5185\u5b58\u4e2d\u5730\u5740\u7684\u76f4\u63a5\u6307\u9488\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u4f60\u5199\u661f\u53f7 ( ) \u6765","*","\u6307\u793a\u4f60\u6b63\u5728\u521b\u5efa\u53c2\u8003\u3002\u76f8\u53cd\uff0c\u8fd9\u4e9b\u5f15\u7528\u7684\u5b9a\u4e49\u4e0e Swift \u4e2d\u7684\u4efb\u4f55\u5176\u5b83\u5e38\u91cf\u6216\u53d8\u91cf\u4e00\u6837\u3002\u6807\u51c6\u5e93\u63d0\u4f9b\u4e86\u6307\u9488\u548c\u7f13\u51b2\u533a\u7c7b\u578b\uff0c\u5982\u679c\u4f60\u9700\u8981\u76f4\u63a5\u4e0e\u6307\u9488\u4ea4\u4e92\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u4eec\u2014\u2014\u8bf7\u53c2\u9605\u624b\u518c\u5185\u5b58\u7ba1\u7406\u3002"))}f.isMDXComponent=!0},36905:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/shared-state-class-7e4aa5fff2d29ddd2edfbe894e5a0f6e.png"},71933:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/shared-state-struct-db7b8783210dc5a4ec503f1804362460.png"}}]);