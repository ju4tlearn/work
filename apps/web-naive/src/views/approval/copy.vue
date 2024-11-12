<script lang="ts" setup>
import { ref } from 'vue';

import { NCard, NInput, NPagination, NTable, NTabPane, NTabs } from 'naive-ui';

import SelectButton from './component/SelectButton.vue';

const array = ref([]) as any;
async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}
fetchData('http://127.0.0.1:4523/m1/5364813-5036821-default/approval')
  .then((res) => {
    array.value = res.array;
  })
  .catch((error) => console.error('Error fetching data:', error));
</script>
<template>
  <NCard class="ml-10 mt-5 flex h-[100%] w-[95%] flex-col" size="huge">
    <div class="flex justify-between">
      <div class="flex gap-2">
        <div class="text-[16px] font-semibold text-sky-400">|</div>
        <div class="text-[16px] font-semibold">抄送我的</div>
      </div>
      <NInput class="!w-[30%]" placeholder="标题/内容" type="text" />
    </div>
    <div class="flex">
      <NTabs animated type="line">
        <NTabPane class="space-y-4" name="all" tab="全部">
          <NTable :single-line="false" class="w-full text-center">
            <thead>
              <tr>
                <th>序号</th>
                <th>审批状态</th>
                <th>审批类型</th>
                <th>标题</th>
                <th>内容</th>
                <th>发起时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in array" :key="item">
                <td>{{ item.id }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.opinion }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.memory }}</td>
                <td>{{ item.nowdata }}</td>
                <td><SelectButton /></td>
              </tr>
            </tbody>
          </NTable>
          <NPagination :page-count="24" class="flex justify-self-end" />
        </NTabPane>
        <NTabPane name="approval" tab="未读"> Hey Jude </NTabPane>
        <NTabPane name="finish" tab="已读"> 七里香 </NTabPane>
      </NTabs>
    </div>
  </NCard>
</template>
