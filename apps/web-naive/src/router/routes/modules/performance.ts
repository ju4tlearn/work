import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const performance: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    name: '业绩管理',
    path: '/performance',
    redirect: '/performance/1',
    meta: {
      title: $t('page.performance.title'),
      icon: 'mdi:home',
    },
    children: [
      {
        name: '业绩台账',
        path: '/performance/1',
        meta: {
          title: $t('page.performance.management'),
          icon: 'mdi:home',
        },
        component: () => import('#/views/dashboard/performance/management.vue'),
      },
      {
        name: '分佣配置',
        path: '/performance/2',
        meta: {
          title: $t('page.performance.record'),
        },
        component: () => import('#/views/dashboard/performance/record.vue'),
      },
      {
        name: '业绩审批',
        path: '/performance/3',
        meta: {
          title: $t('page.performance.approval'),
        },
        component: () => import('#/views/dashboard/performance/approval.vue'),
      },
      {
        name: '权限配置',
        path: '/performance/4',
        meta: {
          title: $t('page.performance.permission'),
        },
        component: () => import('#/views/dashboard/performance/permission.vue'),
      },
    ],
  },
];

export default performance;
