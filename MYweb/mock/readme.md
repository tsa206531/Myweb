articles.json

id: 文章唯一識別碼
layout: 卡片佈局類型 (featured, regular, image-top, wide)
title: 文章標題
category: 文章分類標籤
description: 文章簡述
date: 發布日期
readTime: 閱讀時間
image: 文章配圖 URL (選填)
icon: Material Symbol 圖示名稱 (選填)
iconColor: 圖示背景色系 (選填)
tags: 標籤陣列 (選填)
isFeatured: 是否為精選文章
isTrending: 是否為熱門文章
link: 文章連結

/_ <script setup> 區塊 _/
引入 articles.json 資料
使用 ref 建立響應式狀態:
searchQuery: 搜尋關鍵字
selectedCategory: 選中的分類
categories: 分類選項陣列
使用 computed 建立過濾邏輯:
filteredArticles: 根據搜尋與分類篩選文章

work.json
id: 作品唯一識別碼
layout: 卡片佈局類型 (featured, split, standard)
featured：大圖樣式 (Nova Dashboard)
split：左右分割樣式 (Design System "Aether")
standard：標準卡片樣式
