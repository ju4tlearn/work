import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'mdi:company',
      title: '企业设置',
    },
    name: 'Company',
    path: '/company',
    redirect: '/company',
    children: [
      {
        name: 'user',
        path: '/company/user/index',
        component: () => import('#/views/company/user/index.vue'),
        meta: {
          icon: 'mynaui:user-solid',
          title: '部门用户',
        },
      },
      {
        name: 'permission',
        path: '/company/permission/index',
        component: () => import('#/views/company/permission/index.vue'),
        meta: {
          icon: 'icon-park-outline:permissions',
          title: '用户权限',
        },
      },
      {
        name: 'Configuration',
        path: '/company/Configuration/index',
        component: () => import('#/views/company/Configuration/index.vue'),
        meta: {
          icon: 'icon-park-outline:permissions',
          title: '配置中心',
        },
      },
    ],
  },
];

export default routes;
