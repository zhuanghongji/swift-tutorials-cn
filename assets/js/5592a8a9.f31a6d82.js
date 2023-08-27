"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=l,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={},o="\u91c7\u6837\u5668",p={unversionedId:"metal-shading-language-specification/samplers/index",id:"metal-shading-language-specification/samplers/index",title:"\u91c7\u6837\u5668",description:"\u91c7\u6837\u5668\u7c7b\u578b\u6807\u8bc6\u5982\u4f55\u5bf9\u7eb9\u7406\u8fdb\u884c\u91c7\u6837\u3002Metal API \u5141\u8bb8\u4f60\u521b\u5efa\u91c7\u6837\u5668\u5bf9\u8c61\u5e76\u5c06\u5176\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u3002\u4f60\u53ef\u4ee5\u5728\u7a0b\u5e8f\u6e90\u4e2d\u800c\u4e0d\u662f\u5728 API \u4e2d\u63cf\u8ff0\u91c7\u6837\u5668\u5bf9\u8c61\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u60c5\u51b5\uff0c\u4f60\u53ea\u80fd\u6307\u5b9a\u91c7\u6837\u5668\u72b6\u6001\u7684\u5b50\u96c6\uff1a\u5bfb\u5740\u6a21\u5f0f\u3001\u8fc7\u6ee4\u6a21\u5f0f\u3001\u6807\u51c6\u5316\u5750\u6807\u548c\u6bd4\u8f83\u51fd\u6570\u3002",source:"@site/docs/metal-shading-language-specification/samplers/index.mdx",sourceDirName:"metal-shading-language-specification/samplers",slug:"/metal-shading-language-specification/samplers/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/samplers/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/samplers/index.mdx",tags:[],version:"current",lastUpdatedAt:1693122607,formattedLastUpdatedAt:"2023\u5e748\u670827\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u7eb9\u7406",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/textures/"},next:{title:"\u56fe\u50cf\u5757",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/imageblocks/"}},i={},c=[{value:"\u8868 2.7\u3002\u91c7\u6837\u5668\u72b6\u6001\u679a\u4e3e\u503c",id:"\u8868-27\u91c7\u6837\u5668\u72b6\u6001\u679a\u4e3e\u503c",level:2}],s=(u="OrigninalPDF",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var u;const m={toc:c},d="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u91c7\u6837\u5668"},"\u91c7\u6837\u5668"),(0,l.kt)(s,{title:"2.10 Samplers",mdxType:"OrigninalPDF"}),(0,l.kt)("p",null,"\u91c7\u6837\u5668\u7c7b\u578b\u6807\u8bc6\u5982\u4f55\u5bf9\u7eb9\u7406\u8fdb\u884c\u91c7\u6837\u3002Metal API \u5141\u8bb8\u4f60\u521b\u5efa\u91c7\u6837\u5668\u5bf9\u8c61\u5e76\u5c06\u5176\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u3002\u4f60\u53ef\u4ee5\u5728\u7a0b\u5e8f\u6e90\u4e2d\u800c\u4e0d\u662f\u5728 API \u4e2d\u63cf\u8ff0\u91c7\u6837\u5668\u5bf9\u8c61\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u60c5\u51b5\uff0c\u4f60\u53ea\u80fd\u6307\u5b9a\u91c7\u6837\u5668\u72b6\u6001\u7684\u5b50\u96c6\uff1a\u5bfb\u5740\u6a21\u5f0f\u3001\u8fc7\u6ee4\u6a21\u5f0f\u3001\u6807\u51c6\u5316\u5750\u6807\u548c\u6bd4\u8f83\u51fd\u6570\u3002"),(0,l.kt)("p",null,"\u8868 2. 7 \u5217\u51fa\u4e86\u652f\u6301\u7684\u91c7\u6837\u5668\u72b6\u6001\u679a\u4e3e\u53ca\u5176\u5173\u8054\u503c\uff08\u548c\u9ed8\u8ba4\u503c\uff09\u3002\u5f53\u91c7\u6837\u5668\u5728 Metal \u7a0b\u5e8f\u6e90\u4e2d\u521d\u59cb\u5316\u65f6\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a\u8fd9\u4e9b\u72b6\u6001\u3002"),(0,l.kt)("h2",{id:"\u8868-27\u91c7\u6837\u5668\u72b6\u6001\u679a\u4e3e\u503c"},"\u8868 2.7\u3002\u91c7\u6837\u5668\u72b6\u6001\u679a\u4e3e\u503c"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u679a\u4e3e\u6709\u6548\u503c\u63cf\u8ff0")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5750\u6807\u5f52\u4e00\u5316\uff08\u9ed8\u8ba4\uff09\u50cf\u7d20")),(0,l.kt)("p",null,"``` \u5f53\u4ece\u7eb9\u7406\u91c7\u6837\u65f6\uff0c\u6307\u5b9a\u7eb9\u7406\u5750\u6807\u662f\u5426\u4e3a\u6807\u51c6\u5316\u503c\u3002````"),(0,l.kt)("p",null,"`",(0,l.kt)("inlineCode",{parentName:"p"}," \u5730\u5740\u91cd\u590dmirrored_repeat \u94b3\u4f4d\u5230\u8fb9\u7f18\uff08\u9ed8\u8ba4\uff09\u94b3\u4f4d\u5230\u96f6\u94b3\u4f4d\u5230\u8fb9\u754c")),(0,l.kt)("p",null,"``` \u8bbe\u7f6e\u6240\u6709\u7eb9\u7406\u5750\u6807\u7684\u5bfb\u5740\u6a21\u5f0f\u3002````"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u679a\u4e3e\u6709\u6548\u503c\u63cf\u8ff0")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"s_address t_address r_address")),(0,l.kt)("p",null,"`",(0,l.kt)("inlineCode",{parentName:"p"}," \u91cd\u590d\u955c\u50cf_\u91cd\u590d\u94b3\u4f4d\u5230\u8fb9\u7f18\uff08\u9ed8\u8ba4\uff09\u94b3\u4f4d\u5230\u96f6\u94b3\u4f4d\u5230\u8fb9\u754c")),(0,l.kt)("p",null,"`` \u8bbe\u7f6e\u5355\u4e2a\u7eb9\u7406\u5750\u6807\u7684\u5bfb\u5740\u6a21\u5f0f\u3002````"),(0,l.kt)("p",null,"``` border_color macOS\uff1aMetal 1 .2\u3002iOS\uff1aMetal 2.3\u3002````"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u900f\u660e_\u9ed1\u8272\uff08\u9ed8\u8ba4\uff09\u4e0d\u900f\u660e_\u9ed1\u8272\u4e0d\u900f\u660e_\u767d\u8272")),(0,l.kt)("p",null,"``` \u6307\u5b9a\u4e0e clamp_to_border \u5bfb\u5740\u6a21\u5f0f\u4e00\u8d77\u4f7f\u7528\u7684\u8fb9\u6846\u989c\u8272\u3002````"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u8fc7\u6ee4\u6700\u8fd1\uff08\u9ed8\u8ba4\uff09\u7ebf\u6027")),(0,l.kt)("p",null,"``` \u8bbe\u7f6e\u7eb9\u7406\u91c7\u6837\u7684\u653e\u5927\u548c\u7f29\u5c0f\u8fc7\u6ee4\u6a21\u5f0f\u3002````"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mag_filter \u6700\u8fd1\uff08\u9ed8\u8ba4\uff09\u7ebf\u6027")),(0,l.kt)("p",null,"``` \u8bbe\u7f6e\u7eb9\u7406\u91c7\u6837\u7684\u653e\u5927\u8fc7\u6ee4\u6a21\u5f0f\u3002````"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"min_filter \u6700\u63a5\u8fd1\uff08\u9ed8\u8ba4\uff09\u7ebf\u6027")),(0,l.kt)("p",null,"``` \u8bbe\u7f6e\u7eb9\u7406\u91c7\u6837\u7684\u7f29\u5c0f\u8fc7\u6ee4\u6a21\u5f0f\u3002````"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mip_filter \u65e0\uff08\u9ed8\u8ba4\uff09\u6700\u63a5\u8fd1\u7684\u7ebf\u6027")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"}," \u8bbe\u7f6e\u7eb9\u7406\u91c7\u6837\u7684 mipmap \u8fc7\u6ee4\u6a21\u5f0f\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u5bf9\u7eb9\u7406\u8fdb\u884c\u91c7\u6837\uff0c\u5c31\u597d\u50cf\u5b83\u5177\u6709\u5355\u4e2a mip \u7ea7\u522b\u4e00\u6837\u3002\u6240\u6709\u6837\u672c\u5747\u4ece\u7ea7\u522b 0 \u8bfb\u53d6\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"compare_func \u4ece\u4e0d\uff08\u9ed8\u8ba4\uff09 less less_equal \u66f4\u5927greater_equal \u7b49\u4e8e not_equal \u59cb\u7ec8 ")),(0,l.kt)("p",null,"``` \u8bbe\u7f6e sample_compare \u548c gather_compare \u7eb9\u7406\u51fd\u6570\u4f7f\u7528\u7684\u6bd4\u8f83\u6d4b\u8bd5\u3002````"),(0,l.kt)("p",null,"macOS\uff1a\u4ece Metal 1.2 \u5f00\u59cb\u652f\u6301 lamp_to_border \u5730\u5740\u6a21\u5f0f\u548c border_color\u3002"),(0,l.kt)("p",null,"iOS\uff1a\u4ece Metal 2.3 \u5f00\u59cb\u652f\u6301 Clip_to_border \u5730\u5740\u6a21\u5f0f\u6216 border_color\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 clamp_to_border\uff0c\u5728\u7eb9\u7406\u5916\u90e8\u91c7\u6837\u4ec5\u4f7f\u7528\u7eb9\u7406\u5750\u6807\u7684\u8fb9\u6846\u989c\u8272\uff08\u5e76\u4e14\u4e0d\u4f7f\u7528\u7eb9\u7406\u8fb9\u7f18\u7684\u4efb\u4f55\u989c\u8272\uff09\u3002\u5982\u679c\u5730\u5740\u6a21\u5f0f\u4e3a clamp_to_border\uff0c\u5219 border_color \u6709\u6548\u3002"),(0,l.kt)("p",null,"\u94b3\u4f4d\u5230\u96f6\u76f8\u5f53\u4e8e\u94b3\u4f4d\u5230\u8fb9\u754c\uff0c\u5176\u8fb9\u6846\u989c\u8272\u4e3a\u900f\u660e\u9ed1\u8272\uff080.0\uff0c0.0\uff0c0.0\uff09\uff0c\u5e76\u4e14\u5177\u6709\u6765\u81ea\u7eb9\u7406\u7684 alpha \u5206\u91cf\u503c\u3002\u5982\u679c clamp_to_zero \u662f\u4e00\u4e2a\u6216\u591a\u4e2a\u7eb9\u7406\u5750\u6807\u7684\u5730\u5740\u6a21\u5f0f\uff0c\u5219\u5f53\u8fb9\u6846\u989c\u8272\u4e3a transparent_black \u65f6\uff0c\u5176\u4ed6\u7eb9\u7406\u5750\u6807\u53ef\u4ee5\u4f7f\u7528 clamp_to_border \u7684\u5730\u5740\u6a21\u5f0f\u3002\u5426\u5219\uff0c\u884c\u4e3a\u662f\u672a\u5b9a\u4e49\u7684\u3002"),(0,l.kt)("p",null,"\u5982\u679c coord \u8bbe\u7f6e\u4e3a Pixel\uff0c\u5219 min_filter \u548c mag_filter \u503c\u5fc5\u987b\u76f8\u540c\uff0cmip_filter \u503c\u5fc5\u987b\u4e3a none\uff0c\u5e76\u4e14\u5730\u5740\u6a21\u5f0f\u5fc5\u987b\u4e3a\u94b3\u4f4d\u5230\u96f6\u3001\u94b3\u4f4d\u5230\u8fb9\u754c\u6216\u94b3\u4f4d\u5230\u8fb9\u7f18\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u679a\u4e3e\u7c7b\u578b\u4e4b\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u6307\u5b9a\u91c7\u6837\u5668\u7684\u6700\u5927\u5404\u5411\u5f02\u6027\u8fc7\u6ee4\u548c LOD\uff08\u7ec6\u8282\u7ea7\u522b\uff09\u8303\u56f4\uff1a"),(0,l.kt)("p",null,"max_anisotropy\uff08\u6574\u6570\u503c\uff09"),(0,l.kt)("p",null,"lod_clamp\uff08\u6d6e\u52a8\u6700\u5c0f\u503c\uff0c\u6d6e\u52a8\u6700\u5927\u503c\uff09"),(0,l.kt)("p",null,"\u4ee5\u4e0b Metal \u7a0b\u5e8f\u6e90\u8bf4\u660e\u4e86\u58f0\u660e\u91c7\u6837\u5668\u7684\u51e0\u79cd\u65b9\u6cd5\u3002\uff08\u4e0b\u9762\u4ee3\u7801\u4e2d\u51fa\u73b0\u7684 Sampler(n) \u5c5e\u6027\u5728\u7b2c 5.2.1 \u8282\u4e2d\u8fdb\u884c\u4e86\u89e3\u91ca\u3002\uff09\u8bf7\u6ce8\u610f\uff0c\u7a0b\u5e8f\u6e90\u4e2d\u58f0\u660e\u7684\u91c7\u6837\u5668\u6216\u5e38\u91cf\u7f13\u51b2\u533a\u4e0d\u9700\u8981\u8fd9\u4e9b\u5c5e\u6027\u9650\u5b9a\u7b26\u3002\u4f60\u5fc5\u987b\u4f7f\u7528 constexpr \u6765\u58f0\u660e\u5728 MSL \u6e90\u4ee3\u7801\u4e2d\u521d\u59cb\u5316\u7684\u91c7\u6837\u5668\u3002"),(0,l.kt)("p",null,"constexpr \u91c7\u6837\u5668 s(\u5750\u6807::\u50cf\u7d20, \u5730\u5740::clamp_to_zero, \u8fc7\u6ee4\u5668::\u7ebf\u6027);"),(0,l.kt)("p",null,"constexpr \u91c7\u6837\u5668 a(coord::\u5f52\u4e00\u5316);"),(0,l.kt)("p",null,"constexpr \u91c7\u6837\u5668 b(\u5730\u5740::\u91cd\u590d);"),(0,l.kt)("p",null,"constexpr \u91c7\u6837\u5668 s(\u5730\u5740::clamp_to_zero, \u8fc7\u6ee4\u5668::\u7ebf\u6027, Compare_func::less);"),(0,l.kt)("p",null,"constexpr \u91c7\u6837\u5668 s(\u5730\u5740::clamp_to_zero\u3001\u8fc7\u6ee4\u5668::\u7ebf\u6027\u3001compare_func::less\u3001max_anisotropy(10)\u3001lod_clamp(0.0f\u3001MAXFLOAT));"),(0,l.kt)("p",null,"kernel void my_kernel(device float4 ","*","p [","[buffer(0)]","],texture2d img [","[texture(0)]","],\u91c7\u6837\u5668 smp [","[sampler(3)]","], ...) {"),(0,l.kt)("p",null,"}"))}f.isMDXComponent=!0}}]);