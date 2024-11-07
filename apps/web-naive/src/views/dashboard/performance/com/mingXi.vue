<script setup lang="ts">
import type { DataTableColumns, DataTableInst } from 'naive-ui';

import { h, ref } from 'vue';

import { Icondownload, Iconremove, Iconsearch } from '@vben/icons';

import {
  NButton,
  NCard,
  NDataTable,
  NDatePicker,
  NInput,
  NModal,
  NSelect,
  useMessage,
} from 'naive-ui';

import Application from '#/views/dashboard/performance/com/slot-application.vue';
import Manage from '#/views/dashboard/performance/com/slot-man.vue';

const tableRef = ref<DataTableInst>();
const optionsProject = [
  {
    label: '不限',
    value: '不限',
  },
  {
    label: '软件新城',
    value: '软件新城',
  },
  {
    label: '创新公寓',
    value: '创新公寓',
  },
];
const showModalManage = ref<boolean>(false);
const showModalApp = ref<boolean>(false);

interface Song {
  id: string;
  companyName: string;
  rentalCommissionStandards: string;
  Industry: string;
  roomNumber: string;
  signingTime: string;
  contractedArea: number;
  contractedPrice: number;
  contractDuration: string;
  rent: number;
  current: number;
  actual: string;
  expected: number;
  received: number;
  name: string;
  totalExpectedCommission: number;
  distributedCommissionAmount: number;
}

function createColumns({
  play,
}: {
  play: (row: Song) => void;
}): DataTableColumns<Song> {
  return [
    {
      title: '序号',
      width: '100px',
      key: 'id',
      align: 'center',
    },
    {
      title: '企业名称',
      key: 'companyName',
      width: '130px',
      align: 'center',
    },
    {
      title: '租赁提成标准',
      key: 'rentalCommissionStandards',
      width: '130px',
      align: 'center',
    },
    {
      title: '所属行业',
      align: 'center',
      key: 'Industry',
      width: '100px',
    },
    {
      title: '房号',
      key: 'roomNumber',
      align: 'center',
      width: '150px',
    },
    {
      title: '签约时间',
      align: 'center',
      width: '200px',
      key: 'signingTime',
    },
    {
      title: '签约面积',
      width: '100px',
      key: 'contractedArea',
      align: 'center',
      render: (row: Song) => `${row.contractedArea}㎡`,
    },
    {
      title: '签约单价',
      key: 'contractedPrice',
      align: 'center',
      width: '100px',
      render: (row: Song) => ` ${row.contractedPrice}元/㎡`,
    },
    {
      title: '合同起止时间',
      width: '200px',
      align: 'center',
      key: 'contractDuration',
    },
    {
      title: '首月租金',
      width: '100px',
      align: 'center',
      key: 'rent',
      render: (row: Song) => `${row.rent}元/月`,
    },
    {
      title: '本次租金回款金额',
      key: 'current',
      align: 'center',
      width: '150px',
      render: (row: Song) => `${row.current}元`,
    },
    {
      title: '实际到账时间',
      key: 'actual',
      width: '200px',
      align: 'center',
    },
    {
      title: '应收押金',
      key: 'expected',
      width: '100px',
      align: 'center',
      render: (row: Song) => `${row.expected}元`,
    },
    {
      title: '实收押金',
      key: 'received',
      align: 'center',
      width: '100px',
      render: (row: Song) => `${row.received}元`,
    },
    {
      title: '招商人员',
      align: 'center',
      key: 'name',
      width: '100px',
    },
    {
      title: '应提成总额',
      align: 'center',
      width: '100px',
      key: 'totalExpectedCommission',
      render: (row: Song) => `${row.totalExpectedCommission}元`,
    },
    {
      title: '已发放提成金额',
      width: '150px',
      align: 'center',
      key: 'distributedCommissionAmount',
      render: (row: Song) => `${row.distributedCommissionAmount}元`,
    },
    {
      title: '操作',
      key: 'actions',
      align: 'center',
      width: '100px',
      render(row: Song) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row),
          },
          { default: () => '发放提成' },
        );
      },
    },
  ];
}

