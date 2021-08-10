import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import { Spin, BackTop } from 'antd'

import TYHeader from '../src/components/Header/index'
import TYFooter from '../src/components/Footer/index'

import routes from '../src/router'

export default memo(function App() {
  return (
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
        {/* <TYAppPlayBar /> */}
        <BackTop />
      </HashRouter>
  )
})
