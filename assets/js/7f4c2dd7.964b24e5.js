"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const a={},i="FetchResultsCollection",o={unversionedId:"swift-data/model-fetch/fetch-results-collection/index",id:"swift-data/model-fetch/fetch-results-collection/index",title:"FetchResultsCollection",description:"<OriginalSource",source:"@site/docs/swift-data/model-fetch/fetch-results-collection/index.mdx",sourceDirName:"swift-data/model-fetch/fetch-results-collection",slug:"/swift-data/model-fetch/fetch-results-collection/",permalink:"/swift-tutorials-cn/docs/swift-data/model-fetch/fetch-results-collection/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-data/model-fetch/fetch-results-collection/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"swiftdataSidebar",previous:{title:"Predicate",permalink:"/swift-tutorials-cn/docs/swift-data/model-fetch/predicate/"},next:{title:"ModelActor",permalink:"/swift-tutorials-cn/docs/swift-data/concurrency-support/model-actor/"}},s={},c=[{value:"\u8bbf\u95ee\u7279\u5b9a\u7ed3\u679c",id:"\u8bbf\u95ee\u7279\u5b9a\u7ed3\u679c",level:2},{value:"subscript(Int) -&gt; Element",id:"subscriptint---element",level:3},{value:"\u8bbf\u95ee\u7d22\u5f15",id:"\u8bbf\u95ee\u7d22\u5f15",level:2},{value:"startIndex",id:"startindex",level:3},{value:"endIndex",id:"endindex",level:3},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:2},{value:"Index",id:"index",level:3},{value:"Indices",id:"indices",level:3},{value:"Iterator",id:"iterator",level:3},{value:"SubSequence",id:"subsequence",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},u=d("ToBePolishedAfterTranslation"),p=d("OriginalSource"),m={toc:c},f="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fetchresultscollection"},"FetchResultsCollection"),(0,l.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,l.kt)(p,{title:"FetchResultsCollection",url:"https://developer.apple.com/documentation/swiftdata/fetchresultscollection",summary:"\u6709\u6548\u63d0\u4f9b\u5df2\u5b8c\u6210\u63d0\u53d6\u7ed3\u679c\u7684\u96c6\u5408",mdxType:"OriginalSource"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"@available(swift 5.9)\n@available(macOS 14, iOS 17, tvOS 17, watchOS 10, *)\npublic struct FetchResultsCollection<Element> : RandomAccessCollection {\n    // ...\n}\n")),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u7279\u5b9a\u7ed3\u679c"},"\u8bbf\u95ee\u7279\u5b9a\u7ed3\u679c"),(0,l.kt)("h3",{id:"subscriptint---element"},"subscript(Int) -> Element"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8bbf\u95ee\u6307\u5b9a\u4f4d\u7f6e\u7684\u5143\u7d20\n//\n// - position: \u8981\u8bbf\u95ee\u7684\u5143\u7d20\u7684\u4f4d\u7f6e\u3002 position \u5fc5\u987b\u662f\u4e0d\u7b49\u4e8e endIndex \u5c5e\u6027\u7684\u96c6\u5408\u7684\u6709\u6548\u7d22\u5f15\npublic subscript(position: Int) -> Element { get }\n")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u901a\u8fc7\u4e0b\u6807\u8bbf\u95ee\u6570\u7ec4\u7684\u5143\u7d20\u4ee5\u6253\u5370\u5176\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'var streets = ["Adams", "Bryant", "Channing", "Douglas", "Evarts"]\nprint(streets[1])\n// Prints "Bryant"\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u9664\u96c6\u5408\u7ed3\u675f\u7d22\u5f15\u4e4b\u5916\u7684\u4efb\u4f55\u6709\u6548\u7d22\u5f15\u6765\u4e3a\u96c6\u5408\u6dfb\u52a0\u4e0b\u6807\u3002\u7ed3\u675f\u7d22\u5f15\u6307\u7684\u662f\u96c6\u5408\u4e2d\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e4b\u540e\u7684\u4f4d\u7f6e\uff0c\u56e0\u6b64\u5b83\u4e0e\u5143\u7d20\u4e0d\u5bf9\u5e94\u3002"),(0,l.kt)("h2",{id:"\u8bbf\u95ee\u7d22\u5f15"},"\u8bbf\u95ee\u7d22\u5f15"),(0,l.kt)("h3",{id:"startindex"},"startIndex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u975e\u7a7a\u96c6\u5408\u4e2d\u7b2c\u4e00\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\npublic var startIndex: Int { get }\n")),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u5408\u4e3a\u7a7a\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"startIndex")," \u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"endIndex"),"\u3002"),(0,l.kt)("h3",{id:"endindex"},"endIndex"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'// \u96c6\u5408\u7684 "\u8d85\u8fc7\u672b\u5c3e" \u4f4d\u7f6e\uff0c\u5373\u6bd4\u6700\u540e\u4e00\u4e2a\u6709\u6548\u4e0b\u6807\u53c2\u6570\u5927 1 \u7684\u4f4d\u7f6e\npublic var endIndex: Int { get }\n')),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5305\u542b\u96c6\u5408\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u7684\u8303\u56f4\u65f6\uff0c\u8bf7\u5c06\u534a\u5f00\u8303\u56f4\u8fd0\u7b97\u7b26\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"..<"),"\uff09\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"endIndex")," \u7ed3\u5408\u4f7f\u7528\u3002 ",(0,l.kt)("inlineCode",{parentName:"p"},"..<")," \u8fd0\u7b97\u7b26\u521b\u5efa\u4e00\u4e2a\u4e0d\u5305\u542b\u4e0a\u9650\u7684\u8303\u56f4\uff0c\u56e0\u6b64\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"endIndex")," \u4e00\u8d77\u4f7f\u7528\u59cb\u7ec8\u662f\u5b89\u5168\u7684\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let numbers = [10, 20, 30, 40, 50]\nif let index = numbers.firstIndex(of: 30) {\n    print(numbers[index ..< numbers.endIndex])\n}\n// Prints "[30, 40, 50]"\n')),(0,l.kt)("p",null,"\u5982\u679c\u96c6\u5408\u4e3a\u7a7a\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"endIndex")," \u7b49\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"startIndex"),"\u3002"),(0,l.kt)("h2",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,l.kt)("h3",{id:"index"},"Index"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8868\u793a\u96c6\u5408\u4e2d\u4f4d\u7f6e\u7684\u7c7b\u578b\npublic typealias Index = Int\n")),(0,l.kt)("p",null,"\u6709\u6548\u7d22\u5f15\u7531\u6bcf\u4e2a\u5143\u7d20\u7684\u4f4d\u7f6e\u548c\u201c\u8d85\u8fc7\u672b\u5c3e\u201d\u7684\u4f4d\u7f6e\u7ec4\u6210\uff0c\u8be5\u4f4d\u7f6e\u4e0d\u80fd\u7528\u4f5c\u4e0b\u6807\u53c2\u6570\u3002"),(0,l.kt)("h3",{id:"indices"},"Indices"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4e00\u79cd\u7c7b\u578b\uff0c\u8868\u793a\u5bf9\u96c6\u5408\u4e0b\u6807\u6709\u6548\u7684\u7d22\u5f15\uff08\u6309\u5347\u5e8f\u6392\u5217\uff09\npublic typealias Indices = Range<Int>\n")),(0,l.kt)("h3",{id:"iterator"},"Iterator"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u63d0\u4f9b\u96c6\u5408\u8fed\u4ee3\u63a5\u53e3\u5e76\u5c01\u88c5\u5176\u8fed\u4ee3\u72b6\u6001\u7684\u7c7b\u578b\n//\n// \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u96c6\u5408\u901a\u8fc7\u63d0\u4f9b IndexingIterator \u4f5c\u4e3a\u5176\u5173\u8054\u7684 Iterator \u7c7b\u578b\u6765\u9075\u5b88 Sequence \u534f\u8bae\npublic typealias Iterator = IndexingIterator<FetchResultsCollection<Element>>\n")),(0,l.kt)("h3",{id:"subsequence"},"SubSequence"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},"// \u8868\u793a\u8be5\u96c6\u5408\u5143\u7d20\u7684\u8fde\u7eed\u5b50\u8303\u56f4\u7684\u96c6\u5408\u3002\u5b50\u5e8f\u5217\u4e0e\u539f\u59cb\u96c6\u5408\u5171\u4eab\u7d22\u5f15\npublic typealias SubSequence = Slice<FetchResultsCollection<Element>>\n")),(0,l.kt)("p",null,"\u672a\u5b9a\u4e49\u81ea\u5df1\u7684\u96c6\u5408\u7684\u9ed8\u8ba4\u5b50\u5e8f\u5217\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Slice"),"\u3002"))}k.isMDXComponent=!0}}]);