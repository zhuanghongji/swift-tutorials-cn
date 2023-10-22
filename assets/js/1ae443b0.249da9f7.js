"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[6247],{3905:(t,e,o)=>{o.d(e,{Zo:()=>c,kt:()=>f});var n=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function a(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var l=n.createContext({}),d=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):u(u({},e),t)),o},c=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),s=d(o),m=i,f=s["".concat(l,".").concat(m)]||s[m]||p[m]||r;return o?n.createElement(f,u(u({ref:e},c),{},{components:o})):n.createElement(f,u({ref:e},c))}));function f(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=o.length,u=new Array(r);u[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[s]="string"==typeof t?t:i,u[1]=a;for(var d=2;d<r;d++)u[d]=o[d];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},38415:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>b,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=o(87462),i=(o(67294),o(3905));const r={},u="AUAudioUnit",a={unversionedId:"audio-toolbox/audio-units/au-audio-unit/index",id:"audio-toolbox/audio-units/au-audio-unit/index",title:"AUAudioUnit",description:"<OriginalSource",source:"@site/docs/audio-toolbox/audio-units/au-audio-unit/index.mdx",sourceDirName:"audio-toolbox/audio-units/au-audio-unit",slug:"/audio-toolbox/audio-units/au-audio-unit/",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-audio-unit/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-audio-unit/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"audiotoolboxSidebar",previous:{title:"\u7ed3\u5408\u97f3\u9891\u6548\u679c\u548c\u4e50\u5668",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/"},next:{title:"AUAudioUnitBus",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-audio-unit-bus/"}},l={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}],c=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},s=c("ToBePolishedAfterTranslation"),p=c("OriginalSource"),m={toc:d},f="wrapper";function b(t){let{components:e,...o}=t;return(0,i.kt)(f,(0,n.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"auaudiounit"},"AUAudioUnit"),(0,i.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(p,{title:"AUAudioUnit",url:"https://developer.apple.com/documentation/audiotoolbox/auaudiounit",summary:"AUAudioUnit \u7c7b\u5b9a\u4e49\u4e3b\u673a\u4e0e\u97f3\u9891\u5355\u5143\u7684\u63a5\u53e3",mdxType:"OriginalSource"}),(0,i.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u4e3b\u673a\u53ef\u4ee5\u4f7f\u7528\u8be5\u7c7b\u5b9e\u4f8b\u5316\u7248\u672c 3 \u6216\u7248\u672c 2 \u97f3\u9891\u5355\u5143\uff0c\u5e76\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u63a7\u5236\u97f3\u9891\u5355\u5143\u662f\u5728\u8fdb\u7a0b\u5185\u5b9e\u4f8b\u5316\u8fd8\u662f\u5728\u5355\u72ec\u7684\u6269\u5c55\u8fdb\u7a0b\u4e2d\u5b9e\u4f8b\u5316\u3002"),(0,i.kt)("p",null,"\u7248\u672c 3 \u97f3\u9891\u5355\u5143\u5e94\u7ee7\u627f AUAudioUnit \u7c7b\u3002\u7248\u672c 3 \u97f3\u9891\u5355\u5143\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6ce8\u518c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u7ec4\u4ef6\u6253\u5305\u5230\u5305\u542b AudioComponents Info.plist \u6761\u76ee\u7684\u5e94\u7528\u6269\u5c55\u4e2d\u3002\u4e3b\u7c7b\u5fc5\u987b\u7b26\u5408 AUAudioUnitFactory \u534f\u8bae\uff0c\u8be5\u534f\u8bae\u901a\u5e38\u4f1a\u5b9e\u4f8b\u5316 AUAudioUnit \u5b50\u7c7b\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528 registerSubclass(","_",":as:name:version:) \u65b9\u6cd5\u5c06\u7ec4\u4ef6\u63cf\u8ff0\u4e0e AUAudioUnit \u5b50\u7c7b\u5173\u8054\u3002\u547d\u540d\u97f3\u9891\u5355\u5143\u7ec4\u4ef6\u65f6\uff0c\u8bf7\u4f7f\u7528\u7ea6\u5b9a ",(0,i.kt)("inlineCode",{parentName:"li"},"<\u5236\u9020\u5546\u540d\u79f0>: <\u97f3\u9891\u5355\u5143\u540d\u79f0>"),"\u3002")),(0,i.kt)("p",null,"\u7248\u672c 2 \u97f3\u9891\u5355\u5143\u5e94\u6539\u4e3a AUAudioUnitV2Bridge \u7c7b\u7684\u5b50\u7c7b\u3002\u7248\u672c 2 \u97f3\u9891\u5355\u5143\u7ec4\u4ef6\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u6ce8\u518c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06\u7ec4\u4ef6\u6253\u5305\u5230\u5305\u542b AudioComponents Info.plist \u6761\u76ee\u7684\u7ec4\u4ef6\u5305\u4e2d\uff0c\u5f15\u7528 AudioComponentFactoryFunction \u51fd\u6570\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8c03\u7528 AudioComponentRegister \u51fd\u6570\u5c06\u7ec4\u4ef6\u63cf\u8ff0\u4e0e AudioComponentFactoryFunction \u51fd\u6570\u5173\u8054\u3002")),(0,i.kt)("p",null,"\u4e3b\u673a\u4e0d\u9700\u8981\u77e5\u9053\u6b63\u5728\u5b9e\u4f8b\u5316\u7684\u5177\u4f53 AUAudioUnit \u5b50\u7c7b\u3002 init(componentDescription:options:) \u65b9\u6cd5\u786e\u4fdd\u4f7f\u7528\u6b63\u786e\u7684\u5b50\u7c7b\u3002"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u5c06 AUAudioUnit \u7c7b\u4e0e\u7248\u672c 2 \u97f3\u9891\u5355\u5143\u4e00\u8d77\u4f7f\u7528\uff0c\u6216\u5c06 C AudioComponent \u548c AudioUnit API \u4e0e\u7248\u672c 3 \u97f3\u9891\u5355\u5143\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u6240\u6709\u4e3b\u8981\u529f\u80fd\u90fd\u662f\u5728\u4e24\u4e2a API \u4e4b\u95f4\u67b6\u8d77\u6865\u6881\u3002\u5982\u679c\u9002\u7528\uff0c\u672c\u6587\u6863\u5f15\u7528\u6bcf\u4e2a\u7248\u672c 3 \u65b9\u6cd5\u6216\u5c5e\u6027\u7684\u7248\u672c 2 API \u7b49\u6548\u9879\u3002")))}b.isMDXComponent=!0}}]);