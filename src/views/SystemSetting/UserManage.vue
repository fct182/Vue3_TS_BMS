<template>
  <div class="user-manage">
    <div>用户管理</div>
    <ul>
      <li v-for="n in 80" :key="n">我是第{{ n }}个li</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();

console.log('route', route);
</script>

<style scoped></style>
