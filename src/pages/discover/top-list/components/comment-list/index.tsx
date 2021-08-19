/*
 * @Author: 唐云 
 * @Date: 2021-02-26 23:17:10 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-19 09:22:28
 * 评论组件
 */
import React, { memo } from 'react'
import { connect } from 'react-redux'

const CommentList: React.FC<{}> = () => {
  return <div>CommentList</div>
}

export default connect()(memo(CommentList))
