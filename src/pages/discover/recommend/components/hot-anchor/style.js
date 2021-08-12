import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  width: 250px;
  height: 294px;
  padding: 0 20px;
  margin: 30px 0 0 0;

  .content {
    .anchor-top {
      width: 100%;
      height: 23px;
      border-bottom: 1px solid #ccc;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-weight: bold;
      }
    }

    .anchor-list {
      width: 210px;

      .item {
        height: 40px;
        margin: 10px 0 0 0;
        cursor: pointer;
        
        a {
          display: flex;
          text-decoration: none;

          .img {
            width: 40px;
            height: 40px;
            margin: 0 10px 0 0;

            img {
              width: 40px;
              height: 40px;
            }
          }

          .right {
            width: 160px;
            line-height: 21px;

            .name {
              width: 100%;
              color: #000;
            }

            .info {
              color: #666;
            }
          }
        }
      }
    }
  }
`
