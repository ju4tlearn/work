<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui';

import { h, ref } from 'vue';
import { useRouter } from 'vue-router';

import {
  Iconadd,
  Iconbell,
  Iconremove,
  Iconsearch,
  Iconwallet,
} from '@vben/icons';

import {
  NAvatar,
  NButton,
  NCard,
  NDataTable,
  NDropdown,
  NInput,
  NModal,
  NSelect,
} from 'naive-ui';

import Add from '#/views/dashboard/performance/com/slot-add.vue';

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
const ClickSelet = () => {
  router.push('1');
};
const ClickButton = () => {
  router.push('2');
};
const optionsProject = [
  {
    label: '项目1',
    value: '项目1',
  },
  {
    label: '项目2',
    value: '项目2',
  },
  {
    label: '项目3',
    value: '项目3',
  },
];
const pagination = {
  pageSize: 10, // 每页显示条目个数
};
const columns: DataTableColumns = [
  {
    title: '租赁提成标准',
    key: 'standard',
    align: 'center',
  },
  {
    title: '行业内/行业外',
    align: 'center',
    key: 'industry',
  },
  {
    title: '签约类型',
    align: 'center',
    key: 'type',
  },
  {
    title: '签约时长',
    align: 'center',
    key: 'time',
  },
  {
    title: '操作',
    align: 'center',
    key: 'action',
    render() {
      return [
        h(
          NButton,
          {
            text: true,
            style: { color: 'blue' },
            class: 'mr-3',
          },
          '编辑',
        ),

        h(
          NButton,
          {
            text: true,
            style: { color: 'red' },
          },
          '禁用',
        ),
      ];
    },
  },
];
const data = [
  {
    standard: '全民营销',
    industry: '行业内',
    type: '新签',
    time: '1年≤x＜2年',
  },
  { standard: '自主招商', industry: '行业内', type: '新签', time: '＜1年' },
  {
    standard: '产业合作部网络渠道',
    industry: '行业外',
    type: '新签',
    time: '≥3年',
  },
];
const showModalAdd = ref(false);
</script>

<template>
  <div>
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
    </div>
    <div class="flex justify-between">
      <div class="ml-8">
        <div class="text-[20px]">选择项目：</div>
        <div>
          <NSelect :options="optionsProject" class="w-40" />
        </div>
      </div>
      <NButton type="info" @click="showModalAdd = true">新增分佣配置</NButton>
    </div>
    <div>
      <div class="ml-8 mt-3 text-[20px]">签约业绩提成配置表</div>
      <NDataTable
        :bordered="false"
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :single-line="false"
      />
    </div>
    <NModal v-model:show="showModalAdd">
      <NCard
        :bordered="false"
        aria-modal="true"
        role="dialog"
        size="huge"
        style="width: 1200px"
        title="新增分佣配置"
      >
        <template #header-extra>
          <Iconremove @click="showModalAdd = false" />
        </template>
        <Add />
      </NCard>
    </NModal>
  </div>
</template>
