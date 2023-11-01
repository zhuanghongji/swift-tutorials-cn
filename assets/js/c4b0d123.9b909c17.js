"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[7053],{88261:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(85893),o=n(11151);const a={},c="Plot",s={id:"charts/charts/plot/index",title:"Plot",description:"<OriginalSource",source:"@site/docs/charts/charts/plot/index.mdx",sourceDirName:"charts/charts/plot",slug:"/charts/charts/plot/",permalink:"/swift-tutorials-cn/docs/charts/charts/plot/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/charts/plot/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"ChartContentBuilder",permalink:"/swift-tutorials-cn/docs/charts/charts/chart-content-builder/"},next:{title:"AreaMark",permalink:"/swift-tutorials-cn/docs/charts/marks/area-mark/"}},i={},l=[{value:"\u521d\u59cb\u5316\u5668",id:"\u521d\u59cb\u5316\u5668",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...t.components},{OriginalSource:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("OriginalSource",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"plot",children:"Plot"}),"\n",(0,r.jsx)(n,{title:"Plot",url:"https://developer.apple.com/documentation/charts/plot",summary:"\u4e00\u79cd\u5c06\u56fe\u8868\u5185\u5bb9\u5206\u7ec4\u4e3a\u5355\u4e2a\u5b9e\u4f53\u7684\u673a\u5236"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-swift",children:"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct Plot<Content> where Content : ChartContent {\n\n    public init(@ChartContentBuilder content: () -> Content)\n\n    /// The type of chart content contained in the body of this instance.\n    public typealias Body = Never\n}\n\n@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\nextension Plot : ChartContent {\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u521d\u59cb\u5316\u5668",children:"\u521d\u59cb\u5316\u5668"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-swift",children:"public init(@ChartContentBuilder content: () -> Content)\n"})})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>c});var r=n(67294);const o={},a=r.createContext(o);function c(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);