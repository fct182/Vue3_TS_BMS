<template>
  <div class="not-found">
    <el-icon><CircleCloseFilled /></el-icon>
    <p>当前路径: {{ route.path }} 的页面不存在</p>
    <el-button @click="goBackHome" color="#626aef" :icon="HomeFilled" plain>
      返回首页
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { CircleCloseFilled, HomeFilled } from '@element-plus/icons-vue';
const router = useRouter();
const route = useRoute();

// console.log('route', route, route.params.pathMatch);

/**
 * 返回首页
 * @Author:付常涛
 */
function goBackHome() {
  router.push({ name: 'home' });
}
</script>

<style lang="less" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  .el-icon {
    color: #f56c6c;
    font-size: 64px;
  }
}
</style>
