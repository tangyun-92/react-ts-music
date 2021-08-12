/*
 * @Author: 唐云 
 * @Date: 2021-02-24 22:17:57 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-12 16:12:08
 * 发现音乐-歌手
 */
import request from '../../../services/request'

/**
 * 获取热门歌手列表
 * @param {*} limit 
 */
export function getHotArtists(limit: number) {
  return request({
    url: '/top/artists',
    params: {
      limit
    }
  })
}