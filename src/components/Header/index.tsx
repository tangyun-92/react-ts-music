/*
 * @Author: 唐云
 * @Date: 2021-02-18 15:41:47
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-10 17:18:30
 * 头部组件
 */
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import classnames from 'classnames'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import { headerLinks, IDataLink } from '../../common/local-data'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function TYHeader() {
  const showItem = (item: IDataLink, index: number) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          {item.title}
        </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className={classnames('select-item')} key={item.title}>
                  {showItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">
            创作者中心
          </div>
          <div className="login">
            登录
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
