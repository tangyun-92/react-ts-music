export interface IPlayListType {
  id: number
  name: string
  ar?: any
  dt: number
}
export interface ICurrentSongType {
  id?: any
  al?: any
  ar?: any
  dt?: number
  name?: string
}

export interface ILyricListType {
  time: number
  content: string
}

export interface IPlayerStateType {
  playList: IPlayListType[]
  currentSong: ICurrentSongType
  currentSongIndex: number
  sequence: number
  lyricList: ILyricListType[]
  currentLyricIndex: number
  isPlayList: boolean
}