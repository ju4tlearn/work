import type { DataTableBaseColumn } from 'naive-ui';

import type { FinanceLedgerData } from '../models';

import { reactive, ref } from 'vue';

import {
  getRandomAmount,
  getRandomDate,
  getRandomString,
  useAnalyticsStore,
} from '../client';

const store = useAnalyticsStore();

export const financialLedgerDataRef = ref<FinanceLedgerData[]>([]);

export const projectColumn = reactive<DataTableBaseColumn<FinanceLedgerData>>({
  title: '项目名称',
  key: 'projectName',
  width: 120,
  fixed: 'left',
  filter(value, row) {
    return row.projectName === value;
  },
});

export const contractStartDateColumn = reactive<
  DataTableBaseColumn<FinanceLedgerData>
>({
  title: '合同起始日',
  key: 'contractStartDate',
  width: 150,
  fixed: 'left',
  filter(value, row) {
    if (value === 'week') {
      const currentDate = new Date();
      const currentDay = currentDate.getDay();
      const first =
        currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
      const last = first + 6;
      const firstDay = new Date(currentDate.setDate(first));
      const lastDay = new Date(currentDate.setDate(last));
      return (
        new Date(row.contractStartDate) >= firstDay &&
        new Date(row.contractStartDate) <= lastDay
      );
    }

    if (value === 'month') {
      const currentDate = new Date();
      const firstDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1,
      );
      const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
      );
      return (
        new Date(row.contractStartDate) >= firstDay &&
        new Date(row.contractStartDate) <= lastDay
      );
    }

    if (value === 'year') {
      if (store.checkDateRange) {
        const [start, end] = store.checkDateRange;
        return (
          new Date(row.contractStartDate) >= new Date(start) &&
          new Date(row.contractStartDate) <= new Date(end)
        );
      }
      return false;
    }
    return true;
  },
});

export function initColumns(): DataTableBaseColumn<FinanceLedgerData>[] {
  return [
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
      title: '楼栋号',
      key: 'buildingNo',
      width: 100,
    },
    {
      title: '房间号',
      key: 'roomNo',
      width: 100,
    },
    {
      title: '合同甲方名称',
      key: 'contractPartyName',
      width: 150,
    },
    {
      title: '合同编号',
      key: 'contractNo',
      width: 100,
    },
    {
      title: '客户名称',
      key: 'customerName',
      width: 100,
    },
    {
      title: '签约日期',
      key: 'signingDate',
      width: 150,
    },
    {
      title: '合同面积',
      key: 'contractArea',
      width: 100,
    },
    {
      title: '租金单价',
      key: 'rentPrice',
      width: 100,
    },
    {
      title: '租期（年）',
      key: 'leasePeriod',
      width: 100,
    },
    // contractStartDateColumn,
    {
      title: '合同到期日',
      key: 'contractEndDate',
      width: 150,
    },
    {
      title: '应收履约保证金时间',
      key: 'shouldReceivePerformanceBondDate',
      width: 200,
    },
    {
      title: '应收履约保证金金额',
      key: 'shouldReceivePerformanceBondAmount',
      width: 200,
    },
    {
      title: '已收履约保证金时间',
      key: 'receivedPerformanceBondDate',
      width: 200,
    },
    {
      title: '已收履约保证金金额',
      key: 'receivedPerformanceBondAmount',
      width: 200,
    },
    {
      title: '装修免租期',
      key: 'fitmentRentFreePeriod',
      width: 150,
    },
    {
      title: '合同应收租金总额',
      key: 'contractShouldReceiveRentAmount',
      width: 200,
    },
    {
      title: '租金税率',
      key: 'rentTaxRate',
      width: 100,
    },
    {
      title: '截止当前应收租金金额',
      key: 'shouldReceiveRentAmount',
      width: 200,
    },
    {
      title: '截止当前已收租金金额',
      key: 'receivedRentAmount',
      width: 200,
    },
    {
      title: '截止当前欠缴租金金额',
      key: 'arrearsRentAmount',
      width: 200,
    },
    {
      title: '截止当前开具发票时间',
      key: 'invoiceDate',
      width: 200,
    },
    {
      title: '截止当前已开具发票金额',
      key: 'issuedInvoiceAmount',
      width: 200,
    },
    {
      title: '已开发票对应租金周期',
      key: 'issuedInvoiceRentPeriod',
      width: 200,
    },

    // 斟酌数据预留空位

    {
      title: '租金减免额度（月）',
      key: 'rentReductionAmount',
      width: 200,
    },
    {
      title: '租金减免总金额（元）',
      key: 'rentReductionTotalAmount',
      width: 200,
    },
    {
      title: '租金减免应冲减收入（元）',
      key: 'rentReductionShouldOffsetIncome',
      width: 200,
    },
    {
      title: '租金减免冲减收入（元）',
      key: 'rentReductionOffsetIncome',
      width: 200,
    },
    {
      title: '提前退租时间',
      key: 'earlyTerminationDate',
      width: 150,
    },
    {
      title: '提前退租收取违约金应确认收入（元）',
      key: 'earlyTerminationShouldConfirmIncome',
      width: 300,
    },
    {
      title: '提前退租收取违约金已确认收入（元）',
      key: 'earlyTerminationConfirmedIncome',
      width: 300,
    },
    {
      title: '合同是否在执行中',
      key: 'isContractExecuting',
      width: 200,
    },
    {
      title: '解除合同时间',
      key: 'contractTerminationDate',
      width: 150,
    },
  ];
}

