/*
 * @Author: 唐云 
 * @Date: 2021-02-20 15:02:12 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-12 14:38:17
 * 推荐-banner组件
 */
import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import * as actionTypes from '../../store/actionCreators'
import { ITopBannerType } from '../../store/data.d'

interface ITopBanner {
  topBanners: ITopBannerType[]
  getTopBannerDispatch: () => void
}

const TYTopBanner: React.FC<ITopBanner> = (props: ITopBanner) => {
  /**
   * state and props
   */
  const { getTopBannerDispatch, topBanners } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  /**
   * other hooks
   */
  const bannerRef: any = useRef()

  useEffect(() => {
    getTopBannerDispatch()
  }, [getTopBannerDispatch])

  /**
   * other methods
   */
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 其他业务逻辑
  const bgImage =
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners &&
              topBanners.map((item) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img
                      className="image"
                      src={item.imageUrl}
                      alt={item.typeTitle}
                    />
                  </div>
                )
              })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  // 热门推荐列表
  topBanners: state.recommend.topBanners,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    // 获取推荐列表
    getTopBannerDispatch() {
      dispatch(actionTypes.getTopBanner())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(TYTopBanner))