import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('page.manage.title'),
    },
    name: 'Manage',
    path: '/manage',
    children: [
      {
        name: 'Merchant',
        path: '/manage/merchant',
        component: () => import('#/views/manage/merchant/index.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: $t('page.manage.merchant'),
        },
      },
    ],
  },
];

export default routes;
