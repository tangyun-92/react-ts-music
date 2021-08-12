/*
 * @Author: 唐云
 * @Date: 2021-02-20 15:11:24
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-12 13:41:46
 * 推荐页面title组件
 */
import React, { memo } from 'react'

import { HeaderWrapper } from './style'

interface IThemeHeaderRecommendProps {
  title: string
  keywords: string[]
}

const TYThemeHeaderRecommend: React.FC<IThemeHeaderRecommendProps> = (
  props: IThemeHeaderRecommendProps
) => {
  /**
   * state and props
   */
  const { title, keywords } = props

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
}

export default memo(TYThemeHeaderRecommend)
