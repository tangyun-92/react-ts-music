/*
 * @Author: 唐云
 * @Date: 2021-02-27 17:03:45
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 17:37:14
 * 歌曲列表组件
 */
import React, { memo } from 'react'

import { SongListWrapper } from './style'
import { getSizeImage, formatMinuteSecond } from 'src/utils/format-utils'
import { connect, useStore } from 'react-redux'
import { ISongList } from 'src/pages/discover/top-list/store/data'
import UseAddPlayList from 'src/hooks/useAddPlayList'

interface ISongListProps {
  list: ISongList[]
}

const SongList: React.FC<ISongListProps> = (props: ISongListProps) => {
  /**
   * state and props
   */
  const { list } = props
  const store = useStore()

  /**
   * other methods
   */
  const playMusic = (id: number) => {
    UseAddPlayList({
      store,
      id
    })
  }

  return (
    <SongListWrapper>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {list && list.map((item, index) => {
              return (
                <tr className="" key={item.id}>
                  <td>
                    <div className="rank-num">
                      <span className="num">{index + 1}</span>
                      <span className="new sprite_icon2"></span>
                    </div>
                  </td>
                  <td>
                    <div className="song-name">
                      {index < 3 ? (
                        <img src={getSizeImage(item.al.picUrl, 50)} alt="" />
                      ) : null}
                      <span
                        className="play sprite_table"
                        onClick={(e) => playMusic(item.id)}
                      ></span>
                      <span className="name">{item.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item.dt)}</td>
                  <td>{item.ar[0].name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </SongListWrapper>
  )
}

export default connect()(memo(SongList))