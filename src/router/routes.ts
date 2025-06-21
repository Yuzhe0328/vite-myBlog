// router/routes.ts
export const constantRouter = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'), // Layout 是壳子，内部包含顶部、main区
    children: [
      {
        path: '', // 默认子路由，等价于 '/'
        name: 'home',
        component: () => import('@/views/index.vue'),
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/article/index.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  }
]
