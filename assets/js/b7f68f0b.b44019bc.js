(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8352],{18159:(e,t,n)=>{e.exports={src:{srcSet:n.p+"assets/ideal-img/12_1.9a8be8e.219.jpg 219w",images:[{path:n.p+"assets/ideal-img/12_1.9a8be8e.219.jpg",width:219,height:272}],src:n.p+"assets/ideal-img/12_1.9a8be8e.219.jpg",toString:function(){return n.p+"assets/ideal-img/12_1.9a8be8e.219.jpg"},placeholder:void 0,width:219,height:272},preSrc:"data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABwMG/8QAJhAAAQMDAgUFAAAAAAAAAAAAAgEDEQQFBgAhEhQVMXEHGCJR0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDapgWUDYsqoqfJLeLNZy3TxNeIaUROTnz2TRN7YryW65RZpXddy/dOlmwZhqyZBQpWuKNU02ZErQ/FQJThE+l7RqbHpAy6w251g04xQo5UViU86D//2Q=="}},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),c=a,g=s["".concat(o,".").concat(c)]||s[c]||d[c]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65271:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={},i="\u7eb9\u7406\u548c\u91c7\u6837",p={unversionedId:"metal-programming-guide/texturing-and-sampling/index",id:"metal-programming-guide/texturing-and-sampling/index",title:"\u7eb9\u7406\u548c\u91c7\u6837",description:"<Wisdom",source:"@site/docs/metal-programming-guide/texturing-and-sampling/index.mdx",sourceDirName:"metal-programming-guide/texturing-and-sampling",slug:"/metal-programming-guide/texturing-and-sampling/",permalink:"/swift-tutorials-cn/docs/metal-programming-guide/texturing-and-sampling/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-programming-guide/texturing-and-sampling/index.mdx",tags:[],version:"current",lastUpdatedAt:1694410412,formattedLastUpdatedAt:"2023\u5e749\u670811\u65e5",frontMatter:{},sidebar:"metalprogrammingguideSidebar",previous:{title:"\u4e0e\u6a21\u578b I/O \u63a5\u53e3",permalink:"/swift-tutorials-cn/docs/metal-programming-guide/interfacing-with-model-io/"},next:{title:"\u591a\u901a\u9053\u6e32\u67d3\u6280\u672f",permalink:"/swift-tutorials-cn/docs/metal-programming-guide/multipass-rendering-techniques/"}},o={},m=[{value:"\u7eb9\u7406\u6620\u5c04",id:"\u7eb9\u7406\u6620\u5c04",level:2},{value:"\u7eb9\u7406\u8d34\u56fe",id:"\u7eb9\u7406\u8d34\u56fe",level:2},{value:"\u91c7\u6837",id:"\u91c7\u6837",level:2},{value:"\u5730\u5740\u6a21\u5f0f",id:"\u5730\u5740\u6a21\u5f0f",level:3},{value:"\u8fc7\u6ee4\u6a21\u5f0f",id:"\u8fc7\u6ee4\u6a21\u5f0f",level:3},{value:"\u5404\u5411\u5f02\u6027",id:"\u5404\u5411\u5f02\u6027",level:3},{value:"\u9884\u7f16\u8bd1\u91c7\u6837\u5668\u72b6\u6001",id:"\u9884\u7f16\u8bd1\u91c7\u6837\u5668\u72b6\u6001",level:2},{value:"\u5c06\u7eb9\u7406\u548c\u91c7\u6837\u5668\u4f20\u9012\u7ed9\u56fe\u5f62\u51fd\u6570",id:"\u5c06\u7eb9\u7406\u548c\u91c7\u6837\u5668\u4f20\u9012\u7ed9\u56fe\u5f62\u51fd\u6570",level:2},{value:"\u521b\u5efa\u7eb9\u7406",id:"\u521b\u5efa\u7eb9\u7406",level:3},{value:"Metal \u8d28\u611f\u529f\u80fd",id:"metal-\u8d28\u611f\u529f\u80fd",level:3},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},s=u("ToBePolishedAfterTranslation"),d=u("Wisdom"),c=u("Figure"),g={toc:m},k="wrapper";function f(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,r.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7eb9\u7406\u548c\u91c7\u6837"},"\u7eb9\u7406\u548c\u91c7\u6837"),(0,a.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(d,{words:"\u7eb9\u7406\u662f\u6211\u4eec\u5fd8\u8bb0\u7684\u4e1c\u897f\u2014\u2014\u5b83\u8ba9\u670d\u88c5\u770b\u8d77\u6765\u975e\u5e38\u6602\u8d35\u3002\u5982\u679c\u4f60\u5bb3\u6015\u8272\u5f69\u66f4\u4e30\u5bcc\u3001\u5370\u82b1\u66f4\u591a\u7684\u4e1c\u897f\uff0c\u4f46\u4ecd\u7136\u80fd\u5f15\u8d77\u5174\u8da3\uff0c\u4f60\u53ef\u4ee5\u7a7f\u5355\u8272\u670d\u88c5\u3002",author:"Stacy London",mdxType:"Wisdom"}),(0,a.kt)("p",null,"\u7740\u8272\u5668\u662f\u975e\u5e38\u5f3a\u5927\u7684\u7a0b\u5e8f\uff0c\u80fd\u591f\u663e\u793a\u8bb8\u591a\u6709\u8da3\u4e14\u903c\u771f\u7684\u6548\u679c\u3002\u4f46\u662f\uff0c\u6dfb\u52a0\u7684\u6548\u679c\u8d8a\u591a\uff0c\u7a0b\u5e8f\u6240\u9700\u7684\u5904\u7406\u80fd\u529b\u548c\u65f6\u95f4\u5c31\u8d8a\u591a\u3002\u6bcf\u4e00\u6beb\u79d2\u90fd\u5f88\u5b9d\u8d35\uff0c\u56e0\u6b64\u5c3d\u53ef\u80fd\u4f18\u5316\u4f60\u7684\u9879\u76ee\u975e\u5e38\u91cd\u8981\u3002\u83b7\u5f97\u6700\u5927\u6536\u76ca\u7684\u4e00\u79cd\u7b80\u5355\u65b9\u6cd5\u662f\u5c06\u7eb9\u7406\u6620\u5c04\u5230\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u5728\u7740\u8272\u5668\u4e2d\u6309\u7a0b\u5e8f\u751f\u6210\u7eb9\u7406\u3002\u672c\u7ae0\u5411\u4f60\u4ecb\u7ecd Metal \u4e2d\u7684\u7eb9\u7406\u6620\u5c04\u548c\u91c7\u6837\u3002"),(0,a.kt)("h2",{id:"\u7eb9\u7406\u6620\u5c04"},"\u7eb9\u7406\u6620\u5c04"),(0,a.kt)("p",null,"\u7eb9\u7406\u7c7b\u4f3c\u4e8e\u9634\u5f71\u3002\u4f60\u7684\u7a0b\u5e8f\u4e00\u6b21\u626b\u63cf\u8868\u9762\u4e00\u4e2a\u50cf\u7d20\uff0c\u5e76\u786e\u5b9a\u8be5\u50cf\u7d20\u5728\u8be5\u50cf\u7d20\u5904\u7684\u5916\u89c2\u3002\u5728\u7b2c 6 \u7ae0\u201c Metal \u8d44\u6e90\u548c\u5185\u5b58\u7ba1\u7406\u201d\u4e2d\uff0c\u4f60\u4e86\u89e3\u4e86\u7f13\u51b2\u533a\u548c\u7eb9\u7406\u3002\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u4f60\u4ec5\u4f7f\u7528\u4e86\u7f13\u51b2\u533a\u3002\u8be5\u7a0b\u5e8f\u4e0d\u662f\u63a5\u6536\u989c\u8272\u4fe1\u606f\u7f13\u51b2\u533a\u5e76\u901a\u8fc7\u7b97\u6cd5\u8fd0\u884c\u5b83\uff0c\u800c\u662f\u63a5\u6536\u7eb9\u7406\u8d44\u6e90\u3002\u8d44\u6e90\u4e00\u6b21\u4e00\u4e2a\u50cf\u7d20\u5730\u5e94\u7528\u4e8e\u8868\u9762\u3002"),(0,a.kt)("p",null,"\u5047\u8bbe\u4f60\u6b63\u5728\u5899\u4e0a\u8d34\u58c1\u7eb8\u3002\u4f60\u4ece\u4e00\u4e2a\u89d2\u843d\u5f00\u59cb\u3002\u4f60\u786e\u4fdd\u58c1\u7eb8\u662f\u76f4\u7684\u5e76\u4e0e\u5176\u4e24\u4fa7\u7684\u90e8\u5206\u5bf9\u9f50\u3002\u5982\u679c\u6b64\u4efb\u52a1\u5b8c\u6210\u5f97\u5f53\uff0c\u58c1\u7eb8\u5c06\u65e0\u7f1d\u5e94\u7528\u5e76\u4ea7\u751f\u5355\u4e00\u7eb9\u7406\u7684\u9519\u89c9\u3002"),(0,a.kt)("p",null,"\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u5728\u672c\u4e66\u4e2d\uff0c\u4f60\u4e00\u76f4\u5728\u4f7f\u7528\u7b1b\u5361\u5c14\u5750\u6807\uff0c\u5176\u4e2d\u6bcf\u4e2a\u70b9\u4f4d\u4e8e\u7a7a\u95f4\u4e2d\u7684 x\u3001y \u548c z \u8f74\u4e0a\u3002\u4e3a\u4e86\u533a\u5206\u7f51\u683c\u7684\u5750\u6807\u548c\u7eb9\u7406\u7684\u5750\u6807\uff0c\u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u5750\u6807\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,"\u7eb9\u7406\u5750\u6807\u7684\u5750\u6807\u7a7a\u95f4\u662f UV \u5750\u6807\u7a7a\u95f4\u3002\u8fd9\u4e2a\u7a7a\u95f4\u7c7b\u4f3c\u4e8e XY\u3002\u7eb9\u7406\u4f5c\u4e3a\u6807\u51c6\u5316\u5750\u6807\u7a7a\u95f4\u5b58\u5728\uff0c\u5176\u4e2d\u6bcf\u4e2a\u503c\u90fd\u5728 0.0 \u548c 1.0 \u4e4b\u95f4\u3002\u4e3a\u4e86\u533a\u5206\u4e16\u754c\u7a7a\u95f4\u4e2d\u5bf9\u8c61\u7684\u8868\u9762\u548c\u7eb9\u7406\u4e0a\u7247\u6bb5\u7684\u4f4d\u7f6e\uff0c\u7eb9\u7406\u7684\u7247\u6bb5\u88ab\u79f0\u4e3a ",(0,a.kt)("em",{parentName:"p"},"texels"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u5b8c\u7f8e\u7684\u65b9\u5f62\u8868\u9762\u548c\u5b8c\u7f8e\u7684\u65b9\u5f62\u7eb9\u7406\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u5f88\u6709\u6548\u3002\u5f53\u4f60\u9700\u8981\u5c06\u7eb9\u7406\u6620\u5c04\u5230\u66f2\u9762\u65f6\uff0c\u5b83\u6548\u679c\u4e0d\u4f73\u3002\u65e0\u8bba\u4f60\u4f7f\u7528\u4ec0\u4e48 3D \u5efa\u6a21\u7a0b\u5e8f\u6765\u521b\u5efa\u8d44\u4ea7\uff0c\u90fd\u6709\u8bb8\u591a\u9009\u9879\u53ef\u7528\u4e8e\u5e94\u5bf9\u8fd9\u79cd\u610f\u5916\u60c5\u51b5\u3002\u6a21\u578b\u5bfc\u51fa\u65f6\u5e26\u6709\u5305\u542b\u6a21\u578b\u76ae\u80a4\u7684\u7eb9\u7406\u56fe\u96c6\u3002\u8fd9\u4e9b\u7247\u6bb5\u88ab\u653e\u7f6e\u5728\u5355\u4e2a\u7eb9\u7406\u6587\u4ef6\u4e2d\uff0c\u5e76\u4e14\u6307\u5411\u6bcf\u4e2a\u7eb9\u7406\u5143\u7d20\u7684\u6307\u9488\u5305\u542b\u5728\u6a21\u578b\u6587\u4ef6\u4e2d\u3002"),(0,a.kt)("p",null,"\u5728 Metal \u4e2d\u521b\u5efa\u7eb9\u7406\u5bf9\u8c61\u76f8\u5f53\u7b80\u5355\u3002\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLTexture")," \u5bf9\u8c61\u7684\u66f4\u6df1\u5165\u89e3\u91ca\uff0c\u8bf7\u53c2\u9605\u7b2c 6 \u7ae0\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"var depthTexture: MTLTexture! = nil\n")),(0,a.kt)("p",null,"\u4f60\u7684\u7eb9\u7406\u9700\u8981\u4e00\u4e2a\u7eb9\u7406\u63cf\u8ff0\u7b26\uff0c\u4ee5\u4fbf Metal \u53ef\u4ee5\u6309\u7167\u4f60\u7684\u610f\u56fe\u5904\u7406\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let depthTextureDescriptor = MTLTextureDescriptor.texture2DDescriptor(\n    pixelFormat: .depth32Float,\n    width: Int(layerSize.width),\n    height: Int(layerSize.height),\n    mipmapped: false)\n\ndepthTexture = device.makeTexture(\n    descriptor: depthTextureDescriptor)\n")),(0,a.kt)("p",null,"\u6b63\u5982\u5176\u540d\u79f0\u6240\u793a\uff0c\u8be5\u7eb9\u7406\u662f\u6df1\u5ea6\u7eb9\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLTextureDescriptor")," \u8bbe\u7f6e\u4e3a 2D \u63cf\u8ff0\u7b26\u5e76\u521d\u59cb\u5316\u3002\u5b83\u9700\u8981\u7eb9\u7406\u7684\u50cf\u7d20\u683c\u5f0f\u3001\u89c6\u56fe\u7684\u5927\u5c0f\u4ee5\u53ca\u662f\u5426\u8981\u5bf9\u5176\u8fdb\u884c mipmap\u3002\u7531\u4e8e\u7eb9\u7406\u4e0e\u7f51\u683c\u7684\u5927\u5c0f\u548c\u5f62\u72b6\u76f8\u540c\uff0c\u56e0\u6b64\u5c06 mipmap \u8bbe\u7f6e\u4e3a false\u3002\u6700\u540e\uff0c\u4f7f\u7528\u6df1\u5ea6\u7eb9\u7406\u63cf\u8ff0\u7b26\u521d\u59cb\u5316\u6df1\u5ea6\u7eb9\u7406\u3002"),(0,a.kt)("h2",{id:"\u7eb9\u7406\u8d34\u56fe"},"\u7eb9\u7406\u8d34\u56fe"),(0,a.kt)("p",null,"\u56fe\u5f62\u7684\u4e00\u65b9\u9762\u662f\u5b83\u4eec\u4f1a\u6539\u53d8\u5927\u5c0f\u3002\u5982\u679c\u4f60\u653e\u5927\u8fc7\u4f4e\u5206\u8fa8\u7387 JPEG\uff0c\u56fe\u50cf\u4f1a\u51fa\u73b0\u50cf\u7d20\u5316\u3002\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u5f53\u4f60\u653e\u5927\u7247\u6bb5\u65f6\uff0c\u5b83\u4f1a\u9010\u6e10\u5360\u636e\u5c4f\u5e55\u4e0a\u66f4\u591a\u7684\u50cf\u7d20\u3002\u5f53\u4f60\u671d\u76f8\u53cd\u7684\u65b9\u5411\u524d\u8fdb\u5e76\u4e14\u5c4f\u5e55\u4e0a\u6709\u56db\u4e2a\u6216\u4e94\u4e2a\u4ee3\u8868\u4e00\u4e2a\u50cf\u7d20\u7684\u7247\u6bb5\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f\u7ebf\u6027\u548c\u6700\u8fd1\u7684\u8bbe\u7f6e\u90fd\u4e0d\u80fd\u9002\u5e94\u8fd9\u79cd\u60c5\u51b5\u3002\u672c\u8282\u4ecb\u7ecd Metal \u5982\u4f55\u5904\u7406\u5b83\u3002"),(0,a.kt)("p",null,"\u7f29\u5c0f\u5177\u6709\u91cd\u53e0\u50cf\u7d20\u7684\u7eb9\u7406\u7684\u89e3\u51b3\u65b9\u6848\u79f0\u4e3a ","_","mipmapping_mipmap \u662f\u4e00\u7cfb\u5217\u7eb9\u7406\uff0c\u5168\u90e8\u5305\u542b\u76f8\u540c\u7684\u56fe\u50cf\uff0c\u4f46\u5206\u8fa8\u7387\u8d8a\u6765\u8d8a\u4f4e\u3002\u539f\u59cb\u7684\u5168\u5c3a\u5bf8\u7eb9\u7406\u5b58\u5728\u4e8e mipmap \u7684\u57fa\u7840\u7ea7\u522b\u3002\u9ad8\u4e8e\u8be5\u7ea7\u522b\u7684\u6bcf\u4e2a\u7ea7\u522b\u9010\u6e10\u4ee5 2 \u500d\u8fdb\u884c\u4e0b\u91c7\u6837\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"16 x 16")," \u7684\u7eb9\u7406\uff0c\u5219\u57fa\u672c\u7ea7\u522b\u4e5f\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"16 x 16"),"\u3002\u6b64\u7eb9\u7406\u7684\u5b8c\u6574 mip \u94fe\u5c06\u7531\u5927\u5c0f\u4e3a 16 \u7684\u7ea7\u522b\u7ec4\u6210 x 16\uff08\u57fa\u7840\uff09\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"8 x 8"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"4 x 4"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"2 x 2")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"1 x 1"),"\uff0c\u603b\u5171\u4e94\u4e2a\u7ea7\u522b\u3002\u7136\u540e\uff0cmipmap \u751f\u6210\u5668\u9884\u5148\u8ba1\u7b97\u5e76\u5b58\u50a8\u4e0d\u540c\u5927\u5c0f\u548c\u4f4d\u7f6e\u7684\u5404\u4e2a\u533a\u57df\u4e0a\u7eb9\u7406\u7684\u5e73\u5747\u503c\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u8fd9\u662f\u4e00\u4e2a\u5e38\u89c1\u7684\u64cd\u4f5c\uff0cMetal \u6709\u4e00\u4e2a\u5185\u7f6e\u5b9e\u73b0\u6765\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLBlitCommandEncoder")," \u4e0a\u751f\u6210 mipmap\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func generateMipmaps(for texture: MTLTexture)\n")),(0,a.kt)("p",null,"\u4f60\u65e0\u9700\u6307\u5b9a\u9700\u8981\u591a\u5c11\u7ea7 mipmap\u3002\u7ea7\u522b\u6570\u662f\u6839\u636e\u6bcf\u4e2a\u7eb9\u7406\u4e2d\u5b58\u5728\u7684\u7247\u6bb5\u6570\u6765\u8ba1\u7b97\u7684\u3002"),(0,a.kt)("h2",{id:"\u91c7\u6837"},"\u91c7\u6837"),(0,a.kt)("p",null,"\u5728 Metal \u4e2d\uff0c\u4e00\u5207\u90fd\u662f\u5173\u4e8e\u6253\u5305\u8981\u53d1\u9001\u5230 GPU \u7684\u72b6\u6001\u4fe1\u606f\u3002\u91c7\u6837\u4e5f\u4e0d\u4f8b\u5916\u3002\u91c7\u6837\u5668\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5b83\u5c01\u88c5\u4e86\u4e0e\u8bfb\u53d6\u7eb9\u7406\u76f8\u5173\u7684\u5404\u79cd\u6e32\u67d3\u72b6\u6001\uff1a\u5750\u6807\u7cfb\u3001\u5bfb\u5740\u6a21\u5f0f\u548c\u8fc7\u6ee4\u3002\u9519\u8bef\u5730\u8bbe\u7f6e\u8fd9\u4e9b\u72b6\u6001\u53ef\u80fd\u4f1a\u5bfc\u81f4\u7eb9\u7406\u91c7\u6837\u4e0d\u826f\u548c\u952f\u9f7f\u3002"),(0,a.kt)("p",null,"\u5728\u7b2c 5 \u7ae0\u201c\u7740\u8272\u5668\u7b80\u4ecb\u201d\u4e2d\uff0c\u4f60\u4ece\u5e94\u7528\u4e8e\u6bcf\u4e2a\u50cf\u7d20\u7684\u7eaf\u8272\u5f00\u59cb\u3002\u8be5\u989c\u8272\u7531\u7740\u8272\u5668\u5904\u7406\u4ee5\u8003\u8651\u7167\u660e\u4f4d\u7f6e\u3002\u4f7f\u7528\u7eb9\u7406\u662f\u7c7b\u4f3c\u7684\u3002\u4f60\u4e0d\u662f\u5c06\u7eaf\u8272\u4f20\u9012\u7ed9\u7740\u8272\u5668\uff0c\u800c\u662f\u5728\u7eb9\u7406\u4e2d\u7684\u8be5\u4f4d\u7f6e\u91c7\u6837\u989c\u8272\u3002"),(0,a.kt)("p",null,"\u62bd\u6837\u662f\u4e00\u4e2a\u4ee4\u4eba\u7740\u8ff7\u4e14\u6570\u5b66\u4e0a\u590d\u6742\u7684\u8fc7\u7a0b\uff0c\u6709\u8db3\u591f\u7684\u6750\u6599\u6765\u8bc1\u660e\u5b83\u81ea\u5df1\u7684\u4e66\u7684\u5408\u7406\u6027\u3002\u7b2c 16 \u7ae0\u201c Metal \u56fe\u50cf\u5904\u7406\u201d\u8fdb\u4e00\u6b65\u89e3\u91ca\u4e86\u91c7\u6837\u3002\u6b64\u65f6\uff0c\u7406\u89e3\u56f4\u7ed5\u5b83\u7684\u6570\u5b66\u7684\u6bcf\u4e00\u4e2a\u7ec6\u5fae\u5dee\u522b\u5bf9\u4f60\u6765\u8bf4\u5e76\u4e0d\u91cd\u8981\uff0c\u56e0\u6b64\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u77ed\u7684\u6982\u8ff0\u3002"),(0,a.kt)("p",null,"\u4f60\u7684\u7a0b\u5e8f\u68c0\u67e5\u7eb9\u7406\u4e2d\u7684\u4f4d\u7f6e\u5e76\u63d2\u5165\u7eb9\u7406\u4e0a\u8be5\u4f4d\u7f6e\u6700\u6709\u53ef\u80fd\u51fa\u73b0\u7684\u989c\u8272\u3002\u5982\u679c\u6ca1\u6709\u83b7\u53d6\u8db3\u591f\u7684\u7eb9\u7406\u6837\u672c\uff0c\u63d2\u503c\u5668\u5c06\u65e0\u6cd5\u51c6\u786e\u8868\u793a\u7eb9\u7406\u7684\u5916\u89c2\u3002\u5f53\u91c7\u6837\u672a\u6b63\u786e\u5b8c\u6210\u5e76\u4e14\u7a0b\u5e8f\u65e0\u6cd5\u6b63\u786e\u91cd\u5efa\u7eb9\u7406\u65f6\uff0c\u4f60\u4f1a\u5f97\u5230 ",(0,a.kt)("em",{parentName:"p"},"\u952f\u9f7f")," \u2014\u2014\u4f60\u65e0\u7591\u5728\u67d0\u4e9b\u56fe\u50cf\u4e0a\u770b\u5230\u7684\u952f\u9f7f\u72b6\u8fb9\u7f18\u3002"),(0,a.kt)("h3",{id:"\u5730\u5740\u6a21\u5f0f"},"\u5730\u5740\u6a21\u5f0f"),(0,a.kt)("p",null,"\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86\u6807\u51c6\u5316\u5750\u6807\u7cfb\uff0c\u5176\u4e2d\u4f7f\u7528\u767e\u5206\u6bd4\u800c\u4e0d\u662f\u5bf9\u8c61\u6216\u7eb9\u7406\u7684\u56fa\u5b9a\u6d4b\u91cf\u5355\u4f4d\u3002\u8fd9\u662f\u5904\u7406\u7eb9\u7406\u7684\u4e00\u79cd\u5e38\u89c1\u65b9\u6cd5\uff0c\u4f46\u4e0d\u662f\u552f\u4e00\u7684\u65b9\u6cd5\u3002\u5982\u679c\u5750\u6807\u4e3a\u8d1f\u6216\u7eb9\u7406\u7684\u6d4b\u91cf\u503c\u8d85\u8fc7 1\uff0c\u5219\u9700\u8981\u4e00\u79cd\u65b9\u6cd5\u6765\u89e3\u51b3\u5b83\u3002\u4f60\u731c\u5bf9\u4e86\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c31\u662f ",(0,a.kt)("em",{parentName:"p"},"\u5730\u5740\u6a21\u5f0f"),"\u3002"),(0,a.kt)("p",null,"Metal \u6846\u67b6\u6709\u4e00\u4e2a\u540d\u4e3a MTLSamplerAddressMode \u7684\u5730\u5740\u6a21\u5f0f\u679a\u4e3e\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u503c\uff08\u89c1\u56fe 12.1\uff09\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clampToEdge"),"\uff1a\u7eb9\u7406\u5750\u6807\u88ab\u9650\u5236\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," \u4e4b\u95f4\uff08\u5305\u62ec ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0"),"\uff09\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mirrorClampToEdge"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"-1.0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," \u4e4b\u95f4\uff0c\u7eb9\u7406\u5750\u6807\u6cbf\u8f74\u955c\u50cf\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"-1.0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," \u4e4b\u5916\uff0c\u7eb9\u7406\u5750\u6807\u88ab\u9650\u5236\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u91cd\u590d"),"\uff1a\u7eb9\u7406\u5750\u6807\u73af\u7ed5\u5230\u7eb9\u7406\u7684\u53e6\u4e00\u4fa7\uff0c\u6709\u6548\u5730\u4ec5\u4fdd\u7559\u7eb9\u7406\u5750\u6807\u7684\u5c0f\u6570\u90e8\u5206\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"mirrorRepeat"),"\uff1a\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"-1.0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," \u4e4b\u95f4\uff0c\u7eb9\u7406\u5750\u6807\u6cbf\u8f74\u955c\u50cf\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"-1.0")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," \u4e4b\u5916\uff0c\u56fe\u50cf\u4f1a\u91cd\u590d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clampToZero"),"\uff1a\u8d85\u51fa\u8303\u56f4\u7684\u7eb9\u7406\u5750\u6807\u5bf9\u4e8e\u5177\u6709 Alpha \u901a\u9053\u7684\u56fe\u50cf\u8fd4\u56de\u900f\u660e\u96f6 ",(0,a.kt)("inlineCode",{parentName:"li"},"(0, 0, 0, 0)"),"\uff0c\u5bf9\u4e8e\u6ca1\u6709 Alpha \u7684\u56fe\u50cf\u8fd4\u56de\u4e0d\u900f\u660e\u96f6 ",(0,a.kt)("inlineCode",{parentName:"li"},"(0, 0, 0, 1)")," \u6e20\u9053\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"clampToBorderColor"),"\uff1a\u8d85\u51fa\u8303\u56f4\u7684\u7eb9\u7406\u5750\u6807\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"borderColor")," \u5c5e\u6027\u6307\u5b9a\u7684\u503c\u3002")),(0,a.kt)(c,{src:n(18159),num:"12.1",desc:"\u4e0d\u540c\u5730\u5740\u6a21\u5f0f\u7684\u793a\u4f8b",size:320,edge:"white",mdxType:"Figure"}),(0,a.kt)("p",null,"\u786e\u4fdd\u4f60\u51c6\u786e\u5730\u5904\u7406\u7eb9\u7406\u3002\u6b63\u5982\u4f60\u6240\u770b\u5230\u7684\uff0c\u901a\u8fc7\u66f4\u6539\u5730\u5740\u6a21\u5f0f\u53ef\u4ee5\u83b7\u5f97\u51e0\u79cd\u4e0d\u540c\u7684\u6548\u679c\uff0c\u9009\u62e9\u9519\u8bef\u7684\u4e00\u79cd\u53ef\u80fd\u4e0d\u4f1a\u7ed9\u4f60\u5e26\u6765\u4f60\u60f3\u8981\u7684\u6548\u679c\u3002"),(0,a.kt)("h3",{id:"\u8fc7\u6ee4\u6a21\u5f0f"},"\u8fc7\u6ee4\u6a21\u5f0f"),(0,a.kt)("p",null,"\u4ece\u683c\u5f0f\u5316\u56fe\u50cf\u6570\u636e\u91cd\u5efa\u56fe\u50cf\u7684\u8fc7\u7a0b\u79f0\u4e3a ",(0,a.kt)("em",{parentName:"p"},"\u8fc7\u6ee4"),"\u3002\u6709\u4e24\u79cd\u4e0d\u540c\u7684\u8fc7\u6ee4\u6a21\u5f0f\uff1a\u7ebf\u6027\u548c\u6700\u8fd1\u3002"),(0,a.kt)("p",null,"\u6700\u8fd1\u7684\u662f\u6700\u5feb\u4e14\u8ba1\u7b97\u6210\u672c\u6700\u4f4e\u7684\u3002\u6700\u8fd1\u53ea\u662f\u4f7f\u7528\u6700\u63a5\u8fd1\u50cf\u7d20\u4e2d\u5fc3\u7684\u7eb9\u7d20\u989c\u8272\u4f5c\u4e3a\u50cf\u7d20\u989c\u8272\u3002\u8fd9\u662f\u4e00\u79cd\u76f8\u5f53\u7c97\u7cd9\u7684\u65b9\u6cd5\uff0c\u4f1a\u5bfc\u81f4\u952f\u9f7f\u548c\u5757\u72b6\u4f2a\u5f71\u3002\u653e\u5927\u6548\u679c\u4e5f\u6bd4\u7f29\u5c0f\u6548\u679c\u597d\u5f97\u591a\u3002\u5728\u7f29\u5c0f\u65b9\u9762\uff0c\u5b83\u7684\u8ba1\u7b97\u91cf\u53ef\u80fd\u975e\u5e38\u5927\uff0c\u5e76\u4f1a\u4ea7\u751f\u53ef\u6015\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u7ebf\u6027\u66f4\u51c6\u786e\uff0c\u56e0\u4e3a\u5b83\u5bf9\u56db\u4e2a\u6700\u8fd1\u7684\u50cf\u7d20\u8fdb\u884c\u91c7\u6837\u5e76\u5e73\u5747\u5b83\u4eec\u7684\u503c\u3002\u56e0\u4e3a\u4f60\u8981\u91c7\u6837\u66f4\u591a\u7eb9\u7406\u50cf\u7d20\uff0c\u6240\u4ee5\u8fd9\u662f\u4e00\u4e2a\u66f4\u6602\u8d35\u7684\u64cd\u4f5c\u3002\u4e0d\u8fc7\uff0c\u5b83\u5e76\u6ca1\u6709\u8d35\u5230\u4e0d\u80fd\u7528\u4e8e\u5b9e\u65f6\u6e32\u67d3\u3002\u8fd9\u662f\u4e00\u4e2a\u901a\u5e38\u8db3\u591f\u597d\u7684\u8fc7\u6ee4\u5668\u3002"),(0,a.kt)("h3",{id:"\u5404\u5411\u5f02\u6027"},"\u5404\u5411\u5f02\u6027"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7eb9\u7406\u4e0e\u76f8\u673a\u6210\u6b63\u65b9\u5f62\uff0c\u5219\u524d\u9762\u8ba8\u8bba\u7684\u6982\u5ff5\u6548\u679c\u5f88\u597d\uff0c\u4f46\u8fd9\u79cd\u60c5\u51b5\u5f88\u5c11\u89c1\u3002\u5982\u679c\u4f60\u5c06\u7eb9\u7406\u5e94\u7528\u4e8e\u98ce\u666f\uff0c\u5219\u7eb9\u7406\u4e2d\u7eb9\u7406\u50cf\u7d20\u7684\u89c6\u89d2\u5728\u9760\u8fd1\u76f8\u673a\u65f6\u4e0e\u4f60\u8fdb\u4e00\u6b65\u79fb\u56de\u5730\u5e73\u7ebf\u65f6\u7684\u89c6\u89d2\u662f\u4e0d\u540c\u7684\u3002"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5404\u5411\u5f02\u6027\u8fc7\u6ee4")," \u6839\u636e\u7eb9\u7406\u5728\u5c4f\u5e55\u4e0a\u7684\u89d2\u5ea6\u6765\u8c03\u6574\u5bf9\u7eb9\u7406\u8fdb\u884c\u7684\u91c7\u6837\u3002\u5f53\u4f60\u8d8a\u6765\u8d8a\u63a5\u8fd1\u4e0e\u76f8\u673a\u5b8c\u5168\u5e73\u884c\u7684\u7eb9\u7406\u65f6\uff0c\u4f60\u9700\u8981\u66f4\u591a\u91c7\u6837\u4ee5\u907f\u514d\u952f\u9f7f\u548c\u6a21\u7cca\u3002\u5404\u5411\u5f02\u6027\u8fc7\u6ee4\u975e\u5e38\u667a\u80fd\uff0c\u5b83\u4f1a\u8c03\u6574\u91c7\u6837\u5206\u5e03\uff0c\u4ee5\u4fbf\u5728\u5fc5\u8981\u65f6\u8fdb\u884c\u66f4\u591a\u91c7\u6837\uff0c\u5728\u4e0d\u9700\u8981\u65f6\u51cf\u5c11\u91c7\u6837\u3002"),(0,a.kt)("h2",{id:"\u9884\u7f16\u8bd1\u91c7\u6837\u5668\u72b6\u6001"},"\u9884\u7f16\u8bd1\u91c7\u6837\u5668\u72b6\u6001"),(0,a.kt)("p",null,"\u91c7\u6837\u5668\u4e0e Metal \u4e2d\u7684\u7eb9\u7406\u5177\u6709\u76f8\u540c\u7684\u4f18\u52bf\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u9884\u7f16\u8bd1\u7684\u7eb9\u7406"),(0,a.kt)("p",null,"\u91c7\u6837\u5668\u72b6\u6001\u3002\u91c7\u6837\u5668\u548c\u8bbe\u7f6e\u5b83\u7684\u65b9\u5f0f\u4e0d\u4f1a\u5728\u6e32\u67d3\u8fc7\u7a0b\u4e2d\u53d1\u751f\u6539\u53d8\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u6b64\u72b6\u6001\u9884\u70d8\u7119\u5230\u547d\u4ee4\u7f16\u7801\u5668\u4e2d\u6765\u6d88\u9664\u4e00\u4e9b\u8ba1\u7b97\u8d39\u7528\uff0c\u5c31\u50cf\u4efb\u4f55\u5176\u5b83\u8d44\u6e90\u51fd\u6570\u4e00\u6837\u3002"),(0,a.kt)("p",null,"\u8981\u8bbe\u7f6e\u91c7\u6837\u5668\uff0c\u4f60\u9700\u8981\u5728\u7c7b\u9876\u90e8\u6709\u4e00\u4e2a\u8d44\u6e90\u5c5e\u6027\u548c\u4e00\u4e2a\u91c7\u6837\u5668\u72b6\u6001\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"var diffuseTexture: MTLTexture! = nil\nvar samplerState: MTLSamplerState! = nil\n")),(0,a.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u4f60\u4f7f\u7528\u5c06\u5305\u542b\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLTexture")," \u8d44\u6e90\u4e2d\u7684\u6f2b\u53cd\u5c04\u7eb9\u7406\u3002\u4f60\u8fd8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLSamplerState")," \u6765\u5145\u5f53\u4f60\u8981\u8bbe\u7f6e\u7684\u72b6\u6001\u7684\u5bb9\u5668\u3002\u63a5\u4e0b\u6765\u8bbe\u7f6e\u8be5\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let samplerDescriptor = MTLSamplerDescriptor()\nsamplerDescriptor.minFilter = .nearest\nsamplerDescriptor.magFilter = .linear\nsamplerState = device.makeSamplerState(descriptor: samplerDescriptor)\n")),(0,a.kt)("p",null,"\u8981\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLSampler")," \u7684\u72b6\u6001\uff0c\u4f60\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLSamplerDescriptor"),"\u3002\u8be5\u63cf\u8ff0\u7b26\u5305\u542b\u4f60\u53ef\u80fd\u5e0c\u671b\u4e3a\u6e32\u67d3\u901a\u9053\u6307\u5b9a\u7684\u6240\u6709\u53ef\u80fd\u8bbe\u7f6e\u3002\u5176\u4e2d\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7eb9\u7406\u6bcf\u4e2a\u7ef4\u5ea6\u7684\u5730\u5740\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ul"},"\u7f29\u5c0f\u3001\u653e\u5927\u548c mipmap \u6ee4\u955c\u7684\u9009\u9879"),(0,a.kt)("li",{parentName:"ul"},"\u7ec6\u8282\u7ea7\u522b\u94b3\u4f4d - \u5404\u5411\u5f02\u6027\u6ee4\u955c\u7684\u6700\u5927\u6837\u672c\u6570")),(0,a.kt)("p",null,"\u5728\u8fd9\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\u4e2d\uff0c\u4f60\u53ea\u9700\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"samplerDescriptor.minFilter")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"samplerDescriptor.magFilter"),"\u3002\u5982\u679c\u4f60\u8fd8\u8bb0\u5f97\u672c\u7ae0\u524d\u9762\u7684\u5185\u5bb9\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},".nearest")," \u7684\u5de5\u4f5c\u65b9\u5f0f\u4f1a\u6709\u6240\u4e0d\u540c\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u4f60\u662f\u7f29\u5c0f\u8fd8\u662f\u653e\u5927\u7eb9\u7406\uff0c\u56e0\u6b64\u5728\u4e00\u4e2a\u7eb9\u7406\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".nearest")," \u800c\u5728\u53e6\u4e00\u4e2a\u4e0a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".linear")," \u662f\u6709\u610f\u4e49\u7684\u3002"),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u9700\u8981\u5411\u547d\u4ee4\u7f16\u7801\u5668\u6307\u5b9a\u4f60\u5e0c\u671b\u4f7f\u7528\u54ea\u4e2a\u7247\u6bb5\u7eb9\u7406\u548c\u7247\u6bb5\u91c7\u6837\u5668\u72b6\u6001\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"commandEncoder.setFragmentTexture(diffuseTexture, at: 0)\ncommandEncoder.setFragmentSamplerState(samplerState, at: 0)\n")),(0,a.kt)("p",null,"\u73b0\u5728\u4f60\u5df2\u7ecf\u5411\u7f16\u7801\u5668\u6307\u5b9a\u4e86\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u91c7\u6837\u5668\u72b6\u6001\u548c\u7eb9\u7406\uff0c\u4f60\u9700\u8981\u544a\u8bc9\u7a0b\u5e8f\u4f60\u5e0c\u671b\u5b83\u4eec\u5bf9\u5b83\u4eec\u505a\u4ec0\u4e48\u3002\u91c7\u6837\u5668\u4e5f\u53ef\u4ee5\u5728\u7740\u8272\u5668\u51fd\u6570\u5185\u90e8\u521b\u5efa\uff0c\u800c\u65e0\u9700\u63a5\u89e6 GPU\u3002"),(0,a.kt)("h2",{id:"\u5c06\u7eb9\u7406\u548c\u91c7\u6837\u5668\u4f20\u9012\u7ed9\u56fe\u5f62\u51fd\u6570"},"\u5c06\u7eb9\u7406\u548c\u91c7\u6837\u5668\u4f20\u9012\u7ed9\u56fe\u5f62\u51fd\u6570"),(0,a.kt)("p",null,"\u8981\u5c06\u7eb9\u7406\u4f20\u9012\u7ed9\u91c7\u6837\u5668\uff0c\u4f60\u9700\u8981\u6709\u4e00\u4e2a\u7eb9\u7406\u5bf9\u8c61\u3002\u8fd9\u6bd4\u4ec5\u5728\u5e94\u7528\u7a0b\u5e8f\u5305\u4e2d\u5305\u542b\u56fe\u50cf\u7a0d\u5fae\u590d\u6742\u4e00\u4e9b\u3002\u5728\u7b2c 6 \u7ae0\u4e2d\uff0c\u4f60\u4e86\u89e3\u4e86 MTLResource \u5bf9\u8c61 MTLTexture \u662f MTLResource \u7684\u4e00\u79cd\u7c7b\u578b\u3002\u5728\u4e0b\u4e00\u8282\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u521b\u5efa MTLTexture \u5bf9\u8c61\u4ee5\u53ca\u5982\u4f55\u8bbe\u7f6e\u4e0e\u7eb9\u7406\u4ea4\u4e92\u7684\u7740\u8272\u5668\u51fd\u6570\u3002"),(0,a.kt)("h3",{id:"\u521b\u5efa\u7eb9\u7406"},"\u521b\u5efa\u7eb9\u7406"),(0,a.kt)("p",null,"\u672c\u8282\u8be6\u7ec6\u4ecb\u7ecd\u4e86\u521b\u5efa MTLTexture \u5bf9\u8c61\u6240\u9700\u7684\u4ee3\u7801\u3002\u8be5\u65b9\u6cd5\u88ab\u5206\u89e3\u4e3a\u51e0\u4e2a\u6613\u4e8e\u7ba1\u7406\u7684\u5757\uff0c\u4ee5\u4fbf\u4e8e\u89e3\u91ca\u5b83\u65f6\u4e0d\u518d\u90a3\u4e48\u4ee4\u4eba\u754f\u60e7\u3002\u8be5\u65b9\u6cd5\u7684\u7b2c\u4e00\u90e8\u5206\u58f0\u660e\u65b9\u6cd5\u7b7e\u540d\u5e76\u8bbe\u7f6e\u521b\u5efa\u7eb9\u7406\u6240\u9700\u7684\u672c\u5730\u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"func textureForImage(_ image:UIImage, device:MTLDevice) -> MTLTexture? {\n    let imageRef = image.cgImage!\n    let width = imageRef.width\n    let height = imageRef.height\n    let colorSpace = CGColorSpaceCreateDeviceRGB()\n    let rawData = calloc(height * width * 4, MemoryLayout<UInt8>.size)\n    let bytesPerPixel = 4\n    let bytesPerRow = bytesPerPixel * width\n    let bitsPerComponent = 8\n\n    // ...\n}\n")),(0,a.kt)("p",null,"\u4f60\u9700\u8981\u4f7f\u7528\u4e00\u4e9b\u6839\u636e\u4f20\u9012\u5230\u51fd\u6570\u4e2d\u7684\u56fe\u50cf\u800c\u53d8\u5316\u7684\u5c5e\u6027\uff0c\u5373\u6307\u5b9a\u56fe\u50cf\u5927\u5c0f\u7684\u5c5e\u6027\u3002\u7531\u4e8e\u56fe\u50cf\u5927\u5c0f\u53ef\u53d8\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u8ba1\u7b97\u9700\u8981\u5206\u914d\u591a\u5c11\u5185\u5b58\u6765\u5305\u542b\u56fe\u50cf\u6570\u636e\u7684\u539f\u59cb\u503c\u3002\u7136\u540e\u6307\u5b9a\u6bcf\u4e2a\u7ec4\u4ef6\u5b58\u5728\u591a\u5c11\u4f4d\u4ee5\u53ca\u6bcf\u884c\u9700\u8981\u591a\u5c11\u5b57\u8282\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f60\u9700\u8981\u5bf9 Core Graphics \u4e0a\u4e0b\u6587\u8fdb\u884c\u4e00\u4e9b\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let options = CGImageAlphaInfo.premultipliedLast.rawValue |\n              CGBitmapInfo.byteOrder32Big.rawValue\nlet context = CGContext(data: rawData,\n                        width: width,\n                        height: height,\n                        bitsPerComponent: bitsPerComponent,\n                        bytesPerRow: bytesPerRow,\n                        space: colorSpace,\n                        bitmapInfo: options)\ncontext?.draw(imageRef, in: CGRect(x: 0,\n                                   y: 0,\n                                   width: CGFloat(width),\n                                   height: CGFloat(height)))\n")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8bbe\u7f6e\u4f4d\u56fe\u548c Alpha \u9009\u9879\u3002\u5f53\u4f60\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"CGContext")," \u65f6\uff0c\u5b83\u4eec\u4ee5\u53ca\u4f60\u4e4b\u524d\u58f0\u660e\u7684\u51e0\u4e2a\u672c\u5730\u5c5e\u6027\u5c06\u7528\u4f5c\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u4e0a\u4e0b\u6587\u4ece\u4f20\u5165\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"UIImage")," \u4e2d\u7ed8\u5236\u6700\u521d\u521b\u5efa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"CGImage"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let textureDescriptor =\nMTLTextureDescriptor.texture2DDescriptor(\n    pixelFormat: .rgba8Unorm,\n    width: Int(width),\n    height: Int(height),\n    mipmapped: true)\nlet texture = device.makeTexture(descriptor: textureDescriptor)     let region = MTLRegionMake2D(0, 0, Int(width), Int(height))     texture.replace(region: region,\n                mipmapLevel: 0,\n                slice: 0,\n                withBytes: rawData!,\n                bytesPerRow: bytesPerRow,\n                bytesPerImage: bytesPerRow * height)\n                    free(rawData)\nreturn texture\n")),(0,a.kt)("p",null,"\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u7eb9\u7406\u5bf9\u8c61\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f20\u5165\u7eb9\u7406\u7684\u5bbd\u5ea6\u3001\u9ad8\u5ea6\u548c\u50cf\u7d20\u683c\u5f0f\u5e76\u6307\u5b9a\u662f\u5426\u5bf9\u8be5\u5bf9\u8c61\u8fdb\u884c mipmap \u6765\u521b\u5efa MTLTextureDescriptor\u3002\u6b64\u4fe1\u606f\u7528\u4e8e\u521b\u5efa\u7eb9\u7406\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u7eb9\u7406\u6765\u66ff\u6362\u4f60\u6307\u5b9a\u7684\u533a\u57df\u3002\u4f60\u4e0d\u9700\u8981\u5206\u914d\u4e0d\u518d\u4f7f\u7528\u7684\u5185\u5b58\uff0c\u4ee5\u4fbf\u91ca\u653e\u5185\u5b58\u5e76\u8fd4\u56de\u7eb9\u7406\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64\u65b9\u6cd5\u4ece\u56fe\u50cf\u521b\u5efa\u65b0\u7eb9\u7406\u5f88\u5bb9\u6613\u3002\u4f60\u53ea\u9700\u4f20\u5165\u8981\u4f7f\u7528\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"UIImage")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLDevice")," \u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'diffuseTexture = self.textureForImage(UIImage(named: "bluemarble")!, device: device)\n')),(0,a.kt)("h3",{id:"metal-\u8d28\u611f\u529f\u80fd"},"Metal \u8d28\u611f\u529f\u80fd"),(0,a.kt)("p",null,"\u7eb9\u7406\u6570\u636e\u4e0e\u4f20\u9012\u7ed9\u7740\u8272\u5668\u7684\u5176\u5b83\u6570\u636e\u7c7b\u4f3c\u3002\u5b83\u662f\u7531\u4e00\u7cfb\u5217\u6d6e\u70b9\u503c\u8868\u793a\u7684\u8d44\u6e90\u3002\u4e0e\u4efb\u4f55\u7740\u8272\u5668\u51fd\u6570\u4e00\u6837\uff0c\u4f60\u9700\u8981\u5728 .metal \u6587\u4ef6\u4e2d\u521b\u5efa\u4e0e\u4e3b\u7a0b\u5e8f\u4f20\u9012\u7684\u53c2\u6570\u8868\u4e2d\u7684\u503c\u76f8\u534f\u8c03\u7684\u6570\u636e\u7ed3\u6784\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct TexturedInVertex\n{\n    packed_float4 position [[attribute(0)]];\n    packed_float4 normal [[attribute(1)]];\n    packed_float2 texCoords [[attribute(2)]];\n};\n\nstruct TexturedColoredOutVertex\n{\n    float4 position [[position]];\n    float3 normal;\n    float2 texCoords;\n};\n\nstruct Uniforms\n{\n    float4x4 projectionMatrix;\n    float4x4 modelViewMatrix;\n};\n")),(0,a.kt)("p",null,"\u5728\u7b80\u5355\u7684\u91c7\u6837\u5668\u9879\u76ee\u4e2d\uff0c\u4f60\u5728\u53c2\u6570\u8868\u4e2d\u5f15\u7528\u9876\u70b9\u4f4d\u7f6e\u3001\u6cd5\u7ebf\u548c\u7eb9\u7406\u5750\u6807\u3002\u8fd9\u4e9b\u5728\u4e3b\u7a0b\u5e8f\u4e2d\u8bbe\u7f6e\u5e76\u7531\u7740\u8272\u5668\u5f15\u7528\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"vertex TexturedColoredOutVertex vertex_sampler(\n    device TexturedInVertex *vert [[buffer(0)]],\n    constant Uniforms &uniforms [[buffer(1)]],\n    uint vid [[vertex_id]]\n) {\n    float4x4 MV = uniforms.modelViewMatrix;\n    float3x3 normalMatrix(MV[0].xyz, MV[1].xyz, MV[2].xyz);\n    float4 modelNormal = vert[vid].normal;\n    TexturedColoredOutVertex outVertex;\n    outVertex.position = uniforms.projectionMatrix *\n                         uniforms.modelViewMatrix *\n                         float4(vert[vid].position);\n\n    outVertex.normal = normalMatrix * modelNormal.xyz;\n    outVertex.texCoords = vert[vid].texCoords;\n    return outVertex;\n}\n")),(0,a.kt)("p",null,"\u9876\u70b9\u7f13\u51b2\u533a\u8ba1\u7b97\u5982\u4f55\u5c06\u5bf9\u8c61\u7684\u4f4d\u7f6e\u8f6c\u6362\u4e3a\u7eb9\u7406\u5185\u7684\u76f8\u5173\u4f4d\u7f6e\u3002\u60f3\u60f3\u6e38\u620f ",(0,a.kt)("em",{parentName:"p"},"\u6218\u8230"),"\u3002\u6bcf\u4e2a\u73a9\u5bb6\u90fd\u6709\u76f8\u5e94\u7684\u4f4d\u7f6e\u7f51\u683c\u3002\u7740\u8272\u5668\u786e\u5b9a\u5bf9\u8c61\u7f51\u683c\u4e2d\u7684\u54ea\u4e2a\u6846\u4e0e\u7eb9\u7406\u7f51\u683c\u4e2d\u7684\u5f53\u524d\u4f4d\u7f6e\u76f8\u5173\u3002\u76f8\u5e94\u7684\u989c\u8272\u88ab\u4f20\u9012\u5230\u7247\u6bb5\u7740\u8272\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"fragment half4 fragment_sampler(\n    TexturedColoredOutVertex vert  [[stage_in]],\n    texture2d<float, access::sample> diffuseTexture [[texture(0)]],\n    sampler samplr [[sampler(0)]]\n) {\n    float4 diffuseColor = diffuseTexture.sample(samplr, vert.texCoords);\n    return half4(diffuseColor.r, diffuseColor.g, diffuseColor.b, 1);\n}\n")),(0,a.kt)("p",null,"\u7247\u6bb5\u7740\u8272\u5668\u4ece\u9876\u70b9\u7740\u8272\u5668\u83b7\u53d6\u5f53\u524d\u989c\u8272\u5e76\u8ba1\u7b97\u7247\u6bb5\u7684\u6f2b\u53cd\u5c04\u7167\u660e\u503c\u3002\u8fdc\u79bb\u5149\u6e90\u7684\u7269\u4f53\u7684\u7eb9\u7406\u533a\u57df\u88ab\u4fee\u6539\uff0c\u4ee5\u4ea7\u751f\u5149\u5b58\u5728\u7684\u9519\u89c9\uff0c\u5e76\u4e14\u5176\u884c\u4e3a\u4e0e\u73b0\u5b9e\u4e16\u754c\u4e2d\u7684\u4e00\u6837\u3002"),(0,a.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,a.kt)("p",null,"\u7eb9\u7406\u548c\u91c7\u6837\u662f Metal \u5de5\u5177\u7bb1\u4e2d\u6781\u5176\u91cd\u8981\u7684\u5de5\u5177\u3002\u5b83\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u4e3a\u4f60\u7684 3D \u573a\u666f\u6dfb\u52a0\u5927\u91cf\u5174\u8da3\u548c\u7ec6\u8282\uff0c\u800c\u65e0\u9700\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4ea7\u751f\u592a\u591a\u8ba1\u7b97\u5f00\u9500 Metal \u6709\u8bb8\u591a\u5185\u7f6e\u65b9\u6cd5\u6765\u5e2e\u52a9\u8c03\u6574\u7eb9\u7406\u5927\u5c0f\u548c\u91c7\u6837\uff0c\u4ee5\u907f\u514d\u4f2a\u5f71\u548c\u952f\u9f7f\u3002\u4e86\u89e3\u5728\u653e\u5927\u6216\u7f29\u5c0f\u65f6\u91cd\u65b0\u91c7\u6837\u7eb9\u7406\u7684\u6700\u4f73\u65b9\u6cd5\u53ef\u4ee5\u5e2e\u52a9\u4f60\u521b\u5efa\u5916\u89c2\u66f4\u597d\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u800c\u4e0d\u5f71\u54cd\u6027\u80fd\u3002"))}f.isMDXComponent=!0}}]);