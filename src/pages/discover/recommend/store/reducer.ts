import produce from 'immer'
import { IRecommendStateType } from './data.d'

import * as actionTypes from './constants'

const defaultState: IRecommendStateType = {
  topBanners: [], // 推荐-banner
  hotRecommendList: [], // 推荐-热门推荐列表
  newAlbums: [], // 推荐-新碟上架列表
  upRanking: {}, // 推荐-榜单-飙升榜
  newRanking: {}, // 推荐-榜单-新歌榜
  originRanking: {}, // 推荐-榜单-原创榜
}

function reducer(state = defaultState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_TOP_BANNERS:
        return void(draft.topBanners = action.data)
      case actionTypes.CHANGE_HOT_RECOMMEND:
        return void(draft.hotRecommendList = action.data)
      case actionTypes.CHANGE_NEW_ALBUMS:
        return void (draft.newAlbums = action.data)
      case actionTypes.CHANGE_UP_RANKING:
        return void (draft.upRanking = action.data)
      case actionTypes.CHANGE_NEW_RANKING:
        return void (draft.newRanking = action.data)
      case actionTypes.CHANGE_ORIGIN_RANKING:
        return void (draft.originRanking = action.data)
      default:
        return state
    }
  })
}

export default reducer
