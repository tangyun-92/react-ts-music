import produce from 'immer'
import { IPlayerStateType } from './data.d'

import * as actionTypes from './constants'

const defaultState: IPlayerStateType = {
  playList: [], // 播放列表
  currentSong: {}, // 当前播放的歌曲
  currentSongIndex: 0, // 当前播放歌曲的索引
  sequence: 0, // 0循环播放 1随机播放 2单曲循环
  lyricList: [], // 歌词
  currentLyricIndex: 0, // 当前播放歌词的索引
  isPlayList: false, // 是否显示播放列表
}

function reducer(state = defaultState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_CURRENT_SONG:
        return void(draft.currentSong = action.data)
      case actionTypes.CHANGE_PLAY_LIST:
        return void (draft.playList = action.data)
      case actionTypes.CHANGE_CURRENT_SONG_INDEX:
        return void (draft.currentSongIndex = action.data)
      case actionTypes.CHANGE_SEQUENCE:
        return void (draft.sequence = action.data)
      case actionTypes.CHANGE_LYRIC_LIST:
        return void (draft.lyricList = action.data)
      case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
        return void (draft.currentLyricIndex = action.data)
      case actionTypes.CHANGE_IS_PLAY_LIST:
        return void (draft.isPlayList = action.data)
      default:
        return state
    }
  })
}

export default reducer
