import styled from 'styled-components'

export const LeftListWrapper = styled.div`
  .content {
    margin: 40px 0 0 0;

    .list {
      position: relative;

      .title {
        color: #000;
        font-size: 14px;
        padding: 0 10px 12px 15px;
      }

      .title-media {
        position: absolute;
        top: 296px;
      }

      .item {
        padding: 10px 0 10px 20px;
        height: 62px;
        cursor: pointer;
        display: flex;

        &:nth-child(7) {
          margin: 50px 0 0 0;
        }

        &.active {
          background-color: #e6e6e6;
        }
        &:hover {
          background-color: #e6e6e6;
        }

        img {
          width: 40px;
          height: 40px;
          margin: 0 10px 0 0;
        }

        .info {
          .name {
            width: 150px;
            margin: 2px 0 6px;
          }

          .time {
            color: #999;
          }
        }
      }
    }
  }
`
