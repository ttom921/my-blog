---
title: ODBII相關
authors: ttom
tags: [修理,tierra]
date: 2026-10-13 10:57:58
---
# 前言
來記錄一些有關Ford tierra修理
<!-- truncate -->
ODB2的定義
圖中黑字是OBDII母頭第16號腳是電源輸入（也就是車上的OBDII接頭）紅字就是公頭（也是要要插入車上OBDII的設備）
https://www.mobile01.com/topicdetail.php?f=214&t=3131815

<img src="https://github.com/ttom921/ImgStg/blob/main/tierra/odb2.jpg?raw=true" />

診斷插座的定義
<img src="https://github.com/ttom921/ImgStg/blob/main/tierra/fo10-09.jpg?raw=true" width="300"/>

<img src="https://github.com/ttom921/ImgStg/blob/main/tierra/diagnosti_17-8.jpg?raw=true" width="300"/>

目前只要接三條線就可以用FORScan 軟體讀到部份資料
```
MEM(KLM) -> 7  pin(ODB2)
GND      -> 5  pin
B+       -> 16 pin(ODB2) 
```