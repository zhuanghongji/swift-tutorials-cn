/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const swiftSidebar = [
  {
    type: "category",
    label: "Swift",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "欢迎",
        collapsed: false,
        items: [
          "swift/welcome/about/index",
          "swift/welcome/a-swift-tour/index",
        ],
      },
      {
        type: "category",
        label: "语言指南",
        collapsed: false,
        items: [
          "swift/guide/the-basics/index",
          "swift/guide/basic-operators/index",
          "swift/guide/strings-and-characters/index",
          "swift/guide/collection-types/index",
          "swift/guide/control-flow/index",
          "swift/guide/functions/index",
          "swift/guide/closures/index",
          "swift/guide/enumerations/index",
          "swift/guide/structures-and-classes/index",
          "swift/guide/properties/index",
          "swift/guide/methods/index",
          "swift/guide/subscripts/index",
          "swift/guide/inheritance/index",
          "swift/guide/initialization/index",
          "swift/guide/deinitialization/index",
          "swift/guide/optional-chaining/index",
          "swift/guide/error-handling/index",
          "swift/guide/concurrency/index",
          "swift/guide/type-casting/index",
          "swift/guide/nested-types/index",
          "swift/guide/extensions/index",
          "swift/guide/protocols/index",
          "swift/guide/generics/index",
          "swift/guide/opaque-types/index",
          "swift/guide/automatic-reference-counting/index",
          "swift/guide/memory-safety/index",
          "swift/guide/access-control/index",
          "swift/guide/advanced-operators/index",
        ],
      },
      {
        type: "category",
        label: "语言参考",
        collapsed: false,
        items: [
          "swift/reference/about/index",
          "swift/reference/lexical-structure/index",
          "swift/reference/types/index",
          "swift/reference/expressions/index",
          "swift/reference/statements/index",
          "swift/reference/declarations/index",
          "swift/reference/attributes/index",
          "swift/reference/patterns/index",
          "swift/reference/generic-parameters-and-arguments/index",
          "swift/reference/summary-of-the-grammar/index",
        ],
      },
      {
        type: "category",
        label: "标准库",
        collapsed: false,
        items: [
          "swift/standard-library/int/index",
          "swift/standard-library/double/index",
          "swift/standard-library/string/index",
        ],
      },
      {
        type: "category",
        label: "其它",
        collapsed: false,
        items: ["swift/rest/numbers/index"],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const swiftuiSidebar = [
  {
    type: "category",
    label: "SwiftUI",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "概要",
        collapsed: false,
        items: ["swiftui/essentials/about/index"],
      },
      {
        type: "category",
        label: "数据与存储",
        collapsed: false,
        items: [
          "swiftui/data-and-storage/creating-and-sharing-view-state/index",
          "swiftui/data-and-storage/creating-model-data/index",
          "swiftui/data-and-storage/responding-to-data-changes/index",
          "swiftui/data-and-storage/environment-values/index",
        ],
      },
      {
        type: "category",
        label: "视图",
        collapsed: false,
        items: [
          "swiftui/views/text/index",
          "swiftui/views/label/index",
          "swiftui/views/textfield/index",
          "swiftui/views/securefield/index",
          "swiftui/views/texteditor/index",
          "swiftui/views/image/index",
          "swiftui/views/asyncimage/index",
          "swiftui/views/button/index",
          "swiftui/views/link/index",
          "swiftui/views/slider/index",
          "swiftui/views/stepper/index",
          "swiftui/views/toggle/index",
          "swiftui/views/picker/index",
          "swiftui/views/rectangle/index",
          "swiftui/views/circle/index",
          "swiftui/views/ellipse/index",
          "swiftui/views/capsule/index",
          "swiftui/views/path/index",
        ],
      },
      {
        type: "category",
        label: "视图布局",
        collapsed: false,
        items: [
          "swiftui/view-layout/hstack/index",
          "swiftui/view-layout/vstack/index",
          "swiftui/view-layout/grid/index",
        ],
      },
      {
        type: "category",
        label: "视图修饰器",
        collapsed: false,
        items: ["swiftui/view-modifiers/shaders/index"],
      },
      {
        type: "category",
        label: "事件处理",
        collapsed: false,
        items: [
          "swiftui/event-handling/recognizing-tap-gestures/index",
          "swiftui/event-handling/recognizing-long-press-gestures/index",
          "swiftui/event-handling/recognizing-gestures-that-change-over-time/index",
          "swiftui/event-handling/combining-gestures/index",
        ],
      },
      {
        type: "category",
        label: "其它",
        collapsed: false,
        items: [
          "swiftui/rest/imagerenderer/index",
          "swiftui/rest/measuring-a-view/index",
          "swiftui/rest/adding-uikit-views-to-swiftui-view-hierarchies/index",
        ],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const swiftchartsSidebar = [
  {
    type: "category",
    label: "Swift Charts",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Essentials",
        collapsed: false,
        items: ["swift-charts/essentials/about/index"],
      },
      {
        type: "category",
        label: "Charts",
        collapsed: false,
        items: [
          "swift-charts/charts/creating-a-chart-using-swift-charts/index",
          "swift-charts/charts/chart/index",
          "swift-charts/charts/chart-content/index",
          "swift-charts/charts/chart-content-builder/index",
          "swift-charts/charts/plot/index",
        ],
      },
      {
        type: "category",
        label: "Marks",
        collapsed: false,
        items: [
          "swift-charts/marks/area-mark/index",
          "swift-charts/marks/line-mark/index",
          "swift-charts/marks/point-mark/index",
          "swift-charts/marks/rectangle-mark/index",
          "swift-charts/marks/rule-mark/index",
          "swift-charts/marks/bar-mark/index",
        ],
      },
      {
        type: "category",
        label: "Mark configuration",
        collapsed: false,
        items: [
          "swift-charts/mark-configuration/mark-stacking-method/index",
          "swift-charts/mark-configuration/mark-dimension/index",
          "swift-charts/mark-configuration/interpolation-method/index",
          "swift-charts/mark-configuration/chart-symbol-shape/index",
          "swift-charts/mark-configuration/any-chart-symbol-shape/index",
        ],
      },
      {
        type: "category",
        label: "Labeled data",
        collapsed: false,
        items: [
          "swift-charts/labeled-data/plottable-value/index",
          "swift-charts/labeled-data/plottable/index",
        ],
      },
      {
        type: "category",
        label: "Scales",
        collapsed: false,
        items: [
          "swift-charts/scales/scale-range/index",
          "swift-charts/scales/position-scale-range/index",
          "swift-charts/scales/plot-dimension-scale-range/index",
          "swift-charts/scales/scale-domain/index",
          "swift-charts/scales/automatic-scale-domain/index",
          "swift-charts/scales/scale-type/index",
        ],
      },
      {
        type: "category",
        label: "Axes",
        collapsed: false,
        items: [
          "swift-charts/axes/customizing-axes-in-swift-charts/index",
          "swift-charts/axes/axis-content/index",
          "swift-charts/axes/axis-marks/index",
          "swift-charts/axes/any-axis-content/index",
          "swift-charts/axes/axis-content-builder/index",
        ],
      },
      {
        type: "category",
        label: "Axis Marks",
        collapsed: false,
        items: [
          "swift-charts/axis-marks/axis-mark/index",
          "swift-charts/axis-marks/axis-tick/index",
          "swift-charts/axis-marks/axis-grid-line/index",
          "swift-charts/axis-marks/axis-value-label/index",
          "swift-charts/axis-marks/axis-value/index",
          "swift-charts/axis-marks/any-axis-mark/index",
          "swift-charts/axis-marks/axis-mark-builder/index",
        ],
      },
      {
        type: "category",
        label: "Annotations",
        collapsed: false,
        items: [
          "swift-charts/annotations/annotation-context/index",
          "swift-charts/annotations/annotation-position/index",
        ],
      },
      {
        type: "category",
        label: "Data bins",
        collapsed: false,
        items: [
          "swift-charts/data-bins/number-bins/index",
          "swift-charts/data-bins/date-bins/index",
        ],
      },
      {
        type: "category",
        label: "Chart management",
        collapsed: false,
        items: [
          "swift-charts/chart-management/chart-plot-content/index",
          "swift-charts/chart-management/chart-proxy/index",
        ],
      },
      {
        type: "category",
        label: "Protocols",
        collapsed: false,
        items: [
          "swift-charts/protocols/chart-scroll-target-behavior/index",
          "swift-charts/protocols/primitive-plottable-protocol/index",
        ],
      },
      {
        type: "category",
        label: "Structures",
        collapsed: false,
        items: [
          "swift-charts/structures/annotation-overflow-resolution/index",
          "swift-charts/structures/any-chart-content/index",
          "swift-charts/structures/axis-mark-position/index",
          "swift-charts/structures/axis-mark-preset/index",
          "swift-charts/structures/axis-mark-values/index",
          "swift-charts/structures/axis-value-label-collision-resolution/index",
          "swift-charts/structures/axis-value-label-orientation/index",
          "swift-charts/structures/basic-chart-symbol-shape/index",
          "swift-charts/structures/chart-scroll-target-behavior-context/index",
          "swift-charts/structures/major-value-alignment/index",
          "swift-charts/structures/sector-mark/index",
          "swift-charts/structures/value-aligned-chart-scroll-target-behavior/index",
          "swift-charts/structures/value-aligned-limit-behavior/index",
        ],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const swiftdataSidebar = [
  {
    type: "category",
    label: "SwiftData",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "概要",
        items: ["swiftdata/essentials/about/index"],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const coregraphicsSidebar = [
  {
    type: "category",
    label: "Core Graphics",
    collapsible: false,
    items: [
      "core-graphics/overview/index",
      "core-graphics/geometric-data-types/index",
      "core-graphics/2d-drawing/index",
      "core-graphics/colors-and-fonts/index",
      "core-graphics/working-with-pdf-documents/index",
      "core-graphics/utility-and-support-classes/index",
      "core-graphics/services/index",
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const metalSidebar = [
  {
    type: "category",
    label: "Metal",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Essentials",
        collapsed: false,
        items: [
          "metal/overview/index",
          "metal/samples/performing-calculations-on-a-gpu/index",
          "metal/samples/using-metal-to-draw-a-view-s-contents/index",
          "metal/samples/using-a-render-pipeline-to-render-primitives/index",
        ],
      },
      {
        type: "category",
        label: "Samples",
        collapsed: false,
        items: ["metal/samples/draw-an-triangle/index"],
      },
      {
        type: "category",
        label: "GPU Devices",
        collapsed: false,
        items: ["metal/gpu-devices-and-work-submission/index"],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const metalkitSidebar = [
  {
    type: "category",
    label: "MetalKit",
    collapsible: false,
    items: ["metalkit/overview/index"],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const metalprogrammingguideSidebar = [
  {
    type: "category",
    label: "Metal 编程指南",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "引言",
        collapsed: false,
        items: ["metal-programming-guide/introdution/index"],
      },
      {
        type: "category",
        label: "Metal 基础",
        collapsed: false,
        items: [
          "metal-programming-guide/what-is-metal/index",
          "metal-programming-guide/overview-of-rendering-and-raster-graphics/index",
          "metal-programming-guide/your-first-metal-application/index",
        ],
      },
      {
        type: "category",
        label: "渲染与图形",
        collapsed: false,
        items: [
          "metal-programming-guide/essential-mathematics-for-graphics/index",
          "metal-programming-guide/introduction-to-shaders/index",
          "metal-programming-guide/metal-resources-and-memory-management/index",
          "metal-programming-guide/libraries-functions-and-pipeline-states/index",
          "metal-programming-guide/2d-drawing/index",
          "metal-programming-guide/introduction-to-3d-drawing/index",
          "metal-programming-guide/advanced-3d-drawing/index",
          "metal-programming-guide/interfacing-with-model-io/index",
          "metal-programming-guide/texturing-and-sampling/index",
          "metal-programming-guide/multipass-rendering-techniques/index",
          "metal-programming-guide/geometry-unleashed-tessellation-in-metal/index",
        ],
      },
      {
        type: "category",
        label: "数据并行编程",
        collapsed: false,
        items: [
          "metal-programming-guide/the-metal-compute-pipeline/index",
          "metal-programming-guide/image-processing-in-metal/index",
          "metal-programming-guide/machine-vision/index",
          "metal-programming-guide/metal-performance-shaders-framework/index",
          "metal-programming-guide/neural-network-concepts/index",
          "metal-programming-guide/convolutional-neural-networks/index",
        ],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const metalshadinglanguagespecificationSidebar = [
  {
    type: "category",
    label: "Metal Shading Language 规范",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "前言",
        collapsed: false,
        items: ["metal-shading-language-specification/preface/index"],
      },
      {
        type: "category",
        label: "介绍",
        collapsed: false,
        items: [
          "metal-shading-language-specification/purpose-of-this-document/index",
          "metal-shading-language-specification/organization-of-this-specification/index",
          "metal-shading-language-specification/references/index",
          "metal-shading-language-specification/metal-and-cpp14/index",
          "metal-shading-language-specification/compiler-and-preprocessor/index",
          "metal-shading-language-specification/metal-coordinate-systems/index",
        ],
      },
      {
        type: "category",
        label: "数据类型",
        collapsed: false,
        items: [
          "metal-shading-language-specification/scalar-data-types/index",
          "metal-shading-language-specification/vector-data-types/index",
          "metal-shading-language-specification/matrix-data-types/index",
          "metal-shading-language-specification/simd-group-matrix-data-types/index",
          "metal-shading-language-specification/alignment-of-data-types/index",
          "metal-shading-language-specification/atomic-data-types/index",
          "metal-shading-language-specification/pixel-data-types/index",
          "metal-shading-language-specification/buffers/index",
          "metal-shading-language-specification/textures/index",
          "metal-shading-language-specification/samplers/index",
          "metal-shading-language-specification/imageblocks/index",
          "metal-shading-language-specification/aggregate-types/index",
          "metal-shading-language-specification/argument-buffers/index",
          "metal-shading-language-specification/uniform-type/index",
          "metal-shading-language-specification/visible-function-table/index",
          "metal-shading-language-specification/function-group-attribute/index",
          "metal-shading-language-specification/ray-tracing-types/index",
          "metal-shading-language-specification/interpolant-type/index",
          "metal-shading-language-specification/mesh-shader-types/index",
          "metal-shading-language-specification/type-conversions-and-re-interpreting-data/index",
          "metal-shading-language-specification/implicit-type-conversions/index",
        ],
      },
      {
        type: "category",
        label: "运算符",
        collapsed: false,
        items: [
          "metal-shading-language-specification/scalar-and-vector-operators/index",
          "metal-shading-language-specification/matrix-operators/index",
        ],
      },
      {
        type: "category",
        label: "地址空间",
        collapsed: false,
        items: [
          "metal-shading-language-specification/device-address-space/index",
          "metal-shading-language-specification/constant-address-space/index",
          "metal-shading-language-specification/thread-address-space/index",
          "metal-shading-language-specification/threadgroup-address-space/index",
          "metal-shading-language-specification/threadgroup-imageblock-address-space/index",
          "metal-shading-language-specification/ray-data-address-space/index",
          "metal-shading-language-specification/object-data-address-space/index",
        ],
      },
      {
        type: "category",
        label: "函数与变量声明",
        collapsed: false,
        items: [
          "metal-shading-language-specification/functions/index",
          "metal-shading-language-specification/function-arguments-and-variables/index",
          "metal-shading-language-specification/storage-class-specifiers/index",
          "metal-shading-language-specification/sampling-and-interpolation-attributes/index",
          "metal-shading-language-specification/per-fragment-function-versus-per-sample-function/index",
          "metal-shading-language-specification/imageblock-attributes/index",
          "metal-shading-language-specification/graphics-function-signature-matching/index",
          "metal-shading-language-specification/program-scope-function-constants/index",
          "metal-shading-language-specification/program-scope-global-built-ins/index",
          "metal-shading-language-specification/per-primitive-viewport-and-scissor-rectangle-index-selection/index",
          "metal-shading-language-specification/additional-restrictions/index",
        ],
      },
      {
        type: "category",
        label: "Metal 标准库",
        collapsed: false,
        items: [
          "metal-shading-language-specification/namespace-and-header-files/index",
          "metal-shading-language-specification/common-functions/index",
          "metal-shading-language-specification/integer-functions/index",
          "metal-shading-language-specification/relational-functions/index",
          "metal-shading-language-specification/math-functions/index",
          "metal-shading-language-specification/matrix-functions/index",
          "metal-shading-language-specification/simd-group-matrix-functions/index",
          "metal-shading-language-specification/geometric-functions/index",
          "metal-shading-language-specification/synchronization-and-simd-group-functions/index",
          "metal-shading-language-specification/graphics-functions/index",
          "metal-shading-language-specification/pull-model-interpolation/index",
          "metal-shading-language-specification/texture-functions/index",
          "metal-shading-language-specification/imageblock-functions/index",
          "metal-shading-language-specification/pack-and-unpack-functions/index",
          "metal-shading-language-specification/atomic-functions/index",
          "metal-shading-language-specification/encoding-commands-for-indirect-command-buffers/index",
          "metal-shading-language-specification/variable-rasterization-rate/index",
          "metal-shading-language-specification/ray-tracing-functions/index",
        ],
      },
      {
        type: "category",
        label: "数值符合性",
        collapsed: false,
        items: [
          "metal-shading-language-specification/inf-nan-and-denormalized-numbers/index",
          "metal-shading-language-specification/rounding-mode/index",
          "metal-shading-language-specification/floating-point-exceptions/index",
          "metal-shading-language-specification/relative-error-as-ulps/index",
          "metal-shading-language-specification/edge-case-behavior-in-flush-to-zero-mode/index",
          "metal-shading-language-specification/conversion-rules-for-floating-point-and-integer-types/index",
          "metal-shading-language-specification/texture-addressing-and-conversion-rules/index",
        ],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  swiftSidebar,
  swiftuiSidebar,
  swiftchartsSidebar,
  swiftdataSidebar,
  coregraphicsSidebar,
  metalSidebar,
  metalkitSidebar,
  metalprogrammingguideSidebar,
  metalshadinglanguagespecificationSidebar,
};

module.exports = sidebars;
