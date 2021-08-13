import request from '../../services/request'

/**
 * 获取某首歌曲详情
 * @param {*} ids 歌曲id
 */
export function getSongDetail(ids: number) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

/**
 * 获取指定歌曲的歌词
 * @param {*} id 歌曲id
 */
export function getLyric(id: number) {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  })
}

/**
 * 获取歌单详情
 * @param {*} id 歌单id
 */
export function getPlayListDetail(id: number) {
  return request({
    url: '/playlist/detail',
    params: {
      id,
    },
  })
}