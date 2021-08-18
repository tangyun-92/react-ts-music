/*
 * @Author: 唐云 
 * @Date: 2021-08-18 14:10:53 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 14:11:13
 * 音乐播放自定义 hooks
 */

import { getSongDetail } from '../api/player/index'
import { message } from 'antd'
import {
  changeCurrentSongIndexAction,
  changePlayListAction,
  changeSongDetailAction,
  getLyricAction,
} from 'src/pages/player/store/actionCreators'
import { ICurrentSongType } from 'src/pages/player/store/data.d'

interface addPlayListProps {
  store: any
  songs?: ICurrentSongType[]
  id?: any
  way?: string
  index?: number
}

/**
 * 将歌曲添加到播放列表
 * @param {
 *  store：store
 *  songs?: 歌曲列表
 *  id?：歌曲id
 *  way?：add-添加到列表 addAndPlay-添加到列表并播放
 * }
 */
function useAddPlayList({
  store,
  songs,
  id,
  way = 'addAndPlay',
}: addPlayListProps) {
  let playList = []
  let song = null
  let songIndex = 0
  if (songs) {
    if (way === 'add') {
      message.success('已添加')
    } else {
      message.success('已添加并开始播放')
    }
    store.dispatch(changePlayListAction([]))
    playList = store.getState().player.playList
    songs.forEach((item: ICurrentSongType, index: number) => {
      handleSongDetail({ store, index, id: item.id, way })
    })
  } else {
    playList = store.getState().player.playList
    songIndex = playList.findIndex((song: ICurrentSongType) => song.id === id)
    // 判断是否找到歌曲
    if (songIndex !== -1) {
      // 找到
      message.success('歌曲已存在，已开始播放')
      song = playList[songIndex]
      handleStoreData(store, song, songIndex)
    } else {
      if (way === 'add') {
        message.success('已添加')
      } else {
        message.success('已开始播放')
      }
      handleSongDetail({ store, id, way })
    }
  }
}

/**
 * 请求歌曲详情
 * @param {
 *   store: store
 *   index: 循环的索引
 *   id: 歌曲id
 *   way: add-添加到列表 addAndPlay-添加到列表并播放
 * }
 */
function handleSongDetail({ store, index, id, way }: addPlayListProps) {
  getSongDetail(id).then((res: any) => {
    let songs = res.songs && res.songs[0]
    if (!songs) return
    const playList = store.getState().player.playList
    const newPlayList = [...playList]
    // 将请求到的歌曲放入播放列表
    newPlayList.push(songs)
    // 更新播放列表
    store.dispatch(changePlayListAction(newPlayList))
    if (way !== 'add') {
      if (index) {
        if (index === 0) {
          songs = newPlayList[0]
          handleStoreData(store, songs, 0)
        }
      } else {
        handleStoreData(store, songs, newPlayList.length - 1)
      }
    }
  })
}

/**
 * 操作store中的数据
 * @param {*} store store
 * @param {*} songs 歌曲信息
 * @param {*} index 歌曲索引
 */
function handleStoreData(store: any, songs: ICurrentSongType, index: number) {
  // 更新正在播放歌曲的索引
  store.dispatch(changeCurrentSongIndexAction(index))
  // 更新正在播放的歌曲
  store.dispatch(changeSongDetailAction(songs))
  // 请求歌曲的歌词
  store.dispatch(getLyricAction(songs.id))
}

export default useAddPlayList
