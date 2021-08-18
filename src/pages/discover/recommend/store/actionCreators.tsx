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

const changeNewAlbumAction = (data: IRecommendStateType) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  data,
})

const changeUpRankingAction = (data: IRecommendStateType) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  data,
})
const changeNewRankingAction = (data: IRecommendStateType) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  data,
})
const changeOriginRankingAction = (data: IRecommendStateType) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  data,
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

export const getNewAlbum = (limit: number) => {
  return (dispatch: any) => {
    getNewAlbums(limit).then((res: any) => {
      dispatch(changeNewAlbumAction(res.weekData.slice(0, 10)))
    })
  }
}

export const getTopListAction = (idx: number) => {
  return (dispatch: any) => {
    getTopList(idx).then((res: any) => {
      switch (idx) {
        case 19723756:
          dispatch(changeUpRankingAction(res.playlist))
          break
        case 3779629:
          dispatch(changeNewRankingAction(res.playlist))
          break
        case 2884035:
          dispatch(changeOriginRankingAction(res.playlist))
          break
        default:
          break
      }
    })
  }
}
