<template>
  <div class="detail-area">
    <!-- 头部 -->
    <header-components :headerObj="headerObj"></header-components>
    <!-- 产品轮播 -->
    <div class="swiper-section">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, i) in product.imgArray" :key = i>
          <img :src="item.imgSrc"/>
        </van-swipe-item>
      </van-swipe>
      <!-- 打折提示 -->
      <div class="saving-tip">
        <span>Saving {{product.savingTip}}% now</span>
      </div>
      <!-- 分享及收藏提示 -->
      <div class="circle-tip">
        <span class="share-circle">
          <i class="shopIcon shop-fenxiang"></i>
        </span>
        <span class="love-circle">
          <i class="shopIcon shop-aixin"></i>
        </span>
      </div>
    </div>
    <div class="detail-area-bottom">
      <!-- 产品名称、价格区域 -->
      <div class="dab-section product-section">
        <p>{{product.name}}</p>
        <span class="new-price">&yen;{{product.newPrice}}</span>
        <span class="old-price">&yen;{{product.oldPrice}}</span>
      </div>
      <!-- 活动区域 -->
      <div class="dab-section activity-section">
        <p>This products has promotion activities,because of Xmas!</p>
        <div class="icon-section">
          <span><i class="shopIcon shop-icon-flash"></i></span>
          <i>|</i>
          <span><i class="shopIcon shop-liwu"></i></span>
          <i>|</i>
          <span><i class="shopIcon shop-jiantou-wanqu"></i></span>
        </div>
        <i class="shopIcon shop-jiantouyou"></i>
      </div>
      <!-- 逻辑区域 -->
      <div class="dab-section logistics-section">
        <p>Logistics</p>
        <ul>
          <li><i>.</i>Freight charge: <span>&yen;1500</span></li>
          <li><i>.</i>Free Shipping,if order more than<span>&yen;2000</span></li>
          <li><i>.</i>Estemated arriving: <span>&yen;200</span></li>
        </ul>
        <i class="shopIcon shop-jiantouyou"></i>
      </div>
      <!-- 选择区域 -->
      <div class="dab-section select-section">
        <p>
          <span>规格 & 数量</span>
          <i class="absolute-Ycenter">请选择</i>
        </p>
        <i class="shopIcon shop-jiantouyou"></i>
      </div>
    </div>
    <!-- 加入购车或者购买 -->
    <div class="footer-section clearfloat">
      <span class="cart-button float_l">+ 购物车</span>
      <span class="buy-button float_r">购买</span>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
import HeaderComponents from '../../components/header-components/header-components'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      // 虚构product的数据，有这里得从后台请求获得
      product: {
        name: '欧洲经典式手表',
        newPrice: 234,
        oldPrice: 666,
        savingTip: 29,
        imgArray: [
          {
            imgSrc: '../../static/assets/images/intro1.jpg'
          },
          {
            imgSrc: '../../static/assets/images/intro1.jpg'
          },
          {
            imgSrc: '../../static/assets/images/intro1.jpg'
          },
          {
            imgSrc: '../../static/assets/images/intro1.jpg'
          }
        ]
      },
      headerObj: {
        backShow: true,
        titleShow: true,
        askShow: true,
        titleContent: 'Detail'
      }
    }
  },
  created () {
    // let productId = this.$route.params
    // 这里以后通过productId查询商品的信息 ？？？？？？？？？？？？？？？？？？？？？？？？？？？？别忘记了
  }
}
</script>
<style lang="less">
  .detail-area{
    padding-bottom: 4rem;
    .swiper-section{
      min-height: 26rem;
      position: relative;
      border-bottom: 1px solid #d5d5d5;
      .van-swipe__indicators{
        bottom: 1.8rem;
      }
      .saving-tip{
        bottom: 0;
        left: 0;
        width: 4.5rem;
        height: 2.1rem;
        position: absolute;
        padding: 2%;
        background-color: #EF6950;
        border-top-right-radius :1.7rem;
        span{
          color: #ffffff;
          width: 100%;
          height: 100%;
          font-size: 1.1rem;
          display: inline-block
        }
      }
      .circle-tip{
        bottom:-1.3rem;
        right: 0;
        z-index: 1;
        position: absolute;
        span{
          width: 2.6rem;
          height: 2.6rem;
          line-height: 2.6rem;
          text-align: center;
          border: 1px solid #e5e5e5;
          border-radius: 50%;
          display: inline-block;
          background-color: #ffffff;
          margin-right: 1rem;
          i{
            font-size: 2rem;
          }
        }
      }
    }
    .detail-area-bottom{
      padding-bottom: 0.6rem;
      background-color: #F2F2F2;
      .dab-section{
        padding: 3%;
        position: relative;
        margin-bottom: 0.6rem;
        background-color: #FFFFFF;
        >.shopIcon{
          top: 50%;
          right: 1rem;
          font-size: 1.8rem;
          transform: translateY(-50%);
          position: absolute;
        }
      }
      .product-section{
        >p{
          margin-top: 0.5rem;
          font-size: 1.4rem;
        }
        .new-price{
          font-size: 2.2rem;
          height: 3rem;
          line-height: 3rem;
          color: #be382e;
        }
        .old-price{
          height: 2rem;
          line-height: 2rem;
          margin-left: 1rem;
          vertical-align: text-bottom;
          text-decoration: line-through;
          color: #999999;
        }
      }
      .activity-section{
        p{
          padding-right: 2.4rem;
        }
        .icon-section{
          margin-top: 1rem;
          >i{
            margin: 0 1rem;
            font-size: 1.8rem;
            color: #e5e5e5;
          }
          span{
            width: 2.2rem;
            height: 2.2rem;
            line-height: 2.2rem;
            text-align: center;
            display: inline-block;
            border-radius: 50%;
            background-color: #d74c43;
            i{
              font-size: 1.8rem;
              color: #ffffff;
            }
          }
        }
      }
      .logistics-section{
         line-height: 1rem;
        p{
          font-size: 1.6rem;
        }
        ul{
          li{
            color: #8C8C8C;
            i{
              font-size: 4rem;
              margin-right: 0.5rem;
            }
            span{
              color: #feae54;
            }
          }
        }
      }
      .select-section{
        padding: 0 3%;
        margin-bottom: 0;
        p{
          position: relative;
          font-size: 1.6rem;
          padding-right: 2.2rem;
          i{
            right: 2rem;
            font-size: 1.1rem;
            color: #999999;
          }
          span{
            padding: 1rem 0;
            display: inline-block;
          }
        }
      }
    }
    .footer-section{
      bottom: 0;
      left: 0;
      width: 100%;
      position: fixed;
      span{
        text-align: center;
        font-size: 2rem;
        color: #ffffff;
        width: 50%;
        padding: 0.5rem 0;
        display: inline-block;
      }
      .cart-button{
        background-color: #255288;
      }
      .buy-button{
        background-color: #feae54;
      }
    }
  }
</style>
