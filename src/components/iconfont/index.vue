<template>
  <div class="iconfont-container">
    <svg class="icon" aria-hidden="true" :style="{ color: iconColor }">
      <use :xlink:href="'#' + iconName"></use>
    </svg>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
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
  line-height: 1;
  margin-right: 1.5em;
  .icon {
    width: 1.4em;
    height: 1.4em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
}
</style>
