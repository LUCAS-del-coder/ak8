# AK8 Casino - 快速開始指南 🚀

## 📦 安裝步驟

### 1️⃣ 前置要求

確保您的系統已安裝：
- **Node.js** >= 18.0.0 ([下載](https://nodejs.org/))
- **npm** >= 9.0.0 (隨 Node.js 安裝)

驗證安裝：
```bash
node --version  # 應該顯示 v18.x.x 或更高
npm --version   # 應該顯示 9.x.x 或更高
```

### 2️⃣ 下載項目

```bash
# 如果有 Git
git clone https://github.com/your-repo/ak8-casino-nextjs.git
cd ak8-casino-nextjs

# 或者解壓縮下載的 ZIP 文件
cd ak8-nextjs
```

### 3️⃣ 安裝依賴

```bash
npm install
```

安裝過程需要 2-5 分鐘，取決於網速。

### 4️⃣ 啟動開發服務器

```bash
npm run dev
```

看到以下信息表示成功：
```
✓ Ready in 2.3s
○ Local:        http://localhost:3000
```

### 5️⃣ 在瀏覽器中打開

打開瀏覽器訪問：**http://localhost:3000**

🎉 恭喜！您的 AK8 網站已經在本地運行了！

---

## 🏗️ 構建生產版本

### 構建命令

```bash
npm run build
```

這會創建優化的生產構建，通常需要 1-3 分鐘。

### 啟動生產服務器

```bash
npm start
```

生產服務器會在 http://localhost:3000 運行。

---

## 🌐 部署到 Vercel（推薦）

Vercel 是 Next.js 的最佳部署平台，**完全免費**！

### 方法 1：一鍵部署（最簡單）

1. 訪問 [Vercel](https://vercel.com)
2. 點擊 "New Project"
3. 導入您的 Git 倉庫（GitHub/GitLab/Bitbucket）
4. 點擊 "Deploy"
5. ✅ 完成！網站自動部署

### 方法 2：使用 Vercel CLI

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 登入
vercel login

# 部署
vercel

# 部署到生產環境
vercel --prod
```

---

## 🚀 其他部署選項

### Netlify

1. 登入 [Netlify](https://netlify.com)
2. 連接 Git 倉庫
3. 構建設置：
   - Build command: `npm run build`
   - Publish directory: `.next`
4. 部署

### Cloudflare Pages

1. 登入 [Cloudflare Pages](https://pages.cloudflare.com)
2. 連接 Git 倉庫
3. 構建設置：
   - Build command: `npx @cloudflare/next-on-pages@1`
   - Build output: `.vercel/output/static`
4. 部署

### Docker 部署

```bash
# 構建 Docker 映像
docker build -t ak8-casino .

# 運行容器
docker run -p 3000:3000 ak8-casino
```

---

## 🔧 環境配置

### 創建 .env.local 文件

在項目根目錄創建 `.env.local`：

```env
# 網站 URL
NEXT_PUBLIC_SITE_URL=https://ak8win.com

# Google Analytics（可選）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Tag Manager（可選）
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

---

## ✅ 部署檢查清單

部署前確認：

- [ ] 所有依賴已安裝：`npm install`
- [ ] 構建成功：`npm run build`
- [ ] 本地測試通過：`npm start`
- [ ] 環境變量已配置
- [ ] 域名已設置（如適用）
- [ ] SSL 證書已啟用（Vercel/Netlify 自動提供）

---

## 🐛 常見問題

### 問題 1：npm install 失敗

**解決方案**：
```bash
# 清除緩存
npm cache clean --force

# 刪除 node_modules
rm -rf node_modules

# 重新安裝
npm install
```

### 問題 2：構建錯誤

**解決方案**：
```bash
# 確保 Node.js 版本正確
node --version  # 應該 >= 18.0.0

# 更新依賴
npm update

# 重新構建
npm run build
```

### 問題 3：端口被占用

**解決方案**：
```bash
# 使用不同端口
PORT=3001 npm run dev
```

---

## 📊 性能優化建議

### 1. 圖片優化
- 使用 WebP/AVIF 格式
- 添加 `alt` 屬性
- 使用 Next.js Image 組件

### 2. 代碼優化
- 移除未使用的依賴
- 啟用代碼分割
- 使用動態導入

### 3. SEO 優化
- 提交 sitemap 到 Google Search Console
- 配置 Google Analytics
- 優化 Meta 標籤

---

## 📞 獲取幫助

遇到問題？

1. 查看 [README.md](./README.md) 完整文檔
2. 查看 Next.js 官方文檔：https://nextjs.org/docs
3. 聯繫技術支持：support@ak8win.com

---

## 🎯 下一步

網站上線後：

1. ✅ 提交到 Google Search Console
2. ✅ 設置 Google Analytics
3. ✅ 配置 CDN（Vercel 自動提供）
4. ✅ 監控性能和錯誤
5. ✅ 定期更新內容

---

**祝您部署順利！🚀**
