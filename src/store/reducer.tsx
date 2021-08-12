import { combineReducers } from 'redux'

// import { reducer as recommendReducer } from '../pages/discover/recommend/store'
import recommendReducer from '../pages/discover/recommend/store/reducer'

export const rootReducer = combineReducers({
  recommend: recommendReducer, // 推荐
})