import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'carbon:workspace',
      order: 1,
      title: $t('page.approval.title'),
    },
    name: 'Approval',
    path: '/approval',
    children: [
      {
        name: 'Await',
        path: '/await',
        component: () => import('#/views/approval/await.vue'),
        meta: {
          icon: ' material-symbols--approval-delegation-rounded',
          title: $t('page.approval.await'),
        },
      },
      {
        name: 'Finish',
        path: '/finish',
        component: () => import('#/views/approval/finish.vue'),
        meta: {
          icon: ' ep--finished',
          title: $t('page.approval.finish'),
        },
      },
      {
        name: 'Send',
        path: '/send',
        component: () => import('#/views/approval/send.vue'),
        meta: {
          icon: ' iconamoon:send-thin',
          title: $t('page.approval.send'),
        },
      },
      {
        name: 'Copy',
        path: '/copy',
        component: () => import('#/views/approval/copy.vue'),
        meta: {
          icon: ' ep--finished',
          title: $t('page.approval.copy'),
        },
      },
    ],
  },
];

export default routes;
