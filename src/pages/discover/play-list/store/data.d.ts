import { IRecommendType } from "../../recommend/store/data";

interface ISubs {
  name: string
}
export interface IPlayListClassify {
  name: string
  subs: ISubs[]
}

export interface IClassifySong {
  playlists?: IRecommendType[]
  total?: number
}

export interface IPlayListStateType {
  playListClassify: IPlayListClassify[]
  currentClassify: string
  classifySongs: IClassifySong
  currentPage: number
  pageSize: number
}