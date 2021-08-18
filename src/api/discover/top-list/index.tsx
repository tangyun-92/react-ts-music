/*
 * @Author: 唐云 
 * @Date: 2021-02-26 22:59:36 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 16:53:29
 * 推荐-排行榜
 */
import request from 'src/services/request'

/**
 * 获取所有榜单
 */
export function getAllList() {
  return request({
    url: '/toplist'
  })
}

/**
 * 获取榜单详情
 * @param {*} limit 
 */
export function getTopDetail(id: number) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}