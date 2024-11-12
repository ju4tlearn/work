<script setup lang="ts">
import { ref } from 'vue';

import { NRadio, NRadioGroup } from 'naive-ui';

const value1 = ref<null | string>(null);

const data1 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value2 = ref<null | string>(null);

const data2 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value3 = ref<null | string>(null);

const data3 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value4 = ref<null | string>(null);

const data4 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value5 = ref<null | string>(null);

const data5 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value6 = ref<null | string>(null);

const data6 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value7 = ref<null | string>(null);

const data7 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
const value8 = ref<null | string>(null);

const data8 = ref(
  [
    {
      value: '全部',
      label: '全部',
    },
    {
      value: '本店',
      label: '本店',
    },
    {
      value: '本部',
      label: '本部',
    },
    {
      value: '本人相关',
      label: '本人相关',
    },
  ].map((s) => {
    return {
      ...s,
      value: s.value.toLowerCase(),
    };
  }),
);
</script>

<template>
  <div>
    <div>
      <div>线索管理</div>
      <hr style="border: 1px solid gray" />
    </div>
    <div class="flex justify-between">
      <div class="ml-3">租客-私客</div>
      <NRadioGroup v-model:value="value1" class="w-4/5" name="radiogroup">
        <NRadio
          v-for="song in data1"
          :key="song.value"
          :value="song.value"
          class="w-1/4"
        >
          {{ song.label }}
        </NRadio>
      </NRadioGroup>
    </div>
  </div>
  <div>
    <div>
      <div>房源管理</div>
      <hr style="border: 1px solid gray" />
    </div>
    <div>
      <div class="flex justify-between">
        <div class="ml-3">独栋</div>
        <NRadioGroup v-model:value="value2" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data2"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
      <div class="flex justify-between">
        <div class="ml-3">空房快查</div>
        <NRadioGroup v-model:value="value3" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data3"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
      <div class="flex justify-between">
        <div class="ml-3">调价管理</div>
        <NRadioGroup v-model:value="value4" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data4"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div>合约管理</div>
      <hr style="border: 1px solid gray" />
    </div>
    <div>
      <div class="flex justify-between">
        <div class="ml-3">预定管理</div>
        <NRadioGroup v-model:value="value5" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data5"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
      <div class="flex justify-between">
        <div class="ml-3">租房合同</div>
        <NRadioGroup v-model:value="value6" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data6"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
    </div>
  </div>
  <div>
    <div>
      <div>业绩管理</div>
      <hr style="border: 1px solid gray" />
    </div>
    <div>
      <div class="flex justify-between">
        <div class="ml-3">业绩台账</div>
        <NRadioGroup v-model:value="value7" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data7"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
      <div class="flex justify-between">
        <div class="ml-3">分佣配置</div>
        <NRadioGroup v-model:value="value8" class="w-4/5" name="radiogroup">
          <NRadio
            v-for="song in data8"
            :key="song.value"
            :value="song.value"
            class="w-1/4"
          >
            {{ song.label }}
          </NRadio>
        </NRadioGroup>
      </div>
    </div>
  </div>
</template>
