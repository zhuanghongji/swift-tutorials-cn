"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),u=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?l.createElement(f,r(r({ref:n},s),{},{components:t})):l.createElement(f,r({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},71599:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=t(87462),a=(t(67294),t(3905));const i={},r="Int",o={unversionedId:"swift/standard-library/int/index",id:"swift/standard-library/int/index",title:"Int",description:"<OriginalLink",source:"@site/docs/swift/standard-library/int/index.mdx",sourceDirName:"swift/standard-library/int",slug:"/swift/standard-library/int/",permalink:"/swift-tutorials-cn/docs/swift/standard-library/int/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/standard-library/int/index.mdx",tags:[],version:"current",lastUpdatedAt:1693648798,formattedLastUpdatedAt:"2023\u5e749\u67082\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u8bed\u6cd5\u603b\u7ed3",permalink:"/swift-tutorials-cn/docs/swift/reference/summary-of-the-grammar/"},next:{title:"Double",permalink:"/swift-tutorials-cn/docs/swift/standard-library/double/"}},p={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:2},{value:"\u8f6c\u6362\u6d6e\u70b9\u6570",id:"\u8f6c\u6362\u6d6e\u70b9\u6570",level:3},{value:"\u4e0d\u635f\u5931\u7cbe\u5ea6\u7684\u8f6c\u6362",id:"\u4e0d\u635f\u5931\u7cbe\u5ea6\u7684\u8f6c\u6362",level:3},{value:"\u8f6c\u6362\u5b57\u7b26\u4e32",id:"\u8f6c\u6362\u5b57\u7b26\u4e32",level:3},{value:"\u521b\u5efa\u968f\u673a\u6574\u6570",id:"\u521b\u5efa\u968f\u673a\u6574\u6570",level:3},{value:"\u6267\u884c\u8ba1\u7b97",id:"\u6267\u884c\u8ba1\u7b97",level:3},{value:"\u7edd\u5bf9\u503c",id:"\u7edd\u5bf9\u503c",level:3}],s=(d="OriginalLink",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const c={toc:u},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"int"},"Int"),(0,a.kt)(s,{title:"\u6709\u7b26\u53f7\u6574\u6570\u503c\u7c7b\u578b",value:"https://developer.apple.com/documentation/swift/int",mdxType:"OriginalLink"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@frozen public struct Int : FixedWidthInteger, SignedInteger {\n    // ...\n}\n")),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 32 \u4f4d\u5e73\u53f0\u4e0a\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"Int")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"Int32")," \u5927\u5c0f\u76f8\u540c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728 64 \u4f4d\u5e73\u53f0\u4e0a\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},"Int")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"Int64")," \u5927\u5c0f\u76f8\u540c\u3002")),(0,a.kt)("h2",{id:"\u4e3b\u9898"},"\u4e3b\u9898"),(0,a.kt)("h3",{id:"\u8f6c\u6362\u6d6e\u70b9\u6570"},"\u8f6c\u6362\u6d6e\u70b9\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4ece\u7ed9\u5b9a\u7684\u6d6e\u70b9\u503c\u521b\u5efa\u4e00\u4e2a\u6574\u6570\uff0c\u5e76\u5411\u96f6\u820d\u5165\n//\n// - source: \u8981\u8f6c\u6362\u4e3a\u6574\u6570\u7684\u6d6e\u70b9\u503c\npublic init(_ source: Float)\n\npublic init(_ source: Double)\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let f: Float = 21.5\nlet x = Int(f)\n// x == 21\n\nlet d = Double(-21.5)\nlet y = Int(d)\n// y == -21\n")),(0,a.kt)("h3",{id:"\u4e0d\u635f\u5931\u7cbe\u5ea6\u7684\u8f6c\u6362"},"\u4e0d\u635f\u5931\u7cbe\u5ea6\u7684\u8f6c\u6362"),(0,a.kt)("p",null,"\u5982\u679c\u4f20\u9012\u7684\u503c\u65e0\u6cd5\u5728\u4e0d\u635f\u5931\u7cbe\u5ea6\u7684\u60c5\u51b5\u4e0b\u8868\u793a\uff0c\u5219\u8fd9\u4e9b\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\u4f1a\u5bfc\u81f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5982\u679c\u53ef\u4ee5\u7cbe\u786e\u8868\u793a\uff08represented exactly\uff09\uff0c\u5219\u6839\u636e\u7ed9\u5b9a\u7684\u6d6e\u70b9\u503c\u521b\u5efa\u4e00\u4e2a\u6574\u6570\n//\n// - source: \u8981\u8f6c\u6362\u4e3a\u6574\u6570\u7684\u6d6e\u70b9\u503c\npublic init?(exactly source: Float)\n\npublic init?(exactly source: Double)\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let f: Float = 21.0\nlet x = Int(exactly: f)\n// x == Optional(21)\n\nlet d = Double(21.5)\nlet y = Int(exactly: d)\n// y == nil\n")),(0,a.kt)("h3",{id:"\u8f6c\u6362\u5b57\u7b26\u4e32"},"\u8f6c\u6362\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4ece\u7ed9\u5b9a\u5b57\u7b26\u4e32\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6574\u6570\u503c\n//\n// - description: \u6570\u5b57\u7684 ASCII \u8868\u793a\u5f62\u5f0f\uff08representation\uff09\n@inlinable public init?(_ description: String)\n")),(0,a.kt)("p",null,"\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," \u4f20\u9012\u7684\u5b57\u7b26\u4e32\u53ef\u4ee5\u4ee5\u52a0\u53f7\u6216\u51cf\u53f7\u5b57\u7b26\uff08 ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," \uff09\u5f00\u5934\uff0c\u540e\u8ddf\u4e00\u4e2a\u6216\u591a\u4e2a\u6570\u5b57\uff08 ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"9")," \uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let x = Int("123")\n// x == 123\n\nlet y = Int("+123")\n// y == 123\n\nlet z = Int("-123")\n// z == -123\n')),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," \u7684\u683c\u5f0f\u65e0\u6548\uff0c\u6216\u8005\u5b83\u4ee5 10 \u4e3a\u57fa\u6570\u8868\u793a\uff08denotes\uff09\u7684\u503c\u65e0\u6cd5\u8868\u793a\uff0c\u5219\u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u8f6c\u6362\u4f1a\u4ea7\u751f ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'Int(" 100")                       // \u5305\u542b\u7a7a\u683c\nInt("21-50")                      // \u65e0\u6548\u683c\u5f0f\nInt("ff6600")                     // \u5b57\u7b26\u8d8a\u754c\uff08\u975e 0 - 9\uff09\nInt("10000000000000000000000000") // \u8d85\u51fa\u8303\u56f4\n')),(0,a.kt)("h3",{id:"\u521b\u5efa\u968f\u673a\u6574\u6570"},"\u521b\u5efa\u968f\u673a\u6574\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8fd4\u56de\u6307\u5b9a\u8303\u56f4\u5185\u7684\u968f\u673a\u503c\n//\n// - range: \u521b\u5efa\u968f\u673a\u503c\u7684\u8303\u56f4\uff0crange \u4e0d\u80fd\u4e3a\u7a7a\n@inlinable public static func random(in range: Range<Int>) -> Int\n\n// \u8fd4\u56de\u6307\u5b9a\u8303\u56f4\u5185\u7684\u968f\u673a\u503c\n//\n// - range: \u521b\u5efa\u968f\u673a\u503c\u7684\u8303\u56f4\n@inlinable public static func random(in range: ClosedRange<Int>) -> Int\n")),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let x = Int.random(in: 1..<10)\n// x \u662f 1 - 9 \u5176\u4e2d\u4e00\u4e2a\u503c\n\nlet y = Int.random(in: 1...10)\n// y \u662f 1 - 10 \u5176\u4e2d\u4e00\u4e2a\u503c\n")),(0,a.kt)("h3",{id:"\u6267\u884c\u8ba1\u7b97"},"\u6267\u884c\u8ba1\u7b97"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5c06\u6b64\u503c\u66ff\u6362\u4e3a\u5176\u52a0\u6cd5\u9006\u5143\npublic mutating func negate()\n\n// \u8fd4\u56de\u8be5\u503c\u9664\u4ee5\u7ed9\u5b9a\u503c\u7684\u5546\u548c\u4f59\u6570\n//\n// - rhs: \u5c06\u6b64\u503c\u9664\u4ee5\u7684\u503c\n@inlinable public func quotientAndRemainder(dividingBy rhs: Int)\n        -> (quotient: Int, remainder: Int)\n\n// \u5982\u679c\u8be5\u503c\u662f\u7ed9\u5b9a\u503c\u7684\u500d\u6570\uff0c\u5219\u8fd4\u56de true \uff0c\u5426\u5219\u8fd4\u56de false\n//\n//\n@inlinable public func isMultiple(of other: Int) -> Bool\n")),(0,a.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"var x = 1\nx.negate()\n// x == -1\n\nvar y = -1\ny.negate()\n// y == -1\n\nlet z = 10\nlet (a, b) = z.quotientAndRemainder(dividingBy: 2)\n// a == 5\n// b == 0\nlet (c, d) = z.quotientAndRemainder(dividingBy: 3)\n// c == 3\n// d == 1\n\nlet m1 = z.isMultiple(of: 5)\n// m1 == true\nlet m2 = z.isMultiple(of: 6)\n// m2 == false\n")),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"isMultiple(of:)")," \u65f6\u6709\u4e24\u4e2a\u8fb9\u7f18\u60c5\u51b5\u503c\u5f97\u7279\u522b\u6ce8\u610f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," \u4e3a\u96f6\uff0c\u5219 ",(0,a.kt)("inlineCode",{parentName:"li"},"x.isMultiple(of: 0)")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," \uff0c\u5426\u5219\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6709\u7b26\u53f7\u6574\u6570 ",(0,a.kt)("inlineCode",{parentName:"li"},"T"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"T.min.isMultiple(of: -1)")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\uff0c\u5373\u4f7f\u5546\u503c ",(0,a.kt)("inlineCode",{parentName:"li"},"T.min / -1")," \u4e0d\u80fd\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"T")," \u7c7b\u578b\u8868\u793a\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let x = 0\nlet a = x.isMultiple(of: 0)\n// true\n\nlet y = 1\nlet b = y.isMultiple(of: 0)\n// true\n\nlet z = -1\nlet c = z.isMultiple(of: 0)\n// true\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let x = 10\nlet a = x.isMultiple(of: -1)\n// true\n\nlet y = -10\nlet b = y.isMultiple(of: -1)\n// true\n\nlet z = Int16(0xFF)\nlet c = z.isMultiple(of: -1)\n// true\n")),(0,a.kt)("h3",{id:"\u7edd\u5bf9\u503c"},"\u7edd\u5bf9\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"@frozen public struct Int : FixedWidthInteger, SignedInteger {\n    // ...\n}\n\npublic protocol SignedInteger : BinaryInteger, SignedNumeric {\n}\n\n// highlight-next-line\n@inlinable public func abs<T>(_ x: T) -> T where T : Comparable, T : SignedNumeric\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"abs(_:)")," \u662f\u5728 Swift \u4e2d\u5b9a\u4e49\u7684\u9876\u5c42\u51fd\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let x = abs(0)\n// x == 0\n\nlet y = abs(10)\n// y == 10\n\nlet z = abs(-10)\n// z == 10\n")),(0,a.kt)("p",null,"\u5e76\u975e\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Int")," \u4e2d\u5b9a\u4e49\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let x = 10\nlet y = x.abs()\n// error-next-line\n// error: value of type 'Int' has no member 'abs'\n")),(0,a.kt)("p",null,"\u53e6\u5916\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"abs()")," \u51fd\u6570\u4e5f\u662f\u652f\u6301\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Float")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Double")," \u7c7b\u578b\u53d8\u91cf\u53d6\u7edd\u5bf9\u503c\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},"let x: Float = -0.1\nlet a = abs(x)\n// a == 0.1\n\nlet y: Double = -0.2\nlet b = abs(y)\n// b == 0.2\n")))}f.isMDXComponent=!0}}]);