const { defineConfig } = require('@vue/cli-service');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const ElementPlus = require('unplugin-element-plus/webpack');
// const Icons = require('unplugin-icons/webpack');
// const IconsResolver = require('unplugin-icons/resolver');

module.exports = defineConfig({
  // transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      AutoImport({
        resolvers: [
          ElementPlusResolver()
          // IconsResolver({
          //   prefix: 'Icon'
          // })
        ]
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          // IconsResolver({
          //   enabledCollections: ['ep']
          // }),
          ElementPlusResolver()
        ]
      }),
      // Icons({
      //   autoInstall: true
      // }),
      ElementPlus()
    ]
  }
});
