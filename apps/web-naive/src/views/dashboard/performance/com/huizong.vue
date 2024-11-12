<script lang="ts" setup>
import type { DataTableColumns, DataTableInst } from 'naive-ui';

import { ref } from 'vue';

import { Icondownload, Iconsearch } from '@vben/icons';

import { NDataTable, NDatePicker, NInput } from 'naive-ui';

interface Song {
  index: string;
  commissionPerson: string;
  commissionPosition: string;
  property: string;
  longTermRent: number;
  longTermCommission: number;
  shortTermRent: number;
  shortTermCommission: number;
  contractArea: number;
  contractAreaCommission: number;
  commissionTargetCompletionTime: string;
  deductionTotal: number;
  totalCommission: number;
  paymentTotal: number;
}
const tableRef = ref<DataTableInst>();
const data = ref<Song[]>([
  {
    index: '1',
    commissionPerson: '哈哈',
    property: 'xxx项目65',
    longTermCommission: 100,
    longTermRent: 15_000,
    commissionPosition: '招商专员',
    shortTermCommission: 50,
    shortTermRent: 10_000,
    contractArea: 10_000,
    contractAreaCommission: 50,
    commissionTargetCompletionTime: '2023-03-01',
    deductionTotal: 2000,
    paymentTotal: 5000,
    totalCommission: 10_000,
  },
  {
    index: '2',
    commissionPerson: '嘻嘻',
    property: 'xxx项目65',
    longTermCommission: 100,
    longTermRent: 15_000,
    commissionPosition: '招商经理',
    shortTermCommission: 50,
    shortTermRent: 10_000,
    contractArea: 10_000,
    contractAreaCommission: 50,
    commissionTargetCompletionTime: '2023-03-01',
    deductionTotal: 2000,
    paymentTotal: 5000,
    totalCommission: 10_000,
  },
]);
const pagination = {
  pageSize: 10, // 每页显示条目个数
  page: 1, // 当前页码
  total: 100, // 总条目个数
};
const columns: DataTableColumns = [
  {
    title: '序号',
    key: 'index',
    align: 'center',
  },
  {
    title: '分佣人员',
    align: 'center',
    key: 'commissionPerson',
  },
  {
    title: '分佣职务',
    align: 'center',
    key: 'commissionPosition',
  },
  {
    title: '房源',
    align: 'center',
    key: 'property',
  },
  {
    title: '行业内/商业',
    key: 'industry',
    align: 'center',
    children: [
      {
        title: '3年以上(首月租金)',
        key: 'longTermRent',
        align: 'center',
      },
      {
        title: '提成比例',
        key: 'longTermCommission',
        align: 'center',
      },
      {
        title: '3年以内(首月租金)',
        key: 'shortTermRent',
        align: 'center',
      },
      {
        title: '提成比例',
        key: 'shortTermCommission',
        align: 'center',
      },
    ],
  },
  {
    title: '行业外',
    key: 'outsideIndustry',
    align: 'center',
    children: [
      {
        title: '签约面积',
        align: 'center',
        key: 'contractArea',
      },
      {
        title: '提成比例',
        align: 'center',
        key: 'contractAreaCommission',
      },
    ],
  },
  {
    title: '提成目标完成时间',
    align: 'center',
    key: 'commissionTargetCompletionTime',
  },
  {
    title: '租赁总提成',
    align: 'center',
    key: 'totalCommission',
  },
  {
    title: '扣除总额',
    align: 'center',
    key: 'deductionTotal',
  },
  {
    title: '此次发放总额',
    key: 'paymentTotal',
    align: 'center',
  },
];
const aaa = () => {
  const obj: Song = {
    index: '1',
    commissionPerson: '哈哈',
    property: 'xxx项目65',
    longTermCommission: 100,
    longTermRent: 15_000,
    commissionPosition: '招商专员',
    shortTermCommission: 50,
    shortTermRent: 10_000,
    contractArea: 10_000,
    contractAreaCommission: 50,
    commissionTargetCompletionTime: '2023-03-01',
    deductionTotal: 2000,
    paymentTotal: 5000,
    totalCommission: 10_000,
  };
  let longTermCommission = 0;
  let longTermRent = 0;
  let shortTermCommission = 0;
  let shortTermRent = 0;
  let contractArea = 0;
  let contractAreaCommission = 0;
  let deductionTotal = 0;
  let paymentTotal = 0;
  let totalCommission = 0;

  data.value.forEach((item) => {
    for (const itemKey in item) {
      switch (itemKey) {
        case 'contractArea': {
          contractArea += item.contractArea;
          break;
        }
        case 'contractAreaCommission': {
          contractAreaCommission += item.contractAreaCommission;
          break;
        }
        case 'deductionTotal': {
          deductionTotal += item.deductionTotal;
          break;
        }
        case 'longTermCommission': {
          longTermCommission += item.longTermCommission;
          break;
        }
        case 'longTermRent': {
          longTermRent += item.longTermRent;
          break;
        }
        case 'paymentTotal': {
          paymentTotal += item.paymentTotal;
          break;
        }
        case 'shortTermCommission': {
          shortTermCommission += item.shortTermCommission;
          break;
        }
        case 'shortTermRent': {
          shortTermRent += item.shortTermRent;
          break;
        }
        case 'totalCommission': {
          totalCommission += item.totalCommission;
          break;
        }
        default: {
          break;
        }
      }
    }
  });
  obj.index = '总计';
  obj.commissionPerson = '-';
  obj.property = '-';
  obj.longTermCommission = longTermCommission;
  obj.longTermRent = longTermRent;
  obj.commissionPosition = '-';
  obj.shortTermCommission = shortTermCommission;
  obj.shortTermRent = shortTermRent;
  obj.contractArea = contractArea;
  obj.contractAreaCommission = contractAreaCommission;
  obj.commissionTargetCompletionTime = '-';
  obj.deductionTotal = deductionTotal;
  obj.paymentTotal = paymentTotal;
  obj.totalCommission = totalCommission;
  data.value.push(obj);
};
aaa();
const exportSorterAndFilterCsv = () =>
  tableRef.value?.downloadCsv({
    fileName: 'sorter-filter',
    keepOriginalData: false,
  });
</script>

<template>
  <div class="mb-8 ml-6 text-[18px]">租赁提成汇总</div>
  <div class="flex items-center justify-between">
    <div class="flex items-center justify-center">
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
  <NDataTable
    ref="tableRef"
    :bordered="false"
    :columns="columns"
    :data="data"
    :pagination="pagination"
  />
</template>
