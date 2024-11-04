<script setup lang="ts">
import type { Component } from 'vue';

import {
  IconParkOutlineRight,
  IcOutlineAdd,
  MaterialSymbolsInfoOutline,
  MdiSettingsOutline,
  MdiUserBox,
} from '@vben/icons';

import Chart from './chart.vue';

interface CommonItem {
  icon: Component;
  text: string;
}

const commonItems: CommonItem[] = [
  {
    icon: MdiUserBox,
    text: '招商管理',
  },
  {
    icon: MdiUserBox,
    text: '资产管理',
  },
  {
    icon: MdiUserBox,
    text: '财务管理',
  },
  {
    icon: MdiUserBox,
    text: '审批管理',
  },
];
</script>

<template>
  <div class="flex flex-col gap-4 overflow-y-auto p-4">
    <div class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-3">
      <div class="card">
        <div class="card-title">
          <h3>常用功能</h3>

          <button>
            <MdiSettingsOutline class="size-4" />
          </button>
        </div>

        <div class="card-content gap-2">
          <button
            v-for="i in commonItems"
            :key="i.text"
            class="flex flex-col items-center gap-1 rounded-sm p-2 transition-colors hover:bg-black/5"
          >
            <component :is="i.icon" class="size-10" />
            <div class="text-xs text-black/75 dark:text-white/75">
              {{ i.text }}
            </div>
          </button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <h3>审批管理</h3>
        </div>

        <div class="card-content h-full !justify-between">
          <div class="flex flex-col items-center gap-2">
            <div class="font-semibold">1</div>
            <div>待我审批</div>
          </div>

          <div class="flex flex-col items-center gap-2">
            <div class="font-semibold">1</div>
            <div>我发起的</div>
          </div>

          <div class="flex flex-col items-center gap-2">
            <div class="font-semibold">4</div>
            <div>抄送我的</div>
          </div>
        </div>
      </div>

      <div class="card row-span-3">
        <div class="card-title">
          <h3>待办事项</h3>

          <div class="flex items-center">
            <a class="flex items-center text-sm" href="#">
              更多
              <IconParkOutlineRight class="size-4" />
            </a>
            <span class="text-gray-400">丨</span>
            <a href="#">
              <IcOutlineAdd class="size-4" />
            </a>
          </div>
        </div>

        <div class="card-content h-full">
          <div class="text-gray-500">暂无数据</div>
        </div>
      </div>

      <div class="card row-span-2">
        <div class="card-title">
          <h3>合约管理</h3>
        </div>

        <div class="card-content h-full flex-col gap-4">
          <div class="flex w-full items-center gap-4">
            <div class="font-semibold">租客合同</div>
            <div class="text-2xl font-semibold text-blue-500">114</div>
            <div>(份)</div>
          </div>

          <div class="flex w-full items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              待签字
              <span>(5)</span>
            </div>

            <div class="flex items-center gap-2">
              在租中
              <span>(1)</span>
            </div>

            <div class="flex items-center gap-2">
              即将搬出
              <span>(4)</span>
            </div>

            <div class="flex items-center gap-2">
              已到期
              <span>(1)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card row-span-2">
        <div class="card-title">
          <h3>租前</h3>
        </div>

        <div class="card-content h-full">
          <div class="grid w-full grid-cols-2 grid-rows-2 gap-8">
            <div class="flex flex-col items-center justify-center gap-2">
              <div class="font-semibold">9</div>
              待入住
            </div>
            <div class="flex flex-col items-center justify-center gap-2">
              <div class="font-semibold">1</div>
              今日预定
            </div>
            <div class="flex flex-col items-center justify-center gap-2">
              <div class="font-semibold">9</div>
              本周预定
            </div>
            <div class="flex flex-col items-center justify-center gap-2">
              <div class="font-semibold">8</div>
              本月预定
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-3">
      <div class="card col-span-1 row-span-1 md:col-span-2 md:row-span-4">
        <div class="card-title">
          <h3>房源管理</h3>
        </div>

        <div class="card-content !grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          <div v-for="i in 6" :key="i" class="flex flex-col gap-2">
            <div class="flex items-center gap-1">
              <div class="text-sm font-semibold">公寓</div>
              <div class="flex items-center gap-8">
                <div class="text-sm">(1145套, 1419间)</div>
                <div class="flex items-center gap-2 text-sm">
                  出租率: 11.45%
                  <MaterialSymbolsInfoOutline class="size-4" />
                </div>
              </div>
            </div>

            <div
              class="grid w-full grid-cols-3 grid-rows-2 gap-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-100/10"
            >
              <div class="flex flex-col items-center gap-2 text-xs">
                <div class="text-sm font-semibold">114</div>
                空置
              </div>
              <div class="flex flex-col items-center gap-2 text-xs">
                <div class="text-sm font-semibold">514</div>
                配置
              </div>
              <div class="flex flex-col items-center gap-2 text-xs">
                <div class="text-sm font-semibold">191</div>
                已租
              </div>
              <div class="flex flex-col items-center gap-2 text-xs">
                <div class="text-sm font-semibold">981</div>
                即将搬入(30天内)
              </div>
              <div class="flex flex-col items-center gap-2 text-xs">
                <div class="text-sm font-semibold">011</div>
                即将搬出(30天内)
              </div>
              <div class="flex flex-col items-center gap-2 text-xs">
                <div class="text-sm font-semibold">451</div>
                已到期
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card row-span-2">
        <div class="card-title">
          <h3>最新公告</h3>

          <div class="flex items-center">
            <a class="flex items-center text-sm" href="#">
              更多
              <IconParkOutlineRight class="size-4" />
            </a>
            <span class="text-gray-400">丨</span>
            <a href="#">
              <IcOutlineAdd class="size-4" />
            </a>
          </div>
        </div>

        <div class="card-content h-full">
          <div class="text-gray-500">暂无数据</div>
        </div>
      </div>

      <div class="card row-span-2">
        <div class="card-title">
          <h3>资产出租率</h3>
        </div>

        <div class="card-content !p-0">
          <Chart />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.card {
  @apply p-5;
  @apply h-full w-full;
  @apply rounded-lg;
  @apply bg-white dark:bg-gray-400/10;
}

.card > .card-title {
  @apply flex items-center justify-between;
}

.card > .card-title > h3 {
  @apply font-semibold;
}

.card > .card-content {
  @apply p-4;
  @apply flex items-center justify-center;
}

a {
  @apply text-blue-500;
}
</style>
