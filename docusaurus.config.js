// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Swift 学习指南",
  tagline: "入门轻车，进阶熟路",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://zhuanghongji.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zhuanghongji", // Usually your GitHub org/user name.
  projectName: "swift-tutorials-cn", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-hans",
    locales: ["zh-hans"],
  },

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
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Swift 学习指南",
        logo: {
          alt: "Swift 学习指南",
          src: "img/logo.svg",
        },
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
            label: "GitHub",
            href: "https://github.com/zhuanghongji/swift-tutorials-cn",
            position: "right",
          },
        ],
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
      },
    }),
};

module.exports = config;
