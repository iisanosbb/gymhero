# 🏋️ 健身房英雄問答遊戲

一個基於Vue 3的健身知識問答遊戲，採用像素風格設計，包含10道專業健身題目。

## 🎮 遊戲特色

- **12個頁面**: 首頁 + 10題目 + 結果頁
- **像素風格**: 復古遊戲風格界面
- **響應式設計**: 支持手機和桌面設備
- **即時反饋**: 選擇答案後立即顯示結果
- **詳細解釋**: 每題都有正確答案的解釋
- **等級評定**: 根據分數給出不同的稱號

## 🚀 技術棧

- **Vue 3**: 現代化前端框架
- **Vue Router**: 頁面路由管理
- **Vite**: 快速構建工具
- **GitHub Pages**: 自動部署

## 📦 安裝和運行

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 構建生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 🌐 在線體驗

[點擊這裡體驗遊戲](https://iisanosbb.github.io/gymhero/)

## 📁 項目結構

```
src/
├── components/          # 可重用組件
│   └── QuestionTemplate.vue
├── views/              # 頁面組件
│   ├── Home.vue        # 首頁
│   ├── Question1.vue   # 題目1-10
│   ├── ...
│   ├── Question10.vue
│   └── Result.vue      # 結果頁
├── data/               # 數據文件
│   └── questions.js    # 題目數據
├── router/             # 路由配置
│   └── index.js
├── App.vue             # 主應用組件
└── main.js             # 應用入口
```

## 🎯 功能說明

### 首頁
- 遊戲介紹和特色說明
- 開始挑戰按鈕

### 題目頁面
- 每題都有獨立的URL
- 圖片展示和選項選擇
- 即時答案反饋
- 進度條顯示

### 結果頁面
- 分數統計和百分比
- 等級評定系統
- 詳細答題結果
- 重新挑戰選項

## 🔧 部署說明

本項目使用GitHub Actions自動部署到GitHub Pages：

1. 代碼推送到main分支
2. GitHub Actions自動構建
3. 部署到GitHub Pages
4. 可通過 `https://iisanosbb.github.io/gymhero/` 訪問

## 📝 開發說明

### 添加新題目
在 `src/data/questions.js` 中添加新的題目對象：

```javascript
{
  id: 11,
  question: '新題目內容',
  image: '圖片URL',
  options: ['選項A', '選項B', '選項C', '選項D'],
  correctAnswer: 0,
  explanation: '解釋說明'
}
```

### 自定義樣式
所有樣式都使用像素風格設計，主要顏色：
- 主色調: #8B4513 (棕色)
- 邊框色: #654321 (深棕色)
- 背景漸變: #ff6b35 到 #ffb366

## 📄 許可證

MIT License

## 🤝 貢獻

歡迎提交Issue和Pull Request來改進這個項目！
