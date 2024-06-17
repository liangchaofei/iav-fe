// 用于配置路由的文件
// https://umijs.org/docs/guides/routes

export const routes = [
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
    name: 'feature',
    path: '/feature',
    routes: [
      {
        name: 'fullCalendar',
        path: '/feature/fullCalendar',
        component: './Feature/FullCalendar',
        icon: 'CalendarOutlined',
      },
      {
        name: 'AudioFeature',
        path: '/feature/AudioFeature',
        icon: 'CustomerServiceOutlined',
        routes: [
          {
            name: 'AudioPlayer',
            path: '/feature/AudioFeature/AudioPlayer',
            component: './Feature/AudioFeature/AudioPlayer',
          },
          {
            name: 'AudioVisible',
            path: '/feature/AudioFeature/AudioVisible',
            component: './Feature/AudioFeature/AudioVisible',
          },
        ],
      },
      {
        name: 'Map',
        path: '/feature/Map',
        icon: 'EnvironmentOutlined',
        routes: [
          {
            name: 'AutonaviMap',
            path: '/feature/Map/AutonaviMap',
            routes: [
              {
                name: 'GeoHash',
                path: '/feature/Map/AutonaviMap/GeoHash',
                component: './Feature/Map/AutonaviMap/GeoHash',
              },
            ],
          },
        ],
      },
    ],
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
