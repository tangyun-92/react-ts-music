import styled from 'styled-components'

export const SongListWrapper = styled.div`
  padding: 0 30px 40px 40px;

  .song-list-title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 2px solid #c20c0c;

    .left {
      display: flex;
      align-items: baseline;

      .name {
        font-size: 20px;
      }

      .num {
        color: #666;
        margin: 0 0 0 20px;
      }
    }

    .right {
      color: #666;
      span {
        color: #c20c0c;
        font-weight: bold;
      }
    }
  }
`
