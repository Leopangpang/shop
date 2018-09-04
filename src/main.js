// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/icon/iconfont.css'
import './styles/common.css'
import directive from './directive/directive'
import filter from './filter/filter'
import { Badge, BadgeGroup, Toast, Dialog } from 'vant'
import axios from './axios/http.js'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Badge)
Vue.use(BadgeGroup)
Vue.use(Toast)
Vue.use(Dialog)
Vue.use(directive)
Vue.use(filter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
