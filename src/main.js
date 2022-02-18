import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 使用全局样式
import '@/style/global.scss'
// 使用animate.css
import 'animate.css'
// 使用 pinia
import { createPinia } from 'pinia'
// 使用event-bus vue3不支持
import eventBus from 'vue3-eventbus'

import router from '@/router'

createApp(App).use(createPinia()).use(eventBus).use(ElementPlus).use(router).mount('#app')