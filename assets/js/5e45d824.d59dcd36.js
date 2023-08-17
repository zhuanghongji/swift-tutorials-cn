"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||p;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,i=new Array(p);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<p;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const p={},i="\u4e0d\u900f\u660e\u7c7b\u578b",l={unversionedId:"swift/guide/opaque-types/index",id:"swift/guide/opaque-types/index",title:"\u4e0d\u900f\u660e\u7c7b\u578b",description:"<OriginalLink",source:"@site/docs/swift/guide/opaque-types/index.mdx",sourceDirName:"swift/guide/opaque-types",slug:"/swift/guide/opaque-types/",permalink:"/swift-tutorials-cn/docs/swift/guide/opaque-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/opaque-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1692234589,formattedLastUpdatedAt:"2023\u5e748\u670817\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u6cdb\u578b",permalink:"/swift-tutorials-cn/docs/swift/guide/generics/"},next:{title:"\u81ea\u52a8\u5f15\u7528\u8ba1\u6570",permalink:"/swift-tutorials-cn/docs/swift/guide/automatic-reference-counting/"}},o={},s=[{value:"\u4e0d\u900f\u660e\u7c7b\u578b\u89e3\u51b3\u7684\u95ee\u9898",id:"\u4e0d\u900f\u660e\u7c7b\u578b\u89e3\u51b3\u7684\u95ee\u9898",level:2},{value:"\u8fd4\u56de\u4e0d\u900f\u660e\u7c7b\u578b",id:"\u8fd4\u56de\u4e0d\u900f\u660e\u7c7b\u578b",level:2},{value:"\u4e0d\u900f\u660e\u7c7b\u578b\u548c\u534f\u8bae\u7c7b\u578b\u4e4b\u95f4\u7684\u5dee\u5f02",id:"\u4e0d\u900f\u660e\u7c7b\u578b\u548c\u534f\u8bae\u7c7b\u578b\u4e4b\u95f4\u7684\u5dee\u5f02",level:2}],u=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},d=u("DocCaution"),c=u("OriginalLink"),m={toc:s},f="wrapper";function g(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e0d\u900f\u660e\u7c7b\u578b"},"\u4e0d\u900f\u660e\u7c7b\u578b"),(0,r.kt)(d,{mdxType:"DocCaution"}),(0,r.kt)(c,{title:"\u9690\u85cf\u6709\u5173\u503c\u7c7b\u578b\u7684\u5b9e\u73b0\u7ec6\u8282",value:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/opaquetypes",mdxType:"OriginalLink"}),(0,r.kt)("p",null,"\u5177\u6709\u4e0d\u900f\u660e\u8fd4\u56de\u7c7b\u578b\u7684\u51fd\u6570\u6216\u65b9\u6cd5\u9690\u85cf\u4e86\u5176\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4fe1\u606f\u3002\u8fd4\u56de\u503c\u4e0d\u662f\u63d0\u4f9b\u5177\u4f53\u7c7b\u578b\u4f5c\u4e3a\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u800c\u662f\u6839\u636e\u5b83\u652f\u6301\u7684\u534f\u8bae\u6765\u63cf\u8ff0\u3002\u9690\u85cf\u7c7b\u578b\u4fe1\u606f\u5728\u6a21\u5757\u548c\u8c03\u7528\u6a21\u5757\u7684\u4ee3\u7801\u4e4b\u95f4\u7684\u8fb9\u754c\u5904\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u8fd4\u56de\u503c\u7684\u57fa\u7840\u7c7b\u578b\u53ef\u4ee5\u4fdd\u6301\u79c1\u6709\u3002\u4e0e\u8fd4\u56de\u7c7b\u578b\u4e3a\u534f\u8bae\u7c7b\u578b\u7684\u503c\u4e0d\u540c\uff0c\u4e0d\u900f\u660e\u7c7b\u578b\u4fdd\u7559\u7c7b\u578b\u6807\u8bc6\u2014\u2014\u7f16\u8bd1\u5668\u53ef\u4ee5\u8bbf\u95ee\u7c7b\u578b\u4fe1\u606f\uff0c\u4f46\u6a21\u5757\u7684\u5ba2\u6237\u7aef\u4e0d\u80fd\u3002"),(0,r.kt)("h2",{id:"\u4e0d\u900f\u660e\u7c7b\u578b\u89e3\u51b3\u7684\u95ee\u9898"},"\u4e0d\u900f\u660e\u7c7b\u578b\u89e3\u51b3\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5047\u8bbe\u60a8\u6b63\u5728\u7f16\u5199\u4e00\u4e2a\u7ed8\u5236 ASCII \u827a\u672f\u56fe\u5f62\u7684\u6a21\u5757\u3002ASCII \u827a\u672f\u5f62\u72b6\u7684\u57fa\u672c\u7279\u5f81\u662f\u4e00\u4e2a draw()\u8fd4\u56de\u8be5\u5f62\u72b6\u7684\u5b57\u7b26\u4e32\u8868\u793a\u7684\u51fd\u6570\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u7528\u4f5c\u534f\u8bae\u7684\u8981\u6c42 Shape\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'protocol Shape {\n    func draw() -> String\n}\n\nstruct Triangle: Shape {\n    var size: Int\n    func draw() -> String {\n       var result: [String] = []\n       for length in 1...size {\n           result.append(String(repeating: "*", count: length))\n       }\n       return result.joined(separator: "\\n")\n    }\n}\nlet smallTriangle = Triangle(size: 3)\nprint(smallTriangle.draw())\n// *\n// **\n// ***\n')),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u6cdb\u578b\u6765\u5b9e\u73b0\u5782\u76f4\u7ffb\u8f6c\u5f62\u72b6\u7b49\u64cd\u4f5c\uff0c\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u6240\u793a\u3002\u4f46\u662f\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u4e00\u4e2a\u91cd\u8981\u7684\u9650\u5236\uff1a\u7ffb\u8f6c\u7684\u7ed3\u679c\u516c\u5f00\u4e86\u7528\u4e8e\u521b\u5efa\u5b83\u7684\u786e\u5207\u6cdb\u578b\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct FlippedShape<T: Shape>: Shape {\n    var shape: T\n    func draw() -> String {\n        let lines = shape.draw().split(separator: "\\n")\n        return lines.reversed().joined(separator: "\\n")\n    }\n}\nlet flippedTriangle = FlippedShape(shape: smallTriangle)\nprint(flippedTriangle.draw())\n// ***\n// **\n// *\n')),(0,r.kt)("p",null,"\u8fd9\u79cd\u5b9a\u4e49\u5c06\u4e24\u4e2a\u5f62\u72b6\u5782\u76f4\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u7ed3\u6784\u7684\u65b9\u6cd5\uff08\u5982\u4e0b\u9762\u7684\u4ee3\u7801\u6240\u793a\uff09\u4f1a\u4ea7\u751f\u7c7b\u4f3c\u4e8e\u5c06\u7ffb\u8f6c\u4e09\u89d2\u5f62\u4e0e\u53e6\u4e00\u4e2a\u4e09\u89d2\u5f62\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u7c7b\u578b\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"JoinedShape<T: Shape, U: Shape>JoinedShape<FlippedShape<Triangle>, Triangle>")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct JoinedShape<T: Shape, U: Shape>: Shape {\n    var top: T\n    var bottom: U\n    func draw() -> String {\n       return top.draw() + "\\n" + bottom.draw()\n    }\n}\nlet joinedTriangles = JoinedShape(top: smallTriangle, bottom: flippedTriangle)\nprint(joinedTriangles.draw())\n// *\n// **\n// ***\n// ***\n// **\n// *\n')),(0,r.kt)("p",null,"\u7531\u4e8e\u9700\u8981\u58f0\u660e\u5b8c\u6574\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u56e0\u6b64\u516c\u5f00\u6709\u5173\u5f62\u72b6\u521b\u5efa\u7684\u8be6\u7ec6\u4fe1\u606f\u5141\u8bb8\u4e0d\u5c5e\u4e8e ASCII \u827a\u672f\u6a21\u5757\u516c\u5171\u63a5\u53e3\u4e00\u90e8\u5206\u7684\u7c7b\u578b\u6cc4\u6f0f\u51fa\u53bb\u3002\u6a21\u5757\u5185\u7684\u4ee3\u7801\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u6784\u5efa\u76f8\u540c\u7684\u5f62\u72b6\uff0c\u4f7f\u7528\u8be5\u5f62\u72b6\u7684\u6a21\u5757\u5916\u7684\u5176\u4ed6\u4ee3\u7801\u4e0d\u5fc5\u8003\u8651\u6709\u5173\u8f6c\u6362\u5217\u8868\u7684\u5b9e\u73b0\u7ec6\u8282\u3002\u5305\u88c5\u5668\u7c7b\u578b\u5bf9\u6a21\u5757\u7684\u7528\u6237\u6765\u8bf4\u5f88\u91cd\u8981\u4e5f\u65e0\u5173\u7d27\u8981\uff0c\u5b83\u4eec\u4e0d\u5e94\u8be5\u662f\u53ef\u89c1\u7684\u3002\u8be5\u6a21\u5757\u7684\u516c\u5171\u63a5\u53e3\u7531\u8fde\u63a5\u548c\u7ffb\u8f6c\u5f62\u72b6\u7b49\u64cd\u4f5c\u7ec4\u6210\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u8fd4\u56de\u53e6\u4e00\u4e2a\u503c\u3002JoinedShapeFlippedShapeShape"),(0,r.kt)("h2",{id:"\u8fd4\u56de\u4e0d\u900f\u660e\u7c7b\u578b"},"\u8fd4\u56de\u4e0d\u900f\u660e\u7c7b\u578b"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5c06\u4e0d\u900f\u660e\u7c7b\u578b\u89c6\u4e3a\u901a\u7528\u7c7b\u578b\u7684\u53cd\u9762\u3002\u901a\u7528\u7c7b\u578b\u8ba9\u8c03\u7528\u51fd\u6570\u7684\u4ee3\u7801\u9009\u62e9\u51fd\u6570\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u5e76\u4ee5\u4ece\u51fd\u6570\u5b9e\u73b0\u4e2d\u62bd\u8c61\u51fa\u6765\u7684\u65b9\u5f0f\u8fd4\u56de\u503c\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u53d6\u51b3\u4e8e\u5176\u8c03\u7528\u8005\u7684\u7c7b\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func max<T>(_ x: T, _ y: T) -> T where T: Comparable { ... }\n")),(0,r.kt)("p",null,"\u8c03\u7528\u7684\u4ee3\u7801\u9009\u62e9\u548c \u7684\u503c\uff0c\u8fd9\u4e9b\u503c\u7684\u7c7b\u578b\u51b3\u5b9a \u7684\u5177\u4f53\u7c7b\u578b\u3002\u8c03\u7528\u4ee3\u7801\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u7b26\u5408\u534f\u8bae\u7684\u7c7b\u578b\u3002\u51fd\u6570\u5185\u7684\u4ee3\u7801\u4ee5\u901a\u7528\u65b9\u5f0f\u7f16\u5199\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u5904\u7406\u8c03\u7528\u8005\u63d0\u4f9b\u7684\u4efb\u4f55\u7c7b\u578b\u3002\u7684\u5b9e\u73b0\u4ec5\u4f7f\u7528\u6240\u6709\u7c7b\u578b\u5171\u4eab\u7684\u529f\u80fd\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"max(_:_:)xyTComparablemax(_:_:)Comparable")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5177\u6709\u4e0d\u900f\u660e\u8fd4\u56de\u7c7b\u578b\u7684\u51fd\u6570\uff0c\u8fd9\u4e9b\u89d2\u8272\u662f\u76f8\u53cd\u7684\u3002\u4e0d\u900f\u660e\u7c7b\u578b\u5141\u8bb8\u51fd\u6570\u5b9e\u73b0\u4ee5\u4e00\u79cd\u4ece\u8c03\u7528\u51fd\u6570\u7684\u4ee3\u7801\u4e2d\u62bd\u8c61\u51fa\u6765\u7684\u65b9\u5f0f\u4e3a\u5176\u8fd4\u56de\u7684\u503c\u9009\u62e9\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u4e0b\u4f8b\u4e2d\u7684\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u68af\u5f62\u800c\u4e0d\u516c\u5f00\u8be5\u5f62\u72b6\u7684\u57fa\u7840\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct Square: Shape {\n    var size: Int\n    func draw() -> String {\n        let line = String(repeating: "*", count: size)\n        let result = Array<String>(repeating: line, count: size)\n        return result.joined(separator: "\\n")\n    }\n}\n\nfunc makeTrapezoid() -> some Shape {\n    let top = Triangle(size: 2)\n    let middle = Square(size: 2)\n    let bottom = FlippedShape(shape: top)\n    let trapezoid = JoinedShape(\n        top: top,\n        bottom: JoinedShape(top: middle, bottom: bottom)\n    )\n    return trapezoid\n}\nlet trapezoid = makeTrapezoid()\nprint(trapezoid.draw())\n// *\n// **\n// **\n// **\n// **\n// *\n')),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u4e2d\u7684\u51fd\u6570\u5c06\u5176\u8fd4\u56de\u7c7b\u578b\u58f0\u660e\u4e3a\uff1b\u7ed3\u679c\uff0c\u8be5\u51fd\u6570\u8fd4\u56de\u7b26\u5408\u534f\u8bae\u7684\u67d0\u4e2a\u7ed9\u5b9a\u7c7b\u578b\u7684\u503c\uff0c\u800c\u4e0d\u6307\u5b9a\u4efb\u4f55\u7279\u5b9a\u7684\u5177\u4f53\u7c7b\u578b\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u7f16\u5199\u53ef\u4ee5\u8ba9\u5b83\u8868\u8fbe\u5176\u516c\u5171\u63a5\u53e3\u7684\u57fa\u672c\u65b9\u9762\u2014\u2014\u5b83\u8fd4\u56de\u7684\u503c\u662f\u4e00\u4e2a\u5f62\u72b6\u2014\u2014\u800c\u65e0\u9700\u4ece\u5176\u516c\u5171\u63a5\u53e3\u7684\u4e00\u90e8\u5206\u4e2d\u521b\u5efa\u5f62\u72b6\u7684\u7279\u5b9a\u7c7b\u578b\u3002\u6b64\u5b9e\u73b0\u4f7f\u7528\u4e24\u4e2a\u4e09\u89d2\u5f62\u548c\u4e00\u4e2a\u6b63\u65b9\u5f62\uff0c\u4f46\u53ef\u4ee5\u91cd\u5199\u8be5\u51fd\u6570\u4ee5\u901a\u8fc7\u5404\u79cd\u5176\u4ed6\u65b9\u5f0f\u7ed8\u5236\u68af\u5f62\uff0c\u800c\u65e0\u9700\u66f4\u6539\u5176\u8fd4\u56de\u7c7b\u578b\u3002makeTrapezoid()some ShapeShapemakeTrapezoid()"),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u5f3a\u8c03\u4e86\u4e0d\u900f\u660e\u8fd4\u56de\u7c7b\u578b\u7c7b\u4f3c\u4e8e\u6cdb\u578b\u7c7b\u578b\u7684\u65b9\u5f0f\u3002\u5185\u90e8\u4ee3\u7801\u53ef\u4ee5\u8fd4\u56de\u5b83\u9700\u8981\u7684\u4efb\u4f55\u7c7b\u578b\uff0c\u53ea\u8981\u8be5\u7c7b\u578b\u7b26\u5408\u534f\u8bae\uff0c\u5c31\u50cf\u8c03\u7528\u4ee3\u7801\u5bf9\u901a\u7528\u51fd\u6570\u6240\u505a\u7684\u90a3\u6837\u3002\u8c03\u7528\u8be5\u51fd\u6570\u7684\u4ee3\u7801\u9700\u8981\u4ee5\u901a\u7528\u65b9\u5f0f\u7f16\u5199\uff0c\u4f8b\u5982\u901a\u7528\u51fd\u6570\u7684\u5b9e\u73b0\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u4f7f\u7528\u8fd4\u56de\u7684\u4efb\u4f55\u503c\u3002makeTrapezoid()ShapeShapemakeTrapezoid()"),(0,r.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5c06\u4e0d\u900f\u660e\u7684\u8fd4\u56de\u7c7b\u578b\u4e0e\u6cdb\u578b\u7ed3\u5408\u8d77\u6765\u3002\u4e0b\u9762\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\u90fd\u8fd4\u56de\u4e00\u4e2a\u7b26\u5408\u534f\u8bae\u7684\u67d0\u79cd\u7c7b\u578b\u7684\u503c Shape\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func flip<T: Shape>(_ shape: T) -> some Shape {\n    return FlippedShape(shape: shape)\n}\nfunc join<T: Shape, U: Shape>(_ top: T, _ bottom: U) -> some Shape {\n    JoinedShape(top: top, bottom: bottom)\n}\n\nlet opaqueJoinedTriangles = join(smallTriangle, flip(smallTriangle))\nprint(opaqueJoinedTriangles.draw())\n// *\n// **\n// ***\n// ***\n// **\n// *\n")),(0,r.kt)("p",null,"\u6b64\u793a\u4f8b\u4e2d\u7684\u503c\u4e0e\u672c\u7ae0\u524d\u9762\u201c\u4e0d\u900f\u660e\u7c7b\u578b\u89e3\u51b3\u7684\u95ee\u9898\u201d\u90e8\u5206\u7684\u6cdb\u578b\u793a\u4f8b\u4e2d\u7684\u503c\u76f8\u540c\u3002\u4f46\u662f\uff0c\u4e0e\u8be5\u793a\u4f8b\u4e2d\u7684\u503c\u4e0d\u540c\uff0c\u5c06\u901a\u7528\u5f62\u72b6\u64cd\u4f5c\u8fd4\u56de\u7684\u57fa\u7840\u7c7b\u578b\u5305\u88c5\u5728\u4e0d\u900f\u660e\u7684\u8fd4\u56de\u7c7b\u578b\u4e2d\uff0c\u4ece\u800c\u9632\u6b62\u8fd9\u4e9b\u7c7b\u578b\u53ef\u89c1\u3002\u8fd9\u4e24\u4e2a\u51fd\u6570\u90fd\u662f\u901a\u7528\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u6240\u4f9d\u8d56\u7684\u7c7b\u578b\u662f\u901a\u7528\u7684\uff0c\u5e76\u4e14\u51fd\u6570\u7684\u7c7b\u578b\u53c2\u6570\u4f20\u9012\u4e86 \u548c \u6240\u9700\u7684\u7c7b\u578b\u4fe1\u606f\u3002opaqueJoinedTrianglesjoinedTrianglesflip(",(0,r.kt)("em",{parentName:"p"},":)join("),":","_",":)FlippedShapeJoinedShape"),(0,r.kt)("p",null,"\u5982\u679c\u5177\u6709\u4e0d\u900f\u660e\u8fd4\u56de\u7c7b\u578b\u7684\u51fd\u6570\u4ece\u591a\u4e2a\u5730\u65b9\u8fd4\u56de\uff0c\u5219\u6240\u6709\u53ef\u80fd\u7684\u8fd4\u56de\u503c\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\u3002\u5bf9\u4e8e\u6cdb\u578b\u51fd\u6570\uff0c\u8be5\u8fd4\u56de\u7c7b\u578b\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u7684\u6cdb\u578b\u7c7b\u578b\u53c2\u6570\uff0c\u4f46\u5b83\u4ecd\u7136\u5fc5\u987b\u662f\u5355\u4e00\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u8fd9\u662f\u5f62\u72b6\u7ffb\u8f6c\u51fd\u6570\u7684\u65e0\u6548\u7248\u672c\uff0c\u5176\u4e2d\u5305\u62ec\u6b63\u65b9\u5f62\u7684\u7279\u6b8a\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func invalidFlip<T: Shape>(_ shape: T) -> some Shape {\n    if shape is Square {\n        return shape // Error: return types don't match\n    }\n    return FlippedShape(shape: shape) // Error: return types don't match\n}\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7528 a \u8c03\u7528\u8fd9\u4e2a\u51fd\u6570 Square\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a Square\uff1b\u5426\u5219\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a. \u8fd9\u8fdd\u53cd\u4e86\u53ea\u8fd4\u56de\u4e00\u79cd\u7c7b\u578b\u7684\u503c\u7684\u8981\u6c42\uff0c\u5e76\u4f7f\u4ee3\u7801\u65e0\u6548\u3002\u4e00\u79cd\u4fee\u590d\u65b9\u6cd5\u662f\u5c06 square \u7684\u7279\u6b8a\u60c5\u51b5\u79fb\u5230 \u7684\u5b9e\u73b0\u4e2d\uff0c\u8fd9\u8ba9\u8be5\u51fd\u6570\u59cb\u7ec8\u8fd4\u56de\u4e00\u4e2a\u503c\uff1aFlippedShapeinvalidFlip(",(0,r.kt)("em",{parentName:"p"},":)invalidFlip("),":)FlippedShapeFlippedShape"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'struct FlippedShape<T: Shape>: Shape {\n    var shape: T\n    func draw() -> String {\n        if shape is Square {\n           return shape.draw()\n        }\n        let lines = shape.draw().split(separator: "\\n")\n        return lines.reversed().joined(separator: "\\n")\n    }\n}\n')),(0,r.kt)("p",null,"\u59cb\u7ec8\u8fd4\u56de\u5355\u4e00\u7c7b\u578b\u7684\u8981\u6c42\u5e76\u4e0d\u59a8\u788d\u60a8\u5728\u4e0d\u900f\u660e\u7684\u8fd4\u56de\u7c7b\u578b\u4e2d\u4f7f\u7528\u6cdb\u578b\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5c06\u5176\u7c7b\u578b\u53c2\u6570\u5408\u5e76\u5230\u5b83\u8fd4\u56de\u503c\u7684\u57fa\u7840\u7c7b\u578b\u4e2d\u7684\u51fd\u6570\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func `repeat`<T: Shape>(shape: T, count: Int) -> some Collection {\n    return Array<T>(repeating: shape, count: count)\n}\n")),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8fd4\u56de\u503c\u7684\u57fa\u7840\u7c7b\u578b\u53d6\u51b3\u4e8e T\uff1a\u65e0\u8bba\u4f20\u9012\u7ed9\u5b83\u4ec0\u4e48\u5f62\u72b6\uff0c\u90fd\u4f1a\u521b\u5efa\u5e76\u8fd4\u56de\u8be5\u5f62\u72b6\u7684\u6570\u7ec4\u3002\u5c3d\u7ba1\u5982\u6b64\uff0c\u8fd4\u56de\u503c\u59cb\u7ec8\u5177\u6709\u76f8\u540c\u7684\u5e95\u5c42\u7c7b\u578b\uff0c\u56e0\u6b64\u5b83\u9075\u5faa\u5177\u6709\u4e0d\u900f\u660e\u8fd4\u56de\u7c7b\u578b\u7684\u51fd\u6570\u5fc5\u987b\u4ec5\u8fd4\u56de\u5355\u4e00\u7c7b\u578b\u7684\u503c\u7684\u8981\u6c42\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"repeat(shape:count:)[T]")),(0,r.kt)("h2",{id:"\u4e0d\u900f\u660e\u7c7b\u578b\u548c\u534f\u8bae\u7c7b\u578b\u4e4b\u95f4\u7684\u5dee\u5f02"},"\u4e0d\u900f\u660e\u7c7b\u578b\u548c\u534f\u8bae\u7c7b\u578b\u4e4b\u95f4\u7684\u5dee\u5f02"),(0,r.kt)("p",null,"\u8fd4\u56de\u4e0d\u900f\u660e\u7c7b\u578b\u770b\u8d77\u6765\u4e0e\u4f7f\u7528\u534f\u8bae\u7c7b\u578b\u4f5c\u4e3a\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u8fd9\u4e24\u79cd\u8fd4\u56de\u7c7b\u578b\u7684\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u4eec\u662f\u5426\u4fdd\u7559\u7c7b\u578b\u6807\u8bc6\u3002\u4e0d\u900f\u660e\u7c7b\u578b\u6307\u7684\u662f\u4e00\u79cd\u7279\u5b9a\u7c7b\u578b\uff0c\u5c3d\u7ba1\u51fd\u6570\u7684\u8c03\u7528\u8005\u65e0\u6cd5\u770b\u5230\u662f\u54ea\u79cd\u7c7b\u578b\uff1b\u534f\u8bae\u7c7b\u578b\u53ef\u4ee5\u5f15\u7528\u4efb\u4f55\u7b26\u5408\u534f\u8bae\u7684\u7c7b\u578b\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u534f\u8bae\u7c7b\u578b\u8ba9\u4f60\u66f4\u7075\u6d3b\u5730\u4e86\u89e3\u5b83\u4eec\u5b58\u50a8\u7684\u503c\u7684\u5e95\u5c42\u7c7b\u578b\uff0c\u800c\u4e0d\u900f\u660e\u7c7b\u578b\u8ba9\u4f60\u5bf9\u8fd9\u4e9b\u5e95\u5c42\u7c7b\u578b\u505a\u51fa\u66f4\u6709\u529b\u7684\u4fdd\u8bc1\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd9\u662f\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"flip(_:)")," \u4f7f\u7528\u534f\u8bae\u7c7b\u578b\u4f5c\u4e3a\u5176\u8fd4\u56de\u7c7b\u578b\u800c\u4e0d\u662f\u4e0d\u900f\u660e\u8fd4\u56de\u7c7b\u578b\u7684\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func protoFlip<T: Shape>(_ shape: T) -> Shape {\n    return FlippedShape(shape: shape)\n}\n")),(0,r.kt)("p",null,"\u6b64\u7248\u672c\u7684\u4e0e \u5177\u6709\u76f8\u540c\u7684\u4e3b\u4f53\uff0c\u5e76\u4e14\u59cb\u7ec8\u8fd4\u56de\u76f8\u540c\u7c7b\u578b\u7684\u503c\u3002\u4e0e \u4e0d\u540c\uff0c\u8fd4\u56de\u7684\u503c\u4e0d\u9700\u8981\u59cb\u7ec8\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\u2014\u2014\u5b83\u53ea\u9700\u8981\u7b26\u5408\u534f\u8bae\u5373\u53ef\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e0e\u5b83\u7684\u8c03\u7528\u8005\u8ba2\u7acb\u4e00\u4e2a\u6bd4\u8ba2\u7acb\u7684\u8981\u5bbd\u677e\u5f97\u591a\u7684 API \u5408\u540c\u3002\u5b83\u4fdd\u7559\u8fd4\u56de\u591a\u79cd\u7c7b\u578b\u503c\u7684\u7075\u6d3b\u6027\uff1aprotoFlip(",(0,r.kt)("em",{parentName:"p"},":)flip("),":)flip(",(0,r.kt)("em",{parentName:"p"},":)protoFlip("),":)ShapeprotoFlip(",(0,r.kt)("em",{parentName:"p"},":)flip("),":)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"func protoFlip<T: Shape>(_ shape: T) -> Shape {\n    if shape is Square {\n        return shape\n    }\n\n    return FlippedShape(shape: shape)\n}\n")),(0,r.kt)("p",null,"\u4ee3\u7801\u7684\u4fee\u8ba2\u7248\u672c\u8fd4\u56de \u7684\u5b9e\u4f8b Square \u6216 \u7684\u5b9e\u4f8b\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u4f20\u5165\u7684\u5f62\u72b6\u3002\u6b64\u51fd\u6570\u8fd4\u56de\u7684\u4e24\u4e2a\u7ffb\u8f6c\u5f62\u72b6\u53ef\u80fd\u5177\u6709\u5b8c\u5168\u4e0d\u540c\u7684\u7c7b\u578b\u3002\u5f53\u7ffb\u8f6c\u540c\u4e00\u5f62\u72b6\u7684\u591a\u4e2a\u5b9e\u4f8b\u65f6\uff0c\u6b64\u51fd\u6570\u7684\u5176\u4ed6\u6709\u6548\u7248\u672c\u53ef\u80fd\u4f1a\u8fd4\u56de\u4e0d\u540c\u7c7b\u578b\u7684\u503c\u3002\u6765\u81ea\u7684\u4e0d\u592a\u5177\u4f53\u7684\u8fd4\u56de\u7c7b\u578b\u4fe1\u606f\u610f\u5473\u7740\u8bb8\u591a\u4f9d\u8d56\u4e8e\u7c7b\u578b\u4fe1\u606f\u7684\u64cd\u4f5c\u5728\u8fd4\u56de\u503c\u4e0a\u4e0d\u53ef\u7528\u3002\u4f8b\u5982\uff0c\u4e0d\u53ef\u80fd\u7f16\u5199\u4e00\u4e2a\u8fd0\u7b97\u7b26\u6765\u6bd4\u8f83\u6b64\u51fd\u6570\u8fd4\u56de\u7684\u7ed3\u679c\u3002FlippedShapeprotoFlip(","_",":)=="),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"let protoFlippedTriangle = protoFlip(smallTriangle)\nlet sameThing = protoFlip(smallTriangle)\nprotoFlippedTriangle == sameThing  // Error\n")),(0,r.kt)("p",null,"\u793a\u4f8b\u6700\u540e\u4e00\u884c\u51fa\u73b0\u9519\u8bef\u7684\u539f\u56e0\u6709\u591a\u79cd\u3002\u76f4\u63a5\u7684\u95ee\u9898\u662f\u5b83 Shape \u6ca1\u6709\u5c06==\u8fd0\u8425\u5546\u4f5c\u4e3a\u5176\u534f\u8bae\u8981\u6c42\u7684\u4e00\u90e8\u5206\u3002\u5982\u679c\u60a8\u5c1d\u8bd5\u6dfb\u52a0\u4e00\u4e2a\uff0c\u60a8\u5c06\u9047\u5230\u7684\u4e0b\u4e00\u4e2a\u95ee\u9898\u662f\u8fd0\u7b97==\u7b26\u9700\u8981\u77e5\u9053\u5176\u5de6\u4fa7\u548c\u53f3\u4fa7\u53c2\u6570\u7684\u7c7b\u578b\u3002\u8fd9\u79cd\u8fd0\u7b97\u7b26\u901a\u5e38\u91c7\u7528 type \u7684\u53c2\u6570 Self\uff0c\u5339\u914d\u91c7\u7528\u534f\u8bae\u7684\u4efb\u4f55\u5177\u4f53\u7c7b\u578b\uff0c\u4f46\u662f Self \u5411\u534f\u8bae\u6dfb\u52a0\u8981\u6c42\u4e0d\u5141\u8bb8\u5728\u5c06\u534f\u8bae\u7528\u4f5c\u7c7b\u578b\u65f6\u53d1\u751f\u7c7b\u578b\u64e6\u9664\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u534f\u8bae\u7c7b\u578b\u4f5c\u4e3a\u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\u53ef\u4ee5\u8ba9\u60a8\u7075\u6d3b\u5730\u8fd4\u56de\u4efb\u4f55\u7b26\u5408\u534f\u8bae\u7684\u7c7b\u578b\u3002\u4f46\u662f\uff0c\u8fd9\u79cd\u7075\u6d3b\u6027\u7684\u4ee3\u4ef7\u662f\u65e0\u6cd5\u5bf9\u8fd4\u56de\u503c\u6267\u884c\u67d0\u4e9b\u64cd\u4f5c\u3002\u8be5\u793a\u4f8b\u663e\u793a\u4e86==\u8fd0\u7b97\u7b26\u5982\u4f55\u4e0d\u53ef\u7528\u2014\u2014\u5b83\u53d6\u51b3\u4e8e\u7279\u5b9a\u7684\u7c7b\u578b\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u4e0d\u4f1a\u901a\u8fc7\u4f7f\u7528\u534f\u8bae\u7c7b\u578b\u6765\u4fdd\u7559\u3002"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u6cd5\u7684\u53e6\u4e00\u4e2a\u95ee\u9898\u662f\u5f62\u72b6\u53d8\u6362\u4e0d\u5d4c\u5957\u3002\u7ffb\u8f6c\u4e09\u89d2\u5f62\u7684\u7ed3\u679c\u662f type \u7684\u503c Shape\uff0c\u5e76\u4e14\u8be5\u51fd\u6570\u91c7\u7528\u7b26\u5408\u534f\u8bae\u7684\u67d0\u79cd\u7c7b\u578b\u7684\u53c2\u6570\u3002\u4f46\u662f\uff0c\u534f\u8bae\u7c7b\u578b\u7684\u503c\u4e0d\u7b26\u5408\u8be5\u534f\u8bae\uff1b\u8fd4\u56de\u7684\u503c\u4e0d\u7b26\u5408\u3002\u8fd9\u610f\u5473\u7740\u5e94\u7528\u591a\u4e2a\u8f6c\u6362\u7684\u4ee3\u7801\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a\u7ffb\u8f6c\u7684\u5f62\u72b6\u4e0d\u662f \u7684\u6709\u6548\u53c2\u6570\u3002protoFlip(",(0,r.kt)("em",{parentName:"p"},":)ShapeprotoFlip("),":)ShapeprotoFlip(protoFlip(smallTriangle))protoFlip(","_",":)"),(0,r.kt)("p",null,"\u76f8\u53cd\uff0c\u4e0d\u900f\u660e\u7c7b\u578b\u4fdd\u7559\u5e95\u5c42\u7c7b\u578b\u7684\u8eab\u4efd\u3002Swift \u53ef\u4ee5\u63a8\u65ad\u5173\u8054\u7c7b\u578b\uff0c\u8fd9\u8ba9\u60a8\u53ef\u4ee5\u5728\u534f\u8bae\u7c7b\u578b\u4e0d\u80fd\u7528\u4f5c\u8fd4\u56de\u503c\u7684\u5730\u65b9\u4f7f\u7528\u4e0d\u900f\u660e\u7684\u8fd4\u56de\u503c\u3002\u4f8b\u5982\uff0c\u8fd9\u91cc\u662f GenericsContainer \u534f\u8bae\u7684\u4e00\u4e2a\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"protocol Container {\n    associatedtype Item\n    var count: Int { get }\n    subscript(i: Int) -> Item { get }\n}\nextension Array: Container { }\n")),(0,r.kt)("p",null,"\u60a8\u4e0d\u80fd\u7528\u4f5c Container \u51fd\u6570\u7684\u8fd4\u56de\u7c7b\u578b\uff0c\u56e0\u4e3a\u8be5\u534f\u8bae\u5177\u6709\u5173\u8054\u7c7b\u578b\u3002\u60a8\u4e5f\u4e0d\u80fd\u5c06\u5b83\u7528\u4f5c\u6cdb\u578b\u8fd4\u56de\u7c7b\u578b\u4e2d\u7684\u7ea6\u675f\uff0c\u56e0\u4e3a\u51fd\u6570\u4f53\u5916\u90e8\u6ca1\u6709\u8db3\u591f\u7684\u4fe1\u606f\u6765\u63a8\u65ad\u6cdb\u578b\u7c7b\u578b\u9700\u8981\u662f\u4ec0\u4e48\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// Error: Protocol with associated types can't be used as a return type.\nfunc makeProtocolContainer<T>(item: T) -> Container {\n    return [item]\n}\n\n// Error: Not enough information to infer C.\nfunc makeProtocolContainer<T, C: Container>(item: T) -> C {\n    return [item]\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0d\u900f\u660e\u7c7b\u578b some Container \u4f5c\u4e3a\u8fd4\u56de\u7c7b\u578b\u8868\u793a\u6240\u9700\u7684 API \u5951\u7ea6\u2014\u2014\u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5bb9\u5668\uff0c\u4f46\u62d2\u7edd\u6307\u5b9a\u5bb9\u5668\u7684\u7c7b\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'func makeOpaqueContainer<T>(item: T) -> some Container {\n    return [item]\n}\nlet opaqueContainer = makeOpaqueContainer(item: 12)\nlet twelve = opaqueContainer[0]\nprint(type(of: twelve))\n// Prints "Int"\n')),(0,r.kt)("p",null,"\u7684\u7c7b\u578b twelve \u88ab\u63a8\u65ad\u4e3a Int\uff0c\u8fd9\u8bf4\u660e\u4e86\u7c7b\u578b\u63a8\u65ad\u9002\u7528\u4e8e\u4e0d\u900f\u660e\u7c7b\u578b\u7684\u4e8b\u5b9e\u3002\u5728 \u7684\u5b9e\u73b0\u4e2d\uff0c\u4e0d\u900f\u660e\u5bb9\u5668\u7684\u5e95\u5c42\u7c7b\u578b\u662f\u3002\u5728\u672c\u4f8b\u4e2d\uff0c\u662f\uff0c\u56e0\u6b64\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\uff0c\u5173\u8054\u7c7b\u578b\u88ab\u63a8\u65ad\u4e3a\u3002\u8fd4\u56de\u7684\u4e0b\u6807\uff0c\u8fd9\u610f\u5473\u7740 \u7684\u7c7b\u578b\u4e5f\u88ab\u63a8\u65ad\u4e3a\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"makeOpaqueContainer(item:)[T]TIntItemIntContainerItemtwelveInt")))}g.isMDXComponent=!0}}]);