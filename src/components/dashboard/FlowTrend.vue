<template>
 <div class="flowTrend-container"></div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue'
import * as echarts from 'echarts'
import { flowTrendOption } from './option'
const initChart = () => {
  const chart = echarts.init(document.querySelector('.flowTrend-container'))
  chart.setOption(flowTrendOption)
}
onMounted(async () => {
  await nextTick
  initChart()
})
</script>

<style lang="scss" scoped>
.flowTrend-container{
  width: 100%;
  height: 280px;
}
</style>
