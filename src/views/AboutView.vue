<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p class="box">{{ userInfo.userName }}</p>
    <p>{{ userInfo.age }}</p>
    <p><button @click="userInfo.age++">修改年龄+1</button></p>
  </div>
</template>

<script lang="ts" setup>
// import { computed } from 'vue';
import { useUserStore } from '@/store/module/user';

const userStore = useUserStore();
const userInfo = userStore.userInfo;
</script>

<style lang="less">
.about {
  .box {
    background-color: palegreen;
  }
}
</style>
