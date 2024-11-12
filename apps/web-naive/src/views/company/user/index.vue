<script lang="ts" setup>
import { reactive, ref } from 'vue';

import { Page } from '@vben/common-ui';
import { MdiAdd } from '@vben/icons';

import {
  NButton,
  NCard,
  NCheckbox,
  NDataTable,
  NDatePicker,
  NInput,
  NModal,
  NRadio,
  NSelect,
  NTabPane,
  NTabs,
  NTree,
} from 'naive-ui';

const timestamp = ref<any>(undefined);
const optionsvalue = ref('');
const uservalue = ref('员工');
const peoplevalue = ref('选择所属角色');
const bvalue = ref('部门');
const checkedValue = ref<null | string>(null);
const handleChange = (e: Event) => {
  checkedValue.value = (e.target as HTMLInputElement).value;
};
const options = reactive([
  {
    label: '部门1',
    optionsvalue: 'song0',
  },
  {
    label: '部门2',
    optionsvalue: 'song1',
  },
  {
    label: '部门2',
    optionsvalue: 'song2',
  },
]);
const user = reactive([
  {
    label: '员工',
    optionsvalue: 'song0',
  },
  {
    label: '供应商',
    optionsvalue: 'song1',
  },
  {
    label: '兼职人员',
    optionsvalue: 'song2',
  },
]);
const people = reactive([
  {
    label: '选择所属角色',
    optionsvalue: 'song0',
  },
  {
    label: '物业岗位',
    optionsvalue: 'song1',
  },
  {
    label: '公寓管家',
    optionsvalue: 'song2',
  },
  {
    label: '财务',
    optionsvalue: 'song3',
  },
  {
    label: '管理员',
    optionsvalue: 'song4',
  },
  {
    label: '综合审批',
    optionsvalue: 'song5',
  },
  {
    label: '产品管理员',
    optionsvalue: 'song6',
  },
  {
    label: '总经理',
    optionsvalue: 'song7',
  },
  {
    label: '集团运营管理部',
    optionsvalue: 'song8',
  },
]);
const columns = reactive([
  {
    title: '序号',
    key: 'key',
  },
  {
    title: '状态',
    key: 'status',
  },
  {
    title: '编号',
    key: 'number',
  },
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '电话',
    key: 'phone',
  },
  {
    title: '工龄',
    key: 'age',
  },
  {
    title: '邮箱',
    key: 'mail',
  },
  {
    title: '部门',
    key: 'department',
  },
  {
    title: '部门角色',
    key: 'user',
  },
  {
    title: '操作',
    key: 'icon',
    slot: 'icon',
  },
]);

const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index + 1,
  status: '正常',
  number: '-',
  name: `Edward King`,
  phone: `18827403366`,
  age: `2年`,
  mail: `-`,
  department: `(直属)软新`,
  user: `财务`,
  icon: 'akar-icons:person',
}));

const pagination = reactive({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});
const showModal1 = ref(false);
const showModal2 = ref(false);
const handleSave1 = () => {
  showModal1.value = false;
};
const handleSave2 = () => {
  showModal2.value = false;
  timestamp.value = undefined;
};
const bodyStyle = {
  width: '600px',
};

const segmented = {
  content: 'soft',
  footer: 'soft',
} as const;

