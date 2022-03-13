<template>
  <div class="sidebar animate__animated animate__backInLeft">
    <div
      class="manage-logo"
      @click="handleChangeIscollapse"
      :style="{ width: isCollapse ? 'auto' : '200px' }"
    >
      <img src="@/assets/logo.png" />
      <transition name="opcity">
        <h3 v-show="!isCollapse">ls管理系统</h3>
      </transition>
    </div>
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      background-color="#red"
      :collapse="isCollapse"
      text-color="#bbb"
      active-text-color="#fff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs && item.access.includes(userRole.role)">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <iconfont :icon-name="item.icon" :iconColor="changeIconActive(item.index)"></iconfont>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index"
                >{{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <iconfont :icon-name="item.icon" :iconColor="changeIconActive(item.index)"></iconfont>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template> -->
      </template>
    </el-menu>
    <!-- 右侧开关切换 -->
    <ToggleBar @toggleSideBar="handleChangeIscollapse" :isCollapse="isCollapse" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import iconfont from '@/components/iconfont/index.vue'
import ToggleBar from '@/layout/components/ToggleBar.vue'

const items = [
  {
    icon: 'icon-homePage',
    index: '1',
    title: '系统首页',
    access: 'admin,guest',
    subs: [
      {
        index: '/dashboard',
        title: '系统首页'
      }
    ]
  },
  {
    icon: 'icon-basicTable',
    index: '2',
    title: '基础表格',
    access: 'admin',
    subs: [
      {
        index: '/basictable',
        title: '基础表格'
      }
    ]
  },
  {
    icon: 'icon-warning',
    index: '11',
    title: '错误处理',
    access: 'admin',
    subs: [
      {
        index: '/404',
        title: '404页面'
      },
      {
        index: '/403',
        title: '403页面'
      }
    ]
  }
]

const route = useRoute()

const onRoutes = computed(() => {
  return route.path
})

const isCollapse = ref(false)

const handleChangeIscollapse = () => {
  isCollapse.value = !isCollapse.value
}

const changeIconActive = (item) => {
  if (item === route.path) {
    return 'fff'
  }
  return 'bbb'
}

const userRole = JSON.parse(localStorage.getItem('user'))
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  --el-menu-hover-custom-bg-color: #012344;

  > ul {
    height: 100%;
  }
  .el-menu-item,
  .el-sub-menu {
    border-bottom: 0.5px dashed rgb(2, 112, 223);
  }
  :deep(.el-sub-menu .el-sub-menu__title) {
    border-bottom: 0.5px dashed rgb(2, 112, 223);
  }
  .manage-logo {
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    white-space: nowrap;
    cursor: pointer;

    img {
      border-radius: 4px;
      width: auto;
      height: 32px;
    }
    h3 {
      padding: 0 20px;
      box-sizing: border-box;
    }
    .opcity-enter-active {
      animation: opacity-change 2s;
    }
    .opcity-leave-active {
      animation: opacity-change 0.2s reverse;
    }
    @keyframes opacity-change {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .sidebar-el-menu {
    :deep(.el-menu-item:hover) {
      background-color: var(--el-menu-hover-custom-bg-color);
    }
  }
  :deep(.el-sub-menu__title:hover) {
    background-color: var(--el-menu-hover-custom-bg-color);
  }
  .el-menu {
    border-right: none;
  }
  :deep(.el-sub-menu .el-menu-item) {
    padding-left: 55px;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
