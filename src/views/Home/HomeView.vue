<template>
  <div class="home-view">
    <el-container class="home-container">
      <el-aside class="aside-content" :width="wid">
        <nav-menu @changeCollapse="changeCollapse"></nav-menu>
      </el-aside>
      <el-container class="content-container">
        <el-header class="content-header">
          <nav-header></nav-header>
        </el-header>
        <el-main class="content-main">
          <div class="main-component">
            <router-view></router-view>
          </div>
          <el-backtop target=".content-main" :right="70" :bottom="50" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import NavMenu from '@/components/nav-menu/nav-menu.vue';
import NavHeader from '@/components/nav-header/nav-header.vue';
import { ref } from 'vue';

const wid = ref('200px');

/**
 * 进行折叠menu操作
 * @Author:付常涛
 * @Date: 2023/03/17 17:17:50
 * @param type  折叠(true)或展开(false)
 */
function changeCollapse(type: boolean) {
  if (type) {
    wid.value = '64px';
  } else {
    wid.value = '200px';
  }
}
</script>

<style lang="less" scoped>
.home-view {
  width: 100%;
  height: 100%;
  .home-container {
    height: 100%;
    .aside-content {
      color: #fff;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      overflow-x: hidden;
      overflow-y: auto;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
      }
      transition: width 0.3s linear;
    }
    .content-container {
      height: 100%;
      .content-header {
        height: 50px;
      }
      .content-main {
        height: calc(100% - 50px);
        color: #333;
        background-color: #f0f2f5;
        .main-component {
          // width: 100%;
          // height: 100%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
