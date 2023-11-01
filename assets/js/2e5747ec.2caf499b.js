"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[190],{20797:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=n(85893),t=n(11151);const a={},l="\u4f5c\u4e3a ULP \u7684\u76f8\u5bf9\u8bef\u5dee",i={id:"metal-shading-language-specification/relative-error-as-ulps/index",title:"\u4f5c\u4e3a ULP \u7684\u76f8\u5bf9\u8bef\u5dee",description:"\u8868 7.1 \u63cf\u8ff0\u4e86\u4ee5 ULP \u503c\u7ed9\u51fa\u7684\u5355\u7cbe\u5ea6\u6d6e\u70b9\u57fa\u672c\u7b97\u672f\u8fd0\u7b97\u548c\u6570\u5b66\u51fd\u6570\u7684\u6700\u4f4e\u7cbe\u5ea6\u3002\u7528\u4e8e\u8ba1\u7b97\u7b97\u672f\u8fd0\u7b97\u7684 ULP \u503c\u7684\u53c2\u8003\u503c\u662f\u65e0\u9650\u7cbe\u786e\u7684\u7ed3\u679c\u3002",source:"@site/docs/metal-shading-language-specification/relative-error-as-ulps/index.mdx",sourceDirName:"metal-shading-language-specification/relative-error-as-ulps",slug:"/metal-shading-language-specification/relative-error-as-ulps/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/relative-error-as-ulps/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/relative-error-as-ulps/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u6d6e\u70b9\u5f02\u5e38",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/floating-point-exceptions/"},next:{title:"\u6e05\u96f6\u6a21\u5f0f\u4e0b\u7684\u8fb9\u7f18\u60c5\u51b5\u884c\u4e3a",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/edge-case-behavior-in-flush-to-zero-mode/"}},s={},d=[];function u(e){const r={code:"code",h1:"h1",p:"p",...(0,t.a)(),...e.components},{OriginalPDF:n,TableView:a,TableViewDataGenerator:l,ToBePolishedAfterTranslation:i}=r;return n||p("OriginalPDF",!0),a||p("TableView",!0),l||p("TableViewDataGenerator",!0),i||p("ToBePolishedAfterTranslation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"\u4f5c\u4e3a-ulp-\u7684\u76f8\u5bf9\u8bef\u5dee",children:"\u4f5c\u4e3a ULP \u7684\u76f8\u5bf9\u8bef\u5dee"}),"\n",(0,o.jsx)(i,{}),"\n",(0,o.jsx)(n,{title:"7.4 Relative Error as ULPs"}),"\n",(0,o.jsx)(r.p,{children:"\u8868 7.1 \u63cf\u8ff0\u4e86\u4ee5 ULP \u503c\u7ed9\u51fa\u7684\u5355\u7cbe\u5ea6\u6d6e\u70b9\u57fa\u672c\u7b97\u672f\u8fd0\u7b97\u548c\u6570\u5b66\u51fd\u6570\u7684\u6700\u4f4e\u7cbe\u5ea6\u3002\u7528\u4e8e\u8ba1\u7b97\u7b97\u672f\u8fd0\u7b97\u7684 ULP \u503c\u7684\u53c2\u8003\u503c\u662f\u65e0\u9650\u7cbe\u786e\u7684\u7ed3\u679c\u3002"}),"\n",(0,o.jsx)(a,{num:"7.1",title:"Accuracy of single-precision floating-point operations and functions",headers:["Math Function","Minimum Accuracy (ULP Values)"],datasList:[["x + y","Correctly rounded"],["x - y","Correctly rounded"],["x * y","Correctly rounded"],["1.0 / x","Correctly rounded"],["x / y","Correctly rounded"],["acos","<= 4 ulp"],["acosh","<= 4 ulp"],["asin","<= 4 ulp"],["asinh","<= 4 ulp"],["atan","<= 5 ulp"],["atan2","<= 6 ulp"],["atanh","<= 5 ulp"],["ceil","Correctly rounded"],["copysign","0 ulp"],["cos","<= 4 ulp"],["cosh","<= 4 ulp"],["cospi","<= 4 ulp"],["exp","<= 4 ulp"],["exp2","<= 4 ulp"],["exp10","<= 4 ulp"],["fabs","0 ulp"],["fdim","Correctly rounded"],["floor","Correctly rounded"],["fma","Correctly rounded"],["fmax","0 ulp"],["fmin","0 ulp"],["fmod","0 ulp"],["fract","Correctly rounded"],["frexp","0 ulp"],["ilogb","0 ulp"],["ldexp","Correctly rounded"],["log","<= 4 ulp"],["log2","<= 4 ulp"],["log10","<= 4 ulp"],["modf","0 ulp"],["nextafter","0 ulp"],["pow","<= 16 ulp"],["powr","<= 16 ulp"],["rint","Correctly rounded"],["round","Correctly rounded"],["rsqrt","Correctly rounded"],["sin","<= 4 ulp"],["sincos","<= 4 ulp"],["sinh","<= 4 ulp"],["sinpi","<= 4 ulp"],["sqrt","Correctly rounded"],["tan","<= 6 ulp"],["tanpi","<= 6 ulp"],["tanh","<= 5 ulp"],["trunc","Correctly rounded"]]}),"\n",(0,o.jsxs)(r.p,{children:["\u8868 7.2 \u63cf\u8ff0\u4e86\u5355\u7cbe\u5ea6\u6d6e\u70b9\u7b97\u672f\u8fd0\u7b97\u7684\u6700\u4f4e\u7cbe\u5ea6\uff0c\u4ee5\u542f\u7528\u5feb\u901f\u6570\u5b66\u7684 ULP \u503c\u7ed9\u51fa\uff08\u8fd9\u662f\u9ed8\u8ba4\u503c\uff0c\u9664\u975e\u4f60\u6307\u5b9a ",(0,o.jsx)(r.code,{children:"-fno-fast-math"})," \u4f5c\u4e3a\u7f16\u8bd1\u5668\u9009\u9879\uff09\u3002"]}),"\n",(0,o.jsx)(a,{num:"7.2",title:"Accuracy of single-precision operations and functions with fast math enabled",headers:["Math Function","Minimum Accuracy (ULP Values)"],datasList:[["x + y","Correctly rounded"],["x - y","Correctly rounded"],["x * y","Correctly rounded"],["1.0 / x","<= 1 ulp for x in the domain of 2e-126 to 2e126"],["x / y","<= 2.5 ulp for y in the domain of 2e-126 to 2e126"],["acos(x)","<= 5 ulp for x in the domain [-1, 1]"],["acosh(x)","Implemented as log(x + sqrt(x * x - 1.0))"],["asin(x)","<= 5 ulp for x in the domain [-1, 1] and |x| >= 2e-125"],["asinh(x)","Implemented as log(x + sqrt(x * x + 1.0))"],["atan(x)","<= 5 ulp"],["atanh(x)","Implemented as 0.5 * (log( (1.0 + x) / (1.0 - x) )"],["atan2(y, x)","Implemented as"],["if x > 0, atan(y / x),","if x < 0 and y > 0, atan(y / x) + M_PI_F"],["if x < 0 and y < 0, atan(y / x) - M_PI_F","and if x = 0 and y = 0, is undefined."],["cos(x)","For x in the domain [-pi, pi], the maximum absolute error is <= 2e-13 and larger otherwise."],["cosh(x)","Implemented as 0.5 * (exp(x) + exp(-x))"],["cospi(x)","For x in the domain [-1, 1], the maximum absolute error is <= 2e-13 and larger otherwise."],["exp(x)","<= 3 + floor(fabs(2 * x)) ulp"],["exp2(x)","<= 3 + floor(fabs(2 * x)) ulp"],["exp10(x)","Implemented as exp2(x * log2(10))"],["fabs","0 ulp"],["fdim","Correctly rounded"],["floor","Correctly rounded"],["fma","Correctly rounded"],["fmax","0 ulp"],["fmin","0 ulp"],["fmod","Undefined"],["fract","Correctly rounded"],["frexp","0 ulp"],["ilogb","0 ulp"],["ldexp","Correctly rounded"],["log(x)","For x in the domain [0.5, 2], the maximum absolute error is <= 2-21; otherwise if x > 0 the maximum error is <= 3 ulp; otherwise the results are undefined."],["log2(x)","For x in the domain [0.5, 2], the maximum absolute error is <= 2-22; otherwise if x > 0 the maximum error is <= 2 ulp; otherwise the results are undefined."],["log10(x)","Implemented as log2(x) * log10(2)"],["modf","0 ulp"],["pow(x, y)","Implemented as exp2(y * log2(x)). Undefined for x = 0 and y = 0."],["powr(x, y)","Implemented as exp2(y * log2(x)). Undefined for x = 0 and y = 0."],["rint","Correctly rounded"],["round(x)","Correctly rounded"],["rsqrt","<= 2 ulp"],["sin(x)","For x in the domain [-pi, pi], the maximum absolute error is <= 2-13 and larger otherwise."],["sinh(x)","Implemented as 0.5 * (exp(x) - exp(-x))"],["sincos(x)","ULP values as defined for sin(x) and cos(x)"],["sinpi(x)","For x in the domain [-1, 1], the maximum absolute error is <= 2-13 and larger otherwise."],["sqrt(x)","Implemented as x * rsqrt(x) with special cases handled correctly."],["tan(x)","Implemented as sin(x) * (1.0 / cos(x))"],["tanh(x)","Implemented as (t - 1.0)/(t + 1.0), where t = exp(2.0 * x)"],["tanpi(x)","Implemented as tan(x * pi)"],["trunc","Correctly rounded"]]}),"\n",(0,o.jsx)(l,{}),"\n",(0,o.jsxs)(r.p,{children:["\u8868 7.3 \u63cf\u8ff0\u4ee5 ULP \u503c\u7ed9\u51fa\u7684\u534a\u7cbe\u5ea6\u6d6e\u70b9\u57fa\u672c\u7b97\u672f\u8fd0\u7b97\u548c\u6570\u5b66\u51fd\u6570\u7684\u6700\u4f4e\u7cbe\u5ea6\u3002\u8868 7.3 \u9002\u7528\u4e8e iOS \u548c macOS\uff0c\u4ece ",(0,o.jsx)(r.code,{children:"MTLGPUFamilyApple4"})," \u786c\u4ef6\u5f00\u59cb\u3002"]}),"\n",(0,o.jsx)(a,{num:"7.3",title:"Accuracy of half-precision floating-point operations and functions",headers:["Math Function","Minimum Accuracy (ULP Values)"],datasList:[["x + y","Correctly rounded"],["x - y","Correctly rounded"],["x * y","Correctly rounded"],["1.0 / x","Correctly rounded"],["x / y","Correctly rounded"],["acos(x)","<= 1 ulp"],["acosh(x)","<= 1 ulp"],["asin(x)","<= 1 ulp"],["asinh(x)","<= 1 ulp"],["atan(x)","<= 1 ulp"],["atanh(x)","<= 1 ulp"],["atan2(y, x)","<= 1 ulp"],["cos(x)","<= 1 ulp"],["cosh(x)","<= 1 ulp"],["cospi(x)","<= 1 ulp"],["exp(x)","<= 1 ulp"],["exp2(x)","<= 1 ulp"],["exp10(x)","<= 1 ulp"],["fabs","0 ulp"],["fdim","Correctly rounded"],["floor","Correctly rounded"],["fma","Correctly rounded"],["fmax","0 ulp"],["fmin","0 ulp"],["fmod","0 ulp"],["fract","Correctly rounded"],["frexp","0 ulp"],["ilogb","0 ulp"],["ldexp","Correctly rounded"],["log(x)","<= 1 ulp"],["log2(x)","<= 1 ulp"],["log10(x)","<= 1 ulp"],["modf","0 ulp"],["nextafter","0 ulp"],["rint","Correctly rounded"],["round(x)","Correctly rounded"],["rsqrt","Correctly rounded"],["sin(x)","<= 1 ulp"],["sinh(x)","<= 1 ulp"],["sincos(x)","ULP values as defined for sin(x) and cos(x)"],["sinpi(x)","<= 1 ulp"],["sqrt(x)","Correctly rounded"],["tan(x)","<= 1 ulp"],["tanh(x)","<= 1 ulp"],["tanpi(x)","<= 1 ulp"],["trunc","Correctly rounded"]]}),"\n",(0,o.jsxs)(r.p,{children:["\u8868 7.4 \u63cf\u8ff0\u4e86\u4ee5 ULP \u503c\u7ed9\u51fa\u7684\u5927\u8111\u6d6e\u70b9\u57fa\u672c\u7b97\u672f\u8fd0\u7b97\u548c\u6570\u5b66\u51fd\u6570\u7684\u6700\u4f4e\u7cbe\u5ea6\u3002\u8868 7.4 \u9002\u7528\u4e8e\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4ece ",(0,o.jsx)(r.code,{children:"MTLGPUFamilyApple6"})," \u6216 ",(0,o.jsx)(r.code,{children:"MTLGPUFamilyMac2"})," \u786c\u4ef6\u5f00\u59cb\u3002"]}),"\n",(0,o.jsx)(a,{num:"7.4",title:"Accuracy of brain floating-point operations and functions",headers:["Math Function","Minimum Accuracy (ULP Values)"],datasList:[["x + y","Correctly rounded"],["x - y","Correctly rounded"],["x * y","Correctly rounded"],["1.0 / x","Correctly rounded"],["x / y","Correctly rounded"]]}),"\n",(0,o.jsx)(a,{num:"7.5",title:"Accuracy of brain floating-point operations and functions with fast math enabled",headers:["Math Function","Minimum Accuracy (ULP Values)"],datasList:[["x + y","Correctly rounded"],["x - y","Correctly rounded"],["x * y","Correctly rounded"],["1.0 / x","<= 0.6 ulp for x in the domain of 2e-126 to 2e126"],["x / y","<= 0.6 ulp for y in the domain of 2e-126 to 2e126"]]}),"\n",(0,o.jsxs)(r.p,{children:["\u5c3d\u7ba1\u8868 7.1 \u3001\u8868 7.2 \u3001\u8868 7.3 \u3001\u8868 7.4 \u548c\u8868 7.5 \u4e2d\u6307\u5b9a\u4e86\u5404\u4e2a\u6570\u5b66\u8fd0\u7b97\u548c\u51fd\u6570\u7684\u7cbe\u5ea6\uff0c\u4f46 Metal \u7f16\u8bd1\u5668\u5728\u5feb\u901f\u6570\u5b66\u6a21\u5f0f\u4e0b\uff08\u8bf7\u53c2\u9605 1.5.5)\uff0c\u53ef\u4ee5\u8fdb\u884c\u5404\u79cd\u4f18\u5316\uff0c\u4f8b\u5982\u91cd\u65b0\u5173\u8054\u6d6e\u70b9\u8fd0\u7b97\uff0c\u8fd9\u53ef\u80fd\u4f1a\u663e\u7740\u6539\u53d8\u6d6e\u70b9\u7ed3\u679c\u3002\u91cd\u65b0\u5173\u8054\u53ef\u80fd\u4f1a\u66f4\u6539\u6216\u5ffd\u7565\u96f6\u7684\u7b26\u53f7\uff0c\u5141\u8bb8\u4f18\u5316\u5047\u8bbe\u53c2\u6570\u548c\u7ed3\u679c\u4e0d\u662f NaN \u6216 +/-INF\uff0c\u6291\u5236\u6216\u521b\u5efa\u4e0b\u6ea2\u6216\u6ea2\u51fa\uff0c\u56e0\u6b64\u4e0d\u80fd\u51fa\u73b0\u5728\u4f9d\u8d56\u4e8e\u820d\u5165\u884c\u4e3a\uff08\u4f8b\u5982\u4ee3\u7801\u4e2d\u7684 ",(0,o.jsx)(r.code,{children:"(x + 2e52) - 2e52"}),"\uff09\uff0c\u6216\u6709\u5e8f\u6d6e\u70b9\u6bd4\u8f83\u3002"]}),"\n",(0,o.jsx)(r.p,{children:"ULP \u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,o.jsxs)(r.p,{children:["\u5982\u679c ",(0,o.jsx)(r.code,{children:"x"})," \u662f\u4f4d\u4e8e\u4e24\u4e2a\u8fde\u7eed\u6d6e\u70b9\u6570 a \u548c b \u4e4b\u95f4\u7684\u5b9e\u6570\uff0c\u4e14\u4e0d\u7b49\u4e8e\u5176\u4e2d\u4e4b\u4e00\uff0c\u5219 ",(0,o.jsx)(r.code,{children:"ulp(x) = |b - a|"}),"\uff0c\u5426\u5219 ",(0,o.jsx)(r.code,{children:"ulp(x)"})," \u662f\u4e24\u8005\u4e4b\u95f4\u7684\u8ddd\u79bb\u6700\u63a5\u8fd1 ",(0,o.jsx)(r.code,{children:"x"})," \u7684\u4e24\u4e2a\u4e0d\u76f8\u7b49\u7684 finite \u6d6e\u70b9\u6570\u3002\u6b64\u5916\uff0c",(0,o.jsx)(r.code,{children:"ulp(NaN)"})," \u662f ",(0,o.jsx)(r.code,{children:"NaN"}),"\u3002"]})]})}function c(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function p(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,r,n)=>{n.d(r,{Z:()=>i,a:()=>l});var o=n(67294);const t={},a=o.createContext(t);function l(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);