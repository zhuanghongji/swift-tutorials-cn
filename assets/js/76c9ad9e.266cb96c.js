"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[4523],{58630:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var n=t(85893),s=t(11151);const o={},i="\u5f02\u6b65\u52a0\u8f7d\u5a92\u4f53\u6570\u636e",d={id:"av-foundation/esseentials/loading-media-data-asynchronously/index",title:"\u5f02\u6b65\u52a0\u8f7d\u5a92\u4f53\u6570\u636e",description:"<OriginalSource",source:"@site/docs/av-foundation/esseentials/loading-media-data-asynchronously/index.mdx",sourceDirName:"av-foundation/esseentials/loading-media-data-asynchronously",slug:"/av-foundation/esseentials/loading-media-data-asynchronously/",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/loading-media-data-asynchronously/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/av-foundation/esseentials/loading-media-data-asynchronously/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"avfoundationSidebar",previous:{title:"\u5173\u4e8e",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/about/"},next:{title:"\u68c0\u7d22\u5a92\u4f53\u5143\u6570\u636e",permalink:"/swift-tutorials-cn/docs/av-foundation/esseentials/retrieving-media-metadata/"}},r={},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5f02\u6b65\u52a0\u8f7d\u5c5e\u6027",id:"\u5f02\u6b65\u52a0\u8f7d\u5c5e\u6027",level:2},{value:"\u786e\u5b9a\u8d22\u4ea7\u72b6\u51b5",id:"\u786e\u5b9a\u8d22\u4ea7\u72b6\u51b5",level:2},{value:"\u8fc7\u6ee4\u5c5e\u6027\u96c6\u5408",id:"\u8fc7\u6ee4\u5c5e\u6027\u96c6\u5408",level:2}];function c(a){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...a.components},{OriginalSource:t,ToBePolishedAfterTranslation:o}=e;return t||p("OriginalSource",!0),o||p("ToBePolishedAfterTranslation",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\u5f02\u6b65\u52a0\u8f7d\u5a92\u4f53\u6570\u636e",children:"\u5f02\u6b65\u52a0\u8f7d\u5a92\u4f53\u6570\u636e"}),"\n",(0,n.jsx)(o,{}),"\n",(0,n.jsx)(t,{title:"Loading media data asynchronously",url:"https://developer.apple.com/documentation/avfoundation/media_assets/loading_media_data_asynchronously",summary:"\u901a\u8fc7\u4f7f\u7528\u8bed\u8a00\u7ea7\u5e76\u53d1\u529f\u80fd\u6765\u9ad8\u6548\u52a0\u8f7d\u5a92\u4f53\u6570\u636e\u6765\u6784\u5efa\u54cd\u5e94\u5f0f\u5e94\u7528\u7a0b\u5e8f"}),"\n",(0,n.jsx)(e.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,n.jsx)(e.p,{children:"AVFoundation \u4f7f\u7528 AVAsset \u7c7b\u6765\u5efa\u6a21\u5b9a\u65f6\u89c6\u542c\u5a92\u4f53\u3002\u521b\u5efa\u8d44\u4ea7\u662f\u4e00\u9879\u8f7b\u91cf\u7ea7\u64cd\u4f5c\uff0c\u56e0\u4e3a\u5b83\u4f1a\u63a8\u8fdf\u52a0\u8f7d\u5176\u5a92\u4f53\uff0c\u76f4\u5230\u9700\u8981\u6570\u636e\u4e3a\u6b62\u3002\u8d44\u4ea7\u52a0\u8f7d\u6570\u636e\u6240\u9700\u7684\u65f6\u95f4\u53d6\u51b3\u4e8e\u591a\u79cd\u56e0\u7d20\uff0c\u5305\u62ec\u5a92\u4f53\u5927\u5c0f\u3001\u672c\u5730\u8bbe\u5907\u529f\u80fd\u548c\u8fdc\u7a0b\u7f51\u7edc\u6761\u4ef6\u3002\u4e3a\u4e86\u907f\u514d\u963b\u585e\u8c03\u7528\u7ebf\u7a0b\uff0c\u4f60\u5fc5\u987b\u5f02\u6b65\u52a0\u8f7d\u5a92\u4f53\u6570\u636e\u3002"}),"\n",(0,n.jsx)(e.admonition,{type:"warning",children:(0,n.jsx)(e.p,{children:"\u4ece iOS 16\u3001tvOS 16\u3001MacCatalyst 16 \u548c macOS 13 \u5f00\u59cb\uff0cAVFoundation \u4e0d\u63a8\u8350\u4f7f\u7528 Swift \u7684 AVAsset \u3001 AVAssetTrack \u548c AVMetadataItem \u7684\u540c\u6b65\u5c5e\u6027\u548c\u65b9\u6cd5\u5ba2\u6237\u3002\u5b83\u8fd8\u4e0d\u5efa\u8bae\u4f7f\u7528 loadValuesAsynchronously(forKeys:completionHandler:) \u65b9\u6cd5\u5f02\u6b65\u52a0\u8f7d\u5c5e\u6027\u503c\uff0c\u800c\u6539\u7528\u4e0b\u9762\u63cf\u8ff0\u7684\u8bed\u6cd5\u3002"})}),"\n",(0,n.jsx)(e.h2,{id:"\u5f02\u6b65\u52a0\u8f7d\u5c5e\u6027",children:"\u5f02\u6b65\u52a0\u8f7d\u5c5e\u6027"}),"\n",(0,n.jsx)(e.p,{children:"\u8be5\u6846\u67b6\u56f4\u7ed5\u4e24\u4e2a\u5173\u952e\u7c7b\u578b\u6784\u5efa\u5176\u5f02\u6b65\u5c5e\u6027\u52a0\u8f7d\u529f\u80fd\uff1a AVAsyncProperty \u548c AVAsynchronousKeyValueLoading \u3002\u8be5\u6846\u67b6\u4f7f\u7528 AVAsyncProperty \u7c7b\u4e3a\u5177\u6709\u9700\u8981\u5f02\u6b65\u52a0\u8f7d\u7684\u503c\u7684\u5c5e\u6027\u5b9a\u4e49\u7c7b\u578b\u5b89\u5168\u6807\u8bc6\u7b26\uff0c\u5e76\u4f7f\u7528 AVAsynchronousKeyValueLoading \u534f\u8bae\u4e3a\u5bf9\u8c61\u5b9a\u4e49\u5f02\u6b65\u52a0\u8f7d\u5c5e\u6027\u7684\u63a5\u53e3\u3002 AVAsset \u3001 AVAssetTrack \u548c AVMetadataItem \u91c7\u7528\u6b64\u534f\u8bae\uff0c\u4e3a\u5b83\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5177\u6709\u4ee5\u4e0b\u7b7e\u540d\u7684\u5f02\u6b65 load(_:) \u65b9\u6cd5\uff1a"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"public func load<T>(_ property: AVAsyncProperty<Self, T>) async throws -> T\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u4ece\u5f02\u6b65\u4e0a\u4e0b\u6587\u4e2d\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u5e76\u6307\u5b9a await \u5173\u952e\u5b57\u4ee5\u6307\u793a\u6267\u884c\u53ef\u4ee5\u6302\u8d77\uff0c\u76f4\u5230\u5b8c\u6210\u52a0\u8f7d\u6570\u636e\u3002\u5982\u679c\u6210\u529f\u52a0\u8f7d\u5c5e\u6027\uff0c\u8be5\u65b9\u6cd5\u5c06\u8fd4\u56de\u7c7b\u578b\u5b89\u5168\u503c\uff1b\u5982\u679c\u5931\u8d25\uff0c\u5219\u629b\u51fa\u9519\u8bef\u3002"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"// A CMTime value.\nlet duration = try await asset.load(.duration)\n// An array of AVMetadataItem for the asset.\nlet metadata = try await asset.load(.metadata)\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4e8b\u5148\u77e5\u9053\u9700\u8981\u52a0\u8f7d\u591a\u4e2a\u8d44\u4ea7\u5c5e\u6027\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528 load(_:) \u65b9\u6cd5\u7684\u53d8\u4f53\uff0c\u8be5\u65b9\u6cd5\u91c7\u7528\u591a\u4e2a\u6807\u8bc6\u7b26\u5e76\u4ee5\u5143\u7ec4\u5f62\u5f0f\u8fd4\u56de\u5176\u7ed3\u679c\u3002\u4e0e\u52a0\u8f7d\u5355\u4e2a\u5c5e\u6027\u503c\u4e00\u6837\uff0c\u540c\u65f6\u52a0\u8f7d\u591a\u4e2a\u5c5e\u6027\u4e5f\u662f\u7c7b\u578b\u5b89\u5168\u7684\u64cd\u4f5c\u3002"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"// A CMTime value and an array of AVMetadataItem.\nlet (duration, metadata) = try await asset.load(.duration, .metadata)\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u540c\u65f6\u52a0\u8f7d\u591a\u4e2a\u5c5e\u6027\u4f7f AVFoundation \u80fd\u591f\u901a\u8fc7\u6279\u91cf\u52a0\u8f7d\u8bf7\u6c42\u6765\u4f18\u5316\u6027\u80fd\u3002"}),"\n",(0,n.jsx)(e.h2,{id:"\u786e\u5b9a\u8d22\u4ea7\u72b6\u51b5",children:"\u786e\u5b9a\u8d22\u4ea7\u72b6\u51b5"}),"\n",(0,n.jsx)(e.p,{children:"AVAsynchronousKeyValueLoading \u8fd8\u63d0\u4f9b\u4e86 status(of:) \u65b9\u6cd5\uff0c\u7528\u4e8e\u8fd4\u56de\u5c5e\u6027\u6807\u8bc6\u7b26\u7684\u72b6\u6001\u3002\u5b83\u8fd4\u56de\u4e00\u4e2a AVAsyncProperty.Status \u503c\uff0c\u8be5\u503c\u4f7f\u7528\u4ee5\u4e0b\u793a\u4f8b\u4e2d\u6240\u793a\u7684\u60c5\u51b5\u6307\u793a\u5c5e\u6027\u503c\u7684\u72b6\u6001\uff1a"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"// Determine the loaded status of the metadata property.\nswitch asset.status(of: .metadata) {\ncase .notYetLoaded:\n    // The initial state of a property.\ncase .loading:\n    // The asset is actively loading the property value.\ncase .loaded(let metadata):\n    // The property is ready to use.\ncase .failed(let error):\n    // The property value fails to load.\n}\n"})}),"\n",(0,n.jsx)(e.p,{children:".loaded \u548c .failed \u60c5\u51b5\u63d0\u4f9b\u5173\u8054\u503c\u3002 .loaded \u60c5\u51b5\u5305\u542b\u5148\u524d\u52a0\u8f7d\u7684\u5c5e\u6027\u503c\uff0c .failed \u60c5\u51b5\u5305\u542b\u6307\u793a\u5931\u8d25\u539f\u56e0\u7684\u9519\u8bef\u3002\u901a\u8fc7\u8bbf\u95ee\u5173\u8054\u503c\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u8bf8\u5982\u68c0\u67e5\u5c5e\u6027\u72b6\u6001\u548c\u5728\u4e00\u4e2a\u6b65\u9aa4\u4e2d\u8bbf\u95ee\u5176\u503c\u4e4b\u7c7b\u7684\u64cd\u4f5c\u3002"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"// Verify the metadata property is in a loaded state.\nif case .loaded(let metadata) = asset.status(of: .metadata) {\n    // Process the loaded value.\n    processMetadata(metadata)\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"\u8fc7\u6ee4\u5c5e\u6027\u96c6\u5408",children:"\u8fc7\u6ee4\u5c5e\u6027\u96c6\u5408"}),"\n",(0,n.jsx)(e.p,{children:"\u67d0\u4e9b\u5c5e\u6027\u63d0\u4f9b\u503c\u6570\u7ec4\uff0c\u4f8b\u5982\u8d44\u4ea7\u7684 tracks \u6216\u5176 metadata \u3002\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ea\u5bf9\u8fd9\u4e9b\u503c\u7684\u5b50\u96c6\u611f\u5174\u8da3\u3002 AVAsset \u548c AVAssetTrack \u8fd8\u63d0\u4f9b\u4e86\u5c06\u5176\u96c6\u5408\u8fc7\u6ee4\u4e3a\u4ec5\u5305\u542b\u4f60\u9700\u8981\u7684\u503c\u7684\u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u4e0b\u9762\u5217\u51fa\u7684\u4ee3\u7801\u786e\u5b9a\u8d44\u4ea7\u5305\u542b\u7684\u97f3\u9891\u91c7\u6837\u7387\u3002\u5b83\u8c03\u7528\u8d44\u4ea7\u7684 loadTracks(withMediaType:completionHandler:) \u4ee5\u4ec5\u68c0\u7d22\u5176\u97f3\u8f68\u3002\u5b83\u8fed\u4ee3\u6bcf\u4e2a\u8f68\u9053\u5e76\u5f02\u6b65\u52a0\u8f7d\u8f68\u9053\u7684\u683c\u5f0f\u63cf\u8ff0\u3002\u6700\u540e\uff0c\u5b83\u4ece\u6d41\u63cf\u8ff0\u4e2d\u68c0\u7d22\u91c7\u6837\u7387\u5e76\u5bf9\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\u3002"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-swift",children:"// Load the asset's audio tracks asynchronously.\nlet audioTracks = try await asset.loadTracks(withMediaType: .audio)\nvar allDescriptions = [CMFormatDescription]()\nfor track in audioTracks {\n    // Load each audio track's format descriptions asynchronously.\n    allDescriptions.append(contentsOf: try await track.load(.formatDescriptions))\n}\n// Collect the unique sample rates, and sort them from highest to lowest.\nlet sampleRates = Set(allDescriptions).map {\n    Float($0.audioStreamBasicDescription?.mSampleRate ?? 0)\n}.sorted(by: { $0 > $1 })\n"})}),"\n",(0,n.jsx)(e.p,{children:"\u4f7f\u7528 Swift \u5e76\u53d1\u548c AVFoundation \u5f02\u6b65 API \u4f7f\u5f97\u6267\u884c\u9ad8\u7ea7\u68c0\u67e5\uff08\u5982\u4e0a\u6240\u793a\uff09\u53d8\u5f97\u7b80\u5355\u3001\u76f4\u7ebf\u64cd\u4f5c\u3002"})]})}function u(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(c,{...a})}):c(a)}function p(a,e){throw new Error("Expected "+(e?"component":"object")+" `"+a+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(a,e,t)=>{t.d(e,{Z:()=>d,a:()=>i});var n=t(67294);const s={},o=n.createContext(s);function i(a){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function d(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:i(a.components),n.createElement(o.Provider,{value:e},a.children)}}}]);