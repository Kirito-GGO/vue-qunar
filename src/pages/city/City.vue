<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <!-- 把父组件的letter传递给子组件2 -->
    <city-list :cities="cities"
               :hot="hotCities"
               :letter="letter"></city-list>
    <!-- 在父组件监听事件@change="handleLetterChange" -->
    <!-- 事件名为change 如果监听到了 就触发handleLetterChange方法 -->
    <city-alphabet :cities="cities"
                   @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      // ABC对应的城市的名字
      cities: {},
      // 热门城市
      hotCities: [],
      // 用于接收子组件发送过来的letter
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 父组件接收到子组件发送的数据letter
    handleLetterChange (letter) {
      // 把值保存到父组件
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
