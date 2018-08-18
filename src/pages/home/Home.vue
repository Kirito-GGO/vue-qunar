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
import { mapState } from 'vuex'

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
      // 缓存城市(上一次城市)
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  // 计算属性
  computed: {
    // 获取vuex中的city
    ...mapState(['city'])
  },
  methods: {
    // 定义getHomeInfo函数
    getHomeInfo () {
      // 发送get请求
      // 不同的城市需要不用的数据 所有ajax请求this.city对应的城市的数据
      axios.get(`/api/index.json?city=${this.city}`)
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
  // 生命周期函数 vue实例中的dom被挂载到页面上后触发 初次加载的时候
  mounted () {
    this.lastCity = this.city
    // 调用getHomeInfo函数
    this.getHomeInfo()
  },
  // 当页面重新被显示的时候activated执行 首次加载时在mounted后执行
  activated () {
    // 判断缓存城市(上一次城市)和当前城市是否相同 如果相同
    if (this.lastCity !== this.city) {
      // 缓存城市等于当前城市
      this.lastCity = this.city
      // 发送ajax 请求新城市的数据
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
