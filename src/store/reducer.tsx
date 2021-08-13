import { combineReducers } from 'redux'

// import { reducer as recommendReducer } from '../pages/discover/recommend/store'
import recommendReducer from '../pages/discover/recommend/store/reducer'
import anchorReducer from '../pages/discover/dj-radio/store/reducer'
import artistReducer from '../pages/discover/artist/store/reducer'
import playerReducer from '../pages/player/store/reducer'

export const rootReducer = combineReducers({
  recommend: recommendReducer, // 推荐
  anchor: anchorReducer, // 主播
  artist: artistReducer, // 歌手
  player: playerReducer, // 播放器
})