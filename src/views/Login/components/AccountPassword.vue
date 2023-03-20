<!--
 * 登录界面--账号密码登录
 * @Author:付常涛
 * @Date: 2023/01/13 16:56:33
-->
<template>
  <el-form
    ref="accountPasswordFormRef"
    :model="loginForm"
    :rules="rules"
    label-width="70"
  >
    <el-form-item required prop="account" label="账号">
      <el-input
        autocomplete="off"
        placeholder="请输入你的账号"
        v-model="loginForm.account"
      />
    </el-form-item>
    <el-form-item required prop="password" label="密码">
      <el-input
        autocomplete="off"
        v-model="loginForm.password"
        type="password"
        placeholder="请输入你的密码"
        show-password
      />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormRules, FormInstance } from 'element-plus';

const accountPasswordFormRef = ref<FormInstance>();
const loginForm = reactive({
  account: '',
  password: ''
});

// 校验规则
const rules = reactive<FormRules>({
  account: [{ required: true, message: '请输入你的账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
});

defineExpose({ loginForm, accountPasswordFormRef });
</script>

<style scoped></style>
