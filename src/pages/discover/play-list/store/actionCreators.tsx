import * as actionTypes from './constants'

import { getPlayListClassify, getClassifySongs, IGetClassifySongs } from 'src/api/discover/play-list'
import { IClassifySong, IPlayListClassify } from './data'

const changePlayListClassifyAction = (data: IPlayListClassify) => ({
  type: actionTypes.CHANGE_PLAY_LIST_CLASSIFY,
  data,
})

const changeClassifySongs = (data: IClassifySong) => ({
  type: actionTypes.CHANGE_CLASSIFY_SONGS,
  data,
})

export const changeCurrentClassify = (data: string) => ({
  type: actionTypes.CHANGE_CURRENT_CLASSIFY,
  data,
})

export const changeCurrentPageAction = (data: number) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  data,
})

/**
 * 获取歌单分类
 */
export const getPlayListClassifyAction = () => {
  return (dispatch: any) => {
    getPlayListClassify().then((res: any) => {
      const category = res.categories
      // 创建类别数据结构
      const categoryData: any = Object.entries(category).map(([key, value]) => {
        return {
          name: value,
          subs: [],
        }
      })
      // 将类别数据添加到数组对应的对象中
      let item: any
      for (item of res.sub) {
        categoryData[item.category].subs.push(item)
      }
      dispatch(changePlayListClassifyAction(categoryData))
    })
  }
}

/**
 * 获取分类下的歌单列表
 */
export const getClassifySongsAction = ({
  limit = 35,
  offset = 1,
  order
}: IGetClassifySongs) => {
  return (dispatch: any, getState: any) => {
    const cat = getState().playList.currentClassify
    getClassifySongs({
      cat,
      limit,
      offset,
      order
    }).then((res: any) => {
      dispatch(changeClassifySongs(res))
    })
  }
}
