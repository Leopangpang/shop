import axios from 'axios'
import Toast from 'vant'
import router from '../router'

const http = axios.create()
/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({path: '/login', query: { redirect: router.currentRoute.fullPath }})
}
/**
 * 请求失败后的错误统一处理
 */
const errorHandle = function (status, msg) {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
    case 404:
      Toast('请求错误,未找到该资源')
      break
    case 500:
      Toast('服务器端出错')
      break
    case 504:
      Toast('网络超时')
      break
    default :
      console.log(msg)
  }
}
// request 拦截(每次请求前，如果存在token则在请求头携带token)
http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response 拦截
http.interceptors.response.use(
  // 请求成功
  response => {
    // 业务错误相关提示
    if (response.data && response.data.err_code < 0) {
      if (response.data.msg) {
        Toast(response.data.msg)
      } else {
        Toast('业务错误')
      }
      return Promise.reject(response.data)
    }
    return response
  },
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      // 请求已发出，但不是在2**范围内
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      console.log('断网')
    }
  }
)
export default http
