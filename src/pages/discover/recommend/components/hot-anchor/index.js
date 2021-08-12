/*
 * @Author: 唐云
 * @Date: 2021-02-24 21:44:04
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-11 13:15:59
 * 热门主播
 */
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { HotAnchorWrapper } from './style'
// import { getTopAnchorsAction } from '@/pages/discover/dj-radio/store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function HotAnchor() {
  /**
   * redux hooks
   */
  const { hotAnchors } = useSelector(
    (state) => ({
      hotAnchors: state.getIn(['djRadio', 'hotAnchors']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    // dispatch(getTopAnchorsAction(5))
  }, [dispatch])

  return (
    <HotAnchorWrapper>
      <div className="content">
        <div className="anchor-top">
          <span>热门主播</span>
        </div>
        <div className="anchor-list">
          {hotAnchors.map((item, index) => {
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
})
