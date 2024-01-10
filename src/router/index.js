import { createRouter, createWebHashHistory } from 'vue-router'
import TasksView from "@/views/TasksView.vue";

const routes = [
  {
    path: '/tasks',
    name: 'tasks',
    component: TasksView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
