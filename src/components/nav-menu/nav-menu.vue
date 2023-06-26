<template>
  <div class="nav-menu">
    <!-- logo项 -->
    <nav-menu-logo
      :collapse="isCollapse"
      @changeCollapse="changeCollapse"
    ></nav-menu-logo>
    <!-- 菜单项 -->
    <el-menu
      router
      :collapse="isCollapse"
      :default-active="activeMenu"
      background-color="#001529"
      text-color="#909399"
      active-text-color="#fff"
      class="el-menu-content"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="(item, index) in menuList" :key="index">
        <el-sub-menu v-if="item.children" :index="item.index">
          <template #title>
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.titleText }}</span>
          </template>
          <template
            v-for="(childrenItem, childrenIndex) in item.children"
            :key="childrenIndex"
          >
            <el-menu-item-group
              v-if="childrenItem.groupText"
              :title="childrenItem.groupText"
            >
              <el-menu-item
                v-for="e in childrenItem.groupItem"
                :key="e.titleText"
                :index="e.index"
                >{{ e.titleText }}</el-menu-item
              >
            </el-menu-item-group>
            <template v-else>
              <el-sub-menu
                v-if="childrenItem.children"
                :index="childrenItem.index!"
              >
                <template #title>{{ childrenItem.titleText }}</template>
                <el-menu-item
                  v-for="e in childrenItem.children"
                  :key="e.titleText"
                  :index="e.index"
                  >{{ e.titleText }}</el-menu-item
                >
              </el-sub-menu>
              <el-menu-item v-else :index="childrenItem.index">{{
                childrenItem.titleText
              }}</el-menu-item>
            </template>
          </template>
        </el-sub-menu>
        <el-menu-item :index="item.index" v-else>
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.titleText }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavMenuLogo from './components/nav-menu-logo.vue';
import { menuList } from '@/config/menuList';
import { useRoute } from 'vue-router';

const emits = defineEmits<{
  (e: 'changeCollapse', type: boolean): void;
}>();

const isCollapse = ref(false);

// 默认展示的menu菜单
const activeMenu = ref('/home');

const route = useRoute();
// 页面刷新时，从地址栏找到左侧目录高亮部分
activeMenu.value = route.path;

/**
 * 折叠menu菜单
 * @Author:付常涛
 * @Date: 2023/03/17 16:29:41
 * @param type  折叠布尔值
 */
function changeCollapse(type: boolean) {
  isCollapse.value = type;
  emits('changeCollapse', type);
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="less" scoped>
.nav-menu {
  .el-menu-content {
    border-right: none;
    .el-menu-item.is-active {
      background-color: #409eff;
    }
  }
}
</style>
