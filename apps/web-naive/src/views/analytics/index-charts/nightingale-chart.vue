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
    series: [
      {
        type: 'pie',
        radius: [20, 140],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5,
        },
        label: {
          show: false,
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 33, name: 'rose 2' },
          { value: 28, name: 'rose 3' },
          { value: 22, name: 'rose 4' },
          { value: 20, name: 'rose 5' },
          { value: 15, name: 'rose 6' },
          { value: 12, name: 'rose 7' },
          { value: 10, name: 'rose 8' },
        ],
      },
    ],
  });
});
</script>

<template>
  <EchartsUI ref="chartContainer" />
</template>
