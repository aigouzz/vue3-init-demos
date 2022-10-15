const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/demos/',
  outputDir: '../aigouzz.github.io/demos',
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src/packages'),
        '@': path.resolve(__dirname, './src')
      }
    }
  },
})
