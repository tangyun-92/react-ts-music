import * as actionTypes from './constants'

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbums,
  getTopList,
} from '../../../../api/discover/recommend'
import { IRecommendStateType } from './data.d'

const changeTopBannerAction = (data: IRecommendStateType) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  data,
})

// export interface changeRecommendActionType {
//   type: typeof actionTypes.CHANGE_HOT_RECOMMEND
//   data: RecommendStateType
// }
const changeRecommendAction = (data: IRecommendStateType) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  data,
})

const changeNewAlbumAction = (res: any) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
})

const changeUpRankingAction = (res: any) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
})
const changeNewRankingAction = (res: any) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
})
const changeOriginRankingAction = (res: any) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
})

export const getTopBanner = () => {
  return (dispatch: any) => {
    getTopBanners().then((res: any) => {
      dispatch(changeTopBannerAction(res.banners))
    })
  }
}

export const getRecommend = (limit: number) => {
  return (dispatch: any) => {
    getHotRecommend(limit).then((res: any) => {
      dispatch(changeRecommendAction(res.result))
    })
  }
}

export const getNewAlbum = (limit: any) => {
  return (dispatch: any) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (idx: any) => {
  return (dispatch: any) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 3:
          dispatch(changeUpRankingAction(res))
          break
        case 0:
          dispatch(changeNewRankingAction(res))
          break
        case 2:
          dispatch(changeOriginRankingAction(res))
          break
        default:
          break
      }
    })
  }
}
