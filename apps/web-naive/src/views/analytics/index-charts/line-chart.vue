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
      top: 0,
      left: '-13%',
      right: 0,
      bottom: 0,
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        show: false,
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
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  });
});
</script>

<template>
  <EchartsUI ref="chartContainer" />
</template>
