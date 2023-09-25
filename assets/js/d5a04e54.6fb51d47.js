"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},i="\u4ece\u591a\u901a\u9053\u97f3\u9891\u6d41\u751f\u6210\u7a7a\u95f4\u97f3\u9891",u={unversionedId:"audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/index",id:"audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/index",title:"\u4ece\u591a\u901a\u9053\u97f3\u9891\u6d41\u751f\u6210\u7a7a\u95f4\u97f3\u9891",description:"<OriginalSource",source:"@site/docs/audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/index.mdx",sourceDirName:"audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream",slug:"/audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/index.mdx",tags:[],version:"current",lastUpdatedAt:1695620433,formattedLastUpdatedAt:"2023\u5e749\u670825\u65e5",frontMatter:{},sidebar:"audiotoolboxSidebar",previous:{title:"\u5c06\u4f60\u7684\u97f3\u9891\u4ee3\u7801\u79fb\u690d\u5230 Apple Silicon",permalink:"/swift-tutorials-cn/docs/audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/"},next:{title:"\u5c06\u97f3\u9891\u5355\u5143\u4e3b\u673a\u8fc1\u79fb\u5230 AUv3 API",permalink:"/swift-tutorials-cn/docs/audio-toolbox/audio-units/migrating-your-audio-unit-host-to-the-auv3-api/"}},l={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u521b\u5efa\u97f3\u9891\u5355\u5143\u7a7a\u95f4\u6df7\u97f3\u5668",id:"\u521b\u5efa\u97f3\u9891\u5355\u5143\u7a7a\u95f4\u6df7\u97f3\u5668",level:2},{value:"\u914d\u7f6e\u7a7a\u95f4\u97f3\u9891",id:"\u914d\u7f6e\u7a7a\u95f4\u97f3\u9891",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},s=d("ToBePolishedAfterTranslation"),c=d("OriginalSource"),m={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ece\u591a\u901a\u9053\u97f3\u9891\u6d41\u751f\u6210\u7a7a\u95f4\u97f3\u9891"},"\u4ece\u591a\u901a\u9053\u97f3\u9891\u6d41\u751f\u6210\u7a7a\u95f4\u97f3\u9891"),(0,r.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,r.kt)(c,{title:"Generating spatial audio from a multichannel audio stream",url:"https://developer.apple.com/documentation/audiotoolbox/generating_spatial_audio_from_a_multichannel_audio_stream",summary:"\u4f7f\u7528\u7a7a\u95f4\u6df7\u5408\u5668\u97f3\u9891\u5355\u5143\u5c06 8 \u901a\u9053\u97f3\u9891\u8f6c\u6362\u4e3a 2 \u901a\u9053\u7a7a\u95f4\u97f3\u9891",mdxType:"OriginalSource"}),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"\u7a7a\u95f4\u97f3\u9891\u8ba9\u58f0\u97f3\u770b\u8d77\u6765\u50cf\u662f\u6765\u81ea\u4f60\u5468\u56f4\u7684\u56db\u9762\u516b\u65b9\u3002\u8981\u4ece\u591a\u901a\u9053\u97f3\u9891\u6d41\u751f\u6210\u7a7a\u95f4\u5316\u97f3\u9891\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7a7a\u95f4\u6df7\u5408\u5668\u97f3\u9891\u5355\u5143\u3002\u97f3\u9891\u6d41\u53ef\u4ee5\u6765\u81ea\u6e38\u620f\u5f15\u64ce\u3001\u89c6\u9891\u64ad\u653e\u5668\u6216\u97f3\u9891\u6587\u4ef6\u7684\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u5411\u4f60\u5c55\u793a\u5982\u4f55\u521b\u5efa\u7a7a\u95f4\u6df7\u5408\u5668\uff0c\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u5176\u901a\u9053\u5e03\u5c40\u548c\u6d41\u683c\u5f0f\u3002\u5b83\u4ece\u97f3\u9891\u6587\u4ef6\u6d41\u5f0f\u4f20\u8f93\u591a\u901a\u9053\u8f93\u5165\uff0c\u5e76\u5c06\u5176\u6df7\u97f3\u4e3a 2 \u901a\u9053\u7a7a\u95f4\u97f3\u9891\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u97f3\u9891\u5355\u5143\u7a7a\u95f4\u6df7\u97f3\u5668"},"\u521b\u5efa\u97f3\u9891\u5355\u5143\u7a7a\u95f4\u6df7\u97f3\u5668"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u4f7f\u7528\u62c9\u6a21\u578b\u4ece\u5185\u5b58\u4e2d\u7684\u6587\u4ef6\u6d41\u5904\u7406\u5668\u83b7\u53d6\u8f93\u5165\u3002 OutputAU \u7c7b\u4ece\u7ba1\u7406\u7a7a\u95f4\u6df7\u5408\u5668\u7684 AudioKernel \u4e2d\u63d0\u53d6\u8f93\u5165\u3002\u7a7a\u95f4\u6df7\u5408\u5668\u4ece AudioFileReader \u63d0\u53d6\u97f3\u9891\u4ee5\u83b7\u53d6\u8f93\u5165\u3002\u5728 macOS \u4e0a\uff0c\u8f93\u51fa\u5355\u5143\u4f7f\u7528 kAudioUnitSubType_HALOutput \u4e0e\u97f3\u9891\u8bbe\u5907\u8fde\u63a5\u3002\u5728 iOS \u4e0a\uff0c\u63a5\u53e3\u914d\u7f6e\u4e3a kAudioUnitSubType_RemoteIO \u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5f00\u59cb\u8bbe\u7f6e\u7a7a\u95f4\u6df7\u9891\u5668\uff0c\u8be5\u793a\u4f8b\u4f7f\u7528 kAudioUnitSubType_SpatialMixer \u5b50\u7c7b\u578b\u521d\u59cb\u5316\u6df7\u9891\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"AudioComponentDescription auDescription = {kAudioUnitType_Mixer,\n                                           kAudioUnitSubType_SpatialMixer,\n                                           kAudioUnitManufacturer_Apple,\n                                           0,\n                                           0};\nAudioComponent comp = AudioComponentFindNext(NULL, &auDescription);\nassert(comp);\n\n\nOSStatus err = AudioComponentInstanceNew(comp, &mAU);\nassert(err == noErr);\n")),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u7a7a\u95f4\u6df7\u5408\u5668\u540e\uff0c\u8be5\u793a\u4f8b\u8c03\u7528\u4fbf\u5229\u51fd\u6570\u6765\u914d\u7f6e\u7acb\u4f53\u58f0\u97f3\u9891\u7684\u8f93\u51fa\u6d41\u683c\u5f0f\u548c\u901a\u9053\u5e03\u5c40\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"err = setStreamFormatAndACL(inOutputSampleRate, kAudioChannelLayoutTag_Stereo, kAudioUnitScope_Output, 0);\nassert(err == noErr);\n")),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u8be5\u793a\u4f8b\u914d\u7f6e\u8f93\u5165\u6d41\u683c\u5f0f\u5e76\u5c06\u901a\u9053\u5e03\u5c40\u8bbe\u7f6e\u4e3a 8 \u901a\u9053\u97f3\u9891\u7684 kAudioChannelLayoutTag_MPEG_7_1_A \u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"err = setStreamFormatAndACL(inInputSampleRate,\n                            kAudioChannelLayoutTag_Atmos_7_1_4,\n                            kAudioUnitScope_Input,\n                            elem);\nassert(err == noErr);\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u7a7a\u95f4\u97f3\u9891"},"\u914d\u7f6e\u7a7a\u95f4\u97f3\u9891"),(0,r.kt)("p",null,"\u8be5\u793a\u4f8b\u5c06\u7a7a\u95f4\u5316\u7b97\u6cd5\u8bbe\u7f6e\u4e3a AUSpatializationAlgorithm.spatializationAlgorithm_UseOutputType \uff0c\u4ee5\u4fbf\u5728\u4e0d\u540c\u786c\u4ef6\u4e0a\u5b9e\u73b0\u6700\u9ad8\u8d28\u91cf\u7684\u7a7a\u95f4\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"UInt32 renderingAlgorithm = kSpatializationAlgorithm_UseOutputType;\nerr = AudioUnitSetProperty(mAU,\n                           kAudioUnitProperty_SpatializationAlgorithm,\n                           kAudioUnitScope_Input,\n                           elem,\n                           &renderingAlgorithm,\n                           sizeof(renderingAlgorithm));\nassert(err == noErr);\n")),(0,r.kt)("p",null,"\u8f93\u5165\u901a\u9053\u4f5c\u4e3a\u8fdc\u573a\u6e90\u56f4\u7ed5\u6536\u542c\u8005\u8fdb\u884c\u7a7a\u95f4\u5316\u3002\u901a\u9053\u5e03\u5c40\u6307\u5b9a\u5404\u4e2a\u901a\u9053\u7684\u76f8\u5bf9\u65b9\u5411\u3002\u65b9\u4f4d\u89d2\u548c\u4ef0\u89d2\u53c2\u6570\u63a7\u5236\u97f3\u9891\u65cb\u8f6c\u3002\u8be5\u793a\u4f8b\u5c06\u6e90\u6a21\u5f0f\u914d\u7f6e\u4e3a AUSpatialMixerSourceMode.spatialMixerSourceMode_AmbienceBed \u3002\u4f7f\u7528 AUSpatialMixerSourceMode.spatialMixerSourceMode_PointSource \u5bf9\u8c61\u5c06\u8f93\u5165\u4fe1\u53f7\u6e32\u67d3\u4e3a\u5355\u4e2a\u6e90\uff0c\u9664\u975e\u4f7f\u7528 AUSpatialMixerPointSourceInHeadMode.spatialMixerPointSourceInHeadMode_Bypass \u5728\u5934\u90e8\u6e32\u67d3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"UInt32 sourceMode = kSpatialMixerSourceMode_AmbienceBed;\nerr = AudioUnitSetProperty(mAU, kAudioUnitProperty_SpatialMixerSourceMode, kAudioUnitScope_Input, elem, &sourceMode, sizeof(sourceMode));\nassert(err == noErr);\n")),(0,r.kt)("p",null,"\u7a7a\u95f4\u97f3\u9891\u5305\u62ec\u652f\u6301\u5b83\u7684\u5e94\u7528\u7a0b\u5e8f\u7684\u52a8\u6001\u5934\u90e8\u8ddf\u8e2a\u3002\u8981\u914d\u7f6e\u5934\u90e8\u8ddf\u8e2a\uff0c\u8bf7\u8bbe\u7f6e kAudioUnitProperty_SpatialMixerEnableHeadTracking \u3002\u6709\u5173\u652f\u6301\u7684\u8bbe\u5907\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u8046\u542c AirPods \u548c Beats \u7684\u7a7a\u95f4\u97f3\u9891\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"UInt32 ht = 1;\nerr = AudioUnitSetProperty(mAU,\n                           kAudioUnitProperty_SpatialMixerEnableHeadTracking,\n                           kAudioUnitScope_Global,\n                           0,\n                           &ht,\n                           sizeof(UInt32));\n")))}g.isMDXComponent=!0}}]);