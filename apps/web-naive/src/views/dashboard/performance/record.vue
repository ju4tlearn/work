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
import Change from '#/views/dashboard/performance/com/slot-change.vue';

const router = useRouter();
const show = ref<boolean>(false);
const show2 = ref<boolean>(false);
const show3 = ref<boolean>(false);
const showModalAdd = ref(false);
const showModalChange = ref(false);
const result = ref({});
const rowItem = ref();
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
    render(row: any) {
      if (row.status === 0) {
        return [
          h(
            NButton,
            {
              text: true,
              style: { color: 'blue' },
              class: 'mr-3',
              onClick: () => {
                result.value = row;
                showModalChange.value = true;
              },
            },
            '编辑',
          ),

          h(
            NButton,
            {
              text: true,
              style: { color: 'red' },
              onClick: () => {
                rowItem.value = row;
                show2.value = true;
              },
            },
            '禁用',
          ),
        ];
      } else {
        return row.show1
          ? [
              h(
                NButton,
                {
                  text: true,
                  style: { color: 'blue' },
                  class: 'mr-3',
                  onClick: () => {
                    result.value = row;
                    showModalChange.value = true;
                  },
                },
                '编辑',
              ),

              h(
                NButton,
                {
                  text: true,
                  style: { color: 'red' },
                  onClick: () => {
                    rowItem.value = row;
                    show2.value = true;
                  },
                },
                '禁用',
              ),
            ]
          : [
              h(
                NButton,
                {
                  text: true,
                  style: { color: 'blue' },
                  class: 'mr-3',
                  onClick: () => {
                    result.value = row;
                    showModalChange.value = true;
                  },
                },
                '编辑',
              ),

              h(
                NButton,
                {
                  text: true,
                  style: { color: 'red' },
                  onClick: () => {
                    rowItem.value = row;
                    show3.value = true;
                  },
                },
                '启用',
              ),
            ];
      }
    },
  },
];
const data = ref([
  {
    status: 0,
    show: true,
    standard: '全民营销',
    industry: '行业内',
    type: '新签',
    time: '1年≤x＜2年',
  },
  {
    status: 0,
    show: true,
    standard: '自主招商',
    industry: '行业内',
    type: '新签',
    time: '＜1年',
  },
  {
    status: 0,
    show: true,
    standard: '产业合作部网络渠道',
    industry: '行业外',
    type: '新签',
    time: '≥3年',
  },
]);
const ClickOk1 = () => {
  rowItem.value.status = 1;
  rowItem.value.show1 = false;
  show2.value = false;
};
const ClickNo1 = () => {
  show2.value = false;
};
const ClickOk2 = () => {
  rowItem.value.status = 0;
  rowItem.value.show1 = true;
  show3.value = false;
};
const ClickNo2 = () => {
  show3.value = false;
};
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
        <div class="mt-10 flex w-full justify-center">
          <NButton
            class="mr-3"
            tertiary
            type="info"
            @click="showModalAdd = false"
          >
            取消
          </NButton>
          <NButton class="ml-3" type="info" @click="showModalAdd = false">
            确认
          </NButton>
        </div>
      </NCard>
    </NModal>
    <NModal v-model:show="showModalChange">
      <NCard
        :bordered="false"
        aria-modal="true"
        role="dialog"
        size="huge"
        style="width: 1200px"
        title="新增分佣配置"
      >
        <Change :data="result" />
        <div class="mt-10 flex w-full justify-center">
          <NButton
            class="mr-3"
            tertiary
            type="info"
            @click="showModalChange = false"
          >
            取消
          </NButton>
          <NButton class="ml-3" type="info" @click="showModalChange = false">
            确认
          </NButton>
        </div>
      </NCard>
    </NModal>
    <NModal v-model:show="show2" style="width: 600px; background-color: white">
      <div>
        <div class="text-[18px]">确定要禁用该分佣配置吗？</div>

        <div class="mt-10 flex w-full justify-end">
          <NButton class="mr-3" tertiary type="info" @click="ClickNo1">
            取消
          </NButton>
          <NButton class="ml-3" type="info" @click="ClickOk1"> 确认 </NButton>
        </div>
      </div>
    </NModal>
    <NModal v-model:show="show3" style="width: 600px; background-color: white">
      <div>
        <div class="text-[18px]">确定要启用该分佣配置吗？</div>

        <div class="mt-10 flex w-full justify-end">
          <NButton class="mr-3" tertiary type="info" @click="ClickNo2">
            取消
          </NButton>
          <NButton class="ml-3" type="info" @click="ClickOk2"> 确认 </NButton>
        </div>
      </div>
    </NModal>
  </div>
</template>
