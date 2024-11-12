<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '@vben/plugins/echarts';

import { useAnalyticsStore } from '../client';
import {
  merchantDataAnalyzeDataRef,
  merchantDataAnalyzeOwnedOccupancyRateDataRef,
} from './client';

const store = useAnalyticsStore();

onMounted(() =>
  store.updateProjectItems(merchantDataAnalyzeOwnedOccupancyRateDataRef.value),
);

const areaCompletedPieChartContainer = ref<EchartsUIType>();
const areaCompletedLineChartContainer = ref<EchartsUIType>();
const pieEcharts = useEcharts(areaCompletedPieChartContainer);
const lineEcharts = useEcharts(areaCompletedLineChartContainer);

const sortData = (data: any[], count: number) => {
  return data
    .map((item) => ({
      value: Number(item.annualCompletionLeasingArea),
      name: item.projectName,
    }))
    .sort((a, b) => b.value - a.value) // 按值降序排序
    .slice(0, count);
};

const pieData = computed(() => {
  const data = merchantDataAnalyzeDataRef.value;
  return sortData(data, 6);
});

const lineData = computed(() => {
  const data = merchantDataAnalyzeDataRef.value;
  return sortData(data, 20);
});

onMounted(() => {
  pieEcharts.renderEcharts({
    title: {
      text: '项目招商租赁面积完成情况',
      subtext: '取前6个占比大的项目',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      bottom: 'bottom',
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        data: pieData.value,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  });

  lineEcharts.renderEcharts({
    title: {
      text: '项目招商租赁面积完成情况',
      subtext: '取前20个占比大的项目',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: lineData.value.map((item) => item.name),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '面积',
        type: 'bar',
        barWidth: '60%',
        data: lineData.value,
      },
    ],
  });
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-full">
      <EchartsUI ref="areaCompletedPieChartContainer" />
    </div>

    <div class="w-full">
      <EchartsUI ref="areaCompletedLineChartContainer" />
    </div>
  </div>
</template>
