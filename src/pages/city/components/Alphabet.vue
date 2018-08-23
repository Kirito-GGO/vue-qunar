<template>
  <ul class="list">
    <!-- @touchstart.prevent 阻止默认行为 -->
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>
    <!-- 添加clcik事件 点击时触发handleLetterClick方法 -->
    <!-- touchstart 手指触摸时 -->
    <!-- touchmove 手指移动时 -->
    <!-- touchend 手指离开时 -->
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  // 计算属性
  computed: {
    letters () {
      const letters = []
      // for in 循环得到key
      for (let i in this.cities) {
        letters.push(i)
      }
      // letters = ['A', 'B', ...]
      return letters
    }
  },
  data () {
    return {
      // 标示位 目的是让handleTouchStart触发之后才可以触发handleTouchMove
      touchStatus: false,
      startY: 0,
      // 用于函数节流
      timer: null
    }
  },
  // 生命周期钩子 当页面数据更新同时页面完成了渲染的时候
  /*
  性能优化
  页面刚加载的时候Alphabet组件中什么东西都不会显示
  当City组件的ajax获取到数据时Alphabet组件会重新渲染
  当Alphabet组件重新渲染之后updated这个生命周期钩子就会被执行
  这时字母才会展示出来 这时才能获取到this.$refs['A'][0]这个dom
  */
  updated () {
    // A字母元素距离顶部的高度(不包括顶部标题和搜索框)
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // 向外触发事件 事件名为change 内容为e.target.innerText
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          // 清除定时器
          clearTimeout(this.timer)
        }
        // 函数节流
        // 当执行以下代码时会延迟16毫秒执行
        // 在这16毫秒中再次执行把上一次要做的操作清除掉 重新执行这次的操作
        this.timer = setTimeout(() => {
          // e.touches[0] 手指现在的位置
          // clientY 设置或获取鼠标指针位置相对于窗口客户区域的 y 坐标，其中客户区域不包括窗口自身的控件和滚动条。
          // 减79是减去了顶部标题和搜索框的距离
          const touchY = e.touches[0].clientY - 79
          // 手指现在在的字母index = 向下取整(手指现在的位置距离顶部的高度 - A字母元素距离顶部的高度) / 每个字母的高度
          const index = Math.floor((touchY - this.startY) / 20)
          // index 可能出现小数 这种情况this.letters[index]等于undefined
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    line-height 0.4rem
    text-align center
    color $bgColor
</style>
