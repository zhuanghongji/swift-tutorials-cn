"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={},i="\u591a\u901a\u9053\u6e32\u67d3\u6280\u672f",o={unversionedId:"metal-programming-guide/multipass-rendering-techniques/index",id:"metal-programming-guide/multipass-rendering-techniques/index",title:"\u591a\u901a\u9053\u6e32\u67d3\u6280\u672f",description:"\u591a\u901a\u9053\u6e32\u67d3\u5f88\u5e38\u89c1\uff0c\u5c24\u5176\u662f\u5728\u65e5\u76ca\u590d\u6742\u7684\u573a\u666f\u4e2d\u3002\u8fd9\u9879\u6280\u672f\u53ef\u4ee5\u8ba9\u4f60\u521b\u5efa\u66f4\u597d\u3001\u66f4\u771f\u5b9e\u7684\u6e32\u67d3\uff0c\u800c\u4e0d\u4f1a\u964d\u4f4e GPU \u7684\u6027\u80fd\u3002",source:"@site/docs/metal-programming-guide/multipass-rendering-techniques/index.mdx",sourceDirName:"metal-programming-guide/multipass-rendering-techniques",slug:"/metal-programming-guide/multipass-rendering-techniques/",permalink:"/swift-tutorials-cn/docs/metal-programming-guide/multipass-rendering-techniques/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-programming-guide/multipass-rendering-techniques/index.mdx",tags:[],version:"current",lastUpdatedAt:1694410412,formattedLastUpdatedAt:"2023\u5e749\u670811\u65e5",frontMatter:{},sidebar:"metalprogrammingguideSidebar",previous:{title:"\u7eb9\u7406\u548c\u91c7\u6837",permalink:"/swift-tutorials-cn/docs/metal-programming-guide/texturing-and-sampling/"},next:{title:"\u91ca\u653e\u51e0\u4f55\uff1a Metal \u4e2d\u7684\u9576\u5d4c",permalink:"/swift-tutorials-cn/docs/metal-programming-guide/geometry-unleashed-tessellation-in-metal/"}},p={},s=[{value:"\u4f55\u65f6\uff08\u4ee5\u53ca\u4e3a\u4f55\uff09\u4f7f\u7528\u591a\u901a\u9053\u6e32\u67d3",id:"\u4f55\u65f6\u4ee5\u53ca\u4e3a\u4f55\u4f7f\u7528\u591a\u901a\u9053\u6e32\u67d3",level:2},{value:"Metal \u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26",id:"metal-\u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26",level:2},{value:"\u521b\u5efa\u548c\u7ba1\u7406\u6e32\u67d3\u76ee\u6807",id:"\u521b\u5efa\u548c\u7ba1\u7406\u6e32\u67d3\u76ee\u6807",level:2},{value:"\u91cd\u65b0\u5ba1\u89c6\u52a0\u8f7d-\u5b58\u50a8\u64cd\u4f5c",id:"\u91cd\u65b0\u5ba1\u89c6\u52a0\u8f7d-\u5b58\u50a8\u64cd\u4f5c",level:2},{value:"\u6982\u62ec",id:"\u6982\u62ec",level:2}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=m("ToBePolishedAfterTranslation"),d=m("Wisdom"),c={toc:s},k="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u591a\u901a\u9053\u6e32\u67d3\u6280\u672f"},"\u591a\u901a\u9053\u6e32\u67d3\u6280\u672f"),(0,a.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(d,{words:"Leeloo Dallas Multipass!",author:"The Fifth Element",mdxType:"Wisdom"}),(0,a.kt)("p",null,"\u591a\u901a\u9053\u6e32\u67d3\u5f88\u5e38\u89c1\uff0c\u5c24\u5176\u662f\u5728\u65e5\u76ca\u590d\u6742\u7684\u573a\u666f\u4e2d\u3002\u8fd9\u9879\u6280\u672f\u53ef\u4ee5\u8ba9\u4f60\u521b\u5efa\u66f4\u597d\u3001\u66f4\u771f\u5b9e\u7684\u6e32\u67d3\uff0c\u800c\u4e0d\u4f1a\u964d\u4f4e GPU \u7684\u6027\u80fd\u3002"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4ee5\u53ca\u4e3a\u4f55\u4f7f\u7528\u591a\u901a\u9053\u6e32\u67d3"},"\u4f55\u65f6\uff08\u4ee5\u53ca\u4e3a\u4f55\uff09\u4f7f\u7528\u591a\u901a\u9053\u6e32\u67d3"),(0,a.kt)("p",null,"\u5149\u7167\u662f\u4f7f\u7528\u591a\u901a\u9053\u6e32\u67d3\u7684\u6700\u91cd\u8981\u539f\u56e0\u3002\u5149\u662f\u56fe\u5f62\u7f16\u7a0b\u4e2d\u9700\u8981\u590d\u5236\u7684\u4e00\u79cd\u5fae\u5999\u800c\u590d\u6742\u7684\u73b0\u8c61\u3002\u6709\u5982\u6b64\u591a\u4e0d\u540c\u7c7b\u578b\u7684\u706f\u5149\u548c\u6750\u8d28\uff0c\u5c1d\u8bd5\u521b\u5efa\u903c\u771f\u7684\u706f\u5149\u662f\u903c\u771f\u56fe\u5f62\u7f16\u7a0b\u7684\u5723\u676f\u3002"),(0,a.kt)("p",null,"\u6e32\u67d3\u7684\u56fe\u50cf\u7531\u5c42\u7ec4\u6210\u3002\u7b2c\u4e00\u5c42\u662f\u6784\u6210\u573a\u666f\u7684\u5e95\u5c42\u7f51\u683c\u548c\u51e0\u4f55\u4f53\u3002\u4e0b\u4e00\u5c42\u662f\u5747\u5300\u7167\u4eae\u573a\u666f\u7684\u73af\u5883\u5149\u3002\u4e4b\u540e\uff0c\u4f60\u6dfb\u52a0\u5230\u573a\u666f\u4e2d\u7684\u6bcf\u4e2a\u706f\u5149\u90fd\u6709\u4e00\u4e2a\u56fe\u5c42\u3002\u8fd9\u4e9b\u706f\u5149\u6295\u5c04\u9634\u5f71\uff0c\u521b\u9020\u51fa\u66f4\u771f\u5b9e\u7684\u573a\u666f\u3002"),(0,a.kt)("p",null,"\u8bb8\u591a\u4e0d\u540c\u7684\u56e0\u7d20\u90fd\u5728\u8d77\u4f5c\u7528\uff1a\u6765\u81ea\u6bcf\u4e2a\u5149\u6e90\u7684\u5149\u7ebf\u6295\u5c04\u7684\u9634\u5f71\uff0c\u4ee5\u53ca\u5f53\u5149\u7ebf\u7167\u5c04\u5230\u4e00\u4e2a\u8868\u9762\u5e76\u53cd\u5f39\u5e76\u843d\u5728\u53e6\u4e00\u4e2a\u8868\u9762\u4e0a\u65f6\u7684\u4e8c\u6b21\u548c\u4e09\u6b21\u53cd\u5c04\u3002\u901a\u5e38\uff0c\u5b9e\u73b0\u903c\u771f\u7167\u660e\u7684\u552f\u4e00\u771f\u6b63\u65b9\u6cd5\u662f\u4e3a\u6bcf\u4e2a\u5149\u6e90\u8bbe\u7f6e\u6e32\u67d3\u901a\u9053\u3002\u4e00\u4e2a\u573a\u666f\u53ef\u4ee5\u8f7b\u677e\u5730\u62e5\u6709\u591a\u4e2a\u9488\u706f\u548c\u73af\u5883\u5149\u3002\u6bcf\u4e2a\u5149\u6e90\u90fd\u9700\u8981\u4e00\u4e2a\u6e32\u67d3\u901a\u9053\u3002"),(0,a.kt)("h2",{id:"metal-\u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26"},"Metal \u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26"),(0,a.kt)("p",null,"\u672c\u8282\u91cd\u70b9\u4ecb\u7ecd Metal \u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26\u3002\u8981\u8bbe\u7f6e\u591a\u4e2a\u6e32\u67d3\u901a\u9053\uff0c\u4f60\u9700\u8981\u5f88\u597d\u5730\u638c\u63e1\u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26\u7684\u6784\u6210\u4ee5\u53ca\u5f53\u4f60\u62e5\u6709\u591a\u4e2a\u6e32\u67d3\u901a\u9053\u65f6\u5b83\u5982\u4f55\u53d8\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassDescriptor")," \u57fa\u672c\u4e0a\u662f\u9644\u4ef6\u7684\u96c6\u5408 GPU \u7f16\u7a0b\u4ece\u6839\u672c\u4e0a\u8bb2\u662f\u5c06\u6570\u636e\u4e0e\u89e3\u91ca\u8be5\u6570\u636e\u7684\u4efb\u4f55\u8bbe\u7f6e\u4e00\u8d77\u53d1\u9001\u5230 GPU\u3002\u8fd9\u4e9b\u8bbe\u7f6e\u5c01\u88c5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassDescriptor")," \u4e2d\u3002\u4e0e\u53ea\u80fd\u62e5\u6709\u4e00\u4e2a\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLPipelineDescriptor")," \u4e0d\u540c\uff0c\u4f60\u53ef\u4ee5\u62e5\u6709\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassDescriptor"),"\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5982\u679c\u4f60\u4ec5\u9650\u4e8e\u4e00\u79cd\u5e94\u7528\u7a0b\u5e8f\uff0c\u90a3\u4e48\u5927\u591a\u6570\u5e94\u7528\u7a0b\u5e8f\u90fd\u4f1a\u53d7\u5230\u4e25\u91cd\u9650\u5236\u3002\u8fd9\u4e9b\u63cf\u8ff0\u7b26\u53ef\u7528\u4e8e\u7eb9\u7406\u3001\u9634\u5f71\u8d34\u56fe\u548c\u7167\u660e\u3002\u5b83\u4eec\u53ef\u4ee5\u662f\u5355\u4e00\u7684\uff0c\u4e5f\u53ef\u4ee5\u6536\u96c6\u5728\u4e00\u8d77\u5f62\u6210\u4e00\u4e2a\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let mainRPDesc = MTLRenderPassDescriptor()\nvar shadowRPs : Array<MTLRenderPassDescriptor> =\n                     [MTLRenderPassDescriptor]()\n")),(0,a.kt)("p",null,"\u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26\u53ef\u4ee5\u9644\u52a0\u4e09\u79cd\u7c7b\u578b\u7684\u4fe1\u606f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u989c\u8272"),(0,a.kt)("li",{parentName:"ul"},"\u6df1\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u677f")),(0,a.kt)("p",null,"\u989c\u8272\u9644\u4ef6\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassColorAttachmentDescriptor")," \u5bf9\u8c61\u7684\u6570\u7ec4\u3002\u9644\u4ef6\u63cf\u8ff0\u7b26\u5bf9\u8c61\u5145\u5f53\u6e32\u67d3\u901a\u9053\u751f\u6210\u7684\u5f69\u8272\u50cf\u7d20\u7684\u8f93\u51fa\u76ee\u7684\u5730\u3002\u50cf\u7d20\u4f7f\u7528 ",(0,a.kt)("em",{parentName:"p"},"\u6e05\u6670\u989c\u8272")," \u6307\u5b9a\u3002\u900f\u660e\u989c\u8272\u867d\u7136\u53ef\u4ee5\u900f\u660e\uff0c\u4f46\u5e76\u4e0d\u900f\u660e\u3002\u6e05\u9664\u989c\u8272\u6307\u5b9a\u6e05\u9664\u5148\u524d\u989c\u8272\u9644\u4ef6\u65f6\u8981\u4f7f\u7528\u7684\u989c\u8272\u3002"),(0,a.kt)("p",null,"\u6df1\u5ea6\u9644\u4ef6\u5bf9\u8c61\u5145\u5f53\u6e32\u67d3\u901a\u9053\u751f\u6210\u7684\u6df1\u5ea6\u50cf\u7d20\u7684\u8f93\u51fa\u76ee\u6807\u3002\u8be5\u6df1\u5ea6\u5b58\u50a8\u4e3a\u53cc\u7cbe\u5ea6\u503c\uff0c\u79f0\u4e3a ",(0,a.kt)("em",{parentName:"p"},"\u6e05\u9664\u6df1\u5ea6"),"\u3002\u4e0e\u900f\u660e\u989c\u8272\u4e00\u6837\uff0c\u8fd9\u662f\u6e05\u9664\u6df1\u5ea6\u9644\u4ef6\u65f6\u8981\u4f7f\u7528\u7684\u6df1\u5ea6\u3002\u6df1\u5ea6\u9644\u4ef6\u8fd8\u5305\u62ec\u201c\u591a\u91cd\u91c7\u6837\u6297\u952f\u9f7f (MSAA) \u6df1\u5ea6\u89e3\u6790\u201d\u529f\u80fd MSAA \u6df1\u5ea6\u5206\u8fa8\u7387\u662f\u4e00\u79cd\u8ba1\u7b97\u6210\u672c\u8f83\u4f4e\u7684\u56fe\u50cf\u91cd\u91c7\u6837\u65b9\u5f0f\uff0c\u53ef\u907f\u514d\u952f\u9f7f\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u4e00\u4e2a\u9644\u4ef6\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassStencilAttachmentDescriptor"),"\u3002\u6a21\u677f\u5c31\u50cf\u4e00\u4e2a\u8499\u7248\uff0c\u4f60\u53ef\u80fd\u5728 Photoshop \u4e2d\u4f7f\u7528\u8fc7\u3002\u5b83\u5177\u6709\u53ef\u4ee5\u5728\u5176\u4e0a\u7ed8\u5236\u6216\u6a21\u5370\u6548\u679c\u7684\u5f62\u72b6\uff0c\u5176\u4e2d\u5b58\u5728\u63a5\u6536\u6548\u679c\u7684\u56fe\u50cf\u533a\u57df\u548c\u4e0d\u63a5\u6536\u6548\u679c\u7684\u533a\u57df\u3002"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u9644\u4ef6\u7c7b\u578b\u4e2d\u7684\u6bcf\u4e00\u79cd\u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassAttachmentDescriptor")," \u7684\u5b50\u7c7b\u3002\u6b64\u7c7b\u5177\u6709\u4e00\u4e9b\u9002\u7528\u4e8e\u6240\u6709\u9644\u4ef6\u7c7b\u578b\u7684\u5c5e\u6027\u3002\u5bf9\u4e8e\u6bcf\u79cd\u7c7b\u578b\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e\u5176\u7eb9\u7406\u5c5e\u6027\u3002\u7eb9\u7406\u4e0a\u6709\u4e00\u4e9b\u53ef\u9009\u5c5e\u6027\uff0c\u4f8b\u5982\u7ea7\u522b\u3001\u5207\u7247\u548c\u6df1\u5ea6\u5e73\u9762\uff0c\u53ef\u4ee5\u4e3a 3D \u7eb9\u7406\u4e0a\u7684 mipmap \u7ea7\u522b\u3001\u5207\u7247\u548c\u6df1\u5ea6\u5e73\u9762\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u521b\u5efa\u548c\u7ba1\u7406\u6e32\u67d3\u76ee\u6807"},"\u521b\u5efa\u548c\u7ba1\u7406\u6e32\u67d3\u76ee\u6807"),(0,a.kt)("p",null,"\u8fd9\u4e9b\u9644\u4ef6\u548c\u4fe1\u606f\u901a\u5e38\u6765\u81ea MTLTextureDescriptor \u5bf9\u8c61\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u4f7f\u7528\u7eb9\u7406\u63cf\u8ff0\u7b26\u8bbe\u7f6e\u989c\u8272\u9644\u4ef6\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"do {\n    let texDesc = MTLTextureDescriptor()\n    texDesc.width = Int(frame.width)\n    texDesc.height = Int(frame.height)\n    texDesc.depth = 1\n    texDesc.textureType = MTLTextureType.type2D\n    texDesc.usage = [MTLTextureUsage.renderTarget,\n                     MTLTextureUsage.shaderRead]\n    texDesc.storageMode = .private\n    texDesc.pixelFormat = .bgra8Unorm\n    mainPassFramebuffer = device!.makeTexture(descriptor: texDesc)\n    self.mainRPDesc.colorAttachments[0].texture = mainPassFramebuffer\n}\n")),(0,a.kt)("p",null,"\u5728\u6b64\u4ee3\u7801\u7247\u6bb5\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"MTLTextureDescriptor")," \u63cf\u8ff0\u4e86\u7531\u4e3b\u6e32\u67d3\u901a\u9053\u5e27\u7f13\u51b2\u533a\u521b\u5efa\u7684\u7eb9\u7406\u3002\u7531\u4e8e\u989c\u8272\u9644\u4ef6\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassAttachmentDescriptor")," \u7684\u5b50\u7c7b\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u8bbe\u7f6e\u5176\u7eb9\u7406\u5c5e\u6027\u3002"),(0,a.kt)("p",null,"GPU \u7f16\u7a0b\u7684\u4e00\u5927\u4f18\u52bf\u662f\u80fd\u591f\u542f\u7528\u591a\u7ebf\u7a0b\u6e32\u67d3\u3002\u5982\u679c\u9009\u62e9\u591a\u7ebf\u7a0b\uff0c\u5219\u9700\u8981\u5728\u8c03\u5ea6\u961f\u5217\u4e0a\u5f02\u6b65\u8bbe\u7f6e\u6e32\u67d3\u901a\u9053\u7f16\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e3a Shadowmap \u751f\u6210\u547d\u4ee4\u7f13\u51b2\u533a\nif multithreadedRender {\n    dispatchGroup.enter()\n    dispatchQueue.async {\n        self.encodeShadowPass(shadowCommandBuffer,\n                              rp: self.shadowRPs[0],\n                              constantBuffer: constantBufferForFrame,\n                              passDataOffset: shadowOffset,\n                              objectDataOffset: objectDataOffset)\n        dispatchGroup.leave()\n    }\n} else {\n    encodeShadowPass(shadowCommandBuffer,\n                     rp: self.shadowRPs[0],\n                     constantBuffer: constantBufferForFrame,\n                     passDataOffset: shadowOffset,\n                     objectDataOffset: objectDataOffset)\n}\n")),(0,a.kt)("p",null,"\u53ea\u8981\u6709\u53ef\u80fd\uff0c\u4f60\u90fd\u5e0c\u671b\u5c06\u6e32\u67d3\u76ee\u6807\u5408\u5e76\u5728\u4e00\u8d77\u3002\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u547d\u4ee4\u7f16\u7801\u5668\u4f1a\u5f71\u54cd\u6027\u80fd\u3002\u5e76\u975e\u6bcf\u4e2a\u6e32\u67d3\u7f16\u7801\u5668\u90fd\u53ef\u4ee5\u5408\u5e76\u5230\u5355\u4e2a\u6e32\u67d3\u901a\u9053\u4e2d\u3002\u4e3a\u4e86\u5408\u5e76\u4e24\u4e2a\u6e32\u67d3\u547d\u4ee4\u7f16\u7801\u5668\uff0c\u5fc5\u987b\u6ee1\u8db3\u4e00\u4e9b\u6807\u51c6\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5668\u5728\u540c\u4e00\u5e27\u4e2d\u521b\u5efa\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5668\u662f\u4ece\u76f8\u540c\u7684\u547d\u4ee4\u7f13\u51b2\u533a\u521b\u5efa\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5668\u5171\u4eab\u76f8\u540c\u7684\u6e32\u67d3\u76ee\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5668\u4e0d\u4f1a\u4ece\u5176\u5b83\u6e32\u67d3\u7f16\u7801\u5668\u4e2d\u7684\u6e32\u67d3\u76ee\u6807\u8fdb\u884c\u91c7\u6837\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u7f16\u7801\u5668\u7684\u5b58\u50a8\u64cd\u4f5c\u662f\u5b58\u50a8\u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"dontCare"),"\uff0c\u7b2c\u4e8c\u4e2a\u7f16\u7801\u5668\u7684\u52a0\u8f7d\u64cd\u4f5c\u662f\u52a0\u8f7d\u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"dontCare"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5668\u662f\u5728\u8fde\u7eed\u7684\u5185\u5b58\u533a\u57df\u4e0a\u521b\u5efa\u7684\uff0c\u5b83\u4eec\u4e4b\u95f4\u6ca1\u6709\u5176\u5b83\u7f16\u7801\u5668\u3002")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u89c4\u5219\u53ef\u4ee5\u5e94\u7528\u4e8e\u4e24\u4e2a\u4ee5\u4e0a\u7684\u7f16\u7801\u5668\u3002\u5982\u679c\u4e00\u7ec4 10 \u4e2a\u7f16\u7801\u5668\u80fd\u591f\u4e0e\u5176\u524d\u540e\u7684\u7f16\u7801\u5668\u5408\u5e76\uff0c\u5219\u6240\u6709 10 \u4e2a\u7f16\u7801\u5668\u90fd\u53ef\u4ee5\u5408\u5e76\u5e76\u94fe\u63a5\u5728\u4e00\u8d77\u3002"),(0,a.kt)("h2",{id:"\u91cd\u65b0\u5ba1\u89c6\u52a0\u8f7d-\u5b58\u50a8\u64cd\u4f5c"},"\u91cd\u65b0\u5ba1\u89c6\u52a0\u8f7d-\u5b58\u50a8\u64cd\u4f5c"),(0,a.kt)("p",null,"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderPassAttachmentDescriptor")," \u4f60\u9700\u8981\u4e86\u89e3\u7684\u6700\u540e\u4e00\u70b9\u662f ",(0,a.kt)("em",{parentName:"p"},"load")," \u548c ",(0,a.kt)("em",{parentName:"p"},"store actions"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"MTLLoadAction")," \u662f\u6e32\u67d3\u547d\u4ee4\u7f16\u7801\u5668\u7684\u6e32\u67d3\u901a\u9053\u5f00\u59cb\u65f6\u6267\u884c\u7684\u64cd\u4f5c\u3002\u8fd9\u662f\u4e00\u4e2a\u5177\u6709\u4e09\u4e2a\u503c\u7684\u679a\u4e3e\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"load"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"dontCare"),"\u3002load \u4fdd\u7559\u7eb9\u7406\u7684\u73b0\u6709\u5185\u5bb9\u3002\u6e05\u9664\u5c06\u65b0\u503c\u5199\u5165\u9644\u4ef6\u4e2d\u7684\u6bcf\u4e2a\u50cf\u7d20 ",(0,a.kt)("inlineCode",{parentName:"p"},"dontCare")," \u5141\u8bb8\u6bcf\u4e2a\u50cf\u7d20\u5728\u6e32\u67d3\u8fc7\u7a0b\u5f00\u59cb\u65f6\u91c7\u7528\u4efb\u4f55\u503c\uff0c\u56e0\u4e3a\u4f60\u4e0d\u5173\u5fc3\u5b83\u662f\u4ec0\u4e48\u3002"),(0,a.kt)("p",null,"\u4e3a\u6e32\u67d3\u76ee\u6807\u9009\u62e9\u6b63\u786e\u7684\u52a0\u8f7d\u64cd\u4f5c\u975e\u5e38\u91cd\u8981\u3002\u5982\u679c\u4f60\u9009\u62e9\u4e0d\u5fc5\u8981\u7684\u8ba1\u7b97\u6210\u672c\u9ad8\u6602\u7684\u64cd\u4f5c\uff0c\u90a3\u4e48\u4f60\u5c31\u4f1a\u6d6a\u8d39\u539f\u672c\u53ef\u4ee5\u66f4\u597d\u5730\u7528\u5728\u5176\u5b83\u5730\u65b9\u7684\u8ba1\u7b97\u65f6\u95f4\u3002\u5982\u679c\u6240\u6709\u6e32\u67d3\u76ee\u6807\u50cf\u7d20\u5747\u5df2\u6e32\u67d3\uff0c\u8bf7\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"dontCare")," \u64cd\u4f5c\u3002\u6b64\u64cd\u4f5c\u6ca1\u6709\u4efb\u4f55\u76f8\u5173\u6210\u672c\uff0c\u5e76\u4e14\u7eb9\u7406\u6570\u636e\u59cb\u7ec8\u88ab\u89e3\u91ca\u4e3a\u672a\u5b9a\u4e49\u3002\u5982\u679c\u4e0d\u9700\u8981\u4fdd\u7559\u6e32\u67d3\u76ee\u6807\u4e4b\u524d\u7684\u5185\u5bb9\u5e76\u4e14\u4ec5\u6e32\u67d3\u5176\u90e8\u5206\u50cf\u7d20\uff0c\u8bf7\u9009\u62e9\u6e05\u9664\u64cd\u4f5c\u3002\u6700\u540e\uff0c\u5982\u679c\u9700\u8981\u4fdd\u7559\u6e32\u67d3\u76ee\u6807\u7684\u5148\u524d\u5185\u5bb9\u5e76\u4e14\u4ec5\u6e32\u67d3\u5176\u90e8\u5206\u50cf\u7d20\uff0c\u8bf7\u9009\u62e9\u52a0\u8f7d\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u786c\u5e01\u7684\u53e6\u4e00\u9762\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLStoreAction"),"\u3002\u6b64\u64cd\u4f5c\u5728\u6e32\u67d3\u547d\u4ee4\u7f16\u7801\u5668\u7684\u6e32\u67d3\u901a\u9053\u7ed3\u675f\u65f6\u6267\u884c\u3002\u8fd9\u4e2a\u679a\u4e3e\u6bd4 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLLoadAction")," \u591a\u4e86\u4e00\u4e9b\u60c5\u51b5\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"dontCare"),"\uff1a\u4f20\u9012\u5b8c\u6210\u540e\uff0c\u9644\u4ef6\u4e0d\u4f1a\u5b58\u50a8\u5e76\u4e14\u672a\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"store"),"\uff1a\u6700\u7ec8\u7ed3\u679c\u5b58\u50a8\u5728\u9644\u4ef6\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"multisampleResolve"),"\uff1a\u5f53\u4f60\u6709\u591a\u4e2a\u6837\u672c\u65f6\u4f7f\u7528\u3002\u8fd9\u4e9b\u6837\u672c\u88ab\u89e3\u6790\u4e3a\u5355\u4e2a\u503c\u5e76\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"resolveTexture")," \u5c5e\u6027\u8fdb\u884c\u5b58\u50a8\uff0c\u4f46\u9644\u4ef6\u7684\u5185\u5bb9\u672a\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"storeAndMultisampleResolve"),"\uff1a\u8fd9\u4f1a\u5c06\u6837\u672c\u89e3\u6790\u4e3a\u5355\u4e2a\u503c\u5e76\u5c06\u5176\u5b58\u50a8\u5230\u9644\u4ef6\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u672a\u77e5"),"\uff1a\u5982\u679c\u4f60\u4e8b\u5148\u4e0d\u77e5\u9053\u9644\u4ef6\u7684\u5b58\u50a8\u64cd\u4f5c\uff0c\u5219\u8fd9\u662f\u4e00\u4e2a\u4e34\u65f6\u72b6\u6001\u3002\u5728\u5b8c\u6210\u5c06\u547d\u4ee4\u7f16\u7801\u5230\u6e32\u67d3\u547d\u4ee4\u7f16\u7801\u5668\u4e4b\u524d\uff0c\u4f60\u5fc5\u987b\u6307\u5b9a\u6709\u6548\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"customSampleDepthStore"),"\uff1a\u8fd9\u662f\u4e00\u4e2a\u6e32\u67d3\u76ee\u6807\u64cd\u4f5c\uff0c\u5b83\u5c06\u6df1\u5ea6\u6570\u636e\u5b58\u50a8\u5728\u4e0e\u4f4d\u7f6e\u65e0\u5173\u7684\u793a\u4f8b\u8868\u793a\u4e2d\u3002\u8fd9\u662f\u4e00\u9879\u76f8\u5f53\u5148\u8fdb\u548c\u590d\u6742\u7684\u6280\u672f\u3002")),(0,a.kt)("p",null,"\u5982\u679c\u7eb9\u7406\u662f\u5355\u6837\u672c\u7eb9\u7406\uff0c\u5219\u4e3b\u8981\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dontCare")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," \u4e4b\u95f4\u8fdb\u884c\u9009\u62e9\u3002\u5982\u679c\u4f60\u4e0d\u9700\u8981\u4fdd\u7559\u6e32\u67d3\u76ee\u6807\u7684\u5185\u5bb9\uff0c\u90a3\u4e48\u4f60\u53ef\u4ee5\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"dontCare"),"\u3002\u5982\u679c\u4f60\u786e\u5b9e\u9700\u8981\u4fdd\u5b58\u5b83\uff0c\u90a3\u4e48\u4f60\u9009\u62e9\u5546\u5e97\u3002"),(0,a.kt)("p",null,"\u5f53\u4f60\u6709\u591a\u91cd\u91c7\u6837\u7eb9\u7406\u65f6\uff0c\u4e8b\u60c5\u4f1a\u53d8\u5f97\u66f4\u52a0\u590d\u6742\u3002\u4f60\u9700\u8981\u95ee\u81ea\u5df1\u4e09\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6211\u7684\u591a\u91cd\u6837\u672c\u5185\u5bb9\u662f\u5426\u9700\u8981\u4fdd\u7559\uff1f"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u7684\u89e3\u6790\u7eb9\u7406\u662f\u5426\u5df2\u6307\u5b9a\uff1f"),(0,a.kt)("li",{parentName:"ul"},"\u6211\u5df2\u89e3\u51b3\u7684\u5185\u5bb9\u662f\u5426\u4f1a\u4fdd\u7559\uff1f")),(0,a.kt)("p",null,"\u5982\u679c\u8fd9\u4e9b\u95ee\u9898\u7684\u7b54\u6848\u662f\u80af\u5b9a\u7684\uff0c\u8bf7\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"storeAndMultisampleResolve"),"\u3002\u5982\u679c\u9700\u8981\u4fdd\u7559\u89e3\u6790\u7684\u7eb9\u7406\u548c\u5185\u5bb9\uff0c\u4f46\u4e0d\u9700\u8981\u4fdd\u7559\u591a\u91cd\u91c7\u6837\u7684\u5185\u5bb9\uff0c\u8bf7\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"multisampleResolve"),"\u3002\u5982\u679c\u53ea\u9700\u8981\u4fdd\u7559\u591a\u91cd\u91c7\u6837\u7684\u5185\u5bb9\uff0c\u8bf7\u9009\u62e9\u5b58\u50a8\u3002\u5982\u679c\u6ca1\u6709\u4ec0\u4e48\u9700\u8981\u4fdd\u7559\uff0c\u4f60\u5c31\u4e0d\u5728\u4e4e\u3002"),(0,a.kt)("p",null,"\u5728\u5c06\u6e32\u67d3\u901a\u9053\u63cf\u8ff0\u7b26\u63d0\u4ea4\u7ed9\u547d\u4ee4\u7f16\u7801\u5668\u4e4b\u524d\uff0c\u5fc5\u987b\u6307\u5b9a\u52a0\u8f7d\u548c\u5b58\u50a8\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"do {\n    let rp = MTLRenderPassDescriptor()\n    rp.depthAttachment.clearDepth = 1.0\n    rp.depthAttachment.texture = shadowMap\n    rp.depthAttachment.loadAction = .clear\n    rp.depthAttachment.storeAction = .store\n    shadowRPs.append(rp)\n}\n")),(0,a.kt)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u52a1\u5fc5\u4e86\u89e3\u4f60\u60f3\u8981\u5982\u4f55\u9009\u62e9\u52a0\u8f7d\u548c\u5b58\u50a8\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u6982\u62ec"},"\u6982\u62ec"),(0,a.kt)("p",null,"\u66f4\u590d\u6742\u7684\u573a\u666f\u9700\u8981\u4f7f\u7528\u591a\u4e2a\u6e32\u67d3\u901a\u9053\u3002\u591a\u4e2a\u6e32\u67d3\u901a\u9053\u901a\u5e38\u7528\u4e8e\u7167\u660e\u6548\u679c\u3002\u8bf7\u52a1\u5fc5\u5c3d\u53ef\u80fd\u6574\u5408\u6e32\u67d3\u901a\u9053\u4ee5\u4f18\u5316\u4f60\u7684\u7a0b\u5e8f\u3002\u4e86\u89e3\u4f60\u7684\u8d1f\u8f7d\u548c\u5b58\u50a8\u9700\u6c42\u4e5f\u5f88\u91cd\u8981\u3002"))}f.isMDXComponent=!0}}]);