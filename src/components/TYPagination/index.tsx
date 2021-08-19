import React, { memo } from 'react'

import { Pagination } from 'antd'

import { TYPaginationWrapper } from './style'
import { connect } from 'react-redux'

/**
 * 映射redux全局state到组件props上
 */
const mapStateToProps = (state: any) => ({
  topBanners: state.recommend.topBanners,
})

interface IPagination {
  currentPage: number
  total: number
  onPageChange: (page?: number, pageSize?: number) => void
  pageSize: number
}

const TYPagination: React.FC<IPagination> = (props: IPagination) => {
  /**
   * state and props
   */
  const { currentPage, total, onPageChange, pageSize } = props

  /**
   * other methods
   */
  function itemRender(current: any, type: string, originalElement: any) {
    if (type === 'prev') {
      return <span className="page-btn prev sprite_button2">上一页</span>
    }
    if (type === 'next') {
      return <span className="page-btn next sprite_button2">下一页</span>
    }
    return originalElement
  }

  return (
    <TYPaginationWrapper>
      <Pagination
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </TYPaginationWrapper>
  )
}

export default connect(mapStateToProps)(memo(TYPagination))
