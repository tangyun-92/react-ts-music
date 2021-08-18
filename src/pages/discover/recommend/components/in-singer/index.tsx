/*
 * @Author: 唐云
 * @Date: 2021-02-24 21:44:31
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 15:36:47
 * 入驻歌手
 */
import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import { InSingerWrapper } from './style'
import { getSizeImage } from '../../../../../utils/format-utils'
import { getHotArtistAction } from '../../../artist/store/actionCreators'
import { IHotArtistsType } from '../../../artist/store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  hotArtists: state.artist.hotArtists,
})

interface IInSingerProps {
  hotArtists: IHotArtistsType[]
}

const InSinger: React.FC<IInSingerProps> = (props: IInSingerProps) => {
  /**
   * redux hooks
   */
  const { hotArtists } = props

  /**
   * other hooks
   */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotArtistAction(5))
  }, [dispatch])

  return (
    <InSingerWrapper>
      <div className="content">
        <div className="in-singer-top">
          <span>入驻歌手</span>
          <NavLink to="/todo">查看全部 &gt;</NavLink>
        </div>
        <div className="list">
          {hotArtists &&
            hotArtists.map((item) => {
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
            })}
        </div>
        <button className="btn">申请成为网易音乐人</button>
      </div>
    </InSingerWrapper>
  )
}

export default connect(mapStateToProps)(memo(InSinger))
