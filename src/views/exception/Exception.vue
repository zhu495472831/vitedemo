<template>
  <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
    <template #extra>
      <a-button type="primary">Back Home</a-button>
    </template>
  </a-result>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from '@/store'
  export default defineComponent({
    setup() {
      const store = useStore()
      console.log(store.state.tagsView.visitedViews)
    },
  })
</script>

<style scoped lang="scss"></style>
