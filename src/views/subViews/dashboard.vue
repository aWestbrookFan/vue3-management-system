<template>
  <div class="dashboard-container">
    <div class="statistics-card">
      <div v-for="(item, index) in statisticsCardList" :key="index" class="statistics-list-item">
        <div class="sc-header"></div>
        <div class="sc-content"></div>
        <div class="sc-footer"></div>
      </div>
    </div>
    <div class="type-card">
      <div v-for="(item, index) in typeCardList" :key="index" class="tc-item">
        <iconfont :icon-name="item.icon" :iconColor="item.iconColor"></iconfont>
        {{ item.title }}
      </div>
    </div>
    <div class="chart-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="流量趋势" name="flowTrend">
          <FlowTrend></FlowTrend>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="visits">
          <Visits v-if="activeName === 'visits'"></Visits>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import FlowTrend from '@/components/dashboard/FlowTrend.vue'
import Visits from '@/components/dashboard/Visits.vue'
import iconfont from '@/components/iconfont/index.vue'
const activeName = ref('flowTrend')
const statisticsCardList = reactive([{}, {}, {}, {}])
const typeCardList = reactive([
  {
    type: '',
    iconColor: '#69c0ff',
    icon: 'icon-user',
    title: '用户'
  },
  {
    type: '',
    iconColor: '#69c0ff',
    icon: 'icon-fenxi',
    title: '分析'
  },
  {
    type: '',
    iconColor: '#ffa67c',
    icon: 'icon-shangpin',
    title: '商品'
  },
  {
    type: '',
    iconColor: '#ba8bed',
    icon: 'icon-dingdan',
    title: '订单'
  },
  {
    type: '',
    iconColor: '#ffd666',
    icon: 'icon-piaoju_shouju',
    title: '票据'
  },
  {
    type: '',
    iconColor: '#7ae1db',
    icon: 'icon-xiaoxi',
    title: '消息'
  },
  {
    type: '',
    iconColor: '#ff8dc4',
    icon: 'icon-biaoqian',
    title: '标签'
  },
  {
    type: '',
    iconColor: '#ffcb82',
    icon: 'icon-setting1',
    title: '配置'
  }
])
const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  // padding: 0 10px;
  // box-sizing: border-box;
  .statistics-card {
    display: grid;
    height: 200px;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 8px 12px;
    .statistics-list-item {
      display: flex;
      flex-direction: column;
      > div {
        width: 100%;
      }
      .sc-header {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 12px 16px 12px 16px;
        box-sizing: border-box;
        height: 48px;
      }
      .sc-content {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 12px 16px 12px 16px;
        box-sizing: border-box;
        height: 108px;
      }
      .sc-footer {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 12px 16px 12px 16px;
        box-sizing: border-box;
        height: 48px;
      }
    }
  }
  .statistics-card,
  .type-card {
    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
    }
  }
  .type-card {
    margin-top: 1rem;
    display: grid;
    height: 80px;
    grid-template-columns: repeat(8, minmax(0px, 1fr));
    gap: 8px 12px;

    .tc-item {
      flex-direction: column;

      i {
        width: 2em;
        height: 2em;
      }
    }
  }

  .chart-card {
    margin-top: 1rem;
    padding: 0 20px;
    box-sizing: border-box;

    :deep(.el-tabs__header) {
      line-height: 55px;
    }
    :deep(.el-tabs__item) {
      font-size: 16px;
    }
  }
}
</style>
