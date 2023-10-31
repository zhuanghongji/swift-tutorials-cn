"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||r;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={},o="\u62c9\u6a21\u578b\u63d2\u503c",l={unversionedId:"metal-shading-language-specification/pull-model-interpolation/index",id:"metal-shading-language-specification/pull-model-interpolation/index",title:"\u62c9\u6a21\u578b\u63d2\u503c",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301\u62c9\u6a21\u578b\u63d2\u503c\u3002",source:"@site/docs/metal-shading-language-specification/pull-model-interpolation/index.mdx",sourceDirName:"metal-shading-language-specification/pull-model-interpolation",slug:"/metal-shading-language-specification/pull-model-interpolation/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/pull-model-interpolation/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/pull-model-interpolation/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u56fe\u5f62\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/graphics-functions/"},next:{title:"\u7eb9\u7406\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/texture-functions/"}},p={},s=[],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=c("ToBePolishedAfterTranslation"),u=c("OriginalPDF"),f=c("TableView"),m={toc:s},g="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u62c9\u6a21\u578b\u63d2\u503c"},"\u62c9\u6a21\u578b\u63d2\u503c"),(0,a.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(u,{title:"6.11 Pull-Model interpolation",mdxType:"OriginalPDF"}),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301\u62c9\u6a21\u578b\u63d2\u503c\u3002"),(0,a.kt)("p",null,"\u63d2\u503c\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolant<T,P>")," \uff08\u7b2c 2.18 \u8282\uff09\u548c\u76f8\u5173\u65b9\u6cd5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"<metal_interpolate>")," \u4e2d\u5b9a\u4e49\u3002\u5728\u7247\u6bb5\u51fd\u6570\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528\u5176\u65b9\u6cd5\u6765\u663e\u5f0f\u63d2\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"interpolant<T,P>")," \u7c7b\u578b\u7684\u503c\uff0c\u5982\u4e0b\u6240\u793a\u3002\u63d2\u503c\u53ef\u4ee5\u4ee5\u4e0d\u540c\u7684\u6a21\u5f0f\u88ab\u591a\u6b21\u91c7\u6837\u548c\u63d2\u503c\uff0c\u5e76\u4e14\u53ef\u4ee5\u88ab\u4f20\u9012\u5230\u5176\u5b83\u51fd\u6570\u4ee5\u5728\u90a3\u91cc\u88ab\u91c7\u6837\u548c\u63d2\u503c\u3002\u900f\u89c6\u6b63\u786e\u6027\u5728\u53c2\u6570\u7684\u6240\u6709\u63d2\u503c\u4e2d\u7531\u5176\u7c7b\u578b\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"P")," \u503c\u56fa\u5b9a\u3002"),(0,a.kt)(f,{num:"",title:"",headers:["Interpolant method","Description"],datasList:[["T interpolate_at_center()","Sample shader input at the center of a pixel, returning the same value as if the input had type T with `[[center_perspective]]` or `[[center_no_perspective]]`."],["T interpolate_at_centroid()","Sample shader input within the covered area of the pixel, returning the same value as if the input had type T with `[[centroid_perspective]]` or `[[centroid_no_perspective]]`."],["T interpolate_at_offset(float2 offset)","Sample shader input at a specified window-coordinate offset from a pixel's top-left corner. Allowable offset components are in the range `[0.0, 1.0)` along a 1/16 pixel grid."],["T interpolate_at_sample(uint sample)","Sample shader input at the location of the specified sample index, returningthe same value as if the input had type T with `[[sample_perspective]]` or `[[sample_no_perspective]]` and was in the specified per-sample evaluation of the shader. If a sample of the given index does not exist, the position of interpolation is undefined."]],mdxType:"TableView"}))}h.isMDXComponent=!0}}]);