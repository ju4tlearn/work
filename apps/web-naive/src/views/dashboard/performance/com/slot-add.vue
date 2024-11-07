<script lang="ts" setup>
import { ref } from 'vue';

import { NCard, NInput, NInputGroup, NSelect } from 'naive-ui';

const optionsProject = [
  {
    label: 'E + SPACE',
    value: '1',
  },
  {
    label: '软件新城',
    value: '2',
  },
  {
    label: '创新园区',
    value: '3',
  },
];
const optionsStandard = [
  {
    label: '全民营销',
    value: '1',
  },
  {
    label: '自主招商',
    value: '2',
  },
  {
    label: '产业合作部网络渠道',
    value: '3',
  },
];
const optionsIndustry = [
  {
    label: '行业内',
    value: '1',
  },
  {
    label: '行业外',
    value: '2',
  },
];
const optionsType = [
  {
    label: '新签',
    value: '1',
  },
  {
    label: '续签',
    value: '2',
  },
  {
    label: '其他',
    value: '3',
  },
];
const optionsTime = [
  {
    label: '＜1年',
    value: '1',
  },
  {
    label: '1年≤x＜2年',
    value: '2',
  },
  {
    label: '2年≤x＜3年',
    value: '3',
  },
  {
    label: '≥3年',
    value: '4',
  },
];
const selectOptions = [
  {
    label: '按首月（完整）月租金',
    value: '1',
  },
  {
    label: '按租赁面积',
    value: '2',
  },
];
const optionsCount = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];
const arr = ref([1]);
const arrChange = (row: any) => {
  const qw = [];
  for (let index = 1; index <= row; index++) {
    qw.push(index);
  }
  arr.value = qw;
};
</script>
<template>
  <div class="flex">
    <div>
      <div class="text-[20px]">选择项目：</div>
      <div>
        <NSelect :options="optionsProject" class="w-40" />
      </div>
    </div>
  </div>
  <div class="text-[20px]">客户信息</div>
  <div class="flex justify-between">
    <div class="flex">
      <div class="text-[20px]">
        <span class="text-[red]">*</span>
        租赁提成标准：
      </div>
      <div>
        <NSelect :options="optionsStandard" class="w-40" />
      </div>
    </div>
    <div class="flex">
      <div class="text-[20px]">
        <span class="text-[red]">*</span>行业内/行业外
      </div>
      <div>
        <NSelect :options="optionsIndustry" class="w-40" />
      </div>
    </div>
  </div>
  <div class="text-[20px]">租赁信息</div>
  <div class="flex justify-between">
    <div class="flex">
      <div class="text-[20px]">
        <span class="text-[red]">*</span>
        签约类型:
      </div>
      <div>
        <NSelect :options="optionsType" class="w-40" />
      </div>
    </div>
    <div class="flex">
      <div class="text-[20px]"><span class="text-[red]">*</span>签约时长:</div>
      <div>
        <NSelect :options="optionsTime" class="w-40" />
      </div>
    </div>
  </div>
  <div class="text-[20px]">分佣规则</div>
  <NCard>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div>
          <span class="text-[red]">*</span>
          分佣职务:
        </div>
        <div>
          <NSelect :options="optionsType" class="w-40" />
        </div>
      </div>
      <div class="flex items-center">
        <div><span class="text-[red]">*</span>分佣人员:</div>
        <div>
          <NSelect :options="optionsTime" class="w-40" />
        </div>
      </div>
      <div class="flex items-center">
        <div><span class="text-[red]">*</span>提成总额:</div>
        <div>
          <NInputGroup>
            <NSelect :options="selectOptions" :style="{ width: '50%' }" />
            <NInput :style="{ width: '50%' }">
              <template #suffix> % </template>
            </NInput>
          </NInputGroup>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex w-full items-center">
        <div>
          <span class="text-[red]">*</span>
          发放规则: 分
        </div>
        <div>
          <NSelect
            :options="optionsCount"
            class="w-20"
            @update:value="arrChange"
          />
        </div>
        <div>次发放,</div>
        <div v-for="item in arr" :key="item" class="flex items-center">
          <p>第{{ item }}次发放</p>
          <NInput :style="{ width: '50%' }">
            <template #suffix> % </template>
          </NInput>
        </div>
      </div>
    </div>
  </NCard>
</template>
