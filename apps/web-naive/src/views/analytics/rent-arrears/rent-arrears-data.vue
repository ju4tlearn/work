<script setup lang="ts">
import CustomTable from '../components/custom-table.vue';
import { columns, rentArrearsDataRef } from './client';
</script>

<template>
  <CustomTable :columns="columns()" :data="rentArrearsDataRef" />
</template>
