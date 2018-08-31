<template>
  <div class="member-area">
    <div class="member-area-top">
      <i class="shopIcon shop-nvxie"></i>
      <i class="shopIcon shop-shouji"></i>
      <i class="shopIcon shop-erji"></i>
      <i class="shopIcon shop-camera"></i>
      <i class="shopIcon shop-kouhong"></i>
      <i class="shopIcon shop-liwu"></i>
      <i class="shopIcon shop-kuzi"></i>
      <div class="header">
        <i class="shopIcon shop-xinxi-sandian"></i>
        <div class="member-logo">
          <span>
            <i class="shopIcon shop-renyuan2-selected"></i>
          </span>
        </div>
        <span>Margaret</span>
      </div>
    </div>
    <div class="member-area-middle">
      <router-link to="/order">
        <p class="all-order">
          <span class="line-center">全部订单</span>
          <i class="shopIcon shop-jiantouyou absolute-Ycenter"></i>
        </p>
      </router-link>
      <div class="mam-icon-section">
          <ul>
            <li>
                <p><span class="shopIcon shop-qianbao1"></span></p>
                <span>Pending to Pay</span>
            </li>
            <li>
                <p><span class="shopIcon shop-wuliu"></span></p>
                <span>Pending to Deliver</span>
            </li>
            <li>
                <p><span class="shopIcon shop-xinxi-more-left"><i class="badge-number">12</i></span></p>
                <span>Pending to Comment</span>
            </li>
            <li>
                <p><span class="shopIcon shop-tuihuo"></span></p>
                <span>Ruturns and Refunds</span>
            </li>
          </ul>
      </div>
    </div>
    <div class="member-area-bottom">
      <ul>
        <li>
          <i class="shopIcon shop-weizhi absolute-Ycenter"></i>
          <span class="line-center">收获地址</span>
        </li>
        <li>
          <i class="shopIcon shop-youhuiquan2 absolute-Ycenter"></i>
          <span class="line-center">My Voucher</span>
        </li>
        <li>
          <i class="shopIcon shop-yinxingka absolute-Ycenter"></i>
          <span class="line-center">Payment Method</span>
        </li>
        <li>
          <i class="shopIcon shop-aixin absolute-Ycenter"></i>
          <span class="line-center">My favourite</span>
        </li>
        <li>
          <i class="shopIcon shop-zuji absolute-Ycenter"></i>
          <span class="line-center">My footprint</span>
        </li>
        <li>
          <i class="shopIcon shop-shouyiren absolute-Ycenter"></i>
          <span class="line-center">My account</span>
        </li>
        <li>
          <i class="shopIcon shop-fuwuerji absolute-Ycenter"></i>
          <span class="line-center">Support Shop2home</span>
        </li>
        <li>
          <i class="shopIcon shop-bangzhuzixun absolute-Ycenter"></i>
          <span class="line-center">Help</span>
        </li>
        <li>
          <i class="shopIcon shop-close absolute-Ycenter"></i>
          <span class="line-center">Log out</span>
        </li>
      </ul>
    </div>
    <p>Version actual: 1.0.1</p>
    <!-- 底部区域 -->
    <footer-components></footer-components>
  </div>
