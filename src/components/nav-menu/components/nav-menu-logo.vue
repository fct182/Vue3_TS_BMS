<template>
  <div :class="[props.collapse ? 'collapse-logo' : '']" class="nav-menu-logo">
    <div class="img-info">
      <img src="~@/assets/img/mountain.png" alt="logo" />
      <span v-if="!props.collapse">后台管理系统</span>
    </div>
    <!-- 展开 -->
    <el-icon v-if="props.collapse" @click="handleCollapse(false)">
      <Expand />
    </el-icon>
    <!-- 折叠 -->
    <el-icon v-else @click="handleCollapse(true)"><Fold /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue';

const emits = defineEmits<{
  (e: 'changeCollapse', type: boolean): void;
}>();

const props = defineProps({
  collapse: Boolean
});
/**
 * 控制nav-menu的折叠
 * @Author:付常涛
 * @Date: 2023/03/17 16:22:37
 * @param type 折/叠的标志
 */
function handleCollapse(type: boolean) {
  emits('changeCollapse', type);
}
</script>

<style lang="less" scoped>
.nav-menu-logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .img-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 12px;
    }
  }
  .el-icon {
    position: absolute;
    right: 0;
    padding: 4px;
    font-size: 18px;
  }
}
.collapse-logo {
  margin-left: -20px;
  .img-info {
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
