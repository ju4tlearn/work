<script setup lang="ts">
import { defineProps } from 'vue';

import { Iconupload } from '@vben/icons';

import {
  NButton,
  NCard,
  NDivider,
  NGrid,
  NGridItem,
  NInput,
  NQrCode,
  NUpload,
} from 'naive-ui';

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  <NCard>
    <div class="mb-3">房间信息：{{ props.data.roomNumber }}</div>
    <NGrid :cols="24" :y-gap="10">
      <NGridItem :span="12">
        <div>应提成总金额：{{ props.data.totalExpectedCommission }}</div>
      </NGridItem>
      <NGridItem :span="12">
        <div>
          剩余发放金额：{{
            props.data.totalExpectedCommission -
            props.data.distributedCommissionAmount
          }}
        </div>
      </NGridItem>
      <NGridItem :span="12">
        <div>本次应提成金额：{{ props.data.distributedCommissionAmount }}</div>
      </NGridItem>
    </NGrid>
  </NCard>
  <NDivider dashed style="border-width: 1px" />
  <NCard>
    <div>
      <NGrid :cols="24" :y-gap="10">
        <NGridItem :span="12">
          <div class="flex">
            <div>分佣人员:</div>
            <div>{{ props.data.name }}</div>
          </div>
        </NGridItem>
        <NGridItem :span="12">
          <div class="flex">
            <div>分佣职务:</div>
            <div>主管</div>
          </div>
        </NGridItem>
        <NGridItem :span="12">
          <div class="flex">
            <div>本次应提成金额:</div>
            <div>5000元</div>
          </div>
        </NGridItem>
        <NGridItem :span="12">
          <div class="flex">
            <div>逾期应扣款金额:</div>
            <div>1000元</div>
          </div>
        </NGridItem>
      </NGrid>
      <div class="flex items-center">
        <p><span class="text-[red]">*</span>发放金额：</p>
        <NInput style="width: 200px" />
        <p>元</p>
      </div>
      <div>
        <p>备注：</p>
        <NInput maxlength="200" show-count type="textarea" />
      </div>
    </div>
  </NCard>
  <NDivider dashed style="border-width: 1px" />
  <NCard>
    <div>
      <div>
        上传附件
        <span class="text-[#ff8f00]">
          （附件格式jpg、png、jpeg、word、excel、pdf）
        </span>
      </div>
      <div class="flex items-center">
        <NUpload
          :data="{
            'naive-data': 'cool! naive!',
          }"
          :headers="{
            'naive-info': 'hello!',
          }"
          action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          style="width: 120px; height: 90px"
        >
          <NButton style="height: 100px">
            <Iconupload style="width: 120px; height: 90px" />
          </NButton>
        </NUpload>
        <p class="mx-10">或</p>
        <NQrCode />
        <div class="ml-5 mt-2">
          <p>扫码传图</p>
          <p>使用手机扫一扫即可上传图片</p>
        </div>
      </div>
    </div>
  </NCard>
</template>
