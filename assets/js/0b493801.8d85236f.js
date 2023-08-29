"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9972],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||l;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},i="\u50cf\u7d20\u6570\u636e\u7c7b\u578b",o={unversionedId:"metal-shading-language-specification/pixel-data-types/index",id:"metal-shading-language-specification/pixel-data-types/index",title:"\u50cf\u7d20\u6570\u636e\u7c7b\u578b",description:"iOS\uff1a\u81ea Metal 2 \u8d77\u652f\u6301\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u3002",source:"@site/docs/metal-shading-language-specification/pixel-data-types/index.mdx",sourceDirName:"metal-shading-language-specification/pixel-data-types",slug:"/metal-shading-language-specification/pixel-data-types/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/pixel-data-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/pixel-data-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1693285264,formattedLastUpdatedAt:"2023\u5e748\u670829\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u539f\u5b50\u6570\u636e\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/atomic-data-types/"},next:{title:"\u7f13\u51b2\u533a",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/buffers/"}},p={},u=[{value:"\u8868 2.6\u3002Metal \u50cf\u7d20\u6570\u636e\u7c7b\u578b",id:"\u8868-26metal-\u50cf\u7d20\u6570\u636e\u7c7b\u578b",level:2}],c=(s="OrigninalPDF",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var s;const d={toc:u},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u50cf\u7d20\u6570\u636e\u7c7b\u578b"},"\u50cf\u7d20\u6570\u636e\u7c7b\u578b"),(0,r.kt)(c,{title:"2.7 Pixel Data Types",mdxType:"OrigninalPDF"}),(0,r.kt)("p",null,"iOS\uff1a\u81ea Metal 2 \u8d77\u652f\u6301\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"macOS\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"Metal \u50cf\u7d20\u6570\u636e\u7c7b\u578b\u662f\u4e00\u79cd\u6a21\u677f\u5316\u7c7b\u578b\uff0c\u63cf\u8ff0\u50cf\u7d20\u683c\u5f0f\u7c7b\u578b\u53ca\u5176\u5bf9\u5e94\u7684 ALU \u7c7b\u578b\u3002ALU \u7c7b\u578b\u8868\u793a\u52a0\u8f7d\u64cd\u4f5c\u8fd4\u56de\u7684\u7c7b\u578b\u548c\u4e3a\u5b58\u50a8\u64cd\u4f5c\u6307\u5b9a\u7684\u8f93\u5165\u7c7b\u578b\u3002\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u901a\u5e38\u5728\u6240\u6709\u5730\u5740\u7a7a\u95f4\u4e2d\u53ef\u7528\u3002\uff08\u6709\u5173\u5730\u5740\u7a7a\u95f4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 4 \u8282\u3002\uff09"),(0,r.kt)("p",null,"\u8868 2. 6 \u5217\u51fa\u4e86 MSL \u4e2d\u652f\u6301\u7684\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u53ca\u5176\u5927\u5c0f\u548c\u5bf9\u9f50\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u8868-26metal-\u50cf\u7d20\u6570\u636e\u7c7b\u578b"},"\u8868 2.6\u3002Metal \u50cf\u7d20\u6570\u636e\u7c7b\u578b"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u652f\u6301\u7684 T \u503c")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"}," \u5bf9\u9f50\u65b9\u5f0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"r8unorm half \u6216 float 1 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"r8snorm half \u6216 float 1 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"r16unorm<T> float 2 2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"r16snorm<T> float 2 2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rg8unorm half2 \u6216 float2 2 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u652f\u6301\u7684 T \u503c")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u5927\u5c0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"}," \u5bf9\u9f50\u65b9\u5f0f\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rg8snorm half2 \u6216 float2 2 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rg16unorm<T> float2 4 2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rg16snorm<T> float2 4 2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rgba8unorm half4 \u6216 float4 4 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"srgba8unorm half4 \u6216 float4 4 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rgba8snorm half4 \u6216 float4 4 1")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rgba16unorm<T> float4 8 2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rgba16snorm<T> float4 8 2")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rgb10a2 half4 \u6216 float4 4 4")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rg11b10f half3 \u6216 float3 4 4")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rgb9e5 half3 \u6216 float3 4 4")),(0,r.kt)("p",null,"\u4ec5\u5141\u8bb8\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u4e0e\u5176\u5bf9\u5e94\u7684 ALU \u7c7b\u578b\u4e4b\u95f4\u7684\u8d4b\u503c\u548c\u76f8\u7b49/\u4e0d\u7b49\u6bd4\u8f83\u3002\uff08\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86 buffer(n) \u5c5e\u6027\uff0c\u7b2c 5.2.1 \u8282\u5bf9\u6b64\u8fdb\u884c\u4e86\u89e3\u91ca\u3002\uff09"),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"kernel void\nmy_kernel(device rgba8unorm<half4> *p [[buffer(0)]],\n     uint gid [[thread_position_in_grid]], \u2026)\n{\nrgba8unorm<half4> x = p[index]; half4 val = p[gid]; \u2026\np[gid] = val;\np[index] = x;\n}\n")),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Foo {\nrgba8unorm<half4> a;\n};\n\nkernel void\nmy_kernel(device Foo *p [[buffer(0)]],\n     uint gid [[thread_position_in_grid]], \u2026)\n{\nhalf4 a = p[gid].a;\n\u2026\np[gid].a = a;\n}\n")))}m.isMDXComponent=!0}}]);