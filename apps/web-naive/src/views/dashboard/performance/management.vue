<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { Iconadd, Iconbell, Iconsearch, Iconwallet } from '@vben/icons';

import { NAvatar, NButton, NDropdown, NInput } from 'naive-ui';

import HuiZong from '#/views/dashboard/performance/com/huizong.vue';
import MingXi from '#/views/dashboard/performance/com/mingXi.vue';
import Record from '#/views/dashboard/performance/com/record.vue';

const component = ref<any>(MingXi);
const router = useRouter();
const show = ref<boolean>(false);
const optionsManagement = [
  {
    label: '租赁提成明细',
    key: '1',
  },
  {
    label: '租赁提成汇总',
    key: '2',
  },
  {
    label: '提成发放记录',
    key: '3',
  },
];
const ClickShow = () => {
  show.value = !show.value;
};
const ClickSelet = (key: any) => {
  switch (key) {
    case '1': {
      component.value = MingXi;
      break;
    }
    case '2': {
      component.value = HuiZong;
      break;
    }
    case '3': {
      component.value = Record;
      break;
    }

    default: {
      break;
    }
  }
};
const ClickButton = () => {
  router.push('2');
};
</script>
<template>
  <div>
    <div
      class="sticky top-[85px] z-40 mx-auto mb-7 flex h-[33px] w-[98%] justify-between bg-white"
    >
      <div class="ml-2 flex items-center justify-center">
        <img alt="" src="/favicon.ico" />
        <div class="ml-2">智慧租赁</div>
      </div>
      <div class="flex items-center justify-between" style="width: 185px">
        <NDropdown
          :options="optionsManagement"
          trigger="hover"
          @select="ClickSelet"
        >
          <NButton>业绩台账</NButton>
        </NDropdown>
        <NButton @click="ClickButton">分佣配置</NButton>
      </div>
      <div class="mr-2 flex items-center justify-center">
        <Iconadd class="mr-3" icon="material-symbols:add" />
        <NInput v-show="show" style="width: 150px" type="text" />
        <Iconsearch
          class="mr-3"
          icon="material-symbols:search"
          @click="ClickShow"
        />
        <Iconwallet class="mr-3" icon="lucide:wallet" />
        <Iconbell class="mr-3" icon="smi:bell" />
        <div class="mr-2">张三</div>
        <NAvatar round size="small" src="/favicon.ico" />
      </div>
    </div>
    <component :is="component" />
  </div>
</template>
