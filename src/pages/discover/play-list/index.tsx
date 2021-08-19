/*
 * @Author: 唐云
 * @Date: 2021-02-19 15:02:21
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 10:07:47
 * 歌单
 */
import React, { memo } from 'react'

import { PlayListWrapper, Content } from './style'
import PlayListHeader from './components/play-list-header/index'
import PlayListContent from './components/play-list-content'

export default memo(function TYPlayList() {
  return (
    <PlayListWrapper className="wrap-v2">
      <Content>
        <PlayListHeader />
        <PlayListContent />
      </Content>
    </PlayListWrapper>
  )
})
