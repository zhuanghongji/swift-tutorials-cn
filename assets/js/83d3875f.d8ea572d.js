"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[9199],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="\u7ed3\u5408\u97f3\u9891\u6548\u679c\u548c\u4e50\u5668",s={unversionedId:"audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/index",id:"audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/index",title:"\u7ed3\u5408\u97f3\u9891\u6548\u679c\u548c\u4e50\u5668",description:"<OriginalSource",source:"@site/docs/audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/index.mdx",sourceDirName:"audio-toolbox/audio-units/incorporating-audio-effects-and-instruments",slug:"/audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"audiotoolboxSidebar",previous:{title:"\u4f7f\u7528 AUv2 API \u6258\u7ba1\u97f3\u9891\u5355\u5143\u6269\u5c55",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/hosting-audio-unit-extensions-using-the-auv2-api/"},next:{title:"AUAudioUnit",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/au-audio-unit/"}},u={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u67e5\u627e\u97f3\u9891\u5355\u5143",id:"\u67e5\u627e\u97f3\u9891\u5355\u5143",level:2},{value:"\u5b9e\u4f8b\u5316\u97f3\u9891\u5355\u5143",id:"\u5b9e\u4f8b\u5316\u97f3\u9891\u5355\u5143",level:2},{value:"\u5448\u73b0\u97f3\u9891\u5355\u5143\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe",id:"\u5448\u73b0\u97f3\u9891\u5355\u5143\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe",level:2},{value:"\u9009\u62e9\u66ff\u4ee3\u89c6\u56fe\u914d\u7f6e",id:"\u9009\u62e9\u66ff\u4ee3\u89c6\u56fe\u914d\u7f6e",level:2},{value:"\u52a0\u8f7d\u5de5\u5382\u9884\u8bbe",id:"\u52a0\u8f7d\u5de5\u5382\u9884\u8bbe",level:2},{value:"\u7ba1\u7406\u7528\u6237\u9884\u8bbe",id:"\u7ba1\u7406\u7528\u6237\u9884\u8bbe",level:2},{value:"\u9009\u62e9\u5de5\u5382\u548c\u7528\u6237\u9884\u8bbe",id:"\u9009\u62e9\u5de5\u5382\u548c\u7528\u6237\u9884\u8bbe",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=p("ToBePolishedAfterTranslation"),c=p("OriginalSource"),m={toc:l},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7ed3\u5408\u97f3\u9891\u6548\u679c\u548c\u4e50\u5668"},"\u7ed3\u5408\u97f3\u9891\u6548\u679c\u548c\u4e50\u5668"),(0,o.kt)(d,{mdxType:"ToBePolishedAfterTranslation"}),(0,o.kt)(c,{title:"Incorporating audio effects and instruments",url:"https://developer.apple.com/documentation/audiotoolbox/audio_unit_v3_plug-ins/incorporating_audio_effects_and_instruments",summary:"\u901a\u8fc7\u6258\u7ba1\u97f3\u9891\u5355\u5143 (AU) \u63d2\u4ef6\uff0c\u5c06\u81ea\u5b9a\u4e49\u97f3\u9891\u5904\u7406\u548c MIDI \u4e50\u5668\u6dfb\u52a0\u5230\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d",mdxType:"OriginalSource"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u6b64\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u5411\u4f60\u5c55\u793a\u5982\u4f55\u5728 iOS \u548c macOS \u5e94\u7528\u7a0b\u5e8f\u4e2d\u4f7f\u7528 AU \u63d2\u4ef6\u3002\u4f60\u67e5\u627e\u5e76\u5b9e\u4f8b\u5316\u63d2\u4ef6\uff0c\u5c06\u5176\u7528\u6237\u754c\u9762\u5408\u5e76\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u754c\u9762\u4e2d\uff0c\u5e76\u4f7f\u7528\u5176\u9884\u8bbe\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u6709\u9488\u5bf9 iOS \u548c macOS \u7684\u76ee\u6807\u3002\u4e24\u4e2a\u7248\u672c\u90fd\u6709\u4e09\u4e2a\u4e3b\u8981\u7c7b\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HostViewController \u53ca\u5176\u5173\u8054\u7684 Storyboard \u63d0\u4f9b\u7528\u6237\u754c\u9762\u3002"),(0,o.kt)("li",{parentName:"ul"},"AudioUnitManager \u7ba1\u7406\u4e0e\u6548\u679c\u548c\u4e50\u5668\u63d2\u4ef6\u7684\u4ea4\u4e92\u3002"),(0,o.kt)("li",{parentName:"ul"},"SimplePlayEngine \u4f7f\u7528 AVAudioEngine \u64ad\u653e\u97f3\u9891\u6837\u672c\u548c MIDI \u6570\u636e\u3002")),(0,o.kt)("h2",{id:"\u67e5\u627e\u97f3\u9891\u5355\u5143"},"\u67e5\u627e\u97f3\u9891\u5355\u5143"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u5b9a\u4e49\u641c\u7d22\u6761\u4ef6\u7684 AudioComponentDescription \u6765\u67e5\u627e\u5728\u4e3b\u673a\u7cfb\u7edf\u4e2d\u6ce8\u518c\u7684\u97f3\u9891\u5355\u5143\u3002\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u641c\u7d22\u7ec4\u4ef6\u7c7b\u578b\uff0c\u97f3\u9891\u6548\u679c ( kAudioUnitType_Effect ) \u6216 MIDI \u4e50\u5668 ( kAudioUnitType_MusicDevice )\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f20\u9012 AudioComponentDescription \u7684\u5176\u4ed6\u5b57\u6bb5\u7684\u503c\uff0c\u6216\u4f20\u9012 0 \u4f5c\u4e3a\u5339\u914d\u6240\u6709\u503c\u7684\u901a\u914d\u7b26\u3002\u83b7\u53d6 AVAudioUnitComponentManager \u7684\u5171\u4eab\u5b9e\u4f8b\u5e76\u8c03\u7528\u5176 components(matching:) \u65b9\u6cd5\u6765\u67e5\u627e\u4e0e\u4f60\u7684\u641c\u7d22\u6761\u4ef6\u5339\u914d\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let componentType = type == .effect ? kAudioUnitType_Effect : kAudioUnitType_MusicDevice\n\n // Make a component description matching any Audio Unit of the selected component type.\nlet description = AudioComponentDescription(componentType: componentType,\n                                            componentSubType: 0,\n                                            componentManufacturer: 0,\n                                            componentFlags: 0,\n                                            componentFlagsMask: 0)\n\nlet components = AVAudioUnitComponentManager.shared().components(matching: description)\n")),(0,o.kt)("p",null,"\u6b64\u65b9\u6cd5\u8fd4\u56de\u4e0e\u7ec4\u4ef6\u63cf\u8ff0\u5339\u914d\u7684 AVAudioUnitComponent \u5bf9\u8c61\u6570\u7ec4\uff0c\u5982\u679c\u672a\u627e\u5230\u5339\u914d\u9879\uff0c\u5219\u8fd4\u56de\u7a7a\u6570\u7ec4\u3002\u4f60\u53ef\u4ee5\u8bbf\u95ee\u7ec4\u4ef6\u7684\u5c5e\u6027\u6765\u786e\u5b9a\u5176\u529f\u80fd\u5e76\u67e5\u627e\u6807\u8bc6\u503c\uff0c\u4f8b\u5982\u5176\u540d\u79f0\u548c\u5236\u9020\u5546\uff0c\u4ee5\u663e\u793a\u5728\u7528\u6237\u754c\u9762\u4e2d\u3002"),(0,o.kt)("h2",{id:"\u5b9e\u4f8b\u5316\u97f3\u9891\u5355\u5143"},"\u5b9e\u4f8b\u5316\u97f3\u9891\u5355\u5143"),(0,o.kt)("p",null,"\u5f53\u7528\u6237\u5728\u7528\u6237\u754c\u9762\u4e2d\u9009\u62e9\u97f3\u9891\u5355\u5143\u65f6\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u627e\u5230\u8be5\u7ec4\u4ef6\u5e76\u5b9e\u4f8b\u5316\u5b83\u3002"),(0,o.kt)("p",null,"iOS \u652f\u6301\u4f7f\u7528\u6700\u65b0\u97f3\u9891\u5355\u5143\u6807\u51c6 (AUv3) \u6784\u5efa\u7684\u7b2c\u4e09\u65b9\u63d2\u4ef6\uff0c\u8be5\u6807\u51c6\u57fa\u4e8e\u5e94\u7528\u7a0b\u5e8f\u6269\u5c55\u6a21\u578b\u3002\u4e0e iOS \u4e2d\u7684\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u6269\u5c55\u4e00\u6837\uff0cAUv3 \u63d2\u4ef6\u5728\u8fdb\u7a0b\u5916\u8fd0\u884c\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u4eec\u5728\u5e94\u7528\u7a0b\u5e8f\u5916\u90e8\u7684\u4e13\u7528\u8fdb\u7a0b\u4e2d\u8fd0\u884c\uff0c\u5e76\u4e14\u4e0e\u6269\u5c55\u7a0b\u5e8f\u7684\u901a\u4fe1\u662f\u901a\u8fc7\u8fdb\u7a0b\u95f4\u901a\u4fe1 (IPC) \u5b8c\u6210\u7684\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u8c03\u7528 instantiate(with:options:completionHandler:) \u65b9\u6cd5\u5e76\u5411\u5176\u4f20\u9012\u7ec4\u4ef6\u63cf\u8ff0\u6765\u5b9e\u4f8b\u5316 AU\u3002\u5982\u679c\u8fdb\u7a0b\u5931\u8d25\uff0c\u6b64\u65b9\u6cd5\u4f1a\u5f02\u6b65\u8fd4\u56de\u5b9e\u4f8b\u5316\u7684 AVAudioUnit \u6216 Error \u3002\u5b9e\u4f8b\u5316\u97f3\u9891\u5355\u5143\u65f6\uff0c\u5fc5\u987b\u907f\u514d\u963b\u585e\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u7ebf\u7a0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// Instantiate the Audio Unit\nAVAudioUnit.instantiate(with: description) { avAudioUnit, error in\n   // Use Audio Unit or handle error\n}\n")),(0,o.kt)("p",null,"\u5728 macOS \u4e2d\uff0cAUv3 \u63d2\u4ef6\u4e5f\u9ed8\u8ba4\u5728\u8fdb\u7a0b\u5916\u8fd0\u884c\u3002\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8fd0\u884c\u97f3\u9891\u5355\u5143\u66f4\u52a0\u5b89\u5168\uff0c\u56e0\u4e3a\u884c\u4e3a\u4e0d\u5f53\u7684\u63d2\u4ef6\u4e0d\u4f1a\u635f\u574f\u6216\u5d29\u6e83\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u7136\u800c\uff0c\u8be5\u6a21\u578b\u6240\u9700\u7684\u8fdb\u7a0b\u95f4\u901a\u4fe1\u589e\u52a0\u4e86\u4e00\u4e9b\u5c0f\u4f46\u53ef\u80fd\u663e\u7740\u7684\u5f00\u9500\u3002\u8fd9\u5728\u4f7f\u7528\u591a\u4e2a\u97f3\u9891\u5355\u5143\u7684\u4e13\u4e1a\u97f3\u9891\u73af\u5883\u4e2d\u53ef\u80fd\u4f1a\u51fa\u73b0\u95ee\u9898\uff0c\u7279\u522b\u662f\u5728\u4ee5\u8f83\u5c0f\u7684\u97f3\u9891 I/O \u7f13\u51b2\u533a\u5927\u5c0f\u8fdb\u884c\u6e32\u67d3\u65f6\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cAU \u4f5c\u8005\u53ef\u4ee5\u5c06\u4ed6\u4eec\u7684\u63d2\u4ef6\u6253\u5305\u4ee5\u5728\u8fdb\u7a0b\u4e2d\u8fd0\u884c\u3002\u4ec5\u5728 macOS \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06\u8be5\u5b9e\u4f8b\u5316\u9009\u9879\u4f20\u9012\u7ed9 instantiate \u65b9\u6cd5\u6765\u52a0\u8f7d\u9002\u5f53\u6253\u5305\u7684\u63d2\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let options: AudioComponentInstantiationOptions = .loadInProcess\n\n// Instantiate the Audio Unit\nAVAudioUnit.instantiate(with: description, options: options) { avAudioUnit, error in\n   // Use Audio Unit or handle error\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"iOS \u548c macOS \u652f\u6301\u4f7f\u7528\u73b0\u6709\u7684 AUv2 \u63d2\u4ef6\u3002 iOS \u4ec5\u652f\u6301\u64cd\u4f5c\u7cfb\u7edf\u63d0\u4f9b\u7684\u63d2\u4ef6\uff0c\u4f46 macOS \u4e5f\u652f\u6301\u7b2c\u4e09\u65b9 AUv2 \u63d2\u4ef6\u3002\u5728\u8fd9\u4e24\u4e2a\u5e73\u53f0\u4e2d\uff0c\u8fd9\u4e9b\u63d2\u4ef6\u59cb\u7ec8\u4f5c\u4e3a\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u8fdb\u7a0b\u7684\u4e00\u90e8\u5206\u8fd0\u884c\u3002")),(0,o.kt)("h2",{id:"\u5448\u73b0\u97f3\u9891\u5355\u5143\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe"},"\u5448\u73b0\u97f3\u9891\u5355\u5143\u7684\u81ea\u5b9a\u4e49\u89c6\u56fe"),(0,o.kt)("p",null,"\u63d2\u4ef6\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7528\u6237\u754c\u9762\u6765\u63a7\u5236\u5176\u53c2\u6570\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5411\u63d2\u4ef6\u8be2\u95ee\u5176\u89c6\u56fe\u63a7\u5236\u5668\u6765\u83b7\u53d6\u81ea\u5b9a\u4e49\u89c6\u56fe\uff0c\u8be5\u63a7\u5236\u5668\u8fd4\u56de AUViewController \u7684\u5b9e\u4f8b\uff0c\u5982\u679c\u4e0d\u63d0\u4f9b\u81ea\u5b9a\u4e49\u89c6\u56fe\uff0c\u5219\u8fd4\u56de nil \u7684\u5b9e\u4f8b\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u9002\u5408\u4f60\u5e73\u53f0\u7684\u65b9\u6cd5\u5c06\u89c6\u56fe\u63a7\u5236\u5668\u7684\u89c6\u56fe\u6dfb\u52a0\u5230\u4f60\u7684\u7528\u6237\u754c\u9762\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func loadAudioUnitViewController(completion: @escaping (ViewController?) -> Void) {\n    if let audioUnit = audioUnit {\n        audioUnit.requestViewController { viewController in\n            DispatchQueue.main.async {\n                completion(viewController)\n            }\n        }\n    } else {\n        completion(nil)\n    }\n}\n")),(0,o.kt)("h2",{id:"\u9009\u62e9\u66ff\u4ee3\u89c6\u56fe\u914d\u7f6e"},"\u9009\u62e9\u66ff\u4ee3\u89c6\u56fe\u914d\u7f6e"),(0,o.kt)("p",null,"\u6240\u6709 AU \u63d2\u4ef6\u90fd\u53ef\u4ee5\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7528\u6237\u754c\u9762\uff0c\u4f46 AUv3 \u63d2\u4ef6\u4e5f\u53ef\u80fd\u63d0\u4f9b\u66ff\u4ee3\u89c6\u56fe\u3002\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u89c6\u56fe\u914d\u7f6e\u3002\u4f8b\u5982\uff0ciOS \u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u63d0\u4f9b\u7d27\u51d1\u89c6\u56fe\u548c\u6269\u5c55\u89c6\u56fe\uff0c\u5e76\u6839\u636e\u8bbe\u5907\u5927\u5c0f\u6216\u65b9\u5411\u5728\u5b83\u4eec\u4e4b\u95f4\u5207\u6362\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 AUAudioUnitViewConfiguration \u7c7b\u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a\u53d7\u652f\u6301\u7684\u89c6\u56fe\u914d\u7f6e\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"private var currentViewConfigurationIndex = 1\n\n/// View configurations supported by the host app\nprivate var viewConfigurations: [AUAudioUnitViewConfiguration] = {\n    let compact = AUAudioUnitViewConfiguration(width: 400, height: 100, hostHasController: false)\n    let expanded = AUAudioUnitViewConfiguration(width: 800, height: 500, hostHasController: false)\n    return [compact, expanded]\n}()\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u89c6\u56fe\u914d\u7f6e\u5bf9\u8c61\u7684 hostHasController \u5c5e\u6027\u6307\u793a\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u662f\u5426\u5e94\u663e\u793a\u5176\u89c6\u56fe\u914d\u7f6e\u7684\u63a7\u5236\u754c\u9762\u3002\u4e3b\u673a\u5e94\u7528\u7a0b\u5e8f\u5e94\u5c0a\u91cd\u6b64\u8bbe\u7f6e\u5e76\u76f8\u5e94\u5730\u66f4\u65b0\u5176\u7528\u6237\u754c\u9762\u3002")),(0,o.kt)("p",null,"\u4e3b\u673a\u53ef\u4ee5\u8be2\u95ee\u63d2\u4ef6\u5b83\u652f\u6301\u54ea\u4e9b\u81ea\u5b9a\u4e49\u89c6\u56fe\u914d\u7f6e\uff08\u5982\u679c\u6709\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let supportedConfigurations = audioUnit.supportedViewConfigurations(viewConfigurations)\n")),(0,o.kt)("p",null,"\u5f53\u4e3b\u673a\u5728\u5176\u652f\u6301\u7684\u914d\u7f6e\u4e4b\u95f4\u5207\u6362\u65f6\uff0c\u5b83\u53ef\u4ee5\u8981\u6c42\u97f3\u9891\u5355\u5143\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\u3002\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u5b9a\u4e49\u4e86\u4e24\u79cd\u914d\u7f6e\u5e76\u5c1d\u8bd5\u5728\u5b83\u4eec\u4e4b\u95f4\u5207\u6362\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"/// Toggles the current view mode (compact or expanded)\nfunc toggleViewMode() {\n    guard let audioUnit = audioUnit else { return }\n    currentViewConfigurationIndex = currentViewConfigurationIndex == 0 ? 1 : 0\n    audioUnit.select(viewConfigurations[currentViewConfigurationIndex])\n}\n")),(0,o.kt)("h2",{id:"\u52a0\u8f7d\u5de5\u5382\u9884\u8bbe"},"\u52a0\u8f7d\u5de5\u5382\u9884\u8bbe"),(0,o.kt)("p",null,"\u63d2\u4ef6\u4f5c\u8005\u53ef\u4ee5\u9009\u62e9\u63d0\u4f9b\u4e00\u4e2a\u6216\u591a\u4e2a\u9884\u8bbe\u6765\u5b9a\u4e49\u63d2\u4ef6\u53c2\u6570\u503c\u7684\u7279\u5b9a\u914d\u7f6e\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 factoryPresets \u5c5e\u6027\u8bbf\u95ee AUAudioUnit \u5bf9\u8c61\u7684\u9884\u8bbe\uff0c\u8be5\u5c5e\u6027\u8fd4\u56de AUAudioUnitPreset \u5b9e\u4f8b\u7684\u6570\u7ec4\uff0c\u5982\u679c\u6ca1\u6709\u5b9a\u4e49\uff0c\u5219\u8fd4\u56de\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"/// Gets the audio unit's factory presets.\npublic var factoryPresets: [Preset] {\n    guard let presets = audioUnit?.factoryPresets else { return [] }\n    return presets.map { Preset(preset: $0) }\n}\n")),(0,o.kt)("p",null,"\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u540d\u4e3a Preset \u7684\u7b80\u5355\u5305\u88c5\u7c7b\u578b\u6765\u4f20\u9012\u5230\u7528\u6237\u754c\u9762\u5c42\u3002\u89c6\u56fe\u63a7\u5236\u5668\u4f7f\u7528\u8fd9\u4e9b\u5bf9\u8c61\u6765\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u9884\u8bbe\u9009\u62e9\u754c\u9762\u3002"),(0,o.kt)("h2",{id:"\u7ba1\u7406\u7528\u6237\u9884\u8bbe"},"\u7ba1\u7406\u7528\u6237\u9884\u8bbe"),(0,o.kt)("p",null,"\u63d2\u4ef6\u8fd8\u53ef\u4ee5\u652f\u6301\u7528\u6237\u9884\u8bbe\uff0c\u5373\u7528\u6237\u914d\u7f6e\u7684\u53c2\u6570\u8bbe\u7f6e\u3002\u4f60\u67e5\u8be2\u97f3\u9891\u5355\u5143\u7684 supportsUserPresets \u5c5e\u6027\u4ee5\u786e\u5b9a\u5b83\u662f\u5426\u652f\u6301\u4fdd\u5b58\u7528\u6237\u9884\u8bbe\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"var supportsUserPresets: Bool {\n    return audioUnit?.supportsUserPresets ?? false\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u63d2\u4ef6\u652f\u6301\u7528\u6237\u9884\u8bbe\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u8be2\u5176 userPresets \u5c5e\u6027\u6765\u83b7\u53d6\u5f53\u524d\u4fdd\u5b58\u7684\u9884\u8bbe\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"/// Gets the audio unit's user presets.\npublic var userPresets: [Preset] {\n    guard let presets = audioUnit?.userPresets else { return [] }\n    return presets.map { Preset(preset: $0) }.reversed()\n}\n")),(0,o.kt)("p",null,"\u8981\u6536\u5230\u97f3\u9891\u5355\u5143\u7528\u6237\u9884\u8bbe\u66f4\u6539\u7684\u901a\u77e5\uff0c\u4f60\u53ef\u4ee5\u5411 userPresets \u5c5e\u6027\u6dfb\u52a0\u4e00\u4e2a\u952e\u503c\u89c2\u5bdf\u5668\u3002\u901a\u8fc7\u89c2\u5bdf\u6b64\u5c5e\u6027\u7684\u66f4\u6539\uff0c\u4f60\u5c06\u5728\u6dfb\u52a0\u6216\u5220\u9664\u9884\u8bbe\u65f6\u6536\u5230\u56de\u8c03\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// Add key-value observer to the userPresets property.\nobservation = audioUnit?.observe(\\.userPresets) { _, _ in\n    // User presets changed. Update the user interface.\n}\n")),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u65b0\u7684\u7528\u6237\u9884\u8bbe\uff0c\u8bf7\u9996\u5148\u521b\u5efa AUAudioUnitPreset \u7684\u5b9e\u4f8b\uff0c\u5e76\u4e3a\u5176\u6307\u5b9a\u7528\u6237\u5b9a\u4e49\u7684\u540d\u79f0\u548c\u8d1f\u7684 number \u503c\uff08\u7528\u6237\u9884\u8bbe\u8981\u6c42\u8be5\u5c5e\u6027\u5177\u6709\u8d1f\u503c\uff09\u3002\u7136\u540e\u8c03\u7528 saveUserPreset(","_",":) \u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u4f1a\u4fdd\u7559\u53c2\u6570\u72b6\u6001\uff0c\u4ee5\u4fbf\u97f3\u9891\u5355\u5143\u7a0d\u540e\u53ef\u4ee5\u8c03\u7528\u5b83\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"let preset = AUAudioUnitPreset()\npreset.name = \u201cA Custom Preset\u201d\npreset.number = -1\n\n// Save the preset\u2019s parameter state.\ndo {\n    try audioUnit.saveUserPreset(preset)\n} catch {\n    // Handle the error.\n}\n")),(0,o.kt)("p",null,"\u5982\u679c\u7528\u6237\u51b3\u5b9a\u5220\u9664\u6b64\u6216\u53e6\u4e00\u4e2a\u7528\u6237\u9884\u8bbe\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 deleteUserPreset(","_",":) \u5c06\u5176\u5220\u9664\u3002"),(0,o.kt)("h2",{id:"\u9009\u62e9\u5de5\u5382\u548c\u7528\u6237\u9884\u8bbe"},"\u9009\u62e9\u5de5\u5382\u548c\u7528\u6237\u9884\u8bbe"),(0,o.kt)("p",null,"\u8981\u9009\u62e9\u5de5\u5382\u6216\u7528\u6237\u9884\u8bbe\uff0c\u8bf7\u5c06\u5176\u8bbe\u7f6e\u4e3a\u97f3\u9891\u5355\u5143\u7684 currentPreset \u5c5e\u6027\u3002\u8fd9\u4f1a\u5c06\u63d2\u4ef6\u7684\u53c2\u6570\u72b6\u6001\u6062\u590d\u4e3a\u4f7f\u7528\u6307\u5b9a\u9884\u8bbe\u5b58\u50a8\u7684\u503c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"/// Get or set the audio unit's current preset.\npublic var currentPreset: Preset? {\n    get {\n        guard let preset = audioUnit?.currentPreset else { return nil }\n        return Preset(preset: preset)\n    }\n    set {\n        audioUnit?.currentPreset = newValue?.audioUnitPreset\n    }\n}\n")))}g.isMDXComponent=!0}}]);