# Vercel 部署快速指南

您的代碼已經成功推送到 GitHub：https://github.com/LUCAS-del-coder/ak8

## 🚀 部署到 Vercel（3 個簡單步驟）

### 步驟 1: 登入 Vercel
1. 訪問 [https://vercel.com](https://vercel.com)
2. 點擊 **Sign Up** 或 **Log In**
3. 選擇 **Continue with GitHub**，使用您的 GitHub 帳號登入

### 步驟 2: 導入專案
1. 登入後，點擊 **Add New...** → **Project**
2. 在 **Import Git Repository** 區塊中，找到 **LUCAS-del-coder/ak8**
3. 點擊 **Import**

### 步驟 3: 部署
1. Vercel 會自動檢測 Next.js 專案，無需額外配置
2. 確認以下設置（通常都是自動的）：
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
3. 點擊 **Deploy** 按鈕
4. 等待 2-3 分鐘，部署完成！

## ✅ 完成後

部署成功後，您會獲得：
- 🌐 **生產環境 URL**: `https://ak8-xxxxx.vercel.app`
- 🔄 **自動部署**: 每次推送到 GitHub 都會自動重新部署
- 📊 **部署日誌**: 在 Vercel Dashboard 查看

## 🔧 可選配置

### 環境變數（如果需要）
在 Vercel 專案設置中，可以添加：
- `NEXT_PUBLIC_SITE_URL`: 您的網站 URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID

### 自訂域名
1. 在 Vercel 專案中，點擊 **Settings** → **Domains**
2. 輸入您的域名（例如：`ak8win.com`）
3. 按照指示配置 DNS 記錄

## 📝 後續更新

以後只需要：
```bash
git add .
git commit -m "更新說明"
git push origin main
```

Vercel 會自動部署新版本！

---

**就是這麼簡單！** 🎉

