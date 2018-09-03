export default {
    //获取验证码
    getCode: () => `/api/pay/getVerifyImage`,
    //发起支付请求
    toPay: () => `/api/pay/access`,
    //向后台传递浏览器参数
    passBrowserInfo: () =>`/api/pay/report`
  }