<template>
  <div class="home-page">
    <!-- 背景裝飾 -->
    <div class="background-decoration">
      <div class="gym-equipment bike-left"></div>
      <div class="gym-equipment bike-right"></div>
      <div class="gym-equipment bench"></div>
      <div class="gym-equipment dumbbell-rack"></div>
      <div class="timer-icon">⏰</div>
    </div>
    
    <!-- 主要內容容器 -->
    <div class="home-container pixel-container">
      <!-- 標題橫幅 -->
      <div class="title-banner">
        <h1 class="title pixel-text">健身房英雄</h1>
        <p class="subtitle pixel-text">健身知識問答挑戰</p>
      </div>
      
      <!-- 遊戲介紹 -->
      <div class="game-intro">
        <div class="intro-box pixel-container">
          <h2 class="intro-title pixel-text">準備好接受挑戰了嗎？</h2>
          <p class="intro-text pixel-text">
            測試你的健身知識！<br>
            完成10道健身相關題目，<br>
            成為真正的健身房英雄！
          </p>
        </div>
        
        <!-- 特色說明 -->
        <div class="features">
          <div class="feature-item pixel-container">
            <div class="feature-icon">💪</div>
            <div class="feature-text pixel-text">10道精選題目</div>
          </div>
          <div class="feature-item pixel-container">
            <div class="feature-icon">🏋️</div>
            <div class="feature-text pixel-text">專業健身知識</div>
          </div>
          <div class="feature-item pixel-container">
            <div class="feature-icon">🎯</div>
            <div class="feature-text pixel-text">即時評分系統</div>
          </div>
        </div>
      </div>
      
      <!-- 開始按鈕 -->
      <div class="start-section">
        <button class="start-button pixel-button" @click="startQuiz">
          開始挑戰
        </button>
        <p class="start-hint pixel-text">點擊開始你的健身知識之旅！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    startQuiz() {
      this.$router.push('/question1')
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(180deg, #ff6b35 0%, #ffb366 100%);
  padding: 20px;
}

/* 背景裝飾 */
.background-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.gym-equipment {
  position: absolute;
  background: #8B4513;
  border: 2px solid #654321;
  image-rendering: pixelated;
}

.bike-left {
  top: 20%;
  left: 5%;
  width: 40px;
  height: 60px;
}

.bike-right {
  top: 20%;
  right: 5%;
  width: 40px;
  height: 60px;
}

.bench {
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 20px;
}

.dumbbell-rack {
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 20px;
}

.timer-icon {
  position: absolute;
  top: 5%;
  right: 5%;
  font-size: 24px;
  color: #8B4513;
}

/* 主要容器 */
.home-container {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: #8B4513;
  border: 4px solid #654321;
  border-radius: 0;
  box-shadow: 8px 8px 0px #654321;
  text-align: center;
}

/* 標題橫幅 */
.title-banner {
  background: #654321;
  padding: 20px;
  margin: -30px -30px 30px -30px;
  text-align: center;
}

.title {
  color: white;
  font-size: 36px;
  text-shadow: 3px 3px 0px #000;
  margin: 0 0 10px 0;
}

.subtitle {
  color: #ffb366;
  font-size: 18px;
  margin: 0;
}

/* 遊戲介紹 */
.game-intro {
  margin-bottom: 30px;
}

.intro-box {
  background: white;
  border: 3px solid #654321;
  padding: 25px;
  margin-bottom: 25px;
}

.intro-title {
  color: #8B4513;
  font-size: 24px;
  margin-bottom: 15px;
}

.intro-text {
  color: #8B4513;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* 特色說明 */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
}

.feature-item {
  background: #654321;
  color: white;
  padding: 20px 15px;
  border: 3px solid #8B4513;
  text-align: center;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 10px;
}

.feature-text {
  font-size: 14px;
  color: white;
}

/* 開始按鈕 */
.start-section {
  text-align: center;
}

.start-button {
  background: #4CAF50;
  color: white;
  border: 3px solid #2E7D32;
  padding: 20px 40px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 15px;
}

.start-button:hover {
  background: #45a049;
  transform: translateY(-2px);
  box-shadow: 4px 4px 0px #2E7D32;
}

.start-hint {
  color: #654321;
  font-size: 14px;
  margin: 0;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .home-container {
    margin: 10px;
    padding: 20px;
  }
  
  .title {
    font-size: 28px;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .start-button {
    padding: 15px 30px;
    font-size: 20px;
  }
}
</style>
