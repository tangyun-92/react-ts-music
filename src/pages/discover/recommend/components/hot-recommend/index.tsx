/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:02:37
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 14:06:48
 * 推荐-热门推荐组件
 */
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { HotRecommendWrapper } from './style'
import TYThemeHeaderRecommend from '../../../../../components/ThemeHeaderRecommend/index'
import TYSongsCover from '../../../../../components/SongsCover/index'
import * as actionTypes from '../../store/actionCreators'
import { IRecommendType } from '../../store/data.d'

interface IRecommendProps {
  getRecommendDispatch: (limit: number) => void
  hotRecommendList: IRecommendType[]
}

const TYHotRecommend: React.FC<IRecommendProps> = (props: IRecommendProps) => {
  /**
   * state and props
   */
  const { getRecommendDispatch, hotRecommendList } = props

  /**
   * other hooks
   */
  useEffect(() => {
    getRecommendDispatch(8)
  }, [getRecommendDispatch])

  return (
    <HotRecommendWrapper>
      <TYThemeHeaderRecommend
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommendList &&
          hotRecommendList.map((item: IRecommendType) => {
            return <TYSongsCover key={item.id} list={item} />
          })}
      </div>
    </HotRecommendWrapper>
  )
}

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  // 热门推荐列表
  hotRecommendList: state.recommend.hotRecommendList,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    // 获取推荐列表
    getRecommendDispatch(limit: number) {
      dispatch(actionTypes.getRecommend(limit))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(TYHotRecommend))
