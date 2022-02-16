import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    meta: { title: '主页面', icon: 'el-icon-s-home' }
  },
  {
    path: '/Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: '登录', icon: 'el-icon-s-home' }
  }
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: () => import('@/views/Home.vue'),
  //   meta: { title: '主页面', icon: 'el-icon-s-home' }
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const type = to.path
  if (type === '/') {
    if (localStorage.getItem('user')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
