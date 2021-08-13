import styled from 'styled-components'

export const SongsWrapper = styled.div`
  width: 553px;
  height: 260px;
  color: #aaa;
  z-index: 2;
`

export const NoSongsWrapper = styled.div`
  padding-top: 85px;
  text-align: center;
  line-height: 43px;

  .link {
    color: #aaa;
    cursor: pointer;
    text-decoration: underline;
  }

  .icon {
    display: inline-block;
    width: 36px;
    height: 29px;
    background-position: -138px 0;
    vertical-align: middle;
    position: relative;
    top: -4px;
    right: 5px;
  }
`

export const HaveSongsWrapper = styled.div`
  padding: 5px 0 0 3px;
  height: 250px;
  overflow: auto;

  .song-list {
    display: flex;
    align-items: center;
    height: 28px;
    cursor: pointer;

    &:hover {
      background-color: #000;

      .song-opera .opera {
        display: flex;
      }
    }

    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: '';
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require('../../../../../../assets/img/playlist_sprite.png').default}) -182px 0;
      }
    }

    .song-play {
      width: 20px;
    }

    .song-name {
      width: 260px;
      margin-right: 6px;
    }

    .song-opera {
      width: 86px;
      display: flex;
      margin-right: 10px;

      .opera {
        display: none;

        .btn {
          width: 16px;
          height: 16px;
          margin-left: 7px;
          cursor: pointer;
        }

        .collect {
          background-position: -24px 0;

          &:hover {
            background-position: -24px -20px;
          }
        }

        .share {
          background-position: 0 0;

          &:hover {
            background-position: 0 -20px;
          }
        }

        .download {
          background-position: -57px -50px;

          &:hover {
            background-position: -80px -50px;
          }
        }

        .del {
          background-position: -51px 0;

          &:hover {
            background-position: -51px -20px;
          }
        }
      }
    }

    .singer {
      width: 74px;
      margin-right: 6px;
    }

    .song-time {
      width: 35px;
    }

    .song-from {
      width: 37px;
      text-align: right;

      .from-icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-position: -80px 0;
      }
    }
  }
`
