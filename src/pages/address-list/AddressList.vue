<template>
  <div class="address-list-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      @select="selectAddress"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>
<script>
import { AddressList } from 'vant'
import HeaderComponents from '../../components/header-components/header-components'
export default {
  components: {
    [AddressList.name]: AddressList,
    HeaderComponents: HeaderComponents
  },
  data () {
    return {
      headerObj: {
        backShow: true,
        titleShow: true,
        titleContent: '收货地址'
      },
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13682615985',
          province: '广东省',
          city: '深圳市',
          county: '福田区',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          addressDetail: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          areaCode: '440304',
          postalCode: '518000',
          isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '13122222222',
          province: '广东省',
          city: '深圳市',
          county: '福田区',
          address: '北京市朝阳区朝阳路 138 号东方通信大厦 7 楼 501 室',
          addressDetail: '北京市朝阳区朝阳路 138 号东方通信大厦 7 楼 501 室',
          areaCode: '440305',
          postalCode: '518000',
          isDefault: false
        },
        {
          id: '3',
          name: '胡景涛',
          tel: '18566667777',
          province: '广东省',
          city: '深圳市',
          county: '福田区',
          address: '黑龙江阿尔滨朝阳路 138 号东方通信大厦 7 楼 501 室',
          addressDetail: '黑龙江阿尔滨朝阳路周口店',
          areaCode: '440306',
          postalCode: '518000',
          isDefault: true
        }
      ]
    }
  },
  created () {
    // 将选中的地址的id赋值给chosenAddressId，页面自动显示，如果sessionStroage没有则默认显示第一个
    this.chosenAddressId = JSON.parse(sessionStorage.getItem('deliveryAddress')) ? JSON.parse(sessionStorage.getItem('deliveryAddress')).id : this.list[0].id
  },
  methods: {
    // 将选中的地址储存在sessionStorage中，并且跳转到上一页
    selectAddress: function (item) {
      sessionStorage.setItem('deliveryAddress', JSON.stringify(item))
      this.$router.push({path: 'placeOrder'})
    },
    // 新增地址
    onAdd: function () {
      this.$router.push({path: '/address'})
    },
    // 编辑地址
    onEdit: function (item) {
      this.$router.push({name: 'Address', params: item})
    }
  }
}
</script>
<style lang="less">
  .address-list-area{
    padding-bottom: 4rem;
  }
  .van-address-list .van-icon-checked{
    color: #feae54;
  }
  .van-button--danger{
    border: unset;
    background-color:#255288;
  }
  .van-address-list .van-cell{
    padding: 3%;
  }
  .van-address-list .van-cell__value{
    padding-right: 3.4rem;
  }
  .van-address-list .van-radio__input{
    font-size: 1.6rem;
    left: 1%;
  }
  .van-address-list .van-radio__label{
    margin-left: 2.7rem;
    line-height: 2rem;
  }
  .van-address-list__edit{
    font-size: 1.6rem;
  }
  .van-address-list__name{
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    line-height: 2rem;
  }
  .van-address-list__address{
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  .van-button--large{
    height: 4rem;
    line-height: 4rem;
    span{
      font-size: 1.5rem;
    }
  }
</style>
