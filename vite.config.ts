import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers' // 如使用 Element Plus

// https://vite.dev/config/
export default defineConfig(({  }) => {
  return {
    // 确保i18n语言包被正确包含
    optimizeDeps: {
      include: ['vue-i18n']
    },
    // 部署生产环境和开发环境下的url。
    // 默认情况下，vite会假设你的应用是被部署在一个域名的根路径上
    // 例如https://www.ruoyi.vip/。如果应用被部署在一个子路径上。你就需要用这个选项指定这个子路径，
    // 例如，如果有你的应用被部署在https://www.ruoyi.vip/admin/。则设置baseUrl为/admin/。
    base: '/vite-myBlog/',
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia'],
        dts: 'src/auto-imports.d.ts', // 生成声明
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: 'src/components.d.ts'
      })
    ],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src'),
        '@locales': path.resolve(__dirname, './src/locales')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.ts', '.js', '.mjs', '.jsx', '.tsx', '.json', '.vue']
    },
    // 打包配置
    build: {
      outDir: 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            'i18n': ['vue-i18n'],
            'locales': ['@locales'],
            'vendor': ['vue', 'pinia', 'element-plus']
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        },
        preserveEntrySignatures: 'strict'
      },
      minify: false
    },
    // vite相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      // 使用mock时注释掉下面proxy,因为代理会优先mock导致请求500
      // proxy: {
      //     // https://cn.vitejs.dev/config/#server-proxy
      //     '/dev-api': {
      //         target: 'http://localhost:8080',
      //         changeOrigin: true,
      //         rewrite: (p) => p.replace(/^\/dev-api/, '')
      //     }
      // }
    },
    css: {
      // preprocessorOptions: {
      //     scss: {
      //         additionalData: `@use "@/assets/styles/index.scss" as *;`
      //     }
      // },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              }
            }
          }
        ]
      },
      test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
          provider: 'istanbul', // or 'c8'
          reporter: ['text', 'html'],
          exclude: ['node_modules/', 'cypress/', 'dist/']
        },
        include: ['src/**/*.{test,spec}.{js,ts}'],
        // Mock 路径别名：Vitest 会自动读取 tsconfig.paths。若有问题，可配置 alias
      }
    }
  }
})