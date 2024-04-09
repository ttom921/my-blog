---
title: docusaurus相關
authors: ttom
tags: [docusaurus相關]
---
來記錄一些有關docusaurus有修改了什麼
<!--truncate-->
多個blog
-------
因為blog也要分類不然會寫太多在同一個資料夾裏面，所以來分類一下在`presets`和`themeConfig`中來加入，有幾個加幾個如下
```typescript
  presets: [
    //...
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
    //....
  }
```

blog的下拉選單
------
在`docusaurus.config.ts`中的`themeConfig`將有關`blog`修改成如下的
```typescript
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
```

首頁修改
------
目前我有修改首頁。檔案在`src\pages\index.tsx`裏,我是修改`<Layout`下加入`<div className='homepage-bg flex-warp'>`,順更修改`custom.css`裏
```tsx
export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className='homepage-bg flex-warp'>
        <div>
          show text
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            testlikn ⏱️
          </Link>

          <a href="docs/intro" >linkto </a>
        </div>
      </div>
      {/* <HomepageHeader />
       <main>
         <HomepageFeatures />
       </main>
       <div>
         hello fires
         <Link
           className="button button--secondary button--lg"
           to="/docs/intro">
           testlikn ⏱️
         </Link>

        <a href="docs/intro" >linkto </a>
       </div> */}
    </Layout>
  );
}
```
修改`src\css\custom.css`加入首頁相關
```css
/* 
#reginon 首面相關 
*/ 

.homepage-bg {
  width: 100%;
  height: 100%;

  background-image: url('/static/img/2019-08-22_12_29_57_mod.png');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.flex-warp{
  flex-grow: 1;
  /* // */
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:center;
  align-items:stretch;
  align-content:stretch;

}
/* 
#endreginon 首面相關 
*/
```
側邊框隱藏按鈕
-------
在`docusaurus.config.ts`中加入
```ts
presets: [
//-----
],
themeConfig: {
    navbar: {
     //-----
    },
    //側邊框隱藏按鈕
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    footer: {
     //-----
    },
   //-----
};
```   
網站標語(tagline）
------
網站標語和SEO有關，代表著你的品牌或產品，可以用幾句簡短的句子描述。
修改`docusaurus.config.ts`裏的

```ts
const config: Config = {
  title: '建造中的我',
  tagline: 'linux javascript angular rust stm32 ',
  favicon: 'img/favicon.ico',
}
```
多國語系(i18n)
------

將多國語系設定為繁體中文(zh-hant)。

修改`docusaurus.config.ts`

```ts
const config: Config = {
  title: '建造中的我',
  tagline: 'linux javascript angular rust stm32 ',
  //....
  i18n: {
    defaultLocale: 'zh-hant',
    locales: ['zh-hant'],
  },
}
```
## plantuml
參考 https://github.com/akebifiky/remark-simple-plantuml#integration
安裝
```
npm install --save @akebifiky/remark-simple-plantuml
```

在`docusaurus.config.ts`中
```typescript

//....
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
const config: Config = {
    //....
   presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [simplePlantUML],
          //....
        },
        blog: {
         //....
          remarkPlugins: [simplePlantUML],
        },
        //....
      } satisfies Preset.Options,
    ],
  ],
  //....
}

```

## docusaurus升級
```
npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/types@latest`

```

##### 參考資料
https://from8to8.com/docs/Website/basic/GUI/