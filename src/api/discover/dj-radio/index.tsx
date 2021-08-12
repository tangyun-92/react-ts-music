/*
 * @Author: 唐云 
 * @Date: 2021-02-26 21:40:58 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-12 15:55:12
 * 发现音乐-主播电台
 */
import request from '../../../services/request'

/**
 * 获取热门主播列表
 * @param {*} limit 
 */
export function getHotAnchors(limit: number) {
  return request({
    url: '/dj/toplist/popular',
    params: {
      limit,
    },
  })
}

/**
 * 获取所有电台分类
 */
export function getAllRadioClassify() {
  return request({
    url: '/dj/catelist'
  })
}

/**
 * 获取热门电台榜
 */
export function getHotRadioRanks(limit: number) {
  return request({
    url: '/dj/toplist',
    params: {
      limit,
      type: 'hot',
    },
  })
}

/**
 * 获取节目排行榜
 */
export function getProgramRanks(limit: number) {
  return request({
    url: '/dj/program/toplist',
    params: {
      limit,
    },
  })
}

/**
 * 电台-分类推荐
 */
export function getTypeRecommends(type: number) {
  return request({
    url: '/dj/recommend/type',
    params: {
      type,
    },
  })
}