<script setup lang="ts">
import { ref, watch } from 'vue';

const items1 = ref([{ id: 1, label: '查看（电脑端）', selected: false }]);
const items2 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '添加资源', selected: false },
  { id: 3, label: '编辑', selected: false },
  { id: 4, label: '跟进', selected: false },
  { id: 5, label: '指派', selected: false },
  { id: 6, label: '关闭', selected: false },
  { id: 7, label: '重新激活', selected: false },
  { id: 8, label: '转为公客', selected: false },
  { id: 9, label: '共享资源', selected: false },
  { id: 10, label: '删除', selected: false },
  { id: 11, label: '添加提醒', selected: false },
]);
const items3 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '添加资源', selected: false },
  { id: 3, label: '编辑', selected: false },
  { id: 4, label: '抢单', selected: false },
  { id: 5, label: '跟进', selected: false },
  { id: 6, label: '指派', selected: false },
  { id: 7, label: '关闭', selected: false },
  { id: 8, label: '重新激活', selected: false },
  { id: 9, label: '共享资源', selected: false },
  { id: 10, label: '删除', selected: false },
  { id: 11, label: '添加提醒', selected: false },
]);
const items4 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '添加项目', selected: false },
  { id: 3, label: '编辑项目', selected: false },
  { id: 4, label: '删除项目', selected: false },
  { id: 5, label: '关闭房源', selected: false },
  { id: 6, label: '删除房源', selected: false },
  { id: 7, label: '编辑房源信息', selected: false },
  { id: 8, label: '变更房源状态', selected: false },
  { id: 9, label: '激活房源', selected: false },
  { id: 10, label: '房源记录', selected: false },
  { id: 12, label: '房源价格修改', selected: false },
  { id: 13, label: '房源类型转换', selected: false },
  { id: 14, label: '配置消息通知', selected: false },
  { id: 15, label: '修改可租日期', selected: false },
  { id: 16, label: '锁房/解锁', selected: false },
  { id: 17, label: '导出', selected: false },
]);
const items5 = ref([{ id: 1, label: '查看', selected: false }]);
const items6 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '添加', selected: false },
  { id: 3, label: '删除', selected: false },
  { id: 4, label: '作废', selected: false },
]);
const items7 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '导出', selected: false },
  { id: 3, label: '发放提成', selected: false },
]);
const items8 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '导出', selected: false },
]);
const items9 = ref([
  { id: 1, label: '查看', selected: false },
  { id: 2, label: '导出', selected: false },
  { id: 3, label: '编辑', selected: false },
  { id: 4, label: '禁用', selected: false },
]);

const allSelected1 = ref(false);
const allSelected2 = ref(false);
const allSelected3 = ref(false);
const allSelected4 = ref(false);

watch(items1, () => {
  updateAllSelected1();
});

function updateAllSelected1() {
  allSelected1.value =
    items1.value.length > 0 && items1.value.every((item) => item.selected);
}

function toggle1(item: any) {
  item.selected = !item.selected;
  // 更新全选状态
  updateAllSelected1();
}
function toggle2(item: any) {
  item.selected = !item.selected;
}
function toggle3(item: any) {
  item.selected = !item.selected;
}

function fn1() {
  allSelected1.value = !allSelected1.value;
  items1.value.forEach((item) => {
    item.selected = allSelected1.value;
  });
}
const obj = ref({
  si: false,
  gong: false,
});
const obj1 = ref({
  du: false,
  kong: false,
  tiao: false,
});
const obj2 = ref({
  ye: false,
  fa: false,
  fen: false,
});
function fn2() {
  allSelected2.value = !allSelected2.value;
  obj.value.gong = allSelected2.value;
  obj.value.si = allSelected2.value;
}
function fn3() {
  allSelected3.value = !allSelected3.value;
  obj1.value.du = allSelected3.value;
  obj1.value.kong = allSelected3.value;
  obj1.value.tiao = allSelected3.value;
}
function fn4() {
  allSelected4.value = !allSelected4.value;
  obj2.value.fa = allSelected4.value;
  obj2.value.fen = allSelected4.value;
  obj2.value.ye = allSelected4.value;
}
const getStyle1 = (index: number) => {
  return index === items2.value.length - 1 ? { flex: '2' } : {};
};
const getStyle2 = (index: number) => {
  return index === items3.value.length - 1 ? { flex: '2' } : {};
};
const getStyle3 = (index: number) => {
  return index === items4.value.length - 1 ? { flex: '3' } : {};
};
const getStyle4 = (index: number) => {
  return index === items6.value.length - 1 ? { flex: '3' } : {};
};
const getStyle5 = (index: number) => {
  return index === items7.value.length - 1 ? { flex: '3' } : {};
};
</script>

