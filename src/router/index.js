import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/UserLogin.vue')
  },
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: () => import('../views/ToDoList.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
