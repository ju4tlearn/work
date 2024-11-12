<script lang="ts" setup>
import { defineProps } from 'vue';

import { Iconsearch } from '@vben/icons';

import { NCard, NCollapse, NCollapseItem, NDivider } from 'naive-ui';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <div class="flex h-[30px] items-center bg-blue-300">
    房源地址：{{ props.data.roomNumber }}<Iconsearch />
  </div>
  <div class="flex">
    <p class="text-xl">合约信息</p>
    <Iconsearch />
  </div>
  <div class="flex justify-between">
    <div class="flex flex-col items-center">
      <div>月租金</div>
      <div>9000元/月</div>
    </div>
    <div class="flex flex-col items-center">
      <div>押金</div>
      <div>9000元</div>
    </div>
    <div class="flex flex-col items-center">
      <div>付款方式</div>
      <div>押一付一</div>
    </div>
    <div class="flex flex-col items-center">
      <div>合同周期</div>
      <div>2023-02-01 ~ 2024-01-31（1年）</div>
    </div>
  </div>
  <NDivider dashed style="border-width: 1px" />
  <div>
    <p class="text-xl">提成分佣信息</p>
  </div>
  <NCard>
    <div class="flex justify-between">
      <div class="flex flex-col items-center">
        <div>分佣人员</div>
        <div>{{ props.data.name }}</div>
      </div>
      <div class="flex flex-col items-center">
        <div>分佣职务</div>
        <div>主管</div>
      </div>
      <div class="flex flex-col items-center">
        <div>提成总额</div>
        <div>5000元</div>
      </div>
      <div class="flex flex-col items-center">
        <div>已发放提成</div>
        <div>1000元</div>
      </div>
    </div>
    <NDivider dashed style="border-width: 1px" />
    <NCollapse>
      <NCollapseItem title="发放提成记录">
        <div class="flex">
          <p>第一次发放金额：</p>
          xxxx元，
          <p>发放时间：</p>
          2023-02-01 12:12，
          <p>备注：</p>
          xxxxxxx
        </div>
        <div class="flex">
          <p>第一次发放金额：</p>
          xxxx元，
          <p>发放时间：</p>
          2023-02-01 12:12，
          <p>备注：</p>
          xxxxxxx
        </div>
      </NCollapseItem>
    </NCollapse>
  </NCard>
</template>
