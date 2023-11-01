"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[343],{33313:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(85893),t=n(11151);const r={},l="\u5c06\u4f60\u7684\u97f3\u9891\u4ee3\u7801\u79fb\u690d\u5230 Apple Silicon",s={id:"audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/index",title:"\u5c06\u4f60\u7684\u97f3\u9891\u4ee3\u7801\u79fb\u690d\u5230 Apple Silicon",description:"<OriginalSource",source:"@site/docs/audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/index.mdx",sourceDirName:"audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon",slug:"/audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/",permalink:"/swift-tutorials-cn/docs/audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"audiotoolboxSidebar",previous:{title:"Audio Toolbox",permalink:"/swift-tutorials-cn/docs/audio-toolbox/esseentials/about/"},next:{title:"\u4ece\u591a\u901a\u9053\u97f3\u9891\u6d41\u751f\u6210\u7a7a\u95f4\u97f3\u9891",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/"}},a={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u652f\u6301\u73b0\u4ee3\u97f3\u9891\u7ec4\u4ef6\u67b6\u6784",id:"\u652f\u6301\u73b0\u4ee3\u97f3\u9891\u7ec4\u4ef6\u67b6\u6784",level:2},{value:"\u4f7f\u7528\u5de5\u4f5c\u7ec4\u786e\u5b9a\u5b9e\u65f6\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7",id:"\u4f7f\u7528\u5de5\u4f5c\u7ec4\u786e\u5b9a\u5b9e\u65f6\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7",level:2}];function c(o){const e={admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...o.components},{OriginalSource:n,ToBePolishedAfterTranslation:r}=e;return n||p("OriginalSource",!0),r||p("ToBePolishedAfterTranslation",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u5c06\u4f60\u7684\u97f3\u9891\u4ee3\u7801\u79fb\u690d\u5230-apple-silicon",children:"\u5c06\u4f60\u7684\u97f3\u9891\u4ee3\u7801\u79fb\u690d\u5230 Apple Silicon"}),"\n",(0,i.jsx)(r,{}),"\n",(0,i.jsx)(n,{title:"Porting Your Audio Code to Apple Silicon",url:"https://developer.apple.com/documentation/apple-silicon/porting-your-audio-code-to-apple-silicon",summary:"\u6d88\u9664\u5728 Apple Silicon Mac \u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u65f6\u97f3\u9891\u7279\u5b9a\u4ee3\u7801\u4e2d\u7684\u95ee\u9898"}),"\n",(0,i.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u4f60\u7684\u79fb\u690d\u8ba1\u5212\u4e2d\u5305\u62ec\u8fc1\u79fb\u4f7f\u7528 Core Audio \u7cfb\u5217\u6846\u67b6\u7684\u4ee3\u7801\u7684\u65f6\u95f4\u3002\u7279\u522b\u662f\uff0c\u66f4\u65b0\u4f60\u7684\u97f3\u9891\u5355\u5143\u4ee5\u652f\u6301 Apple \u82af\u7247\uff0c\u5e76\u4f18\u5316\u4efb\u4f55\u5b9e\u65f6\u4ee3\u7801\u4ee5\u5728\u6240\u6709 Mac \u8ba1\u7b97\u673a\u4e0a\u9ad8\u6548\u8fd0\u884c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u548c\u97f3\u9891\u5355\u5143\u7684\u901a\u7528\u7248\u672c\n\u59cb\u7ec8\u521b\u5efa\u97f3\u9891\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u548c\u97f3\u9891\u5355\u5143\u63d2\u4ef6\u7684\u901a\u7528\u7248\u672c\u3002\u901a\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u53ef\u786e\u4fdd\u4f60\u7684\u4ee3\u7801\u5728\u6240\u6709\u5e73\u53f0\u4e0a\u672c\u673a\u8fd0\u884c\uff0c\u8fd9\u4f7f\u4f60\u6709\u673a\u4f1a\u9488\u5bf9\u6bcf\u4e2a\u5e73\u53f0\u4f18\u5316\u4ee3\u7801\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7531\u4e8e\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u63a7\u5236\u6267\u884c\u73af\u5883\uff0c\u56e0\u6b64\u63d0\u4f9b\u901a\u7528\u97f3\u9891\u5355\u5143\u5c24\u4e3a\u91cd\u8981\u3002\u5982\u679c\u4f60\u7684\u97f3\u9891\u5355\u5143\u5305\u542b arm64 \u548c x86_64 \u67b6\u6784\u7684\u4ee3\u7801\uff0c\u5219\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u5728\u8fdb\u7a0b\u5185\u6216\u8fdb\u7a0b\u5916\u52a0\u8f7d\u4f60\u7684\u97f3\u9891\u5355\u5143\u3002\u5bf9\u4e8e\u67d0\u4e9b\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\uff0c\u8fdb\u7a0b\u5185\u52a0\u8f7d\u97f3\u9891\u5355\u5143\u7684\u80fd\u529b\u4ecd\u7136\u5f88\u91cd\u8981\uff0c\u4f8b\u5982\u90a3\u4e9b\u9700\u8981\u6700\u5c0f\u5ef6\u8fdf\u7684\u5e94\u7528\u7a0b\u5e8f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8981\u4e86\u89e3\u5982\u4f55\u521b\u5efa\u901a\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u8bf7\u53c2\u9605\u6784\u5efa\u901a\u7528 macOS \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u652f\u6301\u73b0\u4ee3\u97f3\u9891\u7ec4\u4ef6\u67b6\u6784",children:"\u652f\u6301\u73b0\u4ee3\u97f3\u9891\u7ec4\u4ef6\u67b6\u6784"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e8e arm64 \u67b6\u6784\uff0c\u8bf7\u59cb\u7ec8\u4f7f\u7528\u97f3\u9891\u7ec4\u4ef6 API \u5c06\u97f3\u9891\u5355\u5143\u3001\u7f16\u89e3\u7801\u5668\u548c\u5176\u5b83\u4ee3\u7801\u6a21\u5757\u52a0\u8f7d\u5230\u4f60\u7684\u5e94\u7528\u4e2d\u3002\u97f3\u9891\u7ec4\u4ef6 API \u662f\u641c\u7d22\u53ef\u52a0\u8f7d\u4ee3\u7801\u6a21\u5757\u7684\u73b0\u4ee3\u65b9\u6cd5\uff0c\u53ef\u5728 macOS 10.6 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\u4f7f\u7528\u3002\u9762\u5411 arm64 \u67b6\u6784\u6216\u94fe\u63a5\u5230 macOS 11 SDK \u7684\u5e94\u7528\u7a0b\u5e8f\u65e0\u6cd5\u4f7f\u7528\u65e7\u7248 Carbon Component Manager API \u6765\u6253\u5f00\u97f3\u9891\u5355\u5143\u3002\u5982\u679c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528 Carbon \u7ec4\u4ef6\u7ba1\u7406\u5668\uff0c\u8bf7\u8ba1\u5212\u5728\u79fb\u690d\u5e94\u7528\u7a0b\u5e8f\u65f6\u5c06\u5176\u8fc1\u79fb\u51fa\u53bb\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u5f00\u53d1\u97f3\u9891\u5355\u5143\u6216\u7f16\u89e3\u7801\u5668\uff0c\u8bf7\u66f4\u65b0\u4f60\u7684\u4ee3\u7801\u4ee5\u652f\u6301\u97f3\u9891\u7ec4\u4ef6\u6216\u97f3\u9891\u5355\u5143\u6269\u5c55 API\uff08\u5982\u679c\u4f60\u5c1a\u672a\u8fd9\u6837\u505a\uff09\u3002\u5f53\u4f60\u5c06\u97f3\u9891\u5355\u5143\u6216\u7f16\u89e3\u7801\u5668\u94fe\u63a5\u5230 macOS 11\uff08\u6216\u66f4\u9ad8\u7248\u672c\uff09SDK \u65f6\uff0c\u8bf7\u4f7f\u7528\u8fd9\u4e9b\u73b0\u4ee3 API \u4e4b\u4e00\uff0c\u800c\u4e0d\u662f Carbon \u7ec4\u4ef6 API\u3002"}),"\n",(0,i.jsx)(e.admonition,{type:"note",children:(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u4fdd\u6301\u517c\u5bb9\u6027\uff0c\u94fe\u63a5\u5230 macOS 10.15\uff08\u6216\u66f4\u65e9\u7248\u672c\uff09SDK \u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u7ee7\u7eed\u4f7f\u7528 Carbon \u7ec4\u4ef6\u7ba1\u7406\u5668\u6765\u52a0\u8f7d\u97f3\u9891\u5355\u5143\u548c\u7f16\u89e3\u7801\u5668\u3002\u540c\u6837\uff0c\u4f7f\u7528 macOS 10.15\uff08\u6216\u66f4\u65e9\u7248\u672c\uff09SDK \u6784\u5efa\u7684\u97f3\u9891\u5355\u5143\u548c\u7f16\u89e3\u7801\u5668\u53ef\u80fd\u4f1a\u7ee7\u7eed\u5305\u542b\u5355\u72ec\u7684\u8d44\u6e90\u548c\u5165\u53e3\u70b9\u4ee5\u652f\u6301\u65e7\u7248 API\u3002"})}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u5173\u97f3\u9891\u7ec4\u4ef6 API \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u97f3\u9891\u5de5\u5177\u7bb1\u6846\u67b6\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4f7f\u7528\u5de5\u4f5c\u7ec4\u786e\u5b9a\u5b9e\u65f6\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7",children:"\u4f7f\u7528\u5de5\u4f5c\u7ec4\u786e\u5b9a\u5b9e\u65f6\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7"}),"\n",(0,i.jsx)(e.p,{children:"\u6267\u884c\u5b9e\u65f6\u97f3\u9891\u5904\u7406\u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u786e\u4fdd\u5176\u7ebf\u7a0b\u5b9a\u671f\u8fd0\u884c\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6216\u97f3\u9891\u5355\u5143\u53ef\u80fd\u8fd8\u9700\u8981\u4e0e\u97f3\u9891\u670d\u52a1\u5668\u6216\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u7684\u7ebf\u7a0b\u534f\u8c03\uff0c\u4ee5\u786e\u4fdd\u53ca\u65f6\u5904\u7406\u97f3\u9891\u3002\u5bf9\u4e8e\u8fd9\u4e24\u79cd\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528\u5de5\u4f5c\u7ec4\u5c06\u5b9e\u65f6\u7ebf\u7a0b\u7684\u8c03\u5ea6\u9700\u6c42\u4f20\u8fbe\u7ed9\u7cfb\u7edf\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6bcf\u4e2a\u6838\u5fc3\u97f3\u9891\u8bbe\u5907\u90fd\u63d0\u4f9b\u4e00\u4e2a\u5de5\u4f5c\u7ec4\uff0c\u5176\u5b83\u5b9e\u65f6\u7ebf\u7a0b\u53ef\u4ee5\u4f7f\u7528 os_workgroup_join_self \u51fd\u6570\u52a0\u5165\u8be5\u5de5\u4f5c\u7ec4\u3002\u52a0\u5165\u97f3\u9891\u8bbe\u5907\u5de5\u4f5c\u7ec4\u4f1a\u544a\u8bc9\u7cfb\u7edf\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u5b9e\u65f6\u7ebf\u7a0b\u6b63\u5728\u52aa\u529b\u4e89\u53d6\u4e0e\u8bbe\u5907\u7ebf\u7a0b\u76f8\u540c\u7684\u622a\u6b62\u65e5\u671f\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u4e4b\u4e00\u8bbf\u95ee\u4e0e\u8bbe\u5907\u5173\u8054\u7684\u5de5\u4f5c\u7ec4\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u83b7\u53d6\u8bbe\u5907\u7684 kAudioDevicePropertyIOThreadOSWorkgroup \u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u83b7\u53d6\u97f3\u9891 I/O \u5355\u5143\uff08AUHAL \u6216 AURemoteIO\uff09\u7684 kAudioOutputUnitProperty_OSWorkgroup \u5c5e\u6027\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u4ece\u5145\u5f53\u8f93\u5165/\u8f93\u51fa\u5355\u5143\u7684 AUAudioUnit \u5bf9\u8c61\u7684 osWorkgroup \u5c5e\u6027\u83b7\u53d6\u5b83\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u97f3\u9891\u5355\u5143\u521b\u5efa\u81ea\u5df1\u7684\u5b9e\u65f6\u97f3\u9891\u5904\u7406\u7ebf\u7a0b\u7528\u4e8e\u6e32\u67d3\uff0c\u8bf7\u901a\u8fc7\u5c06\u7ebf\u7a0b\u52a0\u5165\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u7ec4\u6765\u534f\u8c03\u8fd9\u4e9b\u7ebf\u7a0b\u4e0e\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u7684\u6d3b\u52a8\u3002\u8981\u83b7\u53d6\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u7ec4\uff0c\u8bf7\u4ece AUAudioUnit \u5bf9\u8c61\u7684 renderContextObserver \u5c5e\u6027\u8fd4\u56de AURenderContextObserver \u5757\u3002 \uff08\u5bf9\u4e8e v2 \u97f3\u9891\u5355\u5143\uff0c\u8fd4\u56de AURenderContextObserver \u5757\u4f5c\u4e3a\u97f3\u9891\u5355\u5143 kAudioUnitProperty_RenderContextObserver \u5c5e\u6027\u7684\u6570\u636e\u3002\uff09\u5f53\u7cfb\u7edf\u6267\u884c\u4f60\u7684\u5757\u65f6\uff0c\u4ece\u63d0\u4f9b\u7684 AudioUnitRenderContext \u5bf9\u8c61\u3002\u4e3b\u673a\u7684\u5de5\u4f5c\u7ec4\u53ef\u80fd\u4f1a\u5728\u6e32\u67d3\u8c03\u7528\u4e4b\u95f4\u53d1\u751f\u53d8\u5316\u3002\u5982\u679c\u662f\u8fd9\u6837\uff0c\u8bf7\u66f4\u65b0\u4f60\u7684\u5b9e\u65f6\u97f3\u9891\u7ebf\u7a0b\u4ee5\u52a0\u5165\u7cfb\u7edf\u4f20\u9012\u7ed9\u4f60\u7684\u5757\u7684\u5de5\u4f5c\u7ec4\uff0c\u5e76\u79bb\u5f00\u5176\u4e4b\u524d\u7684\u5de5\u4f5c\u7ec4\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4f60\u7684\u5b9e\u65f6\u97f3\u9891\u7ebf\u7a0b\u5728\u4e0e\u6838\u5fc3\u97f3\u9891\u7ebf\u7a0b\u4e0d\u540c\u7684\u622a\u6b62\u65e5\u671f\u4e0a\u8fd0\u884c\uff0c\u8bf7\u4f7f\u7528 AudioWorkIntervalCreate \u51fd\u6570\u521b\u5efa\u4f60\u81ea\u5df1\u7684\u95f4\u9694\u5de5\u4f5c\u7ec4\u3002\u5bf9\u4e8e\u4f60\u521b\u5efa\u7684\u5de5\u4f5c\u7ec4\uff0c\u5c06\u7ebf\u7a0b\u52a0\u5165\u5de5\u4f5c\u7ec4\u5e76\u4ece\u4e00\u4e2a\u7ebf\u7a0b\u8c03\u7528 os_workgroup_interval_start \u51fd\u6570\u3002\u5f53\u4f60\u8c03\u7528\u8be5\u51fd\u6570\u65f6\uff0c\u8bf7\u6307\u5b9a\u4f60\u671f\u671b\u7ebf\u7a0b\u5524\u9192\u5e76\u5904\u7406\u97f3\u9891\u7684\u65f6\u95f4\u3002\u5b8c\u6210\u5de5\u4f5c\u540e\uff0c\u8c03\u7528 os_workgroup_interval_finish \u51fd\u6570\u544a\u8bc9\u7cfb\u7edf\u4f60\u5df2\u5b8c\u6210\u4e0e\u5f53\u524d\u622a\u6b62\u65e5\u671f\u76f8\u5173\u7684\u5de5\u4f5c\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6709\u5173 Core Audio \u5de5\u4f5c\u7ec4\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Audio Toolbox \u7684\u53c2\u8003\u3002"})]})}function u(o={}){const{wrapper:e}={...(0,t.a)(),...o.components};return e?(0,i.jsx)(e,{...o,children:(0,i.jsx)(c,{...o})}):c(o)}function p(o,e){throw new Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(o,e,n)=>{n.d(e,{Z:()=>s,a:()=>l});var i=n(67294);const t={},r=i.createContext(t);function l(o){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function s(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:l(o.components),i.createElement(r.Provider,{value:e},o.children)}}}]);