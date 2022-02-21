import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    meta: { title: '主页面', icon: 'el-icon-s-home' }
  },
  {
    path: '/Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: '登录', icon: 'el-icon-s-home' }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '系统首页'
        },
        component: () => import('@/views/subViews/Dashboard.vue')
      },
      {
        path: '/basictable',
        name: 'basictable',
        meta: {
          title: '基础表格'
        },
        component: () => import('@/views/subViews/BasicTable.vue')
      },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '404页面'
        },
        component: () =>
          import(/* webpackChunkName: "404" */ '@/views/subViews/404.vue')
      },
      {
        path: '/403',
        name: '403',
        meta: {
          title: '403页面'
        },
        component: () =>
          import(/* webpackChunkName: "404" */ '@/views/subViews/403.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 跳转404
  const type = to.path
  if (router.getRoutes().findIndex(item => item.path === type) === -1) {
    next('/404')
  }
  if (type === '/dashboard') {
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
