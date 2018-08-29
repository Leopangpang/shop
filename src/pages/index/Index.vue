<template>
    <div class="index-area">
      <!-- 头部区域 -->
      <header-components :header-obj="headerObj"></header-components>
      <!-- 轮播区域 -->
      <div class="swiper-section">
        <van-swipe :autoplay="3000">
          <van-swipe-item>
            <img src="../../assets/images/lunbo1.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/images/lunbo2.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/images/lunbo3.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/images/lunbo4.jpg"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 介绍区域 -->
      <div class="index-section introduce-section">
         <div class="is-top">
           <ul class="clearfloat">
             <li>
               <i class="shopIcon shop-newtag index-color-yellow"></i>
               <span>New</span>
             </li>
             <li>
               <i class="shopIcon shop-huangguan index-color-grey"></i>
               <span>Brand</span>
             </li>
             <li>
               <i class="shopIcon shop-sale  index-color-qing"></i>
               <span>Sale</span>
             </li>
             <li>
               <i class="shopIcon shop-zhuanshi index-color-lv"></i>
               <span>Boutique</span>
             </li>
           </ul>
         </div>
         <div class="is-bottom">
           <div class="ib-item">
             <div class="ibi-img ibi-left">
               <img src="../../assets/images/lunbo1.jpg"/>
             </div>
             <div class="ibi-img">
               <img src="../../assets/images/lunbo2.jpg"/>
             </div>
           </div>
            <div class="ib-item">
             <div class="ibi-img ibi-left">
               <img src="../../assets/images/lunbo3.jpg"/>
             </div>
             <div class="ibi-img">
               <img src="../../assets/images/lunbo4.jpg"/>
             </div>
           </div>
         </div>
         <p>
           <span>More</span>
           <i class="shopIcon shop-shuangjiantou-right-bold"></i>
         </p>
      </div>
      <!-- 推荐区域 -->
      <div class="index-section recommend-section">
        <span class="title">
          Recommend
        </span>
        <div class="content clearfloat">
          <div class="product-item" v-for="(item,i) in productList" :key = i>
            <img :src="item.imgSrc"/>
            <div class="product-detail">
              <p class="product-name">{{item.name}}</p>
              <span class="product-account">account</span>
              <p class="product-price">
                <span class="new-price"><i>&yen;</i>{{item.newPrice}}</span>
                <span class="old-price"><i>&yen;</i>{{item.oldPrice}}</span>
              </p>
              <i class="shopIcon shop-gouwuche"></i>
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
import FooterComponents from '../../components/footer-components/footer-components'
import HeaderComponents from '../../components/header-components/header-components'
export default{
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    FooterComponents: FooterComponents,
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      headerObj: {
        scaleShow: true,
        searchShow: true,
        walletShow: true,
        askShow: true,
        titleContent: ''
      },
      productList: [
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '男式手表',
          newPrice: 55,
          oldPrice: 99
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '女式手表',
          newPrice: 122,
          oldPrice: 993
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '男式手表',
          newPrice: 55,
          oldPrice: 99
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '女式手表',
          newPrice: 122,
          oldPrice: 993
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '男式手表',
          newPrice: 55,
          oldPrice: 99
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '女式手表',
          newPrice: 122,
          oldPrice: 993
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '男式手表',
          newPrice: 55,
          oldPrice: 99
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '女式手表',
          newPrice: 122,
          oldPrice: 993
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '男式手表',
          newPrice: 55,
          oldPrice: 99
        },
        {
          imgSrc: '../../../static/assets/images/product3.png',
          name: '女式手表',
          newPrice: 122,
          oldPrice: 993
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.index-area{
  padding-bottom: 4rem;
  .index-color-yellow{
    color: #D6B17B;
  }
  .index-color-grey{
    color: #BFBFBF;
  }
  .index-color-qing{
    color: #ADCDD7;
  }
  .index-color-lv{
    color: #ACCAAA;
  }
  .index-section{
    padding: 0 3%;
    position: relative;
    .title{
      font-size: 1.4rem;
      display: inline-block;
      padding-bottom: 0.5rem;
    }
    .content{
      width:100%;
    }
    // more >>区域
    >p{
      bottom: -0.1rem;
      right: 3%;
      display: inline-block;
      position: absolute;
      color: #9E9E9E;
      span{
        display: inline-block;
      }
      i{
        font-size: 1.2rem;
        vertical-align: middle;
      }
    }
  }
  // 介绍区域
  .introduce-section{
    padding-top: 0.5rem;
    .is-top{
      overflow: hidden;
      padding-top:0.5rem;
      ul{
        li{
          float:left;
          width:25%;
          text-align: center;
          i{
            font-size: 3.6rem;
          }
          span{
            display: block;
            font-size: 1.3rem;
            padding-top:0.2rem;
          }
        }
      }
    }
    .is-bottom{
      padding:1rem 0;
      .ib-item{
        font-size: 0;
        margin-bottom: 0.5rem;
        .ibi-img{
          width:49%;
          display: inline-block;
          img{
            width:100%;
            border-radius: 0.5rem;
            box-shadow: -0.1rem 0.1rem 0.2rem #999999;
            -moz-box-shadow: -0.1rem 0.1rem 0.2rem #999999;
            -webkit-box-shadow: -0.1rem 0.1rem 0.2rem #999999;
          }
        }
        .ibi-left{
          margin-right:2%;
        }
      }
    }
  }
  // 推荐区域
  .recommend-section{
    .content{
      .product-item{
        width: 49%;
        float: left;
        box-sizing: border-box;
        border-radius: 0.5rem;
        margin-bottom: 3%;
        border: 1px solid #e5e5e5;
        img{
          width: 60%;
          margin: 0 auto;
          display: block;
        }
        .product-detail{
          position: relative;
          margin: 0 3.5% 5% 3.5%;
          >i{
              right: 0;
              bottom: 0;
              font-size:1.6rem;
              position: absolute;
            }
          .product-name{
            font-size: 1.2rem;
            line-height: 1.3rem;
            padding-top: 0.2rem;
          }
          .product-account{
            font-size: 1.1rem;
            line-height: 1.1rem;
            display: inherit;
            color: #d5d5d5;
          }
          .product-price{
            margin-top: 0.9rem;
            i{
              margin-right: 0.15rem;
            }
            .new-price{
              font-size: 1.4rem;
              font-weight: bold;
              margin-right: 0.1rem;
            }
            .old-price{
              font-size: 1.1rem;
              line-height: 1.1rem;
              color: #999999;
              text-decoration: line-through;
            }
          }
        }
      }
      .product-item:nth-child(odd){
        margin-right: 2%;
      }
    }
  }
}
</style>
