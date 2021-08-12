/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: luoxinrui
 * @Last Modified time: 2021-05-We 03:46:27
 * 推荐-新碟上架组件
 */
import React, { memo, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import { Carousel } from 'antd'
import { NewAlbumWrapper } from './style'
import TYThemeHeaderRecommend from '../../../../../components/ThemeHeaderRecommend'
import AlbumCover from '../../../../../components/AlbumCover'
import * as actionTypes from '../../store/actionCreators'
import { INewAlbums } from '../../store/data.d'

interface IRecommendProps {
  getNewAlbumDispatch: (limit: number) => void
  newAlbums: INewAlbums[]
}

const TYNewAlbum: React.FC<IRecommendProps> = (props: IRecommendProps) => {
  /**
   * redux hooks
   */
  const { getNewAlbumDispatch, newAlbums } = props

  /**
   * other hooks
   */
  const pageRef: any = useRef()
  useEffect(() => {
    getNewAlbumDispatch(10)
  }, [getNewAlbumDispatch])

  return (
    <NewAlbumWrapper>
      <TYThemeHeaderRecommend title="新碟上架"></TYThemeHeaderRecommend>
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></div>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item, index) => {
              return (
                <div key={item} className="page">
                  {newAlbums &&
                    newAlbums.slice(item * 5, (item + 1) * 5).map((itemX) => {
                      return <AlbumCover key={itemX.id} info={itemX} />
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  )
}

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  // 热门推荐列表
  newAlbums: state.recommend.newAlbums,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    // 获取推荐列表
    getNewAlbumDispatch(limit: number) {
      dispatch(actionTypes.getNewAlbum(limit))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(TYNewAlbum))
