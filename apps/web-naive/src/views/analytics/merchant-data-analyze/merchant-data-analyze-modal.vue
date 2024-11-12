<script setup lang="ts">
import type { SelectMixedOption } from 'naive-ui/es/select/src/interface';

import { computed, ref, type Ref, watch } from 'vue';

import { NButton, NDivider, NInput, NModal, NSelect } from 'naive-ui';

import {
  merchantDataAnalyzeDataRef,
  merchantDataAnalyzeOwnedOccupancyRateDataRef,
} from './client';

const props = defineProps<{
  checkByDataAnalyze: boolean;
  projectItems?: SelectMixedOption[];
}>();

const showModal = ref<boolean>(false);

defineExpose({
  openModal: () => {
    showModal.value = true;
  },
  closeModal: () => {
    showModal.value = false;
  },
});

const modalTitle = computed(() =>
  props.checkByDataAnalyze ? '配置目标/计划' : '配置出租率目标',
);

const selectedProject = ref<string>();

const annualLeasingArea = ref<string>();
const annualLeasingReturn = ref<string>();
const firstQuarterLeasingArea = ref<string>();
const firstQuarterLeasingReturn = ref<string>();
const secondQuarterLeasingArea = ref<string>();
const secondQuarterLeasingReturn = ref<string>();
const thirdQuarterLeasingArea = ref<string>();
const thirdQuarterLeasingReturn = ref<string>();
const fourthQuarterLeasingArea = ref<string>();
const fourthQuarterLeasingReturn = ref<string>();

const annualOccupancyRate = ref<string>();

interface InputItem<T> {
  label: string;
  value: Ref<T | undefined>;
  required: boolean;
  placeholder?: string;
  prefix?: string;
  suffix?: string;
}

const analyzeDataInputItems: InputItem<string>[] = [
  {
    label: '年度租赁面积',
    value: annualLeasingArea,
    required: true,
    placeholder: '请输入面积',
    suffix: '㎡',
  },
  {
    label: '年度租赁回款',
    value: annualLeasingReturn,
    required: true,
    placeholder: '请输入回款',
    suffix: '万元',
  },
  {
    label: '第一季度租赁面积',
    value: firstQuarterLeasingArea,
    required: true,
    placeholder: '请输入面积',
    suffix: '㎡',
  },
  {
    label: '第一季度租赁回款',
    value: firstQuarterLeasingReturn,
    required: true,
    placeholder: '请输入回款',
    suffix: '万元',
  },
  {
    label: '第二季度租赁面积',
    value: secondQuarterLeasingArea,
    required: true,
    placeholder: '请输入面积',
    suffix: '㎡',
  },
  {
    label: '第二季度租赁回款',
    value: secondQuarterLeasingReturn,
    required: true,
    placeholder: '请输入回款',
    suffix: '万元',
  },
  {
    label: '第三季度租赁面积',
    value: thirdQuarterLeasingArea,
    required: true,
    placeholder: '请输入面积',
    suffix: '㎡',
  },
  {
    label: '第三季度租赁回款',
    value: thirdQuarterLeasingReturn,
    required: true,
    placeholder: '请输入回款',
    suffix: '万元',
  },
  {
    label: '第四季度租赁面积',
    value: fourthQuarterLeasingArea,
    required: true,
    placeholder: '请输入面积',
    suffix: '㎡',
  },
  {
    label: '第四季度租赁回款',
    value: fourthQuarterLeasingReturn,
    required: true,
    placeholder: '请输入回款',
    suffix: '万元',
  },
];

const occupancyRateInputItems: InputItem<string>[] = [
  {
    label: '年度出租率目标',
    value: annualOccupancyRate,
    required: true,
    placeholder: '请输入出租率百分比',
  },
];

const travItems = computed(() =>
  props.checkByDataAnalyze ? analyzeDataInputItems : occupancyRateInputItems,
);

