<!--
 * 页头组件
-->
<template>
  <div class="page-header">
    <div class="page-header-left">
      <span class="header-label">{{ props.title }}</span>
    </div>
    <div class="page-header-right">
      <slot name="header-right"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: ''
  }
);
</script>

<style lang="less" scoped>
.page-header {
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  letter-spacing: 1px;
  padding: 8px 16px;
  border-bottom: 1px solid #f0f2f7;
  .page-header-left {
    line-height: 28px;
    float: left;
  }
  .page-header-right {
    float: right;
  }
  &::before {
    content: '';
    display: table;
  }
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}
</style>
