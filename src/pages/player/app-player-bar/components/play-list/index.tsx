/*
 * @Author: 唐云
 * @Date: 2021-02-23 09:21:48
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 14:17:20
 * 播放列表
 */
import React, { memo, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { PlayListWrapper } from './style'
import PlayListHeader from './list-header'
import PlayListSongs from './song-list'
import PlayListLyric from './list-lyric'
import * as actionTypes from '../../../store/actionCreators'

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeIsPlayListDispatch(tag: boolean) {
      dispatch(actionTypes.changeIsPlayList(tag))
    },
  }
}

interface IPlayListProps {
  changeIsPlayListDispatch: (tag: boolean) => void
}

const PlayList: React.FC<IPlayListProps> = (props: IPlayListProps) => {
  const { changeIsPlayListDispatch } = props
  /**
   * redux hooks
   */

  /**
   * other hooks
   */
  // 点击空白区域关闭播放列表
  const maskRef: any = useRef()
  useEffect(() => {
    const currentClass = maskRef.current && maskRef.current.className
    document.body.addEventListener('click', (e: any) => {
      if (e.target.className === currentClass) {
        changeIsPlayListDispatch(false)
      }
    })
  }, [changeIsPlayListDispatch])

  return (
    <PlayListWrapper>
      <div className="mask" ref={maskRef}></div>
      <div className="container">
        <PlayListHeader />
        <div className="content">
          <img
            className="img-bg"
            src="https://p2.music.126.net/SNSTwkUVrjyK_spAjOSXDw==/109951164739755353.jpg"
            alt=""
          />
          <PlayListSongs />
          <div className="line"></div>
          <PlayListLyric />
        </div>
      </div>
    </PlayListWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(PlayList))
