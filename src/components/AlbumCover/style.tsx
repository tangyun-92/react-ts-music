import styled from 'styled-components'

interface IWrapper {
  width?: string
  size?: string
  bgp?: string
}

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${(props: IWrapper) => props.width};
    height: ${(props: IWrapper) => props.size};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props: IWrapper) => props.size};
      height: ${(props: IWrapper) => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props: IWrapper) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props: IWrapper) => props.size};
    .name {
      color: #000;
    }

    .artist {
      color: #666;
    }
  }
`
