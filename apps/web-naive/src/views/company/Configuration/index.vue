<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import type { TabsProps } from 'naive-ui';

import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import {
  NButton,
  NCard,
  NCheckbox,
  NDivider,
  NScrollbar,
  NTabPane,
  NTabs,
} from 'naive-ui';

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
                ? { width: '300px', height: '730px' }
                : undefined
            "
            :type="type"
            addable
            animated
            class="mt-6"
          >
            <NTabPane name="oasis" tab="资产">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[200px] w-full">
                  <div class="flex">
                    <div class="h-[200px] w-[200px]">
                      <div class="ml-4 mt-4">房源标签</div>
                    </div>
                    <div class="h-[200px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="阳台"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="独卫"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="近地铁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="朝南"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="智能门锁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="飘窗"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="代收快递"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="品牌家电"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="专属管家"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="定期保洁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="精装修"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电梯"
                          size="medium"
                        />
                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[250px] w-full">
                  <div class="flex">
                    <div class="h-[200px] w-[200px]">
                      <div class="ml-4 mt-4">项目配置</div>
                    </div>
                    <div class="h-[200px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="洗衣房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="热水器"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="饮水机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="厨房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="停车位"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="咖啡机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电视"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="冰箱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="微波炉"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="洗衣房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="空调"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="烤箱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="24小时保安"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="常规保洁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="健身房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="前台"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="代收快递"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="游泳池"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="公共WIFI"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="超市"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电梯"
                          size="medium"
                        />
                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">房间类型</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="主卧"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="次卧"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="隔断"
                          size="medium"
                        />

                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[250px] w-full">
                  <div class="flex">
                    <div class="h-[200px] w-[200px]">
                      <div class="ml-4 mt-4">设备品牌</div>
                    </div>
                    <div class="h-[200px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="美的"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="格力"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="海尔"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="TCL"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="长虹"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="奥克斯"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="苏泊尔"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="荣声"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="西门子"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="美菱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="松下"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="小天鹅"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="小米"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="海信"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="米家"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="乏华仕"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="全友"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="顾家家居"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="林氏木业"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="丽巢"
                          size="medium"
                        />
                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[140px] w-full">
                  <div class="flex">
                    <div class="h-[140px] w-[200px]">
                      <div class="ml-4 mt-4">接待要求</div>
                    </div>
                    <div class="h-[140px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不适合儿童"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不适合老人"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止带宠物"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不可做饭"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止聚会"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止抽烟"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止商业拍照"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不接待外宾"
                          size="medium"
                        />

                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">寻访房间标记</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="重点巡查房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="高危房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="整点到期需复查房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="待复查房间"
                          size="medium"
                        />

                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
              </NScrollbar>
            </NTabPane>
            <NTabPane name="the beatles" tab="物品配置">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[200px] w-full">
                  <div class="flex">
                    <div class="h-[200px] w-[200px]">
                      <div class="ml-4 mt-4">家电</div>
                    </div>
                    <div class="h-[200px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="空调"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="冰箱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="洗衣机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="微波炉"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="饮水机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电视"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="代收快递"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="品牌家电"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="专属管家"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="定期保洁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="精装修"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电梯"
                          size="medium"
                        />
                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[250px] w-full">
                  <div class="flex">
                    <div class="h-[200px] w-[200px]">
                      <div class="ml-4 mt-4">项目配置</div>
                    </div>
                    <div class="h-[200px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="洗衣房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="热水器"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="饮水机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="厨房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="停车位"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="咖啡机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电视"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="冰箱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="微波炉"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="洗衣房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="空调"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="烤箱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="24小时保安"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="常规保洁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="健身房"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="前台"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="代收快递"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="游泳池"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="公共WIFI"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="超市"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电梯"
                          size="medium"
                        />
                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">房间类型</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="主卧"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="次卧"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="隔断"
                          size="medium"
                        />

                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[250px] w-full">
                  <div class="flex">
                    <div class="h-[200px] w-[200px]">
                      <div class="ml-4 mt-4">设备品牌</div>
                    </div>
                    <div class="h-[200px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="美的"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="格力"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="海尔"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="TCL"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="长虹"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="奥克斯"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="苏泊尔"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="荣声"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="西门子"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="美菱"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="松下"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="小天鹅"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="小米"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="海信"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="米家"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="乏华仕"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="全友"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="顾家家居"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="林氏木业"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="丽巢"
                          size="medium"
                        />
                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[140px] w-full">
                  <div class="flex">
                    <div class="h-[140px] w-[200px]">
                      <div class="ml-4 mt-4">接待要求</div>
                    </div>
                    <div class="h-[140px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不适合儿童"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不适合老人"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止带宠物"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不可做饭"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止聚会"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止抽烟"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="禁止商业拍照"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="不接待外宾"
                          size="medium"
                        />

                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">寻访房间标记</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="重点巡查房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="高危房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="整点到期需复查房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="待复查房间"
                          size="medium"
                        />

                        <div class="mt-6 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
              </NScrollbar>
            </NTabPane>
            <NTabPane name="jay chou" tab="合约"> Qilixiang </NTabPane>
            <NTabPane name="oasis1" tab="费用科目"> Wonderwall </NTabPane>
            <NTabPane name="the beatles1" tab="收付款途径"> Hey Jude </NTabPane>
            <NTabPane name="jay chou1" tab="招商客户"> Qilixiang </NTabPane>
            <NTabPane name="oasis2" tab="其他"> Wonderwall </NTabPane>
          </NTabs>
        </NTabPane>
        <NTabPane name="two" tab="运营配置">
          <NTabs
            :key="type + placement"
            :placement="placement"
            :style="
              placement === 'left' || placement === 'right'
                ? { width: '300px', height: '730px' }
                : undefined
            "
            :type="type"
            addable
            animated
            class="mt-6"
          >
            <NTabPane name="oasis" tab="招商管理"> Wonderwall </NTabPane>
            <NTabPane name="the beatles" tab="资产管理"> Hey Jude </NTabPane>
            <NTabPane name="jay chou" tab="合约管理"> Qilixiang </NTabPane>
            <NTabPane name="oasis1" tab="财务管理"> Wonderwall </NTabPane>
          </NTabs>
        </NTabPane>
        <NTabPane name="three" tab="产品配置">
          <NTabs
            :key="type + placement"
            :placement="placement"
            :style="
              placement === 'left' || placement === 'right'
                ? { width: '300px', height: '730px' }
                : undefined
            "
            :type="type"
            addable
            animated
            class="mt-6"
          >
            <NTabPane name="oasis" tab="微信小程序"> Wonderwall </NTabPane>
          </NTabs>
        </NTabPane>
        <NTabPane name="four" tab="收款账号配置">
          <NTabs
            :key="type + placement"
            :placement="placement"
            :style="
              placement === 'left' || placement === 'right'
                ? { width: '300px', height: '730px' }
                : undefined
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
        <NTabPane name="five" tab="审批配置">
          <NTabs
            :key="type + placement"
            :placement="placement"
            :style="
              placement === 'left' || placement === 'right'
                ? { width: '300px', height: '730px' }
                : undefined
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
        <NTabPane name="six" tab="个性化配置">
          <NTabs
            :key="type + placement"
            :placement="placement"
            :style="
              placement === 'left' || placement === 'right'
                ? { width: '300px', height: '730px' }
                : undefined
            "
            :type="type"
            addable
            animated
            class="mt-6"
          >
            <NTabPane name="oasis" tab="编号配置"> Wonderwall </NTabPane>
            <NTabPane name="the beatles" tab="表头字段配置">
              Hey Jude
            </NTabPane>
            <NTabPane name="jay chou" tab="打印设置"> Qilixiang </NTabPane>
          </NTabs>
        </NTabPane>
      </NTabs>
    </NCard>
  </Page>
</template>
