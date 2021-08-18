/*
 * @Author: 唐云 
 * @Date: 2021-08-18 14:11:16 
 * @Last Modified by:   唐云 
 * @Last Modified time: 2021-08-18 14:11:16 
 * 切歌自定义 hooks
 */

import {
  changeCurrentSongIndexAction,
  changeSongDetailAction,
  getLyricAction,
} from 'src/pages/player/store/actionCreators'
import { getRandomNumber } from 'src/utils/math-utils'

/**
 * 切歌
 * @param {*} tag 0-顺序播放 1-随机播放 2-单曲循环
 */
function useChangeCurrentSong(store: any, tag: number) {
  const sequence = store.getState().player.sequence
  const playList = store.getState().player.playList
  let currentSongIndex = store.getState().player.currentSongIndex
  let randomIndex = getRandomNumber(playList.length)

  switch (sequence) {
    case 1: // 随机播放
      while (randomIndex === currentSongIndex) {
        randomIndex = getRandomNumber(playList.length)
      }
      currentSongIndex = randomIndex
      break
    default:
      // 顺序播放
      currentSongIndex += tag
      if (currentSongIndex >= playList.length) {
        currentSongIndex = 0
      }
      if (currentSongIndex < 0) {
        currentSongIndex = playList.length - 1
      }
      break
  }

  const currentSong = playList[currentSongIndex]
  store.dispatch(changeCurrentSongIndexAction(currentSongIndex))
  store.dispatch(changeSongDetailAction(currentSong))
  // 获取歌词
  store.dispatch(getLyricAction(currentSong.id))
}

export default useChangeCurrentSong
