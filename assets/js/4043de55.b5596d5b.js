"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=m(n),f=a,d=s["".concat(u,".").concat(f)]||s[f]||p[f]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={},l="Numbers",i={unversionedId:"swift/rest/numbers/index",id:"swift/rest/numbers/index",title:"Numbers",description:"Decimal",source:"@site/docs/swift/rest/numbers/index.mdx",sourceDirName:"swift/rest/numbers",slug:"/swift/rest/numbers/",permalink:"/swift-tutorials-cn/docs/swift/rest/numbers/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/rest/numbers/index.mdx",tags:[],version:"current",lastUpdatedAt:1698741091,formattedLastUpdatedAt:"2023\u5e7410\u670831\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"String",permalink:"/swift-tutorials-cn/docs/swift/standard-library/string/"}},u={},m=[{value:"Decimal",id:"decimal",level:2},{value:"NumberFormatter",id:"numberformatter",level:2}],c={toc:m},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"numbers"},"Numbers"),(0,a.kt)("h2",{id:"decimal"},"Decimal"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/decimal"},"Decimal"),"\uff1a\u8868\u793a\u4ee5 10 \u4e3a\u57fa\u6570\u7684\u6570\u5b57\u7684\u7ed3\u6784\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"public struct Decimal : @unchecked Sendable {\n    // ...\n\n    public init()\n\n    public init(_exponent: Int32,\n                _length: UInt32,\n                _isNegative: UInt32,\n                _isCompact: UInt32,\n                _reserved: UInt32,\n                _mantissa: (UInt16, UInt16, UInt16, UInt16,\n                            UInt16, UInt16, UInt16, UInt16))\n}\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"import Foundation\n\nlet x = Decimal()\n// x == 0\n\nlet y = Decimal(1.23)\n// y == 1.23\n")),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"Double")," \u76f8\u6bd4\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Decimal")," \u6709\u7740\u66f4\u9ad8\u7684\u7cbe\u5ea6\uff0c\u8fd9\u5728\u91d1\u878d\u9886\u57df\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"import Foundation\n\nlet a = Double(0.123456789)\nlet b = Double(0.12345678901234567890123456789)\n// a == 0.123456789\n// b == 0.1234567890123457\n\nlet c = Decimal(0.123456789)\nlet d = Decimal(0.12345678901234567890123456789)\n// c == 0.12345678899999997952\n// d == 0.12345678901234569216\n")),(0,a.kt)("h2",{id:"numberformatter"},"NumberFormatter"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/foundation/numberformatter"},"NumberFormatter"),"\uff1a\u5728\u6570\u503c\u53ca\u5176\u6587\u672c\u8868\u793a\u5f62\u5f0f\u4e4b\u95f4\u8fdb\u884c\u8f6c\u6362\u7684\u683c\u5f0f\u5316\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"open class NumberFormatter : Formatter, @unchecked Sendable {\n    // ...\n\n    open var numberStyle: NumberFormatter.Style\n\n    open var locale: Locale!\n}\n")),(0,a.kt)("p",null,"\u6bd4\u5982\uff0c\u5c06\u6570\u5b57\u8f6c\u6362\u4e3a\u767e\u5206\u6bd4\u683c\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let number = 0.75\nlet formatter = NumberFormatter()\nformatter.numberStyle = .percent\nlet formattedString = formatter.string(from: NSNumber(value: number))\n// formattedString == "75%"\n')),(0,a.kt)("p",null,"\u518d\u6bd4\u5982\uff0c\u5c06\u6570\u5b57\u8f6c\u6362\u4e3a\u79d1\u5b66\u8ba1\u6570\u6cd5\u683c\u5f0f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let number = 1234567890\nlet formatter = NumberFormatter()\nformatter.numberStyle = .scientific\nlet formattedString = formatter.string(from: NSNumber(value: number))\n// formattedString == "1.23456789E9"\n')))}p.isMDXComponent=!0}}]);