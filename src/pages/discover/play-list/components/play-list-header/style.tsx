import styled from 'styled-components'

export const PlayListHeaderWrapper = styled.div`
  position: relative;

  .play-list-header {
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      .text {
        font-size: 24px;
      }

      .check {
        height: 31px;
        line-height: 31px;
        cursor: pointer;
        font-size: 12px;
        margin: 0 0 0 12px;
        padding: 0 5px 0 0;
        background-position: right -100px;

        &:hover {
          background-position: right -182px;
        }

        .check-btn {
          color: #0c73c2;
          padding: 0 10px 0 15px;
          background-position: 0 -59px;
          display: inline-block;

          &:hover {
            background-position: 0 -141px;
          }

          .icon {
            display: inline-block;
            margin: 0 0 0 5px;
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
          }
        }
      }
    }

    .right-btn {
      display: inline-block;
      width: 46px;
      height: 29px;
      line-height: 29px;
      text-align: center;
      cursor: pointer;
      background-position: 0 0;
      border-radius: 3px;
      color: #fff;
    }
  }

  .play-list-dialog {
    position: absolute;
    top: 44px;
    left: 0;
    width: 700px;
    z-index: 5;
    border: 1px solid #ccc;
    background-color: #fefefe;
    box-shadow: 0 0 10px 2px #d3d3d3;
    border-radius: 5px;
    padding: 0 20px 20px 0;

    .hd {
      height: 15px;

      .hd-icon {
        position: absolute;
        top: -10px;
        left: 95px;
        display: inline-block;
        width: 24px;
        height: 11px;
        background-position: -48px 0;
      }
    }

    .bd {
      width: 700px;
      padding: 0 30px;
      background-position: -720px 0;

      .all {
        height: 37px;
        padding-left: 26px;
        border-bottom: 1px solid #e6e6e6;

        .all-btn {
          width: 75px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          background-position: 0 -64px;
          display: inline-block;
        }
      }

      .item {
        .item-con {
          display: flex;
          flex-wrap: nowrap;
          align-items: flex-start;

          dt {
            width: 70px;
            font-weight: bold;
            padding-top: 15px;
            display: flex;
            align-items: center;

            .item-icon {
              margin: 0 8px 4px 0;
              display: inline-block;
              width: 23px;
              height: 23px;
            }
          }

          .dt0 i {
            background-position: -20px -735px;
          }

          .dt1 i {
            background-position: 0 -60px;
          }

          .dt2 i {
            background-position: 0 -88px;
          }

          .dt3 i {
            background-position: 0 -117px;
          }

          .dt4 i {
            background-position: 0 -141px;
          }

          dd {
            padding: 16px 15px 0 15px;
            line-height: 24px;
            flex: 1;
            border-left: 1px solid #e6e6e6;

            .item-text {
              white-space: nowrap;
              color: #333;
            }

            .line {
              margin: 0 8px 0 10px;
              color: #d8d8d8;
            }
          }
        }
      }
    }
  }
`
