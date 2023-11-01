import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import { themes } from "prism-react-renderer"
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config: Config = {
  title: "Swift 悍刀行",
  tagline: "入门轻车，进阶熟路",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://zhuanghongji.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/swift-tutorials-cn/",

  // https://docusaurus.io/docs/deployment#deploying-to-github-pages
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "zhuanghongji", // Usually your GitHub org/user name.
  projectName: "swift-tutorials-cn", // Usually your repo name.
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
    format: 'mdx',
    mermaid: true,
    preprocessor: ({ fileContent }) => {
      return fileContent.replaceAll('{{MY_VAR}}', 'MY_VALUE');
    },
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    // https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image
    [
      "@docusaurus/plugin-ideal-image",
      {
        // use defaults
        // quality: 85,
        // disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
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
          label: "SwiftData",
          sidebarId: "swiftdataSidebar",
          position: "right",
        },
        {
          type: "dropdown",
          label: "Media",
          position: "right",
          items: [
            {
              type: "docSidebar",
              label: "Audio Toolbox",
              sidebarId: "audiotoolboxSidebar",
            },
            {
              type: "docSidebar",
              label: "AVFAudio",
              sidebarId: "avfaudioSidebar",
            },
            {
              type: "docSidebar",
              label: "AVFoundation",
              sidebarId: "avfoundationSidebar",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Frameworks",
          position: "right",
          items: [
            {
              type: "docSidebar",
              label: "Core Graphics",
              sidebarId: "coregraphicsSidebar",
            },
            {
              type: "docSidebar",
              label: "Charts",
              sidebarId: "chartsSidebar",
            },
            {
              type: "docSidebar",
              label: "Metal",
              sidebarId: "metalSidebar",
            },
            {
              type: "docSidebar",
              label: "MetalKit",
              sidebarId: "metalkitSidebar",
            },
          ],
        },
        {
          type: "dropdown",
          label: "Books",
          position: "right",
          items: [
            {
              type: "docSidebar",
              label: "Metal Programming Guide",
              sidebarId: "metalprogrammingguideSidebar",
            },
            {
              type: "docSidebar",
              label: "Metal Shading Language Specification 3.1",
              sidebarId: "metalshadinglanguagespecificationSidebar",
            },
          ],
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
      theme: lightTheme,
      darkTheme: darkTheme,
      // https://docusaurus.io/docs/markdown-features/code-blocks#supported-languages
      additionalLanguages: ["swift", "bash", "diff", "json"],
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
  } satisfies Preset.ThemeConfig,
};

export default config;
