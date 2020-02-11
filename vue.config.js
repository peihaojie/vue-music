/*
 * @Date         : 2020-02-09 16:19:19
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-02-11 10:23:50
 * @FilePath     : /vue.config.js
 */
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        common: '@/common',
        components: '@/components',
        api: '@/api',
        base: '@/base'
      }
    }
  }
}