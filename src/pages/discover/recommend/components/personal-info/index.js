/*
 * @Author: 唐云
 * @Date: 2021-02-24 21:43:22
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-02-24 21:56:49
 * 个人信息
 */
import React, { memo } from 'react'

import { PersonalInfoWrapper } from './style'

export default memo(function PersonalInfo() {
  return (
    <PersonalInfoWrapper>
      <div className="n-content sprite_02">
        <div className="info">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
        <button className="login sprite_02">用户登录</button>
      </div>
    </PersonalInfoWrapper>
  )
})
