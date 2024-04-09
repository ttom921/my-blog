import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
const config: Config = {
  title: '建造中的我',
  tagline: 'linux javascript angular rust stm32 ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ttom921.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/my-blog',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ttom921', // Usually your GitHub org/user name.
  projectName: 'my-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-hant',
    locales: ['zh-hant'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [simplePlantUML],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://ttom921.github.io/my-blog/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 10, //每頁顯示文章數,
          remarkPlugins: [simplePlantUML],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  //#region 多個blog
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        blogSidebarTitle: '所有文章',
        blogSidebarCount: 'ALL',
        postsPerPage: 10, //每頁顯示文章數
        //
        id: 'life',
        routeBasePath: '生活',
        path: './生活',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        blogSidebarTitle: '所有文章',
        blogSidebarCount: 'ALL',
        postsPerPage: 10, //每頁顯示文章數
        //
        id: 'fixed',
        routeBasePath: '修理',
        path: './修理',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        blogSidebarTitle: '所有文章',
        blogSidebarCount: 'ALL',
        postsPerPage: 10, //每頁顯示文章數
        //
        id: 'others',
        routeBasePath: '雜項',
        path: './雜項',
      },
    ],
  ],
  //#endregion 多個blog

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    //導航欄
    navbar: {
      title: '建造中的我',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文件',
        },
        //#region blog
        {
          type: 'dropdown',
          position: 'left',
          label: 'blog',
          items: [
            {

              to: '/blog', label: 'blog',
            },
            {
              to: '/生活', label: '生活',

            },
            {
              to: '/修理', label: '修理',

            },
            {
              to: '/雜項', label: '雜項',

            },
          ],
        },
        //#endregion blog
        {
          href: 'https://github.com/ttom921',
          label: 'GitHub',
          position: 'right',
        },
      ],

    },
    //導航欄

    //側邊框隱藏按鈕
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My blog, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
