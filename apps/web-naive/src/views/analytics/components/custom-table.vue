<script setup lang="ts">
import { reactive } from 'vue';

import { NDataTable } from 'naive-ui';

defineProps<{
  columns: any[];
  data: any[];
}>();

const paginationReactive = reactive({
  page: 1,
  pageSize: 10,
  pageSizes: [10, 30, 50],
  showSizePicker: true,
  prefix({ itemCount }: { itemCount: any }) {
    return `共 ${itemCount} 条`;
  },
  onChange: (page: number) => {
    paginationReactive.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize;
    paginationReactive.page = 1;
  },
});
</script>

<template>
  <div class="overflow-x-auto">
    <NDataTable
      :bordered="false"
      :columns="columns"
      :data="data"
      :header-height="48"
      :max-height="300"
      :min-row-height="48"
      :pagination="paginationReactive"
      virtual-scroll
      virtual-scroll-x
    />
  </div>
</template>
