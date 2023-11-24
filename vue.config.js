const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 8080
  },
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('docx')
      .test(/\.docx$/)
      .use('file-loader')
      .loader('file-loader')
      .end()
  }
})