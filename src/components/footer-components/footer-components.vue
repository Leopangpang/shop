<template>
  <footer>
    <span>PROMOS</span>
    <ul class="clearfloat">
        <li class="shopIcon" :class="homeShow ? 'shop-shouye1' : 'shop-shouye1-selected' " @click="toChanged(1)"></li>
        <li class="shopIcon" :class="searchShow ? 'shop-sousuo' : 'shop-sousuo-selected' " @click="toChanged(2)"></li>
        <li class="shopIcon" :class="carShow ? 'shop-gouwuche' : 'shop-gouwuche-selected' " @click="toChanged(3)"></li>
        <li class="shopIcon" :class="menberShow ? 'shop-renyuan2' : 'shop-renyuan2-selected' " @click="toChanged(4)"></li>
    </ul>
  </footer>
</template>
<script>
export default {
  data () {
    return {
      homeShow: true,
      searchShow: true,
      carShow: true,
      menberShow: true,
      routePath: ''
    }
  },
  created () {
    // 获取path参数，然后截去第一个字符串，例如‘/index’ 变成'index'
    this.routePath = this.$route.path.substr(1)
    this.isSelected()
  },
  methods: {
    // 底部选中高亮
    isSelected: function () {
      this.homeShow = true
      this.searchShow = true
      this.carShow = true
      this.menberShow = true
      if (this.routePath === 'index') {
        this.homeShow = !this.homeShow
      } else if (this.routePath === 'category') {
        this.searchShow = !this.searchShow
      } else if (this.routePath === 'car') {
        this.carShow = !this.carShow
      } else {
        this.menberShow = !this.menberShow
      }
    },
    // 切换路由
    toChanged: function (num) {
      if (num === 1) {
        this.$router.push({path: '/index'})
      } else if (num === 2) {
        this.$router.push({path: '/category'})
      } else if (num === 3) {
        this.$router.push({path: '/car'})
      } else {
        this.$router.push({path: '/member'})
      }
    }
  }
}
</script>
<style scoped lang="less">
  .shop-shouye1-selected,.shop-sousuo-selected,.shop-gouwuche-selected,.shop-renyuan2-selected{
    color: #255288;
  }
</style>
