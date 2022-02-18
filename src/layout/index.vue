<template>
  <div class="app-container">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <!-- 顶部导航 -->
      <Navbar></Navbar>
      <!-- 内容区域 -->
      <AppMain></AppMain>
    </div>
  </div>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
// import { useStore } from '@/store'
// const store = useStore()
</script>

<style lang="scss" scoped>
.app-container {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
