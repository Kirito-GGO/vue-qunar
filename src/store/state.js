let defaultCity = '上海'
/*
使用localStorage建立在外层包裹一个try catch 因为在某些浏览器如果用户关闭了本地存储或使用隐身模式
如果直接使用localStorage可能导致浏览器直接抛出异常 代码就整个运行不了了
*/
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

// 导出
export default {
  // 首页和城市选择页公用的数据
  city: defaultCity
}
