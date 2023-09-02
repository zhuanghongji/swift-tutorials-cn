"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[2371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||r;return n?i.createElement(m,l(l({ref:t},s),{},{components:n})):i.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={},l="\u53ef\u89c1\u51fd\u6570\u8868",o={unversionedId:"metal-shading-language-specification/visible-function-table/index",id:"metal-shading-language-specification/visible-function-table/index",title:"\u53ef\u89c1\u51fd\u6570\u8868",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2. 3 \u8d77\u652f\u6301\u7c7b\u578b\u3002",source:"@site/docs/metal-shading-language-specification/visible-function-table/index.mdx",sourceDirName:"metal-shading-language-specification/visible-function-table",slug:"/metal-shading-language-specification/visible-function-table/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/visible-function-table/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/visible-function-table/index.mdx",tags:[],version:"current",lastUpdatedAt:1693648798,formattedLastUpdatedAt:"2023\u5e749\u67082\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u7edf\u4e00\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/uniform-type/"},next:{title:"\u529f\u80fd\u7ec4\u5c5e\u6027",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/function-group-attribute/"}},c={},p=[],s=(u="OrigninalPDF",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const f={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53ef\u89c1\u51fd\u6570\u8868"},"\u53ef\u89c1\u51fd\u6570\u8868"),(0,a.kt)(s,{title:"2.15 Visible Function Table",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2. 3 \u8d77\u652f\u6301\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u5728\u5934\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"<metal_visible_function_table>,")," \u4e2d\u5b9a\u4e49\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"visible_function_table")," \u7c7b\u578b\u7528\u4e8e\u8868\u793a\u5b58\u50a8\u5728\u8bbe\u5907\u5185\u5b58\u4e2d\u7684\u53ef\u89c1\u51fd\u6570\u7684\u51fd\u6570\u6307\u9488\u8868\uff08\u53c2\u89c1\u7b2c 5.1.4 \u8282\uff09\u3002\u5728 Metal 2.3 \u4e2d\uff0c\u5b83\u53ef\u4ee5\u5728\u8ba1\u7b97\uff08\u5185\u6838\uff09\u51fd\u6570\u4e2d\u4f7f\u7528\u3002\u4ece Metal 2.4 \u5f00\u59cb\uff0c\u5b83\u53ef\u4ee5\u7528\u4e8e\u7247\u6bb5\u3001\u9876\u70b9\u548c\u56fe\u5757\u51fd\u6570\u3002\u5b83\u662f\u4e00\u79cd\u4e0d\u900f\u660e\u7c7b\u578b\uff0c\u65e0\u6cd5\u4ece GPU \u4fee\u6539\u8868\u7684\u5185\u5bb9\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"visible_function_table")," \u7c7b\u578b\u53ef\u4ee5\u5728\u53c2\u6570\u7f13\u51b2\u533a\u4e2d\u4f7f\u7528\uff0c\u6216\u8005\u4f7f\u7528\u7f13\u51b2\u533a\u7ed1\u5b9a\u70b9\u76f4\u63a5\u4f20\u9012\u7ed9\u9650\u5b9a\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u6a21\u677f\u53c2\u6570 T \u58f0\u660e\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"visible_function_table")," \u7c7b\u578b\uff0c\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u662f\u8868\u4e2d\u5b58\u50a8\u7684\u51fd\u6570\u7684\u7b7e\u540d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u6a21\u677f\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"visible_function_table<typename T>\n")),(0,a.kt)("p",null,'\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u58f0\u660e\u4e0e\u5b9a\u4e49\u4e3a "',(0,a.kt)("inlineCode",{parentName:"p"},"[[visible]] int func(float f)"),'" \u7684\u51fd\u6570\u517c\u5bb9\u7684\u8868\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"visible_function_table<int(float)> functions;\n")),(0,a.kt)("p",null,"\u8981\u4ece\u8868\u4e2d\u83b7\u53d6\u53ef\u89c1\u7684\u51fd\u6570\u6307\u9488\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," \u8fd0\u7b97\u7b26\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"using fnptr = T (*)(...) [[visible]]\nfnptr operator[](uint index) const;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"size()")," \u8fd4\u56de\u8868\u4e2d\u51fd\u6570\u6307\u9488\u6761\u76ee\u7684\u6570\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"uint size() const\n")),(0,a.kt)("p",null,"\u5982\u679c\u8868\u4e3a\u7a7a\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"empty()")," \u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"bool empty() const\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u51fd\u6570\u53ef\u7528\u4e8e\u786e\u5b9a\u8868\u662f\u5426\u4e3a\u7a7a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"visible_function_table"),"\u3002\u7a7a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"visible_function_table")," \u662f\u4e00\u4e2a\u4e0d\u6307\u5411\u4efb\u4f55\u4e1c\u897f\u7684\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"bool is_null_visible_function_table(visible_function_table<T>);\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u5728\u7f13\u51b2\u533a\u4e2d\u4f20\u9012\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"using TFuncSig = void(float, int);\nkernel void F(uint tid [[thread_position_in_grid]],\n              device float* buf [[buffer(0)]],\n              visible_function_table<TFuncSig> table [[buffer(1)]]) {\n    uint tsize = table.size();\n    table[tid % tsize](buf[tid], tid);\n}\n")))}m.isMDXComponent=!0}}]);