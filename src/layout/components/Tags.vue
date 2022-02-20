<template>
  <div class="tags-container animate__animated animate__fadeInRightBig">
    <div class="tag-cover-div">
      <li
        class="tags-li"
        v-for="(item, index) in tagsList"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <iconfont icon-name="icon-close" iconColor="808695"></iconfont>
        </span>
      </li>
    </div>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <iconfont icon-name="icon-arrow-down" class="expand-click" iconColor="808695"></iconfont>
        <template #dropdown>
          <el-dropdown-menu size="small">
            <el-dropdown-item command="other">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '@/store'
import iconfont from '@/components/iconfont/index.vue'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isActive = (path) => {
  return path === route.fullPath
}

const store = useStore()
const tagsList = computed(() => store.tagsList)

// 关闭单个标签
const closeTags = (index) => {
  const tagsListVal = tagsList.value
  const delItem = tagsListVal[index]
  store.delTagsItem({ index })
  const item = tagsListVal[index] ? tagsListVal[index] : tagsListVal[index - 1]
  if (item) {
    delItem.path === route.fullPath && router.push(item.path)
    return
  }
  router.push('/')
}
// 设置标签
const setTags = (route) => {
  const isExist = tagsList.value.some((item) => {
    return item.path === route.fullPath
  })
  if (!isExist) {
    if (tagsList.value.length >= 8) {
      store.commit('delTagsItem', { index: 0 })
    }
    store.setTagsItem({
      name: route.name,
      title: route.meta.title,
      path: route.fullPath
    })
  }
}
setTags(route)

onBeforeRouteUpdate((to) => {
  setTags(to)
})

// 关闭全部标签
const closeAll = () => {
  store.clearTags()
  router.push('/')
  store.setTagsItem({
    name: route.name,
    title: route.meta.title,
    path: route.fullPath
  })
}
// 关闭其他标签
const closeOther = () => {
  const curItem = tagsList.value.filter((item) => {
    return item.path === route.fullPath
  })
  store.closeTagsOther(curItem)
}

const handleTags = (command) => {
  command === 'other' ? closeOther() : closeAll()
}
</script>

<style lang="scss" scoped>
.tags-container {
  position: relative;
  height: 44px;
  overflow: hidden;
  background: #f5f7f9;
  box-sizing: border-box;
  padding: 6px 19px 6px 10px;
  box-shadow: 0 5px 10px #ddd;
  display: flex;
  justify-content: space-between;

  .tag-cover-div {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .tags-li {
    background: #fff;
    color: rgb(31, 34, 37);
    height: 32px;
    padding: 6px 16px 4px;
    box-sizing: border-box;
    border-radius: 3px;
    margin-right: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    flex: 0 0 auto;
    transition: all 0.3s ease-in;

    .tags-li-icon {
      display: flex;
      transition: all 0.3s ease-in;
      &:hover {
        transform: scale(1.2);
      }
    }

    &:not(.active):hover {
      background: #f8f8f8;
    }

    &.active {
      color: #2d8cf0;
    }

    .tags-li-title {
      max-width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-right: 5px;
      text-decoration: none;
      color: inherit;
      font-size: 14px;
      transition: all 0.3s ease-in;
      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .tags-close-box {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    .expand-click {
      width: 2em;
    }
  }
}
</style>
