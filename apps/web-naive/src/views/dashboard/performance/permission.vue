<script setup lang="ts">
import { ref } from 'vue';

import { NTabPane, NTabs } from 'naive-ui';

import shuju from '#/views/dashboard/performance/com/slot-shuju.vue';
import ziyuan from '#/views/dashboard/performance/com/slot-ziyuan.vue';

const qw = ref(ziyuan);
const fn11 = (value: string) => {
  qw.value = value === '资源权限' ? ziyuan : shuju;
};
</script>

<template>
  <div>
    <NTabs @update:value="fn11">
      <NTabPane name="资源权限" tab="资源权限" />
      <NTabPane name="数据权限" tab="数据权限" />
    </NTabs>
    <component :is="qw" />
  </div>
</template>
