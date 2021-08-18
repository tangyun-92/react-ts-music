/*
 * @Author: 唐云
 * @Date: 2021-02-21 13:49:45
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-18 15:32:19
 * 榜单组件
 */
import React, { memo } from 'react'

import { connect, useStore } from 'react-redux'

import { TopRankingWrapper } from './style'
import { getSizeImage } from '../../utils/format-utils'
import { ITopList } from '../../pages/discover/recommend/store/data.d'
import { ICurrentSongType } from '../../pages/player/store/data.d'
import UseAddPlayList from '../../hooks/useAddPlayList'

interface ITopRanking {
  info: ITopList
}

const TopRanking: React.FC<ITopRanking> = (props: ITopRanking) => {
  /**
   * state and props
   */
  const {
    info,
  } = props
  const { tracks = [] } = info
  const store = useStore()

  /**
   * other methods
   */
  // 播放音乐
  const playMusic = (item: ICurrentSongType) => {
    UseAddPlayList({
      store,
      id: item.id,
    })
  }

  // 添加到播放列表
  const addToPlayList = (item: ICurrentSongType) => {
    UseAddPlayList({
      store,
      id: item.id,
      way: 'add'
    })
  }

  // 将榜单中所有歌曲添加到列表并播放
  const playAllMusic = () => {
    UseAddPlayList({
      store,
      songs: info.tracks
    })
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button
              className="btn play sprite_02"
              onClick={(e) => playAllMusic()}
            ></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks &&
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button
                      className="btn sprite_02 play"
                      onClick={(e) => playMusic(item)}
                    ></button>
                    <button
                      className="btn sprite_icon2 addto"
                      onClick={(e) => addToPlayList(item)}
                    ></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
}

export default connect()(memo(TopRanking))
