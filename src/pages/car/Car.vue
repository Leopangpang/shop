<template>
  <div class="car-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <div class="car-content">
      <div v-show="tipShow" class="cc-top clearfloat">
        <i class="float_l shopIcon shop-lingdang"></i>
        <span class="word-nowrap">
          <van-notice-bar>
            足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
          </van-notice-bar>
        </span>
        <i @click="closeTip()" class="float_r shopIcon shop-guanbi"></i>
      </div>
      <div class="cc-middle">
        <div class="ccm-header">
          <i class="shopIcon shop-maichang absolute-Ycenter"></i>
          <span class="line-center">京东自营</span>
        </div>
        <div class="ccm-content">
          <ul v-if="productList.length>0">
            <li class="clearfloat" v-for="(item, index) in productList" :key="index">
              <span  @click="changeItem(index)" class="select-all" :class="{ changeborder : item.status }"></span>
              <span v-if="item.status" @click="changeItem(index)" class="shopIcon shop-gou-by-circle"></span>
              <div class="img-area">
                <img :src ="item.imgSrc"/>
              </div>
              <div class="product-area">
                <span>{{item.name}}</span>
                <p>{{item.size}}</p>
                <div class="quantity">
                  <i @click="handleQuantity(index, -1)" :class="{diabled:item.quantity==1}">-</i>
                  <span>{{item.quantity}}</span>
                  <i @click="handleQuantity(index, 1)">+</i>
                </div>
                <span class="price">&yen;{{item.price}}</span>
              </div>
            </li>
          </ul>
          <div v-else class="no-car-section">
            <span class="shopIcon shop-konggouwuche2"></span>
            <p>购物车空空如也</p>
          </div>
        </div>
      </div>
    </div>
     <div v-if="productList.length>0" class="cc-bottom">
        <i  @click="selectAll()" class="select-all" :class="{ changeborder : checkAll }"></i>
        <i v-if="checkAll" @click="selectAll()" class="shopIcon shop-gou-by-circle"></i>
        <span class="total">全选</span>
        <span class="price">总计: <i>&yen; {{totalPrice}}</i></span>
        <span @click ="goPlaceOrder()" class="checkout-button">确认订单</span>
      </div>
    <!-- 底部区域 -->
    <footer-components></footer-components>
  </div>
</template>
<script>
import { NoticeBar } from 'vant'
import FooterComponents from '../../components/footer-components/footer-components'
import HeaderComponents from '../../components/header-components/header-components'
export default {
  components: {
    [NoticeBar.name]: NoticeBar,
    FooterComponents: FooterComponents,
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      headerObj: {
        titleShow: true,
        askShow: true,
        titleContent: 'Car'
      },
      productList: [],
      checkAll: false,
      totalPrice: 0,
      tipShow: true
    }
  },
  created () {
    // 取出购物车内容
    if (localStorage.getItem('car')) {
      this.productList = JSON.parse(localStorage.getItem('car'))
      this.productList.forEach((item, index) => {
        item.status = false
        this.checkAll = false
        this.selectAll()
      })
    }
  },
  methods: {
    // 数量减少或者增加操作
    handleQuantity: function (numIndex, e) {
      this.productList.forEach((item, index) => {
        // 匹配当前的哪个item
        if (numIndex === index) {
          // 当 e===1 时为增加数量操作，反之则减少
          if (e === 1) {
            item.quantity++
          } else {
            item.quantity--
          }
          // 数量不能小于1
          if (item.quantity < 1) {
            item.quantity = 1
          }
        }
      })
      this.calPrice()
    },
    // 全选或全取消
    selectAll: function () {
      this.checkAll = !this.checkAll
      this.productList.forEach((item, index) => {
        item.status = this.checkAll
      })
      this.calPrice()
    },
    // 单选
    changeItem: function (index) {
      let select = this.productList.filter((item, o) => {
        if (o === index) {
          item.status = !item.status
        }
        return item.status === true
      })
      // 当当选全选之后全选按钮也选上
      select.length === this.productList.length ? this.checkAll = true : this.checkAll = false
      this.calPrice()
    },
    // 计算价格
    calPrice: function () {
      this.totalPrice = 0
      this.productList.forEach((item, index) => {
        if (item.status) {
          this.totalPrice += item.quantity * item.price
        }
      })
    },
    // 跳转到确认订单页
    goPlaceOrder: function () {
      this.$router.push({path: '/placeOrder'})
    },
    // 关闭通知提示栏
    closeTip: function () {
      this.tipShow = false
    }
  }
}
</script>
<style lang="less">
  .car-area{
    header{
      border-bottom: 1px solid #e5e5e5;
    }
    .van-notice-bar{
      color: #feae54;
      background-color: unset;
      font-size: 1.1rem;
      padding: 0 1.4rem;
    }
    .van-notice-bar__wrap{
      height: 3rem;
      line-height: 3rem;
    }
    .select-all{
      width: 1.3rem;
      height: 1.3rem;
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #999999;
    }
    .changeborder{
       border: 1px solid #ffffff;
    }
    .shop-gou-by-circle{
      position: absolute;
      font-size: 2.1rem;
      color: #feae54;
    }
    .car-content{
      padding-bottom: 8rem;
      background-color: #F2F2F2;
      .cc-top{
        height: 3rem;
        line-height: 3rem;
        color: #ffffff;
        padding:0 3%;
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
          width: 86%;
          display: inline-block;
        }
      }
      .cc-middle{
        margin-top: 0.5rem;
        .ccm-header{
          font-size: 1.4rem;
          padding-left: 3%;
          position: relative;
          background-color: #ffffff;
          i{
            font-size: 1.8rem;
            margin-right: 0.5rem;
          }
          span{
            padding: 0.5rem 2.5rem;
          }
        }
        .ccm-content{
          background-color: #FAFAFA;
          ul{
            li{
              padding: 1rem 0;
              height: 6rem;
              position: relative;
              border-bottom: 1px solid #e5e5e5;
              .shop-gou-by-circle{
                top: 39.1%;
                left: -0.8%;
              }
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
                   font-size: 1.4rem;
                   line-height: 1.8rem;
                   text-align: center;
                   display: inline-block;
                   font-weight: bold;
                   background-color: #E5E5E5;
                 }
                 .diabled{
                   color: #d5d5d5;
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
          .no-car-section{
            color: #feae54;
            text-align: center;
            padding: 7rem 0;
            span{
              font-size: 12rem;
            }
            p{
              margin-top: 1rem;
            }
          }
        }
      }
    }
     .cc-bottom{
        position: fixed;
        bottom: 4rem;
        width: 100%;
        height: 4rem;
        background-color: #ffffff;
        border-top: 1px solid #e5e5e5;
        .shop-gou-by-circle{
          top: 7%;
          left: -0.8%;
        }
        >i{
          margin-left: 3%;
          margin-right: 2%;
        }
        .total{
          font-size: 1.1rem;
          padding: 1rem 0;
          vertical-align: middle;
          display: inline-block;
        }
        .price{
          font-weight: bold;
          font-size: 1.5rem;
          color: #c74d27;
          margin-left: 10%;
          padding: 1rem 0;
          display: inline-block;
          vertical-align: middle;
          i{
            font-size: 1.7rem;
          }
        }
        .checkout-button{
          float: right;
          height: 4rem;
          width: 33%;
          color: #ffffff;
          text-align: center;
          font-size: 1.6rem;
          padding: 1rem 0;
          background-color: #feae54;
        }
      }
  }
</style>
