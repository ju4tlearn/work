<!-- eslint-disable unicorn/prefer-ternary -->
<script lang="ts" setup>
import type { NotificationType } from 'naive-ui';

import { computed, reactive, ref, watch } from 'vue';

import { Page } from '@vben/common-ui';
import { MdiAdd, MdiAddDian, Mdipeople } from '@vben/icons';

import {
  NButton,
  NCard,
  NCheckbox,
  NDataTable,
  NDropdown,
  NInput,
  NModal,
  NRadio,
  NScrollbar,
  NSelect,
  NTabPane,
  NTabs,
  useNotification,
} from 'naive-ui';

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
    title: '邮箱',
    key: 'mail',
  },
  {
    title: '部门',
    key: 'department',
  },
]);
const peopleList = ref([
  { id: 1, name: '总经理' },
  { id: 2, name: '产品经理' },
]);
const Peroptions = [
  {
    label: '编辑',
    key: 'profile',
  },
  {
    label: '删除',
    key: 'editProfile',
  },
];
const data = Array.from({ length: 46 }).map((_, index) => ({
  key: index + 1,
  status: '正常',
  number: '-',
  name: `张三`,
  phone: `18827403366`,
  mail: `-`,
  department: `(直属)软新`,
}));

const pagination = reactive({
  page: 1,
  pageSize: 10,
  showSizePicker: true,
  pageSizes: [3, 5, 7, 10],
  onChange: (page: number) => {
    pagination.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    pagination.pageSize = pageSize;
    pagination.page = 1;
  },
});
const timestamp = ref<any>(undefined);
const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);
const handleSave1 = () => {
  showModal1.value = false;
};
const handleSave2 = () => {
  showModal2.value = false;
  timestamp.value = undefined;
};
const handleSave3 = () => {
  showModal3.value = false;
};
const uservalue = ref('员工');
const peoplevalue = ref('选择所属角色');
const bvalue = ref('部门');
const checkedValue = ref<null | string>(null);
const handleChange = (e: Event) => {
  checkedValue.value = (e.target as HTMLInputElement).value;
};
const currentTab = ref('成员');
const showInput = computed(() => currentTab.value === '成员');
const showRadio = computed(() => currentTab.value === '资源');
const showBtn = computed(() => currentTab.value === '数据');
const notification = useNotification();
const currentItem = ref(null);
const handleDelete = (index: any) => {
  // 这里添加实际的删除逻辑，例如：
  peopleList.value.splice(index, 1);
};
const handleSelect = (key: any, item: any) => {
  if (key === 'profile') {
    currentItem.value = item; // 存储当前点击的项的数据
    showModal3.value = true; // 显示模态框
  } else if (key === 'editProfile') {
    handleDelete(item.index);
  }
};
const notify = (type: NotificationType) => {
  notification[type]({
    content: '保存成功',
    duration: 2500,
    keepAliveOnHover: true,
  });
};
const bodyStyle = {
  width: '600px',
};

