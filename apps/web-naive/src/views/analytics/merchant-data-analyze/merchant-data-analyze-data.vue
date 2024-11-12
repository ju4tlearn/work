<script setup lang="ts">
import { computed, ref } from 'vue';

import { NButton } from 'naive-ui';

import { useAnalyticsStore } from '../client';
import CustomTable from '../components/custom-table.vue';
import {
  byAnalyzeDataColumns,
  byRateDataColumns,
  merchantDataAnalyzeDataRef,
  merchantDataAnalyzeOwnedOccupancyRateDataRef,
} from './client';
import MerchantDataAnalyzeModal from './merchant-data-analyze-modal.vue';

const store = useAnalyticsStore();

const checkByDataAnalyze = ref<boolean>(true);
const modalRef = ref<InstanceType<typeof MerchantDataAnalyzeModal> | null>();

const toggleCheck = (isAnalyze: boolean) => {
  checkByDataAnalyze.value = isAnalyze;
};

const tableData = computed(() =>
  checkByDataAnalyze.value
    ? merchantDataAnalyzeDataRef.value
    : merchantDataAnalyzeOwnedOccupancyRateDataRef.value,
);

const tableColumns = computed(() =>
  checkByDataAnalyze.value ? byAnalyzeDataColumns() : byRateDataColumns(),
);
</script>

<template>
  <MerchantDataAnalyzeModal
    ref="modalRef"
    :check-by-data-analyze="checkByDataAnalyze"
    :project-items="store.projectItems"
  />

  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <NButton
          :type="checkByDataAnalyze ? 'primary' : undefined"
          size="small"
          @click="toggleCheck(true)"
        >
          招商数据统计
        </NButton>
        <NButton
          :type="checkByDataAnalyze ? undefined : 'primary'"
          size="small"
          @click="toggleCheck(false)"
        >
          自持出租率
        </NButton>
      </div>

      <NButton size="small" type="primary" @click="modalRef?.openModal()">
        {{ checkByDataAnalyze ? '配置目标/计划' : '配置出租率目标' }}
      </NButton>
    </div>

    <CustomTable :columns="tableColumns" :data="tableData" />
  </div>
</template>
