<template>
  <div>
    <div class="search">
      <input class="search-input"
             type="text"
             v-model="keyword"
             placeholder="输入城市名或拼音">
    </div>
    <!-- v-show="keyword" keyword有值的时候显示 没值的时候隐藏 -->
    <div class="search-content"
         ref="search"
         v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item of list"
            :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom"
            v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      // 用于函数节流
      timer: null
    }
  },
  // 计算属性
  computed: {
    // template不要出现逻辑代码 所以写在计算属性中
    // !this.list.length list长度为零时才显示:没有找到匹配数据
    hasNoData () {
      return !this.list.length
    }
  },
  // 侦听器
  watch: {
    keyword () {
      // 函数节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果this.keyword不存在
      if (!this.keyword) {
        this.list = []
        return
      }
      // 当keyword发生改变的时候延迟100毫秒执行监听函数中的内容
      this.timer = setTimeout(() => {
        const result = []
        // 遍历key
        for (let key in this.cities) {
          // 通过key遍历子项
          this.cities[key].forEach((value) => {
            // 如果子项中含有和keyword字段
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              // 就push到result数组
              result.push(value)
            }
          })
        }
        // this.list 就存储了包含关键词的项目
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.Bscroll = new Bscroll(this.$refs.search)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 0.72rem
  padding 0 0.1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height 0.62rem
    padding 0 0.1rem
    line-height 0.62rem
    text-align center
    border-radius 0.06rem
    color #666
.search-content
  z-index 1
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eeeeee
  .search-item
    line-height 0.62rem
    padding-left 0.2rem
    color #666
    background #fff
</style>
