"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[1453],{56200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(85893),a=n(11151);const o={},l="ChartProxy",i={id:"charts/chart-management/chart-proxy/index",title:"ChartProxy",description:"<OriginalSource",source:"@site/docs/charts/chart-management/chart-proxy/index.mdx",sourceDirName:"charts/chart-management/chart-proxy",slug:"/charts/chart-management/chart-proxy/",permalink:"/swift-tutorials-cn/docs/charts/chart-management/chart-proxy/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/charts/chart-management/chart-proxy/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"chartsSidebar",previous:{title:"ChartPlotContent",permalink:"/swift-tutorials-cn/docs/charts/chart-management/chart-plot-content/"},next:{title:"ChartScrollTargetBehavior",permalink:"/swift-tutorials-cn/docs/charts/protocols/chart-scroll-target-behavior/"}},c={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"plotAreaFrame",id:"plotareaframe",level:3},{value:"plotAreaSize",id:"plotareasize",level:3},{value:"plotContainerFrame",id:"plotcontainerframe",level:3},{value:"plotFrame",id:"plotframe",level:3},{value:"plotSize",id:"plotsize",level:3},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"angle(at:)",id:"angleat",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components},{OriginalSource:n,ToBePolishedAfterTranslation:o}=t;return n||p("OriginalSource",!0),o||p("ToBePolishedAfterTranslation",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"chartproxy",children:"ChartProxy"}),"\n",(0,r.jsx)(o,{}),"\n",(0,r.jsx)(n,{title:"ChartProxy",url:"https://developer.apple.com/documentation/charts/chartproxy",summary:"\u7528\u4e8e\u8bbf\u95ee\u56fe\u8868\u7684\u6bd4\u4f8b\u548c\u7ed8\u56fe\u533a\u57df\u7684\u4ee3\u7406"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"@available(iOS 16.0, macOS 13.0, tvOS 16.0, watchOS 9.0, *)\npublic struct ChartProxy {\n    // ...\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,r.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u4ece chartOverlay(alignment:content:) \u548c chartBackground(alignment:content:) \u4fee\u9970\u5668\u83b7\u53d6\u56fe\u8868\u4ee3\u7406\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u56fe\u8868\u4ee3\u7406\u5c06\u6570\u636e\u503c\u8f6c\u6362\u4e3a\u5c4f\u5e55\u5750\u6807\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u4e0b\u9762\u662f\u6211\u4eec\u5c06\u5c4f\u5e55\u5750\u6807\u4ece\u62d6\u52a8\u624b\u52bf\u8f6c\u6362\u4e3a\u6570\u636e\u503c\u7684\u793a\u4f8b\u3002"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'Chart(data) {\n    LineMark(\n        x: .value("date", $0.date),\n        y: .value("price", $0.price)\n    )\n}\n.chartOverlay { proxy in\n    GeometryReader { geometry in\n        Rectangle().fill(.clear).contentShape(Rectangle())\n            .gesture(\n                DragGesture()\n                    .onChanged { value in\n                        // Convert the gesture location to the coordinate space of the plot area.\n                        let origin = geometry[proxy.plotAreaFrame].origin\n                        let location = CGPoint(\n                            x: value.location.x - origin.x,\n                            y: value.location.y - origin.y\n                        )\n                        // Get the x (date) and y (price) value from the location.\n                        let (date, price) = proxy.value(at: location, as: (Date, Double).self)\n                        print("Location: \\(date), \\(price)")\n                    }\n            )\n    }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u4f8b\u5c5e\u6027",children:"\u5b9e\u4f8b\u5c5e\u6027"}),"\n",(0,r.jsx)(t.h3,{id:"plotareaframe",children:"plotAreaFrame"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// \u56fe\u8868\u7ed8\u56fe\u6846\u67b6\u7684\u951a\u70b9\npublic var plotAreaFrame: Anchor<CGRect> { get }\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8be5\u56fe\u662f x \u8f74\u548c y \u8f74\u4e4b\u95f4\u7684\u533a\u57df\uff0c\u4e0d\u5305\u62ec\u8f74\u672c\u8eab\u3002\u5982\u679c\u56fe\u8868\u53ef\u6eda\u52a8\uff0c\u5219\u56fe\u6846\u5305\u62ec\u56fe\u7684\u53ef\u89c1\u90e8\u5206\u548c\u4e0d\u53ef\u89c1\u90e8\u5206\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u56fe\u8868\u5fc5\u987b\u5b58\u5728\u4e8e\u56fe\u8868\u4ee3\u7406\u7684\u4e0a\u4e0b\u6587\u4e2d\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 GeometryProxy \u5c06\u951a\u70b9\u8f6c\u6362\u4e3a\u6846\u67b6\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"plotareasize",children:"plotAreaSize"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// \u56fe\u8868\u4e2d\u7ed8\u56fe\u7684\u5927\u5c0f\npublic var plotAreaSize: CGSize { get }\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8be5\u56fe\u662f x \u8f74\u548c y \u8f74\u4e4b\u95f4\u7684\u533a\u57df\uff0c\u4e0d\u5305\u62ec\u8f74\u672c\u8eab\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u56fe\u8868\u5fc5\u987b\u5b58\u5728\u4e8e\u56fe\u8868\u4ee3\u7406\u7684\u4e0a\u4e0b\u6587\u4e2d\u3002"}),"\n",(0,r.jsx)(t.h3,{id:"plotcontainerframe",children:"plotContainerFrame"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// \u56fe\u8868\u7ed8\u56fe\u5bb9\u5668\u6846\u67b6\u7684\u951a\u70b9\uff0c\u5982\u679c\u56fe\u8868\u4ee3\u7406\u4e0a\u4e0b\u6587\u4e2d\u6ca1\u6709\u56fe\u8868\uff0c\u5219\u4e3a nil\npublic var plotContainerFrame: Anchor<CGRect>? { get }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u8be5\u56fe\u662f x \u8f74\u548c y \u8f74\u4e4b\u95f4\u7684\u533a\u57df\uff0c\u4e0d\u5305\u62ec\u8f74\u672c\u8eab\u3002\u5982\u679c\u56fe\u8868\u53ef\u6eda\u52a8\uff0c\u5219\u7ed8\u56fe\u5bb9\u5668\u6846\u67b6\u4ec5\u5305\u542b\u7ed8\u56fe\u7684\u53ef\u89c1\u90e8\u5206\u3002\u5426\u5219\uff0c\u5b83\u4e0e ",(0,r.jsx)(t.a,{href:"https://developer.apple.com/documentation/charts/chartproxy/plotframe",children:"plotFrame"})," \u76f8\u540c\u3002"]}),"\n",(0,r.jsx)(t.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528 GeometryProxy \u5c06\u951a\u70b9\u8f6c\u6362\u4e3a\u6846\u67b6\u3002\u4e0b\u9762\u662f\u5411\u7ed8\u56fe\u5bb9\u5668\u6dfb\u52a0\u8fb9\u6846\u7684\u793a\u4f8b\uff1a"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"Chart { ... }\n.chartOverlay { chartProxy in\n    GeometryReader { geometryProxy in\n        // Get the plot container's frame in the GeometryReader's coordinate space.\n        // This frame stays the same when the chart scrolls.\n        // In this example, we add a border to the plot container by stroking the frame.\n        if let plotContainerFrame = chartProxy.plotContainerFrame {\n            Path(geometryProxy[plotContainerFrame])\n                .stroke(.black, lineWidth: 1)\n                .allowsHitTesting(false)\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"plotframe",children:"plotFrame"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// \u56fe\u8868\u7ed8\u56fe\u6846\u67b6\u7684\u951a\u70b9\uff0c\u5982\u679c\u56fe\u8868\u4ee3\u7406\u4e0a\u4e0b\u6587\u4e2d\u6ca1\u6709\u56fe\u8868\uff0c\u5219\u4e3a nil\npublic var plotFrame: Anchor<CGRect>? { get }\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8be5\u56fe\u662f x \u8f74\u548c y \u8f74\u4e4b\u95f4\u7684\u533a\u57df\uff0c\u4e0d\u5305\u62ec\u8f74\u672c\u8eab\u3002\u5982\u679c\u56fe\u8868\u53ef\u6eda\u52a8\uff0c\u5219\u56fe\u6846\u5305\u62ec\u56fe\u7684\u53ef\u89c1\u90e8\u5206\u548c\u4e0d\u53ef\u89c1\u90e8\u5206\u3002"}),"\n",(0,r.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(t.code,{children:"GeometryProxy"})," \u5c06\u951a\u70b9\u8f6c\u6362\u4e3a\u6846\u67b6\u3002"]}),"\n",(0,r.jsx)(t.h3,{id:"plotsize",children:"plotSize"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// \u56fe\u8868\u4e2d\u7ed8\u56fe\u7684\u5927\u5c0f\npublic var plotSize: CGSize { get }\n"})}),"\n",(0,r.jsx)(t.p,{children:"\u8be5\u56fe\u662f x \u8f74\u548c y \u8f74\u4e4b\u95f4\u7684\u533a\u57df\uff0c\u4e0d\u5305\u62ec\u8f74\u672c\u8eab\u3002"}),"\n",(0,r.jsx)(t.h2,{id:"\u5b9e\u4f8b\u65b9\u6cd5",children:"\u5b9e\u4f8b\u65b9\u6cd5"}),"\n",(0,r.jsx)(t.h3,{id:"angleat",children:"angle(at:)"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"// \u8fd4\u56de\u76f8\u5bf9\u4e8e\u7ed8\u56fe\u533a\u57df\u4e2d\u5fc3\u7684\u89d2\u5ea6\uff0c\u5176\u4e2d 12 \u70b9\u949f\u4f4d\u7f6e\u88ab\u89e3\u91ca\u4e3a 0 \u5ea6\uff0c\u987a\u65f6\u9488\u589e\u52a0\n//\n// - position: \u83b7\u53d6\u6570\u636e\u503c\u7684\u4f4d\u7f6e\u3002\u5e94\u8be5\u548c\u5267\u60c5\u6709\u5173\n// - Returns: \u76f8\u5bf9\u4e8e\u7ed8\u56fe\u533a\u57df\u4e2d\u5fc3\u7684\u89d2\u5ea6\npublic func angle(at position: CGPoint) -> Angle\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function p(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const a={},o=r.createContext(a);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);