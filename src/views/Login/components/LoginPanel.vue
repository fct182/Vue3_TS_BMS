<!--
* 登录页面-登录面板表单
* @Author:付常涛
* @Date: 2023/01/13 15:31:34
-->
<template>
  <div class="login-panel">
    <h2 class="title">XX后台管理系统</h2>
    <el-tabs v-model="currentTabName" stretch type="border-card">
      <el-collapse-transition>
        <el-tab-pane name="accountPassword">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><UserFilled /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <AccountPassword ref="accountPassword"></AccountPassword>
        </el-tab-pane>
      </el-collapse-transition>
      <el-collapse-transition>
        <el-tab-pane name="verificationCode">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Message /></el-icon>
              <span>验证码登录</span>
            </span>
          </template>
          <VerificationCode ref="verificationCode"></VerificationCode>
        </el-tab-pane>
      </el-collapse-transition>
    </el-tabs>
    <div class="bottom-option">
      <el-checkbox v-model="rememberPasswordFlag" label="记住密码" />
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      auto-insert-space
      :loading="isLoginLoading"
      type="primary"
      @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { UserFilled, Message } from '@element-plus/icons-vue';
import { ref } from 'vue';
import AccountPassword from './AccountPassword.vue';
import VerificationCode from './VerificationCode.vue';
import { useUserStore } from 'src/store/module/user';
import { useRouter } from 'vue-router';
import { setCache } from '@/utils/cache';

enum LoginType {
  AccountPassword = 'accountPassword',
  VerificationCode = 'verificationCode'
}

const userStore = useUserStore();
const router = useRouter();

// 当前tab
const currentTabName = ref(LoginType.AccountPassword);
// 是否记住密码
const rememberPasswordFlag = ref(false);
// 账户/密码 输入框组件的Ref引用
const accountPassword = ref<InstanceType<typeof AccountPassword> | null>(null);
// 邮箱/验证码 输入框组件的Ref引用
const verificationCode = ref<InstanceType<typeof VerificationCode> | null>(
  null
);
// 正在登录中
const isLoginLoading = ref(false);

/**
 * 用户登录
 * @Author:付常涛
 */
async function handleLogin() {
  console.log('登录');

  if (currentTabName.value === LoginType.AccountPassword) {
    // 账号密码登录--表单校验
    await accountPassword.value?.accountPasswordFormRef?.validate(
      (valid, fields) => {
        if (valid) {
          // 开启登录加载状态
          isLoginLoading.value = true;
          if (rememberPasswordFlag.value && accountPassword.value) {
            userStore.setUserLocalCache(
              accountPassword.value.loginForm.account,
              accountPassword.value?.loginForm.password
            );
          } else {
            userStore.clearUserLocalCache();
          }
          console.log('账号密码:', accountPassword.value?.loginForm);
          // 登录
          // const res = userStore.accountLogin(accountPassword.value!.loginForm);
          // todo---跳转到首页
          // router.push('/home');
        } else {
          console.log('error submit!', fields);
        }
      }
    );
  } else {
    // 验证码登录--表单校验
    await verificationCode.value?.verificationCodeFormRef?.validate(
      (valid, fields) => {
        if (valid) {
          // 开启登录加载状态
          isLoginLoading.value = true;
          console.log('验证码:', verificationCode.value?.loginForm);
        } else {
          console.log('error submit!', fields);
        }
      }
    );
  }
  setTimeout(() => {
    isLoginLoading.value = false;
    setCache('bms-token', 'fct is logined(test)');
    router.replace('/home');
  }, 2000);
}
</script>

<style lang="less" scoped>
.login-panel {
  position: relative;
  top: -45px;
  .title {
    text-align: center;
  }
  .el-tabs {
    width: 360px;
    border-radius: 10px;
    :deep(.el-tabs__nav-wrap) {
      border-radius: 10px 10px 0 0;
    }
    :deep(.el-tabs__header) {
      border-radius: 10px 10px 0 0;
    }
    :deep(.el-tabs__content) {
      height: 120px;
    }
  }
  .bottom-option {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .el-button {
    width: 100%;
    position: absolute;
    margin-top: 10px;
  }
}
</style>
