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
    legend: {
      top: '5%',
      left: 'center',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048 },
          { value: 735 },
          { value: 580 },
          { value: 484 },
          { value: 300 },
        ],
      },
    ],
  });
});
</script>

<template>
  <EchartsUI ref="chartContainer" />
</template>
