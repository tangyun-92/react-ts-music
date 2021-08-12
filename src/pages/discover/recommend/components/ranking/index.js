/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-03-01 16:41:30
 * 推荐-榜单组件
 */
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { RankingWrapper } from './style'
import TYThemeHeaderRecommend from '@/components/ThemeHeaderRecommend'
import { getTopListAction } from './../../store/actionCreators'
import TopRanking from '@/components/TopRanking'

export default memo(function TYRanking() {
  /**
   * redux hooks
   */
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking']),
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

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
})
