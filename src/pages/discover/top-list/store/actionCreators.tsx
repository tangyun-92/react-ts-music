import * as actionTypes from './constants'
import { ICloudMusicTopList, ITopDetail } from '../store/data.d'

import { getAllList, getTopDetail } from 'src/api/discover/top-list'

const changeCloudMusicTopListAction = (data: ICloudMusicTopList) => ({
  type: actionTypes.CHANGE_CLOUD_MUSIC_TOP_LIST,
  data,
})

const changeTopDetailAction = (data: ITopDetail) => ({
  type: actionTypes.CHANGE_TOP_DETAIL,
  data,
})

export const changSongListAction = (data: any) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  data,
})

/**
 * 获取云音乐榜单列表
 */
export const getCloudMusicTopListAction = () => {
  return (dispatch: any) => {
    getAllList().then((res: any) => {
      dispatch(changeCloudMusicTopListAction(res.list))
    })
  }
}

/**
 * 获取榜单详情
 */
export const getTopDetailAction = (id: number) => {
  return (dispatch: any) => {
    getTopDetail(id).then((res: any) => {
      dispatch(changeTopDetailAction(res.playlist))
      dispatch(changSongListAction(res.playlist.tracks))
    })
  }
}
