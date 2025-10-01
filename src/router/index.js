import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Question1 from '../views/Question1.vue'
import Question2 from '../views/Question2.vue'
import Question3 from '../views/Question3.vue'
import Question4 from '../views/Question4.vue'
import Question5 from '../views/Question5.vue'
import Question6 from '../views/Question6.vue'
import Question7 from '../views/Question7.vue'
import Question8 from '../views/Question8.vue'
import Question9 from '../views/Question9.vue'
import Question10 from '../views/Question10.vue'
import Result from '../views/Result.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/question1',
    name: 'Question1',
    component: Question1
  },
  {
    path: '/question2',
    name: 'Question2',
    component: Question2
  },
  {
    path: '/question3',
    name: 'Question3',
    component: Question3
  },
  {
    path: '/question4',
    name: 'Question4',
    component: Question4
  },
  {
    path: '/question5',
    name: 'Question5',
    component: Question5
  },
  {
    path: '/question6',
    name: 'Question6',
    component: Question6
  },
  {
    path: '/question7',
    name: 'Question7',
    component: Question7
  },
  {
    path: '/question8',
    name: 'Question8',
    component: Question8
  },
  {
    path: '/question9',
    name: 'Question9',
    component: Question9
  },
  {
    path: '/question10',
    name: 'Question10',
    component: Question10
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
