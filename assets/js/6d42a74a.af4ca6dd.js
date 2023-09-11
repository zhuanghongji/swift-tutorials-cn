"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7198],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46804:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="\u63d2\u503c\u7c7b\u578b",p={unversionedId:"metal-shading-language-specification/interpolant-type/index",id:"metal-shading-language-specification/interpolant-type/index",title:"\u63d2\u503c\u7c7b\u578b",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301\u63d2\u503c\u7c7b\u578b\u3002",source:"@site/docs/metal-shading-language-specification/interpolant-type/index.mdx",sourceDirName:"metal-shading-language-specification/interpolant-type",slug:"/metal-shading-language-specification/interpolant-type/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/interpolant-type/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/interpolant-type/index.mdx",tags:[],version:"current",lastUpdatedAt:1694410412,formattedLastUpdatedAt:"2023\u5e749\u670811\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u5149\u7ebf\u8ffd\u8e2a\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/ray-tracing-types/"},next:{title:"\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/mesh-shader-types/"}},l={},c=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=s("ToBePolishedAfterTranslation"),d=s("OrigninalPDF"),m={toc:c},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u63d2\u503c\u7c7b\u578b"},"\u63d2\u503c\u7c7b\u578b"),(0,a.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(d,{title:"2.18 Interpolant Type",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301\u63d2\u503c\u7c7b\u578b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<metal_interpolate>")," \u4e2d\u5b9a\u4e49\u7684\u63d2\u503c\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolant<T,P>")," \u662f\u4e00\u4e2a\u6a21\u677f\u5316\u7c7b\u578b\uff0c\u5b83\u5c01\u88c5\u4e86\u7528\u4e8e\u62c9\u6a21\u578b\u63d2\u503c\u7684\u7247\u6bb5\u7740\u8272\u5668\u8f93\u5165\uff08\u7b2c 6.11 \u8282\uff09\u3002\u7c7b\u578b\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"P")," \u5206\u522b\u8868\u793a\u8f93\u5165\u7684\u6570\u636e\u7c7b\u578b\u548c\u900f\u89c6\u6b63\u786e\u6027\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u652f\u6301\u7684\u503c\u4e3a\u6807\u91cf\u548c\u5411\u91cf\u6d6e\u70b9\u7c7b\u578b\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"P")," \u652f\u6301\u7684\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolation::perspective")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolation::no_perspective")," \u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u4f60\u53ea\u80fd\u5728\u4ee5\u4e0b\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolant<T,P>")," \u7c7b\u578b\u58f0\u660e\u53d8\u91cf\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f5c\u4e3a\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"[[stage_in]]")," \u7684\u7247\u6bb5\u7740\u8272\u5668\u8f93\u5165\u53c2\u6570\u3002\u6b64\u7c7b\u58f0\u660e\u5fc5\u987b\u4e0e\u5177\u6709\u76f8\u540c\u540d\u79f0\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"[[user(name)]]")," \u5c5e\u6027\u7684\u76f8\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u9876\u70b9\u7740\u8272\u5668\u8f93\u51fa\u53c2\u6570\u5339\u914d\u3002\u8be5\u58f0\u660e\u4e0d\u80fd\u5177\u6709\u91c7\u6837\u548c\u63d2\u503c\u5c5e\u6027\uff08\u7b2c 5.4 \u8282\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f5c\u4e3a\u672c\u5730\u6216\u4e34\u65f6\u53d8\u91cf\uff0c\u9700\u8981\u5c06\u5176\u521d\u59cb\u5316\u4e3a\u4e0a\u8ff0\u53d8\u91cf\u7684\u526f\u672c\u3002"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"interpolant<T,P>")," \u53d8\u91cf\u4e0d\u4f1a\u81ea\u52a8\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u7684\u503c\u3002\u800c\u662f\u901a\u8fc7\u8c03\u7528\u51e0\u79cd\u63d2\u503c\u65b9\u6cd5\u4e4b\u4e00\u6765\u68c0\u7d22\u503c\uff08\u8bf7\u53c2\u9605\u7b2c 6.11 \u8282\uff09\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"P")," \u7684\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolation::perspective"),"\uff0c\u5219\u63d2\u503c\u5e94\u662f\u900f\u89c6\u6b63\u786e\u7684\u3002"))}g.isMDXComponent=!0}}]);