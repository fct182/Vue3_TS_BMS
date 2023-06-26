<template>
  <div v-if="route.path === '/tag'" class="tag-manage">
    <page-header :title="title">
      <template #header-right>
        <el-button type="primary" @click="showAddTagDialog" class="ml-2">
          新建标签
        </el-button>
      </template>
    </page-header>
    <!-- 表格 -->
    <div class="table-box">
      <el-table stripe :data="state.tableData" style="width: 100%">
        <el-table-column prop="id" width="100px" label="ID" />
        <el-table-column prop="name" label="Tag名称">
          <template #default="{ row }">
            <div @click="goToDetail(row)" class="table-link">
              {{ row.name }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="tagType" label="Tag类型" />
        <el-table-column prop="tag" label="Tag">
          <template #default="{ row }">
            <el-tag :type="row.tagType" disable-transitions>{{
              row.name
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="includeArticleNum" label="包含文章个数" />
        <el-table-column sortable prop="createDate" label="创建时间" />
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
  <RouterView v-else></RouterView>
  <el-dialog v-model="state.tagFormDialog" title="新建标签">
    <el-form :model="state.form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="state.form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select
          v-model="state.form.region"
          placeholder="Please select a zone"
        >
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="state.tagFormDialog = false">Cancel</el-button>
        <el-button type="primary" @click="state.tagFormDialog = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import PageHeader from '@/components/page-header/page-header.vue';

const title = ref('Tag标签');
const router = useRouter();
const route = useRoute();

const formLabelWidth = '140px';
const state = reactive({
  tableData: [
    // success/info/warning/danger
    {
      name: 'Vue',
      includeArticleNum: 3,
      createDate: '2023-02-28',
      tagType: '',
      id: '1090001'
    },
    {
      name: 'React',
      includeArticleNum: 5,
      createDate: '2023-03-08',
      tagType: 'success',
      id: '1090002'
    },
    {
      name: 'Node',
      includeArticleNum: 23,
      createDate: '2023-03-08',
      tagType: 'info',
      id: '1090003'
    },
    {
      name: 'MySQL',
      includeArticleNum: 6,
      createDate: '2023-03-08',
      tagType: 'warning',
      id: '1090004'
    },
    {
      name: 'CSS',
      includeArticleNum: 12,
      createDate: '2023-03-08',
      tagType: 'danger',
      id: '1090005'
    }
  ],
  tagFormDialog: false,
  form: {
    name: '',
    region: ''
  }
});

function showAddTagDialog() {
  console.log('点击新建标签');
  state.tagFormDialog = true;
}
/**
 * 编辑tag标签
 * @Date: 2023/03/21 15:59:58
 * @param row  当前行数据
 * @param index  当前行数据所在表格第几行
 */
function handleEdit(row: any, index: number) {
  console.log('edit', row, index);
}
/**
 * 删除tag标签
 * @param row  当前行数据
 * @param index  当前行数据所在表格第几行
 */
function handleDelete(row: any, index: number) {
  console.log('dele', row, index);
}
/**
 * 前往tag标签页详情----展示相关文章
 * @param row  当前行数据
 * @param index  当前行数据所在表格第几行
 */
function goToDetail(row: any) {
  console.log('goDetail', row);
  router.push(`/tag/tagDetail/${row.id}`);
}
</script>

<style lang="less" scoped>
.tag-manage {
  .table-box {
    padding: 16px;
    .table-link {
      color: #1f74ff;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
