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
            <div class="score-number pixel-text">{{ score }}/40</div>
            <div class="score-label pixel-text">總分</div>
          </div>
          <div class="percentage pixel-text">{{ percentage }}%</div>
        </div>
        
        <!-- 拼圖狀態卡 -->
        <div class="puzzle-card pixel-container" :style="{ borderColor: puzzleState.color }">
          <div class="puzzle-icon pixel-text">{{ puzzleState.icon }}</div>
          <div class="puzzle-title pixel-text">{{ puzzleState.title }}</div>
          <div class="puzzle-description pixel-text">{{ puzzleState.description }}</div>
        </div>
      </div>
      
      <!-- 拼圖狀態卡詳細內容 -->
      <div class="puzzle-details">
        <h3 class="section-title pixel-text">你的拼圖狀態卡</h3>
        
        <div class="puzzle-content pixel-container">
          <div class="puzzle-section">
            <h4 class="puzzle-subtitle pixel-text">你的描述</h4>
            <p class="puzzle-text pixel-text">{{ puzzleCard.description }}</p>
          </div>
          
          <div class="puzzle-section">
            <h4 class="puzzle-subtitle pixel-text">關鍵任務</h4>
            <p class="puzzle-text pixel-text">{{ puzzleCard.keyTask }}</p>
          </div>
          
          <div class="puzzle-section">
            <h4 class="puzzle-subtitle pixel-text">探索地圖</h4>
            <p class="puzzle-text pixel-text">{{ puzzleCard.exploration }}</p>
          </div>
          
          <div class="puzzle-section">
            <h4 class="puzzle-subtitle pixel-text">遺落的拼圖</h4>
            <p class="puzzle-text pixel-text">{{ puzzleCard.missingPiece }}</p>
          </div>
          
          <div class="puzzle-quote pixel-container">
            <p class="quote-text pixel-text">{{ puzzleCard.quote }}</p>
          </div>
        </div>
      </div>
      
      <!-- 詳細結果 -->
      <div class="detailed-results">
        <h3 class="section-title pixel-text">各題得分</h3>
        <div class="results-grid">
          <div 
            v-for="(result, index) in detailedResults" 
            :key="index"
            class="result-item pixel-container"
          >
            <div class="question-number pixel-text">第{{ index + 1 }}題</div>
            <div class="result-score pixel-text">{{ result.score }}分</div>
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
      return Math.round((this.score / 40) * 100)
    },
    puzzleState() {
      if (this.score >= 34) return {
        icon: '🌊',
        title: '節奏掌控者',
        description: '健身已融入生活，懂得進退、自在享受過程',
        color: '#4A90E2'
      }
      if (this.score >= 27) return {
        icon: '🔥',
        title: '自主實踐家',
        description: '能獨立安排課表，也懂得調整與觀察自己',
        color: '#F5A623'
      }
      if (this.score >= 19) return {
        icon: '🔧',
        title: '穩紮實打者',
        description: '已有基礎課表與規律，開始學會應變',
        color: '#7ED321'
      }
      return {
        icon: '🌱',
        title: '起點觀察者',
        description: '還在熟悉動作、需要更多安全感與方向',
        color: '#50E3C2'
      }
    },
    puzzleCard() {
      const state = this.puzzleState
      const cards = {
        '🌊': {
          description: '你是健身界的節奏大師，能夠在挑戰與放鬆之間找到完美平衡。',
          keyTask: '分享你的健身智慧，成為他人的引路人。',
          exploration: '探索新的運動領域，如瑜伽、攀岩或舞蹈。',
          missingPiece: '嘗試更多創新的訓練方式，保持新鮮感。',
          quote: '「健身不是負擔，而是生活的節奏」'
        },
        '🔥': {
          description: '你是自主的健身實踐者，擁有清晰的目標和執行力。',
          keyTask: '挑戰更高難度的訓練，突破個人極限。',
          exploration: '學習進階訓練技巧，如功能性訓練或競技運動。',
          missingPiece: '培養更強的適應能力，面對不同挑戰。',
          quote: '「自律是自由，堅持是力量」'
        },
        '🔧': {
          description: '你是穩健的健身實踐者，正在建立穩固的基礎。',
          keyTask: '制定更詳細的訓練計劃，提高執行效率。',
          exploration: '學習更多基礎動作，建立完整的訓練體系。',
          missingPiece: '培養更強的自主性和決策能力。',
          quote: '「穩紮穩打，步步為營」'
        },
        '🌱': {
          description: '你是健身路上的新手，充滿好奇心和學習熱忱。',
          keyTask: '建立規律的健身習慣，從基礎動作開始。',
          exploration: '多學習基礎知識，找到適合的訓練方式。',
          missingPiece: '需要更多指導和鼓勵，建立信心。',
          quote: '「每個專家都曾經是初學者」'
        }
      }
      return cards[state.icon]
    },
    detailedResults() {
      return this.answers.map((answer, index) => ({
        score: answer.score,
        questionNumber: index + 1
      }))
    }
  },
  mounted() {
    this.loadResults()
  },
  methods: {
    loadResults() {
      const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers') || '[]')
      this.answers = savedAnswers
      this.score = savedAnswers.reduce((total, answer) => total + (answer.score || 0), 0)
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

/* 拼圖狀態卡 */
.puzzle-card {
  background: white;
  color: #8B4513;
  padding: 25px;
  text-align: center;
  border: 3px solid;
  margin-top: 20px;
}

.puzzle-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.puzzle-title {
  font-size: 24px;
  margin-bottom: 10px;
  color: #8B4513;
  font-weight: bold;
}

.puzzle-description {
  font-size: 16px;
  color: #8B4513;
}

/* 拼圖詳細內容 */
.puzzle-details {
  margin-bottom: 30px;
}

.puzzle-content {
  background: white;
  border: 3px solid #654321;
  padding: 25px;
  margin-top: 15px;
}

.puzzle-section {
  margin-bottom: 20px;
}

.puzzle-subtitle {
  color: #8B4513;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: bold;
}

.puzzle-text {
  color: #8B4513;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

.puzzle-quote {
  background: #654321;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  border: 3px solid #8B4513;
}

.quote-text {
  font-size: 18px;
  font-style: italic;
  color: #ffb366;
  margin: 0;
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

.question-number {
  font-size: 14px;
  color: #8B4513;
  margin-bottom: 5px;
}

.result-score {
  font-size: 16px;
  font-weight: bold;
  color: #8B4513;
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
