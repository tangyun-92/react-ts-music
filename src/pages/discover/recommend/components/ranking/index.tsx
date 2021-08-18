/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:29:17
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 15:32:43
 * 推荐-榜单组件
 */
import React, { memo, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'

import { RankingWrapper } from './style'
import TYThemeHeaderRecommend from '../../../../../components/ThemeHeaderRecommend'
import TopRanking from '../../../../../components/TopRanking'
import { ITopList } from '../../store/data.d'
import { getTopListAction } from '../../store/actionCreators'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  upRanking: state.recommend.upRanking,
  newRanking: state.recommend.newRanking,
  originRanking: state.recommend.originRanking
})

interface IRecommendProps {
  upRanking: ITopList
  newRanking: ITopList
  originRanking: ITopList
}

const TYRanking: React.FC<IRecommendProps> = (props: IRecommendProps) => {
  /**
   * redux hooks
   */
  const { upRanking, newRanking, originRanking } = props
  /**
   * other hooks
   */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTopListAction(19723756))
    dispatch(getTopListAction(3779629))
    dispatch(getTopListAction(2884035))
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
}

export default connect(mapStateToProps)(memo(TYRanking))
