<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// 引入Header组件(局部组件)
import HomeHeader from './components/Header'

export default {
  name: 'Home',
  components: {
    // 声明局部组件
    HomeHeader
  }
}
</script>

<style>
</style>
