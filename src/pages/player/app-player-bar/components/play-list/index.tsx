/*
 * @Author: 唐云
 * @Date: 2021-02-23 09:21:48
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 16:01:04
 * 播放列表
 */
import React, { memo, useEffect, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'

import { PlayListWrapper } from './style'
import PlayListHeader from './list-header'
import PlayListSongs from './song-list'
import PlayListLyric from './list-lyric'
import * as actionTypes from '../../../store/actionCreators'

const PlayList: React.FC<{}> = () => {
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  // 点击空白区域关闭播放列表
  const maskRef: any = useRef()
  useEffect(() => {
    const currentClass = maskRef.current && maskRef.current.className
    document.body.addEventListener('click', (e: any) => {
      if (e.target.className === currentClass) {
        dispatch(actionTypes.changeIsPlayList(false))
      }
    })
  }, [dispatch])

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

export default connect()(memo(PlayList))