const totalDataCount = ref(46);
const value = ref('');
// 假设的数据和默认展开的键
const datashu = ref([
  {
    label: 'E+SPACE',
    key: '1',
    children: [
      {
        label: '科技园',
        key: '1-1',
        children: [
          {
            label: '(门店)软件新城公寓(4人)',
            key: '1-1-1',
          },
          {
            label: '运营部(软新)',
            key: '1-1-2',
          },
          {
            label: '综合部(软新)',
            key: '1-1-3',
          },
          {
            label: '财务部(软新)',
            key: '1-1-4',
          },
        ],
      },
      {
        label: '招商策划',
        key: '1-2',
      },
      {
        label: '运营管理',
        key: '1-3',
      },
    ],
  },
  {
    label: '未分配员工',
    key: '2',
    children: [
      {
        label: '项目 1',
        key: '2-1',
      },
      {
        label: '项目 2',
        key: '2-2',
      },
      {
        label: '项目 3',
        key: '2-2',
      },
    ],
  },
  {
    label: '申请加入员工',
    key: '3',
    children: [
      {
        label: '项目 1',
        key: '3-1',
      },
      {
        label: '项目 2',
        key: '3-2',
      },
      {
        label: '项目 3',
        key: '3-2',
      },
    ],
  },
]);
const defaultExpandedKeys = ref(['1', '2']);
const selectedKeys = ref(['1-1']); // 假设默认选中的节点

// 树节点选择事件处理
const onNodeSelect = (keys: string[]) => {
  selectedKeys.value = keys;
};
const deleteRow = (row: any) => {
  // 在这里实现删除行的逻辑
  // 比如，你可以找到对应的数据索引并从数组中移除
  const index = data.findIndex((item) => item.key === row.key);
  if (index !== -1) {
    data.splice(index, 1);
  }
};
</script>

