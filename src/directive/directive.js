export default (Vue) => {
  // 自动聚焦
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()
    }
  })
  Vue.directive('orderStatus', function (el, binding, value) {
    console.log(el, binding)
  })
}
