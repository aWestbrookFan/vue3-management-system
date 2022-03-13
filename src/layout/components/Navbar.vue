<template>
  <div class="navbar-container animate__animated animate__backInDown">
    <div class="nc-left">
      <div>
        <iconfont icon-name="icon-toggle-left" iconColor="000"></iconfont>
      </div>
    </div>
    <div class="nc-right">
      <div title="点击搜索">
        <iconfont icon-name="icon-search" iconColor="000"></iconfont>
      </div>
      <div title="点击全屏">
        <iconfont icon-name="icon-fullscreen-expand" iconColor="000"></iconfont>
      </div>
      <div title="点击退出">
        <iconfont icon-name="icon-setting1" iconColor="000" @click="loginOut"></iconfont>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconfont from '@/components/iconfont/index.vue'
import { useRouter } from 'vue-router'
import { ElMessageBox, ElMessage } from 'element-plus'
const router = useRouter()
const loginOut = () => {
  ElMessageBox.confirm('确定要退出吗？', '退出提示', {
    confirmButtonText: '退出',
    cancelButtonText: '待会再退',
    type: 'warning'
  })
    .then(() => {
      localStorage.removeItem('user')
      router.push({ name: 'Login' })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消了退出'
      })
    })
}
</script>

<style lang="scss" scoped>
.navbar-container {
  padding: 0 20px;
  box-sizing: border-box;
  .nc-left,
  .nc-right {
    display: flex;
    align-items: center;

    > div {
      cursor: pointer;
      padding: 0 12px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      font-weight: bold;
    }
  }
}
</style>
