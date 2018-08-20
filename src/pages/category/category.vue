<template>
 <div class="category-area">
    <!-- 头部区域 -->
    <header-components :title-show=true :title-content="'Category'" :search-show=false :wallet-show=false ></header-components>
    <!-- 搜索区域 -->
    <div class="header-search">
      <input type="text" placeholder="Que buscas"/>
      <i class="shopIcon shop-fangdajing-short search-icon"></i>
    </div>
    <!-- 底部区域 -->
    <footer-components></footer-components>
 </div>
</template>
<script>
import FooterComponents from '../../components/footer-components/footer-components'
import HeaderComponents from '../../components/header-components/header-components'
export default {
  components: {
    FooterComponents: FooterComponents,
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      msg: 'df'
    }
  }
}
</script>
<style scoped lang="less">
  .category-area{
    .header-search{
      width: 94%;
      margin: 0 auto;
      input{
        height: 3rem;
        color: #AFAFAF;
        padding-left: 14%;
      }
      .search-icon{
        top: 30%;
        color: unset;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
</style>
