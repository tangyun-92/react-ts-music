/*
 * @Author: 唐云 
 * @Date: 2021-08-18 16:50:41 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 09:21:08
 * 排行榜
 */
import React, { memo } from 'react'

import { TopListWrapper, Content, TopListLeft, TopListRight } from './style'
import LeftList from './components/left-list/index'
import ListDetail from './components/list-detail/index'
import SongList from './components/song-list/index'
import CommentList from './components/comment-list/index'

export default memo(function TYTopList() {
  return (
    <TopListWrapper>
      <Content className="wrap-v2">
        <TopListLeft>
          <LeftList />
        </TopListLeft>
        <TopListRight>
          <ListDetail />
          <SongList />
          <CommentList />
        </TopListRight>
      </Content>
    </TopListWrapper>
  )
})
