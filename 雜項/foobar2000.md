---
title: foobar2000相關
authors: ttom
tags: [雜項,foobar2000]
date: 2026-09-24 10:31:58
---
# 前言
來記錄一些有關foobar2000相關
<!--truncate-->
因為有時候用foobar2000來聽youtube, 因為有多的因素所以需要yt-dlp,來解碼，但是有時候yt-dlp需要外部的ffmpeg，會發生如下
foo_youtube 外部檔案 ffmpeg 找不到

當 foobar2000 的 Youtube Source (foo_youtube) 插件提示找不到外部 FFmpeg 時，通常是因為路徑設定錯誤或版本不符合要求。


正確設定外部路徑打開 foobar2000，按 Ctrl + P 進入「參數選項」（Preferences）。找到 Tools (工具) 或 Playback 下方的 Youtube 來源設定。將 FFmpeg 來源從預設改為 External（外部），並手動瀏覽/指定放置 ffmpeg.exe 與 ffprobe.exe 的資料夾目錄（非選到 exe 檔案本身，而是指包含它們的資料

目前foo_youtube可以使用的FFmpeg的版本
https://github.com/GyanD/codexffmpeg/releases/tag/4.4.1
