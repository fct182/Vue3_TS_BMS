<template>
  <div class="nav-header">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbComp" :key="index">
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 用户信息 -->
    <div class="user-info">
      <el-dropdown trigger="click">
        <div class="img-name">
          <!-- <el-avatar :size="35" src="@/assets/img/avatar.jpg" /> -->
          <el-avatar
            :size="35"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span>{{ name }}</span>
          <el-icon><arrow-down /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="UserFilled">个人中心</el-dropdown-item>
            <el-dropdown-item :icon="Lock"> 修改密码 </el-dropdown-item>
            <el-dropdown-item :icon="InfoFilled">关于系统</el-dropdown-item>
            <el-dropdown-item :icon="SwitchButton">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  ArrowDown,
  UserFilled,
  Lock,
  InfoFilled,
  SwitchButton
} from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const name = ref('付常涛');

const route = useRoute();

// 面包屑页头
const breadcrumbComp = computed(() => {
  return route.meta.breadcrumb as string[];
});
</script>

<style lang="less" scoped>
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .el-breadcrumb {
    .el-breadcrumb__item {
      :deep(.el-breadcrumb__inner) {
        color: #838c99;
      }
      &:last-child {
        :deep(.el-breadcrumb__inner) {
          color: #1d222a;
        }
      }
    }
  }
  .user-info {
    .img-name {
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        font-size: 12px;
      }
      .el-avatar {
        margin-right: 5px;
      }
      .el-icon {
        margin-left: 5px;
      }
    }
  }
}
</style>
