<template>
  <div class="visits-container"></div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { visitOption } from './option'
const initChart = () => {
  const chart = echarts.init(document.querySelector('.visits-container'))
  chart.setOption(visitOption)
  return chart
}
onMounted(async () => {
  await nextTick()
  initChart()
})
</script>

<style lang="scss" scoped>
.visits-container{
  width: 100%;
  height: 280px;
}
</style>
