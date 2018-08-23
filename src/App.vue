<template>
  <div id="app">
    <!-- 路由的内容被加载过一次之后 就把路由中的内容放到内存之中 -->
    <!-- 下一次再进这个路由的时候 不需要重新渲染组件 只需要把以前的内容拿出来到页面上显示就可以了 -->
    <keep-alive exclude="Detail">
      <!-- 显示的是当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
