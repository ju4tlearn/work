<script lang="ts" setup>
import { ref } from 'vue';

import {
  Approval,
  Calendar,
  Carbon,
  Code,
  Duotone,
  Eye,
  Filled,
  IFinance,
  Layers,
  MdiUserBox,
  Search,
  Send,
} from '@vben/icons';

import {
  NButton,
  NDataTable,
  NDivider,
  NInput,
  NInputGroup,
  NModal,
  NPopover,
  NQrCode,
  NSelect,
  NTable,
  NTabPane,
  NTabs,
  NUpload,
} from 'naive-ui';

const showModalShowPrice = ref(false);
const showModalTenants = ref(false);
const showModalFinance = ref(false);
const showComment = ref(false);
const showRebout = ref(false);
const showPass = ref(false);
const ShowPrice = () => {
  showModalShowPrice.value = true;
};
const Tenants = () => {
  showModalTenants.value = true;
};
const Finance = () => {
  showModalFinance.value = true;
};
const Comment = () => {
  showComment.value = true;
};
const Rebout = () => {
  showRebout.value = true;
};
const Pass = () => {
  showPass.value = true;
};
const columns = [
  {
    title: '序号',
    key: 'id',
  },
  {
    title: '城市/区域',
    key: 'address',
  },
  {
    title: '房源地址',
    key: 'home',
  },
  {
    title: '原价(元)',
    key: 'now',
  },
  {
    title: '调价(元)',
    key: 'price',
  },
  {
    title: '所属门店(部门)',
    key: 'story',
  },
  {
    title: '维护人',
    key: 'man',
  },
];
const data = ref([
  {
    id: '1',
    address: '武汉市',
    home: '测试楼',
    now: '0',
    price: '0',
    story: '公寓测试门店',
    man: '刘清泉18270757611',
  },
  {
    id: '2',
    address: '武汉市',
    home: '测试楼',
    now: '0',
    price: '0',
    story: '公寓测试门店',
    man: '刘清泉18270757611',
  },
  {
    id: '3',
    address: '武汉市',
    home: '测试楼',
    now: '0',
    price: '0',
    story: '公寓测试门店',
    man: '刘清泉18270757611',
  },
]);
</script>
<template>
  <NPopover :show-arrow="false" trigger="hover">
    <template #trigger>
      <NButton>审批</NButton>
    </template>
    <div class="space-y-2">
      <p @click="ShowPrice">批量调价</p>
      <p @click="Tenants">租客签约</p>
      <p @click="Finance">财务流水</p>
    </div>
  </NPopover>

  <NModal v-model:show="showModalShowPrice">
    <NCard
      :bordered="false"
      aria-modal="true"
      class="mt-10 h-[800px] bg-gray-200"
      role="dialog"
      size="huge"
      style="width: 70%"
    >
      <div class="flex flex-col gap-y-3">
        <div class="flex items-center justify-between pt-4 text-center">
          <div class="pl-4 text-[16px] text-sky-400">批量调价-审核详情</div>
          <div class="pr-4">
            <Filled class="size-6" />
          </div>
        </div>
        <div class="flex gap-x-3">
          <NCard class="bg-slate-50" style="width: 65%; height: 748px">
            <div>
              <div class="flex gap-x-20 pl-4 pt-10">
                <div class="flex gap-x-3">
                  <div><IFinance class="size-6" /></div>
                  <div class="space-y-1">
                    <p class="text-[12px] text-current">价格设置</p>
                    <p class="text-xs font-semibold">固定金额 3000 元</p>
                  </div>
                </div>
                <div class="flex gap-x-3">
                  <div><Calendar class="size-6" /></div>
                  <div class="space-y-1">
                    <p class="text-[12px] text-current">生效时间</p>
                    <p class="text-xs font-semibold">2023年2月11日 17:22</p>
                  </div>
                </div>
              </div>
              <div class="pl-3 pr-3 pt-10">
                <NTabs animated type="line">
                  <NTabPane name="oasis" tab="调价详情">
                    <div class="flex flex-col gap-y-10">
                      <div class="flex gap-x-20">
                        <div class="space-y-1">
                          <p class="text-[12px] text-current">价格设置</p>
                          <p class="text-xs font-semibold">固定金额 3000 元</p>
                        </div>
                        <div class="space-y-1">
                          <p class="text-[12px] text-current">生效时间</p>
                          <p class="text-xs font-semibold">
                            2023年2月11日 17:22
                          </p>
                        </div>
                        <div class="space-y-1">
                          <p class="text-[12px] text-current">调价房间</p>
                          <p class="text-xs font-semibold">独栋3间</p>
                        </div>
                      </div>
                      <div>
                        <div class="flex flex-col gap-y-4">
                          <div class="text-[12px] text-current">调价备注</div>
                          <div>
                            <NInput placeholder="基本的 Input" type="text" />
                            <NDivider :dashed="true" />
                            <div class="text-[16px] text-current">
                              刘庆辰创建于2023年1月2日 12:35 更新于2023年2月11日
                              17:22
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NTabPane>
                  <NTabPane name="the beatles" tab="调价房间">
                    <div class="flex gap-x-6">
                      <NSelect class="w-[20%]" />
                      <NSelect class="w-[20%]" />
                      <NSelect class="w-[20%]" />
                      <NInputGroup>
                        <NInput :style="{ width: '30%' }" />
                        <NButton type="primary">
                          <Search class="size-6" />
                        </NButton>
                      </NInputGroup>
                      <NButton secondary size="medium" strong> 清空 </NButton>
                    </div>
                    <div>
                      <NDataTable
                        :bordered="false"
                        :columns="columns"
                        :data="data"
                        :single-line="false"
                      />
                    </div>
                  </NTabPane>
                </NTabs>
              </div>
            </div>
          </NCard>
          <NCard class="relative bg-slate-50" style="width: 35%">
            <div class="flex pl-4 pt-4">
              <div class="space-y-4">
                <Send class="size-8 text-sky-400" />
                <Approval class="size-8 text-sky-400" />
              </div>
              <div class="space-y-3 pt-1">
                <div class="space-y-2">
                  <div class="flex gap-x-32">
                    <div class="text-[16px]">发起申请</div>
                    <div class="text-[12px] text-gray-400">
                      2023.02.17 10:08
                    </div>
                  </div>
                  <div class="text-[14px] text-gray-400">刘清泉</div>
                </div>
                <div class="space-y-2">
                  <div class="text-[16px]">审批人</div>
                  <div class="flex">
                    <div class="text-[14px] text-gray-400">1人会签</div>
                    <div class="text-[14px] text-orange-400">(审批中...)</div>
                  </div>
                  <div class="text-[14px] text-gray-400">王梓涛</div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 justify-around space-x-16 pb-2 pl-5">
              <NButton class="w-20" size="large" type="info" @click="Comment">
                评论
              </NButton>
              <NButton class="w-20" size="large" type="info" @click="Rebout">
                驳回
              </NButton>
              <NButton class="w-20" size="large" type="info" @click="Pass">
                通过
              </NButton>
            </div>
            <NModal v-model:show="showComment">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      评论
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">评论内容</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入评论内容,可@相关人员"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
            <NModal v-model:show="showRebout">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      驳回
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">驳回理由</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入驳回理由"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
            <NModal v-model:show="showPass">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      审批通过
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">通过理由</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入通过理由"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
          </NCard>
        </div>
      </div>
    </NCard>
  </NModal>
  <NModal v-model:show="showModalTenants">
    <NCard
      :bordered="false"
      aria-modal="true"
      class="mt-10 h-[985px] bg-gray-200"
      role="dialog"
      size="huge"
      style="width: 70%"
    >
      <div class="flex flex-col gap-y-3">
        <div class="flex items-center justify-between pt-4 text-center">
          <div class="pl-4 text-[16px] text-sky-400">
            租客签约(电子合同)-审核详情
          </div>
          <div class="pr-4">
            <Filled class="size-6" />
          </div>
        </div>
        <div class="flex gap-x-3">
          <NCard class="bg-slate-50" style="width: 65%; height: 930px">
            <div>
              <div class="h-6 w-full bg-gray-500">
                <div class="pt-1">
                  房源地址:T005/武汉市测试楼栋(测试数据)B3栋1单元-A103室
                </div>
              </div>
              <div class="flex gap-x-12 pl-4 pt-5">
                <div class="flex gap-x-2">
                  <div>
                    <MdiUserBox class="size-8 text-sky-400" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">收款人信息</div>
                    <div>阿飞-1789726383</div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <Carbon class="size-8 text-red-500" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">付款金额</div>
                    <div>6000元</div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <Layers class="size-8 text-orange-400" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">费用摘要</div>
                    <div>房屋押金</div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <Duotone class="size-8 text-green-600" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">实际付款时间</div>
                    <div>2023.02.19 17:50</div>
                  </div>
                </div>
              </div>
              <div class="pl-3 pr-3 pt-5">
                <NTabs animated type="line">
                  <NTabPane name="oasis" tab="合同信息">
                    <div class="space-y-6 pt-4">
                      <div class="flex gap-x-28 pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">租金</div>
                          <div>3000 元/月</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">押金</div>
                          <div>6000元</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">付款方式</div>
                          <div>押2付6</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">合同周期</div>
                          <div>
                            2023.02.16-2024.02.16
                            <span class="text-orange-400">(1年)</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex gap-x-[6.5rem] pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            收租日设置
                          </div>
                          <div>提前0天收租</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">合同类型</div>
                          <div class="flex">
                            电子合同
                            <span class="flex text-sky-400">
                              (已认证)
                              <Eye />
                              预览/打印
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="flex pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            合同补充说明
                          </div>
                          <div>-</div>
                        </div>
                      </div>
                      <div class="pl-4 text-[16px]">其他信息</div>
                      <div class="flex gap-x-28 pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">签约类型</div>
                          <div>换签</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">同款编号</div>
                          <div>HT787878</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            租客自助申请发票
                          </div>
                          <div>不允许</div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            备注<span class="text-orange-400">
                              (仅内部可见)
                            </span>
                          </div>
                          <div>-</div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            标签<span class="text-orange-400">
                              (仅内部可见)
                            </span>
                          </div>
                          <div>-</div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">附件信息</div>
                          <div>-</div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-4">
                          <div class="flex gap-x-2">
                            <div class="font-semibold text-[14]">
                              其他费用信息
                            </div>
                          </div>
                          <div>
                            <NTable :bordered="true" :single-line="false">
                              <thead>
                                <tr>
                                  <th>费用科目</th>
                                  <th>金额</th>
                                  <th>费用周期</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>暂无信息</td>
                                </tr>
                              </tbody>
                            </NTable>
                          </div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-4">
                          <div class="flex gap-x-2">
                            <div class="font-semibold text-[14]">签约信息</div>
                          </div>
                          <div class="flex gap-x-24">
                            <div class="space-y-2">
                              <div class="text-[12px] text-gray-500">
                                合约归属门店(部门)
                              </div>
                              <div>公寓测试门店</div>
                            </div>
                            <div class="space-y-2">
                              <div class="text-[12px] text-gray-500">
                                合约维护人
                              </div>
                              <div>刘清晨-18279757611</div>
                            </div>
                            <div class="space-y-2">
                              <div class="text-[12px] text-gray-500">
                                签约人
                              </div>
                              <div>程贝-19307140650</div>
                            </div>
                            <div class="space-y-2">
                              <div class="text-[12px] text-gray-500">
                                签约时间
                              </div>
                              <div>2023.02.16</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <NDivider class="!text-gray-600" dashed />
                        <div class="flex gap-x-5">
                          <div class="text-[12px] text-gray-500">
                            程贝创建于2023年2月16日 17:45
                          </div>
                          <div class="text-[12px] text-gray-500">
                            程贝更新于2023年2月16日 17:45
                          </div>
                        </div>
                      </div>
                    </div>
                  </NTabPane>
                  <NTabPane name="beatles" tab="个人信息"> Hey Jude </NTabPane>
                  <NTabPane name="chou" tab="物业交割单"> 七里香 </NTabPane>
                  <NTabPane name="jay" tab="财务信息"> 七里香 </NTabPane>
                </NTabs>
              </div>
            </div>
          </NCard>
          <NCard class="relative bg-slate-50" style="width: 35%">
            <div class="flex pl-4 pt-4">
              <div class="space-y-4">
                <Send class="size-8 text-sky-400" />
                <Approval class="size-8 text-sky-400" />
              </div>
              <div class="space-y-3 pt-1">
                <div class="space-y-2">
                  <div class="flex gap-x-32">
                    <div class="text-[16px]">发起申请</div>
                    <div class="text-[12px] text-gray-400">
                      2023.02.17 10:08
                    </div>
                  </div>
                  <div class="text-[14px] text-gray-400">刘清泉</div>
                </div>
                <div class="space-y-2">
                  <div class="text-[16px]">审批人</div>
                  <div class="flex">
                    <div class="text-[14px] text-gray-400">1人会签</div>
                    <div class="text-[14px] text-orange-400">(审批中...)</div>
                  </div>
                  <div class="text-[14px] text-gray-400">王梓涛</div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 justify-around space-x-16 pb-2 pl-5">
              <NButton class="w-20" size="large" type="info" @click="Comment">
                评论
              </NButton>
              <NButton class="w-20" size="large" type="info" @click="Rebout">
                驳回
              </NButton>
              <NButton class="w-20" size="large" type="info" @click="Pass">
                通过
              </NButton>
            </div>
            <NModal v-model:show="showComment">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      评论
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">评论内容</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入评论内容,可@相关人员"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
            <NModal v-model:show="showRebout">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      驳回
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">驳回理由</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入驳回理由"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
            <NModal v-model:show="showPass">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      审批通过
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">通过理由</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入通过理由"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
          </NCard>
        </div>
      </div>
    </NCard>
  </NModal>
  <NModal v-model:show="showModalFinance">
    <NCard
      :bordered="false"
      aria-modal="true"
      class="mt-10 h-[850px] bg-gray-200"
      role="dialog"
      size="huge"
      style="width: 70%"
    >
      <div class="flex flex-col gap-y-3">
        <div class="flex items-center justify-between pt-4 text-center">
          <div class="pl-4 text-[16px] text-sky-400">财务流水-审核详情</div>
          <div class="pr-4">
            <Filled class="size-6" />
          </div>
        </div>
        <div class="flex gap-x-3">
          <NCard class="bg-slate-50" style="width: 65%; height: 798px">
            <div>
              <div class="h-6 w-full bg-gray-500">
                <div class="pt-1">
                  房源地址:T005/武汉市测试楼栋(测试数据)B3栋1单元-A103室
                </div>
              </div>
              <div class="flex gap-x-12 pl-4 pt-5">
                <div class="flex gap-x-2">
                  <div>
                    <MdiUserBox class="size-8 text-sky-400" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">收款人信息</div>
                    <div>阿飞-1789726383</div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <Carbon class="size-8 text-red-500" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">付款金额</div>
                    <div>6000元</div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <Layers class="size-8 text-orange-400" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">费用摘要</div>
                    <div>房屋押金</div>
                  </div>
                </div>
                <div class="flex gap-x-2">
                  <div>
                    <Duotone class="size-8 text-green-600" />
                  </div>
                  <div class="space-y-1">
                    <div class="text-[12px] text-gray-500">实际付款时间</div>
                    <div>2023.02.19 17:50</div>
                  </div>
                </div>
              </div>
              <div class="pl-3 pr-3 pt-5">
                <NTabs animated type="line">
                  <NTabPane name="oasis" tab="支付详情">
                    <div class="space-y-6 pt-4">
                      <div class="flex gap-x-28 pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            收款人姓名
                          </div>
                          <div>小阿飞</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            收款人电话
                          </div>
                          <div>1983547525</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            收款人账号
                          </div>
                          <div>—</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">付款金额</div>
                          <div>6000元</div>
                        </div>
                      </div>
                      <div class="flex gap-x-28 pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">付款途径</div>
                          <div>现金</div>
                        </div>
                        <div class="space-y-2 pl-3">
                          <div class="text-[12px] text-gray-500">费用摘要</div>
                          <div>房屋押金</div>
                        </div>
                        <div class="space-y-2 pl-6">
                          <div class="text-[12px] text-gray-500">
                            付款确认人
                          </div>
                          <div>程贝</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">付款时间</div>
                          <div>2023.02.19 15:50</div>
                        </div>
                      </div>
                      <div class="flex gap-x-28 pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">
                            交易流水号
                          </div>
                          <div>-</div>
                        </div>
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">操作时间</div>
                          <div>2023.02.03 15:56</div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">支付备注</div>
                          <div>-</div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-2">
                          <div class="text-[12px] text-gray-500">支付凭证</div>
                          <div>
                            <NUpload
                              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                              list-type="image-card"
                            >
                              点击上传
                            </NUpload>
                          </div>
                        </div>
                      </div>
                      <div class="pl-4">
                        <div class="space-y-4">
                          <div class="flex gap-x-2">
                            <div class="font-semibold text-sky-400">|</div>
                            <div class="font-semibold text-[14]">流水明细</div>
                          </div>
                          <div>
                            <NTable :bordered="true" :single-line="false">
                              <thead>
                                <tr>
                                  <th>费用科目</th>
                                  <th>金额</th>
                                  <th>费用周期</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>房屋押金</td>
                                  <td>
                                    <span class="text-red-500">-</span>
                                    6000元
                                  </td>
                                  <td>彻底废除</td>
                                </tr>
                                <tr>
                                  <td class="text-[13px] font-semibold">
                                    费用合计:
                                  </td>
                                  <td>
                                    <span class="text-red-500">-</span>
                                    6000元
                                  </td>
                                </tr>
                              </tbody>
                            </NTable>
                          </div>
                        </div>
                      </div>
                      <div>
                        <NDivider class="!text-gray-600" dashed />
                        <div class="flex gap-x-5">
                          <div class="text-[12px] text-gray-500">
                            程贝创建于2023年2月16日 17:45
                          </div>
                          <div class="text-[12px] text-gray-500">
                            程贝更新于2023年2月16日 17:45
                          </div>
                        </div>
                      </div>
                    </div>
                  </NTabPane>
                </NTabs>
              </div>
            </div>
          </NCard>
          <NCard class="relative bg-slate-50" style="width: 35%">
            <div class="flex pl-4 pt-4">
              <div class="space-y-4">
                <Send class="size-8 text-sky-400" />
                <Approval class="size-8 text-sky-400" />
              </div>
              <div class="space-y-3 pt-1">
                <div class="space-y-2">
                  <div class="flex gap-x-32">
                    <div class="text-[16px]">发起申请</div>
                    <div class="text-[12px] text-gray-400">
                      2023.02.17 10:08
                    </div>
                  </div>
                  <div class="text-[14px] text-gray-400">刘清泉</div>
                </div>
                <div class="space-y-2">
                  <div class="text-[16px]">审批人</div>
                  <div class="flex">
                    <div class="text-[14px] text-gray-400">1人会签</div>
                    <div class="text-[14px] text-orange-400">(审批中...)</div>
                  </div>
                  <div class="text-[14px] text-gray-400">王梓涛</div>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 justify-around space-x-16 pb-2 pl-5">
              <NButton class="w-20" size="large" type="info" @click="Comment">
                评论
              </NButton>
              <NButton class="w-20" size="large" type="info" @click="Rebout">
                驳回
              </NButton>
              <NButton class="w-20" size="large" type="info" @click="Pass">
                通过
              </NButton>
            </div>
            <NModal v-model:show="showComment">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      评论
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">评论内容</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入评论内容,可@相关人员"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
            <NModal v-model:show="showRebout">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      驳回
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">驳回理由</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入驳回理由"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
            <NModal v-model:show="showPass">
              <NCard
                :bordered="false"
                aria-modal="true"
                class="bg-slate-50"
                role="dialog"
                size="huge"
                style="width: 500px; height: 350px"
                title="模态框"
              >
                <div class="flex flex-col gap-y-6">
                  <div
                    class="flex h-10 items-center justify-between bg-gray-400 pt-2"
                  >
                    <div class="pl-2 text-[16px] font-semibold text-sky-400">
                      审批通过
                    </div>
                    <div class="pr-2"><Filled class="size-4" /></div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[18px]">通过理由</div>
                    <div>
                      <NInput
                        autosize
                        placeholder="输入通过理由"
                        style="min-width: 50%"
                      />
                    </div>
                  </div>
                  <div class="space-y-2 pl-2">
                    <div class="text-[16px]">附件</div>
                    <div class="flex items-center">
                      <NUpload class="w-[20%]" list-type="image-card">
                        点击上传图片/附件
                      </NUpload>
                      <div class="text-[12px] font-semibold">或</div>
                      <div
                        class="flex h-[95px] w-[40%] gap-x-4 border border-dashed border-inherit"
                      >
                        <NQrCode :size="70" />
                        <div
                          class="space-y-1 border-l border-dashed border-inherit"
                        >
                          <div class="flex gap-x-1 pl-2 pt-4">
                            <div><Code class="text-green-400" /></div>
                            <div class="text-xs">扫码传图</div>
                          </div>
                          <div class="pl-2 text-xs text-gray-400">
                            使用手机扫一扫
                          </div>
                          <div class="pl-2 text-xs text-gray-400">即刻传图</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-x-4 pl-[60%]">
                    <NButton class="w-20" type="info">取消</NButton>
                    <NButton class="w-20" type="info">保存</NButton>
                  </div>
                </div>
              </NCard>
            </NModal>
          </NCard>
        </div>
      </div>
    </NCard>
  </NModal>
</template>
