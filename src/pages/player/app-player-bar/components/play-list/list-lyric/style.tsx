import styled from 'styled-components';

export const ListLyricWrapper = styled.div`
  width: 428px;
  height: 260px;
  padding: 20px;
  color: #989898;
  z-index: 2;
  position: relative;
  flex: 1;
  margin: 0 0 20px 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .lyric-content {
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`