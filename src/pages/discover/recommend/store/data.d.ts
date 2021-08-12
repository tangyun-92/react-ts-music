export interface IRecommendType {
  alg: string
  canDislike: boolean
  copywriter: string
  highQuality: boolean
  id: number
  name: string
  picUrl: string
  playCount: number
  trackCount: number
  trackNumberUpdateTime: number
  type: number
}

export interface ITopBannerType {
  imageUrl: string
  typeTitle: string
}

export interface INewAlbums {
  id: number
  name: string
  picUrl: string
  artist: any
}


interface ITracks {
  id: number
  name: string
}
export interface ITopList {
  coverImgUrl?: string
  name?: string
  tracks?: ITracks[]
}

export interface IRecommendStateType {
  topBanners: ITopBannerType[]
  hotRecommendList: IRecommendType[]
  newAlbums: INewAlbums[]
  upRanking: ITopList
  newRanking: ITopList
  originRanking: ITopList
}
