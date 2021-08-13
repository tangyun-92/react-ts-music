import React from 'react'
import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: React.lazy(() => import('../pages/discover')),
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: React.lazy(() => import('../pages/discover/recommend')),
      },
      {
        path: '/discover/top-list',
        component: React.lazy(() => import('../pages/discover/top-list')),
      },
      {
        path: '/discover/dj-radio',
        component: React.lazy(() => import('../pages/discover/dj-radio')),
      },
      {
        path: '/discover/artist',
        component: React.lazy(() => import('../pages/discover/artist')),
      },
    ],
  },
  {
    path: '/mine',
    component: React.lazy(() => import('../pages/mine')),
  },
  {
    path: '/player',
    component: React.lazy(() => import('../pages/player')),
  },
  {
    path: '/friend',
    component: React.lazy(() => import('../pages/friend')),
  },
]

export default routes