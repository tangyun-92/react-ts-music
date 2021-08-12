/*
 * @Author: 唐云
 * @Date: 2021-08-11 09:50:05
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-11 10:30:51
 * 发现音乐
 */

import React, { memo } from 'react'
import { NavLink, RouteComponentProps } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper, TopMenu } from './style'
import { discoverMenu } from '../../common/local-data'

interface IProps extends RouteComponentProps {
  [key: string]: any
}

const TYDiscover: React.FC<IProps> = (props) => {
  const { route } = props

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
}

export default memo(TYDiscover)
