const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://v2.jubelio.com',
    viewportWidth: 1366,
    viewportHeight: 768
  },
})