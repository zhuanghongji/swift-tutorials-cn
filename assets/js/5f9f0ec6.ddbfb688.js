"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},79106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const l={},r="\u56fe\u5f62\u51fd\u6570",o={unversionedId:"metal-shading-language-specification/graphics-functions/index",id:"metal-shading-language-specification/graphics-functions/index",title:"\u56fe\u5f62\u51fd\u6570",description:"\u672c\u8282\u53ca\u5176\u5b50\u8282\u4e2d\u7684\u56fe\u5f62\u51fd\u6570\u5728\u5934\u6587\u4ef6 \u4e2d\u5b9a\u4e49\u3002\u4f60\u53ea\u80fd\u4ece\u9876\u70b9\u51fd\u6570\u6216\u7247\u6bb5\u51fd\u6570\u8c03\u7528\u8fd9\u4e9b\u56fe\u5f62\u51fd\u6570\u3002",source:"@site/docs/metal-shading-language-specification/graphics-functions/index.mdx",sourceDirName:"metal-shading-language-specification/graphics-functions",slug:"/metal-shading-language-specification/graphics-functions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/graphics-functions/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/graphics-functions/index.mdx",tags:[],version:"current",lastUpdatedAt:1693285264,formattedLastUpdatedAt:"2023\u5e748\u670829\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u540c\u6b65\u548c SIMD \u7ec4\u529f\u80fd",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/synchronization-and-simd-group-functions/"},next:{title:"\u62c9\u6a21\u578b\u63d2\u503c",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/pull-model-interpolation/"}},p={},s=[{value:"6.10.1 \u7247\u6bb5\u51fd\u6570",id:"6101-\u7247\u6bb5\u51fd\u6570",level:2},{value:"6.10.1.1 \u7247\u6bb5\u51fd\u6570 - \u5bfc\u6570",id:"61011-\u7247\u6bb5\u51fd\u6570---\u5bfc\u6570",level:2},{value:"\u8868 6.18\u3002Metal \u6807\u51c6\u5e93\u4e2d\u7684\u884d\u751f\u7247\u6bb5\u51fd\u6570",id:"\u8868-618metal-\u6807\u51c6\u5e93\u4e2d\u7684\u884d\u751f\u7247\u6bb5\u51fd\u6570",level:2},{value:"\u8868 6.19\u3002Metal \u6807\u51c6\u5e93\u4e2d\u7684\u793a\u4f8b\u7247\u6bb5\u51fd\u6570",id:"\u8868-619metal-\u6807\u51c6\u5e93\u4e2d\u7684\u793a\u4f8b\u7247\u6bb5\u51fd\u6570",level:2},{value:"6.10.1.3 \u7247\u6bb5\u51fd\u6570 - \u6d41\u63a7\u5236",id:"61013-\u7247\u6bb5\u51fd\u6570---\u6d41\u63a7\u5236",level:2},{value:"\u8868 6.20\u3002Metal \u6807\u51c6\u5e93\u4e2d\u7684\u7247\u6bb5\u6d41\u63a7\u5236\u51fd\u6570",id:"\u8868-620metal-\u6807\u51c6\u5e93\u4e2d\u7684\u7247\u6bb5\u6d41\u63a7\u5236\u51fd\u6570",level:2}],c=(u="OrigninalPDF",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var u;const d={toc:s},f="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u56fe\u5f62\u51fd\u6570"},"\u56fe\u5f62\u51fd\u6570"),(0,i.kt)(c,{title:"6.10 Graphics Functions",mdxType:"OrigninalPDF"}),(0,i.kt)("p",null,"\u672c\u8282\u53ca\u5176\u5b50\u8282\u4e2d\u7684\u56fe\u5f62\u51fd\u6570\u5728\u5934\u6587\u4ef6 \u4e2d\u5b9a\u4e49\u3002\u4f60\u53ea\u80fd\u4ece\u9876\u70b9\u51fd\u6570\u6216\u7247\u6bb5\u51fd\u6570\u8c03\u7528\u8fd9\u4e9b\u56fe\u5f62\u51fd\u6570\u3002"),(0,i.kt)("h2",{id:"6101-\u7247\u6bb5\u51fd\u6570"},"6.10.1 \u7247\u6bb5\u51fd\u6570"),(0,i.kt)("p",null,"\u4f60\u53ea\u80fd\u5728\u7247\u6bb5\u51fd\u6570\uff08\u8bf7\u53c2\u9605\u7b2c 5.1.2 \u8282\uff09\u5185\u6216\u4ece\u7247\u6bb5\u51fd\u6570\u8c03\u7528\u7684\u51fd\u6570\u5185\u8c03\u7528\u672c\u8282\u4e2d\u7684\u51fd\u6570\uff08\u5728\u8868 6. 18 \u3001\u8868 6. 19 \u548c\u8868 6. 20 \u4e2d\u5217\u51fa\uff09\u3002\u5426\u5219\uff0c\u884c\u4e3a\u672a\u5b9a\u4e49\uff0c\u5e76\u53ef\u80fd\u5bfc\u81f4\u7f16\u8bd1\u65f6\u9519\u8bef\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u521b\u5efa\u7247\u6bb5\u51fd\u6570\u8f85\u52a9\u7ebf\u7a0b\u6765\u5e2e\u52a9\u8bc4\u4f30\u4e0e\u7247\u6bb5\u7ebf\u7a0b\u4e00\u8d77\u4f7f\u7528\u7684\u5bfc\u6570\uff08\u663e\u5f0f\u6216\u9690\u5f0f\uff09\u3002\u7247\u6bb5\u51fd\u6570\u8f85\u52a9\u7ebf\u7a0b\u6267\u884c\u4e0e\u975e\u8f85\u52a9\u7247\u6bb5\u7ebf\u7a0b\u76f8\u540c\u7684\u4ee3\u7801\uff0c\u4f46\u4e0d\u4f1a\u4ea7\u751f\u4fee\u6539\u6e32\u67d3\u76ee\u6807\u6216\u7247\u6bb5\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee\u7684\u4efb\u4f55\u5176\u4ed6\u5185\u5b58\u7684\u526f\u4f5c\u7528\u3002\u5c24\u5176\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u7247\u6bb5\u51fd\u6570\u6267\u884c\u5b8c\u6210\u800c\u6ca1\u6709\u5bf9\u6e32\u67d3\u76ee\u6807\u8fdb\u884c\u4efb\u4f55\u66f4\u65b0\u65f6\uff0c\u4e0e\u8f85\u52a9\u7ebf\u7a0b\u76f8\u5bf9\u5e94\u7684\u7247\u6bb5\u5c06\u88ab\u4e22\u5f03\u3002- \u7531\u8f85\u52a9\u7ebf\u7a0b\u6267\u884c\u7684\u5bf9\u7f13\u51b2\u533a\u548c\u7eb9\u7406\u7684\u5b58\u50a8\u548c\u539f\u5b50\u64cd\u4f5c\u5bf9\u4e0e\u7f13\u51b2\u533a\u6216\u7eb9\u7406\u5173\u8054\u7684\u5e95\u5c42\u5185\u5b58\u6ca1\u6709\u5f71\u54cd\u3002")),(0,i.kt)("h2",{id:"61011-\u7247\u6bb5\u51fd\u6570---\u5bfc\u6570"},"6.10.1.1 \u7247\u6bb5\u51fd\u6570 - \u5bfc\u6570"),(0,i.kt)("p",null,"Metal \u5305\u542b\u8868 6. 18 \u4e2d\u7684\u51fd\u6570\u6765\u8ba1\u7b97\u5bfc\u6570\u3002T \u662f float\u3001float2\u3001float3\u3001float4\u3001half\u3001half2\u3001half3 \u6216 half4 \u4e4b\u4e00\u3002"),(0,i.kt)("p",null,"\u5728\u975e\u5747\u5300\u63a7\u5236\u6d41\u4e2d\u5bfc\u6570\u662f\u672a\u5b9a\u4e49\u7684\u3002"),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a\u5728 Metal 2.3 \u4e4b\u524d\uff0cdiscard_fragment \u53ef\u80fd\u4f1a\u4f7f\u63a7\u5236\u6d41\u53d8\u5f97\u4e0d\u5747\u5300\u3002\u4ece Metal 2.3 \u5f00\u59cb\uff0cdiscard_fragment \u4e0d\u5f71\u54cd\u63a7\u5236\u6d41\u662f\u5426\u88ab\u8ba4\u4e3a\u662f\u975e\u5747\u5300\u7684\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 6.10.1.3 \u8282\u3002"),(0,i.kt)("h2",{id:"\u8868-618metal-\u6807\u51c6\u5e93\u4e2d\u7684\u884d\u751f\u7247\u6bb5\u51fd\u6570"},"\u8868 6.18\u3002Metal \u6807\u51c6\u5e93\u4e2d\u7684\u884d\u751f\u7247\u6bb5\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5185\u7f6e\u7247\u6bb5\u51fd\u6570\u63cf\u8ff0")),(0,i.kt)("p",null,"``` T dfdx(T p) \u8fd4\u56de\u6307\u5b9a\u503c\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u7a7a\u95f4 x \u5750\u6807\u7684\u9ad8\u7cbe\u5ea6\u504f\u5bfc\u6570\u3002````"),(0,i.kt)("p",null,"``` T dfdy(T p) \u8fd4\u56de\u6307\u5b9a\u503c\u76f8\u5bf9\u4e8e\u5c4f\u5e55\u7a7a\u95f4 y \u5750\u6807\u7684\u9ad8\u7cbe\u5ea6\u504f\u5bfc\u6570\u3002````"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T fwidth(T p) \u4f7f\u7528 p \u7684\u5c40\u90e8\u5dee\u5206\u8fd4\u56de x \u548c y \u7684\u7edd\u5bf9\u5bfc\u6570\u4e4b\u548c\uff1b\u5373 fabs(dfdx(p)) + fabs(dfdy(p))")),(0,i.kt)("p",null,"6.10.1.2 \u7247\u6bb5\u51fd\u6570 - \u793a\u4f8b"),(0,i.kt)("p",null,"Metal \u5305\u62ec\u8868 6 \u4e2d\u5217\u51fa\u7684\u6bcf\u4e2a\u6837\u672c\u51fd\u6570\u300219. get_num_samples \u548c get_sample_position \u8fd4\u56de\u989c\u8272\u9644\u4ef6\u7684\u6837\u672c\u6570\u4ee5\u53ca\u7ed9\u5b9a\u6837\u672c\u7d22\u5f15\u7684\u6837\u672c\u504f\u79fb\u91cf\u3002\u4f8b\u5982\uff0c\u5bf9\u4e8e\u900f\u660e\u5ea6\u8d85\u7ea7\u91c7\u6837\uff0c\u8fd9\u4e9b\u51fd\u6570\u53ef\u7528\u4e8e\u5bf9\u6bcf\u4e2a\u7247\u6bb5\u8fdb\u884c\u7740\u8272\uff0c\u4f46\u5bf9\u6bcf\u4e2a\u6837\u672c\u8fdb\u884c alpha \u6d4b\u8bd5\u3002"),(0,i.kt)("h2",{id:"\u8868-619metal-\u6807\u51c6\u5e93\u4e2d\u7684\u793a\u4f8b\u7247\u6bb5\u51fd\u6570"},"\u8868 6.19\u3002Metal \u6807\u51c6\u5e93\u4e2d\u7684\u793a\u4f8b\u7247\u6bb5\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5185\u7f6e\u7247\u6bb5\u51fd\u6570\u63cf\u8ff0")),(0,i.kt)("p",null,"``` uint get_num_samples() \u8fd4\u56de\u591a\u91cd\u91c7\u6837\u989c\u8272\u9644\u4ef6\u7684\u6837\u672c\u6570\u3002````"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"float2 get_sample_position(uint index)")),(0,i.kt)("p",null,"``` \u8fd4\u56de\u7ed9\u5b9a\u6837\u672c\u7d22\u5f15\u7d22\u5f15\u7684\u5f52\u4e00\u5316\u6837\u672c\u504f\u79fb\u91cf (x, y)\u3002x \u548c y \u7684\u503c\u5728 ","[0.0 ... 1.0]"," \u8303\u56f4\u5185\u3002````"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u6709\u81ea\u5b9a\u4e49\u6837\u672c\u4f4d\u7f6e\uff08\u4f7f\u7528 MTLRenderPassDescriptor \u7684 setSamplePositions:count: \u65b9\u6cd5\u8bbe\u7f6e\uff09\uff0c\u5219 get_sample_position(index) \u8fd4\u56de\u4e3a\u6307\u5b9a\u7d22\u5f15\u7f16\u7a0b\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("h2",{id:"61013-\u7247\u6bb5\u51fd\u6570---\u6d41\u63a7\u5236"},"6.10.1.3 \u7247\u6bb5\u51fd\u6570 - \u6d41\u63a7\u5236"),(0,i.kt)("p",null,"\u8868 6. 20 \u4e2d\u7684 Metal \u51fd\u6570\u7ec8\u6b62\u4e00\u4e2a\u7247\u6bb5\u3002"),(0,i.kt)("h2",{id:"\u8868-620metal-\u6807\u51c6\u5e93\u4e2d\u7684\u7247\u6bb5\u6d41\u63a7\u5236\u51fd\u6570"},"\u8868 6.20\u3002Metal \u6807\u51c6\u5e93\u4e2d\u7684\u7247\u6bb5\u6d41\u63a7\u5236\u51fd\u6570"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\u5185\u7f6e\u7247\u6bb5\u51fd\u6570\u63cf\u8ff0")),(0,i.kt)("p",null,"``` void Discard_fragment(void) \u5c06\u5f53\u524d\u7247\u6bb5\u6807\u8bb0\u4e3a\u5df2\u7ec8\u6b62\uff0c\u5e76\u4e22\u5f03\u7247\u6bb5\u51fd\u6570\u7684\u8be5\u7247\u6bb5\u7684\u8f93\u51fa\u3002````"),(0,i.kt)("p",null,"\u5728\u8c03\u7528 discard_fragment \u4e4b\u524d\u4ece\u7247\u6bb5\u7ebf\u7a0b\u5199\u5165\u7f13\u51b2\u533a\u6216\u7eb9\u7406\u4e0d\u4f1a\u88ab\u4e22\u5f03\u3002"),(0,i.kt)("p",null,"\u4e0e\u7247\u6bb5\u7ebf\u7a0b\u5173\u8054\u7684\u591a\u4e2a\u7247\u6bb5\u7ebf\u7a0b\u6216\u8f85\u52a9\u7ebf\u7a0b\u4e00\u8d77\u6267\u884c\u4ee5\u8ba1\u7b97\u5bfc\u6570\u3002\u5728 Metal 2.3 \u4e4b\u524d\uff0c\u5982\u679c\u8fd9\u4e9b\u7ebf\u7a0b\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff08\u4f46\u4e0d\u662f\u5168\u90e8\uff09\u6267\u884c discard_fragment \u51fd\u6570\uff0c\u5219\u8be5\u7ebf\u7a0b\u5c06\u7ec8\u6b62\uff0c\u5e76\u4e14\u4efb\u4f55\u6d3e\u751f\u8ba1\u7b97\uff08\u663e\u5f0f\u6216\u9690\u5f0f\uff09\u7684\u884c\u4e3a\u90fd\u672a\u5b9a\u4e49\u3002\u4ece Metal 2.3 \u5f00\u59cb\uff0cdiscard_fragment \u5c06\u7247\u6bb5\u6807\u8bb0\u4e3a\u7ec8\u6b62\uff0c\u540c\u65f6\u7ee7\u7eed\u5e76\u884c\u6267\u884c\uff0c\u5e76\u4e14\u5bf9\u662f\u5426\u5b9a\u4e49\u5bfc\u6570\u6ca1\u6709\u5f71\u54cd\u3002\u5373\u4f7f\u6267\u884c\u7ee7\u7eed\uff0c\u5199\u5165\u884c\u4e3a\u4ecd\u4e0e\u4ee5\u524d\u76f8\u540c\u3002\u5728 discard_fragment \u4e4b\u540e\uff0c\u7247\u6bb5\u5c06\u4e22\u5f03\u7247\u6bb5\u8f93\u51fa\u5e76\u4e22\u5f03\u6240\u6709\u5bf9\u7f13\u51b2\u533a\u6216\u7eb9\u7406\u7684\u5199\u5165\u3002"))}m.isMDXComponent=!0}}]);