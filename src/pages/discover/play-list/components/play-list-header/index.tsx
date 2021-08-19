/*
 * @Author: 唐云
 * @Date: 2021-02-27 23:43:46
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 10:06:42
 * 歌单头部组件
 */
import React, { memo, useEffect, useState } from 'react'

import { PlayListHeaderWrapper } from './style'
import {
  getPlayListClassifyAction,
  changeCurrentClassify,
  getClassifySongsAction,
  changeCurrentPageAction,
} from '../../store/actionCreators'
import { connect, useDispatch } from 'react-redux'
import { IPlayListClassify } from '../../store/data.d'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  playListClassify: state.playList.playListClassify,
  currentClassify: state.playList.currentClassify,
  pageSize: state.playList.pageSize,
})

interface IPlayListHeader {
  playListClassify: IPlayListClassify[]
  currentClassify: string
  pageSize: number
}

const PlayListHeader: React.FC<IPlayListHeader> = (props: IPlayListHeader) => {
  /**
   * state and props
   */
  const { playListClassify, currentClassify, pageSize } = props
  const [showClassify, setShowClassify] = useState(false)
  const [order, setOrder] = useState('最新')
  const dispatch = useDispatch()

  /**
   * other hooks
   */
  useEffect(() => {
    dispatch(getPlayListClassifyAction())
  }, [dispatch])
  useEffect(() => {
    dispatch(getClassifySongsAction({}))
  }, [dispatch])

  /**
   * other methods
   */
  // 选择分类
  function checkClassify(name: string) {
    // 重置为选中第一页
    dispatch(changeCurrentPageAction(1))
    dispatch(changeCurrentClassify(name))
    dispatch(getClassifySongsAction({}))
    setShowClassify(false)
  }

  // 最新/最热
  const changeOrder = (order: string) => {
    if (order === '最新') {
      setOrder('热门')
      dispatch(getClassifySongsAction({
        limit: pageSize,
        offset: 1,
        order: 'new'
      }))
    } else {
      setOrder('最新')
      dispatch(
        getClassifySongsAction({
          limit: pageSize,
          offset: 1,
          order: 'hot',
        })
      )
    }
  }

  return (
    <PlayListHeaderWrapper>
      <div className="play-list-header">
        <div className="left">
          <span className="text">{currentClassify}</span>
          <button
            className="check sprite_button"
            onClick={(e) => setShowClassify(!showClassify)}
          >
            <i className="check-btn sprite_button">
              选择分类<em className="icon sprite_icon2"></em>
            </i>
          </button>
        </div>
        <span
          className="right-btn sprite_button2"
          onClick={(e) => changeOrder(order)}
        >
          {order}
        </span>
      </div>
      {showClassify ? (
        <div className="play-list-dialog">
          <div className="hd">
            <i className="hd-icon sprite_icon"></i>
          </div>
          <div className="bd">
            <div className="all">
              <span
                className="all-btn sprite_button2 link"
                onClick={(e) => checkClassify('全部')}
              >
                全部风格
              </span>
            </div>
            <dl className="item">
              {playListClassify && playListClassify.map((item, index) => {
                return (
                  <div key={item.name} className="item-con">
                    <dt className={'dt' + index}>
                      <i className="item-icon sprite_icon2"></i>
                      {item.name}
                    </dt>
                    <dd>
                      {item.subs.map((itemX) => {
                        return (
                          <span key={itemX.name}>
                            <span
                              className="item-text link"
                              onClick={(e) => checkClassify(itemX.name)}
                            >
                              {itemX.name}
                            </span>
                            <span className="line">|</span>
                          </span>
                        )
                      })}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      ) : null}
    </PlayListHeaderWrapper>
  )
}

export default connect(mapStateToProps)(memo(PlayListHeader))
