import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/12AdminManage/login', component: () => import('../views/authentication/login.vue') },
  {
    path: '/12AdminManage',
    children: [
    //   {
    //     path: 'home',
    //     component: () => import('../views/Home.vue'),
    //   },
    ],
  },
  { path: '/12AdminManage/test', component: () => import('../views/manage/test.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;