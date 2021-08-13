/*
 * @Author: 唐云
 * @Date: 2021-02-23 11:05:54
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 13:20:49
 * 播放列表头部组件
 */
import React, { memo } from 'react'
import { connect } from 'react-redux'
import { Popconfirm, message } from 'antd'

import { ListHeaderWrapper } from './style'
import * as actionTypes from '../../../../store/actionCreators'
import {
  ICurrentSongType,
  IPlayListType,
} from '../../../../store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  currentSong: state.player.currentSong,
  playList: state.player.playList,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    changePlayListActionDispatch(data: IPlayListType[]) {
      dispatch(actionTypes.changePlayListAction(data))
    },
    changeIsPlayListDispatch(tag: boolean) {
      dispatch(actionTypes.changeIsPlayList(tag))
    },
  }
}

interface IPlayListHeaderProps {
  changePlayListActionDispatch: (data: IPlayListType[]) => void
  changeIsPlayListDispatch: (tag: boolean) => void
  currentSong: ICurrentSongType
  playList: IPlayListType[]
}

const PlayListHeader: React.FC<IPlayListHeaderProps> = (
  props: IPlayListHeaderProps
) => {
  const {
    changePlayListActionDispatch,
    changeIsPlayListDispatch,
    playList,
    currentSong,
  } = props

  /**
   * other methods
   */
  // 关闭播放列表
  const closeList = () => {
    changeIsPlayListDispatch(false)
  }

  // 清空播放列表
  const clearPlayList = () => {
    changePlayListActionDispatch([])
    message.success('清除成功')
  }

  return (
    <ListHeaderWrapper>
      <div className="left">
        <span className="play-list">播放列表({playList.length})</span>
        <span className="left-opera">
          <span className="opera link">
            <i className="icon icon-collect sprite_playlist"></i>收藏全部
          </span>
          <span className="line"></span>
          <Popconfirm
            title="确定清除播放列表？"
            onConfirm={(e) => clearPlayList()}
            okText="确定"
            cancelText="取消"
          >
            <span className="opera link">
              <i className="icon icon-clear sprite_playlist"></i>清除
            </span>
          </Popconfirm>
        </span>
      </div>
      <div className="right">
        <span className="song-name">{currentSong.name}</span>
        <span
          className="close sprite_playlist"
          onClick={(e) => closeList()}
        ></span>
      </div>
    </ListHeaderWrapper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(PlayListHeader))
