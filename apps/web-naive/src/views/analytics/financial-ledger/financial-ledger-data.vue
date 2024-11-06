<script setup lang="ts">
import CustomTable from '../components/custom-table.vue';
import { financialLedgerDataRef, initColumns } from './client';
</script>

<template>
  <CustomTable :columns="initColumns()" :data="financialLedgerDataRef" />
</template>
