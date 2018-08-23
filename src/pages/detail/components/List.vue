<template>
  <div>
    <div class="item"
         v-for="(item, index) of list"
         :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- v-if="item.children" 如果真 说明是一个多级菜单 -->
      <div v-if="item.children"
           class="item-children">
        <!-- name: 'DetailList' 组件的名字的作用 -->
        <!-- 组件调用自己的时候就可以通过自己的名字使用自己 -->
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
.item-title
  line-height 0.8rem
  font-size 0.32rem
  padding 0 0.2rem
.item-title-icon
  position relative
  left 0.06rem
  top 0.06rem
  display inline-block
  width 0.36rem
  height 0.36rem
  background url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
  margin-right 0.1rem
  background-size 0.4rem 3rem
.item-children
  padding 0 0.2rem
</style>
