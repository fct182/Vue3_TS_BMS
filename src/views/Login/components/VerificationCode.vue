<!--
 * 登录界面--验证码登录
 * @Author:付常涛
 * @Date: 2023/01/13 16:56:33
-->
<template>
  <el-form
    ref="verificationCodeFormRef"
    :model="loginForm"
    :rules="rules"
    label-width="70"
  >
    <el-form-item prop="email" label="邮箱">
      <el-input
        autocomplete="off"
        placeholder="请输入邮箱"
        v-model="loginForm.email"
      />
    </el-form-item>
    <el-form-item label="验证码" class="code-item" prop="code">
      <el-input
        v-model="loginForm.code"
        class="code-input-item"
        placeholder="请输入验证码"
      />
      <el-button
        class="btn-getCode-item"
        :disabled="btnDis"
        @click="getVerificationCode"
        type="primary"
      >
        {{ showText }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, defineExpose, ref } from 'vue';
import { ElMessage } from 'element-plus';
import type { FormRules, FormInstance } from 'element-plus';

const verificationCodeFormRef = ref<FormInstance>();
// 存储表单对象
const loginForm = reactive({
  email: '',
  code: ''
});
// 按钮展示文字
const showText = ref('获取验证码');
// 按钮展示文字
const btnDis = ref(false);

// 校验规则
const rules = reactive<FormRules>({
  email: [
    {
      type: 'email',
      required: true,
      message: '请输入正确的邮箱',
      trigger: 'change'
    }
  ],
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
  ElMessage({
    showClose: true,
    message: '发送验证码成功!',
    center: true,
    type: 'success'
  });
  btnDis.value = true;
  let time_count = 60;
  showText.value = `${time_count}s 后重试`;
  // 计时器
  let timer = setInterval(function () {
    if (time_count > 0) {
      time_count--;
      showText.value = `${time_count}s 后重试`;
    } else {
      clearInterval(timer);
      showText.value = '获取验证码';
      btnDis.value = false;
    }
  }, 1000);
}

defineExpose({ loginForm, verificationCodeFormRef });
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
