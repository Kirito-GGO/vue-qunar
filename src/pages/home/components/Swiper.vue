<template>
  <!-- 在swiper标签外面套一层div用于防止抖动现象 -->
  <div class="swiper">
    <!-- 变量绑定 绑定了swiperOption -->
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList"
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
  data () {
    return {
      // 定义 swiperOption
      swiperOption: {
        // 配置项 显示分页小圆点
        pagination: '.swiper-pagination',
        // 支持循环轮播
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/e7/d70d0830a9941b02.jpg_750x200_f8c7d2ad.jpg'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
        }
      ]
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
  /* swiper的宽度是100% 他的高度会相对于宽度自动撑开26.6% */
  /* 这样就保持了宽高比例适中一致 就不会发生抖动现象 */
  width 100%
  height 0
  overflow hidden
  padding-bottom 26.6%
  background #eee
  .swiper-img
    width 100%
</style>
