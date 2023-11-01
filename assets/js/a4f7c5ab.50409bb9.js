"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3990],{61141:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var a=r(85893),i=r(11151);const t={},s="\u56fe\u50cf\u5757\u5c5e\u6027",c={id:"metal-shading-language-specification/imageblock-attributes/index",title:"\u56fe\u50cf\u5757\u5c5e\u6027",description:"iOS\uff1a\u4ece Metal 2 \u5f00\u59cb\u652f\u6301\u56fe\u50cf\u5757\u3002",source:"@site/docs/metal-shading-language-specification/imageblock-attributes/index.mdx",sourceDirName:"metal-shading-language-specification/imageblock-attributes",slug:"/metal-shading-language-specification/imageblock-attributes/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/imageblock-attributes/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/imageblock-attributes/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u6bcf\u7247\u6bb5\u51fd\u6570\u4e0e\u6bcf\u6837\u672c\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/per-fragment-function-versus-per-sample-function/"},next:{title:"\u56fe\u5f62\u529f\u80fd - \u7b7e\u540d\u5339\u914d",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/graphics-function-signature-matching/"}},l={},o=[{value:"\u5339\u914d\u4e3b\u56fe\u50cf\u5757\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458",id:"\u5339\u914d\u4e3b\u56fe\u50cf\u5757\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458",level:2},{value:"\u56fe\u50cf\u5757\u548c\u5149\u6805\u987a\u5e8f\u7ec4",id:"\u56fe\u50cf\u5757\u548c\u5149\u6805\u987a\u5e8f\u7ec4",level:2},{value:"\u7247\u6bb5\u51fd\u6570\u7684\u56fe\u50cf\u5757\u5e03\u5c40",id:"\u7247\u6bb5\u51fd\u6570\u7684\u56fe\u50cf\u5757\u5e03\u5c40",level:2},{value:"\u7247\u6bb5\u51fd\u6570\u7684\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40",id:"\u7247\u6bb5\u51fd\u6570\u7684\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40",level:3},{value:"\u7247\u6bb5\u51fd\u6570\u7684\u663e\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40",id:"\u7247\u6bb5\u51fd\u6570\u7684\u663e\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40",level:3},{value:"\u5185\u6838\u51fd\u6570\u4e2d\u7684\u56fe\u50cf\u5757\u5e03\u5c40",id:"\u5185\u6838\u51fd\u6570\u4e2d\u7684\u56fe\u50cf\u5757\u5e03\u5c40",level:2},{value:"\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u522b\u540d",id:"\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u522b\u540d",level:2},{value:"\u56fe\u50cf\u5757\u548c\u51fd\u6570\u5e38\u91cf",id:"\u56fe\u50cf\u5757\u548c\u51fd\u6570\u5e38\u91cf",level:2}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{OriginalPDF:r,ToBePolishedAfterTranslation:t}=n;return r||h("OriginalPDF",!0),t||h("ToBePolishedAfterTranslation",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\u56fe\u50cf\u5757\u5c5e\u6027",children:"\u56fe\u50cf\u5757\u5c5e\u6027"}),"\n",(0,a.jsx)(t,{}),"\n",(0,a.jsx)(r,{title:"5.6 Imageblock Attributes"}),"\n",(0,a.jsx)(n.p,{children:"iOS\uff1a\u4ece Metal 2 \u5f00\u59cb\u652f\u6301\u56fe\u50cf\u5757\u3002"}),"\n",(0,a.jsx)(n.p,{children:"macOS\uff1a\u4ece Metal 2.3 \u5f00\u59cb\u652f\u6301 imageblock\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u672c\u8282\u53ca\u5176\u5c0f\u8282\u63cf\u8ff0\u4e86\u56fe\u50cf\u5757\u7684\u51e0\u4e2a\u5c5e\u6027\uff0c\u5305\u62ec ",(0,a.jsx)(n.code,{children:"[[imageblock_data(type)]]"})," \u5c5e\u6027\uff0c\u8be5\u5c5e\u6027\u4e3a\u7247\u6bb5\u51fd\u6570\u6307\u5b9a\u5177\u6709\u663e\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40\u7684\u8f93\u5165\u548c\u8f93\u51fa\u56fe\u50cf\u5757\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u5339\u914d\u4e3b\u56fe\u50cf\u5757\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458",children:"\u5339\u914d\u4e3b\u56fe\u50cf\u5757\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458"}),"\n",(0,a.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u5c5e\u6027\u4e3a\u7247\u6bb5\u51fd\u6570\u7684\u56fe\u50cf\u5757\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e\u6210\u5458\u6307\u5b9a\u5c5e\u6027\u540d\u79f0\u3002\u5982\u679c\u7247\u6bb5\u51fd\u6570\u4e2d\u6307\u5b9a\u7684\u56fe\u50cf\u5757\u7ed3\u6784\u662f\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u7684\u5b50\u96c6\uff0c\u5219\u4ee5\u4e0b\u89c4\u5219\u5c06\u7247\u6bb5\u51fd\u6570\u4e2d\u4f7f\u7528\u7684\u56fe\u50cf\u5757\u7ed3\u6784\u4e2d\u58f0\u660e\u7684\u6570\u636e\u6210\u5458\u4e0e\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u4e2d\u58f0\u660e\u7684\u76f8\u5e94\u6570\u636e\u6210\u5458\u8fdb\u884c\u5339\u914d\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u7ed9\u51fa\u7684\u6bcf\u4e2a\u5c5e\u6027\u540d\u79f0\u5bf9\u4e8e\u56fe\u50cf\u5757\u4e2d\u7684\u6bcf\u4e2a\u6570\u636e\u6210\u5458\u90fd\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u4e3a\u6570\u636e\u6210\u5458\u6307\u5b9a\u7684\u5c5e\u6027\u540d\u79f0\u9700\u8981\u4e0e\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u4e2d\u58f0\u660e\u7684\u6570\u636e\u6210\u5458\u5339\u914d\uff0c\u5e76\u4e14\u5b83\u4eec\u5173\u8054\u7684\u6570\u636e\u7c7b\u578b\u4e5f\u9700\u8981\u5339\u914d\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:["\u5982\u679c\u672a\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u5c5e\u6027\uff0c\u5219\u7247\u6bb5\u51fd\u6570\u7684\u56fe\u50cf\u5757\u6570\u636e\u7c7b\u578b\u4e2d\u58f0\u660e\u7684\u6570\u636e\u6210\u5458\u540d\u79f0\u548c\u7c7b\u578b\u4e0e\u4e3b\u56fe\u50cf\u5757\u7ed3\u6784\u9700\u8981\u5339\u914d\u3002\u6b64\u5916\uff0c\u6570\u636e\u6210\u5458\u4e0d\u80fd\u4f4d\u4e8e\u89c6\u56fe\u56fe\u50cf\u5757\u7ed3\u6784\u5185\u6216\u4e3b\u56fe\u50cf\u5757\u7ed3\u6784\u5185\u7684\u5d4c\u5957\u7ed3\u6784\u5185\u3002"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u4e3b\u56fe\u50cf\u5757\u7ed3\u6784\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7ed3\u6784\u4e2d\u7684\u6570\u636e\u6210\u5458\u58f0\u660e\u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u5c5e\u6027\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"// The explicit layout imageblock data master structure.\nstruct IM {\n    rgba8unorm<half4> a [[user(my_a), raster_order_group(0)]];\n    rgb9e5<float4> b    [[user(my_b), raster_order_group(0)]];\n    int c               [[user(my_c), raster_order_group(0)]];\n    float d             [[user(my_d), raster_order_group(0)]];\n};\n\n// The explicit layout imageblock data view structure for input.\nstruct IVIn {\n    rgb9e5<float4> x [[user(my_b)]];    // Maps to IM::b\n    float y          [[user(my_d)]];    // Maps to IM::d\n};\n\n// The explicit layout imageblock data view structure for output.\nstruct IVOut {\n    int z [[ user(my_c) ]];   // Maps to IM::c\n};\n\n// The fragment return structure.\nstruct FragOut {\n    // IVOut is a view of the master IM.\n    IVOut i [[ imageblock_data(IM) ]];\n};\n\n// IVIn is a view of the master IM.\n[[fragment]] FragOut my_fragment(IVIn i [[imageblock_data(IM)]], ...) {\n    FragOut fragOut;\n    ... = i.x;\n    ... = i.y;\n    fragOut.i.z = ...;\n    return fragOut;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u4e86\u4e0d\u5e26 ",(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u5c5e\u6027\u7684\u4e3b\u56fe\u50cf\u5757\u7ed3\u6784\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7ed3\u6784\u4e2d\u7684\u6570\u636e\u6210\u5458\u58f0\u660e\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct IM {\n    rgba8unorm<half4> a [[raster_order_group(0)]];\n    rgb9e5<float4> b    [[raster_order_group(0)]];\n    int c               [[raster_order_group(0)]];\n    float d             [[raster_order_group(0)]];\n};\n\nstruct IVIn {\n    rgb9e5<float4> b; // Maps to IM::b\n    float d;          // Maps to IM::d\n};\n\nstruct IVOut {\n    int c; // Maps to IM::c\n};\n\nstruct FragOut {\n    IVOut i [[imageblock_data(IM)]];\n};\n\nfragment FragOut my_fragment(IVIn i [[imageblock_data(IM)]], ...) {\n    FragOut fragOut;\n    ... = i.b;\n    ... = i.d;\n    fragOut.i.c = ...;\n    return fragOut;\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728\u4e3b\u56fe\u50cf\u5757\u548c\u89c6\u56fe\u56fe\u50cf\u5757\u7ed3\u6784\u4e2d\u58f0\u660e\u5d4c\u5957\u7ed3\u6784\u3002\u4ee5\u4e0b\u793a\u4f8b\u6f14\u793a\u5982\u4f55\u5728\u56fe\u50cf\u5757\u4e2d\u4f7f\u7528\u5d4c\u5957\u7ed3\u6784\u4ee5\u53ca\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"[[user(name)]]"})," \u5c5e\u6027\u58f0\u660e\u7684\u6570\u636e\u6210\u5458\uff1a"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct A {\n    rgba8unorm<half4> a [[user(A_a)]];\n    rgb9e5<float4> b    [[user(A_b)]];\n};\n\nstruct B {\n    int a   [[user(B_a), raster_order_group(1)]];\n    float b [[user(B_b), raster_order_group(2)]];\n};\n\nstruct IM {\n    A a [[user(A), raster_order_group(0)]];\n    B b [[user(B)]];\n};\n\nstruct IVIn {\n    A x [[user(A)]]; // Maps to IM::a\n};\n\nstruct IVOut {\n    B y              [[user(B)]];   // Maps to IM::b\n    rgb9e5<float4> z [[user(A_b)]]; // Maps to IM::A::b\n};\n\nstruct FragOut {\n    IVOut i [[imageblock_data(IM)]];\n};\n\nfragment FragOut my_fragment(IVIn i [[imageblock_data(IM)]], ...) {\n    FragOut fragOut;\n    ... = i.x;\n    fragOut.i.y.a = ...;\n    fragOut.i.y.b = ...;\n    fragOut.i.z = ...;\n    return fragOut;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u89c6\u56fe\u7ed3\u6784\u7684\u6bcf\u4e2a\u5b57\u6bb5\u5fc5\u987b\u6070\u597d\u5bf9\u5e94\u4e8e\u4e00\u4e2a\u4e3b\u7ed3\u6784\u5b57\u6bb5\u3002\u4e3b\u7ed3\u6784\u5b57\u6bb5\u53ef\u4ee5\u5f15\u7528\u9876\u7ea7\u7ed3\u6784\u5b57\u6bb5\u4ee5\u53ca\u5d4c\u5957\u7ed3\u6784\u4e2d\u7684\u5b57\u6bb5\u3002\u4e24\u4e2a\u6216\u591a\u4e2a\u89c6\u56fe\u7ed3\u6784\u5b57\u6bb5\u4e3a\u540c\u4e00\u4e3b\u7ed3\u6784\u5b57\u6bb5\u522b\u540d\u662f\u975e\u6cd5\u7684\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u975e\u6cd5\u4f7f\u7528\u793a\u4f8b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct M  {\n    struct A {\n        int a [[user(x)]];\n    }\n    b [[user(y), raster_order_group(0)]];\n};\n\nstruct V {\n    int a [[user(x)]];\n    M::A b [[user(y)]]; // Illegal: b aliases with a\n};\n\nfragment void f(V i [[imageblock_data(M)]]) {\n  // ...\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u663e\u5f0f\u56fe\u50cf\u5757\u7c7b\u578b\u4e0d\u80fd\u5177\u6709\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"[[color(n)]]"})," \u5c5e\u6027\u58f0\u660e\u7684\u6570\u636e\u6210\u5458\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"\u56fe\u50cf\u5757\u548c\u5149\u6805\u987a\u5e8f\u7ec4",children:"\u56fe\u50cf\u5757\u548c\u5149\u6805\u987a\u5e8f\u7ec4"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u5185\u6838\u51fd\u6570\u4e2d\uff0c\u5ffd\u7565\u5728\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458\u4e0a\u6307\u5b9a\u7684 ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u7247\u6bb5\u51fd\u6570\u4e2d\uff0c\u5fc5\u987b\u4e3a\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u6570\u636e\u7ed3\u6784\u7684\u6570\u636e\u6210\u5458\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u5305\u542b\u7ed3\u6784\u4f53\u6570\u636e\u6210\u5458\uff0c\u5219\u53ef\u4ee5\u4e3a\u5d4c\u5957\u7ed3\u6784\u4e2d\u7684\u6240\u6709\u6570\u636e\u6210\u5458\u6216\u4ec5\u4e3a\u5d4c\u5957\u7ed3\u6784\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u3002\u5982\u679c\u4e3a\u5d4c\u5957\u7ed3\u6784\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\uff0c\u5219\u5b83\u9002\u7528\u4e8e\u5d4c\u5957\u7ed3\u6784\u7684\u6240\u6709\u6570\u636e\u6210\u5458\uff0c\u5e76\u4e14\u5d4c\u5957\u7ed3\u6784\u4e2d\u7684\u4efb\u4f55\u6570\u636e\u6210\u5458\u90fd\u4e0d\u80fd\u5177\u6709 ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u5ba3\u5e03\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u9009\u62e9\u4e3a\u56fe\u50cf\u5757\u89c6\u56fe\u7ed3\u6784\u7684\u6570\u636e\u6210\u5458\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\uff0c\u4f46 ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5fc5\u987b\u4e0e\u5728\u6570\u636e\u6210\u5458\u4e0a\u6307\u5b9a\u7684\u76f8\u540c ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5339\u914d\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u7684\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4e3a\u4e3b\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u3002\u7531\u4e8e ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"gBufferData"})," \u7ed3\u6784\u7684 ",(0,a.jsx)(n.code,{children:"S"})," \u7ed3\u6784\u6210\u5458\uff0c\u56e0\u6b64\u4f60\u4e0d\u80fd\u5728 ",(0,a.jsx)(n.code,{children:"S"})," \u7ed3\u6784\u7684\u4efb\u4f55\u6210\u5458\u4e0a\u4f7f\u7528\u6b64\u5c5e\u6027\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct S {\n    rgb9e5<half3> normal;\n    float factor;\n};\n\nstruct gBufferData {\n    half3 color               [[raster_order_group(0)]];\n    S s                       [[raster_order_group(1)]];\n    rgb11b10f<half3> lighting [[raster_order_group(2)]];\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u58f0\u660e\u4e3a\u6570\u7ec4\u7684\u6570\u636e\u6210\u5458\u5177\u6709\u4e0e\u6570\u7ec4\u7684\u6240\u6709\u6210\u5458\u5173\u8054\u7684\u5355\u4e2a\u6805\u683c\u987a\u5e8f\u7ec4\u3002\u4ee5\u4e0b\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4e3a\u4e3b\u56fe\u50cf\u5757\uff08\u7ed3\u6784\u7c7b\u578b\u6570\u7ec4\uff09\u7684\u6570\u636e\u6210\u5458\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," \u5c5e\u6027\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct S {\n    rgb9e5<half3> normal;\n    float factor;\n};\n\nstruct IM {\n    half3 color               [[raster_order_group(0)]];\n    S s                       [[raster_order_group(1)]][2];\n    rgb11b10f<half3> lighting [[raster_order_group(2)]];\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The following example shows an incorrect use of the ",(0,a.jsx)(n.code,{children:"[[raster_order_group(index)]]"})," attribute where data member s is an array of a structure of type S with members that specify raster order groups that result in a compilation error."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct S {\n    rgb9e5<half3> normal [[raster_order_group(0)]];\n    float factor         [[raster_order_group(1)]];\n};\n\nstruct IM {\n    half3 color [[raster_order_group(0)]];\n    S s[2]; // This causes a compilation error.\n    rgb11b10f<half3> lighting [[raster_order_group(2)]];\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u7247\u6bb5\u51fd\u6570\u7684\u56fe\u50cf\u5757\u5e03\u5c40",children:"\u7247\u6bb5\u51fd\u6570\u7684\u56fe\u50cf\u5757\u5e03\u5c40"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u7247\u6bb5\u51fd\u6570\u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u8bbf\u95ee\u56fe\u50cf\u5757\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u4f5c\u4e3a\u989c\u8272\u9644\u4ef6\uff0c\u7247\u6bb5\u529f\u80fd\u4e2d\u4e0d\u77e5\u9053\u56fe\u50cf\u5757\u7684\u5b58\u50a8\u5e03\u5c40\u3002",(0,a.jsx)(n.em,{children:"\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40"})," \u4f7f\u7528\u73b0\u6709\u7684\u989c\u8272\u9644\u4ef6\u5c5e\u6027\u3002\uff08\u6709\u5173\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 5.6.3.1 \u8282\u3002\uff09"]}),"\n",(0,a.jsxs)(n.li,{children:["\u4f5c\u4e3a\u58f0\u660e\u56fe\u50cf\u5757\u6570\u636e\u7684\u7ed3\u6784\uff0c\u5176\u4e2d\u7247\u6bb5\u51fd\u6570\u663e\u5f0f\u6307\u5b9a\u56fe\u50cf\u5757\u7684\u5b58\u50a8\u5e03\u5c40\u3002\uff08\u6709\u5173 ",(0,a.jsx)(n.em,{children:"explicit imageblock"})," ",(0,a.jsx)(n.em,{children:"layout"})," \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 5.6.3.2 \u8282\u3002\uff09"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u7247\u6bb5\u51fd\u6570\u7684\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40",children:"\u7247\u6bb5\u51fd\u6570\u7684\u9690\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40"}),"\n",(0,a.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728\u7247\u6bb5\u51fd\u6570\u4e2d\u8bbf\u95ee\u56fe\u50cf\u5757\u6570\u636e\uff08\u56fe\u50cf\u5757\u4e2d\u4e0e\u50cf\u7d20\u5173\u8054\u7684\u6240\u6709\u6570\u636e\u6210\u5458\uff09\u3002Metal \u521b\u5efa\u4e00\u4e2a\u4e0e\u989c\u8272\u9644\u4ef6\u884c\u4e3a\u76f8\u5339\u914d\u7684\u9690\u5f0f\u56fe\u50cf\u5757\uff08\u7528\u4e8e\u7247\u6bb5\u51fd\u6570\u7684\u8f93\u5165\u548c\u8f93\u51fa\uff09\u3002\u5728\u6b64\u6a21\u5f0f\u4e0b\uff0c\u4e0e\u989c\u8272\u9644\u4ef6\u5173\u8054\u7684\u7c7b\u578b\uff08\u5982\u7247\u6bb5\u51fd\u6570\u4e2d\u6240\u8ff0\uff09\u662f ALU \u7c7b\u578b\uff08\u5373\u7528\u4e8e\u5728\u7247\u6bb5\u51fd\u6570\u4e2d\u6267\u884c\u8ba1\u7b97\u7684\u7c7b\u578b\uff09\u3002Metal \u8fd0\u884c\u65f6\u5b9a\u4e49\u4e86\u5b9e\u9645\u7684\u50cf\u7d20\u5b58\u50a8\u683c\u5f0f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u4ee5\u989c\u8272\u9644\u4ef6\u7684\u5f62\u5f0f\u8bbf\u95ee\u56fe\u50cf\u5757\u6570\u636e\u65f6\uff0c\u4e0d\u80fd\u5728\u56fe\u50cf\u5757\u5207\u7247\u7ed3\u6784\u4e2d\u58f0\u660e 2.7 \u8282\u4e2d\u63cf\u8ff0\u7684\u50cf\u7d20\u5b58\u50a8\u7c7b\u578b\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,a.jsx)(n.code,{children:"T"})," \u7c7b\u578b\u7684\u56fe\u50cf\u5757\u6570\u636e\u9690\u5f0f\u5e03\u5c40\uff0c",(0,a.jsx)(n.code,{children:"T"})," \u662f\u4e00\u4e2a\u7ed3\u6784\uff0c\u5176\u4e2d\u6bcf\u4e2a\u6210\u5458\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\u5177\u6709\u989c\u8272\u9644\u4ef6\uff08\u8bf7\u53c2\u9605\u7b2c 5.2.3.4 \u8282\u8868 5. 5 \u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"[[color(m)]]"})," \u5c5e\u6027\uff09\u3002\u989c\u8272\u7d22\u5f15 ",(0,a.jsx)(n.code,{children:"m"})," \u5bf9\u4e8e T \u7684\u6bcf\u4e2a\u6210\u5458\uff08\u548c\u5b50\u6210\u5458\uff09\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002"]}),"\n",(0,a.jsx)(n.li,{children:"\u662f\u5177\u6709\u6ee1\u8db3\u5217\u8868\u7ea6\u675f\u7684\u6210\u5458\u7684\u7ed3\u6784\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u7247\u6bb5\u51fd\u6570\u7684\u663e\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40",children:"\u7247\u6bb5\u51fd\u6570\u7684\u663e\u5f0f\u56fe\u50cf\u5757\u5e03\u5c40"}),"\n",(0,a.jsxs)(n.p,{children:["\u5177\u6709 ",(0,a.jsx)(n.em,{children:"explicit"})," \u5e03\u5c40\u7684\u56fe\u50cf\u5757\u6570\u636e\u7684\u5e03\u5c40\u5728\u7740\u8272\u51fd\u6570\u4e2d\u58f0\u660e\uff0c\u800c\u4e0d\u662f\u50cf\u989c\u8272\u9644\u4ef6\u90a3\u6837\u901a\u8fc7\u8fd0\u884c\u65f6\u58f0\u660e\u3002\u4f60\u5c06\u663e\u5f0f\u5e03\u5c40\u7684\u56fe\u50cf\u5757\u6570\u636e\u58f0\u660e\u4e3a\u7ed3\u6784\u3002\u6bcf\u4e2a\u7247\u6bb5\u56fe\u50cf\u5757\u6570\u636e\u7684\u6bcf\u4e2a\u6570\u636e\u6210\u5458\u53ef\u4ee5\u662f\uff1a"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6807\u91cf\u6216\u5411\u91cf\u3001\u6574\u6570\u6216\u6d6e\u70b9\u6570\u636e\u7c7b\u578b\uff0c"}),"\n",(0,a.jsx)(n.li,{children:"\u7b2c 2.7 \u8282\u4e2d\u63cf\u8ff0\u7684\u50cf\u7d20\u6570\u636e\u7c7b\u578b\u4e4b\u4e00\uff0c"}),"\n",(0,a.jsx)(n.li,{children:"\u8fd9\u4e9b\u7c7b\u578b\u7684\u6570\u7ec4\uff0c"}),"\n",(0,a.jsx)(n.li,{children:"\u6216\u7528\u8fd9\u4e9b\u7c7b\u578b\u6784\u5efa\u7684\u7ed3\u6784\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"imageblock \u7ed3\u6784\u7684\u6570\u636e\u6210\u5458\u5bf9\u7ed3\u6784\u4e2d\u58f0\u660e\u7684\u6bcf\u4e2a\u6570\u636e\u6210\u5458\u7c7b\u578b\u4f7f\u7528\u9002\u5f53\u7684\u5bf9\u9f50\u89c4\u5219\u6765\u786e\u5b9a\u5b9e\u9645\u7684\u7ed3\u6784\u5e03\u5c40\u548c\u5927\u5c0f\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u7247\u6bb5\u51fd\u6570\u53ef\u4ee5\u8bfb\u53d6\u6bcf\u7247\u6bb5\u56fe\u50cf\u5757\u6570\u636e\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u6210\u5458\u5e76\u4e14\u5199\u5165\u6bcf\u7247\u6bb5\u56fe\u50cf\u5757\u6570\u636e\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u636e\u6210\u5458\u3002\u4f60\u53ef\u4ee5\u5c06\u7247\u6bb5\u51fd\u6570\u7684\u8f93\u5165\u548c\u8f93\u51fa\u56fe\u50cf\u5757\u6570\u636e\u58f0\u660e\u4e3a\u7ed3\u6784\u4f53\u3002\u8f93\u5165\u548c\u8f93\u51fa\u56fe\u50cf\u5757\u7ed3\u6784\u53ef\u4ee5\u662f\u5b8c\u5168\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\uff08\u79f0\u4e3a\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\uff09\uff0c\u6216\u8005\u662f\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u7684\u5b50\u96c6\uff08\u79f0\u4e3a\u56fe\u50cf\u5757\u89c6\u56fe\u7ed3\u6784\uff09\u3002\u5bf9\u4e8e\u540e\u8005\uff0c\u8bf7\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"[[imageblock_data(type)]]"})," \u5c5e\u6027\uff0c\u5177\u6709\u5728\u7247\u6bb5\u51fd\u6570\u4e0a\u6307\u5b9a\u7684\u8f93\u5165\u548c\u8f93\u51fa\u56fe\u50cf\u5757\u6570\u636e\u7ed3\u6784\uff0c\u5176\u4e2d ",(0,a.jsx)(n.code,{children:"type"})," \u6307\u5b9a\u5b8c\u5168\u663e\u5f0f\u7684\u56fe\u50cf\u5757\u6570\u636e\u7ed3\u6784\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u5728\u4e0d\u5e26\u7c7b\u578b\u7684\u8f93\u5165\u53c2\u6570\u6216\u8f93\u51fa\u7ed3\u6784\u5143\u7d20\u4e0a\u6307\u5b9a ",(0,a.jsx)(n.code,{children:"[[imageblock_data]]"})," \u5c5e\u6027\uff0c\u5219\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7247\u6bb5\u51fd\u6570\u5728\u8f93\u5165\u6216\u8f93\u51fa\u4e0a\u4f7f\u7528\u4e3b\u663e\u5f0f\u56fe\u50cf\u5757\u6570\u636e\u7ed3\u6784\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct I {\n    float a [[raster_order_group(0)]];\n};\n\nstruct FragOut {\n    float c [[color(0)]];\n    I i [[imageblock_data]];\n};\n\nfragment FragOut my_fragment(I i [[imageblock_data]]) {\n    FragOut fragOut;\n    ...\n    return fragOut;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7247\u6bb5\u51fd\u6570\u53ef\u4ee5\u5c06\u9690\u5f0f\u56fe\u50cf\u5757\u548c\u663e\u5f0f\u56fe\u50cf\u5757\u4f5c\u4e3a\u5355\u72ec\u7684\u8f93\u5165\u53c2\u6570\u6216\u8fd4\u56de\u7ed3\u6784\u4e2d\u7684\u5b57\u6bb5\u8fdb\u884c\u8bbf\u95ee\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct I {\n    float a [[raster_order_group(0)]];\n};\n\nstruct FragOut {\n    float c [[color(0)]];\n    I i [[imageblock_data]];\n};\n\n[[fragment]] FragOut my_fragment(I i [[imageblock_data]], float c [[color(0)]]) {\n  FragOut fragOut;\n  ...\n  return fragOut;\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u663e\u5f0f\u56fe\u50cf\u5757\u5b58\u50a8\u4e0e\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u5b58\u50a8\u662f\u5206\u5f00\u7684\u3002\u8981\u5728\u663e\u5f0f\u56fe\u50cf\u5757\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u4e4b\u95f4\u5171\u4eab\u5b58\u50a8\uff0c\u8bf7\u53c2\u9605\u7b2c 5.6.5 \u8282\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u5185\u6838\u51fd\u6570\u4e2d\u7684\u56fe\u50cf\u5757\u5e03\u5c40",children:"\u5185\u6838\u51fd\u6570\u4e2d\u7684\u56fe\u50cf\u5757\u5e03\u5c40"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"imageblock<T>"})," \u7c7b\u578b\uff08\u5728\u5934\u6587\u4ef6 ",(0,a.jsx)(n.code,{children:"<metal_imageblocks>"})," \u4e2d\u5b9a\u4e49\uff09\u53ea\u80fd\u7528\u4e8e\u5728\u5185\u6838\u51fd\u6570\u6216\u7531\u5185\u6838\u51fd\u6570\u8c03\u7528\u7684\u7528\u6237\u51fd\u6570\u4e2d\u58f0\u660e\u7684\u53c2\u6570\u3002\u53ea\u6709\u5185\u6838\u51fd\u6570\u53ef\u4ee5\u5c06\u53c2\u6570\u58f0\u660e\u4e3a ",(0,a.jsx)(n.code,{children:"imageblock<T>"})," \u7c7b\u578b\u3002\u56fe\u50cf\u5757\u4e2d\u7684\u6570\u636e\u4ec5\u5bf9\u7ebf\u7a0b\u7ec4\u4e2d\u7684\u7ebf\u7a0b\u53ef\u89c1\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5185\u6838\u51fd\u6570\u7684\u6b64\u56fe\u50cf\u5757\u53c2\u6570\u88ab\u58f0\u660e\u4e3a\u4ee5\u4e0b\u6a21\u677f\u5316\u7c7b\u578b\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"class imageblock_layout_explicit;\nclass imageblock_layout_implicit;\ntemplate<typename T, typename L>\nstruct imageblock;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5177\u6709\u4ee5\u4e0b\u9650\u5236\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"L"})," \u662f ",(0,a.jsx)(n.code,{children:"imageblock_layout_explicit"})," \u6216 ",(0,a.jsx)(n.code,{children:"imageblock_layout_implicit"}),"\u3002"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"T"})," \u662f\u4e00\u4e2a\u7ed3\u6784\uff1b",(0,a.jsx)(n.code,{children:"T"})," \u7684\u6210\u5458\u53ef\u4ee5\u662f\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\uff1a","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6807\u91cf"}),"\n",(0,a.jsx)(n.li,{children:"\u5411\u91cf\u548c\u6253\u5305\u5411\u91cf"}),"\n",(0,a.jsx)(n.li,{children:"\u50cf\u7d20\u6570\u636e\u7c7b\u578b"}),"\n",(0,a.jsx)(n.li,{children:"\u4e00\u4e2a\u6570\u7ec4\u4ee5\u53ca\u5143\u7d20\u662f\u5728\u8fd9\u4e2a\u5217\u8868\u4e0a\u7c7b\u578b\u4e2d\u7684\u4e00\u4e2a"}),"\n",(0,a.jsx)(n.li,{children:"\u4e00\u4e2a\u7ed3\u6784\u4e0e\u6210\u5458\u662f\u5176\u4e2d\u4e00\u4e2a\u7c7b\u578b\u5728\u8fd9\u4e2a\u5217\u8868\u4e0a"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5177\u6709\u9690\u5f0f\u5e03\u5c40\uff08",(0,a.jsx)(n.code,{children:"imageblock_layout_implicit"}),"\uff09\u7684\u56fe\u50cf\u5757\uff0c\u7ed3\u6784\u7684\u6bcf\u4e2a\u6210\u5458\u90fd\u53ef\u4ee5\u6709\u4e00\u4e2a\u989c\u8272\u9644\u4ef6\uff08\u53c2\u89c1\u7b2c 5.2.3.4 \u8282\u8868 5.5 \u4e2d\u7684 ",(0,a.jsx)(n.code,{children:"[[color(m)]]"})," \u5c5e\u6027\uff09\u3002\u5bf9\u4e8e ",(0,a.jsx)(n.code,{children:"T"})," \u7684\u6bcf\u4e2a\u6210\u5458\uff08\u548c\u5b50\u6210\u5458\uff09\uff0c\u989c\u8272\u7d22\u5f15 ",(0,a.jsx)(n.code,{children:"m"})," \u9700\u8981\u662f\u552f\u4e00\u7684\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u6307\u5b9a\u56fe\u50cf\u5757\u5e03\u5c40\uff0c\u7f16\u8bd1\u5668\u5c06\u6839\u636e ",(0,a.jsx)(n.code,{children:"T"})," \u63a8\u5bfc\u5e03\u5c40\u3002\u5982\u679c ",(0,a.jsx)(n.code,{children:"T"})," \u4e0e\u9690\u5f0f\u6216\u663e\u5f0f\u56fe\u50cf\u5757\u4e0d\u517c\u5bb9\uff0c\u5219\u4f1a\u53d1\u751f\u7f16\u8bd1\u5668\u9519\u8bef\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u5185\u6838\u51fd\u6570\u7684\u53c2\u6570\u3002\u8fd9\u4e5f\u4f7f\u5f97\u5728\u7247\u6bb5\u548c\u5185\u6838\u51fd\u6570\u4e4b\u95f4\u5171\u4eab\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u7ed3\u6784\u53d8\u5f97\u5bb9\u6613\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u663e\u5f0f\u56fe\u50cf\u5757\u5b58\u50a8\u4e0e\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u5b58\u50a8\u662f\u5206\u5f00\u7684\u3002\u8981\u5728\u663e\u5f0f\u56fe\u50cf\u5757\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u4e4b\u95f4\u5171\u4eab\u5b58\u50a8\uff0c\u8bf7\u53c2\u9605\u7b2c 5.6.5 \u8282\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u522b\u540d",children:"\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u522b\u540d"}),"\n",(0,a.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u663e\u5f0f\u548c\u9690\u5f0f\u56fe\u50cf\u5757\u4e0d\u4f1a\u4ea7\u751f\u522b\u540d\u3002\u8981\u5c06\u663e\u5f0f\u56fe\u50cf\u5757\u7684\u5206\u914d\u5b8c\u5168\u6216\u90e8\u5206\u4e0e\u9690\u5f0f\u56fe\u50cf\u5757\u6df7\u53e0\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u5c5e\u6027\u6765\u6307\u5b9a\u663e\u5f0f\u56fe\u50cf\u5757\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"[[alias_implicit_imageblock]]\n[[alias_implicit_imageblock_color(n)]]\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"[[alias_implicit_imageblock]]"})," \u5c5e\u6027\u6307\u5b9a\u663e\u5f0f\u56fe\u50cf\u5757\u5206\u914d\u5b8c\u5168\u522b\u540d\u9690\u5f0f\u56fe\u50cf\u5757\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"[[alias_implicit_imageblock_color(n)]]"})," \u5c5e\u6027\u6307\u5b9a\u663e\u5f0f\u56fe\u50cf\u5757\u5206\u914d\u4ece ",(0,a.jsx)(n.code,{children:"color(n)"})," \u7ed9\u5b9a\u7684\u7279\u5b9a\u989c\u8272\u9644\u4ef6\u5f00\u59cb\u4e3a\u9690\u5f0f\u56fe\u50cf\u5757\u5206\u914d\u522b\u540d\u3002\u5982\u679c ",(0,a.jsx)(n.code,{children:"n"})," \u662f\u4ecb\u4e8e\u6700\u5c0f\u548c\u6700\u5927\u58f0\u660e\u7684\u9644\u4ef6\u4e4b\u95f4\u7684\u503c\uff08\u542b\uff09\uff0c\u4f46 ",(0,a.jsx)(n.code,{children:"n"})," \u5f15\u7528\u672a\u58f0\u660e\u7684\u9644\u4ef6\uff0c\u5219\u4f1a\u53d1\u751f\u7f16\u8bd1\u65f6\u9519\u8bef\u3002\u5982\u679c ",(0,a.jsx)(n.code,{children:"n"})," \u7684\u503c\u8d85\u8fc7\u58f0\u660e\u7684\u9644\u4ef6\u6570\u91cf\uff0c\u5219\u7f16\u8bd1\u6210\u529f\uff0c\u4f46\u8be5\u5c5e\u6027\u88ab\u5ffd\u7565\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u5185\u6838\u6216\u7247\u6bb5\u51fd\u6570\u4f7f\u7528\u663e\u5f0f\u56fe\u50cf\u5757\u53ca\u5176\u5173\u8054\u7684\u6210\u5458\u51fd\u6570\u4fee\u6539\u522b\u540d\u56fe\u50cf\u5757\u6570\u636e\u6210\u5458\uff0c\u5219\u4f7f\u7528\u663e\u5f0f\u56fe\u50cf\u5757\u8bbf\u95ee\u522b\u540d\u9690\u5f0f\u56fe\u50cf\u5757\u7684\u6570\u636e\u6210\u5458\u7684\u884c\u4e3a\u662f\u672a\u5b9a\u4e49\u7684\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cpp",children:"struct I {\n    rgba8unorm<half4> a;\n    rgb9e5<float4> b;\n    int c;\n    float d;\n};\n\nstruct FragOut {\n    float4 finalColor [[color(0)]];\n    I i [[imagelock_data, alias_implicit_imageblock_color(1)]];\n};\n\n[[fragment]] FragOut my_fragment(I i [[imageblock_data]], ...) {\n    FragOut fragOut;\n    ...\n    return fragOut;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u56fe\u50cf\u5757\u548c\u51fd\u6570\u5e38\u91cf",children:"\u56fe\u50cf\u5757\u548c\u51fd\u6570\u5e38\u91cf"}),"\n",(0,a.jsxs)(n.p,{children:["\u4e0d\u8981\u5c06 ",(0,a.jsx)(n.code,{children:"[[function_constant(name)]]"})," \u4e0e\u56fe\u50cf\u5757\u7ed3\u6784\u7684\u6570\u636e\u6210\u5458\u4e00\u8d77\u7528\u4f5c\u7247\u6bb5\u6216\u5185\u6838\u51fd\u6570\u7684\u8f93\u5165\u6216\u8fd4\u56de\u7684\u8f93\u51fa\u3002"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>s});var a=r(67294);const i={},t=a.createContext(i);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);