/*
 * @Author: 唐云
 * @Date: 2021-02-21 14:34:07
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 11:07:34
 * 播放器组件
 */
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'

import { PlayBarWrapper, Control, PlayInfo, Operator } from './style'
import {
  getSizeImage,
  formatDate,
  getPlaySong,
} from '../../../utils/format-utils'
import PlayList from './components/play-list'
import * as actionTypes from '../store/actionCreators'
import {
  ICurrentSongType,
  ILyricListType,
  IPlayListType,
} from '../store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  currentSong: state.player.currentSong,
  sequence: state.player.sequence,
  lyricList: state.player.lyricList,
  currentLyricIndex: state.player.currentLyricIndex,
  isPlayList: state.player.isPlayList,
  playList: state.player.playList,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    getSongDetailDispatch() {
      dispatch(actionTypes.getSongDetailAction())
    },
    changeCurrentLyricIndexDispatch(index: number) {
      dispatch(actionTypes.changeCurrentLyricIndexAction(index))
    },
    changeSequenceActionDispatch(index: number) {
      dispatch(actionTypes.changeSequenceAction(index))
    },
    changeCurrentSongDispatch(tag: number) {
      dispatch(actionTypes.changeCurrentSong(tag))
    },
    changeIsPlayListDispatch(tag: boolean) {
      dispatch(actionTypes.changeIsPlayList(tag))
    },
  }
}

interface IAppPlayBarProps {
  getSongDetailDispatch: () => void
  changeCurrentLyricIndexDispatch: (index: number) => void
  changeSequenceActionDispatch: (index: number) => void
  changeCurrentSongDispatch: (tag: number) => void
  changeIsPlayListDispatch: (tag: boolean) => void
  currentSong: ICurrentSongType
  sequence: number
  lyricList: ILyricListType[]
  currentLyricIndex: number
  isPlayList: boolean
  playList: IPlayListType[]
}

const AppPlayBar: React.FC<IAppPlayBarProps> = (props: IAppPlayBarProps) => {
  /**
   * props and state
   */
  let {
    getSongDetailDispatch,
    changeCurrentLyricIndexDispatch,
    changeSequenceActionDispatch,
    changeCurrentSongDispatch,
    changeIsPlayListDispatch,
    currentSong,
    sequence,
    lyricList,
    currentLyricIndex,
    isPlayList,
    playList,
  } = props
  const [currentTime, setCurrentTime] = useState(0) // 播放中的时间
  const [progress, setProgress] = useState(0) // 实时进度条（播放中）
  const [isChanging, setIsChanging] = useState(false) // 是否正在改变进度条
  const [isPlaying, setIsPlaying] = useState(false) // 播放状态

  /**
   *  other hooks
   */
  const audioRef: any = useRef()
  useEffect(() => {
    // dispatch(getSongDetailAction())
    getSongDetailDispatch()
  }, [getSongDetailDispatch])
  useEffect(() => {
    // 歌曲路径
    audioRef.current.src = getPlaySong(currentSong.id)
    // 监听歌曲改变执行播放
    audioRef.current
      .play()
      .then((res: any) => {
        setIsPlaying(true)
        message.success('已开始播放')
      })
      .catch((err: any) => {
        setIsPlaying(false)
      })
  }, [currentSong])

  /**
   * other methods
   */
  const picUrl = (currentSong.al && currentSong.al.picUrl) || '' // 歌曲图片
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手' // 歌手名称
  const duration = currentSong.dt || 0 // 歌曲总时长

  // 点击播放音乐
  const playMusic = useCallback(() => {
    // 播放歌曲
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      message.success('已开始播放')
    } else {
      message.warning('已停止播放')
    }
  }, [isPlaying])

  // 监听播放时间
  const timeUpdate = (e: any) => {
    const currentTime = e.target.currentTime
    // 乘以1000转为毫秒
    if (!isChanging) {
      setCurrentTime(currentTime * 1000)
      setProgress(((currentTime * 1000) / duration) * 100)
    }

    // 获取当前的歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentTime * 1000 < lyricItem.time) {
        break
      }
    }
    const finalIndex = i - 1
    if (finalIndex !== currentLyricIndex) {
      changeCurrentLyricIndexDispatch(finalIndex)
      // const content = lyricList[finalIndex] && lyricList[finalIndex].content
      // message.open({
      //   content: content,
      //   key: 'lyric',
      //   duration: 0,
      //   className: 'lyric-message',
      // })
    }
  }

  // 进度条改变时
  const sliderChange = useCallback(
    (value) => {
      setProgress(value)
      const currentTime = (value / 100.0) * duration
      setCurrentTime(currentTime)
      setIsChanging(true)
    },
    [duration]
  )

  // 进度条改变后
  const sliderAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * duration) / 1000 // 进度条改变后的时间
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChanging(false)

      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )

  // 改变播放方式
  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    changeSequenceActionDispatch(currentSequence)
  }

  // 切歌
  const changeMusic = (tag: number) => {
    changeCurrentSongDispatch(tag)
  }

  // 歌曲播放完毕时
  const handleMusicEnded = () => {
    if (sequence === 2) {
      // 单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      changeCurrentSongDispatch(1)
    }
  }

  const handlePlayList = () => {
    isPlayList = !isPlayList
    changeIsPlayListDispatch(isPlayList)
  }

  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button
            className="sprite_playbar prev"
            onClick={(e) => changeMusic(-1)}
          ></button>
          <button
            className="sprite_playbar play"
            onClick={(e) => playMusic()}
          ></button>
          <button
            className="sprite_playbar next"
            onClick={(e) => changeMusic(1)}
          ></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 34)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="/todo" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">
                  {formatDate(currentTime, 'mm:ss')}
                </span>
                <span className="divider">/</span>
                <span className="duration">
                  {formatDate(duration, 'mm:ss')}
                </span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button
              className="sprite_playbar btn loop"
              onClick={(e) => changeSequence()}
            ></button>
            <button
              className="sprite_playbar btn playlist"
              onClick={(e) => handlePlayList()}
            >
              {playList.length}
            </button>
          </div>
        </Operator>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={(e) => timeUpdate(e)}
        onEnded={(e) => handleMusicEnded()}
      />
      {isPlayList && <PlayList />}
    </PlayBarWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(AppPlayBar))