<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages"
                    :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content"
                 :src="item.imgUrl"
                 alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 轮播图禁止自动滚动
        autoplay: false
      }
    }
  },
  // 计算属性
  computed: {
    pages () {
      if (this.list.length) {
        const pages = []
        // 循环list中的数据
        // 参数1 具体的循环项 参数2 循环项对应的下标
        this.list.forEach((item, index) => {
          // page 当前下标对应的数据 应该展示在轮播图的第几页
          // 假如是第3个数据 index对应的值是2 2除以8向下取整 为0 说明这条数据应该展示在第0页
          // 假如是第8个数据 index对应的值是9 9除以8向下取整 为1 说明这条数据应该展示在第1页
          // floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        // pages为一个二维数组 包含了每页应该显示的内容
        return pages
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
/* 占位 div默认宽度为100% 高度撑到宽度的50% */
.icons >>> .swiper-container
  height 0
  padding-bottom 50%
.icons
  margin-top 0.1rem
  .icon
    position relative
    overflow hidden
    /* 宽度是25% 高度撑到25% */
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
