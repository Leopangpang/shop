<template>
  <div class="address-list-area">
    <!-- 头部区域 -->
    <header-components :header-obj="headerObj"></header-components>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
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
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
