<template>
  <router-view #default="{ Component, route }">
    <transition :name="route.meta.transition || 'fade-transform'" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Layout',
  })
</script>

<style lang="less" scoped>
  .fade-transform-enter-active,
  .fade-transform-leave-active {
    transition: all 0.3s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
