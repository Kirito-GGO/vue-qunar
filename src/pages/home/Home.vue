<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// 引入Header组件(局部组件)
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    // 声明局部组件
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    // 定义getHomeInfo函数
    getHomeInfo () {
      // 发送get请求
      axios.get('/api/index.json')
        // 返回一个Promise对象
        // 数据获取成功调用getHomeInfoSucc函数
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      // 如果后端正确的返回了结果 并且 返回结果中有data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  // 生命周期函数 vue实例中的dom被挂载到页面上后触发
  mounted () {
    // 调用getHomeInfo函数
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
