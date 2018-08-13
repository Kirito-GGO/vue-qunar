// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入fastclick插件 解决移动端click事件300毫秒延迟问题
import fastClick from 'fastclick'
// reset.css 重置基本样式 保证各种浏览器显示效果一致
import 'styles/reset.css'
// 解决移动端一像素边框问题
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 绑定到document.body就正确的使用了fastclick
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
