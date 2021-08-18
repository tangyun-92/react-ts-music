/*
 * @Author: 唐云
 * @Date: 2021-02-23 14:12:22
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 13:03:59
 * 播放列表-歌曲列表组件
 */
import React, { memo } from 'react'
import { connect, useStore } from 'react-redux'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

import { SongsWrapper, NoSongsWrapper, HaveSongsWrapper } from './style'
import { formatMinuteSecond } from '../../../../../../utils/format-utils'
import * as actionTypes from '../../../../store/actionCreators'
import { IPlayListType, ICurrentSongType } from '../../../../store/data.d'
import UseAddPlayList from 'src/hooks/useAddPlayList'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  playList: state.player.playList,
  currentSongIndex: state.player.currentSongIndex,
  currentSong: state.player.currentSong,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeIsPlayListDispatch(flag: boolean) {
      dispatch(actionTypes.changeIsPlayList(flag))
    },
    changePlayListActionDispatch(data: IPlayListType[]) {
      dispatch(actionTypes.changePlayListAction(data))
    },
    changeSongDetailActionDispatch(data: ICurrentSongType) {
      dispatch(actionTypes.changeSongDetailAction(data))
    },
  }
}

interface TPlayListSongsProps {
  changeIsPlayListDispatch: (flag: boolean) => void
  changePlayListActionDispatch: (data: IPlayListType[]) => void
  changeSongDetailActionDispatch: (data: ICurrentSongType) => void
  playList: IPlayListType[]
  currentSongIndex: number
  currentSong: ICurrentSongType
}

const PlayListSongs: React.FC<TPlayListSongsProps> = (
  props: TPlayListSongsProps
) => {
  const {
    changeIsPlayListDispatch,
    changePlayListActionDispatch,
    changeSongDetailActionDispatch,
    playList,
    currentSongIndex,
    currentSong,
  } = props
  const store = useStore()

  /**
   * other methods
   */
  // 隐藏播放列表
  const hidePlayList = () => {
    changeIsPlayListDispatch(false)
  }

  // 播放列表中的音乐
  const playMusic = (item: IPlayListType) => {
    UseAddPlayList({
      store,
      id: item.id
    })
  }

  // 删除列表中的某首歌曲
  const delSong = (id: number, e: any) => {
    e.stopPropagation()
    let newPlayList = [...playList]
    const PlayingId = currentSong.id // 播放中的歌曲id

    newPlayList.forEach((item, index) => {
      if (item.id === id) {
        if (item.id !== PlayingId) {
          newPlayList.splice(index, 1)
          changePlayListActionDispatch(newPlayList)
          UseAddPlayList({
            store,
            id: PlayingId
          })
        } else {
          // 如果删除正在播放的歌曲
          newPlayList.splice(index, 1)
          changePlayListActionDispatch(newPlayList)
          if (newPlayList.length !== 0) {
            if (newPlayList.length === index) {
              // 如果是列表的最后一首自动播放上一首
              playMusic(newPlayList[index - 1])
            } else {
              // 播放下一首
              playMusic(newPlayList[index])
            }
          } else {
            // 如果是最后一首，清空播放中的歌曲
            changeSongDetailActionDispatch({})
          }
        }
      }
    })
  }

  return (
    <SongsWrapper>
      {playList.length !== 0 ? (
        <HaveSongsWrapper>
          {playList && playList.map((item, index) => {
            return (
              <div
                key={item.id}
                className={classNames('song-list', {
                  active: currentSongIndex === index,
                })}
                onClick={(e) => playMusic(item)}
              >
                <span className="song-play"></span>
                <span className="song-name text-nowrap">{item.name}</span>
                <span className="song-opera">
                  <div className="opera">
                    <button className="btn collect sprite_playlist"></button>
                    <button className="btn share sprite_playlist"></button>
                    <button className="btn download sprite_playlist"></button>
                    <button
                      className="btn del sprite_playlist"
                      onClick={(e) => delSong(item.id, e)}
                    ></button>
                  </div>
                </span>
                <span className="singer text-nowrap">{item.ar[0].name}</span>
                <span className="song-time">{formatMinuteSecond(item.dt)}</span>
                <span className="song-from">
                  <i className="from-icon sprite_playlist"></i>
                </span>
              </div>
            )
          })}
        </HaveSongsWrapper>
      ) : (
        <NoSongsWrapper>
          <i className="icon sprite_playlist"></i>
          你还没有添加任何歌曲
          <br />
          去首页
          <NavLink
            to="/discover"
            className="link"
            onClick={(e) => hidePlayList()}
          >
            发现音乐
          </NavLink>
          ，或在
          <NavLink to="/mine" className="link" onClick={(e) => hidePlayList()}>
            我的音乐
          </NavLink>
          收听自己收藏的歌单。
        </NoSongsWrapper>
      )}
    </SongsWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(PlayListSongs))
