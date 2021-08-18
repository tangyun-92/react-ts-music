/*
 * @Author: 唐云
 * @Date: 2021-02-23 21:11:38
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 15:41:33
 * 歌词列表组件
 */
import React, { memo, useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import { ListLyricWrapper } from './style'
import {
  ILyricListType,
} from '../../../../store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  lyricList: state.player.lyricList,
  currentLyricIndex: state.player.currentLyricIndex,
})

interface IAppPlayBarProps {
  lyricList: ILyricListType[]
  currentLyricIndex: number
}

const AppPlayBar: React.FC<IAppPlayBarProps> = (props: IAppPlayBarProps) => {
  /**
   * state and props
   */
  const { lyricList, currentLyricIndex } = props
  const [lyricStyle, setLyricStyle] = useState({})

  /**
   * other hooks
   */
  const lyricRef: any = useRef()

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return

    function scrollTo(element: any, to: any, duration: number) {
      if (duration <= 0) return
      var difference = to - element.scrollTop
      var perTick = (difference / duration) * 10
      let flag = element.scrollTop + perTick
      setLyricStyle({
        transform: `translateY(-${flag}px)`,
        transition: 'all 0.6s linear',
      })
      if (flag === to) return
      scrollTo(element, to, duration - 10)
    }
    scrollTo(lyricRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex])

  return (
    <ListLyricWrapper ref={lyricRef}>
      <div className="lyric-content" style={lyricStyle}>
        {lyricList && lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', {
                active: index === currentLyricIndex,
              })}
            >
              {item.content}
            </div>
          )
        })}
      </div>
    </ListLyricWrapper>
  )
}

export default connect(mapStateToProps)(memo(AppPlayBar))