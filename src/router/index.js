import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const vueRouter = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: (resolve) => require(['../pages/index/Index.vue'], resolve)
    },
    {
      path: '/category',
      name: 'Category',
      component: (resolve) => require(['../pages/category/Category.vue'], resolve)
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: (resolve) => require(['../pages/detail/Detail.vue'], resolve)
    },
    {
      path: '/member',
      name: 'Member',
      component: (resolve) => require(['../pages/member/Member.vue'], resolve),
      meta: { requiresAuth: false }
    },
    {
      path: '/car',
      name: 'Car',
      component: (resolve) => require(['../pages/car/Car.vue'], resolve)
    },
    {
      path: '/placeOrder',
      name: 'PlaceOrder',
      component: (resolve) => require(['../pages/place-order/PlaceOrder.vue'], resolve)
    },
    {
      path: '/addressList',
      name: 'AddressList',
      component: (resolve) => require(['../pages/address-list/AddressList.vue'], resolve),
      meta: { requiresAuth: false }
    },
    {
      path: '/address',
      name: 'Address',
      component: (resolve) => require(['../pages/address/Address.vue'], resolve),
      meta: { requiresAuth: false }
    },
    {
      path: '/order',
      name: 'Order',
      component: (resolve) => require(['../pages/order/Order.vue'], resolve),
      meta: { requiresAuth: false }
    }
  ]
})

vueRouter.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!localStorage.getItem('token')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default vueRouter
