<template>
  <i class="el-icon iconfont-container">
    <svg class="icon" aria-hidden="true" :style="{ color: iconColor }">
      <use :xlink:href="'#' + iconName"></use>
    </svg>
  </i>
</template>

<script setup>
defineProps({
  iconName: {
    type: String,
    default: ''
  },
  iconColor: {
    type: String,
    default: '#20a0ff'
  }
})
</script>

<style lang="scss" scoped>
.iconfont-container {
  .icon {
    width: 1.4em;
    height: 1.4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