export const generateFinancialLedgerData = (): FinanceLedgerData => {
  const currentDate = new Date();
  const startDate = new Date(currentDate.getFullYear(), 0, 1); // 今年1月1日
  const endDate = currentDate; // 当前日期

  return {
    projectName: `项目${getRandomString('', 1)}`, // 项目名称例如：项目a, 项目b
    installment: (Math.floor(Math.random() * 12) + 1).toString(), // 随机一期至12期
    buildingNo: (Math.floor(Math.random() * 10) + 1).toString(), // 随机楼栋号 1-10
    roomNo: (Math.floor(Math.random() * 900) + 100).toString(), // 随机房间号 100-999
    contractPartyName: `甲方${getRandomString('', 1)}`, // 甲方名称例如：甲方a, 甲方b
    contractNo: `HT${getRandomString('A', 3)}`, // 合同编号例如：HTABC
    customerName: `客户${getRandomString('', 1)}`, // 客户名称例如：客户a, 客户b
    signingDate: getRandomDate(startDate, endDate), // 随机签约日期
    contractArea: (Math.random() * 150 + 50).toFixed(2), // 随机合同面积 50-200 平方米
    rentPrice: getRandomAmount(5, 50), // 随机租金价格 5-50
    leasePeriod: (Math.floor(Math.random() * 5) + 1).toString(), // 租期1-5年
    contractStartDate: getRandomDate(startDate, endDate), // 随机合同开始日期
    contractEndDate: getRandomDate(startDate, endDate), // 随机合同结束日期
    shouldReceivePerformanceBondDate: getRandomDate(startDate, endDate), // 保证金应收日期
    shouldReceivePerformanceBondAmount: getRandomAmount(100, 5000), // 保证金应收金额
    receivedPerformanceBondDate: getRandomDate(startDate, endDate), // 已收保证金日期
    receivedPerformanceBondAmount: getRandomAmount(100, 5000), // 已收保证金金额
    fitmentRentFreePeriod: Math.floor(Math.random() * 4).toString(), // 装修免租期 0-3个月
    contractShouldReceiveRentAmount: getRandomAmount(1000, 5000), // 合同应收租金金额
    rentTaxRate: (Math.random() * 0.2).toFixed(2), // 随机租金税率 0-20%
    shouldReceiveRentAmount: getRandomAmount(1000, 5000), // 应收租金金额
    receivedRentAmount: getRandomAmount(1000, 5000), // 已收租金金额
    arrearsRentAmount: getRandomAmount(0, 1000), // 欠租金额
    invoiceDate: getRandomDate(startDate, endDate), // 发票日期
    issuedInvoiceAmount: getRandomAmount(100, 10_000), // 开具发票金额
    issuedInvoiceRentPeriod: (Math.floor(Math.random() * 12) + 1).toString(), // 发票租期 1-12月
    rentReductionAmount: getRandomAmount(0, 500), // 租金减免金额
    rentReductionTotalAmount: getRandomAmount(0, 500), // 租金减免总额
    rentReductionShouldOffsetIncome: getRandomAmount(0, 500), // 租金减免应冲销收入
    rentReductionOffsetIncome: getRandomAmount(0, 500), // 租金减免已冲销收入
    earlyTerminationDate: getRandomDate(startDate, endDate), // 提前终止日期
    earlyTerminationShouldConfirmIncome: getRandomAmount(0, 1000), // 提前终止应确认收入
    earlyTerminationConfirmedIncome: getRandomAmount(0, 1000), // 提前终止已确认收入
    isContractExecuting: Math.random() < 0.5 ? '是' : '否', // 随机合同是否执行
    contractTerminationDate: getRandomDate(startDate, endDate), // 合同终止日期
  };
};

// 模拟请求数据
export const generateFinancialLedgerDataList = (count: number) => {
  const data: FinanceLedgerData[] = [];
  for (let i = 0; i < count; i++) {
    data.push(generateFinancialLedgerData());
  }
  financialLedgerDataRef.value = data;
};

generateFinancialLedgerDataList(50);
store.updateProjectItems(financialLedgerDataRef.value);
