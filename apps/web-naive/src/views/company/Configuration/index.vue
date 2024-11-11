<script setup lang="ts">
import type { TabsProps } from 'naive-ui';

import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { NCard, NTabPane, NTabs } from 'naive-ui';

const placement = ref<NonNullable<TabsProps['placement']>>('left');
const type = ref<TabsProps['type']>('line');
</script>

<template>
  <Page>
    <NCard style="margin-bottom: 16px" title="配置中心">
      <NTabs default-value="one" justify-content="space-evenly" type="line">
        <NTabPane name="one" tab="字典配置">
          <NTabs
            :key="type + placement"
            :placement="placement"
            :style="
              placement === 'left' || placement === 'right'
                ? { width: '300px' }
                : { height: '730px' }
            "
            :type="type"
            addable
            animated
            class="mt-6"
          >
            <NTabPane name="oasis" tab="资产"> Wonderwall </NTabPane>
            <NTabPane name="the beatles" tab="物品配置"> Hey Jude </NTabPane>
            <NTabPane name="jay chou" tab="合约"> Qilixiang </NTabPane>
            <NTabPane name="oasis1" tab="费用科目"> Wonderwall </NTabPane>
            <NTabPane name="the beatles1" tab="收付款途径"> Hey Jude </NTabPane>
            <NTabPane name="jay chou1" tab="招商客户"> Qilixiang </NTabPane>
            <NTabPane name="oasis2" tab="其他"> Wonderwall </NTabPane>
          </NTabs>
        </NTabPane>
        <NTabPane name="two" tab="运营配置"> Hey Jude </NTabPane>
        <NTabPane name="three" tab="产品配置"> 七里香 </NTabPane>
        <NTabPane name="four" tab="收款账号配置"> 七里香 </NTabPane>
        <NTabPane name="five" tab="审批配置"> 七里香 </NTabPane>
        <NTabPane name="six" tab="个性化配置"> 七里香 </NTabPane>
      </NTabs>
    </NCard>
  </Page>
</template>
