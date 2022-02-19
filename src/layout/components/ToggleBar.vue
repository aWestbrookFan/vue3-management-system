<template>
  <div class="toggleBar-container" :class="{ collapse: isCollapse }" @click="handleToggleSideBar">
    <div class="tc-top"></div>
    <div class="tc-bottom"></div>
  </div>
</template>

<script setup>
const emit = defineEmits(['toggleSideBar'])
const props = defineProps({
  isCollapse: {
    type: Boolean,
    required: true
  }
})
const handleToggleSideBar = () => {
  emit('toggleSideBar', !props.isCollapse)
}
</script>

<style lang="scss" scoped>
.toggleBar-container {
  position: absolute;
  top: calc(50% - 40px);
  right: -28px;
  width: 32px;
  height: 40px;
  cursor: pointer;

  &:hover {
    .tc-top {
      transform: rotate(20deg) scale(1.15) translateY(-2px);
    }
    .tc-bottom {
      transform: rotate(-20deg) scale(1.15) translateY(2px);
    }
  }

  .tc-top {
    position: absolute;
    width: 4px;
    border-radius: 2px;
    height: 38px;
    left: 14px;
    background-color: rgba(191, 191, 191, 1);
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .tc-bottom {
    position: absolute;
    width: 4px;
    border-radius: 2px;
    height: 38px;
    left: 14px;
    top: 34px;
    background-color: rgba(191, 191, 191, 1);
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  }
}

.collapse {
  &:hover {
    .tc-top {
      transform: rotate(-20deg) scale(1.15) translateY(-2px);
    }
    .tc-bottom {
      transform: rotate(20deg) scale(1.15) translateY(2px);
    }
  }
}
</style>