</template>
<script>
import FooterComponents from '../../components/footer-components/footer-components'
export default {
  components: {
    FooterComponents: FooterComponents
  },
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.member-area{
   background-color: #F2F2F2;
   padding-bottom: 4rem;
   >p{
     height: 3rem;
     padding-left: 1rem;
     line-height: 3rem;
   }
  .member-area-top{
    position: relative;
    >i{
      color: #ffffff;
      font-size: 2.6rem;
      position: absolute;
      z-index: 1;
      opacity: 0.2;
    }
    .shop-nvxie{
      bottom: 0;
      left: 0.5rem;
    }
    .shop-shouji{
      top: 1rem;
      left: 6rem;
      transform:rotate(30deg);
      -ms-transform:rotate(30deg); /* Internet Explorer */
      -moz-transform:rotate(30deg); /* Firefox */
      -webkit-transform:rotate(30deg); /* Safari 和 Chrome */
      -o-transform:rotate(30deg); /* Opera */
    }
    .shop-erji{
      top: 1rem;
      left: 14rem;
      transform:rotate(-49deg);
      -ms-transform:rotate(-490deg); /* Internet Explorer */
      -moz-transform:rotate(-49deg); /* Firefox */
      -webkit-transform:rotate(-49deg); /* Safari 和 Chrome */
      -o-transform:rotate(-49deg); /* Opera */
    }
    .shop-liwu{
      right: 2rem;
      top: 3rem;
      transform:rotate(-49deg);
      -ms-transform:rotate(-490deg); /* Internet Explorer */
      -moz-transform:rotate(-49deg); /* Firefox */
      -webkit-transform:rotate(-49deg); /* Safari 和 Chrome */
      -o-transform:rotate(-49deg); /* Opera */
    }
    .shop-kuzi{
      right: 0.6rem;
      bottom: 0.5rem;
      transform:rotate(49deg);
      -ms-transform:rotate(490deg); /* Internet Explorer */
      -moz-transform:rotate(49deg); /* Firefox */
      -webkit-transform:rotate(49deg); /* Safari 和 Chrome */
      -o-transform:rotate(49deg); /* Opera */
    }
    .shop-camera{
      bottom: 2rem;
      left: 10rem;
    }
    .shop-kouhong{
      bottom: 4rem;
      left: 17rem;
    }
    .header{
      width: 100%;
      height: 12rem;
      color: #ffffff;
      position: relative;
      line-height: 12rem;
      background: -webkit-linear-gradient(right, #255288 , #77a1d4);  /* Safari 5.1 - 6.0 77a1d4 */
      background: -o-linear-gradient(right, #255288 , #77a1d4);  /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(right, #255288 , #77a1d4);  /* Firefox 3.6 - 15 */
      background: linear-gradient(to right, #255288 , #77a1d4);  // 标准的语法必须放在最后
      >i{
        top: 1rem;
        right: 0.5rem;
        font-size: 2.2rem;
        line-height: 2.2rem;
        font-weight: bold;
        position: absolute;
      }
      .member-logo{
        margin: 0 1rem;
        display: inline-block;
        span{
          width: 5rem;
          height: 5rem;
          text-align: center;
          line-height: 5rem;
          display: inline-block;
          border-radius: 50%;
          vertical-align: middle;
          background-color: #ffffff;
          i{
            font-size: 4rem;
            color: #e5e5e5;
          }
        }
      }
      >span{
        font-size: 1.6rem;
      }
    }
  }
  .member-area-middle{
    background-color: #ffffff;
    .all-order{
      font-size: 1.4rem;
      border-bottom: 1px solid #e5e5e5;
      position: relative;
      span{
        padding-left: 1rem;
      }
      i{
          font-size: 1.6rem;
          color: #999999;
          right: 1rem;
      }
    }
    .mam-icon-section{
        ul{
            padding: 1rem 0;
            overflow: hidden;
            li{
                width: 25%;
                float: left;
                text-align: center;
                p{
                    span{
                        font-size: 3rem;
                        color: #525050;
                        position: relative;
                    }
                }
                >span{
                    color: #999999;
                    padding: 0 10%;
                    display: inline-block;
                }
            }
        }
    }
  }
  .member-area-bottom{
    background-color: #ffffff;
    margin-top: 0.5rem;
    ul{
      li{
        font-size: 1.3rem;
        position: relative;
        border-bottom: 1px solid #e5e5e5;
        i{
          padding-left: 1rem;
          font-size: 1.8rem;
          padding-right: 0.5rem;
        }
        >span{
          padding-left: 3.5rem;
        }
      }
    }
  }
}
</style>
