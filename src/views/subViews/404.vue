<template>
  <div class="page-container">
    <div class="text-center">
      <img src="@/assets/exception/404.svg" alt="" />
    </div>
    <div class="text-center">
      <h1>抱歉，你访问的页面不存在</h1>
      <el-button type="primary" @click="goHome">回到首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  justify-content: center;
}
.text-center {
  img {
    width: 350px;
    height: auto;
  }
  h1 {
    color: #666;
    padding: 20px 0;
  }
}
</style>