<template>
  <Page>
    <NCard title="部门员工">
      <div class="flex">
        <NCard
          :segmented="{
            content: true,
            footer: 'soft',
          }"
          class="mt-10 h-[600px] w-1/5"
          title="组织架构"
        >
          <template #header-extra>
            <MdiAdd class="text-3xl text-blue-500" @click="showModal1 = true" />
            <NModal
              v-model:show="showModal1"
              :bordered="false"
              :segmented="segmented"
              :style="bodyStyle"
              class="custom-card"
              preset="card"
              size="huge"
              title="编辑部门"
            >
              <div>
                <NCard
                  :bordered="false"
                  class="mb-4"
                  size="small"
                  title="部门名称"
                >
                  <div class="flex justify-between">
                    <NInput
                      autosize
                      placeholder="请输入部门名称"
                      style="min-width: 80%; max-width: 80%"
                    />
                    <NCheckbox class="mt-1" label="门店" size="small" />
                  </div>
                </NCard>
                <NCard :bordered="false" size="small" title="所属部门">
                  <NSelect v-model:value="optionsvalue" :options="options" />
                </NCard>
              </div>
              <template #footer>
                <div class="flex justify-end">
                  <NButton
                    class="mr-6 w-[100px] bg-white text-black"
                    type="primary"
                    @click="handleSave1"
                  >
                    取消
                  </NButton>
                  <NButton
                    class="w-[100px]"
                    type="primary"
                    @click="handleSave1"
                  >
                    保存
                  </NButton>
                </div>
              </template>
            </NModal>
          </template>
          <div>
            <!-- NTree 组件 -->
            <NTree
              :data="datashu"
              :default-expanded-keys="defaultExpandedKeys"
              :selected-keys="selectedKeys"
              block-line
              selectable
              @select="onNodeSelect"
            />
          </div>
        </NCard>
        <div class="ml-4 mt-10 h-[400px] w-3/4">
          <div class="flex justify-between">
            <div>成员管理</div>
            <NButton class="mb-2" type="info" @click="showModal2 = true">
              添加员工
            </NButton>
            <NModal
              v-model:show="showModal2"
              :bordered="false"
              :segmented="segmented"
              :style="bodyStyle"
              class="custom-card"
              preset="card"
              size="huge"
              title="添加员工"
            >
              <div>
                <div class="flex">
                  <NCard
                    :bordered="false"
                    class="mb-4"
                    size="small"
                    title="员工编号"
                  >
                    <NInput
                      autosize
                      placeholder="请输入员工编号"
                      style="min-width: 100%; max-width: 100%"
                    />
                  </NCard>
                  <NCard
                    :bordered="false"
                    class="mb-4"
                    size="small"
                    title="员工类型"
                  >
                    <NSelect v-model:value="uservalue" :options="user" />
                  </NCard>
                </div>
                <div class="flex">
                  <NCard
                    :bordered="false"
                    class="mb-4"
                    size="small"
                    title="员工姓名"
                  >
                    <NInput
                      autosize
                      placeholder="请输入员工姓名"
                      style="min-width: 100%; max-width: 100%"
                    />
                  </NCard>
                  <NCard
                    :bordered="false"
                    class="mb-4"
                    size="small"
                    title="员工电话(登录手机号)"
                  >
                    <NInput
                      autosize
                      placeholder="请输入员工电话"
                      style="min-width: 100%; max-width: 100%"
                    />
                  </NCard>
                </div>
                <NCard
                  :bordered="false"
                  class="mb-4"
                  size="small"
                  title="直属部门"
                >
                  <div class="flex justify-between">
                    <NInput
                      v-model:value="bvalue"
                      autosize
                      style="min-width: 70%; max-width: 70%"
                    />
                    <NCheckbox class="mt-1" label="本部门领导" size="small" />
                  </div>
                </NCard>
                <NCard :bordered="false" size="small" title="角色">
                  <NSelect
                    v-model:value="peoplevalue"
                    :options="people"
                    clearable
                  />
                </NCard>
                <NCard
                  :bordered="false"
                  class="mb-4"
                  size="small"
                  title="员工身份证"
                >
                  <div class="flex justify-between">
                    <NInput
                      autosize
                      placeholder="身份证号"
                      style="min-width: 70%; max-width: 70%"
                    />
                    <div class="flex justify-between">
                      <NRadio
                        :checked="checkedValue === 'Definitely Maybe'"
                        name="basic-demo"
                        value="Definitely Maybe"
                        @change="handleChange"
                      >
                        男
                      </NRadio>
                      <NRadio
                        :checked="checkedValue === 'Be Here Now'"
                        name="basic-demo"
                        value="Be Here Now"
                        @change="handleChange"
                      >
                        女
                      </NRadio>
                    </div>
                  </div>
                </NCard>
                <div class="flex">
                  <NCard
                    :bordered="false"
                    class="mb-4"
                    size="small"
                    title="邮箱"
                  >
                    <NInput
                      autosize
                      placeholder="请输入"
                      style="min-width: 100%; max-width: 100%"
                    />
                  </NCard>
                  <NCard
                    :bordered="false"
                    class="mb-4"
                    size="small"
                    title="入值日期"
                  >
                    <NDatePicker
                      v-model:value="timestamp"
                      clearable
                      type="date"
                    />
                  </NCard>
                </div>
              </div>
              <template #footer>
                <div class="flex justify-end">
                  <NButton
                    class="mr-6 w-[100px] bg-white text-black"
                    type="primary"
                    @click="handleSave2"
                  >
                    取消
                  </NButton>
                  <NButton
                    class="w-[100px]"
                    type="primary"
                    @click="handleSave2"
                  >
                    保存
                  </NButton>
                </div>
              </template>
            </NModal>
          </div>
          <div class="text-indent-6 w-full bg-gray-400">
            <p class="ml-4">E+SPACE</p>
          </div>
          <div class="mt-6 flex justify-between">
            <NTabs>
              <NTabPane name="oasis" tab="正常" />
              <NTabPane name="the beatles" tab="已禁用" />
            </NTabs>
            <NInput
              v-model:value="value"
              placeholder="客户姓名/客户电话"
              style="height: 30px"
              type="text"
            />
          </div>
          <NDataTable :columns="columns" :data="data" :pagination="pagination">
            <template #operation="{ row }">
              <!-- 使用NButton包裹MdiAdd图标，并绑定点击事件 -->
              <NButton class="text-blue-500" @click="deleteRow(row)">
                删除
              </NButton>
            </template>
          </NDataTable>
          <!-- 分页条 -->
          <div class="text-center">共 {{ totalDataCount }} 条</div>
        </div>
      </div>
    </NCard>
  </Page>
</template>
