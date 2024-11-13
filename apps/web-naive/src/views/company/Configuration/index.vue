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
                          label="电磁炉"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="油烟机"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="热水器"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="暖气"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="燃气灶"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="空调遥控器"
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
                <div class="ml-4 h-[180px] w-full">
                  <div class="flex">
                    <div class="h-[180px] w-[200px]">
                      <div class="ml-4 mt-4">家具</div>
                    </div>
                    <div class="h-[180px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="座椅"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="床"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="书桌"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="沙发"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="衣柜"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="床头柜"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="餐桌"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="柜台"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="鞋/衣架"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="洽谈桌"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="茶几"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="床垫"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="电视柜"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="餐椅"
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
                      <div class="ml-4 mt-4">装饰</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="灯"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="窗帘"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="字画"
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
                      <div class="ml-4 mt-4">办公物品</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="办公桌"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="办公椅"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="会议室"
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
                      <div class="ml-4 mt-4">其他物品</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="智能门锁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[150px]"
                          label="WIFI"
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
            <NTabPane name="jay chou" tab="合约">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[120px] w-[200px]">
                      <div class="ml-4 mt-4">租客解约原因</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="工作地点变更"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="换城市"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="换工作"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="服务不满意"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="换房间"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="其他"
                          size="medium"
                        />
                        <div class="mt-6 w-[250px]">
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
                      <div class="ml-4 mt-4">租客合同标签</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
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
                      <div class="ml-4 mt-4">预定类型</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="111"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-8 w-[250px]"
                          label="222"
                          size="medium"
                        />
                        <div class="mt-6 w-[250px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NScrollbar>
            </NTabPane>
            <NTabPane name="oasis1" tab="费用科目">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">家电</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="预定定金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="定金抵扣"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">租金</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="房费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="房屋租金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="家电租金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="家具租金"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">押金</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="房屋押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="保证金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="门卡押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="钥匙押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="家具押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="家电押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="水卡押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="电卡押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="水电押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="燃气押金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他押金"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">能耗</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="水费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="电费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="燃气费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="煤气费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="供暖费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="冷水费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="热水费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="宽带费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="电视费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="空间费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="中水费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="污水费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="能源费"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">服务</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="服务费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="加盟费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="保洁费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="委管费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="物业费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="管理费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="卫生费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="保险费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="换房费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="排污费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="运输费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="电梯费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="佣金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="中介费"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">装修/维修</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="家电维修"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="房屋维修"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="公区维修"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="装修费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="维修基金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="材料费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="安装费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="人工费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="维护费"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">手续</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="支付手续费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="渠道分成费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="利息"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="税金"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">违约赔偿</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="违约金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="赔偿金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="滞纳金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="金融逾期扣除"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">其他费用</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="工本费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="车位费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="公区分摊"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NScrollbar>
            </NTabPane>
            <NTabPane name="the beatles1" tab="收付款途径">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">收付款途径</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="平台钱包"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="支付宝"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="微信"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="现金"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="转账"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="POS机刷卡"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="云闪付"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="结账"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="通联POS机"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NScrollbar>
            </NTabPane>
            <NTabPane name="jay chou1" tab="招商客户">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">客户来源</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="中介"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="来访"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="网络获取"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="委托"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="客户介绍"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="来电"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="广告"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="老客户"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">爱好</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="旅游"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="打游戏"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="运动"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="骑行"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="音乐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="舞蹈"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="棋类"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="影视"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="阅读"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="电竞"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="社交"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他"
                          size="medium"
                        />

                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">教育背景</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="小学及以下"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="初中"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="高中/中专/技校"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="大学专科"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="大学本科"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="硕士研究生"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="博士研究生"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">跟进方式</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="主动拜访"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="来电"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="去电"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="来访"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="微信"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="短信"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="企业微信"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">标签</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">行业分类</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="光电子信息"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="激光"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="人工智能"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="生物医药"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="医疗器械"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="大健康"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="智能制造"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="节能环保"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">抗性or关注点</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="地段"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="距离"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="对区域落户政策"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="对园区落户政策"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="价格"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="配套"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="户型"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="交通"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">购买原因</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[170px]"
                          label="目标区域综合成本低"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="改善"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[230px]"
                          label="目标区域有企业特定需求资源"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[230px]"
                          label="目标区域有大量同类企业聚集"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="拆迁"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="分支机构"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[230px]"
                          label="目标区域有上下游合作客户"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="业务拓展"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="产能提升"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="业务转型"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">获取渠道大类</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">获取渠道小类</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">企业性质</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">购买用途</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="生产"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="研发"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="办公"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="中试"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="总部基地"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="仓储"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="投资"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">意向区位</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">信息获取渠道</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">现办公地用途</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="生产"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="研发"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="办公"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="仓储"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">现办公地属性</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">目前企业可能遇到的问题</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="政策支持不足"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="技术发展问题"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="企业管理问题"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="企业人才缺乏"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="税费负担过重"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[230px]"
                          label="发展资金缺乏，融资渠道不畅"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="缺乏拳头产品"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="信息来源不畅"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="市场准入门槛高"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[230px]"
                          label="知识产权保护等法律环境弱"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">加入的组织</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">联系人类型</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="法人"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="主要决策人"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
              </NScrollbar>
            </NTabPane>
            <NTabPane name="the yj" tab="业绩管理">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">租赁提成标准</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="自主招商"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="全民营销"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[160px]"
                          label="产业合作部网络推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[160px]"
                          label="产业合作部机构推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[160px]"
                          label="产业合作部个人推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[160px]"
                          label="产业合作部优质企业"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">分佣职务</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="招商专员/主管"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="招商经理"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="全民营销推荐人"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="签约人"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NScrollbar>
            </NTabPane>
            <NTabPane name="客户" tab="招商-客户来源">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">员工类型</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="员工"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="兼职人员"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[160px]"
                          label="供应商"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">分佣职务</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="招商专员/主管"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="招商经理"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="全民营销推荐人"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="签约人"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NScrollbar>
            </NTabPane>
            <NTabPane name="认知" tab="招商-认知途径">
              <NScrollbar style="min-width: 1500px; max-height: 708px">
                <NDivider dashed />
                <div class="ml-4 h-[80px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">机构推荐</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="行业协会"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="商会"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="中介机构"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="展览会主办方"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他机构推荐"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">广告宣传</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="围挡"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="车身广告"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="户外广告"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="纸质宣传"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="电梯广告"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他广告"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">网络来电</div>
                    </div>
                    <div class="h-[120px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="百度"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="公司官网"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他网络"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="58同城平台推送"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="58同城个人发帖"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="58同城经纪人账号"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NDivider dashed />
                <div class="ml-4 h-[120px] w-full">
                  <div class="flex">
                    <div class="h-[80px] w-[200px]">
                      <div class="ml-4 mt-4">他人推荐</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="政府推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="老业主推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="朋友推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="公司推荐"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="同业推荐"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">自主拓客</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="call客"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="陌拜"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="参加活动"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">自然来访</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="路过"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">新媒体推广</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="中工招商网"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="今日头条"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="园链"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="抖音"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="探迹"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="微信朋友圈广告"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="励销云"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="言通"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="启客多"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
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
                      <div class="ml-4 mt-4">其他费用</div>
                    </div>
                    <div class="h-[80px] w-[1300px]">
                      <div class="flex flex-wrap">
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="工本费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="车位费"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="其他"
                          size="medium"
                        />
                        <NCheckbox
                          class="mr-16 mt-4 w-[150px]"
                          label="公区分摊"
                          size="medium"
                        />
                        <div class="mt-2 w-[150px]">
                          <NButton dashed type="info"> +添加 </NButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </NScrollbar>
            </NTabPane>
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