<template>
  <div class="mt-4">
    <input :checked="allSelected1" type="checkbox" @click="fn1" />
    <label class="text-[18px]">工作台</label>
    <hr style="border: 1px solid gray" />
    <div class="mt-2 flex">
      <div v-for="item in items1" :key="item.id" class="ml-5">
        <input
          :checked="allSelected1 || item.selected"
          type="checkbox"
          @click.stop="toggle1(item)"
        />
        <label>{{ item.label }}</label>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <input :checked="allSelected2" type="checkbox" @click="fn2" />
    <label class="text-[18px]">线索管理</label>
    <hr style="border: 1px solid gray" />
    <div class="mt-2 flex flex-col">
      <div class="flex justify-between">
        <div class="ml-5">
          <input :checked="obj.si" type="checkbox" @click="obj.si = !obj.si" />
          <label class="text-[18px]">租客-私客</label>
        </div>
        <div class="flex w-3/5 flex-wrap justify-around">
          <div
            v-for="(item, index) in items2"
            :key="index"
            :style="getStyle1(index)"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle2(item)"
          >
            <input :checked="obj.si || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
      <hr style="border: 1px dashed gray" />
      <div class="mt-3 flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj.gong"
            type="checkbox"
            @click="obj.gong = !obj.gong"
          />
          <label class="text-[18px]">租客-公客</label>
        </div>
        <div class="flex w-3/5 flex-wrap justify-around">
          <div
            v-for="(item, index) in items3"
            :key="item.id"
            :style="getStyle2(index)"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle3(item)"
          >
            <input :checked="obj.gong || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <input :checked="allSelected3" type="checkbox" @click="fn3" />
    <label class="text-[18px]">房源管理</label>
    <hr style="border: 1px solid gray" />
    <div class="mt-2 flex flex-col">
      <div class="flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj1.du"
            type="checkbox"
            @click="obj1.du = !obj1.du"
          />
          <label class="text-[18px]">独栋</label>
        </div>
        <div class="flex w-3/5 flex-wrap justify-around">
          <div
            v-for="(item, index) in items4"
            :key="index"
            :style="getStyle3(index)"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle2(item)"
          >
            <input :checked="obj1.du || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
      <hr style="border: 1px dashed gray" />
      <div class="mt-3 flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj1.kong"
            type="checkbox"
            @click="obj1.kong = !obj1.kong"
          />
          <label class="text-[18px]">空房快查</label>
        </div>
        <div class="flex w-3/5 flex-wrap">
          <div
            v-for="item in items5"
            :key="item.id"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle3(item)"
          >
            <input :checked="obj1.kong || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
      <hr style="border: 1px dashed gray" />
      <div class="mt-3 flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj1.tiao"
            type="checkbox"
            @click="obj1.tiao = !obj1.tiao"
          />
          <label class="text-[18px]">调价管理</label>
        </div>
        <div class="flex w-3/5 flex-wrap justify-around">
          <div
            v-for="(item, index) in items6"
            :key="item.id"
            :style="getStyle4(index)"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle3(item)"
          >
            <input :checked="obj1.tiao || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <input :checked="allSelected4" type="checkbox" @click="fn4" />
    <label class="text-[18px]">业绩管理</label>
    <hr style="border: 1px solid gray" />
    <div class="mt-2 flex flex-col">
      <div class="flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj2.ye"
            type="checkbox"
            @click="obj2.ye = !obj2.ye"
          />
          <label class="text-[18px]">业绩台账</label>
        </div>
        <div class="flex w-3/5 flex-wrap justify-around">
          <div
            v-for="(item, index) in items7"
            :key="index"
            :style="getStyle5(index)"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle2(item)"
          >
            <input :checked="obj2.ye || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
      <hr style="border: 1px dashed gray" />
      <div class="mt-3 flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj2.fa"
            type="checkbox"
            @click="obj2.fa = !obj2.fa"
          />
          <label class="text-[18px]">发放记录</label>
        </div>
        <div class="flex w-3/5 flex-wrap">
          <div
            v-for="item in items8"
            :key="item.id"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle3(item)"
          >
            <input :checked="obj2.fa || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
      <hr style="border: 1px dashed gray" />
      <div class="mt-3 flex justify-between">
        <div class="ml-5">
          <input
            :checked="obj2.fen"
            type="checkbox"
            @click="obj2.fen = !obj2.fen"
          />
          <label class="text-[18px]">分佣配置</label>
        </div>
        <div class="flex w-3/5 flex-wrap justify-around">
          <div
            v-for="(item, index) in items9"
            :key="item.id"
            :style="getStyle4(index)"
            class="mb-2 flex w-1/6 items-center"
            @click.stop="toggle3(item)"
          >
            <input :checked="obj2.fen || item.selected" type="checkbox" />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
