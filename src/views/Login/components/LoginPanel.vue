<!--
* 登录页面-登录面板表单
* @Author:付常涛
* @Date: 2023/01/13 15:31:34
-->
<template>
  <div class="login-panel">
    <h2 class="title">XX后台管理系统</h2>
    <el-tabs stretch type="border-card">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <AccountPassword></AccountPassword>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Message /></el-icon>
            <span>验证码登录</span>
          </span>
        </template>
        <VerificationCode></VerificationCode>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, Message } from '@element-plus/icons-vue';
import AccountPassword from './AccountPassword.vue';
import VerificationCode from './VerificationCode.vue';
</script>

<style lang="less" scoped>
.login-panel {
  .title {
    text-align: center;
  }
  .el-tabs {
    width: 360px;
  }
}
</style>
