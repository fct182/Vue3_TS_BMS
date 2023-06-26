<template>
  <div class="home-page">
    <h2>我是主页</h2>
    <HomeChild
      ref="homeChildRef"
      v-model="num"
      @add-num="AddNum"
      @update:model-value="update"
      @sub-num="SubNum"
    ></HomeChild>
    <button @click="resetNum">重置</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
import HomeChild from './components/home-child.vue';

const num = ref(undefined);
const homeChildRef = ref<InstanceType<typeof HomeChild> | null>(null);

function AddNum(val: number) {
  console.log('add', val);
}
function SubNum(val: number) {
  console.log('sub', val);
}
function update(val: number) {
  console.log('update', val);
}
function resetNum() {
  homeChildRef.value?.reset(2);
}
</script>

<style lang="less" scoped>
.home-page {
  h2 {
    padding: 20px;
    background-color: aquamarine;
  }
}
</style>
