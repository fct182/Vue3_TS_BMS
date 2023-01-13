<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <el-button @click="onLoading" type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <p>
      <el-badge :value="12" class="item">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button>replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button>comments</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button>replies</el-button>
      </el-badge>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ElLoading } from 'element-plus';
import HelloWorld from 'components/HelloWorld.vue'; // @ is an alias to /src

function onLoading() {
  const loading = ElLoading.service({
    text: '页面中使用loading'
  });
  setTimeout(() => {
    loading.close();
  }, 2000);
}
</script>

<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-dropdown {
  margin-top: 1.1rem;
}
</style>
