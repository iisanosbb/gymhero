<template>
  <div class="question-page">
    <!-- 背景裝飾 -->
    <div class="background-decoration">
      <div class="gym-equipment bike-left"></div>
      <div class="gym-equipment bike-right"></div>
      <div class="gym-equipment bench"></div>
      <div class="gym-equipment dumbbell-rack"></div>
      <div class="timer-icon">⏰</div>
    </div>
    
    <!-- 主要問答容器 -->
    <div class="quiz-container pixel-container">
      <!-- 標題橫幅 -->
      <div class="title-banner">
        <h1 class="title pixel-text">健身房英雄</h1>
        <div class="question-counter pixel-text">第{{ questionNumber }}題 / 共10題</div>
      </div>
      
      <!-- 問題區域 -->
      <div class="question-section">
        <div class="question-box pixel-container">
          <div class="question-text pixel-text">{{ questionData.question }}</div>
        </div>
        
        <!-- 運動圖片 -->
        <div class="exercise-image-container">
          <img 
            :src="questionData.image" 
            :alt="questionData.question"
            class="exercise-image"
          />
        </div>
        
        <!-- 選項區域 -->
        <div class="answers-section">
          <div 
            v-for="(option, index) in questionData.options" 
            :key="index"
            class="answer-option pixel-button"
            :class="{ 
              'selected': selectedAnswer === index, 
              'correct': showResult && index === questionData.correctAnswer, 
              'incorrect': showResult && selectedAnswer === index && index !== questionData.correctAnswer 
            }"
            @click="selectAnswer(index)"
          >
            <span class="option-label">{{ String.fromCharCode(65 + index) }}:</span>
            <span class="option-text">{{ option }}</span>
          </div>
        </div>
      </div>
      
      <!-- 進度條 -->
      <div class="progress-section">
        <div class="progress-bars">
          <div 
            v-for="n in 10" 
            :key="n"
            class="progress-bar"
            :class="{ 'filled': n <= questionNumber }"
          ></div>
        </div>
      </div>
      
      <!-- 結果顯示 -->
      <div v-if="showResult" class="result-section">
        <div class="result-message pixel-text" :class="{ 'correct': isCorrect, 'incorrect': !isCorrect }">
          {{ isCorrect ? '正確！' : '錯誤！' }}
        </div>
        <div v-if="!isCorrect" class="correct-answer pixel-text">
          正確答案是：{{ String.fromCharCode(65 + questionData.correctAnswer) }}. {{ questionData.options[questionData.correctAnswer] }}
        </div>
        <div class="explanation pixel-text">
          {{ questionData.explanation }}
        </div>
        <button 
          class="next-button pixel-button"
          @click="nextQuestion"
        >
          {{ questionNumber < 10 ? '下一題' : '查看結果' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { questions } from '../data/questions.js'

export default {
  name: 'QuestionTemplate',
  props: {
    questionNumber: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selectedAnswer: null,
      showResult: false,
      isCorrect: false
    }
  },
  computed: {
    questionData() {
      return questions[this.questionNumber - 1]
    }
  },
  methods: {
    selectAnswer(index) {
      if (this.showResult) return
      this.selectedAnswer = index
    },
    checkAnswer() {
      this.showResult = true
      const score = this.questionData.scores[this.selectedAnswer]
      
      // 保存答案到localStorage
      const answers = JSON.parse(localStorage.getItem('quizAnswers') || '[]')
      answers[this.questionNumber - 1] = {
        selected: this.selectedAnswer,
        score: score
      }
      localStorage.setItem('quizAnswers', JSON.stringify(answers))
    },
    nextQuestion() {
      if (this.questionNumber < 10) {
        this.$router.push(`/question${this.questionNumber + 1}`)
      } else {
        this.$router.push('/result')
      }
    }
  },
  watch: {
    selectedAnswer(newVal) {
      if (newVal !== null && !this.showResult) {
        setTimeout(() => {
          this.checkAnswer()
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
.question-page {
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
.quiz-container {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #8B4513;
  border: 4px solid #654321;
  border-radius: 0;
  box-shadow: 8px 8px 0px #654321;
}

/* 標題橫幅 */
.title-banner {
  background: #654321;
  padding: 15px;
  margin: -20px -20px 20px -20px;
  text-align: center;
}

.title {
  color: white;
  font-size: 32px;
  text-shadow: 3px 3px 0px #000;
  margin: 0 0 10px 0;
}

.question-counter {
  color: #ffb366;
  font-size: 16px;
  margin: 0;
}

/* 問題區域 */
.question-section {
  background: white;
  border: 3px solid #654321;
  padding: 20px;
  margin-bottom: 20px;
}

.question-box {
  background: #8B4513;
  color: white;
  padding: 15px;
  margin-bottom: 20px;
  border: 3px solid #654321;
}

.question-text {
  font-size: 20px;
  color: white;
}

/* 運動圖片 */
.exercise-image-container {
  text-align: center;
  margin: 20px 0;
}

.exercise-image {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border: 3px solid #654321;
  image-rendering: pixelated;
}

/* 選項區域 */
.answers-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}

.answer-option {
  padding: 15px;
  text-align: left;
  font-size: 16px;
  border: 3px solid #654321;
  background: #8B4513;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
}

.answer-option:hover {
  background: #A0522D;
  transform: translateY(-2px);
}

.answer-option.selected {
  background: #4CAF50;
  border-color: #2E7D32;
}

.answer-option.correct {
  background: #4CAF50;
  border-color: #2E7D32;
}

.answer-option.incorrect {
  background: #F44336;
  border-color: #C62828;
}

.option-label {
  font-weight: bold;
  margin-right: 10px;
  min-width: 30px;
}

.option-text {
  flex: 1;
}

/* 進度條 */
.progress-section {
  margin-top: 20px;
}

.progress-bars {
  display: flex;
  gap: 5px;
  justify-content: center;
}

.progress-bar {
  width: 30px;
  height: 20px;
  border: 2px solid #ff6b35;
  background: transparent;
  transition: all 0.3s;
}

.progress-bar.filled {
  background: #ff6b35;
}

/* 結果區域 */
.result-section {
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background: white;
  border: 3px solid #654321;
}

.result-message {
  font-size: 24px;
  margin-bottom: 10px;
}

.result-message.correct {
  color: #4CAF50;
}

.result-message.incorrect {
  color: #F44336;
}

.correct-answer {
  color: #8B4513;
  font-size: 18px;
  margin-bottom: 15px;
}

.explanation {
  color: #8B4513;
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.next-button {
  padding: 15px 30px;
  font-size: 18px;
  background: #4CAF50;
  color: white;
  border: 3px solid #2E7D32;
  cursor: pointer;
  transition: all 0.3s;
}

.next-button:hover {
  background: #45a049;
  transform: translateY(-2px);
}

/* 響應式設計 */
@media (max-width: 768px) {
  .quiz-container {
    margin: 10px;
    padding: 15px;
  }
  
  .title {
    font-size: 24px;
  }
  
  .question-text {
    font-size: 18px;
  }
  
  .answers-section {
    grid-template-columns: 1fr;
  }
  
  .answer-option {
    font-size: 14px;
    padding: 12px;
  }
  
  .exercise-image {
    height: 150px;
  }
}
</style>
