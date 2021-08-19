/*
 * @Author: 唐云
 * @Date: 2021-02-28 22:43:31
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 09:55:22
 * 发现-歌单
 */
import request from 'src/services/request'

/**
 * 获取歌单分类
 */
export function getPlayListClassify() {
  return request({
    url: '/playlist/catlist',
  })
}

/**
 * 获取分类下的歌单列表
 */
export interface IGetClassifySongs {
  cat?: string
  limit?: number
  offset?: number
  order?: string
}
export function getClassifySongs({ cat, limit, offset, order }: IGetClassifySongs) {
  return request({
    url: '/top/playlist',
    params: {
      cat,
      limit,
      offset,
      order,
    },
  })
}
