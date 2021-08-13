/*
 * @Author: 唐云
 * @Date: 2021-02-20 21:29:59
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 14:17:45
 * 歌曲封面组件
 */
import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { getCount, getSizeImage } from '../../utils/format-utils'
import { connect } from 'react-redux'
import { IRecommendType } from '../../pages/discover/recommend/store/data.d'
import * as actionTypes from '../../pages/player/store/actionCreators'
import { IPlayListType } from '../../pages/player/store/data.d'

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
  return {
    changePlayListActionDispatch(data: IPlayListType[]) {
      dispatch(actionTypes.changePlayListAction(data))
    },
    getPlayListDetailToPlayListActionDispatch(id: number, way: string) {
      dispatch(actionTypes.getPlayListDetailToPlayListAction(id, way))
    },
  }
}

interface ISongsCoverProps {
  changePlayListActionDispatch: (data: IPlayListType[]) => void
  getPlayListDetailToPlayListActionDispatch: (id: number, way: string) => void
  list: IRecommendType
  right?: string
  bottom?: string
}

const SongsCover: React.FC<ISongsCoverProps> = (props: ISongsCoverProps) => {
  /**
   * state and props
   */
  const {
    changePlayListActionDispatch,
    getPlayListDetailToPlayListActionDispatch,
    list,
    right = '0px',
    bottom = '20px',
  } = props

  /**
   * other methods
   */
  const playMusic = (id: number) => {
    changePlayListActionDispatch([])
    getPlayListDetailToPlayListActionDispatch(id, 'have')
  }

  return (
    <SongsCoverWrapper right={right} bottom={bottom}>
      <div className="cover-top">
        <img src={getSizeImage(list.picUrl, 140)} alt="" />
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(SongsCover))
