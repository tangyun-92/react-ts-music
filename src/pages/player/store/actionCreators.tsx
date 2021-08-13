import { getSongDetail, getLyric, getPlayListDetail } from '../../../api/player'
import * as actionsTypes from './constants'
import { getRandomNumber } from '../../../utils/math-utils'
import { parseLyric } from '../../../utils/parse-lyric'
import { message } from 'antd'
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

const changeCurrentSongIndexAction = (data: number) => ({
  type: actionsTypes.CHANGE_CURRENT_SONG_INDEX,
  data,
})

const changeLyricListAction = (data: ILyricListType[]) => ({
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
 * 根据歌单id获取歌单的详情-放入播放列表并播放
 * @param {*} id 歌单id
 */
export const getPlayListDetailToPlayListAction = (id: number, way?: string) => {
  return (dispatch: any, getState: any) => {
    
    getPlayListDetail(id).then((res: any) => {
      const trackIds = res.playlist.trackIds
      
      trackIds.forEach((item: any, index: number) => {
        getSongDetail(item.id).then((res: any) => {
          const song = res.songs && res.songs[0]
          if (!song) return
          let playList = getState().player.playList
          playList.push(song)
          // 更新播放列表
          dispatch(changePlayListAction(playList))
          if (way && way !== 'add') {
            // 播放第一首
            if (index === 0) {
              dispatch(getSongDetailAction(playList[0].id))
            }
          }
        })
      })
    })
  }
}

/**
 * 切歌
 * @param {*} tag 0顺序播放 1随机播放 2单曲循环
 */
export const changeCurrentSong = (tag: number) => {
  return (dispatch: any, getState: any) => {
    const sequence = getState().player.sequence
    let currentSongIndex = getState().player.currentSongIndex
    const playList = getState().player.playList

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length)
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
    dispatch(changeCurrentSongIndexAction(currentSongIndex))
    dispatch(changeSongDetailAction(currentSong))

    // 获取歌词
    dispatch(getLyricAction(currentSong.id))
  }
}

/**
 * 将歌曲添加到播放列表并且播放
 * @param {*} ids 歌曲id
 */
export const getSongDetailAction = (ids?: number) => {
  return (dispatch: any, getState: any) => {
    // 根据id查找playList中是否存在该歌曲
    const playList = getState().player.playList
    const songIndex = playList.findIndex((song: any) => song.id === ids)

    // 判断是否找到歌曲
    let song = null
    if (songIndex !== -1) {
      // 找到
      dispatch(changeCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeSongDetailAction(song))
      // 请求歌曲的歌词
      dispatch(getLyricAction(song.id))
    } else {
      // 没找到，请求歌曲数据
      ids &&
        getSongDetail(ids).then((res: any) => {
          song = res.songs && res.songs[0]
          if (!song) return
          // 将请求到的歌曲放入播放列表
          const newPlayList = [...playList]
          newPlayList.push(song)
          // 更新redux中的值
          dispatch(changePlayListAction(newPlayList))
          // 更新正在播放歌曲的索引
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
          // 更新正在播放的歌曲
          dispatch(changeSongDetailAction(song))
          // 请求歌曲的歌词
          dispatch(getLyricAction(song.id))
        })
    }
  }
}

/**
 * 将歌曲添加到播放列表
 * @param {*} ids 歌曲id
 */
export const getSongToPlayListAction = (ids: number) => {
  return (dispatch: any, getState: any) => {
    const playList = getState().player.playList
    const songIndex = playList.findIndex((song: any) => song.id === ids)

    if (songIndex === -1) {
      getSongDetail(ids).then((res: any) => {
        const song = res.songs && res.songs[0]
        if (!song) return
        const newPlayList = [...playList]
        newPlayList.push(song)
        dispatch(changePlayListAction(newPlayList))
      })
      message.success('已添加到播放列表')
    }
  }
}

/**
 * 获取歌词并解析
 * @param {*} id 歌曲id
 */
export const getLyricAction = (id: number) => {
  return (dispatch: any) => {
    getLyric(id).then((res: any) => {
      const lyric = res.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}
