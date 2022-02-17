<template>
  <div class="sidebar-container animate__animated animate__backInLeft">
    <div class="manage-logo">
      <img src="@/assets/logo.png" />
      <h3>ls管理系统</h3>
    </div>
    <div class="manage-menu">
      <el-menu class="sidebar-el-menu"
               :default-active="onRoutes"
               background-color="#red"
               text-color="#bfcbd9"
               active-text-color="#20a0ff"
               unique-opened
               router>
        <template v-for="item in items">
          <template v-if="item.subs">
            <el-sub-menu :index="item.index"
                         :key="item.index">
              <template #title>
                <i :class="item.icon"></i>
                <span>{{ item.title }}</span>
              </template>
              <template v-for="subItem in item.subs">
                <el-sub-menu v-if="subItem.subs"
                             :index="subItem.index"
                             :key="subItem.index">
                  <template #title>{{ subItem.title }}</template>
                  <el-menu-item v-for="(threeItem, i) in subItem.subs"
                                :key="i"
                                :index="threeItem.index">
                    {{ threeItem.title }}</el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else
                              :index="subItem.index"
                              :key="subItem.index">{{ subItem.title }}
                </el-menu-item>
              </template>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :index="item.index"
                          :key="item.index">
              <i :class="item.icon"></i>
              <template #title>{{ item.title }}</template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
// import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

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

const collapse = ref(true)
</script>

<style lang="scss" scoped>
.sidebar-container {
  .manage-logo {
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    overflow: hidden;
    white-space: nowrap;
    // padding: 0 50px;
    // box-sizing: border-box;

    img {
      border-radius: 4px;
      width: auto;
      height: 32px;
      margin-right: 10px;
    }
  }
  .manage-menu {
    .sidebar-el-menu {
      --el-menu-hover-custom-bg-color: #012344;
      ::v-deep .el-menu-item:hover {
        background-color: var(--el-menu-hover-custom-bg-color);
      }
    }
  }
}
</style>
