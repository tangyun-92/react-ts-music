
export interface IHotArtistsType {
  id: number
  name: string
  picUrl: string
}

export interface IArtistStateType {
  hotArtists: IHotArtistsType[]
}