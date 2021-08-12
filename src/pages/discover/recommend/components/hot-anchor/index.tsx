/*
 * @Author: 唐云
 * @Date: 2021-02-24 21:44:04
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-12 16:10:43
 * 热门主播
 */
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { HotAnchorWrapper } from './style'
import { getSizeImage } from '../../../../../utils/format-utils'
import * as actionTypes from '../../../dj-radio/store/actionCreators'
import { IHotAnchorsType } from '../../../dj-radio/store/data.d'

interface IHotAnchorProps {
  getTopAnchorsDispatch: (limit: number) => void
  hotAnchors: IHotAnchorsType[]
}

const HotAnchor: React.FC<IHotAnchorProps> = (props: IHotAnchorProps) => {
  /**
   * redux hooks
   */
  const { getTopAnchorsDispatch, hotAnchors } = props

  /**
   * other hooks
   */
  useEffect(() => {
    getTopAnchorsDispatch(5)
  }, [getTopAnchorsDispatch])

  return (
    <HotAnchorWrapper>
      <div className="content">
        <div className="anchor-top">
          <span>热门主播</span>
        </div>
        <div className="anchor-list">
          {hotAnchors && hotAnchors.map((item, index) => {
            return (
              <div key={item.id} className="item">
                <a href="/todo">
                  <div className="img">
                    <img src={getSizeImage(item.avatarUrl, 40)} alt="" />
                  </div>
                  <div className="right">
                    <div className="name text-nowrap">{item.nickName}</div>
                    <div className="info text-nowrap">{item.nickName}</div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </HotAnchorWrapper>
  )
}

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  hotAnchors: state.anchor.hotAnchors,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    getTopAnchorsDispatch(limit: number) {
      dispatch(actionTypes.getTopAnchorsAction(limit))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(HotAnchor))
