"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(g,s(s({ref:t},i),{},{components:r})):n.createElement(g,s({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},28016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},s="\u805a\u5408\u7c7b\u578b",o={unversionedId:"metal-shading-language-specification/aggregate-types/index",id:"metal-shading-language-specification/aggregate-types/index",title:"\u805a\u5408\u7c7b\u578b",description:"Metal \u652f\u6301\u591a\u79cd\u805a\u5408\u7c7b\u578b\uff1a\u6570\u7ec4\u3001\u7ed3\u6784\u3001\u7c7b\u548c\u8054\u5408\u3002",source:"@site/docs/metal-shading-language-specification/aggregate-types/index.mdx",sourceDirName:"metal-shading-language-specification/aggregate-types",slug:"/metal-shading-language-specification/aggregate-types/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/aggregate-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/aggregate-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1693122607,formattedLastUpdatedAt:"2023\u5e748\u670827\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u56fe\u50cf\u5757",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/imageblocks/"},next:{title:"\u53c2\u6570\u7f13\u51b2\u533a",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/argument-buffers/"}},c={},p=[{value:"2.12.1 \u7eb9\u7406\u6570\u7ec4\u3001\u7eb9\u7406\u7f13\u51b2\u533a\u548c\u91c7\u6837\u5668",id:"2121-\u7eb9\u7406\u6570\u7ec4\u7eb9\u7406\u7f13\u51b2\u533a\u548c\u91c7\u6837\u5668",level:2},{value:"2.12.1.1 \u4f7f\u7528\u8fd0\u7b97\u7b26\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20",id:"21211-\u4f7f\u7528\u8fd0\u7b97\u7b26\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20",level:2},{value:"2.12.1.2 \u9635\u5217\u5bb9\u91cf",id:"21212-\u9635\u5217\u5bb9\u91cf",level:2},{value:"2.12.1.3 \u6a21\u677f\u5316\u6570\u7ec4\u7684\u6784\u9020\u51fd\u6570",id:"21213-\u6a21\u677f\u5316\u6570\u7ec4\u7684\u6784\u9020\u51fd\u6570",level:2},{value:"2.12.2 \u7f13\u51b2\u533a\u3001\u7eb9\u7406\u548c\u91c7\u6837\u5668\u7684\u7ed3\u6784",id:"2122-\u7f13\u51b2\u533a\u7eb9\u7406\u548c\u91c7\u6837\u5668\u7684\u7ed3\u6784",level:2}],i=(u="OrigninalPDF",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:p},f="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u805a\u5408\u7c7b\u578b"},"\u805a\u5408\u7c7b\u578b"),(0,a.kt)(i,{title:"2.12 Aggregate Types",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"Metal \u652f\u6301\u591a\u79cd\u805a\u5408\u7c7b\u578b\uff1a\u6570\u7ec4\u3001\u7ed3\u6784\u3001\u7c7b\u548c\u8054\u5408\u3002"),(0,a.kt)("p",null,"\u4e0d\u8981\u6307\u5b9a\u5177\u6709\u5730\u5740\u7a7a\u95f4\u5c5e\u6027\u7684\u7ed3\u6784\u6210\u5458\uff0c\u9664\u975e\u8be5\u6210\u5458\u662f\u6307\u9488\u7c7b\u578b\u3002\u805a\u5408\u7c7b\u578b\u7684\u6240\u6709\u6210\u5458\u5fc5\u987b\u5c5e\u4e8e\u540c\u4e00\u5730\u5740\u7a7a\u95f4\u3002\uff08\u6709\u5173\u5730\u5740\u7a7a\u95f4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 4 \u8282\u3002\uff09"),(0,a.kt)("h2",{id:"2121-\u7eb9\u7406\u6570\u7ec4\u7eb9\u7406\u7f13\u51b2\u533a\u548c\u91c7\u6837\u5668"},"2.12.1 \u7eb9\u7406\u6570\u7ec4\u3001\u7eb9\u7406\u7f13\u51b2\u533a\u548c\u91c7\u6837\u5668"),(0,a.kt)("p",null,"iOS\uff1a\u81ea Metal 1.2 \u8d77\u652f\u6301\u7eb9\u7406\u6570\u7ec4\uff1b\u81ea Metal 2 \u4ee5\u6765\u7684\u91c7\u6837\u5668\u9635\u5217\uff1b\u81ea Metal 2.1 \u4ee5\u6765\u7684\u7eb9\u7406\u7f13\u51b2\u533a\u6570\u7ec4\u3002macOS\uff1a\u81ea Metal 2 \u8d77\u652f\u6301\u7eb9\u7406\u6570\u7ec4\uff1b\u81ea Metal 2 \u4ee5\u6765\u7684\u91c7\u6837\u5668\u9635\u5217\uff1b\u81ea Metal 2.1 \u4ee5\u6765\u7684\u7eb9\u7406\u7f13\u51b2\u533a\u6570\u7ec4\u3002"),(0,a.kt)("p",null,"\u5c06\u7eb9\u7406\u6570\u7ec4\u58f0\u660e\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"array<typename T, size_t N>\nconst array<typename T, size_t N>\n")),(0,a.kt)("p",null,"typename \u5e94\u662f\u4f7f\u7528 access::read \u6216 access::sample \u5c5e\u6027\u58f0\u660e\u7684\u7eb9\u7406\u7c7b\u578b\u3002\u5728\u81ea Metal 2 \u8d77\u7684 macOS \u4e0a\u4ee5\u53ca\u81ea Metal 2.2 \u8d77\u81f3\u5c11\u5177\u6709 A12 \u786c\u4ef6\u7684 iOS \u4e0a\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5bf9\u53ef\u5199\u7eb9\u7406\u6570\u7ec4 (access::write) \u7684\u652f\u6301\u3002\uff08\u6709\u5173\u7eb9\u7406\u7c7b\u578b\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 2.9 \u8282\u3002\uff09"),(0,a.kt)("p",null,"\u4f7f\u7528 access::read \u9650\u5b9a\u7b26\u6784\u9020\u4e00\u4e2a\u7eb9\u7406\u7f13\u51b2\u533a\u6570\u7ec4\uff08\u53c2\u89c1\u7b2c 2.9.1 \u8282\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"array<texture_buffer<T>, size t N>\n")),(0,a.kt)("p",null,"\u5c06\u91c7\u6837\u5668\u6570\u7ec4\u58f0\u660e\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"array<sampler, size_t N>\nconst array<sampler, size_t N>\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u7eb9\u7406\u6570\u7ec4\u6216\u91c7\u6837\u5668\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\uff08\u56fe\u5f62\u3001\u5185\u6838\u6216\u7528\u6237\u51fd\u6570\uff09\uff0c\u6216\u8005\u5c06\u7eb9\u7406\u6216\u6837\u672c\u6570\u7ec4\u58f0\u660e\u4e3a\u51fd\u6570\u5185\u7684\u5c40\u90e8\u53d8\u91cf\u3002\u4f60\u8fd8\u53ef\u4ee5\u5728\u7a0b\u5e8f\u8303\u56f4\u5185\u58f0\u660e\u91c7\u6837\u5668\u6570\u7ec4\u3002\u9664\u975e\u5728\u53c2\u6570\u7f13\u51b2\u533a\u4e2d\u4f7f\u7528\uff08\u8bf7\u53c2\u9605\u7b2c 2.13 \u8282\uff09\uff0c\u5426\u5219\u4e0d\u80fd\u5728\u7ed3\u6784\u4e2d\u58f0\u660e array \u7c7b\u578b\uff08\u7eb9\u7406\u3001\u7eb9\u7406\u7f13\u51b2\u533a\u6216\u91c7\u6837\u5668\u7684\u6570\u7ec4\uff09\u3002"),(0,a.kt)("p",null,"MSL \u8fd8\u6dfb\u52a0\u4e86\u5bf9 array_ref \u7684\u652f\u6301\u3002array_ref \u8868\u793a T \u7c7b\u578b\u7684 size() \u5143\u7d20\u7684\u4e0d\u53ef\u53d8\u6570\u7ec4\u3002T \u5fc5\u987b\u662f\u91c7\u6837\u5668\u7c7b\u578b\u6216\u53d7\u652f\u6301\u7684\u7eb9\u7406\u7c7b\u578b\uff0c\u5305\u62ec\u7eb9\u7406\u7f13\u51b2\u533a\u3002\u6570\u7ec4\u7684\u5b58\u50a8\u4e0d\u5c5e\u4e8e array_ref \u5bf9\u8c61\u3002\u9690\u5f0f\u8f6c\u6362\u662f\u7531\u5177\u6709\u8fde\u7eed\u8fed\u4ee3\u5668\uff08\u4f8b\u5982 metal::array\uff09\u7684\u7c7b\u578b\u63d0\u4f9b\u7684\u3002array_ref \u7684\u5e38\u89c1\u7528\u9014\u662f\u5c06\u7eb9\u7406\u6570\u7ec4\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u51fd\u6570\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u63a5\u53d7\u5404\u79cd\u6570\u7ec4\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"array_ref \u7c7b\u578b\u4e0d\u80fd\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u56fe\u5f62\u548c\u5185\u6838\u51fd\u6570\u3002\u4f46\u662f\uff0carray_ref \u7c7b\u578b\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u7528\u6237\u51fd\u6570\u3002array_ref \u7c7b\u578b\u4e0d\u80fd\u5728\u51fd\u6570\u5185\u58f0\u660e\u4e3a\u5c40\u90e8\u53d8\u91cf\u3002"),(0,a.kt)("p",null,"2.12.1.1 \u5230 2.12.1.3 \u8282\u4e2d\u5217\u51fa\u7684\u6210\u5458\u51fd\u6570\u53ef\u7528\u4e8e\u7eb9\u7406\u6570\u7ec4\u3001\u91c7\u6837\u5668\u6570\u7ec4\u548c array_ref \u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"21211-\u4f7f\u7528\u8fd0\u7b97\u7b26\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20"},"2.12.1.1 \u4f7f\u7528\u8fd0\u7b97\u7b26\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 [] \u8fd0\u7b97\u7b26\u8bbf\u95ee\u7eb9\u7406\u3001\u7eb9\u7406\u7f13\u51b2\u533a\u6216\u91c7\u6837\u5668\u6570\u7ec4\u7684\u5143\u7d20\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"reference operator[] (size_t pos);\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 [] \u8fd0\u7b97\u7b26\u7684\u4ee5\u4e0b\u53d8\u4f53\u6765\u8bbf\u95ee\u7eb9\u7406\u3001\u7eb9\u7406\u7f13\u51b2\u533a\u6216\u91c7\u6837\u5668\u6570\u7ec4\u7684\u5143\u7d20\u6216\u6a21\u677f\u5316\u7c7b\u578b array_ref \uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr const_reference operator[] (size_t pos) const;\n")),(0,a.kt)("h2",{id:"21212-\u9635\u5217\u5bb9\u91cf"},"2.12.1.2 \u9635\u5217\u5bb9\u91cf"),(0,a.kt)("p",null,"size() \u8fd4\u56de\u7eb9\u7406\u3001\u7eb9\u7406\u7f13\u51b2\u533a\u6216\u91c7\u6837\u5668\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u6570\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr size_t size();\nconstexpr size_t size() const;\n")),(0,a.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"kernel void\nmy_kernel(const array<texture2d<float>, 10> src [[texture(0)]],\n     texture2d<float, access::write> dst [[texture(10)]],\n\u2026)\n{\n    for (int i=0; i<src.size(); i++)\n    {\n        if (is_null_texture(src[i]))\n            break;\n        process_image(src[i], dst);\n    }\n}\n")),(0,a.kt)("h2",{id:"21213-\u6a21\u677f\u5316\u6570\u7ec4\u7684\u6784\u9020\u51fd\u6570"},"2.12.1.3 \u6a21\u677f\u5316\u6570\u7ec4\u7684\u6784\u9020\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr array_ref();\nconstexpr array_ref(const array_ref &);\narray_ref & operator=(const array_ref &);\nconstexpr array_ref(const T * array, size_t length);\n\ntemplate<size_t N>\nconstexpr array_ref(const T(&a)[N]);\n\ntemplate<typename T>\nconstexpr array_ref<T> make_array_ref(const T * array, size_t length)\n\ntemplate<typename T, size_t N>\nconstexpr array_ref<T> make_array_ref(const T(&a)[N])\n")),(0,a.kt)("p",null,"\u6784\u9020\u6570\u7ec4\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"float4 foo(array_ref<texture2d<float>> src)\n{\n    float4 clr(0.0f);\n    for (int i=0; i<src.size; i++)\n    {\n        clr += process_texture(src[i]);\n    }\n    return clr;\n}\n\nkernel void\nmy_kernel_A(const array<texture2d<float>, 10> src [[texture(0)]],\n\n texture2d<float, access::write> dst [[texture(10)]],  \u2026)\n{\n    float4 clr = foo(src);\n    \u2026\n}\n\nkernel void\nmy_kernel_B(const array<texture2d<float>, 20> src [[texture(0)]],  texture2d<float, access::write> dst [[texture(10)]],   \u2026)\n{\n    float4 clr = foo(src);\n    \u2026\n}\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u5728\u7a0b\u5e8f\u8303\u56f4\u5185\u58f0\u660e\u7684\u91c7\u6837\u5668\u6570\u7ec4\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr array<sampler, 2> = { sampler(address::clamp_to_zero),    sampler(coord::pixel) };\n")),(0,a.kt)("h2",{id:"2122-\u7f13\u51b2\u533a\u7eb9\u7406\u548c\u91c7\u6837\u5668\u7684\u7ed3\u6784"},"2.12.2 \u7f13\u51b2\u533a\u3001\u7eb9\u7406\u548c\u91c7\u6837\u5668\u7684\u7ed3\u6784"),(0,a.kt)("p",null,"\u56fe\u5f62\u3001\u5185\u6838\u3001\u53ef\u89c1\u51fd\u6570\u6216\u7528\u6237\u51fd\u6570\u7684\u53c2\u6570\u53ef\u4ee5\u662f\u7ed3\u6784\u6216\u5d4c\u5957\u7ed3\u6784\uff0c\u5176\u6210\u5458\u4ec5\u4e3a\u7f13\u51b2\u533a\u3001\u7eb9\u7406\u6216\u91c7\u6837\u5668\u3002\u4f60\u5fc5\u987b\u6309\u503c\u4f20\u9012\u8fd9\u6837\u7684\u7ed3\u6784\u3002\u4f5c\u4e3a\u53c2\u6570\u7c7b\u578b\u4f20\u9012\u7ed9\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u7684\u6b64\u7c7b\u7ed3\u6784\u7684\u6bcf\u4e2a\u6210\u5458\u90fd\u53ef\u4ee5\u6709\u4e00\u4e2a\u5c5e\u6027\u6765\u6307\u5b9a\u5176\u4f4d\u7f6e\uff08\u5982\u7b2c 5.2.1 \u8282\u6240\u8ff0\uff09\u3002"),(0,a.kt)("p",null,"\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7684\u7ed3\u6784\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Foo {\ntexture2d<float>  a [[texture(0)]];\ndepth2d<float>    b [[texture(1)]];\n};\n\n[[kernel]] void\nmy_kernel(Foo f)\n{\u2026}\n")),(0,a.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u5d4c\u5957\u7ed3\u6784\uff0c\u5982\u4ee5\u4e0b\u793a\u4f8b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct Foo {\ntexture2d<float>  a [[texture(0)]];\ndepth2d<float>    b [[texture(1)]];\n};\n\nstruct Bar {\nFoo f;\nsampler s [[sampler(0)]];\n};\n\n[[kernel]] void\nmy_kernel(Bar b)\n{\u2026}\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u5bfc\u81f4\u7f16\u8bd1\u9519\u8bef\u7684\u65e0\u6548\u7528\u4f8b\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"[[kernel]] void\nmy_kernel(device Foo& f) // This is an illegal use.\n{\u2026}\n\nstruct MyResources {\ntexture2d<float>  a [[texture(0)]];\ndepth2d<float>    b [[texture(1)]];\nint c;\n};\n\n[[kernel]] void\nmy_kernel(MyResources r) // This is an illegal use.\n{\u2026}\n")))}g.isMDXComponent=!0}}]);