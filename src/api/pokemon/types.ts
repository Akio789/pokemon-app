export interface Response {
  config: Object;
  headers: Object;
  request: Object;
  status: number;
  statusText: string;
}

export interface PokemonData {
  name: string;
  url: string;
}

export interface PokemonDataList {
  count: number;
  next: string;
  previous: string;
  results: Array<PokemonData>;
}

export interface PokemonDataListResponse extends Response {
  data: PokemonDataList;
}

export interface PokemonDetailDataSprites {
  front_default: string;
  back_default: string;
}

export interface PokemonDetailData {
  sprites: PokemonDetailDataSprites;
  species: PokemonData;
}

export interface PokemonDetailDataResponse extends Response {
  data: PokemonDetailData;
}