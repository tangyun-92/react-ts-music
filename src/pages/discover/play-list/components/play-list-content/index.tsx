/*
 * @Author: 唐云
 * @Date: 2021-02-27 23:43:15
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 10:22:27
 * 歌单内容组件
 */
import React, { memo } from 'react'
import { connect, useDispatch } from 'react-redux'

import { PlayListContentWrapper } from './style'
import SongsCover from 'src/components/SongsCover'
import TYPagination from 'src/components/TYPagination'
import {
  changeCurrentPageAction,
  getClassifySongsAction,
} from '../../store/actionCreators'
import { IClassifySong } from '../../store/data'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  classifySongs: state.playList.classifySongs,
  currentPage: state.playList.currentPage,
  pageSize: state.playList.pageSize,
})

interface IPlayListContent {
  classifySongs: IClassifySong
  currentPage: number
  pageSize: number
}

const PlayListContent: React.FC<IPlayListContent> = (
  props: IPlayListContent
) => {
  const { classifySongs, currentPage, pageSize } = props
  const dispatch = useDispatch()

  /**
   * other handles
   */
  const classifyList = classifySongs.playlists || []
  const total = classifySongs.total || 0

  /**
   * other methods
   */
  const onPageChange = (page?: any, pageSize?: number) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(getClassifySongsAction({
      limit: pageSize,
      offset: page
    }))
  }

  return (
    <PlayListContentWrapper>
      <div className="list">
        {classifyList.map((item, index) => {
          return (
            <div key={item.id}>
              <SongsCover
                key={item.id}
                list={item}
                right={'10px'}
                bottom={'4px'}
              />
            </div>
          )
        })}
      </div>
      <div className="pagination">
        <TYPagination
          currentPage={currentPage}
          pageSize={pageSize}
          total={total}
          onPageChange={onPageChange}
        />
      </div>
    </PlayListContentWrapper>
  )
}

export default connect(mapStateToProps)(memo(PlayListContent))