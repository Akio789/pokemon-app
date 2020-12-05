export interface PokemonData {
  name: string,
  url: string
}

export interface PokemonDataList {
  count: number,
  next: string,
  previous: string,
  results: Array<PokemonData>;
}

export interface PokemonDataListResponse {
  config: Object,
  data: PokemonDataList,
  headers: Object,
  request: Object,
  status: number,
  statusText: string
}