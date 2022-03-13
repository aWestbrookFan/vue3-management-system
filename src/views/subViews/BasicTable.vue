<template>
  <div class="baiscTable-container" style="padding: 0 10px">
    <div class="bc-data-filter">
      <el-input v-model="nameSearch" placeholder="姓名搜索" class="search-item"></el-input>
      <el-button type="primary">查询</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" class="bc-table">
      <el-table-column fixed prop="date" label="时间" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="sex" label="性别" width="120" />
      <el-table-column prop="city" label="城市" width="120" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="desc" label="描述" width="600" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button type="text" size="small" @click="handleClick">删除</el-button>
          <el-button type="text" size="small" @click="handleEdit">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { getBasicTableUser } from '@/api/basicTable.js'
import { reactive, ref } from 'vue'

const tableData = reactive([])

const nameSearch = ref('')

const handleClick = () => {
  console.log('click')
}
const handleEdit = () => {
  console.log('edit')
}

const getUserInfo = async () => {
  try {
    const res = await getBasicTableUser()
    tableData.push(...res.data)
  } catch (error) {
    console.log(error)
  }
}

getUserInfo()
</script>

<style lang="scss" scoped>
.baiscTable-container {
  box-sizing: border-box;

  .bc-data-filter {
    padding: 20px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .search-item {
      width: 15%;
    }
  }

  .bc-table {
    height: calc(100% - 80px);
    overflow-y: scroll;
  }
}
</style>
