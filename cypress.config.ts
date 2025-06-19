import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost', // 开发服务器地址，确保与 Vite dev 端口一致
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    // setupNodeEvents(on, config) {
    //   // 配置插件，如 code coverage 等
    // }
  },
  video: true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  fixturesFolder: 'cypress/fixtures'
})
