/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-13 13:40:57
 * 推荐-榜单组件
 */
import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { RankingWrapper } from './style'
import TYThemeHeaderRecommend from '../../../../../components/ThemeHeaderRecommend'
import TopRanking from '../../../../../components/TopRanking'
import * as actionTypes from '../../store/actionCreators'
import { ITopList } from '../../store/data.d'

interface IRecommendProps {
  getTopListDispatch: (limit: number) => void
  upRanking: ITopList
  newRanking: ITopList
  originRanking: ITopList
}

const TYRanking: React.FC<IRecommendProps> = (props: IRecommendProps) => {
  /**
   * redux hooks
   */
  const { getTopListDispatch, upRanking, newRanking, originRanking } = props

  /**
   * other hooks
   */
  useEffect(() => {
    // if (upRanking.tracks?.length === 0) {
    getTopListDispatch(0)
    // }
    // if (!newRanking) {
    getTopListDispatch(2)
    // }
    // if (!originRanking) {
    getTopListDispatch(3)
    // }
    // dispatch(getTopListAction(0))
    // dispatch(getTopListAction(2))
    // dispatch(getTopListAction(3))
  }, [getTopListDispatch])

  return (
    <RankingWrapper>
      <TYThemeHeaderRecommend title="榜单" />
      <div className="tops">
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
}

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  upRanking: state.recommend.upRanking,
  newRanking: state.recommend.newRanking,
  originRanking: state.recommend.originRanking,
})
/**
 * 映射dispatch到props上
 */
const mapDispatchToProps = (dispatch: any) => {
  return {
    // 获取推荐列表
    getTopListDispatch(limit: number) {
      dispatch(actionTypes.getTopListAction(limit))
      dispatch(actionTypes.getTopListAction(limit))
      dispatch(actionTypes.getTopListAction(limit))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(TYRanking))
