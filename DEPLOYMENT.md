# 部署指南 - GitHub + Vercel

本指南將幫助您將 AK8 Casino Next.js 專案部署到 GitHub，然後連接到 Vercel 進行自動部署。

## 📋 前置需求

- GitHub 帳號
- Vercel 帳號（可以使用 GitHub 帳號登入）
- Git 已安裝在本地
- Node.js 18+ 已安裝

## 🚀 步驟 1: 部署到 GitHub

### 1.1 在 GitHub 上創建新 Repository

1. 登入 [GitHub](https://github.com)
2. 點擊右上角的 **+** 按鈕，選擇 **New repository**
3. 填寫 Repository 資訊：
   - **Repository name**: `ak8-nextjs` (或您喜歡的名稱)
   - **Description**: `AK8 Casino Nepal - Next.js SEO Optimized`
   - **Visibility**: 選擇 Public 或 Private
   - **不要** 勾選 "Initialize this repository with a README"（因為我們已經有本地專案）
4. 點擊 **Create repository**

### 1.2 將本地專案推送到 GitHub

在終端機中執行以下指令（將 `YOUR_USERNAME` 替換為您的 GitHub 用戶名）：

```bash
# 確保您在專案目錄中
cd /Users/idea3c/Downloads/ak8-nextjs

# 添加 GitHub remote（替換 YOUR_USERNAME 和 REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/ak8-nextjs.git

# 將 main 分支重命名（如果需要的話）
git branch -M main

# 推送代碼到 GitHub
git push -u origin main
```

**注意**: 如果這是第一次使用 GitHub，您可能需要：
- 設置 Git 用戶資訊：
  ```bash
  git config --global user.name "您的名字"
  git config --global user.email "您的email@example.com"
  ```
- 使用 Personal Access Token 進行身份驗證（GitHub 已不再支援密碼認證）

### 1.3 驗證推送成功

訪問您的 GitHub repository 頁面，確認所有文件都已成功上傳。

## 🌐 步驟 2: 部署到 Vercel

### 2.1 使用 GitHub 登入 Vercel

1. 訪問 [Vercel](https://vercel.com)
2. 點擊 **Sign Up** 或 **Log In**
3. 選擇 **Continue with GitHub**，使用您的 GitHub 帳號登入

### 2.2 導入專案

1. 登入 Vercel 後，點擊 **Add New...** → **Project**
2. 在 **Import Git Repository** 區塊中，找到您的 `ak8-nextjs` repository
3. 點擊 **Import**

### 2.3 配置專案設置

Vercel 會自動檢測 Next.js 專案，通常不需要額外配置。確認以下設置：

- **Framework Preset**: Next.js（自動檢測）
- **Root Directory**: `./`（預設）
- **Build Command**: `npm run build`（預設）
- **Output Directory**: `.next`（預設）
- **Install Command**: `npm install`（預設）

### 2.4 環境變數（可選）

如果需要設置環境變數，在 **Environment Variables** 區塊中添加：

- `NEXT_PUBLIC_SITE_URL`: 您的網站 URL（例如：`https://ak8win.com`）
- `NEXT_PUBLIC_GA_ID`: Google Analytics ID（如果有的話）
- 其他需要的 API 密鑰

### 2.5 部署

1. 點擊 **Deploy** 按鈕
2. Vercel 會開始構建和部署您的專案
3. 等待幾分鐘，部署完成後會顯示部署 URL（例如：`https://ak8-nextjs.vercel.app`）

### 2.6 自訂域名（可選）

1. 在專案設置中，點擊 **Settings** → **Domains**
2. 輸入您的域名（例如：`ak8win.com`）
3. 按照指示配置 DNS 記錄
4. 等待 DNS 傳播完成（通常需要幾分鐘到幾小時）

## 🔄 自動部署

一旦設置完成，Vercel 會自動：

- ✅ 監聽 GitHub repository 的推送
- ✅ 自動觸發新的部署
- ✅ 為每個 commit 創建預覽部署
- ✅ 為 Pull Request 創建預覽 URL

## 📝 後續步驟

### 更新代碼並部署

每次您想要更新網站時：

```bash
# 1. 修改代碼
# 2. 提交更改
git add .
git commit -m "描述您的更改"

# 3. 推送到 GitHub
git push origin main

# 4. Vercel 會自動部署新版本
```

### 查看部署狀態

- 在 Vercel Dashboard 中查看所有部署記錄
- 每個部署都有獨立的 URL，方便測試
- 可以回滾到之前的部署版本

## 🛠️ 故障排除

### 部署失敗

1. 檢查 Vercel 部署日誌中的錯誤訊息
2. 確認 `package.json` 中的構建腳本正確
3. 檢查 Node.js 版本是否符合要求（18+）

### 環境變數問題

- 確保環境變數名稱正確
- 重新部署以應用新的環境變數

### 構建錯誤

- 檢查本地是否能成功執行 `npm run build`
- 確認所有依賴都已正確安裝

## 📚 相關資源

- [Vercel 文檔](https://vercel.com/docs)
- [Next.js 部署文檔](https://nextjs.org/docs/deployment)
- [GitHub 文檔](https://docs.github.com)

---

**祝您部署順利！** 🎉

