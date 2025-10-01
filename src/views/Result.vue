<template>
  <div class="result-page">
    <!-- 背景裝飾 -->
    <div class="background-decoration">
      <div class="gym-equipment bike-left"></div>
      <div class="gym-equipment bike-right"></div>
      <div class="gym-equipment bench"></div>
      <div class="gym-equipment dumbbell-rack"></div>
      <div class="timer-icon">🏆</div>
    </div>
    
    <!-- 主要結果容器 -->
    <div class="result-container pixel-container">
      <!-- 標題橫幅 -->
      <div class="title-banner">
        <h1 class="title pixel-text">測驗完成！</h1>
        <p class="subtitle pixel-text">你的健身知識挑戰結果</p>
      </div>
      
      <!-- 分數顯示 -->
      <div class="score-section">
        <div class="score-box pixel-container">
          <div class="score-display">
            <div class="score-number pixel-text">{{ score }}/10</div>
            <div class="score-label pixel-text">正確題數</div>
          </div>
          <div class="percentage pixel-text">{{ percentage }}%</div>
        </div>
        
        <!-- 等級評定 -->
        <div class="grade-section">
          <div class="grade-icon pixel-text">{{ gradeIcon }}</div>
          <div class="grade-title pixel-text">{{ gradeTitle }}</div>
          <div class="grade-description pixel-text">{{ gradeDescription }}</div>
        </div>
      </div>
      
      <!-- 詳細結果 -->
      <div class="detailed-results">
        <h3 class="section-title pixel-text">詳細結果</h3>
        <div class="results-grid">
          <div 
            v-for="(result, index) in detailedResults" 
            :key="index"
            class="result-item pixel-container"
            :class="{ 'correct': result.correct, 'incorrect': !result.correct }"
          >
            <div class="question-number pixel-text">第{{ index + 1 }}題</div>
            <div class="result-status pixel-text">
              {{ result.correct ? '✓ 正確' : '✗ 錯誤' }}
            </div>
          </div>
        </div>
      </div>
      
      <!-- 操作按鈕 -->
      <div class="action-buttons">
        <button class="restart-button pixel-button" @click="restartQuiz">
          重新挑戰
        </button>
        <button class="home-button pixel-button" @click="goHome">
          回到首頁
        </button>
      </div>
      
      <!-- 鼓勵訊息 -->
      <div class="encouragement pixel-text">
        {{ encouragementMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { questions } from '../data/questions.js'

export default {
  name: 'Result',
  data() {
    return {
      score: 0,
      answers: []
    }
  },
  computed: {
    percentage() {
      return Math.round((this.score / 10) * 100)
    },
    gradeIcon() {
      if (this.score >= 9) return '🏆'
      if (this.score >= 7) return '🥇'
      if (this.score >= 5) return '🥈'
      if (this.score >= 3) return '🥉'
      return '💪'
    },
    gradeTitle() {
      if (this.score >= 9) return '健身大師'
      if (this.score >= 7) return '健身專家'
      if (this.score >= 5) return '健身愛好者'
      if (this.score >= 3) return '健身新手'
      return '健身初學者'
    },
    gradeDescription() {
      if (this.score >= 9) return '你對健身知識瞭若指掌！'
      if (this.score >= 7) return '你的健身知識很豐富！'
      if (this.score >= 5) return '你有不錯的健身基礎！'
      if (this.score >= 3) return '繼續學習，你會更強！'
      return '加油，健身路上一起努力！'
    },
    detailedResults() {
      return this.answers.map((answer, index) => ({
        correct: answer.correct,
        questionNumber: index + 1
      }))
    },
    encouragementMessage() {
      if (this.score >= 8) return '太棒了！你已經是真正的健身房英雄！'
      if (this.score >= 6) return '表現不錯！繼續努力成為健身專家！'
      if (this.score >= 4) return '不錯的開始！多練習會更進步！'
      return '沒關係！每次學習都是進步，加油！'
    }
  },
  mounted() {
    this.loadResults()
  },
  methods: {
    loadResults() {
      const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '[]')
      this.answers = savedAnswers
      this.score = savedAnswers.filter(answer => answer.correct).length
    },
    restartQuiz() {
      localStorage.removeItem('quizAnswers')
      this.$router.push('/question1')
    },
    goHome() {
      localStorage.removeItem('quizAnswers')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.result-page {
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
  font-size: 32px;
}

/* 主要容器 */
.result-container {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: #8B4513;
  border: 4px solid #654321;
  border-radius: 0;
  box-shadow: 8px 8px 0px #654321;
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

/* 分數顯示 */
.score-section {
  margin-bottom: 30px;
}

.score-box {
  background: white;
  border: 3px solid #654321;
  padding: 30px;
  text-align: center;
  margin-bottom: 20px;
}

.score-display {
  margin-bottom: 15px;
}

.score-number {
  font-size: 48px;
  color: #4CAF50;
  font-weight: bold;
  margin-bottom: 5px;
}

.score-label {
  font-size: 18px;
  color: #8B4513;
  margin-bottom: 10px;
}

.percentage {
  font-size: 24px;
  color: #8B4513;
  font-weight: bold;
}

/* 等級評定 */
.grade-section {
  background: #654321;
  color: white;
  padding: 25px;
  text-align: center;
  border: 3px solid #8B4513;
}

.grade-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.grade-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: white;
}

.grade-description {
  font-size: 16px;
  color: #ffb366;
}

/* 詳細結果 */
.detailed-results {
  margin-bottom: 30px;
}

.section-title {
  color: white;
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.result-item {
  background: white;
  border: 3px solid #654321;
  padding: 15px;
  text-align: center;
}

.result-item.correct {
  background: #E8F5E8;
  border-color: #4CAF50;
}

.result-item.incorrect {
  background: #FFEBEE;
  border-color: #F44336;
}

.question-number {
  font-size: 14px;
  color: #8B4513;
  margin-bottom: 5px;
}

.result-status {
  font-size: 12px;
  font-weight: bold;
}

.result-item.correct .result-status {
  color: #4CAF50;
}

.result-item.incorrect .result-status {
  color: #F44336;
}

/* 操作按鈕 */
.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
}

.restart-button, .home-button {
  padding: 15px 30px;
  font-size: 18px;
  border: 3px solid #654321;
  cursor: pointer;
  transition: all 0.3s;
}

.restart-button {
  background: #4CAF50;
  color: white;
  border-color: #2E7D32;
}

.restart-button:hover {
  background: #45a049;
  transform: translateY(-2px);
}

.home-button {
  background: #8B4513;
  color: white;
  border-color: #654321;
}

.home-button:hover {
  background: #A0522D;
  transform: translateY(-2px);
}

/* 鼓勵訊息 */
.encouragement {
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 20px;
  background: #654321;
  border: 3px solid #8B4513;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .result-container {
    margin: 10px;
    padding: 20px;
  }
  
  .title {
    font-size: 28px;
  }
  
  .score-number {
    font-size: 36px;
  }
  
  .results-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .restart-button, .home-button {
    width: 200px;
  }
}
</style>
