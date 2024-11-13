import type { DataTableColumn } from 'naive-ui';

import type {
  MerchantDataAnalyzeData,
  MerchantDataAnalyzeOwnedOccupancyRateData,
} from '../models';

import { ref } from 'vue';

import { getRandomString, projectColumn, safeAccess } from '../client';

export const merchantDataAnalyzeDataRef = ref<MerchantDataAnalyzeData[]>([]);
export const merchantDataAnalyzeOwnedOccupancyRateDataRef = ref<
  MerchantDataAnalyzeOwnedOccupancyRateData[]
>([]);

export const byAnalyzeDataColumns =
  (): DataTableColumn<MerchantDataAnalyzeData>[] => [
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
      title: '年度任务之租赁面积 (m2)',
      key: 'annualLeasingArea',
      width: 200,
    },
    {
      title: '年度任务之租赁回款 (万元)',
      key: 'annualLeasingReturn',
      width: 200,
    },
    {
      title: '年度完成之租赁面积 (m2)',
      key: 'annualCompletionLeasingArea',
      width: 200,
    },
    {
      title: '年度完成情况之租赁面积占比 (%)',
      key: 'annualCompletionLeasingAreaPercentage',
      width: 250,
    },
    {
      title: '年度完成情况之租赁回款 (万元)',
      key: 'annualCompletionLeasingReturn',
      width: 250,
    },
    {
      title: '年度完成情况之租赁回款占比 (%)',
      key: 'annualCompletionLeasingReturnPercentage',
      width: 250,
    },
    {
      title: '第一季度目标之租赁面积 (m2)',
      key: 'firstQuarterLeasingAreaTarget',
      width: 250,
    },
    {
      title: '第一季度目标之租赁回款 (万元)',
      key: 'firstQuarterLeasingReturnTarget',
      width: 250,
    },
    {
      title: '第一季度完成情况之租赁面积 (m2)',
      key: 'firstQuarterCompletionLeasingArea',
      width: 250,
    },
    {
      title: '第一季度完成情况之租赁面积占比 (%)',
      key: 'firstQuarterCompletionLeasingAreaPercentage',
      width: 300,
    },
    {
      title: '第一季度完成情况之租赁回款 (万元)',
      key: 'firstQuarterCompletionLeasingReturn',
      width: 300,
    },
    {
      title: '第一季度完成情况之租赁回款占比 (%)',
      key: 'firstQuarterCompletionLeasingReturnPercentage',
      width: 300,
    },
    {
      title: '第二季度目标之租赁面积 (m2)',
      key: 'secondQuarterLeasingAreaTarget',
      width: 250,
    },
    {
      title: '第二季度目标之租赁回款 (万元)',
      key: 'secondQuarterLeasingReturnTarget',
      width: 250,
    },
    {
      title: '第二季度完成情况之租赁面积 (m2)',
      key: 'secondQuarterCompletionLeasingArea',
      width: 250,
    },
    {
      title: '第二季度完成情况之租赁面积占比 (%)',
      key: 'secondQuarterCompletionLeasingAreaPercentage',
      width: 300,
    },
    {
      title: '第二季度完成情况之租赁回款 (万元)',
      key: 'secondQuarterCompletionLeasingReturn',
      width: 300,
    },
    {
      title: '第二季度完成情况之租赁回款占比 (%)',
      key: 'secondQuarterCompletionLeasingReturnPercentage',
      width: 300,
    },
    {
      title: '第三季度目标之租赁面积 (m2)',
      key: 'thirdQuarterLeasingAreaTarget',
      width: 250,
    },
    {
      title: '第三季度目标之租赁回款 (万元)',
      key: 'thirdQuarterLeasingReturnTarget',
      width: 250,
    },
    {
      title: '第三季度完成情况之租赁面积 (m2)',
      key: 'thirdQuarterCompletionLeasingArea',
      width: 250,
    },
    {
      title: '第三季度完成情况之租赁面积占比 (%)',
      key: 'thirdQuarterCompletionLeasingAreaPercentage',
      width: 300,
    },
    {
      title: '第三季度完成情况之租赁回款 (万元)',
      key: 'thirdQuarterCompletionLeasingReturn',
      width: 300,
    },
    {
      title: '第三季度完成情况之租赁回款占比 (%)',
      key: 'thirdQuarterCompletionLeasingReturnPercentage',
      width: 300,
    },
    {
      title: '第四季度目标之租赁面积 (m2)',
      key: 'fourthQuarterLeasingAreaTarget',
      width: 250,
    },
    {
      title: '第四季度目标之租赁回款 (万元)',
      key: 'fourthQuarterLeasingReturnTarget',
      width: 250,
    },
    {
      title: '第四季度完成情况之租赁面积 (m2)',
      key: 'fourthQuarterCompletionLeasingArea',
      width: 250,
    },
    {
      title: '第四季度完成情况之租赁面积占比 (%)',
      key: 'fourthQuarterCompletionLeasingAreaPercentage',
      width: 300,
    },
    {
      title: '第四季度完成情况之租赁回款 (万元)',
      key: 'fourthQuarterCompletionLeasingReturn',
      width: 300,
    },
    {
      title: '第四季度完成情况之租赁回款占比 (%)',
      key: 'fourthQuarterCompletionLeasingReturnPercentage',
      width: 300,
    },
  ];

