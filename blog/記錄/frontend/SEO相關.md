---
title: SEO相關
authors: ttom
tags: [SEO]
---
因為公司的網站要來將SEO修改一下來記錄
<!--truncate-->
# Angular SEO 實作步驟與優化

- 在index.html裏設定Meta資料
- 在index.html裏加入(JSON-LD)
- 加入robots.txt

## 在'index.html'補上 建議的 Meta 標籤設定

1. Title (標題)：建議包含「品牌名」與「核心功能」。

範例：XX 車隊管理系統 | 雲端 GPS 定位、油耗監控與派遣調度入口

2. Description (描述)：重點在於解決痛點（省油、安全、效率）。

範例：專業雲端車隊管理平台，提供即時 GPS 車輛追蹤、司機駕駛行為分析、自動化派遣調度與油耗報表。登入以優化您的物流效率，降低營運成本。

3. Keywords (關鍵字)：雖然 Google 目前較少參考，但對其他搜尋引擎仍有幫助。

關鍵字：車隊管理, GPS追蹤, 物流調度, 車載系統, 司機管理, 派遣軟體

```html
<meta charset="utf-8">
<title>「品牌名」與「核心功能」</title>
<base href="/">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="keywords" content="車隊管理, GPS追蹤, 物流調度, 車載系統, 司機管理,派遣軟體智慧交通,智慧運輸,行車視野輔助系統,移動監控,數位大餅,監控攝影機,毫米波雷達,ADAS,MDVR">
  <meta name="description" content="路易視科技團隊累積多年實務經驗，專業雲端車隊管理平台，提供即時 GPS 車輛追蹤、司機駕駛行為分析、自動化派遣調度與油耗報表。登入以優化您的物流效率，降低營運成本">
  <meta name="author" content="VisionRoute | 路易視科技">
```

## 加入結構化資料 (JSON-LD)
靜態加入（最簡單）
- 如果你的首頁內容是固定的，直接修改專案根目錄的 src/index.html。

- 優點：爬蟲 100% 能抓到，不需執行 JavaScript。

- 做法：在 <head> 標籤內加入腳本。

```html
<head>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "車隊管理系統",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "description": "專業車隊管理與 GPS 監控平台"
  }
  </script>
</head>
```
## 加入robots.txt
請在您的 src/robots.txt 中加入以下內容（如果沒有這個檔案，請手動建立）：

```
# 允許所有搜尋引擎爬蟲
User-agent: *

# 禁止爬取涉及會員隱私、帳戶資料與管理介面的路由
Disallow: /dashboard/
Disallow: /live/
Disallow: /multilive/
Disallow: /videoplayermanager/
Disallow: /DvrCloudTabs/          # 如果您的 API 路徑也在同網域下

# 允許爬取首頁、登入頁與公開說明頁
Allow: /
Allow: /login


# 告知搜尋引擎 Sitemap 的位置（請替換成您的實際網址）
Sitemap: https://www.yourdomain.com/sitemap.xml
```

在 Angular 13 中的配置步驟
 1. 建立好檔案後，必須確保 Angular 在編譯時會將它打包到輸出目錄（dist/）。

確認檔案路徑：src/robots.txt。

2. 修改 angular.json：
找到 projects -> [您的專案名稱] -> architect -> build -> options -> assets，將其加入陣列中：
```json
"assets": [
  "src/favicon.ico",
  "src/assets",
  "src/robots.txt",  // 加入這一行
  "src/sitemap.xml"  // 如果有 sitemap 也一併加入
],
```

## 建立sitemap.xml

1. 請在 src/sitemap.xml 建立此檔案，並根據您的實際網址進行修改：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <url>
    <loc>https://www.yourdomain.com/</loc>
    <lastmod>2026-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://www.yourdomain.com/features</loc>
    <lastmod>2026-04-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://www.yourdomain.com/about</loc>
    <lastmod>2026-04-15</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>

</urlset>
```



### 🛠️推薦工具組合
Google Search Console：必備！查看排名、點擊率與錯誤訊息。

Google Analytics 4 (GA4)：分析流量來源與使用者行為。

Screaming Frog：桌上型軟體，能像爬蟲一樣掃描你現有網站的所有技術錯誤。

Ahrefs 或 SEMrush：競爭對手分析與關鍵字研究工具。