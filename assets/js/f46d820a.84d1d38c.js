"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[6740],{29744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var o=t(85893),a=t(11151);const i={},s="\u6570\u5b66\u51fd\u6570",r={id:"metal-shading-language-specification/math-functions/index",title:"\u6570\u5b66\u51fd\u6570",description:"\u8868 6.4 \u4e2d\u7684\u6570\u5b66\u51fd\u6570\u5728\u5934\u6587\u4ef6 ` \u4e2d\u5b9a\u4e49\u3002T \u662f\u6807\u91cf\u6216\u5411\u91cf half \u6216 float \u6d6e\u70b9\u7c7b\u578b\u4e4b\u4e00\u3002Ti` \u4ec5\u6307\u6807\u91cf\u6216\u5411\u91cf\u6574\u6570\u7c7b\u578b\u3002",source:"@site/docs/metal-shading-language-specification/math-functions/index.mdx",sourceDirName:"metal-shading-language-specification/math-functions",slug:"/metal-shading-language-specification/math-functions/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/math-functions/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/math-functions/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u5173\u7cfb\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/relational-functions/"},next:{title:"\u77e9\u9635\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/matrix-functions/"}},l={},u=[];function f(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components},{OriginalPDF:t,TableView:i,ToBePolishedAfterTranslation:s}=n;return t||x("OriginalPDF",!0),i||x("TableView",!0),s||x("ToBePolishedAfterTranslation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u6570\u5b66\u51fd\u6570",children:"\u6570\u5b66\u51fd\u6570"}),"\n",(0,o.jsx)(s,{}),"\n",(0,o.jsx)(t,{title:"6.5 Math Functions"}),"\n",(0,o.jsxs)(n.p,{children:["\u8868 6.4 \u4e2d\u7684\u6570\u5b66\u51fd\u6570\u5728\u5934\u6587\u4ef6 ",(0,o.jsx)(n.code,{children:"<metal_math>"})," \u4e2d\u5b9a\u4e49\u3002",(0,o.jsx)(n.code,{children:"T"})," \u662f\u6807\u91cf\u6216\u5411\u91cf ",(0,o.jsx)(n.code,{children:"half"})," \u6216 ",(0,o.jsx)(n.code,{children:"float"})," \u6d6e\u70b9\u7c7b\u578b\u4e4b\u4e00\u3002",(0,o.jsx)(n.code,{children:"Ti"})," \u4ec5\u6307\u6807\u91cf\u6216\u5411\u91cf\u6574\u6570\u7c7b\u578b\u3002"]}),"\n",(0,o.jsx)(i,{num:"6.4",title:"Math functions in the Metal standard library",headers:["Built-in Math Functions","Description"],datasList:[["T acos(T x)","Compute arc cosine of x."],["T acosh(T x)","Compute inverse hyperbolic cosine of x."],["T asin(T x)","Compute arc sine function of x."],["T asinh(T x)","Compute inverse hyperbolic sine of x."],["T atan(T y_over_x)","Compute arc tangent of x."],["T atan2(T y, T x)","Compute arc tangent of y over x."],["T atanh(T x)","Compute hyperbolic arc tangent of x."],["T ceil(T x)","Round x to integral value using the round to positive infinity rounding mode."],["T copysign(T x, T y)","Return x with its sign changed to match the sign of y."],["T cos(T x)","Compute cosine of x."],["T cosh(T x)","Compute hyperbolic cosine of x."],["T cospi(T x)","Compute cos(!x)."],["T divide(T x, T y)","Compute x / y."],["T exp(T x)","Exponential base e function."],["T exp2(T x)","Exponential base 2 function."],["T exp10(T x)","Exponential base 10 function."],["T fabs(T x) \nT abs(T x)","Compute absolute value of a floating-point number."],["T fdim(T x, T y)","x - y if x > y; +0 if x <= y."],["T floor(T x)","Round x to integral value using the round to negative infinity rounding mode."],["T fma(T a, T b, T c)","Returns the correctly rounded floating-point representation of the sum of c with the infinitely precise product of a and b. Rounding of intermediate products shall not occur. Edge case behavior is per the IEEE 754-2008 standard."],["T fmax(T x, T y) \nT max(T x, T y)","Returns y if x < y, otherwise returns x. If one argument is a NaN, fmax() returns the other argument. If both arguments are NaNs, fmax() returns a NaN. If x and y are denormals and the GPU doesn\u2019t support denormals, either value may be returned."],["T fmax3(T x, T y, T z) \nT max3(T x, T y, T z) \nAll OS: Since Metal 2.1.","Returns fmax(x, fmax(y, z))."],["T fmedian3(T x, T y, T z) \nAll OS: Since Metal 1. \n\nT median3(T x, T y, T z) \nAll OS: Since Metal 2.1.","Returns the middle value of x, y, and z. (If one or more values are NaN, see discussion after this table.)"],["T fmin(T x, T y) \nT min(T x, T y)","Returns y if y < x, otherwise it returns x. If one argument is a NaN, fmin() returns the other argument. If both arguments are NaNs, fmin() returns a NaN. If x and y are denormals and the GPU doesn\u2019t support denormals, either value may be returned."],["T fmin3(T x, T y, T z) \nT min3(T x, T y, T z) \nAll OS: Since Metal 2.1.","Returns fmin(x, fmin(y, z))."],["T fmod(T x, T y)","Returns x - y * trunc(x/y)."],["T fract(T x)","Returns the fractional part of x that is greater than or equal to 0 or less than 1."],["T frexp(T x, Ti &exponent)","Extract mantissa and exponent from x. For each component the mantissa returned is a float with magnitude in the interval [1/2, 1) or 0. Each component of x equals mantissa returned * 2exp."],["Ti ilogb(T x)","Return the exponent as an integer value."],["T ldexp(T x, Ti k)","Multiply x by 2 to the power k."],["T log(T x)","Compute the natural logarithm of x."],["T log2(T x)","Compute the base 2 logarithm of x."],["T log10(T x)","Compute the base 10 logarithm of x."],["T modf(T x, T &intval)","Decompose a floating-point number. The modf function breaks the argument x into integral and fractional parts, each of which has the same sign as the argument. Returns the fractional value. The integral value is returned in intval."],["T nextafter(T x, T y) \nSince Metal 3.1.","Return next representable floating-point value after x in the direction of y. If x equals y, return y. Note that if both x and y represent the floating-point zero values, the result has sign of y. If either x or y is NaN, return NaN."],["T pow(T x, T y)","Compute x to the power y."],["T powr(T x, T y)","Compute x to the power y, where x is >= 0."],["T rint(T x)","Round x to integral value using round ties to even rounding mode in floating-point format."],["T round(T x)","Return the integral value nearest to x, rounding halfway cases away from zero."],["T rsqrt(T x)","Compute inverse square root of x."],["T sin(T x)","Compute sine of x."],["T sincos(T x, T &cosval)","Compute sine and cosine of x. Return the computed sine in the function return value, and return the computed cosine in cosval."],["T sinh(T x)","Compute hyperbolic sine of x."],["T sinpi(T x)","Compute sin(!x)."],["T sqrt(T x)","Compute square root of x."],["T tan(T x)","Compute tangent of x."],["T tanh(T x)","Compute hyperbolic tangent of x."],["T tanpi(T x)","Compute tan(!x)."],["T trunc(T x)","Round x to integral value using the round toward zero rounding mode."]]}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e ",(0,o.jsx)(n.code,{children:"fmedian3"}),"\uff0c\u5982\u679c\u6240\u6709\u503c\u5747\u4e3a NaN\uff0c\u5219\u8fd4\u56de NaN\u3002\u5426\u5219\uff0c\u5c06 NaN \u89c6\u4e3a\u7f3a\u5931\u6570\u636e\u5e76\u5c06\u5176\u4ece\u96c6\u5408\u4e2d\u5220\u9664\u3002\u5982\u679c\u4e24\u4e2a\u503c\u5747\u4e3a NaN\uff0c\u5219\u8fd4\u56de\u975e NaN \u503c\u3002\u5982\u679c\u5176\u4e2d\u4e00\u4e2a\u503c\u662f NaN\uff0c\u5219\u8be5\u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4efb\u4e00\u975e NaN \u503c\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u5bf9\u4e8e\u5355\u7cbe\u5ea6\u6d6e\u70b9\uff0cMetal \u652f\u6301\u8868 6.4 \u4e2d\u5217\u51fa\u7684\u6570\u5b66\u51fd\u6570\u7684\u4e24\u79cd\u53d8\u4f53\uff1a\u7cbe\u786e\u53d8\u4f53\u548c\u5feb\u901f\u53d8\u4f53\u3002",(0,o.jsx)(n.code,{children:"ffast-math"})," \u7f16\u8bd1\u5668\u9009\u9879\uff08\u8bf7\u53c2\u9605\u7b2c 1.5.3 \u8282\uff09\u5728\u7f16\u8bd1 Metal \u6e90\u4ee3\u7801\u65f6\u9009\u62e9\u9002\u5f53\u7684\u53d8\u4f53\u3002\u6b64\u5916\uff0c",(0,o.jsx)(n.code,{children:"metal::precise"})," \u548c ",(0,o.jsx)(n.code,{children:"metal::fast"})," \u5d4c\u5957\u547d\u540d\u7a7a\u95f4\u63d0\u4f9b\u4e86\u4e00\u79cd\u663e\u5f0f\u65b9\u6cd5\u6765\u4e3a\u5355\u7cbe\u5ea6\u6d6e\u70b9\u9009\u62e9\u8fd9\u4e9b\u6570\u5b66\u51fd\u6570\u7684\u5feb\u901f\u6216\u7cbe\u786e\u53d8\u4f53\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5b50\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:"float x;\nfloat a = sin(x); // Use fast or precise version of sin based on\n                  // whether you specify -ffast-math as\n                  // compile option.\n\nfloat b = fast::sin(x);     // Use fast version of sin().\nfloat c = precise::cos(x);  // Use precise version of cos().\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 1.2 \u8d77\u652f\u6301\u8868 6.5 \u548c\u8868 6.6 \u4e2d\u5217\u51fa\u7684\u5e38\u91cf\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u8868 6.5 \u5217\u51fa\u4e86\u5177\u6709 ",(0,o.jsx)(n.code,{children:"float"})," \u7c7b\u578b\u503c\u7684\u53ef\u7528\u7b26\u53f7\u5e38\u91cf\uff0c\u8fd9\u4e9b\u5e38\u91cf\u5728\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\u7684\u7cbe\u5ea6\u8303\u56f4\u5185\u662f\u51c6\u786e\u7684\u3002"]}),"\n",(0,o.jsx)(i,{num:"6.5",title:"Constants for single-precision floating-point math functions",headers:["Constant Name","Description"],datasList:[["MAXFLOAT","Value of maximum non-infinite single precision floating-point number."],["HUGE_VALF","A positive float constant expression. HUGE_VALF evaluates to +infinity."],["INFINITY","A constant expression of type float representing positive or unsigned infinity."],["NAN","A constant expression of type float representing a quiet NaN."],["M_E_F","Value of e"],["M_LOG2E_F","Value of log2e"],["M_LOG10E_F","Value of log10e"],["M_LN2_F","Value of loge2"],["M_LN10_F","Value of loge10"],["M_PI_F","Value of \u03c0"],["M_PI_2_F","Value of \u03c0 / 2"],["M_PI_4_F","Value of \u03c0 / 4"],["M_1_PI_F","Value of 1 / \u03c0"],["M_2_PI_F","Value of 2 / \u03c0"],["M_2_SQRTPI_F","Value of 2 / \u221a\u03c0"],["M_SQRT2_F","Value of \u221a2"],["M_SQRT1_2_F","Value of 1 / \u221a2"]]}),"\n",(0,o.jsxs)(n.p,{children:["\u8868 6.6 \u5217\u51fa\u4e86\u5177\u6709 ",(0,o.jsx)(n.code,{children:"half"})," \u7c7b\u578b\u503c\u7684\u53ef\u7528\u7b26\u53f7\u5e38\u91cf\uff0c\u8fd9\u4e9b\u5e38\u91cf\u5728\u534a\u7cbe\u5ea6\u6d6e\u70b9\u6570\u7684\u7cbe\u5ea6\u8303\u56f4\u5185\u662f\u51c6\u786e\u7684\u3002"]}),"\n",(0,o.jsx)(i,{num:"6.6",title:"Constants for half-precision floating-point math functions",headers:["Constant Name","Description"],datasList:[["MAXHALF","Value of maximum non-infinite half precision floating-point number."],["HUGE_VALH","A positive half constant expression. HUGE_VALH evaluates to +infinity."],["M_E_H","Value of e"],["M_LOG2E_H","Value of log2e"],["M_LOG10E_H","Value of log10e"],["M_LN2_H","Value of loge2"],["M_LN10_H","Value of loge10"],["M_PI_H","Value of \u03c0"],["M_PI_2_H","Value of \u03c0 / 2"],["M_PI_4_H","Value of \u03c0 / 4"],["M_1_PI_H","Value of 1 / \u03c0"],["M_2_PI_H","Value of 2 / \u03c0"],["M_2_SQRTPI_H","Value of 2 / \u221a\u03c0"],["M_SQRT2_H","Value of \u221a2"],["M_SQRT1_2_H","Value of 1 / \u221a2"]]}),"\n",(0,o.jsxs)(n.p,{children:["\u8868 6.7 \u5217\u51fa\u4e86\u53ef\u7528\u7684\u7b26\u53f7\u5e38\u91cf\uff0c\u5176\u503c\u7c7b\u578b\u4e3a ",(0,o.jsx)(n.code,{children:"bfloat"}),"\uff0c\u5728\u5927\u8111\u6d6e\u70b9\u6570\u7684\u7cbe\u5ea6\u8303\u56f4\u5185\u662f\u51c6\u786e\u7684\u3002"]}),"\n",(0,o.jsx)(i,{num:"6.7",title:"Constants for brain floating-point math functions",headers:["Constant Name","Description"],datasList:[["MAXBFLOAT","Value of maximum non-infinite bfloat floating-point number."],["HUGE_VALBF","A positive half constant expression. HUGE_VALBF evaluates to +infinity."],["M_E_BF","Value of e"],["M_LOG2E_BF","Value of log2e"],["M_LOG10E_BF","Value of log10e"],["M_LN2_BF","Value of loge2"],["M_LN10_BF","Value of loge10"],["M_PI_BF","Value of \u03c0"],["M_PI_2_BF","Value of \u03c0 / 2"],["M_PI_4_BF","Value of \u03c0 / 4"],["M_1_PI_BF","Value of 1 / \u03c0"],["M_2_PI_BF","Value of 2 / \u03c0"],["M_2_SQRTPI_BF","Value of 2 / \u221a\u03c0"],["M_SQRT2_BF","Value of \u221a2"],["M_SQRT1_2_BF","Value of 1 / \u221a2"]]})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);