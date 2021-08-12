/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: luoxinrui
 * @Last Modified time: 2021-05-We 03:46:27
 * 推荐-新碟上架组件
 */
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { Carousel } from 'antd'
import { NewAlbumWrapper } from './style'
import TYThemeHeaderRecommend from '../../../../../components/ThemeHeaderRecommend'
import AlbumCover from '../../../../../components/AlbumCover'
import { getNewAlbum } from './../../store/actionCreators'

export default memo(function TYNewAlbum() {
  /**
   * redux hooks
   */
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(['recommend', 'newAlbums']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  
  /**
   * other hooks
   */
  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbum(10))
  }, [dispatch])

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
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((itemX) => {
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
})
