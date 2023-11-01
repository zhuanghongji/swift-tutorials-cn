"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[3288],{70160:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var o=r(85893),t=r(11151);const u={},i="AxisMarkValues",s={id:"charts/structures/axis-mark-values/index",title:"AxisMarkValues",description:"<OriginalSource",source:"@site/docs/charts/structures/axis-mark-values/index.mdx",sourceDirName:"charts/structures/axis-mark-values",slug:"/charts/structures/axis-mark-values/",permalink:"/swift-tutorials-cn/docs/charts/structures/axis-mark-values/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/structures/axis-mark-values/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AxisMarkPreset",permalink:"/swift-tutorials-cn/docs/charts/structures/axis-mark-preset/"},next:{title:"AxisValueLabelCollisionResolution",permalink:"/swift-tutorials-cn/docs/charts/structures/axis-value-label-collision-resolution/"}},a={},d=[{value:"\u7c7b\u578b\u5c5e\u6027",id:"\u7c7b\u578b\u5c5e\u6027",level:2},{value:"automatic",id:"automatic",level:3},{value:"\u7c7b\u578b\u65b9\u6cd5",id:"\u7c7b\u578b\u65b9\u6cd5",level:2},{value:"automatic(desiredCount:roundLowerBound:roundUpperBound:)",id:"automaticdesiredcountroundlowerboundroundupperbound",level:3},{value:"automatic(minimumStride:desiredCount:roundLowerBound:roundUpperBound:)",id:"automaticminimumstridedesiredcountroundlowerboundroundupperbound",level:3},{value:"stride(by:count:roundLowerBound:roundUpperBound:<wbr></wbr>calendar:)",id:"stridebycountroundlowerboundroundupperboundcalendar",level:3},{value:"stride(by:roundLowerBound:roundUpperBound:)",id:"stridebyroundlowerboundroundupperbound",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,t.a)(),...e.components},{OriginalSource:r,ToBePolishedAfterTranslation:u}=n;return r||p("OriginalSource",!0),u||p("ToBePolishedAfterTranslation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"axismarkvalues",children:"AxisMarkValues"}),"\n",(0,o.jsx)(u,{}),"\n",(0,o.jsx)(r,{title:"AxisMarkValues",url:"https://developer.apple.com/documentation/charts/axismarkvalues",summary:"\u63cf\u8ff0\u8f74\u6807\u8bb0\u5c06\u5448\u73b0\u7684\u503c\uff08\u6bcf\u4e2a\u503c\u4e00\u4e2a\uff09"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct AxisMarkValues : CustomStringConvertible {\n    // ...\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u7c7b\u578b\u5c5e\u6027",children:"\u7c7b\u578b\u5c5e\u6027"}),"\n",(0,o.jsx)(n.h3,{id:"automatic",children:"automatic"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"// \u81ea\u52a8\u786e\u5b9a\u8f74\u6807\u8bb0\u7684\u503c\npublic static var automatic: AxisMarkValues { get }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u7c7b\u578b\u65b9\u6cd5",children:"\u7c7b\u578b\u65b9\u6cd5"}),"\n",(0,o.jsx)(n.h3,{id:"automaticdesiredcountroundlowerboundroundupperbound",children:"automatic(desiredCount:roundLowerBound:roundUpperBound:)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"// \u81ea\u52a8\u786e\u5b9a\u6807\u8bb0\u7684\u503c\uff0c\u8fd1\u4f3c\u76ee\u6807\u503c\u6570\npublic static func automatic(desiredCount: Int? = nil,\n                             roundLowerBound: Bool? = nil,\n                             roundUpperBound: Bool? = nil\n) -> AxisMarkValues\n"})}),"\n",(0,o.jsx)(n.h3,{id:"automaticminimumstridedesiredcountroundlowerboundroundupperbound",children:"automatic(minimumStride:desiredCount:roundLowerBound:roundUpperBound:)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"public static func automatic<P>(minimumStride: P,\n                                desiredCount: Int? = nil,\n                                roundLowerBound: Bool? = nil,\n                                roundUpperBound: Bool? = nil\n) -> AxisMarkValues where P : BinaryFloatingPoint\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"stridebycountroundlowerboundroundupperboundcalendar",children:["stride(by:count:roundLowerBound:roundUpperBound:",(0,o.jsx)("wbr",{}),"calendar:)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"// \u4f7f\u7528\u7ed9\u5b9a\u7684\u65e5\u5386\u5355\u4f4d\u521b\u5efa\u503c\npublic static func stride(by component: Calendar.Component,\n                          count: Int = 1,\n                          roundLowerBound: Bool? = nil,\n                          roundUpperBound: Bool? = nil,\n                          calendar: Calendar? = nil\n) -> AxisMarkValues\n"})}),"\n",(0,o.jsx)(n.h3,{id:"stridebyroundlowerboundroundupperbound",children:"stride(by:roundLowerBound:roundUpperBound:)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"// \u4f7f\u7528\u7ed9\u5b9a\u7684\u6570\u5b57\u6b65\u957f\u521b\u5efa\u503c\npublic static func stride<P>(by stepSize: P,\n                             roundLowerBound: Bool? = nil,\n                             roundUpperBound: Bool? = nil\n) -> AxisMarkValues where P : BinaryFloatingPoint\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var o=r(67294);const t={},u=o.createContext(t);function i(e){const n=o.useContext(u);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(u.Provider,{value:n},e.children)}}}]);