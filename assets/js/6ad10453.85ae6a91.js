"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[6006],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(t),c=l,b=s["".concat(u,".").concat(c)]||s[c]||m[c]||r;return t?a.createElement(b,i(i({ref:n},d),{},{components:t})):a.createElement(b,i({ref:n},d))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},40170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>b,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),l=(t(67294),t(3905));const r={},i="Double",o={unversionedId:"swift/standard-library/double/index",id:"swift/standard-library/double/index",title:"Double",description:"<OriginalSource",source:"@site/docs/swift/standard-library/double/index.mdx",sourceDirName:"swift/standard-library/double",slug:"/swift/standard-library/double/",permalink:"/swift-tutorials-cn/docs/swift/standard-library/double/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/standard-library/double/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"Int",permalink:"/swift-tutorials-cn/docs/swift/standard-library/int/"},next:{title:"String",permalink:"/swift-tutorials-cn/docs/swift/standard-library/string/"}},u={},p=[{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:2},{value:"\u8f6c\u6362\u6574\u6570",id:"\u8f6c\u6362\u6574\u6570",level:3},{value:"\u8f6c\u6362\u5b57\u7b26\u4e32",id:"\u8f6c\u6362\u5b57\u7b26\u4e32",level:3},{value:"\u8f6c\u6362\u6d6e\u70b9\u6570",id:"\u8f6c\u6362\u6d6e\u70b9\u6570",level:3},{value:"\u521b\u5efa\u968f\u673a\u503c",id:"\u521b\u5efa\u968f\u673a\u503c",level:3},{value:"\u6267\u884c\u8ba1\u7b97",id:"\u6267\u884c\u8ba1\u7b97",level:3},{value:"\u820d\u5165\u503c",id:"\u820d\u5165\u503c",level:3},{value:"\u8bbf\u95ee\u6570\u5b57\u5e38\u91cf",id:"\u8bbf\u95ee\u6570\u5b57\u5e38\u91cf",level:3}],d=(s="OriginalSource",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var s;const m={toc:p},c="wrapper";function b(e){let{components:n,...t}=e;return(0,l.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"double"},"Double"),(0,l.kt)(d,{title:"Double",url:"https://developer.apple.com/documentation/swift/double",summary:"\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u503c\u7c7b\u578b",mdxType:"OriginalSource"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@frozen public struct Double {\n    // ...\n}\n")),(0,l.kt)("h2",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,l.kt)("h3",{id:"\u8f6c\u6362\u6574\u6570"},"\u8f6c\u6362\u6574\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u521b\u5efa\u4e00\u4e2a\u65b0\u503c\uff0c\u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u53ef\u80fd\u8868\u793a\u5f62\u5f0f\n//\n// \u5982\u679c\u4e24\u4e2a\u53ef\u8868\u793a\u7684\u503c\u540c\u6837\u63a5\u8fd1\uff0c\u5219\u7ed3\u679c\u662f\u5176\u6709\u6548\u6570\u4f4d\u6a21\u5f0f\u4e2d\u5177\u6709\u66f4\u591a\u5c3e\u968f\u96f6\u7684\u503c\n//\n// - value: \u8981\u8f6c\u6362\u4e3a\u6d6e\u70b9\u503c\u7684\u6574\u6570\npublic init(_ v: Int)\n")),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x = Double(1)\n// x == 1\n\nlet y = Double(-1)\n// y == -1\n")),(0,l.kt)("h3",{id:"\u8f6c\u6362\u5b57\u7b26\u4e32"},"\u8f6c\u6362\u5b57\u7b26\u4e32"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"extension Double : LosslessStringConvertible {\n\n    // \u4ece\u7ed9\u5b9a\u5b57\u7b26\u4e32\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\n    //\n    // - text: \u8981\u8f6c\u6362\u4e3a Double? \u5b9e\u4f8b\u7684\u8f93\u5165\u5b57\u7b26\u4e32\n    @inlinable public init?<S>(_ text: S) where S : StringProtocol\n\n    public init?(_ text: Substring)\n}\n")),(0,l.kt)("p",null,"\u4f5c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," \u4f20\u9012\u7684\u5b57\u7b26\u4e32\u53ef\u4ee5\u662f\u8868\u793a\u5341\u8fdb\u5236\u6216\u5341\u516d\u8fdb\u5236\u683c\u5f0f\uff08decimal or hexadecimal format\uff09\u7684\u5b9e\u9645\u6570\u5b57\uff0c\u4e5f\u53ef\u4ee5\u91c7\u7528\u8868\u793a\u65e0\u7a77\u5927\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),'\uff08"not a number"\uff09\u7684\u7279\u6b8a\u683c\u5f0f\u3002\u5982\u679c ',(0,l.kt)("inlineCode",{parentName:"p"},"text")," \u4e0d\u662f\u53ef\u8bc6\u522b\u7684\u683c\u5f0f\uff0c\u5219\u53ef\u9009\u521d\u59cb\u5316\u5668\u5c06\u5931\u8d25\u5e76\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"text")," \u5b57\u7b26\u4e32\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u7684\u52a0\u53f7\u6216\u51cf\u53f7\u5b57\u7b26\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},"+")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," \uff09\uff0c\u540e\u8ddf\u4ee5\u4e0b\u5b57\u7b26\u4e4b\u4e00\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5341\u8fdb\u5236\u5b57\u7b26\u4e32\u5305\u542b\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u53ef\u80fd\u5305\u542b\u5c0f\u6570\u70b9\u7684\u5341\u8fdb\u5236\u6570\u5b57\u7ec4\u6210\u7684\u5c3e\u6570\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let x = Double("+1.0")\n// x == 1.0\n\nlet y = Double("-1.0")\n// y == -1.0\n\nlet z = Double("28.375")\n// z == 28.375\n')),(0,l.kt)("p",null,"\u5341\u8fdb\u5236\u5b57\u7b26\u4e32\u8fd8\u53ef\u4ee5\u5728\u5c3e\u6570\u540e\u9762\u5305\u542b\u4e00\u4e2a\u6307\u6570\uff0c\u6307\u793a\u5c3e\u6570\u5e94\u4e58\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"10")," \u7684\u5e42\u3002\u5982\u679c\u5305\u542b\uff0c\u6307\u6570\u7531\u5355\u4e2a\u5b57\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"e")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"E")," \u5206\u9694\uff0c\u5e76\u7531\u53ef\u9009\u7684\u52a0\u53f7\u6216\u51cf\u53f7\u5b57\u7b26\u548c\u4e00\u7cfb\u5217\u5341\u8fdb\u5236\u6570\u5b57\u7ec4\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let a = Double("2837.5e-2")\n// a == 28.375\n\nlet b = Double("2837.5e+2")\n// b == 283,750\n\nlet c = Double("2837.5e2")\n// c == 283,750\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u5305\u542b\u7531 ",(0,l.kt)("inlineCode",{parentName:"li"},"0X")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"0x")," \u7ec4\u6210\u7684\u5c3e\u6570\uff0c\u540e\u8ddf\u4e00\u4e2a\u6216\u591a\u4e2a\u53ef\u80fd\u5305\u542b\u5c0f\u6570\u70b9\u7684\u5341\u516d\u8fdb\u5236\u6570\u5b57\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let d = Double("0x1c")\n// d == 28\n\nlet e = Double("0x1c.6")\n// e == 28.375\n')),(0,l.kt)("p",null,"\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u8fd8\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u6307\u6570\uff0c\u6307\u793a\u5c3e\u6570\u5e94\u4e58\u4ee5\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," \u7684\u5e42\u3002\u5982\u679c\u5305\u542b\uff0c\u6307\u6570\u7531\u5355\u4e2a\u5b57\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},"p")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"P")," \u5206\u9694\uff0c\u5e76\u7531\u53ef\u9009\u7684\u52a0\u53f7\u6216\u51cf\u53f7\u5b57\u7b26\u548c\u4e00\u7cfb\u5217\u5341\u8fdb\u5236\u6570\u5b57\u7ec4\u6210\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let f = Double("0x1.c6p4")\n// f == 28.375\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"li"},'"inf"')," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},'"infinity"')," \uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u5c06\u8f6c\u6362\u4e3a\u65e0\u9650\u7ed3\u679c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let g = Double("inf")\n// g == \u221e\n\nlet h = Double("INF")\n// h == \u221e\n\nlet i = Double("-Infinity")\n// i == -\u221e\n\nlet j = Double("-INFINITY")\n// j == -\u221e\n\nprint(g == Double.infinity)     // true\nprint(h == Double.infinity)     // true\nprint(i == -Double.infinity)    // true\nprint(j == -Double.infinity)    // true\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8f93\u5165\u5b57\u7b26\u4e32 ",(0,l.kt)("inlineCode",{parentName:"li"},'"nan"'),"\uff08\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff09\u5c06\u8f6c\u6362\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"NaN")," \u503c\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let k = Double("-nan")\n// k?.isNaN == true\n// k?.sign == .minus\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"extension Double : BinaryFloatingPoint {\n    // ...\n\n    /// This property is `true` for both quiet and signaling NaNs.\n    @inlinable public var isNaN: Bool { get }\n\n    /// The sign of the floating-point value.\n    @inlinable public var sign: FloatingPointSign { get }\n}\n\n@frozen public enum FloatingPointSign : Int, Sendable {\n    // ...\n\n    /// The sign for a positive value.\n    case plus\n\n    /// The sign for a negative value.\n    case minus\n}\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u51e0\u79cd\u65e0\u6548\u683c\u5f0f\u65f6\uff0c\u8f6c\u6362\u7ed3\u679c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'Double(" 5.0")      // \u5305\u542b\u7a7a\u683c\nDouble("\xb12.0")      // \u65e0\u6548\u5b57\u7b26\u4e32\nDouble("0x1.25e4")  // \u6307\u6570\uff08exponent\uff09\u683c\u5f0f\u4e0d\u6b63\u786e\n')),(0,l.kt)("h3",{id:"\u8f6c\u6362\u6d6e\u70b9\u6570"},"\u8f6c\u6362\u6d6e\u70b9\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"\n// \u521b\u5efa\u4e00\u4e2a\u521d\u59cb\u5316\u4e3a\u7ed9\u5b9a\u503c\u7684\u65b0\u5b9e\u4f8b\n//\n// - other: \u7528\u4e8e\u65b0\u5b9e\u4f8b\u7684\u503c\n@inlinable public init(_ other: Double)\n\n@inlinable public init(_ other: Float)\n")),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x: Double = 21.25\nlet y = Double(x)\n// y == 21.25\n\nlet z = Double(Double.nan)\n// z.isNaN == true\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let a: Float = 21.25\nlet b = Double(x)\n// b == 21.25\n\n\nlet c = Double(Float.nan)\n// c.isNaN == true\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"Double.nan"),' \u4ee3\u8868\u4e00\u4e2a "Not-a-Number" \u7684\u503c\u3002'),(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," \u6bd4\u8f83\u4e0d\u7b49\u4e8e\u3001\u4e0d\u5927\u4e8e\u548c\u4e0d\u5c0f\u4e8e\u6bcf\u4e2a\u503c\uff08\u5305\u62ec\u5176\u81ea\u8eab\uff09\u3002\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," \u4f20\u9012\u7ed9\u8fd0\u7b97\u901a\u5e38\u4f1a\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),"\u3002"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x = 1.21\n// x > Double.nan == false\n// x < Double.nan == false\n// x == Double.nan == false\n")),(0,l.kt)("p",{parentName:"admonition"},"\u7531\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," \u59cb\u7ec8\u4e0e\u81ea\u8eab\u8fdb\u884c\u6bd4\u8f83\uff0c\u56e0\u6b64\u8981\u6d4b\u8bd5\u6d6e\u70b9\u503c\u662f\u5426\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),"\uff0c\u8bf7\u4f7f\u7528\u5176 ",(0,l.kt)("inlineCode",{parentName:"p"},"isNaN")," \u5c5e\u6027\u800c\u4e0d\u662f\u7b49\u4e8e\u8fd0\u7b97\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"=="),"\uff09\u3002\u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"y")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),"\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let y = x + Double.nan\nprint(y == Double.nan)\n// Prints "false"\nprint(y.isNaN)\n// Prints "true"\n'))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"NaN")," \u5728 Swift \u5f00\u53d1\u4e2d\u5177\u6709\u4e00\u5b9a\u7684\u610f\u4e49\uff0c\u4f7f\u7528\u573a\u666f\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},"\u9519\u8bef\u5904\u7406\uff1a\u5f53\u8fdb\u884c\u6570\u5b66\u8fd0\u7b97\u6216\u6570\u636e\u8f6c\u6362\u65f6\uff0c\u6709\u65f6\u53ef\u80fd\u4f1a\u51fa\u73b0\u65e0\u6548\u7684\u7ed3\u679c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u4f7f\u7528 Double.nan \u6765\u8868\u793a\u7ed3\u679c\u662f\u65e0\u6548\u7684\u3002\u4f8b\u5982\uff0c\u5f53\u9664\u4ee5\u96f6\u65f6\uff0c\u7ed3\u679c\u4e3a Double.nan\u3002\u8fd9\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u68c0\u6d4b\u548c\u5904\u7406\u9519\u8bef\u60c5\u51b5\u3002")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let result = 10.0 / 0.0\nif result.isNaN {\n    print("\u9664\u4ee5\u96f6\uff0c\u7ed3\u679c\u65e0\u6548")\n}\n')),(0,l.kt)("ol",{parentName:"admonition",start:2},(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u503c\u8bbe\u5b9a\uff1a\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u80fd\u5e0c\u671b\u4e00\u4e2a\u53d8\u91cf\u521d\u59cb\u503c\u65e0\u6548\uff0c\u4ee5\u4fbf\u5728\u540e\u7eed\u7684\u64cd\u4f5c\u4e2d\u5224\u65ad\u548c\u5904\u7406\u3002\u4f7f\u7528 Double.nan \u53ef\u4ee5\u5c06\u53d8\u91cf\u521d\u59cb\u503c\u8bbe\u7f6e\u4e3a\u65e0\u6548\u3002")),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'var temperature: Double = Double.nan\n\n// \u5728\u540e\u7eed\u64cd\u4f5c\u4e2d\u68c0\u67e5 temperature \u662f\u5426\u6709\u6548\nif temperature.isNaN {\n    print("\u6e29\u5ea6\u503c\u65e0\u6548")\n}\n')),(0,l.kt)("p",{parentName:"admonition"},"\u603b\u4e4b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".nan")," \u7684\u5b58\u5728\u53ef\u4ee5\u5728 Swift \u5f00\u53d1\u4e2d\u8868\u793a\u65e0\u6548\u7ed3\u679c\uff08\u4ee3\u66ff ",(0,l.kt)("inlineCode",{parentName:"p"},"nil")," \u8868\u793a\u7684\u7f3a\u7701\uff09\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u8fdb\u884c\u9519\u8bef\u5904\u7406\u548c\u521d\u59cb\u503c\u8bbe\u5b9a\u3002")),(0,l.kt)("h3",{id:"\u521b\u5efa\u968f\u673a\u503c"},"\u521b\u5efa\u968f\u673a\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8fd4\u56de\u6307\u5b9a\u8303\u56f4\u5185\u7684\u968f\u673a\u503c\n//\n// - range: \u521b\u5efa\u968f\u673a\u503c\u7684\u8303\u56f4\u3002range \u5fc5\u987b\u662f\u6709\u9650\u4e14\u975e\u7a7a\u7684\u3002\n@inlinable public static func random(in range: Range<Double>) -> Double\n\n// \u8fd4\u56de\u6307\u5b9a\u8303\u56f4\u5185\u7684\u968f\u673a\u503c\n//\n// - range: \u521b\u5efa\u968f\u673a\u503c\u7684\u8303\u56f4\u3002range \u4e00\u5b9a\u662f\u6709\u9650\u7684\u3002\n@inlinable public static func random(in range: ClosedRange<Double>) -> Double\n")),(0,l.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'for _ in 1 ... 3 {\n    print(Double.random(in: 10.0 ..< 20.0))\n}\n// Prints "18.1900709259179"\n// Prints "14.2286325689993"\n// Prints "13.1485686260762"\n\nfor _ in 1 ... 3 {\n    print(Double.random(in: 100.0 ... 200.0))\n}\n// Prints "119.24383834532023"\n// Prints "154.22609654341267"\n// Prints "121.92154109096177"\n')),(0,l.kt)("h3",{id:"\u6267\u884c\u8ba1\u7b97"},"\u6267\u884c\u8ba1\u7b97"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8fd4\u56de\u4e24\u4e2a\u7ed9\u5b9a\u503c\u7684\u4e58\u79ef\u4e0e\u8be5\u503c\u76f8\u52a0\u7684\u7ed3\u679c\uff0c\u8ba1\u7b97\u65f6\u4e0d\u8fdb\u884c\u4e2d\u95f4\u820d\u5165\n//\n// - lhs: \u6dfb\u52a0\u5230\u8be5\u503c\u4e4b\u524d\u8981\u76f8\u4e58\u7684\u503c\u4e4b\u4e00\n// - rhs: \u53e6\u4e00\u4e2a\u503c\u76f8\u4e58\npublic func addingProduct(_ lhs: Double, _ rhs: Double) -> Double\n\n// \u8fd4\u56de\u503c\u7684\u5e73\u65b9\u6839\uff0c\u56db\u820d\u4e94\u5165\u4e3a\u53ef\u8868\u793a\u7684\u503c\npublic func squareRoot() -> Double\n\n// \u5c06\u6b64\u503c\u66ff\u6362\u4e3a\u5176\u5e73\u65b9\u6839\uff0c\u56db\u820d\u4e94\u5165\u4e3a\u53ef\u8868\u793a\u7684\u503c\npublic mutating func formSquareRoot()\n\n// \u8fd4\u56de\u8be5\u503c\u9664\u4ee5\u7ed9\u5b9a\u503c\u7684\u4f59\u6570\n//\n// - other: \u9664\u6b64\u503c\u65f6\u4f7f\u7528\u7684\u503c\n@inlinable public func remainder(dividingBy other: Double) -> Double\n\n// \u5c06\u6b64\u503c\u66ff\u6362\u4e3a\u5176\u81ea\u8eab\u9664\u4ee5\u7ed9\u5b9a\u503c\u7684\u4f59\u6570\n//\n// - other: \u9664\u6b64\u503c\u65f6\u4f7f\u7528\u7684\u503c\n@inlinable public mutating func formRemainder(dividingBy other: Double)\n")),(0,l.kt)("p",null,"\u793a\u4f8b\u5206\u522b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x = 1.0\nlet y = x.addingProduct(2.0, 3.0)\n// y == 7\n\nlet a = 2.0\nlet b = a.addingProduct(3.0, 4.0)\n// b == 14\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x: Double = 16\nlet y = x.squareRoot()\n// y == 4\n\nlet z = 25.0.squareRoot()\n// z == 5\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"var x: Double = 36\nx.formSquareRoot()\n// x == 6\n\nvar y: Double = 49\ny.formSquareRoot()\n// y == 7\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x: Double = 6.0\nlet y = x.remainder(dividingBy: 3.0)\n// y == 0\n\nlet a: Double = 6.0\nlet b = a.remainder(dividingBy: 5.0)\n// b == 1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"var x: Double = 6.0\nx.formRemainder(dividingBy: 3.0)\n// x == 0\n\nvar y: Double = 6.0\ny.formRemainder(dividingBy: 5.0)\n// y == 1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x: Double = 6.0\nlet y = x.truncatingRemainder(dividingBy: 3.0)\n// y == 0\n\nlet a: Double = 6.0\nlet b = a.truncatingRemainder(dividingBy: 5.0)\n// b == 1\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"var x: Double = 6.0\nx.formTruncatingRemainder(dividingBy: 3.0)\n// x == 0\n\nvar y: Double = 6.0\ny.formTruncatingRemainder(dividingBy: 5.0)\n// y == 1\n")),(0,l.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u7ed3\u679c\u6765\u770b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"remainder")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"truncatingRemainder")," \u5e76\u6ca1\u6709\u4ec0\u4e48\u533a\u522b\u5440\u3002\u83ab\u6025\uff0c\u5f80\u4e0b\u770b\u3002"),(0,l.kt)("p",null,"\u4ece\u5b98\u65b9\u6587\u6863 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift/double/remainder(dividingby:)"},"remainder(dividingBy:)")," \u7684\u8ba8\u8bba\u6765\u770b\uff0c\u5b83\u8ba1\u7b97\u7684\u65b9\u5f0f\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5bf9\u4e8e\u4e24\u4e2a\u6709\u9650\u503c x \u548c y\uff0cx \u9664\u4ee5 y \u7684\u4f59\u6570 r \u6ee1\u8db3 `x == y * q + r`\n\n// \u5176\u4e2d q \u662f\u6700\u63a5\u8fd1 `x / y` \u7684\u6574\u6570\uff1a\n//\n// \u6bd4\u5982\uff0c\u5f53 x == 8.0, y == 3.0 \u65f6\uff0cq \u662f\u5927\u4e8e 2.666666666666666 \u7684\u6574\u6570 3\uff0c\u6b64\u65f6 r \u5c31\u7b49\u4e8e -1 \u4e86\nlet a: Double = 8.0\nlet b = a.remainder(dividingBy: 3.0)\n// b == -1\n\n// \u5982\u679c `x / y` \u6070\u597d\u4f4d\u4e8e\u4e24\u4e2a\u6574\u6570\u4e4b\u95f4\uff0c\u5219\u9009\u62e9 `q` \u4e3a\u5076\u6570\u3002\n//\n// \u6bd4\u5982\uff0c\u5f53 x == 9.0, y == 2.0 \u65f6\uff0cq \u662f\u6bd4\u8f83 4.5 \u4e4b\u540e\u7684\u5076\u6570 4\uff0c\u6b64\u65f6 r \u5c31\u7b49\u4e8e 1 \u4e86\nlet a1: Double = 9.0\nlet b1 = a1.remainder(dividingBy: 2.0)\n// b1 == 1\n//\n// \u6bd4\u5982\uff0c\u5f53 x == 11.0, y == 2.0 \u65f6\uff0cq \u662f\u6bd4\u8f83 5.5 \u4e4b\u540e\u7684\u5076\u6570 6\uff0c\u6b64\u65f6 r \u5c31\u7b49\u4e8e -1 \u4e86\nlet a2: Double = 11.0\nlet b2 = a2.remainder(dividingBy: 2.0)\n// b2 == -1\n\n// \u8bf7\u6ce8\u610f\uff0cq \u4e0d\u662f\u7528\u6d6e\u70b9\u7b97\u672f\u8ba1\u7b97\u7684 x / y \uff0c\u5e76\u4e14 q \u53ef\u80fd\u65e0\u6cd5\u7528\u4efb\u4f55\u53ef\u7528\u7684\u6574\u6570\u7c7b\u578b\u8868\u793a\u3002\n")),(0,l.kt)("p",null,"\u4ece\u5b98\u65b9\u6587\u6863 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift/double/truncatingremainder(dividingby:)"},"truncatingRemainder(dividingBy:)")," \u7684\u8ba8\u8bba\u6765\u770b\uff0c\u5b83\u8ba1\u7b97\u7684\u65b9\u5f0f\u662f\u8fd9\u6837\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u6d6e\u70b9\u503c\u6267\u884c\u622a\u65ad\u9664\u6cd5\u4f1a\u4ea7\u751f\u622a\u65ad\u7684\u6574\u6570\u5546\u548c\u4f59\u6570\u3002\n\n// \u5bf9\u4e8e\u503c x \u548c y \u53ca\u5176\u622a\u65ad\u7684\u6574\u6570\u5546 q \uff0c\u4f59\u6570 r \u6ee1\u8db3 `x == y * q + r`\u3002\n//\n// \u6bd4\u5982\uff0c\u5f53 x == 9.0, y == 2.0 \u65f6\uff0cq \u662f\u622a\u65ad 4.5 \u4e4b\u540e\u7684\u6574\u6570 4\uff0c\u6b64\u65f6 r \u5c31\u7b49\u4e8e 1 \u4e86\nlet a3: Double = 9.0\nlet b3 = a3.truncatingRemainder(dividingBy: 2.0)\n// b3 == 1\n//\n// \u6bd4\u5982\uff0c\u5f53 x == 11.0, y == 2.0 \u65f6\uff0cq \u662f\u622a\u65ad 5.5 \u4e4b\u540e\u7684\u6574\u6570 5\uff0c\u6b64\u65f6 r \u5c31\u7b49\u4e8e 1 \u4e86\nlet a4: Double = 11.0\nlet b4 = a4.truncatingRemainder(dividingBy: 2.0)\n// b4 == 1\n")),(0,l.kt)("h3",{id:"\u820d\u5165\u503c"},"\u820d\u5165\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8fd4\u56de\u4f7f\u7528\u6307\u5b9a\u820d\u5165\u89c4\u5219\u820d\u5165\u4e3a\u6574\u6570\u503c\u7684\u503c\npublic func rounded(_ rule: FloatingPointRoundingRule) -> Double\n\npublic func rounded() -> Double\n\npublic mutating func round()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u6d6e\u70b9\u6570\u820d\u5165\u89c4\u5219\npublic enum FloatingPointRoundingRule : Sendable {\n\n    // \u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u5141\u8bb8\u503c\uff1b\u5982\u679c\u4e24\u4e2a\u503c\u540c\u6837\u63a5\u8fd1\uff0c\u5219\u9009\u62e9\u5e45\u5ea6\u8f83\u5927\u7684\u4e00\u4e2a\n    case toNearestOrAwayFromZero\n\n    // \u56db\u820d\u4e94\u5165\u5230\u6700\u63a5\u8fd1\u7684\u5141\u8bb8\u503c\uff1b\u5982\u679c\u4e24\u4e2a\u503c\u540c\u6837\u63a5\u8fd1\uff0c\u5219\u9009\u62e9\u5076\u6570\n    case toNearestOrEven\n\n    // \u820d\u5165\u5230\u5927\u4e8e\u6216\u7b49\u4e8e\u6e90\u7684\u6700\u63a5\u8fd1\u7684\u5141\u8bb8\u503c\n    case up\n\n    // \u820d\u5165\u5230\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6e90\u7684\u6700\u63a5\u8fd1\u7684\u5141\u8bb8\u503c\n    case down\n\n    // \u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u5141\u8bb8\u503c\uff0c\u5176\u5927\u5c0f\u5c0f\u4e8e\u6216\u7b49\u4e8e\u6e90\u7684\u5927\u5c0f\n    case towardZero\n\n    // \u820d\u5165\u5230\u6700\u63a5\u8fd1\u7684\u5141\u8bb8\u503c\uff0c\u5176\u5927\u5c0f\u5927\u4e8e\u6216\u7b49\u4e8e\u6e90\u7684\u5927\u5c0f\n    case awayFromZero\n}\n")),(0,l.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"let x = 6.5\n\n\n// Equivalent to the C 'round' function:\nprint(x.rounded(.toNearestOrAwayFromZero))\n// Prints \"7.0\"\n\n\n// Equivalent to the C 'trunc' function:\nprint(x.rounded(.towardZero))\n// Prints \"6.0\"\n\n\n// Equivalent to the C 'ceil' function:\nprint(x.rounded(.up))\n// Prints \"7.0\"\n\n\n// Equivalent to the C 'floor' function:\nprint(x.rounded(.down))\n// Prints \"6.0\"\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let y = 6.4\nprint(y.rounded())\n// Prints "6.0"\n\nlet z = 6.5\nprint(z.rounded())\n// Prints "7.0"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"var a = 6.4\na.round()\n// a == 6.0\n\nvar b = 6.5\nb.round()\n// b == 7.0\n")),(0,l.kt)("h3",{id:"\u8bbf\u95ee\u6570\u5b57\u5e38\u91cf"},"\u8bbf\u95ee\u6570\u5b57\u5e38\u91cf"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Double")," \u6709 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift/double/zero"},"zero"),"\u3001 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift/double/infinity"},"infinity")," \u7b49\u5e38\u91cf\u53ef\u4f9b\u8bbf\u95ee\u3002\u5176\u4e2d\u4e00\u4e2a\u6bd4\u8f83\u7279\u6b8a\u7684\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/swift/double/pi"},"pi"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'print(Double.pi)\n// Prints "3.14159265358979"\n')))}b.isMDXComponent=!0}}]);