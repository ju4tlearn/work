import type { DataTableBaseColumn } from 'naive-ui';

import type {
  RentalLedgerByProjectData,
  RentalLedgerByRoomData,
} from '../models';

import { ref } from 'vue';

import {
  contractStartDateColumn,
  getRandomAddress,
  getRandomDate,
  getRandomString,
  projectColumn,
} from '../client';

export const rentalLedgerByProjectDataRef = ref<RentalLedgerByProjectData[]>(
  [],
);

export const rentalLedgerByRoomDataRef = ref<RentalLedgerByRoomData[]>([]);

export const byProjectColumns =
  (): DataTableBaseColumn<RentalLedgerByProjectData>[] => [
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
    {
      title: '项目地址',
      key: 'projectAddress',
      width: 200,
    },
    {
      title: '出租率',
      key: 'occupancyRate',
      width: 100,
    },
    {
      title: '退租率',
      key: 'leaseCancellationRate',
      width: 100,
    },
    {
      title: '新增签约面积',
      key: 'addContractArea',
      width: 200,
    },
    {
      title: '新增续租面积',
      key: 'addRenewalArea',
      width: 200,
    },
    {
      title: '新增退租面积',
      key: 'addCancellationArea',
      width: 200,
    },
  ];

export const byRoomColumns =
  (): DataTableBaseColumn<RentalLedgerByRoomData>[] => [
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
      title: '分期',
      key: 'installment',
      width: 100,
    },
    {
      title: '楼栋',
      key: 'buildingNo',
      width: 100,
    },
    {
      title: '层号',
      key: 'floorNo',
      width: 100,
    },
    {
      title: '房号',
      key: 'roomNo',
      width: 100,
    },
    {
      title: '实测面积',
      key: 'actualArea',
      width: 100,
    },
    {
      title: '可租面积',
      key: 'activeArea',
      width: 100,
    },
    {
      title: '已租面积',
      key: 'activatedArea',
      width: 100,
    },
    {
      title: '房源情况',
      key: 'availability',
      width: 100,
    },
    {
      title: '客户名称',
      key: 'customerName',
      width: 100,
    },
    {
      title: '品牌',
      key: 'brand',
      width: 100,
    },
    {
      title: '合同面积',
      key: 'contractArea',
      width: 100,
    },
    {
      title: '签约日期',
      key: 'signingDate',
      width: 150,
    },
    {
      title: '合同到期日',
      key: 'contractEndDate',
      width: 150,
    },
    {
      title: '租期（年）',
      key: 'leasePeriod',
      width: 100,
    },
    {
      title: '免租期',
      key: 'rentFreePeriod',
      width: 100,
    },
    {
      title: '押付方式',
      key: 'paymentMethod',
      width: 100,
    },
    {
      title: '履约保证金',
      key: 'performanceBond',
      width: 100,
    },
    {
      title: '签约单价',
      key: 'signingPrice',
      width: 100,
    },
    {
      title: '招商人员',
      key: 'businessPersonnel',
      width: 100,
    },
    {
      title: '客户渠道',
      key: 'customerChannel',
      width: 100,
    },
    {
      title: '所属行业',
      key: 'industry',
      width: 100,
    },
    {
      title: '备注',
      key: 'remarks',
      width: 100,
    },
  ];

const generateRentalLedgerByProjectData = (
  projectName: string,
): RentalLedgerByProjectData => {
  return {
    projectName,
    projectAddress: getRandomAddress(),
    occupancyRate: `${(Math.random() * 100).toFixed(2)}%`,
    leaseCancellationRate: `${(Math.random() * 100).toFixed(2)}%`,
    addContractArea: (Math.random() * 150 + 50).toFixed(2),
    addRenewalArea: (Math.random() * 150 + 50).toFixed(2),
    addCancellationArea: (Math.random() * 150 + 50).toFixed(2),
  };
};

const generateRentalLedgerByRoomData = (
  projectName: string,
): RentalLedgerByRoomData => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1); // 今年1月1日
  const endDate = currentDate; // 当前日期

  return {
    projectName,
    installment: (Math.floor(Math.random() * 5) + 1).toString(), // 分期 1 - 5
    buildingNo: (Math.floor(Math.random() * 10) + 1).toString(), // 楼栋号 1 - 10
    floorNo: (Math.floor(Math.random() * 10) + 1).toString(), // 层号 1 - 10
    roomNo: (Math.floor(Math.random() * 900) + 100).toString(), // 房号 100 - 999
    actualArea: (Math.random() * 200).toFixed(2), // 实测面积 0 - 200 平方米
    activeArea: (Math.random() * 200).toFixed(2), // 可租面积 0 - 200 平方米
    activatedArea: (Math.random() * 200).toFixed(2), // 已租面积 0 - 200 平方米
    availability: Math.random() < 0.5 ? '可租' : '已租', // 房源情况 随机可租/已租
    customerName: `客户${getRandomString('', 3)}`,
    brand: `品牌${getRandomString('', 2)}`,
    contractArea: (Math.random() * 200).toFixed(2), // 合同面积 0 - 200 平方米
    signingDate: getRandomDate(startDate, endDate),
    contractStartDate: getRandomDate(startDate, endDate),
    contractEndDate: getRandomDate(startDate, endDate),
    leasePeriod: (Math.floor(Math.random() * 5) + 1).toString(), // 租期 1 - 5 年
    rentFreePeriod: (Math.floor(Math.random() * 3) + 1).toString(), // 免租期 1 - 3 个月
    paymentMethod: Math.random() < 0.5 ? '月付' : '季付', // 押付方式 随机月付/季付
    performanceBond: (Math.random() * 1000).toFixed(2), // 履约保证金 0 - 1000 元
    signingPrice: (Math.random() * 100).toFixed(2), // 签约单价 0 - 100 元
    businessPersonnel: `招商员${getRandomString('', 2)}`,
    customerChannel: `渠道${getRandomString('', 2)}`,
    industry: `行业${getRandomString('', 2)}`,
    remarks: `备注${getRandomString('', 5)}`,
  };
};

// 模拟请求
const fetchData = (count: number) => {
  const projectNames = Array.from(
    { length: count },
    () => `项目${getRandomString('', 1)}`,
  );

  const projectData: RentalLedgerByProjectData[] = [];
  const roomData: RentalLedgerByRoomData[] = [];
  for (const projectName of projectNames) {
    projectData.push(generateRentalLedgerByProjectData(projectName));
    roomData.push(generateRentalLedgerByRoomData(projectName));
  }
  rentalLedgerByProjectDataRef.value = projectData;
  rentalLedgerByRoomDataRef.value = roomData;
};

fetchData(50);
