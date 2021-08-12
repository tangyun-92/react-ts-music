import * as actionTypes from './constants'

import {
  getHotAnchors,
  getAllRadioClassify,
  getHotRadioRanks,
  getProgramRanks,
  getTypeRecommends
} from '../../../../api/discover/dj-radio'
import { IDjRadioStateType } from './data.d'

const changeTopAnchorsAction = (data: IDjRadioStateType) => ({
  type: actionTypes.CHANGE_HOT_ANCHOR,
  data,
})

const changeAllRadioClassifyAction = (data: IDjRadioStateType) => ({
  type: actionTypes.CHANGE_ALL_RADIO_CLASSIFY,
  data,
})

const changeHotRadioRanksAction = (data: IDjRadioStateType) => ({
  type: actionTypes.CHANGE_HOT_RADIO_RANKS,
  data,
})

const changeProgramRanksAction = (data: IDjRadioStateType) => ({
  type: actionTypes.CHANGE_PROGRAM_RANKS,
  data,
})

const changeTypeRecommendStoryAction = (res: any) => ({
  type: actionTypes.CHANGE_TYPE_RECOMMEND_STORY,
  typeRecommendStory: res.djRadios,
})

const changeTypeRecommendSleepingAction = (res: any) => ({
  type: actionTypes.CHANGE_TYPE_RECOMMEND_SLEEPING,
  typeRecommendSleeping: res.djRadios,
})

const changeTypeRecommendTalkingAction = (res: any) => ({
  type: actionTypes.CHANGE_TYPE_RECOMMEND_TALKING,
  typeRecommendTalking: res.djRadios,
})

const changeTypeRecommendEmotionalAction = (res: any) => ({
  type: actionTypes.CHANGE_TYPE_RECOMMEND_EMOTIONAL,
  typeRecommendEmotional: res.djRadios,
})

const changeTypeRecommendCoverAction = (res: any) => ({
  type: actionTypes.CHANGE_TYPE_RECOMMEND_COVER,
  typeRecommendCover: res.djRadios,
})

const changeTypeRecommendOtherAction = (res: any) => ({
  type: actionTypes.CHANGE_TYPE_RECOMMEND_OTHER,
  typeRecommendOther: res.djRadios,
})

/**
 * 热门主播列表
 * @param {*} limit
 */
export const getTopAnchorsAction = (limit: number) => {
  return (dispatch: any) => {
    getHotAnchors(limit).then((res: any) => {
      dispatch(changeTopAnchorsAction(res.data.list))
    })
  }
}

/**
 * 所有分类
 */
export const getAllRadioClassifyAction = () => {
  return (dispatch: any) => {
    getAllRadioClassify().then((res: any) => {
      const array = res.categories
      array.push(
        { name: '常见问题', id: 777685787 },
        { name: '我要做主播', id: 898675765 }
      )
      dispatch(changeAllRadioClassifyAction(array))
    })
  }
}

/**
 * 热门电台榜
 * @param {*} limit
 */
export const getHotRadioRanksAction = (limit: number) => {
  return (dispatch: any) => {
    getHotRadioRanks(limit).then((res: any) => {
      dispatch(changeHotRadioRanksAction(res.toplist))
    })
  }
}

/**
 * 节目排行榜
 * @param {*} limit 
 */
export const getProgramRanksAction = (limit: number) => {
  return (dispatch: any) => {
    getProgramRanks(limit).then((res: any) => {
      dispatch(changeProgramRanksAction(res.toplist))
    })
  }
}

/**
 * 分类推荐
 * @param {*} typeId 类别id 
 */
export const getTypeRecommendsAction = (typeId: number) => {
  return (dispatch: any) => {
    getTypeRecommends(typeId).then((res: any) => {
      switch (typeId) {
        case 2:
          dispatch(changeTypeRecommendStoryAction(res))
          break
        case 6:
          dispatch(changeTypeRecommendSleepingAction(res))
          break
        case 5:
          dispatch(changeTypeRecommendTalkingAction(res))
          break
        case 3:
          dispatch(changeTypeRecommendEmotionalAction(res))
          break
        case 2001:
          dispatch(changeTypeRecommendCoverAction(res))
          break
        case 11:
          dispatch(changeTypeRecommendOtherAction(res))
          break
        default:
          break
      }
    })
  }
}
