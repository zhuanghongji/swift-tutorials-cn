"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7295],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(t),c=i,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(g,l(l({ref:n},m),{},{components:t})):a.createElement(g,l({ref:n},m))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6494:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>N,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const r={},l="\u7eb9\u7406\u5bfb\u5740\u548c\u8f6c\u6362\u89c4\u5219",o={unversionedId:"metal-shading-language-specification/texture-addressing-and-conversion-rules/index",id:"metal-shading-language-specification/texture-addressing-and-conversion-rules/index",title:"\u7eb9\u7406\u5bfb\u5740\u548c\u8f6c\u6362\u89c4\u5219",description:"\u6307\u5b9a\u7ed9 sample\u3001samplecompare\u3001gather\u3001gathercompare\u3001read \u548c write \u51fd\u6570\u7684\u7eb9\u7406\u5750\u6807\u4e0d\u80fd\u662f INF \u6216 NaN\u3002\u53e6\u5916\uff0c\u5bf9\u4e8e\u7eb9\u7406\u8bfb\u53d6\u548c\u5199\u5165\u51fd\u6570\uff0c\u7eb9\u7406\u5750\u6807\u5fc5\u987b\u5f15\u7528\u7eb9\u7406\u5185\u90e8\u7684\u533a\u57df\u3002\u5982\u679c\u7eb9\u7406\u5750\u6807\u8d85\u51fa\u7eb9\u7406\u8fb9\u754c\uff0c\u5219 read \u548c write \u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49\u3002",source:"@site/docs/metal-shading-language-specification/texture-addressing-and-conversion-rules/index.mdx",sourceDirName:"metal-shading-language-specification/texture-addressing-and-conversion-rules",slug:"/metal-shading-language-specification/texture-addressing-and-conversion-rules/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/texture-addressing-and-conversion-rules/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/texture-addressing-and-conversion-rules/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u6d6e\u70b9\u578b\u548c\u6574\u6570\u578b\u7684\u8f6c\u6362\u89c4\u5219",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/conversion-rules-for-floating-point-and-integer-types/"}},p={},s=[{value:"\u5f52\u4e00\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",id:"\u5f52\u4e00\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"\u5c06\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c",id:"\u5c06\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c",level:3},{value:"\u5c06\u6d6e\u70b9\u503c\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b",id:"\u5c06\u6d6e\u70b9\u503c\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b",level:3},{value:"\u534a\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",id:"\u534a\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",id:"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"10 \u4f4d\u548c 11 \u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",id:"10-\u4f4d\u548c-11-\u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"\u5177\u6709 5 \u4f4d\u6307\u6570\u7684 9 \u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",id:"\u5177\u6709-5-\u4f4d\u6307\u6570\u7684-9-\u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",id:"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219",level:2},{value:"sRGBA \u548c sBGRA \u7eb9\u7406\u7684\u8f6c\u6362\u89c4\u5219",id:"srgba-\u548c-sbgra-\u7eb9\u7406\u7684\u8f6c\u6362\u89c4\u5219",level:2}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},d=m("ToBePolishedAfterTranslation"),u=m("OriginalPDF"),c=m("TableView"),g={toc:s},k="wrapper";function N(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7eb9\u7406\u5bfb\u5740\u548c\u8f6c\u6362\u89c4\u5219"},"\u7eb9\u7406\u5bfb\u5740\u548c\u8f6c\u6362\u89c4\u5219"),(0,i.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,i.kt)(u,{title:"7.7 Texture Addressing and Conversion Rules",mdxType:"OriginalPDF"}),(0,i.kt)("p",null,"\u6307\u5b9a\u7ed9 ",(0,i.kt)("inlineCode",{parentName:"p"},"sample"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"sample_compare"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"gather"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"gather_compare"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"read")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," \u51fd\u6570\u7684\u7eb9\u7406\u5750\u6807\u4e0d\u80fd\u662f INF \u6216 NaN\u3002\u53e6\u5916\uff0c\u5bf9\u4e8e\u7eb9\u7406\u8bfb\u53d6\u548c\u5199\u5165\u51fd\u6570\uff0c\u7eb9\u7406\u5750\u6807\u5fc5\u987b\u5f15\u7528\u7eb9\u7406\u5185\u90e8\u7684\u533a\u57df\u3002\u5982\u679c\u7eb9\u7406\u5750\u6807\u8d85\u51fa\u7eb9\u7406\u8fb9\u754c\uff0c\u5219 ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"write")," \u51fd\u6570\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u5404\u8282\u8ba8\u8bba\u5728\u56fe\u5f62\u6216\u5185\u6838\u51fd\u6570\u4e2d\u8bfb\u53d6\u548c\u5199\u5165\u7eb9\u7406\u65f6\u8f6c\u6362\u89c4\u5219\u7684\u5e94\u7528\u3002\u6267\u884c\u591a\u91cd\u91c7\u6837\u89e3\u6790\u64cd\u4f5c\u65f6\uff0c\u8fd9\u4e9b\u8f6c\u6362\u89c4\u5219\u4e0d\u9002\u7528\u3002"),(0,i.kt)("h2",{id:"\u5f52\u4e00\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"},"\u5f52\u4e00\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,"\u672c\u8282\u8ba8\u8bba\u5c06\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,i.kt)("h3",{id:"\u5c06\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c"},"\u5c06\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709 8\u300110 \u6216 16 \u4f4d\u5f52\u4e00\u5316\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u503c\u7684\u7eb9\u7406\uff0c\u7eb9\u7406\u91c7\u6837\u548c\u8bfb\u53d6\u51fd\u6570\u5c06\u50cf\u7d20\u503c\u4ece 8 \u6216 16 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u8f6c\u6362\u4e3a\u5f52\u4e00\u5316\u5355\u7cbe\u5ea6\u6216\u534a\u7cbe\u5ea6\u6d6e\u70b9\u6570- ",(0,i.kt)("inlineCode",{parentName:"p"},"[0.0...1.0]")," \u8303\u56f4\u5185\u7684\u70b9\u503c\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709 8 \u4f4d\u6216 16 \u4f4d\u6807\u51c6\u5316\u6709\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u503c\u7684\u7eb9\u7406\uff0c\u7eb9\u7406\u91c7\u6837\u548c\u8bfb\u53d6\u51fd\u6570\u5c06\u50cf\u7d20\u503c\u4ece 8 \u4f4d\u6216 16 \u4f4d\u6709\u7b26\u53f7\u6574\u6570\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u5355\u7cbe\u5ea6\u6216\u534a\u7cbe\u5ea6\u6d6e\u70b9\u503c\u8303\u56f4 ",(0,i.kt)("inlineCode",{parentName:"p"},"[-1.0...1.0]"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u8f6c\u6362\u6309\u7167\u8868 7 \u7b2c\u4e8c\u5217\u4e2d\u5217\u51fa\u7684\u65b9\u5f0f\u6267\u884c\u30026. \u8f6c\u6362\u89c4\u5219\u7684\u7cbe\u5ea6\u4fdd\u8bc1 ",(0,i.kt)("inlineCode",{parentName:"p"},"<= 1.5"),' ulp\uff0c"\u6781\u7aef\u60c5\u51b5" \u5217\u4e2d\u63cf\u8ff0\u7684\u60c5\u51b5\u9664\u5916\u3002'),(0,i.kt)(c,{num:"7.6",title:"Conversion to a normalized float value",headers:["Convert from","Conversion Rule to Normalized Float","Corner Cases"],datasList:[["1-bit normalized unsigned integer","float(c)","0 must convert to 0.0 1 \nmust convert to 1.0"],["2-bit normalized","unsigned integer float(c) / 3.0","0 must convert to 0.0 \n3 must convert to 1.0"],["4-bit normalized unsigned integer","float(c) / 15.0","0 must convert to 0.0 15 \nmust convert to 1.0"],["5-bit normalized","unsigned integer float(c) / 31.0","0 must convert to 0.0 31 \nmust convert to 1.0"],["6-bit normalized unsigned integer","float(c) / 63.0","0 must convert to 0.0 63 \nmust convert to 1.0"],["8-bit normalized","unsigned integer float(c) / 255.0","0 must convert to 0.0 \n255 must convert to 1.0"],["10-bit normalized unsigned integer","float(c) / 1023.0","0 must convert to 0.0 1023 \nmust convert to 1.0"],["16-bit normalized","unsigned integer float(c) / 65535.0","0 must convert to 0.0 \n65535 must convert to 1.0"],["8-bit normalized signed integer","max(-1.0, float(c)/127.0)","-128 and -127 must convert to -1.0 \n0 must convert to 0.0 \n127 must convert to 1.0"],["16-bit normalized","signed integer max(-1.0, float(c)/32767.0)","-32768 and -32767 must convert to -1.0 \n0 must convert to 0.0 \n32767 must convert to 1.0"]],mdxType:"TableView"}),(0,i.kt)("h3",{id:"\u5c06\u6d6e\u70b9\u503c\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b"},"\u5c06\u6d6e\u70b9\u503c\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709 8\u300110 \u6216 16 \u4f4d\u5f52\u4e00\u5316\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u503c\u7684\u7eb9\u7406\uff0c\u7eb9\u7406\u5199\u5165\u51fd\u6570\u4f1a\u5c06\u5355\u7cbe\u5ea6\u6216\u534a\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u503c\u8f6c\u6362\u4e3a 8 \u6216 16 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709 8 \u6216 16 \u4f4d\u6807\u51c6\u5316\u6709\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u503c\u7684\u7eb9\u7406\uff0c\u7eb9\u7406\u5199\u5165\u51fd\u6570\u4f1a\u5c06\u5355\u7cbe\u5ea6\u6216\u534a\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u503c\u8f6c\u6362\u4e3a 8 \u6216 16 \u4f4d\u6709\u7b26\u53f7\u6574\u6570\u3002"),(0,i.kt)("p",null,"NaN \u503c\u8f6c\u6362\u4e3a\u96f6\u3002"),(0,i.kt)("p",null,"\u4ece\u6d6e\u70b9\u503c\u5230\u6807\u51c6\u5316\u6574\u6570\u503c\u7684\u8f6c\u6362\u6309\u7167\u8868 7.7 \u4e2d\u5217\u51fa\u7684\u65b9\u5f0f\u6267\u884c\u3002"),(0,i.kt)(c,{num:"7.7",title:"Conversion from floating-point to a normalized integer value",headers:["Convert to","Conversion Rule to Normalized Integer"],datasList:[["1-bit normalized \nunsigned integer","x = min(max(f, 0.0), 1.0) \ni0:0 = intRTNE(x)"],["2-bit normalized \nunsigned integer","x = min(max(f * 3.0, 0.0), 3.0) \ni1:0 = intRTNE(x)"],["4-bit normalized \nunsigned integer","x = min(max(f * 15.0, 0.0), 15.0) \ni3:0 = intRTNE(x)"],["5-bit normalized \nunsigned integer","x = min(max(f * 31.0, 0.0), 31.0) \ni4:0 = intRTNE(x)"],["6-bit normalized \nunsigned integer","x = min(max(f * 63.0, 0.0), 63.0) \ni5:0 = intRTNE(x)"],["8-bit normalized \nunsigned integer","x = min(max(f * 255.0, 0.0), 255.0) \ni7:0 = intRTNE(x)"],["10-bit normalized \nunsigned integer","x = min(max(f * 1023.0, 0.0), 1023.0) \ni9:0 = intRTNE(x)"],["16-bit normalized \nunsigned integer","result = min(max(f * 65535.0, 0.0), 65535.0) \ni15:0 = intRTNE(x)"],["8-bit normalized \nsigned integer","result = min(max(f * 127.0, -127.0), 127.0) \ni7:0 = intRTNE(x)"],["16-bit normalized \nsigned integer","result = min(max(f * 32767.0, -32767.0),32767.0) \ni15:0 = intRTNE(x)"]],mdxType:"TableView"}),(0,i.kt)("p",null,"\u5728 Metal 2 \u4e2d\uff0c\u6240\u6709\u4e0e\u975e\u89c4\u8303\u6570\u636e\u7c7b\u578b\u4e4b\u95f4\u7684\u8f6c\u6362\u90fd\u5e94\u6b63\u786e\u820d\u5165\u3002"),(0,i.kt)("h2",{id:"\u534a\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"},"\u534a\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709\u534a\u7cbe\u5ea6\uff08half-precision \uff09\u6d6e\u70b9\u50cf\u7d20\u989c\u8272\u503c\u7684\u7eb9\u7406\uff0c\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," \u7684\u8f6c\u6362\u662f\u65e0\u635f\u7684\u3002\u4f7f\u7528\u820d\u5165\u65b9\u5f0f\u5c06\u5c3e\u6570\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u5230\u5076\u6570\u820d\u5165\u6a21\u5f0f\u3002\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u65f6\u53ef\u80fd\u751f\u6210\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u6570\u636e\u7c7b\u578b\u7684\u975e\u89c4\u8303\u5316\u6570\u5b57\u53ef\u80fd\u4e0d\u4f1a\u5237\u65b0\u4e3a\u96f6\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"float")," NaN \u53ef\u4ee5\u8f6c\u6362\u4e3a\u9002\u5f53\u7684 NaN \u6216\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u7c7b\u578b\u4e2d\u5237\u65b0\u4e3a\u96f6\u3002\u5fc5\u987b\u5c06\u6d6e\u70b9 INF \u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"half")," \u7c7b\u578b\u4e2d\u7684\u9002\u5f53 INF\u3002"),(0,i.kt)("h2",{id:"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"},"\u5355\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u89c4\u5219\u9002\u7528\u4e8e\u8bfb\u53d6\u548c\u5199\u5165\u5177\u6709\u5355\u7cbe\u5ea6\u6d6e\u70b9\u50cf\u7d20\u989c\u8272\u503c\u7684\u7eb9\u7406\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"NaN \u53ef\u4ee5\u8f6c\u6362\u4e3a NaN \u503c\u6216\u5237\u65b0\u4e3a\u96f6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u4fdd\u7559 INF\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u975e\u89c4\u8303\u5316\u7684\u6570\u5b57\u53ef\u80fd\u4f1a\u88ab\u5237\u65b0\u4e3a\u96f6\u3002- \u5fc5\u987b\u4fdd\u7559\u6240\u6709\u5176\u5b83\u503c\u3002")),(0,i.kt)("h2",{id:"10-\u4f4d\u548c-11-\u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"},"10 \u4f4d\u548c 11 \u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,"\u6d6e\u70b9\u683c\u5f0f\u4f7f\u7528 5 \u4f4d\u6307\u6570\uff0c\u5bf9\u4e8e 10 \u4f4d\u6d6e\u70b9\u7c7b\u578b\u4f7f\u7528 5 \u4f4d\u5c3e\u6570\uff0c\u5bf9\u4e8e 11 \u4f4d\u6d6e\u70b9\u7c7b\u578b\u4f7f\u7528 6 \u4f4d\u5c3e\u6570\uff0c\u5e76\u4e3a\u8fd9\u4e24\u79cd\u7c7b\u578b\u63d0\u4f9b\u9644\u52a0\u9690\u85cf\u4f4d\u3002\u6ca1\u6709\u7b26\u53f7\u4f4d\u300210 \u4f4d\u548c 11 \u4f4d\u6d6e\u70b9\u7c7b\u578b\u4fdd\u7559\u975e\u6b63\u89c4\u6570\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6d6e\u70b9\u683c\u5f0f\u4f7f\u7528\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u6570\u548c\u5c3e\u6570\u5747\u4e3a 0\uff0c\u5219\u6d6e\u70b9\u503c\u4e3a 0.0\u3002"),(0,i.kt)("li",{parentName:"ul"},'\u5982\u679c\u6307\u6570\u4e3a 31 \u5e76\u4e14\u5c3e\u6570\u4e3a"= 0\uff0c\u5219\u751f\u6210\u7684\u6d6e\u70b9\u503c\u4e3a NaN\u3002'),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u6570\u4e3a 31 \u5e76\u4e14\u5c3e\u6570\u4e3a 0\uff0c\u5219\u751f\u6210\u7684\u6d6e\u70b9\u503c\u4e3a\u6b63\u65e0\u7a77\u5927\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c 0 ",(0,i.kt)("inlineCode",{parentName:"li"},"<=")," \u6307\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"<=")," 31\uff0c\u6d6e\u70b9\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"2^(exponent - 15) * (1 + mantissa / N)"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c exponent \u4e3a 0\uff0cmantissa \u4e0d\u7b49\u4e8e 0\uff0c\u5219\u6d6e\u70b9\u503c\u4e3a a \u975e\u89c4\u683c\u5316\u6570\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"2^(exponent - 14) * (mantissa / N)"),"\u3002\u5982\u679c mantissa \u4e3a 5 \u4f4d\uff0c\u5219 N \u4e3a 32\uff1b\u5982\u679c mantissa \u4e3a 6 \u4f4d\uff0c\u5219 N \u4e3a 64\u3002")),(0,i.kt)("p",null,"\u5c06 10 \u4f4d\u6216 11 \u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u4e3a\u534a\u7cbe\u5ea6\u6216\u5355\u7cbe\u5ea6\u6d6e\u70b9\u503c\u662f\u65e0\u635f\u7684\u3002\u534a\u7cbe\u5ea6\u6216\u5355\u7cbe\u5ea6\u6d6e\u70b9\u503c\u5230 10 \u4f4d\u6216 11 \u4f4d\u6d6e\u70b9\u503c\u7684\u8f6c\u6362\u5fc5\u987b ",(0,i.kt)("inlineCode",{parentName:"p"},"<=")," 0.5 ULP\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u6d6e\u70b9\u7c7b\u578b\uff0c\u4efb\u4f55\u5bfc\u81f4\u503c\u5c0f\u4e8e\u96f6\u7684\u64cd\u4f5c\u90fd\u4f1a\u88ab\u94b3\u4f4d\u4e3a\u96f6\u3002"),(0,i.kt)("h2",{id:"\u5177\u6709-5-\u4f4d\u6307\u6570\u7684-9-\u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"},"\u5177\u6709 5 \u4f4d\u6307\u6570\u7684 9 \u4f4d\u6d6e\u70b9\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"RGB9E5_SharedExponent")," \u5171\u4eab\u6307\u6570\u6d6e\u70b9\u683c\u5f0f\u4f7f\u7528 5 \u4f4d\u4f5c\u4e3a\u6307\u6570\uff0c9 \u4f4d\u4f5c\u4e3a\u5c3e\u6570\u3002\u6ca1\u6709\u7b26\u53f7\u4f4d\u3002"),(0,i.kt)("p",null,"\u4ece\u8fd9\u79cd\u683c\u5f0f\u5230\u534a\u7cbe\u5ea6\u6216\u5355\u7cbe\u5ea6\u6d6e\u70b9\u503c\u7684\u8f6c\u6362\u662f\u65e0\u635f\u7684\uff0c\u5e76\u4e14\u5bf9\u4e8e\u6bcf\u4e2a\u989c\u8272\u901a\u9053\u8ba1\u7b97\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"2^(shared exponent - 15) * (mantissa / 512)"),"\u3002"),(0,i.kt)("p",null,"\u4ece\u534a\u7cbe\u5ea6\u6216\u5355\u7cbe\u5ea6\u6d6e\u70b9 RGB \u989c\u8272\u503c\u5230\u6b64\u683c\u5f0f\u7684\u8f6c\u6362\u6309\u5982\u4e0b\u65b9\u5f0f\u6267\u884c\uff0c\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," \u662f\u6bcf\u4e2a\u5206\u91cf\u7684\u5c3e\u6570\u4f4d\u6570 (9)\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"B")," \u662f\u6307\u6570\u504f\u5dee (15)\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Emax")," \u662f\u5141\u8bb8\u7684\u6700\u5927\u504f\u5dee\u6307\u6570\u503c (31)\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9650\u5236 ",(0,i.kt)("inlineCode",{parentName:"li"},"r"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"g")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," \u5206\u91cf\uff08\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u5c06 NaN \u6620\u5c04\u4e3a\u96f6\uff09\uff0c\u5982\u4e0b\u6240\u793a\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"rc = max(0, min(sharedexpmax, r))\ngc = max(0, min(sharedexpmax, g))\nbc = max(0, min(sharedexpmax, b))\n")),(0,i.kt)("p",null,"\u5176\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"sharedexpmax = ((2N - 1) / 2N) * 2(Emax - B)"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u6700\u5927 clamped \u5206\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"maxc"),"\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"maxc = max(rc, gc, bc)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u521d\u6b65\u5171\u4eab\u6307\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"expp"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"expp = max(-B - 1, floor(log2(maxc)) + 1 + B)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u7cbe\u786e\u7684\u5171\u4eab\u6307\u6570 ",(0,i.kt)("inlineCode",{parentName:"li"},"exps"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"maxs = floor((maxc / 2 expp - B - N) + 0.5f)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"exps = expp"),", \u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"0 <= maxs < 2N"),"\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"exps = expp + 1"),", \u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"p"},"maxs = 2N"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u8ba1\u7b97 ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"2N - 1")," \u8303\u56f4\u5185\u7684\u4e09\u4e2a\u6574\u6570\u503c\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"rs = floor(rc / 2 expp - B - N) + 0.5f\ngs = floor(gc / 2 expp - B - N) + 0.5f\nbs = floor(bc / 2 expp - B - N) + 0.5f\n")),(0,i.kt)("p",null,"\u5c06\u534a\u7cbe\u5ea6\u6216\u5355\u7cbe\u5ea6\u6d6e\u70b9\u989c\u8272\u503c\u8f6c\u6362\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"MTLPixelFormatRGB9E5Float")," \u5171\u4eab\u6307\u6570\u6d6e\u70b9\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"<=")," 0.5 ULP\u3002"),(0,i.kt)("h2",{id:"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"},"\u6709\u7b26\u53f7\u548c\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709 8 \u6216 16 \u4f4d\u6709\u7b26\u53f7\u6216\u65e0\u7b26\u53f7\u6574\u6570\u50cf\u7d20\u503c\u7684\u7eb9\u7406\uff0c\u7eb9\u7406\u91c7\u6837\u548c\u8bfb\u53d6\u51fd\u6570\u8fd4\u56de\u6709\u7b26\u53f7\u6216\u65e0\u7b26\u53f7 32 \u4f4d\u6574\u6570\u50cf\u7d20\u503c\u3002\u672c\u8282\u4e2d\u63cf\u8ff0\u7684\u8f6c\u6362\u5fc5\u987b\u6b63\u786e\u9971\u548c\u3002"),(0,i.kt)("p",null,"\u5bf9\u8fd9\u4e9b\u6574\u6570\u7eb9\u7406\u7684\u5199\u5165\u6267\u884c\u8868 7.8 \u4e2d\u5217\u51fa\u7684\u8f6c\u6362\u4e4b\u4e00\u3002"),(0,i.kt)(c,{num:"7.8",title:"Conversion between integer pixel data types",headers:["Convert From","To","Conversion Rule"],datasList:[["32-bit signed integer","8-bit signed integer","result = convert_char_saturate(val)"],["32-bit signed integer","16-bit signed integer","result = convert_short_saturate(val)"],["32-bit unsigned integer","8-bit unsigned integer","result = convert_uchar_saturate(val)"],["32-bit unsigned integer","16-bit unsigned integer","result = convert_ushort_saturate(val)"]],mdxType:"TableView"}),(0,i.kt)("h2",{id:"srgba-\u548c-sbgra-\u7eb9\u7406\u7684\u8f6c\u6362\u89c4\u5219"},"sRGBA \u548c sBGRA \u7eb9\u7406\u7684\u8f6c\u6362\u89c4\u5219"),(0,i.kt)("p",null,"Conversion from sRGB space to linear space is automatically done when sampling from an sRGB texture. The conversion from sRGB to linear RGB is performed before the filter specified in the sampler specified when sampling the texture is applied. If the texture has an alpha channel, the alpha data is stored in linear color space."),(0,i.kt)("p",null,"\u5199\u5165 sRGB \u7eb9\u7406\u65f6\uff0c\u4f1a\u81ea\u52a8\u5b8c\u6210\u4ece\u7ebf\u6027\u7a7a\u95f4\u5230 sRGB \u7a7a\u95f4\u7684\u8f6c\u6362\u3002\u5982\u679c\u7eb9\u7406\u5177\u6709 Alpha \u901a\u9053\uff0c\u5219 Alpha \u6570\u636e\u5b58\u50a8\u5728\u7ebf\u6027\u989c\u8272\u7a7a\u95f4\u4e2d\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u5c06\u6807\u51c6\u5316\u7684 8 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u4ece sRGB \u989c\u8272\u503c\u8f6c\u6362\u4e3a\u6d6e\u70b9\u7ebf\u6027 RGB \u989c\u8272\u503c\uff08\u79f0\u4e3a c\uff09\u7684\u8f6c\u6362\u89c4\u5219\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"if (c <= 0.04045)\n    result = c / 12.92;\nelse\n    result = powr((c + 0.055) / 1.055, 2.4);\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u8f6c\u6362\u7684\u7cbe\u5ea6\u5fc5\u987b\u786e\u4fdd\u5c06\u7ed3\u679c\u8f6c\u6362\u56de\u975e\u6807\u51c6\u5316 sRGB \u503c\u4f46\u4e0d\u820d\u5165\u4e3a 8 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u503c\uff08\u79f0\u4e3a r\uff09\u65f6\u6240\u5f97\u65e0\u9650\u7cbe\u786e\u6d6e\u70b9\u503c\u4e0e\u539f\u59cb sRGB 8 \u4e4b\u95f4\u7684\u5dee\u503c\u4f4d\u65e0\u7b26\u53f7\u6574\u6570\u989c\u8272\u503c\uff08\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"rorig"),"\uff09",(0,i.kt)("inlineCode",{parentName:"p"},"<=")," 0.5\uff1b\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"fabs(r - rorig) <= 0.5\n")),(0,i.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u89c4\u5219\u5c06\u7ebf\u6027 RGB \u6d6e\u70b9\u989c\u8272\u503c\uff08\u79f0\u4e3a c\uff09\u8f6c\u6362\u4e3a\u6807\u51c6\u5316 8 \u4f4d\u65e0\u7b26\u53f7\u6574\u6570 sRGB \u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"if (isnan(c)) c = 0.0;\nif (c > 1.0)\n    c = 1.0;\nelse if (c < 0.0)\n    c = 0.0;\nelse if (c < 0.0031308)\n    c = 12.92 * c;\nelse\n    c = 1.055 * powr(c, 1.0/2.4) - 0.055;\n\n//  Convert to integer scale: c = c * 255.0\n//  Convert to integer: c = c + 0.5\n//  Drop the decimal fraction. The remaining floating-\npoint(integral) value\n//  is converted directly to an integer.\n")),(0,i.kt)("p",null,"\u4e0a\u8ff0\u8f6c\u6362\u7684\u7cbe\u5ea6\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"fabs(reference result - integer result) < 1.0\n")),(0,i.kt)("p",null,"\uf8ff Apple Inc. \u7248\u6743\u6240\u6709 \xa9 2018 - 2023 Apple Inc. \u4fdd\u7559\u6240\u6709\u6743\u5229\u3002"))}N.isMDXComponent=!0}}]);