<script setup lang="ts">
import { onMounted, ref } from 'vue';

import {
  EchartsUI,
  type EchartsUIType,
  useEcharts,
} from '@vben/plugins/echarts';

const chartContainer = ref<EchartsUIType>();
const { renderEcharts } = useEcharts(chartContainer);

onMounted(() =>
  renderEcharts({
    tooltip: {
      trigger: 'item',
    },
    legend: {
      top: '80%',
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '公寓' },
          { value: 735, name: '商办' },
          { value: 580, name: '商铺' },
          { value: 484, name: '厂房' },
          { value: 300, name: '车位' },
          { value: 300, name: '广告牌' },
          { value: 300, name: '会议室' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }),
);
</script>

<template>
  <EchartsUI ref="chartContainer" />
</template>
