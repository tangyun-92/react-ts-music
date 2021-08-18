import { getLyric } from '../../../api/player'
import * as actionsTypes from './constants'
import { parseLyric } from '../../../utils/parse-lyric'
import {
  ICurrentSongType,
  IPlayListType,
  ILyricListType,
} from '../store/data.d'

export const changeSongDetailAction = (data: ICurrentSongType) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG,
  data,
})

export const changePlayListAction = (data: IPlayListType[]) => ({
  type: actionsTypes.CHANGE_PLAY_LIST,
  data,
})

export const changeCurrentSongIndexAction = (data: number) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG_INDEX,
  data,
})

export const changeLyricListAction = (data: ILyricListType[]) => ({
  type: actionsTypes.CHANGE_LYRIC_LIST,
  data,
})

export const changeCurrentLyricIndexAction = (data: number) => ({
  type: actionsTypes.CHANGE_CURRENT_LYRIC_INDEX,
  data,
})

export const changeSequenceAction = (data: number) => ({
  type: actionsTypes.CHANGE_SEQUENCE,
  data,
})

export const changeIsPlayList = (data: boolean) => ({
  type: actionsTypes.CHANGE_IS_PLAY_LIST,
  data,
})

/**
 * 获取歌词并解析
 * @param {*} id 歌曲id
 */
export const getLyricAction = (id: number) => {
  return (dispatch: any) => {
    getLyric(id).then((res: any) => {
      const lyric = res.lrc && res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
