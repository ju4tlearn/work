<script setup lang="ts">
import { computed, ref } from 'vue';

import { NButton } from 'naive-ui';

import CustomTable from '../components/custom-table.vue';
import {
  byProjectColumns,
  byRoomColumns,
  rentalLedgerByProjectDataRef,
  rentalLedgerByRoomDataRef,
} from './client';

const checkByProject = ref<boolean>(true);

const toggleCheck = (isProject: boolean) => {
  checkByProject.value = isProject;
};

const tableData = computed(() =>
  checkByProject.value
    ? rentalLedgerByProjectDataRef.value
    : rentalLedgerByRoomDataRef.value,
);

const tableColumns = computed(() =>
  checkByProject.value ? byProjectColumns() : byRoomColumns(),
);
</script>

<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex items-center gap-4">
      <NButton
        :type="checkByProject ? 'primary' : undefined"
        size="small"
        @click="toggleCheck(true)"
      >
        按项目
      </NButton>
      <NButton
        :type="checkByProject ? undefined : 'primary'"
        size="small"
        @click="toggleCheck(false)"
      >
        按房间
      </NButton>
    </div>

    <CustomTable :columns="tableColumns" :data="tableData" class="w-full" />
  </div>
</template>
