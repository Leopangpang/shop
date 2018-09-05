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
        <div class="order-detail" v-for="(item, index) of orderList" :key='index'>
          <p class="top clearfloat">
            <span><i>订单号:</i>{{item.orderNum}}</span>
            <span class="status absolute-Ycenter">{{item.status | orderStatus}}</span>
            <i @click="deleteOrder(index)" class="shopIcon shop-shanchu absolute-Ycenter"></i>
          </p>
          <div class="middle clearfloat">
            <van-swipe  :show-indicators="false" :loop="false" >
              <van-swipe-item style="width:8rem;padding: 0 1rem;transform: translateX(0)" v-for="(imgItem, indexNum) of item.imgSrc" :key='indexNum'>
                <img :src="imgItem"/>
              </van-swipe-item>
            </van-swipe>
          </div>
          <div class="bottom">
            <p class="clearfloat"><span>共{{item.quantity}}件商品  实付款:<i>&yen;{{item.totalPrice}}</i></span></p>
            <div class="todo clearfloat">
              <span class="selected">再次购买</span>
              <span>卖了换钱</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer-components></footer-components>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import HeaderComponents from '../../components/header-components/header-components'
import FooterComponents from '../../components/footer-components/footer-components'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
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
      orderList: [
        {
          orderNum: 12564686625645,
          status: 1,
          imgSrc: [
            '../../static/assets/images/product1.jpg',
            '../../static/assets/images/intro1.jpg',
            '../../static/assets/images/product1.jpg'
          ],
          quantity: 5,
          totalPrice: 454
        },
        {
          orderNum: 968654,
          status: 2,
          imgSrc: [
            '../../static/assets/images/product1.jpg'
          ],
          quantity: 2,
          totalPrice: 126
        }
      ],
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
        case 1:
          this.isAllShow = true
          break
        case 2:
          this.isWaitPayShow = true
          break
        case 3:
          this.isWaitDeliveryShow = true
          break
        case 4:
          this.isFinishedShow = true
          break
        default:
          this.isAllShow = true
      }
    },
    deleteOrder: function (index) {
      this.$dialog.confirm({
        title: '删除订单',
        message: '是否删除？'
      }).then(() => {
        // 先页面处理删除，后面记得调用后台接口后台也删除？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
        this.orderList.splice(index, 1)
      }).catch(() => {
        this.$toast('取消删除')
      })
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
            border-bottom: 2px solid #ffffff;
          }
        }
        .selected{
          color: #255288;
          border-bottom: 2px solid #255288;
        }
      }
    }
    .order-list{
      .order-detail{
        margin-top: 0.5rem;
        background-color: #FFFFFF;
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
          padding: 1rem 0;
          overflow: hidden;
          border-bottom: 1px solid #e5e5e5;
          img{
            width: 100%;
            box-sizing: border-box;
            float: left;
            border: 1px solid #e5e5e5;
          }
        }
        .bottom{
          span{
            padding: 1rem 0;
            font-size: 1.2rem;
            float: right;
            margin-right: 3%;
            i{
              margin-left: 0.5rem;
              font-size: 1.6rem;
            }
          }
          .todo{
            border-top: 1px solid #e5e5e5;
            border-bottom: 1px solid #e5e5e5;
            padding: 0.8rem 0;
            span{
              border: 1px solid #e5e5e5;
              padding: 0.5rem 1rem;
              border-radius: 1.2rem;
              display: inline-block;
            }
            .selected{
              color: #c74d27;
              border-color: #c74d27;
            }
          }
        }
      }
    }
    .van-swipe{
      width: 10rem;
      overflow: unset;
    }
  }
</style>
