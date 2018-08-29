<template>
  <div class="palace-order-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <div class="content">
      <div class="address-section">
        <div class="background"></div>
        <p>收货地址</p>
        <div class="address-detail">
          <div class="selected-address">
            <p><strong><span>胡景涛</span><i class="phone">150*****6015</i></strong></p>
            <p class="more-address">
              <span>深圳市宝安区宝源阿斯蒂芬阿斯蒂芬阿共和世家5栋305</span>
              <router-link to="/addressList"><i class="shopIcon shop-jiantouyou float_r"></i></router-link>
            </p>
          </div>
          <span>新建地址</span>
        </div>
      </div>
      <div class="order-section">
        <p><i class="shopIcon shop-maichang"></i>LAMECOME</p>
        <ul>
          <li class="clearfloat" v-for="(item, index) in productList" :key="index">
            <img :src="item.imgSrc" />
            <p class="name">{{item.name}}</p>
            <span class="size">{{item.size}}</span>
            <p class="quantity-price clearfloat">
              <span class="quantity float_l">数量: {{item.quantity}}</span>
              <span class="price float_r">&yen; {{item.price}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="poa-footer clearfloat">
      <div class="left">
        <p>总价</p>
        <span> &yen; {{totalPrice}} </span>
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
        backShow: true,
        titleShow: true,
        titleContent: 'Place Order'
      },
      productList: [
        {
          id: 1,
          name: 'FJ-888asdfasdfasdfasdfasdfadf',
          price: 10,
          quantity: 1,
          imgSrc: '../../static/assets/images/intro1.jpg',
          size: 'Black, XXXL, xmas pck',
          status: false
        },
        {
          id: 2,
          name: '超级手表手表手表手白哦',
          price: 20,
          quantity: 1,
          size: 'Black, XXXL, xmas pck',
          status: false,
          imgSrc: '../../static/assets/images/intro1.jpg'
        },
        {
          id: 3,
          name: '手表手表手表手白哦',
          price: 3550,
          size: 'Black, XXXL, xmas pck',
          status: false,
          quantity: 20,
          imgSrc: '../../static/assets/images/intro1.jpg'
        }
      ],
      totalPrice: 0
    }
  },
  mounted () {
    this.calToalPrice()
  },
  methods: {
    calToalPrice: function () {
      this.productList.forEach((item, index) => {
        this.totalPrice += item.quantity * item.price
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .palace-order-area{
    padding-bottom: 4rem;
    .content{
      background-color: #F2F2F2;
      .address-section{
        background-color: #ffffff;
        .background{
          height: 0.5rem;
          background-color: #F2F2F2;
        }
        >p{
          height: 3rem;
          line-height: 3rem;
          padding-left: 4%;
          font-size: 1.5rem;
          border-bottom: 1px solid #e5e5e5;
        }
        .address-detail{
          min-height: 10rem;
          padding: 3%;
          position: relative;
          .selected-address{
            font-size: 1.4rem;
            line-height: 1.8rem;
            .phone{
              margin-left: 0.5rem;
            }
            .more-address{
              span{
                width: 85%;
                display: inline-block;
              }
              i{
                font-size: 1.4rem;
                color: #999999;
              }
            }
          }
          >span{
            color: #ffffff;
            display: inline-block;
            padding: 0.5rem 3rem;
            border-radius: 0.3rem;
            font-size: 1.3rem;
            background-color: #feae54;
            position: absolute;
            bottom:10%;
            left:50%;
            transform:translate(-50%,0);
            text-align: center;
          }
        }
      }
      .order-section{
        >p{
          margin-top: 0.5rem;
          height: 3rem;
          line-height: 3rem;
          font-size: 1.5rem;
          border-bottom: 1px solid #e5e5e5;
          background-color: #ffffff;
          i{
            margin: 0 1rem;
            font-size: 1.8rem;
            vertical-align: middle;
          }
        }
        ul{
          background-color: #FAFAFA;
          li{
            padding: 3% 0 3% 3%;
            position: relative;
            img{
              width: 25%;
              float: left;
            }
            .name{
              top: 10%;
              left: 30%;
              position: absolute;
            }
            .size{
              top: 44%;
              left: 30%;
              color: #999999;
              position: absolute;
            }
            .quantity-price{
              bottom:1%;
              left: 30%;
              width: 70%;
              padding-bottom: 2%;
              position: absolute;
              line-height: 1.1rem;
              border-bottom: 1px solid #e5e5e5;
              .quantity{
                color: #999999;
              }
              .price{
                font-size: 1.6rem;
                padding-right: 4%;
              }
            }
          }
          li:last-child{
            border-bottom: 1px solid #e5e5e5;
            .quantity-price{
              border-bottom: unset;
            }
          }
        }
      }
    }
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
