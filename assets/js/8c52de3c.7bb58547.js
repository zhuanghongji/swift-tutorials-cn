"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8565],{37761:(n,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=o(85893),e=o(11151);const i={},r="\u6253\u5305\u548c\u89e3\u5305\u51fd\u6570",l={id:"metal-shading-language-specification/pack-and-unpack-functions/index",title:"\u6253\u5305\u548c\u89e3\u5305\u51fd\u6570",description:"\u672c\u8282\u5217\u51fa\u4e86\u5934\u6587\u4ef6 `` \u4e2d\u5b9a\u4e49\u7684 Metal \u51fd\u6570\uff0c\u7528\u4e8e\u5c06\u5411\u91cf\u6d6e\u70b9\u6570\u636e\u4e0e\u538b\u7f29\u6574\u6570\u503c\u76f8\u4e92\u8f6c\u6362\u3002\u6709\u5173\u5982\u4f55\u4ece 8 \u4f4d\u300110 \u4f4d\u6216 16 \u4f4d\u6709\u7b26\u53f7\u6216\u65e0\u7b26\u53f7\u6574\u6570\u503c\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u5355\u7cbe\u5ea6\u6216\u534a\u7cbe\u5ea6\u6d6e\u70b9\u503c\uff08\u53cd\u4e4b\u4ea6\u7136\uff09\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 7.7 \u8282\u7684\u5c0f\u8282\u3002",source:"@site/docs/metal-shading-language-specification/pack-and-unpack-functions/index.mdx",sourceDirName:"metal-shading-language-specification/pack-and-unpack-functions",slug:"/metal-shading-language-specification/pack-and-unpack-functions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/pack-and-unpack-functions/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/pack-and-unpack-functions/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u56fe\u50cf\u5757\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/imageblock-functions/"},next:{title:"\u539f\u5b50\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/atomic-functions/"}},c={},s=[{value:"\u89e3\u538b\u6574\u6570\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6d6e\u70b9\u5411\u91cf",id:"\u89e3\u538b\u6574\u6570\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6d6e\u70b9\u5411\u91cf",level:2},{value:"\u5c06\u6d6e\u70b9\u5411\u91cf\u8f6c\u6362\u4e3a\u6574\u6570\uff0c\u7136\u540e\u6253\u5305\u6574\u6570",id:"\u5c06\u6d6e\u70b9\u5411\u91cf\u8f6c\u6362\u4e3a\u6574\u6570\u7136\u540e\u6253\u5305\u6574\u6570",level:2}];function u(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",...(0,e.a)(),...n.components},{OriginalPDF:o,TableView:i,ToBePolishedAfterTranslation:r}=t;return o||p("OriginalPDF",!0),i||p("TableView",!0),r||p("ToBePolishedAfterTranslation",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"\u6253\u5305\u548c\u89e3\u5305\u51fd\u6570",children:"\u6253\u5305\u548c\u89e3\u5305\u51fd\u6570"}),"\n",(0,a.jsx)(r,{}),"\n",(0,a.jsx)(o,{title:"6.14 Pack and Unpack Functions"}),"\n",(0,a.jsxs)(t.p,{children:["\u672c\u8282\u5217\u51fa\u4e86\u5934\u6587\u4ef6 ",(0,a.jsx)(t.code,{children:"<metal_pack>"})," \u4e2d\u5b9a\u4e49\u7684 Metal \u51fd\u6570\uff0c\u7528\u4e8e\u5c06\u5411\u91cf\u6d6e\u70b9\u6570\u636e\u4e0e\u538b\u7f29\u6574\u6570\u503c\u76f8\u4e92\u8f6c\u6362\u3002\u6709\u5173\u5982\u4f55\u4ece 8 \u4f4d\u300110 \u4f4d\u6216 16 \u4f4d\u6709\u7b26\u53f7\u6216\u65e0\u7b26\u53f7\u6574\u6570\u503c\u8f6c\u6362\u4e3a\u6807\u51c6\u5316\u5355\u7cbe\u5ea6\u6216\u534a\u7cbe\u5ea6\u6d6e\u70b9\u503c\uff08\u53cd\u4e4b\u4ea6\u7136\uff09\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u7b2c 7.7 \u8282\u7684\u5c0f\u8282\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u89e3\u538b\u6574\u6570\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6d6e\u70b9\u5411\u91cf",children:"\u89e3\u538b\u6574\u6570\u5e76\u5c06\u5176\u8f6c\u6362\u4e3a\u6d6e\u70b9\u5411\u91cf"}),"\n",(0,a.jsx)(t.p,{children:"\u8868 6.22 \u5217\u51fa\u4e86\u4ece\u5355\u4e2a\u65e0\u7b26\u53f7\u6574\u6570\u4e2d\u89e3\u5305\u591a\u4e2a\u503c\uff0c\u7136\u540e\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u5b58\u50a8\u5728\u5411\u91cf\u4e2d\u7684\u6d6e\u70b9\u503c\u7684\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(i,{num:"6.22",title:"Unpack functions",headers:["Built-in Unpack Functions","Description"],datasList:[["float4 unpack_unorm4x8_to_float(uint x) \nfloat4 unpack_snorm4x8_to_float(uint x) \nhalf4 unpack_unorm4x8_to_half(uint x) \nhalf4 unpack_snorm4x8_to_half(uint x)","Unpack a 32-bit unsigned integer into four 8-bit signed or unsigned integers and then convert each 8-bit signed or unsigned integer value to a normalized single- or half-precision floating-point value to generate a 4-component vector."],["float4 unpack_unorm4x8_srgb_to_float(uint x) \nhalf4 unpack_unorm4x8_srgb_to_half(uint x)","Unpack a 32-bit unsigned integer into four 8-bit signed or unsigned integers and then convert each 8-bit signed or unsigned integer value to a normalized single- or half-precision floating-point value to generate a 4-component vector. The r, g, and b color values are converted from sRGB to linear RGB."],["float2 unpack_unorm2x16_to_float(uint x) \nfloat2 unpack_snorm2x16_to_float(uint x) \nhalf2 unpack_unorm2x16_to_half(uint x) \nhalf2 unpack_snorm2x16_to_half(uint x)","Unpack a 32-bit unsigned integer into two 16-bit signed or unsigned integers and then convert each 16-bit signed or unsigned integer value to a normalized single- or half-precision floating-point value to generate a 2-component vector."],["float4 unpack_unorm10a2_to_float(uint x) \nfloat3 unpack_unorm565_to_float(ushort x) \nhalf4 unpack_unorm10a2_to_half(uint x) \nhalf3 unpack_unorm565_to_half(ushort x)","Convert a 10a2 (1010102) or 565 color value to the corresponding normalized single- or half-precision floating-point vector."]]}),"\n",(0,a.jsxs)(t.p,{children:["\u5f53\u4ece 16 \u4f4d\u65e0\u7b26\u53f7\u6807\u51c6\u5316\u6216\u6709\u7b26\u53f7\u6807\u51c6\u5316\u503c\u8f6c\u6362\u4e3a\u534a\u7cbe\u5ea6\u6d6e\u70b9\u65f6\uff0c",(0,a.jsx)(t.code,{children:"unpack_unorm2x16_to_half"})," \u548c ",(0,a.jsx)(t.code,{children:"unpack_snorm2x16_to_half"})," \u51fd\u6570\u53ef\u80fd\u4f1a\u4e22\u5931\u7cbe\u5ea6\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"\u5c06\u6d6e\u70b9\u5411\u91cf\u8f6c\u6362\u4e3a\u6574\u6570\u7136\u540e\u6253\u5305\u6574\u6570",children:"\u5c06\u6d6e\u70b9\u5411\u91cf\u8f6c\u6362\u4e3a\u6574\u6570\uff0c\u7136\u540e\u6253\u5305\u6574\u6570"}),"\n",(0,a.jsx)(t.p,{children:"\u8868 6.23 \u5217\u51fa\u4e86\u4ee5\u6d6e\u70b9\u5411\u91cf\u5f00\u5934\u3001\u5c06\u7ec4\u4ef6\u8f6c\u6362\u4e3a\u6574\u6570\u503c\u3001\u7136\u540e\u5c06\u591a\u4e2a\u503c\u6253\u5305\u4e3a\u5355\u4e2a\u65e0\u7b26\u53f7\u6574\u6570\u7684\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(i,{num:"6.23",title:"Pack functions",headers:["Built-in Pack Functions","Description"],datasList:[["uint pack_float_to_unorm4x8(float4 x) uint pack_float_to_snorm4x8(float4 x) uint pack_half_to_unorm4x8(half4 x) uint pack_half_to_snorm4x8(half4 x)","Convert a four-component vector normalized single- or half-precision floating-point value to four 8-bit integer values and pack these 8-bit integer values into a 32-bit unsigned integer."],["uint pack_float_to_srgb_unorm4x8(float4 x) \nuint pack_half_to_srgb_unorm4x8(half4 x)","Convert a four-component vector normalized single- or half-precision floating-point value to four 8-bit integer values and pack these 8-bit integer values into a 32-bit unsigned integer. The color values are converted from linear RGB to sRGB."],["uint pack_float_to_unorm2x16(float2 x) \nuint pack_float_to_snorm2x16(float2 x) \nuint pack_half_to_unorm2x16(half2 x) \nuint pack_half_to_snorm2x16(half2 x)","Convert a two-component vector of normalized single- or half-precision floating-point values to two 16-bit integer values and pack these 16-bit integer values into a 32-bit unsigned integer."],["uint pack_float_to_unorm10a2(float4) \nushort pack_float_to_unorm565(float3) \nuint pack_half_to_unorm10a2(half4) \nushort pack_half_to_unorm565(half3)","Convert a three- or four-component vector of normalized single- or half- precision floating-point values to a packed, 10a2 (1010102) or 565 color integer value."]]})]})}function f(n={}){const{wrapper:t}={...(0,e.a)(),...n.components};return t?(0,a.jsx)(t,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}function p(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,t,o)=>{o.d(t,{Z:()=>l,a:()=>r});var a=o(67294);const e={},i=a.createContext(e);function r(n){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:r(n.components),a.createElement(i.Provider,{value:t},n.children)}}}]);