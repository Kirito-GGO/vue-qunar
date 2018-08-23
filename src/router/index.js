import Vue from 'vue'
import Router from 'vue-router'
// @代表src目录下
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', // 路由项的名字
      // 当用户访问根路径的时候展示Home这个组件
      // <router-view/> 所显示的内容 就是这里配置的组件
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由 /detail/:id 前面的路径必须是/detail/ 后面可以带一个参数 这个参数会放到id这个变量中
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  // 每次进入新页面 x轴滚动条初始位置为0 y轴滚动条初始位置为0 也就是页面切换的时候始终保持最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
