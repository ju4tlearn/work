<script setup lang="ts">
import { watch } from 'vue';

import {
  contractStartDateColumn,
  projectColumn,
  useAnalyticsStore,
} from '../client';
import CustomTable from '../components/custom-table.vue';
import { financialLedgerDataRef, initColumns } from './client';

const store = useAnalyticsStore();

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
