export default (Vue) => {
  // 自动聚焦
  Vue.filter('orderStatus', function (value) {
    if (value === 0) {
      return '未支付'
    } else if (value === 1) {
      return '已完成'
    } else if (value === 2) {
      return '已取消'
    } else if (value === 3) {
      return '未发货'
    } else if (value === 4) {
      return '已发货'
    }
  })
}
