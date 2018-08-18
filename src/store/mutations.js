// 导出
export default {
  // 5.参数1 state指的是所有公用的数据 参数2 数据
  changCity (state, city) {
    state.city = city
    // 使用localStorage进行本地存储
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
