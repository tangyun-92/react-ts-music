import produce from 'immer'
import * as actionTypes from './constants'
import { IArtistStateType } from './data.d'

const defaultState: IArtistStateType = {
  hotArtists: [], // 热门歌手列表
}

function reducer(state = defaultState, action: any) { 
  return produce(state, (draft) => {
    switch (action.type) {
      case actionTypes.CHANGE_HOT_ARTIST:
        return void(draft.hotArtists = action.data)
      default:
        return state
    }
  })
 }

 export default reducer