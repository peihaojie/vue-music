/*
 * @Date         : 2020-02-09 15:50:01
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-02-10 20:31:38
 * @FilePath     : /src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'common/stylus/index.styl'
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')