const segmented = {
  content: 'soft',
  footer: 'soft',
} as const;
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
const totalDataCount = ref(46);
const value1 = ref('');
const value2 = ref('');
// 假设的数据和默认展开的键
const checked = ref(true);
const disabled = ref(true);
const WK1 = ref(true);
const g1 = ref(true);
const s1 = ref(true);
const Z1 = ref(true);
const ZC1 = ref(false);
const Zc1 = ref(false);
const TJ1 = ref(true);
const KF1 = ref(true);
const HY1 = ref(false);
const YD1 = ref(false);
const PD1 = ref(false);
const ZK1 = ref(false);
const HT1 = ref(true);
const CW1 = ref(false);
const ZD1 = ref(false);
const ZDLS1 = ref(false);
const WZK1 = ref(false);
const HZZK1 = ref(true);
const KP1 = ref(false);
const KPZH1 = ref(false);
const ZH1 = ref(false);
const QT1 = ref(false);
const HF1 = ref(false);
const TF1 = ref(false);
const XZ1 = ref(false);
const YX1 = ref(true);
const FY1 = ref(true);
const TG1 = ref(true);
const YXZH1 = ref(true);
const YC1 = ref(true);
const YH1 = ref(false);
const YHQ1 = ref(false);
const QB1 = ref(true);
const QBGL1 = ref(true);
const SPGL1 = ref(true);
const DSP1 = ref(true);
const YSP1 = ref(true);
const FQWD1 = ref(true);
const CSWD1 = ref(true);
const WZ1 = ref(true);
const WZGL1 = ref(true);
const FKGL1 = ref(true);
const SJ1 = ref(true);
const SJFX1 = ref(true);
const YJGL1 = ref(false);
const XXGG1 = ref(false);
const GG1 = ref(false);
const QY1 = ref(false);
const BM1 = ref(false);
const USER1 = ref(true);
const CPPZ1 = ref(true);
const ZDGL1 = ref(true);
const YY1 = ref(true);
const SK1 = ref(false);
const SPPZ1 = ref(true);
const GXH1 = ref(false);
const QX1 = ref(false);
// 定义 g2 到 g11 响应式变量
const WK2 = ref(true);
const g2 = ref(true);
const g3 = ref(true);
const g4 = ref(true);
const g5 = ref(true);
const g6 = ref(true);
const g7 = ref(true);
const g8 = ref(true);
const g9 = ref(true);
const g10 = ref(true);
const g11 = ref(true);
const s2 = ref(true);
const s3 = ref(true);
const s4 = ref(true);
const s5 = ref(true);
const s6 = ref(true);
const s7 = ref(true);
const s8 = ref(true);
const s9 = ref(true);
const s10 = ref(true);
const s11 = ref(true);
const ZC2 = ref(true);
const ZC3 = ref(true);
const ZC4 = ref(true);
const ZC5 = ref(true);
const ZC6 = ref(true);
const ZC7 = ref(true);
const ZC8 = ref(true);
const ZC9 = ref(true);
const ZC10 = ref(true);
const ZC11 = ref(true);
const ZC12 = ref(true);
const ZC13 = ref(true);
const ZC14 = ref(false);
const ZC15 = ref(false);
const ZC16 = ref(true);
const TJ2 = ref(true);
const TJ3 = ref(true);
const TJ4 = ref(true);
const YD2 = ref(true);
const YD3 = ref(true);
const YD4 = ref(true);
const YD5 = ref(true);
const YD6 = ref(true);
const YD7 = ref(true);
const YD8 = ref(true);
const YD9 = ref(true);
const YD10 = ref(false);
const YD11 = ref(false);
const YD12 = ref(false);
const YD13 = ref(true);
const PD2 = ref(true);
const PD3 = ref(true);
const PD4 = ref(false);
const ZK2 = ref(true);
const ZK3 = ref(true);
const ZK4 = ref(true);
const ZK5 = ref(true);
const ZK6 = ref(true);
const ZK7 = ref(true);
const ZK8 = ref(true);
const ZK9 = ref(true);
const ZK10 = ref(true);
const ZK11 = ref(false);
const ZK12 = ref(false);
const ZK13 = ref(true);
const ZK14 = ref(true);
const ZK15 = ref(true);
const ZK16 = ref(true);
const ZK17 = ref(true);
const ZK18 = ref(false);
const ZK19 = ref(true);
const ZK20 = ref(true);
const ZK21 = ref(true);
const ZK22 = ref(true);
const ZK23 = ref(false);
const ZD2 = ref(true);
const ZD3 = ref(true);
const ZD4 = ref(true);
const ZD5 = ref(true);
const ZD6 = ref(true);
const ZD7 = ref(true);
const ZD8 = ref(true);
const ZD9 = ref(true);
const ZD10 = ref(true);
const ZD11 = ref(false);
const ZD12 = ref(false);
const ZD13 = ref(true);
const ZD14 = ref(true);
const ZD15 = ref(true);
const ZD16 = ref(true);
const ZD17 = ref(true);
const ZD18 = ref(false);
const ZD19 = ref(true);
const ZD20 = ref(true);
const ZD21 = ref(true);
const ZD22 = ref(true);
const ZD23 = ref(false);
const ZD24 = ref(false);
const ZD25 = ref(false);
const ZDLS2 = ref(true);
const ZDLS3 = ref(true);
const ZDLS4 = ref(true);
const ZDLS5 = ref(false);
const ZDLS6 = ref(false);
const ZDLS7 = ref(false);
const ZDLS8 = ref(false);
const WZK2 = ref(false);
const WZK3 = ref(false);
const WZK4 = ref(false);
const WZK5 = ref(false);
const WZK6 = ref(false);
const WZK7 = ref(false);
const HZZK2 = ref(true);
const HZZK3 = ref(true);
const HZZK4 = ref(true);
const KP2 = ref(false);
const KP3 = ref(false);
const KP4 = ref(false);
const KP5 = ref(false);
const KP6 = ref(false);
const KP7 = ref(false);
const KP8 = ref(false);
const KP9 = ref(false);
const KP10 = ref(false);
const KP11 = ref(false);
const KPZH2 = ref(false);
const KPZH3 = ref(false);
const KPZH4 = ref(false);
const KPZH5 = ref(false);
const KPZH6 = ref(false);
const KPZH7 = ref(false);
const KPZH8 = ref(false);
const KPZH9 = ref(false);
const KPZH10 = ref(false);
const KPZH11 = ref(false);
const KPZH12 = ref(false);
const KPZH13 = ref(false);
const QT2 = ref(false);
const QT3 = ref(false);
const QT4 = ref(false);
const QT5 = ref(false);
const QT6 = ref(false);
const QT7 = ref(false);
const QT8 = ref(false);
const QT9 = ref(false);
const QT10 = ref(false);
const QT11 = ref(false);
const QT12 = ref(false);
const HF2 = ref(false);
const HF3 = ref(false);
const HF4 = ref(true);
const HF5 = ref(true);
const HF6 = ref(true);
const TF2 = ref(false);
const TF3 = ref(false);
const TF4 = ref(true);
const TF5 = ref(true);
const TF6 = ref(true);
const XZ2 = ref(false);
const XZ3 = ref(false);
const XZ4 = ref(false);
const XZ5 = ref(false);
const XZ6 = ref(false);
const XZ7 = ref(false);
const FY2 = ref(true);
const FY3 = ref(true);
const FY4 = ref(true);
const FY5 = ref(true);
const TG2 = ref(true);
const TG3 = ref(true);
const TG4 = ref(true);
const YXZH2 = ref(true);
const YXZH3 = ref(true);
const YC2 = ref(true);
const YC3 = ref(true);
const YH2 = ref(false);
const YH3 = ref(false);
const YH4 = ref(false);
const YH5 = ref(false);
const YH6 = ref(false);
const YH7 = ref(false);
const YH8 = ref(false);
const YHQ2 = ref(false);
const YHQ3 = ref(false);
const QBGL2 = ref(true);
const QBGL3 = ref(true);
const QBGL4 = ref(true);
const QBGL5 = ref(true);
const WZGL2 = ref(true);
const WZGL3 = ref(true);
const WZGL4 = ref(true);
const WZGL5 = ref(true);
const WZGL6 = ref(true);
const WZGL7 = ref(true);
const WZGL8 = ref(true);
const WZGL9 = ref(true);
const WZGL10 = ref(true);
const FKGL2 = ref(true);
const FKGL3 = ref(true);
const FKGL4 = ref(true);
const SJFX2 = ref(false);
const SJFX3 = ref(false);
const SJFX4 = ref(false);
const SJFX5 = ref(false);
const SJFX6 = ref(false);
const SJFX7 = ref(false);
const SJFX8 = ref(false);
const YJTZ1 = ref(false);
const YJTZ2 = ref(false);
const YJTZ3 = ref(false);
const YJTZ4 = ref(false);
const FFJL1 = ref(false);
const FFJL2 = ref(false);
const FFJL3 = ref(false);
const FYPZ1 = ref(false);
const FYPZ2 = ref(false);
const FYPZ3 = ref(false);
const FYPZ4 = ref(false);
const FYPZ5 = ref(false);
const GG2 = ref(false);
const GG3 = ref(false);
const GG4 = ref(false);
const GG5 = ref(false);
const BM2 = ref(true);
const BM3 = ref(true);
const BM4 = ref(true);
const BM5 = ref(true);
const BM6 = ref(false);
const BM7 = ref(false);
const BM8 = ref(true);
const BM9 = ref(true);
const BM10 = ref(true);
const BM11 = ref(true);
const BM12 = ref(true);
const BM13 = ref(true);
const BM14 = ref(true);
const BM15 = ref(true);
const BM16 = ref(true);
const BM17 = ref(true);
const BM18 = ref(false);
const BM19 = ref(false);
const USER2 = ref(true);
const USER3 = ref(true);
const USER4 = ref(true);
const USER5 = ref(true);
const CPPZ2 = ref(true);
const ZDGL2 = ref(true);
const ZDGL3 = ref(true);
const ZDGL4 = ref(true);
const YY2 = ref(true);
const SK2 = ref(true);
const SK3 = ref(true);
const SK4 = ref(true);
const SK5 = ref(true);
const SK6 = ref(true);
const SK7 = ref(true);
const SK8 = ref(false);
const SPPZ2 = ref(true);
const SPPZ3 = ref(true);
const SPPZ4 = ref(true);
const SPPZ5 = ref(true);
const SPPZ6 = ref(true);
const GXH2 = ref(false);
// 监听所有子复选框的状态，如果全部选中，则设置 g1 为 true
const checkboxesS = ref([s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]);
const checkboxesG = ref([g2, g3, g4, g5, g6, g7, g8, g9, g10, g11]);
const checkboxesZC = ref([
  ZC2,
  ZC3,
  ZC4,
  ZC5,
  ZC6,
  ZC7,
  ZC8,
  ZC9,
  ZC10,
  ZC11,
  ZC12,
  ZC13,
  ZC14,
  ZC15,
  ZC16,
]);
const checkboxesPD = ref([PD2, PD3, PD4]);
const checkboxesZK = ref([
  ZK2,
  ZK3,
  ZK4,
  ZK5,
  ZK6,
  ZK7,
  ZK8,
  ZK9,
  ZK10,
  ZK11,
  ZK12,
  ZK13,
  ZK14,
  ZK15,
  ZK16,
  ZK17,
  ZK18,
  ZK19,
  ZK20,
  ZK21,
  ZK22,
  ZK23,
]);
const checkboxesYD = ref([
  YD2,
  YD3,
  YD4,
  YD5,
  YD6,
  YD7,
  YD8,
  YD9,
  YD10,
  YD11,
  YD12,
  YD13,
]);
const checkboxesTJ = ref([TJ2, TJ3, TJ4]);
const checkboxesZD = ref([
  ZD2,
  ZD3,
  ZD4,
  ZD5,
  ZD6,
  ZD7,
  ZD8,
  ZD9,
  ZD10,
  ZD11,
  ZD12,
  ZD13,
  ZD14,
  ZD15,
  ZD16,
  ZD17,
  ZD18,
  ZD19,
  ZD20,
  ZD21,
  ZD22,
  ZD23,
  ZD24,
  ZD25,
]);
const checkboxesZDLS = ref([ZDLS2, ZDLS3, ZDLS4, ZDLS5, ZDLS6, ZDLS7, ZDLS8]);
const checkboxesWZK = ref([WZK2, WZK3, WZK4, WZK5, WZK6, WZK7]);
const checkboxesHZZK = ref([HZZK2, HZZK3, HZZK4]);
const checkboxesKP = ref([KP2, KP3, KP4, KP5, KP6, KP7, KP8, KP9, KP10, KP11]);
const checkboxesKPZH = ref([
  KPZH2,
  KPZH3,
  KPZH4,
  KPZH5,
  KPZH6,
  KPZH7,
  KPZH8,
  KPZH9,
  KPZH10,
  KPZH11,
  KPZH12,
  KPZH13,
]);
const checkboxesQT = ref([
  QT2,
  QT3,
  QT4,
  QT5,
  QT6,
  QT7,
  QT8,
  QT9,
  QT10,
  QT11,
  QT12,
]);
const checkboxesTF = ref([TF2, TF3, TF4, TF5, TF6]);
const checkboxesHF = ref([HF2, HF3, HF4, HF5, HF6]);
const checkboxesXZ = ref([XZ2, XZ3, XZ4, XZ5, XZ6, XZ7]);
const checkboxesFY = ref([FY2, FY3, FY4, FY5]);
const checkboxesTG = ref([TG2, TG3, TG4]);
const checkboxesYXZH = ref([YXZH2, YXZH3]);
const checkboxesYC = ref([YC2, YC3]);
const checkboxesYH = ref([YH2, YH3, YH4, YH5, YH6, YH7, YH8]);
const checkboxesYHQ = ref([YHQ2, YHQ3]);
const checkboxesQBGL = ref([QBGL2, QBGL3, QBGL4, QBGL5]);
const checkboxesWZGL = ref([
  WZGL2,
  WZGL3,
  WZGL4,
  WZGL5,
  WZGL6,
  WZGL7,
  WZGL8,
  WZGL9,
  WZGL10,
]);
const checkboxesFKGL = ref([FKGL2, FKGL3, FKGL4]);
const checkboxesSJFX = ref([SJFX2, SJFX3, SJFX4, SJFX5, SJFX6, SJFX7, SJFX8]);
const checkboxesYJ = ref([
  YJTZ1,
  YJTZ2,
  YJTZ3,
  YJTZ4,
  FFJL1,
  FFJL2,
  FFJL3,
  FYPZ1,
  FYPZ2,
  FYPZ3,
  FYPZ4,
  FYPZ5,
]);
const checkboxesGG = ref([GG2, GG3, GG4, GG5]);
const checkboxesBM = ref([
  BM2,
  BM3,
  BM4,
  BM5,
  BM6,
  BM7,
  BM8,
  BM9,
  BM10,
  BM11,
  BM12,
  BM13,
  BM14,
  BM15,
  BM16,
  BM17,
  BM18,
  BM19,
]);
const checkboxesUSER = ref([USER2, USER3, USER4, USER5]);
const checkboxesCPPZ = ref([CPPZ2]);
const checkboxesZDGL = ref([ZDGL2, ZDGL3, ZDGL4]);
const checkboxesYY = ref([YY2]);
const checkboxesSK = ref([SK2, SK3, SK4, SK5, SK6, SK7, SK8]);
const checkboxesSPPZ = ref([SPPZ2, SPPZ3, SPPZ4, SPPZ5, SPPZ6]);
const checkboxesGXH = ref([GXH2]);
const checkboxesWK = ref([WK2]);
watch(
  checkboxesWK,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    WK1.value = allChecked;
  },
  { deep: true },
);

