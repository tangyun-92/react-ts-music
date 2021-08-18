import produce from 'immer'
import { ITopListStateType } from './data.d'

import * as actionTypes from './constants'

const defaultState: ITopListStateType = {
  cloudMusicTopList: [], // 云音乐榜单列表
  topDetail: {}, // 榜单详情
  songList: [], // 歌曲列表
}

function reducer(state = defaultState, action: any) {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.CHANGE_CLOUD_MUSIC_TOP_LIST:
        return void(draft.cloudMusicTopList = action.data)
      case actionTypes.CHANGE_TOP_DETAIL:
        return void (draft.topDetail = action.data)
      case actionTypes.CHANGE_SONG_LIST:
        return void (draft.songList = action.data)
      default:
        return state
    }
  })
}

export default reducer