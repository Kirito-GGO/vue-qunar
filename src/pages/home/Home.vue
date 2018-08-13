<template>
  <div>
    <home-header></home-header>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
// 引入Header组件(局部组件)
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/icons'

export default {
  name: 'Home',
  components: {
    // 声明局部组件
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>
</style>
