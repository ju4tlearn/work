<script setup lang="ts">
import { onMounted, ref } from 'vue';

import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '@vben/plugins/echarts';

const chartContainer = ref<EchartsUIType>();
const { renderEcharts } = useEcharts(chartContainer);

onMounted(() => {
  renderEcharts({
    grid: {
      left: '-7%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        show: false,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        show: false,
      },
    ],
    series: [
      {
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  });
});
</script>

<template>
  <EchartsUI ref="chartContainer" />
</template>
