<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
// 导出一个对象
export default {
  // 组件的名字
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
/* lang="stylus" 使用stylus编写css样式 scoped 样式只对当前组件生效 */
/* 1rem等于html的font-size等于50px */
/* font-size为50px 因为是2倍图 设计图上的86px就等于43px 43除以50等于0.86 */
/* 如果直接按照2倍设计图尺寸86除以100等于0.86 */
.header
  display flex
  line-height 0.86rem
  background #00bcd4
  color #fff
  .header-left
    width 0.64rem
    float left
  .header-input
    flex 1
    height 0.64rem
    line-height 0.64rem
    margin-top 0.12rem
    margin-left 0.2rem
    background #fff
    border-radius 0.1rem
    color #ccc
  .header-right
    width 1.24rem
    float right
    text-align center
</style>
