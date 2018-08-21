<template>
  <div class="cascad-menu" ref="cascadMenu">
    <scroll
      class="left-menu"
      :data="menus"
      ref="leftMenu">
      <div class="left-menu-container">
        <ul>
          <li
            class="left-item"
            ref="leftItem"
            :class="{'current': currentIndex === index}"
            @click="selectLeft(index, $event)"
            v-for="(menu, index) in menus"
            :key="index">
            <p class="text">{{menu.name}}</p>
          </li>
        </ul>
      </div>
    </scroll>
    <scroll
      class="right-menu"
      :data="menus"
      ref="rightMenu"
      @scroll="scrollHeight"
      :listenScroll="true"
      :probeType="3">
      <div class="right-menu-container">
        <ul>
          <li class="right-item" ref="rightItem" v-for="(menu, i) in menus" :key="i">
            <div class="title">
              <span>{{menu.name}}</span>
            </div>
            <ul class="product-section">
              <li v-for="(item, j) in menu.data" :key="j">
                <div class="product-area">
                  <div class="product-img">
                    <img :src="item.imgSrc" />
                  </div>
                  <div class="product-name">{{item.name}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import Scroll from './scroll'
export default {
  data () {
    return {
      rightTops: [],
      scrollY: 0,
      leftScrollY: 0
    }
  },
  props: {
    menus: {
      required: true,
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    currentIndex () {
      const { scrollY, rightTops } = this
      let index = rightTops.findIndex((height, index) => {
        return scrollY >= rightTops[index] && scrollY < rightTops[index + 1]
      })
      if (scrollY > rightTops[index] + 50) {
        index++
      }
      return index
    }
  },
  created () {
    this.$nextTick(() => {
      this._calculateHeight()
    })
  },
  methods: {
    selectLeft (index, event) {
      console.log(index)
      if (!event._constructed) {
        return
      }
      let rightItem = this.$refs.rightItem
      let el = rightItem[index]
      this.$refs.rightMenu.scrollToElement(el, 300)
    },
    scrollHeight (pos) {
      console.log(pos)
      this.scrollY = Math.abs(Math.round(pos.y))
    },
    _calculateHeight () {
      let lis = this.$refs.rightItem
      console.log(lis)
      let height = 0
      this.rightTops.push(height)
      Array.prototype.slice.call(lis).forEach(li => {
        height += li.clientHeight
        this.rightTops.push(height)
      })
      console.log(this.rightTops)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="less" scoped>
  .cascad-menu{
    display: flex;
    position: absolute;
    top: 7.8rem;
    bottom: 5rem;
    width: 100%;
    border: 1px solid red;
    overflow: hidden;
    box-sizing: border-box;
    .left-menu{
      flex: 0 0 20%;
      width: 20%;
      color: #AAA8AA;
      background: #f3f5f7;
      .left-item{
        height: 4rem;
        width: 100%;
        &.current{
          font-size: 1.3rem;
          font-weight: bold;
          color: #434343;
          background: #fff;
        }
        .text{
          padding: 0 7%;
          line-height: 4rem;
        }
      }
    }
    .right-menu{
      flex: 1;
      text-align: center;
      .right-item{
        height: 100%;
        border: 1px solid #ccc;
        .title{
          border-bottom: 1px solid #ccc;
          height: 3rem;
          line-height: 3rem;
          position: relative;
          span{
            display: block;
          }
          span:after,span:before{
            content: '';
            position: absolute;
            top: 52%;
            background: #e5e5e5;
            width: 9%;
            height: 1px;
          }
          span:before{
            left: 30%;
          }
          span:after{
            right: 30%;
          }
        }
        .product-section{
          overflow: hidden;
          width: 100%;
          li{
            float: left;
            width: 33%;
            .product-area{
              width: 100%;
              .product-img{
                img{
                  width:100%;
                }
              }
              .product-name{
                line-height: 2rem;
                height: 3rem;
              }
            }
          }
        }
      }
    }
  }
</style>
