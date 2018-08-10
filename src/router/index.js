import Vue from 'vue'
import Router from 'vue-router'
// @代表src目录下
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', // 路由项的名字
      // 当用户访问根路径的时候展示Home这个组件
      // <router-view/> 所显示的内容 就是这里配置的组件
      component: Home
    }
  ]
})
