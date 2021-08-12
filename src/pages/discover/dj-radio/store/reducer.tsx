import produce from 'immer'
import * as actionTypes from './constants'

import { IDjRadioStateType } from './data.d'

const defaultState: IDjRadioStateType = {
  hotAnchors: [], // 热门主播列表
  // allRadioClassify: [], // 所有分类
  // hotRadioRanks: [], // 热门电台榜
  // programRanks: [], // 节目排行榜
  // typeRecommendStory: [], // 分类推荐-音乐故事
  // typeRecommendSleeping: [], // 分类推荐-助眠解压
  // typeRecommendTalking: [], // 分类推荐-谈天说地
  // typeRecommendEmotional: [], // 分类推荐-情感调频
  // typeRecommendCover: [], // 分类推荐-创作翻唱
  // typeRecommendOther: [], // 分类推荐-其他
}

function reducer(state = defaultState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_HOT_ANCHOR:
        return void (draft.hotAnchors = action.data)
      // case actionTypes.CHANGE_HOT_ANCHOR:
      //   return state.set('hotAnchors', action.hotAnchors)
      // case actionTypes.CHANGE_ALL_RADIO_CLASSIFY:
      //   return state.set('allRadioClassify', action.allRadioClassify)
      // case actionTypes.CHANGE_HOT_RADIO_RANKS:
      //   return state.set('hotRadioRanks', action.hotRadioRanks)
      // case actionTypes.CHANGE_PROGRAM_RANKS:
      //   return state.set('programRanks', action.programRanks)
      // case actionTypes.CHANGE_TYPE_RECOMMEND_STORY:
      //   return state.set('typeRecommendStory', action.typeRecommendStory)
      // case actionTypes.CHANGE_TYPE_RECOMMEND_SLEEPING:
      //   return state.set('typeRecommendSleeping', action.typeRecommendSleeping)
      // case actionTypes.CHANGE_TYPE_RECOMMEND_TALKING:
      //   return state.set('typeRecommendTalking', action.typeRecommendTalking)
      // case actionTypes.CHANGE_TYPE_RECOMMEND_EMOTIONAL:
      //   return state.set('typeRecommendEmotional', action.typeRecommendEmotional)
      // case actionTypes.CHANGE_TYPE_RECOMMEND_COVER:
      //   return state.set('typeRecommendCover', action.typeRecommendCover)
      // case actionTypes.CHANGE_TYPE_RECOMMEND_OTHER:
      //   return state.set('typeRecommendOther', action.typeRecommendOther)
      default:
        return state
    }
  })
}

export default reducer
