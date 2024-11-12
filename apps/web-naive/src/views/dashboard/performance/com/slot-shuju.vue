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
</template>
