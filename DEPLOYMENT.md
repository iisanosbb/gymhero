# 🚀 部署到GitHub Pages

## 快速部署步驟

### 1. 上傳代碼到GitHub

由於您的系統需要安裝Xcode命令行工具，請按照以下步驟手動上傳：

#### 方法A: 使用GitHub網頁界面（推薦）

1. **準備文件**
   - 確保項目文件夾包含所有必要文件
   - 不要包含 `node_modules` 文件夾

2. **上傳到GitHub**
   - 訪問 [https://github.com/iisanosbb/gymhero](https://github.com/iisanosbb/gymhero)
   - 點擊 "uploading an existing file" 或拖拽文件
   - 上傳所有項目文件（除了node_modules）
   - 提交信息: "Initial commit: Gym Hero Quiz Game"
   - 點擊 "Commit changes"

#### 方法B: 安裝Xcode命令行工具

```bash
# 安裝Xcode命令行工具
xcode-select --install

# 然後運行以下命令
cd /Users/iisa/gym-hero-quiz
git init
git add .
git commit -m "Initial commit: Gym Hero Quiz Game"
git branch -M main
git remote add origin https://github.com/iisanosbb/gymhero.git
git push -u origin main
```

### 2. 啟用GitHub Pages

1. **進入倉庫設置**
   - 訪問 [https://github.com/iisanosbb/gymhero/settings](https://github.com/iisanosbb/gymhero/settings)

2. **配置Pages**
   - 滾動到 "Pages" 部分
   - Source 選擇 "GitHub Actions"
   - 保存設置

### 3. 自動部署

GitHub Actions會自動：
- 檢測到代碼推送
- 運行構建流程
- 部署到GitHub Pages
- 網站將在 `https://iisanosbb.github.io/gymhero/` 可用

## 📁 需要上傳的文件

確保以下文件都已上傳到GitHub：

```
gym-hero-quiz/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions配置
├── src/
│   ├── components/
│   │   └── QuestionTemplate.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Question1.vue
│   │   ├── ... (Question2-10.vue)
│   │   └── Result.vue
│   ├── data/
│   │   └── questions.js
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── .gitignore
├── README.md
├── package.json
├── vite.config.js
└── index.html
```

## 🔧 部署配置

### GitHub Actions工作流程

已創建 `.github/workflows/deploy.yml` 文件，包含：

- **觸發條件**: 推送到main分支
- **運行環境**: Ubuntu最新版
- **構建步驟**: 
  1. 安裝Node.js 18
  2. 安裝依賴 (`npm ci`)
  3. 構建項目 (`npm run build`)
  4. 部署到GitHub Pages

### 構建配置

- **輸出目錄**: `dist/`
- **部署工具**: peaceiris/actions-gh-pages
- **自動觸發**: 每次推送到main分支

## 🌐 訪問網站

部署成功後，您的網站將在以下地址可用：
**https://iisanosbb.github.io/gymhero/**

## 🔍 驗證部署

1. **檢查Actions狀態**
   - 訪問 [https://github.com/iisanosbb/gymhero/actions](https://github.com/iisanosbb/gymhero/actions)
   - 確認工作流程成功運行

2. **測試網站功能**
   - 訪問網站URL
   - 測試所有12個頁面
   - 確認問答功能正常

## 🛠️ 故障排除

### 常見問題

1. **部署失敗**
   - 檢查GitHub Actions日誌
   - 確認所有文件都已上傳
   - 檢查package.json配置

2. **網站無法訪問**
   - 確認GitHub Pages已啟用
   - 檢查倉庫設置
   - 等待DNS傳播（可能需要幾分鐘）

3. **構建錯誤**
   - 檢查Vue Router配置
   - 確認所有依賴都已安裝
   - 查看構建日誌

### 重新部署

如果需要重新部署：
1. 修改代碼
2. 提交到GitHub
3. GitHub Actions會自動重新部署

## 📞 支持

如果遇到問題，請檢查：
- GitHub Actions日誌
- 倉庫設置中的Pages配置
- 確保所有文件都已正確上傳
