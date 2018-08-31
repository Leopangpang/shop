<template>
  <div class="order-area">
    <!-- 头部 -->
    <header-components :headerObj="headerObj"></header-components>
    <div class="order-content">
      <!-- 搜索区域 -->
      <div class="header-search">
        <input type="text" placeholder="输入商品名称/订单号"/>
        <i class="shopIcon shop-fangdajing-short search-icon absolute-Ycenter"></i>
      </div>
      <div class="order-nav">
         <ul class="clearfloat">
           <li  @click="changeStatus(1)"><span  :class="{selected: isAllShow}">所有订单</span></li>
           <li  @click="changeStatus(2)"><span  :class="{selected: isWaitPayShow}">待支付</span></li>
           <li  @click="changeStatus(3)"><span  :class="{selected: isWaitDeliveryShow}">待收货</span></li>
           <li  @click="changeStatus(4)"><span  :class="{selected: isFinishedShow}">已完成</span></li>
         </ul>
      </div>
      <div class="order-list">
        <div class="order-detail">
          <p class="top clearfloat">
            <span><i>订单号:</i>7851565646545</span>
            <span class="status absolute-Ycenter">已完成</span>
            <i class="shopIcon shop-shanchu absolute-Ycenter"></i>
          </p>
          <div class="middle">
            <img src="../../assets/images/intro1.jpg"/>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer-components></footer-components>
  </div>
</template>
<script>
import HeaderComponents from '../../components/header-components/header-components'
import FooterComponents from '../../components/footer-components/footer-components'
export default {
  components: {
    HeaderComponents: HeaderComponents,
    FooterComponents: FooterComponents
  },
  data () {
    return {
      headerObj: {
        backShow: true,
        titleShow: true,
        askShow: true,
        titleContent: '订单列表'
      },
      isAllShow: false,
      isWaitPayShow: false,
      isWaitDeliveryShow: false,
      isFinishedShow: false
    }
  },
  methods: {
    changeStatus: function (index) {
      this.isAllShow = false
      this.isWaitPayShow = false
      this.isWaitDeliveryShow = false
      this.isFinishedShow = false
      switch (index) {
        case index = 1:
          this.isAllShow = true
          break
        case index = 2:
          this.isWaitPayShow = true
          break
        case index = 3:
          this.isWaitDeliveryShow = true
          break
        case index = 4:
          this.isFinishedShow = true
          break
        default:
          this.isAllShow = true
      }
    }
  }
}
</script>
<style lang="less">
  .order-area{
    background-color: #F2F2F2;
    .header-search{
      width: 100%;
      left: unset;
      margin: 0 auto;
      padding: 0.8rem 0;
      input{
        width: 94%;
        color: #AFAFAF;
        padding-left: 10%;
        display: block;
        margin: 0 auto;
        background-color: #ffffff;
      }
      .search-icon{
        color: unset;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
    .order-nav{
      background-color: #FFFFFF;
      ul{
        border-bottom: 1px solid #e5e5e5;
        li{
          width: 25%;
          float: left;
          text-align:center;
          font-size: 1.4rem;
          span{
            text-align: center;
            padding: 1rem 0;
            box-sizing: border-box;
            display: inline-block;
          }
        }
        .selected{
          color: #255288;
          border-bottom: 2px solid #255288;
        }
      }
    }
    .order-list{
      background-color: #FFFFFF;
      .order-detail{
        .top{
          font-size: 1.4rem;
          position: relative;
          >span{
            padding: 1rem 3%;
            display: inline-block;
            i{
              color: #999999;
              margin-right: 0.5rem;
            }
          }
          .status{
            right: 8%;
            font-size: 1.2rem;
            color: #d5d5d5;
          }
          >i{
            right: 3%;
            color: #d5d5d5;
            font-size: 1.7rem;
          }
        }
        .middle{
          font-size: 1.4rem;
          position: relative;
          background-color: #F2F2F2;
          border-bottom: 1px solid #e5e5e5;
          img{
            width: 25%;
            box-sizing: border-box;
            border: 1px solid #e5e5e5;
          }
        }
      }
    }
  }
</style>
