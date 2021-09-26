<template>
  <div> </div>
</template>

<script lang="ts" setup>
  import { unref } from 'vue'
  import { useRouter } from 'vue-router'

  const { currentRoute, replace } = useRouter()
  const { params, query } = unref(currentRoute)

  const { path } = params
  const jumpPath = Array.isArray(path) ? path.join('/') : path
  replace({
    path: jumpPath.startsWith('/') ? jumpPath : '/' + jumpPath,
    query,
  })
</script>

<style scoped lang="scss"></style>
