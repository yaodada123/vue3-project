import { createWebHashHistory, createRouter } from 'vue-router'
import routes from './routes'
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { // 滚动行为，保证跳转到该页面顶部显示
    return {
      left: 0,
      top: 0,
    }
  },
})

export default router;