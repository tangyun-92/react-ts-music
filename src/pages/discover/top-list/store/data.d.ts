export interface ICloudMusicTopList {
  id: number
  coverImgUrl: string
  name: string
  updateFrequency: number
}
export interface ITopDetail {
  coverImgUrl?: string
  updateTime?: any
  id?: any
  name?: string
  subscribedCount?: number
  shareCount?: number
  commentCount?: number
  tracks?: any
  trackCount?: number
  playCount?: number
}
export interface ISongList {
  id: number
  al: any
  name: string
  dt: number
  ar: any
}


export interface ITopListStateType {
  cloudMusicTopList: ICloudMusicTopList[]
  topDetail: ITopDetail
  songList: ISongList[]
}