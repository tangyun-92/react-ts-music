/*
 * @Author: 唐云
 * @Date: 2021-02-26 23:17:10
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 17:26:21
 * 排行榜右侧介绍组件
 */
import React, { memo } from 'react'
import { connect, useStore } from 'react-redux'

import { ListDetailWrapper } from './style'
import { getSizeImage, formatDate } from 'src/utils/format-utils'
import UseAddPlayList from 'src/hooks/useAddPlayList'
import { ITopDetail } from '../../store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  topDetail: state.topList.topDetail,
})

interface IListDetail {
  topDetail: ITopDetail
}

const ListDetail: React.FC<IListDetail> = (props: IListDetail) => {
  const { topDetail } = props
  const store = useStore()

  // 播放
  const playMusic = () => {
    UseAddPlayList({
      store,
      songs: topDetail.tracks
    })
  }

  // 添加
  const addMusic = () => {
    UseAddPlayList({
      store,
      songs: topDetail.tracks,
      way: 'add'
    })
  }

  return (
    <ListDetailWrapper>
      <div className="detail-left">
        <img src={getSizeImage(topDetail.coverImgUrl, 150)} alt="" />
      </div>
      <div className="detail-right">
        <div className="name">{topDetail.name}</div>
        <div className="time">
          <i className="icon sprite_icon2"></i>
          最近更新：{formatDate(topDetail.updateTime, 'MM月dd日')}
        </div>
        <div className="opera">
          <div
            className="btn play sprite_button"
            onClick={(e) => playMusic()}
          >
            <div className="btn play-btn sprite_button">
              <i className="play-icon sprite_button"></i>
              播放
            </div>
          </div>
          <div
            className="btn add sprite_button"
            onClick={(e) => addMusic()}
          ></div>
          <div className="btn collect sprite_button">
            <i className="collect-icon sprite_button">
              ({topDetail.subscribedCount})
            </i>
          </div>
          <div className="btn share sprite_button">
            <i className="share-icon sprite_button">({topDetail.shareCount})</i>
          </div>
          <div className="btn download sprite_button">
            <i className="download-icon sprite_button">下载</i>
          </div>
          <div className="btn comment sprite_button">
            <i className="comment-icon sprite_button">
              ({topDetail.commentCount})
            </i>
          </div>
        </div>
      </div>
    </ListDetailWrapper>
  )
}

export default connect(mapStateToProps)(memo(ListDetail))
