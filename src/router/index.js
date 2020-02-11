/*
 * @Date         : 2020-02-09 15:50:01
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-02-10 20:57:48
 * @FilePath     : /src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: () => import('components/rank/rank')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('components/recommend/recommend')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('components/search/search')
    },
    {
      path: '/singer',
      name: 'singer',
      component: () => import('components/singer/singer')
    }
  ]
})