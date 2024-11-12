import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('page.analytics.title'),
    },
    name: 'Analytics',
    path: '/analytics',
    children: [
      {
        name: 'Analytics',
        path: '/analytics',
        component: () => import('#/views/analytics/index.vue'),
        meta: {
          icon: 'carbon:workspace',
          title: $t('page.analytics.title'),
        },
      },
    ],
  },
];

export default routes;
