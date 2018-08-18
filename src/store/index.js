// vuex
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

// 因为Vuex是一个插件 vue中使用插件都是通过Vue.use()使用的
Vue.use(Vuex)

// 导出 导出的不是Vuex 而是通过Vuex创建的一个仓库
// new Vuex.Store({}) vuex 创建仓库方法
export default new Vuex.Store({
  // state存放的是全局公用的数据
  // state: state, 键和值一样 简化写法
  state,
  /* 方法1 */
  // // 2.接收actions
  // actions: {
  //   // 3.执行actions相应的方法 参数1 上下文 参数2 传递过来的数据
  //   changCity (ctx, city) {
  //     // 4.通过ctx执行commit方法调用mutations
  //     // 参数1 事件名 参数2 数据
  //     ctx.commit('changCity', city)
  //   }
  // },
  // 4.mutations
  mutations
  // // 类似组件中的计算属性 当我们需要根据state里面的数据算出一些新的数据的时候使用getters 可以避免数据的冗余
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
  /*
  module 当遇到一个非常复杂的业务场景 比如说管理后台系统的时候
  经常有很多共有的数据在vuex中存储 如果把所有的mutations都放在mutations.js里
  这个文件会慢慢变得非常庞大 难以维护
  这时候可以借助module对一个复杂mutations state 包括 actions进行一个拆分
  */
})
