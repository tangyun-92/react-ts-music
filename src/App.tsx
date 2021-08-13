import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Spin, BackTop } from 'antd'
import { Provider } from 'react-redux'

import TYHeader from '../src/components/Header/index'
import TYFooter from '../src/components/Footer/index'
import TYAppPlayBar from '../src/pages/player/app-player-bar'

import routes from '../src/router'
import { store } from '../src/store'

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <TYHeader />
        <Suspense
          fallback={
            <div className="example">
              <Spin size="large" tip="Loading..." />
            </div>
          }
        >
          {renderRoutes(routes)}
        </Suspense>
        <TYFooter />
        <TYAppPlayBar />
        <BackTop />
      </HashRouter>
    </Provider>
  )
})
