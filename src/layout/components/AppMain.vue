<template>
  <div class="appMain-container animate__animated animate__backInDown">
    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
