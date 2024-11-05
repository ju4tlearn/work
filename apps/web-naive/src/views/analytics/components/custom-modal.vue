<script setup lang="ts">
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface';

import { type Component, ref, watch } from 'vue';

import { MaterialSymbolsLightDownload } from '@vben/icons';

import {
  NButton,
  NDatePicker,
  NModal,
  NRadioButton,
  NRadioGroup,
  NSelect,
  NTabPane,
  NTabs,
} from 'naive-ui';

defineProps<{
  chartComponent?: Component;
  dataComponent?: Component;
  projects: SelectMixedOption[];
  title: string;
}>();

const emit = defineEmits<{
  downloadData: [value: string];
  project: [value: string];
  statCycle: [value: string];
  viewYearCycle: [value: string];
}>();

const showModal = ref<boolean>(false);
const isViewData = ref<boolean>(false);
const selectedProject = ref<string>();
const selectedCycle = ref();
const viewYearCycle = ref();

defineExpose({
  openModal: () => {
    showModal.value = true;
  },
  closeModal: () => {
    showModal.value = false;
  },
});

watch(
  () => selectedProject.value,
  (value) => {
    if (value) emit('project', value);
  },
);

watch(
  () => selectedCycle.value,
  (value) => {
    if (value) emit('statCycle', value);
  },
);

watch(
  () => viewYearCycle.value,
  (value) => {
    if (value) emit('viewYearCycle', value);
  },
);

const handleBeforeLeave = (tab: string) => {
  isViewData.value = tab === 'data';
  return true;
};
</script>

<template>
  <NModal
    v-model:show="showModal"
    :title="title"
    preset="card"
    size="medium"
    style="width: 90%"
  >
    <NTabs animated type="line" @before-leave="handleBeforeLeave">
      <NTabPane name="chart" tab="图表">
        <component :is="chartComponent" v-if="chartComponent" />
        <div v-else class="p-16">暂无数据</div>
      </NTabPane>
      <NTabPane name="data" tab="数据">
        <component :is="dataComponent" v-if="dataComponent" />
        <div v-else class="p-16">暂无数据</div>
      </NTabPane>

      <template #suffix>
        <div class="flex gap-2">
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <span>指定统计周期:</span>
              <NRadioGroup
                v-model:value="selectedCycle"
                class="border-none"
                name="cycleSelect1"
                size="small"
              >
                <NRadioButton value="week"> 本周 </NRadioButton>
                <NRadioButton value="month"> 本月 </NRadioButton>
                <NRadioButton value="year"> 本年 </NRadioButton>
              </NRadioGroup>
            </div>

            <NDatePicker
              v-if="selectedCycle === 'year'"
              v-model:value="viewYearCycle"
              class="w-64"
              clearable
              size="small"
              type="daterange"
            />
          </div>

          <div class="flex w-48 items-center gap-2">
            <div class="shrink-0">项目:</div>
            <NSelect
              v-model:value="selectedProject"
              :options="projects"
              class="w-full max-w-lg"
              placeholder="请选择"
              size="small"
            />
          </div>

          <NButton
            v-if="isViewData"
            circle
            quaternary
            size="small"
            @click="emit('downloadData', '1')"
          >
            <MaterialSymbolsLightDownload class="size-8" />
          </NButton>
        </div>
      </template>
    </NTabs>
  </NModal>
</template>
