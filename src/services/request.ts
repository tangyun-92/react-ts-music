import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const service = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    // TODO: 判断是否有token等操作
    return config
  },
  (err) => {
    return err
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
        default:
          err.message = '其他错误信息'
      }
    }
    return Promise.reject(err)
  }
)

const request = (requestObj: any) => {
  const { url, method, data, timeout, params } = requestObj
  return service({
    url,
    method: method || 'post',
    data,
    timeout: timeout || 20000,
    params,
  })
}

export default request