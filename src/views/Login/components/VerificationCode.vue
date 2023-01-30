<!--
 * 登录界面--验证码登录
 * @Author:付常涛
 * @Date: 2023/01/13 16:56:33
-->
<template>
  <el-form :model="loginForm" :rules="rules" label-width="60">
    <el-form-item prop="email" label="邮箱">
      <el-input
        autocomplete="off"
        placeholder="请输入邮箱"
        v-model="loginForm.email"
      />
    </el-form-item>
    <!-- <div class="code">
      <el-input
        v-model="loginForm.code"
        class="code-input"
        placeholder="请输入验证码"
      />
      <el-button
        class="btn-getCode"
        @click="getVerificationCode"
        type="primary"
      >
        获取验证码
      </el-button>
    </div> -->
    <el-form-item class="code-item" prop="code">
      <el-input
        v-model="loginForm.code"
        class="code-input-item"
        placeholder="请输入验证码"
      />
      <el-button
        class="btn-getCode-item"
        @click="getVerificationCode"
        type="primary"
      >
        获取验证码
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';

// 存储表单对象
const loginForm = reactive({
  email: '',
  code: ''
});

// 校验规则
const rules = reactive<FormRules>({
  email: [{ required: true, message: '请输入你的邮箱', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
});

/**
 * 获取验证码
 * @Author:付常涛
 * @Date: 2023/01/13 17:42:56
 */
function getVerificationCode() {
  // 发起请求
  console.log('获取验证码');
}
</script>

<style lang="less" scoped>
.code {
  width: 100%;
  .btn-getCode {
    margin-left: 10px;
  }
  .code-input {
    margin-left: 60px;
    width: 45%;
  }
}
.code-item {
  display: flex;
  justify-content: space-between;
  .code-input-item {
    flex: 1;
  }
  .btn-getCode-item {
    margin-left: 20px;
  }
}
</style>