export const byRateDataColumns =
  (): DataTableColumn<MerchantDataAnalyzeOwnedOccupancyRateData>[] => [
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
      title: '可租面积 (m2)',
      key: 'availableArea',
      width: 350,
    },
    {
      title: '出租率目标 (%)',
      key: 'occupancyRateTarget',
      width: 350,
    },
    {
      title: '出租面积目标 (m2)',
      key: 'occupancyAreaTarget',
      width: 350,
    },
    {
      title: '出租面积缺口 (m2)',
      key: 'occupancyAreaGap',
      width: 350,
    },
  ];

const getRandomArea = (min = 50, max = 200) => {
  return Number.parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const getRandomReturn = (min = 10, max = 100) => {
  return Number.parseFloat((Math.random() * (max - min) + min).toFixed(2));
};

const getRandomPercentage = (value: number, total: number) => {
  const percentage = total === 0 ? 0 : (value / total) * 100;
  return `${percentage.toFixed(2)}%`;
};

const generateMerchantDataAnalyzeData = (
  projectName: string,
): MerchantDataAnalyzeData => {
  const quarterlyLeasingAreaTarget = Array.from({ length: 4 }, () =>
    getRandomArea(),
  );
  const quarterlyLeasingReturnTarget = Array.from({ length: 4 }, () =>
    getRandomReturn(),
  );

  const quarterlyCompletionLeasingArea = Array.from({ length: 4 }, () =>
    getRandomArea(),
  );
  const quarterlyCompletionLeasingReturn = Array.from({ length: 4 }, () =>
    getRandomReturn(),
  );

  // 计算年度任务和完成情况总值
  const annualLeasingArea = quarterlyLeasingAreaTarget
    .reduce((acc, area) => acc + area, 0)
    .toFixed(2);
  const annualLeasingReturn = quarterlyLeasingReturnTarget
    .reduce((acc, ret) => acc + ret, 0)
    .toFixed(2);

  const annualCompletionLeasingArea = quarterlyCompletionLeasingArea
    .reduce((acc, area) => acc + area, 0)
    .toFixed(2);
  const annualCompletionLeasingReturn = quarterlyCompletionLeasingReturn
    .reduce((acc, ret) => acc + ret, 0)
    .toFixed(2);

  // 使用安全访问方法访问数组元素
  return {
    projectName,
    annualLeasingArea,
    annualLeasingReturn,
    annualCompletionLeasingArea,
    annualCompletionLeasingAreaPercentage: getRandomPercentage(
      Number.parseFloat(annualCompletionLeasingArea),
      Number.parseFloat(annualLeasingArea),
    ),
    annualCompletionLeasingReturn,
    annualCompletionLeasingReturnPercentage: getRandomPercentage(
      Number.parseFloat(annualCompletionLeasingReturn),
      Number.parseFloat(annualLeasingReturn),
    ),

    // 各季度的目标和完成情况
    firstQuarterLeasingAreaTarget: safeAccess(
      quarterlyLeasingAreaTarget,
      0,
      0,
    ).toFixed(2),
    firstQuarterLeasingReturnTarget: safeAccess(
      quarterlyLeasingReturnTarget,
      0,
      0,
    ).toFixed(2),
    firstQuarterCompletionLeasingArea: safeAccess(
      quarterlyCompletionLeasingArea,
      0,
      0,
    ).toFixed(2),
    firstQuarterCompletionLeasingAreaPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingArea, 0, 0),
      safeAccess(quarterlyLeasingAreaTarget, 0, 0),
    ),
    firstQuarterCompletionLeasingReturn: safeAccess(
      quarterlyCompletionLeasingReturn,
      0,
      0,
    ).toFixed(2),
    firstQuarterCompletionLeasingReturnPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingReturn, 0, 0),
      safeAccess(quarterlyLeasingReturnTarget, 0, 0),
    ),

    secondQuarterLeasingAreaTarget: safeAccess(
      quarterlyLeasingAreaTarget,
      1,
      0,
    ).toFixed(2),
    secondQuarterLeasingReturnTarget: safeAccess(
      quarterlyLeasingReturnTarget,
      1,
      0,
    ).toFixed(2),
    secondQuarterCompletionLeasingArea: safeAccess(
      quarterlyCompletionLeasingArea,
      1,
      0,
    ).toFixed(2),
    secondQuarterCompletionLeasingAreaPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingArea, 1, 0),
      safeAccess(quarterlyLeasingAreaTarget, 1, 0),
    ),
    secondQuarterCompletionLeasingReturn: safeAccess(
      quarterlyCompletionLeasingReturn,
      1,
      0,
    ).toFixed(2),
    secondQuarterCompletionLeasingReturnPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingReturn, 1, 0),
      safeAccess(quarterlyLeasingReturnTarget, 1, 0),
    ),

    thirdQuarterLeasingAreaTarget: safeAccess(
      quarterlyLeasingAreaTarget,
      2,
      0,
    ).toFixed(2),
    thirdQuarterLeasingReturnTarget: safeAccess(
      quarterlyLeasingReturnTarget,
      2,
      0,
    ).toFixed(2),
    thirdQuarterCompletionLeasingArea: safeAccess(
      quarterlyCompletionLeasingArea,
      2,
      0,
    ).toFixed(2),
    thirdQuarterCompletionLeasingAreaPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingArea, 2, 0),
      safeAccess(quarterlyLeasingAreaTarget, 2, 0),
    ),
    thirdQuarterCompletionLeasingReturn: safeAccess(
      quarterlyCompletionLeasingReturn,
      2,
      0,
    ).toFixed(2),
    thirdQuarterCompletionLeasingReturnPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingReturn, 2, 0),
      safeAccess(quarterlyLeasingReturnTarget, 2, 0),
    ),

    fourthQuarterLeasingAreaTarget: safeAccess(
      quarterlyLeasingAreaTarget,
      3,
      0,
    ).toFixed(2),
    fourthQuarterLeasingReturnTarget: safeAccess(
      quarterlyLeasingReturnTarget,
      3,
      0,
    ).toFixed(2),
    fourthQuarterCompletionLeasingArea: safeAccess(
      quarterlyCompletionLeasingArea,
      3,
      0,
    ).toFixed(2),
    fourthQuarterCompletionLeasingAreaPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingArea, 3, 0),
      safeAccess(quarterlyLeasingAreaTarget, 3, 0),
    ),
    fourthQuarterCompletionLeasingReturn: safeAccess(
      quarterlyCompletionLeasingReturn,
      3,
      0,
    ).toFixed(2),
    fourthQuarterCompletionLeasingReturnPercentage: getRandomPercentage(
      safeAccess(quarterlyCompletionLeasingReturn, 3, 0),
      safeAccess(quarterlyLeasingReturnTarget, 3, 0),
    ),
  };
};

