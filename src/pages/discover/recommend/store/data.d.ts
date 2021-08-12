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

export interface IRecommendStateType {
  topBanners: ITopBannerType[]
  hotRecommendList: IRecommendType[]
  // enterLoading: boolean
}
