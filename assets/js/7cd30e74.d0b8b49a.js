"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},l="\u7ee7\u627f",c={unversionedId:"swift/guide/inheritance/index",id:"swift/guide/inheritance/index",title:"\u7ee7\u627f",description:"<OriginalLink",source:"@site/docs/swift/guide/inheritance/index.mdx",sourceDirName:"swift/guide/inheritance",slug:"/swift/guide/inheritance/",permalink:"/docs/swift/guide/inheritance/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/inheritance/index.mdx",tags:[],version:"current",lastUpdatedAt:1692231936,formattedLastUpdatedAt:"2023\u5e748\u670817\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u4e0b\u6807",permalink:"/docs/swift/guide/subscripts/"},next:{title:"\u521d\u59cb\u5316",permalink:"/docs/swift/guide/initialization/"}},o={},s=[{value:"\u5b9a\u4e49\u57fa\u7c7b",id:"\u5b9a\u4e49\u57fa\u7c7b",level:2},{value:"\u5b50\u7c7b\u5316",id:"\u5b50\u7c7b\u5316",level:2},{value:"\u8986\u76d6",id:"\u8986\u76d6",level:2},{value:"\u8bbf\u95ee\u8d85\u7c7b\u65b9\u6cd5\u3001\u5c5e\u6027\u548c\u4e0b\u6807",id:"\u8bbf\u95ee\u8d85\u7c7b\u65b9\u6cd5\u5c5e\u6027\u548c\u4e0b\u6807",level:2},{value:"\u8986\u76d6\u65b9\u6cd5",id:"\u8986\u76d6\u65b9\u6cd5",level:2},{value:"\u8986\u76d6\u5c5e\u6027",id:"\u8986\u76d6\u5c5e\u6027",level:2},{value:"\u8986\u76d6\u5c5e\u6027 getter \u548c setter",id:"\u8986\u76d6\u5c5e\u6027-getter-\u548c-setter",level:2},{value:"\u8986\u76d6\u5c5e\u6027\u89c2\u5bdf\u8005",id:"\u8986\u76d6\u5c5e\u6027\u89c2\u5bdf\u8005",level:2},{value:"\u9632\u6b62\u8986\u76d6",id:"\u9632\u6b62\u8986\u76d6",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=p("DocCaution"),d=p("OriginalLink"),m={toc:s},k="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,a.kt)(u,{mdxType:"DocCaution"}),(0,a.kt)(d,{title:"\u6dfb\u52a0\u6216\u8986\u76d6\u529f\u80fd\u7684\u5b50\u7c7b",value:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/inheritance",mdxType:"OriginalLink"}),(0,a.kt)("p",null,"\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u4ece\u53e6\u4e00\u4e2a\u7c7b\u7ee7\u627f\u65b9\u6cd5\u3001\u5c5e\u6027\u548c\u5176\u4ed6\u7279\u5f81\u3002\u5f53\u4e00\u4e2a\u7c7b\u7ee7\u627f\u81ea\u53e6\u4e00\u4e2a\u7c7b\u65f6\uff0c\u7ee7\u627f\u7c7b\u79f0\u4e3a\u5b50\u7c7b\uff0c\u5b83\u7ee7\u627f\u7684\u7c7b\u79f0\u4e3a\u8d85\u7c7b\u3002\u7ee7\u627f\u662f Swift \u4e2d\u5c06\u7c7b\u4e0e\u5176\u4ed6\u7c7b\u578b\u533a\u5206\u5f00\u6765\u7684\u57fa\u672c\u884c\u4e3a\u3002"),(0,a.kt)("p",null,"Swift \u4e2d\u7684\u7c7b\u53ef\u4ee5\u8c03\u7528\u548c\u8bbf\u95ee\u5c5e\u4e8e\u5b83\u4eec\u8d85\u7c7b\u7684\u65b9\u6cd5\u3001\u5c5e\u6027\u548c\u4e0b\u6807\uff0c\u5e76\u4e14\u53ef\u4ee5\u63d0\u4f9b\u5b83\u4eec\u81ea\u5df1\u7684\u8fd9\u4e9b\u65b9\u6cd5\u3001\u5c5e\u6027\u548c\u4e0b\u6807\u7684\u8986\u76d6\u7248\u672c\u4ee5\u6539\u8fdb\u6216\u4fee\u6539\u5b83\u4eec\u7684\u884c\u4e3a\u3002Swift \u901a\u8fc7\u68c0\u67e5\u8986\u76d6\u5b9a\u4e49\u662f\u5426\u5177\u6709\u5339\u914d\u7684\u8d85\u7c7b\u5b9a\u4e49\u6765\u5e2e\u52a9\u786e\u4fdd\u60a8\u7684\u8986\u76d6\u662f\u6b63\u786e\u7684\u3002"),(0,a.kt)("p",null,"\u7c7b\u8fd8\u53ef\u4ee5\u5411\u7ee7\u627f\u7684\u5c5e\u6027\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\uff0c\u4ee5\u4fbf\u5728\u5c5e\u6027\u503c\u66f4\u6539\u65f6\u5f97\u5230\u901a\u77e5\u3002\u5c5e\u6027\u89c2\u5bdf\u5668\u53ef\u4ee5\u6dfb\u52a0\u5230\u4efb\u4f55\u5c5e\u6027\uff0c\u65e0\u8bba\u5b83\u6700\u521d\u662f\u5b9a\u4e49\u4e3a\u5b58\u50a8\u5c5e\u6027\u8fd8\u662f\u8ba1\u7b97\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"\u5b9a\u4e49\u57fa\u7c7b"},"\u5b9a\u4e49\u57fa\u7c7b"),(0,a.kt)("p",null,"\u4efb\u4f55\u4e0d\u4ece\u53e6\u4e00\u4e2a\u7c7b\u7ee7\u627f\u7684\u7c7b\u90fd\u79f0\u4e3a\u57fa\u7c7b\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Swift \u7c7b\u4e0d\u7ee7\u627f\u81ea\u901a\u7528\u57fa\u7c7b\u3002\u60a8\u5728\u672a\u6307\u5b9a\u8d85\u7c7b\u7684\u60c5\u51b5\u4e0b\u5b9a\u4e49\u7684\u7c7b\u4f1a\u81ea\u52a8\u6210\u4e3a\u60a8\u6784\u5efa\u7684\u57fa\u7c7b\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a Vehicle. \u6b64\u57fa\u7c7b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u5b58\u50a8\u5c5e\u6027\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a\uff08\u63a8\u65ad\u5c5e\u6027\u7c7b\u578b\u4e3a\uff09\u3002\u8be5\u5c5e\u6027\u7684\u503c\u7531\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027\u8c03\u7528\u4ee5\u521b\u5efa\u8f66\u8f86\u63cf\u8ff0\u3002currentSpeed0.0DoublecurrentSpeedStringdescription"),(0,a.kt)("p",null,"\u57fa Vehicle \u7c7b\u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b9\u6cd5\u3002\u8fd9\u4e2a\u65b9\u6cd5\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709\u4e3a\u4e00\u4e2a\u57fa\u7840\u5b9e\u4f8b\u505a\u4efb\u4f55\u4e8b\u60c5\uff0c\u4f46\u4f1a\u88ab\u7a0d\u540e\u7684\u5b50\u7c7b\u5b9a\u5236\uff1amakeNoiseVehicleVehicle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'class Vehicle {\n    var currentSpeed = 0.0\n    var description: String {\n        return "traveling at \\(currentSpeed) miles per hour"\n    }\n    func makeNoise() {\n        // do nothing - an arbitrary vehicle doesn\'t necessarily make a noise\n    }\n}\n')),(0,a.kt)("p",null,"Vehicle \u60a8\u4f7f\u7528\u521d\u59cb\u5316\u8bed\u6cd5\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\uff0c\u5b83\u88ab\u5199\u4e3a\u4e00\u4e2a\u7c7b\u578b\u540d\u79f0\u540e\u8ddf\u4e00\u4e2a\u7a7a\u62ec\u53f7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let someVehicle = Vehicle()\n")),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0 Vehicle \u5b9e\u4f8b\u540e\uff0c\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5176 description \u5c5e\u6027\u4ee5\u6253\u5370\u8f66\u8f86\u5f53\u524d\u901f\u5ea6\u7684\u4eba\u7c7b\u53ef\u8bfb\u63cf\u8ff0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'print("Vehicle: \\(someVehicle.description)")\n// Vehicle: traveling at 0.0 miles per hour\n')),(0,a.kt)("p",null,"\u8be5\u7c7b Vehicle \u5b9a\u4e49\u4e86\u4efb\u610f\u8f66\u8f86\u7684\u5171\u540c\u7279\u5f81\uff0c\u4f46\u672c\u8eab\u5e76\u6ca1\u6709\u591a\u5927\u7528\u5904\u3002\u4e3a\u4e86\u4f7f\u5176\u66f4\u6709\u7528\uff0c\u60a8\u9700\u8981\u5bf9\u5176\u8fdb\u884c\u6539\u8fdb\u4ee5\u63cf\u8ff0\u66f4\u5177\u4f53\u7684\u8f66\u8f86\u79cd\u7c7b\u3002"),(0,a.kt)("h2",{id:"\u5b50\u7c7b\u5316"},"\u5b50\u7c7b\u5316"),(0,a.kt)("p",null,"\u5b50\u7c7b\u5316\u662f\u5728\u73b0\u6709\u7c7b\u7684\u57fa\u7840\u4e0a\u521b\u5efa\u65b0\u7c7b\u7684\u884c\u4e3a\u3002\u5b50\u7c7b\u7ee7\u627f\u73b0\u6709\u7c7b\u7684\u7279\u5f81\uff0c\u7136\u540e\u60a8\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u6539\u8fdb\u3002\u60a8\u8fd8\u53ef\u4ee5\u5411\u5b50\u7c7b\u6dfb\u52a0\u65b0\u7279\u5f81\u3002"),(0,a.kt)("p",null,"\u8981\u8868\u660e\u4e00\u4e2a\u5b50\u7c7b\u6709\u4e00\u4e2a\u8d85\u7c7b\uff0c\u5728\u8d85\u7c7b\u540d\u4e4b\u524d\u5199\u4e0a\u5b50\u7c7b\u540d\uff0c\u7528\u5192\u53f7\u5206\u9694\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"class SomeSubclass: SomeSuperclass {\n    // subclass definition goes here\n}\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u5b50\u7c7b Bicycle\uff0c\u5176\u8d85\u7c7b\u4e3a Vehicle\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"class Bicycle: Vehicle {\n    var hasBasket = false\n}\n")),(0,a.kt)("p",null,"\u65b0 Bicycle \u7c7b\u81ea\u52a8\u83b7\u5f97 \u7684\u6240\u6709\u7279\u5f81 Vehicle\uff0c\u4f8b\u5982\u5b83\u7684\u548c\u5c5e\u6027\u53ca\u5176\u65b9\u6cd5\u3002currentSpeeddescriptionmakeNoise()"),(0,a.kt)("p",null,"\u9664\u4e86\u5b83\u7ee7\u627f\u7684\u7279\u6027\u4e4b\u5916\uff0c\u8be5\u7c7b\u8fd8 Bicycle \u5b9a\u4e49\u4e86\u4e00\u4e2a\u65b0\u7684\u5b58\u50a8\u5c5e\u6027\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a\uff08\u63a8\u65ad\u5c5e\u6027\u7684\u7c7b\u578b\uff09\u3002hasBasketfalseBool"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u60a8\u521b\u5efa\u7684\u4efb\u4f55\u65b0 Bicycle \u5b9e\u4f8b\u90fd\u4e0d\u4f1a\u6709\u7bee\u5b50\u3002\u60a8\u53ef\u4ee5\u5728\u521b\u5efa\u7279\u5b9a\u5b9e\u4f8b\u540e\u5c06\u5c5e\u6027\u8bbe\u7f6e\u4e3a\uff1ahasBaskettrueBicycle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let bicycle = Bicycle()\nbicycle.hasBasket = true\n")),(0,a.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u4fee\u6539\u5b9e\u4f8b\u7684\u7ee7\u627f\u5c5e\u6027\uff0c\u67e5\u8be2\u5b9e\u4f8b\u7684\u7ee7\u627f\u5c5e\u6027\uff1acurrentSpeedBicycledescription"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'bicycle.currentSpeed = 15.0\nprint("Bicycle: \\(bicycle.description)")\n// Bicycle: traveling at 15.0 miles per hour\n')),(0,a.kt)("p",null,"\u5b50\u7c7b\u672c\u8eab\u53ef\u4ee5\u88ab\u5b50\u7c7b\u5316\u3002\u4e0b\u4e00\u4e2a\u793a\u4f8b Bicycle \u4e3a\u79f0\u4e3a\u201ctandem\u201d\u7684\u53cc\u5ea7\u81ea\u884c\u8f66\u521b\u5efa\u4e86\u4e00\u4e2a\u5b50\u7c7b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"class Tandem: Bicycle {\n    var currentNumberOfPassengers = 0\n}\n")),(0,a.kt)("p",null,"Tandem \u4ece \u7ee7\u627f\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5 Bicycle\uff0c\u800c \u53c8\u4ece \u7ee7\u627f\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5 Vehicle\u3002\u8be5 Tandem \u5b50\u7c7b\u8fd8\u6dfb\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u5b58\u50a8\u5c5e\u6027\uff0c\u5176\u9ed8\u8ba4\u503c\u4e3a\u3002currentNumberOfPassengers0"),(0,a.kt)("p",null,"\u5982\u679c\u521b\u5efa \u7684\u5b9e\u4f8b\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u5176\u4efb\u4f55\u65b0\u7684\u548c\u7ee7\u627f\u7684\u5c5e\u6027\uff0c\u5e76\u67e5\u8be2\u5b83\u4ece \u7ee7\u627f\u7684 Tandem \u53ea\u8bfb\u5c5e\u6027\uff1adescriptionVehicle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let tandem = Tandem()\ntandem.hasBasket = true\ntandem.currentNumberOfPassengers = 2\ntandem.currentSpeed = 22.0\nprint("Tandem: \\(tandem.description)")\n// Tandem: traveling at 22.0 miles per hour\n')),(0,a.kt)("h2",{id:"\u8986\u76d6"},"\u8986\u76d6"),(0,a.kt)("p",null,"\u5b50\u7c7b\u53ef\u4ee5\u63d0\u4f9b\u5b83\u81ea\u5df1\u7684\u5b9e\u4f8b\u65b9\u6cd5\u3001\u7c7b\u578b\u65b9\u6cd5\u3001\u5b9e\u4f8b\u5c5e\u6027\u3001\u7c7b\u578b\u5c5e\u6027\u6216\u4e0b\u6807\u7684\u81ea\u5b9a\u4e49\u5b9e\u73b0\uff0c\u5426\u5219\u5b83\u4f1a\u4ece\u8d85\u7c7b\u7ee7\u627f\u3002\u8fd9\u79f0\u4e3a\u8986\u76d6\u3002"),(0,a.kt)("p",null,"\u8981\u8986\u76d6\u5c06\u4ee5\u5176\u4ed6\u65b9\u5f0f\u7ee7\u627f\u7684\u7279\u5f81\uff0c\u60a8\u53ef\u4ee5\u5728\u8986\u76d6\u5b9a\u4e49\u524d\u52a0\u4e0a\u5173\u952e\u5b57 override\u3002\u8fd9\u6837\u505a\u8868\u660e\u60a8\u6253\u7b97\u63d0\u4f9b\u8986\u76d6\u5e76\u4e14\u6ca1\u6709\u9519\u8bef\u5730\u63d0\u4f9b\u5339\u914d\u5b9a\u4e49\u3002\u610f\u5916\u8986\u76d6\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u884c\u4e3a\uff0c\u5e76\u4e14\u5728\u7f16\u8bd1\u4ee3\u7801\u65f6\uff0c\u4efb\u4f55\u6ca1\u6709 override \u5173\u952e\u5b57\u7684\u8986\u76d6\u90fd\u4f1a\u88ab\u8bca\u65ad\u4e3a\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u8be5 override \u5173\u952e\u5b57\u8fd8\u4f1a\u63d0\u793a Swift \u7f16\u8bd1\u5668\u68c0\u67e5\u8986\u76d6\u7c7b\u7684\u8d85\u7c7b\uff08\u6216\u5176\u7236\u7c7b\u4e4b\u4e00\uff09\u662f\u5426\u5177\u6709\u4e0e\u60a8\u4e3a\u8986\u76d6\u63d0\u4f9b\u7684\u58f0\u660e\u76f8\u5339\u914d\u7684\u58f0\u660e\u3002\u6b64\u68c0\u67e5\u786e\u4fdd\u60a8\u7684\u91cd\u5199\u5b9a\u4e49\u662f\u6b63\u786e\u7684\u3002"),(0,a.kt)("h2",{id:"\u8bbf\u95ee\u8d85\u7c7b\u65b9\u6cd5\u5c5e\u6027\u548c\u4e0b\u6807"},"\u8bbf\u95ee\u8d85\u7c7b\u65b9\u6cd5\u3001\u5c5e\u6027\u548c\u4e0b\u6807"),(0,a.kt)("p",null,"\u5f53\u60a8\u4e3a\u5b50\u7c7b\u63d0\u4f9b\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u4e0b\u6807\u8986\u76d6\u65f6\uff0c\u6709\u65f6\u5c06\u73b0\u6709\u8d85\u7c7b\u5b9e\u73b0\u7528\u4f5c\u8986\u76d6\u7684\u4e00\u90e8\u5206\u5f88\u6709\u7528\u3002\u4f8b\u5982\uff0c\u60a8\u53ef\u4ee5\u6539\u8fdb\u73b0\u6709\u5b9e\u73b0\u7684\u884c\u4e3a\uff0c\u6216\u5c06\u4fee\u6539\u540e\u7684\u503c\u5b58\u50a8\u5728\u73b0\u6709\u7684\u7ee7\u627f\u53d8\u91cf\u4e2d\u3002"),(0,a.kt)("p",null,"\u5728\u9002\u5f53\u7684\u60c5\u51b5\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 super \u524d\u7f00\u8bbf\u95ee\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u4e0b\u6807\u7684\u8d85\u7c7b\u7248\u672c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u540d\u4e3a \u7684\u91cd\u5199\u65b9\u6cd5\u53ef\u4ee5\u901a\u8fc7\u5728\u91cd\u5199\u65b9\u6cd5\u5b9e\u73b0\u4e2d\u8c03\u7528\u6765\u8c03\u7528 \u7684\u8d85\u7c7b\u7248\u672c\u3002someMethod()someMethod()super.someMethod()"),(0,a.kt)("li",{parentName:"ul"},"\u88ab\u8986\u76d6\u7684\u5c5e\u6027 called \u53ef\u4ee5\u5728\u8986\u76d6\u7684 getter \u6216 setter \u5b9e\u73b0\u4e2d\u8bbf\u95ee as \u7684\u8d85\u7c7b\u7248\u672c\u3002somePropertysomePropertysuper.someProperty"),(0,a.kt)("li",{parentName:"ul"},"\u91cd\u5199\u7684\u4e0b\u6807 for \u53ef\u4ee5\u4ece\u91cd\u5199\u7684\u4e0b\u6807\u5b9e\u73b0\u4e2d\u8bbf\u95ee\u76f8\u540c\u4e0b\u6807\u7684\u8d85\u7c7b\u7248\u672c\u3002someIndexsuper","[someIndex]")),(0,a.kt)("h2",{id:"\u8986\u76d6\u65b9\u6cd5"},"\u8986\u76d6\u65b9\u6cd5"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u8986\u76d6\u7ee7\u627f\u7684\u5b9e\u4f8b\u6216\u7c7b\u578b\u65b9\u6cd5\uff0c\u4ee5\u5728\u60a8\u7684\u5b50\u7c7b\u4e2d\u63d0\u4f9b\u8be5\u65b9\u6cd5\u7684\u5b9a\u5236\u6216\u66ff\u4ee3\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5b9a\u4e49\u4e86 Vehiclecalled \u7684\u65b0\u5b50\u7c7b Train\uff0c\u5b83\u8986\u76d6\u4e86\u7ee7\u627f\u81ea \u7684\u65b9\u6cd5\uff1amakeNoise()TrainVehicle"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'class Train: Vehicle {\n    override func makeNoise() {\n        print("Choo Choo")\n    }\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b9e\u4f8b Train \u5e76\u8c03\u7528\u5b83\u7684\u65b9\u6cd5\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u8c03\u7528\u4e86\u8be5\u65b9\u6cd5\u7684\u5b50\u7c7b\u7248\u672c\uff1amakeNoise()Train"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let train = Train()\ntrain.makeNoise()\n// Prints "Choo Choo"\n')),(0,a.kt)("h2",{id:"\u8986\u76d6\u5c5e\u6027"},"\u8986\u76d6\u5c5e\u6027"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u8986\u76d6\u7ee7\u627f\u7684\u5b9e\u4f8b\u6216\u7c7b\u578b\u5c5e\u6027\u4ee5\u4e3a\u8be5\u5c5e\u6027\u63d0\u4f9b\u60a8\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49 getter \u548c setter\uff0c\u6216\u8005\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\u4ee5\u542f\u7528\u8986\u76d6\u5c5e\u6027\u4ee5\u89c2\u5bdf\u57fa\u7840\u5c5e\u6027\u503c\u4f55\u65f6\u66f4\u6539\u3002"),(0,a.kt)("h2",{id:"\u8986\u76d6\u5c5e\u6027-getter-\u548c-setter"},"\u8986\u76d6\u5c5e\u6027 getter \u548c setter"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49 getter\uff08\u548c setter\uff0c\u5982\u679c\u9002\u7528\uff09\u6765\u8986\u76d6\u4efb\u4f55\u7ee7\u627f\u7684\u5c5e\u6027\uff0c\u800c\u4e0d\u7ba1\u7ee7\u627f\u7684\u5c5e\u6027\u662f\u5728\u6e90\u4e2d\u4f5c\u4e3a\u5b58\u50a8\u5c5e\u6027\u8fd8\u662f\u8ba1\u7b97\u5c5e\u6027\u5b9e\u73b0\u7684\u3002\u5b50\u7c7b\u4e0d\u77e5\u9053\u7ee7\u627f\u5c5e\u6027\u7684\u5b58\u50a8\u6216\u8ba1\u7b97\u6027\u8d28\u2014\u2014\u5b83\u53ea\u77e5\u9053\u7ee7\u627f\u5c5e\u6027\u5177\u6709\u7279\u5b9a\u540d\u79f0\u548c\u7c7b\u578b\u3002\u60a8\u5fc5\u987b\u59cb\u7ec8\u58f0\u660e\u60a8\u8981\u8986\u76d6\u7684\u5c5e\u6027\u7684\u540d\u79f0\u548c\u7c7b\u578b\uff0c\u4ee5\u4f7f\u7f16\u8bd1\u5668\u80fd\u591f\u68c0\u67e5\u60a8\u7684\u8986\u76d6\u662f\u5426\u4e0e\u5177\u6709\u76f8\u540c\u540d\u79f0\u548c\u7c7b\u578b\u7684\u8d85\u7c7b\u5c5e\u6027\u76f8\u5339\u914d\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u5b50\u7c7b\u5c5e\u6027\u8986\u76d6\u4e2d\u540c\u65f6\u63d0\u4f9b getter \u548c setter \u6765\u5c06\u7ee7\u627f\u7684\u53ea\u8bfb\u5c5e\u6027\u5448\u73b0\u4e3a\u8bfb\u5199\u5c5e\u6027\u3002\u4f46\u662f\uff0c\u60a8\u4e0d\u80fd\u5c06\u7ee7\u627f\u7684\u8bfb\u5199\u5c5e\u6027\u5448\u73b0\u4e3a\u53ea\u8bfb\u5c5e\u6027\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u63d0\u4f9b\u4e00\u4e2a setter \u4f5c\u4e3a\u5c5e\u6027\u8986\u76d6\u7684\u4e00\u90e8\u5206\uff0c\u60a8\u8fd8\u5fc5\u987b\u4e3a\u8be5\u8986\u76d6\u63d0\u4f9b\u4e00\u4e2a getter\u3002\u5982\u679c\u60a8\u4e0d\u60f3\u5728\u8986\u76d6\u7684 getter \u4e2d\u4fee\u6539\u7ee7\u627f\u5c5e\u6027\u7684\u503c\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ece getter \u8fd4\u56de\u6765\u7b80\u5355\u5730\u4f20\u9012\u7ee7\u627f\u7684\u503c\uff0c\u5176\u4e2d\u662f\u60a8\u8981\u8986\u76d6\u7684\u5c5e\u6027\u7684\u540d\u79f0\u3002super.somePropertysomeProperty")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u7c7b Car\uff0c\u5b83\u662f \u7684\u5b50\u7c7b Vehicle\u3002\u8be5\u7c7b Car \u5f15\u5165\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u5b58\u50a8\u5c5e\u6027 gear\uff0c\u5176\u9ed8\u8ba4\u6574\u6570\u503c\u4e3a 1\u3002\u8be5\u7c7b Car \u8fd8\u8986\u76d6\u4e86 description \u5b83\u7ee7\u627f\u81ea\u7684\u5c5e\u6027 Vehicle\uff0c\u4ee5\u63d0\u4f9b\u5305\u62ec\u5f53\u524d\u88c5\u5907\u7684\u81ea\u5b9a\u4e49\u63cf\u8ff0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'class Car: Vehicle {\n    var gear = 1\n    override var description: String {\n        return super.description + " in gear \\(gear)"\n    }\n}\n')),(0,a.kt)("p",null,"\u5c5e\u6027\u7684\u91cd\u5199 description \u4ece\u8c03\u7528 \u5f00\u59cb\uff0c\u5b83\u8fd4\u56de\u7c7b\u7684\u5c5e\u6027\u3002\u7c7b\u7684 then \u7248\u672c\u5728\u6b64\u63cf\u8ff0\u7684\u672b\u5c3e\u6dfb\u52a0\u4e86\u4e00\u4e9b\u989d\u5916\u7684\u6587\u672c\uff0c\u4ee5\u63d0\u4f9b\u6709\u5173\u5f53\u524d\u88c5\u5907\u7684\u4fe1\u606f\u3002super.descriptionVehicledescriptionCardescription"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u521b\u5efa\u8be5\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b Car \u5e76\u8bbe\u7f6e\u5b83\u7684 gear \u548c\u5c5e\u6027\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u5c5e\u6027\u8fd4\u56de\u7c7b\u4e2d\u5b9a\u4e49\u7684\u5b9a\u5236\u63cf\u8ff0\uff1acurrentSpeeddescriptionCar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let car = Car()\ncar.currentSpeed = 25.0\ncar.gear = 3\nprint("Car: \\(car.description)")\n// Car: traveling at 25.0 miles per hour in gear 3\n')),(0,a.kt)("h2",{id:"\u8986\u76d6\u5c5e\u6027\u89c2\u5bdf\u8005"},"\u8986\u76d6\u5c5e\u6027\u89c2\u5bdf\u8005"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5c5e\u6027\u8986\u76d6\u5c06\u5c5e\u6027\u89c2\u5bdf\u5668\u6dfb\u52a0\u5230\u7ee7\u627f\u7684\u5c5e\u6027\u3002\u8fd9\u4f7f\u60a8\u80fd\u591f\u5728\u7ee7\u627f\u5c5e\u6027\u7684\u503c\u66f4\u6539\u65f6\u6536\u5230\u901a\u77e5\uff0c\u800c\u4e0d\u7ba1\u8be5\u5c5e\u6027\u6700\u521d\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u3002\u6709\u5173\u5c5e\u6027\u89c2\u5bdf\u5668\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5c5e\u6027\u89c2\u5bdf\u5668\u3002"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u60a8\u4e0d\u80fd\u5c06\u5c5e\u6027\u89c2\u5bdf\u5668\u6dfb\u52a0\u5230\u7ee7\u627f\u7684\u5e38\u91cf\u5b58\u50a8\u5c5e\u6027\u6216\u7ee7\u627f\u7684\u53ea\u8bfb\u8ba1\u7b97\u5c5e\u6027\u3002\u65e0\u6cd5\u8bbe\u7f6e\u8fd9\u4e9b\u5c5e\u6027\u7684\u503c\uff0c\u56e0\u6b64\u4e0d\u9002\u5408\u63d0\u4f9b\u6216\u5b9e\u73b0\u4f5c\u4e3a\u8986\u76d6\u7684\u4e00\u90e8\u5206\u3002willSetdidSet")),(0,a.kt)("p",null,"\u53e6\u8bf7\u6ce8\u610f\uff0c\u60a8\u4e0d\u80fd\u4e3a\u540c\u4e00\u5c5e\u6027\u540c\u65f6\u63d0\u4f9b\u8986\u76d6\u8bbe\u7f6e\u5668\u548c\u8986\u76d6\u5c5e\u6027\u89c2\u5bdf\u5668\u3002\u5982\u679c\u60a8\u60f3\u89c2\u5bdf\u5c5e\u6027\u503c\u7684\u53d8\u5316\uff0c\u5e76\u4e14\u60a8\u5df2\u7ecf\u4e3a\u8be5\u5c5e\u6027\u63d0\u4f9b\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49 setter\uff0c\u60a8\u53ef\u4ee5\u7b80\u5355\u5730\u4ece\u81ea\u5b9a\u4e49 setter \u4e2d\u89c2\u5bdf\u4efb\u4f55\u503c\u7684\u53d8\u5316\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u7c7b\uff0c\u5b83\u662f \u7684\u5b50\u7c7b\u3002\u8be5\u7c7b\u8868\u793a\u5e26\u6709\u81ea\u52a8\u53d8\u901f\u7bb1\u7684\u6c7d\u8f66\uff0c\u5b83\u4f1a\u6839\u636e\u5f53\u524d\u901f\u5ea6\u81ea\u52a8\u9009\u62e9\u5408\u9002\u7684\u6863\u4f4d\u4f7f\u7528\uff1aAutomaticCarCarAutomaticCar"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"class AutomaticCar: Car {\n    override var currentSpeed: Double {\n        didSet {\n            gear = Int(currentSpeed / 10.0) + 1\n        }\n    }\n}\n")),(0,a.kt)("p",null,"\u6bcf\u5f53\u60a8\u8bbe\u7f6e\u4e00\u4e2a\u5b9e\u4f8b\u7684\u5c5e\u6027\u65f6\uff0c\u8be5\u5c5e\u6027\u7684\u89c2\u5bdf\u8005\u90fd\u4f1a\u5c06\u8be5\u5b9e\u4f8b\u7684\u5c5e\u6027\u8bbe\u7f6e\u4e3a\u9002\u5408\u65b0\u901f\u5ea6\u7684\u6863\u4f4d\u9009\u62e9\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5c5e\u6027\u89c2\u5bdf\u8005\u9009\u62e9\u4e00\u4e2a\u9f7f\u8f6e\uff0c\u8be5\u9f7f\u8f6e\u662f\u65b0\u503c\u9664\u4ee5\uff0c\u5411\u4e0b\u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u6574\u6570\uff0c\u518d\u52a0\u4e0a\u3002\u7684\u901f\u5ea6\u4ea7\u751f\u9f7f\u8f6e\uff1acurrentSpeedAutomaticCardidSetgearcurrentSpeed10135.04"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let automatic = AutomaticCar()\nautomatic.currentSpeed = 35.0\nprint("AutomaticCar: \\(automatic.description)")\n// AutomaticCar: traveling at 35.0 miles per hour in gear 4\n')),(0,a.kt)("h2",{id:"\u9632\u6b62\u8986\u76d6"},"\u9632\u6b62\u8986\u76d6"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5c06\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u4e0b\u6807\u6807\u8bb0\u4e3a final \u6765\u9632\u6b62\u5176\u88ab\u8986\u76d6\u3002final \u901a\u8fc7\u5728\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u4e0b\u6807\u7684\u4ecb\u7ecd\u5173\u952e\u5b57\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"final var"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"final func"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"final class func")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"final subscript")," \uff09\u4e4b\u524d\u7f16\u5199\u4fee\u9970\u7b26\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u4efb\u4f55\u8bd5\u56fe\u8986\u76d6\u5b50\u7c7b\u4e2d\u7684\u6700\u7ec8\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u4e0b\u6807\u7684\u5c1d\u8bd5\u90fd\u4f1a\u88ab\u62a5\u544a\u4e3a\u7f16\u8bd1\u65f6\u9519\u8bef\u3002\u6dfb\u52a0\u5230\u6269\u5c55\u4e2d\u7684\u7c7b\u7684\u65b9\u6cd5\u3001\u5c5e\u6027\u6216\u4e0b\u6807\u4e5f\u53ef\u4ee5\u5728\u6269\u5c55\u7684\u5b9a\u4e49\u4e2d\u6807\u8bb0\u4e3a\u6700\u7ec8\u7684\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728\u5176\u7c7b\u5b9a\u4e49 ( ) \u4e2d\u7684\u5173\u952e\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"final")," \u4e4b\u524d\u7f16\u5199\u4fee\u9970\u7b26\u6765\u5c06\u6574\u4e2a\u7c7b\u6807\u8bb0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"final")," \u3002\u4efb\u4f55\u5bf9 final \u7c7b\u8fdb\u884c\u5b50\u7c7b\u5316\u7684\u5c1d\u8bd5\u90fd\u4f1a\u88ab\u62a5\u544a\u4e3a\u7f16\u8bd1\u65f6\u9519\u8bef\u3002classfinal class"))}g.isMDXComponent=!0}}]);