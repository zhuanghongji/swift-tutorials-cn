(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4101],{77059:(e,n,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/image_1.da648a6.964.png 964w",images:[{path:i.p+"assets/ideal-img/image_1.da648a6.964.png",width:964,height:516}],src:i.p+"assets/ideal-img/image_1.da648a6.964.png",toString:function(){return i.p+"assets/ideal-img/image_1.da648a6.964.png"},placeholder:void 0,width:964,height:516},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAIAAADzBuo/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAe0lEQVR4nFXLWw6CMBCF4e6EMr3MtB1apEYlUqAocf87MoovJuftO7+wTJxTf82UgmH6LKAOiNFbJiFRNRY4p/JY77WEIfpTp7xpLAAZAaQlastuftbvY76UUaJqSYP7scLo132rr324ncGZlvQfG3bTNo/L1OX+SA9+A+I5Gf1fU1TLAAAAAElFTkSuQmCC"}},50121:(e,n,i)=>{"use strict";i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var o=i(85893),a=i(11151);const t={},s="\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8fdb\u884c\u5a92\u4f53\u64ad\u653e",r={id:"av-foundation/esseentials/configuring-your-app-for-media-playback/index",title:"\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8fdb\u884c\u5a92\u4f53\u64ad\u653e",description:"<OriginalSource",source:"@site/docs/av-foundation/esseentials/configuring-your-app-for-media-playback/index.mdx",sourceDirName:"av-foundation/esseentials/configuring-your-app-for-media-playback",slug:"/av-foundation/esseentials/configuring-your-app-for-media-playback/",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/configuring-your-app-for-media-playback/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/av-foundation/esseentials/configuring-your-app-for-media-playback/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"avfoundationSidebar",previous:{title:"\u6807\u9898\u521b\u4f5c",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/caption-authoring/"},next:{title:"\u63a7\u5236\u64ad\u653e\u5668\u7684\u4f20\u64ad\u884c\u4e3a",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/controlling-the-transport-behavior-of-a-player/"}},l={},c=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd",id:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd",level:2},{value:"\u914d\u7f6e\u540e\u53f0\u6a21\u5f0f",id:"\u914d\u7f6e\u540e\u53f0\u6a21\u5f0f",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Figure:t,OriginalSource:s,ToBePolishedAfterTranslation:r}=n;return t||u("Figure",!0),s||u("OriginalSource",!0),r||u("ToBePolishedAfterTranslation",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8fdb\u884c\u5a92\u4f53\u64ad\u653e",children:"\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee5\u8fdb\u884c\u5a92\u4f53\u64ad\u653e"}),"\n",(0,o.jsx)(r,{}),"\n",(0,o.jsx)(s,{title:"Configuring your app for media playback",url:"https://developer.apple.com/documentation/avfoundation/media_playback/configuring_your_app_for_media_playback",summary:"\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u4ee5\u542f\u7528\u6807\u51c6\u5a92\u4f53\u64ad\u653e\u884c\u4e3a"}),"\n",(0,o.jsx)(n.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,o.jsx)(n.p,{children:"\u5f53\u4f60\u4e3a iOS\u3001tvOS \u548c VisionOS \u6784\u5efa\u5a92\u4f53\u64ad\u653e\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u4f60\u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u914d\u7f6e\u624d\u80fd\u5b9e\u73b0\u9884\u671f\u7684\u64ad\u653e\u884c\u4e3a\u3002\u914d\u7f6e\u97f3\u9891\u4f53\u9a8c\u548c\u540e\u53f0\u64cd\u4f5c\u6709\u52a9\u4e8e\u786e\u4fdd\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u6309\u9884\u671f\u5de5\u4f5c\u3002\u5b83\u8fd8\u53ef\u4ee5\u5728\u652f\u6301\u7684\u5e73\u53f0\u4e0a\u542f\u7528 AirPlay \u6d41\u5a92\u4f53\u548c\u753b\u4e2d\u753b\u64ad\u653e\u7b49\u9ad8\u7ea7\u529f\u80fd\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd",children:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd"}),"\n",(0,o.jsx)(n.p,{children:"\u9664\u4e86\u4e3b\u8981\u5c06\u63a7\u5236\u6743\u4ea4\u7ed9\u5e94\u7528\u7a0b\u5e8f\u7684 macOS \u4e4b\u5916\uff0cApple \u5e73\u53f0\u63d0\u4f9b\u7531\u64cd\u4f5c\u7cfb\u7edf\u7ba1\u7406\u7684\u97f3\u9891\u4f53\u9a8c\u3002\u8fd9\u4f7f\u5f97\u64cd\u4f5c\u7cfb\u7edf\u80fd\u591f\u5728\u4eba\u4eec\u5728\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5207\u6362\u5e76\u63a5\u6536\u9ad8\u4f18\u5148\u7ea7\u97f3\u9891\u8bf7\u6c42\uff08\u4f8b\u5982\u7535\u8bdd\u6216 FaceTime \u901a\u8bdd\uff09\u65f6\u4e3a\u4ed6\u4eec\u63d0\u4f9b\u65e0\u7f1d\u7684\u97f3\u9891\u4f53\u9a8c\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528 AVAudioSession \u5728\u8bed\u4e49\u4e0a\u914d\u7f6e\u5176\u97f3\u9891\u884c\u4e3a\uff0c\u4f8b\u5982\u5177\u6709\u64ad\u653e\u6216\u5f55\u5236\u7684\u4e3b\u8981\u76ee\u7684\u3002\u4f60\u5c06\u8fd9\u4e9b\u7ec6\u8282\u7684\u7ba1\u7406\u59d4\u6258\u7ed9\u97f3\u9891\u4f1a\u8bdd\uff0c\u8fd9\u786e\u4fdd\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u6700\u597d\u5730\u7ba1\u7406\u4e00\u4e2a\u4eba\u7684\u97f3\u9891\u4f53\u9a8c\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u5177\u6709\u7cfb\u7edf\u914d\u7f6e\u7684\u97f3\u9891\u4f1a\u8bdd\uff0c\u9ed8\u8ba4\u884c\u4e3a\u5982\u4e0b\uff1a"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u97f3\u9891\u64ad\u653e\u4f1a\u4f7f\u5176\u5b83\u80cc\u666f\u97f3\u9891\u9759\u97f3"}),"\n",(0,o.jsx)(n.li,{children:"\u652f\u6301\u97f3\u9891\u64ad\u653e\uff0c\u4f46\u4e0d\u652f\u6301\u5f55\u97f3"}),"\n",(0,o.jsx)(n.li,{children:"\u5728 iOS \u4e2d\u5c06\u54cd\u94c3/\u9759\u97f3\u5f00\u5173\u8bbe\u7f6e\u4e3a\u9759\u97f3\u6a21\u5f0f\u4f1a\u4f7f\u5e94\u7528\u7a0b\u5e8f\u97f3\u9891\u9759\u97f3"}),"\n",(0,o.jsx)(n.li,{children:"iOS \u4e2d\u9501\u5b9a\u7684\u8bbe\u5907\u4f1a\u4f7f\u5e94\u7528\u7a0b\u5e8f\u97f3\u9891\u9759\u97f3"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u9ed8\u8ba4\u97f3\u9891\u4f1a\u8bdd\u63d0\u4f9b\u6709\u7528\u7684\u884c\u4e3a\uff0c\u4f46\u901a\u5e38\u4e0d\u63d0\u4f9b\u6784\u5efa\u64ad\u653e\u5e94\u7528\u7a0b\u5e8f\u65f6\u6240\u9700\u7684\u4f53\u9a8c\u548c\u529f\u80fd\u3002\u8981\u6dfb\u52a0\u6240\u9700\u7684\u884c\u4e3a\uff0c\u8bf7\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b\u5b9a\u4e49\u4e86\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6240\u9700\u7684\u4e00\u822c\u97f3\u9891\u884c\u4e3a\u3002 AVFoundation \u5b9a\u4e49\u4e86\u591a\u79cd\u4f60\u53ef\u4ee5\u4f7f\u7528\u7684\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b\uff0c\u4f46\u4e0e\u5a92\u4f53\u64ad\u653e\u5e94\u7528\u7a0b\u5e8f\u6700\u76f8\u5173\u7684\u7c7b\u522b\u662f playback \u3002\u8be5\u7c7b\u522b\u8868\u660e\u5a92\u4f53\u64ad\u653e\u662f\u4f60\u5e94\u7528\u7a0b\u5e8f\u7684\u6838\u5fc3\u529f\u80fd\u3002\u5f53\u4f60\u6307\u5b9a\u8be5\u7c7b\u522b\u65f6\uff0c\u5f53\u6709\u4eba\u5c06\u54cd\u94c3/\u9759\u97f3\u5f00\u5173\u8bbe\u7f6e\u4e3a\u9759\u97f3\u6a21\u5f0f\uff08\u4ec5\u5728 iOS \u4e2d\uff09\u65f6\uff0c\u7cfb\u7edf\u4e0d\u4f1a\u4f7f\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u9759\u97f3\u3002\u542f\u7528\u8be5\u7c7b\u522b\u610f\u5473\u7740\u5982\u679c\u4f60\u4f7f\u7528\u97f3\u9891\u3001AirPlay \u548c\u753b\u4e2d\u753b\u80cc\u666f\u6a21\u5f0f\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u64ad\u653e\u80cc\u666f\u97f3\u9891\uff0c\u5982\u4e0b\u8282\u6240\u8ff0\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528 AVAudioSession \u5bf9\u8c61\u6765\u914d\u7f6e\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u4f1a\u8bdd\u3002\u97f3\u9891\u4f1a\u8bdd\u662f\u4e00\u4e2a\u5355\u4f8b\u5bf9\u8c61\uff0c\u7528\u4e8e\u8bbe\u7f6e\u97f3\u9891\u4f1a\u8bdd category \u3001 mode \u548c\u5176\u5b83\u8bbe\u7f6e\u3002\u8981\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u4ee5\u4f18\u5316\u7535\u5f71\u64ad\u653e\uff1a"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-swift",children:"class PlayerModel: ObservableObject {\n\n    func configureAudioSession() {\n        do {\n            let session = AVAudioSession.sharedInstance()\n            // Configure the app for playback of long-form movies.\n            try session.setCategory(.playback, mode: .moviePlayback)\n        } catch {\n            // Handle error.\n        }\n    }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"\u8981\u542f\u7528\u8be5\u7c7b\u522b\uff0c\u8bf7\u4f7f\u7528 setActive(_:options:) \u65b9\u6cd5\u6fc0\u6d3b\u97f3\u9891\u4f1a\u8bdd\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728\u8bbe\u7f6e\u5176\u7c7b\u522b\u540e\u968f\u65f6\u6fc0\u6d3b\u97f3\u9891\u4f1a\u8bdd\uff0c\u4f46\u5efa\u8bae\u63a8\u8fdf\u6b64\u8c03\u7528\uff0c\u76f4\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5f00\u59cb\u97f3\u9891\u64ad\u653e\u3002\u63a8\u8fdf\u901a\u8bdd\u53ef\u786e\u4fdd\u4f60\u4e0d\u4f1a\u8fc7\u65e9\u4e2d\u65ad\u53ef\u80fd\u6b63\u5728\u8fdb\u884c\u7684\u4efb\u4f55\u5176\u5b83\u80cc\u666f\u97f3\u9891\u3002"})}),"\n",(0,o.jsx)(n.p,{children:"\u8bbe\u7f6e\u7c7b\u522b\u662f\u4e0e\u97f3\u9891\u4f1a\u8bdd\u7684\u6700\u5c0f\u4ea4\u4e92\uff0c\u4f46\u5176\u5b83\u914d\u7f6e\u9009\u9879\u548c\u529f\u80fd\u4e5f\u53ef\u7528\u3002\u4f8b\u5982\uff0c\u5728 visionOS \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u6765\u81ea\u5b9a\u4e49\u7528\u6237\u7684\u7a7a\u95f4\u97f3\u9891\u4f53\u9a8c\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 AVAudioSession \u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u914d\u7f6e\u540e\u53f0\u6a21\u5f0f",children:"\u914d\u7f6e\u540e\u53f0\u6a21\u5f0f"}),"\n",(0,o.jsx)(n.p,{children:"\u7cfb\u7edf\u8981\u6c42\u4f60\u542f\u7528\u67d0\u4e9b\u529f\u80fd\u6765\u6267\u884c\u67d0\u4e9b\u540e\u53f0\u64cd\u4f5c\u3002\u64ad\u653e\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u7684\u4e00\u4e2a\u5e38\u89c1\u529f\u80fd\u662f\u64ad\u653e\u80cc\u666f\u97f3\u9891\u3002\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u5f53\u4eba\u4eec\u5207\u6362\u5230\u53e6\u4e00\u4e2a\u5e94\u7528\u7a0b\u5e8f\u6216\u9501\u5b9a\u5176 iOS \u8bbe\u5907\u65f6\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u5c06\u7ee7\u7eed\u3002\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u8fd8\u9700\u8981\u6b64\u529f\u80fd\u624d\u80fd\u5728\u652f\u6301\u7684\u5e73\u53f0\u4e0a\u542f\u7528\u9ad8\u7ea7\u64ad\u653e\u529f\u80fd\uff0c\u4f8b\u5982 AirPlay \u6d41\u548c\u753b\u4e2d\u753b\u64ad\u653e\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4f7f\u7528 Xcode \u914d\u7f6e\u6b64\u529f\u80fd\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'\u5728 Xcode \u4e2d\u9009\u62e9\u5e94\u7528\u7a0b\u5e8f\u7684\u76ee\u6807\uff0c\u7136\u540e\u9009\u62e9"\u7b7e\u540d\u548c\u529f\u80fd"\u9009\u9879\u5361\u3002'}),"\n",(0,o.jsx)(n.li,{children:'\u5355\u51fb"+ \u529f\u80fd"\u6309\u94ae\u5e76\u5c06"\u80cc\u666f\u6a21\u5f0f"\u529f\u80fd\u6dfb\u52a0\u5230\u9879\u76ee\u4e2d\u3002'}),"\n",(0,o.jsx)(n.li,{children:'\u5728"\u80cc\u666f\u6a21\u5f0f"\u754c\u9762\u4e2d\uff0c\u5728\u80cc\u666f\u6a21\u5f0f\u5217\u8868\u4e0b\u9009\u62e9"\u97f3\u9891"\u3001"AirPlay"\u548c"\u753b\u4e2d\u753b"\u9009\u9879\u3002'}),"\n"]}),"\n",(0,o.jsx)(t,{src:i(77059),size:520}),"\n",(0,o.jsx)(n.p,{children:"\u542f\u7528\u6b64\u6a21\u5f0f\u5e76\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u540e\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5c31\u53ef\u4ee5\u64ad\u653e\u80cc\u666f\u97f3\u9891\u4e86\u3002\u5728 iOS \u4e2d\uff0c\u5f53\u4f60\u542f\u7528\u6b64\u9009\u9879\u65f6\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7 AirPlay \u6d41\u5f0f\u4f20\u8f93\u5176\u5185\u5bb9\uff0c\u5e76\u4e14\u5728 iOS \u548c tvOS \u4e2d\uff0c\u5b83\u53ef\u4ee5\u4f7f\u7528\u753b\u4e2d\u753b\u64ad\u653e\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,i)=>{"use strict";i.d(n,{Z:()=>r,a:()=>s});var o=i(67294);const a={},t=o.createContext(a);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);