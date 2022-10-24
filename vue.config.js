const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const plugins = process.env.NODE_ENV === 'production' ? [new BundleAnalyzer()] : [];

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
    },
    plugins,
  },
})
