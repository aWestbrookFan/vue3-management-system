<template>
 <div class="flowTrend-container"  ref="chartRef">
   flowTrend
   <div class="test" ref="testRef"></div>
 </div>
</template>

<script setup>
import { ref } from 'vue'

const chartRef = ref()
console.log(chartRef)
</script>

<style lang="scss" scoped>
.flowTrend-containe{
  width: 100%;
  height: 280px;
}
</style>
