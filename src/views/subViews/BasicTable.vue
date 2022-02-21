<template>
  <div class="baiscTable-container">基础表格</div>
</template>

<script setup>
import { getUser } from '@/api/basicTable.js'

async function aa() {
  try {
    const res = await getUser()
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

aa()
</script>

<style lang="scss" scoped>
.baiscTable-container {
}
</style>
