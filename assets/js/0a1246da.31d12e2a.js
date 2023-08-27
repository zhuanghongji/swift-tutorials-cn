"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9466],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(t),d=a,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=t[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(87462),a=(t(67294),t(3905));const i={},l="\u56fe\u50cf\u5757",o={unversionedId:"metal-shading-language-specification/imageblocks/index",id:"metal-shading-language-specification/imageblocks/index",title:"\u56fe\u50cf\u5757",description:"iOS\uff1a\u4ece Metal 2 \u5f00\u59cb\u652f\u6301\u56fe\u50cf\u5757\u3002",source:"@site/docs/metal-shading-language-specification/imageblocks/index.mdx",sourceDirName:"metal-shading-language-specification/imageblocks",slug:"/metal-shading-language-specification/imageblocks/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/imageblocks/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/imageblocks/index.mdx",tags:[],version:"current",lastUpdatedAt:1693122607,formattedLastUpdatedAt:"2023\u5e748\u670827\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u91c7\u6837\u5668",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/samplers/"},next:{title:"\u805a\u5408\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/aggregate-types/"}},p={},m=[{value:"\u8868 2.8\u3002\u56fe\u50cf\u5757\u5207\u7247\u548c\u517c\u5bb9\u7684\u76ee\u6807\u7eb9\u7406\u683c\u5f0f",id:"\u8868-28\u56fe\u50cf\u5757\u5207\u7247\u548c\u517c\u5bb9\u7684\u76ee\u6807\u7eb9\u7406\u683c\u5f0f",level:2}],u=(c="OrigninalPDF",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const s={toc:m},d="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u56fe\u50cf\u5757"},"\u56fe\u50cf\u5757"),(0,a.kt)(u,{title:"2.11 Imageblocks",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"iOS\uff1a\u4ece Metal 2 \u5f00\u59cb\u652f\u6301\u56fe\u50cf\u5757\u3002"),(0,a.kt)("p",null,"macOS\uff1a\u4ece Metal 2. 3 \u5f00\u59cb\u652f\u6301\u56fe\u50cf\u5757\u3002"),(0,a.kt)("p",null,"\u56fe\u50cf\u5757\u662f\u5206\u914d\u5728\u7ebf\u7a0b\u7ec4\u5185\u5b58\u4e2d\u7684 2D \u6570\u636e\u7ed3\u6784\uff08\u7531\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u6837\u672c\u6570\u8868\u793a\uff09\uff0c\u662f\u5904\u7406 2D \u56fe\u50cf\u6570\u636e\u7684\u6709\u6548\u673a\u5236\u3002\u8be5\u7ed3\u6784\u7684\u6bcf\u4e2a\u5143\u7d20\u53ef\u4ee5\u662f\u6807\u91cf\u6216\u5411\u91cf\u6574\u6570\u6216\u6d6e\u70b9\u6570\u636e\u7c7b\u578b\u3001\u50cf\u7d20\u6570\u636e\u7c7b\u578b\uff08\u5728 2.7 \u8282\u7684\u8868 2. 6 \u4e2d\u6307\u5b9a\uff09\u3001\u8fd9\u4e9b\u7c7b\u578b\u7684\u6570\u7ec4\u6216\u4f7f\u7528\u8fd9\u4e9b\u7c7b\u578b\u6784\u5efa\u7684\u7ed3\u6784\u3002\u56fe\u50cf\u5757\u7684\u6570\u636e\u5e03\u5c40\u662f\u4e0d\u900f\u660e\u7684\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 (x, y) \u5750\u6807\u548c\u53ef\u9009\u7684\u6837\u672c\u7d22\u5f15\u6765\u8bbf\u95ee\u56fe\u50cf\u5757\u4e2d\u7684\u5143\u7d20\u3002\u56fe\u50cf\u5757\u4e2d\u4e0e\u7279\u5b9a (x, y) \u5173\u8054\u7684\u5143\u7d20\u662f\u6bcf\u7ebf\u7a0b\u56fe\u50cf\u5757\u6570\u636e\u6216\u53ea\u662f\u56fe\u50cf\u5757\u6570\u636e\u3002"),(0,a.kt)("p",null,"5.6 \u8282\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u56fe\u50cf\u5757\u5c5e\u6027\uff0c\u5305\u62ec [","[imageblock_data(type)]","] \u5c5e\u6027\u3002\u7b2c 6.13 \u8282\u5217\u51fa\u4e86\u56fe\u50cf\u5757\u7684\u5185\u7f6e\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u56fe\u50cf\u5757\u4ec5\u4e0e\u7247\u6bb5\u548c\u5185\u6838\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\u30025.6.3 \u548c 5.6.4 \u8282\u5206\u522b\u63cf\u8ff0\u4e86\u5982\u4f55\u8bbf\u95ee\u7247\u6bb5\u6216\u5185\u6838\u51fd\u6570\u4e2d\u7684\u56fe\u50cf\u5757\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u7247\u6bb5\u51fd\u6570\uff0c\u4f60\u53ea\u80fd\u8bbf\u95ee\u7247\u6bb5\u7684\u56fe\u50cf\u5757\u6570\u636e\uff08\u7531\u7247\u6bb5\u5728\u56fe\u5757\u4e2d\u7684\u50cf\u7d20\u4f4d\u7f6e\u6807\u8bc6\uff09\u3002\u4f7f\u7528\u56fe\u5757\u5927\u5c0f\u6765\u5bfc\u51fa\u56fe\u50cf\u5757\u5c3a\u5bf8\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5185\u6838\u51fd\u6570\uff0c\u7ebf\u7a0b\u7ec4\u4e2d\u7684\u6240\u6709\u7ebf\u7a0b\u90fd\u53ef\u4ee5\u8bbf\u95ee\u56fe\u50cf\u5757\u3002\u5728\u6307\u5b9a\u56fe\u50cf\u5757\u5c3a\u5bf8\u4e4b\u524d\uff0c\u4f60\u901a\u5e38\u53ef\u4ee5\u4ece\u7ebf\u7a0b\u7ec4\u5927\u5c0f\u5bfc\u51fa\u56fe\u50cf\u5757\u5c3a\u5bf8\u3002"),(0,a.kt)("p",null,"\u56fe\u50cf\u5757",(0,a.kt)("em",{parentName:"p"},"\u5207\u7247"),"\u6307\u7684\u662f\u56fe\u50cf\u5757\u4e2d\u7684\u533a\u57df\uff0c\u5176\u63cf\u8ff0\u56fe\u50cf\u5757\u4e2d\u6240\u6709\u50cf\u7d20\u4f4d\u7f6e\u6216\u7ebf\u7a0b\u7684\u56fe\u50cf\u5757\u6570\u636e\u7ed3\u6784\u4e2d\u7ed9\u5b9a\u5143\u7d20\u7684\u503c\u3002imageblock \u5207\u7247\u7684\u5b58\u50a8\u7c7b\u578b\u5fc5\u987b\u4e0e\u76ee\u6807\u7eb9\u7406\u7684\u7eb9\u7406\u683c\u5f0f\u517c\u5bb9\uff0c\u5982\u8868 2.8 \u6240\u793a\u3002"),(0,a.kt)("h2",{id:"\u8868-28\u56fe\u50cf\u5757\u5207\u7247\u548c\u517c\u5bb9\u7684\u76ee\u6807\u7eb9\u7406\u683c\u5f0f"},"\u8868 2.8\u3002\u56fe\u50cf\u5757\u5207\u7247\u548c\u517c\u5bb9\u7684\u76ee\u6807\u7eb9\u7406\u683c\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u50cf\u7d20\u5b58\u50a8\u7c7b\u578b")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u517c\u5bb9\u7684\u7eb9\u7406\u683c\u5f0f")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u6d6e\u70b9\uff0c\u534a R32Float\u3001R16Float\u3001R8Unorm\u3001R8Snorm\u3001R16Unorm\u3001R16Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"float2\u3001half2 RG32Float\u3001RG16Float\u3001RG8Unorm\u3001RG8Snorm\u3001RG16Unorm\u3001RG16Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"float4\u3001half4 RGBA32Float\u3001RGBA16Float\u3001RGBA8Unorm\u3001RGBA8Snorm\u3001RGBA16Unorm\u3001RGBA16Snorm\u3001RGB10A2Unorm\u3001RG11B10Float\u3001RGB9E5Float")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"int\u3001\u77ed R32Sint\u3001R16Sint\u3001R8Sint")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"int2\u3001short2 RG32Sint\u3001RG16Sint\u3001RG8Sint")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"int4\u3001short4 RGBA32Sint\u3001RGBA16Sint\u3001RGBA8Sint")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uint\u3001ushort R32Uint\u3001R16Uint\u3001R8Uint")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uint2\u3001ushort2 RG32Uint\u3001RG16Uint\u3001RG8Uint")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uint4\u3001ushort4 RGBA32Uint\u3001RGBA16Uint\u3001RGBA8Uint")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u50cf\u7d20\u5b58\u50a8\u7c7b\u578b")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u517c\u5bb9\u7684\u7eb9\u7406\u683c\u5f0f")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"r8Unorm A8Unorm\uff0cR8Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"r8snorm R8Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"r16unorm<T> R16Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"r16snorm<T> R16Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rg8unorm<T> RG8Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rg8snorm<T> RG8Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rg16unorm<T> RG16Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rg16snorm<T> RG16Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rgba8unorm RGBA8Unorm\uff0cBGRA8Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"srgba8unorm RGBA8Unorm_sRGB\uff0cBGRA8Unorm_sRGB")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rgba8snorm RGBA8Snorm\uff0cBGRA8Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rgba16unorm<T> RGBA16Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rgba16snorm<T> RGBA16Snorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rgb10a2<T> RGB10A2Unorm")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rg11b10f RG11B10Float")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"rgb9e5<T> RGB9E5Float")))}k.isMDXComponent=!0}}]);