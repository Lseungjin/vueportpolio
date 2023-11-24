const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
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
