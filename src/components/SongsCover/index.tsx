/*
 * @Author: 唐云
 * @Date: 2021-02-20 21:29:59
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 10:26:38
 * 歌曲封面组件
 */
import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '../../utils/format-utils'
import { connect, useStore } from 'react-redux'
import { IRecommendType } from '../../pages/discover/recommend/store/data.d'
import UseAddPlayList from 'src/hooks/useAddPlayList'
import { getPlayListDetail } from 'src/api/player'

const mapStateToProps = (state: any) => ({})

interface ISongsCoverProps {
  list: IRecommendType
  right?: string
  bottom?: string
}

const SongsCover: React.FC<ISongsCoverProps> = (props: ISongsCoverProps) => {
  /**
   * state and props
   */
  const {
    list,
    right = '0px',
    bottom = '20px',
  } = props
  const store = useStore()

  /**
   * other methods
   */
  const playMusic = (id: number) => {
    getPlayListDetail(id).then((res: any) => {
      const trackIds = res.playlist.trackIds
      UseAddPlayList({
        store,
        songs: trackIds,
      })
    })
  }

  return (
    <SongsCoverWrapper right={right} bottom={bottom}>
      <div className="cover-top">
        <img src={getSizeImage(list.picUrl || list.coverImgUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(list.playCount)}
            </span>
            <i
              className="sprite_icon play"
              onClick={(e) => playMusic(list.id)}
            ></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{list.name}</div>
      <div className="cover-source text-nowrap">by {list.copywriter}</div>
    </SongsCoverWrapper>
  )
}

export default connect(mapStateToProps)(memo(SongsCover))
