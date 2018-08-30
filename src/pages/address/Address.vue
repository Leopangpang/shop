<template>
  <div class="address-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <van-address-edit
        :area-list="areaList"
        :address-info="addressInfo"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { AddressEdit, Area } from 'vant'
import AreaList from '../../../static/json/areaList'
import HeaderComponents from '../../components/header-components/header-components'
export default {
  components: {
    [AddressEdit.name]: AddressEdit,
    [Area.name]: Area,
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      headerObj: {
        backShow: true,
        titleShow: true,
        titleContent: '收货地址'
      },
      addressInfo: {},
      areaList: AreaList,
      searchResult: []
    }
  },
  created () {
    this.addressInfo = this.$route.params ? this.$route.params : this.addressInfo
  },
  methods: {
    // 保存并使用（到时候保存后，存入后台同时也要存入placeOrder中sessionStorage中的deliveryAddress）
    onSave () {
      this.$toast('save')
      this.$router.push({path: '/placeOrder'})
    },
    onDelete () {
      this.$toast('delete')
      this.$router.push({path: '/addressList'})
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    }
  }
}
</script>
<style lang="less">
  .address-area{
    .van-cell{
      line-height: 2.4rem;
      font-size: 1.3rem;
    }
    .van-cell__title{
      max-width: 11rem;
    }
    .van-address-edit__buttons{
      padding: 2rem 1rem;
    }
    .van-button--normal{
      font-size: 1.3rem;
    }
    .van-button{
      height: 3rem;
      line-height: 3rem;
    }
    .van-switch--on{
      background-color: #255288;
    }
    .van-button--primary{
      border: 1px solid #255288;
      background-color: #255288;
    }
    .van-button--default{
      color: #ffffff;
      background-color: #feae54;
    }
  }
</style>
