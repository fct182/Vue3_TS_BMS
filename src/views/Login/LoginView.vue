<!--
* 登录页面
* @Author:付常涛
* @Date: 2023/01/13 15:30:23
-->
<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './components/LoginPanel.vue';
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/login-bg.jpg') 0% 0% / cover no-repeat;
}
</style>
