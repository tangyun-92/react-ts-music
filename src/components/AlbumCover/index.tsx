/*
 * @Author: 唐云 
 * @Date: 2021-02-20 23:11:07 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-12 14:55:12
 * 专辑封面组件
 */
import React, { memo } from 'react'

import { AlbumWrapper } from './style'
import { getSizeImage } from '../../utils/format-utils'
import { INewAlbums } from '../../pages/discover/recommend/store/data.d'
import { connect } from 'react-redux'

interface IAlbumCoverProps {
  size?: string
  width?: string
  bgp?: string
  info: INewAlbums
}

const AlbumCover: React.FC<IAlbumCoverProps> = (props) => {
  /**
   * state and props
   */
  const { info, size = '100px', width = '118px', bgp = '-570px' } = props

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <a href="/abc" className="cover sprite_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
}

export default connect()(memo(AlbumCover))