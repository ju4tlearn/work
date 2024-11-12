<script setup lang="ts">
import { onMounted } from 'vue';

import { useAnalyticsStore } from '../client';
import CustomTable from '../components/custom-table.vue';
import { financialLedgerDataRef, initColumns } from './client';

const store = useAnalyticsStore();

onMounted(() => store.updateProjectItems(financialLedgerDataRef.value));
</script>

<template>
  <CustomTable :columns="initColumns()" :data="financialLedgerDataRef" />
</template>
