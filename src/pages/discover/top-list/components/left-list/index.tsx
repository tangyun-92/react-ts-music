/*
 * @Author: 唐云
 * @Date: 2021-02-26 23:17:10
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 17:08:25
 * 排行榜左侧榜单组件
 */
import React, { memo, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import classNames from 'classnames'

import {
  getCloudMusicTopListAction,
  getTopDetailAction,
} from '../../store/actionCreators'
import { LeftListWrapper } from './style'
import { getSizeImage } from 'src/utils/format-utils'
import { ICloudMusicTopList } from '../../store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  cloudMusicTopList: state.topList.cloudMusicTopList,
})

interface ILeftList {
  cloudMusicTopList: ICloudMusicTopList[]
}

const LeftList: React.FC<ILeftList> = (props: ILeftList) => {
  /**
   * state and props
   */
  const { cloudMusicTopList } = props
  const [listIndex, setListIndex] = useState(0) // 榜单索引
  
  /**
   * other hooks
   */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCloudMusicTopListAction())
    dispatch(getTopDetailAction(19723756))
  }, [dispatch])

  /**
   * other methods
   */
  const handleListIndex = (item: ICloudMusicTopList, index: number) => {
    setListIndex(index)
    dispatch(getTopDetailAction(item.id))
  }

  return (
    <LeftListWrapper>
      <div className="content">
        <div className="list">
          <div className="title">云音乐特色榜</div>
          <div className="title title-media">全球媒体榜</div>
          {cloudMusicTopList && cloudMusicTopList.map((item, index) => {
            return (
              <div
                className={classNames('item', {
                  active: listIndex === index,
                })}
                key={item.id}
                onClick={(e) => handleListIndex(item, index)}
              >
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="time">{item.updateFrequency}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </LeftListWrapper>
  )
}

export default connect(mapStateToProps)(memo(LeftList))