const generateMerchantDataAnalyzeOwnedOccupancyRateData = (
  projectName: string,
): MerchantDataAnalyzeOwnedOccupancyRateData => {
  const availableArea = getRandomArea(100, 600); // 可租面积设定在100到600平方米之间
  const occupancyRateTargetValue = getRandomReturn(50, 95); // 出租率目标设定在50%到95%
  const occupancyRateTarget = `${occupancyRateTargetValue.toFixed(2)}%`;

  // 根据出租率目标计算出租面积目标
  const occupancyAreaTarget = (
    availableArea *
    (occupancyRateTargetValue / 100)
  ).toFixed(2);

  // 计算出租面积缺口，确保不超过出租面积目标的 30%
  const occupancyAreaGapValue =
    occupancyAreaTarget === '0.00'
      ? 0
      : Math.min(
          getRandomArea(0, Number.parseFloat(occupancyAreaTarget) * 0.3),
          Number.parseFloat(occupancyAreaTarget),
        );
  const occupancyAreaGap = occupancyAreaGapValue.toFixed(2);

  return {
    projectName,
    availableArea: availableArea.toFixed(2),
    occupancyRateTarget,
    occupancyAreaTarget,
    occupancyAreaGap,
  };
};

// 模拟请求
const fetchData = (count: number) => {
  const projectNameItems = Array.from(
    { length: count },
    () => `项目${getRandomString('', 1)}`,
  );

  const analyzeData: MerchantDataAnalyzeData[] = [];
  const rateData: MerchantDataAnalyzeOwnedOccupancyRateData[] = [];
  for (const projectName of projectNameItems) {
    analyzeData.push(generateMerchantDataAnalyzeData(projectName));
    rateData.push(
      generateMerchantDataAnalyzeOwnedOccupancyRateData(projectName),
    );
  }

  merchantDataAnalyzeDataRef.value = analyzeData;
  merchantDataAnalyzeOwnedOccupancyRateDataRef.value = rateData;
};

fetchData(50);
