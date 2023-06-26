<template>
  <div>
    <button @click="handler.onClickSub()">-</button>
    <button>{{ props.modelValue == null ? 'N' : props.modelValue }}</button>
    <button @click="handler.onClickAdd()">+</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const props = defineProps<{
  modelValue?: number;
}>();

const emit = defineEmits<{
  (e: 'add-num', val: number): void;
  (e: 'update:modelValue', val: number): void;
  (e: 'sub-num', val: number): void;
}>();

const handler = {
  onClickAdd: () => {
    const val = props.modelValue == null ? 1 : props.modelValue + 1;
    emit('add-num', val);
    emit('update:modelValue', val);
  },
  onClickSub: () => {
    const val = props.modelValue == null ? 1 : props.modelValue - 1;
    emit('sub-num', val);
    emit('update:modelValue', val);
  },
  reset: (val?: number) => {
    emit('update:modelValue', val == null ? 0 : val);
  }
};
defineExpose({ reset: handler.reset });
</script>

<style scoped></style>
