"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[720],{78331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=n(85893),s=n(11151);const r={},a="AxisTick",c={id:"charts/axis-marks/axis-tick/index",title:"AxisTick",description:"<OriginalSource",source:"@site/docs/charts/axis-marks/axis-tick/index.mdx",sourceDirName:"charts/axis-marks/axis-tick",slug:"/charts/axis-marks/axis-tick/",permalink:"/swift-tutorials-cn/docs/charts/axis-marks/axis-tick/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/axis-marks/axis-tick/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"AxisMark",permalink:"/swift-tutorials-cn/docs/charts/axis-marks/axis-mark/"},next:{title:"AxisGridLine",permalink:"/swift-tutorials-cn/docs/charts/axis-marks/axis-grid-line/"}},l={},o=[{value:"\u7ed3\u6784\u4f53",id:"\u7ed3\u6784\u4f53",level:2},{value:"Length",id:"length",level:3},{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:3},{value:"init(centered:length:stroke:)",id:"initcenteredlengthstroke",level:3},{value:"init(centered:length:stroke:)",id:"initcenteredlengthstroke-1",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",pre:"pre",...(0,s.a)(),...e.components},{OriginalSource:n,ToBePolishedAfterTranslation:r}=t;return n||u("OriginalSource",!0),r||u("ToBePolishedAfterTranslation",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"axistick",children:"AxisTick"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n,{title:"AxisTick",url:"https://developer.apple.com/documentation/charts/axistick",summary:"\u56fe\u8868\u5728\u8f74\u4e0a\u7ed8\u5236\u7684\u6807\u8bb0\uff0c\u7528\u4e8e\u6307\u793a\u6cbf\u8be5\u8f74\u7684\u53c2\u8003\u70b9"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct AxisTick : AxisMark {\n      // ...\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"\u7ed3\u6784\u4f53",children:"\u7ed3\u6784\u4f53"}),"\n",(0,i.jsx)(t.h3,{id:"length",children:"Length"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"// \u63cf\u8ff0\u523b\u5ea6\u7684\u957f\u5ea6\npublic struct Length : CustomStringConvertible {\n\n    // \u81ea\u52a8\u786e\u5b9a\u523b\u5ea6\u957f\u5ea6\n    public static var automatic: AxisTick.Length { get }\n\n    // \u63cf\u8ff0\u5ef6\u4f38\u81f3\u5176\u5173\u8054\u6807\u7b7e\u7684\u523b\u5ea6\n    public static var label: AxisTick.Length { get }\n\n    // \u63cf\u8ff0\u5ef6\u4f38\u5230\u8f74\u4e0a\u6700\u957f\u6807\u7b7e\u7684\u523b\u5ea6\n    public static var longestLabel: AxisTick.Length { get }\n\n    // \u63cf\u8ff0\u4e00\u4e2a\u5ef6\u4f38\u5230\u5176\u5173\u8054\u6807\u7b7e\u7684\u523b\u5ea6\uff0c\u5177\u6709\u7ed9\u5b9a\u7684\u9644\u52a0\u957f\u5ea6\n    //\n    // - extendPastBy: \u6dfb\u52a0\u5230\u5173\u8054\u6807\u7b7e\u540e\u9762\u7684\u9644\u52a0\u957f\u5ea6\n    public static func label(extendPastBy: CGFloat = 0) -> AxisTick.Length\n\n    // \u63cf\u8ff0\u5ef6\u4f38\u5230\u8f74\u4e0a\u6700\u957f\u6807\u7b7e\u7684\u523b\u5ea6\uff0c\u5177\u6709\u7ed9\u5b9a\u7684\u9644\u52a0\u957f\u5ea6\n    //\n    // - extendPastBy: \u6dfb\u52a0\u5230\u5173\u8054\u6807\u7b7e\u540e\u9762\u7684\u9644\u52a0\u957f\u5ea6\n    public static func longestLabel(extendPastBy: CGFloat = 0) -> AxisTick.Length\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"\u521d\u59cb\u5316\u5668",children:"\u521d\u59cb\u5316\u5668"}),"\n",(0,i.jsx)(t.h3,{id:"initcenteredlengthstroke",children:"init(centered:length:stroke:)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u523b\u5ea6\n//\n// - centered: \u662f\u5426\u4f7f\u7f51\u683c\u7ebf\u5728\u4e24\u4e2a\u8f74\u503c\u4e4b\u95f4\u5c45\u4e2d\n// - length: \u523b\u5ea6\u7ebf\u7684\u957f\u5ea6\n// - stroke: \u7b14\u753b\u7684\u98ce\u683c\npublic init(centered: Bool? = nil, length: CGFloat, stroke: StrokeStyle? = nil)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"initcenteredlengthstroke-1",children:"init(centered:length:stroke:)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-swift",children:"// \u4f7f\u7528\u7ed9\u5b9a\u5c5e\u6027\u521b\u5efa\u8f74\u523b\u5ea6\n//\n// - centered: \u662f\u5426\u4f7f\u7f51\u683c\u7ebf\u5728\u4e24\u4e2a\u8f74\u503c\u4e4b\u95f4\u5c45\u4e2d\n// - length: \u523b\u5ea6\u7ebf\u7684\u957f\u5ea6\n// - stroke: \u7b14\u753b\u7684\u98ce\u683c\npublic init(centered: Bool? = nil, length: AxisTick.Length = .automatic, stroke: StrokeStyle? = nil)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var i=n(67294);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);