import React from 'react'
import { Redirect } from 'react-router-dom'

const Discover = React.lazy(() => import('../pages/discover'))
const Friend = React.lazy(() => import('../pages/friend'))
const Mine = React.lazy(() => import('../pages/mine'))
const Player = React.lazy(() => import('../pages/player'))
const Recommend = React.lazy(() => import('../pages/discover/recommend'))
const TopList = React.lazy(() => import('../pages/discover/top-list'))
const DjRadio = React.lazy(() => import('../pages/discover/dj-radio'))
const Artist = React.lazy(() => import('../pages/discover/artist'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: Recommend,
      },
      {
        path: '/discover/top-list',
        component: TopList,
      },
      {
        path: '/discover/dj-radio',
        component: DjRadio,
      },
      {
        path: '/discover/top-list',
        component: TopList,
      },
      {
        path: '/discover/artist',
        component: Artist,
      },
    ],
  },
  {
    path: '/mine',
    component: Mine,
  },
  {
    path: '/player',
    component: Player,
  },
  {
    path: '/friend',
    component: Friend,
  },
]

export default routes