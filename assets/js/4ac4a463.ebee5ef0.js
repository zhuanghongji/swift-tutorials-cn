"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9861],{91615:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(85893),l=t(11151);const s={},a="AxisContentBuilder",r={id:"charts/axes/axis-content-builder/index",title:"AxisContentBuilder",description:"<OriginalSource",source:"@site/docs/charts/axes/axis-content-builder/index.mdx",sourceDirName:"charts/axes/axis-content-builder",slug:"/charts/axes/axis-content-builder/",permalink:"/swift-tutorials-cn/docs/charts/axes/axis-content-builder/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/axes/axis-content-builder/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AnyAxisContent",permalink:"/swift-tutorials-cn/docs/charts/axes/any-axis-content/"},next:{title:"AxisMark",permalink:"/swift-tutorials-cn/docs/charts/axis-marks/axis-mark/"}},c={},d=[{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"buildBlock()",id:"buildblock",level:3},{value:"buildEither(first:)",id:"buildeitherfirst",level:3},{value:"buildEither(second:)",id:"buildeithersecond",level:3},{value:"buildExpression(_:)",id:"buildexpression_",level:3},{value:"buildIf(_:)",id:"buildif_",level:3},{value:"buildLimitedAvailability(_:)",id:"buildlimitedavailability_",level:3},{value:"buildPartialBlock(accumulated:next:)",id:"buildpartialblockaccumulatednext",level:3},{value:"buildPartialBlock(first:)",id:"buildpartialblockfirst",level:3}];function o(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,l.a)(),...e.components},{OriginalSource:t,ToBePolishedAfterTranslation:s}=i;return t||x("OriginalSource",!0),s||x("ToBePolishedAfterTranslation",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"axiscontentbuilder",children:"AxisContentBuilder"}),"\n",(0,n.jsx)(s,{}),"\n",(0,n.jsx)(t,{title:"AxisContentBuilder",url:"https://developer.apple.com/documentation/charts/axiscontentbuilder",summary:"\u6784\u9020\u8f74\u5185\u5bb9\u7684\u7ed3\u679c\u751f\u6210\u5668"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\n@resultBuilder public struct AxisContentBuilder {\n    // ...\n}\n"})}),"\n",(0,n.jsx)(i.h2,{id:"\u7c7b\u578b\u65b9\u6cd5",children:"\u7c7b\u578b\u65b9\u6cd5"}),"\n",(0,n.jsx)(i.h3,{id:"buildblock",children:"buildBlock()"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"public static func buildBlock() -> some AxisContent\n"})}),"\n",(0,n.jsx)(i.h3,{id:"buildeitherfirst",children:"buildEither(first:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:'// \u4e3a\u591a\u8bed\u53e5\u95ed\u5305\u4e2d\u7684 "if-else" \u8bed\u53e5\u63d0\u4f9b\u652f\u6301\uff0c\u4e3a "then" \u5206\u652f\u751f\u6210\u6761\u4ef6\u5185\u5bb9\npublic static func buildEither<T1, T2>(first: T1)\n        -> BuilderConditional<T1, T2> where T1 : AxisContent, T2 : AxisContent\n'})}),"\n",(0,n.jsx)(i.h3,{id:"buildeithersecond",children:"buildEither(second:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:'// \u4e3a\u591a\u8bed\u53e5\u95ed\u5305\u4e2d\u7684 "if-else" \u8bed\u53e5\u63d0\u4f9b\u652f\u6301\uff0c\u4e3a "else" \u5206\u652f\u751f\u6210\u6761\u4ef6\u5185\u5bb9\npublic static func buildEither<T1, T2>(second: T2)\n        -> BuilderConditional<T1, T2> where T1 : AxisContent, T2 : AxisContent\n'})}),"\n",(0,n.jsx)(i.h3,{id:"buildexpression_",children:"buildExpression(_:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"public static func buildExpression<Content>(_ content: Content) -> Content where Content : AxisContent\n"})}),"\n",(0,n.jsx)(i.h3,{id:"buildif_",children:"buildIf(_:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:'// \u4e3a\u591a\u8bed\u53e5\u95ed\u5305\u4e2d\u7684 "if" \u8bed\u53e5\u63d0\u4f9b\u652f\u6301\uff0c\u751f\u6210\u4ec5\u5f53\u6761\u4ef6\u8ba1\u7b97\u4e3a true \u65f6\u624d\u53ef\u89c1\u7684\u53ef\u9009\u8f74\u5185\u5bb9\npublic static func buildIf<T>(_ content: T?) -> T? where T : AxisContent\n'})}),"\n",(0,n.jsx)(i.h3,{id:"buildlimitedavailability_",children:"buildLimitedAvailability(_:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:'// \u4e3a\u591a\u8bed\u53e5\u95ed\u5305\u4e2d\u5e26\u6709 #available() \u5b50\u53e5\u7684 "if" \u8bed\u53e5\u63d0\u4f9b\u652f\u6301\uff0c\u4e3a "then" \u5206\u652f\uff08\u5373\u6709\u6761\u4ef6\u53ef\u7528\u7684\u5206\u652f\uff09\u751f\u6210\u6761\u4ef6\u5185\u5bb9\npublic static func buildLimitedAvailability<Content>(_ content: Content)\n        -> some AxisContent where Content : AxisContent\n'})}),"\n",(0,n.jsx)(i.h3,{id:"buildpartialblockaccumulatednext",children:"buildPartialBlock(accumulated:next:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"public static func buildPartialBlock(accumulated: some AxisContent,\n                                     next: some AxisContent) -> some AxisContent\n"})}),"\n",(0,n.jsx)(i.h3,{id:"buildpartialblockfirst",children:"buildPartialBlock(first:)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-swift",children:"public static func buildPartialBlock<T>(first content: T) -> T where T : AxisContent\n"})})]})}function u(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}function x(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>a});var n=t(67294);const l={},s=n.createContext(l);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);