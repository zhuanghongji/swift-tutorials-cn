"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8140],{24700:(i,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var o=e(85893),n=e(11151);const r={},a="AVAudioRoutingArbiter",d={id:"avf-audio/system-audio/av-audio-routing-arbiter/index",title:"AVAudioRoutingArbiter",description:"<OriginalSource",source:"@site/docs/avf-audio/system-audio/av-audio-routing-arbiter/index.mdx",sourceDirName:"avf-audio/system-audio/av-audio-routing-arbiter",slug:"/avf-audio/system-audio/av-audio-routing-arbiter/",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-routing-arbiter/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-routing-arbiter/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"avfaudioSidebar",previous:{title:"AVAudioApplication",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-application/"}},s={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}];function c(i){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...i.components},{OriginalSource:e,ToBePolishedAfterTranslation:r}=t;return e||p("OriginalSource",!0),r||p("ToBePolishedAfterTranslation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"avaudioroutingarbiter",children:"AVAudioRoutingArbiter"}),"\n",(0,o.jsx)(r,{}),"\n",(0,o.jsx)(e,{title:"AVAudioRoutingArbiter",url:"https://developer.apple.com/documentation/avfaudio/avaudioroutingarbiter",summary:"\u7528\u4e8e\u914d\u7f6e macOS \u5e94\u7528\u7a0b\u5e8f\u4ee5\u53c2\u4e0e AirPods \u81ea\u52a8\u5207\u6362\u7684\u5bf9\u8c61"}),"\n",(0,o.jsx)(t.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,o.jsx)(t.p,{children:"AirPods \u81ea\u52a8\u5207\u6362\u662f Apple \u64cd\u4f5c\u7cfb\u7edf\u7684\u4e00\u9879\u529f\u80fd\uff0c\u53ef\u5728\u591a\u8bbe\u5907\u73af\u5883\u4e2d\u5c06\u65e0\u7ebf\u8033\u673a\u667a\u80fd\u8fde\u63a5\u5230\u6700\u5408\u9002\u7684\u97f3\u9891\u8bbe\u5907\u3002\u4f8b\u5982\uff0c\u5982\u679c\u7528\u6237\u5728 iPad \u4e0a\u64ad\u653e\u7535\u5f71\uff0c\u7136\u540e\u9501\u5b9a\u8bbe\u5907\u5e76\u5f00\u59cb\u5728 iPhone \u4e0a\u64ad\u653e\u97f3\u4e50\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u5c06\u6e90\u97f3\u9891\u8bbe\u5907\u4ece iPad \u5207\u6362\u5230 iPhone\u3002"}),"\n",(0,o.jsx)(t.p,{children:"iOS \u5e94\u7528\u7a0b\u5e8f\u81ea\u52a8\u53c2\u4e0e AirPods \u81ea\u52a8\u5207\u6362\u3002\u8981\u4f7f\u4f60\u7684 macOS \u5e94\u7528\u53c2\u4e0e\u6b64\u884c\u4e3a\uff0c\u8bf7\u4f7f\u7528 AVAudioRoutingArbiter \u6307\u793a\u4f60\u7684\u5e94\u7528\u4f55\u65f6\u5f00\u59cb\u4ee5\u53ca\u5b8c\u6210\u64ad\u653e\u6216\u5f55\u5236\u97f3\u9891\u3002\u4f8b\u5982\uff0cIP \u8bed\u97f3 (VoIP) \u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5728\u5f00\u59cb\u547c\u53eb\u4e4b\u524d\u8bf7\u6c42\u4ef2\u88c1\uff0c\u5e76\u5728\u4ef2\u88c1\u5b8c\u6210\u540e\u5f00\u59cb VoIP \u4f1a\u8bdd\u3002\u540c\u6837\uff0c\u5f53\u901a\u8bdd\u7ed3\u675f\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u5c06\u7ed3\u675f VoIP \u4f1a\u8bdd\u5e76\u79bb\u5f00\u4ef2\u88c1\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-swift",children:"func startCall() {\n    let arbiter = AVAudioRoutingArbiter.shared\n    arbiter.begin(category: .playAndRecordVoice) { deviceChanged, error in\n        // Start VoIP session.\n    }\n}\n\nfunc endCall() {\n    // End VoIP session.\n    AVAudioRoutingArbiter.shared.leave()\n}\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"\u53ea\u6709\u67d0\u4e9b Apple \u548c Beats \u65e0\u7ebf\u8033\u673a\u652f\u6301\u6b64\u529f\u80fd\u3002"})})]})}function l(i={}){const{wrapper:t}={...(0,n.a)(),...i.components};return t?(0,o.jsx)(t,{...i,children:(0,o.jsx)(c,{...i})}):c(i)}function p(i,t){throw new Error("Expected "+(t?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(i,t,e)=>{e.d(t,{Z:()=>d,a:()=>a});var o=e(67294);const n={},r=o.createContext(n);function a(i){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof i?i(t):{...t,...i}}),[t,i])}function d(i){let t;return t=i.disableParentContext?"function"==typeof i.components?i.components(n):i.components||n:a(i.components),o.createElement(r.Provider,{value:t},i.children)}}}]);