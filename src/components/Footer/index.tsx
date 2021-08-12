/*
 * @Author: 唐云
 * @Date: 2021-02-18 15:41:14
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-08-11 09:35:02
 * 底部组件
 */
import React, { memo, Fragment } from 'react'

import { FooterWrapper, FooterLeft, FooterRight } from './style'
import { footerLinks, footerImages, IDataLink } from '../../common/local-data'

export default memo(function TYFooter() {
  return (
    <FooterWrapper>
      <div className="content wrap-v2">
        <FooterLeft>
          <div className="footer-item">
            {footerLinks.map((item: IDataLink) => {
              return (
                <Fragment key={item.title}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                  <span>|</span>
                </Fragment>
              )
            })}
          </div>
          <ul>
            <li>
              网易公司版权所有©️1997-2021
              杭州乐读科技有限公司运营：浙网文[2018]3506-263号
            </li>
            <li>
              违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com
            </li>
            <li>
              粤B2-20090191-18 工业和信息化部备案管理系统网站 浙公安备
              2201902002564号
            </li>
          </ul>
        </FooterLeft>
        <FooterRight>
          {footerImages.map((item: IDataLink) => {
            return (
              <li className="item" key={item.link}>
                <a
                  className="link"
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {' '}
                </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })}
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
