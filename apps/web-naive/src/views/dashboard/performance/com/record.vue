<script lang="ts" setup>
import type { DataTableColumns, DataTableInst } from 'naive-ui';

import { ref } from 'vue';

import { Icondownload, Iconsearch } from '@vben/icons';

import { NDataTable, NInput, NSelect } from 'naive-ui';

const tableRef = ref<DataTableInst>();
const pagination = {
  pageSize: 10, // 每页显示条目个数
  page: 1, // 当前页码
  total: 100, // 总条目个数
};
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
const optionsProjectDimension = [
  {
    label: '按房源',
    value: '1',
  },
  {
    label: '按分佣人员',
    value: '2',
  },
];
const columnsProperty: DataTableColumns = [
  {
    title: '序号',
    key: 'index',
    align: 'center',
  },
  {
    title: '房源信息',
    align: 'center',
    key: 'property',
  },
  {
    title: '合同周期',
    align: 'center',
    key: 'Duration',
  },
  {
    title: '总提成金额（元）',
    align: 'center',
    key: 'Total',
  },
  {
    title: '已发放提成金额（元）',
    align: 'center',
    key: 'Distributed',
  },
  {
    title: '最近发放时间',
    key: 'Date',
    align: 'center',
  },
];
const columnsDimension: DataTableColumns = [
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
    title: '房源信息',
    align: 'center',
    key: 'property',
  },
  {
    title: '合同周期',
    align: 'center',
    key: 'Duration',
  },
  {
    title: '总提成金额（元）',
    align: 'center',
    key: 'Total',
  },
  {
    title: '扣除总额',
    align: 'center',
    key: 'deductionTotal',
  },
  {
    title: '已发放提成金额（元）',
    align: 'center',
    key: 'Distributed',
  },
  {
    title: '最近发放时间',
    key: 'Date',
    align: 'center',
  },
];
const dataProperty = ref([
  {
    index: '1',
    property: '武汉市洪山区万科1期B1栋1401',
    Duration: '2023-01-01 ~ 2023-12-31',
    Total: 5000,
    Distributed: 5000,
    Date: '2023-02-01',
  },
  {
    index: '2',
    property: '武汉市洪山区万科1期B1栋1401',
    Duration: '2023-01-01 ~ 2023-12-31',
    Total: 5000,
    Distributed: 5000,
    Date: '2023-02-01',
  },
]);
const dataDimension = ref([
  {
    index: '1',
    commissionPerson: '嘻嘻',
    commissionPosition: '招商经理',
    deductionTotal: 2000,
    property: '武汉市洪山区万科1期B1栋1401',
    Duration: '2023-01-01 ~ 2023-12-31',
    Total: 5000,
    Distributed: 5000,
    Date: '2023-02-01',
  },
  {
    index: '2',
    commissionPerson: '哈哈',
    commissionPosition: '招商主管',
    deductionTotal: 20,
    property: '武汉市洪山区万科1期B1栋1401',
    Duration: '2023-01-01 ~ 2023-12-31',
    Total: 5000,
    Distributed: 5000,
    Date: '2023-02-01',
  },
]);
const columns = ref(columnsProperty);
const data = ref<any>(dataDimension);
const aaa = () => {
  const obj = {
    index: '1',
    property: '武汉市洪山区万科1期B1栋1401',
    Duration: '2023-01-01 ~ 2023-12-31',
    Total: 5000,
    Distributed: 5000,
    Date: '2023-02-01',
  };
  let Total = 0;
  let Distributed = 0;

  dataProperty.value.forEach((item) => {
    for (const itemKey in item) {
      switch (itemKey) {
        case 'Distributed': {
          Distributed += item.Distributed;
          break;
        }
        case 'Total': {
          Total += item.Total;
          break;
        }
        default: {
          break;
        }
      }
    }
  });
  obj.index = '总计';
  obj.property = '-';
  obj.Duration = '-';
  obj.Date = '-';
  obj.Total = Total;
  obj.Distributed = Distributed;
  dataProperty.value.push(obj);
};
aaa();
const bbb = () => {
  const obj = {
    index: '1',
    property: '武汉市洪山区万科1期B1栋1401',
    Duration: '2023-01-01 ~ 2023-12-31',
    Total: 5000,
    Distributed: 5000,
    Date: '2023-02-01',
    commissionPerson: '嘻嘻',
    commissionPosition: '招商经理',
    deductionTotal: 2000,
  };
  let Total = 0;
  let Distributed = 0;
  let deductionTotal = 0;

  dataDimension.value.forEach((item) => {
    for (const itemKey in item) {
      switch (itemKey) {
        case 'deductionTotal': {
          deductionTotal += item.deductionTotal;
          break;
        }
        case 'Distributed': {
          Distributed += item.Distributed;
          break;
        }
        case 'Total': {
          Total += item.Total;
          break;
        }
        default: {
          break;
        }
      }
    }
  });
  obj.index = '总计';
  obj.property = '-';
  obj.Duration = '-';
  obj.Date = '-';
  obj.Total = Total;
  obj.commissionPerson = '-';
  obj.commissionPosition = '-';
  obj.Distributed = Distributed;
  obj.deductionTotal = deductionTotal;
  dataDimension.value.push(obj);
};
bbb();
const exportSorterAndFilterCsv = () =>
  tableRef.value?.downloadCsv({
    fileName: 'sorter-filter',
    keepOriginalData: false,
  });
const Clickchange = (value: string) => {
  if (value === '1') {
    columns.value = columnsProperty;
  } else if (value === '2') {
    columns.value = columnsDimension;
  }
};
</script>
<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center justify-center">
      <div class="ml-8">
        <div class="text-[20px]">选择项目：</div>
        <div>
          <NSelect :options="optionsProject" class="w-40" />
        </div>
      </div>
      <div class="ml-8">
        <div class="text-[20px]">查看维度：</div>
        <div>
          <NSelect
            :options="optionsProjectDimension"
            class="w-40"
            @update:value="Clickchange"
          />
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
