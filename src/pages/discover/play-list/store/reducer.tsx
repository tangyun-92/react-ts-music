import produce from 'immer'
import { IPlayListStateType } from './data.d'

import * as actionTypes from './constants'

const defaultState: IPlayListStateType = {
  playListClassify: [], // 歌单分类
  currentClassify: '全部', // 选中的分类
  classifySongs: {}, // 分类下的歌单列表
  currentPage: 1, // 当前选中的分页
  pageSize: 35, // 每页显示条数
}

function reducer(state = defaultState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_PLAY_LIST_CLASSIFY:
        return void (draft.playListClassify = action.data)
      case actionTypes.CHANGE_CURRENT_CLASSIFY:
        return void (draft.currentClassify = action.data)
      case actionTypes.CHANGE_CLASSIFY_SONGS:
        return void (draft.classifySongs = action.data)
      case actionTypes.CHANGE_CURRENT_PAGE:
        return void (draft.currentPage = action.data)
      default:
        return state
    }
  })
}

export default reducer
