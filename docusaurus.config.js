// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Swift 悍刀行",
  tagline: "入门轻车，进阶熟路",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://zhuanghongji.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // https://docusaurus.io/docs/deployment#deploying-to-github-pages
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zhuanghongji", // Usually your GitHub org/user name.
  projectName: "swift-tutorials-cn.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-hans",
    locales: ["zh-hans"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 1080,
        min: 48,
        steps: 4,
        disableInDev: true,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zhuanghongji/swift-tutorials-cn/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/zhuanghongji/swift-tutorials-cn/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Swift 悍刀行",
        logo: {
          src: "img/logo.svg",
          alt: "Swift 悍刀行",
        },
        style: "dark",
        items: [
          {
            type: "docSidebar",
            label: "Swift",
            sidebarId: "swiftSidebar",
            position: "right",
          },
          {
            type: "docSidebar",
            label: "SwiftUI",
            sidebarId: "swiftuiSidebar",
            position: "right",
          },
          {
            type: "docSidebar",
            label: "SwiftCharts",
            sidebarId: "swiftchartsSidebar",
            position: "right",
          },
          {
            type: "docSidebar",
            label: "SwiftData",
            sidebarId: "swiftdataSidebar",
            position: "right",
          },
          {
            "aria-label": "GitHub repository",
            href: "https://github.com/zhuanghongji/swift-tutorials-cn",
            className: "navbar-github-link",
            position: "right",
          },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "SwiftUI Overview",
                to: "https://developer.apple.com/xcode/swiftui/",
              },
              {
                label: "SwiftUI Documentation",
                to: "https://developer.apple.com/documentation/swiftui/",
              },
              {
                label: "SwiftUI & UI Frameworks Videos",
                to: "https://developer.apple.com/videos/swiftui-ui-frameworks",
              },
              {
                label: "The Swift Programming Language",
                to: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
              },
            ],
          },
          {
            title: "参考",
            items: [
              {
                label: "Fatbob Man",
                to: "https://www.fatbobman.com/",
              },
              {
                label: "Design Code",
                to: "https://designcode.io/",
              },
              {
                label: "Swift Anytime",
                to: "https://www.swiftanytime.com/",
              },
              {
                label: "Hacking With Swift",
                to: "https://www.hackingwithswift.com/",
              },
            ],
          },
          {
            title: "探索",
            items: [
              {
                label: "Kavsoft",
                to: "https://www.youtube.com/@Kavsoft",
              },
              {
                label: "Chao Code",
                to: "https://www.youtube.com/@ChaoCode",
              },
              {
                label: "iOS Academy",
                to: "https://www.youtube.com/@iOSAcademy",
              },
              {
                label: "Xcoding with Alfian",
                to: "https://www.youtube.com/@XCA",
              },
            ],
          },
          {
            title: "发现",
            items: [
              {
                label: "Sponsor Me",
                to: "/sponsor-me",
              },
              {
                label: "Sponsor List",
                to: "/sponsor-list",
              },
              {
                label: "Follow Twitter",
                to: "https://twitter.com/ajizhhans",
              },
              {
                label: "Follow GitHub",
                to: "https://github.com/zhuanghongji",
              },
            ],
          },
        ],
        copyright: `Copyright © 2023 ZHUANGHONGJI<br/><a style="font-size: 12px;color: white;" target="_blank" href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International (CC BY 4.0) License</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["swift"],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "error-next-line",
            block: { start: "error-start", end: "error-end" },
          },
          {
            className: "code-block-console-line",
            line: "console-next-line",
            block: { start: "console-start", end: "console-end" },
          },
          {
            className: "code-block-tip-line",
            line: "tip-next-line",
            block: { start: "tip-start", end: "tip-end" },
          },
        ],
      },
    }),
};

module.exports = config;
