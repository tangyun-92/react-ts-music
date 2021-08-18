import styled from 'styled-components'

export const ListDetailWrapper = styled.div`
  padding: 40px;
  display: flex;

  .detail-left {
    width: 158px;
    height: 158px;
    padding: 3px;
    border: 1px solid #ccc;

    img {
      width: 150px;
      height: 150px;
    }
  }

  .detail-right {
    margin: 20px 0 0 30px;

    .name {
      font-size: 20px;
      line-height: 24px;
    }

    .time {
      margin: 0 0 20px;
      line-height: 35px;
      color: #666;
      display: flex;
      align-items: center;

      .icon {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        margin: 0 6px 0 0;
      }
    }

    .opera {
      display: flex;

      .btn {
        height: 31px;
        line-height: 31px;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        padding: 0 5px;
        margin: 0 5px 0 0;
      }

      .play {
        color: #fff;
        background-position: right -428px;
        padding: 0 5px 0 0;

        &:hover {
          background-position: right -510px;
        }

        .play-btn {
          padding: 0 7px 0 8px;
          background-position: 0 -387px;
          display: flex;

          &:hover {
            background-position: 0 -469px;
          }

          .play-icon {
            display: inline-block;
            width: 20px;
            height: 18px;
            background-position: 0 -1622px;
            margin: 6px 2px 2px 0;

            &:hover {
              background-position: -28px -1622px;
            }
          }
        }
      }

      .add {
        width: 31px;
        background-position: 0 -1588px;
        margin: 0 0 0 -15px;

        &:hover {
          background-position: -40px -1588px;
        }
      }

      .collect {
        background-position: right -1020px;

        &:hover {
          background-position: right -1106px;
        }

        .collect-icon {
          display: inline-block;
          background-position: 0 -977px;
          padding: 0 2px 0 28px;

          &:hover {
            background-position: 0 -1063px;
          }
        }
      }

      .share {
        background-position: right -1020px;

        &:hover {
          background-position: right -1106px;
        }

        .share-icon {
          display: inline-block;
          background-position: 0 -1225px;
          padding: 0 2px 0 28px;

          &:hover {
            background-position: 0 -1268px;
          }
        }
      }

      .download {
        background-position: right -1020px;

        &:hover {
          background-position: right -1106px;
        }

        .download-icon {
          display: inline-block;
          background-position: 0 -2761px;
          padding: 0 2px 0 28px;

          &:hover {
            background-position: 0 -2805px;
          }
        }
      }

      .comment {
        background-position: right -1020px;

        &:hover {
          background-position: right -1106px;
        }

        .comment-icon {
          display: inline-block;
          background-position: 0 -1465px;
          padding: 0 2px 0 28px;

          &:hover {
            background-position: 0 -1508px;
          }
        }
      }
    }
  }
`