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
          "swift/welcome/compatibility/index",
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
const swiftdataSidebar = [
  {
    type: "category",
    label: "SwiftData",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Essentials",
        collapsed: false,
        items: [
          "swift-data/essentials/about/index",
          "swift-data/essentials/preserving-your-app-s-model-data-across-launches/index",
          "swift-data/essentials/building-a-document-based-app-using-swiftdata/index",
          "swift-data/essentials/adopting-swiftdata-for-a-core-data-app/index",
        ],
      },
      {
        type: "category",
        label: "Model Definition",
        collapsed: false,
        items: [
          "swift-data/model-definition/adding-and-editing-persistent-data-in-your-app/index",
          "swift-data/model-definition/deleting-persistent-data-from-your-app/index",
          "swift-data/model-definition/maintaining-a-local-copy-of-server-data/index",
          "swift-data/model-definition/persistent-model/index",
          "swift-data/model-definition/relationship-collection/index",
        ],
      },
      {
        type: "category",
        label: "Model storage",
        collapsed: false,
        items: [
          "swift-data/model-storage/model-container/index",
          "swift-data/model-storage/model-context/index",
          "swift-data/model-storage/model-document/index",
        ],
      },
      {
        type: "category",
        label: "Model fetch",
        collapsed: false,
        items: [
          "swift-data/model-fetch/filtering-and-sorting-persistent-data/index",
          "swift-data/model-fetch/query/index",
          "swift-data/model-fetch/fetch-descriptor/index",
          "swift-data/model-fetch/predicate/index",
          "swift-data/model-fetch/fetch-results-collection/index",
        ],
      },
      {
        type: "category",
        label: "Concurrency support",
        collapsed: false,
        items: [
          "swift-data/concurrency-support/model-actor/index",
          "swift-data/concurrency-support/model-executor/index",
        ],
      },
      {
        type: "category",
        label: "Errors",
        collapsed: false,
        items: ["swift-data/errors/swift-data-error/index"],
      },
      {
        type: "category",
        label: "Classes",
        collapsed: false,
        items: ["swift-data/classes/default-serial-model-executor/index"],
      },
      {
        type: "category",
        label: "Protocols",
        collapsed: false,
        items: [
          "swift-data/protocols/schema-property/index",
          "swift-data/protocols/serial-model-executor/index",
        ],
      },
      {
        type: "category",
        label: "Macros",
        collapsed: false,
        items: ["swift-data/macros/macros/index"],
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
const chartsSidebar = [
  {
    type: "category",
    label: "Swift Charts",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Essentials",
        collapsed: false,
        items: ["charts/essentials/about/index"],
      },
      {
        type: "category",
        label: "Charts",
        collapsed: false,
        items: [
          "charts/charts/creating-a-chart-using-swift-charts/index",
          "charts/charts/chart/index",
          "charts/charts/chart-content/index",
          "charts/charts/chart-content-builder/index",
          "charts/charts/plot/index",
        ],
      },
      {
        type: "category",
        label: "Marks",
        collapsed: false,
        items: [
          "charts/marks/area-mark/index",
          "charts/marks/line-mark/index",
          "charts/marks/point-mark/index",
          "charts/marks/rectangle-mark/index",
          "charts/marks/rule-mark/index",
          "charts/marks/bar-mark/index",
        ],
      },
      {
        type: "category",
        label: "Mark configuration",
        collapsed: false,
        items: [
          "charts/mark-configuration/mark-stacking-method/index",
          "charts/mark-configuration/mark-dimension/index",
          "charts/mark-configuration/interpolation-method/index",
          "charts/mark-configuration/chart-symbol-shape/index",
          "charts/mark-configuration/any-chart-symbol-shape/index",
        ],
      },
      {
        type: "category",
        label: "Labeled data",
        collapsed: false,
        items: [
          "charts/labeled-data/plottable-value/index",
          "charts/labeled-data/plottable/index",
        ],
      },
      {
        type: "category",
        label: "Scales",
        collapsed: false,
        items: [
          "charts/scales/scale-range/index",
          "charts/scales/position-scale-range/index",
          "charts/scales/plot-dimension-scale-range/index",
          "charts/scales/scale-domain/index",
          "charts/scales/automatic-scale-domain/index",
          "charts/scales/scale-type/index",
        ],
      },
      {
        type: "category",
        label: "Axes",
        collapsed: false,
        items: [
          "charts/axes/customizing-axes-in-swift-charts/index",
          "charts/axes/axis-content/index",
          "charts/axes/axis-marks/index",
          "charts/axes/any-axis-content/index",
          "charts/axes/axis-content-builder/index",
        ],
      },
      {
        type: "category",
        label: "Axis Marks",
        collapsed: false,
        items: [
          "charts/axis-marks/axis-mark/index",
          "charts/axis-marks/axis-tick/index",
          "charts/axis-marks/axis-grid-line/index",
          "charts/axis-marks/axis-value-label/index",
          "charts/axis-marks/axis-value/index",
          "charts/axis-marks/any-axis-mark/index",
          "charts/axis-marks/axis-mark-builder/index",
        ],
      },
      {
        type: "category",
        label: "Annotations",
        collapsed: false,
        items: [
          "charts/annotations/annotation-context/index",
          "charts/annotations/annotation-position/index",
        ],
      },
      {
        type: "category",
        label: "Data bins",
        collapsed: false,
        items: [
          "charts/data-bins/number-bins/index",
          "charts/data-bins/date-bins/index",
        ],
      },
      {
        type: "category",
        label: "Chart management",
        collapsed: false,
        items: [
          "charts/chart-management/chart-plot-content/index",
          "charts/chart-management/chart-proxy/index",
        ],
      },
      {
        type: "category",
        label: "Protocols",
        collapsed: false,
        items: [
          "charts/protocols/chart-scroll-target-behavior/index",
          "charts/protocols/primitive-plottable-protocol/index",
        ],
      },
      {
        type: "category",
        label: "Structures",
        collapsed: false,
        items: [
          "charts/structures/annotation-overflow-resolution/index",
          "charts/structures/any-chart-content/index",
          "charts/structures/axis-mark-position/index",
          "charts/structures/axis-mark-preset/index",
          "charts/structures/axis-mark-values/index",
          "charts/structures/axis-value-label-collision-resolution/index",
          "charts/structures/axis-value-label-orientation/index",
          "charts/structures/basic-chart-symbol-shape/index",
          "charts/structures/chart-scroll-target-behavior-context/index",
          "charts/structures/major-value-alignment/index",
          "charts/structures/sector-mark/index",
          "charts/structures/value-aligned-chart-scroll-target-behavior/index",
          "charts/structures/value-aligned-limit-behavior/index",
        ],
      },
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

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const audiotoolboxSidebar = [
  {
    type: "category",
    label: "Audio Toolbox",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Esseentials",
        collapsed: false,
        items: [
          "audio-toolbox/esseentials/about/index",
          "audio-toolbox/esseentials/porting-your-audio-code-to-apple-silicon/index",
        ],
      },
      {
        type: "category",
        label: "Audio Units",
        collapsed: false,
        items: [
          "audio-toolbox/audio-units/generating-spatial-audio-from-a-multichannel-audio-stream/index",
          "audio-toolbox/audio-units/migrating-your-audio-unit-host-to-the-auv3-api/index",
          "audio-toolbox/audio-units/hosting-audio-unit-extensions-using-the-auv2-api/index",
          "audio-toolbox/audio-units/incorporating-audio-effects-and-instruments/index",
          "audio-toolbox/audio-units/au-audio-unit/index",
          "audio-toolbox/audio-units/au-audio-unit-bus/index",
          "audio-toolbox/audio-units/au-audio-unit-bus-array/index",
          "audio-toolbox/audio-units/au-audio-unit-v2-bridge/index",
          "audio-toolbox/audio-units/au-audio-unit-factory/index",
          "audio-toolbox/audio-units/au-parameter/index",
          "audio-toolbox/audio-units/au-parameter-group/index",
          "audio-toolbox/audio-units/au-parameter-node/index",
          "audio-toolbox/audio-units/au-parameter-tree/index",
        ],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const avfaudioSidebar = [
  {
    type: "category",
    label: "AVFAudio",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Esseentials",
        collapsed: false,
        items: ["avf-audio/esseentials/about/index"],
      },
      {
        type: "category",
        label: "System audio",
        collapsed: false,
        items: [
          "avf-audio/system-audio/handling-audio-interruptions/index",
          "avf-audio/system-audio/responding-to-audio-route-changes/index",
          "avf-audio/system-audio/capturing-stereo-audio-from-built-in-microphones/index",
          "avf-audio/system-audio/av-audio-session/index",
          "avf-audio/system-audio/av-audio-application/index",
          "avf-audio/system-audio/av-audio-routing-arbiter/index",
        ],
      },
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig['']} */
const avfoundationSidebar = [
  {
    type: "category",
    label: "AVFoundation",
    collapsible: false,
    items: [
      {
        type: "category",
        label: "Esseentials",
        collapsed: false,
        items: [
          "av-foundation/esseentials/about/index",
          "av-foundation/esseentials/loading-media-data-asynchronously/index",
          "av-foundation/esseentials/retrieving-media-metadata/index",
        ],
      },
      {
        type: "category",
        label: "Common",
        collapsed: false,
        items: ["av-foundation/common/media-assets/index"],
      },
      {
        type: "category",
        label: "Media reading and writing",
        collapsed: true,
        items: [
          "av-foundation/media-reading-and-writing/exporting-video-to-alternative-formats/index",
          "av-foundation/media-reading-and-writing/av-asset-export-session/index",
          "av-foundation/media-reading-and-writing/creating-images-from-a-video-asset/index",
          "av-foundation/media-reading-and-writing/av-asset-image-generator/index",
          "av-foundation/media-reading-and-writing/av-asset-reader/index",
          "av-foundation/media-reading-and-writing/av-asset-reader-output/index",
          "av-foundation/media-reading-and-writing/av-asset-reader-track-output/index",
          "av-foundation/media-reading-and-writing/av-asset-reader-audio-mix-output/index",
          "av-foundation/media-reading-and-writing/av-asset-reader-video-composition-output/index",
          "av-foundation/media-reading-and-writing/av-asset-reader-sample-reference-output/index",
          "av-foundation/media-reading-and-writing/av-asset-reader-output-meta-data-adaptor/index",
          "av-foundation/media-reading-and-writing/writing-fragmented-mpeg-4-files-for-http-live-streaming/index",
          "av-foundation/media-reading-and-writing/tagging-media-with-video-color-information/index",
          "av-foundation/media-reading-and-writing/evaluating-an-app-s-video-color/index",
          "av-foundation/media-reading-and-writing/av-output-settings-assistant/index",
          "av-foundation/media-reading-and-writing/av-asset-writer/index",
          "av-foundation/media-reading-and-writing/av-asset-writer-input/index",
          "av-foundation/media-reading-and-writing/av-asset-writer-input-pixel-buffer-adaptor/index",
          "av-foundation/media-reading-and-writing/av-asset-writer-input-tagged-pixel-buffer-group-adaptor/index",
          "av-foundation/media-reading-and-writing/av-asset-writer-input-meta-data-adaptor/index",
          "av-foundation/media-reading-and-writing/av-asset-writer-input-group/index",
          "av-foundation/media-reading-and-writing/caption-authoring/index",
        ],
      },
      {
        type: "category",
        label: "Media types and utilities",
        collapsed: true,
        items: [
          "av-foundation/media-types-and-utilities/av-media-type/index",
          "av-foundation/media-types-and-utilities/av-media-characteristic/index",
          "av-foundation/media-types-and-utilities/av-file-type/index",
          "av-foundation/media-types-and-utilities/av-file-type-profile/index",
        ],
      },
      {
        type: "category",
        label: "Media playback",
        collapsed: false,
        items: [
          "av-foundation/media-playback/configuring-your-app-for-media-playback/index",
          "av-foundation/media-playback/controlling-the-transport-behavior-of-a-player/index",
          "av-foundation/media-playback/av-player/index",
          "av-foundation/media-playback/av-player-item/index",
          "av-foundation/media-playback/av-player-item-track/index",
          "av-foundation/media-playback/av-queue-player/index",
          "av-foundation/media-playback/av-player-looper/index",
          "av-foundation/media-playback/supporting-coordinated-media-playback/index",
          "av-foundation/media-playback/av-playback-coordinator/index",
          "av-foundation/media-playback/av-player-playback-coordinator/index",
          "av-foundation/media-playback/av-delegating-playback-coordinator/index",
          "av-foundation/media-playback/monitoring-playback-progress-in-your-app/index",
          "av-foundation/media-playback/using-hevc-video-with-alpha/index",
          "av-foundation/media-playback/av-player-layer/index",
          "av-foundation/media-playback/av-synchronized-layer/index",
          "av-foundation/media-playback/selecting-subtitles-and-alternative-audio-tracks/index",
          "av-foundation/media-playback/av-media-selection/index",
          "av-foundation/media-playback/av-media-selection-group/index",
          "av-foundation/media-playback/av-media-selection-option/index",
          "av-foundation/media-playback/av-mutable-media-selection/index",
          "av-foundation/media-playback/av-player-media-selection-criteria/index",
          "av-foundation/media-playback/av-player-interstitial-event/index",
          "av-foundation/media-playback/av-player-interstitial-event-controller/index",
          "av-foundation/media-playback/av-player-interstitial-event-monitor/index",
          "av-foundation/media-playback/av-player-interstitial-event-asset-list-response-status/index",
          "av-foundation/media-playback/presenting-chapter-markers/index",
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
  swiftdataSidebar,
  coregraphicsSidebar,
  chartsSidebar,
  metalSidebar,
  metalkitSidebar,
  audiotoolboxSidebar,
  avfaudioSidebar,
  avfoundationSidebar,
  metalprogrammingguideSidebar,
  metalshadinglanguagespecificationSidebar,
};

module.exports = sidebars;
