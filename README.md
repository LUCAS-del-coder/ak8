# AK8 Casino Nepal - Next.js 14 (SEO Optimized)

🎰 尼泊爾最值得信賴的線上賭場網站 - 使用 Next.js 14 構建的高性能 SEO 優化版本

## 🚀 技術棧

- **框架**: Next.js 14.2.0 (App Router)
- **語言**: TypeScript
- **樣式**: Tailwind CSS 3.4
- **性能優化**: 
  - 服務器端渲染 (SSR)
  - 靜態生成 (SSG)
  - 圖片優化
  - 代碼分割
  - SWC 編譯器

## ✨ 核心功能

### SEO 優化
- ✅ **完整的 Meta 標籤** - title, description, keywords, OG, Twitter Cards
- ✅ **結構化數據 (Schema.org)** - OnlineCasino, Organization, WebSite schemas
- ✅ **自動 Sitemap 生成** - 動態多語言 sitemap
- ✅ **Robots.txt** - 搜索引擎爬蟲配置
- ✅ **多語言支持 (i18n)** - 中文繁體、英語、尼泊爾語
- ✅ **Canonical URLs** - 避免重複內容
- ✅ **Hreflang 標籤** - 多語言 SEO
- ✅ **安全標頭** - XSS、CSRF、內容安全政策

### 性能優化
- ⚡ **Core Web Vitals 優化**
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1
- 🖼️ **圖片優化** - WebP/AVIF 格式，自動響應式
- 📦 **代碼分割** - 按需加載
- 💾 **快取策略** - 靜態資源長期快取
- 🗜️ **壓縮** - Gzip/Brotli 壓縮

### 用戶體驗
- 📱 **響應式設計** - 移動優先
- 🎨 **現代化 UI** - Tailwind CSS 自定義設計
- ♿ **無障礙設計** - WCAG 2.1 AA 標準
- 🌐 **國際化** - 多語言切換
- 💬 **即時客服** - 聊天小工具

## 📁 項目結構

```
ak8-nextjs/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # 根佈局（SEO meta、Schema.org）
│   ├── page.tsx           # 首頁
│   ├── globals.css        # 全局樣式
│   ├── sitemap.ts         # 動態 Sitemap 生成
│   └── robots.ts          # Robots.txt 生成
├── components/            # React 組件
│   ├── Header.tsx         # 頁首導航
│   ├── TopBar.tsx         # 頂部語言/貨幣欄
│   ├── CategoryNav.tsx    # 遊戲分類導航
│   ├── GamesSection.tsx   # 遊戲供應商展示
│   ├── AppDownload.tsx    # 應用下載區
│   ├── AboutSection.tsx   # 關於我們
│   ├── PromotionsSection.tsx # 優惠活動
│   ├── Footer.tsx         # 頁尾
│   └── ChatWidget.tsx     # 聊天小工具
├── public/                # 靜態資源
├── lib/                   # 工具函數
├── next.config.js         # Next.js 配置
├── tailwind.config.ts     # Tailwind 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 依賴配置
```

## 🛠️ 安裝與運行

### 1. 安裝依賴

```bash
npm install
```

### 2. 開發模式

```bash
npm run dev
```

訪問 http://localhost:3000

### 3. 構建生產版本

```bash
npm run build
```

### 4. 啟動生產服務器

```bash
npm start
```

### 5. 靜態導出（可選）

```bash
npm run export
```

## 🌐 部署

### Vercel（推薦）

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 其他平台

- **Netlify**: 連接 Git 倉庫，自動部署
- **Cloudflare Pages**: 支持 Next.js
- **AWS Amplify**: 完整的 Next.js 支持
- **自主服務器**: 使用 `npm run build && npm start`

## 📊 SEO 檢查清單

### ✅ 已完成
- [x] Meta 標籤完整
- [x] Open Graph 標籤
- [x] Twitter Cards
- [x] Schema.org 結構化數據
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Hreflang 標籤
- [x] 語義化 HTML5
- [x] 響應式設計
- [x] 頁面載入速度優化
- [x] 安全標頭
- [x] 圖片優化
- [x] 內部連結結構

### 📝 待完成（部署後）
- [ ] Google Search Console 驗證
- [ ] Google Analytics 4 集成
- [ ] Bing Webmaster Tools 驗證
- [ ] 添加真實圖片和 ALT 標籤
- [ ] 創建博客內容
- [ ] 建立反向連結
- [ ] 社交媒體整合

## 🎯 SEO 性能目標

| 指標 | 目標 | 當前狀態 |
|------|------|----------|
| Google PageSpeed (Desktop) | > 90 | ✅ 預計達標 |
| Google PageSpeed (Mobile) | > 85 | ✅ 預計達標 |
| 首次內容繪製 (FCP) | < 1.8s | ✅ 優化完成 |
| 最大內容繪製 (LCP) | < 2.5s | ✅ 優化完成 |
| 累積版面配置位移 (CLS) | < 0.1 | ✅ 優化完成 |
| 首次輸入延遲 (FID) | < 100ms | ✅ 優化完成 |

## 🔧 配置說明

### 環境變量

創建 `.env.local` 文件：

```env
# 網站基礎 URL
NEXT_PUBLIC_SITE_URL=https://ak8win.com

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API 密鑰（如需要）
API_SECRET_KEY=your_secret_key
```

### 多語言配置

在 `next.config.js` 中已配置：
- 默認語言：繁體中文 (zh-TW)
- 支持語言：英語 (en)、尼泊爾語 (ne)
- 自動語言檢測：啟用

## 📈 分析與監控

### Google Analytics 4 集成

1. 安裝依賴：
```bash
npm install @next/third-parties
```

2. 在 `app/layout.tsx` 中添加：
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// 在 <body> 中添加
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Google Tag Manager

1. 在 `app/layout.tsx` 中添加 GTM 腳本
2. 設置轉化追蹤
3. 配置事件追蹤

## 🔒 安全性

### 已實施的安全措施
- ✅ HTTPS 強制跳轉
- ✅ XSS 防護標頭
- ✅ CSRF 防護
- ✅ 內容安全政策 (CSP)
- ✅ 安全的 Cookie 設置
- ✅ Rate Limiting（需在生產環境配置）

## 📱 PWA 支持（可選）

要將網站轉換為 PWA：

1. 安裝依賴：
```bash
npm install next-pwa
```

2. 配置 `next.config.js`
3. 添加 `manifest.json`
4. 創建 Service Worker

## 🧪 測試

### SEO 測試工具
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Schema.org Validator](https://validator.schema.org/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

### 性能測試
```bash
# Lighthouse CI
npx lighthouse https://ak8win.com --view
```

## 📚 相關資源

- [Next.js 文檔](https://nextjs.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [Schema.org 文檔](https://schema.org/)
- [Google SEO 指南](https://developers.google.com/search/docs)

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 許可證

Copyright © 2025 AK8 Casino Nepal. All rights reserved.

## 📞 聯繫方式

- **網站**: https://ak8win.com
- **Email**: support@ak8win.com
- **客服**: 24/7 即時聊天

---

**打造於尼泊爾 🇳🇵，服務全球玩家 🌍**
