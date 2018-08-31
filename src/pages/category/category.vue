<template>
 <div class="category-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <!-- 搜索区域 -->
    <div class="header-search">
      <input type="text" placeholder="Que buscas"/>
      <i class="shopIcon shop-fangdajing-short search-icon absolute-Ycenter"></i>
    </div>
    <div>
      <cascad-menu-components :menus=menus></cascad-menu-components>
    </div>
    <!-- 底部区域 -->
    <footer-components></footer-components>
 </div>
</template>
<script>
import FooterComponents from '../../components/footer-components/footer-components'
import HeaderComponents from '../../components/header-components/header-components'
import CascadMenuComponents from '../../components/scroll-components/cascad-menu'
export default {
  components: {
    FooterComponents: FooterComponents,
    HeaderComponents: HeaderComponents,
    CascadMenuComponents: CascadMenuComponents
  },
  data () {
    return {
      headerObj: {
        scaleShow: true,
        titleShow: true,
        askShow: true,
        titleContent: 'Category'
      },
      menus: [
        {
          name: '菜单1',
          data: [
            {
              id: 1,
              name: 'FJ-888asdfasdfasdfasdfasdfadf',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              id: 2,
              name: 'FJ-868',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              id: 3,
              name: 'FJ-898',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              id: 4,
              name: 'FJ-188',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              id: 5,
              name: 'FJ-388',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              id: 6,
              name: 'FJ-288',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单2',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单3',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单4',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单5',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单6',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单7',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单9',
          data: [
            {
              name: '1.1',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.2',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.3',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.4',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.5',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: '1.6',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
  .category-area{
    .header-search{
      width: 94%;
      left: unset;
      margin: 0 auto;
      input{
        color: #AFAFAF;
        padding-left: 14%;
      }
      .search-icon{
        color: unset;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
</style>
