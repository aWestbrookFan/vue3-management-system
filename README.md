# Vue3+Vite+elementPlus+mockJs+pinia+Scss （javaScript）

###  运行
```javascript
npm run dev
```
### 使用vue3 setup 语法糖
```javascript
 <script setup></script>
```
### 路由组件切换动画
```css
.zoom-fade-enter-active,
.zoom-fade-leave-active {
transition: transform 0.35s, opacity 0.28s ease-in-out;
}

.zoom-fade-enter-from {
opacity: 0;
transform: scale(0.97);
}

.zoom-fade-leave-to {
opacity: 0;
transform: scale(1.03);
}
```
### [vite环境变量](https://cn.vitejs.dev/guide/env-and-mode.html)
```javascript
baseURL: import.meta.env.VITE_BASE_API
```
### 使用iconfont symbol
### [pinia地址](https://pinia.vuejs.org/introduction.html#basic-example) 
### 可以作为一些vue3学习的测试、简单的demo
### 做了一些保存自动化的操作、更方便开发
### [UI参考](https://naive-ui-admin.vercel.app/#/dashboard)
### 努力写成一个好看的管理系统