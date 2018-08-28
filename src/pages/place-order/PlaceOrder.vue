<template>
  <div class="palace-order-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <div class="poa-footer clearfloat">
      <div class="left">
        <p>总价</p>
        <span> &yen; 2454 </span>
      </div>
      <span class="right">Order now</span>
    </div>
  </div>
</template>
<script>
import HeaderComponents from '../../components/header-components/header-components'
export default {
  components: {
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      headerObj: {
        scaleShow: false,
        backShow: true,
        searchShow: false,
        walletShow: false,
        titleShow: true,
        titleContent: 'Place Order'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .palace-order-area{
    padding-bottom: 4rem;
    .poa-footer{
      bottom: 0;
      height: 4rem;
      line-height: 4rem;
      position: fixed;
      font-size: 1.6rem;
      color: #ffffff;
      width: 100%;
      .left{
        float: left;
        width: 67%;
        background-color: #255288;
        p{
          line-height: 1.1rem;
          font-size: 1.1rem;
          padding-left: 0.7rem;
          padding-top: 0.7rem;
        }
        span{
          display: block;
          line-height: 1.8rem;
          font-size: 1.6rem;
          padding-left: 0.7rem;
          padding-bottom: 0.6rem;
        }
      }
      .right{
        float: right;
        width: 33%;
        text-align: center;
        background-color: #feae53;
      }
    }
  }
</style>
