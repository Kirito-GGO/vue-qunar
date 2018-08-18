<template>
  <div class="list"
       ref="wrapper">
    <!-- ref="wrapper" 获取dom -->
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               :key="item.id"
               @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- v-for="(item, key) of cities" 对象也可被v-for循环 第二项就不是index而是key -->
      <div class="area"
           v-for="(item, key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               :key="innerItem.id"
               @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// better-scroll 是一款重点解决移动端各种滚动场景需求的插件
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    // 子组件接收到父组件传递的letter
    letter: String
  },
  computed: {
    // 传递的内容可以是数组也可以是对象
    ...mapState({
      // 把vuex里的city这个共有数据 映射到当前组件的计算属性里 映射过来后名字叫currentCity
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      /* 方法1 */
      // 1.执行dispath方法调用Actions
      // 派发一个名字叫做changCity的Actions 传递参数city
      // this.$store.dispatch('changCity', city)
      /* 方法2 */
      // 直接执行commit调用mutations
      // this.$store.commit('changCity', city)
      // this.changCity(要传递的参数))
      this.changCity(city)
      this.$router.push('/')
    },
    // 我们有一个mutations叫changCity 把这个mutations映射到当前组件的changCity方法里
    ...mapMutations(['changCity'])
  },
  // 侦听器
  watch: {
    // 监听letter的变化 一旦letter变了就执行函数
    letter () {
      if (this.letter) {
        // this.$refs[this.letter] 获取到点击区域的dom 是数组类型
        // scrollToElement() 方法不接收数组类型 所以面加上[0]
        const element = this.$refs[this.letter][0]
        // this.scroll.scrollToElement() better-scroll插件提供的方法
        // 让better-scroll的滚动区域自动滚动到某个元素上
        this.scroll.scrollToElement(element)
      }
    }
  },
  // 生命周期函数 在dom挂载完毕执行
  mounted () {
    // 创建better-scroll的实例 实例创建的时候要接收一个dom元素或者dom选择器
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .title
    line-height 0.54rem
    background #eee
    padding-left 0.2rem
    color #666
    font-size 0.26rem
  .button-list
    overflow hidden
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      width 33.33%
      float left
      .button
        text-align center
        margin 0.1rem
        padding 0.1rem 0
        border 0.02rem solid #ccc
        border-redius 0.06rem
  .item-list
    .item
      line-height 0.76rem
      padding-left 0.2rem
</style>
