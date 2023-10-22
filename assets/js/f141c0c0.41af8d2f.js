"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),f=o,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="\u4ece\u5185\u7f6e\u9ea6\u514b\u98ce\u6355\u83b7\u7acb\u4f53\u58f0\u97f3\u9891",s={unversionedId:"avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/index",id:"avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/index",title:"\u4ece\u5185\u7f6e\u9ea6\u514b\u98ce\u6355\u83b7\u7acb\u4f53\u58f0\u97f3\u9891",description:"<OriginalSource",source:"@site/docs/avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/index.mdx",sourceDirName:"avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones",slug:"/avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"avfaudioSidebar",previous:{title:"\u54cd\u5e94\u97f3\u9891\u8def\u7531\u53d8\u5316",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/responding-to-audio-route-changes/"},next:{title:"AVAudioSession",permalink:"/swift-tutorials-cn/docs/avf-audio/system-audio/av-audio-session/"}},u={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b",id:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b",level:2},{value:"\u9009\u62e9\u5e76\u914d\u7f6e\u5185\u7f6e\u9ea6\u514b\u98ce",id:"\u9009\u62e9\u5e76\u914d\u7f6e\u5185\u7f6e\u9ea6\u514b\u98ce",level:2},{value:"\u914d\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\u7684\u65b9\u5411\u6027",id:"\u914d\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\u7684\u65b9\u5411\u6027",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},c=p("ToBePolishedAfterTranslation"),d=p("OriginalSource"),f={toc:l},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ece\u5185\u7f6e\u9ea6\u514b\u98ce\u6355\u83b7\u7acb\u4f53\u58f0\u97f3\u9891"},"\u4ece\u5185\u7f6e\u9ea6\u514b\u98ce\u6355\u83b7\u7acb\u4f53\u58f0\u97f3\u9891"),(0,o.kt)(c,{mdxType:"ToBePolishedAfterTranslation"}),(0,o.kt)(d,{title:"Capturing stereo audio from built-in microphones",url:"https://developer.apple.com/documentation/avfaudio/capturing_stereo_audio_from_built-in_microphones",summary:"\u914d\u7f6e iOS \u8bbe\u5907\u7684\u5185\u7f6e\u9ea6\u514b\u98ce\u4ee5\u5411\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u6dfb\u52a0\u7acb\u4f53\u58f0\u5f55\u97f3\u529f\u80fd",mdxType:"OriginalSource"}),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"\u7acb\u4f53\u58f0\u97f3\u9891\u4f7f\u7528\u4e24\u4e2a\u58f0\u9053\u6765\u521b\u9020\u591a\u65b9\u5411\u58f0\u97f3\u7684\u5e7b\u89c9\uff0c\u8fd9\u4e3a\u4f60\u7684\u97f3\u9891\u589e\u52a0\u4e86\u66f4\u5927\u7684\u6df1\u5ea6\u548c\u7ef4\u5ea6\uff0c\u5e76\u5e26\u6765\u8eab\u4e34\u5176\u5883\u7684\u8046\u542c\u4f53\u9a8c\u3002 iOS \u63d0\u4f9b\u4e86\u591a\u79cd\u4ece\u5185\u7f6e\u9ea6\u514b\u98ce\u5f55\u5236\u97f3\u9891\u7684\u65b9\u6cd5\uff0c\u4f46\u5728 iOS 14 \u4e4b\u524d\uff0c\u4f60\u53ea\u80fd\u5f55\u5236\u5355\u58f0\u9053\u97f3\u9891\u3002\u5728 iOS 14 \u53ca\u66f4\u9ad8\u7248\u672c\u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u652f\u6301\u7684\u8bbe\u5907\u4e0a\u7684\u5185\u7f6e\u9ea6\u514b\u98ce\u6355\u83b7\u7acb\u4f53\u58f0\u97f3\u9891\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u591a\u79cd\u65b9\u5f0f\u63e1\u4f4f iOS \u8bbe\u5907\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u6307\u5b9a\u7acb\u4f53\u58f0\u573a\u4e2d\u5de6\u53f3\u58f0\u9053\u7684\u65b9\u5411\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u4ee5\u4e0b\u5185\u5bb9\u6765\u8bbe\u7f6e\u5185\u7f6e\u9ea6\u514b\u98ce\u7684\u65b9\u5411\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6781\u5730\u56fe\u6848\uff1a\u8be5\u7cfb\u7edf\u5c06\u5404\u4e2a\u8bbe\u5907\u9ea6\u514b\u98ce\u548c\u4f7f\u7528\u591a\u4e2a\u9ea6\u514b\u98ce\u7684\u6ce2\u675f\u5f62\u6210\u5668\u8868\u793a\u4e3a\u6570\u636e\u6e90\u3002\u9009\u62e9\u6b63\u9762\u6216\u80cc\u9762\u6570\u636e\u6e90\u5e76\u5c06\u5176\u6781\u5750\u6807\u6a21\u5f0f\u8bbe\u7f6e\u4e3a .stereo \u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8f93\u5165\u65b9\u5411\uff1a\u5f55\u5236\u89c6\u9891\u65f6\uff0c\u8bbe\u7f6e\u8f93\u5165\u65b9\u5411\u4ee5\u5339\u914d\u89c6\u9891\u65b9\u5411\u3002\u4ec5\u5f55\u5236\u97f3\u9891\u65f6\uff0c\u5c06\u8f93\u5165\u65b9\u5411\u8bbe\u7f6e\u4e3a\u4e0e\u7528\u6237\u754c\u9762\u65b9\u5411\u5339\u914d\u3002\u5728\u8fd9\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u52ff\u5728\u5f55\u5236\u671f\u95f4\u6539\u53d8\u65b9\u5411\u3002")),(0,o.kt)("p",null,"\u8be5\u793a\u4f8b\u4ee3\u7801\u9879\u76ee\u5c55\u793a\u4e86\u5982\u4f55\u914d\u7f6e\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee5\u5f55\u5236\u7acb\u4f53\u58f0\u97f3\u9891\uff0c\u5e76\u5e2e\u52a9\u4f60\u53ef\u89c6\u5316\u8f93\u5165\u65b9\u5411\u548c\u6570\u636e\u6e90\u9009\u62e9\u7684\u66f4\u6539\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u4f60\u9700\u8981\u5728\u8fd0\u884c iOS 14 \u6216\u66f4\u9ad8\u7248\u672c\u7684\u53d7\u652f\u6301\u7269\u7406\u8bbe\u5907\u4e0a\u8fd0\u884c\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u3002\u8981\u786e\u5b9a\u8bbe\u5907\u662f\u5426\u652f\u6301\u7acb\u4f53\u58f0\u5f55\u97f3\uff0c\u8bf7\u67e5\u8be2\u97f3\u9891\u4f1a\u8bdd\u7684\u9009\u5b9a\u6570\u636e\u6e90\u4ee5\u67e5\u770b\u5176 supportedPolarPatterns \u6570\u7ec4\u662f\u5426\u5305\u542b stereo \u6781\u6027\u6a21\u5f0f\u3002")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b"},"\u914d\u7f6e\u97f3\u9891\u4f1a\u8bdd\u7c7b\u522b"),(0,o.kt)("p",null,"\u5f55\u5236\u7acb\u4f53\u58f0\u97f3\u9891\u9700\u8981\u5e94\u7528\u7a0b\u5e8f\u7684\u97f3\u9891\u4f1a\u8bdd\u4f7f\u7528 record \u6216 playAndRecord \u7c7b\u522b\u3002\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528 playAndRecord \u7c7b\u522b\uff0c\u56e0\u6b64\u5b83\u53ef\u4ee5\u540c\u65f6\u6267\u884c\u8fd9\u4e24\u9879\u64cd\u4f5c\u3002\u5b83\u8fd8\u901a\u8fc7 defaultToSpeaker \u548c allowBluetooth \u9009\u9879\u5c06\u97f3\u9891\u8def\u7531\u5230\u626c\u58f0\u5668\u800c\u4e0d\u662f\u63a5\u6536\u5668\u4ee5\u53ca\u84dd\u7259\u8033\u673a\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func setupAudioSession() {\n    do {\n        let session = AVAudioSession.sharedInstance()\n        try session.setCategory(.playAndRecord, options: [.defaultToSpeaker, .allowBluetooth])\n        try session.setActive(true)\n    } catch {\n        fatalError("Failed to configure and activate session.")\n    }\n}\n')),(0,o.kt)("h2",{id:"\u9009\u62e9\u5e76\u914d\u7f6e\u5185\u7f6e\u9ea6\u514b\u98ce"},"\u9009\u62e9\u5e76\u914d\u7f6e\u5185\u7f6e\u9ea6\u514b\u98ce"),(0,o.kt)("p",null,"iOS \u8bbe\u5907\u7684\u5185\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\u7531\u4e00\u7cfb\u5217\u7269\u7406\u9ea6\u514b\u98ce\u548c\u6ce2\u675f\u5f62\u6210\u5668\u7ec4\u6210\uff0c\u6bcf\u4e2a\u90fd\u8868\u793a\u4e3a AVAudioSessionDataSourceDescription \u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u901a\u8fc7\u67e5\u8be2\u7aef\u53e3\u7c7b\u578b\u7b49\u4e8e\u5185\u7f6e\u9ea6\u514b\u98ce\u7684\u53ef\u7528\u8f93\u5165\u6765\u67e5\u627e\u5185\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\uff0c\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u9996\u9009\u8f93\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'private func enableBuiltInMic() {\n    // Get the shared audio session.\n    let session = AVAudioSession.sharedInstance()\n\n    // Find the built-in microphone input.\n    guard let availableInputs = session.availableInputs,\n          let builtInMicInput = availableInputs.first(where: { $0.portType == .builtInMic }) else {\n        print("The device must have a built-in microphone.")\n        return\n    }\n\n    // Make the built-in microphone input the preferred input.\n    do {\n        try session.setPreferredInput(builtInMicInput)\n    } catch {\n        print("Unable to set the built-in mic as the preferred input.")\n    }\n}\n')),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\u7684\u65b9\u5411\u6027"},"\u914d\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\u7684\u65b9\u5411\u6027"),(0,o.kt)("p",null,"\u4e3a\u4e86\u914d\u7f6e\u9ea6\u514b\u98ce\u8f93\u5165\u7684\u65b9\u5411\u6027\uff0c\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u8bbe\u7f6e\u5176\u6570\u636e\u6e90\u7684\u9996\u9009\u6781\u6027\u6a21\u5f0f\u548c\u4f1a\u8bdd\u7684\u8f93\u5165\u65b9\u5411\u3002\u5b83\u5728\u5176 selectRecordingOption(","_",":orientation:completion:) \u65b9\u6cd5\u4e2d\u6267\u884c\u6b64\u914d\u7f6e\uff0c\u6bcf\u5f53\u7528\u6237\u65cb\u8f6c\u8bbe\u5907\u6216\u66f4\u6539\u5f55\u5236\u9009\u9879\u9009\u62e9\u65f6\u90fd\u4f1a\u8c03\u7528\u8be5\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func selectRecordingOption(_ option: RecordingOption, orientation: Orientation, completion: (StereoLayout) -> Void) {\n\n    // Get the shared audio session.\n    let session = AVAudioSession.sharedInstance()\n\n    // Find the built-in microphone input\'s data sources,\n    // and select the one that matches the specified name.\n    guard let preferredInput = session.preferredInput,\n          let dataSources = preferredInput.dataSources,\n          let newDataSource = dataSources.first(where: { $0.dataSourceName == option.dataSourceName }),\n          let supportedPolarPatterns = newDataSource.supportedPolarPatterns else {\n        completion(.none)\n        return\n    }\n\n    do {\n        isStereoSupported = supportedPolarPatterns.contains(.stereo)\n        // If the data source supports stereo, set it as the preferred polar pattern.\n        if isStereoSupported {\n            // Set the preferred polar pattern to stereo.\n            try newDataSource.setPreferredPolarPattern(.stereo)\n        }\n\n        // Set the preferred data source and polar pattern.\n        try preferredInput.setPreferredDataSource(newDataSource)\n\n        // Update the input orientation to match the current user interface orientation.\n        try session.setPreferredInputOrientation(orientation.inputOrientation)\n    } catch {\n        fatalError("Unable to select the \\(option.dataSourceName) data source.")\n    }\n\n    // Call the completion handler with the updated stereo layout.\n    completion(StereoLayout(orientation: newDataSource.orientation!,\n                            stereoOrientation: session.inputOrientation))\n}\n')),(0,o.kt)("p",null,"selectRecordingOption(","_",":orientation:completion:) \u67e5\u627e\u5177\u6709\u6240\u9009\u540d\u79f0\u7684\u6570\u636e\u6e90\uff0c\u5c06\u5176\u9996\u9009\u6781\u5750\u6807\u6a21\u5f0f\u8bbe\u7f6e\u4e3a .stereo \uff0c\u7136\u540e\u5c06\u5176\u8bbe\u7f6e\u4e3a\u8f93\u5165\u7684\u9996\u9009\u6570\u636e\u6e90\u3002\u6700\u540e\uff0c\u5b83\u8bbe\u7f6e\u9996\u9009\u8f93\u5165\u65b9\u5411\u4ee5\u5339\u914d\u8bbe\u5907\u7684\u7528\u6237\u754c\u9762\u65b9\u5411\u3002"))}h.isMDXComponent=!0}}]);