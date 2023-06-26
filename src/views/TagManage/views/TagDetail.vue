<template>
  <div class="tag-detail">
    <page-header title="标签详情">
      <template #header-right>
        <el-button plain type="primary" @click="back"> 返回 </el-button>
      </template>
    </page-header>
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" />
        <el-table-column prop="articleTitle" label="标题" width="180" />
        <el-table-column prop="date" label="发布时间" width="180" />
        <el-table-column prop="publishStatus" label="发布状态" />
        <el-table-column prop="address" label="评论数" />
        <el-table-column prop="address" label="阅读数" />
        <el-table-column label="操作" width="70">
          <template #default="{ row, $index }">
            <el-button
              link
              type="primary"
              @click="handleEdit(row, $index)"
              size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="操作" width="70">
          <template #default="{ row, $index }">
            <el-button
              link
              type="danger"
              @click="handleDelete(row, $index)"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import PageHeader from '@/components/page-header/page-header.vue';

const route = useRoute();
const router = useRouter();

const tableData = [
  {
    date: '2016-05-03',
    articleTitle: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    publishStatus: 'Home'
  },
  {
    date: '2016-05-02',
    articleTitle: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    publishStatus: 'Office'
  },
  {
    date: '2016-05-04',
    articleTitle: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    publishStatus: 'Home'
  },
  {
    date: '2016-05-01',
    articleTitle: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    publishStatus: 'Office'
  }
];
console.log('route', route.params);

/**
 * 返回上个页面
 * @Author:付常涛
 */
function back() {
  router.back();
}
/**
 * 编辑tag标签
 * @Date: 2023/03/21 15:59:58
 * @param row  当前行数据
 * @param index  当前行数据所在表格第几行
 */
function handleEdit(row: any, index: number) {
  console.log('edit', row, index);
  router.push({ name: 'articleEdit', params: { id: '123321' } });
}
/**
 * 删除tag标签
 * @param row  当前行数据
 * @param index  当前行数据所在表格第几行
 */
function handleDelete(row: any, index: number) {
  console.log('dele', row, index);
}
</script>

<style lang="less" scoped>
.tag-detail {
  .table-box {
    padding: 16px;
  }
}
</style>
