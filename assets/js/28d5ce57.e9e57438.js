"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),s=a,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||o;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>_,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={},r="\u539f\u5b50\u51fd\u6570",l={unversionedId:"metal-shading-language-specification/atomic-functions/index",id:"metal-shading-language-specification/atomic-functions/index",title:"\u539f\u5b50\u51fd\u6570",description:"Metal \u7f16\u7a0b\u8bed\u8a00\u5b9e\u73b0\u4e86 C++14 \u539f\u5b50\u548c\u540c\u6b65\u64cd\u4f5c\u7684\u5b50\u96c6\u3002Metal \u539f\u5b50\u51fd\u6570\u5fc5\u987b\u5bf9 Metal \u539f\u5b50\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u5982 2.6 \u8282\u6240\u8ff0\u3002",source:"@site/docs/metal-shading-language-specification/atomic-functions/index.mdx",sourceDirName:"metal-shading-language-specification/atomic-functions",slug:"/metal-shading-language-specification/atomic-functions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/atomic-functions/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/atomic-functions/index.mdx",tags:[],version:"current",lastUpdatedAt:1693648798,formattedLastUpdatedAt:"2023\u5e749\u67082\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u6253\u5305\u548c\u89e3\u5305\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/pack-and-unpack-functions/"},next:{title:"\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u7f16\u7801\u547d\u4ee4",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/"}},p={},c=[{value:"\u5185\u5b58\u987a\u5e8f",id:"\u5185\u5b58\u987a\u5e8f",level:2},{value:"\u539f\u5b50\u51fd\u6570",id:"\u539f\u5b50\u51fd\u6570-1",level:2},{value:"\u539f\u5b50\u5b58\u50a8\u51fd\u6570",id:"\u539f\u5b50\u5b58\u50a8\u51fd\u6570",level:3},{value:"\u539f\u5b50\u52a0\u8f7d\u51fd\u6570",id:"\u539f\u5b50\u52a0\u8f7d\u51fd\u6570",level:3},{value:"\u539f\u5b50\u4ea4\u6362\u51fd\u6570",id:"\u539f\u5b50\u4ea4\u6362\u51fd\u6570",level:3},{value:"\u539f\u5b50\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570",id:"\u539f\u5b50\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570",level:3},{value:"6.15.2.5 \u539f\u5b50\u83b7\u53d6\u548c\u4fee\u6539\u51fd\u6570",id:"61525-\u539f\u5b50\u83b7\u53d6\u548c\u4fee\u6539\u51fd\u6570",level:2},{value:"\u539f\u5b50\u4fee\u6539\u51fd\u6570\uff0864 \u4f4d\uff09",id:"\u539f\u5b50\u4fee\u6539\u51fd\u657064-\u4f4d",level:3},{value:"\u8868 6.25\u3002\u539f\u5b50\u4fee\u6539\u64cd\u4f5c",id:"\u8868-625\u539f\u5b50\u4fee\u6539\u64cd\u4f5c",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=d("OrigninalPDF"),u=d("TableView"),s={toc:c},k="wrapper";function _(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u539f\u5b50\u51fd\u6570"},"\u539f\u5b50\u51fd\u6570"),(0,a.kt)(m,{title:"6.15 Atomic Functions",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"Metal \u7f16\u7a0b\u8bed\u8a00\u5b9e\u73b0\u4e86 C++14 \u539f\u5b50\u548c\u540c\u6b65\u64cd\u4f5c\u7684\u5b50\u96c6\u3002Metal \u539f\u5b50\u51fd\u6570\u5fc5\u987b\u5bf9 Metal \u539f\u5b50\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\uff0c\u5982 2.6 \u8282\u6240\u8ff0\u3002"),(0,a.kt)("p",null,"\u539f\u5b50\u64cd\u4f5c\u5728\u4f7f\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\u7684\u5206\u914d\u5bf9\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u89c1\u65b9\u9762\u53d1\u6325\u7740\u7279\u6b8a\u4f5c\u7528\u3002\u5bf9\u4e00\u4e2a\u6216\u591a\u4e2a\u5185\u5b58\u4f4d\u7f6e\u7684\u540c\u6b65\u64cd\u4f5c\u53ef\u4ee5\u662f\u83b7\u53d6\u64cd\u4f5c\u3001\u91ca\u653e\u64cd\u4f5c\u6216\u4e24\u8005\u3002\u6ca1\u6709\u5173\u8054\u5185\u5b58\u4f4d\u7f6e\u7684\u540c\u6b65\u64cd\u4f5c\u662f\u6805\u680f\uff0c\u53ef\u4ee5\u662f\u83b7\u53d6\u6805\u680f\u3001\u91ca\u653e\u6805\u680f\u6216\u4e24\u8005\u3002\u6b64\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u5bbd\u677e\u7684\u539f\u5b50\u64cd\u4f5c\uff0c\u5b83\u4eec\u4e0d\u662f\u540c\u6b65\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u5b58\u5728\u8bb8\u591a\u6b64\u7c7b\u5b9e\u4f8b\uff0c\u4f46\u5bf9\u539f\u5b50\u7c7b\u578b\u7684\u64cd\u4f5c\u53ea\u6709\u51e0\u79cd\u3002\u672c\u8282\u8be6\u7ec6\u8bf4\u660e\u4e86\u6bcf\u79cd\u4e00\u822c\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u539f\u5b50\u51fd\u6570\u5728\u5934\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"<metal_atomic>")," \u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("h2",{id:"\u5185\u5b58\u987a\u5e8f"},"\u5185\u5b58\u987a\u5e8f"),(0,a.kt)("p",null,"\u679a\u4e3e ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order")," \u6307\u5b9a\u8be6\u7ec6\u7684\u5e38\u89c4\uff08\u975e\u539f\u5b50\uff09\u5185\u5b58\u540c\u6b65\u64cd\u4f5c\uff08\u8bf7\u53c2\u9605 C++14 \u89c4\u8303\u7684\u7b2c 29.3 \u8282\uff09\uff0c\u5e76\u4e14\u53ef\u4ee5\u63d0\u4f9b\u64cd\u4f5c\u6392\u5e8f\u3002\u5bf9\u4e8e\u539f\u5b50\u64cd\u4f5c\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed")," \u662f\u552f\u4e00\u7684\u679a\u4e3e\u503c\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed"),"\uff0c\u6ca1\u6709\u540c\u6b65\u6216\u6392\u5e8f\u7ea6\u675f\uff1b\u8be5\u64cd\u4f5c\u53ea\u9700\u8981\u539f\u5b50\u6027\u3002\u8fd9\u4e9b\u64cd\u4f5c\u4e0d\u4f1a\u5bf9\u5185\u5b58\u8fdb\u884c\u6392\u5e8f\uff0c\u4f46\u5b83\u4eec\u4fdd\u8bc1\u539f\u5b50\u6027\u548c\u4fee\u6539\u987a\u5e8f\u7684\u4e00\u81f4\u6027\u3002\u653e\u677e\u8bb0\u5fc6\u7684\u5178\u578b\u7528\u9014\u6392\u5e8f\u6b63\u5728\u66f4\u65b0\u8ba1\u6570\u5668\uff0c\u4f8b\u5982\u5f15\u7528\u8ba1\u6570\u5668\uff0c\u56e0\u4e3a\u8fd9\u53ea\u9700\u8981\u539f\u5b50\u6027\uff0c\u4f46\u65e2\u4e0d\u9700\u8981\u6392\u5e8f\u4e5f\u4e0d\u9700\u8981\u540c\u6b65\u3002"),(0,a.kt)("h2",{id:"\u539f\u5b50\u51fd\u6570-1"},"\u539f\u5b50\u51fd\u6570"),(0,a.kt)("p",null,"\u6b64\u5916\uff0c\u5bf9\u539f\u5b50\u5bf9\u8c61\u7684\u8bbf\u95ee\u53ef\u4ee5\u5efa\u7acb\u7ebf\u7a0b\u95f4\u540c\u6b65\uff0c\u5e76\u6309\u7167 ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order")," \u6307\u5b9a\u7684\u987a\u5e8f\u5bf9\u975e\u539f\u5b50\u5185\u5b58\u8bbf\u95ee\u8fdb\u884c\u6392\u5e8f\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u8282\u5404\u5c0f\u8282\u4e2d\u63cf\u8ff0\u7684\u539f\u5b50\u51fd\u6570\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"A")," \u6307\u539f\u5b50\u7c7b\u578b\u4e4b\u4e00\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"C")," \u6307\u5176\u76f8\u5e94\u7684\u975e\u539f\u5b50\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"M")," \u6307\u7b97\u672f\u8fd0\u7b97\u7684\u53e6\u4e00\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u3002\u5bf9\u4e8e\u539f\u5b50\u6574\u6570\u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"M")," \u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"C"),"\u3002")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0c\u6bcf\u4e2a\u539f\u5b50\u51fd\u6570\u53ef\u80fd\u4ec5\u652f\u6301\u67d0\u4e9b\u7c7b\u578b\u3002\u5728\u4e0b\u9762\u7684\u6bcf\u4e2a\u90e8\u5206\u4e2d\uff0c\u6211\u4eec\u90fd\u4f1a\u6307\u51fa\u652f\u6301\u54ea\u79cd\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u9664\u975e\u53e6\u6709\u8bf4\u660e\uff0c\u5426\u5219\u4ece Metal 1 \u5f00\u59cb\u5c31\u652f\u6301\u540d\u79f0\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"_explicit")," \u7ed3\u5c3e\u7684\u51fd\u6570\uff08\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_store_explicit")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_load_explicit"),"\uff09\u3002Metal 3 \u4ec5\u652f\u6301\u8bbe\u5907\u5185\u5b58\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_float"),"\u3002"),(0,a.kt)("p",null,"iOS\uff1a\u81ea Metal 2 \u8d77\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_store"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_load"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_exchange"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_compare_exchange_weak"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_fetch_key")," \u51fd\u6570\u3002"),(0,a.kt)("h3",{id:"\u539f\u5b50\u5b58\u50a8\u51fd\u6570"},"\u539f\u5b50\u5b58\u50a8\u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u81ea\u52a8\u7528\u6240\u9700\u7684\u503c\u66ff\u6362\u5bf9\u8c61\u6307\u5411\u7684\u503c\u3002\u8fd9\u4e9b\u51fd\u6570\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_int"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_uint"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_bool")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_float")," \u539f\u5b50\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_store_explicit")," \u51fd\u6570\u5e76\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed"),"\uff0c\u5982\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void atomic_store_explicit(threadgroup A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 2.\n\nvoid atomic_store_explicit(volatile threadgroup A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 1.\n\nvoid atomic_store_explicit(device A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 2.\n\nvoid atomic_store_explicit(volatile device A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 1.\n")),(0,a.kt)("h3",{id:"\u539f\u5b50\u52a0\u8f7d\u51fd\u6570"},"\u539f\u5b50\u52a0\u8f7d\u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u4ee5\u539f\u5b50\u65b9\u5f0f\u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," \u6307\u5411\u7684\u503c\u3002\u8fd9\u4e9b\u51fd\u6570\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_int"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_uint"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_bool")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_float")," \u539f\u5b50\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_load_explicit")," \u51fd\u6570\u5e76\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed"),"\uff0c\u5982\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"C atomic_load_explicit(const threadgroup A* object,\n                       memory_order order) // All OS: Since Metal 2.\nC atomic_load_explicit(const volatile threadgroup A* object,\n                       memory_order order) // All OS: Since Metal 1.\nC atomic_load_explicit(const device A* object,\n                       memory_order order) // All OS: Since Metal 2.\nC atomic_load_explicit(const volatile device A* object,\n                       memory_order order) // All OS: Since Metal 1.\n")),(0,a.kt)("h3",{id:"\u539f\u5b50\u4ea4\u6362\u51fd\u6570"},"\u539f\u5b50\u4ea4\u6362\u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u4ee5\u539f\u5b50\u65b9\u5f0f\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," \u6307\u5411\u7684\u503c\u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"desired")," \u7684\u503c\uff0c\u5e76\u8fd4\u56de\u5148\u524d\u4fdd\u5b58\u7684\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"object"),"\u3002\u8fd9\u4e9b\u51fd\u6570\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_int"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_uint"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_bool")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_float")," \u539f\u5b50\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_exchange_explicit")," \u51fd\u6570\uff0c\u5e76\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed"),"\uff0c\u5982\u6240\u793a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"C atomic_exchange_explicit(threadgroup A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 2.\n\nC atomic_exchange_explicit(volatile threadgroup A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 1.\n\nC atomic_exchange_explicit(device A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 2.\n\nC atomic_exchange_explicit(volatile device A* object,\n                           C desired,\n                           memory_order order) // All OS: Since Metal 1.\n")),(0,a.kt)("h3",{id:"\u539f\u5b50\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570"},"\u539f\u5b50\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570\u4ee5\u539f\u5b50\u65b9\u5f0f\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"*object")," \u4e2d\u7684\u503c\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"*expected")," \u4e2d\u7684\u503c\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u8fd9\u4e9b\u503c\u76f8\u7b49\uff0c\u5219 compare-and-exchange \u51fd\u6570\u6267\u884c read-modify-write \u64cd\u4f5c\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"*object")," \u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"desired"),"\u3002\u5426\u5219\uff0c\u5982\u679c\u8fd9\u4e9b\u503c\u4e0d\u76f8\u7b49\uff0c\u5219\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570\u4f1a\u5c06\u5b9e\u9645\u503c\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"*object")," \u52a0\u8f7d\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"*expected")," \u4e2d\u3002\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"*object")," \u4e2d\u7684\u57fa\u7840\u539f\u5b50\u503c\u5df2\u6210\u529f\u66f4\u6539\uff0c\u5219\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff1b\u5426\u5219\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u8fd9\u4e9b\u529f\u80fd\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_int"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_uint"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_bool")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_float")," \u7684\u539f\u5b50\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"\u3002"),(0,a.kt)("p",null,"\u590d\u5236\u7684\u6267\u884c\u65b9\u5f0f\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"std::memcpy")," \u7c7b\u4f3c\u3002\u6bd4\u8f83\u548c\u4ea4\u6362\u51fd\u6570\u7684\u6548\u679c\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"if (memcmp(object, expected, sizeof(*object)) == 0) {\n    memcpy(object, &desired, sizeof(*object));\n} else {\n    memcpy(expected, object, sizeof(*object));\n}\n")),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_compare_exchange_weak_explicit")," \u51fd\u6570\uff0c\u5982\u6240\u793a\uff1b\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed")," \u7528\u4e8e\u6307\u793a\u6210\u529f\u548c\u5931\u8d25\u3002\u5982\u679c\u6bd4\u8f83\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," \u7684\u503c\u5f71\u54cd\u5185\u5b58\u8bbf\u95ee\uff0c\u5982\u679c\u6bd4\u8f83\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"p"},"failure")," \u7684\u503c\u5f71\u54cd\u5185\u5b58\u8bbf\u95ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"bool atomic_compare_exchange_weak_explicit(threadgroup A* object,\n                                           C *expected,\n                                           C desired,\n                                           memory_order success,\n                                           memory_order failure) // All OS: Since Metal 2.\n\nbool atomic_compare_exchange_weak_explicit(volatile threadgroup A* object,\n                                           C *expected,\n                                           C desired,\n                                           memory_order success,\n                                           memory_order failure)  // All OS: Since Metal 1.\n\nbool atomic_compare_exchange_weak_explicit(device A* object,\n                                           C *expected,\n                                           C desired,\n                                           memory_order success,\n                                           memory_order failure)  // All OS: Since Metal 2.\n\nbool atomic_compare_exchange_weak_explicit(volatile device A* object,\n                                           C *expected,\n                                           C desired,\n                                           memory_order success,\n                                           memory_order failure)  // All OS: Since Metal 1.\n")),(0,a.kt)("h2",{id:"61525-\u539f\u5b50\u83b7\u53d6\u548c\u4fee\u6539\u51fd\u6570"},"6.15.2.5 \u539f\u5b50\u83b7\u53d6\u548c\u4fee\u6539\u51fd\u6570"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u5982\u6240\u793a\uff0c\u652f\u6301\u4ee5\u4e0b\u539f\u5b50\u83b7\u53d6\u548c\u4fee\u6539\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u552f\u4e00\u652f\u6301\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," \u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"C atomic_fetch_key_explicit(threadgroup A* object,\n                            M operand,\n                            memory_order order) // All OS: Since Metal 2.\n\nC atomic_fetch_key_explicit(volatile threadgroup A* object,\n                            M operand,\n                            memory_order order) // All OS: Since Metal 1.\n\nC atomic_fetch_key_explicit(device A* object,\n                            M operand,\n                            memory_order order) // All OS: Since Metal 2.\n\nC atomic_fetch_key_explicit(volatile device A* object,\n                            M operand,\n                            memory_order order) // All OS: Since Metal 1.\n")),(0,a.kt)("p",null,"\u51fd\u6570\u540d\u79f0\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u662f\u8868 6.24 \u7b2c\u4e00\u5217\u4e2d\u5217\u51fa\u7684\u64cd\u4f5c\u540d\u79f0\u7684\u5360\u4f4d\u7b26\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_fetch_add_explicit"),"\u3002\u8868 6.24 \u4e2d\u8be6\u8ff0\u7684\u8fd0\u7b97\u662f\u7b97\u672f\u548c\u6309\u4f4d\u8ba1\u7b97\u3002\u8be5\u51fd\u6570\u81ea\u52a8\u7528\u6307\u5b9a\u8ba1\u7b97\u7684\u7ed3\u679c\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," \u6307\u5411\u7684\u503c\uff08\u8868 6.24 \u7684\u7b2c\u4e09\u5217\uff09\u3002\u8be5\u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"object")," \u5148\u524d\u4fdd\u5b58\u7684\u503c\u3002\u6ca1\u6709\u672a\u5b9a\u4e49\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u9002\u7528\u4e8e\u4efb\u4f55\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_int")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_uint")," \u7684\u539f\u5b50\u5bf9\u8c61\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_float")," \u652f\u6301 Add \u548c Sub\u3002"),(0,a.kt)(u,{num:"6.24",title:"Atomic operations",headers:["Key","Operator","Computation"],datasList:[["add","+","Addition"],["and","&","Bitwise and"],["max","max","Compute max"],["min","min","Compute min"],["or","|","Bitwise inclusive or"],["sub","-","Subtraction"],["xor","^","Bitwise exclusive or"]],mdxType:"TableView"}),(0,a.kt)("p",null,"\u8fd9\u4e9b\u64cd\u4f5c\u662f\u539f\u5b50 read-modify-write \u64cd\u4f5c\u3002\u5bf9\u4e8e\u6709\u7b26\u53f7\u6574\u6570\u7c7b\u578b\uff0c\u7b97\u672f\u8fd0\u7b97\u4f7f\u7528\u4e8c\u8fdb\u5236\u8865\u7801\u8868\u793a\u5f62\u5f0f\uff0c\u5e76\u5728\u6ea2\u51fa\u65f6\u8fdb\u884c\u9759\u9ed8 wrap-around\u3002"),(0,a.kt)("h3",{id:"\u539f\u5b50\u4fee\u6539\u51fd\u657064-\u4f4d"},"\u539f\u5b50\u4fee\u6539\u51fd\u6570\uff0864 \u4f4d\uff09"),(0,a.kt)("p",null,'\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1aMetal \u4ece Metal 2.4 \u5f00\u59cb\u652f\u6301\u4ee5\u4e0b\u539f\u5b50\u4fee\u6539\u51fd\u6570\u3002\u8bf7\u53c2\u9605 "Metal Feature Set Tables" \u4ee5\u786e\u5b9a\u54ea\u4e9b GPU \u652f\u6301\u6b64\u529f\u80fd\u3002'),(0,a.kt)("p",null,"\u8fd9\u4e9b\u51fd\u6570\u9002\u7528\u4e8e\u4efb\u4f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_ulong")," \u7c7b\u578b\u7684\u539f\u5b50\u5bf9\u8c61\u3002\u552f\u4e00\u652f\u6301\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," \u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"memory_order_relaxed"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void atomic_key_explicit(device A* object,\n                         M operand,\n                         memory_order order)\n\nvoid atomic_key_explicit(volatile device A* object,\n                         M operand,\n                         memory_order order)\n")),(0,a.kt)("p",null,"\u51fd\u6570\u540d\u79f0\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," \u662f\u8868 6.25 \u7b2c\u4e00\u5217\u4e2d\u5217\u51fa\u7684\u64cd\u4f5c\u540d\u79f0\u7684\u5360\u4f4d\u7b26\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"atomic_max_explicit"),"\u3002\u8868 6.25 \u4e2d\u8be6\u7ec6\u5217\u51fa\u4e86\u7b97\u672f\u8fd0\u7b97\u3002\u8be5\u51fd\u6570\u81ea\u52a8\u7528\u6307\u5b9a\u8ba1\u7b97\u7684\u7ed3\u679c\u66ff\u6362\u5bf9\u8c61\u6307\u5411\u7684\u503c\uff08\u8868 6.25 \u7684\u7b2c\u4e09\u5217\uff09\u3002\u8be5\u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"void"),"\u3002\u6ca1\u6709\u672a\u5b9a\u4e49\u7684\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"\u8868-625\u539f\u5b50\u4fee\u6539\u64cd\u4f5c"},"\u8868 6.25\u3002\u539f\u5b50\u4fee\u6539\u64cd\u4f5c"),(0,a.kt)(u,{num:"6.25",title:" Atomic modify operations",headers:["Key","Operator","Computation"],datasList:[["max","max","Compute max"],["min","min","Compute min"]],mdxType:"TableView"}),(0,a.kt)("p",null,"\u8fd9\u4e9b\u64cd\u4f5c\u662f\u539f\u5b50\u8bfb-\u4fee\u6539-\u5199\u64cd\u4f5c\u3002"))}_.isMDXComponent=!0}}]);