watch(
  () => selectedProject.value,
  (value) => {
    if (!props.checkByDataAnalyze) {
      const data = merchantDataAnalyzeOwnedOccupancyRateDataRef.value.find(
        (item) => item.projectName === value,
      );

      if (data) {
        annualOccupancyRate.value = data.occupancyRateTarget;
      }
    }

    const data = merchantDataAnalyzeDataRef.value.find(
      (item) => item.projectName === value,
    );

    if (data) {
      annualLeasingArea.value = data.annualLeasingArea;
      annualLeasingReturn.value = data.annualLeasingReturn;
      firstQuarterLeasingArea.value = data.firstQuarterCompletionLeasingArea;
      firstQuarterLeasingReturn.value =
        data.firstQuarterCompletionLeasingReturn;
      secondQuarterLeasingArea.value = data.secondQuarterCompletionLeasingArea;
      secondQuarterLeasingReturn.value =
        data.secondQuarterCompletionLeasingReturn;
      thirdQuarterLeasingArea.value = data.thirdQuarterCompletionLeasingArea;
      thirdQuarterLeasingReturn.value =
        data.thirdQuarterCompletionLeasingReturn;
      fourthQuarterLeasingArea.value = data.fourthQuarterCompletionLeasingArea;
      fourthQuarterLeasingReturn.value =
        data.fourthQuarterCompletionLeasingReturn;
    }
  },
);

const clearRef = () => {
  selectedProject.value = '';
  annualLeasingArea.value = '';
  annualLeasingReturn.value = '';
  firstQuarterLeasingArea.value = '';
  firstQuarterLeasingReturn.value = '';
  secondQuarterLeasingArea.value = '';
  secondQuarterLeasingReturn.value = '';
  thirdQuarterLeasingArea.value = '';
  thirdQuarterLeasingReturn.value = '';
  fourthQuarterLeasingArea.value = '';
  fourthQuarterLeasingReturn.value = '';
  annualOccupancyRate.value = '';
};

const completeUpdate = () => {
  if (props.checkByDataAnalyze) {
    // 将更改应用回数据
    const data = merchantDataAnalyzeDataRef.value.find(
      (item) => item.projectName === selectedProject.value,
    );

    if (data) {
      data.annualLeasingArea = annualLeasingArea.value || '';
      data.annualLeasingReturn = annualLeasingReturn.value || '';
      data.firstQuarterCompletionLeasingArea =
        firstQuarterLeasingArea.value || '';
      data.firstQuarterCompletionLeasingReturn =
        firstQuarterLeasingReturn.value || '';
      data.secondQuarterCompletionLeasingArea =
        secondQuarterLeasingArea.value || '';
      data.secondQuarterCompletionLeasingReturn =
        secondQuarterLeasingReturn.value || '';
      data.thirdQuarterCompletionLeasingArea =
        thirdQuarterLeasingArea.value || '';
      data.thirdQuarterCompletionLeasingReturn =
        thirdQuarterLeasingReturn.value || '';
      data.fourthQuarterCompletionLeasingArea =
        fourthQuarterLeasingArea.value || '';
      data.fourthQuarterCompletionLeasingReturn =
        fourthQuarterLeasingReturn.value || '';
    }
  } else {
    const data = merchantDataAnalyzeOwnedOccupancyRateDataRef.value.find(
      (item) => item.projectName === selectedProject.value,
    );

    if (data) {
      data.occupancyRateTarget = annualOccupancyRate.value || '';
    }
  }

  showModal.value = false;
};
</script>

<template>
  <NModal
    v-model:show="showModal"
    :title="modalTitle"
    class="w-11/12 md:w-1/2"
    preset="card"
    size="medium"
    @after-leave="clearRef()"
  >
    <form class="flex flex-col gap-4" @submit.prevent="completeUpdate()">
      <div class="flex w-full items-center gap-2 md:w-1/3">
        <div class="shrink-0">项目<span class="text-red-500">*</span></div>
        <NSelect
          v-model:value="selectedProject"
          :options="projectItems"
          placeholder="请选择项目配置规则"
          required
          size="small"
        />
      </div>
      <NDivider class="!my-0" dashed />
      <div class="grid grid-flow-row grid-cols-2 gap-4">
        <div v-for="i in travItems" :key="i.label">
          <div>
            {{ i.label }}<span v-if="i.required" class="text-red-500">*</span>
          </div>
          <NInput v-model:value="i.value.value" :placeholder="i.placeholder">
            <template #prefix>
              {{ i.prefix }}
            </template>
            <template #suffix>
              {{ i.suffix }}
            </template>
          </NInput>
        </div>
      </div>

      <div class="form-control flex w-full items-center justify-center gap-4">
        <NButton size="small" @click="showModal = false">取消</NButton>
        <NButton attr-type="submit" size="small" type="primary"> 确认 </NButton>
      </div>
    </form>
  </NModal>
</template>
