declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

// 添加这行来声明你的路由模块
declare module '@/router' {
  import { Router } from 'vue-router'
  const router: Router
  export default router
}

// 声明element-plus
declare module 'element-plus' {
  // eslint-disable-next-line no-unused-vars
  import { ElementPlus } from 'element-plus'
  const router: Router
  export default router
}

declare module 'echarts-gl';

