/*
 * @Author: 唐云
 * @Date: 2021-02-26 23:17:10
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 17:38:07
 * 歌曲列表组件
 */
import React, { memo } from 'react'

import { SongListWrapper } from './style'
import TYSongList from 'src/components/SongList/index'
import { connect } from 'react-redux'
import { ISongList, ITopDetail } from '../../store/data'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  topDetail: state.topList.topDetail,
  songList: state.topList.songList,
})

interface ISongListProps {
  topDetail: ITopDetail
  songList: ISongList[]
}

const TSongList: React.FC<ISongListProps> = (props: ISongListProps) => {
  const { topDetail, songList } = props

  return (
    <SongListWrapper>
      <div className="song-list-title">
        <div className="left">
          <div className="name">歌曲列表</div>
          <div className="num">{topDetail.trackCount}首歌</div>
        </div>
        <div className="right">
          播放：<span>{topDetail.playCount}</span>次
        </div>
      </div>
      <TYSongList list={songList} />
    </SongListWrapper>
  )
}

export default connect(mapStateToProps)(memo(TSongList))
