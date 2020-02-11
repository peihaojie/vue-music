<!--
 * @Date         : 2020-02-09 15:50:01
 * @LastEditors  : HaoJie
 * @LastEditTime : 2020-02-11 13:31:05
 * @FilePath     : /src/App.vue
 -->
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="stylus" scoped>
</style>