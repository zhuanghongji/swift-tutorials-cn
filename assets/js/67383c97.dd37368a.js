"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[5805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),d=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},f=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),f=n,m=u["".concat(o,".").concat(f)]||u[f]||p[f]||r;return a?l.createElement(m,i(i({ref:t},c),{},{components:a})):l.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}f.displayName="MDXCreateElement"},15469:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var l=a(87462),n=(a(67294),a(3905));const r={},i="ModelContext",s={unversionedId:"swift-data/model-storage/model-context/index",id:"swift-data/model-storage/model-context/index",title:"ModelContext",description:"<OriginalSource",source:"@site/docs/swift-data/model-storage/model-context/index.mdx",sourceDirName:"swift-data/model-storage/model-context",slug:"/swift-data/model-storage/model-context/",permalink:"/swift-tutorials-cn/docs/swift-data/model-storage/model-context/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-data/model-storage/model-context/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"swiftdataSidebar",previous:{title:"ModelContainer",permalink:"/swift-tutorials-cn/docs/swift-data/model-storage/model-container/"},next:{title:"ModelDocument",permalink:"/swift-tutorials-cn/docs/swift-data/model-storage/model-document/"}},o={},d=[{value:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587",id:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587",level:2},{value:"init(_:)",id:"init_",level:3},{value:"\u83b7\u53d6\u6a21\u578b",id:"\u83b7\u53d6\u6a21\u578b",level:2},{value:"fetch(_:)",id:"fetch_",level:3},{value:"fetchCount(_:)",id:"fetchcount_",level:3},{value:"fetch(_:batchSize:)",id:"fetch_batchsize",level:3},{value:"enumerate(_:batchSize:allowEscapingMutations:block:)",id:"enumerate_batchsizeallowescapingmutationsblock",level:3},{value:"model(for:)",id:"modelfor",level:3},{value:"registeredModel(for:)",id:"registeredmodelfor",level:3},{value:"\u63d2\u5165\u6a21\u578b",id:"\u63d2\u5165\u6a21\u578b",level:2},{value:"insertedModelsArray",id:"insertedmodelsarray",level:3},{value:"insert(_:)",id:"insert_",level:3},{value:"\u4fee\u6539\u6a21\u578b",id:"\u4fee\u6539\u6a21\u578b",level:2},{value:"hasChanges",id:"haschanges",level:3},{value:"changedModelsArray",id:"changedmodelsarray",level:3},{value:"\u5220\u9664\u6a21\u578b",id:"\u5220\u9664\u6a21\u578b",level:2},{value:"deletedModelsArray",id:"deletedmodelsarray",level:3},{value:"delete(model:where:includeSubclasses:)",id:"deletemodelwhereincludesubclasses",level:3},{value:"delete(_:)",id:"delete_",level:3},{value:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539",id:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539",level:2},{value:"autosaveEnabled",id:"autosaveenabled",level:3},{value:"save()",id:"save",level:3},{value:"transaction(block:)",id:"transactionblock",level:3},{value:"rollback()",id:"rollback",level:3},{value:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26",id:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26",level:2},{value:"fetchIdentifiers(_:)",id:"fetchidentifiers_",level:3},{value:"fetchIdentifiers(_:batchSize:)",id:"fetchidentifiers_batchsize",level:3},{value:"\u8bbf\u95ee\u5bb9\u5668",id:"\u8bbf\u95ee\u5bb9\u5668",level:2},{value:"container",id:"container",level:3},{value:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a",id:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a",level:2},{value:"undoManager",id:"undomanager",level:3},{value:"processPendingChanges()",id:"processpendingchanges",level:3},{value:"\u6ce8\u518c\u901a\u77e5",id:"\u6ce8\u518c\u901a\u77e5",level:2},{value:"willSave",id:"willsave",level:3},{value:"didSave",id:"didsave",level:3},{value:"NotificationKey",id:"notificationkey",level:3},{value:"\u521b\u5efa\u901a\u77e5",id:"\u521b\u5efa\u901a\u77e5",level:4},{value:"init(rawValue:)",id:"initrawvalue",level:5},{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:4},{value:"rawValue",id:"rawvalue",level:5},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:4},{value:"RawValue",id:"rawvalue-1",level:5}],c=(u="OriginalSource",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var u;const p={toc:d},f="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"modelcontext"},"ModelContext"),(0,n.kt)(c,{title:"ModelContext",url:"https://developer.apple.com/documentation/swiftdata/modelcontext",summary:"\u4e00\u4e2a\u4f7f\u4f60\u80fd\u591f\u83b7\u53d6\u3001\u63d2\u5165\u548c\u5220\u9664\u6a21\u578b\uff0c\u5e76\u5c06\u4efb\u4f55\u66f4\u6539\u4fdd\u5b58\u5230\u78c1\u76d8\u7684\u5bf9\u8c61",mdxType:"OriginalSource"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"@available(swift 5.9)\n@available(macOS 14, iOS 17, tvOS 17, watchOS 10, *)\npublic class ModelContext : Equatable {\n    // ...\n}\n")),(0,n.kt)("h2",{id:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587"},"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587"),(0,n.kt)("h3",{id:"init_"},"init(","_",":)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public init(_ container: ModelContainer)\n")),(0,n.kt)("h2",{id:"\u83b7\u53d6\u6a21\u578b"},"\u83b7\u53d6\u6a21\u578b"),(0,n.kt)("h3",{id:"fetch_"},"fetch(","_",":)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetch<T>(_ descriptor: FetchDescriptor<T>)\n        throws -> [T] where T : PersistentModel\n")),(0,n.kt)("h3",{id:"fetchcount_"},"fetchCount(","_",":)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetchCount<T>(_ descriptor: FetchDescriptor<T>)\n        throws -> Int where T : PersistentModel\n")),(0,n.kt)("h3",{id:"fetch_batchsize"},"fetch(","_",":batchSize:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetch<T>(_ descriptor: FetchDescriptor<T>,\n                     batchSize: Int\n) throws -> FetchResultsCollection<T> where T : PersistentModel\n")),(0,n.kt)("h3",{id:"enumerate_batchsizeallowescapingmutationsblock"},"enumerate(","_",":batchSize:allowEscapingMutations:block:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func enumerate<T>(_ fetch: FetchDescriptor<T>,\n                         batchSize: Int = 5000,\n                         allowEscapingMutations: Bool = false,\n                         block: (_ model: T) throws -> Void\n) throws where T : PersistentModel\n")),(0,n.kt)("h3",{id:"modelfor"},"model(for:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func model(for persistentModelID: PersistentIdentifier) -> PersistentModel\n")),(0,n.kt)("h3",{id:"registeredmodelfor"},"registeredModel(for:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func registeredModel<T>(for persistentModelID: PersistentIdentifier) -> T?\n        where T : PersistentModel\n")),(0,n.kt)("h2",{id:"\u63d2\u5165\u6a21\u578b"},"\u63d2\u5165\u6a21\u578b"),(0,n.kt)("h3",{id:"insertedmodelsarray"},"insertedModelsArray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var insertedModelsArray: [PersistentModel] { get }\n")),(0,n.kt)("h3",{id:"insert_"},"insert(","_",":)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func insert<T>(_ model: T) where T : PersistentModel\n")),(0,n.kt)("h2",{id:"\u4fee\u6539\u6a21\u578b"},"\u4fee\u6539\u6a21\u578b"),(0,n.kt)("h3",{id:"haschanges"},"hasChanges"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var hasChanges: Bool { get }\n")),(0,n.kt)("h3",{id:"changedmodelsarray"},"changedModelsArray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var changedModelsArray: [PersistentModel] { get }\n")),(0,n.kt)("h2",{id:"\u5220\u9664\u6a21\u578b"},"\u5220\u9664\u6a21\u578b"),(0,n.kt)("h3",{id:"deletedmodelsarray"},"deletedModelsArray"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var deletedModelsArray: [PersistentModel] { get }\n")),(0,n.kt)("h3",{id:"deletemodelwhereincludesubclasses"},"delete(model:where:includeSubclasses:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func delete<T>(model: T.Type,\n                      where predicate: Predicate<T>? = nil,\n                      includeSubclasses: Bool = true\n) throws where T : PersistentModel\n")),(0,n.kt)("h3",{id:"delete_"},"delete(","_",":)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func delete<T>(_ model: T) where T : PersistentModel\n")),(0,n.kt)("h2",{id:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539"},"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539"),(0,n.kt)("h3",{id:"autosaveenabled"},"autosaveEnabled"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var autosaveEnabled: Bool\n")),(0,n.kt)("h3",{id:"save"},"save()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func save() throws\n")),(0,n.kt)("h3",{id:"transactionblock"},"transaction(block:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func transaction(block: () throws -> Void) throws\n")),(0,n.kt)("h3",{id:"rollback"},"rollback()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func rollback()\n")),(0,n.kt)("h2",{id:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26"},"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26"),(0,n.kt)("h3",{id:"fetchidentifiers_"},"fetchIdentifiers(","_",":)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetchIdentifiers<T>(_ descriptor: FetchDescriptor<T>)\n        throws -> [PersistentIdentifier] where T : PersistentModel\n")),(0,n.kt)("h3",{id:"fetchidentifiers_batchsize"},"fetchIdentifiers(","_",":batchSize:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func fetchIdentifiers<T>(_ descriptor: FetchDescriptor<T>,\n                                batchSize: Int\n) throws -> FetchResultsCollection<PersistentIdentifier> where T : PersistentModel\n")),(0,n.kt)("h2",{id:"\u8bbf\u95ee\u5bb9\u5668"},"\u8bbf\u95ee\u5bb9\u5668"),(0,n.kt)("h3",{id:"container"},"container"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var container: ModelContainer { get }\n")),(0,n.kt)("h2",{id:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a"},"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a"),(0,n.kt)("h3",{id:"undomanager"},"undoManager"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public var undoManager: UndoManager?\n")),(0,n.kt)("h3",{id:"processpendingchanges"},"processPendingChanges()"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public func processPendingChanges()\n")),(0,n.kt)("h2",{id:"\u6ce8\u518c\u901a\u77e5"},"\u6ce8\u518c\u901a\u77e5"),(0,n.kt)("h3",{id:"willsave"},"willSave"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public static let willSave: Notification.Name\n")),(0,n.kt)("h3",{id:"didsave"},"didSave"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public static let didSave: Notification.Name\n")),(0,n.kt)("h3",{id:"notificationkey"},"NotificationKey"),(0,n.kt)("p",null,"\u63cf\u8ff0\u6a21\u578b\u4e0a\u4e0b\u6587\u53d1\u9001\u7684\u901a\u77e5\u7684\u7528\u6237\u4fe1\u606f\u5b57\u5178\u4e2d\u7684\u6570\u636e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"public enum NotificationKey : String {\n    // ...\n\n    // \u6307\u793a SwiftData \u6b63\u5728\u4f7f\u7528\u54ea\u4e00\u4ee3\u6a21\u578b\u5b58\u50a8\u7684\u4ee4\u724c\n    case queryGeneration\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u65e0\u6548\u6a21\u578b\u7684\u503c\n    case invalidatedAllIdentifiers\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u63d2\u5165\u6a21\u578b\u7684\u503c\n    case insertedIdentifiers\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u66f4\u65b0\u6a21\u578b\u7684\u503c\n    case updatedIdentifiers\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u5df2\u5220\u9664\u6a21\u578b\u7684\u503c\n    case deletedIdentifiers\n\n    public typealias RawValue = String\n\n    public var rawValue: String { get }\n}\n")),(0,n.kt)("h4",{id:"\u521b\u5efa\u901a\u77e5"},"\u521b\u5efa\u901a\u77e5"),(0,n.kt)("h5",{id:"initrawvalue"},"init(rawValue:)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4f7f\u7528\u6307\u5b9a\u7684\u539f\u59cb\u503c\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\n//\n// - rawValue: \u7528\u4e8e\u65b0\u5b9e\u4f8b\u7684\u539f\u59cb\u503c\npublic init?(rawValue: String)\n")),(0,n.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u4e0e\u6307\u5b9a\u539f\u59cb\u503c\u5bf9\u5e94\u7684\u7c7b\u578b\u503c\uff0c\u5219\u6b64\u521d\u59cb\u5316\u5668\u8fd4\u56de nil \u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'enum PaperSize: String {\n    case A4, A5, Letter, Legal\n}\n\nprint(PaperSize(rawValue: "Legal"))\n// Prints "Optional("PaperSize.Legal")"\n\nprint(PaperSize(rawValue: "Tabloid"))\n// Prints "nil"\n')),(0,n.kt)("h4",{id:"\u5b9e\u4f8b\u5c5e\u6027"},"\u5b9e\u4f8b\u5c5e\u6027"),(0,n.kt)("h5",{id:"rawvalue"},"rawValue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u539f\u59cb\u7c7b\u578b\u5bf9\u5e94\u7684\u503c\npublic var rawValue: String { get }\n")),(0,n.kt)("p",null,"\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"rawValue")," \u521d\u59cb\u5316\u7684\u65b0\u5b9e\u4f8b\u5c06\u4e0e\u6b64\u5b9e\u4f8b\u7b49\u6548\u3002\u4f8b\u5982\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},'enum PaperSize: String {\n    case A4, A5, Letter, Legal\n}\n\nlet selectedSize = PaperSize.Letter\nprint(selectedSize.rawValue)\n// Prints "Letter"\n\nprint(selectedSize == PaperSize(rawValue: selectedSize.rawValue)!)\n// Prints "true"\n')),(0,n.kt)("h4",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,n.kt)("h5",{id:"rawvalue-1"},"RawValue"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-swift"},"// \u53ef\u7528\u4e8e\u8868\u793a\u7b26\u5408\u7c7b\u578b\u7684\u6240\u6709\u503c\u7684\u539f\u59cb\u7c7b\u578b\npublic typealias RawValue = String\n")),(0,n.kt)("p",null,"\u4e00\u81f4\u7c7b\u578b\u7684\u6bcf\u4e2a\u4e0d\u540c\u503c\u90fd\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"RawValue")," \u7c7b\u578b\u7684\u552f\u4e00\u503c\uff0c\u4f46\u53ef\u80fd\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"RawValue")," \u7c7b\u578b\u7684\u503c\u6ca1\u6709\u4e00\u81f4\u7c7b\u578b\u7684\u5bf9\u5e94\u503c\u3002"))}m.isMDXComponent=!0}}]);