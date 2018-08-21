<template>
  <!-- 头部区域 -->
  <header class="clearfloat">
    <i class="shopIcon shop-saomiao"></i>
    <span v-if="titleShow" class="header-title">{{titleContent}}</span>
    <div v-if="searchShow" class="header-search float_l">
      <input type="text" placeholder="Que buscas"/>
      <i class="shopIcon shop-fangdajing-short search-icon"></i>
    </div>
    <i v-if="walletShow" class="shopIcon shop-qianbao1">
      <span class="badge-number">12</span>
    </i>
    <i class="shopIcon shop-xinxi-more-left"></i>
  </header>
</template>
<script>
export default {
  // titleShow:标题显示，searchShow搜索显示，walletShow钱包显示
  props: ['titleContent', 'titleShow', 'searchShow', 'walletShow'],
  data () {
    return {
      dd: true
    }
  }
}
</script>
<style scoped lang="less">
</style>
