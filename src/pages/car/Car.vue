<template>
  <div class="car-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <div class="car-content">
      <div class="cc-top clearfloat">
        <i class="float_l shopIcon shop-lingdang"></i>
        <span class="word-nowrap"><i class="basic-orange-color">Pay and Deliverry</i> and <i class="basic-orange-color">flex billing</i> are supported.</span>
        <i class="float_r shopIcon shop-guanbi"></i>
      </div>
      <div class="cc-middle">
        <div class="ccm-header">
          <span class="select-all"></span>
          <i class="shopIcon shop-maichang"></i>
          <span>LAMECOME</span>
        </div>
        <div class="ccm-content">
          <ul>
            <li class="clearfloat">
              <span class="select-all"></span>
              <div class="img-area">
                <img src ="../../assets/images/intro1.jpg"/>
              </div>
              <div class="product-area">
                <span>超级手表手表手表</span>
                <p>Black, XXXL, xmas pck</p>
                <div class="quantity">
                  <i>-</i>
                  <span>1</span>
                  <i>+</i>
                </div>
                <span class="price">&yen;1231</span>
              </div>
            </li>
            <li class="clearfloat">
              <span class="select-all"></span>
              <div class="img-area">
                <img src ="../../assets/images/intro1.jpg"/>
              </div>
              <div class="product-area">
                <span>超级手表手表手表</span>
                <p>Black, XXXL, xmas pck</p>
                <div class="quantity">
                  <i>-</i>
                  <span>1</span>
                  <i>+</i>
                </div>
                <span class="price">&yen;1231</span>
              </div>
            </li>
            <li class="clearfloat">
              <span class="select-all"></span>
              <div class="img-area">
                <img src ="../../assets/images/intro1.jpg"/>
              </div>
              <div class="product-area">
                <span>超级手表手表手表</span>
                <p>Black, XXXL, xmas pck</p>
                <div class="quantity">
                  <i>-</i>
                  <span>1</span>
                  <i>+</i>
                </div>
                <span class="price">&yen;1231</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
     <div class="cc-bottom">
        <i class="select-all"></i>
        <span class="total">Total</span>
        <span class="price">&yen;56894</span>
        <span class="checkout-button">Checkout</span>
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
      headerObj: {
        scaleShow: false,
        backShow: false,
        searchShow: false,
        walletShow: false,
        titleShow: true,
        titleContent: 'Car'
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .car-area{
    .select-all{
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #999999;
    }
    .car-content{
      padding-bottom: 8rem;
      background-color: #F2F2F2;
      .cc-top{
        height: 3rem;
        line-height: 3rem;
        color: #ffffff;
        padding: 0 3%;
        font-size: 1.3rem;
        background: -webkit-linear-gradient(right, #77a1d4, #255288);  /* Safari 5.1 - 6.0 77a1d4 */
        background: -o-linear-gradient(right,#77a1d4, #255288);  /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right,  #77a1d4, #255288);  /* Firefox 3.6 - 15 */
        background: linear-gradient(to right,  #77a1d4, #255288);  // 标准的语法必须放在最后
        >i{
          font-size: 1.8rem;
        }
        .shop-lingdang{
          padding-right: 1%;
        }
        >span{
          width: 85%;
          display: inline-block;
        }
      }
      .cc-middle{
        margin-top: 0.5rem;
        .ccm-header{
          height: 3rem;
          line-height: 3rem;
          font-size: 1.6rem;
          padding-left: 3%;
          background-color: #ffffff;
          i{
            font-size: 1.8rem;
            margin: 0.5rem;
            vertical-align: middle;
          }
        }
        .ccm-content{
          background-color: #FAFAFA;
          ul{
            li{
              padding: 1rem 0;
              height: 6rem;
              border-bottom: 1px solid #e5e5e5;
             >span{
               margin: 0 3%;
             }
             .img-area{
               width: 6rem;
               vertical-align: middle;
               display: inline-block;
               font-size: 0;
               img{
                 width: 100%;
                 height: 100%;
                 min-height: 6rem;
                 min-width: 6rem;
                 box-sizing: border-box;
                 border: 1px solid #e5e5e5;
               }
             }
             .product-area{
               float: right;
               width: 61%;
               line-height: 1.1rem;
               position: relative;
               height: inherit;
               >p{
                 color: #999999;
                 margin: 1rem 0;
               }
               .quantity{
                 font-size: 1.3rem;
                 display: inline-block;
                 position: absolute;
                 bottom: 0;
                 left: 0;
                 i{
                   width: 3rem;
                   height: 1.8rem;
                   line-height: 1.8rem;
                   text-align: center;
                   display: inline-block;
                   background-color: #E5E5E5;
                 }
                 >span{
                   margin: 0 0.5rem;
                 }
               }
               .price{
                 right: 0.7rem;
                 bottom:0;
                 font-weight: bold;
                 font-size: 1.6rem;
                 color: #c74d27;
                 position: absolute;
               }
             }
            }
          }
        }
      }
    }
     .cc-bottom{
        height: 4rem;
        line-height: 4rem;
        position: fixed;
        bottom: 4rem;
        width: 100%;
        background-color: #ffffff;
        border-top: 1px solid #e5e5e5;
        >i{
          margin: 0 3%;
        }
        .total{
          font-size: 1.4rem;
          vertical-align: middle;
        }
        .price{
          font-weight: bold;
          font-size: 1.6rem;
          color: #c74d27;
          margin-left: 20%;
          vertical-align: middle;
        }
        .checkout-button{
          float: right;
          width: 33%;
          color: #ffffff;
          text-align: center;
          font-size: 1.6rem;
          background-color: #feae54;
        }
      }
  }
</style>
