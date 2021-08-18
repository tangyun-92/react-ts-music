/*
 * @Author: 唐云 
 * @Date: 2021-08-11 10:52:11 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 14:50:39
 * 发现音乐-推荐
 */
import request from '../../../services/request'

/**
 * 获取banner列表
 */
export function getTopBanners() {
  return request({
    url: '/banner',
  })
}

/**
 * 获取热门推荐列表
 * @param {*} limit 分页
 */
export function getHotRecommend(limit: number) {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}

/**
 * 获取新碟上架列表
 * @param {*} limit 分页
 */
export function getNewAlbums(limit: number) {
  return request({
    url: '/top/album',
    params: {
      limit,
    },
  })
}

/**
 * 获取榜单列表
 * @param {*} idx id
 */
export function getTopList(id: number) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}
