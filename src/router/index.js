import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Category from '@/pages/category/Category'
import Detail from '@/pages/detail/Detail'
import Member from '@/pages/member/Member'
import Car from '@/pages/car/Car'
import PlaceOrder from '@/pages/place-order/PlaceOrder'
import AddressList from '@/pages/address-list/AddressList'
import Address from '@/pages/address/Address'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/placeOrder',
      name: 'PlaceOrder',
      component: PlaceOrder
    },
    {
      path: '/addressList',
      name: 'AddressList',
      component: AddressList
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
