<script lang="ts" setup>
import { provide, ref } from 'vue';

import { More, Question } from '@vben/icons';

import {
  NButton,
  NCard,
  NCheckbox,
  NInput,
  NModal,
  NPagination,
  NPopover,
  NTable,
  NTabPane,
  NTabs,
} from 'naive-ui';

import SelectButton from './component/SelectButton.vue';

const ShowMore = ref(false);

const showModal = () => {
  ShowMore.value = true;
};

const array = ref([]) as any;
const approval = ref([]) as any;

const deletedItems = ref([]) as any;

const Delete = (index: number) => {
  approval.value.splice(index, 1);

  approval.value = approval.value.map((item: any, newIndex: number) => ({
    ...item,
    id: newIndex + 1,
  }));

  const item = approval.value[index];

  deletedItems.value.push(item);

  deletedItems.value = deletedItems.value.map(
    (item: any, newIndex: number) => ({
      ...item,
      id: newIndex + 1,
    }),
  );
};
provide('deletedItem', deletedItems);

const restoreItem = (index: number) => {
  const restoredItem = deletedItems.value.splice(index, 1)[0];
  approval.value.push(restoredItem);
  approval.value = approval.value.map((item: any, newIndex: number) => ({
    ...item,
    id: newIndex + 1,
  }));
};

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

fetchData('https://apifoxmock.com/m1/5364813-5036821-default/approval')
  .then((res) => {
    array.value = res.array;
    approval.value = res.approval;
    deletedItems.value = res.delete;
  })
  .catch((error) => console.error('Error fetching data:', error));
</script>
<template>
  <NCard class="ml-10 mt-5 flex h-[100%] w-[95%] flex-col" size="huge">
    <div class="flex justify-between">
      <div class="flex gap-2">
        <div class="text-[16px] font-semibold text-sky-400">|</div>
        <div class="text-[16px] font-semibold">我发送的</div>
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
        <NTabPane class="space-y-4" name="approval" tab="审批中">
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
              <tr v-for="(item, index) in approval" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.opinion }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.memory }}</td>
                <td>{{ item.nowdata }}</td>
                <td>
                  <NPopover :show-arrow="false" trigger="hover">
                    <template #trigger>
                      <NButton><More /></NButton>
                    </template>
                    <div class="space-y-2">
                      <p @click="showModal">催办</p>
                      <p @click="Delete(index)">撤回</p>
                    </div>
                  </NPopover>
                  <NModal v-model:show="ShowMore">
                    <NCard
                      :bordered="false"
                      aria-modal="true"
                      role="dialog"
                      size="huge"
                      style="width: 600px"
                    >
                      <div class="space-y-3">
                        <div class="flex items-center gap-x-2">
                          <div><Question class="size-6 text-orange-400" /></div>
                          <div class="text-[16px]">
                            确定要给当前审批人发送消息提醒吗？
                          </div>
                        </div>
                        <div class="pl-8 text-gray-400">
                          确定后会以信息形式通知审批人
                        </div>
                        <div class="pl-8">
                          <div
                            class="h-8 w-[30%] bg-slate-400 text-center text-[16px]"
                          >
                            当前审批人:刘清泉
                          </div>
                        </div>
                        <div class="flex items-center gap-x-28 pl-8">
                          <div>
                            <NCheckbox
                              label="短信通知当前审批人"
                              value="Pushes Open"
                            />
                          </div>
                          <div class="flex gap-x-4">
                            <NButton quaternary type="success"> 取消 </NButton>
                            <NButton quaternary type="success"> 确认 </NButton>
                          </div>
                        </div>
                      </div>
                    </NCard>
                  </NModal>
                </td>
              </tr>
            </tbody>
          </NTable>
          <NPagination :page-count="24" class="flex justify-self-end" />
        </NTabPane>
        <NTabPane name="finish" tab="审批通过"> 七里香 </NTabPane>
        <NTabPane name="overrule" tab="审批驳回"> 七里香 </NTabPane>
        <NTabPane name="withdraw" tab="已撤销">
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
              <tr v-for="(item, index) in deletedItems" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.opinion }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.memory }}</td>
                <td>{{ item.nowdata }}</td>
                <td>
                  <NButton @click="restoreItem(index)">恢复</NButton>
                </td>
              </tr>
            </tbody>
          </NTable>
        </NTabPane>
      </NTabs>
    </div>
  </NCard>
</template>
