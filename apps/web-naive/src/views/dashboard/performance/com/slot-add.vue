<script lang="ts" setup>
import { ref } from 'vue';

import { Icondel } from '@vben/icons';

import {
  NButton,
  NCard,
  NCheckbox,
  NInput,
  NInputGroup,
  NSelect,
} from 'naive-ui';

const optionsProject = [
  {
    label: 'E + SPACE',
    value: 'E + SPACE',
  },
  {
    label: '软件新城',
    value: '软件新城',
  },
  {
    label: '创新园区',
    value: '创新园区',
  },
];
const optionsStandard = [
  {
    label: '全民营销',
    value: '全民营销',
  },
  {
    label: '自主招商',
    value: '自主招商',
  },
  {
    label: '产业合作部网络渠道',
    value: '产业合作部网络渠道',
  },
];
const optionsIndustry = [
  {
    label: '行业内',
    value: '行业内',
  },
  {
    label: '行业外',
    value: '行业外',
  },
];
const optionsType = [
  {
    label: '新签',
    value: '新签',
  },
  {
    label: '续签',
    value: '续签',
  },
  {
    label: '其他',
    value: '其他',
  },
];
const optionsTime = [
  {
    label: '＜1年',
    value: '＜1年',
  },
  {
    label: '1年≤x＜2年',
    value: '1年≤x＜2年',
  },
  {
    label: '2年≤x＜3年',
    value: '2年≤x＜3年',
  },
  {
    label: '≥3年',
    value: '≥3年',
  },
];
const optionsDuty = [
  {
    label: '招商主管',
    value: '招商主管',
  },
  {
    label: '招商专员',
    value: '招商专员',
  },
  {
    label: '招商经理',
    value: '招商经理',
  },
];
const optionsName = [
  {
    label: '嘻嘻',
    value: '嘻嘻',
  },
  {
    label: '哈哈',
    value: '哈哈',
  },
];
const selectOptions = [
  {
    label: '按首月（完整）月租金',
    value: '按首月（完整）月租金',
  },
  {
    label: '按租赁面积',
    value: '按租赁面积',
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
const value = ref(false);
const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
const onlyAllowNumber = (value: string) => !value || /^\d+$/.test(value);
</script>
<template>
  <div class="flex">
    <div>
      <div class="text-[20px]">选择项目：</div>
      <div class="mt-1">
        <NSelect :options="optionsProject" class="w-40" />
      </div>
    </div>
  </div>
  <div class="mt-10 text-[20px]">客户信息</div>
  <div class="mt-1 flex justify-between">
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
  <div class="mt-10 text-[20px]">租赁信息</div>
  <div class="mt-1 flex justify-between">
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
  <div class="mt-10 text-[20px]">分佣规则</div>
  <div class="mt-1 flex">
    <NCard class="w-[95%]">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div>
            <span class="text-[red]">*</span>
            分佣职务:
          </div>
          <div>
            <NSelect :options="optionsDuty" class="w-40" />
          </div>
        </div>
        <div class="flex items-center">
          <div><span class="text-[red]">*</span>分佣人员:</div>
          <div>
            <NSelect :options="optionsName" class="w-40" />
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
      <div class="mt-2 flex items-center justify-between">
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
      <div class="mt-2 flex items-center">
        <NCheckbox v-model:checked="value"> 设置逾期规则 </NCheckbox>
        <div class="flex items-center">
          <p>每逾期</p>
          <NInput
            :allow-input="onlyAllowNumber"
            style="width: 90px"
            type="text"
          >
            <template #suffix> 天</template>
          </NInput>
          <p>，扣除提成的</p>
          <NInput
            :allow-input="onlyAllowNumber"
            style="width: 90px"
            type="text"
          >
            <template #suffix> %</template>
          </NInput>
        </div>
      </div>
    </NCard>
    <div class="flex items-center justify-center">
      <Icondel style="width: 70px; height: 60px; color: red" />
    </div>
  </div>
  <div class="mt-5 flex justify-center">
    <NButton type="info">继续添加</NButton>
  </div>
  <div class="mt-10">
    <div class="text-[20px]">通用配置</div>
    <div class="flex flex-col">
      <NCheckbox v-model:checked="value1">
        以上提成均在押金缴清的情况下发放
      </NCheckbox>
      <NCheckbox v-model:checked="value2">
        以上提成均在合同年缴清至少一季度的租金的情况下发放
      </NCheckbox>
      <NCheckbox v-model:checked="value3">
        门店下同一角色有多名员工，则员工分摊提成佣金
      </NCheckbox>
      <NCheckbox v-model:checked="value4">
        签约人与配置的其他角色为同一人时，不享受签约人的提成
      </NCheckbox>
    </div>
  </div>
</template>
