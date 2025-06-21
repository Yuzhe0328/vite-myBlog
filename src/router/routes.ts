import { RouteRecordRaw } from 'vue-router'
export const constantRouter: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '', 
        name: 'home',
        component: () => import('@/views/index.vue')
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/article/index.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/about/index.vue')
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/404/index.vue') // ✅
      }
    ]
  }
]
