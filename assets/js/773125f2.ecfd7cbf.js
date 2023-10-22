"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[5208],{3905:(e,a,r)=>{r.d(a,{Zo:()=>y,kt:()=>f});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=t.createContext({}),p=function(e){var a=t.useContext(c),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},y=function(e){var a=p(e.components);return t.createElement(c.Provider,{value:a},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,f=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return r?t.createElement(f,i(i({ref:a},y),{},{components:r})):t.createElement(f,i({ref:a},y))}));function f(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},43616:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=r(87462),n=(r(67294),r(3905));const o={},i="AVPlayerLayer",l={unversionedId:"av-foundation/media-playback/av-player-layer/index",id:"av-foundation/media-playback/av-player-layer/index",title:"AVPlayerLayer",description:"<OriginalSource",source:"@site/docs/av-foundation/media-playback/av-player-layer/index.mdx",sourceDirName:"av-foundation/media-playback/av-player-layer",slug:"/av-foundation/media-playback/av-player-layer/",permalink:"/swift-tutorials-cn/docs/av-foundation/media-playback/av-player-layer/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/av-foundation/media-playback/av-player-layer/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"avfoundationSidebar",previous:{title:"\u5c06 HEVC \u89c6\u9891\u4e0e Alpha \u7ed3\u5408\u4f7f\u7528",permalink:"/swift-tutorials-cn/docs/av-foundation/media-playback/using-hevc-video-with-alpha/"},next:{title:"AVSynchronizedLayer",permalink:"/swift-tutorials-cn/docs/av-foundation/media-playback/av-synchronized-layer/"}},c={},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2}],y=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},s=y("ToBePolishedAfterTranslation"),d=y("OriginalSource"),u={toc:p},f="wrapper";function v(e){let{components:a,...r}=e;return(0,n.kt)(f,(0,t.Z)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"avplayerlayer"},"AVPlayerLayer"),(0,n.kt)(s,{mdxType:"ToBePolishedAfterTranslation"}),(0,n.kt)(d,{title:"AVPlayerLayer",url:"https://developer.apple.com/documentation/avfoundation/avplayerlayer",summary:"\u5448\u73b0\u73a9\u5bb6\u5bf9\u8c61\u7684\u89c6\u89c9\u5185\u5bb9\u7684\u5bf9\u8c61",mdxType:"OriginalSource"}),(0,n.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,n.kt)("p",null,"\u5728 iOS \u6216 tvOS \u4e2d\u4f7f\u7528\u6b64\u5bf9\u8c61\u7684\u5e38\u89c1\u65b9\u6cd5\u662f\u4f5c\u4e3a UIView \u7684\u652f\u6301\u5c42\uff0c\u5982\u4ee5\u4e0b\u793a\u4f8b\u6240\u793a\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"/// A view that displays the visual contents of a player object.\nclass PlayerView: UIView {\n\n    // Override the property to make AVPlayerLayer the view's backing layer.\n    override static var layerClass: AnyClass { AVPlayerLayer.self }\n\n    // The associated player object.\n    var player: AVPlayer? {\n        get { playerLayer.player }\n        set { playerLayer.player = newValue }\n    }\n\n    private var playerLayer: AVPlayerLayer { layer as! AVPlayerLayer }\n}\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u64ad\u653e\u5668\u56fe\u5c42\u7ee7\u627f\u7684 contents \u5c5e\u6027\u7684\u503c\u662f\u4e0d\u900f\u660e\u7684\uff0c\u4f60\u65e0\u6cd5\u66f4\u6539\u5b83\u3002")))}v.isMDXComponent=!0}}]);