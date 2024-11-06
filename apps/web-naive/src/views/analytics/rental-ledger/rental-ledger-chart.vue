<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '@vben/plugins/echarts';

import { rentalLedgerByProjectDataRef } from './client';

const pieChartContainer = ref<EchartsUIType>();
const lineChartContainer = ref<EchartsUIType>();
const pieEcharts = useEcharts(pieChartContainer);
const lineEcharts = useEcharts(lineChartContainer);

const pieSerieData = computed(() => {
  const data = rentalLedgerByProjectDataRef.value;

  const sortedData = data
    .map((item) => ({
      value: Number.parseFloat(item.occupancyRate.replace('%', '')) / 100,
      name: item.projectName,
    }))
    .sort((a, b) => b.value - a.value) // 按值降序排序
    .slice(0, 6); // 取前6个占比大的项目

  return sortedData;
});

// 续签判断模糊，暂时不做
// const lineSerieDataOfStart = computed(() => {});
// const lineSerieDataOfEnd = computed(() => {});
// const lineSerieDataOfRenew = computed(() => {});

onMounted(() => {
  pieEcharts.renderEcharts({
    title: {
      text: '项目各自出租率对比',
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
        data: pieSerieData.value,
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
      text: '选择周期的租赁情况',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['新签', '退租', '续签'],
      bottom: 'bottom',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '新签',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: '退租',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: '续签',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410],
      },
    ],
  });
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-full">
      <EchartsUI ref="pieChartContainer" />
    </div>

    <div class="w-full">
      <EchartsUI ref="lineChartContainer" />
    </div>
  </div>
</template>
