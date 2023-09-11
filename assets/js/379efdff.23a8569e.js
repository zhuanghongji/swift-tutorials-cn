"use strict";(self.webpackChunkswift_tutorials_cn=self.webpackChunkswift_tutorials_cn||[]).push([[1909],{3905:(n,t,e)=>{e.d(t,{Zo:()=>_,kt:()=>f});var i=e(67294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function r(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,i,a=function(n,t){if(null==n)return{};var e,i,a={},o=Object.keys(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)e=o[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var s=i.createContext({}),d=function(n){var t=i.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):r(r({},t),n)),e},_=function(n){var t=d(n.components);return i.createElement(s.Provider,{value:t},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(n,t){var e=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,_=c(n,["components","mdxType","originalType","parentName"]),u=d(e),l=a,f=u["".concat(s,".").concat(l)]||u[l]||p[l]||o;return e?i.createElement(f,r(r({ref:t},_),{},{components:e})):i.createElement(f,r({ref:t},_))}));function f(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var o=e.length,r=new Array(o);r[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=n,c[u]="string"==typeof n?n:a,r[1]=c;for(var d=2;d<o;d++)r[d]=e[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,e)}l.displayName="MDXCreateElement"},36259:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=e(87462),a=(e(67294),e(3905));const o={},r="\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u7f16\u7801\u547d\u4ee4",c={unversionedId:"metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/index",id:"metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/index",title:"\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u7f16\u7801\u547d\u4ee4",description:"\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a (ICB) \u652f\u6301\u5c06 Metal \u547d\u4ee4\u7f16\u7801\u5230 Metal \u7f13\u51b2\u533a\u4e2d\u4ee5\u4f9b\u91cd\u590d\u4f7f\u7528\u3002\u7a0d\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u7f16\u7801\u7684\u547d\u4ee4\u63d0\u4ea4\u7ed9 CPU \u6216 GPU \u6267\u884c\u3002\u6e32\u67d3\u548c\u8ba1\u7b97\u547d\u4ee4\u7684 ICB \u4f7f\u7528 command_buffer \u7c7b\u578b\u5c06\u547d\u4ee4\u7f16\u7801\u5230 ICB \u5bf9\u8c61\u4e2d\uff08\u5728 Metal \u6846\u67b6\u4e2d\u7531 MTLIndirectCommandBuffer \u8868\u793a\uff09\uff1a",source:"@site/docs/metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/index.mdx",sourceDirName:"metal-shading-language-specification/encoding-commands-for-indirect-command-buffers",slug:"/metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/",draft:!1,editUrl:"https://github.com/zhuanghongji/swift-tutorials-cn/docs/metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/index.mdx",tags:[],version:"current",lastUpdatedAt:1694410412,formattedLastUpdatedAt:"2023\u5e749\u670811\u65e5",frontMatter:{},sidebar:"metalshadinglanguagespecificationSidebar",previous:{title:"\u539f\u5b50\u51fd\u6570",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/atomic-functions/"},next:{title:"\u53ef\u53d8\u5149\u6805\u5316\u7387",permalink:"/swift-tutorials-cn/docs/metal-shading-language-specification/variable-rasterization-rate/"}},s={},d=[{value:"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u6e32\u67d3\u547d\u4ee4",id:"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u6e32\u67d3\u547d\u4ee4",level:2},{value:"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u8ba1\u7b97\u547d\u4ee4",id:"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u8ba1\u7b97\u547d\u4ee4",level:2},{value:"\u590d\u5236\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u547d\u4ee4",id:"\u590d\u5236\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u547d\u4ee4",level:2}],_=n=>function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=_("ToBePolishedAfterTranslation"),p=_("OrigninalPDF"),l={toc:d},f="wrapper";function m(n){let{components:t,...e}=n;return(0,a.kt)(f,(0,i.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u7f16\u7801\u547d\u4ee4"},"\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u7f16\u7801\u547d\u4ee4"),(0,a.kt)(u,{mdxType:"ToBePolishedAfterTranslation"}),(0,a.kt)(p,{title:"6.16 Encoding Commands for Indirect Command Buffers",mdxType:"OrigninalPDF"}),(0,a.kt)("p",null,"\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a (ICB) \u652f\u6301\u5c06 Metal \u547d\u4ee4\u7f16\u7801\u5230 Metal \u7f13\u51b2\u533a\u4e2d\u4ee5\u4f9b\u91cd\u590d\u4f7f\u7528\u3002\u7a0d\u540e\uff0c\u4f60\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u7f16\u7801\u7684\u547d\u4ee4\u63d0\u4ea4\u7ed9 CPU \u6216 GPU \u6267\u884c\u3002\u6e32\u67d3\u548c\u8ba1\u7b97\u547d\u4ee4\u7684 ICB \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"command_buffer")," \u7c7b\u578b\u5c06\u547d\u4ee4\u7f16\u7801\u5230 ICB \u5bf9\u8c61\u4e2d\uff08\u5728 Metal \u6846\u67b6\u4e2d\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLIndirectCommandBuffer")," \u8868\u793a\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct command_buffer {\n    size_t size() const;\n};\n")),(0,a.kt)("p",null,"ICB \u53ef\u4ee5\u5305\u542b\u6e32\u67d3\u6216\u8ba1\u7b97\u547d\u4ee4\uff0c\u4f46\u4e0d\u80fd\u540c\u65f6\u5305\u542b\u4e24\u8005\u3002\u4ece\u6e32\u67d3\u7f16\u7801\u5668\u6267\u884c\u8ba1\u7b97\u547d\u4ee4\u662f\u975e\u6cd5\u7684\u3002\u4ece\u8ba1\u7b97\u7f16\u7801\u5668\u6267\u884c\u6e32\u67d3\u547d\u4ee4\u4e5f\u662f\u5982\u6b64\u3002"),(0,a.kt)("h2",{id:"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u6e32\u67d3\u547d\u4ee4"},"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u6e32\u67d3\u547d\u4ee4"),(0,a.kt)("p",null,"\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\uff1a\u81ea Metal 2.1 \u8d77\u652f\u6301\u6e32\u67d3\u547d\u4ee4\u7684\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u3002"),(0,a.kt)("p",null,"ICB \u5141\u8bb8\u5c06\u7ed8\u5236\u547d\u4ee4\u7f16\u7801\u5230 Metal \u7f13\u51b2\u533a\u4e2d\uff0c\u4ee5\u4fbf\u968f\u540e\u5728 GPU \u4e0a\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5728\u7740\u8272\u8bed\u8a00\u51fd\u6570\u4e2d\uff0c\u4f7f\u7528 command_buffer \u7c7b\u578b\u5c06 ICB \u7684\u547d\u4ee4\u7f16\u7801\u5230 Metal \u7f13\u51b2\u533a\u5bf9\u8c61\u4e2d\uff0c\u8be5\u5bf9\u8c61\u63d0\u4f9b\u5bf9 render_command \u7ed3\u6784\u7684\u7d22\u5f15\u8bbf\u95ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"struct arguments {\n    command_buffer cmd_buffer;\n};\n\nkernel void producer(device arguments &args,\n                     ushort cmd_idx [[thread_position_in_grid]]\n) {\n    render_command cmd(args.cmd_buffer, cmd_idx);\n    ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"render_command")," \u53ef\u4ee5\u5bf9\u4efb\u4f55\u7ed8\u5236\u547d\u4ee4\u7c7b\u578b\u8fdb\u884c\u7f16\u7801\u3002\u4ee5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"render_command")," \u7684\u516c\u5171\u63a5\u53e3\u5728\u5934\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"<metal_command_buffer>")," \u4e2d\u5b9a\u4e49\u3002\u8981\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"render_pipeline_state")," \u5bf9\u8c61\u4f20\u9012\u7ed9\u7740\u8272\u5668\uff0c\u8bf7\u4f7f\u7528\u53c2\u6570\u7f13\u51b2\u533a\u3002\u5728\u53c2\u6570\u7f13\u51b2\u533a\u5185\uff0c\u7ba1\u9053\u72b6\u6001\u53ef\u4ee5\u4f5c\u4e3a\u6807\u91cf\u6216\u6570\u7ec4\u4f20\u9012\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"set_render_pipeline_state(...)")," \u548c\u6e32\u67d3\u7ba1\u9053\u72b6\u6001\u81ea Metal 2.1 \u8d77\u5728 macOS \u4e0a\u53ef\u7528\uff0c\u81ea Metal 2.2 \u8d77\u5728 iOS \u4e0a\u53ef\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"enum class primitive_type { point, line, line_strip, triangle, triangle_strip };\n\nstruct render_command {\npublic:\n    explicit render_command(command_buffer icb, unsigned cmd_index);\n    void set_render_pipeline_state(\n            render_pipeline_state pipeline_state);\n\n    template <typename T ...>\n    void set_vertex_buffer(device T *buffer, uint index);\n    template <typename T ...>\n    void set_vertex_buffer(constant T *buffer, uint index);\n\n    // Metal 3.1: Supported passing vertex strides\n    template <typename T ...>\n    void set_vertex_buffer(device T *buffer, size_t stride, uint index);\n\n    template <typename T ...>\n    void set_vertex_buffer(constant T *buffer, size_t stride, uint index);\n\n    template <typename T ...>\n    void set_fragment_buffer(device T *buffer, uint index);\n    template <typename T ...>\n    void set_fragment_buffer(constant T *buffer, uint index);\n\n    void draw_primitives(primitive_type type,\n                         uint vertex_start,\n                         uint vertex_count,\n                         uint instance_count,\n                         uint base_instance);\n\n    // Overloaded draw_indexed_primitives based on index_buffer\n    void draw_indexed_primitives(primitive_type type,\n                                 uint index_count,\n                                 device ushort *index_buffer,\n                                 uint instance_count,\n                                 uint base_vertex,\n                                 uint base_instance);\n\n    void draw_indexed_primitives(primitive_type type,\n                                 uint index_count,\n                                 device uint *index_buffer,\n                                 uint instance_count,\n                                 uint base_vertex,\n                                 uint base_instance);\n\n    void draw_indexed_primitives(primitive_type type,\n                                 uint index_count,\n                                 constant ushort *index_buffer,\n                                 uint instance_count,\n                                 uint base_vertex,\n                                 uint base_instance);\n\n    void draw_indexed_primitives(primitive_type type,\n                                 uint index_count,\n                                 constant uint *index_buffer,\n                                 uint instance_count,\n                                 uint base_vertex,\n                                 uint base_instance);\n\n    // Overloaded draw_patches based on patch_index_buffer and\n    // tessellation_factor_buffer\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      const device uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      const device MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      const device uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      const device MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      const device uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      constant MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      const device uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      constant MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      constant uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      const device MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      constant uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      const device MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      constant uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      constant MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    void draw_patches(uint number_of_patch_control_points,\n                      uint patch_start,\n                      uint patch_count,\n                      constant uint *patch_index_buffer,\n                      uint instance_count,\n                      uint base_instance,\n                      constant MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                      uint instance_stride = 0);\n\n    // Overloaded draw_indexed_patches based on patch_index_buffer,\n    // control_point_index_buffer and tessellation_factor_buffer\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              const device MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              const device MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              constant MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              constant MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              const device MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              const device MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              constant MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              const device uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              constant MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              const device MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              const device MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              constant MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              const device void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              constant MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              const device MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              const device MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count,\n                              uint base_instance,\n                              constant MTLQuadTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    void draw_indexed_patches(uint number_of_patch_control_points,\n                              uint patch_start,\n                              uint patch_count,\n                              constant uint *patch_index_buffer,\n                              constant void *control_point_index_buffer,\n                              uint instance_count, uint base_instance,\n                              constant MTLTriangleTessellationFactorsHalf *tessellation_factor_buffer,\n                              uint instance_stride = 0);\n\n    // Reset the entire command. After reset(), without further\n    // modifications, execution of this command shall not perform\n    // any action.\n    void reset();\n\n    // Copy the content of the `source` command into this command.\n    void copy_command(render_command source);\n};\n")),(0,a.kt)("p",null,"\u5f53\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"command_buffer")," \u65f6\uff0cMetal \u4e0d\u4f1a\u68c0\u67e5\u8bbf\u95ee\u662f\u5426\u5728\u8303\u56f4\u5185\u3002\u5982\u679c\u8bbf\u95ee\u8d85\u51fa\u7f13\u51b2\u533a\u7684\u5bb9\u91cf\uff0c\u5219\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"render_command")," \u4e2d\u516c\u5f00\u7684\u65b9\u6cd5\u955c\u50cf\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLIndirectRenderCommand")," \u7684\u63a5\u53e3\uff0c\u5e76\u4e14\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderCommandEncoder")," \u7c7b\u4f3c\u3002\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLRenderCommandEncoder")," \u7684\u663e\u7740\u5dee\u5f02\u662f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"render_command")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"draw*")," \u65b9\u6cd5\u7684\u8c03\u7528\u5bf9\u547d\u4ee4\u6240\u91c7\u53d6\u7684\u64cd\u4f5c\u8fdb\u884c\u7f16\u7801\u3002\u5982\u679c\u591a\u6b21\u8c03\u7528\uff0c\u5219\u53ea\u6709\u6700\u540e\u4e00\u6b21\u8c03\u7528\u6709\u6548\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u66f2\u9762\u7ec6\u5206\u53c2\u6570\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"render_command::draw_patches")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"render_command::draw_indexed_patches")," \u4e2d\u4f20\u9012\u3002\u5176\u5b83\u8c03\u7528\u4e0d\u4f1a\u8bbe\u7f6e\u66f2\u9762\u7ec6\u5206\u53c2\u6570\u3002")),(0,a.kt)("h2",{id:"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u8ba1\u7b97\u547d\u4ee4"},"\u5728\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u4e2d\u7f16\u7801\u8ba1\u7b97\u547d\u4ee4"),(0,a.kt)("p",null,"iOS\uff1a\u81ea Metal 2.2 \u8d77\u652f\u6301\u8ba1\u7b97\u547d\u4ee4\u7684\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u3002"),(0,a.kt)("p",null,"macOS\uff1a\u81ea Metal 2.3 \u8d77\u652f\u6301\u8ba1\u7b97\u547d\u4ee4\u7684\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u3002"),(0,a.kt)("p",null,"ICB \u5141\u8bb8\u5c06\u8c03\u5ea6\u547d\u4ee4\u7f16\u7801\u5230 Metal \u7f13\u51b2\u533a\u4e2d\uff0c\u4ee5\u4fbf\u968f\u540e\u5728 GPU \u4e0a\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u5728\u7740\u8272\u8bed\u8a00\u51fd\u6570\u4e2d\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"command_buffer")," \u7c7b\u578b\u5c06 ICB \u7684\u547d\u4ee4\u7f16\u7801\u5230 Metal \u7f13\u51b2\u533a\u5bf9\u8c61\u4e2d\uff0c\u8be5\u5bf9\u8c61\u63d0\u4f9b\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"compute_command")," \u7ed3\u6784\u7684\u7d22\u5f15\u8bbf\u95ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct arguments {\n    command_buffer cmd_buffer;\n};\n[[kernel]] void producer(device arguments &args,\n                         ushort cmd_idx [[thread_position_in_grid]]) {\n    compute_command cmd(args.cmd_buffer, cmd_idx);\n    ...\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compute_command")," \u53ef\u4ee5\u5bf9\u4efb\u4f55\u8c03\u5ea6\u547d\u4ee4\u7c7b\u578b\u8fdb\u884c\u7f16\u7801\u3002\u5934\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"<metal_command_buffer>")," \u4e2d\u5b9a\u4e49\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"compute_command")," \u7684\u4ee5\u4e0b\u516c\u5171\u63a5\u53e3\u3002compute_pipeline_state \u7c7b\u578b\u8868\u793a\u8ba1\u7b97\u7ba1\u9053\u72b6\u6001\uff0c\u53ea\u80fd\u662f\u901a\u8fc7\u53c2\u6570\u7f13\u51b2\u533a\u4f20\u9012\u7ed9\u7740\u8272\u5668\u3002\u5728\u53c2\u6570\u7f13\u51b2\u533a\u5185\uff0c\u7ba1\u9053\u72b6\u6001\u53ef\u4ee5\u4f5c\u4e3a\u6807\u91cf\u6216\u6570\u7ec4\u4f20\u9012\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct compute_command {\npublic:\n    explicit compute_command(command_buffer icb, unsigned cmd_index);\n\n    void set_compute_pipeline_state(compute_pipeline_state pipeline);\n\n    template <typename T ...>\n    void set_kernel_buffer(device T *buffer, uint index);\n    template <typename T ...>\n    void set_kernel_buffer(constant T *buffer, uint index);\n\n    // Metal 3.1: Supports passing kernel strides\n    template <typename T ...>\n    void set_kernel_buffer(device T *buffer, size_t stride, uint index);\n    template <typename T ...>\n    void set_kernel_buffer(constant T *buffer, size_t stride, uint index);\n\n    void set_barrier();\n    void clear_barrier();\n\n    void concurrent_dispatch_threadgroups(\n             uint3 threadgroups_per_grid,\n             uint3 threads_per_threadgroup);\n\n    void concurrent_dispatch_threads(uint3 threads_per_grid,\n                                     uint3 threads_per_threadgroup);\n\n    void set_threadgroup_memory_length(uint length, uint index);\n    void set_stage_in_region(uint3 origin, uint3 size);\n\n    // Reset the entire command. After reset(), without further\n    // modifications, execution of this command shall not perform\n    // any action.\n    void reset();\n\n    // Copy the content of the `source` command into this command.\n     void copy_command(compute_command source);\n};\n")),(0,a.kt)("p",null,"\u5f53\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"command_buffer")," \u65f6\uff0cMetal \u4e0d\u4f1a\u68c0\u67e5\u8bbf\u95ee\u662f\u5426\u5728\u8303\u56f4\u5185\u3002\u5982\u679c\u8bbf\u95ee\u8d85\u51fa\u7f13\u51b2\u533a\u7684\u5bb9\u91cf\uff0c\u5219\u884c\u4e3a\u672a\u5b9a\u4e49\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compute_command")," \u4e2d\u516c\u5f00\u7684\u65b9\u6cd5\u955c\u50cf\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLIndirectComputeCommand")," \u7684\u63a5\u53e3\uff0c\u5e76\u4e14\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"MTLComputeCommandEncoder")," \u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"\u5728 ICB \u4e2d\uff0c\u8c03\u5ea6\u59cb\u7ec8\u662f\u5e76\u53d1\u7684\u3002\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"compute_command")," \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"concurrent_dispatch*")," \u65b9\u6cd5\u7684\u8c03\u7528\u5bf9\u547d\u4ee4\u6240\u91c7\u53d6\u7684\u64cd\u4f5c\u8fdb\u884c\u7f16\u7801\u3002\u5982\u679c\u591a\u6b21\u8c03\u7528\uff0c\u5219\u53ea\u6709\u6700\u540e\u4e00\u6b21\u8c03\u7528\u6709\u6548\u3002"),(0,a.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u8d1f\u8d23\u5728\u9700\u8981\u7684\u5730\u65b9\u8bbe\u7f6e\u969c\u788d\u3002ICB \u4e2d\u7f16\u7801\u7684\u5c4f\u969c\u4e0d\u4f1a\u5f71\u54cd\u7236\u7f16\u7801\u5668\u3002"),(0,a.kt)("p",null,"\u5728\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"command_buffer")," \u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9\u7740\u8272\u5668\u4e4b\u524d\uff0cCPU \u53ef\u80fd\u5df2\u7ecf\u521d\u59cb\u5316\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"command_buffer")," \u5185\u7684\u5404\u4e2a\u547d\u4ee4\u3002\u5982\u679c CPU \u5c1a\u672a\u521d\u59cb\u5316\u547d\u4ee4\uff0c\u5219\u5fc5\u987b\u5728\u4f7f\u7528\u8be5\u547d\u4ee4\u4e4b\u524d\u91cd\u7f6e\u8be5\u547d\u4ee4\u3002"),(0,a.kt)("h2",{id:"\u590d\u5236\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u547d\u4ee4"},"\u590d\u5236\u95f4\u63a5\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u547d\u4ee4"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"operator=")," \u590d\u5236\u547d\u4ee4\u7ed3\u6784\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"render_command")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"compute_command"),"\uff09\u4e0d\u4f1a\u590d\u5236\u547d\u4ee4\u7684\u5185\u5bb9\uff0c\u800c\u53ea\u4f1a\u4f7f\u76ee\u6807\u547d\u4ee4\u6307\u5411\u4e0e\u6e90\u547d\u4ee4\u76f8\u540c\u7684\u7f13\u51b2\u533a\u548c\u7d22\u5f15\u3002\u8981\u590d\u5236\u547d\u4ee4\u7684\u5185\u5bb9\uff0c\u8bf7\u8c03\u7528\u7b2c 6.16.1 \u548c 6.16.2 \u8282\u4e2d\u5217\u51fa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"copy_command")," \u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u4ec5\u652f\u6301\u5728\u6307\u5411\u517c\u5bb9\u547d\u4ee4\u7f13\u51b2\u533a\u7684\u547d\u4ee4\u4e4b\u95f4\u8fdb\u884c\u590d\u5236\u3002\u4ec5\u5f53\u4e24\u4e2a\u547d\u4ee4\u7f13\u51b2\u533a\u5177\u6709\u5339\u914d\u7684 ICB \u63cf\u8ff0\u7b26\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"MTLIndirectCommandBufferDescriptor")," \u5bf9\u8c61\uff09\u65f6\uff0c\u5b83\u4eec\u624d\u662f\u517c\u5bb9\u7684\u3002\u547d\u4ee4\u672c\u8eab\u8fd8\u5fc5\u987b\u5f15\u7528\u7f13\u51b2\u533a\u5185\u7684\u6709\u6548\u7d22\u5f15\u3002\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"copy_command")," \u5c06\u6e32\u67d3\u547d\u4ee4\u7684\u5185\u5bb9\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd0")," \u590d\u5236\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd1"),"\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"struct arguments {\n    command_buffer cmd_buffer;\n    render_pipeline_state pipeline_state_0;\n    render_pipeline_state pipeline_state_1;\n};\n\n[[kernel]] void producer(device arguments &args) {\n    render_command cmd0(args.cmd_buffer, 0);\n    render_command cmd1(args.cmd_buffer, 1);\n    cmd0.set_render_pipeline_state(args.pipeline_state_0);\n\n    // Make the command at index 1 point to command at index 0.\n    cmd1 = cmd0;\n\n    // Change the pipeline state for the command at index 0 in the\n    // buffer.\n    cmd1.set_render_pipeline_state(args.pipeline_state_0);\n\n    // The command at index 1 in the buffer is not yet modified.\n    cmd1 = render_command(args.cmd_buffer, 1);\n\n    // Copy the content of the command at index 0 to command at\n    // index 1.\n    cmd1.copy_command(cmd0);\n}\n")))}m.isMDXComponent=!0}}]);