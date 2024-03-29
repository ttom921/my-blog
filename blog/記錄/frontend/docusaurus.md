---
title: docusaurus相關
authors: ttom
tags: [docusaurus相關]
---
來記錄一些有關docusaurus有修改了什麼
<!--truncate-->

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



##### 參考資料
https://from8to8.com/docs/Website/basic/GUI/