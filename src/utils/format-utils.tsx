/**
 * 数量格式化
 * @param {*} count 需要格式化的数据
 */
export function getCount(count: number) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

/**
 * 更改图片尺寸
 * @param {*} imgUrl 图片地址
 * @param {*} size 图片尺寸
 */
export function getSizeImage(imgUrl: string | undefined, size: number) {
  return `${imgUrl}?param=${size}x${size}`
}

/**
 * 时间格式化
 * @param {*} time 需要格式的时间
 * @param {*} fmt 格式
 */
export function formatDate(time: number, fmt: string) {
  let date = new Date(time)

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  let o: any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      )
    }
  }
  return fmt
}

function padLeftZero(str: string) {
  return ('00' + str).substr(str.length)
}

/**
 * 月份格式化
 * @param {*} time 时间
 */
export function formatMonthDay(time: number) {
  return formatDate(time, 'MM月dd日')
}

/**
 * 分钟秒数格式化
 * @param {*} time 
 */
export function formatMinuteSecond(time: number) {
  return formatDate(time, 'mm:ss')
}

/**
 * 获取播放歌曲的链接
 * @param {*} id id
 */
export function getPlaySong(id: string) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

/**
 * 对象转数组
 * @param {*} obj 
 */
interface IObjectToArray {
  value: string
  label: string
}
export function objectToArray(obj: IObjectToArray) {
  const arr: IObjectToArray[] = []
  for (const [key, val] of Object.entries(obj)) {
    const newObj: IObjectToArray = { value: '', label: ''}
    newObj.value = key
    newObj.label = val
    arr.push(newObj)
  }
  return arr
}