// 监听 WK1 的状态，如果 WK1 被选中，则设置所有子复选框为选中状态
watch(WK1, (newValue) => {
  if (newValue) {
    checkboxesWK.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 WK1 被取消选中，不改变子复选框的状态
    checkboxesWK.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesG,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    g1.value = allChecked;
  },
  { deep: true },
);

// 监听 g1 的状态，如果 g1 被选中，则设置所有子复选框为选中状态
watch(g1, (newValue) => {
  if (newValue) {
    checkboxesG.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 g1 被取消选中，不改变子复选框的状态
    checkboxesG.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});

watch(
  checkboxesS,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    s1.value = allChecked;
  },
  { deep: true },
);

// 监听 s1 的状态，如果 s1 被选中，则设置所有子复选框为选中状态
watch(s1, (newValue) => {
  if (newValue) {
    checkboxesS.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 s1 被取消选中，不改变子复选框的状态
    checkboxesS.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesZC,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    ZC1.value = allChecked;
  },
  { deep: true },
);

// 监听 ZC1 的状态，如果 ZC1 被选中，则设置所有子复选框为选中状态
watch(ZC1, (newValue) => {
  if (newValue) {
    checkboxesZC.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 ZC1 被取消选中，不改变子复选框的状态
    checkboxesZC.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesTJ,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    TJ1.value = allChecked;
  },
  { deep: true },
);

// 监听 TJ1 的状态，如果 TJ1 被选中，则设置所有子复选框为选中状态
watch(TJ1, (newValue) => {
  if (newValue) {
    checkboxesTJ.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 TJ1 被取消选中，不改变子复选框的状态
    checkboxesTJ.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYD,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YD1.value = allChecked;
  },
  { deep: true },
);

// 监听 YD1 的状态，如果 YD1 被选中，则设置所有子复选框为选中状态
watch(YD1, (newValue) => {
  if (newValue) {
    checkboxesYD.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 YD1 被取消选中，不改变子复选框的状态
    checkboxesYD.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesPD,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    PD1.value = allChecked;
  },
  { deep: true },
);

// 监听 PD1 的状态，如果 PD1 被选中，则设置所有子复选框为选中状态
watch(PD1, (newValue) => {
  if (newValue) {
    checkboxesPD.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 PD1 被取消选中，不改变子复选框的状态
    checkboxesPD.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesZK,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    ZK1.value = allChecked;
  },
  { deep: true },
);

// 监听 ZK1 的状态，如果 ZK1 被选中，则设置所有子复选框为选中状态
watch(ZK1, (newValue) => {
  if (newValue) {
    checkboxesZK.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 ZK1 被取消选中，不改变子复选框的状态
    checkboxesZK.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesZD,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    ZD1.value = allChecked;
  },
  { deep: true },
);

// 监听 ZD1 的状态，如果 ZD1 被选中，则设置所有子复选框为选中状态
watch(ZD1, (newValue) => {
  if (newValue) {
    checkboxesZD.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 ZD1 被取消选中，不改变子复选框的状态
    checkboxesZD.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesZDLS,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    ZDLS1.value = allChecked;
  },
  { deep: true },
);

// 监听 ZDLS1 的状态，如果 ZDLS1 被选中，则设置所有子复选框为选中状态
watch(ZDLS1, (newValue) => {
  if (newValue) {
    checkboxesZDLS.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 ZDLS1 被取消选中，不改变子复选框的状态
    checkboxesZDLS.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesWZK,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    WZK1.value = allChecked;
  },
  { deep: true },
);

// 监听 WZK1 的状态，如果 WZK1 被选中，则设置所有子复选框为选中状态
watch(WZK1, (newValue) => {
  if (newValue) {
    checkboxesWZK.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 WZK1 被取消选中，不改变子复选框的状态
    checkboxesWZK.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesHZZK,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    HZZK1.value = allChecked;
  },
  { deep: true },
);

// 监听 HZZK1 的状态，如果 HZZK1 被选中，则设置所有子复选框为选中状态
watch(HZZK1, (newValue) => {
  if (newValue) {
    checkboxesHZZK.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 HZZK1 被取消选中，不改变子复选框的状态
    checkboxesHZZK.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesKP,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    KP1.value = allChecked;
  },
  { deep: true },
);

// 监听 KP1 的状态，如果 KP1 被选中，则设置所有子复选框为选中状态
watch(KP1, (newValue) => {
  if (newValue) {
    checkboxesKP.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 KP1 被取消选中，不改变子复选框的状态
    checkboxesKP.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesKPZH,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    KPZH1.value = allChecked;
  },
  { deep: true },
);

// 监听 KPZH1 的状态，如果 KPZH1 被选中，则设置所有子复选框为选中状态
watch(KPZH1, (newValue) => {
  if (newValue) {
    checkboxesKPZH.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 KPZH1 被取消选中，不改变子复选框的状态
    checkboxesKPZH.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesQT,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    QT1.value = allChecked;
  },
  { deep: true },
);

// 监听 QT1 的状态，如果 QT1 被选中，则设置所有子复选框为选中状态
watch(QT1, (newValue) => {
  if (newValue) {
    checkboxesQT.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 QT1 被取消选中，不改变子复选框的状态
    checkboxesQT.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesHF,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    HF1.value = allChecked;
  },
  { deep: true },
);

// 监听 HF1 的状态，如果 HF1 被选中，则设置所有子复选框为选中状态
watch(HF1, (newValue) => {
  if (newValue) {
    checkboxesHF.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 HF1 被取消选中，不改变子复选框的状态
    checkboxesHF.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesTF,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    TF1.value = allChecked;
  },
  { deep: true },
);

// 监听 TF1 的状态，如果 TF1 被选中，则设置所有子复选框为选中状态
watch(TF1, (newValue) => {
  if (newValue) {
    checkboxesTF.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 TF1 被取消选中，不改变子复选框的状态
    checkboxesTF.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesXZ,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    XZ1.value = allChecked;
  },
  { deep: true },
);

// 监听 XZ1 的状态，如果 XZ1 被选中，则设置所有子复选框为选中状态
watch(XZ1, (newValue) => {
  if (newValue) {
    checkboxesXZ.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XZ1 被取消选中，不改变子复选框的状态
    checkboxesXZ.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesFY,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    FY1.value = allChecked;
  },
  { deep: true },
);

// 监听 FY1 的状态，如果 FY1 被选中，则设置所有子复选框为选中状态
watch(FY1, (newValue) => {
  if (newValue) {
    checkboxesFY.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 FY1 被取消选中，不改变子复选框的状态
    checkboxesFY.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesTG,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    TG1.value = allChecked;
  },
  { deep: true },
);

// 监听 TG1 的状态，如果 TG1 被选中，则设置所有子复选框为选中状态
watch(TG1, (newValue) => {
  if (newValue) {
    checkboxesTG.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 TG1 被取消选中，不改变子复选框的状态
    checkboxesTG.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYXZH,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YXZH1.value = allChecked;
  },
  { deep: true },
);

// 监听 YXZH1 的状态，如果 YXZH1 被选中，则设置所有子复选框为选中状态
watch(YXZH1, (newValue) => {
  if (newValue) {
    checkboxesYXZH.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 YXZH1 被取消选中，不改变子复选框的状态
    checkboxesYXZH.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYC,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YC1.value = allChecked;
  },
  { deep: true },
);

// 监听 YC1 的状态，如果 YC1 被选中，则设置所有子复选框为选中状态
watch(YC1, (newValue) => {
  if (newValue) {
    checkboxesYC.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 YC1 被取消选中，不改变子复选框的状态
    checkboxesYC.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYH,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YH1.value = allChecked;
  },
  { deep: true },
);

// 监听 YH1 的状态，如果 YH1 被选中，则设置所有子复选框为选中状态
watch(YH1, (newValue) => {
  if (newValue) {
    checkboxesYH.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 YH1 被取消选中，不改变子复选框的状态
    checkboxesYH.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYHQ,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YHQ1.value = allChecked;
  },
  { deep: true },
);

// 监听 YHQ1 的状态，如果 YHQ1 被选中，则设置所有子复选框为选中状态
watch(YHQ1, (newValue) => {
  if (newValue) {
    checkboxesYHQ.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 YHQ1 被取消选中，不改变子复选框的状态
    checkboxesYHQ.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesQBGL,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    QBGL1.value = allChecked;
  },
  { deep: true },
);

// 监听 QBGL1 的状态，如果 QBGL1 被选中，则设置所有子复选框为选中状态
watch(QBGL1, (newValue) => {
  if (newValue) {
    checkboxesQBGL.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 QBGL1 被取消选中，不改变子复选框的状态
    checkboxesQBGL.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesWZGL,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    WZGL1.value = allChecked;
  },
  { deep: true },
);

// 监听 WZGL1 的状态，如果 WZGL1 被选中，则设置所有子复选框为选中状态
watch(WZGL1, (newValue) => {
  if (newValue) {
    checkboxesWZGL.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 WZGL1 被取消选中，不改变子复选框的状态
    checkboxesWZGL.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesFKGL,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    FKGL1.value = allChecked;
  },
  { deep: true },
);

// 监听 FKGL1 的状态，如果 FKGL1 被选中，则设置所有子复选框为选中状态
watch(FKGL1, (newValue) => {
  if (newValue) {
    checkboxesFKGL.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 FKGL1 被取消选中，不改变子复选框的状态
    checkboxesFKGL.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesSJFX,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    SJFX1.value = allChecked;
  },
  { deep: true },
);

// 监听 SJFX1 的状态，如果 SJFX1 被选中，则设置所有子复选框为选中状态
watch(SJFX1, (newValue) => {
  if (newValue) {
    checkboxesSJFX.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 SJFX1 被取消选中，不改变子复选框的状态
    checkboxesSJFX.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYJ,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YJGL1.value = allChecked;
  },
  { deep: true },
);

// 监听 YJ1 的状态，如果 YJ1 被选中，则设置所有子复选框为选中状态
watch(YJGL1, (newValue) => {
  if (newValue) {
    checkboxesYJ.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 YJ1 被取消选中，不改变子复选框的状态
    checkboxesYJ.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesGG,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    GG1.value = allChecked;
  },
  { deep: true },
);

// 监听 GG1 的状态，如果 GG1 被选中，则设置所有子复选框为选中状态
watch(GG1, (newValue) => {
  if (newValue) {
    checkboxesGG.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXGG1 被取消选中，不改变子复选框的状态
    checkboxesGG.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesBM,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    BM1.value = allChecked;
  },
  { deep: true },
);

// 监听 BM1 的状态，如果 BM1 被选中，则设置所有子复选框为选中状态
watch(BM1, (newValue) => {
  if (newValue) {
    checkboxesBM.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXBM1 被取消选中，不改变子复选框的状态
    checkboxesBM.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesUSER,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    USER1.value = allChecked;
  },
  { deep: true },
);

// 监听 USER1 的状态，如果 USER1 被选中，则设置所有子复选框为选中状态
watch(USER1, (newValue) => {
  if (newValue) {
    checkboxesUSER.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXUSER1 被取消选中，不改变子复选框的状态
    checkboxesUSER.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesCPPZ,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    CPPZ1.value = allChecked;
  },
  { deep: true },
);

// 监听 CPPZ1 的状态，如果 CPPZ1 被选中，则设置所有子复选框为选中状态
watch(CPPZ1, (newValue) => {
  if (newValue) {
    checkboxesCPPZ.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXCPPZ1 被取消选中，不改变子复选框的状态
    checkboxesCPPZ.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesZDGL,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    ZDGL1.value = allChecked;
  },
  { deep: true },
);

// 监听 ZDGL1 的状态，如果 ZDGL1 被选中，则设置所有子复选框为选中状态
watch(ZDGL1, (newValue) => {
  if (newValue) {
    checkboxesZDGL.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXZDGL1 被取消选中，不改变子复选框的状态
    checkboxesZDGL.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesYY,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    YY1.value = allChecked;
  },
  { deep: true },
);

// 监听 YY1 的状态，如果 YY1 被选中，则设置所有子复选框为选中状态
watch(YY1, (newValue) => {
  if (newValue) {
    checkboxesYY.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXYY1 被取消选中，不改变子复选框的状态
    checkboxesYY.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesSK,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    SK1.value = allChecked;
  },
  { deep: true },
);

// 监听 SK1 的状态，如果 SK1 被选中，则设置所有子复选框为选中状态
watch(SK1, (newValue) => {
  if (newValue) {
    checkboxesSK.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXSK1 被取消选中，不改变子复选框的状态
    checkboxesSK.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesSPPZ,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    SPPZ1.value = allChecked;
  },
  { deep: true },
);

// 监听 SPPZ1 的状态，如果 SPPZ1 被选中，则设置所有子复选框为选中状态
watch(SPPZ1, (newValue) => {
  if (newValue) {
    checkboxesSPPZ.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXSPPZ1 被取消选中，不改变子复选框的状态
    checkboxesSPPZ.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
watch(
  checkboxesGXH,
  (newValues) => {
    const allChecked = newValues.every((value) => value.value);
    GXH1.value = allChecked;
  },
  { deep: true },
);

// 监听 GXH1 的状态，如果 GXH1 被选中，则设置所有子复选框为选中状态
watch(GXH1, (newValue) => {
  if (newValue) {
    checkboxesGXH.value.forEach((checkbox) => {
      checkbox.value = true;
    });
  } else {
    // 如果 XXGXH1 被取消选中，不改变子复选框的状态
    checkboxesGXH.value.forEach((checkbox) => {
      checkbox.value = false;
    });
  }
});
// 监听 g1 和 s1 的状态，如果它们都被选中，则设置 Z1 为 true
watch(
  [g1, s1],
  ([g1Value, s1Value]) => {
    Z1.value = g1Value && s1Value;
  },
  { deep: true },
);

// 监听 Z1 的状态，如果 Z1 被选中，则设置 g1 和 s1 为选中状态
watch(Z1, (newValue) => {
  if (newValue) {
    g1.value = true;
    s1.value = true;
  } else {
    // 如果 Z1 被取消选中，不改变 g1 和 s1 的状态
    g1.value = false;
    s1.value = false;
  }
});
watch(
  [ZC1, TJ1, KF1],
  ([ZCValue, TJValue, KFValue]) => {
    Zc1.value = TJValue && KFValue && ZCValue;
  },
  { deep: true },
);

// 监听 Zc1 的状态，如果 Z1 被选中，则设置 TJ1 和 KF1 和 TJ 为选中状态
watch(Zc1, (newValue) => {
  if (newValue) {
    ZC1.value = true;
    TJ1.value = true;
    KF1.value = true;
  } else {
    // 如果 Z1 被取消选中，不改变 TJ1 和 KF1 和 TJ 的状态
    ZC1.value = false;
    TJ1.value = false;
    KF1.value = false;
  }
});
watch(
  [YD1, PD1, ZK1, HT1],
  ([YDValue, PDValue, ZKValue, HTValue]) => {
    HY1.value = PDValue && ZKValue && YDValue && HTValue;
  },
  { deep: true },
);

// 监听 HY1 的状态，如果 HY1 被选中，则设置 PD1 和 ZK1 和 YD1 和 HT1为选中状态
watch(HY1, (newValue) => {
  if (newValue) {
    YD1.value = true;
    PD1.value = true;
    ZK1.value = true;
    HT1.value = true;
  } else {
    // 如果 HY1 被取消选中，不改变  PD1 和 ZK1 和 YD1 和 HT1 的状态
    YD1.value = false;
    PD1.value = false;
    ZK1.value = false;
    HT1.value = false;
  }
});
watch(
  [ZD1, ZDLS1, WZK1, KP1, KPZH1, HZZK1],
  ([ZDValue, ZDLSValue, WZKValue, KPValue, KPZHValue, HZZKValue]) => {
    CW1.value =
      ZDLSValue && WZKValue && ZDValue && KPValue && KPZHValue && HZZKValue;
  },
  { deep: true },
);

// 监听 CW1 的状态，如果 CW1 被选中，则设置 ZDLS1 和 WZK1 和 ZD1 和 KP1 和 KPZH1 和 HZZK 为选中状态
watch(CW1, (newValue) => {
  if (newValue) {
    ZD1.value = true;
    ZDLS1.value = true;
    WZK1.value = true;
    KP1.value = true;
    KPZH1.value = true;
    HZZK1.value = true;
  } else {
    // 如果 CW1 被取消选中，不改变  ZDLS1 和 WZK1 和 ZD1 和 KP1 的状态
    ZD1.value = false;
    ZDLS1.value = false;
    WZK1.value = false;
    KP1.value = false;
    KPZH1.value = false;
    HZZK1.value = false;
  }
});
watch(
  [ZD1, ZDLS1, WZK1, KP1, KPZH1, HZZK1],
  ([ZDValue, ZDLSValue, WZKValue, KPValue, KPZHValue, HZZKValue]) => {
    CW1.value =
      ZDLSValue && WZKValue && ZDValue && KPValue && KPZHValue && HZZKValue;
  },
  { deep: true },
);

// 监听 ZH1 的状态，如果 ZH1 被选中，则设置 QT1 和 HF1 和 TF1 和 XZ1 和 XZZH1 和 HZZK 为选中状态
watch(ZH1, (newValue) => {
  if (newValue) {
    TF1.value = true;
    QT1.value = true;
    HF1.value = true;
    XZ1.value = true;
  } else {
    // 如果 ZH1 被取消选中，不改变  QT1 和 HF1 和 TF1 和 XZ1 的状态
    TF1.value = false;
    QT1.value = false;
    HF1.value = false;
    XZ1.value = false;
  }
});
watch(
  [YH1, FY1, TG1, KP1, YXZH1, YHQ1],
  ([YHValue, FYValue, TGValue, KPValue, YXZHValue, YHQValue]) => {
    YX1.value =
      FYValue && TGValue && YHValue && KPValue && YXZHValue && YHQValue;
  },
  { deep: true },
);

// 监听 YX1 的状态，如果 YX1 被选中，则设置 FY1 和 TG1 和 YH1 和 KP1 和 YXZH1 和 YHQ 为选中状态
watch(YX1, (newValue) => {
  if (newValue) {
    YH1.value = true;
    FY1.value = true;
    TG1.value = true;
    KP1.value = true;
    YXZH1.value = true;
    YHQ1.value = true;
  } else {
    // 如果 YX1 被取消选中，不改变  FY1 和 TG1 和 YH1 和 KP1 的状态
    YH1.value = false;
    FY1.value = false;
    TG1.value = false;
    KP1.value = false;
    YXZH1.value = false;
    YHQ1.value = false;
  }
});
watch(
  [QBGL1],
  ([QBGLValue]) => {
    QB1.value = QBGLValue;
  },
  { deep: true },
);

// 监听 QB1 的状态，如果 QB1 被选中，则设置 QBGL1 为选中状态
watch(QB1, (newValue) => {
  if (newValue) {
    QBGL1.value = true;
  } else {
    // 如果 QB1 被取消选中，不改变 QBGL1  的状态
    QBGL1.value = false;
  }
});
watch(
  [CSWD1, FQWD1, YSP1, DSP1],
  ([CSWDValue, FQWDValue, YSPValue, DSPValue]) => {
    SPGL1.value = CSWDValue && FQWDValue && YSPValue && DSPValue;
  },
  { deep: true },
);

// 监听 SPGL1 的状态，如果 SPGL1 被选中，则设置 FY1 和 CSWD1 和 YH1 和 FQWD1 和 YSP1 和 DSP 为选中状态
watch(SPGL1, (newValue) => {
  if (newValue) {
    CSWD1.value = true;
    FQWD1.value = true;
    YSP1.value = true;
    DSP1.value = true;
  } else {
    // 如果 SPGL1 被取消选中，不改变  FY1 和 CSWD1 和 YH1 和 FQWD1 的状态
    CSWD1.value = false;
    FQWD1.value = false;
    YSP1.value = false;
    DSP1.value = false;
  }
});
watch(
  [WZGL1, FKGL1],
  ([WZGLValue, FKGLValue]) => {
    WZ1.value = WZGLValue && FKGLValue;
  },
  { deep: true },
);

// 监听 WZ1 的状态，如果 WZ1 被选中，则设置 FY1 和 WZGL1 和 YH1 和 FKGL1 和 YSP1 和 DSP 为选中状态
watch(WZ1, (newValue) => {
  if (newValue) {
    WZGL1.value = true;
    FKGL1.value = true;
  } else {
    // 如果 WZ1 被取消选中，不改变  FY1 和 WZGL1 和 YH1 和 FKGL1 的状态
    WZGL1.value = false;
    FKGL1.value = false;
  }
});
watch(
  [SJFX1],
  ([SJFXValue]) => {
    SJ1.value = SJFXValue;
  },
  { deep: true },
);

// 监听 SJ1 的状态，如果 SJ1 被选中，则设置 SJFX1 为选中状态
watch(SJ1, (newValue) => {
  if (newValue) {
    SJFX1.value = true;
  } else {
    // 如果 SJ1 被取消选中，不改变 SJFX1  的状态
    SJFX1.value = false;
  }
});
watch(
  [GG1],
  ([GGValue]) => {
    XXGG1.value = GGValue;
  },
  { deep: true },
);

// 监听 XXGG1 的状态，如果 XXGG1 被选中，则设置 GG1 为选中状态
watch(XXGG1, (newValue) => {
  if (newValue) {
    GG1.value = true;
  } else {
    // 如果 XXGG1 被取消选中，不改变 GG1  的状态
    GG1.value = false;
  }
});
watch(
  [BM1, USER1, CPPZ1, ZDGL1, YY1, SK1, SPPZ1, GXH1],
  ([
    BMValue,
    USERValue,
    CPPZValue,
    ZDGLValue,
    YYValue,
    SKValue,
    SPPZValue,
    GXHValue,
  ]) => {
    QY1.value =
      BMValue &&
      USERValue &&
      CPPZValue &&
      ZDGLValue &&
      YYValue &&
      SKValue &&
      SPPZValue &&
      GXHValue;
  },
  { deep: true },
);

// 监听 QY1 的状态，如果 QY1 被选中，则设置 FY1 和 BM1 和 YH1 和 USER1 和 CPPZ1 和 ZDGL 为选中状态
watch(QY1, (newValue) => {
  if (newValue) {
    BM1.value = true;
    USER1.value = true;
    CPPZ1.value = true;
    ZDGL1.value = true;
    YY1.value = true;
    SK1.value = true;
    SPPZ1.value = true;
    GXH1.value = true;
  } else {
    // 如果 QY1 被取消选中，不改变  FY1 和 BM1 和 YH1 和 USER1 的状态
    BM1.value = false;
    USER1.value = false;
    CPPZ1.value = false;
    ZDGL1.value = false;
    YY1.value = false;
    SK1.value = false;
    SPPZ1.value = false;
    GXH1.value = false;
  }
});
watch(
  [WK1, Z1, Zc1, HY1, CW1, ZH1, YX1, QB1, SPGL1, WZ1, SJ1, YJGL1, XXGG1, QY1],
  ([
    WKValue,
    ZValue,
    ZcValue,
    HYValue,
    CWValue,
    ZHValue,
    YXValue,
    QBValue,
    SPGLValue,
    WZValue,
    SJValue,
    YJGLValue,
    XXGGValue,
    QYValue,
  ]) => {
    QX1.value =
      WKValue &&
      ZValue &&
      ZcValue &&
      HYValue &&
      CWValue &&
      ZHValue &&
      YXValue &&
      QBValue &&
      SPGLValue &&
      WZValue &&
      SJValue &&
      YJGLValue &&
      XXGGValue &&
      QYValue;
  },
  { deep: true },
);

// 监听 QY1 的状态，如果 QY1 被选中，则设置 FY1 和 BM1 和 YH1 和 USER1 和 CPPZ1 和 ZDGL 为选中状态
watch(QX1, (newValue) => {
  if (newValue) {
    WK1.value = true;
    Z1.value = true;
    Zc1.value = true;
    HY1.value = true;
    CW1.value = true;
    ZH1.value = true;
    YX1.value = true;
    QB1.value = true;
    SPGL1.value = true;
    SJ1.value = true;
    YJGL1.value = true;
    WZ1.value = true;
    XXGG1.value = true;
    QY1.value = true;
  } else {
    // 如果 QY1 被取消选中，不改变  FY1 和 BM1 和 YH1 和 USER1 的状态
    WK1.value = false;
    Z1.value = false;
    Zc1.value = false;
    HY1.value = false;
    CW1.value = false;
    ZH1.value = false;
    YX1.value = false;
    QB1.value = false;
    SPGL1.value = false;
    SJ1.value = false;
    YJGL1.value = false;
    WZ1.value = false;
    XXGG1.value = false;
    QY1.value = false;
  }
});
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
          class="mt-10 h-[760px] w-1/5"
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
              title="添加角色"
            >
              <div>
                <NCard
                  :bordered="false"
                  class="mb-4"
                  size="small"
                  title="角色名称"
                >
                  <NInput
                    autosize
                    placeholder="请输入角色名称"
                    style="min-width: 100%; max-width: 100%"
                  />
                </NCard>
                <NCard :bordered="false" size="small" title="所属部门">
                  <NInput
                    class="h-[50px]"
                    maxlength="500"
                    placeholder="请输入角色描述"
                    show-count
                    type="textarea"
                  />
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
            <NModal
              v-model:show="showModal3"
              :bordered="false"
              :segmented="segmented"
              :style="bodyStyle"
              class="custom-card"
              preset="card"
              size="huge"
              title="编辑角色"
            >
              <div>
                <NCard
                  :bordered="false"
                  class="mb-4"
                  size="small"
                  title="角色名称"
                >
                  <NInput autosize style="min-width: 100%; max-width: 100%" />
                </NCard>
                <NCard :bordered="false" size="small" title="角色描述">
                  <NInput
                    class="h-[50px]"
                    maxlength="500"
                    show-count
                    type="textarea"
                  />
                </NCard>
              </div>
              <template #footer>
                <div class="flex justify-end">
                  <NButton
                    class="mr-6 w-[100px] bg-white text-black"
                    type="primary"
                    @click="handleSave3"
                  >
                    取消
                  </NButton>
                  <NButton
                    class="w-[100px]"
                    type="primary"
                    @click="handleSave3"
                  >
                    保存
                  </NButton>
                </div>
              </template>
            </NModal>
          </template>
          <div v-for="person in peopleList" :key="person.id">
            <div class="mb-4 flex justify-between">
              <div class="flex">
                <Mdipeople class="mr-4 text-3xl text-gray-500" />
                <div class="mt-1">{{ person.name }}</div>
              </div>
              <NDropdown :options="Peroptions" @select="handleSelect">
                <MdiAddDian class="text-3xl text-blue-500" />
              </NDropdown>
            </div>
          </div>
        </NCard>
        <div class="ml-4 h-[400px] w-3/4">
          <div class="flex h-[30px] justify-between">
            <div></div>
            <!-- 使用计算属性 showInput 来控制 NInput 的显示 -->
            <NInput
              v-show="showInput"
              v-model:value="value1"
              class="mt-8"
              placeholder="客户姓名/客户电话"
              style="width: 400px; height: 30px"
              type="text"
            />
            <div v-show="showRadio" class="mt-10">
              <NCheckbox v-model:checked="QX1" label="全选" size="large" />
              <NButton class="ml-4" @click="notify('success')"> 保存 </NButton>
            </div>
            <div v-show="showBtn" class="flex flex-col">
              <NButton
                class="mb-2 ml-64 w-[120px]"
                type="info"
                @click="showModal2 = true"
              >
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
              <NInput
                v-model:value="value2"
                placeholder="客户姓名/客户电话"
                style="width: 400px; height: 50px"
                type="text"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <NTabs v-model:value="currentTab">
              <NTabPane name="成员" tab="成员管理">
                <NDataTable
                  :columns="columns"
                  :data="data"
                  :pagination="pagination"
                />

                <div class="text-center">共 {{ totalDataCount }} 条</div>
              </NTabPane>
              <NTabPane name="资源" tab="资源权限">
                <NScrollbar style="max-height: 708px">
                  <div class="mt-4">
                    <NCheckbox
                      id="workstation"
                      v-model:checked="WK1"
                      label="工作台"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="ml-4 mt-4">
                      <NCheckbox
                        id="viewOnPC"
                        v-model:checked="WK2"
                        label="查看(电脑端)"
                        size="medium"
                      />
                    </div>
                  </div>
                  <div class="mt-10">
                    <NCheckbox
                      v-model:checked="Z1"
                      label="招商管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[200px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="s1"
                            label="租客-私客"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s2"
                            class="mr-6 w-[150px]"
                            label="添加资源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s3"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s4"
                            class="mr-6 w-[150px]"
                            label="跟进"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s5"
                            class="mr-6 w-[150px]"
                            label="指派"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s6"
                            class="mr-6 w-[150px]"
                            label="关闭"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s7"
                            class="mr-6 w-[150px]"
                            label="重新激活"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s8"
                            class="mr-6 w-[150px]"
                            label="转入公客"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s9"
                            class="mr-6 w-[150px]"
                            label="共享资源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s10"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="s11"
                            class="mr-6 w-[150px]"
                            label="添加提醒"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="g1"
                            label="租客-公客"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g2"
                            class="mr-6 w-[150px]"
                            label="添加资源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g3"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g4"
                            class="mr-6 w-[150px]"
                            label="抢单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g5"
                            class="mr-6 w-[150px]"
                            label="跟进"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g6"
                            class="mr-6 w-[150px]"
                            label="指派"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g7"
                            class="mr-6 w-[150px]"
                            label="关闭"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g8"
                            class="mr-6 w-[150px]"
                            label="重新激活"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g9"
                            class="mr-6 w-[150px]"
                            label="共享资源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g10"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="g11"
                            class="mr-6 w-[150px]"
                            label="添加提醒"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="Zc1"
                      label="资产管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[300px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="ZC1"
                            label="资产管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[150px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC2"
                            class="mr-6 w-[150px]"
                            label="添加项目"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC3"
                            class="mr-6 w-[150px]"
                            label="编辑项目"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC4"
                            class="mr-6 w-[150px]"
                            label="删除项目"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC5"
                            class="mr-6 w-[150px]"
                            label="关闭房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC6"
                            class="mr-6 w-[150px]"
                            label="删除房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC7"
                            class="mr-6 w-[150px]"
                            label="编辑房源信息"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC8"
                            class="mr-6 w-[150px]"
                            label="变更房源状态"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC9"
                            class="mr-6 w-[150px]"
                            label="激活房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC10"
                            class="mr-6 w-[150px]"
                            label="房源记录"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC11"
                            class="mr-6 w-[150px]"
                            label="房源价格修改"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC12"
                            class="mr-6 w-[150px]"
                            label="房源价格修改"
                            size="medium"
                          />

                          <NCheckbox
                            v-model:checked="ZC13"
                            class="mr-6 w-[150px]"
                            label="配置消息通知"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC14"
                            class="mr-6 w-[150px]"
                            label="修改可租日期"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC15"
                            class="mr-6 w-[150px]"
                            label="锁房/解锁"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZC16"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="KF1"
                            label="空房快查"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="TJ1"
                            label="调价管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TJ2"
                            class="mr-6 w-[150px]"
                            label="添加"
                            size="medium"
                          />

                          <NCheckbox
                            v-model:checked="TJ3"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TJ4"
                            class="mr-6 w-[150px]"
                            label="作废"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="HY1"
                      label="合约管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[530px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YD1"
                            label="预定管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[150px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD2"
                            class="mr-6 w-[150px]"
                            label="添加预定"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD3"
                            class="mr-6 w-[150px]"
                            label="退定"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD4"
                            class="mr-6 w-[150px]"
                            label="置为无效"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD5"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD6"
                            class="mr-6 w-[150px]"
                            label="关联房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD7"
                            class="mr-6 w-[150px]"
                            label="查看租客电话"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD8"
                            class="mr-6 w-[150px]"
                            label="邀请租客支付"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD9"
                            class="mr-6 w-[150px]"
                            label="变更预定房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD10"
                            class="mr-6 w-[150px]"
                            label="还原定金"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD11"
                            class="mr-6 w-[150px]"
                            label="邀请签字"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YD12"
                            class="mr-6 w-[150px]"
                            label="修改预定信息"
                            size="medium"
                          />

                          <NCheckbox
                            v-model:checked="YD13"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="PD1"
                            label="排队管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="PD2"
                            class="mr-6 w-[150px]"
                            label="置为无效"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="PD3"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="PD4"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="ZK1"
                            label="租客合同"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[200px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK2"
                            class="mr-6 w-[150px]"
                            label="添加合同"
                            size="medium"
                          />

                          <NCheckbox
                            v-model:checked="ZK3"
                            class="mr-6 w-[150px]"
                            label="邀请签字"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK4"
                            class="mr-6 w-[150px]"
                            label="续签"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK5"
                            class="mr-6 w-[150px]"
                            label="退租-并结账"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK6"
                            class="mr-6 w-[150px]"
                            label="重置"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK7"
                            class="mr-6 w-[150px]"
                            label="退租-后结账"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK8"
                            class="mr-6 w-[150px]"
                            label="作废"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK9"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK10"
                            class="mr-6 w-[150px]"
                            label="关联房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK11"
                            class="mr-6 w-[150px]"
                            label="修改退租信息"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK12"
                            class="mr-6 w-[150px]"
                            label="退租还原"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK13"
                            class="mr-6 w-[150px]"
                            label="邀请确认"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK14"
                            class="mr-6 w-[150px]"
                            label="查看租客电话"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK15"
                            class="mr-6 w-[150px]"
                            label="编辑物业交割单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK16"
                            class="mr-6 w-[150px]"
                            label="换房"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK17"
                            class="mr-6 w-[150px]"
                            label="修改合同信息"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK18"
                            class="mr-6 w-[150px]"
                            label="跟进"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK19"
                            class="mr-6 w-[150px]"
                            label="预览/打印"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK20"
                            class="mr-6 w-[150px]"
                            label="修改签约人信息"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK21"
                            class="mr-6 w-[150px]"
                            label="修改同住人信息"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK22"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZK23"
                            class="mr-6 w-[150px]"
                            label="导入"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="HT1"
                            label="合同配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="CW1"
                      label="财务管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[630px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="ZD1"
                            label="账单管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[150px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="ZD2"
                            class="mr-6 w-[150px]"
                            label="查看其他账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD3"
                            class="mr-6 w-[150px]"
                            label="查看房源账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD4"
                            class="mr-6 w-[150px]"
                            label="查看租客账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD5"
                            class="mr-6 w-[150px]"
                            label="查看业主账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD6"
                            class="mr-6 w-[150px]"
                            label="添加账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD7"
                            class="mr-6 w-[150px]"
                            label="编辑账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD8"
                            class="mr-6 w-[150px]"
                            label="付款/付款申请"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD9"
                            class="mr-6 w-[150px]"
                            label="收款"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD10"
                            class="mr-6 w-[150px]"
                            label="作废"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD11"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD12"
                            class="mr-6 w-[150px]"
                            label="关联房源"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD13"
                            class="mr-6 w-[150px]"
                            label="关联租客"
                            size="medium"
                          />

                          <NCheckbox
                            v-model:checked="ZD14"
                            class="mr-6 w-[150px]"
                            label="关联业主"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD15"
                            class="mr-6 w-[150px]"
                            label="催收"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD16"
                            class="mr-6 w-[150px]"
                            label="打印"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD17"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD18"
                            class="mr-6 w-[150px]"
                            label="账单复原"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD19"
                            class="mr-6 w-[150px]"
                            label="导入水电费"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD20"
                            class="mr-6 w-[150px]"
                            label="报销同步"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD21"
                            class="mr-6 w-[150px]"
                            label="拆分同步"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD22"
                            class="mr-6 w-[150px]"
                            label="拆分账单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD23"
                            class="mr-6 w-[150px]"
                            label="申请开票"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD24"
                            class="mr-6 w-[150px]"
                            label="导入"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZD25"
                            class="mr-6 w-[150px]"
                            label="编辑标签"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="ZDLS1"
                            label="账单流水"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS2"
                            class="mr-6 w-[150px]"
                            label="作废"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS3"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS4"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS5"
                            class="mr-6 w-[150px]"
                            label="补录备注/附件"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS6"
                            class="mr-6 w-[150px]"
                            label="打印"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS7"
                            class="mr-6 w-[150px]"
                            label="申请开票"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDLS8"
                            class="mr-6 w-[150px]"
                            label="锁票"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="WZK1"
                            label="未知款"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="WZK2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZK3"
                            class="mr-6 w-[150px]"
                            label="添加未知款"
                            size="medium"
                          />

                          <NCheckbox
                            v-model:checked="WZK4"
                            class="mr-6 w-[150px]"
                            label="关联流水"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZK5"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZK6"
                            class="mr-6 w-[150px]"
                            label="作废"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZK7"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="HZZK1"
                            label="租客转账通知"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="HZZK2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HZZK3"
                            class="mr-6 w-[150px]"
                            label="审核通过"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HZZK4"
                            class="mr-6 w-[150px]"
                            label="审核驳回"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[60px] w-[150px]">
                          <NCheckbox
                            v-model:checked="KP1"
                            label="开票记录"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="KP2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP3"
                            class="mr-6 w-[150px]"
                            label="申请开票"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP4"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP5"
                            class="mr-6 w-[150px]"
                            label="确认开票"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP6"
                            class="mr-6 w-[150px]"
                            label="拒接开票"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP7"
                            class="mr-6 w-[150px]"
                            label="冲红"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP8"
                            class="mr-6 w-[150px]"
                            label="作废"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP9"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP10"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KP11"
                            class="mr-6 w-[150px]"
                            label="重新开票"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="KPZH1"
                            label="开票账号配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="KPZH2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH3"
                            class="mr-6 w-[150px]"
                            label="添加开票主体"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH4"
                            class="mr-6 w-[150px]"
                            label="启用主体"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH5"
                            class="mr-6 w-[150px]"
                            label="禁用主体"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH6"
                            class="mr-6 w-[150px]"
                            label="编辑主体"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH7"
                            class="mr-6 w-[150px]"
                            label="删除主体"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH8"
                            class="mr-6 w-[150px]"
                            label="关联账号"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH9"
                            class="mr-6 w-[150px]"
                            label="解绑账号"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH10"
                            class="mr-6 w-[150px]"
                            label="添加商品"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH11"
                            class="mr-6 w-[150px]"
                            label="启用商品"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH12"
                            class="mr-6 w-[150px]"
                            label="禁用商品"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="KPZH13"
                            class="mr-6 w-[150px]"
                            label="删除商品"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="ZH1"
                      label="租后管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[350px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="QT1"
                            label="其他工单"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="QT2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT3"
                            class="mr-6 w-[150px]"
                            label="添加工单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT4"
                            class="mr-6 w-[150px]"
                            label="编辑工单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT5"
                            class="mr-6 w-[150px]"
                            label="派单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT6"
                            class="mr-6 w-[150px]"
                            label="改派"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT7"
                            class="mr-6 w-[150px]"
                            label="完成"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT8"
                            class="mr-6 w-[150px]"
                            label="验收工单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT9"
                            class="mr-6 w-[150px]"
                            label="取消工单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT10"
                            class="mr-6 w-[150px]"
                            label="评价工单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT11"
                            class="mr-6 w-[150px]"
                            label="删除工单"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QT12"
                            class="mr-6 w-[150px]"
                            label="关联房源"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="HF1"
                            label="换房申请"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HF2"
                            class="mr-6 w-[150px]"
                            label="申请通过"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HF3"
                            class="mr-6 w-[150px]"
                            label="申请驳回"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HF4"
                            class="mr-6 w-[150px]"
                            label="办理退房"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HF5"
                            class="mr-6 w-[150px]"
                            label="置为无效"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="HF6"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="TF1"
                            label="退房申请"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TF2"
                            class="mr-6 w-[150px]"
                            label="申请通过"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TF3"
                            class="mr-6 w-[150px]"
                            label="申请驳回"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TF4"
                            class="mr-6 w-[150px]"
                            label="办理退房"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TF5"
                            class="mr-6 w-[150px]"
                            label="置为无效"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TF6"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="XZ1"
                            label="续租记录"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="XZ2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="XZ3"
                            class="mr-6 w-[150px]"
                            label="申请通过"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="XZ4"
                            class="mr-6 w-[150px]"
                            label="申请驳回"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="XZ5"
                            class="mr-6 w-[150px]"
                            label="办理退房"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="XZ6"
                            class="mr-6 w-[150px]"
                            label="置为无效"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="XZ7"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="YX1"
                      label="营销推广"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[480px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="FY1"
                            label="房源推广"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FY2"
                            class="mr-6 w-[150px]"
                            label="上架"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FY3"
                            class="mr-6 w-[150px]"
                            label="下架"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FY4"
                            class="mr-6 w-[150px]"
                            label="上/下架历史记录"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FY5"
                            class="mr-6 w-[150px]"
                            label="批量标记验真"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="TG1"
                            label="推广配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TG2"
                            class="mr-6 w-[150px]"
                            label="绑定账号"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TG3"
                            class="mr-6 w-[150px]"
                            label="解除账号"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="TG4"
                            class="mr-6 w-[150px]"
                            label="管理管家"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YXZH1"
                            label="营销账户"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YXZH2"
                            class="mr-6 w-[150px]"
                            label="充值保证金"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YXZH3"
                            class="mr-6 w-[150px]"
                            label="充值小牛币"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YC1"
                            label="异常申报记录"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YC2"
                            class="mr-6 w-[150px]"
                            label="异常申报"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YC3"
                            class="mr-6 w-[150px]"
                            label="取消"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YH1"
                            label="优惠卷管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="YH2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YH3"
                            class="mr-6 w-[150px]"
                            label="添加"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YH4"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YH5"
                            class="mr-6 w-[150px]"
                            label="启用"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YH6"
                            class="mr-6 w-[150px]"
                            label="分享"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YH7"
                            class="mr-6 w-[150px]"
                            label="置为无效"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YH8"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YHQ1"
                            label="优惠券使用明细"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="YHQ2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YHQ3"
                            class="mr-6 w-[150px]"
                            label="查看租客电话"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="QB1"
                      label="钱包"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[100px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="QBGL1"
                            label="钱包管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QBGL2"
                            class="mr-6 w-[150px]"
                            label="查看所有"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QBGL3"
                            class="mr-6 w-[150px]"
                            label="开通钱包"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QBGL4"
                            class="mr-6 w-[150px]"
                            label="修改钱包名称"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="QBGL5"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="SPGL1"
                      label="审批管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[300px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="DSP1"
                            label="待我审批的"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YSP1"
                            label="我已审批的"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="FQWD1"
                            label="我发起的"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="CSWD1"
                            label="抄送我的"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="WZ1"
                      label="物资管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[180px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="WZGL1"
                            label="物资管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL2"
                            class="mr-6 w-[150px]"
                            label="添加物品"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL3"
                            class="mr-6 w-[150px]"
                            label="编辑物品"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL4"
                            class="mr-6 w-[150px]"
                            label="调配"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL5"
                            class="mr-6 w-[150px]"
                            label="报废"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL6"
                            class="mr-6 w-[150px]"
                            label="遗失"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL7"
                            class="mr-6 w-[150px]"
                            label="修改状态"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL8"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL9"
                            class="mr-6 w-[150px]"
                            label="核对信息"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="WZGL10"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="FKGL1"
                            label="库房管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FKGL2"
                            class="mr-6 w-[150px]"
                            label="新增"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FKGL3"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FKGL4"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="SJ1"
                      label="数据分析"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[100px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="SJFX1"
                            label="数据分析"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="SJFX2"
                            class="mr-6 w-[150px]"
                            label="财务台账"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SJFX3"
                            class="mr-6 w-[150px]"
                            label="租赁台账"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SJFX4"
                            class="mr-6 w-[150px]"
                            label="欠租欠款"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SJFX5"
                            class="mr-6 w-[150px]"
                            label="招商数据报表"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SJFX6"
                            class="mr-6 w-[150px]"
                            label="招商客户画像"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SJFX7"
                            class="mr-6 w-[150px]"
                            label="配置招商目标"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SJFX8"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="YJGL1"
                      label="业绩管理"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[200px]">
                      <div class="ml-4">
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="YJTZ1"
                            class="mr-6 w-[100px]"
                            label="业绩台账"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YJTZ2"
                            class="mr-6 w-[100px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YJTZ3"
                            class="mr-6 w-[100px]"
                            label="导出"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YJTZ4"
                            class="mr-6 w-[100px]"
                            label="发放提成"
                            size="medium"
                          />
                        </div>
                        <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="FFJL1"
                            class="mr-6 w-[100px]"
                            label="发放记录"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FFJL2"
                            class="mr-6 w-[100px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FFJL3"
                            class="mr-6 w-[100px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                        <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="FYPZ1"
                            class="mr-6 w-[100px]"
                            label="分佣配置"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FYPZ2"
                            class="mr-6 w-[100px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FYPZ3"
                            class="mr-6 w-[100px]"
                            label="添加"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FYPZ4"
                            class="mr-6 w-[100px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="FYPZ5"
                            class="mr-6 w-[100px]"
                            label="启用禁用"
                            size="medium"
                          />
                        </div>
                        <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="XXGG1"
                      label="消息公告"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[60px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="GG1"
                            label="公告"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="GG2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="GG3"
                            class="mr-6 w-[150px]"
                            label="发布"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="GG4"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="GG5"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox
                      v-model:checked="QY1"
                      label="企业设置"
                      size="medium"
                    />
                    <hr class="mt-4" />
                    <div class="h-[580px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="BM1"
                            label="部门/人员"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[180px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM2"
                            class="mr-6 w-[150px]"
                            label="添加部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM3"
                            class="mr-6 w-[150px]"
                            label="编辑部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM4"
                            class="mr-6 w-[150px]"
                            label="删除部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM5"
                            class="mr-6 w-[150px]"
                            label="部门数据转移"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM6"
                            class="mr-6 w-[150px]"
                            label="禁用部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM7"
                            class="mr-6 w-[150px]"
                            label="启用部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM8"
                            class="mr-6 w-[150px]"
                            label="添加部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM9"
                            class="mr-6 w-[150px]"
                            label="编辑员工"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM10"
                            class="mr-6 w-[150px]"
                            label="员工数据转移"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM11"
                            class="mr-6 w-[150px]"
                            label="移动部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM12"
                            class="mr-6 w-[150px]"
                            label="禁用员工"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM13"
                            class="mr-6 w-[150px]"
                            label="启用员工"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM14"
                            class="mr-6 w-[150px]"
                            label="删除员工"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM15"
                            class="mr-6 w-[150px]"
                            label="驳回"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM16"
                            class="mr-6 w-[150px]"
                            label="通过"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM17"
                            class="mr-6 w-[150px]"
                            label="分配部门"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM18"
                            class="mr-6 w-[150px]"
                            label="导入"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="BM19"
                            class="mr-6 w-[150px]"
                            label="导出"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="USER1"
                            label="角色/权限"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="USER2"
                            class="mr-6 w-[150px]"
                            label="添加角色"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="USER3"
                            class="mr-6 w-[150px]"
                            label="编辑角色"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="USER4"
                            class="mr-6 w-[150px]"
                            label="删除角色"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="USER5"
                            class="mr-6 w-[150px]"
                            label="设置权限"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="CPPZ1"
                            label="产品配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="CPPZ2"
                            class="mr-6 w-[150px]"
                            label="微信小程序"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="ZDGL1"
                            label="字典管理"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDGL2"
                            class="mr-6 w-[150px]"
                            label="添加字典"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDGL3"
                            class="mr-6 w-[150px]"
                            label="编辑字典"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="ZDGL4"
                            class="mr-6 w-[150px]"
                            label="删除字典"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="YY1"
                            label="运营配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="YY2"
                            class="mr-6 w-[150px]"
                            label="设置决策"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="SK1"
                            label="收款账号配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK2"
                            class="mr-6 w-[150px]"
                            label="添加"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK3"
                            class="mr-6 w-[150px]"
                            label="启用"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK4"
                            class="mr-6 w-[150px]"
                            label="禁用"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK5"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK6"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK7"
                            class="mr-6 w-[150px]"
                            label="分账设置"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SK8"
                            class="mr-6 w-[150px]"
                            label="修改手续费"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="SPPZ1"
                            label="审批配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="checked"
                            :disabled="disabled"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SPPZ2"
                            class="mr-6 w-[150px]"
                            label="添加"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SPPZ3"
                            class="mr-6 w-[150px]"
                            label="启用"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SPPZ4"
                            class="mr-6 w-[150px]"
                            label="禁用"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SPPZ5"
                            class="mr-6 w-[150px]"
                            label="删除"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="SPPZ6"
                            class="mr-6 w-[150px]"
                            label="编辑"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          <NCheckbox
                            v-model:checked="GXH1"
                            label="个性化配置"
                            size="medium"
                          />
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            v-model:checked="GXH2"
                            class="mr-6 w-[150px]"
                            label="查看"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </NScrollbar>
              </NTabPane>
              <NTabPane name="数据" tab="数据权限">
                <NScrollbar style="max-height: 708px">
                  <div class="mt-4">
                    <NCheckbox label="招商管理" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[110px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          租客-私客
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[80px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="资产管理" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[350px]">
                      <div class="ml-4 flex">
                        <div
                          class="ml-4 mr-4 mt-4 h-[40px] w-[150px] text-red-500"
                        >
                          租客-私客
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          空房快查
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          调价管理
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="合约管理" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[350px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          预定管理
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          排队管理
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          租客合同
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="财务管理" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[580px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          账单管理
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          未知款
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          账单流水
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          租客转账通知
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          开票记录
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="租后管理" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[460px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          其他工单
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          换房申请
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          退房申请
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          续租申请
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[100px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="智能设备" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[80px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          智能门锁
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="营销推广" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[80px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          房源推广
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="钱包" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[80px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          钱包管理
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="巡房管理" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[150px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          业绩台账
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[60px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox label=" " size="medium" />
                          <div class="mr-24 w-[150px]">本店</div>

                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                        </div>
                      </div>
                      <hr class="ml-8" style="border: 0.5px dashed #e0e0e0" />
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          分佣配置
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[60px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox label=" " size="medium" />
                          <div class="mr-24 w-[150px]">本店</div>

                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <NCheckbox label="消息公告" size="medium" />
                    <hr class="mt-4" />
                    <div class="h-[80px]">
                      <div class="ml-4 flex">
                        <div class="ml-4 mr-4 mt-4 h-[40px] w-[150px]">
                          公告
                        </div>
                        <div
                          class="ml-4 mt-4 flex h-[50px] w-[1100px] flex-wrap"
                        >
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="全部"
                            size="medium"
                          />
                          <NCheckbox
                            v-model:checked="checked"
                            label=" "
                            size="medium"
                          />
                          <div>本店</div>
                          <NCheckbox
                            v-model:checked="checked"
                            class="ml-3 mr-24 w-[160px]"
                            label="可查看子集部门数据"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-24 w-[150px]"
                            label="本部"
                            size="medium"
                          />
                          <NCheckbox
                            class="mr-6 w-[150px]"
                            label="本人相关"
                            size="medium"
                          />
                          <div class="mt-2 w-[600px]">
                            <NButton class="ml-44" dashed type="info">
                              +指定部门
                            </NButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </NScrollbar>
              </NTabPane>
            </NTabs>
          </div>
        </div>
      </div>
    </NCard>
  </Page>
</template>
