<script setup lang="ts">
import { type Component, ref } from 'vue';
import { defineAsyncComponent } from 'vue';

import { useAnalyticsStore } from './client';
import CustomModal from './components/custom-modal.vue';
import BarChart from './index-charts/bar-chart.vue';
import DoughnutChart from './index-charts/doughnut-chart.vue';
import LineChart from './index-charts/line-chart.vue';
import NightingaleChart from './index-charts/nightingale-chart.vue';

interface analyticsItem {
  title: string;
  desc: string;
  tag: string;
  tagColor: string[];
  btnChartComponent: Component;
  chartComponent?: Component;
  dataComponent?: Component;
}

const analyticsItems: analyticsItem[] = [
  {
    title: '财务台账',
    desc: '财务收款相关报表信息',
    tag: '财务',
    tagColor: ['bg-orange-100', 'text-orange-400'],
    btnChartComponent: LineChart,
    dataComponent: defineAsyncComponent(
      () => import('./financial-ledger/financial-ledger-data.vue'),
    ),
  },
  {
    title: '租赁台账',
    desc: '展示资产项目的周期租赁详情',
    tag: '租赁',
    tagColor: ['bg-green-100', 'text-green-400'],
    btnChartComponent: DoughnutChart,
    chartComponent: defineAsyncComponent(
      () => import('./rental-ledger/rental-ledger-chart.vue'),
    ),
    dataComponent: defineAsyncComponent(
      () => import('./rental-ledger/rental-ledger-data.vue'),
    ),
  },
  {
    title: '欠租欠款',
    desc: '展示资产租赁财务的欠租欠款明细',
    tag: '财务',
    tagColor: ['bg-orange-100', 'text-orange-400'],
    btnChartComponent: NightingaleChart,
    chartComponent: defineAsyncComponent(
      () => import('./rent-arrears/rent-arrears-chart.vue'),
    ),
    dataComponent: defineAsyncComponent(
      () => import('./rent-arrears/rent-arrears-data.vue'),
    ),
  },
  {
    title: '招商数据报表',
    desc: '查看招商明细数据',
    tag: '客户',
    tagColor: ['bg-blue-100', 'text-blue-400'],
    btnChartComponent: BarChart,
    chartComponent: defineAsyncComponent(
      () => import('./merchant-data-analyze/merchant-data-analyze-chart.vue'),
    ),
    dataComponent: defineAsyncComponent(
      () => import('./merchant-data-analyze/merchant-data-analyze-data.vue'),
    ),
  },
  {
    title: '招商客户画像',
    desc: '招商客户用户画像分析',
    tag: '客户',
    tagColor: ['bg-blue-100', 'text-blue-400'],
    btnChartComponent: DoughnutChart,
    chartComponent: defineAsyncComponent(
      () => import('./customer-profile/customer-profile-chart.vue'),
    ),
    dataComponent: defineAsyncComponent(
      () => import('./customer-profile/customer-profile-data.vue'),
    ),
  },
];

const modalRef = ref<InstanceType<typeof CustomModal> | null>();
const viewItem = ref<analyticsItem>();

const store = useAnalyticsStore();
</script>

<template>
  <div class="p-4">
    <CustomModal
      ref="modalRef"
      :chart-component="viewItem?.chartComponent"
      :data-component="viewItem?.dataComponent"
      :project-items="store.projectItems"
      :title="viewItem?.title!"
    />
    <div
      class="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="i in analyticsItems"
        :key="i.title"
        class="card"
        role="button"
        @click="(viewItem = i), modalRef?.openModal()"
      >
        <component :is="i.btnChartComponent" />

        <div class="card-title">
          <h3>{{ i.title }}</h3>

          <span :class="i.tagColor" class="card-tag">
            {{ i.tag }}
          </span>
        </div>

        <div class="card-desc">
          {{ i.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  @apply p-4;
  @apply bg-white dark:bg-gray-500/20;
  @apply rounded-lg;
  @apply flex flex-col gap-2;
  @apply transition;
}

.card:hover {
  @apply shadow-lg;
}

.card-title {
  @apply flex items-center gap-4;
}

.card-title > h3 {
  @apply font-semibold;
}

.card-tag {
  @apply px-2 py-1;
  @apply text-xs;
}

.card-desc {
  @apply text-xs;
  @apply text-gray-400;
}
</style>
