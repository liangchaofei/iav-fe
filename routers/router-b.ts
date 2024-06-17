// 用于配置路由的文件
// https://umijs.org/docs/guides/routes

// 客户B
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: './Home',
  },
  {
    path: '/403',
    name: 'NotAccessible',
    component: '@/pages/403',
    hideInMenu: true,
  },
  {
    path: '*',
    name: 'NotFound',
    component: '@/pages/404',
    hideInMenu: true,
  },
];
export default routes;
