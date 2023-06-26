<template>
  <div class="edit-article">
    <p>新增博客文章</p>
    <p>富文本编辑器</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

console.log('route', route.params);
</script>

<style lang="less" scoped></style>
