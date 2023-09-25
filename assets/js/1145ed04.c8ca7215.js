"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[6417],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=r.createContext({}),d=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(a.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(t),c=s,f=m["".concat(a,".").concat(c)]||m[c]||p[c]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l[m]="string"==typeof e?e:s,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65504:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(87462),s=(t(67294),t(3905));const i={},o="\u53ef\u9009\u94fe",l={unversionedId:"swift/guide/optional-chaining/index",id:"swift/guide/optional-chaining/index",title:"\u53ef\u9009\u94fe",description:"<OriginalSource",source:"@site/docs/swift/guide/optional-chaining/index.mdx",sourceDirName:"swift/guide/optional-chaining",slug:"/swift/guide/optional-chaining/",permalink:"/swift-tutorials-cn/docs/swift/guide/optional-chaining/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/optional-chaining/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u53cd\u521d\u59cb\u5316",permalink:"/swift-tutorials-cn/docs/swift/guide/deinitialization/"},next:{title:"\u9519\u8bef\u5904\u7406",permalink:"/swift-tutorials-cn/docs/swift/guide/error-handling/"}},a={},d=[{value:"\u53ef\u9009\u94fe\u63a5\u4f5c\u4e3a\u5f3a\u5236\u5c55\u5f00\u7684\u66ff\u4ee3\u65b9\u6cd5",id:"\u53ef\u9009\u94fe\u63a5\u4f5c\u4e3a\u5f3a\u5236\u5c55\u5f00\u7684\u66ff\u4ee3\u65b9\u6cd5",level:2},{value:"\u4e3a\u53ef\u9009\u94fe\u63a5\u5b9a\u4e49\u6a21\u578b\u7c7b",id:"\u4e3a\u53ef\u9009\u94fe\u63a5\u5b9a\u4e49\u6a21\u578b\u7c7b",level:2},{value:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u5c5e\u6027",id:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u5c5e\u6027",level:2},{value:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u65b9\u6cd5",id:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u65b9\u6cd5",level:2},{value:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u4e0b\u6807",id:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u4e0b\u6807",level:2},{value:"\u8bbf\u95ee\u53ef\u9009\u7c7b\u578b\u7684\u4e0b\u6807",id:"\u8bbf\u95ee\u53ef\u9009\u7c7b\u578b\u7684\u4e0b\u6807",level:2},{value:"\u94fe\u63a5\u591a\u7ea7\u94fe\u63a5",id:"\u94fe\u63a5\u591a\u7ea7\u94fe\u63a5",level:2},{value:"\u94fe\u63a5\u5177\u6709\u53ef\u9009\u8fd4\u56de\u503c\u7684\u65b9\u6cd5",id:"\u94fe\u63a5\u5177\u6709\u53ef\u9009\u8fd4\u56de\u503c\u7684\u65b9\u6cd5",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",n)},m=u("ToBePolishedAfterTranslation"),p=u("OriginalSource"),c={toc:d},f="wrapper";function h(e){let{components:n,...t}=e;return(0,s.kt)(f,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u53ef\u9009\u94fe"},"\u53ef\u9009\u94fe"),(0,s.kt)(m,{mdxType:"ToBePolishedAfterTranslation"}),(0,s.kt)(p,{title:"Optional Chaining",url:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/optionalchaining",summary:"\u5728\u4e0d\u5c55\u5f00\u7684\u60c5\u51b5\u4e0b\u8bbf\u95ee\u53ef\u9009\u503c\u7684\u6210\u5458",mdxType:"OriginalSource"}),(0,s.kt)("p",null,"\u53ef\u9009\u94fe\u63a5\u662f\u4e00\u4e2a\u67e5\u8be2\u548c\u8c03\u7528\u5f53\u524d\u53ef\u80fd\u662f\u53ef\u9009\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u4e0b\u6807\u7684\u8fc7\u7a0b nil\u3002\u5982\u679c\u53ef\u9009\u5305\u542b\u503c\uff0c\u5219\u5c5e\u6027\u3001\u65b9\u6cd5\u6216\u4e0b\u6807\u8c03\u7528\u6210\u529f\uff1b\u5982\u679c\u53ef\u9009\u9879\u662f nil\uff0c\u5219\u5c5e\u6027\u3001\u65b9\u6cd5\u6216\u4e0b\u6807\u8c03\u7528\u8fd4\u56de nil\u3002\u591a\u4e2a\u67e5\u8be2\u53ef\u4ee5\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u5982\u679c\u94fe\u4e2d\u7684\u4efb\u4f55\u94fe\u63a5\u662f \uff0c\u5219\u6574\u4e2a\u94fe\u4f1a\u4f18\u96c5\u5730\u5931\u8d25 nil\u3002"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Swift \u4e2d\u7684\u53ef\u9009\u94fe\u63a5\u7c7b\u4f3c\u4e8e nilObjective-C \u4e2d\u7684\u6d88\u606f\u4f20\u9012\uff0c\u4f46\u5176\u65b9\u5f0f\u9002\u7528\u4e8e\u4efb\u4f55\u7c7b\u578b\uff0c\u5e76\u4e14\u53ef\u4ee5\u68c0\u67e5\u6210\u529f\u6216\u5931\u8d25\u3002")),(0,s.kt)("h2",{id:"\u53ef\u9009\u94fe\u63a5\u4f5c\u4e3a\u5f3a\u5236\u5c55\u5f00\u7684\u66ff\u4ee3\u65b9\u6cd5"},"\u53ef\u9009\u94fe\u63a5\u4f5c\u4e3a\u5f3a\u5236\u5c55\u5f00\u7684\u66ff\u4ee3\u65b9\u6cd5"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u53ef\u9009\u503c\u540e\u9762\u653e\u7f6e\u4e00\u4e2a\u95ee\u53f7 ( ?) \u6765\u6307\u5b9a\u53ef\u9009\u94fe\u63a5\uff0c\u5982\u679c\u53ef\u9009\u503c\u4e0d\u662f - \uff0c\u5219\u4f60\u5e0c\u671b\u5728\u5176\u4e0a\u8c03\u7528\u5c5e\u6027\u3001\u65b9\u6cd5\u6216\u4e0b\u6807 nil\u3002\u8fd9\u4e0e\u5728\u53ef\u9009\u503c\u4e4b\u540e\u653e\u7f6e\u611f\u53f9\u53f7 ( !) \u4ee5\u5f3a\u5236\u5c55\u5f00\u5176\u503c\u975e\u5e38\u76f8\u4f3c\u3002\u4e3b\u8981\u533a\u522b\u5728\u4e8e\uff0c\u5f53\u53ef\u9009\u503c\u4e3a \u65f6\uff0c\u53ef\u9009\u94fe\u63a5\u4f18\u96c5\u5730\u5931\u8d25 nil\uff0c\u800c\u5f53\u53ef\u9009\u503c\u4e3a \u65f6\uff0c\u5f3a\u5236\u89e3\u5305\u4f1a\u89e6\u53d1\u8fd0\u884c\u65f6\u9519\u8bef nil\u3002"),(0,s.kt)("p",null,"\u4e3a\u4e86\u53cd\u6620\u53ef\u4ee5\u5bf9\u503c\u8c03\u7528\u53ef\u9009\u94fe\u63a5\u8fd9\u4e00\u4e8b\u5b9e nil\uff0c\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u7684\u7ed3\u679c\u59cb\u7ec8\u662f\u53ef\u9009\u503c\uff0c\u5373\u4f7f\u4f60\u6b63\u5728\u67e5\u8be2\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u6216\u4e0b\u6807\u8fd4\u56de\u975e\u53ef\u9009\u503c\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u53ef\u9009\u8fd4\u56de\u503c\u6765\u68c0\u67e5\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u662f\u5426\u6210\u529f\uff08\u8fd4\u56de\u7684\u53ef\u9009\u5305\u542b\u4e00\u4e2a\u503c\uff09\uff0c\u6216\u8005\u7531\u4e8e nil \u94fe\u4e2d\u7684\u503c\u800c\u672a\u6210\u529f\uff08\u8fd4\u56de\u7684\u53ef\u9009\u503c\u4e3a nil\uff09\u3002"),(0,s.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u53ef\u9009\u94fe\u8c03\u7528\u7684\u7ed3\u679c\u4e0e\u9884\u671f\u7684\u8fd4\u56de\u503c\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\uff0c\u4f46\u5305\u88c5\u5728\u4e00\u4e2a\u53ef\u9009\u7684\u3002\u901a\u5e38\u8fd4\u56de an \u7684\u5c5e\u6027\u5728\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u65f6 Int \u5c06\u8fd4\u56de an \u3002Int?"),(0,s.kt)("p",null,"\u63a5\u4e0b\u6765\u7684\u51e0\u4e2a\u4ee3\u7801\u7247\u6bb5\u6f14\u793a\u4e86\u53ef\u9009\u94fe\u63a5\u4e0e\u5f3a\u5236\u89e3\u5305\u6709\u4f55\u4e0d\u540c\uff0c\u5e76\u4f7f\u4f60\u80fd\u591f\u68c0\u67e5\u662f\u5426\u6210\u529f\u3002"),(0,s.kt)("p",null,"\u9996\u5148\uff0c\u5b9a\u4e49\u4e86\u4e24\u4e2a\u540d\u4e3a Person \u548c\u7684\u7c7b\uff1aResidence"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"class Person {\n    var residence: Residence?\n}\n\nclass Residence {\n    var numberOfRooms = 1\n}\n")),(0,s.kt)("p",null,"Residence \u5b9e\u4f8b\u6709\u4e00\u4e2a\u540d\u4e3a \u7684 Int \u5c5e\u6027\uff0c\u9ed8\u8ba4\u503c\u4e3a\u3002\u5b9e\u4f8b\u5177\u6709 type \u7684\u53ef\u9009\u5c5e\u6027\u3002numberOfRooms1PersonresidenceResidence?"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u521b\u5efa\u4e00\u4e2a\u65b0 Person \u5b9e\u4f8b\uff0c\u5b83\u7684 residence \u5c5e\u6027\u9ed8\u8ba4\u521d\u59cb\u5316\u4e3a nil\uff0c\u56e0\u4e3a\u5b83\u662f\u53ef\u9009\u7684\u3002\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u5c5e\u6027 john \u503c\u4e3a\uff1aresidencenil"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"let john = Person()\n")),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5c1d\u8bd5\u8bbf\u95ee\u6b64\u4eba\u7684\u5c5e\u6027\uff0c\u901a\u8fc7\u5728\u5176\u540e\u653e\u7f6e\u4e00\u4e2a\u611f\u53f9\u53f7\u4ee5\u5f3a\u5236\u5c55\u5f00\u5176\u503c\uff0c\u4f60\u5c06\u89e6\u53d1\u8fd0\u884c\u65f6\u9519\u8bef\uff0c\u56e0\u4e3a\u6ca1\u6709\u8981\u5c55\u5f00\u7684\u503c\uff1anumberOfRoomsresidenceresidenceresidence"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"let roomCount = john.residence!.numberOfRooms\n// this triggers a runtime error\n")),(0,s.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u5728\u5177\u6709\u975e\u503c\u65f6\u6210\u529f\uff0c\u5e76\u5c06\u8bbe\u7f6e\u4e3a\u5305\u542b\u9002\u5f53\u623f\u95f4\u6570\u7684\u503c\u3002\u4f46\u662f\uff0c\u5982\u4e0a\u6240\u793a\uff0c\u6b64\u4ee3\u7801\u603b\u662f\u5728\u4e3a\u65f6\u89e6\u53d1\u8fd0\u884c\u65f6\u9519\u8bef\u3002john.residencenilroomCountIntresidencenil"),(0,s.kt)("p",null,"\u53ef\u9009\u94fe\u63a5\u63d0\u4f9b\u4e86\u53e6\u4e00\u79cd\u8bbf\u95ee. \u8981\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\uff0c\u8bf7\u4f7f\u7528\u95ee\u53f7\u4ee3\u66ff\u611f\u53f9\u53f7\uff1anumberOfRooms"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if let roomCount = john.residence?.numberOfRooms {\n    print("John\'s residence has \\(roomCount) room(s).")\n} else {\n    print("Unable to retrieve the number of rooms.")\n}\n// Prints "Unable to retrieve the number of rooms."\n')),(0,s.kt)("p",null,"\u8fd9\u544a\u8bc9 Swift \u5728\u53ef\u9009 residence \u5c5e\u6027\u4e0a\u201c\u94fe\u63a5\u201d\u5e76\u68c0\u7d22 if exists \u7684\u503c\u3002numberOfRoomsresidence"),(0,s.kt)("p",null,"\u56e0\u4e3a\u8bbf\u95ee\u5c1d\u8bd5\u6709\u53ef\u80fd\u5931\u8d25\uff0c\u6240\u4ee5\u53ef\u9009\u94fe\u63a5\u5c1d\u8bd5\u8fd4\u56de type \u6216\u201coptional \u201d\u7684\u503c\u3002\u5982\u4e0a\u4f8b\u6240\u793a\uff0c\u5f53\u662f \u65f6\uff0c\u8fd9\u4e2a\u53ef\u9009\u503c\u4e5f\u5c06\u662f\uff0c\u4ee5\u53cd\u6620\u65e0\u6cd5\u8bbf\u95ee \u7684\u4e8b\u5b9e\u3002\u901a\u8fc7\u53ef\u9009\u7ed1\u5b9a\u8bbf\u95ee\u53ef\u9009\u4ee5\u89e3\u5305\u6574\u6570\u5e76\u5c06\u975e\u53ef\u9009\u503c\u5206\u914d\u7ed9\u5e38\u91cf\u3002numberOfRoomsInt?IntresidencenilIntnilnumberOfRoomsIntroomCount"),(0,s.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5373\u4f7f\u662f\u975e\u53ef\u9009\u7684\uff0c\u4e5f\u662f\u5982\u6b64\u3002\u901a\u8fc7\u53ef\u9009\u94fe\u67e5\u8be2\u5b83\u7684\u4e8b\u5b9e\u610f\u5473\u7740\u5bf9 \u7684\u8c03\u7528\u5c06\u59cb\u7ec8\u8fd4\u56de an \u800c\u4e0d\u662f.numberOfRoomsIntnumberOfRoomsInt?Int"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 Residence \u5b9e\u4f8b\u5206\u914d\u7ed9\uff0c\u4f7f\u5176\u4e0d\u518d\u5177\u6709\u503c\uff1ajohn.residencenil"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"john.residence = Residence()\n")),(0,s.kt)("p",null,"john.residence \u73b0\u5728\u5305\u542b\u4e00\u4e2a\u5b9e\u9645 Residence \u5b9e\u4f8b\uff0c\u800c\u4e0d\u662f nil. \u5982\u679c\u4f60\u5c1d\u8bd5\u4f7f\u7528\u4e0e\u4ee5\u524d\u76f8\u540c\u7684\u53ef\u9009\u94fe\u63a5\u8fdb\u884c\u8bbf\u95ee\uff0c\u5b83\u73b0\u5728\u5c06\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u9ed8\u8ba4\u503c\u7684\uff1anumberOfRoomsInt?numberOfRooms1"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if let roomCount = john.residence?.numberOfRooms {\n    print("John\'s residence has \\(roomCount) room(s).")\n} else {\n    print("Unable to retrieve the number of rooms.")\n}\n// Prints "John\'s residence has 1 room(s)."\n')),(0,s.kt)("h2",{id:"\u4e3a\u53ef\u9009\u94fe\u63a5\u5b9a\u4e49\u6a21\u578b\u7c7b"},"\u4e3a\u53ef\u9009\u94fe\u63a5\u5b9a\u4e49\u6a21\u578b\u7c7b"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u53ef\u9009\u94fe\u63a5\u7528\u4e8e\u5bf9\u4e0d\u6b62\u4e00\u5c42\u6df1\u5ea6\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u4e0b\u6807\u7684\u8c03\u7528\u3002\u8fd9\u4f7f\u4f60\u80fd\u591f\u6df1\u5165\u4e86\u89e3\u76f8\u4e92\u5173\u8054\u7c7b\u578b\u7684\u590d\u6742\u6a21\u578b\u4e2d\u7684\u5b50\u5c5e\u6027\uff0c\u5e76\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b\u5b50\u5c5e\u6027\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u4e0b\u6807\u3002"),(0,s.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u7247\u6bb5\u5b9a\u4e49\u4e86\u56db\u4e2a\u6a21\u578b\u7c7b\uff0c\u7528\u4e8e\u51e0\u4e2a\u540e\u7eed\u793a\u4f8b\uff0c\u5305\u62ec\u591a\u7ea7\u53ef\u9009\u94fe\u63a5\u7684\u793a\u4f8b\u3002\u8fd9\u4e9b\u7c7b\u901a\u8fc7\u6dfb\u52a0\u4e00\u4e2a and \u7c7b\u4ee5\u53ca\u5173\u8054\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u4e0b\u6807\u6765\u6269\u5c55\u4e0a\u9762\u7684 Personand \u6a21\u578b\u3002ResidenceRoomAddress"),(0,s.kt)("p",null,"\u8be5\u7c7b Person \u7684\u5b9a\u4e49\u65b9\u5f0f\u4e0e\u4e4b\u524d\u76f8\u540c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"class Person {\n    var residence: Residence?\n}\n")),(0,s.kt)("p",null,"\u8bfe\u7a0b Residence \u6bd4\u4ee5\u524d\u66f4\u590d\u6742\u3002\u8fd9\u4e00\u6b21\uff0c\u8be5\u7c7b Residence \u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u53d8\u91cf\u5c5e\u6027 rooms\uff0c\u5b83\u4f7f\u7528\u7c7b\u578b\u4e3a \u7684\u7a7a\u6570\u7ec4\u8fdb\u884c\u521d\u59cb\u5316","[Room]","\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'class Residence {\n    var rooms: [Room] = []\n    var numberOfRooms: Int {\n        return rooms.count\n    }\n    subscript(i: Int) -> Room {\n        get {\n            return rooms[i]\n        }\n        set {\n            rooms[i] = newValue\n        }\n    }\n    func printNumberOfRooms() {\n        print("The number of rooms is \\(numberOfRooms)")\n    }\n    var address: Address?\n}\n')),(0,s.kt)("p",null,"\u56e0\u4e3a\u8fd9\u4e2a\u7248\u672c\u7684 Residence \u5b58\u50a8\u4e86\u4e00\u4e2a\u5b9e\u4f8b\u6570\u7ec4 Room\uff0c\u6240\u4ee5\u5b83\u7684\u5c5e\u6027\u88ab\u5b9e\u73b0\u4e3a\u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027\uff0c\u800c\u4e0d\u662f\u4e00\u4e2a\u5b58\u50a8\u5c5e\u6027\u3002\u8ba1\u7b97\u5c5e\u6027\u53ea\u662f\u4ece\u6570\u7ec4\u4e2d\u8fd4\u56de\u5c5e\u6027\u7684\u503c\u3002numberOfRoomsnumberOfRoomscountrooms"),(0,s.kt)("p",null,"\u4f5c\u4e3a\u8bbf\u95ee\u5176\u6570\u7ec4\u7684\u5feb\u6377\u65b9\u5f0f rooms\uff0c\u6b64\u7248\u672c Residence \u63d0\u4f9b\u4e86\u4e00\u4e2a\u8bfb\u5199\u4e0b\u6807\uff0c\u53ef\u63d0\u4f9b\u5bf9\u6570\u7ec4\u4e2d\u8bf7\u6c42\u7d22\u5f15\u5904\u623f\u95f4\u7684\u8bbf\u95ee rooms\u3002"),(0,s.kt)("p",null,"\u8fd9\u4e2a\u7248\u672c Residence \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u6cd5\u53eb\uff0c\u7b80\u5355\u7684\u6253\u5370\u51fa\u4f4f\u5904\u7684\u623f\u95f4\u6570\u3002printNumberOfRooms"),(0,s.kt)("p",null,"\u6700\u540e\uff0cResidence \u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a \u7684\u53ef\u9009\u5c5e\u6027 address\uff0c\u7c7b\u578b\u4e3a Address?\u3002\u6b64\u5c5e\u6027\u7684\u7c7b\u7c7b\u578b Address \u5b9a\u4e49\u5982\u4e0b\u3002"),(0,s.kt)("p",null,"Room \u7528\u4e8e\u6570\u7ec4\u7684\u7c7b\u662f rooms \u4e00\u4e2a\u7b80\u5355\u7684\u7c7b\uff0c\u5177\u6709\u4e00\u4e2a\u540d\u4e3a \u7684\u5c5e\u6027 name\uff0c\u4ee5\u53ca\u4e00\u4e2a\u5c06\u8be5\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u5408\u9002\u7684\u623f\u95f4\u540d\u79f0\u7684\u521d\u59cb\u5316\u5668\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"class Room {\n    let name: String\n    init(name: String) { self.name = name }\n}\n")),(0,s.kt)("p",null,"\u8be5\u6a21\u578b\u4e2d\u7684\u6700\u540e\u4e00\u4e2a\u7c7b\u79f0\u4e3a Address. \u6b64\u7c7b\u5177\u6709 type \u7684\u4e09\u4e2a\u53ef\u9009\u5c5e\u6027 String?\u3002\u524d\u4e24\u4e2a\u5c5e\u6027\u548c\u662f\u5c06\u7279\u5b9a\u5efa\u7b51\u7269\u6807\u8bc6\u4e3a\u5730\u5740\u4e00\u90e8\u5206\u7684\u66ff\u4ee3\u65b9\u6cd5\u3002\u7b2c\u4e09\u4e2a\u5c5e\u6027 \uff0c\u7528\u4e8e\u547d\u540d\u8be5\u5730\u5740\u7684\u8857\u9053\uff1abuildingNamebuildingNumberstreet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'class Address {\n    var buildingName: String?\n    var buildingNumber: String?\n    var street: String?\n    func buildingIdentifier() -> String? {\n        if let buildingNumber = buildingNumber, let street = street {\n          return "\\(buildingNumber) \\(street)"\n        } else if buildingName != nil {\n          return buildingName\n        } else {\n          return nil\n        }\n    }\n}\n')),(0,s.kt)("p",null,"\u8be5\u7c7b Address \u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\u4e3a\u3002\u6b64\u65b9\u6cd5\u68c0\u67e5\u5730\u5740\u7684\u5c5e\u6027\u5e76\u8fd4\u56de\u5b83\u662f\u5426\u6709\u503c\uff0c\u6216\u8005\u5982\u679c\u4e24\u8005\u90fd\u6709\u503c\u5219\u8fde\u63a5\u5728\u4e00\u8d77\uff0c\u5426\u5219\u8fd4\u56de\u3002buildingIdentifier()String?buildingNamebuildingNumberstreetnil"),(0,s.kt)("h2",{id:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u5c5e\u6027"},"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u5c5e\u6027"),(0,s.kt)("p",null,"\u5982\u53ef\u9009\u94fe\u63a5\u4f5c\u4e3a\u5f3a\u5236\u5c55\u5f00\u7684\u66ff\u4ee3\u65b9\u6848\u4e2d\u6240\u793a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\u6765\u8bbf\u95ee\u53ef\u9009\u503c\u4e0a\u7684\u5c5e\u6027\uff0c\u5e76\u68c0\u67e5\u8be5\u5c5e\u6027\u8bbf\u95ee\u662f\u5426\u6210\u529f\u3002"),(0,s.kt)("p",null,"\u4f7f\u7528\u4e0a\u9762\u5b9a\u4e49\u7684\u7c7b\u521b\u5efa\u4e00\u4e2a\u65b0 Person \u5b9e\u4f8b\uff0c\u5e76\u5c1d\u8bd5\u50cf\u4ee5\u524d\u4e00\u6837\u8bbf\u95ee\u5b83\u7684\u5c5e\u6027\uff1anumberOfRooms"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'let john = Person()\nif let roomCount = john.residence?.numberOfRooms {\n    print("John\'s residence has \\(roomCount) room(s).")\n} else {\n    print("Unable to retrieve the number of rooms.")\n}\n// Prints "Unable to retrieve the number of rooms."\n')),(0,s.kt)("p",null,"\u56e0\u4e3a\u662f\uff0c\u8fd9\u4e2a\u53ef\u9009\u7684\u94fe\u63a5\u8c03\u7528\u4ee5\u4e0e\u4ee5\u524d\u76f8\u540c\u7684\u65b9\u5f0f\u5931\u8d25\u3002john.residencenil"),(0,s.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbe\u7f6e\u5c5e\u6027\u7684\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'let someAddress = Address()\nsomeAddress.buildingNumber = "29"\nsomeAddress.street = "Acacia Road"\njohn.residence?.address = someAddress\n')),(0,s.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5c1d\u8bd5\u8bbe\u7f6e address \u7684\u5c5e\u6027\u5c06\u5931\u8d25\uff0c\u56e0\u4e3a\u5f53\u524d\u662f\u3002john.residencejohn.residencenil"),(0,s.kt)("p",null,"\u8d4b\u503c\u662f\u53ef\u9009\u94fe\u7684\u4e00\u90e8\u5206\uff0c\u8fd9\u610f\u5473\u7740\u8fd0\u7b97\u7b26\u53f3\u4fa7\u7684\u4ee3\u7801\u90fd\u4e0d\u4f1a=\u88ab\u6c42\u503c\u3002\u5728\u524d\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u5f88\u96be\u770b\u51fa\u4ece\u672a\u8ba1\u7b97\u8fc7\uff0c\u56e0\u4e3a\u8bbf\u95ee\u5e38\u91cf\u6ca1\u6709\u4efb\u4f55\u526f\u4f5c\u7528\u3002\u4e0b\u9762\u7684\u6e05\u5355\u6267\u884c\u76f8\u540c\u7684\u5206\u914d\uff0c\u4f46\u5b83\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\u6765\u521b\u5efa\u5730\u5740\u3002\u8be5\u51fd\u6570\u5728\u8fd4\u56de\u503c\u4e4b\u524d\u6253\u5370\u201cFunction was called\u201d\uff0c\u8fd9\u8ba9\u4f60\u53ef\u4ee5\u67e5\u770b\u8fd0\u7b97\u7b26\u7684\u53f3\u4fa7\u662f\u5426\u5df2\u6c42\u503c\u3002someAddress="),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'func createAddress() -> Address {\n    print("Function was called.")\n\n    let someAddress = Address()\n    someAddress.buildingNumber = "29"\n    someAddress.street = "Acacia Road"\n\n    return someAddress\n}\njohn.residence?.address = createAddress()\n')),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u770b\u51fa\u8be5\u51fd\u6570\u672a\u88ab\u8c03\u7528\uff0c\u56e0\u4e3a\u672a\u6253\u5370\u4efb\u4f55\u5185\u5bb9\u3002createAddress()"),(0,s.kt)("h2",{id:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u65b9\u6cd5"},"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u65b9\u6cd5"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\u5728\u53ef\u9009\u503c\u4e0a\u8c03\u7528\u65b9\u6cd5\uff0c\u5e76\u68c0\u67e5\u8be5\u65b9\u6cd5\u8c03\u7528\u662f\u5426\u6210\u529f\u3002\u5373\u4f7f\u8be5\u65b9\u6cd5\u6ca1\u6709\u5b9a\u4e49\u8fd4\u56de\u503c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"),(0,s.kt)("p",null,"\u7c7b\u4e0a\u7684\u65b9\u6cd5\u6253\u5370\u7684\u5f53\u524d\u503c\u3002\u8be5\u65b9\u6cd5\u7684\u5916\u89c2\u5982\u4e0b\uff1aprintNumberOfRooms()ResidencenumberOfRooms"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'func printNumberOfRooms() {\n    print("The number of rooms is \\(numberOfRooms)")\n}\n')),(0,s.kt)("p",null,"\u6b64\u65b9\u6cd5\u4e0d\u6307\u5b9a\u8fd4\u56de\u7c7b\u578b\u3002\u4f46\u662f\uff0c\u6ca1\u6709\u8fd4\u56de\u7c7b\u578b\u7684\u51fd\u6570\u548c\u65b9\u6cd5\u5177\u6709\u9690\u5f0f\u8fd4\u56de\u7c7b\u578b Void\uff0c\u5982\u65e0\u8fd4\u56de\u503c\u51fd\u6570\u4e2d\u6240\u8ff0\u3002\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u8fd4\u56de\u4e00\u4e2a\u503c()\uff0c\u6216\u8005\u4e00\u4e2a\u7a7a\u5143\u7ec4\u3002"),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\u5bf9\u53ef\u9009\u503c\u8c03\u7528\u6b64\u65b9\u6cd5\uff0c\u5219\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\u5c06\u4e3a Void?\uff0c\u800c\u4e0d\u662f Void\uff0c\u56e0\u4e3a\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8c03\u7528\u65f6\uff0c\u8fd4\u56de\u503c\u59cb\u7ec8\u4e3a\u53ef\u9009\u7c7b\u578b\u3002\u8fd9\u4f7f\u4f60\u80fd\u591f\u4f7f\u7528 if \u8bed\u53e5\u6765\u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u5373\u4f7f\u8be5\u65b9\u6cd5\u672c\u8eab\u6ca1\u6709\u5b9a\u4e49\u8fd4\u56de\u503c\u3002\u6bd4\u8f83\u8c03\u7528\u7684\u8fd4\u56de\u503c\u4ee5\u67e5\u770b\u65b9\u6cd5\u8c03\u7528\u662f\u5426\u6210\u529f\uff1aprintNumberOfRooms()printNumberOfRoomsnil"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if john.residence?.printNumberOfRooms() != nil {\n    print("It was possible to print the number of rooms.")\n} else {\n    print("It was not possible to print the number of rooms.")\n}\n// Prints "It was not possible to print the number of rooms."\n')),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u5c1d\u8bd5\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbe\u7f6e\u5c5e\u6027\uff0c\u60c5\u51b5\u4e5f\u662f\u5982\u6b64\u3002\u4e0a\u9762\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u5c5e\u6027\u4e2d\u7684\u793a\u4f8b\u5c1d\u8bd5\u4e3a \u8bbe\u7f6e\u4e00\u4e2a address \u503c\uff0c\u5373\u4f7f\u8be5\u5c5e\u6027\u662f\u3002\u4efb\u4f55\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbe\u7f6e\u5c5e\u6027\u7684\u5c1d\u8bd5\u90fd\u4f1a\u8fd4\u56de type \u7684\u503c\uff0c\u8fd9\u4f7f\u4f60\u80fd\u591f\u8fdb\u884c\u6bd4\u8f83\u4ee5\u67e5\u770b\u5c5e\u6027\u662f\u5426\u5df2\u6210\u529f\u8bbe\u7f6e\uff1ajohn.residenceresidencenilVoid?nil"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if (john.residence?.address = someAddress) != nil {\n    print("It was possible to set the address.")\n} else {\n    print("It was not possible to set the address.")\n}\n// Prints "It was not possible to set the address."\n')),(0,s.kt)("h2",{id:"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u4e0b\u6807"},"\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u4e0b\u6807"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\u5c1d\u8bd5\u4ece\u53ef\u9009\u503c\u7684\u4e0b\u6807\u68c0\u7d22\u548c\u8bbe\u7f6e\u503c\uff0c\u5e76\u68c0\u67e5\u8be5\u4e0b\u6807\u8c03\u7528\u662f\u5426\u6210\u529f\u3002"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5f53\u4f60\u901a\u8fc7\u53ef\u9009\u94fe\u8bbf\u95ee\u53ef\u9009\u503c\u7684\u4e0b\u6807\u65f6\uff0c\u4f60\u5c06\u95ee\u53f7\u653e\u5728\u4e0b\u6807\u7684\u62ec\u53f7\u4e4b\u524d\uff0c\u800c\u4e0d\u662f\u4e4b\u540e\u3002\u53ef\u9009\u7684\u94fe\u63a5\u95ee\u53f7\u59cb\u7ec8\u7d27\u8ddf\u5728\u53ef\u9009\u7684\u8868\u8fbe\u5f0f\u90e8\u5206\u4e4b\u540e\u3002")),(0,s.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5c1d\u8bd5\u4f7f\u7528\u7c7b\u4e0a\u5b9a\u4e49\u7684\u4e0b\u6807\u68c0\u7d22\u5c5e\u6027 rooms \u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u623f\u95f4\u7684\u540d\u79f0\u3002\u56e0\u4e3a\u5f53\u524d\u662f\uff0c\u4e0b\u6807\u8c03\u7528\u5931\u8d25\uff1ajohn.residenceResidencejohn.residencenil"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if let firstRoomName = john.residence?[0].name {\n    print("The first room name is \\(firstRoomName).")\n} else {\n    print("Unable to retrieve the first room name.")\n}\n// Prints "Unable to retrieve the first room name."\n')),(0,s.kt)("p",null,"\u6b64\u4e0b\u6807\u8c03\u7528\u4e2d\u7684\u53ef\u9009\u94fe\u63a5\u95ee\u53f7\u7d27\u8ddf\u5728 \u4e4b\u540e\uff0c\u4e0b\u6807\u62ec\u53f7\u4e4b\u524d\uff0c\u56e0\u4e3a\u662f\u5c1d\u8bd5\u8fdb\u884c\u53ef\u9009\u94fe\u63a5\u7684\u53ef\u9009\u503c\u3002john.residencejohn.residence"),(0,s.kt)("p",null,"\u540c\u6837\uff0c\u4f60\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u5e26\u6709\u53ef\u9009\u94fe\u63a5\u7684\u4e0b\u6807\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'john.residence?[0] = Room(name: "Bathroom")\n')),(0,s.kt)("p",null,"\u6b64\u4e0b\u6807\u8bbe\u7f6e\u5c1d\u8bd5\u4e5f\u5931\u8d25\uff0c\u56e0\u4e3a residence \u5f53\u524d\u662f nil."),(0,s.kt)("p",null,"\u5982\u679c\u4f60\u521b\u5efa\u4e00\u4e2a\u5b9e\u9645 Residence \u5b9e\u4f8b\u5e76\u5c06\u5176\u5206\u914d\u7ed9\uff0c\u5176\u6570\u7ec4\u4e2d\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u5b9e\u4f8b\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u4e0b\u6807\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u6570\u7ec4\u4e2d\u7684\u5b9e\u9645\u9879\uff1ajohn.residenceRoomroomsResidencerooms"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'let johnsHouse = Residence()\njohnsHouse.rooms.append(Room(name: "Living Room"))\njohnsHouse.rooms.append(Room(name: "Kitchen"))\njohn.residence = johnsHouse\n\nif let firstRoomName = john.residence?[0].name {\n    print("The first room name is \\(firstRoomName).")\n} else {\n    print("Unable to retrieve the first room name.")\n}\n// Prints "The first room name is Living Room."\n')),(0,s.kt)("h2",{id:"\u8bbf\u95ee\u53ef\u9009\u7c7b\u578b\u7684\u4e0b\u6807"},"\u8bbf\u95ee\u53ef\u9009\u7c7b\u578b\u7684\u4e0b\u6807"),(0,s.kt)("p",null,"\u5982\u679c\u4e0b\u6807\u8fd4\u56de\u53ef\u9009\u7c7b\u578b\u7684\u503c\u2014\u2014\u4f8b\u5982 Swift \u7c7b\u578b\u7684\u952e\u4e0b\u6807\u2014\u2014\u5728\u4e0b\u6807\u7684\u53f3\u62ec\u53f7\u540e Dictionary \u653e\u7f6e\u4e00\u4e2a\u95ee\u53f7\u4ee5\u94fe\u63a5\u5176\u53ef\u9009\u8fd4\u56de\u503c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'var testScores = ["Dave": [86, 82, 84], "Bev": [79, 94, 81]]\ntestScores["Dave"]?[0] = 91\ntestScores["Bev"]?[0] += 1\ntestScores["Brian"]?[0] = 72\n// the "Dave" array is now [91, 82, 84] and the "Bev" array is now [80, 94, 81]\n')),(0,s.kt)("p",null,'\u4e0a\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u5b57\u5178\uff0c\u5176\u4e2d\u5305\u542b\u4e24\u4e2a\u5c06\u952e\u6620\u5c04\u5230\u503c\u6570\u7ec4\u7684\u952e\u503c\u5bf9\u3002\u8be5\u793a\u4f8b\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\u5c06\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u9879\u8bbe\u7f6e\u4e3a\uff1b\u5c06\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u9879\u9012\u589e\uff1b\u5e76\u5c1d\u8bd5\u4e3a \u7684\u952e\u8bbe\u7f6e\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u9879\u3002\u524d\u4e24\u4e2a\u8c03\u7528\u6210\u529f\uff0c\u56e0\u4e3a\u5b57\u5178\u5305\u542b\u548c \u7684\u952e\u3002\u7b2c\u4e09\u6b21\u8c03\u7528\u5931\u8d25\uff0c\u56e0\u4e3a\u5b57\u5178\u4e0d\u5305\u542b \u7684\u952e\u3002testScoresStringInt"Dave"91"Bev"1"Brian"testScores"Dave""Bev"testScores"Brian"'),(0,s.kt)("h2",{id:"\u94fe\u63a5\u591a\u7ea7\u94fe\u63a5"},"\u94fe\u63a5\u591a\u7ea7\u94fe\u63a5"),(0,s.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u591a\u4e2a\u7ea7\u522b\u7684\u53ef\u9009\u94fe\u63a5\u94fe\u63a5\u5728\u4e00\u8d77\uff0c\u4ee5\u6df1\u5165\u5230\u6a21\u578b\u4e2d\u66f4\u6df1\u7684\u5c5e\u6027\u3001\u65b9\u6cd5\u548c\u4e0b\u6807\u3002\u4f46\u662f\uff0c\u591a\u7ea7\u53ef\u9009\u94fe\u63a5\u4e0d\u4f1a\u4e3a\u8fd4\u56de\u503c\u6dfb\u52a0\u66f4\u591a\u7ea7\u522b\u7684\u53ef\u9009\u6027\u3002"),(0,s.kt)("p",null,"\u6362\u4e00\u79cd\u65b9\u5f0f\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c1d\u8bd5\u68c0\u7d22\u7684\u7c7b\u578b\u4e0d\u662f\u53ef\u9009\u7684\uff0c\u90a3\u4e48\u7531\u4e8e\u53ef\u9009\u94fe\u63a5\uff0c\u5b83\u5c06\u53d8\u6210\u53ef\u9009\u7684\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c1d\u8bd5\u68c0\u7d22\u7684\u7c7b\u578b\u5df2\u7ecf\u662f\u53ef\u9009\u7684\uff0c\u5219\u5b83\u4e0d\u4f1a\u56e0\u4e3a\u94fe\u63a5\u800c\u53d8\u5f97\u66f4\u52a0\u53ef\u9009\u3002")),(0,s.kt)("p",null,"\u6240\u4ee5\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5c1d\u8bd5\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u68c0\u7d22\u4e00\u4e2a Int \u503c\uff0c\u5219 Int?\u65e0\u8bba\u4f7f\u7528\u591a\u5c11\u5c42\u94fe\u63a5\uff0c\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u503c\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u5730\uff0c\u5982\u679c\u4f60\u5c1d\u8bd5\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u68c0\u7d22\u4e00\u4e2a Int?\u503c\uff0c\u5219 Int?\u59cb\u7ec8\u8fd4\u56de an\uff0c\u65e0\u8bba\u4f7f\u7528\u591a\u5c11\u7ea7\u94fe\u63a5\u3002")),(0,s.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5c1d\u8bd5\u8bbf\u95ee \u7684\u5c5e\u6027 street \u7684 address \u5c5e\u6027\u3002\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e24\u4e2a\u7ea7\u522b\u7684\u53ef\u9009\u94fe\u63a5\uff0c\u4ee5\u94fe\u63a5\u548c\u5c5e\u6027\uff0c\u5b83\u4eec\u90fd\u662f\u53ef\u9009\u7c7b\u578b\uff1aresidencejohnresidenceaddress"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if let johnsStreet = john.residence?.address?.street {\n    print("John\'s street name is \\(johnsStreet).")\n} else {\n    print("Unable to retrieve the address.")\n}\n// Prints "Unable to retrieve the address."\n')),(0,s.kt)("p",null,"\u5f53\u524d\u7684\u503c\u5305\u542b\u4e00\u4e2a\u6709\u6548\u7684\u5b9e\u4f8b\u3002\u4f46\u662f\uff0c\u5f53\u524d\u7684\u503c\u4e3a\u3002\u56e0\u6b64\uff0c\u8c03\u7528\u5931\u8d25\u3002john.residenceResidencejohn.residence.addressniljohn.residence?.address?.street"),(0,s.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u4f60\u6b63\u5728\u5c1d\u8bd5\u68c0\u7d22 street \u5c5e\u6027\u7684\u503c\u3002\u6b64\u5c5e\u6027\u7684\u7c7b\u578b\u662f String?\u3002\u56e0\u6b64\uff0c\u7684\u8fd4\u56de\u503c\u4e5f\u662f\uff0c\u5373\u4f7f\u9664\u4e86\u5c5e\u6027\u7684\u57fa\u7840\u53ef\u9009\u7c7b\u578b\u4e4b\u5916\u8fd8\u5e94\u7528\u4e86\u4e24\u7ea7\u53ef\u9009\u94fe\u63a5\u3002john.residence?.address?.streetString?"),(0,s.kt)("p",null,"\u5982\u679c\u5c06\u5b9e\u9645 Address \u5b9e\u4f8b\u8bbe\u7f6e\u4e3a \u7684\u503c\uff0c\u5e76\u4e3a\u5730\u5740\u7684\u5c5e\u6027\u8bbe\u7f6e\u5b9e\u9645\u503c\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u591a\u7ea7\u53ef\u9009\u94fe\u63a5\u8bbf\u95ee\u8be5\u5c5e\u6027\u7684\u503c\uff1ajohn.residence.addressstreetstreet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'let johnsAddress = Address()\njohnsAddress.buildingName = "The Larches"\njohnsAddress.street = "Laurel Street"\njohn.residence?.address = johnsAddress\n\nif let johnsStreet = john.residence?.address?.street {\n    print("John\'s street name is \\(johnsStreet).")\n} else {\n    print("Unable to retrieve the address.")\n}\n// Prints "John\'s street name is Laurel Street."\n')),(0,s.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u5c1d\u8bd5\u8bbe\u7f6e address \u7684\u5c5e\u6027\u5c06\u6210\u529f\uff0c\u56e0\u4e3a\u5f53\u524d\u7684\u503c\u5305\u542b\u4e00\u4e2a\u6709\u6548\u5b9e\u4f8b\u3002john.residencejohn.residenceResidence"),(0,s.kt)("h2",{id:"\u94fe\u63a5\u5177\u6709\u53ef\u9009\u8fd4\u56de\u503c\u7684\u65b9\u6cd5"},"\u94fe\u63a5\u5177\u6709\u53ef\u9009\u8fd4\u56de\u503c\u7684\u65b9\u6cd5"),(0,s.kt)("p",null,"\u524d\u9762\u7684\u793a\u4f8b\u663e\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u68c0\u7d22\u53ef\u9009\u7c7b\u578b\u7684\u5c5e\u6027\u7684\u503c\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528\u53ef\u9009\u94fe\u63a5\u6765\u8c03\u7528\u8fd4\u56de\u53ef\u9009\u7c7b\u578b\u503c\u7684\u65b9\u6cd5\uff0c\u5e76\u5728\u9700\u8981\u65f6\u94fe\u63a5\u8be5\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u3002"),(0,s.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u901a\u8fc7\u53ef\u9009\u94fe\u63a5\u8c03\u7528 Address \u7c7b\u7684\u65b9\u6cd5\u3002\u6b64\u65b9\u6cd5\u8fd4\u56de type \u7684\u503c\u3002\u5982\u4e0a\u6240\u8ff0\uff0c\u53ef\u9009\u94fe\u63a5\u540e\u6b64\u65b9\u6cd5\u8c03\u7528\u7684\u6700\u7ec8\u8fd4\u56de\u7c7b\u578b\u4e5f\u662f\uff1abuildingIdentifier()String?String?"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if let buildingIdentifier = john.residence?.address?.buildingIdentifier() {\n    print("John\'s building identifier is \\(buildingIdentifier).")\n}\n// Prints "John\'s building identifier is The Larches."\n')),(0,s.kt)("p",null,"\u5982\u679c\u8981\u5bf9\u6b64\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u6267\u884c\u8fdb\u4e00\u6b65\u7684\u53ef\u9009\u94fe\u63a5\uff0c\u8bf7\u5c06\u53ef\u9009\u94fe\u63a5\u95ee\u53f7\u653e\u5728\u65b9\u6cd5\u7684\u62ec\u53f7\u4e4b\u540e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},'if let beginsWithThe =\n    john.residence?.address?.buildingIdentifier()?.hasPrefix("The") {\n    if beginsWithThe {\n        print("John\'s building identifier begins with \\"The\\".")\n    } else {\n        print("John\'s building identifier doesn\'t begin with \\"The\\".")\n    }\n}\n// Prints "John\'s building identifier begins with "The"."\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u4f60\u5c06\u53ef\u9009\u94fe\u63a5\u95ee\u53f7\u653e\u5728\u62ec\u53f7\u4e4b\u540e\uff0c\u56e0\u4e3a\u4f60\u94fe\u63a5\u7684\u53ef\u9009\u503c\u662f\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\uff0c\u800c\u4e0d\u662f\u65b9\u6cd5\u672c\u8eab\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"buildingIdentifier()buildingIdentifier()"))))}h.isMDXComponent=!0}}]);