"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[8870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},o="Query",l={unversionedId:"swift-data/model-fetch/query/index",id:"swift-data/model-fetch/query/index",title:"Query",description:"<OriginalSource",source:"@site/docs/swift-data/model-fetch/query/index.mdx",sourceDirName:"swift-data/model-fetch/query",slug:"/swift-data/model-fetch/query/",permalink:"/swift-tutorials-cn/docs/swift-data/model-fetch/query/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/swift-data/model-fetch/query/index.mdx",tags:[],version:"current",lastUpdatedAt:1697949909,formattedLastUpdatedAt:"2023\u5e7410\u670822\u65e5",frontMatter:{},sidebar:"swiftdataSidebar",previous:{title:"\u8fc7\u6ee4\u548c\u6392\u5e8f\u6301\u4e45\u6570\u636e",permalink:"/swift-tutorials-cn/docs/swift-data/model-fetch/filtering-and-sorting-persistent-data/"},next:{title:"FetchDescriptor",permalink:"/swift-tutorials-cn/docs/swift-data/model-fetch/fetch-descriptor/"}},s={},c=[{value:"\u521b\u5efa\u67e5\u8be2",id:"\u521b\u5efa\u67e5\u8be2",level:2},{value:"init(_:transaction:)",id:"init_transaction",level:3},{value:"init(filter:sort:transaction:)",id:"initfiltersorttransaction",level:3},{value:"init(filter:sort:order:transaction:)",id:"initfiltersortordertransaction",level:3},{value:"init(filter:sort:order:transaction:)",id:"initfiltersortordertransaction-1",level:3},{value:"init(_:animation:)",id:"init_animation",level:3},{value:"init(filter:sort:animation:)",id:"initfiltersortanimation",level:3},{value:"init(filter:sort:order:animation:)",id:"initfiltersortorderanimation",level:3},{value:"init(filter:sort:order:animation:)",id:"initfiltersortorderanimation-1",level:3},{value:"\u83b7\u53d6\u67e5\u8be2\u914d\u7f6e",id:"\u83b7\u53d6\u67e5\u8be2\u914d\u7f6e",level:2},{value:"modelContext",id:"modelcontext",level:3},{value:"fetchError",id:"fetcherror",level:3},{value:"\u8bbf\u95ee\u503c",id:"\u8bbf\u95ee\u503c",level:2},{value:"wrappedValue",id:"wrappedvalue",level:3},{value:"\u66f4\u65b0\u503c",id:"\u66f4\u65b0\u503c",level:2},{value:"update()",id:"update",level:3}],p=(d="OriginalSource",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var d;const u={toc:c},m="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"query"},"Query"),(0,i.kt)(p,{title:"Query",url:"https://developer.apple.com/documentation/swiftdata/query",summary:"\u4e00\u4e2a\u5c5e\u6027\u5305\u88c5\u5668\uff0c\u7528\u4e8e\u83b7\u53d6\u4e00\u7ec4\u6a21\u578b\u5e76\u4f7f\u8fd9\u4e9b\u6a21\u578b\u4e0e\u5e95\u5c42\u6570\u636e\u4fdd\u6301\u540c\u6b65",mdxType:"OriginalSource"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"@available(iOS 17.0, macOS 14.0, tvOS 17.0, watchOS 10.0, *)\npublic struct Query<Element, Result> : DynamicProperty\n        where Element : PersistentModel {\n    // ...\n}\n")),(0,i.kt)("h2",{id:"\u521b\u5efa\u67e5\u8be2"},"\u521b\u5efa\u67e5\u8be2"),(0,i.kt)("h3",{id:"init_transaction"},"init(","_",":transaction:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u4f7f\u7528 "SwiftData \u83b7\u53d6\u63cf\u8ff0\u5668" \u521b\u5efa\u67e5\u8be2\n//\n// - descriptor: \u4e00\u4e2a `SwiftData.FetchDescriptor`\n// - transaction: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u4e8b\u52a1\npublic init(_ descriptor: FetchDescriptor<Element>,\n            transaction: Transaction? = nil\n) where Result == [Element]\n')),(0,i.kt)("h3",{id:"initfiltersorttransaction"},"init(filter:sort:transaction:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u4f7f\u7528 "\u65ad\u8a00\u548c\u6392\u5e8f\u63cf\u8ff0\u5668\u5217\u8868" \u521b\u5efa\u67e5\u8be2\n//\n// - filter: Element \u4e0a\u7684\u65ad\u8a00\n// - descriptors: \u5bf9\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\n// - transaction: \u7528\u4e8e\u56e0\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539\u800c\u5bfc\u81f4\u7684\u7528\u6237\u754c\u9762\u66f4\u6539\u7684\u4e8b\u52a1\npublic init(filter: Predicate<Element>? = nil,\n            sort descriptors: [SortDescriptor<Element>] = [],\n            transaction: Transaction? = nil\n) where Result == [Element]\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u5305\u88c5\u67e5\u8be2\u7ed3\u679c\u7684\u53d8\u91cf\uff0c\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    // Favorite recipes sorted by date of creation\n    @Query(\n        filter: #Predicate { $0.isFavorite == true },\n        sort: [SortDescriptor(\\.dateCreated)]\n    )\n    var favoriteRecipes: [Recipe]\n\n    var body: some View {\n        List(favoriteRecipes) { RecipeDetails($0) }\n    }\n}\n")),(0,i.kt)("h3",{id:"initfiltersortordertransaction"},"init(filter:sort:order:transaction:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u4f7f\u7528 "\u65ad\u8a00\u3001\u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u952e\u8def\u5f84\u4ee5\u53ca\u6392\u5e8f\u987a\u5e8f" \u521b\u5efa\u67e5\u8be2\n//\n// - filter: Element \u4e0a\u7684\u65ad\u8a00\n// - sort: \u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u952e\u8def\u5f84\n// - order: \u662f\u5426\u6309\u6b63\u5e8f\u6216\u5012\u5e8f\u6392\u5e8f\n// - transaction: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u4e8b\u52a1\npublic init<Value>(filter: Predicate<Element>? = nil,\n                   sort keyPath: KeyPath<Element, Value>,\n                   order: SortOrder = .forward,\n                   transaction: Transaction? = nil\n) where Result == [Element], Value : Comparable\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u5305\u88c5\u67e5\u8be2\u7ed3\u679c\u7684\u53d8\u91cf\uff0c\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    // Recipes sorted by date of creation\n    @Query(sort: \\.dateCreated)\n    var favoriteRecipes: [Recipe]\n\n    var body: some View {\n        List(favoriteRecipes) { RecipeDetails($0) }\n    }\n}\n")),(0,i.kt)("h3",{id:"initfiltersortordertransaction-1"},"init(filter:sort:order:transaction:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u4f7f\u7528 "\u65ad\u8a00\u3001\u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u5173\u952e\u8def\u5f84\u4ee5\u53ca\u6392\u5e8f\u987a\u5e8f" \u521b\u5efa\u67e5\u8be2\n//\n// - filter: Element \u4e0a\u7684\u65ad\u8a00\n// - sort: \u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u952e\u8def\u5f84\n// - order: \u662f\u5426\u6309\u6b63\u5e8f\u6216\u5012\u5e8f\u6392\u5e8f\n// - transaction: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u4e8b\u52a1\npublic init<Value>(filter: Predicate<Element>? = nil,\n                   sort keyPath: KeyPath<Element, Value?>,\n                   order: SortOrder = .forward,\n                   transaction: Transaction? = nil\n) where Result == [Element], Value : Comparable\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u5305\u88c5\u67e5\u8be2\u7ed3\u679c\u7684\u53d8\u91cf\uff0c\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    // Recipes sorted by date of creation\n    @Query(sort: \\.dateCreated)\n    var favoriteRecipes: [Recipe]\n\n    var body: some View {\n        List(favoriteRecipes) { RecipeDetails($0) }\n    }\n}\n")),(0,i.kt)("h3",{id:"init_animation"},"init(","_",":animation:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u4f7f\u7528 "SwiftData \u83b7\u53d6\u63cf\u8ff0\u5668" \u521b\u5efa\u67e5\u8be2\n//\n// - descriptor: \u4e00\u4e2a `SwiftData.FetchDescriptor`\n// - animation: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u52a8\u753b\npublic init(_ descriptor: FetchDescriptor<Element>,\n            animation: Animation\n) where Result == [Element]\n')),(0,i.kt)("h3",{id:"initfiltersortanimation"},"init(filter:sort:animation:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u4f7f\u7528 "\u65ad\u8a00\u548c\u6392\u5e8f\u63cf\u8ff0\u5668\u5217\u8868" \u521b\u5efa\u67e5\u8be2\n//\n// - filter: Element \u4e0a\u7684\u65ad\u8a00\n// - descriptors: \u5bf9\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\n// - animation: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u52a8\u753b\npublic init(filter: Predicate<Element>? = nil,\n            sort descriptors: [SortDescriptor<Element>] = [],\n            animation: Animation\n) where Result == [Element]\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u5305\u88c5\u67e5\u8be2\u7ed3\u679c\u7684\u53d8\u91cf\uff0c\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    // Favorite recipes sorted by date of creation\n    @Query(\n        filter: #Predicate { $0.isFavorite == true },\n        sort: [SortDescriptor(\\.dateCreated)]\n    )\n    var favoriteRecipes: [Recipe]\n\n    var body: some View {\n        List(favoriteRecipes) { RecipeDetails($0) }\n    }\n}\n")),(0,i.kt)("h3",{id:"initfiltersortorderanimation"},"init(filter:sort:order:animation:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u521b\u5efa\u4e00\u4e2a\u5e26\u6709 "\u65ad\u8a00\u3001\u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u5173\u952e\u8def\u5f84\u4ee5\u53ca\u6392\u5e8f\u4f9d\u636e" \u7684\u67e5\u8be2\n//\n// - filter: Element \u4e0a\u7684\u65ad\u8a00\n// - sort: \u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u952e\u8def\u5f84\n// - order: \u662f\u5426\u6309\u6b63\u5e8f\u6216\u5012\u5e8f\u6392\u5e8f\n// - animation: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u52a8\u753b\npublic init<Value>(filter: Predicate<Element>? = nil,\n                   sort keyPath: KeyPath<Element, Value>,\n                   order: SortOrder = .forward,\n                   animation: Animation\n) where Result == [Element], Value : Comparable\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u5305\u88c5\u67e5\u8be2\u7ed3\u679c\u7684\u53d8\u91cf\uff0c\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Query"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    // Recipes sorted by date of creation\n    @Query(sort: \\.dateCreated)\n    var favoriteRecipes: [Recipe]\n\n    var body: some View {\n        List(favoriteRecipes) { RecipeDetails($0) }\n    }\n}\n")),(0,i.kt)("h3",{id:"initfiltersortorderanimation-1"},"init(filter:sort:order:animation:)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'// \u521b\u5efa\u4e00\u4e2a\u5e26\u6709 "\u65ad\u8a00\u3001\u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u5173\u952e\u8def\u5f84\u4ee5\u53ca\u6392\u5e8f\u4f9d\u636e" \u7684\u67e5\u8be2\n//\n// - filter: Element \u4e0a\u7684\u65ad\u8a00\n// - sort: \u7528\u4e8e\u6392\u5e8f\u7684\u5c5e\u6027\u7684\u952e\u8def\u5f84\n// - order: \u662f\u5426\u6309\u6b63\u5e8f\u6216\u5012\u5e8f\u6392\u5e8f\n// - animation: \u7528\u4e8e\u56e0 "\u83b7\u53d6\u7ed3\u679c\u7684\u66f4\u6539" \u800c\u5bfc\u81f4\u7684 "\u7528\u6237\u754c\u9762\u66f4\u6539" \u7684\u52a8\u753b\npublic init<Value>(filter: Predicate<Element>? = nil,\n                   sort keyPath: KeyPath<Element, Value?>,\n                   order: SortOrder = .forward,\n                   animation: Animation\n) where Result == [Element], Value : Comparable\n')),(0,i.kt)("h2",{id:"\u83b7\u53d6\u67e5\u8be2\u914d\u7f6e"},"\u83b7\u53d6\u67e5\u8be2\u914d\u7f6e"),(0,i.kt)("h3",{id:"modelcontext"},"modelContext"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u5f53\u524d Query \u4e0e\u4e4b\u4ea4\u4e92\u7684\u6a21\u578b\u4e0a\u4e0b\u6587\npublic var modelContext: ModelContext { get }\n")),(0,i.kt)("p",null,"\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," \u5c5e\u6027\u5305\u88c5\u5668\u7684\u5b58\u50a8\u5c5e\u6027\u8bbf\u95ee\u6b64\u503c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    @Query var recipes: [Recipe]\n    var body: some View {\n        ChangesIndicator(\n            hasChanges: _recipes.modelContext.hasChanges)\n    }\n}\n")),(0,i.kt)("p",null,"\u4ec5\u5728\u89c6\u56fe\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," \u5c5e\u6027\u5185\u8bbf\u95ee\u6b64\u5c5e\u6027\uff0c\u5426\u5219\u5176\u503c\u53ef\u80fd\u65e0\u6548\u3002"),(0,i.kt)("h3",{id:"fetcherror"},"fetchError"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u6700\u8fd1\u5c1d\u8bd5\u83b7\u53d6\u6570\u636e\u671f\u95f4\u9047\u5230\u9519\u8bef\npublic var fetchError: (Error)? { get }\n")),(0,i.kt)("p",null,"\u9664\u975e\u83b7\u53d6\u5c1d\u8bd5\u5931\u8d25\uff0c\u5426\u5219\u8be5\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"nil"),"\u3002\u5b83\u5305\u542b\u6765\u81ea SwiftData \u7684\u6700\u65b0\u9519\u8bef\u3002\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"Query")," \u7684\u5b58\u50a8\u5c5e\u6027\u8bbf\u95ee\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct RecipeList: View {\n    @Query var recipes: [Recipe]\n    var body: some View {\n        ErrorIndicatorView(_recipes.fetchError)\n    }\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u4ec5\u5728\u89c6\u56fe\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"body")," \u5c5e\u6027\u5185\u8bbf\u95ee\u6b64\u5c5e\u6027\uff0c\u5426\u5219\u5176\u503c\u53ef\u80fd\u65e0\u6548\u3002")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u53d1\u751f\u63d0\u53d6\u9519\u8bef\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"wrappedValue")," \u4fdd\u7559\u4e0a\u6b21\u6210\u529f\u63d0\u53d6\u7684\u7ed3\u679c\u3002\u4e00\u65e6\u65b0\u7684\u83b7\u53d6\u6210\u529f\uff0c\u5b83\u7684\u503c\u5c31\u4f1a\u66f4\u65b0\u3002")),(0,i.kt)("h2",{id:"\u8bbf\u95ee\u503c"},"\u8bbf\u95ee\u503c"),(0,i.kt)("h3",{id:"wrappedvalue"},"wrappedValue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u4ece\u67e5\u8be2\u4e2d\u83b7\u53d6\u7684\u6700\u65b0\u7ed3\u679c\npublic var wrappedValue: Result { get }\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"\u5f53\u53d1\u751f\u63d0\u53d6\u9519\u8bef\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"wrappedValue")," \u4fdd\u7559\u4e0a\u6b21\u6210\u529f\u63d0\u53d6\u7684\u7ed3\u679c\u3002\u4e00\u65e6\u65b0\u7684\u83b7\u53d6\u6210\u529f\uff0c\u5b83\u7684\u503c\u5c31\u4f1a\u66f4\u65b0\u3002")),(0,i.kt)("h2",{id:"\u66f4\u65b0\u503c"},"\u66f4\u65b0\u503c"),(0,i.kt)("h3",{id:"update"},"update()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"// \u66f4\u65b0\u5b58\u50a8\u503c\u7684\u57fa\u7840\u503c\npublic func update()\n")),(0,i.kt)("p",null,"SwiftUI \u5728\u6e32\u67d3\u89c6\u56fe\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"View/body-swift.property")," \u4e4b\u524d\u8c03\u7528\u8be5\u51fd\u6570\uff0c\u4ee5\u786e\u4fdd\u89c6\u56fe\u5177\u6709\u6700\u65b0\u503c\u3002"))}f.isMDXComponent=!0}}]);