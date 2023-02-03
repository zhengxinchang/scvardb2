const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath:"/scvardb/",
    assetsDir:"static",
  outputDir:"./scvardb",
})
