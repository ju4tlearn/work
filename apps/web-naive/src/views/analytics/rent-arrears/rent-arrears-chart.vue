<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '@vben/plugins/echarts';

import { useAnalyticsStore } from '../client';
import { rentArrearsDataRef } from './client';

const store = useAnalyticsStore();

const arrearsPieChartContainer = ref<EchartsUIType>();
// 判断模糊，暂时不做
// 展示名称变为了客户，其他同上
// const arrearsCustomerChartContainer = ref<EchartsUIType>();
const arrearsLineChartContainer = ref<EchartsUIType>();
const pieEcharts = useEcharts(arrearsPieChartContainer);
const lineEcharts = useEcharts(arrearsLineChartContainer);

const sortData = (data: any[], count: number) => {
  return data
    .map((item) => ({
      value: Number(item.arrearsRent),
      name: item.projectName,
    }))
    .sort((a, b) => b.value - a.value) // 按值降序排序
    .slice(0, count); // 取前count个占比大的项目
};

const arrearsData = computed(() => {
  const data = rentArrearsDataRef.value;
  return sortData(data, 6);
});
const arrearsLineData = computed(() => {
  const data = rentArrearsDataRef.value;
  return sortData(data, 20);
});

onMounted(() => {
  store.updateProjectItems(rentArrearsDataRef.value);

  pieEcharts.renderEcharts({
    title: {
      text: '项目欠款情况占比',
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
        data: arrearsData.value,
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
      text: '项目逾期欠款金额',
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
        data: arrearsLineData.value.map((item) => item.name),
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
        name: '欠款',
        type: 'bar',
        barWidth: '60%',
        data: arrearsLineData.value,
      },
    ],
  });
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex w-full items-center gap-4">
      <EchartsUI ref="arrearsPieChartContainer" />

      <EchartsUI />
    </div>

    <div class="w-full">
      <EchartsUI ref="arrearsLineChartContainer" />
    </div>
  </div>
</template>
