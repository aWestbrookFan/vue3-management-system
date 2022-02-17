<template>
  <div class="dashboard-container">
    <div class="statistics-card">
      <div>statistics-card1</div>
      <div>statistics-card2</div>
      <div>statistics-card3</div>
      <div>statistics-card4</div>
    </div>
    <div class="type-card">
      <div>type-card1</div>
      <div>type-card2</div>
      <div>type-card3</div>
      <div>type-card4</div>
      <div>type-card5</div>
      <div>type-card6</div>
      <div>type-card7</div>
      <div>type-card8</div>
    </div>
    <div class="chart-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="流量趋势" name="flowTrend">
          <FlowTrend></FlowTrend>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="visits">
          <Visits></Visits>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FlowTrend from '@/components/dashboard/FlowTrend.vue'
import Visits from '@/components/dashboard/Visits.vue'

const activeName = ref('flowTrend')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  padding: 0 10px;
  box-sizing: border-box;
  .statistics-card {
    margin-top: 1rem;
    display: grid;
    height: 200px;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 8px 12px;
  }
  .statistics-card,
  .type-card {
    > div {
      display: grid;
      align-items: center;
      justify-items: center;
      background-color: #fff;
    }
  }
  .type-card {
    margin-top: 1rem;
    display: grid;
    height: 80px;
    grid-template-columns: repeat(8, minmax(0px, 1fr));
    gap: 8px 12px;
  }

  .chart-card {
    margin-top: 1rem;
    padding: 0 20px;
    box-sizing: border-box;

    ::v-deep .el-tabs__header {
      line-height: 55px;
    }
    ::v-deep .el-tabs__item {
      font-size: 16px;
    }
  }
}
</style>
