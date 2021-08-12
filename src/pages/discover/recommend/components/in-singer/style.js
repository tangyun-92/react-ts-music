import styled from 'styled-components'

export const InSingerWrapper = styled.div`
  width: 250px;
  height: 455px;
  padding: 0 20px;
  margin-top: 15px;

  .content {
    .in-singer-top {
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

    .list {
      .list-item {
        margin-top: 14px;
        width: 210px;
        height: 62px;
        background-color: #fafafa;
        display: flex;

        &:hover {
          text-decoration: none;
          background-color: #f4f4f4;
        }

        .img {
          width: 62px;
          height: 62px;
          object-fit: cover;
        }

        .item-right {
          width: 153px;
          height: 62px;
          padding-left: 14px;
          border: 1px solid #e9e9e9;

          .artist-name {
            font-weight: bold;
            font-size: 14px;
            margin: 8px 0;
          }

          .artist-intro {
            width: 90%;
            color: #666;
          }
        }
      }
    }

    .btn {
      width: 210px;
      height: 31px;
      color: #333;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
      display: inline-block;
      margin: 0 auto;
      border: 1px solid #ccc;
      margin: 14px 0 0 0;
    }
  }
`