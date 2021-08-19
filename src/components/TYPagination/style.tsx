import styled from 'styled-components'

export const TYPaginationWrapper = styled.div`
  .page-btn {
    height: 24px;
    line-height: 24px;
    color: #333;
    text-align: left;
    padding: 0;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    font-size: 12px;
  }

  .prev {
    width: 69px;
    padding-left: 22px;
    background-position: 0 -560px;

    &:hover {
      background-position: 0 -590px;
    }
  }

  .next {
    width: 69px;
    padding-left: 12px;
    background-position: -75px -560px;

    &:hover {
      background-position: -75px -590px;
    }
  }

  .ant-pagination-item {
    min-width: 24px;
    height: 22px;
    padding: 0;
    background-color: #fff;
    line-height: 22px;
    font-size: 12px;
    border-radius: 2px;

    &:hover {
      border: 1px solid #a2161b;
    }
    
    &:hover a {
      color: #a2161b;
    }

    &.ant-pagination-item-active {
      background-color: #c20c0c;
      border-color: #a2161b;
      a {
        color: #fff;
      }
    }
  }
`