import type { DataTableColumn } from 'naive-ui';

import type { RentArrearsData } from '../models';

import { ref } from 'vue';

import {
  contractStartDateColumn,
  getRandomAmount,
  getRandomDate,
  getRandomString,
  projectColumn,
} from '../client';

export const rentArrearsDataRef = ref<RentArrearsData[]>([]);

export const columns = (): DataTableColumn<RentArrearsData>[] => [
  {
    title: '序号',
    key: 'id',
    width: 80,
    fixed: 'left',
    render(_, index) {
      return index + 1;
    },
  },
  projectColumn,
  contractStartDateColumn,
  {
    title: '房间号',
    key: 'roomNo',
    width: 100,
  },
  {
    title: '客户名称',
    key: 'customerName',
    width: 100,
  },
  {
    title: '合同面积',
    key: 'contractArea',
    width: 100,
  },
  {
    title: '合同到期日',
    key: 'contractEndDate',
    width: 200,
  },
  {
    title: '押金',
    key: 'deposit',
    width: 100,
  },
  {
    title: '应收租金',
    key: 'shouldReceiveRent',
    width: 100,
  },
  {
    title: '实收租金',
    key: 'receivedRent',
    width: 100,
  },
  {
    title: '拖欠租金',
    key: 'arrearsRent',
    width: 100,
  },
  {
    title: '应退日期',
    key: 'shouldReturnDate',
    width: 200,
  },
  {
    title: '逾期天数',
    key: 'overdueDays',
    width: 100,
  },
  {
    title: '催款进度',
    key: 'reminderProgress',
    width: 100,
  },
  {
    title: '措施',
    key: 'measure',
    width: 200,
  },
  {
    title: '备注',
    key: 'remarks',
    width: 200,
  },
];

const generateRentArrearsData = (): RentArrearsData => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1); // 今年1月1日
  const endDate = currentDate; // 当前日期

  return {
    projectName: `项目${getRandomString('', 1)}`,
    roomNo: (Math.floor(Math.random() * 900) + 100).toString(), // 房间号 100-999
    customerName: `客户${getRandomString('', 3)}`,
    contractArea: (Math.random() * 100 + 50).toFixed(2), // 合同面积 50-150 平方米
    contractStartDate: getRandomDate(startDate, endDate),
    contractEndDate: getRandomDate(startDate, endDate),
    deposit: getRandomAmount(500, 5000), // 押金 500-5000 元
    shouldReceiveRent: getRandomAmount(1000, 10_000), // 应收租金 1000-10000 元
    receivedRent: getRandomAmount(500, 10_000), // 实收租金 500-10000 元
    arrearsRent: getRandomAmount(0, 5000), // 拖欠租金 0-5000 元
    shouldReturnDate: getRandomDate(startDate, endDate),
    overdueDays: (Math.floor(Math.random() * 30) + 1).toString(), // 逾期天数 1-30 天
    reminderProgress: Math.random() < 0.5 ? '未催款' : '已催款', // 催款进度
    measure: Math.random() < 0.5 ? '采取法律措施' : '电话催款', // 措施
    remarks: `备注${getRandomString('', 5)}`, // 备注
  };
};

// 模拟数据请求
const fetchData = (count: number) => {
  const data: RentArrearsData[] = [];
  for (let i = 0; i < count; i++) {
    data.push(generateRentArrearsData());
  }
  rentArrearsDataRef.value = data;
};

fetchData(50);
