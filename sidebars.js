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
          "swiftui/viewlayout/hstack/index",
          "swiftui/viewlayout/vstack/index",
          "swiftui/viewlayout/grid/index",
        ],
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
        items: ["swiftui/rest/imagerenderer/index"],
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
        label: "概要",
        items: ["swiftcharts/essentials/about/index"],
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

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  swiftSidebar,
  swiftuiSidebar,
  swiftchartsSidebar,
  swiftdataSidebar,
};

module.exports = sidebars;
