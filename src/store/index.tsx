import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'

import { rootReducer } from './reducer'

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage,
  // while: ['user'] 白名单
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// 使chrome中的react-devtools调试工具显示调试代码
const composeEnhancers = compose

export const store = createStore(
  // persistedReducer,
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

// export const persistor = persistStore(store)

// export default store

export type AppState = ReturnType<typeof rootReducer>