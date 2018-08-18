<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!-- this.$store就是Vuex.Store -->
        <!-- 为什么每个组件都可以使用this.$store 因为创建根组件的时候把store传递进去了 接着vuex创建的store会被派发到每一个子组件里面 -->
        <!-- 所以在每个子组件中都可以使用this.$store获取到store -->
        <!-- {{this.$store.state.city}} -->

        <!-- 映射之后直接使用this.city -->
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// 引入vuex的mapState和mapGetters API
import { mapState } from 'vuex'
// import { mapState, mapGetters } from 'vuex'
// 导出一个对象
export default {
  // 组件的名字
  name: 'HomeHeader',
  // 计算属性
  computed: {
    // ...展开运算符
    // mapState是指把vuex里面的数据映射到这个组件的computed里 需要映射的数据是city
    ...mapState(['city'])
    // // 会把vuex的getters映射到当前组件的计算属性里
    // ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
/* @import 样式里面引用样式 ~@ 代表src文件夹 */
@import '~styles/varibles.styl'
/* lang="stylus" 使用stylus编写css样式 scoped 样式只对当前组件生效 */
/* 1rem等于html的font-size等于50px */
/* font-size为50px 因为是2倍图 设计图上的86px就等于43px 43除以50等于0.86 */
/* 如果直接按照2倍设计图尺寸86除以100等于0.86 */
.header
  display flex
  line-height $headerHeight
  background $bgColor
  color #fff
  .header-left
    width 0.64rem
    float left
    .back-icon
      text-align center
      font-size 0.4rem
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    padding-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    min-width 1.04rem
    padding 0 0.1rem
    float right
    text-align center
    color #fff
    .arrow-icon
      margin-left -0.04rem
      font-size 0.24rem
</style>
