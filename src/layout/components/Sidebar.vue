<template>
  <div class="sidebar animate__animated animate__backInLeft">
    <div class="manage-logo" @click="handleChangeIscollapse">
      <img src="@/assets/logo.png" />
      <h3 v-if="!isCollapse">&emsp;ls管理系统&emsp;</h3>
    </div>
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      background-color="#red"
      :collapse="isCollapse"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <i :class="item.icon"></i>
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
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <iconfont icon-name="icon-jishufuwu"></iconfont>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import iconfont from '@/components/iconfont/index.vue'

const items = [
  {
    icon: 'el-icon-lx-home',
    index: '/dashboard',
    title: '系统首页'
  }
  // {
  //   icon: 'el-icon-lx-cascades',
  //   index: '/table',
  //   title: '基础表格'
  // },
  // {
  //   icon: 'el-icon-lx-copy',
  //   index: '/tabs',
  //   title: 'tab选项卡'
  // }
  // {
  //   icon: 'el-icon-lx-calendar',
  //   index: '3',
  //   title: '表单相关',
  //   subs: [
  //     {
  //       index: '/form',
  //       title: '基本表单'
  //     },
  //     {
  //       index: '/upload',
  //       title: '文件上传'
  //     },
  //     {
  //       index: '4',
  //       title: '三级菜单',
  //       subs: [
  //         {
  //           index: '/editor',
  //           title: '富文本编辑器'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   icon: 'el-icon-lx-emoji',
  //   index: '/icon',
  //   title: '自定义图标'
  // },
  // {
  //   icon: 'el-icon-pie-chart',
  //   index: '/charts',
  //   title: 'schart图表'
  // },
  // {
  //   icon: 'el-icon-lx-global',
  //   index: '/i18n',
  //   title: '国际化功能'
  // },
  // {
  //   icon: 'el-icon-lx-warn',
  //   index: '7',
  //   title: '错误处理',
  //   subs: [
  //     {
  //       index: '/permission',
  //       title: '权限测试'
  //     },
  //     {
  //       index: '/404',
  //       title: '404页面'
  //     }
  //   ]
  // },
  // {
  //   icon: 'el-icon-lx-redpacket_fill',
  //   index: '/donate',
  //   title: '支持作者'
  // }
]

const route = useRoute()

const onRoutes = computed(() => {
  return route.path
})

const isCollapse = ref(false)

const handleChangeIscollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  > ul {
    height: 100%;
  }
  .manage-logo {
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    overflow: hidden;
    white-space: nowrap;

    img {
      border-radius: 4px;
      width: auto;
      height: 32px;
      // margin-right: 10px;
    }
  }
  .sidebar-el-menu {
    --el-menu-hover-custom-bg-color: #012344;
    :deep(.el-menu-item:hover) {
      background-color: var(--el-menu-hover-custom-bg-color);
    }
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
