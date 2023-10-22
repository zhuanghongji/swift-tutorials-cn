"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[768],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(o,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,r[1]=p;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={},r="\u51fd\u6570",p={unversionedId:"metal-shading-language-specification/functions/index",id:"metal-shading-language-specification/functions/index",title:"\u51fd\u6570",description:"Metal 1 \u6216\u66f4\u9ad8\u7248\u672c\u652f\u6301\u6bcf\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u6838\u3001\u9876\u70b9\u548c\u7247\u6bb5\u5c5e\u6027\u3002Metal 2.3 \u6216\u66f4\u9ad8\u7248\u672c\u652f\u6301 C++ \u5c5e\u6027\uff1a",source:"@site/docs/metal-shading-language-specification/functions/index.mdx",sourceDirName:"metal-shading-language-specification/functions",slug:"/metal-shading-language-specification/functions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/functions/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/functions/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"object_data \u5730\u5740\u7a7a\u95f4",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/object-data-address-space/"},next:{title:"\u51fd\u6570\u53c2\u6570\u548c\u53d8\u91cf",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/function-arguments-and-variables/"}},o={},d=[{value:"\u9876\u70b9\u51fd\u6570",id:"\u9876\u70b9\u51fd\u6570",level:2},{value:"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570",id:"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570",level:3},{value:"\u8865\u4e01\u7c7b\u578b\u548c\u6bcf\u4e2a\u8865\u4e01\u7684\u63a7\u5236\u70b9\u6570\u91cf",id:"\u8865\u4e01\u7c7b\u578b\u548c\u6bcf\u4e2a\u8865\u4e01\u7684\u63a7\u5236\u70b9\u6570\u91cf",level:3},{value:"\u7247\u6bb5\u51fd\u6570",id:"\u7247\u6bb5\u51fd\u6570",level:2},{value:"\u8ba1\u7b97\u51fd\u6570\uff08\u5185\u6838\uff09",id:"\u8ba1\u7b97\u51fd\u6570\u5185\u6838",level:2},{value:"\u53ef\u89c1\u51fd\u6570",id:"\u53ef\u89c1\u51fd\u6570",level:2},{value:"\u53ef\u7f1d\u5408\u51fd\u6570",id:"\u53ef\u7f1d\u5408\u51fd\u6570",level:2},{value:"\u4ea4\u96c6\u51fd\u6570",id:"\u4ea4\u96c6\u51fd\u6570",level:2},{value:"\u5bf9\u8c61\u51fd\u6570",id:"\u5bf9\u8c61\u51fd\u6570",level:2},{value:"\u7f51\u683c\u51fd\u6570",id:"\u7f51\u683c\u51fd\u6570",level:2},{value:"\u5e73\u94fa\u529f\u80fd",id:"\u5e73\u94fa\u529f\u80fd",level:2},{value:"\u4e3b\u673a\u540d\u5c5e\u6027",id:"\u4e3b\u673a\u540d\u5c5e\u6027",level:2},{value:"\u6a21\u677f\u5316\u9650\u5b9a\u51fd\u6570",id:"\u6a21\u677f\u5316\u9650\u5b9a\u51fd\u6570",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=u("ToBePolishedAfterTranslation"),s=u("OriginalPDF"),m=u("TableView"),k={toc:d},g="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,i.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(s,{title:"5.1 Functions",mdxType:"OriginalPDF"}),(0,i.kt)("p",null,"Metal 1 \u6216\u66f4\u9ad8\u7248\u672c\u652f\u6301\u6bcf\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u6838\u3001\u9876\u70b9\u548c\u7247\u6bb5\u5c5e\u6027\u3002Metal 2.3 \u6216\u66f4\u9ad8\u7248\u672c\u652f\u6301 C++ \u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[vertex]]")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"vertex")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[fragment]]")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"fragment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[kernel]]")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"kernel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[visible]]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[stitchable]]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[intersection(...)]]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[object]]")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[[mesh]]"))),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u51fd\u6570\u7684\u5f00\u5934\u6dfb\u52a0\u8fd9\u4e9b\u51fd\u6570\u5c5e\u6027\u4e4b\u4e00\uff0c\u4f7f\u51fd\u6570\u53ef\u4ee5\u88ab Metal API \u8bbf\u95ee\uff0c\u8fd9\u4f7f\u5176\u6210\u4e3a ",(0,i.kt)("em",{parentName:"p"},"\u9650\u5b9a")," \u51fd\u6570\u3002\u5185\u6838\u51fd\u6570\u3001\u9876\u70b9\u51fd\u6570\u548c\u7247\u6bb5\u51fd\u6570\u4e0d\u80fd\u5728\u4e0d\u89e6\u53d1\u7f16\u8bd1\u9519\u8bef\u7684\u60c5\u51b5\u4e0b\u76f8\u4e92\u8c03\u7528\uff0c\u4f46\u5b83\u4eec\u53ef\u4ee5\u8c03\u7528\u5176\u5b83\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[visible]]")," \u5c5e\u6027\u7684\u51fd\u6570\u3002\u4ed6\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"intersect()")," \u6765\u8c03\u7528\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[intersection(...)]]")," \u5c5e\u6027\u7684\u51fd\u6570\uff08\u8bf7\u53c2\u9605\u7b2c 6.18.2 \u8282\uff09\u3002"),(0,i.kt)("p",null,"\u5728 Metal 2.2 \u4e4b\u524d\uff0cMetal \u7f16\u8bd1\u5668\u5ffd\u7565\u5185\u6838\u3001\u9876\u70b9\u548c\u7247\u6bb5\u51fd\u6570\u7684\u547d\u540d\u7a7a\u95f4\u6807\u8bc6\u7b26\u3002\u5728 Metal 2.2 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\uff0c\u5982\u679c\u4f60\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u58f0\u660e\u9650\u5b9a\u51fd\u6570\uff0c\u5219\u6bcf\u6b21\u5c06\u5176\u5f15\u7528\u5230 Metal Framework API \u65f6\uff0c\u90fd\u5fc5\u987b\u5305\u542b\u547d\u540d\u7a7a\u95f4\u6807\u8bc6\u7b26\u548c\u51fd\u6570\u540d\u79f0\u3002\u8be5\u793a\u4f8b\u5728\u4e0d\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u58f0\u660e\u4e24\u4e2a\u5185\u6838\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"namespace outer {\n    [[kernel]] void functionA() { ... }\n    namespace inner {\n        [[kernel]] void functionB() { ... }\n    }\n}\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u5728\u51fd\u6570\u540d\u79f0\u524d\u9762\u52a0\u4e0a\u547d\u540d\u7a7a\u95f4\u7684\u6807\u8bc6\u7b26\uff0c\u540e\u8ddf\u4e24\u4e2a\u5192\u53f7\u6765\u5f15\u7528\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Outer::functionA\n")),(0,i.kt)("p",null,"\u7c7b\u4f3c\u5730\uff0c\u901a\u8fc7\u6309\u987a\u5e8f\u5728\u51fd\u6570\u540d\u79f0\u524d\u52a0\u4e0a\u6240\u6709\u547d\u540d\u7a7a\u95f4\u5e76\u7528\u4e24\u4e2a\u5192\u53f7\u5206\u9694\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u6765\u5f15\u7528\u5d4c\u5957\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u51fd\u6570\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"Outer::inner::functionB\n")),(0,i.kt)("h2",{id:"\u9876\u70b9\u51fd\u6570"},"\u9876\u70b9\u51fd\u6570"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u58f0\u660e\u9876\u70b9\uff0c\u6216\u8005\u81ea Metal 2.3 \u8d77 [","[vertex]","] \u5c5e\u6027\u4ec5\u9002\u7528\u4e8e\u56fe\u5f62\u51fd\u6570\u3002Metal \u4e3a\u9876\u70b9\u6d41\u4e2d\u7684\u6bcf\u4e2a\u9876\u70b9\u6267\u884c\u9876\u70b9\u51fd\u6570\u5e76\u751f\u6210\u6bcf\u4e2a\u9876\u70b9\u7684\u8f93\u51fa\u3002\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u58f0\u660e\u9876\u70b9\u7684\u8bed\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"vertex void\nmy_vertex_func(...)\n{ ... }\n\n[[vertex]] void\nvertex_func2(...)\n{ ... }\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u9876\u70b9\u51fd\u6570\uff0c\u8fd4\u56de\u7c7b\u578b\u6807\u8bc6\u51fd\u6570\u751f\u6210\u7684\u8f93\u51fa\u3002\u5982\u679c\u9876\u70b9\u51fd\u6570\u4e0d\u751f\u6210\u8f93\u51fa\uff0c\u5b83\u5c06\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"void")," \u5e76\u4e14\u53ea\u80fd\u5728\u7981\u7528\u5149\u6805\u5316\u7684\u6e32\u67d3\u7ba1\u9053\u4e2d\u4f7f\u7528\u3002"),(0,i.kt)("h3",{id:"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570"},"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570"),(0,i.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 1.2 \u8d77\u652f\u6301\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\uff08\u8865\u4e01\u5c5e\u6027\uff09\u3002"),(0,i.kt)("p",null,"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u8ba1\u7b97\u56fa\u5b9a\u51fd\u6570\u66f2\u9762\u7ec6\u5206\u5668\u751f\u6210\u7684\u9762\u7247\u4e0a\u6bcf\u4e2a\u8868\u9762\u6837\u672c\u7684\u9876\u70b9\u6570\u636e\u3002\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u7684\u8f93\u5165\u4e3a\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8865\u4e01\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4fee\u8865\u63a7\u5236\u70b9\u6570\u636e\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7ec6\u5206\u5668\u9636\u6bb5\u8f93\u51fa\uff08\u8865\u4e01\u4e0a\u7684\u6807\u51c6\u5316\u9876\u70b9\u4f4d\u7f6e\uff09\u3002")),(0,i.kt)("p",null,"\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u751f\u6210\u7ec6\u5206\u4e09\u89d2\u5f62\u7684\u6700\u7ec8\u9876\u70b9\u6570\u636e\u3002\u4f8b\u5982\uff0c\u4e3a\u4e86\u5411\u6e32\u67d3\u7684\u51e0\u4f55\u4f53\u6dfb\u52a0\u989d\u5916\u7684\u7ec6\u8282\uff08\u4f8b\u5982\u4f4d\u79fb\u6620\u5c04\u503c\uff09\uff0c\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u53ef\u4ee5\u5bf9\u7eb9\u7406\u8fdb\u884c\u91c7\u6837\uff0c\u4ee5\u901a\u8fc7\u4f4d\u79fb\u503c\u4fee\u6539\u9876\u70b9\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"\u6267\u884c\u540e\u66f2\u9762\u7ec6\u5206\u9876\u70b9\u51fd\u6570\u540e\uff0c\u66f2\u9762\u7ec6\u5206\u7684\u56fe\u5143\u5c06\u88ab\u5149\u6805\u5316\u3002"),(0,i.kt)("p",null,"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u662f\u4f7f\u7528\u666e\u901a\u9876\u70b9\u51fd\u6570\u5c5e\u6027\u6807\u8bc6\u7684\u9876\u70b9\u51fd\u6570\u3002"),(0,i.kt)("h3",{id:"\u8865\u4e01\u7c7b\u578b\u548c\u6bcf\u4e2a\u8865\u4e01\u7684\u63a7\u5236\u70b9\u6570\u91cf"},"\u8865\u4e01\u7c7b\u578b\u548c\u6bcf\u4e2a\u8865\u4e01\u7684\u63a7\u5236\u70b9\u6570\u91cf"),(0,i.kt)("p",null,"\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[patch]]")," \u5c5e\u6027\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e macOS\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"[[patch(patch-type, N)]]")," \u5c5e\u6027\u5fc5\u987b\u6307\u5b9a\u9762\u7247\u7c7b\u578b\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"patch-type")," \u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"quad")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle"),"\uff09\u548c\u9762\u7247\u4e2d\u63a7\u5236\u70b9\u7684\u6570\u91cf\uff08N \u9700\u8981\u662f\u4ee5\u4e0b\u503c\uff09 0 \u5230 32\uff09\u3002\u5bf9\u4e8e iOS\uff0c\u9700\u8981\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"patch-type"),"\uff0c\u4f46\u63a7\u5236\u70b9\u7684\u6570\u91cf\u662f\u53ef\u9009\u7684\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5728\u66f2\u9762\u7ec6\u5206\u540e\u9876\u70b9\u51fd\u6570\u4e2d\u6307\u5b9a\u4e86\u63a7\u5236\u70b9\u7684\u6570\u91cf\uff0c\u5219\u8be5\u6570\u91cf\u5fc5\u987b\u4e0e\u63d0\u4f9b\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawPatches")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"drawIndexedPatches")," API \u7684\u63a7\u5236\u70b9\u7684\u6570\u91cf\u5339\u914d\u3002"),(0,i.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[patch(quad)]]\n[[vertex]] vertex_output\nmy_post_tessellation_vertex(...)\n{...}\n\n[[patch(quad, 16)]]\n[[vertex]] vertex_output\nmy_bezier_vertex(...)\n{...}\n")),(0,i.kt)("h2",{id:"\u7247\u6bb5\u51fd\u6570"},"\u7247\u6bb5\u51fd\u6570"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"fragment")," \u6216\u81ea Metal 2.3 \u8d77 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[fragment]]")," \u5c5e\u6027\u4ec5\u7528\u4e8e\u56fe\u5f62\u51fd\u6570\u3002Metal \u4e3a\u7247\u6bb5\u6d41\u4e2d\u7684\u6bcf\u4e2a\u7247\u6bb5\u53ca\u5176\u5173\u8054\u6570\u636e\u6267\u884c\u7247\u6bb5\u51fd\u6570\uff0c\u5e76\u751f\u6210\u6bcf\u4e2a\u7247\u6bb5\u7684\u8f93\u51fa\u3002\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"fragment")," \u5c5e\u6027\u58f0\u660e\u7247\u6bb5\u51fd\u6570\u7684\u8bed\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[fragment]] void my_fragment_func(...) {\n    // ...\n}\n\n[[fragment]] void fragment_func2(...) {\n    // ...\n}\n")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u56fe\u5f62\u51fd\u6570\uff0c\u8fd4\u56de\u7c7b\u578b\u6807\u8bc6\u51fd\u6570\u751f\u6210\u7684\u8f93\u51fa\u662f\u6309\u9876\u70b9\u8fd8\u662f\u6309\u7247\u6bb5\u3002\u5982\u679c\u7247\u6bb5\u51fd\u6570\u4e0d\u751f\u6210\u8f93\u51fa\uff0c\u5219\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"\u3002"),(0,i.kt)("p",null,"\u8981\u8bf7\u6c42\u5728\u7247\u6bb5\u51fd\u6570\u6267\u884c\u4e4b\u524d\u6267\u884c\u7247\u6bb5\u6d4b\u8bd5\uff0c\u8bf7\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[early_fragment_tests]]")," \u51fd\u6570\u5c5e\u6027\u4e0e\u7247\u6bb5\u51fd\u6570\u7ed3\u5408\u4f7f\u7528\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[early_fragment_tests]] fragment float4 my_fragment(...) {\n    // ...\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[early_fragment_tests]]")," \u5c5e\u6027\u58f0\u660e\u7684\u7247\u6bb5\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u5305\u542b\u6df1\u5ea6\u6216\u6a21\u677f\u503c\uff0c\u5219\u8fd9\u662f\u4e00\u4e2a\u9519\u8bef\uff1b\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u6b64\u7247\u6bb5\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u5305\u542b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[depth(depth_attribute)]]")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[stencil]]")," \u5c5e\u6027\u58f0\u660e\u7684\u5143\u7d20\u3002"),(0,i.kt)("p",null,"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[early_fragment_tests]]")," \u5c5e\u6027\u4e0e\u4efb\u4f55\u975e\u7247\u6bb5\u51fd\u6570\u7684\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\u662f\u9519\u8bef\u7684\uff1b\u4e5f\u5c31\u662f\u8bf4\uff0c\u6ca1\u6709\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"fragment")," \u5c5e\u6027\u58f0\u660e\u3002"),(0,i.kt)("h2",{id:"\u8ba1\u7b97\u51fd\u6570\u5185\u6838"},"\u8ba1\u7b97\u51fd\u6570\uff08\u5185\u6838\uff09"),(0,i.kt)("p",null,'\u8ba1\u7b97\u51fd\u6570\uff08\u4e5f\u79f0\u4e3a "kernel" \uff09\u662f\u5728 1\u30012 \u6216 3 \u7ef4\u7f51\u683c\u4e0a\u6267\u884c\u7684\u6570\u636e\u5e76\u884c\u51fd\u6570\u3002\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u4f7f\u7528 ',(0,i.kt)("inlineCode",{parentName:"p"},"kernel")," \u6216\u81ea Metal 2.3 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[kernel]]")," \u5c5e\u6027\u58f0\u660e\u8ba1\u7b97\u51fd\u6570\u7684\u8bed\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"kernel void my_kernel(...) {...}\n\n[[kernel]] void my_kernel2(...) {...}\n")),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"kernel")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[kernel]]")," \u5c5e\u6027\u58f0\u660e\u7684\u51fd\u6570\u5fc5\u987b\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[max_total_threads_per_threadgroup]]")," \u51fd\u6570\u5c5e\u6027\u4e0e\u5185\u6838\u51fd\u6570\u7ed3\u5408\u4f7f\u7528\u6765\u6307\u5b9a\u6bcf\u4e2a\u7ebf\u7a0b\u7ec4\u7684\u6700\u5927\u7ebf\u7a0b\u6570\u3002"),(0,i.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528\u6b64\u5c5e\u6027\u7684\u5185\u6838\u51fd\u6570\u7684\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[max_total_threads_per_threadgroup(x)]] kernel void my_kernel(...) {\n    // ...\n}\n")),(0,i.kt)("p",null,"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"[[max_total_threads_per_threadgroup]]")," \u503c\u5927\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"[MTLDevice maxThreadsPerThreadgroup]")," \u5c5e\u6027\uff0c\u5219\u8ba1\u7b97\u7ba1\u9053\u72b6\u6001\u521b\u5efa\u5c06\u5931\u8d25\u3002"),(0,i.kt)("h2",{id:"\u53ef\u89c1\u51fd\u6570"},"\u53ef\u89c1\u51fd\u6570"),(0,i.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[visible]]")," \u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[visible]]")," \u5c5e\u6027\u7684\u51fd\u6570\u662f\u4ece Metal Framework API \u4e2d\u53ef\u89c1\u7684\u51fd\u6570\uff0c\u5373\u53ef\u4ee5\u83b7\u53d6\u8be5\u51fd\u6570\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"MTLFunction")," \u5bf9\u8c61\u3002\u83b7\u53d6\u53ef\u89c1\u51fd\u6570\u7684\u5730\u5740\u5e76\u83b7\u5f97\u53ef\u89c1\u51fd\u6570\u6307\u9488\u662f\u5408\u6cd5\u7684\u3002\u53ef\u89c1\u51fd\u6570\u6307\u9488\u53ef\u4ee5\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"visible_function_table")," \u7c7b\u578b\u4e00\u8d77\u4f7f\u7528\uff08\u7b2c 2.15 \u8282\uff09\u3002\u5176\u5b83\u51fd\u6570\u76f4\u63a5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," \u51fd\u6570\u662f\u5408\u6cd5\u7684\u3002\u8bf7\u6ce8\u610f\uff0c\u53ef\u89c1\u51fd\u6570\u4e0e\u5176\u5b83 ",(0,i.kt)("em",{parentName:"p"},"qualified")," \u51fd\u6570\u4e00\u6837\uff0c\u88ab\u5206\u6210\u81ea\u5df1\u7684\u7ffb\u8bd1\u5355\u5143\u3002\u5f53\u51fd\u6570\u76f4\u63a5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"visible")," \u51fd\u6570\u65f6\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u5c06\u5176\u4f20\u9012\u5230\u7ba1\u9053\u63cf\u8ff0\u7b26\u4e2d\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[visible]]")," \u5c5e\u6027\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[visible]] float my_visible(device int *data, int data_offset) {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u53ef\u7f1d\u5408\u51fd\u6570"},"\u53ef\u7f1d\u5408\u51fd\u6570"),(0,i.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.4 \u8d77\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[stitchable]]")," \u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[stitchable]]")," \u5c5e\u6027\u7684\u51fd\u6570\u662f\u53ef\u4ee5\u5728 Metal Framework Function Stitching API \u4e2d\u4f7f\u7528\u7684\u51fd\u6570\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"[[stitchable]]")," \u5c5e\u6027\u610f\u5473\u7740 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[visible]]"),"\uff0c\u8fd9\u610f\u5473\u7740\u53ef\u7f1d\u5408\u51fd\u6570\u53ef\u4ee5\u5728\u6240\u6709\u53ef\u4ee5\u4f7f\u7528\u53ef\u89c1\u51fd\u6570\u7684\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528\uff0c\u5982\u7b2c 5.1.4 \u8282\u4e2d\u6240\u8ff0\u3002\u7f16\u8bd1\u5668\u5c06\u4e3a\u53ef\u7f1d\u5408\u51fd\u6570\u751f\u6210\u989d\u5916\u7684\u5143\u6570\u636e\uff0c\u4ee5\u4f7f\u8fd9\u4e9b\u51fd\u6570\u80fd\u591f\u4e0e Metal Function Stitching API \u4e00\u8d77\u4f7f\u7528\u3002\u4ec5\u5f53\u5f00\u53d1\u4eba\u5458\u9700\u8981\u6b64\u529f\u80fd\u65f6\u624d\u5e94\u4f7f\u7528\u6b64\u5c5e\u6027\uff0c\u56e0\u4e3a\u5143\u6570\u636e\u4f1a\u589e\u52a0\u51fd\u6570\u7684\u4ee3\u7801\u5927\u5c0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[stitchable]] float my_func(device float *data, texture2d<float> tex) {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u4ea4\u96c6\u51fd\u6570"},"\u4ea4\u96c6\u51fd\u6570"),(0,i.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[intersection(primitive_type, intersection_tags...]]")," \u51fd\u6570"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[intersection(primitive_type, intersection_tags...)]]")," \u5c5e\u6027\u58f0\u660e\u4e00\u4e2a\u4e0e\u5149\u7ebf\u8ddf\u8e2a\u4e00\u8d77\u4f7f\u7528\u7684\u81ea\u5b9a\u4e49\u4ea4\u96c6\u51fd\u6570\u3002\u5f53\u7740\u8272\u5668\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"intersect()"),"\uff08\u53c2\u89c1\u7b2c 6.18 \u8282\uff09\u65f6\uff0c\u4f1a\u8c03\u7528\u4ea4\u96c6\u51fd\u6570\u6765\u786e\u5b9a\u6f5c\u5728\u7684\u5149\u7ebf\u4ea4\u96c6\u662f\u5426\u6709\u6548\u6216\u662f\u5426\u5e94\u7ee7\u7eed\u904d\u5386\u3002Metal \u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u7684\u4ea4\u96c6\u51fd\u6570\uff1a"),(0,i.kt)(m,{num:"5.1",title:"Intersection Function Primitive Types",headers:["Primitive Type","Description"],datasList:[["triangle","Indicates that this is an intersection function that extends the default triangle intersection test."],["bounding_box","Indicates that this is an intersection function which is run when a ray intersects the bounding box."],["curve \nSince Metal 3.1","Indicates that this is an intersection function that extends the default curve intersection test."]],mdxType:"TableView"}),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f20\u9012\u96f6\u4e2a\u6216\u591a\u4e2a\u4ea4\u53c9\u6807\u8bb0\uff0c\u5982\u7b2c 2.17 \u8282\u4e2d\u7684\u8868 2.9 \u4e2d\u6240\u8ff0\u3002\u4e00\u4e9b\u4f8b\u5b50\u662f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"[[intersection(triangle, triangle_data, instancing, world_space_data)]]\nbool triangleIntersectionFunction(...) {...}\n\n[[intersection(bounding_box, triangle_data, instancing, world_space_data)]]\nUserResult boundingBoxIntersectionFunction(...) {...}\n")),(0,i.kt)("p",null,"\u4ea4\u96c6\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"primitive_type")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"intersection_tags")," \u63a7\u5236\u5141\u8bb8\u7684\u8f93\u5165\u548c\u8f93\u51fa\u5c5e\u6027\uff08\u53c2\u89c1\u7b2c 5.2.3.7 \u8282\uff09\u3002"),(0,i.kt)("p",null,"\u4ea4\u96c6\u51fd\u6570\u652f\u6301\u4ece\u8bbe\u5907\u548c\u5e38\u91cf\u5730\u5740\u7a7a\u95f4\u4f20\u9012\u7f13\u51b2\u533a\u53c2\u6570\u3002"),(0,i.kt)("p",null,"\u4ea4\u96c6\u51fd\u6570\u4e0d\u652f\u6301\u5c06\u7eb9\u7406\u53c2\u6570\u4f20\u9012\u7ed9\u4ea4\u96c6\u51fd\u6570\u3002\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570\u7f13\u51b2\u533a\u4f20\u9012\u7eb9\u7406\u3002"),(0,i.kt)("p",null,"\u4ea4\u96c6\u51fd\u6570\u4e0d\u652f\u6301\u7ebf\u7a0b\u7ec4\u5185\u5b58\u3002"),(0,i.kt)("p",null,"\u4ea4\u96c6\u51fd\u6570\u4e0d\u652f\u6301 threadgroup_barrier \u6216 simdgroup_barrier\u3002\u5982\u679c\u4f7f\u7528\u5b83\u4eec\uff0c\u7ed3\u679c\u662f\u4e0d\u786e\u5b9a\u7684\u3002"),(0,i.kt)("p",null,"\u4ea4\u96c6\u51fd\u6570\u53ef\u80fd\u4f1a\u6216\u53ef\u80fd\u4e0d\u4f1a\u5728\u4e0e\u542f\u52a8\u4ea4\u96c6\u64cd\u4f5c\u7684\u7ebf\u7a0b\u76f8\u540c\u7684 SIMD \u7ec4\u4e2d\u8fd0\u884c\uff1a\u5141\u8bb8\u5b9e\u73b0\u5728\u542f\u52a8 SIMD \u7ec4\u8fdb\u884c\u4ea4\u96c6\u6d4b\u8bd5\u4e4b\u524d\u91cd\u65b0\u7ec4\u5408\u6216\u91cd\u65b0\u6253\u5305\u5019\u9009\u4ea4\u96c6\uff0c\u4ee5\u63d0\u9ad8\u6548\u7387\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u52a0\u901f\u7ed3\u6784\u904d\u5386\u627e\u5230\u7a0b\u5e8f\u6846\u57fa\u5143\uff0c\u5e76\u4e14\u4ea4\u96c6\u51fd\u6570\u662f\u4e09\u89d2\u5f62\u6d4b\u8bd5\u5668\uff08\u53cd\u4e4b\u4ea6\u7136\uff09\uff0c\u5219\u8fd9\u662f\u5e94\u7528\u7a0b\u5e8f\u9519\u8bef\u5e76\u4e14\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"),(0,i.kt)("h2",{id:"\u5bf9\u8c61\u51fd\u6570"},"\u5bf9\u8c61\u51fd\u6570"),(0,i.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u4ece Metal 3 \u5f00\u59cb\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[object]]")," \u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[object]]")," \u5c5e\u6027\u7684\u51fd\u6570\u662f\u7f51\u683c\u7ba1\u9053\u4e2d\u7684\u5bf9\u8c61\u51fd\u6570\u3002\u5bf9\u8c61\u51fd\u6570\u662f\u5728 1-\u30012- \u6216 3D \u8ba1\u7b97\u7f51\u683c\u4e0a\u6267\u884c\u7684\u6570\u636e\u5e76\u884c\u51fd\u6570\uff0c\u53ef\u4ee5\u5c06\u8ba1\u7b97\u7f51\u683c\u542f\u52a8\u5230\u7b2c\u4e8c\u4e2a\u7f51\u683c\u9636\u6bb5\u5e76\u5e26\u6709\u6570\u636e\u8d1f\u8f7d\u3002\u5bf9\u8c61\u51fd\u6570\u5fc5\u987b\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"\u3002"),(0,i.kt)("p",null,"\u5bf9\u8c61\u51fd\u6570\u7684\u8f93\u5165\u5185\u7f6e\u53d8\u91cf\u5728\u7b2c 5.2.3.9 \u8282\u4e2d\u63cf\u8ff0\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"[[payload]]")," \u5c5e\u6027\u5c06\u5bf9\u8c61\u51fd\u6570\u5bfc\u51fa\u5230\u7f51\u683c\u7740\u8272\u5668\u7684\u7f13\u51b2\u533a\u6807\u8bb0\u4e3a\u53ea\u8bfb\u7f13\u51b2\u533a\u3002\u6bcf\u4e2a\u51fd\u6570\u53ef\u4ee5\u6307\u5b9a\u4e00\u6b21\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[max_total_threads_per_threadgroup]]")," \u51fd\u6570\u5c5e\u6027\u4e0e\u5bf9\u8c61\u51fd\u6570\u7ed3\u5408\u4f7f\u7528\u6765\u6307\u5b9a\u6bcf\u4e2a\u7ebf\u7a0b\u7ec4\u7684\u6700\u5927\u7ebf\u7a0b\u6570\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u5bf9\u8c61\u51fd\u6570\u4e0a\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[max_total_threadgroups_per_mesh_grid(size)]]")," \u6765\u6307\u5b9a\u6bcf\u4e2a\u7f51\u683c\u7684\u6700\u5927\u7ebf\u7a0b\u7ec4\u6570\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[object]]")," \u5c5e\u6027\u7684\u793a\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define kMeshThreadgroups 32\nstruct ObjectOutput {\n  // User-defined payload; one entry for each mesh threadgroup. This\n  // is an array because the data will be shared by the mesh grid.\n  float value[kMeshThreadgroups];\n};\n\n[[object, max_total_threadgroups_per_mesh_grid(kMeshThreadgroups)]] void objectShader(\n      uint threadgroup_size [[threads_per_threadgroup]],\n      uint lane [[thread_index_in_threadgroup]],\n      object_data ObjectOutput& output [[payload]],\n      mesh_grid_properties mgp\n) {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u7f51\u683c\u51fd\u6570"},"\u7f51\u683c\u51fd\u6570"),(0,i.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 3 \u8d77\u652f\u6301 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[mesh]]")," \u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[mesh]]")," \u5c5e\u6027\u7684\u51fd\u6570\u662f\u7f51\u683c\u7ba1\u9053\u4e2d\u7684\u7f51\u683c\u51fd\u6570\u3002\u7f51\u683c\u51fd\u6570\u662f\u4e00\u79cd\u6570\u636e\u5e76\u884c\u51fd\u6570\uff0c\u53ef\u4ee5\u9009\u62e9\u5c06\u8868\u793a\u51e0\u4f55\u5757\u7684\u7f51\u683c\u5bf9\u8c61\u5bfc\u51fa\u5230\u5149\u6805\u5316\u7ba1\u9053\u3002\u7f51\u683c\u5bf9\u8c61\u662f\u7f51\u683c\u51fd\u6570\u7684\u53c2\u6570\u3002\u5982\u679c\u6ca1\u6709\u5bfc\u51fa\u7f51\u683c\u5bf9\u8c61\uff0c\u5219\u7981\u7528\u5149\u6805\u5316\u3002\u7f51\u683c\u51fd\u6570\u7684\u8f93\u5165\u5185\u7f6e\u53d8\u91cf\u5728\u7b2c 5.2.3.10 \u8282\u4e2d\u63cf\u8ff0\u3002\u7f51\u683c\u51fd\u6570\u5fc5\u987b\u8fd4\u56de ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[max_total_threads_per_threadgroup]]")," \u51fd\u6570\u5c5e\u6027\u4e0e\u7f51\u683c\u51fd\u6570\u7ed3\u5408\u4f7f\u7528\u6765\u6307\u5b9a\u6bcf\u4e2a\u7ebf\u7a0b\u7ec4\u7684\u6700\u5927\u7ebf\u7a0b\u6570\u3002\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[mesh]]")," \u5c5e\u6027\u7684\u793a\u4f8b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"struct vertex_t {\n    float4 clip_pos [[position]];\n    float3 world_pos;\n    float3 color;\n    // other user-defined properties\n};\nstruct primitive_t {\n    float3 normal;\n};\n\n// A mesh declaration that can export one cube.\nusing cube_mesh_t = metal::mesh<vertex_t, primitive_t,\n                                8 /*corners*/,\n                                6*2 /*faces*/,\n                                metal::topology::triangle>;\nstruct view_info_t {\n    float4x4 view_proj;\n};\n\nstruct cube_info_t {\n    float4x3 world;\n    float3 color;\n};\n\n[[mesh, max_total_threads_per_threadgroup(12)]]\nvoid cube_stage(cube_mesh_t output,\n                const object_data cube_info_t &cube [[payload]],\n                constant view_info_t &view [[buffer(0)]],\n                uint gid [[threadgroup_position_in_grid]],\n                uint lane [[thread_index_in_threadgroup]]\n) {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u5e73\u94fa\u529f\u80fd"},"\u5e73\u94fa\u529f\u80fd"),(0,i.kt)("p",null,"iOS\uff1a\u4ece Metal 2 \u5f00\u59cb\u652f\u6301 Tile \u51fd\u6570\u3002"),(0,i.kt)("p",null,"macOS\uff1a\u4ece Metal 2.3 \u5f00\u59cb\u652f\u6301 Tile \u51fd\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"\u56fe\u5757\u7740\u8272\u51fd\u6570")," \u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u8ba1\u7b97\u5185\u6838\u6216\u7247\u6bb5\u51fd\u6570\uff0c\u53ef\u4ee5\u4e0e\u56fe\u5f62\u64cd\u4f5c\u5185\u8054\u6267\u884c\u5e76\u5229\u7528\u57fa\u4e8e\u56fe\u5757\u7684\u5ef6\u8fdf\u6e32\u67d3 (TBDR) \u67b6\u6784\u3002\u4f7f\u7528 TBDR\uff0c\u547d\u4ee4\u4f1a\u88ab\u7f13\u51b2\uff0c\u76f4\u5230\u7d2f\u79ef\u5927\u91cf\u547d\u4ee4\u4e3a\u6b62\u3002\u786c\u4ef6\u5c06\u5e27\u7f13\u51b2\u533a\u5212\u5206\u4e3a\u56fe\u5757\uff0c\u7136\u540e\u4ec5\u6e32\u67d3\u6bcf\u4e2a\u56fe\u5757\u5185\u53ef\u89c1\u7684\u56fe\u5143\u3002\u5e73\u94fa\u7740\u8272\u51fd\u6570\u652f\u6301\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u6267\u884c\u8ba1\u7b97\u64cd\u4f5c\uff0c\u8fd9\u53ef\u4ee5\u901a\u8fc7\u51cf\u5c11\u5185\u5b58\u5f80\u8fd4\u548c\u5229\u7528\u9ad8\u5e26\u5bbd\u672c\u5730\u5185\u5b58\u6765\u66f4\u6709\u6548\u5730\u8bbf\u95ee\u5185\u5b58\u3002"),(0,i.kt)("p",null,"\u5e73\u94fa\u51fd\u6570\u542f\u52a8\u4e00\u7ec4\u79f0\u4e3a ",(0,i.kt)("em",{parentName:"p"},"dispatch")," \u7684\u7ebf\u7a0b\uff0c\u8fd9\u4e9b\u7ebf\u7a0b\u88ab\u7ec4\u7ec7\u6210\u7ebf\u7a0b\u7ec4\u548c\u7f51\u683c\u3002\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5728\u6e32\u67d3\u901a\u9053\u4e2d\u7684\u4efb\u4f55\u70b9\u542f\u52a8\u7ebf\u7a0b\u3002\u5e73\u94fa\u51fd\u6570\u4f1a\u963b\u788d\u4e4b\u524d\u548c\u540e\u7eed\u7684\u7ed8\u5236\uff0c\u56e0\u6b64\u5e73\u94fa\u51fd\u6570\u5728\u6240\u6709\u65e9\u671f\u7ed8\u5236\u5b8c\u6210\u4e4b\u524d\u4e0d\u4f1a\u6267\u884c\u3002\u540c\u6837\uff0c\u5728 tile \u51fd\u6570\u5b8c\u6210\u4e4b\u524d\u4e0d\u4f1a\u6267\u884c\u540e\u9762\u7684\u7ed8\u5236\u3002"),(0,i.kt)("p",null,"GPU \u59cb\u7ec8\u5904\u7406\u6bcf\u4e2a\u56fe\u5757\u548c\u6bcf\u4e2a\u8c03\u5ea6\u76f4\u81f3\u5b8c\u6210\u3002\u5728\u5904\u7406\u4e0b\u4e00\u4e2a\u56fe\u5757\u4e4b\u524d\uff0c\u6240\u6709\u7ed8\u5236\u548c\u5206\u6d3e\u90fd\u4f1a\u5728\u63d0\u4ea4\u65f6\u542f\u52a8\u56fe\u5757\u3002"),(0,i.kt)("p",null,"\u5e73\u94fa\u51fd\u6570\u53ef\u4ee5\u8bbf\u95ee 32 KB \u7684\u7ebf\u7a0b\u7ec4\u5185\u5b58\uff0c\u8be5\u5185\u5b58\u53ef\u4ee5\u5728\u56fe\u50cf\u5757\u5b58\u50a8\u548c\u7ebf\u7a0b\u7ec4\u5b58\u50a8\u4e4b\u95f4\u5212\u5206\u3002\uff08\u6709\u5173\u7ebf\u7a0b\u7ec4\u5185\u5b58\u5927\u5c0f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 4.4 \u8282\u3002\uff09\u56fe\u50cf\u5757\u5927\u5c0f\u53d6\u51b3\u4e8e\u56fe\u5757\u5bbd\u5ea6\u3001\u56fe\u5757\u9ad8\u5ea6\u548c\u6bcf\u4e2a\u6837\u672c\u7684\u4f4d\u6df1\u5ea6\u3002\u6e32\u67d3\u901a\u9053\u9644\u4ef6\uff08\u4f7f\u7528\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40\uff1b\u8bf7\u53c2\u9605\u7b2c 5.6.3.1 \u8282\uff09\u6216\u51fd\u6570\u58f0\u660e\u7684\u7ed3\u6784\uff08\u4f7f\u7528\u663e\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40\uff1b\u8bf7\u53c2\u9605\u7b2c 5.6.3.2 \u8282\uff09\u786e\u5b9a\u6837\u672c\u7684\u4f4d\u6df1\u5ea6\u3002\u6709\u5173\u5185\u6838\u51fd\u6570\u5982\u4f55\u5229\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"threadgroup_imageblock")," \u5730\u5740\u7a7a\u95f4\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 4.5 \u8282\u3002"),(0,i.kt)("h2",{id:"\u4e3b\u673a\u540d\u5c5e\u6027"},"\u4e3b\u673a\u540d\u5c5e\u6027"),(0,i.kt)("p",null,"\u4ece Metal 2.2 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u8986\u76d6 Metal Framework API \u7528\u4e8e\u5f15\u7528\u9650\u5b9a\u51fd\u6570\u7684\u9ed8\u8ba4\u540d\u79f0\u3002\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[host_name(name)]]")," \u5c5e\u6027\u6dfb\u52a0\u5230\u51fd\u6570\u58f0\u660e\u4e2d\uff0c\u5176\u4e2d name \u662f Metal Framework API \u5c06\u7528\u6765\u5f15\u7528\u51fd\u6570\u540d\u79f0\u7684\u5b57\u7b26\u4e32\u6587\u5b57\u3002\u5982\u679c\u7ed9\u4e0d\u540c\u7684\u51fd\u6570\u8d4b\u4e88\u76f8\u540c\u7684\u540d\u79f0\uff0c\u7f16\u8bd1\u5668\u4f1a\u5f15\u53d1\u7f16\u8bd1\u65f6\u9519\u8bef\u3002\u4f8b\u5982\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'[[host_name("abc")]] [[kernel]] void funcA() {} // Metal API name is abc\n[[host_name("xyz")]] [[kernel]] void funcX() {} // Metal API name is xyz\n')),(0,i.kt)("h2",{id:"\u6a21\u677f\u5316\u9650\u5b9a\u51fd\u6570"},"\u6a21\u677f\u5316\u9650\u5b9a\u51fd\u6570"),(0,i.kt)("p",null,"\u4ece Metal 2.2 \u5f00\u59cb\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6a21\u677f\u8fdb\u884c\u9650\u5b9a\u51fd\u6570\uff08\u4f8b\u5982\u9876\u70b9\u3001\u7247\u6bb5\u3001\u53ef\u89c1\u548c\u5185\u6838\u51fd\u6570\uff09\u58f0\u660e\u3002\u4f60\u5fc5\u987b\u663e\u5f0f\u5b9e\u4f8b\u5316\u6a21\u677f\u4ee5\u5f3a\u5236\u7f16\u8bd1\u5668\u4e3a\u7ed9\u5b9a\u7684\u4e13\u4e1a\u5316\u53d1\u51fa\u4ee3\u7801\u3002\u4f8b\u5982\uff0c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"template<typename T>\nkernel void bar(device T *x) {\n    // ...\n}\n\n// Explicit specialization of `bar<T>` with [T = int]\ntemplate kernel void bar(device int *);\n")),(0,i.kt)("p",null,"\u7f16\u8bd1\u5668\u4e3a\u6240\u6709\u4e13\u4e1a\u5316\u63d0\u4f9b\u76f8\u540c\u7684\u540d\u79f0\uff0c\u9664\u975e\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[[host_name(name)]]")," \u5c5e\u6027\u4e3a\u6bcf\u4e2a\u4e13\u4e1a\u5316\u63d0\u4f9b\u4e0d\u540c\u7684\u540d\u79f0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'// Explicit specialization of `bar<T>` with [T = int] and host_name\n// "bar_int"\ntemplate [[host_name("bar_int")]] kernel void bar(device int *);\n\n// Explicit specialization of `bar<T>` with [T = float] and host_name\n// "bar_float"\ntemplate [[host_name("bar_float")]] kernel void bar(device float *);\n')))}h.isMDXComponent=!0}}]);