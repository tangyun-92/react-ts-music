/*
 * @Author: 唐云
 * @Date: 2021-02-24 21:44:31
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-11 13:42:49
 * 入驻歌手
 */
import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { InSingerWrapper } from './style'
// import { getHotArtistAction } from '@/pages/discover/artist/store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function InSinger() {
  /**
   * redux hooks
   */
  // const { hotArtists } = useSelector(
  //   (state) => ({
  //     hotArtists: state.getIn(['artist', 'hotArtists']),
  //   }),
  //   shallowEqual
  // )
  const dispatch = useDispatch()
  
  /**
   * other hooks
   */
  useEffect(() => {
    // dispatch(getHotArtistAction(5))
  }, [dispatch])

  return (
    <InSingerWrapper>
      <div className="content">
        <div className="in-singer-top">
          <span>入驻歌手</span>
          <NavLink to="/todo">查看全部 &gt;</NavLink>
        </div>
        <div href="/todo" className="list">
          {/* {hotArtists.map((item) => {
            return (
              <a href="/todo" key={item.id} className="list-item">
                <img
                  src={getSizeImage(item.picUrl, 62)}
                  className="img"
                  alt=""
                />
                <div className="item-right">
                  <div className="artist-name">{item.name}</div>
                  <div className="artist-intro text-nowrap">音乐人</div>
                </div>
              </a>
            )
          })} */}
        </div>
        <button className="btn">申请成为网易音乐人</button>
      </div>
    </InSingerWrapper>
  )
})
