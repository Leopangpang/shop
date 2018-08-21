<template>
 <div class="category-area">
    <!-- 头部区域 -->
    <header-components :title-show=true :title-content="'Category'" :search-show=false :wallet-show=false ></header-components>
    <!-- 搜索区域 -->
    <div class="header-search">
      <input type="text" placeholder="Que buscas"/>
      <i class="shopIcon shop-fangdajing-short search-icon"></i>
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
      menus: [
        {
          name: '菜单1',
          data: [
            {
              name: 'FJ-888',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: 'FJ-868',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: 'FJ-898',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: 'FJ-188',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: 'FJ-388',
              imgSrc: '../../static/assets/images/product3.png'
            },
            {
              name: 'FJ-288',
              imgSrc: '../../static/assets/images/product3.png'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单2',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单3',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单4',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单5',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单6',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单7',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单9',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
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
      margin: 0 auto;
      input{
        height: 3rem;
        color: #AFAFAF;
        padding-left: 14%;
      }
      .search-icon{
        top: 30%;
        color: unset;
        font-size: 1.4rem;
        font-weight: bold;
      }
    }
  }
</style>
