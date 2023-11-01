"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4667],{60926:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=i(85893),s=i(11151);const r={},l="\u6269\u5c55",c={id:"swift/guide/extensions/index",title:"\u6269\u5c55",description:"<OriginalSource",source:"@site/docs/swift/guide/extensions/index.mdx",sourceDirName:"swift/guide/extensions",slug:"/swift/guide/extensions/",permalink:"/swift-tutorials-cn/docs/swift/guide/extensions/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift/guide/extensions/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"swiftSidebar",previous:{title:"\u5d4c\u5957\u7c7b\u578b",permalink:"/swift-tutorials-cn/docs/swift/guide/nested-types/"},next:{title:"\u534f\u8bae",permalink:"/swift-tutorials-cn/docs/swift/guide/protocols/"}},o={},d=[{value:"\u6269\u5c55\u8bed\u6cd5",id:"\u6269\u5c55\u8bed\u6cd5",level:2},{value:"\u8ba1\u7b97\u5c5e\u6027",id:"\u8ba1\u7b97\u5c5e\u6027",level:2},{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"\u6539\u53d8\u5b9e\u4f8b\u65b9\u6cd5",id:"\u6539\u53d8\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"\u4e0b\u6807",id:"\u4e0b\u6807",level:2},{value:"\u5d4c\u5957\u7c7b\u578b",id:"\u5d4c\u5957\u7c7b\u578b",level:2}];function a(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components},{OriginalSource:i,ToBePolishedAfterTranslation:r}=e;return i||x("OriginalSource",!0),r||x("ToBePolishedAfterTranslation",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u6269\u5c55",children:"\u6269\u5c55"}),"\n",(0,t.jsx)(r,{}),"\n",(0,t.jsx)(i,{title:"Extensions",url:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/extensions",summary:"\u5411\u73b0\u6709\u7c7b\u578b\u6dfb\u52a0\u529f\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u4e3a\u73b0\u6709\u7c7b\u3001\u7ed3\u6784\u3001\u679a\u4e3e\u6216\u534f\u8bae\u7c7b\u578b\u6dfb\u52a0\u65b0\u529f\u80fd\u3002\u8fd9\u5305\u62ec\u6269\u5c55\u4f60\u65e0\u6743\u8bbf\u95ee\u539f\u59cb\u6e90\u4ee3\u7801\u7684\u7c7b\u578b\u7684\u80fd\u529b\uff08\u79f0\u4e3a\u8ffd\u6eaf\u5efa\u6a21\uff09\u3002\u6269\u5c55\u7c7b\u4f3c\u4e8e Objective-C \u4e2d\u7684\u7c7b\u522b\u3002\uff08\u4e0e Objective-C \u7c7b\u522b\u4e0d\u540c\uff0cSwift \u6269\u5c55\u6ca1\u6709\u540d\u79f0\u3002\uff09"}),"\n",(0,t.jsx)(e.p,{children:"Swift \u4e2d\u7684\u6269\u5c55\u53ef\u4ee5\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6dfb\u52a0\u8ba1\u7b97\u5b9e\u4f8b\u5c5e\u6027\u548c\u8ba1\u7b97\u7c7b\u578b\u5c5e\u6027"}),"\n",(0,t.jsx)(e.li,{children:"\u5b9a\u4e49\u5b9e\u4f8b\u65b9\u6cd5\u548c\u7c7b\u578b\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.li,{children:"\u63d0\u4f9b\u65b0\u7684\u521d\u59cb\u5316\u5668"}),"\n",(0,t.jsx)(e.li,{children:"\u5b9a\u4e49\u4e0b\u6807"}),"\n",(0,t.jsx)(e.li,{children:"\u5b9a\u4e49\u548c\u4f7f\u7528\u65b0\u7684\u5d4c\u5957\u7c7b\u578b"}),"\n",(0,t.jsx)(e.li,{children:"\u4f7f\u73b0\u6709\u7c7b\u578b\u7b26\u5408\u534f\u8bae"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u5728 Swift \u4e2d\uff0c\u4f60\u751a\u81f3\u53ef\u4ee5\u6269\u5c55\u534f\u8bae\u4ee5\u63d0\u4f9b\u5176\u8981\u6c42\u7684\u5b9e\u73b0\u6216\u6dfb\u52a0\u7b26\u5408\u7c7b\u578b\u53ef\u4ee5\u5229\u7528\u7684\u989d\u5916\u529f\u80fd\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u534f\u8bae\u6269\u5c55\u3002"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u4e3a\u7c7b\u578b\u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u4f46\u4e0d\u80fd\u8986\u76d6\u73b0\u6709\u529f\u80fd\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u6269\u5c55\u8bed\u6cd5",children:"\u6269\u5c55\u8bed\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u7528\u5173\u952e\u5b57\u58f0\u660e\u6269\u5c55 ",(0,t.jsx)(e.code,{children:"extension"})," \uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"extension SomeType {\n    // new functionality to add to SomeType goes here\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u6269\u5c55\u73b0\u6709\u7c7b\u578b\uff0c\u4f7f\u5176\u91c7\u7528\u4e00\u79cd\u6216\u591a\u79cd\u534f\u8bae\u3002\u8981\u6dfb\u52a0\u534f\u8bae\u4e00\u81f4\u6027\uff0c\u4f60\u53ef\u4ee5\u50cf\u4e3a\u7c7b\u6216\u7ed3\u6784\u7f16\u5199\u534f\u8bae\u540d\u79f0\u4e00\u6837\u7f16\u5199\u534f\u8bae\u540d\u79f0\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"extension SomeType: SomeProtocol, AnotherProtocol {\n    // implementation of protocol requirements goes here\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6dfb\u52a0\u534f\u8bae\u4e00\u81f4\u6027\u5728 Adding Protocol Conformance with an Extension \u4e2d\u6709\u6240\u63cf\u8ff0\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u7528\u4e8e\u6269\u5c55\u73b0\u6709\u7684\u901a\u7528\u7c7b\u578b\uff0c\u5982\u6269\u5c55\u901a\u7528\u7c7b\u578b\u4e2d\u6240\u8ff0\u3002\u4f60\u8fd8\u53ef\u4ee5\u6269\u5c55\u6cdb\u578b\u7c7b\u578b\u4ee5\u6709\u6761\u4ef6\u5730\u6dfb\u52a0\u529f\u80fd\uff0c\u5982\u4f7f\u7528\u6cdb\u578b Where \u5b50\u53e5\u7684\u6269\u5c55\u4e2d\u6240\u8ff0\u3002"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u5982\u679c\u4f60\u5b9a\u4e49\u6269\u5c55\u4ee5\u5411\u73b0\u6709\u7c7b\u578b\u6dfb\u52a0\u65b0\u529f\u80fd\uff0c\u5219\u65b0\u529f\u80fd\u5c06\u5728\u8be5\u7c7b\u578b\u7684\u6240\u6709\u73b0\u6709\u5b9e\u4f8b\u4e0a\u53ef\u7528\uff0c\u5373\u4f7f\u5b83\u4eec\u662f\u5728\u5b9a\u4e49\u6269\u5c55\u4e4b\u524d\u521b\u5efa\u7684\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u8ba1\u7b97\u5c5e\u6027",children:"\u8ba1\u7b97\u5c5e\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u5c06\u8ba1\u7b97\u5b9e\u4f8b\u5c5e\u6027\u548c\u8ba1\u7b97\u7c7b\u578b\u5c5e\u6027\u6dfb\u52a0\u5230\u73b0\u6709\u7c7b\u578b\u3002\u8be5\u793a\u4f8b\u5c06\u4e94\u4e2a\u8ba1\u7b97\u5b9e\u4f8b\u5c5e\u6027\u6dfb\u52a0\u5230 Swift \u7684\u5185\u7f6e Double \u7c7b\u578b\uff0c\u4ee5\u63d0\u4f9b\u5bf9\u4f7f\u7528\u8ddd\u79bb\u5355\u4f4d\u7684\u57fa\u672c\u652f\u6301\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:'extension Double {\n    var km: Double { return self * 1_000.0 }\n    var m: Double { return self }\n    var cm: Double { return self / 100.0 }\n    var mm: Double { return self / 1_000.0 }\n    var ft: Double { return self / 3.28084 }\n}\nlet oneInch = 25.4.mm\nprint("One inch is \\(oneInch) meters")\n// Prints "One inch is 0.0254 meters"\nlet threeFeet = 3.ft\nprint("Three feet is \\(threeFeet) meters")\n// Prints "Three feet is 0.914399970739201 meters"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e9b\u8ba1\u7b97\u5c5e\u6027\u8868\u793a\u4e00\u4e2a Double \u503c\u5e94\u8be5\u88ab\u8ba4\u4e3a\u662f\u4e00\u4e2a\u7279\u5b9a\u7684\u957f\u5ea6\u5355\u4f4d\u3002\u867d\u7136\u5b83\u4eec\u662f\u4f5c\u4e3a\u8ba1\u7b97\u5c5e\u6027\u5b9e\u73b0\u7684\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528\u70b9\u8bed\u6cd5\u5c06\u8fd9\u4e9b\u5c5e\u6027\u7684\u540d\u79f0\u9644\u52a0\u5230\u6d6e\u70b9\u6587\u5b57\u503c\uff0c\u4f5c\u4e3a\u4f7f\u7528\u8be5\u6587\u5b57\u503c\u6267\u884c\u8ddd\u79bb\u8f6c\u6362\u7684\u4e00\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,t.jsx)(e.p,{children:'\u5728\u8be5\u793a\u4f8b\u4e2d\uff0cDouble \u503c\u88ab\u8ba4\u4e3a\u8868\u793a"\u4e00\u7c73"\u3002\u8fd9\u5c31\u662f\u8ba1\u7b97\u5c5e\u6027\u8fd4\u56de\u7684\u539f\u56e0\u2014\u2014\u8868\u8fbe\u5f0f\u88ab\u8ba4\u4e3a\u8ba1\u7b97\u4e86 \u7684\u503c\u30021.0mself1.mDouble1.0'}),"\n",(0,t.jsx)(e.p,{children:"\u5176\u5b83\u5355\u4f4d\u9700\u8981\u4e00\u4e9b\u8f6c\u6362\u624d\u80fd\u8868\u793a\u4e3a\u4ee5\u7c73\u4e3a\u5355\u4f4d\u6d4b\u91cf\u7684\u503c\u3002\u4e00\u516c\u91cc\u4e0e 1,000 \u7c73\u76f8\u540c\uff0c\u56e0\u6b64 km \u8ba1\u7b97\u7684\u5c5e\u6027\u5c06\u503c\u4e58\u4ee5\u8f6c\u6362\u4e3a\u4ee5\u7c73\u8868\u793a\u7684\u6570\u5b57\u3002\u540c\u6837\uff0c\u4e00\u7c73\u6709 3.28084 \u82f1\u5c3a\uff0c\u56e0\u6b64\u8ba1\u7b97\u5c5e\u6027\u5c06\u57fa\u7840\u503c\u9664\u4ee5\uff0c\u5c06\u5176\u4ece\u82f1\u5c3a\u8f6c\u6362\u4e3a\u7c73\u30021_000.00ftDouble3.28084"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e9b\u5c5e\u6027\u662f\u53ea\u8bfb\u7684\u8ba1\u7b97\u5c5e\u6027\uff0c\u56e0\u6b64 get \u4e3a\u7b80\u6d01\u8d77\u89c1\uff0c\u5b83\u4eec\u6ca1\u6709\u5173\u952e\u5b57\u8868\u793a\u3002\u5b83\u4eec\u7684\u8fd4\u56de\u503c\u662f \u7c7b\u578b\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u63a5\u53d7 Doublea \u7684\u4efb\u4f55\u5730\u65b9\u7684\u6570\u5b66\u8ba1\u7b97\u4e2d\u4f7f\u7528\uff1aDouble"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:'let aMarathon = 42.km + 195.m\nprint("A marathon is \\(aMarathon) meters long")\n// Prints "A marathon is 42195.0 meters long"\n'})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u6dfb\u52a0\u65b0\u7684\u8ba1\u7b97\u5c5e\u6027\uff0c\u4f46\u4e0d\u80fd\u6dfb\u52a0\u5b58\u50a8\u5c5e\u6027\uff0c\u4e5f\u4e0d\u80fd\u5411\u73b0\u6709\u5c5e\u6027\u6dfb\u52a0\u5c5e\u6027\u89c2\u5bdf\u5668\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u521d\u59cb\u5316\u5668",children:"\u521d\u59cb\u5316\u5668"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u5411\u73b0\u6709\u7c7b\u578b\u6dfb\u52a0\u65b0\u7684\u521d\u59cb\u5316\u5668\u3002\u8fd9\u4f7f\u4f60\u80fd\u591f\u6269\u5c55\u5176\u5b83\u7c7b\u578b\u4ee5\u63a5\u53d7\u4f60\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u7c7b\u578b\u4f5c\u4e3a\u521d\u59cb\u5316\u53c2\u6570\uff0c\u6216\u63d0\u4f9b\u672a\u5305\u542b\u5728\u8be5\u7c7b\u578b\u7684\u539f\u59cb\u5b9e\u73b0\u4e2d\u7684\u5176\u5b83\u521d\u59cb\u5316\u9009\u9879\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u5411\u7c7b\u6dfb\u52a0\u65b0\u7684\u4fbf\u5229\u521d\u59cb\u5316\u5668\uff0c\u4f46\u4e0d\u80fd\u5411\u7c7b\u6dfb\u52a0\u65b0\u7684\u6307\u5b9a\u521d\u59cb\u5316\u5668\u6216\u53cd\u521d\u59cb\u5316\u5668\u3002\u6307\u5b9a\u7684\u521d\u59cb\u5316\u5668\u548c\u53cd\u521d\u59cb\u5316\u5668\u5fc5\u987b\u59cb\u7ec8\u7531\u539f\u59cb\u7c7b\u5b9e\u73b0\u63d0\u4f9b\u3002"}),"\n",(0,t.jsx)(e.p,{children:'\u5982\u679c\u4f60\u4f7f\u7528\u6269\u5c55\u5c06\u521d\u59cb\u5316\u5668\u6dfb\u52a0\u5230\u4e3a\u5176\u6240\u6709\u5b58\u50a8\u5c5e\u6027\u63d0\u4f9b\u9ed8\u8ba4\u503c\u4e14\u672a\u5b9a\u4e49\u4efb\u4f55\u81ea\u5b9a\u4e49\u521d\u59cb\u5316\u5668\u7684\u503c\u7c7b\u578b\uff0c\u5219\u53ef\u4ee5\u4ece\u6269\u5c55\u7684\u521d\u59cb\u5316\u5668\u4e2d\u8c03\u7528\u8be5\u503c\u7c7b\u578b\u7684\u9ed8\u8ba4\u521d\u59cb\u5316\u5668\u548c\u6210\u5458\u521d\u59cb\u5316\u5668. \u5982\u679c\u4f60\u5c06\u521d\u59cb\u5316\u5668\u7f16\u5199\u4e3a\u503c\u7c7b\u578b\u7684\u539f\u59cb\u5b9e\u73b0\u7684\u4e00\u90e8\u5206\uff0c\u60c5\u51b5\u5c31\u4e0d\u4f1a\u5982\u6b64\uff0c\u5982"\u503c\u7c7b\u578b\u7684\u521d\u59cb\u5316\u5668\u59d4\u6d3e"\u4e2d\u6240\u8ff0\u3002'}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u6269\u5c55\u5c06\u521d\u59cb\u5316\u5668\u6dfb\u52a0\u5230\u5728\u53e6\u4e00\u4e2a\u6a21\u5757\u4e2d\u58f0\u660e\u7684\u7ed3\u6784\u4e2d\uff0c\u5219\u65b0\u7684\u521d\u59cb\u5316\u5668\u65e0\u6cd5\u8bbf\u95ee\uff0cself \u76f4\u5230\u5b83\u4ece\u5b9a\u4e49\u6a21\u5757\u8c03\u7528\u521d\u59cb\u5316\u5668\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49 Rect \u7ed3\u6784\u6765\u8868\u793a\u4e00\u4e2a\u51e0\u4f55\u77e9\u5f62\u3002Size \u8be5\u793a\u4f8b\u8fd8\u5b9a\u4e49\u4e86\u4e24\u4e2a\u540d\u4e3a and \u7684\u652f\u6301\u7ed3\u6784 Point\uff0c\u5b83\u4eec\u90fd\u4e3a\u5176\u6240\u6709\u5c5e\u6027\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff1a0.0"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"struct Size {\n    var width = 0.0, height = 0.0\n}\nstruct Point {\n    var x = 0.0, y = 0.0\n}\nstruct Rect {\n    var origin = Point()\n    var size = Size()\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u56e0\u4e3a\u8be5\u7ed3\u6784\u4e3a\u5176\u6240\u6709\u5c5e\u6027\u63d0\u4f9b\u9ed8\u8ba4\u503c\uff0c\u6240\u4ee5\u5b83\u4f1a\u81ea\u52a8\u63a5\u6536\u9ed8\u8ba4\u521d\u59cb\u5316\u5668\u548c\u6210\u5458\u521d\u59cb\u5316\u5668\uff0c\u5982\u9ed8\u8ba4\u521d\u59cb\u5316\u5668 Rect \u4e2d\u6240\u8ff0\u3002\u8fd9\u4e9b\u521d\u59cb\u5316\u5668\u53ef\u7528\u4e8e\u521b\u5efa\u65b0\u5b9e\u4f8b\uff1aRect"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"let defaultRect = Rect()\nlet memberwiseRect = Rect(origin: Point(x: 2.0, y: 2.0),\n    size: Size(width: 5.0, height: 5.0))\n\u4f60\u53ef\u4ee5\u6269\u5c55\u8be5Rect\u7ed3\u6784\u4ee5\u63d0\u4f9b\u4e00\u4e2a\u989d\u5916\u7684\u521d\u59cb\u5316\u5668\uff0c\u8be5\u521d\u59cb\u5316\u5668\u91c7\u7528\u7279\u5b9a\u7684\u4e2d\u5fc3\u70b9\u548c\u5927\u5c0f\uff1a\n\nextension Rect {\n    init(center: Point, size: Size) {\n        let originX = center.x - (size.width / 2)\n        let originY = center.y - (size.height / 2)\n        self.init(origin: Point(x: originX, y: originY), size: size)\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u65b0\u7684\u521d\u59cb\u5316\u5668\u9996\u5148\u6839\u636e\u63d0\u4f9b\u7684 center \u70b9\u548c size \u503c\u8ba1\u7b97\u4e00\u4e2a\u5408\u9002\u7684\u539f\u70b9\u3002\u7136\u540e\u521d\u59cb\u5316\u5668\u8c03\u7528\u7ed3\u6784\u7684\u81ea\u52a8\u6210\u5458\u521d\u59cb\u5316\u5668\uff0c\u5b83\u5c06\u65b0\u7684\u539f\u70b9\u548c\u5927\u5c0f\u503c\u5b58\u50a8\u5728\u9002\u5f53\u7684\u5c5e\u6027\u4e2d\uff1ainit(origin:size:)"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"let centerRect = Rect(center: Point(x: 4.0, y: 4.0),\n    size: Size(width: 3.0, height: 3.0))\n// centerRect's origin is (2.5, 2.5) and its size is (3.0, 3.0)\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u5982\u679c\u4f60\u63d0\u4f9b\u4e00\u4e2a\u5e26\u6709\u6269\u5c55\u7684\u65b0\u521d\u59cb\u5316\u5668\uff0c\u4f60\u4ecd\u7136\u6709\u8d23\u4efb\u786e\u4fdd\u5728\u521d\u59cb\u5316\u5668\u5b8c\u6210\u540e\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u88ab\u5b8c\u5168\u521d\u59cb\u5316\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u65b9\u6cd5",children:"\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u5411\u73b0\u6709\u7c7b\u578b\u6dfb\u52a0\u65b0\u7684\u5b9e\u4f8b\u65b9\u6cd5\u548c\u7c7b\u578b\u65b9\u6cd5\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u6dfb\u52a0\u4e86\u4e00\u4e2a\u8c03\u7528 repetitions \u8be5 Int \u7c7b\u578b\u7684\u65b0\u5b9e\u4f8b\u65b9\u6cd5\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"extension Int {\n    func repetitions(task: () -> Void) {\n        for _ in 0..<self {\n            task()\n        }\n    }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u8be5 ",(0,t.jsx)(e.code,{children:"repetitions(task:)"})," \u65b9\u6cd5\u91c7\u7528 type \u7684\u5355\u4e2a\u53c2\u6570 ",(0,t.jsx)(e.code,{children:"() -> Void"}),"\uff0c\u8868\u793a\u4e00\u4e2a\u6ca1\u6709\u53c2\u6570\u4e14\u4e0d\u8fd4\u56de\u503c\u7684\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u5b9a\u4e49\u6b64\u6269\u5c55\u540e\uff0c\u4f60\u53ef\u4ee5\u5bf9 ",(0,t.jsx)(e.code,{children:"repetitions(task:)"})," \u4efb\u4f55\u6574\u6570\u8c03\u7528\u8be5\u65b9\u6cd5\u4ee5\u6267\u884c\u591a\u6b21\u4efb\u52a1\uff1a"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:'3.repetitions {\n    print("Hello!")\n}\n// Hello!\n// Hello!\n// Hello!\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u6539\u53d8\u5b9e\u4f8b\u65b9\u6cd5",children:"\u6539\u53d8\u5b9e\u4f8b\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.p,{children:"\u6dfb\u52a0\u4e86\u6269\u5c55\u7684\u5b9e\u4f8b\u65b9\u6cd5\u4e5f\u53ef\u4ee5\u4fee\u6539\uff08\u6216\u6539\u53d8\uff09\u5b9e\u4f8b\u672c\u8eab\u3002\u4fee\u6539 self \u6216\u5176\u5c5e\u6027\u7684\u7ed3\u6784\u548c\u679a\u4e3e\u65b9\u6cd5\u5fc5\u987b\u5c06\u5b9e\u4f8b\u65b9\u6cd5\u6807\u8bb0\u4e3a mutating\uff0c\u5c31\u50cf\u4ece\u539f\u59cb\u5b9e\u73b0\u4e2d\u6539\u53d8\u65b9\u6cd5\u4e00\u6837\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u9762\u7684\u793a\u4f8b\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684 mutating \u65b9\u6cd5\uff0c\u8c03\u7528 squareSwift \u7684 Int \u7c7b\u578b\uff0c\u5b83\u5bf9\u539f\u59cb\u503c\u8fdb\u884c\u5e73\u65b9\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"extension Int {\n    mutating func square() {\n        self = self * self\n    }\n}\nvar someInt = 3\nsomeInt.square()\n// someInt is now 9\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u4e0b\u6807",children:"\u4e0b\u6807"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u5411\u73b0\u6709\u7c7b\u578b\u6dfb\u52a0\u65b0\u7684\u4e0b\u6807\u3002\u8be5\u793a\u4f8b\u5c06\u6574\u6570\u4e0b\u6807\u6dfb\u52a0\u5230 Swift \u7684\u5185\u7f6e Int \u7c7b\u578b\u3002\u6b64\u4e0b\u6807[n]\u8fd4\u56de\u6570\u5b57 n \u53f3\u4fa7\u7684\u5c0f\u6570\u4f4d\uff1a"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"123456789[0]"})," \u8fd4\u56de ",(0,t.jsx)(e.code,{children:"9"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"123456789[1]"})," \u8fd4\u56de ",(0,t.jsx)(e.code,{children:"8"})]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"... \u7b49\u7b49\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"extension Int {\n    subscript(digitIndex: Int) -> Int {\n        var decimalBase = 1\n        for _ in 0..<digitIndex {\n            decimalBase *= 10\n        }\n        return (self / decimalBase) % 10\n    }\n}\n746381295[0]\n// returns 5\n746381295[1]\n// returns 9\n746381295[2]\n// returns 2\n746381295[8]\n// returns 7\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u5982\u679c\u8be5 Int \u503c\u6ca1\u6709\u8db3\u591f\u7684\u6570\u5b57\u7528\u4e8e\u8bf7\u6c42\u7684\u7d22\u5f15\uff0c\u5219\u4e0b\u6807\u5b9e\u73b0\u8fd4\u56de 0\uff0c\u5c31\u597d\u50cf\u6570\u5b57\u5df2\u7ecf\u7528\u96f6\u586b\u5145\u5230\u5de6\u8fb9\u4e00\u6837\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"746381295[9]\n// returns 0, as if you had requested:\n0746381295[9]\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5d4c\u5957\u7c7b\u578b",children:"\u5d4c\u5957\u7c7b\u578b"}),"\n",(0,t.jsx)(e.p,{children:"\u6269\u5c55\u53ef\u4ee5\u5411\u73b0\u6709\u7c7b\u3001\u7ed3\u6784\u548c\u679a\u4e3e\u6dfb\u52a0\u65b0\u7684\u5d4c\u5957\u7c7b\u578b\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:"extension Int {\n    enum Kind {\n        case negative, zero, positive\n    }\n    var kind: Kind {\n        switch self {\n        case 0:\n            return .zero\n        case let x where x > 0:\n            return .positive\n        default:\n            return .negative\n        }\n    }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u793a\u4f8b\u5c06\u65b0\u7684\u5d4c\u5957\u679a\u4e3e\u6dfb\u52a0\u5230 Int. \u6b64\u679a\u4e3e\u79f0\u4e3a Kind\uff0c\u8868\u793a\u7279\u5b9a\u6574\u6570\u8868\u793a\u7684\u6570\u5b57\u7c7b\u578b\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u5b83\u8868\u793a\u6570\u5b57\u662f\u8d1f\u6570\u3001\u96f6\u8fd8\u662f\u6b63\u6570\u3002"}),"\n",(0,t.jsx)(e.p,{children:"Int \u8be5\u793a\u4f8b\u8fd8\u5411 \u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a \u7684\u65b0\u8ba1\u7b97\u5b9e\u4f8b\u5c5e\u6027 kind\uff0c\u8be5\u5c5e\u6027\u8fd4\u56de Kind \u8be5\u6574\u6570\u7684\u9002\u5f53\u679a\u4e3e\u6848\u4f8b\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u5d4c\u5957\u679a\u4e3e\u73b0\u5728\u53ef\u4ee5\u4e0e\u4efb\u4f55\u503c\u4e00\u8d77\u4f7f\u7528 Int\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-swift",children:'func printIntegerKinds(_ numbers: [Int]) {\n    for number in numbers {\n        switch number.kind {\n        case .negative:\n            print("- ", terminator: "")\n        case .zero:\n            print("0 ", terminator: "")\n        case .positive:\n            print("+ ", terminator: "")\n        }\n    }\n    print("")\n}\nprintIntegerKinds([3, 19, -27, 0, -6, 0, 7])\n// Prints "+ + - 0 - 0 + "\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u503c\u7684\u8f93\u5165\u6570\u7ec4\u5e76\u4f9d\u6b21\u8fed\u4ee3\u8fd9\u4e9b\u503c\u3002\u5bf9\u4e8e\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6574\u6570\uff0c\u8be5\u51fd\u6570\u4f1a\u8003\u8651\u8be5\u6574\u6570\u7684\u8ba1\u7b97\u5c5e\u6027\uff0c\u5e76\u6253\u5370\u9002\u5f53\u7684\u63cf\u8ff0\u3002printIntegerKinds(_:)Intkind"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"number.kind \u5df2\u77e5\u5c5e\u4e8e \u7c7b\u578b\u3002\u56e0\u6b64\uff0c\u6240\u6709 case \u503c\u90fd\u53ef\u4ee5\u5728\u8bed\u53e5\u4e2d\u4ee5\u901f\u8bb0\u5f62\u5f0f\u4e66\u5199\uff0c\u4f8b\u5982 rather than \u3002Int.KindInt.Kindswitch.negativeInt.Kind.negative"})})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}function x(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>l});var t=i(67294);const s={},r=t.createContext(s);function l(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);