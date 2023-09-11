"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[2997],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(i),c=a,h=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},72645:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const r={},o="\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b",l={unversionedId:"metal-shading-language-specification/mesh-shader-types/index",id:"metal-shading-language-specification/mesh-shader-types/index",title:"\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b",description:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 3 \u8d77\u5c31\u652f\u6301\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b\u3002\u8fd9\u4e9b\u7c7b\u578b\u5728\u7f51\u683c\u7ba1\u9053\u4e2d\u7528\u4e8e\u6e32\u67d3\u51e0\u4f55\u4f53\uff0c\u5e76\u5728\u5934\u6587\u4ef6 `` \u4e2d\u5b9a\u4e49\u3002",source:"@site/docs/metal-shading-language-specification/mesh-shader-types/index.mdx",sourceDirName:"metal-shading-language-specification/mesh-shader-types",slug:"/metal-shading-language-specification/mesh-shader-types/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/mesh-shader-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/mesh-shader-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1694410412,formattedLastUpdatedAt:"2023\u5e749\u670811\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u63d2\u503c\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/interpolant-type/"},next:{title:"\u7c7b\u578b\u8f6c\u6362\u548c\u91cd\u65b0\u89e3\u91ca\u6570\u636e",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/type-conversions-and-re-interpreting-data/"}},p={},s=[{value:"\u7f51\u683c\u5c5e\u6027\u7c7b\u578b",id:"\u7f51\u683c\u5c5e\u6027\u7c7b\u578b",level:2},{value:"\u7f51\u683c\u7c7b\u578b",id:"\u7f51\u683c\u7c7b\u578b",level:2},{value:"\u8868 2.11\u3002\u7f51\u683c\u9876\u70b9\u5c5e\u6027",id:"\u8868-211\u7f51\u683c\u9876\u70b9\u5c5e\u6027",level:2}],u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=u("ToBePolishedAfterTranslation"),d=u("OrigninalPDF"),c=u("TableView"),h={toc:s},f="wrapper";function g(e){let{components:t,...i}=e;return(0,a.kt)(f,(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b"},"\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b"),(0,a.kt)(m,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(d,{title:"2.19 Mesh Shader Types",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 3 \u8d77\u5c31\u652f\u6301\u7f51\u683c\u7740\u8272\u5668\u7c7b\u578b\u3002\u8fd9\u4e9b\u7c7b\u578b\u5728\u7f51\u683c\u7ba1\u9053\u4e2d\u7528\u4e8e\u6e32\u67d3\u51e0\u4f55\u4f53\uff0c\u5e76\u5728\u5934\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"<metal_mesh>")," \u4e2d\u5b9a\u4e49\u3002"),(0,a.kt)("h2",{id:"\u7f51\u683c\u5c5e\u6027\u7c7b\u578b"},"\u7f51\u683c\u5c5e\u6027\u7c7b\u578b"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u4ece Metal 3 \u5f00\u59cb\u5c31\u652f\u6301\u7f51\u683c\u7f51\u683c PropertyType\u3002"),(0,a.kt)("p",null,"\u5bf9\u8c61\u51fd\u6570\uff08\u8bf7\u53c2\u9605\u7b2c 5.1.7 \u8282\uff09\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"mesh_grid_properties")," \u7c7b\u578b\u6765\u6307\u5b9a\u8981\u4ece\u5bf9\u8c61\u9636\u6bb5\u4e3a\u7ed9\u5b9a\u7ebf\u7a0b\u7ec4\u5206\u6d3e\u7684\u7f51\u683c\u7f51\u683c\u7684\u5927\u5c0f\u3002"),(0,a.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b\u6210\u5458\u51fd\u6570\u6765\u63a7\u5236\u5c06\u8c03\u5ea6\u7684\u7f51\u683c\u7ebf\u7a0b\u7ec4\u7684\u6570\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void set_threadgroups_per_grid(uint3)\n")),(0,a.kt)("p",null,"\u5982\u679c\u5bf9\u8c61\u7f51\u683c\u7684\u7ed9\u5b9a\u7ebf\u7a0b\u7ec4\u7684\u6210\u5458\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"set_threadgroups_per_grid")," \u4ece\u672a\u88ab\u8c03\u7528\uff0c\u5219\u4e0d\u4f1a\u4e3a\u7ed9\u5b9a\u5bf9\u8c61\u7f51\u683c\u7ebf\u7a0b\u7ec4\u8c03\u5ea6\u4efb\u4f55\u7f51\u683c\u7f51\u683c\u3002\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"set_threadgroups_per_grid")," \u7684\u8c03\u7528\u8868\u73b0\u4e3a\u6bcf\u4e2a\u7ebf\u7a0b\u6267\u884c\u7684\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"threadgroup")," \u5185\u5b58\u7684\u5199\u5165\u3002"),(0,a.kt)("h2",{id:"\u7f51\u683c\u7c7b\u578b"},"\u7f51\u683c\u7c7b\u578b"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u4ece Metal 3 \u5f00\u59cb\u5c31\u652f\u6301\u7f51\u683c\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u7f51\u683c\u51fd\u6570\uff08\u53c2\u89c1\u7b2c 5.1.8 \u8282\uff09\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"mesh<V, P, NV, NP, t>")," \u7ed3\u6784\u7c7b\u578b\u7684\u53c2\u6570\u6765\u8868\u793a\u5bfc\u51fa\u7684\u7f51\u683c\u6570\u636e\u3002\u8868 2.10 \u63cf\u8ff0\u4e86\u7f51\u683c\u6a21\u677f\u53c2\u6570\u3002"),(0,a.kt)(c,{num:"2.10",title:"Mesh Template Parameter",headers:["Parameter","Description"],datasList:[["V","V is the vertex type."],["P","P is the primitive type."],["NV","NV is the maximum number of vertices."],["NP","NP is the maximum number of primitives."],["t","t specifies the topology of the mesh. It is one of the following enum values: \n`enum topology {  point, line, triangle }`"]],mdxType:"TableView"}),(0,a.kt)("p",null,"\u6709\u6548\u7684\u9876\u70b9\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"V")," \u9075\u5faa\u4e0e 5.2.3.3 \u8282\u4e2d\u5b9a\u4e49\u7684\u9876\u70b9\u51fd\u6570\u8fd4\u56de\u7c7b\u578b\u76f8\u540c\u7684\u89c4\u5219\uff0c\u4f46\u5177\u6709\u4ee5\u4e0b\u9650\u5236\u3002\u9876\u70b9\u7c7b\u578b\u53ef\u4ee5\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"float4 \u8868\u793a\u9876\u70b9\u4f4d\u7f6e")),(0,a.kt)("p",null,"\u6216\u7528\u6237\u5b9a\u4e49\u7684\u7ed3\u6784\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5305\u542b\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"li"},"[[position]]")," \u5c5e\u6027\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u5305\u62ec\u6574\u6570\u6216\u6d6e\u70b9\u7c7b\u578b\u7684\u6807\u91cf\u6216\u5411\u91cf\u7684\u5176\u5b83\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u8868 2.11 \u4e2d\u7684\u4ee5\u4e0b\u5c5e\u6027\u3002\u6bcf\u4e2a\u5c5e\u6027\u53ef\u4ee5\u5728\u9876\u70b9\u7c7b\u578b\u4e2d\u4f7f\u7528\u4e00\u6b21\u3002")),(0,a.kt)("h2",{id:"\u8868-211\u7f51\u683c\u9876\u70b9\u5c5e\u6027"},"\u8868 2.11\u3002\u7f51\u683c\u9876\u70b9\u5c5e\u6027"),(0,a.kt)(c,{num:"2.11",title:"Mesh Vertex Attributes",headers:["Attribute","Corresponding Data Types ","Description"],datasList:[["clip_distance","float or float[n] \nn needs to be known at compile time","Distance from vertex to clipping plane"],["invariant","Not applicable; needs to be used with [[position]]","Marks the output position such that if the sequence of operations used to compute the output position in multiple vertex shaders is identical, there is a high likelihood that the resulting output position computed by these vertex shaders are the same value. Requires users to pass -fpreserve-invariance. See the description below for more information."],["point_size","float","Size of a point primitive"],["position","float4","The transformed vertex position"],["shared","Not applicable","If present, then for every amplification_id, the output shall have the same value."]],mdxType:"TableView"}),(0,a.kt)("p",null,"\u6709\u6548\u7684\u57fa\u672c\u7c7b\u578b\u9075\u5faa\u4e0e\u7247\u6bb5\u8f93\u5165\u90e8\u5206 5.2.3.4 \u76f8\u540c\u7684\u89c4\u5219\u3002\u6709\u6548\u7684\u539f\u59cb\u7c7b\u578b\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void")," indicating no per-primitive type")),(0,a.kt)("p",null,"\u6216\u7528\u6237\u5b9a\u4e49\u7684\u7ed3\u6784\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5305\u62ec\u6574\u6570\u6216\u6d6e\u70b9\u7c7b\u578b\u7684\u6807\u91cf\u6216\u5411\u91cf\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u4ec5\u652f\u6301\u8868 2.12 \u4e2d\u7684\u4ee5\u4e0b\u5c5e\u6027\u3002\u6bcf\u4e2a\u5c5e\u6027\u53ef\u4ee5\u5728\u57fa\u5143\u7c7b\u578b\u4e2d\u4f7f\u7528\u4e00\u6b21\u3002")),(0,a.kt)(c,{num:"2.12",title:"Mesh Primitive Attributes",headers:["Attribute","Corresponding Data Types","Description"],datasList:[["primitive_culled","bool","If set to true, the primitive is not rendered."],["primitive_id","uint","The per-primitive identifier used with barycentric coordinates."],["render_target_array_index","uchar, ushort, or uint","The render target array index, which refers to the face of a cubemap, data at a specified depth of a 3D texture, an array slice of a texture array, an array slice, or face of a cubemap array. For a cubemap, the render target array index is the face index, which is a value from 0 to 5. For a cubemap array the render target array index is computed as: array slice index * 6 + face index."],["viewport_array_index","uchar, ushort, or uint","The viewport (and scissor rectangle) index value of the primitive."]],mdxType:"TableView"}),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"mesh<V, P, NV, NP, t>")," \u672a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"[[primitive_culled]]")," \u6307\u5b9a\u5b57\u6bb5\uff0c\u5219\u884c\u4e3a\u662f\u6e32\u67d3\u56fe\u5143\u3002\u5982\u679c\u7247\u6bb5\u7740\u8272\u5668\u8bfb\u53d6\u8be5\u5b57\u6bb5\uff0c\u5219\u8bfb\u53d6\u7684\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u56e0\u4e3a\u8be5\u7247\u6bb5\u8c03\u7528\u5c5e\u4e8e\u975e\u5254\u9664\u57fa\u5143\u3002"),(0,a.kt)("p",null,"\u9876\u70b9\u548c\u57fa\u5143\u7c7b\u578b\u6210\u5458\u63a5\u53d7\u63d2\u503c\u548c\u91c7\u6837\u9650\u5b9a\u7b26\u3002\u8be5\u884c\u4e3a\u5728\u7b2c 5.2.3.4 \u8282\u4e2d\u6307\u5b9a\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u6700\u5927\u9650\u5ea6\u5730\u51cf\u5c11\u7f51\u683c\u7247\u6bb5\u94fe\u63a5\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684\u7528\u6237\u9519\u8bef\uff0c\u7528\u6237\u5b9a\u4e49\u7684\u9876\u70b9\u548c\u56fe\u5143\u7c7b\u578b\u7684\u5b57\u6bb5\u540d\u79f0\u5728\u9876\u70b9\u548c\u56fe\u5143\u7c7b\u578b\u4e4b\u95f4\u9700\u8981\u662f\u552f\u4e00\u7684\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"mesh<V, P, NV, NP, t>")," \u7684\u793a\u4f8b\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct VertexOut {\n    float4 position [[position]];\n};\nstruct PrimitiveOut\n{\n    float color [[flat]];\n};\n\nusing custom_mesh_t = metal::mesh<VertexOut, PrimitiveOut, 64, 64,\n                                  metal::topology::triangle>;\n")),(0,a.kt)("p",null,"\u7f51\u683c\u7c7b\u578b\u5305\u542b\u4ee5\u4e0b\u9759\u6001\u6570\u636e\u6210\u5458\u3002"),(0,a.kt)(c,{num:"2.13",title:"Mesh Static Members",headers:["Member variable","Description"],datasList:[["uint max_vertices","The maximum number of vertices in the mesh (NV)."],["uint max_primitive","The maximum number of primitives in the mesh (NP)."],["uint indices_per_primitive","The number of indices per primitive based on topology t."],["uint max_indices","The maximum number of indices (max_primitive * indices_per_primitive)."]],mdxType:"TableView"}),(0,a.kt)("p",null,"\u8c03\u7528\u4ee5\u4e0b\u6210\u5458\u51fd\u6570\u6765\u4e3a\u8303\u56f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"[0, max_vertices]")," \u7684\u7d22\u5f15 ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," \u8bbe\u7f6e\u9876\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void set_vertex(uint I, V v)\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"P")," is not void, call the following member function to set the primitive at index ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," in the range ","[0, ",(0,a.kt)("inlineCode",{parentName:"p"},"max_primitive"),"]","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void set_primitive(uint I, P p)\n")),(0,a.kt)("p",null,"Call the following member to set the primitive count where ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," is in the range ","[0, ",(0,a.kt)("inlineCode",{parentName:"p"},"max_primitive"),"]","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void set_primitive_count(uint c)\n")),(0,a.kt)("p",null,"Call the following member to set the index where ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," is in the range ","[0, ",(0,a.kt)("inlineCode",{parentName:"p"},"max_indices"),"]","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void set_index(uint I, uchar v)\n")),(0,a.kt)("p",null,"It is legal to call the following ",(0,a.kt)("inlineCode",{parentName:"p"},"set_indices")," functions to set the indices if the position in the index buffer is valid and if the position in the index buffer is a multiple of 2 (",(0,a.kt)("inlineCode",{parentName:"p"},"uchar2")," overload) or 2 (",(0,a.kt)("inlineCode",{parentName:"p"},"uchar4")," overload). The index I needs to be in the range ","[0, ",(0,a.kt)("inlineCode",{parentName:"p"},"max_indices"),"]","."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void set_indices(uint I, uchar2 v)\nvoid set_indices(uint I, uchar4 v)\n")))}g.isMDXComponent=!0}}]);