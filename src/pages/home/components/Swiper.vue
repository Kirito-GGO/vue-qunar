<template>
  <!-- 在swiper标签外面套一层div用于防止抖动现象 -->
  <div class="swiper">
    <!-- 变量绑定 绑定了swiperOption -->
    <!-- v-if="list.length" -->
    <!-- 页面还没有获取ajax数据的时候 props里接收的list是Hone.vue中swiperList这个空数组 也就是说swiper最初创建的时候是通过空数组创建的 -->
    <!-- 当swiperList获取到ajax内容 变成真正的数据项 再传给HomeSwiper组件时 swiper才获取到新的数据 然后重新渲染的了新数据对应的dom -->
    <!-- 因为swiper默认是通过空数组创建 所以会导致页面显示轮播图中最后一个画面 -->
    <!-- 解决办法 让swiper的初次创建通过完整的数据项创建 而不是空数组 -->
    <!-- v-if="list.length" 如果是空数组 length等于0 即为false 故不会创建swiper 只有拿到真正的数据线swiper才会被创建 -->
    <swiper :options="swiperOption"
            v-if="showSwiper">
      <swiper-slide v-for="item of list"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      // 定义 swiperOption
      swiperOption: {
        // 配置项
        // 显示分页小圆点
        pagination: '.swiper-pagination',
        // 支持循环轮播
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
/*
.swiper-pagination-bullet-active 是 swiper 组件的类
在此处使用的scoped限制不能更改其他组件的样式
使用 >>> 穿透 不受scoped限制
*/
.swiper >>> .swiper-pagination-bullet-active
  background #fff !important
.swiper
  /* swiper的宽度是100% 他的高度会相对于宽度自动撑开31.25% */
  /* 这样就保持了宽高比例适中一致 就不会发生抖动现象 */
  width 100%
  height 0
  overflow hidden
  padding-bottom 31.25%
  background #eee
  .swiper-img
    width 100%
</style>
