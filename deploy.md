# 🚀 部署指南

## 手動上傳到GitHub

由於您的系統需要安裝Xcode命令行工具，我們提供手動上傳的步驟：

### 方法1: 使用GitHub網頁界面

1. **壓縮項目文件**
   - 將整個項目文件夾壓縮成ZIP文件
   - 確保包含所有文件（除了node_modules）

2. **上傳到GitHub**
   - 訪問 [https://github.com/iisanosbb/gymhero](https://github.com/iisanosbb/gymhero)
   - 點擊 "uploading an existing file"
   - 拖拽ZIP文件或選擇文件上傳
   - 解壓縮文件到倉庫根目錄

3. **提交更改**
   - 添加提交信息: "Initial commit: Gym Hero Quiz Game"
   - 點擊 "Commit changes"

### 方法2: 使用GitHub Desktop

1. **下載GitHub Desktop**
   - 從 [https://desktop.github.com/](https://desktop.github.com/) 下載

2. **克隆倉庫**
   - 在GitHub Desktop中克隆 `iisanosbb/gymhero` 倉庫

3. **複製文件**
   - 將項目文件複製到克隆的倉庫文件夾
   - 確保包含所有文件（除了node_modules）

4. **提交和推送**
   - 在GitHub Desktop中提交更改
   - 推送到GitHub

### 方法3: 安裝Xcode命令行工具後使用Git

1. **安裝Xcode命令行工具**
   ```bash
   xcode-select --install
   ```

2. **初始化Git倉庫**
   ```bash
   cd /Users/iisa/gym-hero-quiz
   git init
   git add .
   git commit -m "Initial commit: Gym Hero Quiz Game"
   git branch -M main
   git remote add origin https://github.com/iisanosbb/gymhero.git
   git push -u origin main
   ```

## 啟用GitHub Pages

1. **進入倉庫設置**
   - 訪問 [https://github.com/iisanosbb/gymhero/settings](https://github.com/iisanosbb/gymhero/settings)

2. **配置GitHub Pages**
   - 滾動到 "Pages" 部分
   - 在 "Source" 選擇 "GitHub Actions"
   - 保存設置

3. **觸發部署**
   - 推送代碼到main分支
   - GitHub Actions會自動運行
   - 部署完成後，網站將在 `https://iisanosbb.github.io/gymhero/` 可用

## 驗證部署

1. **檢查Actions**
   - 訪問 [https://github.com/iisanosbb/gymhero/actions](https://github.com/iisanosbb/gymhero/actions)
   - 確認部署工作流程成功運行

2. **訪問網站**
   - 等待幾分鐘後訪問 `https://iisanosbb.github.io/gymhero/`
   - 確認網站正常加載

## 故障排除

### 如果部署失敗
1. 檢查GitHub Actions日誌
2. 確認所有文件都已上傳
3. 檢查package.json中的構建腳本

### 如果網站無法訪問
1. 確認GitHub Pages已啟用
2. 檢查倉庫設置中的Pages配置
3. 等待幾分鐘讓DNS傳播

## 後續更新

每次更新代碼後：
1. 提交更改到GitHub
2. GitHub Actions會自動重新部署
3. 網站會自動更新
