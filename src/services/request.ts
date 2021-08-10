import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

export default function request(option: any) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIMEOUT
    })

    // 请求拦截
    instance.interceptors.request.use(config => {
      // TODO: 判断是否有token等操作
      return config
    }, err => {
      return err
    })

    // 响应拦截
    instance.interceptors.response.use(response => {
      return response.data
    }, err => {
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
      return err
    })

    instance(option).then(res => {
      resolve(res)
    }).catch(err => reject(err))
  })

}