"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=o(n),f=a,k=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},s="\u5d4c\u5957\u7c7b\u578b",l={unversionedId:"swift/guide/nested-types/index",id:"swift/guide/nested-types/index",title:"\u5d4c\u5957\u7c7b\u578b",description:"<OriginalLink",source:"@site/docs/swift/guide/nested-types/index.mdx",sourceDirName:"swift/guide/nested-types",slug:"/swift/guide/nested-types/",permalink:"/swift-tutorials-cn/docs/swift/guide/nested-types/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/nested-types/index.mdx",tags:[],version:"current",lastUpdatedAt:1692234589,formattedLastUpdatedAt:"2023\u5e748\u670817\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u7c7b\u578b\u8f6c\u6362",permalink:"/swift-tutorials-cn/docs/swift/guide/type-casting/"},next:{title:"\u6269\u5c55",permalink:"/swift-tutorials-cn/docs/swift/guide/extensions/"}},u={},o=[{value:"\u5d4c\u5957\u7c7b\u578b\u5b9e\u6218",id:"\u5d4c\u5957\u7c7b\u578b\u5b9e\u6218",level:2},{value:"\u5f15\u7528\u5d4c\u5957\u7c7b\u578b",id:"\u5f15\u7528\u5d4c\u5957\u7c7b\u578b",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},p=c("DocCaution"),d=c("OriginalLink"),f={toc:o},k="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5d4c\u5957\u7c7b\u578b"},"\u5d4c\u5957\u7c7b\u578b"),(0,a.kt)(p,{mdxType:"DocCaution"}),(0,a.kt)(d,{title:"\u5728\u53e6\u4e00\u4e2a\u7c7b\u578b\u7684\u8303\u56f4\u5185\u5b9a\u4e49\u7c7b\u578b",value:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/nestedtypes",mdxType:"OriginalLink"}),(0,a.kt)("p",null,"\u901a\u5e38\u521b\u5efa\u679a\u4e3e\u4ee5\u652f\u6301\u7279\u5b9a\u7c7b\u6216\u7ed3\u6784\u7684\u529f\u80fd\u3002\u540c\u6837\uff0c\u5b9a\u4e49\u5b9e\u7528\u7c7b\u548c\u7ed3\u6784\u7eaf\u7cb9\u662f\u4e3a\u4e86\u5728\u66f4\u590d\u6742\u7c7b\u578b\u7684\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528\u4f1a\u5f88\u65b9\u4fbf\u3002\u4e3a\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0cSwift \u4f7f\u60a8\u80fd\u591f\u5b9a\u4e49\u5d4c\u5957\u7c7b\u578b\uff0c\u4ece\u800c\u5c06\u652f\u6301\u7684\u679a\u4e3e\u3001\u7c7b\u548c\u7ed3\u6784\u5d4c\u5957\u5728\u5b83\u4eec\u6240\u652f\u6301\u7684\u7c7b\u578b\u7684\u5b9a\u4e49\u4e2d\u3002"),(0,a.kt)("p",null,"\u8981\u5c06\u4e00\u4e2a\u7c7b\u578b\u5d4c\u5957\u5728\u53e6\u4e00\u4e2a\u7c7b\u578b\u4e2d\uff0c\u8bf7\u5c06\u5176\u5b9a\u4e49\u5199\u5728\u5b83\u652f\u6301\u7684\u7c7b\u578b\u7684\u5916\u62ec\u53f7\u4e2d\u3002\u7c7b\u578b\u53ef\u4ee5\u6839\u636e\u9700\u8981\u5d4c\u5957\u5230\u4efb\u610f\u591a\u7684\u5c42\u6b21\u3002"),(0,a.kt)("h2",{id:"\u5d4c\u5957\u7c7b\u578b\u5b9e\u6218"},"\u5d4c\u5957\u7c7b\u578b\u5b9e\u6218"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u7ed3\u6784\uff0c\u5b83\u6a21\u62df\u4e86\u4e8c\u5341\u4e00\u70b9\u6e38\u620f\u4e2d\u4f7f\u7528\u7684\u7eb8\u724c\u3002\u8be5\u7ed3\u6784\u5305\u542b\u4e24\u4e2a\u5d4c\u5957\u7684\u679a\u4e3e\u7c7b\u578b\uff0c\u79f0\u4e3a\u548c\u3002BlackjackCardBlackjackCardSuitRank"),(0,a.kt)("p",null,"\u5728 Blackjack \u4e2d\uff0cA \u724c\u7684\u70b9\u6570\u4e3a 1 \u6216 11\u3002\u6b64\u529f\u80fd\u7531\u4e00\u4e2a\u540d\u4e3a \u7684\u7ed3\u6784\u8868\u793a Values\uff0c\u8be5\u7ed3\u6784\u5d4c\u5957\u5728 Rank \u679a\u4e3e\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'struct BlackjackCard {\n\n    // nested Suit enumeration\n    enum Suit: Character {\n        case spades = "\u2660", hearts = "\u2661", diamonds = "\u2662", clubs = "\u2663"\n    }\n\n    // nested Rank enumeration\n    enum Rank: Int {\n        case two = 2, three, four, five, six, seven, eight, nine, ten\n        case jack, queen, king, ace\n        struct Values {\n            let first: Int, second: Int?\n        }\n        var values: Values {\n            switch self {\n            case .ace:\n                return Values(first: 1, second: 11)\n            case .jack, .queen, .king:\n                return Values(first: 10, second: nil)\n            default:\n                return Values(first: self.rawValue, second: nil)\n            }\n        }\n    }\n\n    // BlackjackCard properties and methods\n    let rank: Rank, suit: Suit\n    var description: String {\n        var output = "suit is \\(suit.rawValue),"\n        output += " value is \\(rank.values.first)"\n        if let second = rank.values.second {\n            output += " or \\(second)"\n        }\n        return output\n    }\n}\n')),(0,a.kt)("p",null,"\u679a\u4e3e Suit \u63cf\u8ff0\u4e86\u56db\u79cd\u5e38\u89c1\u7684\u6251\u514b\u724c\u82b1\u8272\uff0c\u4ee5\u53ca Character \u8868\u793a\u5176\u7b26\u53f7\u7684\u539f\u59cb\u503c\u3002"),(0,a.kt)("p",null,"\u679a\u4e3e Rank \u63cf\u8ff0\u4e86\u5341\u4e09\u79cd\u53ef\u80fd\u7684\u6251\u514b\u724c\u7b49\u7ea7\uff0c\u4ee5\u53ca Int \u8868\u793a\u5176\u9762\u503c\u7684\u539f\u59cb\u503c\u3002\uff08\u6b64\u539f\u59cb Int \u503c\u4e0d\u7528\u4e8e Jack\u3001Queen\u3001King \u548c Ace \u724c\u3002\uff09"),(0,a.kt)("p",null,"\u5982\u4e0a\u6240\u8ff0\uff0cRank \u679a\u4e3e\u5b9a\u4e49\u4e86\u81ea\u5df1\u7684\u8fdb\u4e00\u6b65\u5d4c\u5957\u7ed3\u6784\uff0c\u79f0\u4e3a Values. \u8fd9\u4e2a\u7ed3\u6784\u5c01\u88c5\u4e86\u8fd9\u6837\u4e00\u4e2a\u4e8b\u5b9e\uff0c\u5373\u5927\u591a\u6570\u724c\u90fd\u6709\u4e00\u4e2a\u503c\uff0c\u4f46 A \u724c\u6709\u4e24\u4e2a\u503c\u3002\u8be5 Values \u7ed3\u6784\u5b9a\u4e49\u4e86\u4e24\u4e2a\u5c5e\u6027\u6765\u8868\u793a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"first, \u7c7b\u578b Int"),(0,a.kt)("li",{parentName:"ul"},"second\uff0c\u7c7b\u578b Int?\uff0c\u6216\u201c\u53ef\u9009 Int\u201d")),(0,a.kt)("p",null,"Rank \u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e2a\u8ba1\u7b97\u5c5e\u6027 \uff0cvalues \u5b83\u8fd4\u56de Values \u7ed3\u6784\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u6b64\u8ba1\u7b97\u5c5e\u6027\u8003\u8651\u5361\u7247\u7684\u7b49\u7ea7\uff0c\u5e76 Values \u6839\u636e\u5176\u7b49\u7ea7\u4f7f\u7528\u9002\u5f53\u7684\u503c\u521d\u59cb\u5316\u4e00\u4e2a\u65b0\u5b9e\u4f8b\u3002jack \u5b83\u4f7f\u7528\u3001queen\u3001king \u548c\u7684\u7279\u6b8a\u503c ace\u3002\u5bf9\u4e8e\u6570\u5b57\u5361\uff0c\u5b83\u4f7f\u7528\u7b49\u7ea7\u7684\u539f\u59cb Int \u503c\u3002"),(0,a.kt)("p",null,"\u7ed3\u6784\u672c\u8eab\u6709\u4e24\u4e2a\u5c5e\u6027\u2014\u2014\u548c\u3002\u5b83\u8fd8\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u8ba1\u7b97\u5c5e\u6027\uff0c\u5b83\u4f7f\u7528\u5b58\u50a8\u5728\u548c\u4e2d\u7684\u503c\u6765\u6784\u5efa\u5bf9\u5361\u7247\u540d\u79f0\u548c\u503c\u7684\u63cf\u8ff0\u3002\u8be5\u5c5e\u6027\u4f7f\u7528\u53ef\u9009\u7ed1\u5b9a\u6765\u68c0\u67e5\u662f\u5426\u6709\u7b2c\u4e8c\u4e2a\u503c\u8981\u663e\u793a\uff0c\u5982\u679c\u6709\uff0c\u5219\u4e3a\u7b2c\u4e8c\u4e2a\u503c\u63d2\u5165\u989d\u5916\u7684\u63cf\u8ff0\u8be6\u7ec6\u4fe1\u606f\u3002BlackjackCardranksuitdescriptionranksuitdescription"),(0,a.kt)("p",null,"\u56e0\u4e3a\u662f\u4e00\u4e2a\u6ca1\u6709\u81ea\u5b9a\u4e49\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\u7684\u7ed3\u6784\uff0c\u6240\u4ee5\u5b83\u6709\u4e00\u4e2a\u9690\u5f0f\u6210\u5458\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\uff0c\u5982\u7ed3\u6784\u7c7b\u578b\u7684\u6210\u5458\u521d\u59cb\u503c\u8bbe\u5b9a\u9879\u4e2d\u6240\u8ff0\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u6b64\u521d\u59cb\u5316\u7a0b\u5e8f\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u540d\u4e3a\u7684\u65b0\u5e38\u91cf\uff1aBlackjackCardtheAceOfSpades"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let theAceOfSpades = BlackjackCard(rank: .ace, suit: .spades)\nprint("theAceOfSpades: \\(theAceOfSpades.description)")\n// Prints "theAceOfSpades: suit is \u2660, value is 1 or 11"\n')),(0,a.kt)("p",null,"\u5373\u4f7f RankandSuit \u5d4c\u5957\u5728 \u4e2d\uff0c\u5b83\u4eec\u7684\u7c7b\u578b\u4e5f\u53ef\u4ee5\u4ece\u4e0a\u4e0b\u6587\u4e2d\u63a8\u65ad\u51fa\u6765\uff0c\u56e0\u6b64\u8fd9\u4e2a\u5b9e\u4f8b\u7684\u521d\u59cb\u5316\u80fd\u591f\u4ec5\u901a\u8fc7\u5b83\u4eec\u7684\u6848\u4f8b\u540d\u79f0\uff08\u548c\uff09\u6765\u5f15\u7528\u679a\u4e3e\u6848\u4f8b\u3002\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u8be5\u5c5e\u6027\u6b63\u786e\u5730\u62a5\u544a\u9ed1\u6843 A \u7684\u503c\u4e3a\u6216\u3002BlackjackCard.ace.spadesdescription111"),(0,a.kt)("h2",{id:"\u5f15\u7528\u5d4c\u5957\u7c7b\u578b"},"\u5f15\u7528\u5d4c\u5957\u7c7b\u578b"),(0,a.kt)("p",null,"\u8981\u5728\u5176\u5b9a\u4e49\u4e0a\u4e0b\u6587\u4e4b\u5916\u4f7f\u7528\u5d4c\u5957\u7c7b\u578b\uff0c\u8bf7\u5728\u5176\u540d\u79f0\u524d\u52a0\u4e0a\u5d4c\u5957\u7c7b\u578b\u7684\u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let heartsSymbol = BlackjackCard.Suit.hearts.rawValue\n// heartsSymbol is "\u2661"\n')),(0,a.kt)("p",null,"Suit \u5bf9\u4e8e\u4e0a\u9762\u7684\u793a\u4f8b\uff0c\u8fd9\u4f7f\u5f97\u3001Rank \u548c\u7684\u540d\u79f0\u6709\u610f Values \u4fdd\u6301\u7b80\u77ed\uff0c\u56e0\u4e3a\u5b83\u4eec\u7684\u540d\u79f0\u81ea\u7136\u7531\u5b9a\u4e49\u5b83\u4eec\u7684\u4e0a\u4e0b\u6587\u9650\u5b9a\u3002"))}m.isMDXComponent=!0}}]);