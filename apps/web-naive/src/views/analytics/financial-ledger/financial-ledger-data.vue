<script setup lang="ts">
import { onMounted, watch } from 'vue';

import { useAnalyticsStore } from '../client';
import CustomTable from '../components/custom-table.vue';
import {
  contractStartDateColumn,
  financialLedgerDataRef,
  generateFinancialLedgerDataList,
  initColumns,
  projectColumn,
} from './client';

const store = useAnalyticsStore();

onMounted(() => {
  generateFinancialLedgerDataList(50);
  store.updateProjectItems(financialLedgerDataRef.value);
});

watch(
  () => store.selectedProject,
  (value) => {
    projectColumn.filterOptionValue = value;
  },
);

watch(
  () => store.checkRange,
  (value) => {
    contractStartDateColumn.filterOptionValue = value;
  },
);
</script>

<template>
  <CustomTable :columns="initColumns()" :data="financialLedgerDataRef" />
</template>
