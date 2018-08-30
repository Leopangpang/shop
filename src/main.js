// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import './styles/common.css'
import { Badge, BadgeGroup, Toast } from 'vant'
Vue.config.productionTip = false
Vue.use(Badge)
Vue.use(BadgeGroup)
Vue.use(Toast)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
