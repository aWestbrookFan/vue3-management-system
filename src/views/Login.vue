<template>
  <div class="login-container">
    <div class="form-container">
      <div class="fc-header">
        <h3>后台管理系统模板</h3>
      </div>
      <div class="fc-content">
        <el-form ref="loginForm" :model="formVar" label-width="auto">
          <el-form-item label="账号" prop="username">
            <el-input v-model="formVar.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formVar.password" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-button type="primary" @click="handleLogin" class="login-submit">登&emsp;录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../api/login'
import { ElMessage } from 'element-plus'
const router = useRouter()

const formVar = reactive({
  username: 'admin',
  password: '123456'
})

const handleLogin = async () => {
  try {
    const res = await login(formVar)
    if (res.currentUser) {
      localStorage.setItem('user', JSON.stringify(res.userInfo))
      router.push({ name: 'Home' })
      return
    }
    ElMessage({
      type: 'info',
      message: '请联系管理员添加用户信息'
    })
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background-image: url('../assets/login.svg');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  position: relative;
  .form-container {
    position: absolute;
    top: 20%;
    left: 50%;
    min-width: 350px;
    transform: translateX(-50%);
    .fc-header {
      line-height: 30px;
      font-size: 24px;
    }
    .login-submit {
      width: calc(100% - 40px);
      margin-left: 40px;
    }
  }
}
</style>
