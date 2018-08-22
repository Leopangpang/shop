import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Category from '@/pages/category/Category'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
