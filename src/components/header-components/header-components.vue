<template>
  <!-- 头部区域 -->
  <header class="clearfloat">
    <!-- 扫描 -->
    <i v-if="headerObj.scaleShow" class="shopIcon shop-saomiao absolute-center"></i>
    <!-- 回退 -->
    <i v-if="headerObj.backShow" class="shopIcon shop-jiantou-copy absolute-center" @click="back()"></i>
    <!-- 标题 -->
    <span v-if="headerObj.titleShow" class="header-title  absolute-center">{{headerObj.titleContent}}</span>
    <!-- 搜索 -->
    <div v-if="headerObj.searchShow" class="absolute-center header-search">
      <input  type="text" placeholder="商品名称"/>
      <i class="shopIcon shop-fangdajing-short search-icon absolute-Ycenter"></i>
    </div>
    <!-- 钱包 -->
    <i v-if="headerObj.walletShow" class="shopIcon absolute-center shop-qianbao1">
      <span class="badge-number">12</span>
    </i>
    <!-- 咨询 -->
    <i v-if="headerObj.askShow" class="shopIcon absolute-center shop-xinxi-more-left"></i>
  </header>
</template>
<script>
export default {
  // titleShow:标题显示，searchShow搜索显示，walletShow钱包显示
  props: ['headerObj'],
  data () {
    return {}
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="less">
</style>
