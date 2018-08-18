// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick插件 解决移动端click事件300毫秒延迟问题
import fastClick from 'fastclick'
// 引入vue-awesome-swiper轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入vuex创建的仓库
import store from './store'
// 引入vue-awesome-swiper轮播图插件的css
import 'swiper/dist/css/swiper.css'
// reset.css 重置基本样式 保证各种浏览器显示效果一致
import 'styles/reset.css'
// 解决移动端一像素边框问题
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 绑定到document.body就正确的使用了fastclick
fastClick.attach(document.body)
// 使用vue-awesome-swiper轮播图插件
// Vue.use(VueAwesomeSwiper, { 可以跟一些默认参数 })
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store: store 创建根vue实例时把store传入进去(vuex创建的仓库)
  // 如果键和值一个直接写一个
  store,
  components: { App },
  template: '<App/>'
})
