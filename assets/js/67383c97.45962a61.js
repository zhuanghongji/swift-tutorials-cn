"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[5805],{40439:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=l(85893),a=l(11151);const s={},t="ModelContext",r={id:"swift-data/model-storage/model-context/index",title:"ModelContext",description:"<OriginalSource",source:"@site/docs/swift-data/model-storage/model-context/index.mdx",sourceDirName:"swift-data/model-storage/model-context",slug:"/swift-data/model-storage/model-context/",permalink:"/swift-tutorials-cn/docs/swift-data/model-storage/model-context/",draft:!1,unlisted:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-data/model-storage/model-context/index.mdx",tags:[],version:"current",lastUpdatedAt:1698830538,formattedLastUpdatedAt:"2023\u5e7411\u67081\u65e5",frontMatter:{},sidebar:"swiftdataSidebar",previous:{title:"ModelContainer",permalink:"/swift-tutorials-cn/docs/swift-data/model-storage/model-container/"},next:{title:"ModelDocument",permalink:"/swift-tutorials-cn/docs/swift-data/model-storage/model-document/"}},d={},c=[{value:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587",id:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587",level:2},{value:"init(_:)",id:"init_",level:3},{value:"\u83b7\u53d6\u6a21\u578b",id:"\u83b7\u53d6\u6a21\u578b",level:2},{value:"fetch(_:)",id:"fetch_",level:3},{value:"fetchCount(_:)",id:"fetchcount_",level:3},{value:"fetch(_:batchSize:)",id:"fetch_batchsize",level:3},{value:"enumerate(_:batchSize:allowEscapingMutations:block:)",id:"enumerate_batchsizeallowescapingmutationsblock",level:3},{value:"model(for:)",id:"modelfor",level:3},{value:"registeredModel(for:)",id:"registeredmodelfor",level:3},{value:"\u63d2\u5165\u6a21\u578b",id:"\u63d2\u5165\u6a21\u578b",level:2},{value:"insertedModelsArray",id:"insertedmodelsarray",level:3},{value:"insert(_:)",id:"insert_",level:3},{value:"\u4fee\u6539\u6a21\u578b",id:"\u4fee\u6539\u6a21\u578b",level:2},{value:"hasChanges",id:"haschanges",level:3},{value:"changedModelsArray",id:"changedmodelsarray",level:3},{value:"\u5220\u9664\u6a21\u578b",id:"\u5220\u9664\u6a21\u578b",level:2},{value:"deletedModelsArray",id:"deletedmodelsarray",level:3},{value:"delete(model:where:includeSubclasses:)",id:"deletemodelwhereincludesubclasses",level:3},{value:"delete(_:)",id:"delete_",level:3},{value:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539",id:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539",level:2},{value:"autosaveEnabled",id:"autosaveenabled",level:3},{value:"save()",id:"save",level:3},{value:"transaction(block:)",id:"transactionblock",level:3},{value:"rollback()",id:"rollback",level:3},{value:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26",id:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26",level:2},{value:"fetchIdentifiers(_:)",id:"fetchidentifiers_",level:3},{value:"fetchIdentifiers(_:batchSize:)",id:"fetchidentifiers_batchsize",level:3},{value:"\u8bbf\u95ee\u5bb9\u5668",id:"\u8bbf\u95ee\u5bb9\u5668",level:2},{value:"container",id:"container",level:3},{value:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a",id:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a",level:2},{value:"undoManager",id:"undomanager",level:3},{value:"processPendingChanges()",id:"processpendingchanges",level:3},{value:"\u6ce8\u518c\u901a\u77e5",id:"\u6ce8\u518c\u901a\u77e5",level:2},{value:"willSave",id:"willsave",level:3},{value:"didSave",id:"didsave",level:3},{value:"NotificationKey",id:"notificationkey",level:3},{value:"\u521b\u5efa\u901a\u77e5",id:"\u521b\u5efa\u901a\u77e5",level:4},{value:"init(rawValue:)",id:"initrawvalue",level:5},{value:"\u5b9e\u4f8b\u5c5e\u6027",id:"\u5b9e\u4f8b\u5c5e\u6027",level:4},{value:"rawValue",id:"rawvalue",level:5},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:4},{value:"RawValue",id:"rawvalue-1",level:5}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,a.a)(),...e.components},{OriginalSource:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("OriginalSource",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modelcontext",children:"ModelContext"}),"\n",(0,i.jsx)(l,{title:"ModelContext",url:"https://developer.apple.com/documentation/swiftdata/modelcontext",summary:"\u4e00\u4e2a\u4f7f\u4f60\u80fd\u591f\u83b7\u53d6\u3001\u63d2\u5165\u548c\u5220\u9664\u6a21\u578b\uff0c\u5e76\u5c06\u4efb\u4f55\u66f4\u6539\u4fdd\u5b58\u5230\u78c1\u76d8\u7684\u5bf9\u8c61"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"@available(swift 5.9)\n@available(macOS 14, iOS 17, tvOS 17, watchOS 10, *)\npublic class ModelContext : Equatable {\n    // ...\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587",children:"\u521b\u5efa\u6a21\u578b\u4e0a\u4e0b\u6587"}),"\n",(0,i.jsx)(n.h3,{id:"init_",children:"init(_:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public init(_ container: ModelContainer)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u83b7\u53d6\u6a21\u578b",children:"\u83b7\u53d6\u6a21\u578b"}),"\n",(0,i.jsx)(n.h3,{id:"fetch_",children:"fetch(_:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func fetch<T>(_ descriptor: FetchDescriptor<T>)\n        throws -> [T] where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fetchcount_",children:"fetchCount(_:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func fetchCount<T>(_ descriptor: FetchDescriptor<T>)\n        throws -> Int where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fetch_batchsize",children:"fetch(_:batchSize:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func fetch<T>(_ descriptor: FetchDescriptor<T>,\n                     batchSize: Int\n) throws -> FetchResultsCollection<T> where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enumerate_batchsizeallowescapingmutationsblock",children:"enumerate(_:batchSize:allowEscapingMutations:block:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func enumerate<T>(_ fetch: FetchDescriptor<T>,\n                         batchSize: Int = 5000,\n                         allowEscapingMutations: Bool = false,\n                         block: (_ model: T) throws -> Void\n) throws where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"modelfor",children:"model(for:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func model(for persistentModelID: PersistentIdentifier) -> PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"registeredmodelfor",children:"registeredModel(for:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func registeredModel<T>(for persistentModelID: PersistentIdentifier) -> T?\n        where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u63d2\u5165\u6a21\u578b",children:"\u63d2\u5165\u6a21\u578b"}),"\n",(0,i.jsx)(n.h3,{id:"insertedmodelsarray",children:"insertedModelsArray"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var insertedModelsArray: [PersistentModel] { get }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert_",children:"insert(_:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func insert<T>(_ model: T) where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4fee\u6539\u6a21\u578b",children:"\u4fee\u6539\u6a21\u578b"}),"\n",(0,i.jsx)(n.h3,{id:"haschanges",children:"hasChanges"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var hasChanges: Bool { get }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"changedmodelsarray",children:"changedModelsArray"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var changedModelsArray: [PersistentModel] { get }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5220\u9664\u6a21\u578b",children:"\u5220\u9664\u6a21\u578b"}),"\n",(0,i.jsx)(n.h3,{id:"deletedmodelsarray",children:"deletedModelsArray"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var deletedModelsArray: [PersistentModel] { get }\n"})}),"\n",(0,i.jsx)(n.h3,{id:"deletemodelwhereincludesubclasses",children:"delete(model:where:includeSubclasses:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func delete<T>(model: T.Type,\n                      where predicate: Predicate<T>? = nil,\n                      includeSubclasses: Bool = true\n) throws where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"delete_",children:"delete(_:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func delete<T>(_ model: T) where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539",children:"\u6301\u4e45\u5316\u672a\u4fdd\u5b58\u7684\u66f4\u6539"}),"\n",(0,i.jsx)(n.h3,{id:"autosaveenabled",children:"autosaveEnabled"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var autosaveEnabled: Bool\n"})}),"\n",(0,i.jsx)(n.h3,{id:"save",children:"save()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func save() throws\n"})}),"\n",(0,i.jsx)(n.h3,{id:"transactionblock",children:"transaction(block:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func transaction(block: () throws -> Void) throws\n"})}),"\n",(0,i.jsx)(n.h3,{id:"rollback",children:"rollback()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func rollback()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26",children:"\u4ec5\u83b7\u53d6\u6a21\u578b\u6807\u8bc6\u7b26"}),"\n",(0,i.jsx)(n.h3,{id:"fetchidentifiers_",children:"fetchIdentifiers(_:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func fetchIdentifiers<T>(_ descriptor: FetchDescriptor<T>)\n        throws -> [PersistentIdentifier] where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fetchidentifiers_batchsize",children:"fetchIdentifiers(_:batchSize:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func fetchIdentifiers<T>(_ descriptor: FetchDescriptor<T>,\n                                batchSize: Int\n) throws -> FetchResultsCollection<PersistentIdentifier> where T : PersistentModel\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbf\u95ee\u5bb9\u5668",children:"\u8bbf\u95ee\u5bb9\u5668"}),"\n",(0,i.jsx)(n.h3,{id:"container",children:"container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var container: ModelContainer { get }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a",children:"\u6267\u884c\u64a4\u6d88\u548c\u91cd\u505a"}),"\n",(0,i.jsx)(n.h3,{id:"undomanager",children:"undoManager"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public var undoManager: UndoManager?\n"})}),"\n",(0,i.jsx)(n.h3,{id:"processpendingchanges",children:"processPendingChanges()"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public func processPendingChanges()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u518c\u901a\u77e5",children:"\u6ce8\u518c\u901a\u77e5"}),"\n",(0,i.jsx)(n.h3,{id:"willsave",children:"willSave"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public static let willSave: Notification.Name\n"})}),"\n",(0,i.jsx)(n.h3,{id:"didsave",children:"didSave"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public static let didSave: Notification.Name\n"})}),"\n",(0,i.jsx)(n.h3,{id:"notificationkey",children:"NotificationKey"}),"\n",(0,i.jsx)(n.p,{children:"\u63cf\u8ff0\u6a21\u578b\u4e0a\u4e0b\u6587\u53d1\u9001\u7684\u901a\u77e5\u7684\u7528\u6237\u4fe1\u606f\u5b57\u5178\u4e2d\u7684\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"public enum NotificationKey : String {\n    // ...\n\n    // \u6307\u793a SwiftData \u6b63\u5728\u4f7f\u7528\u54ea\u4e00\u4ee3\u6a21\u578b\u5b58\u50a8\u7684\u4ee4\u724c\n    case queryGeneration\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u65e0\u6548\u6a21\u578b\u7684\u503c\n    case invalidatedAllIdentifiers\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u63d2\u5165\u6a21\u578b\u7684\u503c\n    case insertedIdentifiers\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u66f4\u65b0\u6a21\u578b\u7684\u503c\n    case updatedIdentifiers\n\n    // \u4e00\u7ec4\u6807\u8bc6\u4e0a\u4e0b\u6587\u5df2\u5220\u9664\u6a21\u578b\u7684\u503c\n    case deletedIdentifiers\n\n    public typealias RawValue = String\n\n    public var rawValue: String { get }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u521b\u5efa\u901a\u77e5",children:"\u521b\u5efa\u901a\u77e5"}),"\n",(0,i.jsx)(n.h5,{id:"initrawvalue",children:"init(rawValue:)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"// \u4f7f\u7528\u6307\u5b9a\u7684\u539f\u59cb\u503c\u521b\u5efa\u4e00\u4e2a\u65b0\u5b9e\u4f8b\n//\n// - rawValue: \u7528\u4e8e\u65b0\u5b9e\u4f8b\u7684\u539f\u59cb\u503c\npublic init?(rawValue: String)\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u6ca1\u6709\u4e0e\u6307\u5b9a\u539f\u59cb\u503c\u5bf9\u5e94\u7684\u7c7b\u578b\u503c\uff0c\u5219\u6b64\u521d\u59cb\u5316\u5668\u8fd4\u56de nil \u3002\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'enum PaperSize: String {\n    case A4, A5, Letter, Legal\n}\n\nprint(PaperSize(rawValue: "Legal"))\n// Prints "Optional("PaperSize.Legal")"\n\nprint(PaperSize(rawValue: "Tabloid"))\n// Prints "nil"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u5b9e\u4f8b\u5c5e\u6027",children:"\u5b9e\u4f8b\u5c5e\u6027"}),"\n",(0,i.jsx)(n.h5,{id:"rawvalue",children:"rawValue"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"// \u539f\u59cb\u7c7b\u578b\u5bf9\u5e94\u7684\u503c\npublic var rawValue: String { get }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u7528 ",(0,i.jsx)(n.code,{children:"rawValue"})," \u521d\u59cb\u5316\u7684\u65b0\u5b9e\u4f8b\u5c06\u4e0e\u6b64\u5b9e\u4f8b\u7b49\u6548\u3002\u4f8b\u5982\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:'enum PaperSize: String {\n    case A4, A5, Letter, Legal\n}\n\nlet selectedSize = PaperSize.Letter\nprint(selectedSize.rawValue)\n// Prints "Letter"\n\nprint(selectedSize == PaperSize(rawValue: selectedSize.rawValue)!)\n// Prints "true"\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u7c7b\u578b\u522b\u540d",children:"\u7c7b\u578b\u522b\u540d"}),"\n",(0,i.jsx)(n.h5,{id:"rawvalue-1",children:"RawValue"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-swift",children:"// \u53ef\u7528\u4e8e\u8868\u793a\u7b26\u5408\u7c7b\u578b\u7684\u6240\u6709\u503c\u7684\u539f\u59cb\u7c7b\u578b\npublic typealias RawValue = String\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4e00\u81f4\u7c7b\u578b\u7684\u6bcf\u4e2a\u4e0d\u540c\u503c\u90fd\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684 ",(0,i.jsx)(n.code,{children:"RawValue"})," \u7c7b\u578b\u7684\u552f\u4e00\u503c\uff0c\u4f46\u53ef\u80fd\u6709 ",(0,i.jsx)(n.code,{children:"RawValue"})," \u7c7b\u578b\u7684\u503c\u6ca1\u6709\u4e00\u81f4\u7c7b\u578b\u7684\u5bf9\u5e94\u503c\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>t});var i=l(67294);const a={},s=i.createContext(a);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);