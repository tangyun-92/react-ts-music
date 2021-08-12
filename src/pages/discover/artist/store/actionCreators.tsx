import * as actionTypes from './constants'

import { getHotArtists } from '../../../../api/discover/artist'
import { IArtistStateType } from './data.d'

const changeHotArtistAction = (data: IArtistStateType) => ({
  type: actionTypes.CHANGE_HOT_ARTIST,
  data,
})

/**
 * 热门歌手列表
 */
export const getHotArtistAction = (limit: number) => {
  return (dispatch: any) => {
    getHotArtists(limit).then((res: any) => {
      dispatch(changeHotArtistAction(res.artists))
    })
  }
}