const data = ref<Song[]>([
  {
    id: '1',
    companyName: 'xxx有限公司',
    rentalCommissionStandards: '自主招商',
    Industry: 'xxx行业',
    roomNumber: '武汉市洪山区万科1期B1栋1401',
    signingTime: '2023-02-03',
    contractedArea: 50,
    contractedPrice: 100,
    contractDuration: '2023-01-01~2023-12-31（1年）',
    rent: 5000,
    current: 5000,
    actual: '2023-02-20',
    expected: 10_000,
    received: 10_000,
    name: '黄哈哈',
    totalExpectedCommission: 15_000,
    distributedCommissionAmount: 540,
  },
  {
    id: '2',
    companyName: 'xxx有限公司',
    rentalCommissionStandards: '自主招商',
    Industry: 'xxx行业',
    roomNumber: '武汉市洪山区万科1期B1栋1401',
    signingTime: '2023-02-03',
    contractedArea: 240,
    contractedPrice: 3534,
    contractDuration: '2023-01-01~2023-12-31（1年）',
    rent: 34_235,
    current: 35_223,
    actual: '2023-02-20',
    expected: 2354,
    received: 325,
    name: '黄哈哈',
    totalExpectedCommission: 435,
    distributedCommissionAmount: 2343,
  },
]);
const message = useMessage();
const d = false;
const result = ref({});
const columns = createColumns({
  play(row) {
    if (d) {
      message.info(`不满足发放提成条件，无法操作`);
      event.stopPropagation();
    } else {
      result.value = row;
      showModalApp.value = !showModalApp.value;
      event.stopPropagation();
    }
  },
});
const aaa = () => {
  let contractedArea = 0;
  let rent = 0;
  let current = 0;
  let expected = 0;
  let received = 0;
  let totalExpectedCommission = 0;
  let distributedCommissionAmount = 0;
  let contractedPrice = 0;
  const obj: Song = {
    id: '',
    actual: '',
    expected: 0,
    distributedCommissionAmount: 0,
    totalExpectedCommission: 0,
    name: '',
    contractDuration: '',
    contractedArea: 0,
    contractedPrice: 0,
    current: 0,
    companyName: '',
    received: 0,
    rent: 0,
    rentalCommissionStandards: '',
    roomNumber: '',
    Industry: '',
    signingTime: '',
  };
  data.value.forEach((item: Song) => {
    for (const itemKey in item) {
      switch (itemKey) {
        case 'contractedArea': {
          contractedArea += item.contractedArea;
          break;
        }
        case 'contractedPrice': {
          contractedPrice += item.contractedPrice;
          break;
        }
        case 'current': {
          current += item.current;
          break;
        }
        case 'distributedCommissionAmount': {
          distributedCommissionAmount += item.distributedCommissionAmount;
          break;
        }
        case 'expected': {
          expected += item.expected;
          break;
        }
        case 'received': {
          received += item.received;
          break;
        }
        case 'rent': {
          rent += item.rent;
          break;
        }
        case 'totalExpectedCommission': {
          totalExpectedCommission += item.totalExpectedCommission;
          break;
        }

        default: {
          break;
        }
      }
    }
  });
  obj!.received = received;
  obj!.contractedPrice = contractedPrice;
  obj!.totalExpectedCommission = totalExpectedCommission;
  obj!.distributedCommissionAmount = distributedCommissionAmount;
  obj!.rent = rent;
  obj!.current = current;
  obj!.expected = expected;
  obj!.contractedArea = contractedArea;
  obj!.id = '共计';
  obj!.companyName = '-';
  obj!.name = '-';
  obj!.rentalCommissionStandards = '-';
  obj!.Industry = '-';
  obj!.actual = '-';
  obj!.roomNumber = '-';
  obj!.signingTime = '-';
  obj!.contractDuration = '-';
  data.value.push(obj);
};
aaa();
const pagination = {
  pageSize: 10, // 每页显示条目个数
};

const res = ref({});
const rowProps = (row: any) => {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      showModalManage.value = !showModalManage.value;
      res.value = row;
    },
  };
};
const exportSorterAndFilterCsv = () =>
  tableRef.value?.downloadCsv({
    fileName: 'sorter-filter',
    keepOriginalData: false,
  });
</script>
<template>
  <div class="mb-8 ml-6 text-[18px]">租赁提成明细</div>
  <div class="flex items-center justify-between">
    <div class="flex items-center justify-center">
      <div class="ml-8">
        <div class="text-[20px]">选择项目：</div>
        <div>
          <NSelect :options="optionsProject" class="w-40" />
        </div>
      </div>
      <div class="ml-8">
        <div class="text-[16px]">周期：</div>
        <div class="flex items-center">
          <NDatePicker type="date" />
          <span class="mx-2">至</span>
          <NDatePicker type="date" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <NInput placeholder="搜素信息" round style="width: 300px" type="text" />
      <Iconsearch style="font-size: 25px; color: blue" />
      <Icondownload
        style="font-size: 25px; color: blue"
        @click="exportSorterAndFilterCsv"
      />
    </div>
  </div>
  <div>
    <NDataTable
      ref="tableRef"
      :bordered="false"
      :columns="columns"
      :data="data"
      :pagination="pagination"
      :row-props="rowProps"
      :scroll-x="1800"
      :single-line="false"
    />
  </div>
  <div>
    <NModal v-model:show="showModalManage">
      <NCard
        :bordered="false"
        aria-modal="true"
        role="dialog"
        size="huge"
        style="width: 600px"
        title="房间业绩提成详情"
      >
        <template #header-extra>
          <Iconremove @click="showModalManage = false" />
        </template>
        <Manage :data="res" />
      </NCard>
    </NModal>
    <NModal v-model:show="showModalApp">
      <NCard
        :bordered="false"
        aria-modal="true"
        role="dialog"
        size="huge"
        style="width: 600px"
        title="发放提成"
      >
        <template #header-extra>
          <Iconremove @click="showModalApp = false" />
        </template>
        <Application :data="result" />
        <div class="mt-10 flex w-full justify-center">
          <NButton
            class="mr-3"
            tertiary
            type="info"
            @click="showModalApp = false"
          >
            取消
          </NButton>
          <NButton class="ml-3" type="info" @click="showModalApp = false">
            确认
          </NButton>
        </div>
      </NCard>
    </NModal>
  </div>
</template>
