"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8863],{17900:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>u});var o=n(85893),s=n(11151);const t={},a="AVAudioSession",d={id:"avf-audio/system-audio/av-audio-session/index",title:"AVAudioSession",description:"<OriginalSource",source:"@site/docs/avf-audio/system-audio/av-audio-session/index.mdx",sourceDirName:"avf-audio/system-audio/av-audio-session",slug:"/avf-audio/system-audio/av-audio-session/",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-session/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-session/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"avfaudioSidebar",previous:{title:"\u4ece\u5185\u7f6e\u9ea6\u514b\u98ce\u6355\u83b7\u7acb\u4f53\u58f0\u97f3\u9891",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/"},next:{title:"AVAudioApplication",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-application/"}},r={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}];function c(e){const i={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{OriginalSource:n,ToBePolishedAfterTranslation:t}=i;return n||p("OriginalSource",!0),t||p("ToBePolishedAfterTranslation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"avaudiosession",children:"AVAudioSession"}),"\n",(0,o.jsx)(t,{}),"\n",(0,o.jsx)(n,{title:"AVAudioSession",url:"https://developer.apple.com/documentation/avfaudio/avaudiosession",summary:"\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7528\u4e8e\u5411\u7cfb\u7edf\u4f20\u8fbe\u4f60\u6253\u7b97\u5982\u4f55\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528\u97f3\u9891"}),"\n",(0,o.jsx)(i.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,o.jsx)(i.p,{children:"\u97f3\u9891\u4f1a\u8bdd\u5145\u5f53\u5e94\u7528\u7a0b\u5e8f\u548c\u64cd\u4f5c\u7cfb\u7edf\u4e4b\u95f4\u7684\u4e2d\u4ecb\uff0c\u8fdb\u800c\u5145\u5f53\u5e95\u5c42\u97f3\u9891\u786c\u4ef6\u4e4b\u95f4\u7684\u4e2d\u4ecb\u3002\u4f60\u4f7f\u7528\u97f3\u9891\u4f1a\u8bdd\u5411\u64cd\u4f5c\u7cfb\u7edf\u4f20\u8fbe\u5e94\u7528\u7a0b\u5e8f\u97f3\u9891\u7684\u4e00\u822c\u6027\u8d28\uff0c\u800c\u65e0\u9700\u8be6\u7ec6\u8bf4\u660e\u7279\u5b9a\u884c\u4e3a\u6216\u6240\u9700\u4e0e\u97f3\u9891\u786c\u4ef6\u7684\u4ea4\u4e92\u3002\u4f60\u5c06\u8fd9\u4e9b\u8be6\u7ec6\u4fe1\u606f\u7684\u7ba1\u7406\u59d4\u6258\u7ed9\u97f3\u9891\u4f1a\u8bdd\uff0c\u8fd9\u53ef\u786e\u4fdd\u64cd\u4f5c\u7cfb\u7edf\u80fd\u591f\u6700\u597d\u5730\u7ba1\u7406\u7528\u6237\u7684\u97f3\u9891\u4f53\u9a8c\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u6240\u6709 iOS\u3001tvOS \u548c watchOS \u5e94\u7528\u7a0b\u5e8f\u90fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u97f3\u9891\u4f1a\u8bdd\uff0c\u8be5\u4f1a\u8bdd\u9884\u5148\u914d\u7f6e\u4e86\u4ee5\u4e0b\u884c\u4e3a\uff1a"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"\u5b83\u652f\u6301\u97f3\u9891\u64ad\u653e\uff0c\u4f46\u4e0d\u5141\u8bb8\u5f55\u97f3\u3002"}),"\n",(0,o.jsx)(i.li,{children:"\u5f53\u5e94\u7528\u7a0b\u5e8f\u64ad\u653e\u97f3\u9891\u65f6\uff0c\u5b83\u4f1a\u4f7f\u4efb\u4f55\u5176\u5b83\u80cc\u666f\u97f3\u9891\u9759\u97f3\u3002"}),"\n",(0,o.jsx)(i.li,{children:"\u5728 iOS \u4e2d\uff0c\u5c06\u54cd\u94c3/\u9759\u97f3\u5f00\u5173\u8bbe\u7f6e\u4e3a\u9759\u97f3\u6a21\u5f0f\u4f1a\u4f7f\u5e94\u7528\u7a0b\u5e8f\u6b63\u5728\u64ad\u653e\u7684\u4efb\u4f55\u97f3\u9891\u9759\u97f3\u3002"}),"\n",(0,o.jsx)(i.li,{children:"\u5728 iOS \u4e2d\uff0c\u9501\u5b9a\u8bbe\u5907\u4f1a\u4f7f\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u9759\u97f3\u3002"}),"\n"]}),"\n",(0,o.jsx)(i.p,{children:"\u5c3d\u7ba1\u9ed8\u8ba4\u97f3\u9891\u4f1a\u8bdd\u63d0\u4f9b\u4e86\u6709\u7528\u7684\u884c\u4e3a\uff0c\u4f46\u5b83\u901a\u5e38\u4e0d\u63d0\u4f9b\u5a92\u4f53\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u97f3\u9891\u884c\u4e3a\u3002\u8981\u66f4\u6539\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f60\u53ef\u4ee5\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b\u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u516d\u79cd\u53ef\u80fd\u7684\u7c7b\u522b\uff0c\u4f46 playback \u662f\u64ad\u653e\u5e94\u7528\u7a0b\u5e8f\u6700\u5e38\u4f7f\u7528\u7684\u7c7b\u522b\u3002\u8be5\u7c7b\u522b\u8868\u660e\u97f3\u9891\u64ad\u653e\u662f\u4f60\u5e94\u7528\u7a0b\u5e8f\u7684\u6838\u5fc3\u529f\u80fd\u3002\u5f53\u4f60\u6307\u5b9a\u8be5\u7c7b\u522b\u65f6\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u5c06\u7ee7\u7eed\uff0c\u5e76\u5c06\u54cd\u94c3/\u9759\u97f3\u5f00\u5173\u8bbe\u7f6e\u4e3a\u9759\u97f3\u6a21\u5f0f\uff08\u4ec5\u9650 iOS\uff09\u3002\u5982\u679c\u4f60\u4f7f\u7528\u97f3\u9891\u3001AirPlay \u548c\u753b\u4e2d\u753b\u80cc\u666f\u6a21\u5f0f\uff0c\u5219\u8fd8\u53ef\u4ee5\u4f7f\u7528\u8be5\u7c7b\u522b\u64ad\u653e\u80cc\u666f\u97f3\u9891\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Enabling Background Audio \u3002"}),"\n",(0,o.jsx)(i.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528 AVAudioSession \u5bf9\u8c61\u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u4f1a\u8bdd\u3002\u8be5\u7c7b\u662f\u4e00\u4e2a\u5355\u4f8b\u5bf9\u8c61\uff0c\u7528\u4e8e\u8bbe\u7f6e\u97f3\u9891\u4f1a\u8bdd\u7684\u7c7b\u522b\u3001\u6a21\u5f0f\u548c\u5176\u5b83\u914d\u7f6e\u3002\u4f60\u53ef\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\u4e2d\u4e0e\u97f3\u9891\u4f1a\u8bdd\u8fdb\u884c\u4ea4\u4e92\uff0c\u4f46\u5728\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u65f6\u6267\u884c\u6b64\u914d\u7f6e\u901a\u5e38\u5f88\u6709\u7528\uff0c\u5982\u4ee5\u4e0b\u793a\u4f8b\u6240\u793a\u3002"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-swift",children:'func configureAudioSession() {\n    // Retrieve the shared audio session.\n    let audioSession = AVAudioSession.sharedInstance()\n    do {\n        // Set the audio session category and mode.\n        try audioSession.setCategory(.playback, mode: .moviePlayback)\n    } catch {\n        print("Failed to set the audio session configuration")\n    }\n}\n'})}),"\n",(0,o.jsxs)(i.p,{children:["\u5f53\u4f60\u4f7f\u7528 setActive(",(0,o.jsx)(i.em,{children:":) \u6216 setActive("}),":options:) \u65b9\u6cd5\u6fc0\u6d3b\u4f1a\u8bdd\u65f6\uff0c\u97f3\u9891\u4f1a\u8bdd\u5c06\u4f7f\u7528\u6b64\u914d\u7f6e\u3002"]}),"\n",(0,o.jsx)(i.admonition,{type:"note",children:(0,o.jsx)(i.p,{children:"\u4f60\u53ef\u4ee5\u5728\u8bbe\u7f6e\u5176\u7c7b\u522b\u540e\u968f\u65f6\u6fc0\u6d3b\u97f3\u9891\u4f1a\u8bdd\uff0c\u4f46\u901a\u5e38\u6700\u597d\u63a8\u8fdf\u6b64\u8c03\u7528\uff0c\u76f4\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5f00\u59cb\u97f3\u9891\u64ad\u653e\u3002\u63a8\u8fdf\u901a\u8bdd\u53ef\u786e\u4fdd\u4f60\u4e0d\u4f1a\u8fc7\u65e9\u4e2d\u65ad\u53ef\u80fd\u6b63\u5728\u8fdb\u884c\u7684\u4efb\u4f55\u5176\u5b83\u80cc\u666f\u97f3\u9891\u3002"})})]})}function l(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function p(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>a});var o=n(67294);const s={},t=o.createContext(s);function a(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);